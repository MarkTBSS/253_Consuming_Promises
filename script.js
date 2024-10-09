"use strict";

const renderCountry = require("./renderCountryModule");

// Consuming Promises correctly
// Full Version
/* const getCountryData = function (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            renderCountry(data[0]);
        });
}; */
// Arrow Version
const getCountryData = (country) => {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then((response) => response.json())
        .then((data) => renderCountry(data[0]));
};

getCountryData("portugal");
