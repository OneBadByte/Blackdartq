#!/bin/bash

echo "started"
git add -f *
read commitText;
git commit -m " $commitText "
git status
git -u origin master
git log
