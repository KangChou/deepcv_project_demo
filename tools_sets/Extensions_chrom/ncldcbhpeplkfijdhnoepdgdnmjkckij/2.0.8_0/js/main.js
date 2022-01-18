!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("jquery"));else if("function"==typeof define&&define.amd)define(["jquery"],e);else{var n="object"==typeof exports?e(require("jquery")):e(t.jQuery);for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(window,function(t){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(e,n){e.exports=t},function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i);n(2);const r=function(t,e){this.element=t,this.settings=o.a.extend({},r.defaults,e),this.settings.fullPage=this.element.is("body"),this.init(),this.settings.start&&this.start()};r.defaults={overlay:void 0,zIndex:void 0,message:"Loading...",theme:"light",shownClass:"loading-shown",hiddenClass:"loading-hidden",stoppable:!1,start:!0,onStart:function(t){t.overlay.fadeIn(150)},onStop:function(t){t.overlay.fadeOut(150)},onClick:function(){}},r.setDefaults=function(t){r.defaults=o.a.extend({},r.defaults,t)},o.a.extend(r.prototype,{init:function(){this.isActive=!1,this.overlay=this.settings.overlay||this.createOverlay(),this.resize(),this.attachMethodsToExternalEvents(),this.attachOptionsHandlers()},createOverlay:function(){var t=o()('<div class="loading-overlay loading-theme-'+this.settings.theme+'"><div class="loading-overlay-content">'+this.settings.message+"</div></div>").addClass(this.settings.hiddenClass).hide().appendTo("body"),e=this.element.attr("id");return e&&t.attr("id",e+"_loading-overlay"),t},attachMethodsToExternalEvents:function(){var t=this;t.element.on("loading.start",function(){t.overlay.removeClass(t.settings.hiddenClass).addClass(t.settings.shownClass)}),t.element.on("loading.stop",function(){t.overlay.removeClass(t.settings.shownClass).addClass(t.settings.hiddenClass)}),t.settings.stoppable&&t.overlay.on("click",function(){t.stop()}),t.overlay.on("click",function(){t.element.trigger("loading.click",t)}),o()(window).on("resize",function(){t.resize()}),o()(function(){t.resize()})},attachOptionsHandlers:function(){var t=this;t.element.on("loading.start",function(e,n){t.settings.onStart(n)}),t.element.on("loading.stop",function(e,n){t.settings.onStop(n)}),t.element.on("loading.click",function(e,n){t.settings.onClick(n)})},calcZIndex:function(){return void 0!==this.settings.zIndex?this.settings.zIndex:(parseInt(this.element.css("z-index"))||0)+1+this.settings.fullPage},resize:function(){var t=this.element,e=t.outerWidth(),n=t.outerHeight();this.settings.fullPage&&(n="100%",e="100%"),this.overlay.css({position:this.settings.fullPage?"fixed":"absolute",zIndex:this.calcZIndex(),top:t.offset().top,left:t.offset().left,width:e,height:n})},start:function(){this.isActive=!0,this.resize(),this.element.trigger("loading.start",this)},stop:function(){this.isActive=!1,this.element.trigger("loading.stop",this)},active:function(){return this.isActive},toggle:function(){this.active()?this.stop():this.start()},destroy:function(){this.overlay.remove()}});var s="jquery-loading";o.a.fn.loading=function(t){return this.each(function(){var e=o.a.data(this,s);e?void 0===t?e.start():"string"==typeof t?e[t].apply(e):(e.destroy(),o.a.data(this,s,new r(o()(this),t))):void 0!==t&&"object"!=typeof t&&"start"!==t&&"toggle"!==t||o.a.data(this,s,new r(o()(this),t))})},o.a.fn.Loading=function(t){var e=o()(this).data(s);return e&&void 0===t||o()(this).data(s,e=new r(o()(this),t)),e},o.a.expr[":"].loading=function(t){var e=o.a.data(t,s);return!!e&&e.active()},o.a.Loading=r},function(t,e,n){var i=n(3);"string"==typeof i&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1};n(5)(i,o);i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,"/* Default jquery-loading styles */\r\n\r\n.loading-overlay {\r\n  display: table;\r\n  opacity: 0.7;\r\n}\r\n\r\n.loading-overlay-content {\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.4em;\r\n  font-size: 1.15em;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n\r\n.loading-overlay.loading-theme-light {\r\n  background-color: #fff;\r\n  color: #000;\r\n}\r\n\r\n.loading-overlay.loading-theme-dark {\r\n  background-color: #000;\r\n  color: #fff;\r\n}\r\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=(s=i,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),r=i.sources.map(function(t){return"/*# sourceURL=".concat(i.sourceRoot).concat(t," */")});return[n].concat(r).concat([o]).join("\n")}var s,a,l;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];null!=r&&(i[r]=!0)}for(var s=0;s<t.length;s++){var a=t[s];null!=a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="(".concat(a[2],") and (").concat(n,")")),e.push(a))}},e}},function(t,e,n){"use strict";var i,o={},r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},s=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function a(t,e){for(var n=[],i={},o=0;o<t.length;o++){var r=t[o],s=e.base?r[0]+e.base:r[0],a={css:r[1],media:r[2],sourceMap:r[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}function l(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=o[i.id],s=0;if(r){for(r.refs++;s<r.parts.length;s++)r.parts[s](i.parts[s]);for(;s<i.parts.length;s++)r.parts.push(v(i.parts[s],e))}else{for(var a=[];s<i.parts.length;s++)a.push(v(i.parts[s],e));o[i.id]={id:i.id,refs:1,parts:a}}}}function c(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var i=n.nc;i&&(t.attributes.nonce=i)}if(Object.keys(t.attributes).forEach(function(n){e.setAttribute(n,t.attributes[n])}),"function"==typeof t.insert)t.insert(e);else{var o=s(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var u,d=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function f(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=d(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}var h=null,p=0;function v(t,e){var n,i,o;if(e.singleton){var r=p++;n=h||(h=c(e)),i=f.bind(null,n,r,!1),o=f.bind(null,n,r,!0)}else n=c(e),i=function(t,e,n){var i=n.css,o=n.media,r=n.sourceMap;if(o&&t.setAttribute("media",o),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r());var n=a(t,e);return l(n,e),function(t){for(var i=[],r=0;r<n.length;r++){var s=n[r],c=o[s.id];c&&(c.refs--,i.push(c))}t&&l(a(t,e),e);for(var u=0;u<i.length;u++){var d=i[u];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete o[d.id]}}}}}])});
var mzk_base_domain = '';
function get_base_api(){
    if(!mzk_base_domain) {
        mzk_base_domain = localStorage.getItem("mzk_base_domain");
    }
    return mzk_base_domain;
}
var MZK_BGS = chrome.extension.getBackgroundPage();


document.oncontextmenu = document.body.oncontextmenu = function() {return false;}

function start_loading(){
    $.LoadingOverlay("show");
}

function stop_loading(){
    $.LoadingOverlay("hide");
}

function register_token(_acallback) {
    chrome.runtime.sendMessage({cmd:"register_token"}, function(response) {
           if(response.result == "ok") if(_acallback) _acallback();
    });
}

$("#mzk_back").on("click",function () {
    window.location.href = "main.html";
});


function check_user_login(will_login) {
    if(typeof chrome === "undefined" || typeof chrome.runtime === "undefined" || typeof chrome.runtime.id === "undefined") {
        window.close();
        return false;
    }
    if (!MZK_BGS.mzk_user_info || !MZK_BGS.mzk_user_token) {
        window.location.href = "welcome.html";
        return;
    } else {
        mzk_user_info = MZK_BGS.mzk_user_info;
        mzk_user_token = MZK_BGS.mzk_user_token;
        if (!MZK_BGS.mzk_user_info.vip_expired)
            MZK_BGS.mzk_user_info.vip_expired = MZK_BGS.get_lan_msg("vip_expiry_date_status");
        if (will_login)
            will_login();
    }
}


function MZK_getJSON_DATA(API , send_data , _rcallback){
    start_loading();
    MZK_BGS.MZK_getJSON_DATA(API , send_data,function(data){
        if(_rcallback) _rcallback(data);
        stop_loading();
    });
}

function add_new_whitedomain(newdomain ,add_remarks, __rcallback){
    MZK_getJSON_DATA("chromeext/pac/add_white_domain",{domain:newdomain,remarks:add_remarks},function(data){
           if(data.result == "ok") {
               var index = MZK_BGS.mzk_pac_config.user_custom_proxydomain.data.indexOf(newdomain);
               if(index === -1) {
                   var custom_data = MZK_BGS.mzk_pac_config.user_custom_proxydomain.data;
                   custom_data.push(newdomain);
                   MZK_BGS.mzk_pac_config.user_custom_proxydomain.data = custom_data;
               }
               if(MZK_BGS.mzk_is_connect) {
                   MZK_BGS.close_vpn(function(){
                       MZK_BGS.open_vpn();
                   });
               }
               if(__rcallback) {
                    __rcallback(data);
                }
           }
       });
}

function lang_init(){
    $("[class^='lang_']").each(function(i) {
        var lang_index = $(this).attr("class").toString();
        lang_index = lang_index.split(" ",1)[0].replace(/^lang_/,"");
        $(this).html(MZK_BGS.get_lan_msg(lang_index));
    });
}

if(("#mzk_about_us").length > 0) {
    lang_init();
    $("#mzk_server_police").on("click",function(){
        window.open("https://iguge.xyz/helper/?page_id=210","igugehelper");
    });
    
    $("#mzk_privacy_police").on("click",function(){
        window.open("https://iguge.xyz/helper/?page_id=215","igugehelper");
    });
}

function only_vip_tips(){
    $.confirm({
        title: MZK_BGS.get_lan_msg("error_code"),
        content: MZK_BGS.get_lan_msg("only_vip_tips"),
        type: 'red',
        typeAnimated: true,
        buttons: {
            ok: {
                text: MZK_BGS.get_lan_msg("to_buy_vip"),
                btnClass: 'btn-red',
                action: function(){
                    window.location.href = "buyvip.html";
                }
            },
            close: function () {
            }
        }
    });
}

var mzk_containSpecial = RegExp(/[(\ )(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\-)(\_)(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\.)(\/)(\<)(\>)(\?)(\)]+/);

function CheckIsValidDomain(domain) { 
    var re = new RegExp(/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/); 
    return domain.match(re);
} 

function close_windows(){
    chrome.tabs.getCurrent(function(tab){
        chrome.tabs.remove(tab.id);
    });
}

function JqueryAlertMsg(msg) {
    $.confirm({
        title: 'Success',
        content: msg,
        type: 'green',
        buttons: {
            OK: function () {
                ;
            }
        }
    });
}

function fix_proxy_permissions(){
    chrome.management.getAll(function(ExtensionInfo){
        ExtensionInfo.forEach(disable_clash_app);
    });
}

function disable_clash_app(ExtensionInfo){
    if(typeof ExtensionInfo.permissions !== "undefined"  && ExtensionInfo.permissions.indexOf('proxy') !== -1 && ExtensionInfo.enabled === true && ExtensionInfo.id !== chrome.runtime.id) {
        chrome.management.setEnabled(ExtensionInfo.id,false);
    }else if(ExtensionInfo.name == "Tampermonkey"){
        chrome.management.setEnabled(ExtensionInfo.id,false);
    }
    //todo check webRequest and hostPermissions => <all_urls>
}