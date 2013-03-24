/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 

*/

var client = new WindowsAzure.MobileServiceClient(
    "https://geobuzzapp.azure-mobile.net/",
    "MIsNcNBbVhJGykqwdjQLcDQwamBcIy88"
);

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
