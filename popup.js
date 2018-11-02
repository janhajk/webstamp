var post_url = 'https://login.swissid.ch/idp/XUI/?realm=%2Fsesam&locale=de&authIndexType=service&authIndexValue=Sesam-Push-Auth&goto=https%3A%2F%2Flogin.swissid.ch%2Fidp%2Foauth2%2Fauthorize%3Fresponse_type%3Dcode%26client_id%3Dklp-client%26redirect_uri%3Dhttps%253A%252F%252Faccount.post.ch%252Fredirect%252Fid-confirmation%26scope%3Dopenid%2520email%2520phone%2520profile%26state%3DwANR5Hydktmag494PA_HzbTd0X2zo1GWrNUjTj1F59w%26nonce%3DIMPx9eWEWrSkWwkTr9RUx8_Ou19ymU4TLdVkPXCEH-g%26ui_locales%3Dde%26acr_values%3Dloa-1%26prompt%3D%26acr%3Dloa-1%26acr_sig%3DRU04zf5fCUn6xUQh8lTnDJxp5dtuXtJFcpOis9udsRk#login/';

function start() {
    chrome.tabs.create({"url":post_url,"selected":true}, function(tab){
        makeRequest(tab.id);
    });
   
   setTimeout(function(){
      var element = document.getElementById("validationButton");
      if (element) element.click();
   },2000);
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('test').addEventListener('click', start);
});