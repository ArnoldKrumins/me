/**
 * Created by arnoldkrumins on 24/02/15.
 */
var app = angular.module('me',['ngAnimate']);

app.config(function config($compileProvider){

    $compileProvider.debugInfoEnabled(true);


});


//template:'<div class="swiper-container one">' +
//'<i class="fa fa-chevron-left" pulse></i>' +
//'<i class="fa fa-chevron-right" pulse></i>' +
//'<div class="swiper-wrapper">' +
//'<div class="swiper-slide">' +
//'<img src="./images/examples/one.png">' +
//    //'<h3>Image One</h3>' +
//'</div>' +
//
//'<div class="swiper-slide">' +
//'<img src="./images/examples/two.png">' +
//    //'<h3>Image Two</h3>' +
//'</div>' +
//
//'</div>' +
//'</div>',

//template:'<div class="swiper-container one">' +
//
//'<div class="swiper-wrapper">' +
//'<div ng-repeat="image in images" class="swiper-slide">' +
//'<img src="{{image.path}}">' +
//'</div>' +
//'</div>' +
//'<div class="swiper-pagination"></div>' +
//'<i ng-click="next()" class="fa fa-chevron-left" pulse></i>' +
//'<i ng-click="prev()" class="fa fa-chevron-right" pulse></i>' +
//'</div>',



