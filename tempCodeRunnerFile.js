"use strict";
var Status;
(function (Status) {
    Status[Status["SUCCESS"] = 0] = "SUCCESS";
    Status[Status["ERROR"] = 1] = "ERROR";
})(Status || (Status = {}));
function getStatus(status) {
    if (status === Status.SUCCESS) {
        return 'success';
    }
    return 'error';
}
const statusMassage = getStatus(Status.SUCCESS);
console.log(statusMassage);
