/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


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