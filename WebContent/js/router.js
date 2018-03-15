define(["angularAPP"], function (angularAPP) {
 
    var registerRoutes = function ($stateProvider, $urlRouterProvider) {
        
        angularAPP.route
            .state("basic_itmi012", {
                url: "/basic/itmi012",
                parent: "layouts_main",
                templateUrl: "views/basic/itmi012/index.html",
                controllerUrl: "views/basic/itmi012/index.js",
                css: ["views/basic/itmi012/index.css", "lib/angular-ui-grid/ui-grid.min.css"]
            }, $stateProvider)
            
        ;
    };

    return registerRoutes;
});