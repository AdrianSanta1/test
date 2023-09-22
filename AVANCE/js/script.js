const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});

document.getElementById("registro").addEventListener("click", function() {
    window.location.href = "../index.html";
});
document.getElementById("iniciar").addEventListener("click", function() {
    window.location.href = "../index.html";
});
function falabella() {
    window.location.href = "https://www.falabella.com.co/falabella-co/product/119629528/Consola-Playstation-5-Edicion-Disco-Ps5-Cd-1-Ano-Garantia/119629529";
}
function linio() {
    window.location.href = "https://www.linio.com.co/p/consola-xbox-series-s-qbut3j?qid=60cf4d371bd96c3dc011e9d2276e5e9a";
}
function linio2() {
    window.location.href = "https://www.linio.com.co/p/apple-watch-series-7-45mm-gps-media-noche-original-garanti-a-1an-o-n2yr1x";
}
function redireccionFace() {
    location.href = "https://www.facebook.com";
}
function redireccionGit() {
    location.href = "https://www.github.com";
}
function redireccionInsta() {
    location.href = "https://www.instagram.com";
}
function redireccionXboxLinio() {
    location.href = "https://www.linio.com.co/p/xbox-series-s-512gb-qejg6g?qid=1f827363050d7ffae60d5987640df5b3&oid=MA219EL0VYGJNLCO&position=2&sku=MA219EL0VYGJNLCO&searchTerm=xbox%20series%20s%20consola";
}
function redireccionXboxAlkosto() {
    location.href = "https://www.alkosto.com/consola-xbox-series-s-512-gb-1-control-inalambrico/p/889842651348";
}
function redireccionXboxExito() {
    location.href = "https://www.exito.com/consola-series-s-xbox-rrs-00004-3001513/p";
}
function redireccionXboxFalabella() {
    location.href = "https://www.falabella.com.co/falabella-co/product/9461744/Consola-Xbox-Series-S-512-GB/9461744";
}
function openTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        if (tab.id === tabId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}