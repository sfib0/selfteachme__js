//
const eField = document.getElementById('email');
const pTags = document.getElementsByTagName('p');

const emailLabel = pTags[1].innerHTML;

//
const card = document.getElementById('div3');
const cardTitle = card.getElementsByTagName('p')[0].innerHTML;

//
const companyRunner = document.getElementsByTagName('p')[7].innerHTML;

//
const contactCard = document.getElementById('contact');
const contactCardContent = contactCard.getElementsByTagName("p");
const contactCardContent2 = contactCard.childNodes[3];
const phone = contactCardContent[1].innerHTML;
const phone2 = contactCardContent2.innerHTML;

/*
    <div id="contact">
[0]      <p>
[1]        name@company.com
         </p>
[2]      <p>
[3]        123456789
         </p>
    </div>
*/

console.log(phone, phone2)
//
const p = document.childNodes[0].childNodes[1].childNodes[11].childNodes[3];
console.log(p.innerHTML);

{/*
childNodes[0]: <html> 
childNodes[1]:   <body>
                   <p>Form:</p>
                   <p>Email Address:</p>
                   <input type="text" id="email" />

                   <div id="div3">
                     <p>Hi</p>
                     <p>How are you?</p>
                   </div>

                   <div id="contact">
                     <p>name@company.com</p>
                     <p>123456789</p>
                   </div>

childNodes[11]:    <div id="about">
                     <p>We are a company.</p>
childNodes[3]:       <p>Run by humans.</p>
                   </div>
                   <script defer src="./index.js"></script>
                 </body> 
              <html> 
*/}