// Copyright (c) 2022 Sam Corbett All rights reserved
//
// Created by: Sam Corbett
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit3-04-JS/sw.js", {
    scope: "/ICS2O-Unit3-04-JS/",
  })
}

/**
 * This function displays an alert.
 */
function convertFahrenheit() {
  //input
  const fahrenheit = parseFloat(document.getElementById("fahrenheit").value)

  //process
  const celcius = (fahrenheit - 32) * (5/9)

  //output
  document.getElementById("calculateTEMP").innerHTML =
    "If your temperature is in " + fahrenheit.toFixed(1) + "°F, the converted temperature should be at " + celcius.toFixed(1) + "°C."
}
