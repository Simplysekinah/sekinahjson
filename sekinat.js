let author = document.getElementById("author")
let title = document.getElementById("title")
let content = document.getElementById("content")




function addpost(event){
    event.preventDefault()

    let data = {
        author: author.value,
        title: title.value,
        content:content.value
    }
    console.log(data);
    fetch(" http://localhost:1234/posts", {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data)
    }).then((res)=> res.json())
    .then((res)=>{
        console.log(res);
        window.location.href = "sekinat.html"
    }).catch((err)=>{
        console.log(err);
    })
}