let api="https://fakestoreapi.com/products"

let loadbtn=document.querySelector(".loadbtn")

fetch(api).then((get)=>{
    
    return get.json()
})

.then((success)=>{

    success.forEach(element => {
        console.log(element.title)

        let main=document.querySelector("main")

        let all=document.createElement("div")
        all.innerHTML=`<img src="${element.image}"/>
                <h1>${element.title}</h1> <p>Price: $${element.price}</p>`

        main.append(all)
  
    });
})
// })


.catch((error)=>{
    console.log(error)
})