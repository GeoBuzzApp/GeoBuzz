var client = new WindowsAzure.MobileServiceClient(
    "https://geobuzzapp.azure-mobile.net/",
    "MIsNcNBbVhJGykqwdjQLcDQwamBcIy88"
);

$(document).on("vclick", "#loginPageRegister", function(){
	$.mobile.changePage("register.html");
});