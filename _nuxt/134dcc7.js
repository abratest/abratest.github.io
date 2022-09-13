(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{1173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),r=n(1174),c=n(1177),l=n(469),d=n(1178),h=o.__importDefault(n(246)),f=n(2131),w=function(){function e(e,t){var n=this;this.clientId=e,this.signUsing=t&&t.signUsing||l.WindowMode.POPUP,this.windowMode=t&&t.windowMode||l.WindowMode.POPUP,this.useOverlayWithPopup=!t||null==t.useOverlayWithPopup||t.useOverlayWithPopup,h.default.rawEnvironment=t&&t.environment||"prod",this._bearerTokenProvider=t&&t.bearerTokenProvider||function(){return n.loginResult&&n.loginResult.authenticated&&n.auth&&n.auth.token||""},this._bearerTokenProvider&&(this.api=new c.Api(h.default.urls.api,this._bearerTokenProvider)),this.flows=new f.Flows(this,this.clientId)}return e.prototype.checkAuthenticated=function(){return o.__awaiter(this,void 0,void 0,(function(){var e;return o.__generator(this,(function(t){switch(t.label){case 0:return this.loginResult?[2,this.afterAuthentication(this.loginResult)]:[3,1];case 1:return[4,r.Security.checkAuthenticated(this.clientId)];case 2:return e=t.sent(),[2,this.afterAuthentication(e)]}}))}))},e.prototype.logout=function(e){var t=this;return this.loginResult=void 0,(e&&e.windowMode||this.windowMode)===l.WindowMode.REDIRECT?new Promise((function(n,o){var r={};e&&e.redirectUri&&Object.assign(r,{redirectUri:e.redirectUri}),t.auth?t.auth.logout(r).then((function(){return n()})).catch((function(){return o})):n()})):this.auth?r.Security.logout(this.auth).then((function(){return t.auth=void 0})):Promise.resolve()},e.prototype.addOnTokenRefreshCallback=function(e){e&&(r.Security.onTokenUpdate=e)},e.prototype.createSigner=function(e,t){return t&&null!=t.useOverlay||(t={useOverlay:this.useOverlayWithPopup}),d.SignerFactory.createSignerFor(e||this.signUsing||this.windowMode,this._bearerTokenProvider,t)},e.prototype.isPopupSigner=function(e){return void 0!==e.closePopup},e.prototype.authenticate=function(e){return o.__awaiter(this,void 0,void 0,(function(){return o.__generator(this,(function(t){return[2,this.flows.authenticate(e)]}))}))},e.prototype.manageWallets=function(e,t){return this.flows.manageWallets(e,t)},e.prototype.linkWallets=function(e){return this.flows.linkWallets(e)},e.prototype._afterAuthenticationForFlowUse=function(e){return this.afterAuthentication(e)},e.prototype.afterAuthentication=function(e){return this.loginResult=e,this.auth=e.keycloak,{auth:this.auth,isAuthenticated:e.authenticated,authenticated:function(t){return e.authenticated&&e.keycloak&&t(e.keycloak),this},notAuthenticated:function(t){return e.authenticated||t(e.keycloak),this}}},e}();t.VenlyConnect=w},1174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),r=o.__importDefault(n(682)),c=n(469),l=n(1175),d=n(552),h=o.__importDefault(n(246)),f=function(){function e(){}return e.getConfig=function(e){return{clientId:e||h.default.env.CONNECT_JS_CLIENT_ID,realm:h.default.env.CONNECT_JS_REALM,url:h.default.urls.login,"ssl-required":h.default.env.CONNECT_JS_SSL_REQUIRED,"public-client":h.default.env.CONNECT_JS_PUBLIC_CLIENT}},e.login=function(t,n,o){switch(n&&n.windowMode){case c.WindowMode.POPUP:return e.loginPopup(t,o||h.default.uuidv4(),n);default:return e.loginRedirect(t,n)}},e.loginRedirect=function(t,n){var o=e.getConfig(t);return n&&n.idpHint&&n.idpHint,this.keycloakLogin(o,n)},e.loginPopup=function(t,n,o){var r=!o||o.closePopup;return Promise.race([e.initialiseAuthenticatedListener(t,d.EventTypes.AUTHENTICATE,n,r),e.initialiseLoginPopup(t,n,o)])},e.checkAuthenticated=function(t){var n=e.initialiseAuthenticatedListener(t,d.EventTypes.CHECK_AUTHENTICATED,h.default.uuidv4());return e.initialiseCheckAuthenticatedIFrame(t),n},e.logout=function(t){var n=this;return t.authenticated&&t.clientId?new Promise((function(r,c){return o.__awaiter(n,void 0,void 0,(function(){var n,l,f;return o.__generator(this,(function(o){switch(o.label){case 0:return t.clientId?(n={client_id:t.clientId,refresh_token:t.refreshToken},l=Object.keys(n).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])})).join("&"),[4,fetch(h.default.urls.login+"/realms/Arkane/protocol/openid-connect/logout",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:l})]):[3,3];case 1:return o.sent(),f=e,[4,e.createLogoutListener(d.EventTypes.LOGOUT,t,r,c)];case 2:f.logoutListener=o.sent(),window.addEventListener("message",e.logoutListener),e.initialiseLogoutIFrame(t.clientId),o.label=3;case 3:return[2]}}))}))})):Promise.resolve()},e.hasPopupWindow=function(e){return this.popupWindow.has(e)},e.closePopupWindow=function(t){e.closedPopupWindows.push(t);var n=e.popupWindow.get(t);n&&!n.closed&&(n.close(),e.popupWindow.delete(t))},Object.defineProperty(e,"checkAuthenticatedURI",{get:function(){return h.default.urls.connect+"/checkAuthenticated"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"authenticateURI",{get:function(){return h.default.urls.connect+"/authenticate"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"logoutURI",{get:function(){return h.default.urls.connect+"/logout"},enumerable:!0,configurable:!0}),e.initialiseLoginPopup=function(t,n,o){var c=window.location.href.replace(window.location.search,""),d=e.authenticateURI+"?"+r.default.stringify({clientId:t,origin:c,env:h.default.rawEnvironment});if(o&&o.idpHint){var f=o.idpHint;"twitter"!==f&&"facebook"!==f||(f="arkane-"+f),d+="&"+r.default.stringify({kc_idp_hint:f})}return e.popupWindow.set(n,l.PopupWindow.openNew(d,{useOverlay:!1})),e.closedPopupWindows.find((function(e){return e===n}))&&e.closePopupWindow(n),e.initialiseIsLoginPopupClosedInterval(n)},e.initialiseIsLoginPopupClosedInterval=function(t){return new Promise((function(n,o){e.isLoginPopupClosedInterval=window.setInterval((function(){var o=e.popupWindow.get(t);o&&o.closed&&(e.clearIsLoginPopupClosedInterval(),e.cleanUp(d.EventTypes.AUTHENTICATE,t),n({authenticated:!1}))}),2e3)}))},e.clearIsLoginPopupClosedInterval=function(){clearInterval(e.isLoginPopupClosedInterval),delete e.isLoginPopupClosedInterval},e.initialiseCheckAuthenticatedIFrame=function(t){return this.initialiseIFrame(t,e.AUTH_IFRAME_ID,e.checkAuthenticatedURI)},e.initialiseLogoutIFrame=function(t){return this.initialiseIFrame(t,e.LOGOUT_IFRAME_ID,e.logoutURI)},e.initialiseIFrame=function(e,t,n){var iframe=document.getElementById(t),o=!0;iframe||(o=!1,iframe=document.createElement("iframe"));var c=window.location.href.replace(window.location.search,"");return iframe.src=n+"?"+r.default.stringify({clientId:e,origin:c,env:h.default.rawEnvironment}),iframe.hidden=!0,iframe.id=t,iframe.setAttribute("style","display: none!important;"),document.body.appendChild(iframe),o||document.body.appendChild(iframe),iframe},e.setUpdateTokenInterval=function(){var t=this;e.updateTokenInterval&&(clearInterval(e.updateTokenInterval),e.updateTokenInterval=null),e.updateTokenInterval=setInterval((function(){return o.__awaiter(t,void 0,void 0,(function(){return o.__generator(this,(function(t){return new Promise((function(t,n){e.keycloak?e.keycloak.updateToken(70).then((function(e){t(e)})):n(!1)})).then((function(t){t&&e.onTokenUpdate&&e.keycloak.token&&e.onTokenUpdate(e.keycloak.token)})).catch((function(){console.error("failed to refresh token"),clearInterval(e.updateTokenInterval),e.updateTokenInterval=null})),[2]}))}))}),6e4)},e.keycloakLogin=function(t,r){return o.__awaiter(this,void 0,void 0,(function(){var c;return o.__generator(this,(function(l){switch(l.label){case 0:return[4,Promise.resolve().then((function(){return o.__importStar(n(1176))}))];case 1:return c=l.sent(),e.keycloak=c.default(t),[2,new Promise((function(t,n){e.keycloak.init({}).then((function(){return e.keycloak.login(r).then((function(n){n&&e.setUpdateTokenInterval(),t({keycloak:e.keycloak,authenticated:n})})).catch((function(e){n(e)}))}))}))]}}))}))},e.initKeycloak=function(t,r){return o.__awaiter(this,void 0,void 0,(function(){var c;return o.__generator(this,(function(l){switch(l.label){case 0:return[4,Promise.resolve().then((function(){return o.__importStar(n(1176))}))];case 1:return c=l.sent(),e.keycloak=c.default(t),[2,new Promise((function(t,n){e.keycloak.init(r).then((function(n){n&&e.setUpdateTokenInterval(),t({keycloak:e.keycloak,authenticated:n})})).catch((function(e){n(e)}))}))]}}))}))},e.removeLoginState=function(){var e=window.location.href,t=e.indexOf("#");if(-1!==t){var n=e.substring(0,t);window.history.replaceState({},"",n)}},e.cleanUp=function(t,n,o){if(void 0===o&&(o=!0),e.authenticatedListener&&(window.removeEventListener("message",e.authenticatedListener),delete e.authenticatedListener),t===d.EventTypes.CHECK_AUTHENTICATED){var iframe=document.getElementById(e.AUTH_IFRAME_ID);iframe&&iframe.remove()}else if(t===d.EventTypes.AUTHENTICATE&&o){var r=e.popupWindow.get(n);r&&!r.closed&&(r.close(),e.popupWindow.delete(n))}},e.popupWindow=new Map,e.closedPopupWindows=[],e.AUTH_IFRAME_ID="venly-auth-iframe",e.LOGOUT_IFRAME_ID="venly-logout-iframe",e.initialiseAuthenticatedListener=function(t,n,r,c){return o.__awaiter(this,void 0,void 0,(function(){var l=this;return o.__generator(this,(function(d){return[2,new Promise((function(d,f){e.authenticatedListener=function(w){return o.__awaiter(l,void 0,void 0,(function(){var l,v,k,_;return o.__generator(this,(function(o){switch(o.label){case 0:if(!w||w.origin!==h.default.urls.connect||!w.data||w.data.type!==n)return[3,6];if(e.isLoginPopupClosedInterval&&e.clearIsLoginPopupClosedInterval(),!w.data.authenticated)return[3,5];o.label=1;case 1:return o.trys.push([1,3,,4]),e.cleanUp(n,r,c),l=w.data.keycloak,v={onLoad:"check-sso",token:l.token,refreshToken:l.refreshToken,idToken:l.idToken,timeSkew:l.timeSkew,checkLoginIframe:!1},e.removeLoginState(),[4,e.initKeycloak(e.getConfig(t),v)];case 2:return k=o.sent(),d({keycloak:k.keycloak,authenticated:k.authenticated}),[3,4];case 3:return _=o.sent(),f({error:_}),[3,4];case 4:return[3,6];case 5:d({authenticated:!1}),o.label=6;case 6:return[2]}}))}))},window.addEventListener("message",e.authenticatedListener)}))]}))}))},e.createLogoutListener=function(e,t,n,r){return o.__awaiter(this,void 0,void 0,(function(){return o.__generator(this,(function(o){return[2,function(o){o&&o.origin===h.default.urls.connect&&o.data&&o.data.type===e&&(t.authenticated?o.data.authenticated?r():(t.onAuthLogout&&t.onAuthLogout(),n()):n())}]}))}))},e}();t.Security=f},1177:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),r=o.__importDefault(n(97)),c=o.__importDefault(n(246)),l=function(){function e(e,t){var n=this;this.getAvailableSecretTypes=function(){return n.processResponse(n.http.get("chains"))},this.getWallets=function(e){return e=e&&c.default.removeNulls(e)||{},n.processResponse(n.http.get("wallets",{params:e}))},this.getWallet=function(e){return n.processResponse(n.http.get("wallets/"+e))},this.getBalance=function(e){return n.processResponse(n.http.get("wallets/"+e+"/balance"))},this.getTokenBalances=function(e){return n.processResponse(n.http.get("wallets/"+e+"/balance/tokens"))},this.getTokenBalance=function(e,t){return n.processResponse(n.http.get("wallets/"+e+"/balance/tokens/"+t))},this.getNonfungibles=function(e){return n.processResponse(n.http.get("wallets/"+e+"/nonfungibles"))},this.getNonfungiblesByAddress=function(e,t){return n.processResponse(n.http.get("wallets/"+e+"/"+t+"/nonfungibles"))},this.getAllNonfungibles=function(e){var t=e&&e.length>0?"?"+e.map((function(e){return"secretType="+e})).join("&"):"";return n.processResponse(n.http.get("wallets/nonfungibles"+t))},this.unlink=function(e){return n.processResponse(n.http.delete("wallets/"+e+"/link"))},this.getProfile=function(){return n.processResponse(n.http.get("profile"))},this.getPendingTransactions=function(){return n.processResponse(n.http.get("transactions"))},this.deleteTransaction=function(e){return n.processResponse(n.http.delete("transactions/"+e))},this.getTransactionStatus=function(e,t){return n.processResponse(n.http.get("transactions/"+t+"/"+e+"/status"))},this.readContract=function(e){return n.processResponse(n.http.post("contracts/read",e))},this.http=r.default.create({baseURL:e.endsWith("/")?e.substring(0,e.length-1):e}),t&&this.http.interceptors.request.use((function(e){var n=t();if(!n)throw new Error("Not authenticated");return e.headers.common={Authorization:"Bearer "+n},e}))}return e.prototype.processResponse=function(e){return new Promise((function(t,n){e.then((function(e){e.data.success?e.data.result?t(e.data.result):t():n(e.data.errors)})).catch((function(e){if(e.response&&e.response.data)n(e.response.data.errors);else if(e.message){var code=e.message.indexOf("authenticat")>=0?"auth.error":"unknown.error";n([{code:code,message:e.message}])}else n([{code:"unknown.error",message:"An unknown error occured"}])}))}))},e}();t.Api=l},2131:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),r=o.__importDefault(n(246)),c=n(2132),l=n(2133),d=n(1174),h=n(469),f=function(){function e(e,t){this.clientId=t,this.connect=e}return e.prototype.authenticate=function(e){return o.__awaiter(this,void 0,void 0,(function(){var t,n;return o.__generator(this,(function(r){switch(r.label){case 0:return(t=o.__assign({},e)).windowMode=t.windowMode||this.connect.windowMode,[4,d.Security.login(this.clientId,t)];case 1:return n=r.sent(),[2,this.connect._afterAuthenticationForFlowUse(n)]}}))}))},e.prototype.manageWallets=function(e,t){var n=t&&t.windowMode||this.connect.windowMode,o=t&&null!=t.useOverlayWithPopup?t.useOverlayWithPopup:this.connect.useOverlayWithPopup;return n===h.WindowMode.REDIRECT?this.manageWalletsRedirect(e,t):this.manageWalletsPopup(e,{useOverlay:o})},e.prototype.linkWallets=function(e){var t=e&&e.windowMode||this.connect.windowMode,n=e&&null!=e.useOverlayWithPopup?e.useOverlayWithPopup:this.connect.useOverlayWithPopup;return t===h.WindowMode.REDIRECT?this.linkWalletsRedirect(e):this.linkWalletsPopup({useOverlay:n})},e.prototype.claimWallets=function(e){var t=e&&e.windowMode||this.connect.windowMode,n=e&&e.useOverlayWithPopup||this.connect.useOverlayWithPopup;return t===h.WindowMode.REDIRECT?this.claimWalletsRedirect(e):this.claimWalletsPopup({useOverlay:n})},e.prototype.getAccount=function(e,t){return o.__awaiter(this,void 0,void 0,(function(){var n,c,l,f,w,v,k;return o.__generator(this,(function(o){switch(o.label){case 0:n={},c=[],l=r.default.uuidv4(),o.label=1;case 1:return o.trys.push([1,7,,8]),f={windowMode:h.WindowMode.POPUP,closePopup:!1},t&&t.idpHint&&(f.idpHint=t.idpHint),[4,d.Security.login(this.clientId,f,l)];case 2:return n=o.sent(),(w=this.connect._afterAuthenticationForFlowUse(n)).isAuthenticated?[4,this.connect.api.getWallets({secretType:e.toUpperCase()})]:[3,6];case 3:return(c=o.sent())&&c.length>0?[3,6]:[4,this.manageWallets(e,{windowMode:h.WindowMode.POPUP})];case 4:return(v=o.sent())&&"SUCCESS"===v.status?[4,this.connect.api.getWallets({secretType:e.toUpperCase()})]:[3,6];case 5:c=o.sent(),o.label=6;case 6:if(!w.isAuthenticated||0===c.length)throw Error("Something went wrong.");return[3,8];case 7:return k=o.sent(),console.error(k),[3,8];case 8:return d.Security.hasPopupWindow(l)&&d.Security.closePopupWindow(l),[2,{wallets:c,auth:n.keycloak,isAuthenticated:n.authenticated}]}}))}))},e.prototype.manageWalletsRedirect=function(e,t){return r.default.http().postInForm(r.default.urls.connect+"/wallets/manage",{chain:e.toLowerCase()},this.connect._bearerTokenProvider,t),Promise.resolve()},e.prototype.manageWalletsPopup=function(e,t){return c.GeneralPopup.openNewPopup(l.PopupActions.MANAGE_WALLETS,this.connect._bearerTokenProvider,{chain:e.toLowerCase()},t)},e.prototype.linkWalletsRedirect=function(e){return r.default.http().postInForm(r.default.urls.connect+"/wallets/link",{},this.connect._bearerTokenProvider,e),Promise.resolve()},e.prototype.linkWalletsPopup=function(e){return c.GeneralPopup.openNewPopup(l.PopupActions.LINK_WALLET,this.connect._bearerTokenProvider,void 0,e)},e.prototype.claimWalletsRedirect=function(e){return r.default.http().postInForm(r.default.urls.connect+"/wallets/claim",{},this.connect._bearerTokenProvider,e),Promise.resolve()},e.prototype.claimWalletsPopup=function(e){return c.GeneralPopup.openNewPopup(l.PopupActions.CLAIM_WALLETS,this.connect._bearerTokenProvider,void 0,e)},e}();t.Flows=f}}]);