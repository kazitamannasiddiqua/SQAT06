const { Given, When, Then } = require('cucumber')
const chai = require('chai')
const should = chai.should()

"use strict";


Given('I go to duck duck go', function(callback) {
  this.browser
    .init()
    .url('https://duckduckgo.com/').then(function() {
      callback();
    })
})

When('I search for {string}', function(phrase, callback) {
  this.browser
    .setValue('#search_form_input_homepage', phrase)
    .click('#search_button_homepage').then(function(){
      callback();
    })
})

Then('I should see the search title {string}', function(phrase, callback) {
  this.browser
    .getTitle().then(function(result){
        result.should.equal(phrase + " at DuckDuckGo");
        callback();
  }).catch(function(error){
    callback(error);
  })
})
