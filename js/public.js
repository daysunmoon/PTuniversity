//导航栏
$('.over').hover(function(){
	$(this).parent().find('.second-title').stop().slideDown(1000);
},function(){
	$(this).parent().find('.second-title').stop().slideUp(1000);
})