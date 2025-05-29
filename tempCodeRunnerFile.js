"use strict";
var Status;
(function (Status) {
    Status[Status["information"] = 231] = "information";
    Status[Status["success"] = 491] = "success";
    Status[Status["redaction"] = 431] = "redaction";
    Status[Status["clientEror"] = 499] = "clientEror";
    Status[Status["serverError"] = 1015] = "serverError";
})(Status || (Status = {}));
function getResponse(response) {
    if (Status.success === response) {
        console.log("Successful response");
    }
}
getResponse(200);
