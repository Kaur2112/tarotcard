console.log("It Works")

$(document).ready(function () {
    $('.btn').click(function(event) {
        console.log('Clicked button')
        var email = $('.email').val()
        var name = $('.name').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            //statusElm.append('<div>Email is valid<\div>')
        } else {
            event.preventDefault()
            //statusElm.append('<div>Email is not valid<\div>')
        }

        if (name.length > 2) {
            //statusElm.append('<div>Name is valid<\div>')
        } else {
            event.preventDefault()
            //statusElm.append('<div>Name is not valid<\div>')
        }

        if (message.length > 1) {
            //statusElm.append('<div>Message is valid<\div>')
        } else {
            event.preventDefault()
            //statusElm.append('<div>Message is not valid<\div>')
        }

    })
})
