const e=()=>{let t=document.querySelector(".header__time"),n=new Date,d=n.toLocaleTimeString();t.textContent=d,setTimeout(e,1e3)},t=e=>{e.classList.add("activeModal")},n=e=>{e.classList.remove("activeModal")},d=(e,t,n)=>{localStorage.setItem("todoArr",JSON.stringify(e)),localStorage.setItem("progressArr",JSON.stringify(t)),localStorage.setItem("doneArr",JSON.stringify(n))},a=(e,t,n,d,a,o)=>{e.innerText=t.length,n.innerText=d.length,a.innerText=o.length},o=e=>{e.classList.add("moveToProgressStyle")},l=(e,t)=>{if(!e||!t)return;let n=new Date,d={title:e,descr:t,data:n.toLocaleDateString(),id:Date.now()};return d},s=(e,t)=>{let n=document.createElement("div"),d=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),l=document.createElement("div"),s=document.createElement("div"),r=document.createElement("div"),c=document.createElement("div"),i=document.createElement("div"),m=document.createElement("button"),u=document.createElement("button"),p=document.createElement("button");return e.append(n),n.append(d,a,o),d.append(l,i),o.append(r,c),l.innerText=t.title,s.innerText=t.descr,r.innerText="User1",c.innerText=t.data,u.setAttribute("data-name","closeBtn"),n.setAttribute("data-todoid",t.id),p.setAttribute("data-name","moveToProgress"),n.classList.add("itemBlock"),d.classList.add("itemBlockHeader"),l.classList.add("title"),a.classList.add("itemBlockMain"),o.classList.add("itemBlockFooter"),i.classList.add("btnContainer"),m.classList.add("editBtn"),u.classList.add("delBtn"),p.classList.add("moveToProgressBtn"),e.classList.contains("todoBlockContainer")?(i.append(m,u),a.append(s,p),p.innerText=">",m.innerText="Edit",u.innerText="Delete"):e.classList.contains("progressBlockContainer")?(i.append(m,u),a.append(s),m.innerText="BACK",u.innerText="COMPLETE",m.setAttribute("data-name","moveToTodo"),u.setAttribute("data-name","moveToDone")):(i.append(u),n.classList.add("moveToDoneStyle"),a.append(s),u.innerText="DELETE"),n};e();const r=document.getElementById("main_block"),c=document.getElementById("main"),i=document.createElement("div"),m=document.createElement("div"),u=document.createElement("div"),p=document.createElement("div"),E=document.createElement("div"),v=document.createElement("div"),L=document.createElement("h2"),T=document.createElement("h2"),g=document.createElement("h2"),B=document.createElement("div"),k=document.createElement("div"),h=document.createElement("div"),x=document.createElement("div"),f=document.createElement("div"),A=document.createElement("div"),S=document.createElement("button"),b=document.createElement("button");r.append(i,m,u),i.append(p,x,S),m.append(E,f),u.append(v,A,b),p.append(L,B),E.append(T,k),v.append(g,h),i.classList.add("todoBlock"),m.classList.add("progressBlock"),u.classList.add("doneBlock"),p.classList.add("todoBlockHeader"),E.classList.add("progressBlockHeader"),v.classList.add("doneBlockHeader"),x.classList.add("todoBlockContainer"),f.classList.add("progressBlockContainer"),A.classList.add("doneBlockContainer"),S.classList.add("todoBlockBtn"),b.classList.add("doneBlockBtn"),B.classList.add("todoBlockHeaderAmount"),k.classList.add("progressBlockHeaderAmount"),h.classList.add("doneBlockHeaderAmount"),L.innerText="TODO:",T.innerText="IN PROGRESS:",g.innerText="DONE:",S.innerText="ADD TODO",b.innerText="DELETE ALL";const D=document.createElement("div"),C=document.createElement("div"),O=document.createElement("input"),M=document.createElement("textarea"),N=document.createElement("div"),y=document.createElement("button"),I=document.createElement("button");O.setAttribute("placeholder","Title"),M.setAttribute("placeholder","Description"),c.append(D),D.append(O,M,C),C.append(N,y,I),N.innerText="Select user",y.innerText="Cancel",I.innerText="Confirm",D.classList.add("modalContainer"),O.classList.add("modalTitle"),M.classList.add("modalDescr"),C.classList.add("modalBtnContainer"),y.classList.add("modalCancelBtn"),I.classList.add("modalAddBtn"),S.addEventListener("click",()=>{t(D),n(K),n(V)}),y.addEventListener("click",()=>{O.value="",M.value="",n(D)});let H=[],J=[],P=[],w=JSON.parse(localStorage.getItem("todoArr"))||[],Y=JSON.parse(localStorage.getItem("progressArr"))||[],_=JSON.parse(localStorage.getItem("doneArr"))||[];B.innerText=H.length,k.innerText=J.length,h.innerText=P.length;const R=e=>{J.push(e);let t=s(f,e);o(t),F(t),a(B,H,k,J,h,P),d(H,J,P)};I.addEventListener("click",()=>{let e=l(O.value,M.value);if(O.value&&M.value&&(O.value="",M.value="",n(D)),!e)return;H.push(e);let t=s(x,e);q(t),a(B,H,k,J,h,P),d(H,J,P)});const q=e=>{e.addEventListener("click",t=>{if("closeBtn"===t.target.dataset.name){let n=e.dataset.todoid;t.currentTarget.remove(),a(B,H=H.filter(e=>+n!=+e.id),k,J,h,P),d(H,J,P)}}),e.addEventListener("click",o=>{if("moveToProgress"===o.target.dataset.name){if(J.length>5)t(V),n(K),n(D);else{let t=e.dataset.todoid;o.currentTarget.remove();let n=H.find(e=>+t==+e.id);a(B,H=H.filter(e=>+t!=+e.id),k,J,h,P),R(n),d(H,J,P),console.log(J.length)}}})},F=e=>{e.addEventListener("click",t=>{if("moveToTodo"===t.target.dataset.name){let n=e.dataset.todoid;t.currentTarget.remove();let o=J.find(e=>+n==+e.id),l=s(x,o);q(l),H.push(o),a(B,H,k,J=J.filter(e=>+n!=+e.id),h,P),d(H,J,P)}}),e.addEventListener("click",t=>{if("moveToDone"===t.target.dataset.name){let n=e.dataset.todoid;t.currentTarget.remove();let o=J.find(e=>+n==+e.id),l=s(A,o);P.push(o),G(l),a(B,H,k,J=J.filter(e=>+n!=+e.id),h,P),d(H,J,P)}})},G=e=>{e.addEventListener("click",t=>{if("closeBtn"===t.target.dataset.name){let n=e.dataset.todoid;t.currentTarget.remove(),a(B,H,k,J,h,P=P.filter(e=>+n!=+e.id)),d(H,J,P)}})},K=document.createElement("div"),U=document.createElement("div"),j=document.createElement("div"),z=document.createElement("button"),Q=document.createElement("button");c.append(K),K.append(j,U),U.append(z,Q),Q.innerText="No",z.innerText="Yes",K.classList.add("modalDoneContainer"),j.classList.add("doneModalTitle"),U.classList.add("doneModalBtnContainer"),z.classList.add("doneModalYesBtn"),Q.classList.add("doneModalNoBtn"),j.innerText="Are you sure?",b.addEventListener("click",()=>{P.length&&(t(K),n(D),n(V),Q.addEventListener("click",()=>{n(K)}),z.addEventListener("click",()=>{A.innerHTML="",P.length=0,d(H,J,P),a(B,H,k,J,h,P),n(K)}))});const V=document.createElement("div"),W=document.createElement("div"),X=document.createElement("button");if(c.append(V),V.append(W,X),X.innerText="Ok",V.classList.add("lengthModalContainer"),W.classList.add("lengthModalTitle"),X.classList.add("lengthModalBtn"),W.innerText="You can't do more than 6 things at the same time",X.addEventListener("click",()=>{n(V)}),w.length)for(let e of w){H.push(e);let t=s(x,e);q(t),a(B,H,k,J,h,P)}if(Y.length)for(let e of Y)R(e);if(_.length)for(let e of _){P.push(e);let t=s(A,e);G(t),a(B,H,k,J,h,P)}
//# sourceMappingURL=index.54d331bf.js.map
