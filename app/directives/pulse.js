/**
 * Created by arnoldkrumins on 22/03/15.
 */
app.directive('pulse',function(){

    return{
        restrict:'A',
        link:function(scope,element,__){

            element.on('click',function(){
                    TweenMax.to(element,0.2, {scaleX:0.8, scaleY:0.8, force3D:true, yoyo:true, repeat:1, ease:Power1.easeInOut});
            })


        }
    }

})