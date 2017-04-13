$(document).ready(function () {

    // General Definitions
    $.runspa({
        id: '#pageContent',
        prefix: '/templates/',
        extension: '.tpl',
        defaultPage: 'home',
        title: 'Página Principal',
        cache: false
    });

   /************************
    * Test Routes
    *************************/
   
    // Home Page
    $.runspa.route('home', {
        title: 'Home Page',
        metaTag: {
            'keywords' : 'jquery-plugin, ecosystem:jquery, SPA, Single, Page, Application, JQuery',
            'description': 'A simple jQuery Single Page Application Plugin'
        },
        css: {
            'css01': {url: 'css/app01.css'},
            'css02': {url: 'css/app02.css'}
        },
        scripts: {
            'js01': {url: 'js/load01.js', async: false},
            'js02': {url: 'js/load02.js', async: true}
        }
    }, function (page) {
        configNav();
    });

    // About Page
    $.runspa.route('about', {
        'title' : 'Page About'
    }, function (page) {
        
        page.done(function(e){
            alert('Load Ok');
            configNav();    
        });

    });

    // Login Page
    $.runspa.route('login');
    
    /**
     * Function Active actual button for test
     */
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


