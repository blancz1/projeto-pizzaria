const xhr = new XMLHttpRequest()

xhr.addEventListener('load', () => {
    xhr.response
})

xhr.open('GET', 'url')
xhr.send()
