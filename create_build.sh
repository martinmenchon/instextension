#!/bin/bash

find . -name '.DS_Store' -type f -delete
cd src
zip -r -D instextension.xpi .
cd ..
mv src/instextension.xpi .