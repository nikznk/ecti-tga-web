#!/bin/bash  

git init
ls -la
git add -A && git commit -m "Initial Commit"
git branch
git checkout master
eval "$(ssh-agent -s)" #start the ssh agent
chmod 600 ../.travis/deploy # this key should have push access
ssh-add ../.travis/deploy
git remote add deploy docker@tga.ecti.ac.nz:/home/docker/WEBCONTENT/beta/repo
git push --set-upstream deploy master --force