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
        FB.api('/me','GET',{access_token: t,fields:'first_name,last_name,email,friends'},function(response){
            console.log("PI:" + response.first_name + " " + response.last_name);
            console.log(response);
        });
        FB.api('/me/friends',{access_token: t},function(response){
            console.log("Fiends List: 1.1");
            console.log(response);
        });
    };

