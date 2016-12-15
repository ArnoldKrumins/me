/**
 * Created by arnoldkrumins on 29/03/15.
 */
app.directive('socialHeader',function(){

    return{
        restrict:'EA',
        template: '<div id="social-header">' +
            '<a class="mail" href="mailto:arnold.krumins@gmail.com" target="_blank"><i class="fa fa-envelope-square"></i></a>' +
            '<ul>' +
                '<li><a href="https://www.facebook.com/arnold.krumins" target="_blank"><i class="fa fa-facebook-square"></i></a></li>' +
                '<li><a href="https://plus.google.com/u/0/+ArnoldKrumins/posts" target="_blank"><i class="fa fa-google-plus-square"></i></a></li>' +
                '<li><a href="https://github.com/ArnoldKrumins" target="_blank"><i class="fa fa-github-square"></i></a></li>' +
                '<li><a href="https://twitter.com/ArnoldKrumins" target="_blank"><i class="fa fa-twitter-square"></i></a></li>' +
                '<li><a href="https://www.youtube.com/channel/UC_6mKlQmG9N0KhIJ2D_JIqg" target="_blank"><i class="fa fa-youtube-square"></i></a></li>' +
                '<li><a href="https://instagram.com/arnoldkrumins/" target="_blank"><i class="fa fa-instagram"></i></a></li>' +
            '</ul>' +
        '</div>'
    }
})