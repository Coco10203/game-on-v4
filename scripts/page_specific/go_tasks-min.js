function go_task_abandon(){jQuery.ajax({type:"POST",data:{_ajax_nonce:go_task_data.go_taskabandon_nonce,action:"go_task_abandon",user_id:go_task_data.userID,post_id:go_task_data.ID,encounter_points:go_task_data.pointsFloor,encounter_currency:go_task_data.currencyFloor,encounter_bonus:go_task_data.bonusFloor},success:function(e){-1!==e&&(window.location=go_task_data.homeURL)}})}function check_locks(){0!=jQuery(".go_test_list").length&&jQuery(".go_test_submit_div").show();var e=jQuery("#go_upload_form").attr("uploaded");if(0!=jQuery(".go_test_list").length&&0!=jQuery("#go_upload_form").length?(0==jQuery("#go_pass_lock").length&&"true"!==jQuery("#go_button").attr("admin_lock")&&jQuery("#go_button").attr("disabled","true"),jQuery(".go_test_submit").click(function(){var t=jQuery(".go_test_list"),r=jQuery("#go_test_error_msg").text();if(t.length>1){for(var a=0,_=0;_<t.length;_++){var o="#"+t[_].id+" input:checked";jQuery(o).length>=1?a++:("Please answer all questions!"!=r?jQuery("#go_test_error_msg").text("Please answer all questions!"):flash_error_msg("#go_test_error_msg"),go_disable_loading())}if(a>=t.length&&1==e)task_unlock();else{if(a<t.length&&1!=e)var s="Please answer all questions and upload a file!";else if(a<t.length)var s="Please answer all questions!";else if(1!=e)var s="Please upload a file!";null!=typeof s&&(r!=s?jQuery("#go_test_error_msg").text(s):flash_error_msg("#go_test_error_msg"),go_disable_loading())}}else if(jQuery(".go_test_list input:checked").length>=1&&1==e)task_unlock();else{if(0==jQuery(".go_test_list input:checked").length&&1!=e)var s="Please answer the question and upload a file!";else if(0==jQuery(".go_test_list input:checked").length)var s="Please answer the question!";else if(1!=e)var s="Please upload a file!";null!=typeof s&&(r!=s?jQuery("#go_test_error_msg").text(s):flash_error_msg("#go_test_error_msg"),go_disable_loading())}}),jQuery("#go_upload_submit").click(function(){var t=jQuery(".go_test_list"),r=jQuery("#go_test_error_msg").text();if(t.length>1){for(var a=0,_=0;_<t.length;_++){var o="#"+t[_].id+" input:checked";jQuery(o).length>=1?a++:("Please answer all questions!"!=r?jQuery("#go_test_error_msg").text("Please answer all questions!"):flash_error_msg("#go_test_error_msg"),go_disable_loading())}if(a>=t.length&&1==e)task_unlock();else{if(a<t.length&&1!=e)var s="Please answer all questions and upload a file!";else if(a<t.length)var s="Please answer all questions!";else if(1!=e)var s="Please upload a file!";null!=typeof s&&(r!=s?jQuery("#go_test_error_msg").text(s):flash_error_msg("#go_test_error_msg"),go_disable_loading())}}else if(jQuery(".go_test_list input:checked").length>=1&&1==e)task_unlock();else{if(0==jQuery(".go_test_list input:checked").length&&1!=e)var s="Please answer the question and upload a file!";else if(0==jQuery(".go_test_list input:checked").length)var s="Please answer the question!";else if(1!=e)var s="Please upload a file!";null!=typeof s&&(r!=s?jQuery("#go_test_error_msg").text(s):flash_error_msg("#go_test_error_msg"),go_disable_loading())}})):0!=jQuery(".go_test_list").length?(0==jQuery("#go_pass_lock").length&&"true"!==jQuery("#go_button").attr("admin_lock")&&jQuery("#go_button").attr("disabled","true"),jQuery(".go_test_submit").click(function(){var e=jQuery(".go_test_list");if(e.length>1){for(var t=0,r=0;r<e.length;r++){var a="#"+e[r].id+" input:checked";jQuery(a).length>=1&&t++}t>=e.length?task_unlock():("Please answer all questions!"!=jQuery("#go_test_error_msg").text()?jQuery("#go_test_error_msg").text("Please answer all questions!"):flash_error_msg("#go_test_error_msg"),go_disable_loading())}else jQuery(".go_test_list input:checked").length>=1?task_unlock():("Please answer the question!"!=jQuery("#go_test_error_msg").text()?jQuery("#go_test_error_msg").text("Please answer the question!"):flash_error_msg("#go_test_error_msg"),go_disable_loading())})):0!=jQuery("#go_upload_form").length&&0==e&&(0==jQuery("#go_pass_lock").length&&"true"!==jQuery("#go_button").attr("admin_lock")&&jQuery("#go_button").attr("disabled","true"),jQuery("#go_upload_submit").click(function(){if(jQuery("#go_pass_lock").length>0&&0==jQuery("#go_pass_lock").attr("value").length){var e="Retrieve the password from "+go_task_data.admin_name+".";jQuery("#go_stage_error_msg").text()!=e?jQuery("#go_stage_error_msg").text(e):flash_error_msg("#go_stage_error_msg"),go_disable_loading()}else task_unlock()})),(jQuery("#go_pass_lock").length>0&&0==jQuery("#go_pass_lock").attr("value").length&&0!=jQuery("#go_upload_form").length&&0==e||0!=jQuery(".go_test_list").length)&&jQuery("#go_stage_error_msg").is(":visible")){var t="Retrieve the password from "+go_task_data.admin_name+".";jQuery("#go_stage_error_msg").text()!=t?jQuery("#go_stage_error_msg").text(t):flash_error_msg("#go_stage_error_msg"),go_disable_loading()}}function flash_error_msg(e){var t=jQuery(e).css("background-color");void 0===typeof t&&(t="white"),jQuery(e).animate({color:t},200,function(){jQuery(e).animate({color:"red"},200)})}function task_unlock(){if(0!=jQuery(".go_test_list").length){var e=jQuery(".go_test_list"),t=e.length;if(jQuery(".go_test_list :checked").length>=t){var e=jQuery(".go_test_list"),t=e.length,r=[];if(jQuery(".go_test_list").length>1){for(var a=[],_=0;_<t;_++){var o=e[_].children[1].children[0].type;r.push(o);var s="#"+e[_].id+" :checked",g=jQuery(s);if("radio"==o)void 0!=g[0]&&a.push(g[0].value);else if("checkbox"==o){for(var n=[],u=0;u<g.length;u++)n.push(g[u].value);var l=n.join("### ");a.push(l)}}var i=a.join("#### "),d=r.join("### ")}else{var c=jQuery(".go_test_list li input:checked"),d=jQuery(".go_test_list li input").first().attr("type");if("radio"==d)var i=c[0].value;else if("checkbox"==d){for(var i=[],u=0;u<c.length;u++)i.push(c[u].value);i=i.join("### ")}}}else jQuery("#go_test_error_msg").text("Answer all questions!")}if("on"!==jQuery("#go_button").attr("repeat"))var y=jQuery("#go_button").attr("status")-2;else var y=jQuery("#go_button").attr("status")-1;jQuery.ajax({type:"POST",data:{_ajax_nonce:go_task_data.go_unlock_stage,action:"go_unlock_stage",task_id:go_task_data.ID,user_id:go_task_data.userID,list_size:t,chosen_answer:i,type:d,status:y,points:go_task_data.points_str},success:function(r){if(1===r||"1"===r){jQuery(".go_test_container").hide("slow"),jQuery("#test_failure_msg").hide("slow"),jQuery(".go_test_submit_div").hide("slow"),jQuery(".go_wrong_answer_marker").hide(),jQuery("#go_button").attr("admin_lock")?jQuery("#go_test_error_msg").text("This stage can only be unlocked by "+go_task_data.admin_name+"."):(jQuery("#go_button").removeAttr("disabled"),jQuery("#go_test_error_msg").attr("style","color:green"),jQuery("#go_test_error_msg").text("Well done, continue!"));var a=go_task_data.test_e,_=go_task_data.test_a,o=go_task_data.test_c,s=go_task_data.test_m;(0==y&&"on"==a||1==y&&"on"==_||2==y&&"on"==o||3==y&&"on"==s)&&go_test_point_update()}else{if("string"==typeof r&&t>1)for(var g=r.split(", "),n=0;n<e.length;n++){var u="#"+e[n].id;-1===jQuery.inArray(u,g)?(jQuery(u+" .go_wrong_answer_marker").is(":visible")&&jQuery(u+" .go_wrong_answer_marker").hide(),jQuery(u+" .go_correct_answer_marker").is(":visible")||jQuery(u+" .go_correct_answer_marker").show()):(jQuery(u+" .go_correct_answer_marker").is(":visible")&&jQuery(u+" .go_correct_answer_marker").hide(),jQuery(u+" .go_wrong_answer_marker").is(":visible")||jQuery(u+" .go_wrong_answer_marker").show())}"Wrong answer, try again!"!=jQuery("#go_test_error_msg").text()?jQuery("#go_test_error_msg").text("Wrong answer, try again!"):flash_error_msg("#go_test_error_msg"),go_disable_loading()}}})}function go_test_point_update(){if("on"!==jQuery("#go_button").attr("repeat"))var e=jQuery("#go_button").attr("status")-2;else var e=jQuery("#go_button").attr("status")-1;jQuery.ajax({type:"POST",data:{_ajax_nonce:go_task_data.go_test_point_update,action:"go_test_point_update",points:go_task_data.points_str,currency:go_task_data.currency_str,bonus_currency:go_task_data.bonus_currency_str,status:e,page_id:go_task_data.page_id,user_id:go_task_data.userID,post_id:go_task_data.ID,update_percent:go_task_data.date_update_percent},success:function(e){if(-1!==e){var t=jQuery("#go_admin_bar_progress_bar").css("background-color");jQuery("#go_content").append(e),jQuery("#go_admin_bar_progress_bar").css({"background-color":t})}}})}function go_repeat_replace(){jQuery("#go_repeat_unclicked").remove(),jQuery("#go_repeat_clicked").show("slow")}function go_enable_loading(e){e.disabled=!0,e.innerHTML='<span class="go_loading"></span>'+e.innerHTML}function go_disable_loading(){jQuery("#go_button .go_loading").remove(),jQuery("#go_button").prop("disabled","")}function task_stage_change(e){go_enable_loading(e);var t=!1;if(void 0!==jQuery(e).attr("undo")&&"true"===jQuery(e).attr("undo").toLowerCase()&&(t=!0),!t&&jQuery("#go_button").length>0){if("true"===jQuery("#go_button").attr("admin_lock"))return jQuery("#go_stage_error_msg").show(),jQuery("#go_button").removeAttr("disabled"),void jQuery("#go_stage_error_msg").text("This stage can only be unlocked by "+go_task_data.admin_name+".")}if(!t&&jQuery("#go_pass_lock").length>0){var r=jQuery("#go_pass_lock").attr("value").length>0;if(!r){jQuery("#go_stage_error_msg").show();var a="Retrieve the password from "+go_task_data.admin_name+".";return jQuery("#go_stage_error_msg").text()!=a?jQuery("#go_stage_error_msg").text(a):flash_error_msg("#go_stage_error_msg"),void go_disable_loading()}}else if(!t&&jQuery("#go_url_key").length>0){var _=jQuery("#go_url_key").attr("value").replace(/\s+/,"");if(!(_.length>0)){jQuery("#go_stage_error_msg").show();var a="Enter a valid URL.";return jQuery("#go_stage_error_msg").text()!=a?jQuery("#go_stage_error_msg").text(a):flash_error_msg("#go_stage_error_msg"),void go_disable_loading()}if(!_.match(/^(http:\/\/|https:\/\/).*\..*$/)||_.lastIndexOf("http://")>0||_.lastIndexOf("https://")>0){jQuery("#go_stage_error_msg").show();var a="Enter a valid URL.";return jQuery("#go_stage_error_msg").text()!=a?jQuery("#go_stage_error_msg").text(a):flash_error_msg("#go_stage_error_msg"),void go_disable_loading()}var o=!0}var s=jQuery("#go_admin_bar_progress_bar").css("background-color");if(0!=jQuery("#go_button").length)var g=jQuery("#go_button").attr("status");else var g=5;jQuery(e).is("#go_back_button")&&0!=jQuery("#new_content").length&&(jQuery("#new_content p").hide("slow"),jQuery(e).remove());var n=!1;"on"===jQuery("#go_button").attr("repeat")?n=!0:"on"===jQuery("#go_back_button").attr("repeat")&&(n=!0),jQuery.ajax({type:"POST",data:{_ajax_nonce:go_task_data.go_task_change_stage,action:"go_task_change_stage",post_id:go_task_data.ID,user_id:go_task_data.userID,admin_name:go_task_data.admin_name,task_count:go_task_data.task_count,status:g,repeat:n,undo:t,pass:r?jQuery("#go_pass_lock").attr("value"):"",url:o?jQuery("#go_url_key").attr("value"):"",page_id:go_task_data.page_id,points:go_task_data.points_array,currency:go_task_data.currency_array,bonus_currency:go_task_data.bonus_currency_array,date_update_percent:go_task_data.date_update_percent,next_post_id_in_chain:go_task_data.next_post_id_in_chain,last_in_chain:go_task_data.last_in_chain,number_of_stages:go_task_data.number_of_stages},success:function(e){var t={};try{var t=JSON.parse(e)}catch(e){t={status:-1,html:"",rewards:{gold:0}}}if(-1===Number.parseInt(t.status)){jQuery("#go_stage_error_msg").show();var r="Retrieve the password from "+go_task_data.admin_name+".";jQuery("#go_stage_error_msg").text()!=r?jQuery("#go_stage_error_msg").text(r):flash_error_msg("#go_stage_error_msg"),go_disable_loading()}else 302===Number.parseInt(t.status)?window.location=t.location:(jQuery("#go_content").html(t.html),Vids_Fit_and_Box(),jQuery("#go_admin_bar_progress_bar").css({"background-color":s}),jQuery("#new_content").css("display","none"),jQuery("#new_content").show("slow"),2==jQuery("#go_button").attr("status")&&jQuery("#new_content").children().first().remove(),jQuery("#go_button").ready(function(){check_locks()}),make_clickable("#go_url_key"),make_clickable("#go_pass_lock"),0!==t.rewards.gold&&go_sounds("store"));Vids_Fit_and_Box()}})}function make_clickable(e){jQuery(e).keyup(function(e){13===e.which&&jQuery("#go_button").click()})}jQuery(document).ready(function(){jQuery.ajaxSetup({url:go_task_data.url+="/wp-admin/admin-ajax.php"}),check_locks();var e=go_task_data.status,t=go_task_data.currency;0===e&&t>0&&go_sounds("store"),make_clickable()});