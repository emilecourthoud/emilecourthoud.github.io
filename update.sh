###### #To see website preview, type in the terminal <php -S localhost:8000> from the directory in which the folder public is stored

## Description of update.sh
#HOW to run this file: type <./update.sh> on the command line from the folder where update.sh bash file is saved
#WHY? It simplifies the git add / commit / push procedure


# Directory
#cd Dropbox/Website

# Give name to the commit
git status
read -p "Enter commit description and press 'enter' (Ctrl+c to exit): " description

# Commit code
echo
git add .

if [ -z $description ]
then
    echo Empty message. Commit with title "New update".
    git commit -m "New update"
else
    git commit -m $description
fi

git push -u origin master


