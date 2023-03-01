if (!window.ltiStorage) {
  let ltiStorage = {
    storedData: {}
  };

  function handlePutData(event) {
    if (!ltiStorage.storedData[event.origin]) {
      ltiStorage.storedData[event.origin] = {};
    }
    ltiStorage.storedData[event.origin][event.data.key] = event.data.value;
    event.source.postMessage({
      subject: 'org.imsglobal.lti.put_data.response',
      message_id: event.data.message_id,
      key: event.data.key,
      value: event.data.value
    }, event.origin);
  }

  function handleGetData(event) {
    if (ltiStorage.storedData[event.origin] && ltiStorage.storedData[event.origin][event.data.key]) {
      event.source.postMessage({
        subject: 'org.imsglobal.lti.get_data.response',
        message_id: event.data.message_id,
        key: event.data.key,
        value: ltiStorage.storedData[event.origin][event.data.key]
      }, event.origin);
    }
  }

  // Declare an event listener for messages to put and get data, capabilities, etc.
  window.addEventListener('message', function (event) {
    if (event.data) {
      switch (event.data.subject) {
        case 'org.imsglobal.lti.put_data':
          handlePutData(event);
          break;
        case 'org.imsglobal.lti.get_data':
          handleGetData(event);
          break;
        default:
        // We can't log every unknown subject console.log(`Unknown subject ${event.data.subject}`);
      }
    }
  }, false);
}
