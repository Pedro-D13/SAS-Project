(function(g){var window=this;var B5=function(a){g.jD.call(this,{B:"div",G:"ytp-miniplayer-ui"});this.player=a;this.H=!1;this.F=this.A=this.l=void 0;this.K(a,"minimized",this.LJ);this.K(a,"onStateChange",this.LM)},C5=function(a){g.$K.call(this,a);
this.g=new B5(this.player);this.g.hide();g.MK(this.player,this.g.element,4);a.app.F.g&&(this.load(),g.I(a.getRootNode(),"ytp-player-minimized",!0))};
g.t(B5,g.jD);g.h=B5.prototype;
g.h.show=function(){this.l=new g.oo(this.UF,null,this);this.l.start();if(!this.H){this.D=new g.vW(this.player,this);g.C(this,this.D);g.MK(this.player,this.D.element,4);this.D.A=.6;this.R=new g.yV(this.player);g.C(this,this.R);this.C=new g.W({B:"div",G:"ytp-miniplayer-scrim"});g.C(this,this.C);this.C.g(this.element);this.K(this.C.element,"click",this.nz);var a=new g.W({B:"button",W:["ytp-miniplayer-close-button","ytp-button"],L:{"aria-label":"Close"},J:[g.PP()]});g.C(this,a);a.g(this.C.element);this.K(a.element,
"click",this.Mx);this.u=new g.W({B:"div",G:"ytp-miniplayer-controls"});g.C(this,this.u);this.u.g(this.C.element);this.K(this.u.element,"click",this.nz);var b=new g.W({B:"div",G:"ytp-miniplayer-button-container"});g.C(this,b);b.g(this.u.element);a=new g.W({B:"div",G:"ytp-miniplayer-play-button-container"});g.C(this,a);a.g(this.u.element);var c=new g.W({B:"div",G:"ytp-miniplayer-button-container"});g.C(this,c);c.g(this.u.element);this.M=new g.AT(this.player,this,!1);g.C(this,this.M);this.M.g(b.element);
b=new g.xT(this.player,this);g.C(this,b);b.g(a.element);this.I=new g.AT(this.player,this,!0);g.C(this,this.I);this.I.g(c.element);this.F=new g.TU(this.player,this);g.C(this,this.F);this.F.g(this.C.element);this.A=new g.GT(this.player,this);g.C(this,this.A);g.MK(this.player,this.A.element,4);this.o=new g.W({B:"div",G:"ytp-miniplayer-buttons"});g.C(this,this.o);g.MK(this.player,this.o.element,4);this.o.hide();a=new g.W({B:"button",W:["ytp-miniplayer-close-button","ytp-button"],L:{"aria-label":"Close"},
J:[g.PP()]});g.C(this,a);a.g(this.o.element);this.K(a.element,"click",this.Mx);a=new g.W({B:"button",W:["ytp-miniplayer-replay-button","ytp-button"],L:{"aria-label":"Close"},J:[g.bQ()]});g.C(this,a);a.g(this.o.element);this.K(a.element,"click",this.HK);this.K(this.player,"presentingplayerstatechange",this.VF);this.K(this.player,"appresize",this.Va);this.K(this.player,"fullscreentoggled",this.Va);this.Va();this.H=!0}0!=this.player.getPlayerState()&&g.jD.prototype.show.call(this);this.A.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.l&&(this.l.dispose(),this.l=void 0);g.jD.prototype.hide.call(this);this.player.app.F.g||(this.H&&this.A.hide(),this.player.loadModule("annotations_module"))};
g.h.U=function(){this.l&&(this.l.dispose(),this.l=void 0);g.jD.prototype.U.call(this)};
g.h.Mx=function(){this.player.stopVideo();this.player.la("onCloseMiniplayer")};
g.h.HK=function(){this.player.playVideo()};
g.h.nz=function(a){if(a.target==this.C.element||a.target==this.u.element)g.O(g.X(this.player).experiments,"kevlar_miniplayer_scrim_pause")?2==this.player.getPlayerState()?this.player.playVideo():this.player.pauseVideo():this.player.la("onExpandMiniplayer")};
g.h.LJ=function(){g.I(this.player.getRootNode(),"ytp-player-minimized",this.player.app.F.g);this.player.app.F.g&&0==this.player.getPlayerState()?this.o.show():this.o.hide()};
g.h.UF=function(){this.A.Mc();this.F.Mc();this.l&&this.l.start()};
g.h.VF=function(a){g.T(a.state,32)&&this.D.hide()};
g.h.Va=function(){var a=this.A,b=g.yK(this.player).getPlayerSize().width;a.Ca=0;a.A=b;a.D=!1;g.IT(a)};
g.h.LM=function(a){this.player.app.F.g&&(0==a?(this.hide(),this.o.show()):(this.show(),this.o.hide()))};
g.h.Za=function(){return this.D};
g.h.ec=function(){return!1};
g.h.vg=function(){return!1};
g.h.ji=function(){return!1};
g.h.Ws=function(){};
g.h.Ug=function(){};
g.h.Aj=function(){};
g.h.xn=function(){return null};
g.h.Ar=function(){return new g.nh(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.Jk=function(a,b,c,d,e){var f=0,k=d=0,l=g.Sh(a);if(b){c=g.go(b,"ytp-prev-button")||g.go(b,"ytp-next-button");var m=g.go(b,"ytp-play-button");c?f=k=12:m&&(b=g.Ph(b,this.element),k=b.x,f=b.y-12)}else k=c-l.width/2,d=25+(e||0);b=g.yK(this.player).getPlayerSize().width;e=f+(e||0);k=g.pd(k,0,b-l.width);e?(a.style.top=e+"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=k+"px"};
g.h.showControls=function(){};
g.h.Br=function(){};
g.h.Qh=function(){};g.t(C5,g.$K);C5.prototype.init=function(){};
C5.prototype.load=function(){this.player.hideControls();this.g.show()};
C5.prototype.unload=function(){this.player.showControls();this.g.hide()};g.uV.miniplayer=C5;})(_yt_player);