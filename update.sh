#!/bin/bash
clear
echo "started"
git add *
echo "Enter commit text: "
read commitText;
git commit -m " $commitText "
git status
sleep 2
clear
git push origin master
git log
echo "Press q to exit: " 
