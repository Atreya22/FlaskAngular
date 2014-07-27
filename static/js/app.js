/**
 * Created by Atreya on 7/27/14.
 */
var appAngular = angular.module('sampleApp',['ui.bootstrap']);

appAngular.controller("MainController", function($scope){


        $scope.createMap=function(dataUS)
    {
                     var map = new Datamap({
                        scope: 'usa',
                        element: document.getElementById('container'),
                        geographyConfig: {
                                popupTemplate: function(geo, data) {
                                        console.log(data)
                                         return ['<div class="hoverinfo"><strong>',
                                           'Electoral Votes ' + data.electoralVotes,
                                            '</strong></div>'].join('');
                                                                }
                                        },
                         data: dataUS


                                         });

    }






});


appAngular.config([

    function(){
         $.get("/usdata",

        function(dataUS,status){
        console.log(dataUS)
            var map = new Datamap({
                        scope: 'usa',
                        element: document.getElementById('container'),
                        geographyConfig: {
                                popupTemplate: function(geo, data) {
                                        console.log(data)
                                         return ['<div class="hoverinfo"><strong>',
                                           'Electoral Votes ' + data.electoralVotes,
                                            '</strong></div>'].join('');
                                                                }
                                        },
                         data: dataUS


                                         });



            }, "json");
    }
]);

