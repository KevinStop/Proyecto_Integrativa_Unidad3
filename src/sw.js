self.addEventListener("fetch", (event) => {
  console.log(event);
  /*if(event.request.url.includeDs('main.jpg')){
    event.repondWith(fetch('img/main-patas-arriba.jpg'));
  }*/
});