(()=>{var e={603:e=>{const t=e=>{document.getElementById("errorMessage").textContent=e,document.getElementById("domoMessage").classList.remove("hidden")};e.exports={handleError:t,sendPost:async(e,a,o)=>{const r=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),c=await r.json();console.log("result:"),console.log(c),document.getElementById("domoMessage").classList.add("hidden"),c.redirect&&(window.location=c.redirect),c.error&&t(c.error),o&&o(c)},hideError:()=>{document.getElementById("domoMessage").classList.add("hidden")}}}},t={};function a(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,a),c.exports}(()=>{const e=a(603),t=t=>{t.preventDefault(),e.hideError();const a=t.target.querySelector("#domoName").value,o=t.target.querySelector("#domoAge").value,r=t.target.querySelector("#domoChar").value,m=t.target.querySelector("#_csrf").value;return a&&o&&r?(e.sendPost(t.target.action,{name:a,age:o,characteristic:r,_csrf:m},c),!1):(e.handleError("ALl fields are requried!"),!1)},o=e=>React.createElement("form",{id:"domoForm",name:"domoForm",onSubmit:t,action:"/maker",method:"POST",className:"domoForm"},React.createElement("label",{htmlFor:"name"},"Name: "),React.createElement("input",{id:"domoName",type:"text",name:"name",placeholder:"Domo Name"}),React.createElement("label",{htmlFor:"age"},"Age: "),React.createElement("input",{id:"domoAge",type:"number",min:"0",name:"age"}),React.createElement("label",{htmlFor:"characteristic"},"Characteristic: "),React.createElement("input",{id:"domoChar",type:"text",name:"characteristic",placeholder:"characteristic"}),React.createElement("input",{id:"_csrf",type:"hidden",name:"_csrf",value:e.csrf}),React.createElement("input",{className:"makeDomoSubmit",type:"submit",value:"Make Domo"})),r=t=>{if(0===t.domos.length)return React.createElement("div",{className:"domoList"},React.createElement("h3",{className:"emptyDomo"},"No Domos Yet!"));const a=t.domos.map((t=>React.createElement("div",{key:t._id,className:"domo"},React.createElement("img",{src:"/assets/img/domoface.jpeg",alt:"domo face",className:"domoFace"}),React.createElement("h3",{className:"domoName"}," Name: ",t.name," "),React.createElement("h3",{className:"domoAge"}," Age: ",t.age," "),React.createElement("h3",{className:"domoChar"}," Characteristic: ",t.characteristic," "),React.createElement("button",{type:"button",onClick:a=>{a.target.parentElement.remove();let o=t._id;console.log("domoId: "+o),e.sendPost("/delete",{domoId:o})}},"Delete"))));return React.createElement("div",{className:"domoList"},a)},c=async()=>{const e=await fetch("/getDomos"),t=await e.json();ReactDOM.render(React.createElement(r,{domos:t.domos}),document.getElementById("domos"))};window.onload=async()=>{const e=await fetch("./getToken"),t=await e.json();ReactDOM.render(React.createElement(o,{csrf:t.csrfToken}),document.getElementById("makeDomo")),ReactDOM.render(React.createElement(r,{domos:[]}),document.getElementById("domos")),c()}})()})();