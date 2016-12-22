webpackJsonp([10],{1074:function(e,t,a){function l(e){return e?r(e,n(e)):[]}var r=a(1075),n=a(483);e.exports=l},1075:function(e,t,a){function l(e,t){return r(t,function(t){return e[t]})}var r=a(505);e.exports=l},1106:function(e,t,a){"use strict";e.exports=a(1107)},1107:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){e.params,e.loadContext;return void t()}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),u=a(197),i=l(u),d=a(507),f=l(d),p=a(1108),h=l(p),m=a(615),v=l(m),E=a(608),b=a(587),_=a(610),y=a(1109),C=a(625),g=l(C),k=a(632),w=l(k),P=a(860),L=l(P),M=a(635),U=l(M),N=a(1110),x=l(N),j=a(1112),z=l(j),T=a(1115),H=l(T),S=a(1118),O=l(S),B=a(1121),R=l(B),A=(a(605),a(1123)),I=l(A),q={children:u.PropTypes.element.isRequired,selectedUser:u.PropTypes.object,location:u.PropTypes.object.isRequired,auth:u.PropTypes.object,windowWidth:u.PropTypes.number,actions:u.PropTypes.object.isRequired,xp:u.PropTypes.object,api:u.PropTypes.object.isRequired},V="Users",F=function(e){function t(){return r(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),o(t,[{key:"componentWillMount",value:function(){var e=this.props.location,t=this.getUsernameFromPathname(e.pathname);this.fetchUser(t)}},{key:"componentWillReceiveProps",value:function(e){var t=this.getUsernameFromPathname(e.location.pathname),a=this.getUsernameFromPathname(this.props.location.pathname);a!==t&&(this.props.actions.unsetSelectedUser(),this.fetchUser(t))}},{key:"componentWillUnmount",value:function(){var e=this.props.actions;e.unsetSelectedUser()}},{key:"getUsernameFromPathname",value:function(e){var t=e.match(/@\w+/)[0].replace("@","");return t}},{key:"fetchUser",value:function(e){var t=this.props,a=t.api,l=t.actions;a.users.profile(e).then(b.toJson).then(function(e){l.setSelectedUser(e)})}},{key:"renderHireButton",value:function(){var e=this.props.selectedUser.id;return(0,h["default"])(y.HIREABLE_PHOTOGRAPHRER_IDS,e)?i["default"].createElement("div",{className:I["default"].buttons},i["default"].createElement(w["default"],{tag:"a",className:I["default"].crewHireButton,href:"#",size:"small",type:"crew"},i["default"].createElement(g["default"],{type:"crew-square",className:I["default"].crewSquareIcon}),"Hire on Crew")):null}},{key:"renderUserHeader",value:function(){return i["default"].createElement("div",{className:I["default"].header},i["default"].createElement("div",{className:I["default"].containerUserActions},this.renderAvatar(),this.renderFollowButton(),this.renderAuthButtons()),this.renderName(),this.renderExternalLinks(),this.renderDescription(),this.renderHireButton())}},{key:"renderFollowButton",value:function(){var e=this.props,t=e.auth,a=e.selectedUser,l=e.location,r=e.actions,n=e.api,c=e.xp,s="b"===(0,f["default"])(c,"FOLLOW.variant");return(0,f["default"])(t,"user.username")===a.username?null:i["default"].createElement("div",{className:I["default"].followUserContainer},i["default"].createElement(L["default"],{redirectAfterFollow:!0,authUser:t.user,selectedUser:a,location:l,updateUserAction:r.setSelectedUser,api:n,isFollowXp:s}))}},{key:"renderAuthButtons",value:function(){var e=this.props,t=e.auth,a=e.selectedUser,l=e.location,r=e.actions;return(0,f["default"])(t,"user.username")!==a.username?null:i["default"].createElement("div",{className:I["default"].authButtons},i["default"].createElement(w["default"],{className:I["default"].editProfile,type:"outline",tag:"a",size:"small",href:(0,E.railsUrl)()+"/account"},"Edit Profile"),i["default"].createElement(w["default"],{className:I["default"].ellipsis,type:"outline",tag:"link",size:"small",to:{pathname:l.pathname,query:(0,E.toggleIsVisibleQuery)(l,"user_nav_popover")}},"…"),i["default"].createElement(U["default"],{className:I["default"].popover,location:l,activeQuery:"user_nav_popover",arrowLocation:"top-right"},i["default"].createElement(x["default"],{photoCount:a.total_photos,authUser:t.user,actions:r})))}},{key:"renderBadge",value:function(){var e=this.props.selectedUser,t=e.badge;return t?i["default"].createElement(H["default"],{badge:t}):null}},{key:"renderAvatar",value:function(){var e=this.props.selectedUser;return i["default"].createElement("div",{className:I["default"].avatarContainer},i["default"].createElement("img",{alt:"User avatar",className:I["default"].avatar,src:e.profile_image.large}),this.renderBadge())}},{key:"renderName",value:function(){var e=this.props.selectedUser,t=e.name;return i["default"].createElement("div",null,i["default"].createElement("h1",{className:I["default"].name},""+t))}},{key:"renderExternalLinks",value:function(){var e=this.props.selectedUser;return i["default"].createElement("div",{className:I["default"].externalLinks},e.location?this.renderLocation():null,e.portfolio_url?this.renderPortfolioLink():null)}},{key:"renderPortfolioLink",value:function(){var e=this.props.selectedUser,t=e.total_photos>=1||e.total_likes>=10||e.total_collections>=2;return i["default"].createElement("a",{className:I["default"].externalLink,href:"https://unsplash.com/"+e.username+"/portfolio",rel:t?null:"nofollow"},i["default"].createElement(g["default"],{className:I["default"].externalLinkIcon,type:"earth"}),(0,E.formatPortfolioUrl)(e.portfolio_url))}},{key:"renderLocation",value:function(){var e=this.props.selectedUser;return i["default"].createElement("a",{className:I["default"].externalLink,href:(0,E.searchUrl)(e.location)},i["default"].createElement(g["default"],{className:(0,v["default"])(I["default"].externalLinkIcon,I["default"].externalLinkIconLocation),type:"location"}),e.location)}},{key:"renderDescription",value:function(){var e=this.props.selectedUser;return e.bio?i["default"].createElement("div",null,i["default"].createElement("p",{className:I["default"].description},e.bio)):null}},{key:"renderUserMobilePageLinks",value:function(){var e=this.props,t=e.windowWidth,a=e.selectedUser,l=e.location;return t<=_.SMALL_MAX?i["default"].createElement("div",{className:I["default"].mobilePageLinkContainer},i["default"].createElement(z["default"],{user:a,location:l,isMobile:!0})):null}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.selectedUser;return i["default"].createElement("div",null,i["default"].createElement(R["default"],{user:a}),a?this.renderUserHeader():i["default"].createElement(O["default"],null),a&&this.renderUserMobilePageLinks(),i["default"].createElement("div",null,a&&i["default"].cloneElement(t,this.props)))}}]),t}(u.Component);t["default"]=F,F.displayName=V,F.propTypes=q,F.loadProps=s},1108:function(e,t,a){function l(e,t,a,l){e=n(e)?e:o(e),a=a&&!l?s(a):0;var i=e.length;return a<0&&(a=u(i+a,0)),c(e)?a<=i&&e.indexOf(t,a)>-1:!!i&&r(e,t,a)>-1}var r=a(527),n=a(489),c=a(494),s=a(722),o=a(1074),u=Math.max;e.exports=l},1109:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.HIREABLE_PHOTOGRAPHRER_IDS=[]},1110:function(e,t,a){"use strict";e.exports=a(1111)},1111:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function r(e,t,a,l){return c["default"].createElement("li",{className:E["default"].li},c["default"].createElement("a",{className:E["default"].link,href:t,target:a?"_blank":null,"data-type":"PopoverLink",onClick:l},e))}Object.defineProperty(t,"__esModule",{value:!0});var n=a(197),c=l(n),s=a(619),o=l(s),u=a(616),i=l(u),d=a(620),f=l(d),p=a(624),h=l(p),m=a(608),v=a(668),E=l(v),b=(0,h["default"])((0,o["default"])("UserLinks"),(0,i["default"])({photoCount:n.PropTypes.number,authUser:n.PropTypes.object.isRequired,actions:n.PropTypes.object.isRequired}),(0,f["default"])({photoCount:0}));t["default"]=b(function(e){var t=e.photoCount,a=e.authUser,l=e.actions,n=t>0,s="mailto:support@unsplash.com?subject=Where%20have%20you%20been%20all%20my%20life%3F";return c["default"].createElement("ul",{className:E["default"].ul},r("Account settings",(0,m.railsUrl)()+"/account"),c["default"].createElement("li",{className:E["default"].li},c["default"].createElement("a",{className:E["default"].link,href:(0,m.railsUrl)()+"/submit"},"Submit a photo")),n?r("Manage photos",(0,m.railsUrl)()+"/account/photos"):null,n?r("My stats",(0,m.railsUrl)()+"/"+a.username+"/stats"):null,r("Contact us",s),r("Logout","/logout",!1,l.trackLogout))})},1112:function(e,t,a){"use strict";e.exports=a(1113)},1113:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e){switch(e){case"photos":return"Photos";case"likes":return"Liked";case"collections":return"Collections";default:return""}}Object.defineProperty(t,"__esModule",{value:!0});var c=a(197),s=l(c),o=a(615),u=l(o),i=a(661),d=l(i),f=a(619),p=l(f),h=a(616),m=l(h),v=a(620),E=l(v),b=a(624),_=l(b),y=a(891),C=l(y),g=a(1114),k=l(g),w=(0,_["default"])((0,p["default"])("NavLink"),(0,m["default"])({total:c.PropTypes.number.isRequired,type:c.PropTypes.oneOf(["photos","likes","collections"]),user:c.PropTypes.object.isRequired,location:c.PropTypes.object.isRequired}))(function(e){var t=e.type,a=e.total,l=e.user;if("photos"===t&&0===a)return s["default"].createElement("span",null);var r="photos"===t?"":t,c="/@"+l.username+"/"+r;return s["default"].createElement(d["default"],{to:{pathname:c},className:(0,u["default"])(k["default"].userLink),activeClassName:k["default"].activeUserLink},s["default"].createElement(C["default"],{number:a,className:k["default"].number}),s["default"].createElement("span",{className:k["default"].label},n(t)))}),P=(0,_["default"])((0,p["default"])("UserNav"),(0,m["default"])({isMobile:c.PropTypes.bool,user:c.PropTypes.object.isRequired,location:c.PropTypes.object.isRequired}),(0,E["default"])({isMobile:!1}));t["default"]=P(function(e){var t=e.user,a=e.isMobile,l=e.location;return s["default"].createElement("div",{className:(0,u["default"])(k["default"].userLinks,r({},k["default"].isMobile,a))},s["default"].createElement(w,{type:"photos",total:t.total_photos,location:l,user:t}),s["default"].createElement(w,{type:"likes",total:t.total_likes,location:l,user:t}),s["default"].createElement(w,{type:"collections",total:t.total_collections,location:l,user:t}))})},1114:function(e,t){e.exports={isMobile:"_2swg9 _36jaJ _3Y6hz LmUCs _1WCyJ",userLinks:"_2IFie",userLink:"_1LhIv _21rCr",activeUserLink:"_2DI5w",number:"_34Zwd _3Y6hz",label:"_243N3"}},1115:function(e,t,a){"use strict";e.exports=a(1116)},1116:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function r(e){switch(e){case"bug-hunter":return s["default"].createElement("svg",{className:d["default"].badge,xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",viewBox:"0 0 26 26"},s["default"].createElement("path",{d:"M13 25c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z",fill:"#e8ac15"}),s["default"].createElement("path",{d:"M13 2c6.1 0 11 4.9 11 11s-4.9 11-11 11-11-4.9-11-11 4.9-11 11-11m0-2c-7.2 0-13 5.8-13 13s5.8 13 13 13 13-5.8 13-13-5.8-13-13-13zM13 8.5c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5-4.5-2-4.5-4.5 2-4.5 4.5-4.5m0-1.5c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z",fill:"#fff"}),s["default"].createElement("circle",{cx:"13",cy:"13",r:"1",fill:"#fff"}),s["default"].createElement("path",{d:"M18 12h3v2h-3zM5 12h3v2h-3zM12 18h2v3h-2zM12 5h2v3h-2z",fill:"#fff"}));case"ambassador":return s["default"].createElement("svg",{className:d["default"].badge,xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",viewBox:"0 0 26 26"},s["default"].createElement("path",{d:"M13 25c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z",fill:"#1398ea"}),s["default"].createElement("path",{d:"M13 2c6.1 0 11 4.9 11 11s-4.9 11-11 11-11-4.9-11-11 4.9-11 11-11m0-2c-7.2 0-13 5.8-13 13s5.8 13 13 13 13-5.8 13-13-5.8-13-13-13zM13 8l4.4 8h-8.8z",fill:"#fff"}));case"crew":return s["default"].createElement("svg",{className:d["default"].badge,xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",viewBox:"0 0 26 26"},s["default"].createElement("path",{d:"M13,25C6.4,25,1,19.6,1,13S6.4,1,13,1s12,5.4,12,12S19.6,25,13,25z",fill:"#222"}),s["default"].createElement("path",{d:"M13,2c6.1,0,11,4.9,11,11s-4.9,11-11,11S2,19.1,2,13S6.9,2,13,2 M13,0C5.8,0,0,5.8,0,13s5.8,13,13,13s13-5.8,13-13S20.2,0,13,0L13,0z",fill:"#fff"}),s["default"].createElement("path",{d:"M13.1,18c-1.5,0-2.8-0.6-3.7-1.6c-1.8-1.9-1.8-5,0-6.9C10.3,8.5,11.5,8,12.8,8c0.3,0,0.5,0,0.8,0.1c0.5,0.1,1,0.2,1.4,0.5V8.1h1.6v3.3h-1.3l-0.2-0.5c-0.3-0.7-1-1.1-1.7-1.2c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0c-0.9,0-1.7,0.4-2.3,1c-0.6,0.7-0.9,1.6-0.8,2.5c0.1,0.9,0.5,1.8,1.2,2.4c0.6,0.5,1.4,0.8,2.3,0.8c0.9,0,1.7-0.3,2.4-0.9l0.1-0.1l0.2,0.1l1,1l-0.2,0.2C15.7,17.5,14.5,18,13.1,18L13.1,18z",fill:"#fff"}));case"book-contributor":return s["default"].createElement("svg",{className:d["default"].badge,xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",viewBox:"0 0 26 26"},s["default"].createElement("path",{d:"M13,24.9c-0.5,0-1-0.2-1.3-0.6l-1.9-1.9c-0.4-0.4-0.7-0.5-1.2-0.5H5.8c-1,0-1.8-0.8-1.8-1.8v-2.7c0-0.5-0.2-0.8-0.5-1.2l-1.9-1.9C1.2,13.9,1,13.4,1,13s0.2-0.9,0.6-1.3l1.9-1.9C3.9,9.4,4,9.1,4,8.6V5.9c0-1,0.8-1.8,1.8-1.8h2.7c0.5,0,0.8-0.2,1.2-0.5l1.9-1.9C12,1.3,12.5,1.1,13,1.1s1,0.2,1.3,0.6l1.9,1.9c0.3,0.3,0.7,0.5,1.2,0.5h2.7c1,0,1.8,0.8,1.8,1.8v2.5c0,0.5,0.3,1.1,0.6,1.5l1.8,1.8c0.4,0.4,0.6,0.8,0.6,1.3c0,0.5-0.2,0.9-0.6,1.3l-1.9,1.9C22.3,16.5,22,17,22,17.5v2.7c0,1-0.8,1.8-1.8,1.8h-2.7c-0.5,0-0.8,0.2-1.2,0.5l-1.9,1.9c-0.1,0.1-0.2,0.1-0.3,0.2C13.9,24.7,13.5,24.9,13,24.9z",fill:"#aaa"}),s["default"].createElement("path",{d:"M13,2.1c0.2,0,0.5,0.1,0.6,0.3l1.9,1.9c0.5,0.5,1.2,0.8,1.9,0.8h2.7c0.5,0,0.8,0.4,0.8,0.8v2.5c0,0.7,0.4,1.6,0.9,2.2l1.8,1.8c0.4,0.4,0.4,0.8,0,1.2l-1.9,1.9C21.4,16,21,16.7,21,17.4v2.7c0,0.5-0.4,0.8-0.8,0.8h-2.7c-0.7,0-1.4,0.3-1.9,0.8l-1.9,1.9c-0.2,0.1-0.5,0.2-0.6,0.2s-0.5-0.1-0.6-0.3l-1.9-1.9c-0.5-0.5-1.2-0.8-1.9-0.8H5.8c-0.5,0-0.8-0.4-0.8-0.8v-2.7c0-0.7-0.3-1.4-0.8-1.9l-1.9-1.9c-0.4-0.4-0.4-0.8,0-1.2l1.9-1.9C4.7,10,5,9.4,5,8.6V5.9c0-0.5,0.4-0.8,0.8-0.8h2.7c0.7,0,1.4-0.3,1.9-0.8l1.9-1.9C12.5,2.2,12.8,2.1,13,2.1 M13,0.1c-0.7,0-1.5,0.3-2,0.9L9,2.9C8.8,3.1,8.7,3.1,8.6,3.1H5.8C4.3,3.1,3,4.4,3,5.9v2.7c0,0.2-0.1,0.2-0.1,0.3C2.9,9,2.8,9,2.8,9L0.9,11C0.3,11.5,0,12.2,0,13c0,0.7,0.3,1.5,0.9,2l1.9,1.9C3,17.1,3,17.2,3,17.4v2.7c0,1.6,1.3,2.8,2.8,2.8h2.7c0.1,0,0.3,0,0.5,0.2L11,25c0.5,0.5,1.3,0.9,2,0.9c0.7,0,1.3-0.3,1.5-0.4c0.2-0.1,0.4-0.2,0.5-0.4l1.9-1.9c0.2-0.2,0.4-0.2,0.5-0.2h2.7c1.6,0,2.8-1.3,2.8-2.8v-2.7c0-0.1,0.1-0.4,0.2-0.5l1.9-1.9c0.6-0.6,0.9-1.3,0.9-2c0-0.7-0.3-1.5-0.9-2l-1.8-1.8C23.1,9.1,23,8.7,23,8.5V5.9c0-1.6-1.3-2.8-2.8-2.8h-2.7c-0.1,0-0.4-0.1-0.5-0.2L15,1C14.5,0.4,13.7,0.1,13,0.1L13,0.1z",fill:"#fff"}),s["default"].createElement("path",{d:"M15.3,16.5C14.7,16.9,14,17,13.2,17H10V9h3.2c0.6,0,1.3,0.1,1.8,0.4c0.6,0.4,0.9,1,0.9,1.7c0,0.7-0.3,1.4-1,1.7c0.8,0.3,1.1,1.1,1.1,1.8C16.1,15.4,15.9,16,15.3,16.5z M13.3,10.3h-1.8v2h1.8c0.7,0,1.2-0.2,1.2-1C14.5,10.5,13.9,10.3,13.3,10.3z M13.3,13.5h-1.8v2.2h1.8c0.7,0,1.4-0.2,1.4-1.1C14.7,13.8,14.1,13.5,13.3,13.5z",fill:"#fff"}));case"book":return s["default"].createElement("svg",{className:d["default"].badge,xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",viewBox:"0 0 26 26"},s["default"].createElement("path",{d:"M13,24.9c-0.5,0-1-0.2-1.3-0.6l-1.9-1.9c-0.4-0.4-0.7-0.5-1.2-0.5H5.8c-1,0-1.8-0.8-1.8-1.8v-2.7c0-0.5-0.2-0.8-0.5-1.2l-1.9-1.9C1.2,13.9,1,13.4,1,13s0.2-0.9,0.6-1.3l1.9-1.9C3.9,9.4,4,9.1,4,8.6V5.9c0-1,0.8-1.8,1.8-1.8h2.7c0.5,0,0.8-0.2,1.2-0.5l1.9-1.9C12,1.3,12.5,1.1,13,1.1s1,0.2,1.3,0.6l1.9,1.9c0.3,0.3,0.7,0.5,1.2,0.5h2.7c1,0,1.8,0.8,1.8,1.8v2.5c0,0.5,0.3,1.1,0.6,1.5l1.8,1.8c0.4,0.4,0.6,0.8,0.6,1.3c0,0.5-0.2,0.9-0.6,1.3l-1.9,1.9C22.3,16.5,22,17,22,17.5v2.7c0,1-0.8,1.8-1.8,1.8h-2.7c-0.5,0-0.8,0.2-1.2,0.5l-1.9,1.9c-0.1,0.1-0.2,0.1-0.3,0.2C13.9,24.7,13.5,24.9,13,24.9z",fill:"#12bc5e"}),s["default"].createElement("path",{d:"M13,2.1c0.2,0,0.5,0.1,0.6,0.3l1.9,1.9c0.5,0.5,1.2,0.8,1.9,0.8h2.7c0.5,0,0.8,0.4,0.8,0.8v2.5c0,0.7,0.4,1.6,0.9,2.2l1.8,1.8c0.4,0.4,0.4,0.8,0,1.2l-1.9,1.9C21.4,16,21,16.7,21,17.4v2.7c0,0.5-0.4,0.8-0.8,0.8h-2.7c-0.7,0-1.4,0.3-1.9,0.8l-1.9,1.9c-0.2,0.1-0.5,0.2-0.6,0.2s-0.5-0.1-0.6-0.3l-1.9-1.9c-0.5-0.5-1.2-0.8-1.9-0.8H5.8c-0.5,0-0.8-0.4-0.8-0.8v-2.7c0-0.7-0.3-1.4-0.8-1.9l-1.9-1.9c-0.4-0.4-0.4-0.8,0-1.2l1.9-1.9C4.7,10,5,9.4,5,8.6V5.9c0-0.5,0.4-0.8,0.8-0.8h2.7c0.7,0,1.4-0.3,1.9-0.8l1.9-1.9C12.5,2.2,12.8,2.1,13,2.1 M13,0.1c-0.7,0-1.5,0.3-2,0.9L9,2.9C8.8,3.1,8.7,3.1,8.6,3.1H5.8C4.3,3.1,3,4.4,3,5.9v2.7c0,0.2-0.1,0.2-0.1,0.3C2.9,9,2.8,9,2.8,9L0.9,11C0.3,11.5,0,12.2,0,13c0,0.7,0.3,1.5,0.9,2l1.9,1.9C3,17.1,3,17.2,3,17.4v2.7c0,1.6,1.3,2.8,2.8,2.8h2.7c0.1,0,0.3,0,0.5,0.2L11,25c0.5,0.5,1.3,0.9,2,0.9c0.7,0,1.3-0.3,1.5-0.4c0.2-0.1,0.4-0.2,0.5-0.4l1.9-1.9c0.2-0.2,0.4-0.2,0.5-0.2h2.7c1.6,0,2.8-1.3,2.8-2.8v-2.7c0-0.1,0.1-0.4,0.2-0.5l1.9-1.9c0.6-0.6,0.9-1.3,0.9-2c0-0.7-0.3-1.5-0.9-2l-1.8-1.8C23.1,9.1,23,8.7,23,8.5V5.9c0-1.6-1.3-2.8-2.8-2.8h-2.7c-0.1,0-0.4-0.1-0.5-0.2L15,1C14.5,0.4,13.7,0.1,13,0.1L13,0.1z",fill:"#fff"}),s["default"].createElement("path",{d:"M15.3,16.5C14.7,16.9,14,17,13.2,17H10V9h3.2c0.6,0,1.3,0.1,1.8,0.4c0.6,0.4,0.9,1,0.9,1.7c0,0.7-0.3,1.4-1,1.7c0.8,0.3,1.1,1.1,1.1,1.8C16.1,15.4,15.9,16,15.3,16.5z M13.3,10.3h-1.8v2h1.8c0.7,0,1.2-0.2,1.2-1C14.5,10.5,13.9,10.3,13.3,10.3z M13.3,13.5h-1.8v2.2h1.8c0.7,0,1.4-0.2,1.4-1.1C14.7,13.8,14.1,13.5,13.3,13.5z",fill:"#fff"}));case"team":return s["default"].createElement("svg",{className:d["default"].badge,xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",viewBox:"0 0 26 26"},s["default"].createElement("path",{d:"M13,25C6.4,25,1,19.6,1,13C1,6.4,6.4,1,13,1c6.6,0,12,5.4,12,12C25,19.6,19.6,25,13,25z",fill:"#222"}),s["default"].createElement("path",{d:"M13,2c6.1,0,11,4.9,11,11s-4.9,11-11,11S2,19.1,2,13S6.9,2,13,2 M13,0C5.8,0,0,5.8,0,13s5.8,13,13,13s13-5.8,13-13S20.2,0,13,0L13,0z",fill:"#fff"}),s["default"].createElement("path",{d:"M13,11.6c-1,0-1.7,0.8-1.7,1.7c0,1,0.8,1.7,1.7,1.7s1.7-0.8,1.7-1.7c0,0,0,0,0,0C14.7,12.3,14,11.6,13,11.6L13,11.6z M17.2,9h-1.3l-0.3-0.8c-0.2-0.4-0.6-0.7-1-0.7h-3.1c-0.5,0-0.9,0.3-1,0.7L10.1,9H8.8c-0.8,0-1.5,0.7-1.5,1.5l0,0V16c0,0.8,0.7,1.5,1.5,1.5h0h8.5c0.8,0,1.5-0.7,1.5-1.5v-5.4C18.8,9.7,18.1,9.1,17.2,9C17.2,9,17.2,9,17.2,9L17.2,9z M13,16c-1.5,0-2.7-1.2-2.7-2.7s1.2-2.7,2.7-2.7s2.7,1.2,2.7,2.7l0,0C15.7,14.8,14.5,16,13,16L13,16z",fill:"#fff"}));default:return null}}function n(e){var t=e.badge,a=t.link,l=t.slug,n=t.title;return s["default"].createElement("div",{className:d["default"].badgeContainer},s["default"].createElement(u["default"],{label:n,className:d["default"].tooltip},s["default"].createElement("a",{className:d["default"].badgeLink,href:a,target:"_blank",rel:"noopener noreferrer"},r(l))))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n;var c=a(197),s=l(c),o=a(875),u=l(o),i=a(1117),d=l(i),f={badge:c.PropTypes.object.isRequired};n.propTypes=f},1117:function(e,t){e.exports={badge:"_2Eg7j",badgeContainer:"_3VwhC",badgeLink:"FwktP"}},1118:function(e,t,a){"use strict";e.exports=a(1119)},1119:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(197),n=l(r),c=a(624),s=l(c),o=a(619),u=l(o),i=a(1120),d=l(i),f=(0,s["default"])((0,u["default"])("UsersPlaceholder"));t["default"]=f(function(){return n["default"].createElement("div",{className:d["default"].header},n["default"].createElement("div",{className:d["default"].containerUserActions},n["default"].createElement("div",{className:d["default"].avatarContainer},n["default"].createElement("div",{className:d["default"].avatarPlaceholder}))),n["default"].createElement("div",null,n["default"].createElement("h1",{className:d["default"].namePlaceholder})),n["default"].createElement("div",{className:d["default"].externalLinksPlaceholder}),n["default"].createElement("div",null,n["default"].createElement("p",{className:d["default"].descriptionPlaceholder}),n["default"].createElement("p",{className:d["default"].descriptionPlaceholder})))})},1120:function(e,t){e.exports={header:"_1Hvsh _22ZDn dvlCB",containerUserActions:"e_mNk",avatarContainer:"_7HRaL",avatarPlaceholder:"_3Vyrg",namePlaceholder:"x7Hci",externalLinksPlaceholder:"_1t2iY",descriptionPlaceholder:"_2jdy_",placeholderAnimation:"DHAIS"}},1121:function(e,t,a){"use strict";e.exports=a(1122)},1122:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t="https://unsplash.com/@"+e.username;return('{\n    "@context": "http://schema.org",\n    "@type": "Person",\n    "name": "'+(0,h["default"])(e,"name")+'",\n    "url": "'+t+'"\n  }').trim()}Object.defineProperty(t,"__esModule",{value:!0}),t.buildPersonSchema=r;var n=a(197),c=l(n),s=a(624),o=l(s),u=a(619),i=l(u),d=a(616),f=l(d),p=a(507),h=l(p),m=(0,o["default"])((0,i["default"])("PersonSchema"),(0,f["default"])({user:n.PropTypes.object}));t["default"]=m(function(e){var t=e.user;if(!t)return c["default"].createElement("div",null);var a=('\n    <script type="application/ld+json">\n      '+r(t)+"\n    </script>\n  ").trim();return c["default"].createElement("div",{dangerouslySetInnerHTML:{__html:a}})})},1123:function(e,t){e.exports={header:"_3Bmfo _22ZDn dvlCB",containerUserActions:"kw-8V",avatarContainer:"mIkk6",avatar:"_2JkLs",name:"_2SAkc _36jaJ",externalLinks:"PgOw_",externalLink:"Jw2Gi _21rCr",externalLinkIcon:"_1PDCs",externalLinkIconLocation:"_2V4JD",description:"_3ysVp",mobilePageLinkContainer:"X18lZ _1iK9o",authButtons:"_1ixkK",followUserContainer:"_2SWMb",editProfile:"_27k29",ellipsis:"Cjr0T",crewHireButton:"_2kvr3",crewSquareIcon:"_3Sr5s",popover:"_3LM4E"}}});
//# sourceMappingURL=10.43804.main.js.map