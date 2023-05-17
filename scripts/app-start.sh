#!/bin/bash
cd /home/ubuntu/lms
npm install
nohup npm start > /dev/null 2>&1 &