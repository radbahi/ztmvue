// Webpack is a static module bundler for JavaScript applications
// it takes all the code from your application and makes it usable in a web browser.
// Modules are reusable chunks of code built from your app’s JavaScript, node_modules, images,
// and the CSS styles which are packaged to be easily used in your website.
// Webpack separates the code based on how it is used in your app
// https://webpack.js.org/

import pizza from "./pizza";
//normally can't import files like below wtih regular js, but webpack allows us to
import "./main.scss";

pizza.pepperoni();
pizza.bacon();

// npm init -y creates a package.json file
// all below should now be added to package.json under devDependencies after running these commands
// npm install webpack webpack-cli --save-dev installs webpack
// npm install --save-dev @babel/core @babel/preset-env babel-loader installs babel and the preset we need
// npm install node-sass sass-loader css-loader --save-dev saves all the things needed for sass
// npm install style-loader --save-dev loads the css dynamically
// npm install postcss-loader --save-dev postcss lets us use javascript to make changes to css
// npm install autoprefixer --save-dev is a postcss plugin that scans css properties for missing vendors
