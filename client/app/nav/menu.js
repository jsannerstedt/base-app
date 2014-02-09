/**
 * Created by joelsannerstedt on 2014-02-09.
 */
define([
    "knockout-postbox"
], function (postbox) {

    var links = [
        {
            name: "home",
            module: "landingpage/start"
        },
        {
            name: "example",
            module: "module1/example"
        }
    ];

    function navigate(item) {
        postbox.publish("viewchanged", item.module);
    }

    return {
        links: links,
        navigate: navigate
    };
});