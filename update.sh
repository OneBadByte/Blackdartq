#!/bin/bash
clear
echo "started"
git add *
echo "Enter commit text: "
read commitText;
git commit -m " $commitText "
git status
sleep 2
git push origin master
git log
