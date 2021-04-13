(this.webpackJsonpform=this.webpackJsonpform||[]).push([[0],{229:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),i=a(24),s=a(63),l=a(7),d={name:null,surname:null,patronymic:null,email:null,password:null,birthday:null,header:"Registration form"},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_NAME":return Object(l.a)(Object(l.a)({},e),{},{name:t.payload});case"ADD_SURNAME":return Object(l.a)(Object(l.a)({},e),{},{surname:t.payload});case"ADD_PATRONYMIC":return Object(l.a)(Object(l.a)({},e),{},{patronymic:t.payload});case"CHECK":return console.log(e),Object(l.a)({},e);case"ADD_EMAIL":return Object(l.a)(Object(l.a)({},e),{},{email:t.payload});case"ADD_PASSWORD":return Object(l.a)(Object(l.a)({},e),{},{password:t.payload});case"ADD_BIRTHDAY":return Object(l.a)(Object(l.a)({},e),{},{birthday:t.payload});case"CHANGE_HEADER":return Object(l.a)(Object(l.a)({},e),{},{header:t.payload});default:return e}},m=Object(s.b)(u),j=a(114),b=a(11),h=a(262),p=a(269),O=a(26),x=a(35),f=a(68),y=a(45),g=a(257),v=a(260),A=a(4),D=Object(g.a)((function(){return{root:{display:"flex",flexDirection:"column",alignItems:"center"}}})),w=function(e){var t=e.children,a=Object(y.a)(e,["children"]),n=D();return Object(A.jsx)(v.a,Object(l.a)(Object(l.a)({className:n.root,container:"main",maxWidth:"xs"},a),{},{children:t}))},S=Object(g.a)((function(e){return{root:{width:"100%",marginTop:e.spacing(1),display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}})),N=function(e){var t=e.children,a=Object(y.a)(e,["children"]),n=S();return Object(A.jsx)("form",Object(l.a)(Object(l.a)({className:n.root,noValidate:!0},a),{},{children:t}))},E=Object(n.forwardRef)((function(e,t){return Object(A.jsx)(p.a,Object(l.a)({variant:"outlined",margin:"normal",inputRef:t,fullWidth:!0},e))})),P=a(270),C=Object(g.a)((function(){return{root:{width:"150px",height:"50px",margin:"20px auto"}}})),R=function(e){var t=e.children,a=Object(y.a)(e,["children"]),n=C();return Object(A.jsx)(P.a,Object(l.a)(Object(l.a)({type:"submit",variant:"contained",color:"primary",className:n.root},a),{},{children:t}))},_=Object(g.a)((function(){return{textField:{width:"100%",marginTop:"20px"}}})),T=x.a().shape({surname:x.b().matches(/^([^0-9]*)$/,"Surname should not contain numbers").matches(/^([A-Za-z]*)$/,"Surname should contain latin letters only").min(3,"Surname should contain more than 3 letters").max(20,"Surname should not contain more than 20 letters").required("Surname is a required field"),name:x.b().matches(/^([^0-9]*)$/,"Name should not contain numbers").matches(/^([A-Za-z]*)$/,"Name should contain latin letters only").min(3,"Name should contain more than 3 letters").max(20,"Name should not contain more than 20 letters").required("Name is a required field"),patronymic:x.b().matches(/^([^0-9]*)$/,"Patronymic should not contain numbers").matches(/^([A-Za-z]*)$/,"Patronymic should contain latin letters only").min(3,"Patronymic should contain more than 3 letters").max(20,"Patronymic should not contain more than 20 letters").required("Patronymic is a required field")}),I={addedName:function(e){return{type:"ADD_NAME",payload:e}},addedSurname:function(e){return{type:"ADD_SURNAME",payload:e}},addedPatronymic:function(e){return{type:"ADD_PATRONYMIC",payload:e}},addedBirthday:function(e){return{type:"ADD_BIRTHDAY",payload:e}},check:function(){return{type:"CHECK"}}},q=Object(i.b)((function(e){return{name:e.name,surname:e.surname,patronymic:e.patronymic,birthday:e.birthday}}),I)((function(e){var t,a,n,r=e.addedName,c=e.addedSurname,o=e.addedPatronymic,i=e.addedBirthday,s=(e.check,e.name),d=e.surname,u=e.patronymic,m=e.birthday,j=Object(b.f)(),x=_(),y=Object(O.d)({defaultValues:{name:s,surname:d,patronymic:u},mode:"onBlur",resolver:Object(f.a)(T)}),g=y.register,v=y.handleSubmit,D=y.formState.errors;return Object(A.jsxs)(w,{children:[Object(A.jsx)(h.a,{component:"h2",variant:"h5",children:"Enter your personal data"}),Object(A.jsxs)(N,{onSubmit:v((function(){j.push("/step2")})),children:[Object(A.jsx)(E,Object(l.a)(Object(l.a)({},g("surname")),{},{type:"text",label:"Surname",name:"surname",onChange:function(e){return c(e.target.value)},error:!!D.surname,helperText:null===D||void 0===D||null===(t=D.surname)||void 0===t?void 0:t.message})),Object(A.jsx)(E,Object(l.a)(Object(l.a)({},g("name")),{},{type:"text",label:"Name",name:"name",onChange:function(e){return r(e.target.value)},error:!!D.name,helperText:null===D||void 0===D||null===(a=D.name)||void 0===a?void 0:a.message})),Object(A.jsx)(E,Object(l.a)(Object(l.a)({},g("patronymic")),{},{type:"text",label:"Patronymic",name:"patronymic",onChange:function(e){return o(e.target.value)},error:!!D.patronymic,helperText:null===D||void 0===D||null===(n=D.patronymic)||void 0===n?void 0:n.message})),Object(A.jsx)(p.a,{id:"date",label:"Birthday",type:"date",defaultValue:m,className:x.textField,onChange:function(e){return i(e.target.value)},required:!0,InputLabelProps:{shrink:!0}}),Object(A.jsx)(R,{children:"Next"})]})]})})),B=x.a().shape({email:x.b().email("Email should be correct").required("Email is a required field")}),H={addedEmail:function(e){return{type:"ADD_EMAIL",payload:e}}},M=Object(i.b)((function(e){return{email:e.email}}),H)((function(e){var t,a=e.addedEmail,n=e.email,r=Object(b.f)(),c=Object(O.d)({defaultValues:{email:n},mode:"onBlur",resolver:Object(f.a)(B)}),o=c.register,i=c.handleSubmit,s=c.formState.errors;return Object(A.jsxs)(w,{children:[Object(A.jsx)(h.a,{component:"h2",variant:"h5",children:"Enter your Email"}),Object(A.jsxs)(N,{onSubmit:i((function(){r.push("/step3")})),children:[Object(A.jsx)(E,Object(l.a)(Object(l.a)({},o("email")),{},{type:"email",label:"Email",name:"email",required:!0,onChange:function(e){return a(e.target.value)},error:!!s.email,helperText:null===s||void 0===s||null===(t=s.email)||void 0===t?void 0:t.message})),Object(A.jsx)(R,{children:"Next"})]})]})})),k=a(20),V={addedPassword:function(e){return{type:"ADD_PASSWORD",payload:e}}},$=Object(i.b)((function(e){return{password:e.password}}),V)((function(e){var t,a=e.addedPassword,r=e.password,c=Object(b.f)(),o=Object(O.d)({defaultValues:{password:r},mode:"all"}),i=o.register,s=o.handleSubmit,d=o.formState.errors,u=Object(n.useState)(!1),m=Object(k.a)(u,2),j=m[0],p=m[1],x=Object(n.useState)(!1),f=Object(k.a)(x,2),y=f[0],g=f[1];return Object(A.jsxs)(w,{children:[Object(A.jsx)(h.a,{component:"h2",variant:"h5",children:"Pick a password"}),Object(A.jsxs)(N,{onSubmit:s((function(){c.push("/endpage")})),children:[Object(A.jsx)(E,Object(l.a)(Object(l.a)({},i("password")),{},{type:"password",label:"Password",name:"password",onInput:function(e){return a(e.target.value)},error:!!d.password,helperText:null===d||void 0===d||null===(t=d.password)||void 0===t?void 0:t.message})),Object(A.jsx)(E,Object(l.a)(Object(l.a)({},i("repeatPassword")),{},{type:"password",label:"Repeat password",name:"repeatPassword",onChange:function(e){e.target.value!==r?(p(!0),g(!1)):(p(!1),g(!y))},error:j,helperText:j?"Password mismatch":null})),Object(A.jsx)(R,{disabled:!y,children:"Register"}),Object(A.jsx)(R,{onClick:s((function(){c.push("/")})),children:"\u0421heck data"})]})]})})),Y=Object(g.a)((function(e){return{root:{margin:e.spacing(3,0,5),textAlign:"center",fontSize:"30px",color:"green"}}})),z=Object(i.b)((function(e){return{header:e.header}}))((function(e){var t=e.header,a=Y();return Object(A.jsx)("div",{className:"header",children:Object(A.jsx)(h.a,{className:a.root,component:"h1",variant:"h4",children:t})})})),F=a(263),W=a(264),L=a(265),Z=a(266),G=a(267),J=a(268),K=Object(g.a)({root:{marginBottom:"30px"},table:{marginBottom:"30px"}}),U={changeHeader:function(e){return{type:"CHANGE_HEADER",payload:e}}},Q=Object(i.b)((function(e){return{state:e}}),U)((function(e){var t=e.changeHeader,a=e.state,r=K();Object(n.useEffect)((function(){t("Successful registration!")}),[t]);var c=Object.entries(a).filter((function(e){return"header"!==e[0]})).filter((function(e){return"password"!==e[0]})).filter((function(e){return null!==e[1]}));return Object(A.jsxs)(w,{children:[Object(A.jsx)(h.a,{component:"h2",variant:"h5",children:"Your personal data"}),Object(A.jsx)(F.a,{className:r.root,children:Object(A.jsxs)(W.a,{className:r.table,"aria-label":"simple table",children:[Object(A.jsx)(L.a,{children:Object(A.jsxs)(Z.a,{children:[Object(A.jsx)(G.a,{children:"Field"}),Object(A.jsx)(G.a,{align:"right",children:"Value"})]})}),Object(A.jsx)(J.a,{children:c.map((function(e){return Object(A.jsxs)(Z.a,{children:[Object(A.jsx)(G.a,{component:"th",scope:"row",children:e[0]}),Object(A.jsx)(G.a,{align:"right",children:e[1].toString()})]},e[0])}))})]})})]})}));var X=function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(z,{}),Object(A.jsx)(j.a,{children:Object(A.jsxs)(b.c,{children:[Object(A.jsx)(b.a,{exact:!0,path:"/",component:q}),Object(A.jsx)(b.a,{exact:!0,path:"/step2",component:M}),Object(A.jsx)(b.a,{exact:!0,path:"/step3",component:$}),Object(A.jsx)(b.a,{exact:!0,path:"/endpage",component:Q})]})})]})};o.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(i.a,{store:m,children:Object(A.jsx)(X,{})})}),document.getElementById("root"))}},[[229,1,2]]]);
//# sourceMappingURL=main.54cc4923.chunk.js.map