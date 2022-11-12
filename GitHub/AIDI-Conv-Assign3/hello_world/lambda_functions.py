# -*- coding: utf-8 -*-

# This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK for Python.
# Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
# session persistence, api calls, and more.
# This sample is built using the handler classes approach in skill builder.
import os
import boto3
import logging
import ask_sdk_core.utils as ask_utils
from ask_sdk_model.interfaces.alexa.presentation.apl import (RenderDocumentDirective)

from ask_sdk.standard import StandardSkillBuilder
from ask_sdk_dynamodb.adapter import DynamoDbAdapter
from ask_sdk_core.handler_input import HandlerInput
from ask_sdk_core.skill_builder import SkillBuilder, CustomSkillBuilder
from ask_sdk_core.dispatch_components import AbstractRequestHandler, AbstractRequestInterceptor, \
    AbstractResponseInterceptor, AbstractExceptionHandler
from ask_sdk_model import Response

from visitor import Visitor
from GuessLifeSpanFunctions import *

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)

# SEE: https://developer.amazon.com/de-DE/docs/alexa/hosted-skills/alexa-hosted-skills-session-persistence.html
ddb_region = os.environ.get('DYNAMODB_PERSISTENCE_REGION')
ddb_table_name = os.environ.get('DYNAMODB_PERSISTENCE_TABLE_NAME')

ddb_resource = boto3.resource('dynamodb', region_name=ddb_region)
dynamodb_adapter = DynamoDbAdapter(table_name=ddb_table_name, create_table=False, dynamodb_resource=ddb_resource)


class LaunchRequestHandler(AbstractRequestHandler):
    def can_handle(self, handler_input):
        return ask_utils.is_request_type("LaunchRequest")(handler_input)

    def handle(self, handler_input):
        # speak_output = '<say-as interpret-as="interjection">achoo!</say-as><break time="1s"/>'
        # speak_output += '<sub alias="hi">Hello</sub>, this is Alexa talking robot. Say Hello to me. '  # <audio src"soundbank://soundlibrary/human/amzn_sfx_crowd_applause_01"/>
        # speak_output = f"<speak>" \
        #                     f'<audio src="soundbank://soundlibrary/home/amzn_sfx_doorbell_chime_02"/>' \
        #                     # f'<say-as interpret-as="interjection">Wow.</say-as>.'\
        #                     # f'<voice name="Brian"><lang xml:lang="en-GB">Welcom to my Alexa Talking Bot. </lang></voice>' \
        #                     # f'<audio src="soundbank://soundlibrary/boats_ships/airboat/airboat_07"/>' \
        #                     # f'<amazon:effect name="excited">Please say hello to me.</amazon:effect>.' \
        #                 f"</speak>"

        speak_output = f'<speak> ' \
                       f'<say-as interpret-as="interjection">Wow.</say-as>.' \
                       f'<audio src="soundbank://soundlibrary/home/amzn_sfx_doorbell_chime_02"/>' \
                       f'<voice name="Brian"><lang xml:lang="en-GB">Welcom to my Alexa Talking Bot. Please say hello to me. </lang></voice>' \
                       f'</speak>'

        return (handler_input.response_builder.speak(speak_output).ask(speak_output).response)


class HelloIntentHandler(AbstractRequestHandler):
    def can_handle(self, handler_input):
        return (ask_utils.is_request_type("IntentRequest")(handler_input) and ask_utils.is_intent_name("HelloIntent")(
            handler_input))

    def handle(self, handler_input):
        usr_name = ask_utils.request_util.get_slot(handler_input, "name").value

        session_attributes = handler_input.attributes_manager.session_attributes
        session_attributes["name"] = usr_name
        visitors = session_attributes["visitors"]
        usr = Visitor.get_usr_dict(visitors, usr_name)
        session_attributes["cur_visitor"] = usr

        speak_output = f"<speak>"
        if usr["visits"] == 0:
            speak_output += f"Welcome to our game, %s. " % usr_name
        else:
            speak_output += f"Welcome back to our game, %s! " % usr_name
        speak_output += '<amazon:emotion name="excited" intensity="medium">'
        speak_output += "Let's guess some of longest life spans species in the world. See how many you can get! Would you like to play?."
        speak_output += '</amazon:emotion>'
        speak_output += "</speak>"
        return (handler_input.response_builder.speak(speak_output).ask(speak_output).response)


