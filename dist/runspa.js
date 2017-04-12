/*!
 * RunSPA v1.0.0-rc
 * https://github.com/carlosrfjunior/runspa
 *
 * Copyright (c) 2017 Carlos R F Júnior
 * Released under the MIT license
 *
 * Date: 2017-04-12T11:35:34.654Z
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
    typeof define === 'function' && define.amd ? define(['jquery'], factory) :(factory(global.$));
}(this, (function ($) {

    "use strict";
    var
            // Abstracting the HTML and event identifiers for easy rebranding
            runspa = 'runspa',
            //prefix = 'rspa',
            prefixCSS = '.rspa_css',
            prefixJS = '.rspa_js',
            target = 'a[data-spa={p}]',
            RunSPA,
            settings = {};
            
    // Don't do anything if RunSPA already exists.
    if ($[runspa]) {
        return;
    }

    var PageSetup = {
        load: function (url, options) {

            var $mainContent = $(options.id);
            
            window.location.hash = url;
            
            if (options.prefix !== undefined) {
                url = window.location.hash.replace(/^#/, options.prefix);
            } else {
                url = window.location.hash.replace(/^#/, '');
            }

            if (options.extension !== undefined)
                url += options.extension;
            
            return $.ajax({
                type: options.method,
                url: url,
                dataType: options.dataType,
                cache: options.cache,
                async: options.async,
                beforeSend: function () {
                    $mainContent.css({opacity: 0});
                },
                success: function (data) {

                    // Change page title
                    document.title = (options.title || document.title);
                    
                    $('html, body').animate({scrollTop: 0}, 0).fadeIn('slow');
                    
                    $mainContent
                            .html(data)
                            .delay(250).animate({opacity: 1}, 0);
                    
                    PageSetup.css(options.css);
                    PageSetup.js(options.scripts);
                    
                },
                error: function () {
                    window.location.href = options.pageError;
                }

            });
        },
        js: function(files, callback){
            
            $(prefixJS).remove();

            $.each(files, function (key, data) {
                PageSetup._js(data, callback);
            });
            
        },
        _js: function (file, callback) {
            
            var opts = $.fn.runspa.defaults;

            var body = document.getElementsByTagName('body')[0];
            var script = document.createElement('script');
            
            script.type = 'text/javascript';
            script.async = file.async || opts.async;
            script.src = file.url;
            
            script.setAttribute('class', prefixJS.replace('.',''));
            script.onload = callback;
            
            body.appendChild(script);
            
        },
        css: function (files, callback) {
            
           $(prefixCSS ).remove();

            $.each(files, function (key, data) {
                PageSetup._css(data, callback);
            });
            
        },
        _css: function (file, callback) {
                
            var head = document.getElementsByTagName('head')[0];
            var s = document.createElement('link');
            
            s.setAttribute('rel', 'stylesheet');
            s.setAttribute('type', 'text/css');
            s.setAttribute('href', file.url);
            s.setAttribute('class', prefixCSS.replace('.', ''));

            s.onload = callback;

            head.appendChild(s);

        },
        init: function ($route, options) {

            var page = window.location.hash.replace(/^#/, '');
            var $obj;

            if (options.defaultPage !== undefined && page.length < 1) {
                $obj = $(target.replace('{p}', options.defaultPage));
            } else {
                
                if(page !== $route) return false;
                    $obj = $(target.replace('{p}', page));
            }

            $obj.click();
            
        }
    };


// ****************
// PUBLIC FUNCTIONS
// Usage format: $.runspa.route();
// ****************

    RunSPA = $.fn[runspa] = $[runspa] = function (options) {

        settings = $.extend(true, {}, $.fn.runspa.defaults, options);

    };


    // DO on hash change
    $(window).on('hashchange', function (e) {
        e.preventDefault();
    });

    RunSPA.route = function ($path, options, callback) {

        var opts = $.extend(true, {}, $.fn.runspa.defaults, settings, options);
        var pageClick = target.replace('{p}', $path);

        $(document).on('click', pageClick, function (e) {
            e.preventDefault();
            var load = PageSetup.load($path, opts);
            callback(load);
        });
        
        PageSetup.init($path, opts);

    };


    $.fn.runspa.defaults = {
        id: '#runspaMain',
        language: 'en',
        defaultPage: undefined,
        pageError: 'error',
        method: 'GET',
        cache: false,
        async: false,
        data: undefined,
        dataType: 'html',
        extension: undefined,
        prefix: undefined
    };


    /*  $.fn.runspaLocales.en = {
     
     };
     */

})));