let containerTitlu = document.getElementById('titlu');
let containerCorp = document.getElementById('corp');


fetch('https://jsonplaceholder.typicode.com/posts/45')
    //server zice: Nu exista Status 404
    //Server zice: Server down Status 500

    .then(response => response.json())
    .then(function (response) {
        console.log(response.title);
        containerTitlu.innerHTML = response.title;
        containerCorp.innerHTML = response.body;
    })

    let containerTitluArticol = document.getElementById('titlu-articol');
    let containerCorpArticol = document.getElementById('corp-articol');

    fetch('https://jsonplaceholder.typicode.com/posts/3')
    .then(response => response.json())
    .then(function (response) {
        console.log(response.title);
        containerTitluArticol.innerHTML = response.title;
        containerCorpArticol.innerHTML = response.body;
    })