#!/bin/bash

find . -name '.DS_Store' -type f -delete
cd instextension
zip -r -D instextension.xpi .
cd ..
mv instextension/instextension.xpi .