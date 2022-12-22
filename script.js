let url = "https://kontests.net/api/v1/all"
let response = fetch(url)

response.then((v)=>{
  return v.json()
}).then((item)=>{
  console.log(item)
  iHtml = ""
  for(d in item){
    console.log(item[d])
    iHtml += `
    <div class="card" style="width: 18rem; margin:10px">
  <img src="https://static.vecteezy.com/system/resources/previews/004/865/921/original/programmer-people-concept-use-laptop-and-programming-code-program-icon-spreading-with-modern-flat-style-free-vector.jpg" class="card-img-top" alt="Programmer Image">
  <div class="card-body">
    <h5 class="card-title">${item[d].name}</h5>
    <p class="card-text">Starts at: ${item[d].start_time}</p>
    <p class="card-text">Ends at: ${item[d].end_time}</p>
    <a href="${item[d].url}" class="btn btn-primary">Visit Site</a>
  </div>
</div>
    `
cardContainer.innerHTML = iHtml
  }
})
