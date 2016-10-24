#!/bin/bash
set +e

rm -Rf src/bower
rm -Rf public/assets
rm -Rf node_modules

yarn install
bower install
gulp compile
