(this.webpackJsonpvideorecording=this.webpackJsonpvideorecording||[]).push([[0],{20:function(e,a,t){e.exports=t(39)},25:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(18),l=t.n(r),o=(t(25),t(7)),s=t(11),i=t.n(s),m=t(19),u=t.n(m),d=t(8);var b=function(){var e=Object(n.useState)(0),a=Object(o.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(""),m=Object(o.a)(l,2),b=m[0],p=m[1],v=Object(n.useState)(1),g=Object(o.a)(v,2),E=g[0],f=g[1],h=Object(n.useState)(0),w=Object(o.a)(h,2),y=w[0],j=w[1],k=new s.UnityContent("./MyGame/360_vr_derco_build.json","./MyGame/UnityLoader.js");k.on("createVideo",(function(e){r(parseInt(e))})),k.on("numberQuestion",(function(e){f(e)})),k.on("userName",(function(e){p(e)})),k.on("progress",(function(e){j(100*e)}));var N=d.storage(),O=d.database(),R=Object(n.useState)(!1),U=Object(o.a)(R,2),C=U[0],S=U[1],I=Object(n.useState)([]),x=Object(o.a)(I,2),z=x[0],L=x[1],A=Object(n.useRef)(null),M=Object(n.useRef)(null),G=Object(n.useCallback)((function(e){var a=e.data;a.size>0&&L((function(e){return e.concat(a)}))}),[L]),B=Object(n.useCallback)((function(){S(!0),M.current=new MediaRecorder(A.current.stream,{mimeType:"video/webm"}),M.current.addEventListener("dataavailable",G),M.current.start()}),[G]),D=Object(n.useCallback)((function(){M.current.stop(),S(!1)}),[M]),_=Object(n.useCallback)((function(){var e=b;if(console.log(e),z.length){var a=new Blob(z,{type:"video/webm"});N.ref("/videos/".concat(e,"/pregunta-").concat(E,".webm")).put(a).then((function(a){a.ref.getDownloadURL().then((function(a){console.log(a),O.ref("users/".concat(e,"/answers/").concat(E)).update({url:a}),console.log("gg"),k.send("Menu","nextQuestion"),r(0),f(2)})),console.log("Uploaded a blob or file!")}));var t=URL.createObjectURL(a),n=document.createElement("a");document.body.appendChild(n),n.style="display: none",n.href=t,n.download="video-".concat(e,"-pregunta-").concat(E,".webm"),n.click(),window.URL.revokeObjectURL(t),L([])}}),[E,b,z,N]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{class:"navbar navbar-dark bg-dark"},c.a.createElement("a",{class:"navbar-brand d-flex align-items-center"},c.a.createElement("img",{src:"".concat(".","/img/logo.png"),width:"130",class:"d-inline-block align-top mr-2",alt:""}),"Assessent VR")),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row justify-content-center mt-4"},c.a.createElement("div",{className:"col-md-10",style:{height:"35em",display:1!==t?"block":"none"}},c.a.createElement(i.a,{unityContent:k}),y>=100?"":c.a.createElement("div",{className:"progress"},c.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(y,"%")},"aria-valuenow":y,"aria-valuemin":"0","aria-valuemax":"100"},"".concat(Math.round(y),"%"))))),c.a.createElement("div",{className:"row justify-content-center"},1===t?c.a.createElement("div",{className:"col-md-10"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("h1",{className:"text-center text-primary"},'Espera hasta verte, para darle al boton "Iniciar Grabaci\xf3n"'),c.a.createElement("h6",{className:"text-center"},"Seg\xfan la pregunta anterior, comparta su respuesta, pulsando en el bot\xf3n iniciar grabaci\xf3n."))),c.a.createElement("div",{className:"row justify-content-center mt-2"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement(u.a,{className:"embed-responsive mt",audio:!0,ref:A,style:{maxHeight:"35em"}})),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("h4",null,"Pasos :"),c.a.createElement("ul",{style:{listStyleType:"decimal"}},c.a.createElement("li",null,c.a.createElement("h6",null,"Asigna el permiso a la c\xe1mara de tu computador")),c.a.createElement("li",null,c.a.createElement("h6",null,"Una vez tu imagen aparezca en el recuadro, haz clic en el bot\xf3n \u201cIniciar grabaci\xf3n\u201d")),c.a.createElement("li",null,c.a.createElement("h6",null,"Finalizada la respuesta, haz clic en el bot\xf3n \u201c Para Grabaci\xf3n\u201d")),c.a.createElement("li",null,c.a.createElement("h6",null,"Finalmente haz clic en el bot\xf3n \u201cDescargar y enviar respuesta\u201d"))),C?c.a.createElement("button",{className:"btn btn-danger btn-lg btn-block m-2",onClick:D},"Parar Grabaci\xf3n"):z.length>0?"":c.a.createElement("button",{className:"btn btn-primary btn-lg btn-block m-2",onClick:B},"Iniciar Grabaci\xf3n"),z.length>0&&c.a.createElement("button",{className:"btn btn-success btn-lg btn-block m-2",onClick:function(){return _(b)}},"Descargar y Enviar Video Respuesta"))),c.a.createElement("div",{className:"row justify-content-center"}))):"")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p={apiKey:"AIzaSyAMCRd5n-be6H3TmUdwZAUnstxAXRn6I_4",authDomain:"vr-derco-admin.firebaseapp.com",databaseURL:"https://vr-derco-admin.firebaseio.com",projectId:"vr-derco-admin",storageBucket:"vr-derco-admin.appspot.com",messagingSenderId:"480451728887",appId:"1:480451728887:web:511444325186c793684af2"};d.initializeApp(p),l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.993c9259.chunk.js.map