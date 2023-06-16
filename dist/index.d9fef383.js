const e=()=>{let t=document.querySelector(".header__time"),n=new Date,d=n.toLocaleTimeString();t.textContent=d,setTimeout(e,1e3)},t=e=>{e.classList.add("activeModal")},n=e=>{e.classList.remove("activeModal")},d=(e,t,n)=>{localStorage.setItem("todoArr",JSON.stringify(e)),localStorage.setItem("progressArr",JSON.stringify(t)),localStorage.setItem("doneArr",JSON.stringify(n))},a=(e,t,n,d,a,o)=>{e.innerText=t.length,n.innerText=d.length,a.innerText=o.length},o=e=>{e.classList.add("moveToProgressStyle")},l=(e,t,n)=>{if(!e||!t)return;let d=new Date,a={title:e,descr:t,data:d.toLocaleDateString(),workUser:n,id:Date.now()};return a},s=(e,t)=>{let n=document.createElement("div"),d=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),l=document.createElement("div"),s=document.createElement("div"),c=document.createElement("div"),i=document.createElement("div"),r=document.createElement("div"),m=document.createElement("button"),u=document.createElement("button"),p=document.createElement("button");return e.append(n),n.append(d,a,o),d.append(l,r),o.append(c,i),l.innerText=t.title,s.innerText=t.descr,c.innerText=t.workUser,i.innerText=t.data,u.setAttribute("data-name","closeBtn"),n.setAttribute("data-todoid",t.id),p.setAttribute("data-name","moveToProgress"),m.setAttribute("data-name","editBtn"),n.classList.add("itemBlock"),d.classList.add("itemBlockHeader"),l.classList.add("title"),a.classList.add("itemBlockMain"),o.classList.add("itemBlockFooter"),r.classList.add("btnContainer"),m.classList.add("editBtn"),u.classList.add("delBtn"),p.classList.add("moveToProgressBtn"),e.classList.contains("todoBlockContainer")?(r.append(m,u),a.append(s,p),p.innerText=">",m.innerText="Edit",u.innerText="Delete"):e.classList.contains("progressBlockContainer")?(r.append(m,u),a.append(s),m.innerText="BACK",u.innerText="COMPLETE",m.setAttribute("data-name","moveToTodo"),u.setAttribute("data-name","moveToDone")):(r.append(u),n.classList.add("moveToDoneStyle"),a.append(s),u.innerText="DELETE"),n};e();const c=document.getElementById("main_block"),i=document.getElementById("main"),r=document.createElement("div"),m=document.createElement("div"),u=document.createElement("div"),p=document.createElement("div"),E=document.createElement("div"),v=document.createElement("div"),L=document.createElement("h2"),T=document.createElement("h2"),g=document.createElement("h2"),B=document.createElement("div"),k=document.createElement("div"),h=document.createElement("div"),x=document.createElement("div"),f=document.createElement("div"),A=document.createElement("div"),b=document.createElement("button"),C=document.createElement("button");c.append(r,m,u),r.append(p,x,b),m.append(E,f),u.append(v,A,C),p.append(L,B),E.append(T,k),v.append(g,h),r.classList.add("todoBlock"),m.classList.add("progressBlock"),u.classList.add("doneBlock"),p.classList.add("todoBlockHeader"),E.classList.add("progressBlockHeader"),v.classList.add("doneBlockHeader"),x.classList.add("todoBlockContainer"),f.classList.add("progressBlockContainer"),A.classList.add("doneBlockContainer"),b.classList.add("todoBlockBtn"),C.classList.add("doneBlockBtn"),B.classList.add("todoBlockHeaderAmount"),k.classList.add("progressBlockHeaderAmount"),h.classList.add("doneBlockHeaderAmount"),L.innerText="TODO:",T.innerText="IN PROGRESS:",g.innerText="DONE:",b.innerText="ADD TODO",C.innerText="DELETE ALL";const D=document.createElement("div"),S=document.createElement("div"),M=document.createElement("input"),O=document.createElement("textarea"),y=document.createElement("select"),N=document.createElement("button"),I=document.createElement("button");M.setAttribute("placeholder","Title"),O.setAttribute("placeholder","Description"),y.classList.add("select");const H=e=>{let t=document.createElement("option");t.innerText=e,t.value=e;let n=document.createElement("option");return n.innerText=e,n.value=e,y.append(t),Y.append(n),t};fetch("https://jsonplaceholder.typicode.com/users").then(e=>e.json()).then(e=>{e.forEach(e=>{H(e.username)})}),i.append(D),D.append(M,O,S),S.append(y,N,I),N.innerText="Cancel",I.innerText="Confirm",D.classList.add("modalContainer"),M.classList.add("modalTitle"),O.classList.add("modalDescr"),S.classList.add("modalBtnContainer"),N.classList.add("modalCancelBtn"),I.classList.add("modalAddBtn"),b.addEventListener("click",()=>{t(D),n(Z),n(ed)}),N.addEventListener("click",()=>{M.value="",O.value="",n(D)});const w=document.createElement("div"),J=document.createElement("div"),P=document.createElement("input"),U=document.createElement("textarea"),Y=document.createElement("select"),_=document.createElement("button"),j=document.createElement("button");P.setAttribute("placeholder","Title"),U.setAttribute("placeholder","Description"),Y.classList.add("select"),i.append(w),w.append(P,U,J),J.append(Y,_,j),_.innerText="Cancel",j.innerText="Confirm",w.classList.add("editModalContainer"),P.classList.add("editModalTitle"),U.classList.add("editModalDescr"),J.classList.add("editModalBtnContainer"),_.classList.add("editModalCancelBtn"),j.classList.add("editModalAddBtn"),_.addEventListener("click",()=>{n(w)});let R=[],q=[],F=[],G=JSON.parse(localStorage.getItem("todoArr"))||[],K=JSON.parse(localStorage.getItem("progressArr"))||[],z=JSON.parse(localStorage.getItem("doneArr"))||[];B.innerText=R.length,k.innerText=q.length,h.innerText=F.length;const Q=e=>{q.push(e);let t=s(f,e);o(t),W(t),a(B,R,k,q,h,F),d(R,q,F)},V=e=>{e.addEventListener("click",t=>{if("closeBtn"===t.target.dataset.name){let n=e.dataset.todoid;t.currentTarget.remove(),a(B,R=R.filter(e=>+n!=+e.id),k,q,h,F),d(R,q,F)}}),e.addEventListener("click",o=>{if("moveToProgress"===o.target.dataset.name){if(q.length>5)t(ed),n(Z),n(D);else{let t=e.dataset.todoid;o.currentTarget.remove();let n=R.find(e=>+t==+e.id);a(B,R=R.filter(e=>+t!=+e.id),k,q,h,F),Q(n),d(R,q,F)}}}),e.addEventListener("click",a=>{if("editBtn"===a.target.dataset.name){let a=e.dataset.todoid,o=R.find(e=>+a==+e.id);t(w),P.value=o.title,U.value=o.descr,Y.value=o.workUser,j.addEventListener("click",()=>{o.title=P.value,o.descr=U.value,o.id=a,o.workUser=Y.value,d(R,q,F),n(w),location.reload()})}})};I.addEventListener("click",()=>{let e=l(M.value,O.value,y.value);if(M.value&&O.value&&(M.value="",O.value="",n(D)),!e)return;R.push(e);let t=s(x,e);V(t),a(B,R,k,q,h,F),d(R,q,F)});const W=e=>{e.addEventListener("click",t=>{if("moveToTodo"===t.target.dataset.name){let n=e.dataset.todoid;t.currentTarget.remove();let o=q.find(e=>+n==+e.id),l=s(x,o);V(l),R.push(o),a(B,R,k,q=q.filter(e=>+n!=+e.id),h,F),d(R,q,F)}}),e.addEventListener("click",t=>{if("moveToDone"===t.target.dataset.name){let n=e.dataset.todoid;t.currentTarget.remove();let o=q.find(e=>+n==+e.id),l=s(A,o);F.push(o),X(l),a(B,R,k,q=q.filter(e=>+n!=+e.id),h,F),d(R,q,F)}})},X=e=>{e.addEventListener("click",t=>{if("closeBtn"===t.target.dataset.name){let n=e.dataset.todoid;t.currentTarget.remove(),a(B,R,k,q,h,F=F.filter(e=>+n!=+e.id)),d(R,q,F)}})},Z=document.createElement("div"),$=document.createElement("div"),ee=document.createElement("div"),et=document.createElement("button"),en=document.createElement("button");i.append(Z),Z.append(ee,$),$.append(et,en),en.innerText="No",et.innerText="Yes",Z.classList.add("modalDoneContainer"),ee.classList.add("doneModalTitle"),$.classList.add("doneModalBtnContainer"),et.classList.add("doneModalYesBtn"),en.classList.add("doneModalNoBtn"),ee.innerText="Are you sure?",C.addEventListener("click",()=>{F.length&&(t(Z),n(D),n(ed),en.addEventListener("click",()=>{n(Z)}),et.addEventListener("click",()=>{A.innerHTML="",F.length=0,d(R,q,F),a(B,R,k,q,h,F),n(Z)}))});const ed=document.createElement("div"),ea=document.createElement("div"),eo=document.createElement("button");if(i.append(ed),ed.append(ea,eo),eo.innerText="Ok",ed.classList.add("lengthModalContainer"),ea.classList.add("lengthModalTitle"),eo.classList.add("lengthModalBtn"),ea.innerText="You can't do more than 6 things at the same time",eo.addEventListener("click",()=>{n(ed)}),G.length)for(let e of G){R.push(e);let t=s(x,e);V(t),a(B,R,k,q,h,F)}if(K.length)for(let e of K)Q(e);if(z.length)for(let e of z){F.push(e);let t=s(A,e);X(t),a(B,R,k,q,h,F)}