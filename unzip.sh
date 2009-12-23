#!/bin/sh 

IFS='

'

liste=`ls *.zip`
for file in $liste; do
	unzip $file
done
