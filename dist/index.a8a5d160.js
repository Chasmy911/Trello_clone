!function(){let e=()=>{let t=document.querySelector(".header__time"),n=new Date,a=n.toLocaleTimeString();t.textContent=a,setTimeout(e,1e3)},t=e=>{e.classList.add("activeModal")},n=e=>{e.classList.remove("activeModal")},a=(e,t,n)=>{localStorage.setItem("todoArr",JSON.stringify(e)),localStorage.setItem("progressArr",JSON.stringify(t)),localStorage.setItem("doneArr",JSON.stringify(n))},d=(e,t,n,a,d,o)=>{e.innerText=t.length,n.innerText=a.length,d.innerText=o.length},o=e=>{e.classList.add("moveToProgressStyle")},r=(e,t)=>{if(!e||!t)return;let n=new Date,a={title:e,descr:t,data:n.toLocaleDateString(),id:Date.now()};return a},l=(e,t)=>{let n=document.createElement("div"),a=document.createElement("div"),d=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),l=document.createElement("div"),i=document.createElement("div"),c=document.createElement("div"),s=document.createElement("div"),m=document.createElement("button"),u=document.createElement("button"),p=document.createElement("button");return e.append(n),n.append(a,d,o),a.append(r,s),o.append(i,c),r.innerText=t.title,l.innerText=t.descr,i.innerText="User1",c.innerText=t.data,u.setAttribute("data-name","closeBtn"),n.setAttribute("data-todoid",t.id),p.setAttribute("data-name","moveToProgress"),n.classList.add("itemBlock"),a.classList.add("itemBlockHeader"),r.classList.add("title"),d.classList.add("itemBlockMain"),o.classList.add("itemBlockFooter"),s.classList.add("btnContainer"),m.classList.add("editBtn"),u.classList.add("delBtn"),p.classList.add("moveToProgressBtn"),e.classList.contains("todoBlockContainer")?(s.append(m,u),d.append(l,p),p.innerText=">",m.innerText="Edit",u.innerText="Delete"):e.classList.contains("progressBlockContainer")?(s.append(m,u),d.append(l),m.innerText="BACK",u.innerText="COMPLETE",m.setAttribute("data-name","moveToTodo"),u.setAttribute("data-name","moveToDone")):(s.append(u),d.append(l),u.innerText="DELETE"),n};e();let i=document.getElementById("main_block"),c=document.getElementById("main"),s=document.createElement("div"),m=document.createElement("div"),u=document.createElement("div"),p=document.createElement("div"),E=document.createElement("div"),v=document.createElement("div"),T=document.createElement("h2"),L=document.createElement("h2"),g=document.createElement("h2"),B=document.createElement("div"),f=document.createElement("div"),k=document.createElement("div"),x=document.createElement("div"),h=document.createElement("div"),A=document.createElement("div"),S=document.createElement("button"),b=document.createElement("button");i.append(s,m,u),s.append(p,x,S),m.append(E,h),u.append(v,A,b),p.append(T,B),E.append(L,f),v.append(g,k),s.classList.add("todoBlock"),m.classList.add("progressBlock"),u.classList.add("doneBlock"),p.classList.add("todoBlockHeader"),E.classList.add("progressBlockHeader"),v.classList.add("doneBlockHeader"),x.classList.add("todoBlockContainer"),h.classList.add("progressBlockContainer"),A.classList.add("doneBlockContainer"),S.classList.add("todoBlockBtn"),b.classList.add("doneBlockBtn"),B.classList.add("todoBlockHeaderAmount"),f.classList.add("progressBlockHeaderAmount"),T.innerText="TODO:",L.innerText="IN PROGRESS:",g.innerText="DONE:",S.innerText="ADD TODO",b.innerText="DELETE ALL";let D=document.createElement("div"),C=document.createElement("div"),O=document.createElement("input"),I=document.createElement("textarea"),N=document.createElement("div"),y=document.createElement("button"),H=document.createElement("button");O.setAttribute("placeholder","Title"),I.setAttribute("placeholder","Description"),c.append(D),D.append(O,I,C),C.append(N,y,H),N.innerText="Select user",y.innerText="Cancel",H.innerText="Confirm",D.classList.add("modalContainer"),O.classList.add("modalTitle"),I.classList.add("modalDescr"),C.classList.add("modalBtnContainer"),y.classList.add("modalCancelBtn"),H.classList.add("modalAddBtn"),S.addEventListener("click",()=>{t(D)}),y.addEventListener("click",()=>{O.value="",I.value="",n(D)});let J=[],P=[],M=[],w=JSON.parse(localStorage.getItem("todoArr"))||[],_=JSON.parse(localStorage.getItem("progressArr"))||[],R=JSON.parse(localStorage.getItem("doneArr"))||[];B.innerText=J.length,f.innerText=P.length,k.innerText=M.length;let q=e=>{P.push(e);let t=l(h,e);o(t),G(t),d(B,J,f,P,k,M),a(J,P,M)};H.addEventListener("click",()=>{let e=r(O.value,I.value);if(O.value&&I.value&&(O.value="",I.value="",n(D)),!e)return;J.push(e);let t=l(x,e);F(t),d(B,J,f,P,k,M),a(J,P,M)});let F=e=>{e.addEventListener("click",t=>{if("closeBtn"===t.target.dataset.name){let n=e.dataset.todoid;t.currentTarget.remove(),d(B,J=J.filter(e=>+n!=+e.id),f,P,k,M),a(J,P,M)}}),e.addEventListener("click",t=>{if("moveToProgress"===t.target.dataset.name){let n=e.dataset.todoid;t.currentTarget.remove();let o=J.find(e=>+n==+e.id);d(B,J=J.filter(e=>+n!=+e.id),f,P,k,M),q(o),a(J,P,M)}})},G=e=>{e.addEventListener("click",t=>{if("moveToTodo"===t.target.dataset.name){let n=e.dataset.todoid;t.currentTarget.remove();let o=P.find(e=>+n==+e.id),r=l(x,o);F(r),J.push(o),d(B,J,f,P=P.filter(e=>+n!=+e.id),k,M),a(J,P,M)}}),e.addEventListener("click",t=>{if("moveToDone"===t.target.dataset.name){let n=e.dataset.todoid;console.log(t.currentTarget),t.currentTarget.remove();let o=P.find(e=>+n==+e.id);l(A,o),M.push(o),d(B,J,f,P=P.filter(e=>+n!=+e.id),k,M),a(J,P,M)}})};if(w.length)for(let e of w){J.push(e);let t=l(x,e);F(t),d(B,J,f,P,k,M)}if(_.length)for(let e of _)q(e);if(R.length)for(let e of R)M.push(e),l(A,e),d(B,J,f,P,k,M)}();
//# sourceMappingURL=index.a8a5d160.js.map
