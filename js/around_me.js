$(document).on("vclick", ".aroundMeLocationItem", function(){
	
	$.mobile.changePage("location.html");
	
});

$(document).on("pagebeforeshow", "#aroundMePage", function(){
	
	$("#applicationHeader").css("-webkit-transform", "translateY(67px)");
	
});