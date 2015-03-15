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

        // Training page's workshop toggle
        // function toggleWorkshop(target) {
        //     if ( target.attr('data-open') === "true" ) {
        //       target.attr('data-open', "false");
        //       $(this).html('<span data-icon="&#10025;" class="icon"></span>');
        //     } else {
        //       target.attr('data-open', 'true');
        //       $(this).html("close");
        //     }
        // }

// function(){
//                     if ( target.attr('data-open') === "true" ) {
//                       target.attr('data-open', "false");
//                       $(this).html('<span data-icon="&#10025;" class="icon"></span>');
//                     } else {
//                       target.attr('data-open', 'true');
//                       $(this).html("close");
//                     }
//                 })

        $(document).pjax("a[href^='"+siteURL+"'], a[href^='/'], a[href^='./'], a[href^='../'], a[href^='#'], a:not(a[target='_blank'])", "#content", {fragment:"#content"});

        // This version does NOT pjax-ify the back button
        // $body.on('click', "a[href^='"+siteURL+"'], a[href^='/'], a[href^='./'], a[href^='../'], a[href^='#'], a:not(a[target='_blank'])", function(event) {
        //         var clickery = event;
        //         // .loading transitions opacity to 0
        //         $body.attr('data-page-status', 'loading');

        //         if (window.transitionEnd) {
        //             // trigger pjax post-transition only for one transitionend
        //             if (e.originalEvent.propertyName === "opacity") {
        //                 $("#content").on(window.transitionEnd, function(e){
        //                     $.pjax({
        //                         url: clickery.target.href,
        //                         container: '#content',
        //                         fragment: '#content'
        //                     });
        //                 });
        //             }
        //         } else {
        //             // a crappy timeout if no transitionend
        //             setTimeout( function(){
        //                 $.pjax.click(clickery,{
        //                     url: clickery.target.href,
        //                     container: '#content',
        //                     fragment: '#content'
        //                 });
        //             }, customPjaxTimeout);
        //         }

        //     // STOP THE LINK FROM WORKING NORMALLY
        //     return false;
        // });
        $(document).on('pjax:start', function() {
            $body.attr('data-page-status', 'loading');
        });
        $(document).on('pjax:end', function(event) {
            $body.attr('data-page-status', 'loaded');
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

        // Play that funky JS.
        // https://github.com/defunkt/jquery-pjax/issues/469
        // $(document).on("pjax:popstate", function() {
        //   $(document).on("pjax:end", function(event) {
        //     $(event.target).find("script[data-exec-on-popstate]").each(function() {
        //       $.globalEval(this.text || this.textContent || this.innerHTML || '');
        //     })
        //   });
        // });

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
