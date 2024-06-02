"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[796],{7796:function(e,r,a){a.r(r),a.d(r,{default:function(){return x}});var n=a(4942),t=a(4165),s=a(1413),o=a(5861),l=a(9439),i=a(2791),u=a(3263),c=a(3402),m=a(5318),p=a(9434),d=a(3200),f=a(4971),h=a(456),g=a(184);u.Z.defaults.baseURL={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CLOUDINARY_BASE_URL:"https://api.cloudinary.com/v1_1/dnsacbwm2/image/upload",REACT_APP_CLOUDINARY_CLOUD_NAME:"dnsacbwm2",REACT_APP_CLOUDINARY_PRESET:"ltvgocsn",REACT_APP_SERVER_DOMAI:"/api"}.REACT_APP_SERVER_DOMAIN;var x=function(){var e=(0,h.Z)(localStorage.getItem("token")).userId,r=(0,p.I0)(),a=(0,p.v9)((function(e){return e.root})).loading,x=(0,i.useState)(""),v=(0,l.Z)(x,2),b=v[0],w=v[1],E=(0,i.useState)({firstname:"",lastname:"",email:"",age:"",mobile:"",gender:"neither",address:"",password:"",confpassword:""}),Z=(0,l.Z)(E,2),_=Z[0],N=Z[1],P=function(){var a=(0,o.Z)((0,t.Z)().mark((function a(){var n;return(0,t.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r((0,m.K4)(!0)),a.next=4,(0,f.Z)("/user/getuser/".concat(e));case 4:n=a.sent,N((0,s.Z)((0,s.Z)({},n),{},{password:"",confpassword:"",mobile:null===n.mobile?"":n.mobile,age:null===n.age?"":n.age})),w(n.pic),r((0,m.K4)(!1)),a.next=12;break;case 10:a.prev=10,a.t0=a.catch(0);case 12:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(){return a.apply(this,arguments)}}();(0,i.useEffect)((function(){P()}),[r]);var C=function(e){var r=e.target,a=r.name,t=r.value;return N((0,s.Z)((0,s.Z)({},_),{},(0,n.Z)({},a,t)))},j=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(r){var a,n,o,l,i,m,p,d,f;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r.preventDefault(),a=_.firstname,n=_.lastname,o=_.email,l=_.age,i=_.mobile,m=_.address,p=_.gender,d=_.password,f=_.confpassword,o){e.next=7;break}return e.abrupt("return",c.ZP.error("Email should not be empty"));case 7:if(!(a.length<3)){e.next=11;break}return e.abrupt("return",c.ZP.error("First name must be at least 3 characters long"));case 11:if(!(n.length<3)){e.next=15;break}return e.abrupt("return",c.ZP.error("Last name must be at least 3 characters long"));case 15:if(!(d.length<5)){e.next=19;break}return e.abrupt("return",c.ZP.error("Password must be at least 5 characters long"));case 19:if(d===f){e.next=21;break}return e.abrupt("return",c.ZP.error("Passwords do not match"));case 21:return e.next=23,c.ZP.promise(u.Z.put("/user/updateprofile",{firstname:a,lastname:n,age:l,mobile:i,address:m,gender:p,email:o,password:d},{headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{pending:"Updating profile...",success:"Profile updated successfully",error:"Unable to update profile",loading:"Updating profile..."});case 23:N((0,s.Z)((0,s.Z)({},_),{},{password:"",confpassword:""})),e.next=29;break;case 26:return e.prev=26,e.t0=e.catch(0),e.abrupt("return",c.ZP.error("Unable to update profile"));case 29:case"end":return e.stop()}}),e,null,[[0,26]])})));return function(r){return e.apply(this,arguments)}}();return(0,g.jsx)(g.Fragment,{children:a?(0,g.jsx)(d.Z,{}):(0,g.jsx)("section",{className:"register-section flex-center",children:(0,g.jsxs)("div",{className:"profile-container flex-center",children:[(0,g.jsx)("h2",{className:"form-heading",children:"Profile"}),(0,g.jsx)("img",{src:b,alt:"profile",className:"profile-pic"}),(0,g.jsxs)("form",{onSubmit:j,className:"register-form",children:[(0,g.jsxs)("div",{className:"form-same-row",children:[(0,g.jsx)("input",{type:"text",name:"firstname",className:"form-input",placeholder:"Enter your first name",value:_.firstname,onChange:C}),(0,g.jsx)("input",{type:"text",name:"lastname",className:"form-input",placeholder:"Enter your last name",value:_.lastname,onChange:C})]}),(0,g.jsxs)("div",{className:"form-same-row",children:[(0,g.jsx)("input",{type:"email",name:"email",className:"form-input",placeholder:"Enter your email",value:_.email,onChange:C}),(0,g.jsxs)("select",{name:"gender",value:_.gender,className:"form-input",id:"gender",onChange:C,children:[(0,g.jsx)("option",{value:"neither",children:"Prefer not to say"}),(0,g.jsx)("option",{value:"male",children:"Male"}),(0,g.jsx)("option",{value:"female",children:"Female"})]})]}),(0,g.jsxs)("div",{className:"form-same-row",children:[(0,g.jsx)("input",{type:"text",name:"age",className:"form-input",placeholder:"Enter your age",value:_.age,onChange:C}),(0,g.jsx)("input",{type:"text",name:"mobile",className:"form-input",placeholder:"Enter your mobile number",value:null===_||void 0===_?void 0:_.mobile,onChange:C})]}),(0,g.jsx)("textarea",{type:"text",name:"address",className:"form-input",placeholder:"Enter your address",value:_.address,onChange:C,rows:"2"}),(0,g.jsxs)("div",{className:"form-same-row",children:[(0,g.jsx)("input",{type:"password",name:"password",className:"form-input",placeholder:"Enter your password",value:_.password,onChange:C}),(0,g.jsx)("input",{type:"password",name:"confpassword",className:"form-input",placeholder:"Confirm your password",value:_.confpassword,onChange:C})]}),(0,g.jsx)("button",{type:"submit",className:"btn form-btn",children:"update"})]})]})})})}}}]);
//# sourceMappingURL=796.56f0b930.chunk.js.map