!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.InstagramLogin=t(require("react")):e.InstagramLogin=t(e.react)}(this,function(e){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),i=o(n);t["default"]=i["default"]},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){var t=window.location.search.substring(1),r=t.split("&"),o=r.map(function(t){var r=t.split("=");if(r[0]===e)return r[1]}).filter(function(e){if(e)return e});return o[0]}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),a=r(3),p=o(a),l=function(e){function t(e){n(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.onBtnClick=r.onBtnClick.bind(r),r}return c(t,e),u(t,[{key:"componentDidMount",value:function(){window.location.search.includes("code")?this.props.onSuccess(s("code")):window.location.search.includes("error")&&this.props.onFailure({error:s("error"),error_reason:s("error_reason"),error_description:s("error_description")})}},{key:"onBtnClick",value:function(){var e=this.props,t=e.clientId,r=e.scope,o=window.location.href;window.location.href="https://api.instagram.com/oauth/authorize/?client_id="+t+"&redirect_uri="+o+"&scope="+r+"&response_type=code"}},{key:"render",value:function(){var e={display:"inline-block",background:"linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)",color:"#fff",width:200,paddingTop:10,paddingBottom:10,borderRadius:2,border:"1px solid transparent",fontSize:16,fontWeight:"bold",fontFamily:'"proxima-nova", "Helvetica Neue", Arial, Helvetica, sans-serif'},t=this.props,r=t.cssClass,o=t.buttonText,n=t.children;return p["default"].createElement("button",{className:r,onClick:this.onBtnClick,style:r?{}:e},n?n:o)}}]),t}(a.Component);l.propTypes={onSuccess:a.PropTypes.func.isRequired,onFailure:a.PropTypes.func.isRequired,clientId:a.PropTypes.string.isRequired,buttonText:a.PropTypes.string,scope:a.PropTypes.string,cssClass:a.PropTypes.string,children:p["default"].PropTypes.node},l.defaultProps={buttonText:"Login with Instagram",scope:"basic"},t["default"]=l},function(t,r){t.exports=e}])});
//# sourceMappingURL=instagram-login.js.map