class LifeSpanAskHandler(AbstractRequestHandler):
    def can_handle(self, handler_input):
        return (ask_utils.is_request_type("IntentRequest")(handler_input) and ask_utils.is_intent_name(
            "AMAZON.YesIntent")(handler_input))

    def handle(self, handler_input):
        session_attributes = handler_input.attributes_manager.session_attributes
        vt = Visitor(session_attributes["cur_visitor"])
        item = vt.update_cur_species()
        session_attributes["cur_visitor"] = vt.usr

        speak_output = "How old is the longest life span %s?" % item["species"]
        return (handler_input.response_builder.speak(speak_output).ask(speak_output).response)


class LifeSpanGuessHandler(AbstractRequestHandler):
    def can_handle(self, handler_input):
        return (ask_utils.is_request_type("IntentRequest")(handler_input) and ask_utils.is_intent_name(
            "GuessNumberIntent")(handler_input))

    def handle(self, handler_input):
        life_span = ask_utils.request_util.get_slot(handler_input, "life_span").value

        session_attributes = handler_input.attributes_manager.session_attributes
        vt = Visitor(session_attributes["cur_visitor"])
        vt.update_status_after_game_play()
        session_attributes["cur_visitor"] = vt.usr

        visitors = session_attributes["visitors"]
        usr_name = session_attributes["name"]
        if usr_name not in visitors:
            visitors = {usr_name: [vt.usr]}
        else:
            visitors[usr_name].append(vt.usr)

        if vt.is_correct(life_span):
            speak_output = "Congratulations. "
        else:
            speak_output = "Sorry. "
        speak_output += vt.comment
        speak_output += " Would you like to play again?"
        return (handler_input.response_builder.speak(speak_output).ask(speak_output).response)


# class GuessPriceHandler(AbstractRequestHandler):
#     """Handler for Skill Launch."""
#     def can_handle(self, handler_input):
#         return (ask_utils.is_request_type("IntentRequest")(handler_input) and ask_utils.is_intent_name("AMAZON.YesIntent")(handler_input))
#
#     def handle(self, handler_input):
#         jobj = requests.get("https://api.coinbase.com/v2/prices/spot?currency=USD")  # {"data":{"base":"BTC","currency":"USD","amount":"21215.48"}}
#         speak_output = str(jobj)
#         return (handler_input.response_builder
#                 .speak(speak_output)
#                 .ask(speak_output)
#                 .response
#         )
#
# class GuessNumberIntentHandler(AbstractRequestHandler):
#     """Handler for Guess Number"""
#     def can_handle(self, Handler_output):
#         return ask_utils.is_request_type("GuessNumberIntent")(handler_input)
#
#     def handle(self, handler_input):
#         data = requests.get("https://api.coinbase.com/v2/prices/spot?currency=USD")  # {"data":{"base":"BTC","currency":"USD","amount":"21215.48"}}
#         data = json.loads(data.text)
#         bitcoin_price = data["data"]["amount"]
#         slots = handler_input.request_envelope.request.intent.slots
#         guess = ask_utils.request_util.get_slot(handler_input, "guess")
#
#         speak_output = 'The current price of bitcoin is $%d. You guessed $%d' % (bitcoin_price, str(guess.value))
#
#         if abs(float(bitcoin_price) - float(guess.value)) < 100:
#             speak_output += 'You win! <audio src"soundbank://soundlibrary/human/amzn_sfx_crowd_applause_01"/>'
#         else:
#             speak_output += 'You lose. <audio src="soundbank://soundlibrary/human/amzn_sfx_crowd_boo_01"/>'
#         speak_output += 'Did you want to play again?'
#
#         return (
#             # handler_input.response_builder
#             #     .speak(speak_output)
#             #     .ask(speak_output)
#             #     .response
#         )


