# wranglab-documentation

You can find a full tutorial of docusaurus here: [Documenation](https://docusaurus.io/docs/en/tutorial-setup)

## Install Docusaurus

Docusaurus comes with a command line tool to help you scaffold a Docusaurus site with some example templates. Let's install the installer!

Run the following command:

```sh
npm install --global docusaurus-init
```

## Create local clone

Clone your repository to your local machine:

```sh
git clone https://github.com/Wranglab/wranglab-documentation.git # HTTPS
# checkout master branch
git checkout master
```

## Start local documentation server

```sh
cd website #go to the folder website
npm install #install dependencies
npm start # start server
```

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## Put the changes Online [help.wranglab.com](https://help.wranglab.com)

1. In Terminal or Git Bash, kill the web server by pressing Cmd+C or Ctrl+C.
2. In the website directory, run npm run build. The command generates a build directory inside the website directory, 
containing HTML files (and other file types) for all of your docs and other pages. Make sure the 
wranglab-documentation/website/build directory is successfully created before running the next step.
3. Replace USERNAME with your GitHub username and run the following command.
```sh
GIT_USER=USERNAME CURRENT_BRANCH=master npm run publish-gh-pages # HTTPS
```
The HTML files (and other file types) are pushed to the gh-pages branch of your repository:

Go to https://help.wranglab.com and view your site in action!
