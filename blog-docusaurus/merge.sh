#!/bin/bash
rm -rf ../dist/assets/css/
rm -rf ../dist/assets/js/
rm -rf ../dist/blog/
cp -r build/assets/css ../dist/assets/
cp -r build/assets/js ../dist/assets/
cp -r build/blog/ ../dist/

