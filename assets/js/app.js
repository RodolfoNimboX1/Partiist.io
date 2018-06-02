

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
            PersonalInfo();
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
            }else if(response.status=='not_authorized'){
                console.log("You are NOT connected. ");
            }else{
                console.log("You are NOT in FACEBOOK. ");
                console.log(response.status);
            };
        });   
    }

    function PersonalInfo(){
        FB.api('/me','GET',{fields:'name,last_name,profile_pic'},function(response){
            console.log(response.name + " " + response.last_name);
        });
    };

