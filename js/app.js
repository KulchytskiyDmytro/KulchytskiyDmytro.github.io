$(document).ready(() => {

    const trigger = $('#trigger'),
        emailPlace = $('#emailAddress'),
        namePlace = $('#trigger'),
        avatarPlace = $('#avatar')

    let counter = 1

    trigger.bind('click', () => {
        const xhr = new XMLHttpRequest()
        let url = `https://reqres.in/api/users/${counter}`

        counter++

        xhr.onload = function() {
            if (this.status === 200) {
                try {
                    let data = JSON.parse(this.responseText).data,
                        email = data.email,
                        firstName = data.first_name,
                        lastName = data.last_name,
                        avatar = data.avatar,
                        myEmail = 'dima01062009@gmail.com',
                        myFirstName = 'DMYTRO',
                        myLastName = 'KULCHYTSKIY',
                        myAvatar = 'images/i.jpg'

                    if (((counter - 1) % 5) === 0) {
                        emailPlace.html(myEmail)
                        namePlace.html(`${myFirstName} <br> ${myLastName}`)
                        avatarPlace.attr('src', myAvatar)

                    } else {
                        emailPlace.html(email)
                        namePlace.html(`${firstName} <br> ${lastName}`)
                        avatarPlace.attr('src', avatar)
                    }

                } catch (e) {
                    console.warn('JSON is broken')
                }

            } else {
                console.warn('No accessable site...')
            }
        }

        xhr.open('get', url)
        xhr.send()

        counter = (counter > 12) ? 1 : counter
    })
})