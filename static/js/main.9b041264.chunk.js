(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},94:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(0),a=c.n(s),i=c(17),r=c.n(i),o=(c(66),c(30)),j=c(23),l=(c(67),c(102)),d=c(103),b=c(101),h=c(100),u=c(60),m=[{id:0,title:"Wavy Linen Dress",content:"Linen Dress",price:229,img:"https://media.gormanshop.com.au/catalog/product/g/g/ggfq754105i1_lilac_1_x50.jpg"},{id:1,title:"Blockwork Pleated Skirt",content:"Skirt",price:199,img:"https://media.gormanshop.com.au/catalog/product/cache/1/image/800x1200/9df78eab33525d08d6e5fb8d27136e95/g/g/ggfq572109i1_print.jpg"},{id:2,title:"Flowerbomb Dress",content:"Flower Dress",price:249,img:"https://media.gormanshop.com.au/catalog/product/g/g/ggfq373105i1_black_1_x50.jpg"}],O=c(40),p=c(7),x=c(41);c(68);function g(){var e=Object(O.a)(["\n  font-size: 25px;\n  color: ",";\n"]);return g=function(){return e},e}function f(){var e=Object(O.a)(["\n  padding: 20px;\n"]);return f=function(){return e},e}var v=x.a.div(f()),k=x.a.h4(g(),(function(e){return e.color}));function N(e){return Object(n.jsxs)("p",{children:["Stocks: ",e.stocks[e.selectedItem.id]]})}function S(){return Object(n.jsx)("div",{className:"my-alert-red",children:Object(n.jsx)("p",{children:"Don't miss your chance!!"})})}var w=function(e){var t=Object(s.useState)(!0),c=Object(j.a)(t,2),a=c[0],i=c[1];Object(s.useEffect)((function(){var e=setTimeout((function(){i(!1)}),2e3);return function(){clearTimeout(e)}}),[]);var r=Object(p.g)().id,l=Object(p.f)(),d=e.products.find((function(e){return e.id==r}));return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)(v,{children:[Object(n.jsx)(k,{className:"red",children:"Details Page"}),!0===a?Object(n.jsx)(S,{}):null]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsx)("img",{className:"product-img",src:d.img,alt:"item"})}),Object(n.jsxs)("div",{className:"col-md-6 mt-4 text-left",children:[Object(n.jsx)("h4",{className:"pt-5",children:d.title}),Object(n.jsx)("p",{children:d.content}),Object(n.jsxs)("p",{children:["$",d.price]}),Object(n.jsx)(N,{stocks:e.stocks,selectedItem:d}),Object(n.jsx)("button",{className:"btn btn-danger",onClick:function(){var t=Object(o.a)(e.stocks);t[d.id]=t[d.id]-1,e.setstocks(t)},children:"BUY"}),Object(n.jsx)("button",{className:"btn btn-primary ml-1",onClick:function(){l.goBack()},children:"Go Back"})]})]})]})},y=c(18),D=c(57),B=c.n(D);function C(e){return Object(n.jsxs)("div",{className:"col-md-4",children:[Object(n.jsx)(y.b,{to:"/details/"+e.products.id,children:Object(n.jsx)("img",{className:"hover",src:e.products.img,alt:"item"})}),Object(n.jsx)("h4",{className:"pt-3",children:e.products.title}),Object(n.jsxs)("p",{children:[e.products.content," & $",e.products.price]})]})}var F=function(){var e=Object(s.useState)(m),t=Object(j.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)(!1),r=Object(j.a)(i,2),O=r[0],x=r[1],g=Object(s.useState)([10,11,12]),f=Object(j.a)(g,2),v=f[0],k=f[1],N=Object(p.f)();return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)(l.a,{bg:"light",expand:"lg",children:[Object(n.jsx)(l.a.Brand,{children:Object(n.jsx)(y.b,{to:"/",children:"Gorman"})}),Object(n.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(n.jsxs)(d.a,{className:"ml-auto",children:[Object(n.jsx)(d.a.Link,{as:y.b,to:"/",children:"Home"}),Object(n.jsx)(d.a.Link,{as:y.b,to:"/details/0",children:"Details"}),Object(n.jsxs)(b.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(n.jsx)(b.a.Item,{href:"#action/3.1",children:"Action"}),Object(n.jsx)(b.a.Item,{href:"#action/3.2",children:"Another action"}),Object(n.jsx)(b.a.Item,{href:"#action/3.3",children:"Something"}),Object(n.jsx)(b.a.Divider,{}),Object(n.jsx)(b.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]}),Object(n.jsxs)(p.c,{children:[Object(n.jsxs)(p.a,{exact:!0,path:"/",children:[Object(n.jsxs)(h.a,{className:"jb-bg",children:[Object(n.jsx)("h1",{children:"20% Season OFF"}),Object(n.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(n.jsx)("p",{children:Object(n.jsx)(u.a,{variant:"primary",children:"Learn more"})})]}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[c.map((function(e,t){return Object(n.jsx)(C,{products:c[t]},t)})),!0===O?Object(n.jsx)("div",{className:"col-md-12",children:Object(n.jsx)("p",{className:"text-center",children:"Loading..."})}):null,Object(n.jsx)("button",{className:"btn btn-primary mx-auto",onClick:function(){x(!0),B.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){setTimeout((function(){x(!1),a([].concat(Object(o.a)(c),Object(o.a)(e.data)))}),500)})).catch((function(){N.push("/error")}))},children:"More"})]})})]}),Object(n.jsx)(p.a,{path:"/details/:id",children:Object(n.jsx)(w,{products:c,stocks:v,setstocks:k})}),Object(n.jsxs)(p.a,{path:"/error",children:[Object(n.jsx)("br",{}),Object(n.jsx)("h4",{className:"red",children:"Opps! Something went wrong. Try again."}),Object(n.jsx)("button",{className:"btn btn-primary mg-auto",onClick:function(){N.goBack()},children:"Go Back"})]})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{})]})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,104)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(y.a,{children:Object(n.jsx)(F,{})})}),document.getElementById("root")),I()}},[[94,1,2]]]);
//# sourceMappingURL=main.9b041264.chunk.js.map