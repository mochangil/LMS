#!/bin/bash
REPOSITORY=/home/ubuntu/lms

cd $REPOSITORY

npm install
npm stop
npm start