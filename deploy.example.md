npm install gh-pages --save-dev

in package.json

on top:

"homepage":"http://JsIqbal.github.io/React-Portfolio",

in script:

"predeploy":"npm run build",
"deploy": "gh-pages -d build"

npm run deploy