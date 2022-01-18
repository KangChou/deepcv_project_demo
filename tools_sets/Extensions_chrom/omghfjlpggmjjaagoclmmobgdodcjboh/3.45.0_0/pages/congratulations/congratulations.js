(()=>{"use strict";var e,o={333:(e,o,i)=>{const t=class{constructor(e){if(!e)throw new Error("AnimationElement argument is not Element");this.element=e}set value(e){e!==this._oldValue&&(this._oldValue=e,this.element.style.cssText=e)}},n=[1e3,400,1250,200,300,1250,200,400,1250,200,400,750,200,400,1250,200,400,1250],a=n.reduce(((e,o)=>e+o),0),r=n.map((e=>e/a)),c=r.map(((e,o)=>r.slice(0,o+1).reduce(((e,o)=>e+o),0))),s=[1250,200,400,1250,200,400,750,200,400,1250,200,400,1250],l=s.reduce(((e,o)=>e+o),0),u=s.map((e=>e/l)),p=u.map(((e,o)=>u.slice(0,o+1).reduce(((e,o)=>e+o),0))),{userAgent:d}=navigator,m="undefined"==typeof browser&&d.includes("Chrome")&&["Edg","Edge"].every((e=>!d.includes(e)));let g;if(m)try{g=Number(d.match(/Chrome\/\d+/)[0].split("/")[1])}catch(e){}const v=Boolean(m&&g&&g>=84);var _=i(6194),b=i(5693),h=i(7584);const w=Object.fromEntries(Object.entries({accessPremiumLocations:"access_internet_via_premium_locations",activated:"browsec_activated",checkPremiumPlans:"check_browsec_premium_plans",clickToolbarIconAndTurnOn:"click_icon_on_toolbar_and_turn_on_protection",dedicatedLanes:"dedicated_traffic_lanes",getMoreWithPremium:"get_more_with_browsec_premium",performanceGuaranteed:"top_performance_guaranteed",premiumLocations:"premium_locations",premiumServers:"premium_servers",surfingSecured:"congratulations_securing_your_browsing",turboSpeed:"turbo_speed"}).map((([e,o])=>[e,(0,b.Z)(o)])));function f(){return h.dy`
  <style>
  :host{
    display: block;
  }

  a,
  a:hover,
  a:focus{
    outline: none!important;
    text-decoration: none;
  }

  a{
    color: #1c304e;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    color: #1c304e;
    text-decoration: underline;
  }

  p{
    padding: 0;
    margin: 0 0 20px;
  }

  .Head{
    background:#1c304e;
    color:#fff;
    z-index:9999;
    border-bottom: 2px solid #eee;
  }
  .Head > .In{
    margin: 0 auto;
    padding: 14px 20px;
    max-width: 1170px;
  }

  .Logo{
    display: inline-block;
    vertical-align: top;
    position: relative;
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
    padding-left: 10px;
  }
  .Logo a{
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    text-indent: -9999px;
    font-size: 0;
  }

  .Logo_Ball{
    background: url( '/images/logo_ball.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 46px;
    padding-top: 46px;
    height: 0;
    overflow: hidden;
  }

  .Logo_Text{
    height: 0;
    overflow: hidden;
    background: url( '/images/logo_text.svg' ) 0 0 no-repeat;
    background-size: 100% 100%;
    width: 85px;
    padding-top: 14px;
  }

  .col-md-4{
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    box-sizing: border-box;
  }
  @media (min-width: 992px) {
    .col-md-4{
      float: left;
      width: 33.33333333%;
    }
  }

  .row {
    margin-right: -15px;
    margin-left: -15px;
  }
  .row:before,
  .row:after{
    display: table;
    content: " ";
     clear: both;
  }

  .GreenButton{
    background: #3d9740;
    color: #fff;
    display: block;
    margin: 37px auto 0;
    border-radius: 4px;
    font-size: 20px;
    width: 400px;
    max-width: 100%;
    text-align: center;
    height: 60px;
    line-height: 60px;
  }
  .GreenButton:hover,
  .GreenButton:active,
  .GreenButton:focus,
  .GreenButton:visited{
    color: #fff;
    text-decoration: none;
  }

  .SectionTitle{
    text-transform: uppercase;
    font-size: 24px;
    color: var( --brand-green );
    text-align: center;
    padding: 0 0 25px;
    margin: 0;
  }

  .AboutExt{
    padding-top: 70px;
    padding-bottom: 50px;
    text-align: center;
    font-size: 19px;
  }
  .AboutExt p{
    line-height: 1.5;
    margin: 0;
  }

  .Block{
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
    max-width: 1170px;
  }

  .Image{
    padding: 0 0 80px;
  }
  .Image > .In{
    background: #B3BECF;
    padding: 65px 0;
    position: relative;
  }

  .Animation{
    width: 642px;
    height: 542px;
    position: relative;
    margin: 0 auto;
    overflow: hidden;
    transition: filter 0.4s;
  }

  .Image.overlay .Animation{
    filter: blur(8px);
  }

  .Image_Overlay{
    display: none;
    position: absolute;
    top: 0;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(28, 48, 78, 0.8);
    font-weight: bold;
    font-size: 14px;
  }
  .Image_Overlay > .In{
    width: 530px;
    margin: auto;
  }
  .Image_Overlay > .In > .T{
    display: flex;
    margin-left: -24px;
    height: 160px;
  }
  .Image_Overlay > .In > .T > .E{
    flex-shrink: 0;
    flex-grow: 1;
    flex-basis: 0;
    padding: 0 0 0 24px;
  }
  .Image_Overlay > .In > .B{
    padding-top: 24px;
    margin-left: -24px;
  }
  .Image_Overlay > .In > .B > .E{
    display: inline-block;
    vertical-align: top;
    width: calc( 100% / 2 - 24px );
    padding: 0 0 0 24px;
  }
  .Image.overlay .Image_Overlay{
    display: flex;
  }
  .Image_Overlay_LinkTop{
    display: block;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(255, 255, 255, 0.24);
    border-radius: 4px;
    color: #fff;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
  }
  .Image_Overlay_LinkTop:hover,
  .Image_Overlay_LinkTop:focus,
  .Image_Overlay_LinkTop:active{
    background: #fff;
    color: #2C4365;
    text-decoration: none;
  }
  .Image_Overlay_LinkTop::before{
    content: '';
    height: 0;
    padding-top: 48px;
    overflow: hidden;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    margin: 0 auto;
    border-top: 10px solid transparent;
  }
  .Image_Overlay_LinkTop.watchAgain::before{
    width: 48px;
    background-image: url( '/images/congratulations/post_video_icons.svg#repeat_white' );
  }
  .Image_Overlay_LinkTop.login::before{
    width: 36px;
    background-image: url( '/images/congratulations/post_video_icons.svg#login_white' );
  }
  .Image_Overlay_LinkTop.plans::before{
    width: 44px;
    background-image: url( '/images/congratulations/post_video_icons.svg#premium_white' );
  }
  .Image_Overlay_LinkTop.watchAgain:hover::before,
  .Image_Overlay_LinkTop.watchAgain:focus::before,
  .Image_Overlay_LinkTop.watchAgain:active::before{
    background-image: url( '/images/congratulations/post_video_icons.svg#repeat_blue' );
  }
  .Image_Overlay_LinkTop.login:hover::before,
  .Image_Overlay_LinkTop.login:focus::before,
  .Image_Overlay_LinkTop.login:active::before{
    background-image: url( '/images/congratulations/post_video_icons.svg#login_blue' );
  }
  .Image_Overlay_LinkTop.plans:hover::before,
  .Image_Overlay_LinkTop.plans:focus::before,
  .Image_Overlay_LinkTop.plans:active::before{
    background-image: url( '/images/congratulations/post_video_icons.svg#premium_blue' );
  }

  .Image_Overlay_LinkTop_Text{
    padding: 17px 5px 0;
  }

  .Image_Overlay_LinkBottom{
    display: block;
    line-height: 40px;
    text-align: center;
    background: rgba(255, 255, 255, 0.24);
    border-radius: 4px;
    color: #fff;
    text-decoration: none;
  }
  .Image_Overlay_LinkBottom:hover,
  .Image_Overlay_LinkBottom:focus,
  .Image_Overlay_LinkBottom:active{
    background: #fff;
    color: #2C4365;
    text-decoration: none;
  }

  .Animation_Bg{
    background: url( '/images/congratulations/${v?"chrome":"others"}/background.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
    width: 100%;
    height: 100%;
  }
  .Animation_Search{
    opacity: 0;
    background: url( '/images/congratulations/panel_with_browsec.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
    width: calc( 100% * 610 / 642 );
    height: calc( 100% * 35 / 542 );
    position: absolute;
    left: calc( 100% * 16 / 642 );
    top: calc( 100% * 8 / 542 );
    border-radius: 0 8px 0 0;
  }
  .Animation_Cursor{
    background: url( '/images/congratulations/cursor.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
    width: calc( 100% * 55 / 642 );
    height: calc( 100% * 59 / 542 );
    position: absolute;
    top: -5000px;
    left: -5000px;
  }
  .Animation_ExtensionsIcon{
    background: url( '/images/congratulations/extensions_icon.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
    width: calc( 100% * 27 / 642 );
    height: calc( 100% * 27 / 542 );
    position: absolute;
    top: -5000px;
    left: -5000px;
  }
  .Animation_BrowsecIcon,
  .Animation_BrowsecIconUk,
  .Animation_BrowsecIconUs{
    opacity: 0;
    width: calc( 100% * 27 / 642 );
    height: calc( 100% * 27 / 542 );
    position: absolute;
    top: calc( 100% * 11 / 542 );
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
  .Animation.chrome .Animation_BrowsecIcon,
  .Animation.chrome .Animation_BrowsecIconUk,
  .Animation.chrome .Animation_BrowsecIconUs{
    left: calc( 100% * 495 / 642 );
  }
  .Animation.others .Animation_BrowsecIcon,
  .Animation.others .Animation_BrowsecIconUk,
  .Animation.others .Animation_BrowsecIconUs{
    left: calc( 100% * 559 / 642 );
  }
  .Animation_BrowsecIcon{
    background-image: url( '/images/congratulations/browsec_icon.svg' );
  }
  .Animation_BrowsecIconUk{
    background-image: url( '/images/congratulations/browsec_icon_uk.svg' );
  }
  .Animation_BrowsecIconUs{
    background-image: url( '/images/congratulations/browsec_icon_us.svg' );
  }
  .Animation_PinEnabled,
  .Animation_PinEnabledHover{
    opacity: 0;
    width: calc( 100% * 40 / 642 );
    height: calc( 100% * 40 / 542 );
    position: absolute;
    left: calc( 100% * 473 / 642 );
    top: calc( 100% * 148 / 542 );
  }
  .Animation_PinEnabled{
    background: url( '/images/congratulations/pin_enabled.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
  }
  .Animation_PinEnabledHover{
    background: url( '/images/congratulations/pin_enabled_hovered.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
  }
  .Animation_ExtensionsPopup{
    opacity: 0;
    background: url( '/images/congratulations/extensions_popup.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
    width: calc( 100% * 328 / 642 );
    height: calc( 100% * 199 / 542 );
    position: absolute;
    left: calc( 100% * 229 / 642 );
    top: calc( 100% * 36 / 542 );
  }

  .Animation_BrowsecPopup{
    opacity: 0;
    background: url( '/images/congratulations/popup_bg.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
    width: calc( 100% * 408 / 642 );
    height: calc( 100% * 424 / 542 );
    position: absolute;
    top: calc( 100% * 37 / 542 );
  }
  .Animation.chrome .Animation_BrowsecPopup{
    left: calc( 100% * 118 / 642 );
  }
  .Animation.others .Animation_BrowsecPopup{
    left: calc( 100% * 182 / 642 );
  }

  .Animation_SwitchOn,
  .Animation_SwitchOff{
    opacity: 0;
    width: calc( 100% * 61 / 408 );
    height: calc( 100% * 26 / 424 );
    position: absolute;
    bottom: calc( 100% * 11 / 424 );
    right: calc( 100% * 14 / 408 );
  }
  .Animation_SwitchOff{
    background: url( '/images/congratulations/switch_off.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
  }
  .Animation_SwitchOn{
    background: url( '/images/congratulations/switch_on.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
  }
  .Animation_BrowsecPopup_NoProtection{
    opacity: 0;
    background: url( '/images/congratulations/popup_disabled.svg' ) 50% 50% no-repeat;
    background-size: 100% auto;
    width: calc( 100% * 336 / 408 );
    height: calc( 100% * 269 / 424 );
    position: absolute;
    left: calc( 100% * 48 / 408 );
    top: calc( 100% * 78 / 424 );
  }
  .Animation_BrowsecPopup_Protection,
  .Animation_BrowsecPopup_Protection_Hover,
  .Animation_BrowsecPopup_ProtectionUs,
  .Animation_BrowsecPopup_ProtectionUs_Hover{
    opacity: 0;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 100% auto;
    width: calc( 100% * 361 / 408 );
    height: calc( 100% * 263 / 424 );
    position: absolute;
    left: calc( 100% * 24 / 408 );
    top: calc( 100% * 78 / 424 );
  }
  .Animation_BrowsecPopup_Protection{
    background-image: url( '/images/congratulations/popup_enabled.svg#uk' );
  }
  .Animation_BrowsecPopup_Protection_Hover{
    background-image: url( '/images/congratulations/popup_enabled.svg#uk_hover' );
  }
  .Animation_BrowsecPopup_ProtectionUs{
    background-image: url( '/images/congratulations/popup_enabled.svg#us' );
  }
  .Animation_BrowsecPopup_ProtectionUs_Hover{
    background-image: url( '/images/congratulations/popup_enabled.svg#us_hover' );
  }
  .Animation_BrowsecPopup_SmartSettings,
  .Animation_BrowsecPopup_SmartSettingsHover{
    opacity: 0;
    width: calc( 100% * 392 / 408 );
    height: calc( 100% * 321 / 424 );
    position: absolute;
    left: calc( 100% * 14 / 408 );
    top: calc( 100% * 58 / 424 );
  }
  .Animation_BrowsecPopup_SmartSettings{
    background: url( '/images/congratulations/popup_smart_settings.svg#base' ) 50% 50% no-repeat;
    background-size: 100% auto;
  }
  .Animation_BrowsecPopup_SmartSettingsHover{
    background: url( '/images/congratulations/popup_smart_settings.svg#hover' ) 50% 50% no-repeat;
    background-size: 100% auto;
  }

  .Benefit{
    text-align: center;
    padding: 0 15px;
  }
  .Benefit::before{
    content: "";
    width: 100px;
    height: 100px;
    margin: 0 0 10px;
    display: inline-block;
    vertical-align: top;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .Benefit.morecountries::before{
    background-image: url( '/images/promos/circles.svg#countries' );
  }
  .Benefit.fastspeed::before{
    background-image: url( '/images/promos/circles.svg#speed' );
  }
  .Benefit.servers::before{
    background-image: url( '/images/promos/circles.svg#servers' );
  }

  .Benefit > p{
    margin: 3px 0 10px;
    color: #7a7c7f;
  }
  .Benefit_Title{
    font-size: 22px;
    color: #28334e;
  }

  .Benefit-section{
    width: 960px;
    max-width: 100%;
    margin: 0 auto;
  }
  </style>

  <div class="Head"><div class="In"><!--
  --><div class="Logo">
      <div class="In">
        <div class="L"><div class="Logo_Ball"></div></div>
        <div class="R"><div class="Logo_Text"></div></div>
      </div>
      <a href="${this.mainLink}" target="_blank">Browsec</a>
    </div><!--
--></div></div>
  <div class="Block AboutExt">
    <h1 class="SectionTitle">${w.activated}</h1>
    <p>${w.surfingSecured}<br/>${w.clickToolbarIconAndTurnOn}</p>
  </div>

  <div class="Image"><div class="In">
    <div class="Animation ${v?"chrome":"others"}">
      <div class="Animation_Bg"></div>
      <div class="Animation_Search"></div>

      <div class="Animation_ExtensionsIcon"></div>
      <div class="Animation_BrowsecIcon"></div>
      <div class="Animation_BrowsecIconUk"></div>
      <div class="Animation_BrowsecIconUs"></div>

      <div class="Animation_ExtensionsPopup"></div>
      <div class="Animation_PinEnabledHover"></div>
      <div class="Animation_PinEnabled"></div>

      <div class="Animation_BrowsecPopup">
        <div class="Animation_SwitchOff"></div>
        <div class="Animation_SwitchOn"></div>
        <div class="Animation_BrowsecPopup_NoProtection"></div>
        <div class="Animation_BrowsecPopup_Protection"></div>
        <div class="Animation_BrowsecPopup_Protection_Hover"></div>
        <div class="Animation_BrowsecPopup_ProtectionUs"></div>
        <div class="Animation_BrowsecPopup_ProtectionUs_Hover"></div>
        <div class="Animation_BrowsecPopup_SmartSettings"></div>
        <div class="Animation_BrowsecPopup_SmartSettingsHover"></div>
      </div>

      <div class="Animation_Cursor"></div>
    </div>
  </div></div>

  <div class="Block">
    <section class="Benefit-section">
      <h1 class="SectionTitle">${w.getMoreWithPremium}</h1>
      <div class="row">
        <div class="col-md-4 Benefit morecountries">
          <div class="Benefit_Title">${w.premiumLocations}</div>
          <p>${w.accessPremiumLocations}</p>
        </div>
        <div class="col-md-4 Benefit fastspeed">
          <div class="Benefit_Title">${w.turboSpeed}</div>
          <p>${w.dedicatedLanes}</p>
        </div>
        <div class="col-md-4 Benefit servers">
          <div class="Benefit_Title">${w.premiumServers}</div>
          <p>${w.performanceGuaranteed}</p>
        </div>
      </div>
      <a class="GreenButton" href="${this.premiumLink}" target="_blank">
        ${w.checkPremiumPlans}
      </a>
    </section>
  </div>`}var y=i(5517),k=i(1031),x=i(7679);class A extends((0,x.$)(y.Z)(h.oi)){render(){return f.call(this)}static get properties(){return{mainLink:{type:String},overlayLinks:{type:Object},premiumLink:{type:String},premiumUser:{type:Boolean},userLogined:{type:Boolean}}}get mainLink(){return this.browsecLink(_.Z.base,(e=>Object.assign(e,{utm_source:"chromium extension",utm_medium:"logo_link",utm_campaign:"default_campaign"})))}get overlayLinks(){return{contactUs:this.browsecLink(_.Z.base+"/contact_us?source=extension&utm_source=chromium%2Bextension&utm_medium=congrats_animation&utm_campaign=default_campaign"),logIn:this.browsecLink(_.Z.base+"/login?source=extension&utm_source=chromium%2Bextension&utm_medium=congrats_animation&utm_campaign=default_campaign"),faq:this.browsecLink(_.Z.base+"/faq?source=extension&utm_source=chromium%2Bextension&utm_medium=congrats_animation&utm_campaign=default_campaign"),plans:this.browsecLink(_.Z.base+"/orders/new?plan_id=annual?source=extension&utm_source=chromium%2Bextension&utm_medium=congrats_animation&utm_campaign=default_campaign")}}get premiumLink(){return this.browsecLink(_.Z.premium,(e=>Object.assign(e,{utm_source:"chromium extension",utm_medium:"congratulations_page",utm_campaign:"default_campaign"})))}stateChanged(e){this.userLogined=Boolean(e.user.email),this.premiumUser=e.user.premium}async firstUpdated(e){var o,i,n,s;super.firstUpdated(e);let d=null===(o=this.shadowRoot)||void 0===o||null===(i=o.querySelector)||void 0===i?void 0:i.call(o,"div.Image");if(!d)throw new Error("Parent element not found");let m=null===(n=this.shadowRoot)||void 0===n||null===(s=n.querySelector)||void 0===s?void 0:s.call(n,"div.Animation");if(!m)throw new Error("Animation element not found");let g=v?(e=>{let o=new t(e.querySelector("div.Animation_Search")),i=new t(e.querySelector("div.Animation_Cursor")),n=new t(e.querySelector("div.Animation_ExtensionsIcon")),s=new t(e.querySelector("div.Animation_BrowsecIcon")),l=new t(e.querySelector("div.Animation_BrowsecIconUk")),u=new t(e.querySelector("div.Animation_BrowsecIconUs")),p=new t(e.querySelector("div.Animation_ExtensionsPopup")),d=new t(e.querySelector("div.Animation_PinEnabled")),m=new t(e.querySelector("div.Animation_PinEnabledHover")),g=new t(e.querySelector("div.Animation_BrowsecPopup")),v=new t(e.querySelector("div.Animation_SwitchOn")),_=new t(e.querySelector("div.Animation_SwitchOff")),b=new t(e.querySelector("div.Animation_BrowsecPopup_NoProtection")),h=new t(e.querySelector("div.Animation_BrowsecPopup_Protection")),w=new t(e.querySelector("div.Animation_BrowsecPopup_Protection_Hover")),f=new t(e.querySelector("div.Animation_BrowsecPopup_ProtectionUs")),y=new t(e.querySelector("div.Animation_BrowsecPopup_SmartSettings")),k=new t(e.querySelector("div.Animation_BrowsecPopup_SmartSettingsHover"));return{start:()=>new Promise((e=>{let t,x=A=>{void 0===t&&(t=A);let B=A-t;if(B>a)return void e();const P=(()=>{let e=Math.floor(B/a);return B-e*a})()/a;{let e=(()=>{switch(!0){case P<=c[1]:return 532;case P<=c[2]:return 487+45*(1-(P-c[1])/r[2]);case P<=c[4]:return 487;case P<=c[5]:return 487+(P-c[4])/r[5]*13;case P<=c[7]:return 500;case P<=c[8]:return 500+(P-c[7])/r[8]*-180;case P<=c[10]:return 320;case P<=c[11]:return 320+(P-c[10])/r[11]*124;case P<=c[13]:return 444;case P<=c[14]:return 444+(P-c[13])/r[14]*-120;default:return 324}})(),o=(()=>{switch(!0){case P<=r[0]:return 19+164*(1-P/r[0]);case P<=c[1]:return 19;case P<=c[2]:return 19+(P-c[1])/r[2]*144;case P<=c[4]:return 163;case P<=c[5]:return 19+144*(1-(P-c[4])/r[5]);case P<=c[7]:return 19;case P<=c[8]:return 19+(P-c[7])/r[8]*336;case P<=c[10]:return 355;case P<=c[11]:return 355+(P-c[10])/r[11]*-11;case P<=c[13]:return 344;case P<=c[14]:return 344+(P-c[13])/r[14]*-47;default:return 297}})();i.value=`left:${e}px;top:${o}px;`}n.value=P<=r[0]?"opacity:0;":P<=c[6]?"opacity:1;":"opacity:0;";{let e=P<=r[0]?0:P<=c[1]?(P-r[0])/r[1]:P<=c[6]?1:0;p.value=`opacity:${e};`}m.value=P<=c[3]?"opacity:0":P<=c[4]?"opacity:1":"opacity:0",d.value=P<=c[4]?"opacity:0":P<=c[6]?"opacity:1":"opacity:0",o.value=P<=c[3]?"opacity:0":"opacity:1",s.value=P<=c[6]?"opacity:0;":P<=c[9]?"opacity:1;":"opacity:0;",l.value=P<=c[9]?"opacity:0;":P<=c[15]?"opacity:1;":"opacity:0;",u.value=P<=c[15]?"opacity:0":(c[16],"opacity:1"),g.value=P<=c[6]?"":P<=c[7]?`opacity:${(P-c[6])/r[7]};`:"opacity:1;";{let e=P<=c[6]?0:P<=c[9]?1:P<=c[10]?1-(P-c[9])/r[10]:0;_.value=`opacity:${e};`}{let e=P<=c[9]?0:P<=c[10]?(P-c[9])/r[10]:1;v.value=`opacity:${e};`}b.value=P<=c[6]?"":P<=c[9]?"opacity:1;":P<=c[10]?`opacity:${1-(P-c[9])/r[10]};`:"",h.value=P<=c[9]?"":P<=c[10]?`opacity:${(P-c[9])/r[10]};`:P<=c[11]&&(P-c[10])/r[11]<.7?"opacity:1;":"",w.value=P<=c[10]?"":P<=c[11]?(P-c[10])/r[11]<.7?"":"opacity:1;":P<=c[13]?`opacity:${1-(P-c[12])/r[13]};`:"",y.value=P<=c[12]?"":P<=c[13]?`opacity:${(P-c[12])/r[13]};`:P<=c[14]?(P-c[13])/r[14]>.7?"":"opacity:1":"",k.value=P<=c[13]?"":P<=c[14]?(P-c[13])/r[14]>.7?"opacity:1":"":P<=c[15]?"opacity:1;":P<=c[16]?`opacity:${1-(P-c[15])/r[16]};`:"",f.value=P<=c[15]?"":P<=c[16]?`opacity:${(P-c[15])/r[16]};`:"opacity:1;",self.requestAnimationFrame(x)};self.requestAnimationFrame(x)}))}})(m):(e=>{let o=new t(e.querySelector("div.Animation_Cursor")),i=new t(e.querySelector("div.Animation_BrowsecIcon")),n=new t(e.querySelector("div.Animation_BrowsecIconUk")),a=new t(e.querySelector("div.Animation_BrowsecIconUs")),r=new t(e.querySelector("div.Animation_BrowsecPopup")),c=new t(e.querySelector("div.Animation_SwitchOn")),s=new t(e.querySelector("div.Animation_SwitchOff")),d=new t(e.querySelector("div.Animation_BrowsecPopup_NoProtection")),m=new t(e.querySelector("div.Animation_BrowsecPopup_Protection")),g=new t(e.querySelector("div.Animation_BrowsecPopup_Protection_Hover")),v=new t(e.querySelector("div.Animation_BrowsecPopup_ProtectionUs")),_=new t(e.querySelector("div.Animation_BrowsecPopup_SmartSettings")),b=new t(e.querySelector("div.Animation_BrowsecPopup_SmartSettingsHover"));return{start:()=>new Promise((e=>{let t,h=w=>{void 0===t&&(t=w);let f=w-t;if(f>l)return void e();const y=(()=>{let e=Math.floor(f/l);return f-e*l})()/l;{let e=(()=>{switch(!0){case y<=u[0]:case y<=p[2]:return 564;case y<=p[3]:return 564+(y-p[2])/u[3]*-194;case y<=p[5]:return 370;case y<=p[6]:return 370+(y-p[5])/u[6]*138;case y<=p[8]:return 508;case y<=p[9]:return 508+(y-p[8])/u[9]*-120;default:return 388}})(),i=(()=>{switch(!0){case y<=u[0]:return 19+144*(1-y/u[0]);case y<=p[2]:return 19;case y<=p[3]:return 19+(y-p[2])/u[3]*336;case y<=p[5]:return 355;case y<=p[6]:return 355+(y-p[5])/u[6]*-11;case y<=p[8]:return 344;case y<=p[9]:return 344+(y-p[8])/u[9]*-47;default:return 297}})();o.value=`left:${e}px;top:${i}px;`}r.value=y<=p[1]?"":y<=p[2]?`opacity:${(y-p[1])/u[2]};`:"opacity:1;",i.value=y<=p[1]?"opacity:0;":y<=p[4]?"opacity:1;":"opacity:0;",n.value=y<=p[4]?"opacity:0;":y<=p[10]?"opacity:1;":"opacity:0;",a.value=y<=p[10]?"opacity:0":(p[11],"opacity:1");{let e=y<=p[1]?0:y<=p[4]?1:y<=p[5]?1-(y-p[4])/u[5]:0;s.value=`opacity:${e};`}{let e=y<=p[4]?0:y<=p[5]?(y-p[4])/u[5]:1;c.value=`opacity:${e};`}d.value=y<=p[1]?"":y<=p[4]?"opacity:1;":y<=p[5]?`opacity:${1-(y-p[4])/u[5]};`:"",m.value=y<=p[4]?"":y<=p[5]?`opacity:${(y-p[4])/u[5]};`:y<=p[6]&&(y-p[5])/u[6]<.7?"opacity:1;":"",g.value=y<=p[5]?"":y<=p[6]?(y-p[5])/u[6]<.7?"":"opacity:1;":y<=p[8]?`opacity:${1-(y-p[7])/u[8]};`:"",_.value=y<=p[7]?"":y<=p[8]?`opacity:${(y-p[7])/u[8]};`:y<=p[9]?(y-p[8])/u[9]>.7?"":"opacity:1":"",b.value=y<=p[8]?"":y<=p[9]?(y-p[8])/u[9]>.7?"opacity:1":"":y<=p[10]?"opacity:1;":y<=p[11]?`opacity:${1-(y-p[10])/u[11]};`:"",v.value=y<=p[10]?"":y<=p[11]?`opacity:${(y-p[10])/u[11]};`:"opacity:1;",self.requestAnimationFrame(h)};self.requestAnimationFrame(h)}))}})(m);this.animation={elements:{element:m,parent:d},self:g};const _=async()=>{await this.animation.self.start(),_()};_()}browsecLink(e,o=(e=>e)){return(0,k.Z)(e,(e=>Object.assign(o(e),{instd:y.Z.getStateSync().daysAfterInstall})))}}customElements.define("main-block",A);(async()=>{var e;await y.Z.initiate();const o=document.querySelector("div.Main > div.In");null==o||null===(e=o.append)||void 0===e||e.call(o,document.createElement("main-block"))})(),document.title=(0,b.Z)("you_just_installed_browsec")}},i={};function t(e){var n=i[e];if(void 0!==n)return n.exports;var a=i[e]={id:e,loaded:!1,exports:{}};return o[e](a,a.exports,t),a.loaded=!0,a.exports}t.m=o,e=[],t.O=(o,i,n,a)=>{if(!i){var r=1/0;for(u=0;u<e.length;u++){for(var[i,n,a]=e[u],c=!0,s=0;s<i.length;s++)(!1&a||r>=a)&&Object.keys(t.O).every((e=>t.O[e](i[s])))?i.splice(s--,1):(c=!1,a<r&&(r=a));if(c){e.splice(u--,1);var l=n();void 0!==l&&(o=l)}}return o}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[i,n,a]},t.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},t.d=(e,o)=>{for(var i in o)t.o(o,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:o[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.j=3,(()=>{var e={3:0};t.O.j=o=>0===e[o];var o=(o,i)=>{var n,a,[r,c,s]=i,l=0;if(r.some((o=>0!==e[o]))){for(n in c)t.o(c,n)&&(t.m[n]=c[n]);if(s)var u=s(t)}for(o&&o(i);l<r.length;l++)a=r[l],t.o(e,a)&&e[a]&&e[a][0](),e[r[l]]=0;return t.O(u)},i=self.webpackChunkbrowsec_extension=self.webpackChunkbrowsec_extension||[];i.forEach(o.bind(null,0)),i.push=o.bind(null,i.push.bind(i))})();var n=t.O(void 0,[592],(()=>t(333)));n=t.O(n)})();