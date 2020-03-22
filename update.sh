#HOW to run this file: ./update.sh
#WHY? It simplifies the git add / commit / push procedure


# Directory
#cd Dropbox/Website

# Give name to the commit
read -p "Enter commit description: " description

# Remove public directory if it exists
#echo
#rm -r public/
#git submodule add -f -b master https://github.com/emilecourthoud/emilecourthoud.github.io.git public

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

# Update websitels
#echo
#hugo

# Publish website
#cd public
#git add .
#git commit -m "Update website"
#git push origin master


#hugo server -D
#http://localhost:1313/