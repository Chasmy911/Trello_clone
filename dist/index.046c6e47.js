const e=()=>{let t=document.querySelector(".header__time"),n=new Date,d=n.toLocaleTimeString();t.textContent=d,setTimeout(e,1e3)},t=(e,t)=>{let n=document.createElement("div"),d=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div"),o=document.createElement("div"),l=document.createElement("div"),r=document.createElement("div"),m=document.createElement("div"),i=document.createElement("button"),s=document.createElement("button"),u=document.createElement("button");e.append(n),n.append(d,a,c),d.append(o,i,s),a.append(l,u),c.append(r,m),o.innerText=t.title,i.innerText="Edit",s.innerText="Delete",l.innerText=t.descr,u.innerText=">",r.innerText="User1",m.innerText=t.data},n=e=>{e.classList.add("activeModal")},d=e=>{e.classList.remove("activeModal")},a=(e,t,n)=>{localStorage.setItem("todoArr",JSON.stringify(e)),localStorage.setItem("progressArr",JSON.stringify(t)),localStorage.setItem("doneArr",JSON.stringify(n))},c=(e,n,d,a,c,o,l,r,m)=>{if(c.length)for(let n of c)a.push(n),t(e,n);if(l.length)for(let e of l)o.push(e),t(n,e);if(m.length)for(let e of m)r.push(e),t(d,e)},o=(e,t)=>{if(!e||!t)return;let n=new Date,d={title:e,descr:t,data:n.toLocaleDateString(),id:Date.now()};return d};e();const l=document.getElementById("main_block"),r=document.getElementById("main"),m=document.createElement("div"),i=document.createElement("div"),s=document.createElement("div"),u=document.createElement("div"),E=document.createElement("div"),p=document.createElement("div"),v=document.createElement("h2"),L=document.createElement("h2"),g=document.createElement("h2"),T=document.createElement("div"),S=document.createElement("div"),x=document.createElement("div"),B=document.createElement("div"),f=document.createElement("div"),D=document.createElement("div"),h=document.createElement("button"),O=document.createElement("button");l.append(m,i,s),m.append(u,B,h),i.append(E,f),s.append(p,D,O),u.append(v,T),E.append(L,S),p.append(g,x),m.classList.add("todoBlock"),i.classList.add("progressBlock"),s.classList.add("doneBlock"),u.classList.add("todoBlockHeader"),E.classList.add("progressBlockHeader"),p.classList.add("doneBlockHeader"),h.classList.add("todoBlockBtn"),O.classList.add("doneBlockBtn"),v.innerText="TODO:",L.innerText="IN PROGRESS:",g.innerText="DONE:",h.innerText="ADD TODO",O.innerText="DELETE ALL";const k=document.createElement("div"),A=document.createElement("div"),b=document.createElement("input"),I=document.createElement("textarea"),N=document.createElement("div"),C=document.createElement("button"),y=document.createElement("button");b.setAttribute("placeholder","Title"),I.setAttribute("placeholder","Description"),r.append(k),k.append(b,I,A),A.append(N,C,y),N.innerText="Select user",C.innerText="Cancel",y.innerText="Confirm",k.classList.add("modalContainer"),b.classList.add("modalTitle"),I.classList.add("modalDescr"),A.classList.add("modalBtnContainer"),C.classList.add("modalCancelBtn"),y.classList.add("modalAddBtn"),h.addEventListener("click",()=>{n(k)}),C.addEventListener("click",()=>{b.value="",I.value="",d(k)});const J=[],w=[],H=[],M=JSON.parse(localStorage.getItem("todoArr"))||[],_=JSON.parse(localStorage.getItem("progressArr"))||[],R=JSON.parse(localStorage.getItem("doneArr"))||[];y.addEventListener("click",()=>{let e=o(b.value,I.value);b.value&&I.value&&(b.value="",I.value="",d(k)),e&&(J.push(e),console.log(J),t(B,e),a(J,w,H))}),document.addEventListener("DOMContentLoaded",()=>{c(B,f,D,J,M,w,_,H,R)});
//# sourceMappingURL=index.046c6e47.js.map
