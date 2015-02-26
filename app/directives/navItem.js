/**
 * Created by arnoldkrumins on 26/02/15.
 */
app.directive('navItem',function(){

    var scale = 0.8;

    return{
        restrict:'A',
        scope:{ position:'@'},
        link:function(scope,element,__){

          element.on('mouseenter',function(){
              TweenMax.to(element,0.2,{scale:scale},0.2);
          })

            element.on('mouseleave',function(){
                TweenMax.to(element,0.2,{scale:1},0.2);
            })


            element.on('click',function(){
                TweenLite.to(window, 2, {scrollTo:{y:scope.position}, ease:Power2.easeOut});
            })
        }
    }

})

