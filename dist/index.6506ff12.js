const e=()=>{let t=document.querySelector(".header__time"),n=new Date,d=n.toLocaleTimeString();t.textContent=d,setTimeout(e,1e3)},t=e=>{e.classList.add("activeModal")},n=e=>{e.classList.remove("activeModal")},d=(e,t,n)=>{localStorage.setItem("todoArr",JSON.stringify(e)),localStorage.setItem("progressArr",JSON.stringify(t)),localStorage.setItem("doneArr",JSON.stringify(n))},a=(e,t,n,d,a,o)=>{e.innerText=t.length,n.innerText=d.length,a.innerText=o.length},o=e=>{e.classList.add("moveToProgressStyle")},r=(e,t)=>{if(!e||!t)return;let n=new Date,d={title:e,descr:t,data:n.toLocaleDateString(),id:Date.now()};return d},l=(e,t)=>{let n=document.createElement("div"),d=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),l=document.createElement("div"),s=document.createElement("div"),c=document.createElement("div"),i=document.createElement("div"),m=document.createElement("button"),u=document.createElement("button"),p=document.createElement("button");return e.append(n),n.append(d,a,o),d.append(r,i),o.append(s,c),r.innerText=t.title,l.innerText=t.descr,s.innerText="User1",c.innerText=t.data,u.setAttribute("data-name","closeBtn"),n.setAttribute("data-todoid",t.id),p.setAttribute("data-name","moveToProgress"),n.classList.add("itemBlock"),d.classList.add("itemBlockHeader"),r.classList.add("title"),a.classList.add("itemBlockMain"),o.classList.add("itemBlockFooter"),i.classList.add("btnContainer"),m.classList.add("editBtn"),u.classList.add("delBtn"),p.classList.add("moveToProgressBtn"),e.classList.contains("todoBlockContainer")?(i.append(m,u),a.append(l,p),p.innerText=">",m.innerText="Edit",u.innerText="Delete"):e.classList.contains("progressBlockContainer")?(i.append(m,u),a.append(l),m.innerText="BACK",u.innerText="COMPLETE",m.setAttribute("data-name","moveToTodo"),u.setAttribute("data-name","moveToDone")):(i.append(u),n.classList.add("moveToDoneStyle"),a.append(l),u.innerText="DELETE"),n};e();const s=document.getElementById("main_block"),c=document.getElementById("main"),i=document.createElement("div"),m=document.createElement("div"),u=document.createElement("div"),p=document.createElement("div"),E=document.createElement("div"),v=document.createElement("div"),L=document.createElement("h2"),T=document.createElement("h2"),g=document.createElement("h2"),B=document.createElement("div"),k=document.createElement("div"),x=document.createElement("div"),f=document.createElement("div"),h=document.createElement("div"),A=document.createElement("div"),S=document.createElement("button"),b=document.createElement("button");s.append(i,m,u),i.append(p,f,S),m.append(E,h),u.append(v,A,b),p.append(L,B),E.append(T,k),v.append(g,x),i.classList.add("todoBlock"),m.classList.add("progressBlock"),u.classList.add("doneBlock"),p.classList.add("todoBlockHeader"),E.classList.add("progressBlockHeader"),v.classList.add("doneBlockHeader"),f.classList.add("todoBlockContainer"),h.classList.add("progressBlockContainer"),A.classList.add("doneBlockContainer"),S.classList.add("todoBlockBtn"),b.classList.add("doneBlockBtn"),B.classList.add("todoBlockHeaderAmount"),k.classList.add("progressBlockHeaderAmount"),x.classList.add("doneBlockHeaderAmount"),L.innerText="TODO:",T.innerText="IN PROGRESS:",g.innerText="DONE:",S.innerText="ADD TODO",b.innerText="DELETE ALL";const D=document.createElement("div"),C=document.createElement("div"),O=document.createElement("input"),N=document.createElement("textarea"),y=document.createElement("div"),I=document.createElement("button"),M=document.createElement("button");O.setAttribute("placeholder","Title"),N.setAttribute("placeholder","Description"),c.append(D),D.append(O,N,C),C.append(y,I,M),y.innerText="Select user",I.innerText="Cancel",M.innerText="Confirm",D.classList.add("modalContainer"),O.classList.add("modalTitle"),N.classList.add("modalDescr"),C.classList.add("modalBtnContainer"),I.classList.add("modalCancelBtn"),M.classList.add("modalAddBtn"),S.addEventListener("click",()=>{t(D),n(K)}),I.addEventListener("click",()=>{O.value="",N.value="",n(D)});let H=[],J=[],P=[],w=JSON.parse(localStorage.getItem("todoArr"))||[],_=JSON.parse(localStorage.getItem("progressArr"))||[],R=JSON.parse(localStorage.getItem("doneArr"))||[];B.innerText=H.length,k.innerText=J.length,x.innerText=P.length;const Y=e=>{J.push(e);let t=l(h,e);o(t),F(t),a(B,H,k,J,x,P),d(H,J,P)};M.addEventListener("click",()=>{let e=r(O.value,N.value);if(O.value&&N.value&&(O.value="",N.value="",n(D)),!e)return;H.push(e);let t=l(f,e);q(t),a(B,H,k,J,x,P),d(H,J,P)});const q=e=>{e.addEventListener("click",t=>{if("closeBtn"===t.target.dataset.name){let n=e.dataset.todoid;t.currentTarget.remove(),a(B,H=H.filter(e=>+n!=+e.id),k,J,x,P),d(H,J,P)}}),e.addEventListener("click",t=>{if("moveToProgress"===t.target.dataset.name){let n=e.dataset.todoid;t.currentTarget.remove();let o=H.find(e=>+n==+e.id);a(B,H=H.filter(e=>+n!=+e.id),k,J,x,P),Y(o),d(H,J,P)}})},F=e=>{e.addEventListener("click",t=>{if("moveToTodo"===t.target.dataset.name){let n=e.dataset.todoid;t.currentTarget.remove();let o=J.find(e=>+n==+e.id),r=l(f,o);q(r),H.push(o),a(B,H,k,J=J.filter(e=>+n!=+e.id),x,P),d(H,J,P)}}),e.addEventListener("click",t=>{if("moveToDone"===t.target.dataset.name){let n=e.dataset.todoid;t.currentTarget.remove();let o=J.find(e=>+n==+e.id),r=l(A,o);P.push(o),G(r),a(B,H,k,J=J.filter(e=>+n!=+e.id),x,P),d(H,J,P)}})},G=e=>{e.addEventListener("click",t=>{if("closeBtn"===t.target.dataset.name){let n=e.dataset.todoid;t.currentTarget.remove(),a(B,H,k,J,x,P=P.filter(e=>+n!=+e.id)),d(H,J,P)}})},K=document.createElement("div"),U=document.createElement("div"),j=document.createElement("div"),z=document.createElement("button"),Q=document.createElement("button");if(c.append(K),K.append(j,U),U.append(z,Q),Q.innerText="No",z.innerText="Yes",K.classList.add("modalDoneContainer"),j.classList.add("doneModalTitle"),U.classList.add("doneModalBtnContainer"),z.classList.add("doneModalYesBtn"),Q.classList.add("doneModalNoBtn"),j.innerText="Are you sure?",b.addEventListener("click",()=>{P.length&&(t(K),n(D),Q.addEventListener("click",()=>{n(K)}),z.addEventListener("click",()=>{A.innerHTML="",P.length=0,d(H,J,P),a(B,H,k,J,x,P),n(K)}))}),w.length)for(let e of w){H.push(e);let t=l(f,e);q(t),a(B,H,k,J,x,P)}if(_.length)for(let e of _)Y(e);if(R.length)for(let e of R){P.push(e);let t=l(A,e);G(t),a(B,H,k,J,x,P)}
//# sourceMappingURL=index.6506ff12.js.map
