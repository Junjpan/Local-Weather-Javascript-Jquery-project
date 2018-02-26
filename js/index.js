$(document).ready(function(){
  var LAT,LON;
  var locationurl="https://ipinfo.io/json/"; //idtify the location
 $.getJSON(locationurl,function(data){
   var geoloc=data.loc.split(',');
   LAT=geoloc[0];  
     $("#lat").text(LAT);
   LON=geoloc[1];
     $("#lon").text(LON); 
     $("#city").html(data.city);
     $("#state").html(data.region);
     $("#country").html(data.country);
   
   
    var weatherapi='https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/f975a548f35a85bb29da8765fd66b59d/'+LAT+','+LON; //receive the temperture
    $.getJSON(weatherapi,function(info){ 
   var Ftemp=info.currently.apparentTemperature;
   
  var Ctemp=Ftemp-32;
   Ctemp=Ctemp*(5/9);
   Ctemp=Ctemp.toFixed(2);
   
   $("#icon").html(info.currently.icon);
  
   $("#temp").html(Ftemp+" °F");
    var val=false;
   $("button").click(function(){
     
       if (val==false){
        $("#temp").html(Ctemp+" °C"); 
         val=true;
       }
       else {$("#temp").html(Ftemp+" °F"); 
       val=false;} //switch the °F and °C
      
     });
      var symbol;//change image when the weather change
       symbol=info.currently.icon;
       if (symbol=="clear-day"){
         $("#symbol").attr("background", "http://www.planwallpaper.com/static/images/free-desktop-wallpaper-21.jpg");                      
                                                         
       }else if (symbol=="clear-night"){
         $("#symbol").attr("background", "http://www.planwallpaper.com/static/images/3d-digital-design-widescreen-wallpaper_1920x1200_86479.jpg");  
       }else if (symbol=="rain"){
         $("#symbol").attr("background", "http://www.planwallpaper.com/static/images/6793054-free-live-wallpapers.jpg");  
       }else if (symbol=="snow"){
         $("#symbol").attr("background", "http://www.planwallpaper.com/static/images/IMG_271412.jpg");  
       }else if (symbol=="wind"){
         $("#symbol").attr("background", "http://www.planwallpaper.com/static/images/1920x1200-Widescreen-Wallpapers-2.jpg");  
       }else if (symbol=="fog"){
         $("#symbol").attr("background", "http://www.planwallpaper.com/static/images/spring-free-desktop-wallpaper-18604322.jpg");
           }
           else if (symbol=="cloudy"||symbol=="partly-cloudy-day"){
         $("#symbol").attr("background", "http://www.planwallpaper.com/static/images/IMG_271407.jpg");
           }else if (symbol=="partly-cloudy-night"){
         $("#symbol").attr("background", "http://www.planwallpaper.com/static/images/IMG_182948.jpg");
           }else if(symbol=="sleet"){
         $("#symbol").attr("background", "http://www.planwallpaper.com/static/images/free-wallpaper-1_9xlbyqv.jpg");
           }
      
      
   
    }); 
 
  
 });
  
       
});


function currenttime(){
document.getElementById("date").innerHTML=new Date();
};
setInterval(currenttime,1000);