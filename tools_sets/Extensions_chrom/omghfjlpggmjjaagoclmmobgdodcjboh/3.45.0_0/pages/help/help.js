(()=>{"use strict";var e,t={8729:(e,t,i)=>{var o=i(5693),n=i(7584);let r=Object.fromEntries(Object.entries({enableForSelectedSites:"enable_browsec_only_for_selected_sites",enableForSelectedSitesDescription1:"enable_browsec_only_for_selected_sites_description_1",enableForSelectedSitesDescription2:"enable_browsec_only_for_selected_sites_description_2",enableForSelectedSitesDescription3:"enable_browsec_only_for_selected_sites_description_3",enableForAllSitesExcludingSelected:"enable_browsec_for_all_sites_excluding_selected_sites",enableForAllSitesExcludingSelectedDescription1:"enable_browsec_for_all_sites_excluding_selected_sites_description_1",enableForAllSitesExcludingSelectedDescription2:"enable_browsec_for_all_sites_excluding_selected_sites_description_2",enableForAllSitesExcludingSelectedDescription3:"enable_browsec_for_all_sites_excluding_selected_sites_description_3",useDifferentLocationsForDifferentSites:"use_different_locations_for_different_sites",useDifferentLocationsForDifferentSitesDescription1:"use_different_locations_for_different_sites_description_1",useDifferentLocationsForDifferentSitesDescription2:"use_different_locations_for_different_sites_description_2",useDifferentLocationsForDifferentSitesDescription3:"use_different_locations_for_different_sites_description_3",howToUseSmartSettings:"how_to_use_smart_settings",iWantTo:"i_want_to"}).map((([e,t])=>[e,(0,o.Z)(t)]))),l=Object.fromEntries(Object.entries({enableForAllSitesExcludingSelectedDescription:"enable_browsec_for_all_sites_excluding_selected_sites_description",enableForSelectedSitesDescription:"enable_browsec_only_for_selected_sites_description",useAnotherLocationForSelectedSitesDescription:"use_another_location_for_selected_sites_description"}).map((([e,t])=>[e,(0,o.Z)(t).replace(/IMG/,'<img src="/images/help/plus.svg" width="23" height="13" alt="" />')])));function s(){return n.dy`
  <style>
  :host{
    display: block;
    height: 100%;
    min-height: 100%;
  }

  table{
    border-collapse: collapse;
  }
  td, th{
    padding: 0;
  }

  .Main{
    position: relative;
    height: 100%;
    min-height: 100%;
    min-width:600px;
  }
  .Main > .T{
    position: absolute;
    top:0px;
    right:0px;
    left:0px;
  }

  .Main > .In{
    display: table;
    width: 100%;
    height: 100%;
  }
  .Main > .In > .In{
    display: table-cell;
    vertical-align: middle;
    padding: 215px 25px 35px;
  }

  .Head{
    background: #1c304e;
    padding: 15px 20px;
  }

  .Logo > .In{
    display: table;
  }
  .Logo > .In > .L{
    display: table-cell;
    vertical-align: middle;
  }
  .Logo > .In > .R{
    display: table-cell;
    vertical-align: middle;
    padding-left: 13px;
  }

  .Logo_Ball{
    background: url( '/images/logo_ball.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 62px;
    padding-top: 62px;
    height: 0;
    overflow: hidden;
  }

  .Logo_Text{
    height: 0;
    overflow: hidden;
    background: url( '/images/logo_text.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 115px;
    padding-top: 19px;
  }

  .PageName{
    text-align: center;
    color: #494b4d;
    font-size: 24px;
    text-transform: uppercase;
    padding-top: 45px;
  }
  .PageName::after{
    content: '';
    display: block;
    width: 100px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top: 4px;
    background: var( --brand-green );
    margin: 15px auto 0;
  }

  .Title{
    font-size: 33px;
    color: var( --brand-green );
    padding-bottom: 45px;
    text-align: center;
  }

  .Section{
    max-width: 850px;
    margin: 0 auto;
    border: 1px solid #a9b0b5;
    border-radius: 4px;
  }
  .Section + .Section{
    margin-top: 20px;
  }

  .Section_Name{
    color: #1c304e;
    font-size: 20px;
    position: relative;
    cursor: pointer;
    padding-right: 25px;
    border: 1px solid transparent;
    border-width: 22px 40px;
    background: url( '/images/help/arrow_down.svg' ) 0 -5000px no-repeat;
  }
  .Section_Name::after{
    content: '';
    display: block;
    width: 16px;
    overflow:hidden;font-size:0;text-indent:-9999px;height:0;
    padding-top: 9px;
    background: url( '/images/help/arrow_up.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -4px;
  }
  .Section.open .Section_Name::after{
    background-image: url( '/images/help/arrow_down.svg' );
  }

  .Section_Information{
    display: none;
    font-size: 16px;
    line-height: 1.5;
    padding: 8px 40px 40px;
  }
  .Section.open .Section_Information{
    display: block;
  }
  .Section_Information > table{
    width: 100%;
  }
  @media( max-width: 800px ){
    .Section_Information > table{
      display: block;
      width: auto;
    }
    .Section_Information > table > tbody{
      display: block;
    }
    .Section_Information > table > tbody > tr{
      display: block;
    }
    .Section_Information > table > tbody > tr > td{
      display: block;
    }
  }
  .Section_Information > table > tbody > tr > td:last-child{
    width: 1px;
    padding-left: 30px;
  }
  @media( max-width: 800px ){
    .Section_Information > table > tbody > tr > td:last-child{
      width: auto;
      padding-left: 0;
      padding-top: 30px;
    }
    .Section_Information > table > tbody > tr > td:last-child img{
      display: block;
      margin: 0 auto;
    }
  }

  .Section_Information ol{
    list-style: none;
    counter-reset: list;
  }
  .Section_Information ol > li{
    padding-left: 40px;
    position: relative;
  }
  .Section_Information ol > li::before{
    content: counter( list );
    counter-increment: list;
    position: absolute;
    top: -3px;
    left: 0;
    width: 28px;
    line-height: 28px;
    text-align: center;
    color: var( --brand-green );
    border: 1px solid var( --brand-green );
    border-radius: 50%;
  }
  .Section_Information ol > li + li{
    border-top: 10px solid transparent;
  }

  .Section_Text img{
    vertical-align: middle;
    padding-left: 3px;
  }

  .BigImage img{
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }
  </style>

  <div class="Main">
    <div class="T">
      <div class="Head">
        <div class="Logo"><div class="In">
          <div class="L"><div class="Logo_Ball"></div></div>
          <div class="R"><div class="Logo_Text">Browsec</div></div>
        </div></div>
      </div>
      <div class="PageName">${r.howToUseSmartSettings}</div>
    </div>

    <div class="In"><div class="In">
      <div class="Title">${r.iWantTo}</div>
      <div class="Section" data-role="section">
        <div class="Section_Name" data-click="trigger">
          ${r.enableForSelectedSites}
        </div>
        <div class="Section_Information"><table><tbody><tr>
          <td>
            <div class="Section_Text">
              <ol>
                <li>
                  ${r.enableForSelectedSitesDescription1}
                </li>
                <li>
                  ${r.enableForSelectedSitesDescription2}
                </li>
                <li data-role="with image">
                  ${r.enableForSelectedSitesDescription3}
                </li>
              </ol>
            </div>
          </td>
          <td><img src="/images/help/1.gif" width="474" height="526" alt=""/></td>
        </tr></tbody></table></div>
      </div>

      <div class="Section" data-role="section">
        <div class="Section_Name" data-click="trigger">
          ${r.enableForAllSitesExcludingSelected}
        </div>
        <div class="Section_Information"><table><tbody><tr>
          <td>
            <div class="Section_Text">
              <ol>
                <li>
                  ${r.enableForAllSitesExcludingSelectedDescription1}
                </li>
                <li>
                  ${r.enableForAllSitesExcludingSelectedDescription2}
                </li>
                <li data-role="with image">
                  ${r.enableForAllSitesExcludingSelectedDescription3}
                </li>
              </ol>
            </div>
          </td>
          <td><img src="/images/help/2.gif" width="474" height="526" alt=""/></td>
        </tr></tbody></table></div>
      </div>

      <div class="Section" data-role="section">
        <div class="Section_Name" data-click="trigger">
          ${r.useDifferentLocationsForDifferentSites}
        </div>
        <div class="Section_Information"><table><tbody><tr>
          <td>
            <div class="Section_Text">
              <ol>
                <li>
                  ${r.useDifferentLocationsForDifferentSitesDescription1}
                </li>
                <li>
                  ${r.useDifferentLocationsForDifferentSitesDescription2}
                </li>
                <li data-role="with image">
                  ${r.useDifferentLocationsForDifferentSitesDescription3}
                </li>
              </ol>
            </div>
          </td>
          <td><img src="/images/help/3.gif" width="474" height="526" alt=""/></td>
        </tr></tbody></table></div>
      </div>

    </div></div>
  </div>`}Object.assign(r,l);const a=e=>e.split("-").map(((e,t)=>{if(!t)return e;return e.slice(0,1).toUpperCase()+e.slice(1)})).join(""),d=Object.freeze(["border-top-width","border-bottom-width","padding-top","padding-bottom","height"]),{_:c}=self;class p extends n.oi{render(){return s.call(this)}static get properties(){return{freeze:{type:Boolean}}}constructor(){super(),this.freeze=!1}firstUpdated(e){var t,i;super.firstUpdated(e);var o,n;(null===(o=this.shadowRoot)||void 0===o||null===(n=o.querySelectorAll)||void 0===n?void 0:n.call(o,'[data-role="with image"]')).forEach((e=>{const t=e.textContent.trim().split("IMG").map(((e,t)=>{if(!t)return[document.createTextNode(e)];const i=document.createElement("img");return Object.entries({src:"/images/help/plus.svg",width:"23",height:"13",alt:""}).forEach((([e,t])=>{i.setAttribute(e,t)})),[i,document.createTextNode(e)]}));let i=c.flatten(t);Array.from(e.childNodes).forEach((t=>{e.removeChild(t)})),i.forEach((t=>{e.appendChild(t)}))}));const r=[];(null===(t=this.shadowRoot)||void 0===t||null===(i=t.querySelectorAll)||void 0===i?void 0:i.call(t,'[data-role="section"]')).forEach(((e,t)=>{const i=e.querySelector("div.Section_Information"),o=e.querySelector('[data-click="trigger"]');if(!i)throw new Error("No information element in unblock-proxy");if(!o)throw new Error("No trigger element in unblock-proxy");r.push({elements:{parent:e,trigger:o,information:i},visible:!1})}));const l=r.map(((e,t)=>t));r.forEach(((e,t)=>{const{elements:i}=e;i.trigger.addEventListener("click",(async()=>{if(this.freeze)return;this.freeze=!0;let o=c.without(l,t).filter((e=>r[e].visible)).map((async e=>{const{elements:t}=r[e];t.information.style.cssText="display:block;overflow:hidden";const i=getComputedStyle(t.information),o=t.information.animate([{height:i.getPropertyValue("height"),paddingTop:i.getPropertyValue("padding-top"),paddingBottom:i.getPropertyValue("padding-bottom")},{height:0,paddingTop:0,paddingBottom:0}],{duration:700,easing:"linear"});await new Promise((e=>{o.onfinish=e})),t.parent.classList.remove("open"),t.information.style.cssText="",r[e].visible=!1}));o.push((async()=>{const t=((e,t,i={})=>{"up"!==t&&(e.style.cssText="display:block;");let o=getComputedStyle(e),n=Object.fromEntries(d.map((e=>[a(e),o.getPropertyValue(e)]))),r=Object.fromEntries(d.map((e=>[a(e),0]))),l="up"===t?[n,r]:[r,n];return e.style.cssText="up"===t?"overflow:hidden;":"overflow:hidden;display:block;"+d.map((e=>`${e}:0px;`)).join(""),e.animate(l,i)})(i.information,e.visible?"up":"down",{duration:700,easing:"linear"});await new Promise((e=>{t.onfinish=e})),e.visible?i.parent.classList.remove("open"):i.parent.classList.add("open"),i.information.style.cssText="",e.visible=!e.visible})()),await Promise.all(o),this.freeze=!1}))}))}}customElements.define("main-block",p);document.title=(0,o.Z)("how_to_use_smart_settings")}},i={};function o(e){var n=i[e];if(void 0!==n)return n.exports;var r=i[e]={id:e,loaded:!1,exports:{}};return t[e](r,r.exports,o),r.loaded=!0,r.exports}o.m=t,e=[],o.O=(t,i,n,r)=>{if(!i){var l=1/0;for(c=0;c<e.length;c++){for(var[i,n,r]=e[c],s=!0,a=0;a<i.length;a++)(!1&r||l>=r)&&Object.keys(o.O).every((e=>o.O[e](i[a])))?i.splice(a--,1):(s=!1,r<l&&(l=r));if(s){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[i,n,r]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.j=39,(()=>{var e={39:0};o.O.j=t=>0===e[t];var t=(t,i)=>{var n,r,[l,s,a]=i,d=0;if(l.some((t=>0!==e[t]))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(a)var c=a(o)}for(t&&t(i);d<l.length;d++)r=l[d],o.o(e,r)&&e[r]&&e[r][0](),e[l[d]]=0;return o.O(c)},i=self.webpackChunkbrowsec_extension=self.webpackChunkbrowsec_extension||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var n=o.O(void 0,[592],(()=>o(8729)));n=o.O(n)})();