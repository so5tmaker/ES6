'use strict';

var string1 = 'r_liteprofile r_emailaddress w_member_social',
    string2 = 'r_liteprofile r_emailaddress',
    string3 = 'r_liteprofile';

// let checkAccess = (cookieArray, linkedinArray) => linkedinArray.every(arrayValue => cookieArray.indexOf(arrayValue) >= 0);

var checkAccess = function checkAccess(cookieString, permissionsString) {
    var cookieArray = cookieString.split(" ");
    var permissionsArray = permissionsString.split(" ");
    return permissionsArray.every(function (arrayValue) {
        return cookieArray.indexOf(arrayValue) >= 0;
    });
};

// eslint-disable-next-line no-console
console.log(checkAccess(string2, string1));
// eslint-disable-next-line no-console
console.log(checkAccess(string3, string1));
// eslint-disable-next-line no-console
console.log(checkAccess(string1, string2));
// eslint-disable-next-line no-console
console.log(checkAccess(string2, string3));

var cookieString = "";
// eslint-disable-next-line no-console
console.log(cookieString.split(" "));

function hasAccess(permissionsString) {
    var cookieString = cookieManager.get(LI_ACC_SCOPES) || "";
    var cookieArray = cookieString.split(" ");
    var permissionsArray = permissionsString.split(" ");
    return permissionsArray.every(function (arrayValue) {
        return cookieArray.indexOf(arrayValue) >= 0;
    });
}