(this.webpackJsonpqtyproducts=this.webpackJsonpqtyproducts||[]).push([[0],[,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(0),o=n(1),r=n(5),i=n.n(r),s=n(3),u=n(2),j=(n(11),function(t){var e=t.setBooks,n=t.index,r=t.quantity,i=Object(o.useState)(r),j=Object(s.a)(i,2),a=j[0],b=j[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"bookQty",children:[Object(c.jsx)("button",{onClick:function(){return t=n,b(a+1),void e((function(e){return e.map((function(e){return e.id===t?Object(u.a)(Object(u.a)({},e),{},{qty:a+1}):e}))}));var t},children:"+"}),Object(c.jsx)("h2",{children:a}),Object(c.jsx)("button",{onClick:function(){return t=n,b(a-1),void e((function(e){return e.map((function(e){return e.id===t?Object(u.a)(Object(u.a)({},e),{},{qty:a-1}):e}))}));var t},children:"-"})]})})}),a=(n(12),function(t){var e=t.setBooks,n=t.title,o=t.author,r=t.qty,i=t.index;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"bookItem",children:[Object(c.jsx)("h3",{children:n}),Object(c.jsx)("h4",{children:o}),Object(c.jsx)(j,{setBooks:e,index:i,quantity:r})]})})}),b=(n(13),function(t){var e=t.books,n=t.setBooks,o=e.map((function(t,e){return Object(c.jsx)(a,Object(u.a)(Object(u.a)({},t),{},{setBooks:n,index:e}),t.isbn)}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"Books Cart"}),Object(c.jsx)("div",{className:"booksCart",children:o})]})}),d=(n(14),function(){var t=Object(o.useState)([{id:0,isbn:272827,title:"Book 1 ",author:"John D.",qty:0},{id:1,isbn:638362,title:"Book 2 ",author:"Franz W.",qty:0},{id:2,isbn:191781,title:"Book 3 ",author:"Bob T.",qty:0},{id:3,isbn:958473,title:"Book 4 ",author:"Charles W.",qty:0}]),e=Object(s.a)(t,2),n=e[0],r=e[1],i=n.map((function(t){return t.qty})).reduce((function(t,e){return t+e}));return Object(c.jsxs)("div",{className:"qtyProducts",children:[Object(c.jsx)("h1",{children:"Book Store"}),Object(c.jsx)(b,{books:n,setBooks:r}),Object(c.jsx)("div",{children:Object(c.jsxs)("h2",{children:["Your Cart: ",i," Books"]})})]})});n(15);i.a.render(Object(c.jsx)(d,{}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.4b1c8812.chunk.js.map