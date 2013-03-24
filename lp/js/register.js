/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 

*/

var client = new WindowsAzure.MobileServiceClient(
    "https://geobuzzapp.azure-mobile.net/",
    "MIsNcNBbVhJGykqwdjQLcDQwamBcIy88"
);

$(document).ready(function() {
   $("#lp-success").hide();
});

$("#lp-submit").click(function() {
    var name = $("#lp-name").val();
    var email = $("#lp-email").val();
    if(name.length > 0) {
    var item = {
        name: name,
        email: email
    };
    client.getTable("user").insert(item);
    $("#lp-form").fadeOut();
    $("#lp-success").fadeIn();
    }
});
