/* Author: Rachel Nabors

*/

$(document).ready(function() {

 //make each slide the height of the window if the slide is shorter than the window
	var winHeight = $(window).height();
	$('.slide').each(function() {
		if($(this).height() < winHeight ){
		    $(this).css('height', winHeight);	
		}
	});
	
 //menu
	
	//give each h-tag a sequential id
	$(".slide").each(function(index) {
	  $(this).attr('id', ('part' + index));
	});
	
	//make nav lists
	$('.wrapper').append('<nav role="navigation" id="toc"><h4><abbr title="Table of Contents">TOC</abbr></h4><ol></ol></nav><nav id="next-prev"><ul class="group"><li id="previous"></li><li id="next"></li><li class="follow"><a href="http://RachelNabors.com/words-and-pictures">RachelNabors.com/words-and-pictures</a></li></ul></nav>');
	
	//get the h2-3's from each section
	$("h2,h3").each(function(){
	//add them to a list
		$(this).clone()
		.replaceWith("<li><a href=''>" + $(this).text() + "</a></li>").appendTo("#toc ol");
	});
	//link each h2-3 to its section
	$("#toc a").each(function(index) {
	  $(this).attr('href', ('#part' + index));
	});
	//rename first link
	$("#toc li:first a").text('Telling Stories with Words and Pictures');
	$("#toc li:last").remove();
	
  //menu behavior

	//clicking menu link gently scrolls to section
	$("nav a").click(function(event){		//http://www.sycha.com/jquery-smooth-scrolling-internal-anchor-links
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});
	
	//hilights the current menu item on click
	$("#toc a").click(function() {
	  $(this).parent().addClass("current").siblings().removeClass("current");//and remove current class from sibling items
	});
	
	//hilights current menu item on scroll http://stackoverflow.com/questions/3893124/use-jquery-to-change-a-class-dependent-on-scroll-position
	var $sections = $('.slide');  // all slides
	var $navs = $('nav > ol > li, nav > ul > li');  // all nav sections
	
	var topsArray = $sections.map(function() {
	    return $(this).position().top - 300;  // make array of the tops of content
	}).get();                                 //   sections, with some padding to
	                                          //   change the class a little sooner
	var len = topsArray.length;  // quantity of total sections
	var currentIndex = 0;        // current section selected
	
	var getCurrent = function( top ) {   // take the current top position, and see which
	    for( var i = 0; i < len; i++ ) {   // index should be displayed
	        if( top > topsArray[i] && topsArray[i+1] && top < topsArray[i+1] ) {
	            return i;
	        }
	    }
	};
	
	   // on scroll,  call the getCurrent() function above, and see if we are in the
	   //    current displayed section. If not, add the "current" class to the
	   //    current nav, and remove it from the previous "current" nav
	$(document).scroll(function(e) {
	    var scrollTop = $(this).scrollTop();
	    var checkIndex = getCurrent( scrollTop );
	    if( checkIndex !== currentIndex ) {
	        currentIndex = checkIndex;
	        $navs.eq( currentIndex ).addClass("current").siblings().removeClass("current")
	        .end().next('li').children('a').clone().appendTo('#next').siblings().remove()
	        .end().end().end().end().end().prev('li').children('a').clone().appendTo('#previous').siblings().remove(); //and update the next/prev menu accordingly
	    }
	});

	//slide out TOC menu
	$("#toc").hoverIntent(function() {
		$(this).animate({
		    left: "0"
		  }, 1000 );
	}, function() {
		$(this).animate({
		    left: "-20%"
		  }, 1000 );
	});

	//"swing" the li's in the toc menu
	$("#toc li").hoverIntent(function() {
		$(this).animate({
		    paddingLeft: "+=5px"
		  }, 200 );
	}, function() {
		$(this).animate({
		  	paddingLeft: "-=5px"
		  }, 200 );
	});
	
	//make the above work with smooth scrolling
	
	//make the above work on page load
});