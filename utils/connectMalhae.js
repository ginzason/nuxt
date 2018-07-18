class CustomSchemeManager {
  constructor(){
    this.scheme = null;
    this.schemeAnd = null;
    this.query = null;
    this.android_query = null;
    this.ios_query = null;
    this.androidPackageName = null;
    this.iosMarketUrl = null;
    this.iosAppID = null;
    this.ua = navigator.userAgent.toLowerCase();
  }

  run() {
    if(this.query != null && this.query != '') this.query = this.query;

    if(this.query == null) {
        alert("not found query.");
        return;
    }
    if(this.scheme == null) {
        alert("Please define 'scheme'");
        return;
    }
    if(this.schemeAnd == null) {
        alert("Please define 'scheme'");
        return;
    }
    this.startApp();
  }

  getAndroidVersion(){
    var match = this.ua.match(/android\s([0-9\.]*)/);
    return match ? parseFloat(match[1]) : null;
  }

  startApp(){
    var openAt = +new Date;
    if(this.ua.search("android") > -1){
        if(this.androidPackageName == null){
              alert("Please define 'androidPackageName'");
              return;
        }
        marketUrl = "intent://" + this.android_query + "#Intent;scheme=" + this.schemeAnd + ";package=" + this.androidPackageName + ";end";
        
            setTimeout(function(){
                if(+new Date - openAt < 1000)
                  location.href = marketUrl;
            }, 500);
        
        // 카톡 웹뷰(카톡은 앱 미설치시 아이프레임으로 처리 안하면 에러 난다.)
        if(this.ua.search("kakaotalk") > -1){
              var ifrm = document.createElement("iframe");
              ifrm.setAttribute("src", this.schemeAnd + "://" + this.android_query);
              ifrm.style.display = 'none';
              document.body.appendChild(ifrm);
        } else {
            location.href = this.schemeAnd + "://" + this.android_query;
        }
    }
    else if((this.ua.search("iphone") > -1) || (this.ua.search("ipod") > -1) || (this.ua.search("ipad") > -1)){
          var marketUrl = null;
          if(this.iosMarketUrl != null){          
            marketUrl = this.iosMarketUrl;
          }
          else if(this.iosAppID != null){                                 
              marketUrl = "https://itunes.apple.com/us/app/keynote/id" + this.iosAppID +"?mt=8";
              //location.href=marketUrl;
          }
          if(marketUrl == null){
              alert("Please define 'iosMarketUrl' or 'iosAppID''");
              return;
          }
          
          setTimeout(function(){
              if(+new Date - openAt < 1000)
                location.href = marketUrl;
          }, 500);
          
          //카톡 웹뷰(카톡은 앱 미설치시 아이프레임으로 처리 안하면 에러 난다.)
          if(this.ua.search("kakaotalk") > -1){
              var ifrm = document.createElement("iframe");
              ifrm.setAttribute("src", this.scheme + "://" + this.ios_query);
              ifrm.style.display = 'none';
              document.body.appendChild(ifrm);
          } else {
            
              location.href = this.scheme + "://" + this.ios_query;
            
          }        
          
      }
      else{
              // alert("android & iOS ONLY!");
      }
    }
  }

export default CustomSchemeManager;