// cf6beeaf7b3b4bfab8bdbbf924c7c63e




let key ='cf6beeaf7b3b4bfab8bdbbf924c7c63e'
let src = 'https://jsonplaceholder.typicode.com/users'
let url = 'https://newsapi.org/v2/everything?q=tesla&from=2024-05-22&sortBy=publishedAt&apiKey=cf6beeaf7b3b4bfab8bdbbf924c7c63e'
let div = document.getElementById('box')
let input = document.getElementById('userValue')


const getUserVal = ()=>{
fetch(`https://newsapi.org/v2/everything?q=tesla&from=2024-05-22&sortBy=publishedAt&apiKey=cf6beeaf7b3b4bfab8bdbbf924c7c63e`)
.then((response)=>response.json())
.then((response)=>{
    for(var i = 0;i<response.articles.length;i++){
        console.log(response.articles[i]);
        div.innerHTML += `<div class="card" style="width: 18rem;">
         <img src=${response.articles[i].urlToImage} class="card-img-top" alt="...">
         <div class="card-body">
         <h5 class="card-title">Card title</h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <a href="#" class="btn btn-primary">Go somewhere</a>
         </div>
         </div>`
    }
})

.catch((err)=>console.log(err))

}


// app

// fetch(`--------------------------------------------------------------------------------`)  
// .then((response)=>response.json())
    
// .then((response)=>{
//     for(var i = 0;i<response.articles.length;i++){
//         console.log(response.articles[i])
//         div.innerHTML += `<div class="card" style="width: 18rem;">
//         <img src=${response.articles[i].urlToImage} class="card-img-top" alt="...">
//         <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//         <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//         </div>`
//     }
// })

// .catch((err)=>console.log(err))
// }