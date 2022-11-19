(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(5),l=c(2),r=c(3),i=c.n(r),o=c(1);c(13),c(14);function d(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var j,u=function(e){return d("/users/".concat(e))},b=c(4),h=c.n(b),m=c(0),O=function(e){var t=e.todos,c=e.onSelect,s=e.selectedTodo;return Object(m.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"#"}),Object(m.jsx)("th",{children:Object(m.jsx)("span",{className:"icon",children:Object(m.jsx)("i",{className:"fas fa-check"})})}),Object(m.jsx)("th",{children:"Title"}),Object(m.jsx)("th",{children:" "})]})}),Object(m.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title,n=e.completed;return Object(m.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(m.jsx)("td",{className:"is-vcentered",children:t}),Object(m.jsx)("td",{className:"is-vcentered",children:n&&Object(m.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(m.jsx)("i",{className:"fas fa-check"})})}),Object(m.jsx)("td",{className:"is-vcentered is-expanded",children:Object(m.jsx)("p",{className:h()("",{"has-text-success":n,"has-text-danger":!n}),children:a})}),Object(m.jsx)("td",{className:"has-text-right is-vcentered",children:Object(m.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(m.jsx)("span",{className:"icon",children:Object(m.jsx)("i",{className:h()("far",{"fa-eye-slash":(null===s||void 0===s?void 0:s.id)===t,"fa-eye":(null===s||void 0===s?void 0:s.id)!==t})})})})})]},t)}))})]})};!function(e){e.All="all",e.Completed="completed",e.Active="active"}(j||(j={}));var x=function(e){var t=e.query,c=e.setQuery,s=e.filterType,a=e.setFilterType;return Object(m.jsxs)("form",{className:"field has-addons",children:[Object(m.jsx)("p",{className:"control",children:Object(m.jsx)("span",{className:"select",children:Object(m.jsxs)("select",{"data-cy":"statusSelect",value:s,onChange:function(e){switch(e.target.value){case j.Active:a(j.Active);break;case j.Completed:a(j.Completed);break;default:a(j.All)}},children:[Object(m.jsx)("option",{value:"all",children:"All"}),Object(m.jsx)("option",{value:"active",children:"Active"}),Object(m.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(m.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(m.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(m.jsx)("span",{className:"icon is-left",children:Object(m.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(m.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(m.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},f=(c(16),function(){return Object(m.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(m.jsx)("div",{className:"Loader__content"})})}),p=function(e){var t=e.todo,c=e.onClose,s=Object(o.useState)(null),a=Object(l.a)(s,2),r=a[0],d=a[1],j=t.id,b=t.title,O=t.completed,x=t.userId,p=function(){var e=Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(x);case 2:t=e.sent,d(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){p()}),[]),Object(m.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(m.jsx)("div",{className:"modal-background"}),r?Object(m.jsxs)("div",{className:"modal-card",children:[Object(m.jsxs)("header",{className:"modal-card-head",children:[Object(m.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(j)}),Object(m.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(m.jsxs)("div",{className:"modal-card-body",children:[Object(m.jsx)("p",{className:"block","data-cy":"modal-title",children:b}),Object(m.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(m.jsx)("strong",{className:h()({"has-text-success":O,"has-text-danger":!O}),children:O?"Done":"Planned"})," by ",Object(m.jsx)("a",{href:"mailto:".concat(null===r||void 0===r?void 0:r.email),children:null===r||void 0===r?void 0:r.name})]})]})]}):Object(m.jsx)(f,{})]})},v=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)(!1),r=Object(l.a)(a,2),u=r[0],b=r[1],h=Object(o.useState)(""),v=Object(l.a)(h,2),N=v[0],y=v[1],g=Object(o.useState)(j.All),k=Object(l.a)(g,2),C=k[0],w=k[1],S=Object(o.useState)(null),T=Object(l.a)(S,2),A=T[0],_=T[1],E=function(){var e=Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/todos");case 2:t=e.sent,s(t),b(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){E()}),[]);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"section",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"box",children:[Object(m.jsx)("h1",{className:"title",children:"Todos:"}),Object(m.jsx)("div",{className:"block",children:Object(m.jsx)(x,{query:N,setQuery:y,filterType:C,setFilterType:w})}),Object(m.jsx)("div",{className:"block",children:u?Object(m.jsx)(O,{todos:c.filter((function(e){var t=e.title.toLowerCase(),c=N.toLowerCase();return t.includes(c)})).filter((function(e){switch(C){case j.Active:return!e.completed;case j.Completed:return e.completed;default:return e}})),onSelect:_,selectedTodo:A}):Object(m.jsx)(f,{})})]})})}),A&&Object(m.jsx)(p,{todo:A,onClose:function(){return _(null)}})]})};a.a.render(Object(m.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7ddb46a8.chunk.js.map