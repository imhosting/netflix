//
//

//
$(document).ready(function() {
	
	////////////////
	// Dynamic Strings
	////////////////
	$niche_name = "Netflix Premium";
	$console_processing_title = "Processing...";
	$console_process_msg_1 = "Processing your request...";
	$console_process_msg_2_1 = "Preparing your";
	$console_process_msg_2_2 = ".APK download files...";
	$console_process_msg_3 = ".APK download files are ready!";
	$console_process_msg_4= "Performing verification...";
	$console_process_msg_5 = "Automatic verification failed";
	$console_process_msg_6 = "Please verify manually";
	
	////////////////
	// Verification timer
	////////////////
	var $human_verification_timer_value = '180'; //Countdown remaing time in seconds	
	
	////////////////
	// Audio Effects
	////////////////
	$sound_setting = 1;		
	ion.sound({
		sounds: [
			{
				name: "button",
				path: "audio/",
				volume: 1
			},
			{
				name: "transition-1",
				path: "audio/",
				volume: 0.9
			},
			{
				name: "fail",
				path: "audio/",
				volume: 0.7
			},
			{
				name: "transition-2",
				path: "audio/",
				volume: 0.7
			}
		],
		path: "audio/",
		preload: true,
		multiplay: true
	});
	
	////////////////
	// Particles
	//////////////// 
	particlesJS.load('app-particles', 'js/particlesjs-config.json');
		
	////////////////
	// Platform Select
	////////////////
	var $selected_platform_option = '';	
	function fixplatformBox($platform_parent_class) {
		resetplatformBoxes();
		if ($platform_parent_class.hasClass('platform-item-1')) {
			$selected_platform_option = 'Android';
			$platform_icon = "<i class='fab fa-android platform-select-icon'></i>";
		}
		if ($platform_parent_class.hasClass('platform-item-2')) {
			$selected_platform_option = 'iOS';
			$platform_icon = "<i class='fab fa-apple platform-select-icon'></i>";
		}
		$platform_parent_class.addClass('active');
		$platform_parent_class.addClass('animated pulse').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass('animated pulse');
		});	
	}	
	function resetplatformBoxes() {
		var $platform_list = $('.platform-item-1, .platform-item-2');	
		if ($platform_list.hasClass('active')) {
			$platform_list.removeClass('active');
		}
	}
	$('.platform-item').click(function() {
		if ($(this).hasClass('active')) {			
		} else {
			if ($sound_setting == 1) {
				ion.sound.play("button");
			}
		}
		fixplatformBox($(this));	
	});
	
	////////////////
	// Console Process
	////////////////
	$('#process-trigger').click(function () {
		if ($sound_setting == 1) {
			ion.sound.play("button");
		}
		var $selected_platform = $selected_platform_option;
		if ($selected_platform_option == '') {
			$(".platform-select-wrapper").addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).removeClass('shake animated');
			});
		}
		else {
			
				
				
					var data1 =`<div id="processing-step-wrapper" class="processing-step-wrapper">
					<div class="processing-modal-wrapper animated bounceIn">	
						<div class="processing-content">	
							<div class="console-process-icon-wrapper">
								<i class="las la-cog fa-spin"></i>
							</div>
							<div class="console-process-msg-wrapper">
								<div class="console-process-msg">Preparing your Netflix Premium .APK download files...</div>
							</div>
							<div class="console-process-loading-bar-wrapper animated bounceIn animation-delay-200">
								<div id="consoleProcessBar" class="console-process-loading-bar"><div style="width: 91.7172px; overflow: hidden;">100%&nbsp;</div></div>
							</div>
						</div>
					</div>
				</div>
				` ;

					if ($sound_setting == 1) {
						ion.sound.play("transition-2");
					}
					$('.download-app-wrapper').html(data1).hide().fadeIn();
					$('.app-downloader-header-intro h1').html($console_processing_title);
					function consoleProcessBar(percent, $element, duration) {
						var consoleProcessBarWidth = percent * $element.width() / 100;
						$element.find('div').animate({ width: consoleProcessBarWidth }, duration).html(percent + "%&nbsp;");
					}
					consoleProcessBar(0, $('#consoleProcessBar'), 1);
					consoleProcessBar(100, $('#consoleProcessBar'), 23000);
					$('.console-process-msg').html($console_process_msg_1);	
					$('.console-process-msg').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('animated bounceIn');	
					});
					setTimeout(function() {
						$('.console-process-msg').html($console_process_msg_2_1 + ' ' + $niche_name + ' ' + $console_process_msg_2_2);	
						$('.console-process-msg').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
							$(this).removeClass('animated bounceIn');	
						});																	
					}, 3000 );	
					setTimeout(function() {
						$('.console-process-icon-wrapper').html('<span class="console-process-msg-success"><i class="las la-check"></i></span>');	
						$('.console-process-icon-wrapper').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
							$(this).removeClass('animated bounceIn');	
						});	
						$('.console-process-msg').html('<span class="console-process-msg-success">' + $niche_name + ' ' + $console_process_msg_3 + '</span>');	
						$('.console-process-msg').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
							$(this).removeClass('animated bounceIn');	
						});																			
					}, 10000 );	
					setTimeout(function() {
						$('.console-process-icon-wrapper').html('<i class="las la-cog fa-spin"></i>');	
						$('.console-process-icon-wrapper').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
							$(this).removeClass('animated bounceIn');	
						});	
						$('.console-process-msg').html($console_process_msg_4);	
						$('.console-process-msg').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
							$(this).removeClass('animated bounceIn');	
						});																			
					}, 12500 );	
					setTimeout(function() {
						if ($sound_setting == 1) {
							ion.sound.play("fail");
						}	
						$('.console-process-icon-wrapper').html('<span class="console-process-msg-error"><i class="las la-times"></i></span>');
						$('.console-process-icon-wrapper').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
							$(this).removeClass('animated bounceIn');	
						});	
						$('.console-process-msg').html('<span class="console-process-msg-error">' + $console_process_msg_5 +'</span>');	
						$('.console-process-msg').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
							$(this).removeClass('animated bounceIn');	
						});	
					}, 15500 );
					setTimeout(function() {
						$('.console-process-icon-wrapper').html('<i class="las la-info-circle"></i>');
						$('.console-process-icon-wrapper').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
							$(this).removeClass('animated bounceIn');	
						});	
						$('.console-process-msg').html($console_process_msg_6);	
						$('.console-process-msg').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
							$(this).removeClass('animated bounceIn');	
						});	
					}, 18000 );
					setTimeout(function() {
						$('.processing-modal-wrapper').addClass('animated bounceOut');																
					}, 20500 );
					setTimeout(function() {
						
							
								var data2= `<div id="human-verification-wrapper" class="human-verification-wrapper animated bounceIn"> <div class="verification-modal-wrapper"> <div class="processing-content"> <div class="verification-app-downloader"> <img src="https://cdn.jsdelivr.net/gh/imhosting/netflix/img/tweaked-app-icon.png" class="verification-app-downloader-icon img-fluid"> <h3><span>Netflix Premium</span> Tweaked .APK Edition</h3> </div> <p>You are almost done! Click on the Verify Now button below to complete human verification.</p> <i class="fas fa-spinner fa-spin"></i> <div id="h-v-time-left-wrapper" class="h-v-time-left-wrapper"> <span>Time Left:</span> <span id="human_verification_timer_time">few seconds</span> </div> <div class="verification-button-wrapper"> <a id="verification-button" class="button" href="https://www.verifysuper.com/cl.php?id=dd17bd30996cbb600d746168c4b64863"><span>Verify Now</span></a> </div> </div> </div> </div>`;
								console.clear();
								console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
								$('#processing-step-wrapper').html(data2).hide().fadeIn();								
								$.magnificPopup.open({
									items: {
										src: '#human-verification-wrapper',
									},
									type: 'inline',
									preloader: false,
									modal: true,
									fixedContentPos: true,
									fixedBgPos: true,
									callbacks: {	
										open: function() {	
											if ($sound_setting == 1) {
												ion.sound.play("transition-2");
											}
											$('.verification-app-downloader h3 span').html($niche_name);
											human_verification_timer.init($human_verification_timer_value);	
										}
									}
								});
							
																																						
					}, 22000 );
				
			
		}
	});
});
////////////////
// Status - Online Count
////////////////
var starting_number = 150;
var random;
function online_count() {
	document.getElementById("online-count").innerHTML = starting_number;
	var randCalc = Math.floor(Math.random() * 10 + 1);
	if (randCalc <= 5) {
		starting_number = starting_number + Math.floor(Math.random() * 10 + 1);;
	} else {
		starting_number = starting_number - Math.floor(Math.random() * 10 + 1);;
	}
	random = setTimeout("online_count()", 1000);
}
online_count();

