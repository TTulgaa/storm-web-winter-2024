const mainElement = document.querySelector('main')
const divContainer = document.createElement('div')
divContainer.classList.add("div-container")
mainElement.appendChild(divContainer)
const Fetch_URL = 'https://jsonplaceholder.typicode.com/posts'
fetch(Fetch_URL)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        const dataElement = data
        console.log(dataElement)
        dataElement.forEach((post) => {
            const divPost = document.createElement('div')
            divPost.classList.add('post')
            divContainer.appendChild(divPost)
            const numberElement = document.createElement('div')
            numberElement.classList.add('number')
            numberElement.textContent = post.id
            divPost.appendChild(numberElement)
            const title = document.createElement('div')
            title.classList.add('title')
            title.textContent = post.title
            divPost.appendChild(title)
            const postElement = document.createElement('div')
            postElement.classList.add('post-body')
            postElement.textContent = post.body
            divPost.appendChild(postElement)
        });
    })
    .catch(((error) => {
        console.log(error)
    })).finally('Done')



