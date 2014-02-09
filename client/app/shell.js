/**
 * Created by joelsannerstedt on 2014-02-06.
 */
define([
    "knockout",
    "knockout-postbox"
], function (ko, postbox) {
    var activeModule = ko.observable().subscribeTo("viewchanged", true);

    return {
        activeModule: activeModule
    };
});