# attr = hander_input.attributes_manager.persistent_attributes
# if not attr:
#     attr["counter"] = 0
#     attr["name"] = "?"
# attr["counter"] += 1
# speak_output += 'Hello {}, welcome to the Bitcoin pricing game. What do you think the current price it is? you have played {} times'.format(attr['name'],attr['counter'])
# handler_input.attributes_manager.session_attributes = attr
# handler_input.attributes_manager.save_persistent_attributes()

# # # speak_output = "Welcome, you can say Hello or Help. Which would you like to try?"

class HelloWorldIntentHandler(AbstractRequestHandler):
    """Handler for Hello World Intent."""

    def can_handle(self, handler_input):
        # type: (HandlerInput) -> bool
        return ask_utils.is_intent_name("HelloWorldIntent")(handler_input)

    def handle(self, handler_input):
        # type: (HandlerInput) -> Response
        speak_output = "Hello World!"

        return (
            handler_input.response_builder
            .speak(speak_output)
            # .ask("add a reprompt if you want to keep the session open for the user to respond")
            .response
        )


class HelpIntentHandler(AbstractRequestHandler):
    """Handler for Help Intent."""

    def can_handle(self, handler_input):
        # type: (HandlerInput) -> bool
        return ask_utils.is_intent_name("AMAZON.HelpIntent")(handler_input)

    def handle(self, handler_input):
        # type: (HandlerInput) -> Response
        speak_output = "You can say hello to me! How can I help?"

        return (
            handler_input.response_builder
            .speak(speak_output)
            .ask(speak_output)
            .response
        )


class CancelOrStopIntentHandler(AbstractRequestHandler):
    """Single handler for Cancel and Stop Intent."""

    def can_handle(self, handler_input):
        # type: (HandlerInput) -> bool
        return (ask_utils.is_intent_name("AMAZON.CancelIntent")(handler_input) or
                ask_utils.is_intent_name("AMAZON.StopIntent")(handler_input))

    def handle(self, handler_input):
        # type: (HandlerInput) -> Response
        speak_output = "Goodbye!"

        return (
            handler_input.response_builder
            .speak(speak_output)
            .response
        )


class FallbackIntentHandler(AbstractRequestHandler):
    """Single handler for Fallback Intent."""

    def can_handle(self, handler_input):
        # type: (HandlerInput) -> bool
        return ask_utils.is_intent_name("AMAZON.FallbackIntent")(handler_input)

    def handle(self, handler_input):
        # type: (HandlerInput) -> Response
        logger.info("In FallbackIntentHandler")
        speech = "Hmm, I'm not sure. You can say Hello or Help. What would you like to do?"
        reprompt = "I didn't catch that. What can I help you with?"

        return handler_input.response_builder.speak(speech).ask(reprompt).response


class SessionEndedRequestHandler(AbstractRequestHandler):
    """Handler for Session End."""

    def can_handle(self, handler_input):
        # type: (HandlerInput) -> bool
        return ask_utils.is_request_type("SessionEndedRequest")(handler_input)

    def handle(self, handler_input):
        # type: (HandlerInput) -> Response

        # Any cleanup logic goes here.

        return handler_input.response_builder.response


