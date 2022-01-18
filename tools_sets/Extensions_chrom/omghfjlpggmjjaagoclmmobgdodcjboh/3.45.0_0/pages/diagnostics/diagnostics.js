(()=>{"use strict";var e,t={3940:(e,t,s)=>{const i=(e,t)=>{let s=performance.now(),i=self.pageYOffset;return new Promise((n=>{let o=()=>{let r=performance.now()-s;r>t?n():(self.scrollTo(0,i+(e-i)*r/t),requestAnimationFrame(o))};requestAnimationFrame(o)}))};var n=s(8897);let o=("undefined"!=typeof browser?browser:chrome).runtime.connect({name:"diagnostics"}),r=[];o.onMessage.addListener((e=>{r.forEach((t=>{t(e)}))}));const a=e=>{r.push(e)},c=async()=>{let e=await(0,n.Z)({type:"Diagnostics.getState"});if(!e)throw new Error("Connection with background failed");return e},l=async()=>{let e=await(0,n.Z)({type:"Diagnostics.getSteps"});if(!e)throw new Error("Connection with background failed");return e},d=e=>{r=r.filter((t=>t!==e))},p=e=>(0,n.Z)({type:"Diagnostics.start",extensions:e}),h=()=>(0,n.Z)({type:"Diagnostics.terminate"}),u=async e=>{if(!await(async()=>"undefined"!=typeof browser||new Promise((e=>{chrome.permissions.request({permissions:["management"]},e)})))())throw new Error("Not enough permissions");return await Promise.all(e.map((e=>new Promise((t=>{chrome.management.setEnabled(e,!1,t)}))))),new Promise((e=>{chrome.management.getAll(e)}))},g="\np, ul, ol, td, th{\n  padding: 0;\n  margin: 0;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nul, ol{\n  list-style: none;\n}\n";var x=s(7584);const b=(e,t,s)=>{if(!t)return!1;let i=e.find((({name:e})=>"proxyApi"===e));return!!i&&"error"===i.state===("proxyApi"===s)},v=(e,t)=>{var s;switch(null===(s=e.find((({name:e})=>e===t)))||void 0===s?void 0:s.state){case"not started":return"";case"in process":return"progress";case"success":return"success";case"partial":return"partial";case"error":return"error";default:return""}},f=(e,t)=>{var s;let i=null===(s=e.find((({name:e})=>e===t)))||void 0===s?void 0:s.requests;if(!i)return"";let{success:n,total:o}=i;return n&&n!==o?n+"/"+o:""},y=(e,t)=>{let s=e.find((({name:e})=>e===t));if(!s)throw new Error(`Step ${t} not found!`);return s.state};function m({possibleSteps:e}){return x.dy`
  <style>
  ${g}
  :host{
    display: block;
    font-size: 14px;
  }

  input[type="button"]{
    padding: 0px 70px;
    border: 0;
    font-size: 18px;
    height: 48px;
    color: #fff;
    background: var( --brand-green );
    border-radius: 4px;
    cursor: pointer;
  }

  .MainStatus{
    padding-top: 30px;
    text-align: center;
  }
  .MainStatus_Running,
  .MainStatus_Complete{
    display:inline-block;
    vertical-align:top;
    padding: 0px 70px;
    font-size: 18px;
    line-height: 48px;
    background: #e9eaee;
    border-radius: 4px;
  }

  .Steps{
    margin-top: 55px;
    border: 1px solid #a8afb5;
    padding: 40px 30px 40px 20px;
    border-radius: 3px;
  }
  .Steps > .E{
    position: relative;
  }
  .Steps > .E::after{
    content:' ';clear:both;display:block;width:0;height:0;overflow:hidden;font-size:0;
  }
  .Steps > .E ~ .E{
    border-top: 16px solid transparent;
  }
  .Steps > .E ~ .E::before{
    content: '';
    display: block;
    background: #e6e6e6;
    position: absolute;
    top: -16px;
    left: 114px;
    width: 2px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;padding-top:16px;
  }
  .Steps step-state{
    float: left;
  }
  .Steps_Name{
    font-size: 16px;
    color: #4c4c4c;
    overflow: hidden;
    padding: 5px 0 0 25px;
    line-height: 1.3;
  }

  .Extensions{
    padding: 16px 0 0 114px;
    clear: both;
    position: relative;
  }
  .Extensions::after{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 114px;
    width: 2px;
    padding-top:16px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    background: #e6e6e6;
  }
  .Extensions > .In{
    border-left: 2px solid #e6e6e6;
    background: #f7f7f7;
    padding: 27px 40px;
    border-radius: 0 4px 4px 0;
  }
  .Extensions_Text{
    padding-bottom: 15px;
  }
  .Extensions_Later{
    font-size: 12px;
    color: #808080;
    padding-top: 10px;
  }

  c-summary{
    padding-top: 55px;
  }

  .FinalActionButton{
    text-align: center;
    padding-top: 35px;
  }
  .FinalActionButton input[type="button"]{
    display:inline-block;
    vertical-align:top;
    border: 0;
    cursor: pointer;
    padding: 0 65px;
    height: 48px;
    color: #fff;
    background: var( --brand-green );
    border-radius: 4px;
    font-size: 18px;
  }

  c-logs{
    padding-top: 50px;
  }
  </style>

  <div class="MainStatus">
  ${(()=>this.noStepsStarted?x.dy`
    <div class="MainStatus_Button"><!--
   --><input type="button" value="Start" @click="${this.startDiagnostics}"/><!--
 --></div>`:"")()}

  ${(()=>this.runningSteps?x.dy`
    <div class="MainStatus_Running">Running...</div>`:"")()}

  ${(()=>this.allStepsComplete?x.dy`
    <div class="MainStatus_Button"><!--
   --><input type="button" value="Try again" @click="${this.startDiagnostics}" /><!--
 --></div>`:"")()}
  </div>

  <div class="Steps">
  ${(()=>e.includes("proxyApi")?x.dy`
    <div class="E ${v(this.state,"proxyApi")}">
      <step-state
        .state="${y(this.state,"proxyApi")}"
        .completion="${f(this.state,"proxyApi")}"></step-state>
      <div class="Steps_Name">Check proxy settings</div>
    ${(()=>b(this.state,this.extensionsVisible,"proxyApi")?x.dy`
      <div class="Extensions"><div class="In">
        <div class="Extensions_Text">
          We have detected other extensions which block proxy settings.
          Disable these extensions to use Browsec.
        </div>
        <c-extensions
          .extensions="${this.extensions}"
          @extensions-update="${this.extensionsUpdate}"></c-extensions>
        <div class="Extensions_Later">
          You can enable these extensions later in browser settings.
        </div>
      </div></div>`:"")()}
    </div>`:"")()}

  ${(()=>e.includes("noProxyExtensions")?x.dy`
    <div class="E ${v(this.state,"noProxyExtensions")}">
      <step-state
        .state="${y(this.state,"noProxyExtensions")}"
        .completion="${f(this.state,"noProxyExtensions")}"></step-state>
      <div class="Steps_Name">Check conflicts with other extensions</div>
    ${(()=>b(this.state,this.extensionsVisible,"noProxyExtensions")?x.dy`
      <div class="Extensions"><div class="In">
        <div class="Extensions_Text">
          We have detected other extensions which can conflict with Browsec.
          Consider disabling these extensions if Browsec doesn't work properly.
        </div>
        <c-extensions
          extensions="${this.extensions}"
          @extensions-update="${this.extensionsUpdate}"></c-extensions>
        <div class="Extensions_Later">
          You can enable these extensions later in browser settings.
        </div>
      </div></div>`:"")()}
    </div>`:"")()}

  ${(()=>e.includes("httpConnection")?x.dy`
    <div class="E ${v(this.state,"httpConnection")}">
      <step-state
        .state="${y(this.state,"httpConnection")}"
        .completion="${f(this.state,"httpConnection")}"></step-state>
      <div class="Steps_Name">
        Check HTTP Internet connection
      </div>
    </div>`:"")()}

    ${(()=>e.includes("httpsConnection")?x.dy`
    <div class="E ${v(this.state,"httpsConnection")}">
      <step-state
        .state="${y(this.state,"httpsConnection")}"
        .completion="${f(this.state,"httpsConnection")}"></step-state>
      <div class="Steps_Name">
        Check HTTPS Internet connection
      </div>
    </div>`:"")()}

  ${(()=>e.includes("browsecApi")?x.dy`
    <div class="E ${v(this.state,"browsecApi")}">
      <step-state
        .state="${y(this.state,"browsecApi")}"
        .completion="${f(this.state,"browsecApi")}"></step-state>
      <div class="Steps_Name">Check Browsec API</div>
    </div>`:"")()}

  ${(()=>e.includes("httpProxyConnection")?x.dy`
    <div class="E ${v(this.state,"httpProxyConnection")}">
      <step-state
        .state="${y(this.state,"httpProxyConnection")}"
        .completion="${f(this.state,"httpProxyConnection")}"></step-state>
      <div class="Steps_Name">
        Check HTTP Internet connection with Browsec
      </div>
    </div>`:"")()}

  ${(()=>e.includes("httpsProxyConnection")?x.dy`
    <div class="E ${v(this.state,"httpsProxyConnection")}">
      <step-state
        .state="${y(this.state,"httpsProxyConnection")}"
        .completion="${f(this.state,"httpsProxyConnection")}"></step-state>
      <div class="Steps_Name">
        Check HTTPS Internet connection with Browsec
      </div>
    </div>`:"")()}
  </div>

  ${(()=>this.allStepsComplete?x.dy`
    <c-summary
      .fixable="${this.extensionsVisible}"
      .state="${this.state}"></c-summary>
    ${(()=>this.extensionsVisible?x.dy`
    <div class="FinalActionButton"><!--
   --><input type="button" value="Fix it" @click="${this.fixExtensions}" /><!--
  --></div>`:x.dy`
    <div class="FinalActionButton"><!--
   --><input type="button" value="Close page" @click="${this.closePage}" /><!--
  --></div>`)()}
    <c-logs></c-logs>`:"")()}`}function w(){return x.dy`
  <style>
  ${g}
  :host{
    display: block;
  }

  input[type="checkbox"]{
    display: block;
    width: 15px;
    height: 15px;
    -moz-appearance: none;
    -webkit-appearance: none;
    background: url( '/images/diagnostics/checkbox.svg#unchecked' ) 0 0 no-repeat;
    background-size: 100% 100%;
    border: 0;
  }
  input[type="checkbox"]:checked{
    background-image: url( '/images/diagnostics/checkbox.svg#checked' );
  }

  .List > table{
    border-collapse: collapse;
    font-size: 14px;
  }
  .List > table > tbody > tr > td ~ td{
    padding-left: 12px;
  }
  .List > table > tbody > tr ~ tr > td{
    padding-top: 10px;
  }

  .List img,
  .Name{
    cursor: default;
  }

  .Disable{
    padding-top: 15px;
  }
  .Disable input{
    padding: 0 32px;
    height: 36px;
    font-size: 16px;
    background: var( --brand-green );
    border-radius: 4px;
    cursor: pointer;
    border: 0;
    color: #fff;
  }
  </style>

  <div class="List"><table><tbody>
  ${this.views.map(((e,t)=>x.dy`
    <tr>
      <td>
        <input
          type="checkbox"
          id="${e.id}"
          ?checked="${e.checked}"
          @click="${this.clickCheckbox(t)}" />
      </td>
      <td>
        ${(()=>e.icon?x.dy`
        <img
          src="${e.icon}"
          width="38"
          height="38"
          alt=""
          @click="${this.clickCheckbox(t)}"/>`:"")()}
      </td>
      <td><span class="Name" @click="${this.clickCheckbox(t)}">${e.name}</span></td>
    </tr>`))}
  </tbody></table></div>
  <div class="Disable"><!--
 --><input type="button" value="Disable" @click="${this.disableExtensions}"/><!--
--></div>`}class k extends x.oi{render(){return w.call(this)}static get properties(){return{extensions:{type:Array},views:{type:Array}}}constructor(){super(),this.extensions=[],this.views=[]}updated(e){if(e.has("extensions")){var t,s;let e=(null===(t=this.views)||void 0===t||null===(s=t.slice)||void 0===s?void 0:s.call(t))||[];this.views=this.extensions.map((t=>{var s;let i=Object.assign({},t),n=e.find((({id:e})=>e===i.id));return i.checked=null===(s=null==n?void 0:n.checked)||void 0===s||s,i}))}}clickCheckbox(e){return({target:t})=>{let s=Object.assign({},this.views[e]),i=this.views.slice();s.checked=!s.checked,i[e]=s,this.views=i}}async disableExtensions(){if(!this.views.filter((({checked:e})=>e)).length)return;let e=await u(this.views.filter((({checked:e})=>e)).map((({id:e})=>e)));this.extensions=[],this.dispatchEvent(new CustomEvent("extensions-update",{detail:this.extensions})),await h(),p(e)}}customElements.define("c-extensions",k);function S(){return x.dy`
  <style>
  :host{
    display: block;
  }

  .Show{
    font-size: 14px;
    color: #1c304e;
    text-align: center;
    padding-bottom: 20px;
  }
  .Show > .In{
    position: relative;
    display:inline-block;vertical-align:top;
    padding: 0 24px;
  }
  .Show > .In::after{
    content: '';
    display: block;
    background: url( '/images/diagnostics.svg#document' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 14px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top:18px;
    position: absolute;
    top: calc(50% - 9px);
    left: 0;
  }
  .Show > .In > .In{
    display: inline;
    border-bottom: 1px dashed #8d97a6;
    cursor: pointer;
  }
  .Show > .In > .In:hover{
    border-bottom-color: transparent;
  }

  .Textarea textarea{
    display: block;
    box-sizing: border-box;
    background: #f7f7f7;
    border: 1px solid #cccccc;
    border-radius: 3px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 12px;
    padding: 18px;
    overflow: auto;
    height: 370px;
    resize: vertical;
    color: #666;
  }

  .Button{
    padding-top: 30px;
    text-align: center;
  }
  .Button input[type="button"]{
    display:inline-block;
    vertical-align:top;
    border: 0;
    background: #1c304e;
    color: #fff;
    height: 40px;
    padding: 0 22px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>

  <div class="Show"><div class="In"><div class="In" @click="${this.toggleLog}">
    ${this.visible?"Hide":"Show"} Health Check Logs
  </div></div></div>

  ${(()=>this.visible?x.dy`
  <div class="Textarea">
    <textarea
      name="logs"
      rows="8"
      cols="80"
      .value="${this.text}"
      readonly="readonly"
      spellcheck="false"></textarea>
  </div>
  <div class="Button"><input type="button" value="Copy to Clipboard" @click="${this.copy}"/></div>`:"")()}`}class $ extends x.oi{render(){return S.call(this)}static get properties(){return{visible:{type:Boolean},logLoaded:{type:Boolean},text:{type:String}}}constructor(){super(),this.logLoaded=!1,this.text="",this.visible=!1}async toggleLog(){let e=!this.visible,t=(async()=>{this.logLoaded||(this.logLoaded=!0,this.text=await(0,n.Z)({type:"Diagnostics.getLog"})),this.visible=!this.visible})();if(!e)return;await t,await this.requestUpdate();let s=document.body.scrollHeight,o=document.body.offsetHeight;s<=o||(await new Promise((e=>{setTimeout(e,200)})),i(s-o,750))}copy(){var e,t;const s=null===(e=this.shadowRoot)||void 0===e||null===(t=e.querySelector)||void 0===t?void 0:t.call(e,'textarea[name="logs"]');if(!s)throw new Error("textarea element does not exist in Logs");s.select(),document.execCommand("copy"),s.setSelectionRange(0,0),s.blur()}}customElements.define("c-logs",$);function E(){return x.dy`
  <style>
  :host{
    display: block;
    width: 140px;
  }

  .Text{
    display:inline-table;
    vertical-align:top;
    width: 100px;
    height: 30px;
    text-align: right;
    font-size: 12px;
  }
  :host(.skip) .Text{
    color: #999999;
  }
  :host(.progress) .Text{
    color: #1c2f4f;
  }
  :host(.success) .Text{
    color: #3b983f;
  }
  :host(.warning) .Text{
    color: #d8ae04;
  }
  :host(.error) .Text{
    color: #c0362b;
  }
  .Text > .In{
    display: table-cell;
    vertical-align: middle;
    padding-right: 17px;
  }

  .Icon{
    display:inline-block;
    vertical-align:top;
    width: 30px;
    padding-top:30px;
    overflow:hidden;font-size:0;text-indent:-9999px;
    height:0;
    background: url( '/images/diagnostics.svg#not_started' ) 0 0 no-repeat;
    background-size: 100% 100%;
  }
  :host(.skip) .Icon{
    background-image: url( '/images/diagnostics.svg#skipped' );
  }
  :host(.progress) .Icon{
    background-image: url( '/images/diagnostics.svg#waiting' );
  }
  :host(.success) .Icon{
    background-image: url( '/images/diagnostics.svg#success' );
  }
  :host(.warning) .Icon{
    background-image: url( '/images/diagnostics.svg#warning' );
  }
  :host(.error) .Icon{
    background-image: url( '/images/diagnostics.svg#failed' );
  }
  </style><!--

--><div class="Text"><div class="In">${(e=>{switch(e){case"skip":return"Skipped";case"in process":return"Running";case"success":return"Completed";case"warning":return"Warning";case"error":return"Failed";default:return""}})(this.state)} ${this.completion}</div></div><!--
--><div class="Icon">&nbsp;</div>`}class C extends x.oi{render(){return E.call(this)}static get properties(){return{completion:{type:String},state:{type:String}}}constructor(){super(),this.completion="",this.state="not started"}updated(e){if(e.has("state")){let e=(()=>{switch(this.state){case"skip":return"skip";case"in process":return"progress";case"success":return"success";case"warning":return"warning";case"error":return"error";default:return""}})();["skip","progress","success","warning","error"].forEach((e=>{this.classList.remove(e)})),e&&this.classList.add(e)}}}customElements.define("step-state",C);const{_:P}=self;function T(){return x.dy`
  <style>
  :host{
    display: block;
    font-size: 16px;
  }

  .Success,
  .Warning,
  .Error{
    display: none;
    text-align: center;
  }

  .Success::before,
  .Warning::before,
  .Error::before{
    content: '';
    display: block;
    background: url( '/images/diagnostics.svg#success' ) 0 0 no-repeat;
    background-size: 100% 100%;
    /*background: url('/images/diagnostics/state_icons_big.png') 0 0 no-repeat;*/
    width: 60px;
    overflow:hidden;font-size:0;text-indent:-9999px;
    height:0;
    padding-top:60px;
    margin: 0 auto;
    border-bottom: 20px solid transparent;
    text-align: left;
  }
  .Warning::before{
    background-image: url( '/images/diagnostics.svg#warning' );
  }
  .Error::before{
    background-image: url( '/images/diagnostics.svg#failed' );
  }

  .Success{
    color: var( --brand-green );
  }
  .Warning{
    color: #d8ad00;
  }
  .Error{
    color: #c0392b;
  }

  :host(.success) .Success{
    display: block;
  }
  :host(.warning) .Warning{
    display: block;
  }
  :host(.error) .Error{
    display: block;
  }
  </style>

  ${(()=>this.fixable?x.dy`
    <div class="Fixable ${P.upperFirst(this.ownState)}">
      Health Check has found issues which can be fixed.
    </div>`:x.dy`
    <div class="Success">
      No errors were found.<br/>
      Browsec should function normally.
    </div>
    <div class="Warning">
      There are errors found during Health Check.<br/>
      You can send Health Check logs to Browsec support to help diagnose this issues.
    </div>
    <div class="Error">
      There are errors found during Health Check.<br/>
      You can send Health Check logs to Browsec support to help diagnose this issues.
    </div>`)()}`}class _ extends x.oi{render(){return T.call(this)}static get properties(){return{fixable:{type:Boolean},ownState:{type:String},state:{type:Array}}}constructor(){super(),this.fixable=null,this.ownState="",this.state=[]}updated(e){if(e.has("ownState")){let t=this.ownState,s=e.get("ownState");s&&this.classList.remove(s),t&&this.classList.add(t)}if(e.has("state")){let e=this.state.map((({state:e})=>e)),t=e.some((e=>!["error","warning","success","skip"].includes(e)))?"":e.some((e=>"error"===e))?"error":e.some((e=>"warning"===e))?"warning":"success";this.ownState!==t&&(this.ownState=t)}}}customElements.define("c-summary",_);const{_:A}=self;(async()=>{const e=await l(),t=await c();class s extends x.oi{render(){return m.call(this,{possibleSteps:e})}get extensionsVisible(){return Boolean(this.extensions.length)}static get properties(){return{noStepsStarted:{type:Boolean},runningSteps:{type:Boolean},allStepsComplete:{type:Boolean,observer:"observeAllStepsComplete"},extensions:{type:Array},extensionsVisible:{type:Boolean},state:{type:Array}}}constructor(){super(),this.allStepsComplete=t.every((({state:e})=>!["not started","in process"].includes(e))),this.extensions=[],this.noStepsStarted=t.every((({state:e})=>"not started"===e)),this.runningSteps=t.some((({state:e})=>["not started","in process"].includes(e)))&&A.uniq(t.map((({state:e})=>e))).length>1,this.state=t}async disconnectedCallback(){super.disconnectedCallback(),await h(),d(this.listener)}async firstUpdated(e){super.firstUpdated(e),this.listener=e=>{e=A.cloneDeep(e),this.state=e,this.extensions=["proxyApi","noProxyExtensions"].flatMap((t=>{var s;let i=null===(s=e.find((({name:e})=>e===t)))||void 0===s?void 0:s.extensions;return Array.isArray(i)?[i]:[]})).find((e=>e.length))||[],this.noStepsStarted=e.every((({state:e})=>"not started"===e)),this.runningSteps=e.some((({state:e})=>["not started","in process"].includes(e)))&&A.uniq(e.map((({state:e})=>e))).length>1,this.allStepsComplete=e.every((({state:e})=>!["not started","in process"].includes(e)))},a(this.listener)}async updated(e){if(e.has("allStepsComplete")){var t,s,n,o,r,a;let c=this.allStepsComplete,l=e.get("allStepsComplete");if(!c||l)return;await this.requestUpdate();if(!(null===(t=this.shadowRoot)||void 0===t||null===(s=t.querySelector)||void 0===s?void 0:s.call(t,"c-summary")))return;let d=null!==(n=null===(o=document.body)||void 0===o?void 0:o.scrollHeight)&&void 0!==n?n:0,p=null!==(r=null===(a=document.body)||void 0===a?void 0:a.offsetHeight)&&void 0!==r?r:0;if(d<=p)return;i(d-p,750)}}closePage(){self.close(),(0,n.Z)({type:"Diagnostics.close"})}extensionsUpdate({detail:e}){this.extensions=e}async fixExtensions(){let e=await u(this.extensions.map((({id:e})=>e)));this.extensions=[],await h(),p(e)}async startDiagnostics(){if(!await("undefined"!=typeof browser||new Promise((e=>{chrome.permissions.request({permissions:["management"]},e)}))))return;let e=await(()=>{if("undefined"==typeof browser)return new Promise((e=>chrome.management.getAll(e)))})();await h(),p(e)}}customElements.define("main-block",s)})();const z="undefined"!=typeof browser?browser:chrome;z.runtime.onMessage.addListener(((e,t,s)=>{switch(null==e?void 0:e.type){case"Diagnostics page existence check":return s(!0),!0;case"Diagnostics: close pages":self.close()}}));const B=z.runtime.getURL("/pages/diagnostics/diagnostics.html");if("function"==typeof z.extension.getViews){z.extension.getViews({type:"tab"}).filter((({location:e})=>e.href===B)).length>=2&&self.close()}}},s={};function i(e){var n=s[e];if(void 0!==n)return n.exports;var o=s[e]={id:e,loaded:!1,exports:{}};return t[e](o,o.exports,i),o.loaded=!0,o.exports}i.m=t,e=[],i.O=(t,s,n,o)=>{if(!s){var r=1/0;for(d=0;d<e.length;d++){for(var[s,n,o]=e[d],a=!0,c=0;c<s.length;c++)(!1&o||r>=o)&&Object.keys(i.O).every((e=>i.O[e](s[c])))?s.splice(c--,1):(a=!1,o<r&&(r=o));if(a){e.splice(d--,1);var l=n();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[s,n,o]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.j=277,(()=>{var e={277:0};i.O.j=t=>0===e[t];var t=(t,s)=>{var n,o,[r,a,c]=s,l=0;if(r.some((t=>0!==e[t]))){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(c)var d=c(i)}for(t&&t(s);l<r.length;l++)o=r[l],i.o(e,o)&&e[o]&&e[o][0](),e[r[l]]=0;return i.O(d)},s=self.webpackChunkbrowsec_extension=self.webpackChunkbrowsec_extension||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var n=i.O(void 0,[592],(()=>i(3940)));n=i.O(n)})();