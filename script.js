
console.log(destinosDisponibles)


const destinosElegir = document.getElementById(`fila`)


destinosDisponibles.forEach ( x=> {
  
    destinosElegir.innerHTML +=`
    
    <div class="card col-xs-12 col-sm-6 col-lg-4 col-xl-3">
    
    <img src="img/${x.img}" class="card-img-top" alt="...">
    <div class="card-body">
    <h2 class="card-title">${x.ciudad}</h2>
    <h3 class="card-title">Cantidad de Noches : ${x.cantNoches}</h3>
    <h3 class="card-title">$ ${x.precio} p/ persona</h3>
    <p class="card-text">${x.incluye}</p>
    <a href="#" class="btn btn-primary">Elergir</a>
    </div>

  </div>    
       
   `

})