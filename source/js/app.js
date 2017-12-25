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
    if (self.hasClass("active") === true) {
      self.removeClass("active");
    }
    else {
      self.addClass("active");
    }
  };

  var scrolltoElement = function(e) {
    e.preventDefault();
    var self = $(this),
        correction = e.data ? e.data.correction ? e.data.correction : 0 : 0;
    $('html, body').animate({'scrollTop': $(self.attr('href')).offset().top - correction }, 400);
  };

  var openBio = function(e) {
    var self = $(this);
    toggleActive(self, e);
    $('body').addClass('bio-open');
  };

  var closeBio = function(e) {
    $('body').removeClass('bio-open');
    toggleActive($('.site-nav-switch'), e);
  };
  
  $(function() {
	  $(".post-list, #footer, #page-nav").addClass('show');
	  $('.site-nav-switch').on('click', openBio);
	  $('.site-wrapper .overlay').on('click', closeBio);
	  $('.window-nav, .go-comment, .site-toc a').on('click', scrolltoElement);
	  $('.sidebar-switch .dark-btn').on('click', switchSidebarTab);
	  
	  setTimeout(function() {
	    $('#loading-bar-wrapper').fadeOut(500);
	  }, 300);
	  
	  if (SEARCH_SERVICE === 'google') {
  	  customSearch = new GoogleCustomSearch({
    	  apiKey: GOOGLE_CUSTOM_SEARCH_API_KEY,
    	  engineId: GOOGLE_CUSTOM_SEARCH_ENGINE_ID
  	  });
	  }
	  else if (SEARCH_SERVICE === 'algolia') {
  	  customSearch = new AlgoliaSearch({
    	  apiKey: ALGOLIA_API_KEY,
    	  appId: ALGOLIA_APP_ID,
    	  indexName: ALGOLIA_INDEX_NAME
  	  });
	  }
	  else if (SEARCH_SERVICE === 'hexo') {
  	  customSearch = new HexoSearch();
	  }
	  else if (SEARCH_SERVICE === 'azure') {
  	  customSearch = new AzureSearch({
    	  serviceName: AZURE_SERVICE_NAME,
        indexName: AZURE_INDEX_NAME,
        queryKey: AZURE_QUERY_KEY
  	  });
	  }
	  else if (SEARCH_SERVICE === 'baidu') {
  	  customSearch = new BaiduSearch({
				apiId: BAIDU_API_ID
			});
	  }
	});

})(jQuery);
