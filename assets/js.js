let imagine = document.getElementById("poza");

fetch('https://jsonplaceholder.typicode.com/photos/3661')
    //server zice: Nu exista Status 404
    //Server zice: Server down Status 500

    .then(response => response.json())
    .then(function (response) {
      console.log(response.url);
      imagine.src = response.url
    })

