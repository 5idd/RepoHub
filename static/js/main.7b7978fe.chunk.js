(this.webpackJsonprepo=this.webpackJsonprepo||[]).push([[0],{27:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a(15),r=a.n(c),n=a(6),i=a.n(n),o=a(16),l=a(19),d=a(17),j=a(18),h=a(21),p=a(20),u=(a(27),a(0)),b=a(29),x=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).updatePage=function(){var t="https://api.github.com/search/repositories?q=language:".concat(e.state.language,"&sort=").concat(e.state.sortBy,"&order=").concat(e.state.sortOrder,"&page=").concat(e.state.currPage,"&per_page=").concat(e.state.dataPerPage);b.get(t).then((function(t){e.setState({repo:t.data.items})}))},e.searchByName=function(t){e.setState({parr:[1],currPage:1,sortBy:"stars",sortOrder:"desc"});var a="https://api.github.com/search/repositories?&q=".concat(e.state.text,"&sort=stars&order=desc&page=1&per_page=").concat(e.state.dataPerPage);b.get(a).then((function(t){e.setState({repo:t.data.items})}),e.updatePage)},e.handlePrev=function(){1!==e.state.currPage&&e.setState({currPage:e.state.currPage-1},e.updatePage)},e.handleNext=function(){if(e.state.parr.length===e.state.currPage){var t=[].concat(Object(l.a)(e.state.parr),[e.state.parr.length+1]);e.setState({parr:t,currPage:e.state.currPage+1},e.updatePage)}else e.setState({currPage:e.state.currPage+1},e.updatePage)},e.serialNavigation=function(t){e.setState({currPage:t},e.updatePage)},e.state={parr:[1],repo:[],currPage:1,language:"javascript",sortBy:"stars",sortOrder:"desc",dataPerPage:"9",text:""},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.github.com/search/repositories?q=language:".concat(this.state.language,"&sort=").concat(this.state.sortBy,"&order=").concat(this.state.sortOrder,"&page=").concat(this.state.currPage,"&per_page=").concat(this.state.dataPerPage),e.next=3,b.get(t);case 3:a=e.sent,this.setState({repo:a.data.items});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"main-header",children:"RepoHub"}),Object(u.jsxs)("h6",{className:"text-center",children:["A GitHub Repository Hub by"," ",Object(u.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/siddharth-saurav/",children:"Siddharth Saurav (IIT-BHU)"})]})]}),Object(u.jsxs)("div",{className:"options",children:[Object(u.jsxs)("select",{class:"form-select",onChange:function(t){e.setState({language:t.target.value},e.updatePage)},children:[Object(u.jsx)("option",{selected:!0,children:"Language"}),Object(u.jsx)("option",{value:"cpp",children:"C++"}),Object(u.jsx)("option",{value:"java",children:"Java"}),Object(u.jsx)("option",{value:"python",children:"Python"}),Object(u.jsx)("option",{value:"javascript",children:"Javascript"}),Object(u.jsx)("option",{value:"go",children:"Go"}),Object(u.jsx)("option",{value:"kotlin",children:"Kotlin"})]}),Object(u.jsxs)("form",{class:"row g-3",onSubmit:function(t){t.preventDefault(),e.searchByName()},children:[Object(u.jsxs)("div",{class:"col-auto",children:[Object(u.jsx)("label",{for:"inputPassword2",class:"visually-hidden",children:"Search by Name"}),Object(u.jsx)("input",{type:"text",class:"form-control",id:"inputPassword2",placeholder:"Search By Name",value:this.state.text,onChange:function(t){e.setState({text:t.target.value})}})]}),Object(u.jsx)("div",{class:"col-auto",children:Object(u.jsx)("button",{type:"submit",class:"btn btn-primary mb-3",children:"Click Me!"})})]})]}),0===this.state.repo.length?Object(u.jsx)("div",{class:"text-center",children:Object(u.jsx)("div",{class:"spinner-border",role:"status",children:Object(u.jsx)("span",{class:"visually-hidden",children:"Loading..."})})}):Object(u.jsx)("div",{className:"repo-list",children:this.state.repo.map((function(e){return Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:"card-body d-flex flex-column",children:[Object(u.jsx)("h5",{className:"card-title",children:e.name&&e.name}),Object(u.jsxs)("p",{className:"card-text",children:[Object(u.jsxs)("span",{class:"bold-text",children:["\ud83d\udc68 Owner's Name:"," "]}),e.owner.login&&e.owner.login]}),Object(u.jsxs)("p",{className:"card-text",children:[Object(u.jsxs)("span",{class:"bold-text",children:[Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",children:Object(u.jsx)("path",{fill:"none",stroke:"#000","stroke-width":"2",d:"M9,22 L15,2 M17,17 L22,12 L17,7 M7,17 L2,12 L7,7"})})," ","Language:"," "]}),e.language&&e.language]}),Object(u.jsxs)("p",{className:"card-text",children:[Object(u.jsxs)("span",{class:"bold-text",children:["\ud83d\udcd6 Description:"," "]}),e.description&&e.description.substring(0,500),e.description&&e.description.substring(0,500).length>498?"...":""]}),Object(u.jsxs)("p",{className:"card-text",children:[Object(u.jsxs)("span",{class:"bold-text",children:["\u2b50 Stars Count:"," "]}),e.stargazers_count&&e.stargazers_count]}),Object(u.jsxs)("p",{className:"card-text",children:[Object(u.jsxs)("span",{class:"bold-text",children:[Object(u.jsx)("svg",{"aria-hidden":"true",height:"16",viewBox:"0 0 16 16",version:"1.1",width:"16","data-view-component":"true",class:"octicon octicon-repo-forked color-fg-muted mr-2",children:Object(u.jsx)("path",{"fill-rule":"evenodd",d:"M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"})})," ","Fork's Count:"," "]}),e.forks_count&&e.forks_count]}),Object(u.jsx)("a",{href:e.svn_url&&e.svn_url,target:"_blank",className:"btn btn-primary mt-auto",children:"Go To Repository"})]})})}))}),Object(u.jsxs)("div",{className:"pagination-wrapper",children:[Object(u.jsxs)("div",{className:"sortWrapper",children:[Object(u.jsxs)("select",{class:"form-select sort",onChange:function(t){e.setState({sortBy:t.target.value},e.updatePage)},children:[Object(u.jsx)("option",{selected:!0,children:"Sort By"}),Object(u.jsx)("option",{value:"stars",children:"Stars"}),Object(u.jsx)("option",{value:"name",children:"Name"})]}),Object(u.jsxs)("select",{class:"form-select sort",onChange:function(t){e.setState({sortOrder:t.target.value},e.updatePage)},children:[Object(u.jsx)("option",{selected:!0,children:"Sort Order"}),Object(u.jsx)("option",{value:"asc",children:"Ascending"}),Object(u.jsx)("option",{value:"desc",children:"Descending"})]})]}),Object(u.jsx)("nav",{"aria-label":"Page navigation example",children:Object(u.jsxs)("ul",{className:"pagination",children:[Object(u.jsx)("li",{className:"page-item",children:Object(u.jsx)("a",{className:"page-link",onClick:this.handlePrev,children:"Previous"})}),this.state.parr.map((function(t){return Object(u.jsx)("li",{className:"page-item",children:Object(u.jsx)("a",{className:"page-link",onClick:function(){e.serialNavigation(t)},children:t})})})),Object(u.jsx)("li",{className:"page-item",children:Object(u.jsx)("a",{className:"page-link",onClick:this.handleNext,children:"Next"})})]})}),Object(u.jsxs)("select",{class:"form-select entries",onChange:function(t){e.setState({dataPerPage:t.target.value},e.updatePage)},children:[Object(u.jsx)("option",{selected:!0,children:"Entries per Page"}),Object(u.jsx)("option",{value:"1",children:"1"}),Object(u.jsx)("option",{value:"2",children:"2"}),Object(u.jsx)("option",{value:"3",children:"3"}),Object(u.jsx)("option",{value:"4",children:"4"}),Object(u.jsx)("option",{value:"5",children:"5"}),Object(u.jsx)("option",{value:"6",children:"6"}),Object(u.jsx)("option",{value:"7",children:"7"}),Object(u.jsx)("option",{value:"8",children:"8"}),Object(u.jsx)("option",{value:"9",children:"9"}),Object(u.jsx)("option",{value:"10",children:"10"}),Object(u.jsx)("option",{value:"11",children:"11"}),Object(u.jsx)("option",{value:"12",children:"12"}),Object(u.jsx)("option",{value:"13",children:"13"}),Object(u.jsx)("option",{value:"14",children:"14"}),Object(u.jsx)("option",{value:"15",children:"15"}),Object(u.jsx)("option",{value:"16",children:"16"}),Object(u.jsx)("option",{value:"17",children:"17"}),Object(u.jsx)("option",{value:"18",children:"18"}),Object(u.jsx)("option",{value:"19",children:"19"}),Object(u.jsx)("option",{value:"20",children:"20"})]})]})]})}}]),a}(s.Component);var g=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(x,{})})};r.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.7b7978fe.chunk.js.map