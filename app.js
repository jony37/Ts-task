"use strict";
// // // let fullName: string = "John";
// // // let isMarried: boolean = true;
// // // let num: number = 1234;
function getResponse(response) {
    if (response >= 100 && response <= 199) {
        return `information response ${response}`;
    }
    else if (response >= 200 && response <= 299) {
        return `success response ${response}`;
    }
    else if (response >= 300 && response <= 399) {
        return `client Error response ${response}`;
    }
    else if (response >= 400 && response <= 499) {
        return `server Error response ${response}`;
    }
}
const resss = getResponse(201);
