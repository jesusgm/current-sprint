(this["webpackJsonpcurrent-sprint"]=this["webpackJsonpcurrent-sprint"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(4),r=a.n(n),i=a(2),d=a.n(i),l=(a(10),a(0));var o=function(){var e=function(e){(e=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()))).setUTCDate(e.getUTCDate()+4-(e.getUTCDay()||7));var t=new Date(Date.UTC(e.getUTCFullYear(),0,1)),a=Math.ceil(((e-t)/864e5+1)/7);return["".concat(e.getFullYear()).slice(2),a]}(new Date),t="".concat(e[0],"_").concat(e[1]%2===0?e[1]:e[1]+1),a=d()().isoWeek(e[1]%2===0?e[1]-1:e[1]).startOf("isoWeek"),s=d()().isoWeek(e[1]).endOf("isoWeek").day(-2),c=a.format("DD/MM/YYYY"),n=s.format("DD/MM/YYYY"),r=s.diff(d()(),"days");return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:t}),Object(l.jsxs)("div",{className:"dates",children:[Object(l.jsx)("div",{className:"date-start",children:c}),Object(l.jsx)("div",{className:"separator",children:" - "}),Object(l.jsx)("div",{className:"date-end",children:n})]}),Object(l.jsxs)("div",{className:"days-to-end days-".concat(r),children:["D\xedas hasta finalizaci\xf3n del sprint: ",r]})]})};a(12);r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(o,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.566e6b7b.chunk.js.map