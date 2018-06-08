var accessToken;

//Facebook
window.fbAsyncInit = function() {
    FB.init({
      appId      : '189221955131727',
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.getLoginStatus(function(response){
        if(response.status=='connected'){
            console.log("Ok, You are connected. ");
            console.log(response);
            accessToken = response.authResponse.accessToken;
            PersonalInfo(accessToken);
        }else if(response.status=='not_authorized'){
            console.log("You are NOT connected. ");
        }else{
            console.log("You are NOT in FACEBOOK. ");
            console.log(response);
        };
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


    function checkLoginState() {
        FB.getLoginStatus(function(response) {
            if(response.status=='connected'){
                console.log("Ok, You are connected. ");
                console.log(response);
            }else if(response.status=='not_authorized'){
                console.log("You are NOT connected. ");
            }else{
                console.log("You are NOT in FACEBOOK. ");
                console.log(response.status);
            };
        });
    }

    function login(){
        FB.login(function(response){
            if(response.status=='connected'){
                console.log("Ok, You are connected. ");
                console.log(response);
            }else if(response.status=='not_authorized'){
                console.log("You are NOT connected. ");
            }else{
                console.log("You are NOT in FACEBOOK. ");
                console.log(response.status);
            };
        });   
    }

    function PersonalInfo(t){
        FB.api('/me','GET',{access_token: t, fields:"id,first_name,last_name,middle_name,name,name_format,picture,short_name,email"},function(response){
            console.log("PI:" + response.first_name + " " + response.last_name);

            console.log("id: " + response.id);
            console.log("first_name: " + response.first_name);
            console.log("last_name: " + response.last_name);
            console.log("middle_name: " + response.middle_name);
            console.log("name: " + response.name);
            console.log("name_format: " + response.name_format);
            console.log("picture: " + response.picture.url);
            console.log("short_name: " + response.short_name);
            console.log("email: " + response.email);
            console.log(response);
        });

    };

