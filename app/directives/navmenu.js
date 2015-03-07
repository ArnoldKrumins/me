/**
 * Created by arnoldkrumins on 24/02/15.
 */
app.directive('navMenu',function(){

    return{

        restrict:'AE',
        replace:true,
        template:'<div id="nav-menu">' +
                    '<div nav-item position="0"><i class="fa fa-user"></i></div>' +
                    '<div nav-item position="500"><i class="fa fa-user"></i></div>' +
                    '<div nav-item position="800"><i class="fa fa-user"></i></div>' +
                    '<div nav-item position="1000"><i class="fa fa-user"></i></div>' +
                 '</div>',
        link:function(scope,element,attrs){

            var tl = new TimelineMax();
            tl.to(element,0.5,{right:0});
            tl.staggerFrom(element.children(),2,{scale:0.5,opacity:0,delay:0.5,ease:Elastic.easeOut},0.2);
            tl.play();


            //TweenMax.staggerFrom(element.children(),2,{scale:0.5,opacity:0,delay:0.5,ease:Elastic.easeOut},0.2);
               //TweenMax.to(element,0,{opacity:0.5},0);

                //element.on('mouseenter',function(){
                  //  TweenMax.to($('#nav-menu'),0.5,{left:100});
               //})


        }



    }

})