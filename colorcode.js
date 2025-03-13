const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach(function (button) {
    //console.log(button);
    //event listener
    button.addEventListener('click', function (ev) {
        //console.log(ev) ;//mouse event
        //console.log(ev.target); ....htmlspan elemrnt
        if (ev.target.id === 'grey') {
            body.style.backgroundColor = ev.target.id;
        }
        if (ev.target.id === 'white') {
            body.style.backgroundColor = ev.target.id;
        }
        if (ev.target.id === 'blue') {
            body.style.backgroundColor = ev.target.id;
        }
        if (ev.target.id === 'yellow') {
            body.style.backgroundColor = ev.target.id;
        }
        if (ev.target.id === 'red') {
            body.style.backgroundColor = ev.target.id;
        }
        if (ev.target.id === 'purple') {
            body.style.backgroundColor = ev.target.id;
        }

    })


});
