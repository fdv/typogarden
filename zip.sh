#!/bin/sh 

IFS='

'

liste=`ls | grep -v .zip | grep -v README`
for file in $liste; do
	zip -r $file.zip $file
done
