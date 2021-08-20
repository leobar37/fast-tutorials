# !bin/bash

set -e
## remove spaces

text=$(echo $1 | tr -d ' ')

git checkout -b $text
rm README.md
echo "# ${1} tutorial 🤙" > README.md
git add .
git commit -m "$1 tutorial init :)"
echo "Tutorial $1 has been created"
