
//Dependencies
var express = require("express");
var router = express.Router();
var path = require("path");
var request = require("request"); //for scraping
var cheerio = require("cheerio"); //for scraping
var logger = require("morgan");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
var app = express();
// SCRAPING AND ROUTING IN THIS FILE

//making route to scrape the onion

   // Make a request call to grab the HTML body from the site of your choice
request("http://www.nytimes.com", function(error, response, html) {

  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
  var results = [];

  // Select each element in the HTML body from which you want information.
  // NOTE: Cheerio selectors function similarly to jQuery's selectors,
  // but be sure to visit the package's npm page to see how it works
  $("h2.story-heading").each(function(i, element) {

    var link = $(element).children().attr("href");
    var title = $(element).children().text();

    // Save these results in an object that we'll push into the results array we defined earlier
    results.push({
      title: title,
      link: link
    });
  });

  // Log the results once you've looped through each of the elements found with cheerio
  console.log(results);
});
  

  
  // //route to show articles from db
  // app.get("/articles", function(req, res) {
  //   // Find all articles
  //   db.Article.find({})
  //     .then(function(dbArticles) {
  //       // If all articles are successfully found, send them back to the client
  //       res.json(dbArticles);
  //     })
  //     .catch(function(err) {
  //       // If an error occurs, send the error back to the client
  //       res.json(err);
  //     });
  // });

