(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{135:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(138),r=n.n(c),i=n(136);function o(){var e=r()(['\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n']);return o=function(){return e},e}var m=Object(i.createGlobalStyle)(o()),u=n(137),s=n(151),f=Object(i.default)(u.Flex).withConfig({displayName:"SocialBar__Absolute",componentId:"l0pk0f-0"})(["position:absolute;right:20px;height:100vh;z-index:1;"]),d=Object(i.default)(u.Link).withConfig({displayName:"SocialBar__SocialLink",componentId:"l0pk0f-1"})(["color:white;"]);d.defaultProps={mb:3,as:"a"};var h=function(){return l.a.createElement(f,{flexDirection:"row",justifyContent:"center",mt:3},l.a.createElement(u.Box,{mx:2},l.a.createElement(d,{href:"https://github.com/jamesmckenzie"},l.a.createElement(s.a,{size:"2.5em"}))),l.a.createElement(u.Box,{mx:2},l.a.createElement(d,{href:"https://twitter.com/jmc_kenzie"},l.a.createElement(s.c,{size:"2.5em"}))),l.a.createElement(u.Box,{mx:2},l.a.createElement(d,{href:"https://www.linkedin.com/in/james-mckenzie-10975314/"},l.a.createElement(s.b,{size:"2.5em"}))))};function p(){var e=r()(["position:absolute;height:100%;z-index:-2;"]);return p=function(){return e},e}function g(){var e=r()(["position:relative;"]);return g=function(){return e},e}var E=function(){return l.a.createElement(u.Box,{py:3,color:"white",bg:"whitesmoke",as:"footer"},l.a.createElement(u.Text,{fontFamily:"Raleway, sans-serif",textAlign:"center"},"❤️"))},b=function(e){var t=e.children;return l.a.createElement(v,null,l.a.createElement(x,null),l.a.createElement(m,null),l.a.createElement(h,null),t,l.a.createElement(E,null))},v=Object(i.default)(u.Box)(g()),x=Object(i.default)(u.Box)(p()),w=Object(i.keyframes)(["0%{opacity:0;}100%{opacity:1;}"]),y=i.default.div.withConfig({displayName:"FadeIn",componentId:"ivzbum-0"})(["animation:"," ","s;"],w,function(e){return e.duration}),z=(n(70),n(50),n(146),{desktop:992,tablet:768,phone:576}),k=Object.keys(z).reduce(function(e,t){return e[t]=function(){return Object(i.css)(["@media (max-width:","em){",";}"],z[t]/16,i.css.apply(void 0,arguments))},e},{});function B(){var e=r()(["animation:"," 7s infinite 3s linear;"]);return B=function(){return e},e}function j(){var e=r()(["border-radius:6px;"]);return j=function(){return e},e}function M(){var e=r()(["height:122vh;min-height:830px;",""]);return M=function(){return e},e}function C(){var e=r()(["position:relative;"]);return C=function(){return e},e}function F(){var e=r()(["\n            min-height: 500px;\n          "]);return F=function(){return e},e}var I=Object(i.default)(u.Box).withConfig({displayName:"Hero__Background",componentId:"l6blo0-0"})(["z-index:-1;height:100%;width:100%;position:absolute;transform:skewY(-6deg);transform-origin:top left;background:#56ccf2;background:-webkit-linear-gradient( to right,#2f80ed,#56ccf2 );background:linear-gradient( to right,#2f80ed,#56ccf2 );"]),S=Object(i.keyframes)(["0%{transform:rotate(0deg);}2%{transform:rotate(-10deg);}4%{transform:rotate(20deg);}6%{transform:rotate(-10deg);}8%{transform:rotate(20deg);}10%{transform:rotate(0deg);}"]),O=[50,80,100,120],A=function(){return l.a.createElement(_,null,l.a.createElement(I,null),l.a.createElement(y,{duration:1},l.a.createElement(q,{justifyContent:"center",alignItems:"center",_css:k.desktop(F())},l.a.createElement(u.Box,null,l.a.createElement(u.Text,{as:"p",fontFamily:"Raleway, sans-serif",fontSize:O.map(function(e){return.3*e}),fontWeight:300,color:"white",letterSpacing:-1,mb:[-2]},"Hello, I'm"),l.a.createElement(u.Text,{as:"h1",fontFamily:"Neuton, serif",fontWeight:800,fontSize:O,color:"white"},"James McKenzie."),l.a.createElement(u.Text,{as:"p",fontFamily:"Raleway, sans-serif",fontSize:O.map(function(e){return.5*e}),fontWeight:300,color:"white",mt:4,letterSpacing:-1},l.a.createElement(u.Flex,{alignItems:["start","center"],flexDirection:["column","row"],justifyContent:"center"},l.a.createElement(u.Text,{mb:[2,0],color:"white"},"A",l.a.createElement(H,{mx:2,as:"span",bg:"white",color:"#2f80ed",p:3,lineHeight:1},l.a.createElement("i",null,"software developer"))," "),l.a.createElement(u.Text,{mt:[3,0]},"from London")),l.a.createElement(T,{as:"p",textAlign:["center"],fontSize:O.map(function(e){return.5*e}),mt:[4,5,6,6]},"👋"))))))},_=Object(i.default)(u.Box)(C()),q=Object(i.default)(u.Flex)(M(),function(e){return e._css}),H=Object(i.default)(u.Text)(j()),T=Object(i.default)(u.Text)(B(),S),N=n(148),D=n.n(N),L=function(){return l.a.createElement("svg",{viewBox:"0 0 128 128"},l.a.createElement("path",{fill:"#61DAFB",d:"M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"}))},J=function(){return l.a.createElement("svg",{viewBox:"0 0 128 128"},l.a.createElement("path",{fill:"#F0DB4F",d:"M1.408 1.408h125.184v125.185h-125.184z"}),l.a.createElement("path",{fill:"#323330",d:"M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"}))},R=function(){return l.a.createElement("svg",{viewBox:"0 0 128 128"},l.a.createElement("path",{fill:"#007ACC",id:"original-2","data-name":"original",d:"M1.5,63.91v62.5h125V1.41H1.5Zm100.73-5a15.56,15.56,0,0,1,7.82,4.5,20.58,20.58,0,0,1,3,4c0,.16-5.4,3.81-8.69,5.85-.12.08-.6-.44-1.13-1.23a7.09,7.09,0,0,0-5.87-3.53c-3.79-.26-6.23,1.73-6.21,5a4.58,4.58,0,0,0,.54,2.34c.83,1.73,2.38,2.76,7.24,4.86,8.95,3.85,12.78,6.39,15.16,10,2.66,4,3.25,10.46,1.45,15.24-2,5.2-6.9,8.73-13.83,9.9a38.32,38.32,0,0,1-9.52-.1,23,23,0,0,1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34,9.34,0,0,1,1.15-.73L82,101l3.59-2.08.75,1.11a16.78,16.78,0,0,0,4.74,4.54c4,2.1,9.46,1.81,12.16-.62a5.43,5.43,0,0,0,.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48,16.48,0,0,1-3.43-6.25,25,25,0,0,1-.22-8c1.33-6.23,6-10.58,12.82-11.87A31.66,31.66,0,0,1,102.23,58.93ZM72.89,64.15l0,5.12H56.66V115.5H45.15V69.26H28.88v-5A49.19,49.19,0,0,1,29,59.09C29.08,59,39,59,51,59L72.83,59Z"}))},W=function(){return l.a.createElement("svg",{viewBox:"0 0 128 128"},l.a.createElement("path",{fill:"#83CD29",d:"M114.325 80.749c-.29 0-.578-.076-.832-.224l-2.65-1.568c-.396-.221-.203-.3-.072-.345.528-.184.635-.227 1.198-.545.059-.033.136-.021.197.015l2.035 1.209c.074.041.179.041.246 0l7.937-4.581c.075-.042.122-.127.122-.215v-9.16c0-.09-.047-.173-.123-.219l-7.934-4.577c-.074-.042-.171-.042-.245 0l-7.933 4.578c-.076.045-.125.131-.125.218v9.16c0 .088.049.171.125.212l2.174 1.257c1.18.589 1.903-.105 1.903-.803v-9.045c0-.127.103-.228.23-.228h1.007c.125 0 .229.101.229.228v9.045c0 1.574-.857 2.477-2.35 2.477-.459 0-.82 0-1.828-.496l-2.081-1.198c-.515-.298-.832-.854-.832-1.448v-9.16c0-.595.317-1.15.832-1.446l7.937-4.587c.502-.283 1.169-.283 1.667 0l7.937 4.587c.514.297.833.852.833 1.446v9.16c0 .595-.319 1.148-.833 1.448l-7.937 4.582c-.252.147-.539.223-.834.223M116.778 74.438c-3.475 0-4.202-1.595-4.202-2.932 0-.126.103-.229.23-.229h1.026c.115 0 .21.082.228.194.154 1.045.617 1.572 2.718 1.572 1.671 0 2.383-.378 2.383-1.266 0-.512-.202-.891-2.8-1.146-2.172-.215-3.515-.694-3.515-2.433 0-1.601 1.35-2.557 3.612-2.557 2.543 0 3.801.883 3.96 2.777.006.064-.017.127-.06.176-.044.045-.104.073-.168.073h-1.031c-.107 0-.201-.075-.223-.179-.248-1.1-.848-1.451-2.479-1.451-1.825 0-2.037.637-2.037 1.112 0 .577.25.745 2.715 1.071 2.439.323 3.598.779 3.598 2.494.001 1.733-1.441 2.724-3.955 2.724"}),l.a.createElement("path",{fill:"#404137",d:"M97.982 68.43c.313-.183.506-.517.506-.88v-2.354c0-.362-.192-.696-.506-.879l-8.364-4.856c-.315-.183-.703-.184-1.019-.002l-8.416 4.859c-.314.182-.508.517-.508.88v9.716c0 .365.196.703.514.884l8.363 4.765c.308.177.686.178.997.006l5.058-2.812c.161-.09.261-.258.262-.44.001-.184-.097-.354-.256-.445l-8.468-4.86c-.159-.091-.256-.259-.256-.44v-3.046c0-.182.097-.349.254-.439l2.637-1.52c.156-.091.35-.091.507 0l2.637 1.52c.158.091.255.258.255.439v2.396c0 .183.097.351.254.441.158.091.352.091.51-.001l5.039-2.932"}),l.a.createElement("path",{fill:"#83CD29",d:"M88.984 67.974c.061-.034.135-.034.195 0l1.615.933c.06.035.097.1.097.169v1.865c0 .07-.037.134-.097.169l-1.615.932c-.06.035-.135.035-.195 0l-1.614-.932c-.061-.035-.098-.099-.098-.169v-1.865c0-.069.037-.134.098-.169l1.614-.933"}),l.a.createElement("path",{fill:"#404137",d:"M67.083 71.854c0 .09-.048.174-.127.22l-2.89 1.666c-.079.046-.176.046-.254 0l-2.89-1.666c-.079-.046-.127-.13-.127-.22v-3.338c0-.09.049-.175.127-.221l2.89-1.668c.079-.047.176-.047.255 0l2.891 1.668c.078.046.126.131.126.221v3.338zm.781-24.716c-.157-.087-.349-.085-.505.006-.155.092-.251.258-.251.438v12.915c0 .126-.068.244-.177.308-.11.063-.246.063-.356 0l-2.108-1.215c-.314-.181-.701-.181-1.015 0l-8.418 4.858c-.315.182-.509.518-.509.881v9.719c0 .363.194.698.508.881l8.418 4.861c.314.182.702.182 1.017 0l8.42-4.861c.314-.183.508-.518.508-.881v-24.227c0-.368-.2-.708-.521-.888l-5.011-2.795"}),l.a.createElement("path",{fill:"#83CD29",d:"M38.238 59.407c.314-.182.702-.182 1.016 0l8.418 4.857c.314.182.508.518.508.881v9.722c0 .363-.194.699-.508.881l-8.417 4.861c-.314.181-.702.181-1.017 0l-8.415-4.861c-.314-.182-.508-.518-.508-.881v-9.723c0-.362.194-.698.508-.88l8.415-4.857"}),l.a.createElement("path",{fill:"#404137",d:"M22.93 65.064c0-.366-.192-.702-.508-.883l-8.415-4.843c-.144-.084-.303-.127-.464-.133h-.087c-.16.006-.32.049-.464.133l-8.416 4.843c-.313.181-.509.517-.509.883l.018 13.04c0 .182.095.351.254.439.156.094.349.094.505 0l5-2.864c.316-.188.509-.519.509-.882v-6.092c0-.364.192-.699.507-.881l2.13-1.226c.158-.093.332-.137.508-.137.174 0 .352.044.507.137l2.128 1.226c.315.182.509.517.509.881v6.092c0 .363.195.696.509.882l5 2.864c.157.094.353.094.508 0 .155-.089.252-.258.252-.439l.019-13.04"}))},V=function(){return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},l.a.createElement("g",{fill:"#764ABC"},l.a.createElement("path",{d:"M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z"}),l.a.createElement("path",{d:"M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z"}),l.a.createElement("path",{d:"M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z"})))},Z=Object(i.default)(D.a).withConfig({displayName:"AboutMe__StyledImg",componentId:"sc-56mb9r-0"})(["border-radius:50%;"]),G=function(e){var t=e.image;return l.a.createElement(u.Box,{px:4,mt:4,mb:5},l.a.createElement(u.Flex,{flexDirection:["column","row"],alignItems:"center"},l.a.createElement(u.Box,{width:[7/8,1/3,1/3],px:[5,0,4,5],mb:4},l.a.createElement(Z,{fluid:t.childImageSharp.fluid})),l.a.createElement(u.Box,{width:[1,2/3,2/3],px:[2,4,3]},l.a.createElement(u.Box,{mb:4},l.a.createElement(u.Text,{as:"h2",fontFamily:"Neuton, serif",fontWeight:800,fontSize:[5,6],textAlign:"center",color:"#2f2f2f"},"About Me")),l.a.createElement(u.Text,{fontSize:3,color:"#2f2f2f",as:"p",fontFamily:"Raleway, sans-serif",lineHeight:1.6},l.a.createElement("p",null,"I'm a multi-disciplined Software Engineer, currently building cool stuff at JustGiving. I enjoy solving interesting problems with occasionally novel solutions and understand that the best answer isn't always the prettiest."),l.a.createElement(u.Flex,{justifyContent:"center"},l.a.createElement(u.Flex,{width:[.75,.75,.5],mt:4},l.a.createElement(u.Box,{width:1,mx:2},l.a.createElement(J,null)),l.a.createElement(u.Box,{width:1,mx:2},l.a.createElement(R,null)),l.a.createElement(u.Box,{width:1,mx:2},l.a.createElement(W,null)),l.a.createElement(u.Box,{width:1,mx:2},l.a.createElement(L,null)),l.a.createElement(u.Box,{width:1,mx:2},l.a.createElement(V,null))))))))};n.d(t,"query",function(){return K});i.default.svg.withConfig({displayName:"pages__Angle",componentId:"sc-1rmyqsz-0"})(["margin-top:-150vh;"]),t.default=function(e){var t=e.data;return console.log(t.fileName.childImageSharp),l.a.createElement(b,null,l.a.createElement(A,null),l.a.createElement(G,{image:t.fileName}))};var K="1004225169"}}]);
//# sourceMappingURL=component---src-pages-index-tsx-7227a89a44507784fc95.js.map