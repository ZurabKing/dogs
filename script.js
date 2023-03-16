async function getResponse(){
    let photoGr = document.querySelector('.dogs')
    for (let i = 0; i < 9 ; i++){
        let response = await fetch('https://dog.ceo/api/breeds/image/random')
        let main = await response.json()
        photoGr.innerHTML +=`<img class="img" src="${main.message}" alt=""></img>`
    }

}

getResponse()