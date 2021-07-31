(()=>{"use strict";var e=document.querySelector("#content"),t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=document.createElement("li");return n.className="".concat(t," py-3 px-3"),n.innerHTML=e,n},n=function(e,t){var n=document.querySelector(".".concat(e));n.addEventListener("click",(function(){var e,a=document.querySelector(".homeLink"),i=document.querySelector(".menuLink"),r=document.querySelector(".contactLink");a.classList.toggle("highlight",!1),i.classList.toggle("highlight",!1),r.classList.toggle("highlight",!1),n.classList.toggle("highlight",!0),e=t,document.querySelector(".homePage").classList.toggle("d-none",!0),document.querySelector(".menuPage").classList.toggle("d-none",!0),document.querySelector(".contactPage").classList.toggle("d-none",!0),document.querySelector(".".concat(e)).classList.toggle("d-none",!1)}))};var a=function(e){var t=document.createElement("section");return t.className="page ".concat(e," d-flex flex-column justify-content-center align-items-center mb-4 pt-3 px-3 highlight"),t},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=document.createElement("h2");return n.className=t,n.innerHTML=e,n},r=function(e){var t=document.createElement("p");return t.innerHTML=e,t},o=document.querySelector("#content");o.classList.add("d-flex","flex-column-reverse","justify-content-center","align-items-center","pt-4");var s=document.querySelector("#content"),c=a("menuPage"),l=function(e,t,n){var a=document.createElement("article");a.className="d-flex justify-content-between w-100";var o=document.createElement("div"),s=i(e),c=r(t);o.append(s,c);var l=document.createElement("div");l.className="cropped";var d=document.createElement("img");return d.className="img-fluid",d.src=n,l.appendChild(d),a.append(o,l),a};var d=document.querySelector("#content"),u=a("contactPage");var h,g,m,p,y,f,L,b,M,P;(function(){var e,t=a("homePage");t.append(i("#About","headHighlight w-100 px-2"),r("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Remy dreams of \n        becoming a great chef, despite being a rat in a \n        definitely rodent-phobic profession. He moves to Paris to follow \n        his dream, and with the help of hapless garbage boy Linguini he \n        puts his culinary skills to the test in the kitchen but he has to \n        stay in hiding at the same time, with hilarious consequences. Remy \n        eventually gets the chance to prove his culinary abilities to a great \n        food critic but is the food good?"),r("Linguini and Remy meet, somehow establish trust and communication, \n        and when Linguini gets credit for a soup that the rat has saved \n        with strategic seasonings, they team up. Remy burrows into Linguini's \n        hair, is concealed by his toque, can see through its transparent sides \n        and controls Linguini by pulling on his hair as if each tuft were a joystick. \n        Together, they astonish Paris with their genius."),i("#Address","headHighlight w-100 px-2"),r("134bis Rue de Charenton, 75012 Paris, France"),i("#Service options","headHighlight w-100 px-2"),r("Dine-in ~ Takeaway"),i("#Hours","headHighlight w-100 px-2"),("Tuesday    12–3PM, 7–11PM<br>Wednesday    12–3PM, 7–11PM<br>Thursday    12–3PM, 7–11PM<br>Friday    12–3PM, 7–11PM<br>Saturday    12–3PM, 7–11PM<br>Sunday    Closed<br>Monday    Closed",(e=document.createElement("pre")).innerHTML="Tuesday    12–3PM, 7–11PM<br>Wednesday    12–3PM, 7–11PM<br>Thursday    12–3PM, 7–11PM<br>Friday    12–3PM, 7–11PM<br>Saturday    12–3PM, 7–11PM<br>Sunday    Closed<br>Monday    Closed",e)),o.appendChild(t)})(),h=i("Entrée","headHighlight w-100 px-2"),g=l("Fritura romana mista","12 €","/imgs/fritto-misto-alla-romana.jpg"),m=l("Tagliere di Norcia","11 €","/imgs/tagliere-castelluccio.jpg"),p=i("Plat","headHighlight w-100 px-2"),y=l("Fritura romana mista","11 €","/imgs/risotto-a-la-crema-di-scampi.jpg"),f=l("Ratatouille","22 €","/imgs/ratatouille.jpg"),L=i("Dessert","headHighlight w-100 px-2"),b=l("Tiramisu maison","6 €","/imgs/tiramisu.png"),M=l("Pizza Nutella et orange","8 €","/imgs/chocolate-orange-fruit-pizza.jpg"),P=l("Trio di fromaggi","7 €","/imgs/trio-di-formaggio.jpg"),c.classList.add("d-none"),c.append(h,g,m,p,y,f,L,b,M,P),s.appendChild(c),function(){var e=i("#Phone","headHighlight w-100 px-2"),t=r("+33 1 40 19 04 10"),n=i("#Reservations","headHighlight w-100 px-2"),a=document.createElement("a");a.href="http://thefork.fr",a.innerHTML="thefork.fr";var o=r(a.outerHTML);u.classList.add("d-none"),u.append(e,t,n,o),d.appendChild(u)}(),function(){var a=document.createElement("header"),i=document.createElement("ul");a.classList.add("header","d-flex","justify-content-center"),i.className="LinksList d-flex p-0 m-0";var r=t("Home","homeLink highlight"),o=t("Menu","menuLink"),s=t("Contact","contactLink");i.innerHTML+=r.outerHTML+o.outerHTML+s.outerHTML,a.innerHTML+=i.outerHTML,e.appendChild(a),n("homeLink","homePage"),n("menuLink","menuPage"),n("contactLink","contactPage")}()})();
//# sourceMappingURL=main.js.map