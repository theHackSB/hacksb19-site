log('scripts.js loaded');
new WOW().init();
let scroll = new SmoothScroll('a[href*="#"]'),
    burger = doc.querySelector('.burger'),
    nav = doc.querySelector('#navbarBasicExample');

burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
});
let carousels = bulmaCarousel.attach();
let snackbar = (text,time) => {
    var ele = id('snackbar');
    ele.innerText = text;
    ele.className = "show";
    setTimeout(function(){ ele.className = ele.className.replace('show', ''); }, time);
  }
const addtoCal = () => {
        window.open('https://calendar.google.com/event?action=TEMPLATE&tmeid=NnNpYmQwdHVxdGFvdjk2OWEwdmxhYWJxZ24gc2Jjb21wc2NpY2x1YkBt&tmsrc=sbcompsciclub%40gmail.com')
    },
    db = firebase.database();

window.setInterval(function() {
    let idschool = id('schoooool').value;
    let idotherSchool = id('otherSchoolCon');
    if (idschool === 'Other (enter below)') {
        idotherSchool.style.display = 'block';
    } else {
        idotherSchool.style.display = 'none';
    }
}, 1000);
const submit = () => {
    let firstName = id('firstName').value,
        lastName = id('lastName').value,
        email = id('email').value,
        grade = id('grade').value,
        school = id('schoooool').value,
        otherSchool = id('otherSchool').value,
        VegOrNon = id('veg').value === "Vegetarian",
        notes = id('notes').value,
        finalSchool;
    if (school === 'South Brunswick High School') {
        finalSchool = school;
    } else {
        finalSchool = otherSchool;
    }

    db.ref(`registrations/${(new Date()).getFullYear()}`).push({
        first: firstName,
        last: lastName,
        email: email,
        grade: grade,
        school: finalSchool,
        veg: VegOrNon,
        notes: notes
    }).then(ref => {
        console.log('Added doc to database with doc id: ', ref.id);
        window.location.href = '/yes.html';
    }).catch(err => {
        let obj = {
            first: firstName,
            last: lastName,
            email: email,
            grade: grade,
            school: finalSchool,
            veg: VegOrNon,
            notes: notes
        };
        let convert = key => {
            switch (key) {
                case "first":
                    return "First Name";
                case "last":
                    return "Last Name";
                case "email":
                    return "Email";
                case "grade":
                    return "Grade";
                case "school":
                    return "School";
                case "veg":
                    return "Vegatarian Status";
                case "notes":
                    "";
            }
            return "Field";
        }
        let arr = [];
        for (let a in obj) {
            if (!obj[a])
                arr.push(convert(a))
        }

        snackbar("Please Fill Out Your " + arr.join(', '), 3000);
    });
}

window.onscroll = function () {
   document.getElementsByClassName('navbar')[0].style.background = '';
}