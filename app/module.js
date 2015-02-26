/**
 * Created by arnoldkrumins on 24/02/15.
 */
var app = angular.module('me',['ngAnimate']);

app.config(function config($compileProvider){

    $compileProvider.debugInfoEnabled(true);


});


//app.animation('.menu-animation',function(){
//    return{
//        addClass: function(element,className,done){
//
//            if(className == 'move'){
//                var tl = new TimelineMax();
//                //tl.to(element,0.5,{opacity:0.5,right:-200});
//                //tl.play();
//                tl.staggerFrom(element.children(),2,{scale:0.5,opacity:0,delay:0.5,ease:Elastic.easeOut},0.2);
//                tl.play();
//                //TweenMax.to(element,0.5,{right:100},done);
//            }
//            else{
//                done();
//            }
//
//
//        },
//
//        removeClass: function(element,className,done){
//
//            if(className == 'move'){
//                TweenMax.to(element,0.5,{right:-100},done);
//            }
//            else{
//               done();
//            }
//
//        }
//
//    }
//});




