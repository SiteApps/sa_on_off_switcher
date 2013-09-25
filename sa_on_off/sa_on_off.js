jQuery(function() {

   jQuery.each(jQuery(".sa_on_off"), function(e) {
      jQuery(this).html('<span><i class="sa_on_off_item_' + jQuery(this).attr("data-current-state") + '"></i></span>');
   });

   jQuery('.sa_on_off').on('turn_on', function(eve, cb) {

      var o = jQuery("i", jQuery(this));
      if (!jQuery(o).hasClass('sa_on_off_item_off'))
         return;

      jQuery(o).animate({"left": "-=39px"}, "slow");
      jQuery(o).removeClass('sa_on_off_item_off');
      jQuery(o).addClass('sa_on_off_item_on');
      jQuery(this).attr("data-current-state", "on");

      if (typeof cb !== 'undefined') {
         cb(jQuery(this));
      }

   });

   jQuery('.sa_on_off').on('turn_off', function(eve, cb) {

      var o = jQuery("i", jQuery(this));
      if (!jQuery(o).hasClass('sa_on_off_item_on'))
         return;

      jQuery(o).animate({"left": "+=39px"}, "slow");
      jQuery(o).removeClass('sa_on_off_item_on');
      jQuery(o).addClass('sa_on_off_item_off');
      jQuery(this).attr("data-current-state", "off");

      if (typeof cb !== 'undefined') {
         cb(jQuery(this));
      }

   });

   jQuery('.sa_on_off').on('run', function(eve) {
      var o = jQuery("i", jQuery(this));
      if (jQuery(o).hasClass('sa_on_off_item_off')) {
         if (typeof eve.turn_on !== 'undefined') {
            jQuery(this).trigger("turn_on", eve.turn_on);
         }
      } else {
         if (jQuery(o).hasClass('sa_on_off_item_on')) {
            if (typeof eve.turn_off !== 'undefined') {
               jQuery(this).trigger("turn_off", eve.turn_off);
            }
         }
      }
   });

});
/*
 
 jQuery('.app_installs_item_on_off').on('click', function() {
 var id = jQuery(this).attr("id").substr(25);
 var action = 1;
 var o = jQuery("i", jQuery(this));
 if (jQuery(o).hasClass('app_installs_item_on')) {
 action = 0;
 }
 
 if (action === 1) {
 jQuery(o).animate({"left": "-=39px"}, "slow");
 jQuery(o).removeClass('app_installs_item_off');
 jQuery(o).addClass('app_installs_item_on');
 } else {
 jQuery(o).animate({"left": "+=39px"}, "slow");
 jQuery(o).removeClass('app_installs_item_on');
 jQuery(o).addClass('app_installs_item_off');
 }
 
 jQuery.post("/Install/changeStatus/" + id + "/" + action, {},
 function(data) {
 if (data.status == 1) {
 check_cloud();
 } else {
 error(data.response);
 if (action === 1) {
 jQuery(o).animate({"left": "+=39px"}, "slow");
 jQuery(o).removeClass('app_installs_item_on');
 jQuery(o).addClass('app_installs_item_off');
 } else {
 jQuery(o).animate({"left": "-=39px"}, "slow");
 jQuery(o).removeClass('app_installs_item_off');
 jQuery(o).addClass('app_installs_item_on');
 }
 }
 }, "json");
 
 });
 
 */