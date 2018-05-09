'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = process.env.APPLICATION_ID;
var SKILL_NAME = "Legal Facts";
var GET_FACT_MESSAGE = "Here's a fun one for you: ";
var HELP_MESSAGE = "You can say tell me a law fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

var data = [
    "Appealing a court ruling is not a right, unless the charge is capital murder.",
    "The tort of battery requires physical touching by a defendant or by an extension of their body.",
    "The tort of assault requires a threat of imminent danger, touching is not necessary.",
    "When a counter offer is made in response to a contract offer, the original offer is no longer valid.",
    "A contract becomes valid as soon as a confirmation is mailed, not when it is received.",
    "Arbitration and mediation are two alternate dispute resolution techniques to courtroom litigation.",
    "Louisiana is the only state in the United States that uses a Civil Law system."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFactIntent');
    },
    'GetFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};