# Proyecto PROYECTO-FILTRO_SILVA-EDUARD

Este proyecto es una página web dedicada a Pokémon, diseñada con HTML y CSS.

## Características

- Diseño responsive y accesible.
- Utilización de fuentes personalizadas.
- Animaciones CSS para efectos visuales.
- Integración de videos y contenido multimedia.
- Menú interactivo con animaciones.

## Tecnologías Utilizadas

- HTML5
- CSS3
- Fuentes personalizadas (Pokemon solid.ttf)


## Estilo CSS Importante

/* Estilos para el fondo y animaciones del texto */
@font-face {
    font-family: 'MiFuente';
    src: url('Pokemon solid.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

body {
    background-image: url('https://wallpapers-clan.com/wp-content/uploads/2024/03/pokemon-bulbasaur-landscape-desktop-wallpaper-preview.jpg');
    background-size: cover;
    color: #fff;
    text-align: center;
    padding: 20px;
    font-family: 'MiFuente', sans-serif;
    background-attachment: fixed;
}

h1 {
    font-size: 60px;
    text-shadow: 2px 2px 4px #000000;
    background: linear-gradient(to right, #ff00cc, #333399);
    -webkit-background-clip: text;
    -webkit-text-stroke: 2px rgb(228, 224, 15);
    color: transparent;
    animation: Animaciontext 5s infinite;
}

@keyframes Animaciontext {
    0% { color: rgb(196, 124, 17); }
    50% { color: rgb(17, 17, 138); }
    100% { color: rgb(94, 95, 10); }
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.container span {
    background-color: #0057b32f;
    padding: 1px 35px;
    font-family: 'Courier New', Courier, monospace;
}

.container1.cont {
    width: 300px;
    height: 200px;
    border-radius: 10px;
}

.container1.cont1 {
    width: 200px;
    height: 250px;
}
.container1:hover {
    cursor: pointer;
    transform: scale(1.1);
}

#img1 {
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL1uwsWc31ZWswGdahaduPeD7Qsw3mm8PJgA&s');
}


#img2 {
    background-image: url('https://play-lh.googleusercontent.com/ao5M5OolaeqKOk2wFaaIoIxo6YIS5fotAtI19_Vx-712PYU-halC9ylxNz7FB5YQ7Y0');
}

#img3 {
    background-image: url('https://wallpapers.com/images/high/dark-darkrai-pokemon-e0lroxtzi2sjgy12.webp');
}

#img4 {
    background-image: url('https://wallpapers.com/images/high/zoroark-on-dark-red-background-ab8o9wxtzoc0x2qs.webp');
}

#img5 {
    background-image: url('https://moewalls.com/wp-content/uploads/2024/05/pokemon-gengar-thumb-364x205.jpg');
}

#img6 {
    background-image: url('https://c4.wallpaperflare.com/wallpaper/529/285/307/pokemon-minimalism-squirtle-bulbasaur-wallpaper-preview.jpg');
}

#img7 {
    background-image: url('https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYgh3ukTqYL3hxz4JEs08ph0xxPWVANNKOONxs-fNO59jAbZAzvF8HcN_A1WKz38fIFRgZKR-DlhornLxpZ70liLuzTuGANVOKJi.jpg?r=01f');
}

#img8 {
    background-image: url('https://nintenduo.com/wp-content/uploads/2022/05/Pokemon-Nombres-Perdidos-03.webp');
}

#img9 {
    background-image: url('https://nintenduo.com/wp-content/uploads/2022/05/Pokemon-Home-Cambio-Ataques-01.webp');
}
## Autor
Nombre: Eduard Mauricio Silva



