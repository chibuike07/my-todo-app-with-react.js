(this["webpackJsonpmy-todo-app"]=this["webpackJsonpmy-todo-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),l=n(2),s=n.n(l),r=n(6),m=n(3),c=n(4),i=n(7),d=n(5),u=n(8),h=(n(14),function(e){function t(){var e,n;Object(m.a)(this,t);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={todoItems:[],newTodo:""},n.handleChange=function(e){n.setState({newTodo:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.state.newTodo&&(n.state.todoItems.includes(n.state.newTodo.toLowerCase())?alert("please no duplicate todo task allowed"):n.setState({todoItems:[].concat(Object(r.a)(n.state.todoItems),[n.state.newTodo.toLowerCase()]),newTodo:""}))},n.handleRemoveOneItem=function(e){n.setState((function(t){return{todoItems:t.todoItems.filter((function(t){return t!==e}))}}))},n.handleRemoveAllItems=function(){n.setState((function(){return{todoItems:[]}}))},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t){if(t.todoItems.length!==this.state.todoItems.length){var n=JSON.stringify(this.state.todoItems);localStorage.setItem("TodoItem",n)}}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("TodoItem");if(null!==e){var t=JSON.parse(e);this.setState({todoItems:t})}}},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("div",{className:"header"},a.a.createElement("h2",null,"welcome to my todo app")),a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("label",{htmlFor:""},"todo items"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("input",{type:"text",value:this.state.newTodo,onChange:this.handleChange,placeholder:"add your Todos..."}),a.a.createElement("button",null,"submit")),a.a.createElement("div",{className:"ul"},a.a.createElement("ul",null,this.state.todoItems&&this.state.todoItems.map((function(t,n){return a.a.createElement("li",{key:n},t,a.a.createElement("button",{id:"btn",onClick:function(){return e.handleRemoveOneItem(t)}},a.a.createElement("b",{style:{fontSize:25}},"x")))})))),a.a.createElement("div",{id:"rmv"},this.handleDisplayRemoveBtn,this.state.todoItems.length>0&&a.a.createElement("button",{onClick:this.handleRemoveAllItems},"removeAll")))}}]),t}(a.a.Component));s.a.render(a.a.createElement(h,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.96a4ee07.chunk.js.map