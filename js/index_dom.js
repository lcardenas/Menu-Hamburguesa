import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { shortcuts, moveBall } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButtom from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilter from "./filtro_busquedas.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_espia.js";
import smartVideo from "./video_inteligente.js";


const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("/assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Nov 01, 2020 20:41:19", "Feliz Cumpleaños  🤓");
  scrollTopButtom(".scroll-top-btn");

  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",

    `<a href="https://www.youtube.com/watch?v=2SetvwBV-SU" target="_blank" 
    rel="noopener">Ver Video</a>`,

    `<iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU" 
     frameborder="0" allow="accelerometer; autoplay; encrypted-media; 
     gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );

  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/yt91iceRbvkLhYd47" target="_blank" 
    rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2237.2939662481335!2d-99.16859966841967!3d19.42687718918352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses-419!2scl!4v1591929007864!5m2!1ses-419!2scl" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    `
  );
  responsiveTester("responsive-tester");

  userDeviceInfo("user-device");
  webCam("webcam");
  getGeolocation("geolocation");
  searchFilter(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();


});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
})

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();