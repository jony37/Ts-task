"use strict";
function logError(error) {
    if ('massage' in error) {
        console.log('Massage', error.massage);
    }
    else {
        console.log("Error", error.error);
    }
}
logError(({ massage: "Hello" }));
logError(({ massage: "Hello" }));
