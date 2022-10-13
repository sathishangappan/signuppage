
let num = document.getElementById('number');
let form = document.getElementById('new_form');
let submit = document.getElementById('submit');
let clear = document.getElementById('clear');
let next = document.getElementById('next');
let element = document.getElementById('div1');

submit.addEventListener('click', function(e) {
    if(num.value >= 0) {
        form.className = "user_details show";
        for (let i = 1;i<num.value;i++) {
            const clone = element.cloneNode(true);
            element.after(clone);
        }
    }
    e.preventDefault();
});
clear.addEventListener('click', function(e) {
    form.className = "user_details hidden";
    e.preventDefault();
})

