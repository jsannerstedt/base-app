/**
 * Created by joelsannerstedt on 2014-02-09.
 */
define([
    "knockout",
    "knockout-postbox"
], function (ko, postbox) {

    var links = [
        {
            name: "home",
            module: "landingpage/start"
        },
        {
            name: "example",
            module: "module1/example"
        }
    ],
        currentModule = ko.observable(links[0]);


    links.forEach(function(link) {
        link.active = ko.computed(function() {
            return currentModule().name === link.name;
        });
    });

    // home module
    navigate(currentModule());

    function navigate(item) {
        currentModule(item);
        postbox.publish("viewchanged", item.module);
    }

    return {
        links: links,
        navigate: navigate
    };
});