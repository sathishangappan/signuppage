let num = document.getElementById('number').value;
let form = document.getElementById('new_form');
let submit = document.getElementById('submit');
let next = document.getElementById('next');
let element = document.getElementById('div1');

submit.addEventListener('click', function(e) {
    form.className = "user_details show";
    e.preventDefault();
});

function form_data()  {
    const clone = element.cloneNode(true);
    element.after(clone);

    for(let i = 1; i<=4; i++) {
    clone.addEventListener('click', function(e) {
        form_data();
        e.preventDefault();
    });
}
}
next.addEventListener('click',function(e) {
    form_data();
    e.preventDefault();
});

