(function() {
    'use strict';
    var iDataEditor = angular.module('webApp', ['ngAria', 'ngAnimate', 'ngMaterial', 'ngMessages']);
    iDataEditor.component('profile', {
        templateUrl: "profile/profile.html",
        controller: MainContoller,
        controllerAs: 'model'
    });

    /** @ngInject */
    function MainContoller() {
        var model = this;
        model.text = "";
        model.toolbarOptions = ["print", "text_format"];
        model.save = function() {
            model.text;
        };
    }

    // function save() {
    //     model.text;
    //     console.log("runn");
    //     console.log(model.text);
    // }
})();