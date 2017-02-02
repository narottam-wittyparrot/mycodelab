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
        model.fileOptions = ["print", "text_format", "perm_media", "image", "link", "format_align_justify"];
        model.fileEditOptions = ["undo", "redo", "content_cut", "content_copy", "content_paste"];
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