/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 


$(document).ready(function() {
    var client = new WindowsAzure.MobileServiceClient("https://geobuzz.azure-mobile.net/", "NVChLYzROutAwVmHCdYGymzGrhmcLk28");
    $("#lp-submit").click(function() {
        var name = $("#lp-name").val();
        var email = $("#lp-email").val();
        var password = $("#lp-password").val();
        var item = {
            name: name,
            email: email,
            password: password
        };
        client.getTable("user").insert(item);
    });
});

*/

var register = {};
register.user;
register.pass;

$(document).on("vclick", "#registerPageSubmit", function(){
	
	var name = $("#registerName").val();
	var email = $("#registerEmail").val();
	var email_confirm = $("#registerEmailConfirm").val();
	var pass = $("#registerPassword").val();
	var pass_confirm =$("#registerPasswordConfirm").val();
	var age = $("#registerAge").val();
	var gender = $("#registerGender").val().toLowerCase();
	
	var age_patt = RegExp('\d?');
	var email_patt = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	
	if(!email_patt.test(email)){
		$("#registerPageError").html("Please ensure you enter a valid E-mail");
		return;
	}
	
	if(email.toLowerCase() != email_confirm.toLowerCase()){
		$("#registerPageError").html("Please ensure both email fields match");
		return;
	}
	
	if(pass != pass_confirm){
		$("#registerPageError").html("Please ensure both password fields match");
		return;
	}
	
	if(gender != "male" && gender != "female"){
		$("#registerPageError").html("Please ensure gender is either male or female");
		return;
	}
	
	if(!age_patt.test(age)){
		$("#registerPageError").html("Please ensure age is a number");
		return;
	}
	
	$("#registerPageError").html("");
	
	var item = {
		name:name,
		email:email,
		password:pass,
		age:age,
		gender:gender
	}
	
	client.getTable("user").insert(item);
	
	register.user = email;
	register.pass = pass;
	
	
	$("#registerPagePopup").popup("open", {transition:"pop"});

});
		
$(document).on("popupbeforeposition", "#registerPagePopup", function(event, ui){
	
	$("#registerPopupDismiss").hide();
	
	setTimeout(function(){
		
		var user_table = client.getTable("user");
		
		user_table.where({email:register.user, password:register.pass}).read().done(function(results){
			
			$("#registerPopupSpinner").hide();
			$("#registerPopupDismiss").show();
			
			if(results.length == 1){
				$("#registerPopupText").html("You have successfully registered!");
				register.success=true;
			}
			else{
				$("#registerPopupText").html("We encountered difficulty registering you at this time. Please try again soon");
				register.success=false;
			}			
		});	
	}, 3000);
	
});

$(document).on("vclick", "#registerPopupDismiss", function(){
	if(register.success)
		$.mobile.changePage("index.html");
	else
		$.mobile.back();
});
















