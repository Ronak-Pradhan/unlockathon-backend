(this.webpackJsonpunlockathon=this.webpackJsonpunlockathon||[]).push([[0],{46:function(e,t,a){e.exports=a(76)},55:function(e,t,a){},56:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),s=a.n(l),c=a(15),i=a(18),o=a(8),u=a(9),m=a(14),E=a(12),d=a(11),h=a(37),p=a.n(h),f=a(13),b=a(3),v=(a(54),a(55),a(56),a(79)),g=r.a.createContext(),N=a(24),k=function(e){Object(E.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={expanded:!1},n}return Object(u.a)(a,[{key:"toggleNav",value:function(){this.setState((function(e){return{expanded:!e.expanded}}))}},{key:"renderUsername",value:function(e){return r.a.createElement("span",null,e.username)}},{key:"render",value:function(){var e=this;return r.a.createElement(v.a,{sticky:"top",collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",expanded:this.state.expanded,onToggle:function(){return e.toggleNav.bind(e)()}},r.a.createElement(N.Link,{to:"/game/"},r.a.createElement(v.a.Brand,null,"\u144c\u144e\u14aaO\u1455K\u15e9T\u157cO\u144e ")),r.a.createElement(v.a.Toggle,null),r.a.createElement(v.a.Collapse,{style:{float:"right"},onClick:function(){return e.toggleNav.bind(e)()}},r.a.createElement("ul",{className:"nav navbar-nav ml-auto navbar-left"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{activeClassName:"active",exact:!0,to:"/game/",className:"nav-link"},"GAME")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{activeClassName:"active",exact:!0,to:"/game/rules",className:"nav-link"},"RULES")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{activeClassName:"active",exact:!0,to:"/game/leaderboard",className:"nav-link"},"LEADERBOARD"))),r.a.createElement("ul",{className:"nav navbar-nav navbar-right"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"/logout",className:"nav-link"},"LOGOUT"))),r.a.createElement("ul",{className:"nav navbar-nav ml-auto navbar-right"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"/",onClick:function(e){return e.preventDefault()},className:"nav-link"},r.a.createElement(g.Consumer,null,(function(e){return r.a.createElement("span",null,"YOUR SCORE: ",e.points)})))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{activeClassName:"active",exact:!0,to:"/contactus",className:"nav-link"},"CONTACT US")))))}}]),a}(n.Component),O=function(e){Object(E.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 col-md-12 col-lg-12 col-xs-12 table1"},r.a.createElement("h3",{className:"text-center"},"Other Events"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Event"),r.a.createElement("th",{scope:"col"},"Relevant Links"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Crown Jewel"),r.a.createElement("td",null,r.a.createElement("a",{href:"https://crownjewel.istemanipal.com/"},"Registration Link"))),r.a.createElement("tr",{className:"pure-table-odd"},r.a.createElement("td",null,"Oasis"),r.a.createElement("td",null,r.a.createElement("a",{href:"https://forms.gle/JHeT8UBAAZahF4FSA"},"Registration Link"))),r.a.createElement("tr",{className:"pure-table-odd"},r.a.createElement("td",null,"Talk by Mr.Sunil Varkey"),r.a.createElement("td",null,r.a.createElement("a",{href:"https://forms.gle/BSeitmHQkE2bfXe2A"},"MS Teams, 4th March 6pm"))),r.a.createElement("tr",{className:"pure-table-odd"},r.a.createElement("td",null,"Talk by Mr.Khushhal Kaushik"),r.a.createElement("td",null,r.a.createElement("a",{href:"https://forms.gle/iELZ4YqCnTXpx2Hg6",style:{textDecoration:"none"}},"MS Teams, 7th March 12pm"))))))))}}]),a}(n.Component),S=a(25),_=a.n(S),x=a(42),T=a(21),y=a.n(T);function R(){var e=Object(i.a)(["\n  display: block;\n  text-align: center;\n  border-color: red;\n  margin-top:25px;\n"]);return R=function(){return e},e}var w=Object(f.css)(R()),C=function(e){Object(E.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={stuck_open:!1,hint_open:!1,fetching:!0,submitted:!1,question:"",hint:"",image:"",answer:"",message:""},n.answerSubmitHandler=n.answerSubmitHandler.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/get_question").then((function(e){return e.json()})).then((function(t){t.question?e.setState({question:t.question.question,hint:t.question.hint,image:t.question.image,fetching:!1}):e.setState({question:null,hint:null,image:null,message:t.message,fetching:!1})})).catch((function(e){return console.log(e)}))}},{key:"toggle_stuck",value:function(){this.setState((function(e){return{stuck_open:!e.stuck_open}}))}},{key:"skip",value:function(){var e=this;this.context.skips>0?y.a.fire({title:"Are you sure you want to skip this question ?",text:"You won't get any points for if you do so!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes"}).then((function(t){t.isConfirmed&&fetch("/api/skip",{method:"POST",headers:{"X-CSRFToken":e.context.csrf}}).then((function(e){return e.json()})).then((function(t){if(t.next_question){var a=t.next_question;e.setState({question:a.question,hint:a.hint,image:a.image},(function(){e.context.setSkips(t.skips),e.context.next_question()}))}else console.log(t),e.setState({question:null,hint:null,image:null,message:t.message},(function(){e.context.setSkips(t.skips),e.context.next_question()}))}))})):y.a.fire({title:"Oops, You do not have enough skips remaining!",icon:"error"})}},{key:"render_skip",value:function(){var e=this;return this.state.stuck_open?r.a.createElement("form",{id:"skip_form",onSubmit:function(e){return e.preventDefault()}},r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.skip()},disabled:this.state.submitted||0===this.context.skips},r.a.createElement("span",null,this.context.skips," skips remaining"))):r.a.createElement("div",null)}},{key:"render_hint",value:function(){return this.state.hint_open?r.a.createElement("div",{id:"hint"},r.a.createElement("h4",{style:{color:"white"}},this.state.hint),r.a.createElement("br",null)):r.a.createElement("div",null)}},{key:"answerSubmitHandler",value:function(e){var t=this;e.preventDefault(),this.setState({submitted:!0});var a=new FormData;a.append("answer",e.target.ans.value),fetch("/api/check_answer",{method:"POST",body:a,headers:{"X-CSRFToken":this.context.csrf}}).then((function(e){return e.json()})).then((function(e){"correct"===e.status?y.a.fire({title:"Correct Answer!",icon:"success"}).then((function(){null!=e.next_question?(t.context.next_question(),t.context.update_points(e.points),t.setState({question:e.next_question.question,hint:e.next_question.hint,image:e.next_question.image,answer:"",submitted:!1})):(t.context.next_question(),t.context.update_points(e.points),t.setState({question:null,hint:null,image:null,answer:null,message:e.message,submitted:!1}))})):"wrong"===e.status?(y.a.fire({title:"Wrong Answer!",icon:"error"}),t.setState({submitted:!1})):y.a.fire({title:e.status,icon:"warning",footer:"Please contact the organizers to report the error"})})).catch((function(e){return console.log(e)}))}},{key:"button_text",value:function(){return this.state.submitted?r.a.createElement("span",null,"CHECKING"):r.a.createElement("span",null,"SUBMIT")}},{key:"render_question",value:function(){var e=this;return this.state.fetching?r.a.createElement("div",null,r.a.createElement(_.a,{css:w})):this.state.question?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"question"},r.a.createElement("h2",null,"Level ",this.context.current_question," "),r.a.createElement("p",{style:{fontSize:"22px",textAlign:"center",width:"100%",height:"20%",overflowWrap:"break-word",WordWrap:"break-word",hyphens:"auto",padding:"10px"}},Object(x.a)(this.state.question)),r.a.createElement("br",null),this.state.image?r.a.createElement("img",{src:this.state.image,height:"300",width:"400",alt:""}):r.a.createElement(r.a.Fragment,null)),r.a.createElement("center",null,r.a.createElement("button",{className:"button mt-2",onClick:function(){return e.setState({hint_open:!e.state.hint_open})}},"HINT"),this.render_hint.bind(this)()),r.a.createElement("div",{className:"answer"},r.a.createElement("div",{className:"ans"},r.a.createElement("h2",null,"Answer")),r.a.createElement("form",{method:"POST",id:"answer_form",onSubmit:this.answerSubmitHandler},r.a.createElement("div",{className:"form-group field col-lg-12"},r.a.createElement("input",{onChange:function(t){return e.setState({answer:t.target.value})},value:this.state.answer,type:"text",className:"form-control",id:"answer",placeholder:"Enter Answer",name:"ans"})),r.a.createElement("button",{disabled:0===this.state.answer.length||this.state.submitted,className:"btn btn-info",type:"submit",name:"submit",value:"SUBMIT"},this.button_text.bind(this)()))),r.a.createElement("center",null,r.a.createElement("p",{className:"btn btn-primary mt-2",onClick:function(){return e.toggle_stuck.bind(e)()}},"Stuck?"),this.render_skip.bind(this)())):r.a.createElement("div",{className:"question"},r.a.createElement("h2",null,this.state.message),r.a.createElement("br",null))}},{key:"render",value:function(){return r.a.createElement("div",{id:"main"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row row1"},r.a.createElement("div",{className:"col-lg-7 col-md-7 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"question-back"},this.render_question.bind(this)())),r.a.createElement("div",{className:"col-lg-1 col-md-1"}),r.a.createElement(O,null))))}}]),a}(n.Component);C.contextType=g;var I=a(29),q=function(e){Object(E.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={page:n.props.page},n}return Object(u.a)(a,[{key:"render",value:function(){for(var e=this,t=[],a=function(a){t.push(r.a.createElement(I.a.Item,{active:a===e.props.page,onClick:function(){return e.props.changePage(a)},key:a},a))},n=1;n<=this.props.number_of_pages;n++)a(n);return r.a.createElement(I.a,{className:"justify-content-center"},t)}}]),a}(n.Component);function A(){var e=Object(i.a)(["\n  display: block;\n  text-align: center;\n  border-color: red;\n  background: linear-gradient(308deg,#d34020,#3b2ee7);\n  margin-top:25px;\n"]);return A=function(){return e},e}var j=Object(f.css)(A()),H=function(e){Object(E.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={fetching:!0,leaderboard:[],page:1},n.NUMBER_OF_ITEMS=10,n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/leaderboard").then((function(e){return e.json()})).then((function(t){e.setState({leaderboard:t.leaderboard,fetching:!1})})).catch((function(e){return console.log(e)}))}},{key:"change_page",value:function(e){this.setState({page:e})}},{key:"render_leaderbord",value:function(){var e=this;if(this.state.fetching)return r.a.createElement(_.a,{css:j});var t=this.state.leaderboard.map((function(t,a){return t.registration_number!==e.context.registration_number?r.a.createElement("tr",{key:a},r.a.createElement("td",null,a+1),r.a.createElement("td",null,t.registration_number),r.a.createElement("td",null,t.points)):r.a.createElement("tr",{className:"table-danger",key:a},r.a.createElement("td",null,a+1),r.a.createElement("td",null,t.registration_number),r.a.createElement("td",null,t.points))}));return t=t.slice((this.state.page-1)*this.NUMBER_OF_ITEMS,(this.state.page-1)*this.NUMBER_OF_ITEMS+this.NUMBER_OF_ITEMS),r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead1"},r.a.createElement("tr",{className:"tableHeader"},r.a.createElement("th",{scope:"col"},"Rank"),r.a.createElement("th",{scope:"col"},"Registration Number"),r.a.createElement("th",{scope:"col"},"Points"))),r.a.createElement("tbody",null,t)),r.a.createElement("div",{className:"text-center"},r.a.createElement(q,{changePage:this.change_page.bind(this),page:this.state.page,number_of_pages:this.state.leaderboard.length/this.NUMBER_OF_ITEMS})))}},{key:"reloadLeaderboard",value:function(){var e=this;this.setState({fetching:!0,leaderboard:[]},(function(){fetch("/api/leaderboard").then((function(e){return e.json()})).then((function(t){e.setState({leaderboard:t.leaderboard,fetching:!1})})).catch((function(e){return console.log(e)}))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"main",className:"mt-4"},r.a.createElement("div",{className:"container",style:{background:"rgba(0, 0, 0, 0.61)",opacity:"0.9",color:"white"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("div",{className:"question-back1 text-center"},r.a.createElement("button",{className:"btn btn-primary float-right",onClick:function(){return e.reloadLeaderboard()}},r.a.createElement("span",null,"\u21ba")),this.render_leaderbord.bind(this)())))))}}]),a}(n.Component);H.contextType=g;var L=function(){return r.a.createElement("div",{id:"main",className:"mt-4"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("div",{className:"question-back text-center"},r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Contact Number"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Ronak Pradhan"),r.a.createElement("td",null,r.a.createElement("a",{className:"btn btn-info",href:"https://api.WhatsApp.com/send?phone=+918342877713"},"WhatsApp (8342877713)"))),r.a.createElement("tr",null,r.a.createElement("td",null,"Bhakti Manakapure"),r.a.createElement("td",null,r.a.createElement("a",{className:"btn btn-info",href:"https://api.WhatsApp.com/send?phone=+918178006463"},"WhatsApp (8178006463)")))))))))))},U=function(){return r.a.createElement("div",{id:"main",className:"mt-4"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("div",{className:"question-back text-center"},r.a.createElement("div",{className:"table-responsive"},r.a.createElement("ul",{style:{listStyleType:"upper-roman",color:"white",textTransform:"capitalize!important"}},r.a.createElement("li",null,"THE QUESTIONS DISPLAYED REVOLVE AROUND THE STORY WHICH IS BASED IN MANIPAL."),r.a.createElement("li",null,"UNLOCK NEW PARTS OF THE STORY WITH EACH CORRECT ANSWER"),r.a.createElement("li",null,"YOU WILL HAVE TO TYPE THE ANSWERS SO MAKE SURE THERE ARE NO ERRORS IN THE SPELLINGS"),r.a.createElement("li",null,"YOU WILL BE PROVIDED WITH HINTS FOR SOME OF THE QUESTIONS TO HELP YOU IN YOUR JOURNEY"),r.a.createElement("li",null,"YOU HAVE AN UNLIMITED NUMBER OF TRIES FOR EACH QUESTION"),r.a.createElement("li",null,"YOU WILL BE PROVIDED WITH 3 SKIPS EVERYDAY. YOU WONT GET ANY POINTS FOR THE QUESTIONS YOU SKIP."),r.a.createElement("li",null,"THE ORDER OF QUESTIONS APPEARING FOR EACH PLAYER IS SAME"),r.a.createElement("li",null,"THE EVENT WILL BE LIVE TILL SUNDAY 4TH MARCH NIGHT. WINNERS WILL BE CONTACTED ON THEIR CONTACT DETAILS PROVIDED."))))))))};function M(){var e=Object(i.a)(["\n        position: fixed;\n        z-index: 999;\n        height: 2em;\n        width: 2em;\n        overflow: visible;\n        margin: auto;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n"]);return M=function(){return e},e}var D=function(e){Object(E.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={loading:!0,first_name:"",last_name:"",registration_number:"",email:"",phone:"",points:"",current_question:"",skips:"",csrf:n.getCookie("csrftoken")},n.go_to_next_question=n.go_to_next_question.bind(Object(m.a)(n)),n.update_points=n.update_points.bind(Object(m.a)(n)),n.setSkips=n.setSkips.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"getCookie",value:function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var a=document.cookie.split(";"),n=0;n<a.length;n++){var r=a[n].trim();if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return t}},{key:"componentDidMount",value:function(){var e=this;fetch("/api/get_logged_in_user").then((function(e){return e.json()})).then((function(t){e.setState({first_name:t.first_name,last_name:t.last_name,registration_number:t.registration_number,email:t.email,phone:t.phone,points:t.points,current_question:t.current_question,skips:t.skips,loading:!1,next_question:e.go_to_next_question,update_points:e.update_points,setSkips:e.setSkips})})).catch((function(e){return alert(e)}))}},{key:"go_to_next_question",value:function(){this.setState((function(e){return{current_question:e.current_question+1}}))}},{key:"update_points",value:function(e){this.setState({points:e})}},{key:"setSkips",value:function(e){this.setState({skips:e})}},{key:"render",value:function(){var e=Object(f.css)(M());return this.state.loading?r.a.createElement("div",{css:e},r.a.createElement(p.a,{css:e,size:100,color:"white"})):r.a.createElement(g.Provider,{value:this.state},r.a.createElement(k,null),r.a.createElement(b.Switch,null,r.a.createElement(b.Route,{exact:!0,path:"/game/",render:function(e){return r.a.createElement(C,e)}}),r.a.createElement(b.Route,{exact:!0,path:"/game/leaderboard",render:function(e){return r.a.createElement(H,e)}}),r.a.createElement(b.Route,{exact:!0,path:"/contactus",render:function(e){return r.a.createElement(L,null)}}),r.a.createElement(b.Route,{exact:!0,path:"/game/rules",render:function(){return r.a.createElement(U,null)}}),r.a.createElement(N.Redirect,{to:"/game/"})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,null,r.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.4bbc6cea.chunk.js.map