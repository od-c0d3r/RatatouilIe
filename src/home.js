import * as common from './common';

const content = document.querySelector('#content');
content.classList.add('d-flex', 'flex-column-reverse', 'justify-content-center', 'align-items-center', 'pt-4');

export default function homeCaller() {
  const section = common.createSection('homePage');
  section.append(
    common.createHeader('#About', 'headHighlight w-100 px-2'),
    common.createParag(`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Remy dreams of 
        becoming a great chef, despite being a rat in a 
        definitely rodent-phobic profession. He moves to Paris to follow 
        his dream, and with the help of hapless garbage boy Linguini he 
        puts his culinary skills to the test in the kitchen but he has to 
        stay in hiding at the same time, with hilarious consequences. Remy 
        eventually gets the chance to prove his culinary abilities to a great 
        food critic but is the food good?`),
    common.createParag(`Linguini and Remy meet, somehow establish trust and communication, 
        and when Linguini gets credit for a soup that the rat has saved 
        with strategic seasonings, they team up. Remy burrows into Linguini's 
        hair, is concealed by his toque, can see through its transparent sides 
        and controls Linguini by pulling on his hair as if each tuft were a joystick. 
        Together, they astonish Paris with their genius.`),
    common.createHeader('#Address', 'headHighlight w-100 px-2'),
    common.createParag('134bis Rue de Charenton, 75012 Paris, France'),
    common.createHeader('#Service options', 'headHighlight w-100 px-2'),
    common.createParag('Dine-in ~ Takeaway'),
    common.createHeader('#Hours', 'headHighlight w-100 px-2'),
    common.createPre('Tuesday    12–3PM, 7–11PM<br>Wednesday    12–3PM, 7–11PM<br>Thursday    12–3PM, 7–11PM<br>Friday    12–3PM, 7–11PM<br>Saturday    12–3PM, 7–11PM<br>Sunday    Closed<br>Monday    Closed'),
  );
  content.appendChild(section);
}
