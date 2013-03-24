var client = new WindowsAzure.MobileServiceClient(
    "https://geobuzzapp.azure-mobile.net/",
    "MIsNcNBbVhJGykqwdjQLcDQwamBcIy88"
);

$(document).on("vclick", "#loginPageRegister", function(){
	$.mobile.changePage("register.html");
});


$(document).on("vclick", "#loginPageLogin", function(){
	
	var user_table = client.getTable("user");
	
	user_table.where({email:$("#loginPageUserName").val().toLowerCase(), password:$("#loginPagePassword").val().toLowerCase()}).read().done(function(result){
		
		if(result.length != 1)
			$("#loginPageMessage").html("Incorrect username and password");
	});
	
});