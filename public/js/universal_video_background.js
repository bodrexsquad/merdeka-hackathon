/*
 * Universal Video Background v1.1
 *
 * Copyright 2014, LambertGroup
 * 
*/


(function(c){function C(b,a,c){c.css({background:b.thumbsBgOffColor,"border-color":b.thumbsBorderColorOFF});c.find("img:first").css({opacity:b.thumbsBgOffImgOpacity/100,filter:"alpha(opacity="+b.thumbsBgOffImgOpacity+")"})}function F(b,a,c){c.css({background:b.thumbsBgOnColor,"border-color":b.thumbsBorderColorON});c.find("img:first").css({opacity:b.thumbsBgOnImgOpacity/100,filter:"alpha(opacity="+b.thumbsBgOnImgOpacity+")"})}function D(b,a,h,e,f,l,g,m,t,u,k,r){var s=!0;if(!h.loop&&a.current_img_no+ b>=e||!h.loop&&0>a.current_img_no+b)s=!1;s&&(C(h,a,c(f[a.current_img_no])),I(a,h,l,u),h.randomizeVideos&&!a.bottomNavClicked?(b=Math.floor(Math.random()*e),a.current_img_no=a.current_img_no===b?Math.floor(Math.random()*e):b):a.current_img_no=a.current_img_no+b>=e?0:0>a.current_img_no+b?e-1:a.current_img_no+b,F(h,a,c(f[a.current_img_no])),currentCarouselLeft=m.css("left").substr(0,m.css("left").lastIndexOf("px")),0===a.current_img_no||a.current_img_no===e-1?A(0,m,k,r,h,e,g,a):A(1001,m,k,r,h,e,g,a), a.currentImg=c(t[a.current_img_no]),a.bottomNavClicked=!1,void 0!=a.currentImg.attr("data-youtube")&&""!=a.currentImg.attr("data-youtube")||void 0!=a.currentImg.attr("data-vimeo")&&""!=a.currentImg.attr("data-vimeo")||void 0!=a.currentImg.attr("data-selfhostedMP4")&&""!=a.currentImg.attr("data-selfhostedMP4"))&&(h.autoPlayFirstVideo=!0,void 0!=a.currentImg.attr("data-youtube")&&""!=a.currentImg.attr("data-youtube")&&a.haveYouTube&&(l.css("background","#000000"),-1!=y.indexOf("ipad")||-1!=y.indexOf("iphone")|| -1!=y.indexOf("ipod")||-1!=y.indexOf("webos")?a.player.cueVideoById(a.currentImg.attr("data-youtube")):a.player.loadVideoById(a.currentImg.attr("data-youtube"),0,h.suggestedQuality),c(".lbg_player",l).css({"z-index":0})),void 0!=a.currentImg.attr("data-vimeo")&&""!=a.currentImg.attr("data-vimeo")&&a.haveVimeo&&(l.css("background","#000000"),c("#"+u).attr("src","//player.vimeo.com/video/"+c(t[a.current_img_no]).attr("data-vimeo")+"?api=1&amp;player_id="+u)),void 0!=a.currentImg.attr("data-selfhostedMP4")&& ""!=a.currentImg.attr("data-selfhostedMP4")&&a.haveSelfHosted&&(e=E(),l.css("background","#000000"),f=new Date,document.getElementById(a.html5_video_id).src=J(e,a.currentImg,a.html5_video_id)+"?time="+f.getTime(),document.getElementById(a.html5_video_id).load(),c("#"+a.html5_video_id).css({"z-index":0,width:"100%",height:"100%"}),document.getElementById(a.html5_video_id).play()),h.width100Proc&&h.height100Proc&&h.setAsBg&&G(a,h,t,l))}function A(b,a,c,e,f,l,g,m){currentCarouselLeft=a.css("left").substr(0, a.css("left").lastIndexOf("px"));1===b||-1===b?(m.isCarouselScrolling=!0,a.css("opacity","0.5"),a.animate({opacity:1,left:"+="+b*m.carouselStep},500,"easeOutCubic",function(){B(m,a,c,e,f,l,g);m.isCarouselScrolling=!1})):currentCarouselLeft!=-1*Math.floor(m.current_img_no/f.numberOfThumbsPerScreen)*m.carouselStep&&(m.isCarouselScrolling=!0,a.css("opacity","0.5"),a.animate({opacity:1,left:-1*Math.floor(m.current_img_no/f.numberOfThumbsPerScreen)*m.carouselStep},500,"easeOutCubic",function(){B(m,a,c, e,f,l,g);m.isCarouselScrolling=!1}))}function B(b,a,c,e,f,l,g){currentCarouselLeft=a.css("left").substr(0,a.css("left").lastIndexOf("px"));0>currentCarouselLeft?c.hasClass("carouselLeftNavDisabled")&&c.removeClass("carouselLeftNavDisabled"):c.addClass("carouselLeftNavDisabled");Math.abs(currentCarouselLeft-b.carouselStep)<(2*b.thumbBorderWidth+g.width()+b.thumbMarginLeft)*l?e.hasClass("carouselRightNavDisabled")&&e.removeClass("carouselRightNavDisabled"):e.addClass("carouselRightNavDisabled")}function K(b, a,h,e,f,l,g,m,t,u,k){k.height(parseInt(a.origthumbsHolderWrapperH/(a.origWidth/a.width),10));parseInt(a.origthumbsHolderWrapperH/(a.origWidth/a.width),10)<a.thumbsWrapperMinHeight&&k.height(a.thumbsWrapperMinHeight);k.css({top:a.height-2*parseInt(a.borderWidth/(a.origWidth/a.width),10)-k.height()-parseInt(a.thumbsWrapperMarginTop/(a.origWidth/a.width),10)+"px",width:a.width-2*parseInt(a.borderWidth/(a.origWidth/a.width),10)+"px","padding-top":parseInt(a.thumbsWrapperTopPadding/(a.origWidth/a.width), 10),"padding-bottom":parseInt(a.thumbsWrapperBottomPadding/(a.origWidth/a.width),10),"border-left":parseInt(a.borderWidth/(a.origWidth/a.width),10)+"px solid "+a.borderColor,"border-right":parseInt(a.borderWidth/(a.origWidth/a.width),10)+"px solid "+a.borderColor,left:-1*parseInt(a.borderWidth/(a.origWidth/a.width)+.5,10)+"px"});bgTopCorrection=1;g.css("background-position","0px "+((k.height()-a.origthumbsHolderWrapperH)/2+bgTopCorrection)+"px");m.css("background-position","0px "+((k.height()-a.origthumbsHolderWrapperH)/ 2+bgTopCorrection)+"px");u.css("width",a.width-2*parseInt(a.borderWidth/(a.origWidth/a.width),10)-g.width()-m.width());a.origWidthThumbsHolderVisibleWrapper=a.origWidth-g.width()-m.width();f.css({width:parseInt(a.origThumbW/(a.origWidthThumbsHolderVisibleWrapper/u.width()),10)+"px",height:parseInt(a.origThumbH/(a.origWidthThumbsHolderVisibleWrapper/u.width()),10)+"px"});c(".thumbsHolder_ThumbOFF",e).find("img:first").css({width:f.width()+"px",height:f.height()+"px"});parseInt(a.origthumbsHolderWrapperH/ (a.origWidth/a.width),10)<a.thumbsWrapperMinHeight?u.css({top:parseInt((k.height()-f.height())/2,10)+"px"}):u.css({top:"auto"});b.thumbMarginLeft=Math.floor((k.width()-g.width()-m.width()-(2*b.thumbBorderWidth+t.width())*a.numberOfThumbsPerScreen)/(a.numberOfThumbsPerScreen-1));thumb_i=-1;l.children().each(function(){thumb_i++;theThumb=c(this);0>=thumb_i?theThumb.css("margin-left",Math.floor((k.width()-g.width()-m.width()-(b.thumbMarginLeft+(2*b.thumbBorderWidth+theThumb.width()))*(a.numberOfThumbsPerScreen- 1)-(2*b.thumbBorderWidth+theThumb.width()))/2)+"px"):theThumb.css("margin-left",b.thumbMarginLeft+"px")});b.carouselStep=(2*b.thumbBorderWidth+t.width()+b.thumbMarginLeft)*a.numberOfThumbsPerScreen;if(a.numberOfThumbsPerScreen>=h)switch(a.bottomNavPos){case "left":u.css("left",a.bottomNavLateralMargin+b.thumbMarginLeft+"px");break;case "right":u.css("left",a.width-(2*b.thumbBorderWidth+f.width()+b.thumbMarginLeft)*h-a.bottomNavLateralMargin+"px");break;default:u.css("left",parseInt((k.width()-(2* b.thumbBorderWidth+t.width()+b.thumbMarginLeft)*h)/2,10)+"px")}}function G(b,a,h,e){a=a.videoProportionWidth;void 0!=c(h[b.current_img_no]).attr("data-videoProportionWidth")&&""!=c(h[b.current_img_no]).attr("data-videoProportionWidth")&&(a=c(h[b.current_img_no]).attr("data-videoProportionWidth"));h=parseInt(1280/a*9,10);windowW=c(window).width()+1;windowH=c(window).height();var f=1/(1280/windowW);h/windowH<1280/windowW&&(f=1/(h/windowH));16!=a&&(f+=.11);b.haveYouTube&&c(".lbg_player",e).css({width:1280* f+"px",height:h*f+"px",left:parseInt((windowW-1280*f)/2,10)+"px",top:parseInt((windowH-h*f)/2,10)+"px"});b.haveVimeo&&c(".lbg_vimeo_player",e).css({width:1280*f+"px",height:h*f+"px",left:parseInt((windowW-1280*f)/2,10)+"px",top:parseInt((windowH-h*f)/2,10)+"px"});b.haveSelfHosted&&c("#"+b.html5_video_id).css({width:1280*f+"px",height:h*f+"px",left:parseInt((windowW-1280*f)/2,10)+"px",top:parseInt((windowH-h*f)/2,10)+"px"})}function E(){var b=-1;if("Microsoft Internet Explorer"==navigator.appName){var a= navigator.userAgent,c=/MSIE ([0-9]{1,}[.0-9]{0,})/;null!=c.exec(a)&&(b=parseFloat(RegExp.$1))}else"Netscape"==navigator.appName&&(a=navigator.userAgent,c=/Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/,null!=c.exec(a)&&(b=parseFloat(RegExp.$1)));return parseInt(b,10)}function J(b,a,c){var e=a.attr("data-selfhostedWEBM"),f=navigator.userAgent.toLowerCase();if(-1!=f.indexOf("chrome")||-1!=f.indexOf("msie")||-1!=f.indexOf("safari")||-1!=f.indexOf("android"))e=a.attr("data-selfhostedMP4");if(-1!=f.indexOf("ipad")|| -1!=f.indexOf("iphone")||-1!=f.indexOf("ipod")||-1!=f.indexOf("webos"))e=a.attr("data-selfhostedMP4");-1!=f.indexOf("android")&&(e=a.attr("data-selfhostedMP4"));-1!=b&&(e=a.attr("data-selfhostedMP4"));-1!=f.indexOf("opera")&&(e=a.attr("data-selfhostedWEBM"),""!=z(c)&&(e=a.attr("data-selfhostedMP4")));-1!=f.indexOf("opr/")&&(e=a.attr("data-selfhostedWEBM"),""!=z(c)&&(e=a.attr("data-selfhostedMP4")));if(-1!=f.indexOf("firefox")||-1!=f.indexOf("mozzila"))e=a.attr("data-selfhostedWEBM"),""!=z(c)&&(e= a.attr("data-selfhostedMP4"));return e}function I(b,a,h,e){void 0!=b.currentImg.attr("data-youtube")&&""!=b.currentImg.attr("data-youtube")&&b.haveYouTube&&(b.player.stopVideo(),c(".lbg_player",h).css({"z-index":-1}));void 0!=b.currentImg.attr("data-vimeo")&&""!=b.currentImg.attr("data-vimeo")&&b.haveVimeo&&(b.vimeo_player.api("pause"),c(".lbg_vimeo_player",h).css({"z-index":-1}));void 0!=b.currentImg.attr("data-selfhostedMP4")&&""!=b.currentImg.attr("data-selfhostedMP4")&&b.haveSelfHosted&&(document.getElementById(b.html5_video_id).pause(), c("#"+b.html5_video_id).css({"z-index":-1,width:0,height:0}))}var y=navigator.userAgent.toLowerCase(),z=function(b){return document.getElementById(b).canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')};c.fn.universal_video_background=function(b){b=c.extend({},c.fn.universal_video_background.defaults,b);return this.each(function(){var a=E(),h=c(this);responsiveWidth=h.parent().width();responsiveHeight=h.parent().height();b.responsiveRelativeToBrowser&&(responsiveWidth=c(window).width(),responsiveHeight= c(window).height());b.origWidth=b.width;b.width100Proc&&(b.width=responsiveWidth);b.origHeight=b.height;b.height100Proc&&(b.height=responsiveHeight);b.responsive&&(b.origWidth!=responsiveWidth||b.width100Proc)&&(b.width=b.origWidth>responsiveWidth||b.width100Proc?responsiveWidth:b.origWidth,b.height100Proc||(b.height=b.width/(b.origWidth/b.origHeight)));b.width=parseInt(b.width,10);b.height=parseInt(b.height,10);b.width100Proc&&b.height100Proc&&(b.borderWidth=0);h.css("display","block");var e=c("<div></div>").addClass("universal_video_backgroundBorder"), f=c("<div></div>").addClass("universal_video_background").addClass(b.skin),l=c('<div class="bannerControls"> <div class="thumbsHolderWrapper"><div class="thumbsHolderVisibleWrapper"><div class="thumbsHolder"></div></div></div> </div> ');h.wrap(f);b.texturePath&&(-1==a||-1!=a&&11<=a)&&(h.append('<div class="texture_over_image" />'),c(".texture_over_image",g).css({background:"url("+b.texturePath+")"}));h.after(l);var g=h.parent(".universal_video_background");b.setAsBg&&g.wrap('<div class="setAsBg" />'); l=c(".bannerControls",g);g.wrap(e);var m=g.parent(".universal_video_backgroundBorder"),e=c(".bottomNav",g);b.showBottomNav||e.css("display","none");b.showOnInitBottomNav||e.css("left","-5000px");var t=c(".thumbsHolderWrapper",g),u=c(".thumbsHolderVisibleWrapper",g),k=c(".thumbsHolder",g),r,s;r=c('<div class="carouselLeftNav"></div>');s=c('<div class="carouselRightNav"></div>');t.append(r);t.append(s);s.css("right","0");k.css("width",r.width()+"px");b.showBottomNav&&b.showOnInitBottomNav||t.css({opacity:0, display:"none"});e=Math.floor(1E5*Math.random());f=c("<div></div>").addClass("lbg_player");h.append(f);var z="lbg_player"+e;c(".lbg_player",g).attr("id",z);f=c("<div></div>").addClass("lbg_vimeo_player");h.append(f);var v="lbg_vimeo_player"+e;t.css({background:b.thumbsWrapperBg});var q=0,d={current_img_no:0,currentImg:0,current_imgInside:"",is_very_first:!0,windowWidth:0,carouselStep:0,thumbMarginTop:0,thumbBorderWidth:0,thumbMarginLeft:0,bottomNavClicked:!1,windowWidth:0,haveYouTube:!1,haveVimeo:!1, haveSelfHosted:!1,html5_video_id:"html5_video_id_"+e,bannerRatio:b.origWidth/b.origHeight,player:!1,vimeo_player:!1,vimeo_iframe:!1};m.width(b.width);m.height(b.height);m.css("background",b.borderColor);g.width(b.width-2*b.borderWidth/(b.origWidth/b.width));g.height(b.height-2*b.borderWidth/(b.origWidth/b.width));g.css({left:b.borderWidth/(b.origWidth/b.width)+"px",top:b.borderWidth/(b.origWidth/b.width)+"px"});l.width("100%");var n=h.find("ul:first").children(),p,B="";n.each(function(){d.currentImg= c(this);d.currentImg.is("li")||(d.currentImg=d.currentImg.find("li:first"));d.currentImg.is("li")&&(d.currentImg.css("display","none"),q++,void 0!=c(n[q-1]).attr("data-youtube")&&""!=c(n[q-1]).attr("data-youtube")&&(d.haveYouTube=!0),void 0!=c(n[q-1]).attr("data-vimeo")&&""!=c(n[q-1]).attr("data-vimeo")&&(d.haveVimeo=!0),void 0!=c(n[q-1]).attr("data-selfhostedMP4")&&""!=c(n[q-1]).attr("data-selfhostedMP4")&&(d.haveSelfHosted=!0),B=c(n[q-1]).attr("data-bottom-thumb"),p=c('<div class="thumbsHolder_ThumbOFF" rel="'+ (q-1)+'"><img src="'+B+'"></div>'),p.width(b.origThumbImgW),p.height(b.origThumbImgH),k.append(p),C(b,d,p),0==b.origThumbW&&(0==b.numberOfThumbsPerScreen&&(b.numberOfThumbsPerScreen=Math.floor((b.origWidth-r.width()-s.width())/(2*d.thumbBorderWidth+p.width()))-1),b.width100Proc&&!b.height100Proc&&(b.numberOfThumbsPerScreen-=3),b.origThumbW=p.width(),b.origThumbH=p.height(),b.origthumbsHolderWrapperH=t.height(),d.thumbBorderWidth=p.css("borderLeftWidth").substr(0,p.css("borderLeftWidth").lastIndexOf("px")), d.thumbMarginLeft=Math.floor((b.origWidth-r.width()-s.width()-(2*d.thumbBorderWidth+p.width())*b.numberOfThumbsPerScreen)/(b.numberOfThumbsPerScreen-1))),k.css("width",k.width()+d.thumbMarginLeft+(2*d.thumbBorderWidth+p.width())+"px"),parseInt((t.height()-parseInt(p.css("height").substring(0,p.css("height").length-2)))/2,10),k.css("height",k.height()+d.thumbMarginTop+p.height()+"px"))});var w=c(".thumbsHolder_ThumbOFF",g);r.addClass("carouselLeftNavDisabled");b.numberOfThumbsPerScreen>=q?(s.addClass("carouselRightNavDisabled"), r.css("display","none"),s.css("display","none"),t.css({"border-left":parseInt(b.borderWidth/(b.origWidth/b.width),10)+"px solid "+b.borderColor,"border-right":parseInt(b.borderWidth/(b.origWidth/b.width),10)+"px solid "+b.borderColor,left:-1*parseInt(b.borderWidth/(b.origWidth/b.width),10)+"px"})):u.css("left",r.width()+"px");K(d,b,q,g,w,k,r,s,p,u,t);d.current_img_no=b.firstImg;b.firstImg>q&&(d.current_img_no=q);0>b.firstImg&&(d.current_img_no=0);b.randomizeVideos&&(d.current_img_no=Math.floor(Math.random()* q));F(b,d,c(w[d.current_img_no]));if(d.haveYouTube){l=document.createElement("script");l.src=b.youtubeJsUrl;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(l,e);window.onYouTubeIframeAPIReady=function(){var a=0;b.showVideoControls&&(a=1);void 0!=c(n[d.current_img_no]).attr("data-youtube")&&""!=c(n[d.current_img_no]).attr("data-youtube")?(d.player=new YT.Player(z,{width:b.width-2*b.borderWidth,height:b.height-2*b.borderWidth,videoId:c(n[d.current_img_no]).attr("data-youtube"), playerVars:{rel:0,wmode:"transparent",controls:a,showinfo:a},events:{onReady:L,onStateChange:M}}),c(".lbg_player",g).css({"z-index":3})):d.player=new YT.Player(z,{width:"100%",height:"100%",videoId:"xoORbLlFsis",playerVars:{rel:0,wmode:"transparent",controls:a,showinfo:a},events:{onReady:L,onStateChange:M}})};var L=function(a){a.target.setPlaybackQuality(b.suggestedQuality);-1==y.indexOf("ipad")&&-1==y.indexOf("iphone")&&-1==y.indexOf("ipod")&&-1==y.indexOf("webos")&&(d.player.setVolume(100*b.initialVolume), b.autoPlayFirstVideo?void 0!=c(n[d.current_img_no]).attr("data-youtube")&&""!=c(n[d.current_img_no]).attr("data-youtube")&&a.target.playVideo():a.target.pauseVideo())},M=function(a){a.data==YT.PlayerState.ENDED&&D(1,d,b,q,w,g,p,k,n,v,r,s)}}if(d.haveVimeo){void 0!=c(n[d.current_img_no]).attr("data-vimeo")&&""!=c(n[d.current_img_no]).attr("data-vimeo")?(c(".lbg_vimeo_player",g).html('<iframe id="'+v+'" src="//player.vimeo.com/video/'+c(n[d.current_img_no]).attr("data-vimeo")+"?api=1&amp;player_id="+ v+'" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),c(".lbg_vimeo_player",g).css({"z-index":0})):c(".lbg_vimeo_player",g).html('<iframe id="'+v+'" src="//player.vimeo.com/video/?api=1&amp;player_id='+v+'" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');d.vimeo_iframe=c("#"+v)[0];d.vimeo_player=$f(d.vimeo_iframe);d.vimeo_player.addEvent("ready",function(){d.is_very_first&& (d.vimeo_player.api("setVolume",b.initialVolume),d.is_very_first=!1);c(".lbg_vimeo_player",g).css({"z-index":0});b.autoPlayFirstVideo?void 0!=c(n[d.current_img_no]).attr("data-vimeo")&&""!=c(n[d.current_img_no]).attr("data-vimeo")&&d.vimeo_player.api("play"):d.vimeo_player.api("pause");d.vimeo_player.addEvent("finish",N)});var N=function(a){D(1,d,b,q,w,g,p,k,n,v,r,s)}}d.haveSelfHosted&&(l="",b.showVideoControls&&(l=' controls="controls"'),e="",b.autoPlayFirstVideo&&(e=' autoplay="autoplay" loop'),l=c('<video id="'+ d.html5_video_id+'" width="100%" height="100%" poster="img/red.gif" loop preload="auto"'+l+e+"></video>"),g.append(l),c("#"+d.html5_video_id).css({"z-index":-1,width:0,height:0,position:"absolute",background:"#000000"}),document.getElementById(d.html5_video_id).volume=b.initialVolume,void 0!=c(n[d.current_img_no]).attr("data-selfhostedMP4")&&""!=c(n[d.current_img_no]).attr("data-selfhostedMP4")&&(document.getElementById(d.html5_video_id).src=J(a,c(n[d.current_img_no]),d.html5_video_id),document.getElementById(d.html5_video_id).load(), c("#"+d.html5_video_id).css({"z-index":0,width:"100%",height:"100%"}),b.autoPlayFirstVideo&&document.getElementById(d.html5_video_id).play()),document.getElementById(d.html5_video_id).addEventListener("ended",function(a){D(1,d,b,q,w,g,p,k,n,v,r,s)},!1));b.width100Proc&&b.height100Proc&&b.setAsBg?G(d,b,n,g):(c(".lbg_player",g).width(g.width()),c(".lbg_player",g).height(g.height()),c(".lbg_vimeo_player",g).width(g.width()),c(".lbg_vimeo_player",g).height(g.height()));d.current_img_no>=b.numberOfThumbsPerScreen&& A(0,k,r,s,b,q,p,d);d.currentImg=c(n[d.current_img_no]);d.current_imgInside=d.currentImg.find("img:first");w.click(function(){var a=c(this).attr("rel");C(b,d,c(w[d.current_img_no]));I(d,b,g,v);d.bottomNavClicked=!0;d.current_img_no=a-1;D(1,d,b,q,w,g,p,k,n,v,r,s)});w.mouseenter(function(){var a=c(this);a.attr("rel");F(b,d,a)});w.mouseleave(function(){var a=c(this),f=a.attr("rel");d.current_img_no!=f&&C(b,d,a)});g.mouseenter(function(){b.autoHideBottomNav&&b.showBottomNav&&!(0>b.thumbsWrapperMarginTop&& d.isVideoPlaying)&&b.showBottomNav&&(t.css({display:"block"}),t.stop().animate({opacity:1},500,"swing",function(){}))});g.mouseleave(function(){b.autoHideBottomNav&&b.showBottomNav&&t.stop().animate({opacity:0},300,"swing",function(){})});var H=!1,x=!0;c(window).resize(function(){var a=E();x=!0;-1!=navigator.userAgent.indexOf("Android")&&(0==b.windowOrientationScreenSize0&&0==window.orientation&&(b.windowOrientationScreenSize0=c(window).width()),0==b.windowOrientationScreenSize90&&90==window.orientation&& (b.windowOrientationScreenSize90=c(window).height()),0==b.windowOrientationScreenSize_90&&-90==window.orientation&&(b.windowOrientationScreenSize_90=c(window).height()),b.windowOrientationScreenSize0&&0==window.orientation&&c(window).width()>b.windowOrientationScreenSize0&&(x=!1),b.windowOrientationScreenSize90&&90==window.orientation&&c(window).height()>b.windowOrientationScreenSize90&&(x=!1),b.windowOrientationScreenSize_90&&-90==window.orientation&&c(window).height()>b.windowOrientationScreenSize_90&& (x=!1),0==d.windowWidth&&(x=!1,d.windowWidth=c(window).width()));-1!=a&&9==a&&0==d.windowWidth&&(x=!1);d.windowWidth==c(window).width()?(x=!1,b.windowCurOrientation!=window.orientation&&-1!=navigator.userAgent.indexOf("Android")&&(b.windowCurOrientation=window.orientation,x=!0)):d.windowWidth=c(window).width();b.responsive&&x&&(!1!==H&&clearTimeout(H),H=setTimeout(function(){var a=b,f=q,e=g,l=p;E();if(a.width100Proc&&a.height100Proc&&!a.setAsBg){var v=c("body").css("overflow");c("body").css("overflow", "hidden")}responsiveWidth=h.parent().parent().parent().width();responsiveHeight=h.parent().parent().parent().height();a.responsiveRelativeToBrowser&&(responsiveWidth=c(window).width(),responsiveHeight=c(window).height());a.width100Proc&&(a.width=responsiveWidth);a.height100Proc&&(a.height=responsiveHeight);if(a.origWidth!=responsiveWidth||a.width100Proc)a.origWidth>responsiveWidth||a.width100Proc?a.width=responsiveWidth:a.width100Proc||(a.width=a.origWidth),a.height100Proc||(a.height=a.width/d.bannerRatio), a.width=parseInt(a.width,10),a.height=parseInt(a.height,10),m.width(a.width),m.height(a.height),e.width(parseInt(a.width-2*a.borderWidth/(a.origWidth/a.width),10)),e.height(parseInt(a.height-2*a.borderWidth/(a.origWidth/a.width),10)),e.css({left:a.borderWidth/(a.origWidth/a.width)+"px",top:a.borderWidth/(a.origWidth/a.width)+"px"}),a.width100Proc&&a.height100Proc&&a.setAsBg?G(d,a,n,e):(c(".lbg_player",e).width(e.width()),c(".lbg_player",e).height(e.height()),c(".lbg_vimeo_player",e).width(e.width()), c(".lbg_vimeo_player",e).height(e.height())),K(d,a,f,e,w,k,r,s,l,u,t);A(0,k,r,s,a,f,l,d);a.width100Proc&&a.height100Proc&&!a.setAsBg&&c("body").css("overflow",v)},300))});r.click(function(){d.isCarouselScrolling||(currentCarouselLeft=k.css("left").substr(0,k.css("left").lastIndexOf("px")),0>currentCarouselLeft&&A(1,k,r,s,b,q,p,d))});s.click(function(){d.isCarouselScrolling||(currentCarouselLeft=k.css("left").substr(0,k.css("left").lastIndexOf("px")),Math.abs(currentCarouselLeft-d.carouselStep)<(2* d.thumbBorderWidth+p.width()+d.thumbMarginLeft)*q&&A(-1,k,r,s,b,q,p,d))})})};c.fn.universal_video_background.defaults={skin:"thumbs",width:960,height:540,width100Proc:!1,height100Proc:!1,randomizeVideos:!1,firstImg:0,initialVolume:1,loop:!0,setAsBg:!1,texturePath:"",borderWidth:0,borderColor:"#FFFFFF",absUrl:"",responsive:!1,responsiveRelativeToBrowser:!0,numberOfThumbsPerScreen:0,bottomNavPos:"center",bottomNavLateralMargin:0,thumbsWrapperMinHeight:25,thumbsWrapperMarginTop:-85,thumbsWrapperTopPadding:10, thumbsWrapperBottomPadding:10,thumbsWrapperBg:"transparent",thumbsBorderColorON:"#FFF",thumbsBorderColorOFF:"#FFF",thumbsBgOffColor:"transparent",thumbsBgOffImgOpacity:0,thumbsBgOnColor:"#FFF",thumbsBgOnImgOpacity:100,showBottomNav:!0,showOnInitBottomNav:!0,autoHideBottomNav:!1,showVideoControls:!0,suggestedQuality:"default",autoPlayFirstVideo:!0,youtubeJsUrl:"https://www.youtube.com/iframe_api",vimeoJsUrl:"http://a.vimeocdn.com/js/froogaloop2.min.js",videoProportionWidth:16,videoProportionHeight:9, origWidth:0,origHeight:0,origThumbW:0,origThumbH:0,origThumbImgW:110,origThumbImgH:65,origthumbLeftPadding:0,origthumbRightPadding:0,origthumbTopPadding:0,origthumbBottomPadding:0,origthumbTitleFont:0,origthumbRegFont:0,origthumbTitleLineHeight:0,origthumbRegLineHeight:0,origthumbsHolder_MarginTop:0,windowOrientationScreenSize0:0,windowOrientationScreenSize90:0,windowOrientationScreenSize_90:0,windowCurOrientation:0}})(jQuery);