#Termporarily authenticating with Git repositories
#git config --global credential.helper 'cache --timeout 7200'


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
git commit -m $description
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