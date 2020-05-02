var customSearch;

(function($){
  "use strict";

	var switchSidebarTab = function(e) {
		var self = $(this),
				target = self.attr('data-toggle'),
				counter_target = target === 'toc' ? 'bio' : 'toc';
		if (self.hasClass('active')) {
			return;
		}
		toggleActive(self, e);
		toggleActive(self.siblings('.dark-btn'), e);
		$('.site-' + counter_target).toggleClass('show');
		setTimeout(function() {
			$('.site-' + counter_target).hide();
			$('.site-' + target).show();
			setTimeout(function() {
				$('.site-' + target).toggleClass('show');
			}, 50);
		}, 240);
	};
  
  var toggleActive = function(self, e) {
    e.preventDefault();
    self.toggleClass('active');
  };

  var scrolltoElement = function(e) {
    e.preventDefault();
    var self = $(this),
        correction = e.data ? e.data.correction ? e.data.correction : 0 : 0;
    $('html, body').animate({'scrollTop': $(self.attr('href')).offset().top - correction }, 400);
  };

  var openBio = function(e) {
    $('body').addClass('bio-open');
    $('.site-nav-switch').addClass('active');
  };

  var closeBio = function(e) {
    $('body').removeClass('bio-open');
    $('.site-nav-switch').removeClass('active');
  };
  
  $(function() {
	  $(".post-list, #footer, #page-nav").addClass('show');
	  $('.site-nav-switch').on('click', openBio);
	  $('.site-wrapper .overlay, #sidebar-close').on('click', closeBio);
	  $('.window-nav, .go-comment, .site-toc a').on('click', scrolltoElement);
	  $('.sidebar-switch .dark-btn').on('click', switchSidebarTab);
	  
	  setTimeout(function() {
	    $('#loading-bar-wrapper').fadeOut(500);
	  }, 300);
	});

})(jQuery);
