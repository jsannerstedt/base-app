/**
 * Created by joelsannerstedt on 2014-02-06.
 */

(function () {
    var bowerPath = "lib/bower_components/";
    require.config({
        baseUrl: "./",
        paths: {
            "knockout": bowerPath + "knockout/build/output/knockout-latest.debug",
            "knockout-postbox": bowerPath + "knockout-postbox/build/knockout-postbox",
            "knockout-amd-helpers": bowerPath + "knockout-amd-helpers/build/knockout-amd-helpers",
            "text": bowerPath + "requirejs-text/text"
        }
    });
})();

require([
    "knockout",
    "shell",
    "knockout-postbox",
    "knockout-amd-helpers",
    "text"
], function (ko, shell/*, postbox, amdHelpers, text*/) {

    // config
    ko.amdTemplateEngine.defaultPath = "./";
    ko.bindingHandlers.module.baseDir = "./";
    ko.amdTemplateEngine.defaultSuffix = ".html";
    ko.amdTemplateEngine.defaultRequireTextPluginName = "text";

    // route
    // TODO: setup router for automatic navigation with popstate

    // start
    ko.applyBindings(shell);
});