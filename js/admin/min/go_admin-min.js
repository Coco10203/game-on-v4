function go_update_go_ajax(){var t=GO_EVERY_PAGE_DATA.nonces.go_upgade4;jQuery.ajax({type:"post",url:MyAjax.ajaxurl,data:{_ajax_nonce:t,action:"go_upgade4",loot:!0},success:function(t){alert("Done.  Hope that helps :)")}})}function go_update_go_ajax_no_task_loot(){var t=GO_EVERY_PAGE_DATA.nonces.go_upgade4;jQuery.ajax({type:"post",url:MyAjax.ajaxurl,data:{_ajax_nonce:t,action:"go_upgade4",loot:!1},success:function(t){alert("Done.  Hope that helps :)")}})}function go_sounds(t){if("store"==t){var e=new Audio(PluginDir.url+"media/gold.mp3");e.play()}else if("timer"==t){var e=new Audio(PluginDir.url+"media/airhorn.mp3");e.play()}}function go_admin_bar_stats_page_button(t){var e=GO_EVERY_PAGE_DATA.nonces.go_admin_bar_stats;jQuery.ajax({type:"post",url:MyAjax.ajaxurl,data:{_ajax_nonce:e,action:"go_admin_bar_stats",uid:t},success:function(e){-1!==e&&(jQuery("#go_stats_white_overlay").html(e),jQuery("#go_stats_page_black_bg").show(),jQuery("#go_stats_white_overlay").show(),jQuery("#go_stats_hidden_input").val(t),jQuery("html").addClass("go_no_scroll"),jQuery(".go_stats_body_selectors").click(function(){switch(jQuery("#go_stats_help_video").length&&(myplayer=videojs("go_stats_help_video"),myplayer.pause(),myplayer.dispose()),body=jQuery("#go_stats_body"),body.empty(),body.css("background-color","#FFF"),jQuery(".go_stats_body_selectors").css("font-weight","normal"),tab=jQuery(this).attr("tab"),jQuery(this).css("font-weight","bold"),tab){case"help":go_stats_help();break;case"tasks":go_stats_task_list();break;case"items":go_stats_item_list();break;case"rewards":go_stats_rewards_list();break;case"activity":go_stats_activity_list();break;case"penalties":go_stats_penalties_list();break;case"badges":go_stats_badges_list();break;case"leaderboard":go_stats_leaderboard();break}}),jQuery("#go_stats_body_tasks").click(),"none"!=jQuery("#go_stats_white_overlay").css("display")&&(jQuery(document).keydown(function(t){"none"==jQuery(".white_content").css("display")&&27==t.keyCode&&go_stats_close()}),jQuery("#go_stats_page_black_bg").click(function(){go_stats_close()})))}})}function go_stats_close(){jQuery("#go_stats_help_video").length&&(myplayer=videojs("go_stats_help_video"),myplayer.pause(),myplayer.dispose()),jQuery("html").removeClass("go_no_scroll"),jQuery("#go_stats_white_overlay").hide(),jQuery("#go_stats_page_black_bg").hide(),jQuery("#go_stats_lay").hide()}function go_stats_help(){jQuery("#go_stats_body").append('<div id="go_stats_help_video_container"></div>'),jQuery("#go_stats_help_video_container").css({margin:"0px 10% 0px 15%",height:"100%",width:"100%"}),jQuery("#go_option_help_video").clone().prop("id","go_stats_help_video").attr("width","70%").attr("height","100%").appendTo("#go_stats_help_video_container"),jQuery("#go_stats_help_video").length&&(myplayer=videojs("go_stats_help_video"),myplayer.ready(function(){myplayer.src("http://maclab.guhsd.net/go/video/stats/help.mp4"),myplayer.load(),myplayer.play(),videoStatus="playing"}))}function go_stats_task_list(){var t=GO_EVERY_PAGE_DATA.nonces.go_stats_task_list;jQuery.ajax({type:"post",url:MyAjax.ajaxurl,data:{_ajax_nonce:t,action:"go_stats_task_list",user_id:jQuery("#go_stats_hidden_input").val()},success:function(t){if(-1!==t){jQuery("#go_stats_datatable").dataTable().fnDestroy(),jQuery("#go_stats_body").html(t),jQuery("#go_stats_datatable").dataTable({stateSave:!0,bPaginate:!0,colReorder:!0,aaSorting:[[1,"asc"]],destroy:!0,dom:"Bfrtip",buttons:[]})}}})}function go_stats_move_stage(t,e){task_message=jQuery("#go_stats_task_"+t+"_message"),""!=task_message.val()?message=task_message.val():message=task_message.prop("placeholder");var a=jQuery('div[task="'+t+'"][stage="'+e+'"]').attr("count");void 0!==a&&""!=a||(a=0);var s=GO_EVERY_PAGE_DATA.nonces.go_stats_move_stage;jQuery.ajax({type:"post",url:MyAjax.ajaxurl,data:{_ajax_nonce:s,action:"go_stats_move_stage",user_id:jQuery("#go_stats_hidden_input").val(),task_id:t,status:e,count:a,message:message},success:function(a){if(-1!==a){for(task_message.val(""),i=5;i>0;i--)i<=e?jQuery('div[task="'+t+'"][stage="'+i+'"]').addClass("completed"):(jQuery('div[task="'+t+'"][stage="'+i+'"]').hasClass("stage_url")&&(jQuery('div[task="'+t+'"][stage="'+i+'"]').removeAttr("style"),jQuery('div[task="'+t+'"][stage="'+i+'"]').parent("a").attr("href","#").removeAttr("target")),jQuery('div[task="'+t+'"][stage="'+i+'"]').removeClass("completed").removeClass("stage_url"));var s=JSON.parse(a.substr(a.search('{"type"'),a.length));jQuery("#go_stats_user_points_value").html(parseFloat(jQuery("#go_stats_user_points_value").html())+s.points);var o=parseInt(s.current_rank_points),_=parseInt(s.next_rank_points),r=parseInt(s.max_rank_points),n=s.prestige_name,u=0,l=1,c="",d=0;u=s.current_points-o,0!==_&&(l=_-o),c=r===o?n:u+" / "+l,d=u/l*100,d<=0?d=0:d>=100&&(d=100),s.rank&&jQuery("#go_stats_user_rank").html(s.rank),jQuery("#go_stats_progress_text").html(c),jQuery("#go_stats_progress_fill").css("width",d+"%"),s.abandon&&task_message.parent("li").remove(),jQuery("#go_stats_user_currency_value").html(parseFloat(jQuery("#go_stats_user_currency_value").html())+s.currency),jQuery("#go_stats_user_bonus_currency_value").html(parseFloat(jQuery("#go_stats_user_bonus_currency_value").html())+s.bonus_currency),go_stats_task_list()}}})}function go_stats_item_list(){var t=GO_EVERY_PAGE_DATA.nonces.go_stats_item_list;jQuery.ajax({type:"post",url:MyAjax.ajaxurl,data:{_ajax_nonce:t,action:"go_stats_item_list",user_id:jQuery("#go_stats_hidden_input").val()},success:function(t){-1!==t&&jQuery("#go_stats_body").html(t)}})}function go_stats_rewards_list(){var t=GO_EVERY_PAGE_DATA.nonces.go_stats_rewards_list;jQuery.ajax({type:"post",url:MyAjax.ajaxurl,data:{_ajax_nonce:t,action:"go_stats_rewards_list",user_id:jQuery("#go_stats_hidden_input").val()},success:function(t){-1!==t&&jQuery("#go_stats_body").html(t)}})}function go_stats_activity_list(){var t=GO_EVERY_PAGE_DATA.nonces.go_stats_activity_list;jQuery.ajax({type:"post",url:MyAjax.ajaxurl,data:{_ajax_nonce:t,action:"go_stats_activity_list",user_id:jQuery("#go_stats_hidden_input").val()},success:function(t){if(-1!==t){jQuery("#go_stats_datatable").dataTable().fnDestroy(),jQuery("#go_stats_body").html(t),jQuery("#go_stats_datatable").dataTable({stateSave:!0,bPaginate:!0,colReorder:!0,aaSorting:[[1,"asc"]],destroy:!0,dom:"Bfrtip",buttons:[]})}}})}function go_stats_penalties_list(){var t=GO_EVERY_PAGE_DATA.nonces.go_stats_penalties_list;jQuery.ajax({type:"post",url:MyAjax.ajaxurl,data:{_ajax_nonce:t,action:"go_stats_penalties_list",user_id:jQuery("#go_stats_hidden_input").val()},success:function(t){-1!==t&&jQuery("#go_stats_body").html(t)}})}function go_stats_badges_list(){var t=GO_EVERY_PAGE_DATA.nonces.go_stats_badges_list;jQuery.ajax({type:"post",url:MyAjax.ajaxurl,data:{_ajax_nonce:t,action:"go_stats_badges_list",user_id:jQuery("#go_stats_hidden_input").val()},success:function(t){-1!==t&&jQuery("#go_stats_body").html(t)}})}function go_stats_leaderboard(){var t=GO_EVERY_PAGE_DATA.nonces.go_stats_leaderboard_choices,e=GO_EVERY_PAGE_DATA.nonces.go_stats_leaderboard;jQuery.ajax({type:"post",url:MyAjax.ajaxurl,data:{_ajax_nonce:t,action:"go_stats_leaderboard_choices"},success:function(t){-1!==t&&(jQuery("#go_stats_body").html(t),jQuery(".go_stats_leaderboard_focus_choice, .go_stats_leaderboard_class_choice").click(function(){var t=[],a=[];jQuery(".go_stats_leaderboard_class_choice").each(function(){jQuery(this).prop("checked")&&t.push(jQuery(this).val())}),jQuery(".go_stats_leaderboard_focus_choice").each(function(){jQuery(this).prop("checked")&&a.push(jQuery(this).val())}),jQuery.ajax({type:"post",url:MyAjax.ajaxurl,data:{_ajax_nonce:e,action:"go_stats_leaderboard",class_a_choice:t,focuses:a,date:jQuery(".go_stats_leaderboard_date_choice:checked").val()},success:function(t){-1!==t&&jQuery("#go_stats_leaderboard").html(t)}})}),jQuery(".go_stats_leaderboard_class_choice").first().click())}})}function decimalAdjust(t,e,a){return void 0===a||0==+a?Math[t](e):(e=+e,a=+a,isNaN(e)||"number"!=typeof a||a%1!=0?NaN:(e=e.toString().split("e"),e=Math[t](+(e[0]+"e"+(e[1]?+e[1]-a:-a))),e=e.toString().split("e"),+(e[0]+"e"+(e[1]?+e[1]+a:a))))}jQuery("input,select").bind("keydown",function(t){13===(t.keyCode||t.which)&&(t.preventDefault(),jQuery("input, select, textarea")[jQuery("input,select,textarea").index(this)+1].focus())}),jQuery(document).ready(function(){-1==jQuery("#parent").val()?jQuery("#acf-term-fields").hide():(jQuery("#acf-term-fields").show(),jQuery("h2").show()),jQuery("#parent").change(function(){-1==jQuery(this).val()?jQuery("#acf-term-fields").hide():(jQuery("#acf-term-fields").show(),jQuery("h2").show())})}),jQuery(document).ready(function(){jQuery("#go_tool_update").click(go_update_go_ajax),jQuery("#go_tool_update_no_loot").click(go_update_go_ajax_no_task_loot)}),String.prototype.getMid=function(t,e){if("string"==typeof t&&"string"==typeof e){var a=t.length,s=this.length-(t.length+e.length);return this.substr(a,s)}"string"!=typeof t&&"string"!=typeof e?console.error("String.prototype.getMid expects two strings as args."):"string"!=typeof t?console.error("String.prototype.getMid expects 1st arg to be string."):"string"!=typeof e&&console.error("String.prototype.getMid expects 2nd arg to be string.")},Math.round10||(Math.round10=function(t,e){return decimalAdjust("round",t,e)}),Math.floor10||(Math.floor10=function(t,e){return decimalAdjust("floor",t,e)}),Math.ceil10||(Math.ceil10=function(t,e){return decimalAdjust("ceil",t,e)}),jQuery.prototype.go_prev_n=function(t,e){if(void 0===t)return console.error("Game On Error: go_prev_n() requires at least one argument."),null;"int"!=typeof t&&(t=Number.parseInt(t));for(var a=null,s=0;s<t;s++)if(0===s)a=void 0!==e?jQuery(this).prev(e):jQuery(this).prev();else{if(null===a)break;a=void 0!==e?jQuery(a).prev(e):jQuery(a).prev()}return a};