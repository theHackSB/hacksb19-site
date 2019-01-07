
log('scripts.js loaded');
new WOW().init();
let scroll = new SmoothScroll('a[href*="#"]'),
 burger = doc.querySelector('.burger'),
  nav = doc.querySelector('#'+burger.dataset.tarid);

    burger.addEventListener('click',() => {
      burger.classList.toggle('is-active');
      nav.classList.toggle('is-active');
    });

     const addtoCal = () =>{
      window.open('https://calendar.google.com/event?action=TEMPLATE&tmeid=NnNpYmQwdHVxdGFvdjk2OWEwdmxhYWJxZ24gc2Jjb21wc2NpY2x1YkBt&tmsrc=sbcompsciclub%40gmail.com')
    },
     db = firebase.firestore();

    window.setInterval(function(){
      let idschool = id('schoooool').value;
      let idotherSchool = id('otherSchoolCon');
     if (idschool === 'Other (enter below)') {
     idotherSchool.style.display = 'block';
     }else{
      idotherSchool.style.display = 'none';
     }
    }, 1000);
const submit = () =>{
  let firstName = id('firstName').value,
  lastName = id('lastName').value,
  email = id('email').value,
  grade = id('grade').value,
  school = id('schoooool').value,
  otherSchool = id('otherSchool').value,
  VegOrNon = id('veg').value,
  notes = id('notes').value,
  finalSchool;
 if(school ==='South Brunswick Highschool'){
   finalSchool = school;
 }else{
   finalSchool = otherSchool;
 }
  let addDoc = db
  .collection('registrations-2019')
  .add({
    firstName: firstName,
    lastName: lastName,
    email: email,
    grade: grade,
    school:finalSchool,
    VegOrNon: VegOrNon,
    notes: notes
  })
  .then(ref => {
    console.log('Added doc to database with doc id: ', ref.id);
    window.location.href = '/yes.html';
  });
}



