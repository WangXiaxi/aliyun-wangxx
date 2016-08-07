$.fn.extend({
	banner : function(){
		var i = 0;
		$(this).setTime(i);
		$(this).find(".slider-index i.index").click(function(){
			clearTimeout(play);
			var index = $(this).index();
			$(this).silde(index);
			i = index;
			$(this).setTime(i);
		});
	},
	silde : function(index){
		$(".outBanner").find(".slider-index i.index").eq(index).addClass("act").siblings().removeClass("act");
		$(".innerBanner .item").eq(index).addClass("act").animate({opacity : 1,top:0},800).siblings(".item").removeClass("act").css("opacity" ,0).css("top",-90);
		$(".bigBg ul>li").eq(index).addClass("on").animate({opacity : 1},1000).siblings().removeClass("on").css("opacity",0.8);
	},
	setTime : function(i){
		play = setInterval(function(){
			i++;
			i = i >= 5 ? 0 : i;
			$(".outBanner").silde(i);	
		},3000);
		
	}
});
$(".outBanner").banner();