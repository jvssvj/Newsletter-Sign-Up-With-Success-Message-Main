let btnEmail = document.querySelector('#btn-email')

btnEmail.addEventListener('click',function(){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let inputEmailValue = document.querySelector('#input-email').value

    function error(spanDisplay, borderColorEmail, backgroundColorEmail, fontColorEmail) {
        document.querySelector('.error').style.display = spanDisplay
        document.querySelector('#input-email').style.borderColor = borderColorEmail
        document.querySelector('#input-email').style.backgroundColor = backgroundColorEmail
        document.querySelector('#input-email').style.color = fontColorEmail
    }

    function sucess (mainCardDisplay, thanksDisplay) {
        document.querySelector('.card').style.display = mainCardDisplay
        document.querySelector('.thanks_card').style.display = thanksDisplay
    }

    if(emailPattern.test(inputEmailValue)) {
        sucess('none', 'flex') //none: hide main card /// flex: show Thanks card
        document.querySelector('#email-sent').textContent = inputEmailValue
    } else {
        sucess('flex', 'none')//flex: show main card /// none: hide Thanks card
        error('block', 'hsl(4, 100%, 67%)', 'hsla(4, 100%, 67%, 0.377)', 'hsl(4, 100%, 67%)')
    }
})


function home() {
    window.location.href = 'index.html'
}

document.querySelector('#dismiss-message-btn').addEventListener('click', home)
