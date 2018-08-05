function go_update_bonus_loot(){jQuery("#go_bonus_loot").html('<span class="go_loading"></span>');var e=GO_EVERY_PAGE_DATA.nonces.go_update_bonus_loot,o=go_task_data.ID;jQuery.ajax({type:"post",url:MyAjax.ajaxurl,data:{_ajax_nonce:e,action:"go_update_bonus_loot",post_id:o},success:function(e){console.log("Bonus Loot"),console.log(e),jQuery("#go_bonus_loot").remove(),jQuery("#page-container").append(e)}})}function getTimeRemaining(e){var o=Date.parse(e)-Date.parse(new Date),r=Math.floor(o/1e3%60),t=Math.floor(o/1e3/60%60),s=Math.floor(o/36e5%24);return{total:o,days:Math.floor(o/864e5),hours:s,minutes:t,seconds:r}}function initializeClock(e,o){function r(){var e=getTimeRemaining(o);if(e.days=Math.max(0,e.days),s.innerHTML=e.days,e.hours=Math.max(0,e.hours),a.innerHTML=("0"+e.hours).slice(-2),e.minutes=Math.max(0,e.minutes),_.innerHTML=("0"+e.minutes).slice(-2),e.seconds=Math.max(0,e.seconds),n.innerHTML=("0"+e.seconds).slice(-2),e.total=0){clearInterval(g);new Audio(PluginDir.url+"media/airhorn.mp3").play()}}var t=document.getElementById(e),s=t.querySelector(".days"),a=t.querySelector(".hours"),_=t.querySelector(".minutes"),n=t.querySelector(".seconds");r();var i=getTimeRemaining(o),u=i.total;if(console.log(i.total),u>0)var g=setInterval(r,1e3)}function go_timer_abandon(){var e=go_task_data.redirectURL;window.location=e}function flash_error_msg(e){var o=jQuery(e).css("background-color");void 0===typeof o&&(o="white"),jQuery(e).animate({color:o},200,function(){jQuery(e).animate({color:"red"},200)})}function go_enable_loading(e){e.innerHTML='<span class="go_loading"></span>'+e.innerHTML}function go_disable_loading(){console.log("oneclick"),jQuery(".go_loading").remove(),jQuery("#go_button").off().one("click",function(e){task_stage_check_input(this)}),jQuery("#go_back_button").off().one("click",function(e){task_stage_check_input(this)}),jQuery("#go_bonus_button").off().one("click",function(e){go_update_bonus_loot(this)}),jQuery(".progress").closest(".go_checks_and_buttons").addClass("active")}function task_stage_check_input(e){console.log("button clicked"),go_enable_loading(e);var o="";void 0!==jQuery(e).attr("button_type")&&(o=jQuery(e).attr("button_type"));var r="";void 0!==jQuery(e).attr("status")&&(r=jQuery(e).attr("status"));var t="";if(void 0!==jQuery(e).attr("check_type")&&(t=jQuery(e).attr("check_type")),"continue"==o||"complete"==o||"continue_bonus"==o||"complete_bonus"==o)if("password"===t||"unlock"==t){var s=jQuery("#go_result").attr("value").length>0;if(!s){jQuery("#go_stage_error_msg").show();var a="Retrieve the password from "+go_task_data.admin_name+".";return jQuery("#go_stage_error_msg").text()!=a?jQuery("#go_stage_error_msg").text(a):flash_error_msg("#go_stage_error_msg"),void go_disable_loading()}}else if("URL"==t){var _=jQuery("#go_result").attr("value").replace(/\s+/,"");if(!(_.length>0)){jQuery("#go_stage_error_msg").show();var a="Enter a valid URL.";return jQuery("#go_stage_error_msg").text()!=a?jQuery("#go_stage_error_msg").text(a):flash_error_msg("#go_stage_error_msg"),void go_disable_loading()}if(!_.match(/^(http:\/\/|https:\/\/).*\..*$/)||_.lastIndexOf("http://")>0||_.lastIndexOf("https://")>0){jQuery("#go_stage_error_msg").show();var a="Enter a valid URL.";return jQuery("#go_stage_error_msg").text()!=a?jQuery("#go_stage_error_msg").text(a):flash_error_msg("#go_stage_error_msg"),void go_disable_loading()}var n=!0}else if("upload"==t){var i=jQuery("#go_result").attr("value");if(void 0==i){jQuery("#go_stage_error_msg").show();var a="Please attach a file.";return jQuery("#go_stage_error_msg").text()!=a?jQuery("#go_stage_error_msg").text(a):flash_error_msg("#go_stage_error_msg"),void go_disable_loading()}}else if("quiz"==t){var u=jQuery(".go_test_list");if(u.length>=1){for(var g=0,l=0;l<u.length;l++){var c="#"+u[l].id+" input:checked",d=jQuery(c);d.length>=1&&g++}return g>=u.length?(go_quiz_check_answers(r,e),void go_disable_loading()):u.length>1?(jQuery("#go_stage_error_msg").show(),"Please answer all questions!"!=jQuery("#go_stage_error_msg").text()?jQuery("#go_stage_error_msg").text("Please answer all questions!"):flash_error_msg("#go_stage_error_msg"),void go_disable_loading()):(jQuery("#go_stage_error_msg").show(),"Please answer the question!"!=jQuery("#go_stage_error_msg").text()?jQuery("#go_stage_error_msg").text("Please answer the question!"):flash_error_msg("#go_stage_error_msg"),void go_disable_loading())}}task_stage_change(e)}function task_stage_change(e){console.log("change");var o="";void 0!==jQuery(e).attr("button_type")&&(o=jQuery(e).attr("button_type"));var r="";void 0!==jQuery(e).attr("status")&&(r=jQuery(e).attr("status"));var t="";void 0!==jQuery(e).attr("check_type")&&(t=jQuery(e).attr("check_type"));var s=jQuery("#go_admin_bar_progress_bar").css("background-color"),a=jQuery("#go_result").attr("value");if("blog"==t){a=tinyMCE.activeEditor.getContent();var _=jQuery("#go_result_title").attr("value"),n=jQuery("#go_result_title").attr("blog_post_id")}else var _=null;jQuery.ajax({type:"POST",data:{_ajax_nonce:go_task_data.go_task_change_stage,action:"go_task_change_stage",post_id:go_task_data.ID,user_id:go_task_data.userID,status:r,button_type:o,check_type:t,result:a,result_title:_,blog_post_id:n},success:function(e){console.log("success");var o={};try{var o=JSON.parse(e)}catch(e){o={json_status:"101",timer_start:"",button_type:"",time_left:"",html:"",redirect:"",rewards:{gold:0}}}if("101"===Number.parseInt(o.json_status)){console.log(101),jQuery("#go_stage_error_msg").show();var r="Server Error.";jQuery("#go_stage_error_msg").text()!=r?jQuery("#go_stage_error_msg").text(r):flash_error_msg("#go_stage_error_msg")}else if(302===Number.parseInt(o.json_status))console.log(302),window.location=o.location;else if("refresh"==o.json_status)location.reload();else if("bad_password"==o.json_status){jQuery("#go_stage_error_msg").show();var r="Invalid password.";jQuery("#go_stage_error_msg").text()!=r?jQuery("#go_stage_error_msg").text(r):flash_error_msg("#go_stage_error_msg")}else{if("undo"==o.button_type)jQuery("#go_wrapper div").last().hide(),jQuery("#go_wrapper > div").slice(-3).hide("slow",function(){jQuery(this).remove()});else if("undo_last"==o.button_type)jQuery("#go_wrapper div").last().hide(),jQuery("#go_wrapper > div").slice(-2).hide("slow",function(){jQuery(this).remove()});else if("continue"==o.button_type)jQuery("#go_wrapper > div").slice(-1).hide("slow",function(){jQuery(this).remove()});else if("complete"==o.button_type)jQuery("#go_wrapper > div").slice(-1).hide("slow",function(){jQuery(this).remove()});else if("show_bonus"==o.button_type)jQuery("#go_buttons").remove(),jQuery(".go_checks_and_buttons").removeClass("active");else if("continue_bonus"==o.button_type)jQuery("#go_wrapper > div").slice(-1).hide("slow",function(){jQuery(this).remove()});else if("complete_bonus"==o.button_type)jQuery("#go_wrapper > div").slice(-1).hide("slow",function(){jQuery(this).remove()});else if("undo_bonus"==o.button_type)jQuery("#go_wrapper > div").slice(-2).hide("slow",function(){jQuery(this).remove()});else if("undo_last_bonus"==o.button_type)jQuery("#go_wrapper > div").slice(-1).hide("slow",function(){jQuery(this).remove()});else if("abandon_bonus"==o.button_type)jQuery("#go_wrapper > div").slice(-3).remove();else if("abandon"==o.button_type)window.location=o.redirect;else if("timer"==o.button_type){jQuery("#go_wrapper > div").slice(-2).hide("slow",function(){jQuery(this).remove()});var t=new Audio(PluginDir.url+"media/airhorn.mp3");t.play()}jQuery("go_hidden_mce").remove(),go_append(o),jQuery("#notification").html(o.notification),jQuery("#go_admin_bar_progress_bar").css({"background-color":s}),jQuery("#go_button").ready(function(){})}}})}function go_mce(){tinymce.execCommand("mceRemoveEditor",!0,"go_blog_post"),tinymce.execCommand("mceAddEditor",!1,"go_blog_post")}function go_append(e){jQuery(e.html).appendTo("#go_wrapper").stop().hide().show("slow").promise().then(function(){Vids_Fit_and_Box(),go_make_clickable(),go_disable_loading(),go_mce()})}function go_make_clickable(){jQuery(".clickable").keyup(function(e){13===e.which&&jQuery("#go_button").click()})}function go_update_admin_view(e){jQuery.ajax({type:"POST",url:MyAjax.ajaxurl,data:{_ajax_nonce:GO_EVERY_PAGE_DATA.nonces.go_update_admin_view,action:"go_update_admin_view",go_admin_view:e},success:function(e){location.reload()},error:function(e){console.log(e),console.log("fail")}})}function go_quiz_check_answers(e,o){var r=jQuery(".go_test_list"),t=r.length;if(jQuery(".go_test_list :checked").length>=t){var s=[];if(jQuery(".go_test_list").length>1){for(var a=[],_=0;_<t;_++){var n=r[_].children[1].children[0].type;s.push(n);var i="#"+r[_].id+" :checked",u=jQuery(i);if("radio"==n)void 0!=u[0]&&a.push(u[0].value);else if("checkbox"==n){for(var g=[],l=0;l<u.length;l++)g.push(u[l].value);var c=g.join("### ");a.push(c)}}var d=a.join("#### "),y=s.join("### ")}else{var j=jQuery(".go_test_list li input:checked"),y=jQuery(".go_test_list li input").first().attr("type");if("radio"==y)var d=j[0].value;else if("checkbox"==y){for(var d=[],l=0;l<j.length;l++)d.push(j[l].value);d=d.join("### ")}}}jQuery.ajax({type:"POST",data:{_ajax_nonce:go_task_data.go_unlock_stage,action:"go_unlock_stage",task_id:go_task_data.ID,user_id:go_task_data.userID,list_size:t,chosen_answer:d,type:y,status:e},success:function(e){if("refresh"==e)location.reload();else{if(1==e)return jQuery(".go_test_container").hide("slow"),jQuery("#test_failure_msg").hide("slow"),jQuery(".go_test_submit_div").hide("slow"),jQuery(".go_wrong_answer_marker").hide(),jQuery("#go_stage_error_msg").hide(),task_stage_change(o),0;if(0==e)return jQuery("#go_stage_error_msg").show(),jQuery("#go_stage_error_msg").text("Wrong answer, try again!"),1;if("string"==typeof e&&t>1){for(var s=e.split(", "),a=0;a<r.length;a++){var _="#"+r[a].id;-1===jQuery.inArray(_,s)?(jQuery(_+" .go_wrong_answer_marker").is(":visible")&&jQuery(_+" .go_wrong_answer_marker").hide(),jQuery(_+" .go_correct_answer_marker").is(":visible")||jQuery(_+" .go_correct_answer_marker").show()):(jQuery(_+" .go_correct_answer_marker").is(":visible")&&jQuery(_+" .go_correct_answer_marker").hide(),jQuery(_+" .go_wrong_answer_marker").is(":visible")||jQuery(_+" .go_wrong_answer_marker").show())}return void("Wrong answer, try again!"!=jQuery("#go_stage_error_msg").text()?(jQuery("#go_stage_error_msg").show(),jQuery("#go_stage_error_msg").text("Wrong answer, try again!")):flash_error_msg("#go_stage_error_msg"))}}}})}jQuery(document).ready(function(){jQuery("#go_hidden_mce").remove(),go_mce(),jQuery.ajaxSetup({url:go_task_data.url+="/wp-admin/admin-ajax.php"});var e=go_task_data.status,o=go_task_data.currency;0===e&&o>0&&go_sounds("store"),go_make_clickable(),jQuery(".go_stage_message").show("slow"),jQuery(".go_checks_and_buttons").show("slow"),jQuery("#go_button").one("click",function(e){task_stage_check_input(this)}),jQuery("#go_back_button").one("click",function(e){task_stage_check_input(this)}),jQuery("#go_bonus_button").one("click",function(e){go_update_bonus_loot(this)}),jQuery(".progress").closest(".go_checks_and_buttons").addClass("active"),jQuery("#go_admin_override").appendTo(".go_locks"),jQuery("#go_admin_override").click(function(){jQuery(".go_password").show()})});