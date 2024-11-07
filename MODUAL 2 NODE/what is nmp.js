/*Q4 what is NPM?
NPM stands for Node Package Manager, and it's a free, open-source tool that helps developers install, 
manage, and share JavaScript packages:

1.Installation: NPM is installed on your computer when you install Node.js. You can use the 
command-line client to install packages. 

2.Management: NPM can help you manage dependencies, package versions, and node_modules. 

3.Sharing: NPM is a central hub for sharing JavaScript code, and you can publish your own software to 
the npm registry. 

4.Development: NPM is used to develop Node programs.*/

/*Syntax to install Node Package
npm install package_name*/

Windows Example:
C:\> npm install <package>

Mac OS Example:
>npm install <package>

/*Software Package Manager
The npm (Node Package Manager) stems from when npm first was created as a package manager for Node.js.

All npm packages are defined in files called package.json.

The content of package.json must be written in JSON.

At least two fields must be present in the definition file: name and version.*/

Example:

{
"name" : "jalpa",
"version" : "1.2.3",
"description" : "A package for npm",
"main" : "node.js",
"keywords" : ["foo", "fool", "foolish"],
"author" : "jalpa saraiya",
"licence" : "ISC"
}



