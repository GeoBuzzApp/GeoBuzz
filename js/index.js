var client = new WindowsAzure.MobileServiceClient(
    "https://geobuzzapp.azure-mobile.net/",
    "MIsNcNBbVhJGykqwdjQLcDQwamBcIy88"
);

var user = {};

$(document).on("vclick", "#loginPageRegister", function(){
	$.mobile.changePage("register.html");
});


$(document).on("vclick", "#loginPageLogin", function(){
	
	var loginEmail = $("#loginPageUserName").val()
	var loginPass = $("#loginPagePassword").val();
	
	var user_table = client.getTable("user");
	
	user_table.where({email:"NickFitz.582@gmail.com",
					  password:"pknfitz"
	}).read().done(function(result){	
		if(result.length != 1)
			$("#loginPageMessage").html("Incorrect username and password");
		else{
			user.email = result.email;
			$.mobile.changePage("around_me.html");
		}	
		
	});
	
});

$(document).on("pagebeforeshow", "#loginPage", function(){
	
	$("#applicationHeader").css("-webkit-transform", "translateY(0px)");
	
});