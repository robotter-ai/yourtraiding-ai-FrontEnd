(this["webpackJsonpyourtrading-ai"]=this["webpackJsonpyourtrading-ai"]||[]).push([[0],{358:function(e,t,a){},504:function(e,t){},556:function(e,t,a){var n={"./amplify-amazon-button_5.entry.js":[566,16],"./amplify-auth-container.entry.js":[567,17],"./amplify-auth-fields_9.entry.js":[568,18],"./amplify-authenticator.entry.js":[569,5],"./amplify-button_3.entry.js":[570,19],"./amplify-chatbot.entry.js":[571,4],"./amplify-checkbox.entry.js":[572,20],"./amplify-confirm-sign-in_7.entry.js":[573,6],"./amplify-container.entry.js":[574,21],"./amplify-federated-buttons_2.entry.js":[575,22],"./amplify-federated-sign-in.entry.js":[576,23],"./amplify-form-field_4.entry.js":[577,24],"./amplify-greetings.entry.js":[578,25],"./amplify-icon-button.entry.js":[579,26],"./amplify-icon.entry.js":[580,7],"./amplify-link.entry.js":[581,27],"./amplify-nav_2.entry.js":[582,28],"./amplify-photo-picker.entry.js":[583,29],"./amplify-picker.entry.js":[584,30],"./amplify-radio-button_3.entry.js":[585,8],"./amplify-s3-album.entry.js":[586,9],"./amplify-s3-image-picker.entry.js":[587,10],"./amplify-s3-image.entry.js":[588,11],"./amplify-s3-text-picker.entry.js":[589,12],"./amplify-s3-text.entry.js":[590,13],"./amplify-select-mfa-type.entry.js":[591,31],"./amplify-sign-in-button.entry.js":[592,14],"./amplify-tooltip.entry.js":[593,32]};function i(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],i=t[0];return a.e(t[1]).then((function(){return a(i)}))}i.keys=function(){return Object.keys(n)},i.id=556,e.exports=i},557:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(63),c=a.n(r),s=(a(358),a(185)),o=a(680),l={aws_project_region:"eu-central-1",aws_appsync_graphqlEndpoint:"https://nwss3pdjyrfp3dzrx75cj3f7wy.appsync-api.eu-central-1.amazonaws.com/graphql",aws_appsync_region:"eu-central-1",aws_appsync_authenticationType:"API_KEY",aws_appsync_apiKey:"da2-pjjxbwv4k5bqpirdqiftbivds4",aws_cognito_identity_pool_id:"eu-central-1:9e9b6618-7558-4802-b9b7-7042af51ec4c",aws_cognito_region:"eu-central-1",aws_user_pools_id:"eu-central-1_4H04pLnS1",aws_user_pools_web_client_id:"34smfig1u745ljhls7l6nsmrlt",oauth:{},aws_cognito_login_mechanisms:[],aws_cognito_signup_attributes:["EMAIL"],aws_cognito_mfa_configuration:"OFF",aws_cognito_mfa_types:["SMS"],aws_cognito_password_protection_settings:{passwordPolicyMinLength:8,passwordPolicyCharacters:[]},aws_cognito_verification_mechanisms:["EMAIL"]},d=a(675),j=a(690),p=a(20),u=a(92),m=a(9),h=a(57),y=a(689),b=a(687),f=a(669),x=a(692),g=a(691),O=a(672),v=a(684),_=a(673),w=a(325),k=a(563),C=a(661),S=a(11),P=a(3),L=Object(k.a)((function(e){return Object(C.a)({inherit:{color:"inherit"},secondary:{color:e.palette.secondary.main},textPrimary:{color:e.palette.text.primary},textSecondary:{color:e.palette.text.secondary},default:{color:e.palette.secondary.main},none:{color:"transparent"}})}));function M(e){var t=e.src,a=e.color,n=e.className,i=e.style,r=e.fallbackComp,c=L(),s=r?function(){return r}:void 0;return Object(P.jsx)(w.a,{style:Object(u.a)({lineHeight:0,width:null===i||void 0===i?void 0:i.maxWidth,height:null===i||void 0===i?void 0:i.maxHeight},i),fallback:s,className:Object(S.a)("svg",n,c[null!==a&&void 0!==a?a:"default"]),src:t})}var E=i.a.memo(M),F=a(683),D=a(693),I=a(694),T=a(695),K=a(685),N=a(677),H=a(688),W=a(696),q=a(697),z=a(698),A=a(662),B=a(663),U=a(311),G=a(312),J=a(326);function R(e,t){return{time:e,amount:t,amount2:t+Math.round(1e3*Math.random()),amount3:t+Math.round(2e3*Math.random())}}var Y=[R("00:00",0),R("03:00",300),R("06:00",600),R("09:00",800),R("12:00",1500),R("15:00",2e3),R("18:00",2400),R("21:00",2400),R("24:00",2500)];function V(){var e=Object(h.a)();return Object(P.jsx)(i.a.Fragment,{children:Object(P.jsx)(A.a,{children:Object(P.jsxs)(B.a,{data:Y,margin:{top:16,right:16,bottom:0,left:24},children:[Object(P.jsx)(U.a,{dataKey:"time",stroke:e.palette.text.secondary}),Object(P.jsx)(G.a,{stroke:e.palette.text.secondary}),Object(P.jsx)(J.a,{type:"monotone",dataKey:"amount",stroke:e.palette.primary.main,dot:!1}),Object(P.jsx)(J.a,{type:"monotone",dataKey:"amount2",stroke:e.palette.primary.light,dot:!1}),Object(P.jsx)(J.a,{type:"monotone",dataKey:"amount3",stroke:e.palette.primary.dark,dot:!1})]})})})}var X=i.a.memo(V),$=Object(m.a)("main",{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,a=e.open;return Object(u.a)({flexGrow:1,padding:t.spacing(3),transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),marginLeft:"-".concat(367,"px")},a&&{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),marginLeft:0})})),Q=Object(m.a)("div")((function(e){var t=e.theme;return Object(u.a)(Object(u.a)({display:"flex",alignItems:"center",padding:t.spacing(0,2)},t.mixins.toolbar),{},{justifyContent:"flex-start",gap:t.spacing(2)})})),Z=["Yahoo","Google"],ee=["Hourly","Daily"],te=[{name:"min",value:1},{name:"max",value:1},{name:"avg",value:1},{name:"count",value:1}];function ae(){var e=Object(h.a)(),t=n.useState(Z[0]),a=Object(p.a)(t,2),i=a[0],r=a[1],c=n.useState(ee[0]),s=Object(p.a)(c,2),o=s[0],l=s[1],d=[{name:"BTC",value:123,checked:[{name:"min",isChecked:!0},{name:"max",isChecked:!1},{name:"mean",isChecked:!0},{name:"count",isChecked:!1}]},{name:"ETH",value:123,checked:[{name:"min",isChecked:!0},{name:"max",isChecked:!0}]},{name:"LTC",value:123,checked:[{name:"min",isChecked:!0}]},{name:"XRP",value:123,checked:[{name:"min",isChecked:!0}]},{name:"USDT",value:123,checked:[{name:"min",isChecked:!0}]}],j={minWidth:200};return Object(P.jsxs)(y.a,{sx:{display:"flex"},children:[Object(P.jsx)(f.a,{}),Object(P.jsxs)(b.a,{sx:{width:367,flexShrink:0,"& .MuiDrawer-paper":{width:367,boxSizing:"border-box"}},variant:"persistent",anchor:"left",open:!0,children:[Object(P.jsxs)(Q,{children:[Object(P.jsx)(E,{src:"/assets/logo.svg"}),Object(P.jsx)(g.a,{variant:"h5",component:"h1",children:"youtrading.ai"})]}),Object(P.jsx)(O.a,{}),Object(P.jsx)(x.a,{children:d.map((function(t,a){var n=t.name,i=t.value,r=t.checked;return Object(P.jsxs)(v.a,{button:!0,children:[Object(P.jsx)(F.a,{inputProps:{"aria-label":"".concat(n," checkbox")}}),Object(P.jsx)(_.a,{children:Object(P.jsx)(E,{src:"/assets/logo.svg"})}),Object(P.jsxs)(y.a,{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:e.spacing(0,2),width:"100%",justifyContent:"space-between"},children:[Object(P.jsx)(g.a,{children:n}),Object(P.jsx)(g.a,{align:"right",children:i}),Object(P.jsx)(y.a,{style:{gridColumnEnd:"end",gridColumnStart:1,display:"flex",flexWrap:"wrap",gap:e.spacing(0,2)},children:r.filter((function(e){return e.isChecked})).map((function(e){return Object(P.jsx)(g.a,{variant:"caption",children:e.name},e.name)}))})]})]},n)}))})]}),Object(P.jsxs)($,{open:!0,style:{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[Object(P.jsxs)(y.a,{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:e.spacing(2)},children:[Object(P.jsxs)(y.a,{children:[Object(P.jsx)(g.a,{variant:"h5",component:"h2",children:"Etherium"}),Object(P.jsx)(g.a,{variant:"h3",component:"h3",children:"$10,561.24"})]}),Object(P.jsx)(D.a,{sx:j,children:Object(P.jsxs)(I.a,{children:[Object(P.jsx)(g.a,{color:"text.secondary",children:"Volume:"}),te.map((function(t){var a=t.name,n=t.value;return Object(P.jsxs)(y.a,{display:"flex",style:{justifyContent:"space-between",gap:e.spacing(2)},children:[Object(P.jsx)(g.a,{variant:"body2",children:a}),Object(P.jsx)(g.a,{variant:"body2",align:"right",children:n})]},a)}))]})}),Object(P.jsxs)(y.a,{display:"flex",style:{flexDirection:"column",gap:e.spacing(2)},children:[Object(P.jsxs)(T.a,{sx:j,children:[Object(P.jsx)(K.a,{id:"select-interval",children:"Interval"}),Object(P.jsx)(N.a,{labelId:"select-interval",value:o,label:"interval",onChange:function(e){l(e.target.value)},children:ee.map((function(e){return Object(P.jsx)(H.a,{value:e,children:e},e)}))})]}),Object(P.jsxs)(T.a,{sx:j,children:[Object(P.jsx)(K.a,{id:"select-source",children:"Source"}),Object(P.jsx)(N.a,{labelId:"select-source",value:i,label:"source",onChange:function(e){r(e.target.value)},children:Z.map((function(e){return Object(P.jsx)(H.a,{value:e,children:e},e)}))})]})]})]}),Object(P.jsx)(X,{}),Object(P.jsx)(W.a,{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:e.spacing(2)},children:d[0].checked.map((function(e){var t=e.name,a=e.isChecked;return Object(P.jsx)(q.a,{control:Object(P.jsx)(F.a,{checked:a,inputProps:{"aria-label":"".concat(t," checkbox")}},t),label:t})}))})]}),Object(P.jsx)(z.a,{color:"primary","aria-label":"download",style:{position:"fixed",right:e.spacing(3),bottom:e.spacing(3)},children:Object(P.jsx)(E,{src:"/assets/cloud_download.svg"})})]})}var ne=n.memo(ae);s.default.configure(l);var ie=Object(d.a)(j.a)((function(){return{width:"100vw",height:"100vh"}}));var re=Object(o.a)((function(){return Object(P.jsx)(ie,{style:{borderRadius:0,backgroundColor:"#303030"},children:Object(P.jsx)(ne,{})})})),ce=function(e){e&&e instanceof Function&&a.e(35).then(a.bind(null,714)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),r(e),c(e)}))},se=a(699),oe=a(323),le={palette:{mode:"dark",primary:{main:"#00ffd0"},secondary:{main:"#db00ff"},error:{main:"#e50037"},background:{default:"#303030",paper:"#424242"}},typography:{fontFamily:"Lexend"}},de=Object(se.a)(Object(oe.a)(Object(u.a)({},le))),je=a(678),pe=a(701),ue=function(e,t){var a;return"".concat(null!==(a=null===t||void 0===t?void 0:t.options.classNamePrefix)&&void 0!==a?a:"","-").concat(e.key)},me=function(e){var t=e.theme,a=e.children,n="undefined"!==typeof jest;return Object(P.jsx)(je.b,{generateClassName:n?ue:void 0,children:Object(P.jsx)(pe.a,{theme:t,children:a})})};var he=function(e){var t=e.children;return Object(P.jsx)(me,{theme:de,children:t})};s.default.configure(l),c.a.render(Object(P.jsx)(i.a.StrictMode,{children:Object(P.jsx)(he,{children:Object(P.jsx)(re,{})})}),document.getElementById("root")),ce()}},[[557,2,3]]]);
//# sourceMappingURL=main.9e1f3aec.chunk.js.map