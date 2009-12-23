#!/bin/sh

IFS='

'

liste=`ls typogarden/`

for file in $liste; do
  ln -s typogarden/$file $file
done