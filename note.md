node_modules (all packages installed e.g. vite): -
This is a folder automatically created when you run npm install (or yarn install/pnpm install).
It contains all the installed dependencies(packages) your project needs, including React,Vite,ESLint

public -Folder for static files (like image, favicon) that are served as-is.
.gitignore -File that tells Git which files/folders to ignore(e.g., node_modules).
eslint.config.js - is the configuration file for ESLint - a popular tool that analyzes your JavaScript/TypeScript code for errors, bugs and style issues.
.gitignore -File that tells Git which files/folders to ignore(e.g., node_modules).
eslint.config.js tells ESLint how to check your code and what rules to follow.

package.json -
It is the most important file in any JavaScript/Node.js project.
It acts like the identity cars=d of your project.

What is Contains:
Project name, version , description.
All dependencies (packages) your project needs.
Scripts *like npm, run dev.

package-lock.json -
It is an  auto-generated file created by npm.
It records the exact version of every package and sub-package installed.
Why it exists:
To ensure everyone on the team gets the same exact versions of packages.

READ.md -
A markdown file that serves  as the documentation for your project.

vite.config.js -
Configuration file for Vite (build tool & dev server).

# 3. What is JSX? What are the rules to write JSX?
JSX stands for JavaScript XML.
It is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript files.
It was introduced by Facebook (Meta) for React.

These rules are:-

1. Return Only One Root Element.
2. All Tags(including Self-Closing Tags) Must be Properly Closed.
3. Use CamelCase for Attributes (ex:- onclick, onChange)
4. JavaScript Expressions in {}
5. To write comment in JSX use
 {/* */}
6. Don't use if-else directly inside JSX instead use ternary or logical operator.
7. Use classname instead of class.
8. Use htmlFor instead of for in label tag.

# 4.  What is a component in React ? Types of component?
A component in React is a reusable (self-contained) place of code that returns some place of JSX.

It is of 2 types
1. Class Based Component(CBC)
    i) A Class Component is a JavaScript class that extends React.component.
    ii) It has render() method to return JSX.
    iii) It was the traditional way of writing React components before 2019.

2. Function Based Component (FBC)
    i) A  function based component is a simple JavaScript function which returns some piece of JSX.
    ii) It is now  the recommended and most popular way to write components in modern React.

# What is React.Fragment?
