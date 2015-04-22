(function (window) {
  var transitions = {
    'transition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'transitionend',
    'OTransition': 'otransitionend'
  },
  elem = document.createElement('div');

  for(var t in transitions){
    if(elem.style[t] !== undefined){
      window.transitionEnd = transitions[t];
      break;
    }
  }
})(window);

(function($){
    var $html = $("html");
    var $body = $("body");
    var $content = $("#content");
    var siteURL = "http://" + top.location.host.toString();
    var customPjaxTimeout = 2500;
    var mediaUpToSidebar = "(max-width: 45.1875em)";

    $( document ).ready(function() {
        $body.attr('data-page-status', 'loaded')
        .addClass('landed');
        // Find all internal links
        $('<button>').attr("aria-hidden", "true")
            .addClass('toggle')
            .on("click", function() {
                if ( $html.attr('data-sidebar') === "open" ) {
                  $html.attr('data-sidebar', "closed");
                  store.set("sidebarStatus", "closed");
                } else {
                  $html.attr('data-sidebar', 'open');
                  store.set("sidebarStatus", "open");
                }
            }).appendTo('#additional');

        //needs to be a media query...
        $('#magic-face').on("click", function(e) {
            if (window.matchMedia(mediaUpToSidebar).matches) {
                if ( $html.attr('data-masthead') === "open" ) {
                  $html.attr('data-masthead', "closed");
                } else {
                  $html.attr('data-masthead', 'open');
                }
                e.preventDefault();
            }
        });

        /* PJAXIN'! */
        if ($.support.pjax) {
            $(document).on("click", "a[href^='"+siteURL+"'], a[href^='/'], a[href^='./'], a[href^='../'], a[href^='#'], a:not(a[target='_blank'])", function(e){

                e.preventDefault();

                $body.attr('data-page-status', 'loading');
                // Vars
                var url = $(this).attr("href");

                $content.one(window.transitionEnd, function(){
                    $.pjax({
                        url: url,
                        container: "#content",
                        fragment: "#content"
                    });
                });
            });

            $(document).on('pjax:end', function(event) {
                $body.attr('data-page-status', 'loaded');
                // On smaller screens, close the nav bar
                if (window.matchMedia(mediaUpToSidebar).matches) {
                    if ( $html.attr('data-masthead') === "open" ) {
                      $html.attr('data-masthead', "closed");
                    }
                }
                // Give body class based on location to highlight nav
                var loc = window.location.pathname.split('/');
                var dir = loc[1];
                // Posts have numeric root folders.
                // check to see if the directory ISN'T numeric
                if (isNaN(dir)) {
                    $body.attr('data-location', dir);
                } else if (!dir) {
                    $body.attr('data-location', 'home');
                } else {
                    $body.attr('data-location', 'post');
                }
            });
        }

        // Velocity bind click event to all internal page anchors
        $("#content").on("click", "a[href*=#]", function(e) {
          // prevent default action and bubbling
          e.preventDefault();
          e.stopPropagation();
          // set target to anchor's "href" attribute
          var target = $(this).attr("href");
          // scroll to each target
          $(target).velocity("scroll", {
              duration: 500,
              offset: -60,
              easing: "ease-in-out"
          });
        });

    });

})(jQuery);
