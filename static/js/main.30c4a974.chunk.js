(this["webpackJsonptodo-list-for-austin"]=this["webpackJsonptodo-list-for-austin"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(6),r=n.n(c),i=(n(13),n(7)),l=n(1),s=n(2),d=n(4),u=n(3),m=function(e){var t=e.todos,n=e.deleteTodo,o=t.length?t.map((function(e){return a.a.createElement("div",{className:"collection-item",key:e.id},a.a.createElement("span",{onClick:function(){n(e.id)}},e.content))})):a.a.createElement("p",{className:"center"},"You have no todo's left!");return a.a.createElement("div",{className:"todos collection"},o)},h=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={content:""},e.handleChange=function(t){e.setState({content:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.addTodo(e.state),e.setState({content:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("label",null,"Add new todo:"),a.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.state.content})))}}]),n}(o.Component),f=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={todos:[{id:1,content:"buy some milk"},{id:2,content:"finish redux lessons"}]},e.addTodo=function(t){t.id=Math.random();var n=[].concat(Object(i.a)(e.state.todos),[t]);e.setState({todos:n})},e.deleteTodo=function(t){var n=e.state.todos.filter((function(e){return e.id!==t}));e.setState({todos:n})},e}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",{className:"center blue-text"},"Todo's"),a.a.createElement(m,{todos:this.state.todos,deleteTodo:this.deleteTodo}),a.a.createElement(h,{addTodo:this.addTodo}))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.30c4a974.chunk.js.map