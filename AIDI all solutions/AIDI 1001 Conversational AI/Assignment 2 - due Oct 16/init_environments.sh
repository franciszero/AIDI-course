#!/bin/bash

pip list --format=freeze | awk -F '==' '{if($1!~/^conda*/ && $1!~/^anaconda*/ && $1!="wheel" && $1!="pip" && $1!="distributed" && $1!="setuptools"){print $0}}' > requirements.txt
