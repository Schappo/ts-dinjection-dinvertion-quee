#!/bin/bash

WEBHOOK_URL=$1
MESSAGE=$2

curl -X POST -H "Content-Type: application/json" -d "{\"content\": \"$MESSAGE\"}" $WEBHOOK_URL