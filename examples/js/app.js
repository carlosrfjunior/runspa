$(document).ready(function () {

    $.runspa({
        id: '#pageContent',
        prefix: '/templates/',
        extension: '.tpl',
        defaultPage: 'home',
        title: 'Página Principal',
        cache: false
    });

    $.runspa.route('home', {
        title: 'Home Page',
        css: {
            'css01': {url: 'css/app01.css'},
            'css02': {url: 'css/app02.css'}
        },
        scripts: {
            'js01': {url: 'js/load01.js', async: false},
            'js02': {url: 'js/load02.js', async: true}
        }
    }, function (e) {
        configNav();
    });

    $.runspa.route('about', {
        title: 'About Page'
    }, function (e) {
        configNav();    
    });

    $.runspa.route('login', {
        title: 'Login Page'
    }, function (e) {
        configNav();    
    });
    
    function configNav(){
        var hash = window.location.hash.replace(/^#/, '');
        $( "li.active" ).removeClass();
        $('li > a[data-spa=' + hash + ']').parent().addClass('active');
    }
    
    
    $(window).on('hashchange', function (e) {
        e.preventDefault();
        configNav();        
    });


});


