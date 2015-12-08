#!/bin/bash

echo "started"
git add -f *
echo "Enter commit text: "
read commitText;
git commit -m " $commitText "
git status
sleep 2;
git -u origin master
git log
