# !bin/bash

set -e

git checkout -b $1
rm README.md
echo "# ${1} tutorial 🤙" > README.md
git add .
git commit -m "$1 tutorial init :)"

