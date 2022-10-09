#!/bin/bash

pip list --format=freeze | awk -F '==' '
{if($1!~/^en-core-web/ &&
$1!="idna" &&
$1!="navigator-updater" &&
$1!="pyodbc" &&
$1!="ruamel-yaml-conda" &&
$1!="scikit-learn-intelex" &&
$1!="seaborn" &&
$1!="TBB" &&
$1!="typer" &&
$1!="clyent" &&
$1!="Bottleneck" && $1!~/^numpy*/ && $1!~/^conda*/ && $1!~/^anaconda*/ && $1!="wheel" && $1!="pip" && $1!="distributed" && $1!="setuptools"){print $0}}' > requirements.txt