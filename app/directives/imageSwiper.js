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
        template:'<div class="swiper-container one>' +
                    '<div class="swiper-wrapper">' +
                    '<div ng-repeat="image in images" class="swiper-slide">' +
                    '<img src="{{image.path}}">' +
                    '</div>' +
                    '</div>' +
                    '<div class="swiper-pagination"></div>' +
//                    '<i class="fa fa-chevron-left" pulse></i>' +
//                    '<i class="fa fa-chevron-right" pulse></i>' +
                    '</div>',

        link:  function(scope,element, attrs) {

            var s = scope.images;


            swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                nextButton: '.fa-chevron-right',
                prevButton: '.fa-chevron-left',
                slidesPerView: 1,
                paginationClickable: true,
                spaceBetween: 30,
                loop: true
            });


        },
        controller: function ($scope, $element, $attrs) {

            $scope.next = function () {
                swiper.slideNext();
            };

            $scope.prev = function () {
                swiper.slidePrev();
            };

        }
    }
})