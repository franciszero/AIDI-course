#!/bin/bash

git push heroku master
clear
heroku logs --tail
