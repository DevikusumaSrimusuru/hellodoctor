"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[650],{3321:function(e,n,i){i(2791);var s=i(184);n.Z=function(){return(0,s.jsx)("h2",{className:"nothing flex-center",children:"Nothing to show"})}},6794:function(e,n,i){i.d(n,{Z:function(){return l}});i(2791);var s=i(6355),t=i(3495),r=i(1087),c=i(184),l=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("footer",{children:[(0,c.jsxs)("div",{className:"footer",children:[(0,c.jsxs)("div",{className:"footer-links",children:[(0,c.jsx)("h3",{children:"Links"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(r.OL,{to:"/",children:"Home"})}),(0,c.jsx)("li",{children:(0,c.jsx)(r.OL,{to:"/doctors",children:"Doctors"})}),(0,c.jsx)("li",{children:(0,c.jsx)(r.OL,{to:"/appointments",children:"Appointments"})}),(0,c.jsx)("li",{children:(0,c.jsx)(r.OL,{to:"/notifications",children:"Notifications"})}),(0,c.jsx)("li",{children:(0,c.jsx)(t.fO,{to:"/#contact",children:"Contact Us"})}),(0,c.jsx)("li",{children:(0,c.jsx)(r.OL,{to:"/profile",children:"Profile"})})]})]}),(0,c.jsxs)("div",{className:"social",children:[(0,c.jsx)("h3",{children:"Social links"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{className:"facebook",children:(0,c.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:(0,c.jsx)(s.tBk,{})})}),(0,c.jsx)("li",{className:"youtube",children:(0,c.jsx)("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:(0,c.jsx)(s.V2E,{})})}),(0,c.jsx)("li",{className:"instagram",children:(0,c.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:(0,c.jsx)(s.Zf_,{})})})]})]})]}),(0,c.jsxs)("div",{className:"footer-bottom",children:["Made by"," ",(0,c.jsx)("a",{href:"https://www.linkedin.com/in/devikusuma-srimusuru",target:"_blank",rel:"noreferrer",children:"Devi Kusuma"})," ","\xa9 ",(new Date).getFullYear()]})]})})}},3841:function(e,n,i){i.d(n,{Z:function(){return u}});var s=i(9439),t=i(2791),r=i(7689),c=i(1087),l=i(3495),o=i(9434),a=i(5318),d=i(3853),h=i(1213),x=i(456),j=i(184),u=function(){var e=(0,t.useState)(!1),n=(0,s.Z)(e,2),i=n[0],u=n[1],f=(0,o.I0)(),m=(0,r.s0)(),g=(0,t.useState)(localStorage.getItem("token")||""),p=(0,s.Z)(g,2),v=p[0],N=(p[1],(0,t.useState)(localStorage.getItem("token")?(0,x.Z)(localStorage.getItem("token")):"")),k=(0,s.Z)(N,2),w=k[0];k[1];return(0,j.jsxs)("header",{children:[(0,j.jsxs)("nav",{className:i?"nav-active":"",children:[(0,j.jsx)("h2",{className:"nav-logo",children:(0,j.jsx)(c.OL,{to:"/",children:(0,j.jsx)("img",{src:"/logo.png",alt:"logo",width:"200px"})})}),(0,j.jsxs)("ul",{className:"nav-links",children:[(0,j.jsx)("li",{children:(0,j.jsx)(c.OL,{to:"/",children:"Home"})}),(0,j.jsx)("li",{children:(0,j.jsx)(c.OL,{to:"/doctors",children:"Doctors"})}),v&&w.isAdmin&&(0,j.jsx)("li",{children:(0,j.jsx)(c.OL,{to:"/dashboard/users",children:"Dashboard"})}),v&&!w.isAdmin&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("li",{children:(0,j.jsx)(c.OL,{to:"/appointments",children:"Appointments"})}),(0,j.jsx)("li",{children:(0,j.jsx)(c.OL,{to:"/notifications",children:"Notifications"})}),(0,j.jsx)("li",{children:(0,j.jsx)(c.OL,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,j.jsx)("li",{children:(0,j.jsx)(l.fO,{to:"/#contact",children:"Contact Us"})}),(0,j.jsx)("li",{children:(0,j.jsx)(c.OL,{to:"/profile",children:"Profile"})})]}),v?(0,j.jsx)("li",{children:(0,j.jsx)("span",{className:"btn",onClick:function(){f((0,a.ps)({})),localStorage.removeItem("token"),m("/login")},children:"Logout"})}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("li",{children:(0,j.jsx)(c.OL,{className:"btn",to:"/login",children:"Login"})}),(0,j.jsx)("li",{children:(0,j.jsx)(c.OL,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,j.jsxs)("div",{className:"menu-icons",children:[!i&&(0,j.jsx)(d.cur,{className:"menu-open",onClick:function(){u(!0)}}),i&&(0,j.jsx)(h.ySC,{className:"menu-close",onClick:function(){u(!1)}})]})]})}},6650:function(e,n,i){i.r(n),i.d(n,{default:function(){return f}});var s=i(4165),t=i(5861),r=i(9439),c=i(2791),l=i(9434),o=i(3321),a=i(6794),d=i(3841),h=i(4971),x=i(5318),j=i(3200),u=i(184),f=function(){var e=(0,c.useState)([]),n=(0,r.Z)(e,2),i=n[0],f=n[1],m=(0,l.I0)(),g=(0,l.v9)((function(e){return e.root})).loading,p=function(){var e=(0,t.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m((0,x.K4)(!0)),e.next=4,(0,h.Z)("/notification/getallnotifs");case 4:n=e.sent,m((0,x.K4)(!1)),f(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Failed to fetch notifications:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){p()}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.Z,{}),g?(0,u.jsx)(j.Z,{}):(0,u.jsxs)("section",{className:"container",children:[(0,u.jsx)("h2",{className:"page-heading",children:"Your Notifications"}),i.length>0?(0,u.jsx)("div",{className:"notifications",children:i.map((function(e,n){return(0,u.jsxs)("div",{className:"notification-card",children:[(0,u.jsx)("p",{className:"notification-content",children:null===e||void 0===e?void 0:e.content}),(0,u.jsxs)("div",{className:"notification-date",children:[new Date(null===e||void 0===e?void 0:e.updatedAt).toLocaleDateString()," - ",new Date(null===e||void 0===e?void 0:e.updatedAt).toLocaleTimeString()]})]},null===e||void 0===e?void 0:e._id)}))}):(0,u.jsx)(o.Z,{})]}),(0,u.jsx)(a.Z,{})]})}}}]);
//# sourceMappingURL=650.6de53587.chunk.js.map