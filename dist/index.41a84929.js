const e=()=>{let t=document.querySelector(".header__time"),n=new Date,d=n.toLocaleTimeString();t.textContent=d,setTimeout(e,1e3)},t=e=>{e.classList.add("activeModal")},n=e=>{e.classList.remove("activeModal")},d=(e,t,n)=>{localStorage.setItem("todoArr",JSON.stringify(e)),localStorage.setItem("progressArr",JSON.stringify(t)),localStorage.setItem("doneArr",JSON.stringify(n))},a=(e,t,n,d,a,o)=>{e.innerText=t.length,n.innerText=d.length,a.innerText=o.length},o=e=>{e.classList.add("moveToProgressStyle")},l=(e,t,n)=>{if(!e||!t)return;let d=new Date,a={title:e,descr:t,data:d.toLocaleDateString(),workUser:n,id:Date.now()};return a},s=(e,t)=>{let n=document.createElement("div"),d=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),l=document.createElement("div"),s=document.createElement("div"),c=document.createElement("div"),i=document.createElement("div"),r=document.createElement("div"),m=document.createElement("button"),u=document.createElement("button"),p=document.createElement("button");return e.append(n),n.append(d,a,o),d.append(l,r),o.append(c,i),l.innerText=t.title,s.innerText=t.descr,c.innerText=t.workUser,i.innerText=t.data,u.setAttribute("data-name","closeBtn"),n.setAttribute("data-todoid",t.id),p.setAttribute("data-name","moveToProgress"),m.setAttribute("data-name","editBtn"),n.classList.add("itemBlock"),d.classList.add("itemBlockHeader"),l.classList.add("title"),a.classList.add("itemBlockMain"),o.classList.add("itemBlockFooter"),r.classList.add("btnContainer"),m.classList.add("editBtn"),u.classList.add("delBtn"),p.classList.add("moveToProgressBtn"),e.classList.contains("todoBlockContainer")?(r.append(m,u),a.append(s,p),p.innerText=">",m.innerText="Edit",u.innerText="Delete"):e.classList.contains("progressBlockContainer")?(r.append(m,u),a.append(s),m.innerText="BACK",u.innerText="COMPLETE",m.setAttribute("data-name","moveToTodo"),u.setAttribute("data-name","moveToDone")):(r.append(u),n.classList.add("moveToDoneStyle"),a.append(s),u.innerText="DELETE"),n},c=(e,t,n)=>{let d=document.createElement("option");d.innerText=e,d.value=e;let a=document.createElement("option");a.innerText=e,a.value=e,t.append(d),n.append(a)};e();const i=document.getElementById("main_block"),r=document.getElementById("main"),m=document.createElement("div"),u=document.createElement("div"),p=document.createElement("div"),E=document.createElement("div"),v=document.createElement("div"),L=document.createElement("div"),T=document.createElement("h2"),g=document.createElement("h2"),B=document.createElement("h2"),k=document.createElement("div"),h=document.createElement("div"),x=document.createElement("div"),f=document.createElement("div"),A=document.createElement("div"),b=document.createElement("div"),C=document.createElement("button"),D=document.createElement("button");i.append(m,u,p),m.append(E,f,C),u.append(v,A),p.append(L,b,D),E.append(T,k),v.append(g,h),L.append(B,x),m.classList.add("todoBlock"),u.classList.add("progressBlock"),p.classList.add("doneBlock"),E.classList.add("todoBlockHeader"),v.classList.add("progressBlockHeader"),L.classList.add("doneBlockHeader"),f.classList.add("todoBlockContainer"),A.classList.add("progressBlockContainer"),b.classList.add("doneBlockContainer"),C.classList.add("todoBlockBtn"),D.classList.add("doneBlockBtn"),k.classList.add("todoBlockHeaderAmount"),h.classList.add("progressBlockHeaderAmount"),x.classList.add("doneBlockHeaderAmount"),T.innerText="TODO:",g.innerText="IN PROGRESS:",B.innerText="DONE:",C.innerText="ADD TODO",D.innerText="DELETE ALL";const S=document.createElement("div"),M=document.createElement("div"),O=document.createElement("input"),y=document.createElement("textarea"),N=document.createElement("select"),I=document.createElement("button"),H=document.createElement("button");O.setAttribute("placeholder","Title"),y.setAttribute("placeholder","Description"),N.classList.add("select"),fetch("https://jsonplaceholder.typicode.com/users").then(e=>e.json()).then(e=>{e.forEach(e=>{c(e.username,N,Y)})}),r.append(S),S.append(O,y,M),M.append(N,I,H),I.innerText="Cancel",H.innerText="Confirm",S.classList.add("modalContainer"),O.classList.add("modalTitle"),y.classList.add("modalDescr"),M.classList.add("modalBtnContainer"),I.classList.add("modalCancelBtn"),H.classList.add("modalAddBtn"),C.addEventListener("click",()=>{t(S),n(Z),n(ed)}),I.addEventListener("click",()=>{O.value="",y.value="",n(S)});const w=document.createElement("div"),J=document.createElement("div"),P=document.createElement("input"),U=document.createElement("textarea"),Y=document.createElement("select"),_=document.createElement("button"),j=document.createElement("button");P.setAttribute("placeholder","Title"),U.setAttribute("placeholder","Description"),Y.classList.add("select"),r.append(w),w.append(P,U,J),J.append(Y,_,j),_.innerText="Cancel",j.innerText="Confirm",w.classList.add("editModalContainer"),P.classList.add("editModalTitle"),U.classList.add("editModalDescr"),J.classList.add("editModalBtnContainer"),_.classList.add("editModalCancelBtn"),j.classList.add("editModalAddBtn"),_.addEventListener("click",()=>{n(w)});let R=[],q=[],F=[],G=JSON.parse(localStorage.getItem("todoArr"))||[],K=JSON.parse(localStorage.getItem("progressArr"))||[],z=JSON.parse(localStorage.getItem("doneArr"))||[];k.innerText=R.length,h.innerText=q.length,x.innerText=F.length;const Q=e=>{q.push(e);let t=s(A,e);o(t),W(t),a(k,R,h,q,x,F),d(R,q,F)},V=e=>{e.addEventListener("click",t=>{if("closeBtn"===t.target.dataset.name){let n=e.dataset.todoid;t.currentTarget.remove(),a(k,R=R.filter(e=>+n!=+e.id),h,q,x,F),d(R,q,F)}}),e.addEventListener("click",o=>{if("moveToProgress"===o.target.dataset.name){if(q.length>5)t(ed),n(Z),n(S);else{let t=e.dataset.todoid;o.currentTarget.remove();let n=R.find(e=>+t==+e.id);a(k,R=R.filter(e=>+t!=+e.id),h,q,x,F),Q(n),d(R,q,F)}}}),e.addEventListener("click",a=>{if("editBtn"===a.target.dataset.name){let a=e.dataset.todoid,o=R.find(e=>+a==+e.id);t(w),P.value=o.title,U.value=o.descr,Y.value=o.workUser,j.addEventListener("click",()=>{o.title=P.value,o.descr=U.value,o.id=a,o.workUser=Y.value,d(R,q,F),n(w),location.reload()})}})};H.addEventListener("click",()=>{let e=l(O.value,y.value,N.value);if(O.value&&y.value&&(O.value="",y.value="",n(S)),!e)return;R.push(e);let t=s(f,e);V(t),a(k,R,h,q,x,F),d(R,q,F)});const W=e=>{e.addEventListener("click",t=>{if("moveToTodo"===t.target.dataset.name){let n=e.dataset.todoid;t.currentTarget.remove();let o=q.find(e=>+n==+e.id),l=s(f,o);V(l),R.push(o),a(k,R,h,q=q.filter(e=>+n!=+e.id),x,F),d(R,q,F)}}),e.addEventListener("click",t=>{if("moveToDone"===t.target.dataset.name){let n=e.dataset.todoid;t.currentTarget.remove();let o=q.find(e=>+n==+e.id),l=s(b,o);F.push(o),X(l),a(k,R,h,q=q.filter(e=>+n!=+e.id),x,F),d(R,q,F)}})},X=e=>{e.addEventListener("click",t=>{if("closeBtn"===t.target.dataset.name){let n=e.dataset.todoid;t.currentTarget.remove(),a(k,R,h,q,x,F=F.filter(e=>+n!=+e.id)),d(R,q,F)}})},Z=document.createElement("div"),$=document.createElement("div"),ee=document.createElement("div"),et=document.createElement("button"),en=document.createElement("button");r.append(Z),Z.append(ee,$),$.append(et,en),en.innerText="No",et.innerText="Yes",Z.classList.add("modalDoneContainer"),ee.classList.add("doneModalTitle"),$.classList.add("doneModalBtnContainer"),et.classList.add("doneModalYesBtn"),en.classList.add("doneModalNoBtn"),ee.innerText="Are you sure?",D.addEventListener("click",()=>{F.length&&(t(Z),n(S),n(ed),en.addEventListener("click",()=>{n(Z)}),et.addEventListener("click",()=>{b.innerHTML="",F.length=0,d(R,q,F),a(k,R,h,q,x,F),n(Z)}))});const ed=document.createElement("div"),ea=document.createElement("div"),eo=document.createElement("button");if(r.append(ed),ed.append(ea,eo),eo.innerText="Ok",ed.classList.add("lengthModalContainer"),ea.classList.add("lengthModalTitle"),eo.classList.add("lengthModalBtn"),ea.innerText="You can't do more than 6 things at the same time",eo.addEventListener("click",()=>{n(ed)}),G.length)for(let e of G){R.push(e);let t=s(f,e);V(t),a(k,R,h,q,x,F)}if(K.length)for(let e of K)Q(e);if(z.length)for(let e of z){F.push(e);let t=s(b,e);X(t),a(k,R,h,q,x,F)}
//# sourceMappingURL=index.41a84929.js.map
