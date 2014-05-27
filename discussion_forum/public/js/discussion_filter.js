// Generated by CoffeeScript 1.6.1
(function() {

  this.DiscussionFilter = (function() {

    function DiscussionFilter() {}

    DiscussionFilter.filterDrop = function(e) {
      var $drop, $items, query;
      $drop = $(e.target).parents('.topic_menu_wrapper, .browse-topic-drop-menu-wrapper');
      query = $(e.target).val();
      $items = $drop.find('a');
      if (query.length === 0) {
        $items.removeClass('hidden');
        return;
      }
      $items.addClass('hidden');
      return $items.each(function(i) {
        var terms, test, thisText;
        thisText = $(this).not('.unread').text();
        $(this).parents('ul').siblings('a').not('.unread').each(function(i) {
          return thisText = thisText + ' ' + $(this).text();
        });
        test = true;
        terms = thisText.split(' ');
        if (thisText.toLowerCase().search(query.toLowerCase()) === -1) {
          test = false;
        }
        if (test) {
          $(this).removeClass('hidden');
          $(this).parent().find('a').removeClass('hidden');
          return $(this).parents('ul').siblings('a').removeClass('hidden');
        }
      });
    };

    return DiscussionFilter;

  })();

}).call(this);
