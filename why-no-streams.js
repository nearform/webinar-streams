const fs = require('fs');
const got = require('got');

got('http://registry.npmjs.org/-/all')
    .then(response => {
        console.log(response.body)
    })
    .catch(error => {
        console.log(error.response.body)
    });
