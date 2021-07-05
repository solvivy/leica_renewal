
$(document).ready(function() {

	$('#fullpage').fullpage({
		navigation : true,
		navigationPosition:'right',
		sectionsColor: ['#000', '#000', '#000', '#fff', '#fff','#fff'],
		//afterResize: function(width,height){},
		
	});

	//pc_sec3 arrow
	$('.img_wrap').hover(function(){
		var i = $(this).index();
		$('.img_wrap>p>button').eq(i).stop().animate({
			left: 10,
		});
	},function(){
		$('.img_wrap>p>button').stop().animate({
			left: 0,
		});
	});

	//to_top
	$("#to_top").click(function(){
		fullpage_api.moveTo(1);
	});


	//hidden_menu
	$("#ham_btn").click(function(){
		$(".hidden_menu_wrap").toggleClass("opend");
	});  
	
	

});//end