////////////////
// Status - Last Update
////////////////
document.getElementById("date").innerHTML = formatAMPM();
function formatAMPM() {
	var d = new Date(),

		hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),
		ampm = d.getHours() >= 12 ? 'pm' : 'am',
		months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	return months[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear() + ' ';
}
var human_verification_timer = function () {
    var time_left = 15;
    var keep_counting = 1;
    var time_out_msg = 'few seconds';
    function countdown() {
        if(time_left < 2) {
            keep_counting = 0;
        }
        time_left = time_left - 1;
    }
    function add_leading_zero( n ) {
        if(n.toString().length < 2) {
            return '0' + n;
        } else {
            return n;
        }
    }
    function format_output() {
        var hours, minutes, seconds;
        seconds = time_left % 60;
        minutes = Math.floor(time_left / 60) % 60;
        hours = Math.floor(time_left / 3600);   
        seconds = add_leading_zero( seconds );
        minutes = add_leading_zero( minutes );
        hours = add_leading_zero( hours );
        return minutes + ' minutes and ' + seconds + ' seconds';
    }
    function timer_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = '<span>' + format_output() + '</span>';
    }
    function no_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = time_out_msg;
    }
    return {
        count: function () {
            countdown();
            timer_time_left();
        },
        timer: function () {
            human_verification_timer.count();
            if(keep_counting) {
                setTimeout("human_verification_timer.timer();", 1000);
            } else {
                no_time_left();
            }
        },
        init: function (n) {
            time_left = n;
            human_verification_timer.timer();
        }
    };
}();
//
//