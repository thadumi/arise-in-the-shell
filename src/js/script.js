
jQuery(function($) {

    var html = $('html');  
    var viewport = $(window);
    var current = $('.nav-current');

    current.addClass('active');

    /* ==========================================================================
     Menu
     ========================================================================== */

    function menu() {
        html.toggleClass('menu-active');
    };

    $('#menu').on({
        'click': function() {
            menu();
        }
    });

    $('.nav-menu').on({
        'click': function() {
            menu();
        }
    });

    $('.nav-close').on({
        'click': function() {
            menu();
        }
    });

    viewport.on({
        'resize': function() {
            current.removeClass('menu-active');
        },
        'orientationchange': function() {
            current.removeClass('menu-active');
        }
    });    
    
    
    /* ==========================================================================
     ghostHunter
     ========================================================================== */
  
    if (typeof ghosthunter_key !== 'undefined') {
      var searchField = $("#search-field");
      $(".nav-search").css({
        'display': 'block'
      });
  
      $('.nav-search').on({
        'click': function() {
          html.addClass('search-active');
          searchField.focus();
          html.removeClass('menu-active');

          $('.progress-bar').css('display', 'none');
        }
      });
  
      $('.search-close').on({
        'click': function() {
          html.removeClass('search-active');
          searchField.val('');
          $('#results').empty();

          $('.progress-bar').css('display', '');
        }
      });
  
      $(document).keydown(function(e) {
        if (e.key === "Escape") { // escape key maps to keycode `27`
          if (html.hasClass('search-active')) {
            html.removeClass('search-active');
            searchField.val('');
            $('#results').empty();

            $('.progress-bar').css('display', '');
          }
        }
      });
  
      searchField.ghostHunter({
        results: "#results",
        result_template: '<article class="post"><div class="inner"><div class="box post-box"><h2 class="post-title"><a href="{{link}}">{{title}}</a></h2><span class="post-meta">On <span class="post-date">{{pubDate}}</span></span></div></div></article>',
        info_template: '',
        displaySearchInfo: true,
        includebodysearch: true
      });
    }
 
});
