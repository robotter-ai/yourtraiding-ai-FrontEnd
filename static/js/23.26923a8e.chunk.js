(this["webpackJsonpyourtrading-ai"]=this["webpackJsonpyourtrading-ai"]||[]).push([[23],{576:function(t,e,i){"use strict";i.r(e),i.d(e,"amplify_federated_sign_in",(function(){return f}));var a=i(35),n=i(83),d=i(66),o=i(143),s=i(45),r=new n.a("amplify-federated-sign-in"),f=function(){function t(t){Object(a.k)(this,t),this.authState=d.a.SignIn,this.federated={}}return t.prototype.componentWillLoad=function(){if(!o.a||"function"!==typeof o.a.configure)throw new Error(s.d);var t=o.a.configure().oauth,e=void 0===t?{}:t;e.domain?this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),e):e.awsCognito&&(this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),e.awsCognito)),e.auth0&&(this.federated.auth0=Object.assign(Object.assign({},this.federated.auth0),e.auth0))},t.prototype.render=function(){return this.federated?Object.values(d.a).includes(this.authState)?(r.debug("federated Config is",this.federated),Object(a.i)("amplify-form-section",{"data-test":"federated-sign-in-section"},Object(a.i)("amplify-section",{"data-test":"federated-sign-in-body-section"},Object(a.i)("amplify-federated-buttons",{authState:this.authState,"data-test":"federated-sign-in-buttons",federated:this.federated})))):null:(r.debug("federated prop is empty. show nothing"),r.debug("federated={google_client_id: , facebook_app_id: , amazon_client_id}"),null)},t}()}}]);
//# sourceMappingURL=23.26923a8e.chunk.js.map