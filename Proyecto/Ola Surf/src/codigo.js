var patrocinador =  [{
    Image : "img/LOGO_CINESA_2.png"
},
{
    Image : "img/mallorcalive.jpeg"
},
{
    Image : "img/primavera-sound.jpg"
},
{
    Image : "img/galicia.jpg"
}
]



for (let i = 0; i < patrocinador.length; i++) {
  document.getElementById('patrocinadores').innerHTML +=
    "<div class='patrocinador'>" + '<img  src ='+patrocinador[i].Image +'>'+ '</div>'
}