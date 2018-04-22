"use strict";

const webdriverio = require('webdriverio');
const options = { desiredCapabilities: { browserName: 'chrome' } };

const client = webdriverio.remote(options);

const chai = require('chai')
const should = chai.should()

client
    .init()
    .url('https://app.figure1.com/account/register')
    .waitForVisible('.register-page__username-input')
    .setValue(".register-page__username-input", "fdfsdfsdfs")
    .setValue(".register-page__email-input", "ffdsfddfs@ghjkgjh.ca")
    .setValue(".register-page__password-input", "password")
    .setValue(".register-page__confirm-password-input", "password")
    .click(".register-page__terms-checkbox")
    .click(".register-page__submit-button")
    .getText(".invalid-field").then(function(element){
        element.should.equal('Pleasess select a valid specialty');
    })
    .catch(function(err){
        console.log(err)
    })
    //.end();
