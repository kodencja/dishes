(this.webpackJsonpdishes_by_codencja=this.webpackJsonpdishes_by_codencja||[]).push([[0],{149:function(e,a,t){var n={"./pizza.jpg":150,"./sandwich.jpg":151,"./soup.jpg":152};function c(e){var a=o(e);return t(a)}function o(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=o,e.exports=c,c.id=149},150:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/pizza.bba134e7.jpg"},151:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/sandwich.45375517.jpg"},152:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/soup.eae9ab6c.jpg"},153:function(e,a,t){"use strict";t.r(a);var n=t(3),c=t.n(n),o=t(39),s=t.n(o),r=(t(48),t(14)),i=t.n(r),l=t(9),d=t(40),p=t(42),u=t(0),b=t(43),j=t(2);function O(e){var a=Object(n.useContext)(R),t=a.onState,c=a.onAddToInputRef,o=a.onChanging,s=t.type,r=t.outputStyle,i=t.loading,l=e.onTagType,d=e.onTitle,p=e.onName,u=e.onType,O=e.onID,m=e.onClass,f=e.onPlaceHold,h=e.onStep,y=e.onAria,_=e.onRequired,v=e.onDataSizing,g=e.onMin,k=e.onMax,x=e.onPattern,T=e.onOptionNames,N=Object(n.useMemo)((function(){return"select"===l&&Object(b.a)(T).map((function(e,a){return"default"===e?Object(j.jsx)("option",{defaultValue:!0,hidden:!0,label:" ",children:"select an option"},a):Object(j.jsx)("option",{value:e,children:e},a)}))}),[s]),S=Object(n.useMemo)((function(){return Object(j.jsx)("div",{className:"form-group input-cont",children:Object(j.jsxs)("div",{className:"input-block",children:[Object(j.jsx)("label",{htmlFor:p,children:d}),Object(j.jsx)("select",{className:m,name:p,"aria-label":y,id:O,required:_,ref:c,value:t[p].val,onChange:o,children:N})]})})}),[s,i]),w=Object(n.useMemo)((function(){return Object(j.jsx)("div",{className:"form-group input-cont",children:Object(j.jsxs)("div",{className:"input-block",children:[Object(j.jsx)("label",{htmlFor:p,children:d}),Object(j.jsx)("input",{type:u,placeholder:f,className:m,name:p,"aria-label":y,id:O,step:h,required:_,"data-sizing":v,min:g,max:k,pattern:x,ref:c,value:t[p].val,onChange:o,onKeyDown:o})]})})}),[t]),F=Object(n.useMemo)((function(){return Object(j.jsx)("div",{className:"form-group input-cont",children:Object(j.jsxs)("div",{className:"input-block",children:[Object(j.jsx)("label",{htmlFor:p,children:d}),Object(j.jsx)("input",{type:u,placeholder:f,className:m,name:p,"aria-label":y,id:O,step:h,required:_,"data-sizing":v,min:g,max:k,pattern:x,ref:c,value:t[p].val,onChange:o,onKeyDown:o}),Object(j.jsx)("output",{className:"bubble",style:r,children:t[p].val})]})})}),[t]);return Object(j.jsx)(j.Fragment,{children:"input"===l?w:"select"===l?S:F})}var m=c.a.memo(O);function f(e){var a=e.msgResponse,t=e.onAddToFeedbackRef;return Object(j.jsx)("div",{className:"invalid-feedback",ref:t,children:"ok"===a?"":a})}var h=c.a.memo(f),y=c.a.forwardRef((function(e,a){var t=e.onType,c=e.onSubmit,o=Object(n.useContext)(R),s=o.onAddToFeedbackRef.addToFeedbackRef,r=o.onState,i=r.name,l=r.preparation_time,d=r.type,p=r.no_of_slices,u=r.diameter,b=r.spiciness_scale,O=r.slices_of_bread,f=Object(j.jsxs)("div",{children:[Object(j.jsx)(m,{onTagType:"input",onTitle:"No of slices",onName:"no_of_slices",onType:"number",onID:"no_of_slices",onClass:"form-control",onPlaceHold:null,onStep:1,onAria:"no_of_slices",onRequired:"pizza"===t,onDataSizing:null,onMin:1,onMax:null}),Object(j.jsx)(h,{msgResponse:p.check,onAddToFeedbackRef:s}),Object(j.jsx)(m,{onTagType:"input",onTitle:"diameter",onName:"diameter",onType:"number",onID:"diameter",onClass:"form-control",onPlaceHold:null,onStep:.1,onAria:"diameter",onRequired:"pizza"===t,onDataSizing:null,onMin:.1,onMax:null}),Object(j.jsx)(h,{msgResponse:u.check,onAddToFeedbackRef:s})]}),y=Object(j.jsxs)("div",{children:[Object(j.jsx)(m,{onTagType:"range",onTitle:"Spiciness scale",onName:"spiciness_scale",onType:"range",onID:"spiciness_scale",onClass:"form-control form-control-range",onPlaceHold:null,onStep:1,onAria:"spiciness_scale",onRequired:"soup"===t,onDataSizing:"px",onMin:1,onMax:10}),Object(j.jsx)(h,{msgResponse:b.check,onAddToFeedbackRef:s})]}),_=Object(j.jsxs)("div",{children:[Object(j.jsx)(m,{onTagType:"input",onTitle:"No of slices",onName:"slices_of_bread",onType:"number",onID:"slices_of_bread",onClass:"form-control",onPlaceHold:null,onStep:1,onAria:"slices_of_bread",onRequired:"sandwich"===t,onDataSizing:null,onMin:1,onMax:null}),Object(j.jsx)(h,{msgResponse:O.check,onAddToFeedbackRef:s})]});return Object(j.jsxs)("form",{id:"dishes-form",children:[Object(j.jsxs)("div",{className:"row center",children:[Object(j.jsx)(m,{onTagType:"input",onTitle:"Dish name",onName:"name",onType:"text",onID:"name",onClass:"form-control",onPlaceHold:"Type dish name",onStep:null,onAria:"name",onRequired:!0,onDataSizing:null,onMin:null,onMax:null,onPattern:null}),Object(j.jsx)(h,{msgResponse:i.check,onAddToFeedbackRef:s}),Object(j.jsx)(m,{onTagType:"input",onTitle:"Preparation time",onName:"preparation_time",onType:"time",onID:"preparation_time",onClass:"form-control",onPlaceHold:null,onStep:1,onAria:"preparation_time",onRequired:!0,onDataSizing:null,onMin:null,onMax:null,onPattern:"[0-9]{2}:[0-9]{2}:[0-9]{2}"}),Object(j.jsx)(h,{msgResponse:l.check,onAddToFeedbackRef:s}),Object(j.jsx)(m,{onTagType:"select",onTitle:"Type",onName:"type",onID:"type",onClass:"form-control form-control-lg",onOptionNames:["default","pizza","soup","sandwich"],onPlaceHold:null,onAria:"type",onRequired:!0}),Object(j.jsx)(h,{msgResponse:d.check,onAddToFeedbackRef:s}),"pizza"===t?f:"soup"===t?y:"sandwich"===t?_:""]}),Object(j.jsx)("div",{className:"row center",children:Object(j.jsx)("div",{className:"buttons col",children:Object(j.jsx)("button",{type:"submit",className:"btn btn-check",ref:a,onClick:c,children:"Submit"})})})]})})),_=c.a.memo(y),v=(t(51),t(52),t(15)),g=t.n(v),k=function(e){var a=Object(n.useRef)([]),t=Object(n.useRef)(),c=function(e){return t.current="",e.length<8&&(e+=":00"),e<"00:15:00"&&(t.current="We need at least 15 min to prepare the dish!"),new RegExp(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/).test(e)};return{onValidation:function(n,o){return a.current=[],new Promise((function(s,r){var i=0;for(var l in n){i++;var d=n[l].val.split(" ").join("");switch(d||(a.current.push(!1),e({type:"".concat(l,"_check"),payload:"This field has to be filled in"}),s(a.current)),n[l].sort){case"text":g.a.isAlpha(d)?(a.current.push(!0),e({type:"".concat(l,"_check"),payload:"ok"})):(a.current.push(!1),e({type:"".concat(l,"_check"),payload:"Please use only letters"}));break;case"intNumber":case"floatNumber":g.a.isNumeric(d)?(a.current.push(!0),e({type:"".concat(l,"_check"),payload:"ok"})):(a.current.push(!1),e({type:"".concat(l,"_check"),payload:"Please use only numbers"}));break;case"time":c(d)?c(d)&&""!==t.current?(a.current.push(!1),e({type:"".concat(l,"_check"),payload:t.current})):(a.current.push(!0),e({type:"".concat(l,"_check"),payload:"ok"})):(a.current.push(!1),e({type:"".concat(l,"_check"),payload:"Please use only numbers in time format"}))}i>=o&&s(a.current)}}))}}},x=t(41),T=t.n(x),R=c.a.createContext(),N={name:{val:"",sort:"text",check:""},preparation_time:{val:"00:15:00",sort:"time",check:""},type:{val:"",sort:"text",check:""},no_of_slices:{val:"1",sort:"intNumber",check:""},diameter:{val:"0.1",sort:"floatNumber",check:""},spiciness_scale:{val:"1",sort:"intNumber",check:""},slices_of_bread:{val:"1",sort:"intNumber",check:""},outputStyle:{left:"0%"},photoName:"",sizeOfSubmittedObject:0,validationFinished:"not",finalResponse:"",loading:!1,id:0},S=function(e,a){switch(a.type){case"name":return Object(u.a)(Object(u.a)({},e),{},{name:Object(u.a)(Object(u.a)({},e.name),{},{val:a.payload})});case"name_check":return Object(u.a)(Object(u.a)({},e),{},{name:Object(u.a)(Object(u.a)({},e.name),{},{check:a.payload})});case"preparation_time":return Object(u.a)(Object(u.a)({},e),{},{preparation_time:Object(u.a)(Object(u.a)({},e.preparation_time),{},{val:a.payload})});case"preparation_time_check":return Object(u.a)(Object(u.a)({},e),{},{preparation_time:Object(u.a)(Object(u.a)({},e.preparation_time),{},{check:a.payload})});case"type":return Object(u.a)(Object(u.a)({},e),{},{type:Object(u.a)(Object(u.a)({},e.type),{},{val:a.payload})});case"type_check":return Object(u.a)(Object(u.a)({},e),{},{type:Object(u.a)(Object(u.a)({},e.type),{},{check:a.payload})});case"no_of_slices":return Object(u.a)(Object(u.a)({},e),{},{no_of_slices:Object(u.a)(Object(u.a)({},e.no_of_slices),{},{val:a.payload})});case"no_of_slices_check":return Object(u.a)(Object(u.a)({},e),{},{no_of_slices:Object(u.a)(Object(u.a)({},e.no_of_slices),{},{check:a.payload})});case"diameter":return Object(u.a)(Object(u.a)({},e),{},{diameter:Object(u.a)(Object(u.a)({},e.diameter),{},{val:a.payload})});case"diameter_check":return Object(u.a)(Object(u.a)({},e),{},{diameter:Object(u.a)(Object(u.a)({},e.diameter),{},{check:a.payload})});case"spiciness_scale":return Object(u.a)(Object(u.a)({},e),{},{spiciness_scale:Object(u.a)(Object(u.a)({},e.spiciness_scale),{},{val:a.payload})});case"spiciness_scale_check":return Object(u.a)(Object(u.a)({},e),{},{spiciness_scale:Object(u.a)(Object(u.a)({},e.spiciness_scale),{},{check:a.payload})});case"slices_of_bread":return Object(u.a)(Object(u.a)({},e),{},{slices_of_bread:Object(u.a)(Object(u.a)({},e.slices_of_bread),{},{val:a.payload})});case"slices_of_bread_check":return Object(u.a)(Object(u.a)({},e),{},{slices_of_bread:Object(u.a)(Object(u.a)({},e.slices_of_bread),{},{check:a.payload})});case"validationFinished":return Object(u.a)(Object(u.a)({},e),{},{validationFinished:a.payload});case"validationSuccess":return Object(u.a)(Object(u.a)({},e),{},{validationSuccess:a.payload});case"sizeOfSubmittedObject":return Object(u.a)(Object(u.a)({},e),{},{sizeOfSubmittedObject:a.payload});case"photo":return Object(u.a)(Object(u.a)({},e),{},{photoName:a.payload});case"outputStyle":return Object(u.a)(Object(u.a)({},e),{},{outputStyle:Object(u.a)(Object(u.a)({},e.outputStyle),{},{left:a.payload})});case"finalResponse":return Object(u.a)(Object(u.a)({},e),{},{finalResponse:a.payload});case"loading":return Object(u.a)(Object(u.a)({},e),{},{loading:a.payload});case"idIncrement":return Object(u.a)(Object(u.a)({},e),{},{id:parseInt(e.id)+a.payload});case"reset":return Object(u.a)(Object(u.a)({},e),{},{name:Object(u.a)(Object(u.a)({},e.name),{},{val:""}),preparation_time:Object(u.a)(Object(u.a)({},e.preparation_time),{},{val:"00:15:00"}),type:Object(u.a)(Object(u.a)({},e.type),{},{val:""}),no_of_slices:Object(u.a)(Object(u.a)({},e.no_of_slices),{},{val:"1"}),diameter:Object(u.a)(Object(u.a)({},e.diameter),{},{val:"0.1"}),slices_of_bread:Object(u.a)(Object(u.a)({},e.slices_of_bread),{},{val:"1"}),spiciness_scale:Object(u.a)(Object(u.a)({},e.spiciness_scale),{},{val:"1"}),photoName:""});default:return e}};var w=function(){var e=Object(n.useReducer)(S,N),a=Object(p.a)(e,2),c=a[0],o=a[1],s=k(o).onValidation,r=Object(n.useRef)([]),b=Object(n.useRef)([]),O=Object(n.useRef)({}),m=Object(n.useRef)(),f=Object(n.useRef)(),h=Object(n.useRef)(),y=Object(n.useRef)(),v=c.name,g=c.preparation_time,x=c.type,w=c.no_of_slices,F=c.diameter,z=c.spiciness_scale,C=c.slices_of_bread,A=c.photoName,D=c.validationFinished,L=c.finalResponse,P=c.outputStyle,M=c.loading,I=c.id;Object(n.useEffect)((function(){if("ok"===D){O.current=Object(u.a)(Object(u.a)({},O.current),{},{id:I}),O.current=JSON.stringify(O.current),h.current.classList.add("hidden","no-display"),r.current.forEach((function(e){e.classList.remove("inCorrect"),e.classList.add("correct")})),b.current.forEach((function(e){e.classList.add("afterValidation")}));var e={method:"POST",url:"https://frosty-wood-6558.getsandbox.com:443/dishes",headers:{"Content-type":"application/json"},data:O.current};m.current.classList.remove("bad"),m.current.classList.add("wait"),o({type:"loading",payload:!0}),y.current.disabled=!0,T()(e).then((function(e){o({type:"loading",payload:!1}),m.current.classList.remove("wait"),m.current.classList.add("fine"),o({type:"reset",payload:""}),o({type:"finalResponse",payload:"Your order has been sent succefully!"}),y.current.disabled=!1})).catch((function(e){o({type:"loading",payload:!1}),m.current.classList.remove("wait"),m.current.classList.add("bad"),o({type:"finalResponse",payload:e.message}),y.current.disabled=!1}))}}),[I]),Object(n.useEffect)((function(){"ok"===D?o({type:"idIncrement",payload:1}):"error"===D&&(m.current.classList.remove("fine"),m.current.classList.add("bad"),r.current.forEach((function(e){var a=e.getAttribute("name");"ok"===c[a].check?(e.classList.remove("inCorrect"),e.classList.add("correct")):(e.classList.remove("correct"),e.classList.add("inCorrect"))})),o({type:"finalResponse",payload:"There is a mistake!"}))}),[D]);var q=Object(n.useCallback)((function(e,a,t,n){var c=getComputedStyle(a.target),s=parseFloat(c.paddingLeft)+parseFloat(c.paddingRight),r=parseFloat(a.target.clientWidth-s);if(void 0!==a&&null!==a){var i=parseInt(a.target.getAttribute("min")-1),l=parseInt(a.target.getAttribute("max"));i<0&&(i*=-1);var d=(parseInt(e)+i)/(i+l)+n;return o({type:"outputStyle",payload:r*parseFloat(d)-7}),!1}}),[z,P]),E=function(e){return new Promise((function(a,t){var n={name:v,preparation_time:g,type:x};switch(e){case"pizza":a(Object(u.a)(Object(u.a)({},n),{},{no_of_slices:w,diameter:F}));break;case"soup":a(Object(u.a)(Object(u.a)({},n),{},{spiciness_scale:z}));break;case"sandwich":a(Object(u.a)(Object(u.a)({},n),{},{slices_of_bread:C}));break;default:a(Object(u.a)({},n))}}))},H=function(){var e=Object(d.a)(i.a.mark((function e(a){var t,n,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),o({type:"validationFinished",payload:"not"}),e.next=4,E(x.val);case 4:return t=e.sent,n=Object.keys(t).length,o({type:"sizeOfSubmittedObject",payload:n}),e.next=9,s(t,n);case 9:for(r in c=e.sent,t)O.current=Object(u.a)(Object(u.a)({},O.current),{},Object(l.a)({},r,t[r].val));c.every((function(e){return!0===e}))?o({type:"validationFinished",payload:"ok"}):o({type:"validationFinished",payload:"error"});case 12:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),V=Object(n.useCallback)((function(e){e&&!b.current.includes(e)&&b.current.push(e)}),[]),J=Object(n.useCallback)((function(e){e&&!r.current.includes(e)&&r.current.push(e)}),[]);return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{className:"title",children:"Hungry? Let' order a delicious meal!"}),Object(j.jsxs)("div",{className:"dishes flex",ref:f,children:[Object(j.jsx)(R.Provider,{value:{onState:c,onDispatch:o,onChanging:function(e){if("not"!==D&&o({type:"finalResponse",payload:""}),o({type:e.target.name,payload:e.target.value}),"range"===e.target.type&&q(e.target.value,e,e.target.name,"px"),"type"===e.target.name)switch(h.current.classList.remove("hidden","no-display"),e.target.value){case"pizza":o({type:"photo",payload:"pizza"});break;case"soup":o({type:"photo",payload:"soup"});break;case"sandwich":o({type:"photo",payload:"sandwich"});break;default:o({type:"photo",payload:""})}},onAddToInputRef:J,onInputRef:r,onAddToFeedbackRef:V},children:Object(j.jsx)(_,{onType:x.val,onSubmit:H,ref:y})}),Object(j.jsx)("div",{className:"image hidden no-display",ref:h,children:Object(j.jsx)("img",{alt:A,className:"photo",src:""!==A?t(149)("./".concat(A,".jpg")).default:"",style:{height:"auto",width:"100%",objectFit:"contain"}})})]}),Object(j.jsx)("div",{className:"answer",ref:m,children:M?"Wait...":L})]})})},F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,154)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,o=a.getLCP,s=a.getTTFB;t(e),n(e),c(e),o(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),F()},48:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){}},[[153,1,2]]]);
//# sourceMappingURL=main.bd59a627.chunk.js.map