@echo off
cd ..
npx cypress run --env grepTags=@regression
