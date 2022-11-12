# Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: LicenseRef-.amazon.com.-AmznSL-1.0
# Licensed under the Amazon Software License  http://aws.amazon.com/asl/

import json
import random
import datetime
import pytz

CELEBS = []
MONTHS = {"january": 1, "february": 2, "march": 3, "april": 4, "may": 5, "june": 6, "july": 7, "august": 8, "september": 9, "october": 10, "november": 11, "december": 12}

with open("doc/birthday.json") as birthday_doc:
    CELEBS = json.load(birthday_doc)

def get_random_celeb(past_celebs = []):

    remaining = [d for d in CELEBS if d not in past_celebs]

    if len(remaining) > 0:
        random.shuffle(remaining)
        return remaining[0]
    else:
        return {
            "id": 0,
            "name": None,
            "birthday": None
        }

def check_answer(current_celeb, month, year):
    d = datetime.datetime.strptime(current_celeb["birthday"], '%Y-%m-%d')
    return d.month == MONTHS[month.lower()] and d.year == int(year)

def get_hour(user_time_zone):
    d = datetime.datetime.now(pytz.timezone(user_time_zone))
    return d.hour