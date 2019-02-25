//轮播图
var banner = document.getElementById("banner");
var bannerImg = document.querySelector(".bannerImg");
var bannerImgList = bannerImg.children;
var bannerNav = document.querySelector(".banner_nav");
var bannerNavList = bannerNav.children;
var arr = document.querySelector(".arr");
var toLeft = document.getElementById("toLeft");
var toRight = document.getElementById("toRight");
var index = 0;
var timer = null;
timer = setInterval(autoPlay,2000);
function autoPlay(){
	if(index == bannerImgList.length - 1){
		bannerImg.style.left = 0;
		index = 1;
	}else{
		index ++;
	}
	for(var i = 0;i < bannerNavList.length;i++){
		bannerNavList[i].className = "";
	}
	animate({
		ele:bannerImg,
		param:{
			left:-index*1300
		}
	});
	bannerNavList[index == bannerNavList.length ?0 : index].className = "active";
}
//当鼠标移进去的时候动画停止，向左向右箭头出现
banner.onmouseenter = function(){
	clearInterval(timer);
	arr.style.display = "block";
}
//当鼠标移出去的时候动画开始，向左向右箭头消失
banner.onmouseleave = function(){
	timer = setInterval(autoPlay,2000);
	arr.style.display = "none";
}
//点击向左，图片向左切换
toLeft.onclick = function(){
	//如果index等于0，图片到达第一张，不再向左切换
	//如果index不等于0，就让index减一
	if(index == 0){
		return;
	}else{
		index--;
	}
	for(var i = 0;i < bannerNavList.length;i++){
		bannerNavList[i].className = "";
	}
	animate({
		ele:bannerImg,
		param:{
			left:-index*1000
		}
	});
	bannerNavList[index].className = "active";
}
//点击向右，图片向右切换
toRight.onclick = function(){
	//如果index等于bannerNavList.length-1，图片到达最后一张，不再向右切换
	//否则index就加一
	if(index == bannerNavList.length -1){
		index = bannerNavList.length -1;
	}else{
		index++;
	}
	for(var i = 0;i < bannerNavList.length;i++){
		bannerNavList[i].className = "";
	}
	animate({
		ele:bannerImg,
		param:{
			left:-index*1000
		}
	});
	bannerNavList[index].className = "active";
}

bannerNav.onmouseover = function(e){
	var e = e || event;
	var target = e.target || e.srcElement;
	if(target.nodeName.toLowerCase() == "li"){
		for(var i = 0;i < bannerNavList.length;i++){
			bannerNavList[i].index = i;
			bannerNavList[i].className = "";
		}
		index = target.index;
		animate({
			ele:bannerImg,
			param:{
				left:-index*1300
			}
		});
		bannerNavList[index].className = "active";
	}
}

//引入头部、脚部
$(function(){
	$('#header').load('header.html');
	$('#bottom-footer').load('footer.html');
})
