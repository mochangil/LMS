#!/bin/bash

sudo service codedeploy-agent stop
sudo rm /opt/codedeploy-agent/deployment-root
sudo service codedeploy-agent start