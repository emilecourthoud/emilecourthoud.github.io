#HOW to run this file: ./update.sh
#WHY? It simplifies the git add / commit / push procedure


# Directory
#cd Dropbox/Website

# Give name to the commit
read -p "Enter commit description: " description

# Commit code
echo
git status
git add .

if [ -z $description ]
then
    echo Empty message. Commit with title "New update".
    git commit -m "New update"
else
    git commit -m $description
fi

git push -u origin master