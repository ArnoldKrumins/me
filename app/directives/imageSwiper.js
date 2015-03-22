/**
 * Created by arnold.krumins on 22/03/2015.
 */
app.directive('imageSwiper',function(){

    var swiper;

    return{
        restrict:'EA',
        scope:{
            images:'='
        },
        template:'<div class="swiper-container">' +
                    '<i ng-click="prev()" class="fa fa-chevron-left" pulse></i>' +
                    '<i ng-click="next()" class="fa fa-chevron-right" pulse></i>' +
                        '<div class="swiper-wrapper">' +
                            '<a ng-repeat="image in images" href="image.url">' +
                                '<img src="image.path">' +
                                '<h3>{{ image.text}}</h3>' +
                             '</a>' +
                        '</div>' +
                    '</div>' +
                    '</div>',

        link:  function(scope,element, attrs) {

            swiper = new Swiper('.bodytype', {
                speed: 750,
                mode: 'horizontal',
                slidesPerView: 1,
                loop:true
            });

        },
        controller: function ($scope, $element, $attrs) {

            $scope.next = function () {
                swiper.swipeNext();
            };

            $scope.prev = function () {
                swiper.swipePrev();
            };

        }
    }
})