class IntentReflectorHandler(AbstractRequestHandler):
    """The intent reflector is used for interaction model testing and debugging.
    It will simply repeat the intent the user said. You can create custom handlers
    for your intents by defining them above, then also adding them to the request
    handler chain below.
    """

    def can_handle(self, handler_input):
        # type: (HandlerInput) -> bool
        return ask_utils.is_request_type("IntentRequest")(handler_input)

    def handle(self, handler_input):
        # type: (HandlerInput) -> Response
        intent_name = ask_utils.get_intent_name(handler_input)
        speak_output = "You just triggered " + intent_name + "."

        return (
            handler_input.response_builder
            .speak(speak_output)
            # .ask("add a reprompt if you want to keep the session open for the user to respond")
            .response
        )


class CatchAllExceptionHandler(AbstractExceptionHandler):
    """Generic error handling to capture any syntax or routing errors. If you receive an error
    stating the request handler chain is not found, you have not implemented a handler for
    the intent being invoked or included it in the skill builder below.
    """

    def can_handle(self, handler_input, exception):
        # type: (HandlerInput, Exception) -> bool
        return True

    def handle(self, handler_input, exception):
        # type: (HandlerInput, Exception) -> Response
        logger.error(exception, exc_info=True)

        speak_output = "Sorry, I had trouble doing what you asked. Please try again."

        return (
            handler_input.response_builder
            .speak(speak_output)
            .ask(speak_output)
            .response
        )


class LoadDataInterceptor(AbstractRequestInterceptor):
    def process(self, handler_input):
        persistent_attributes = handler_input.attributes_manager.persistent_attributes
        session_attributes = handler_input.attributes_manager.session_attributes
        session_attributes["visitors"] = persistent_attributes[
            "visitors"] if 'visitors' in persistent_attributes else {}


class LoggingRequestInterceptor(AbstractRequestInterceptor):
    def process(self, handler_input):
        logger.debug('----- REQUEST -----')
        logger.debug("{}".format(handler_input.request_envelope.request))


class SaveDataInterceptor(AbstractResponseInterceptor):
    def process(self, handler_input, response):
        session_attributes = handler_input.attributes_manager.session_attributes
        persistent_attributes = handler_input.attributes_manager.persistent_attributes
        persistent_attributes["visitors"] = session_attributes["visitors"]
        handler_input.attributes_manager.save_persistent_attributes()


class LoggingResponseInterceptor(AbstractResponseInterceptor):
    def process(self, handler_input, response):
        logger.debug('----- RESPONSE -----')
        logger.debug("{}".format(response))


# The SkillBuilder object acts as the entry point for your skill, routing all request and response
# payloads to the handlers above. Make sure any new handlers or interceptors you've
# defined are included below. The order matters - they're processed top to bottom.

# sb = SkillBuilder()
# see:https://developer.amazon.com/en-US/docs/alexa/workshops/build-an-engaging-skill/attributes-manager/step2.html
sb = StandardSkillBuilder(table_name=os.environ.get("DYNAMODB_PERSISTENCE_TABLE_NAME"), auto_create_table=False)

sb.add_request_handler(LaunchRequestHandler())
# ======================================================================================
# custom handlers
sb.add_request_handler(HelloIntentHandler())
sb.add_request_handler(LifeSpanAskHandler())
sb.add_request_handler(LifeSpanGuessHandler())
# ======================================================================================
sb.add_request_handler(HelpIntentHandler())
sb.add_request_handler(CancelOrStopIntentHandler())
sb.add_request_handler(FallbackIntentHandler())
sb.add_request_handler(SessionEndedRequestHandler())
sb.add_request_handler(
    IntentReflectorHandler())  # make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers

sb.add_exception_handler(CatchAllExceptionHandler())

# Before running through the request handlers, the LoadDataInterceptor and LoggingRequestInterceptor runs.
sb.add_global_request_interceptor(LoadDataInterceptor())
sb.add_global_request_interceptor(LoggingRequestInterceptor())
# After the chosen handler returns its result, the SaveDataInterceptor and LoggingResponseInterceptor runs.
sb.add_global_response_interceptor(SaveDataInterceptor())
sb.add_global_response_interceptor(LoggingResponseInterceptor())

lambda_handler = sb.lambda_handler()