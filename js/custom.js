(function (window) {
//   var transitions = {
//     'transition': 'transitionend',
//     'WebkitTransition': 'webkitTransitionEnd',
//     'MozTransition': 'transitionend',
//     'OTransition': 'otransitionend'
//   },
//   elem = document.createElement('div');

//   for(var t in transitions){
//     if(elem.style[t] !== undefined){
//       window.transitionEnd = transitions[t];
//       break;
//     }
//   }

  var $html = document.getElementsByTagName('html')[0];
  var $body = document.body;
  var $content = document.getElementById("content");
  var siteURL = "http://" + top.location.host.toString();

  // Set up Barba to play nice.
  Barba.Pjax.Dom.containerClass = "main";

  // var mediaUpToSidebar = "(max-width: 45.1875em)";
  var addAnchors = function(){
    anchors.options = {
      visible: 'always',
      placement: 'right',
      icon: ''
    };
    anchors.add('#content .hentry h2, #content .hentry h3');
  }

  // DOM is ready
  document.addEventListener("DOMContentLoaded", function(event) {
    Barba.Pjax.start();
  });

  // All is loaded
  window.addEventListener("load", function(event) {
    $body.setAttribute('data-page-status', 'loaded');
    $body.classList.add('landed');

    // add Anchors to article posts
    addAnchors();
  });

    // // Find all internal links
    // $('<button>').attr("aria-hidden", "true")
    //     .addClass('toggle')
    //     .on("click", function() {
    //         if ( $html.attr('data-sidebar') === "open" ) {
    //           $html.attr('data-sidebar', "closed");
    //           store.set("sidebarStatus", "closed");
    //         } else {
    //           $html.attr('data-sidebar', 'open');
    //           store.set("sidebarStatus", "open");
    //         }
    //     }).appendTo('#additional');

    // Handles page load state
    // function pageLoadAnim(){

    //     var url = $(this).attr("href");

    //     // If you just clicked on the self portrait, toggle it.
    //     if ($(this).is("#self-port")){
    //         if (window.matchMedia(mediaUpToSidebar).matches) {
    //             if ( $html.attr('data-masthead') === "open" ) {
    //                 $html.attr('data-masthead', "closed");
    //             } else {
    //                 $html.attr('data-masthead', 'open');
    //             }
    //             event.preventDefault();
    //         } else {
    //             pageLoadAnim(this);
    //         }
    //     } else if ($(this).attr("target")){
    //         return;
    //     } else {
    //         // stop that click
    //         event.preventDefault();
    //         // invoke loading status
    //         $body.attr('data-page-status', 'loading');
    //         // PJAX
    //         $content.one(window.transitionEnd, function(){
    //             $.pjax({
    //                 url: url,
    //                 container: "#content",
    //                 fragment: "#content"
    //             });
    //         });
    //     }
    // }

    /* PJAXIN'! */
    // if ($.support.pjax) {
    //     // needs to be match a media query...
    //     $(document).on("click","a[href^='"+siteURL+"'], a[href^='/'], a[href^='./'], a[href^='../'], a[href^='#']", pageLoadAnim);

    //     $(document).on('pjax:end', function(event) {
    //         // add Anchors to article posts
    //         addAnchors();
    //         $body.attr('data-page-status', 'loaded');
    //         // On smaller screens, close the nav bar
    //         if (window.matchMedia(mediaUpToSidebar).matches) {
    //           $html.attr('data-masthead', "closed");
    //         }
    //         // Give body class based on location to highlight nav
    //         var loc = window.location.pathname.split('/');
    //         var dir = loc[1];
    //         // Posts have numeric root folders.
    //         // check to see if the directory ISN'T numeric
    //         if (isNaN(dir)) {
    //             $body.attr('data-location', dir);
    //         } else if (!dir) {
    //             $body.attr('data-location', 'home');
    //         } else {
    //             $body.attr('data-location', 'post');
    //         }
    //     });
    // }

})(window);
