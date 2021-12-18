# Frontend Mentor - Intro Componente con solución de formulario de registro

Esta es una solución al [COMPONENTE DE INTRO con Formulario de registro de Formulario de Frontend Mentor] (https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1).Frontend Mentor Los desafíos lo ayudan a mejorar sus habilidades de codificación al construir proyectos realistas.

## Tabla de contenido

- [Descripción general] (# Descripción-general)
  - [El Desafío] (# El-Desafío)
  - [Screenshot] (# Screenshot)
  - [Enlaces] (# Enlaces)
- [mi proceso] (# mi-proceso)
  - [construido con] (# incorporado)
  - [¿Qué aprendí?] (# Qué-aprendí)
  - [Desarrollo continuo] (# desarrollo continuado)
  - [Recursos útiles] (# Recursos-útiles)
- [Autor] (# Autor)

## Descripción general

### El Desafío

Los usuarios deben ser capaces de:

- Ver el diseño óptimo para el sitio dependiendo del tamaño de la pantalla de su dispositivo
- Consulte los estados de flores para todos los elementos interactivos en la página.
- Recibir un mensaje de error cuando se envíe el formulario "si:
  - Cualquier campo 'Entrada' está vacío. El mensaje para este error debe decir * "[nombre de campo] no puede estar vacío" *
  - La dirección de correo electrónico no está formateada correctamente (es decir, una dirección de correo electrónico correcta debe tener esta estructura: `Nombre @ host.tld`). El mensaje para este error debe decir * "Parece que este no es un correo electrónico" *

### Captura de pantalla

! [] (./screenshot/captura-desktop.png)
! [] (./screenshot/captura-movil.png)


### Enlaces

- URL SOLUCION: [Agregar solución URL aquí] (https://your-solution-url.com)
- URL del sitio en vivo: [agregue URL del sitio en vivo aquí] (https://your-live-site-url.com)

## Mi proceso

### construido con

- Markup html5 semántico
- Propiedades personalizadas CSS
- FlexBox
- Mobile-First.
- JavaScript

### Que aprendí
**JavaScript**

  - En este fragmento de código, logré validar los datos ingresados en tiempo real practicamente. Seguramente no sea la solución más eficiente o la mas óptima. Pero pude lograr hacer la validación correctamente.

``
firstName.addEventListener('change', e => {
    if (firstName.value == "") {
        incorrecto(0, "First Name");
    } else if (!pattern.test(firstName.value)) {
        incorrecto(0, "First Name", " no válido");

    } else {
        correcto(0);
    }
})
lastName.addEventListener('change', e => {
    if (lastName.value == "") {
        incorrecto(1, "Last Name");
    } else if (!pattern.test(lastName.value)) {
        incorrecto(1, "Last Name", " no válido");
    } else {
        correcto(1);
    }
})
email.addEventListener('change', e => {
    if (email.value == "") {
        incorrecto(2, "Email");
    } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))) {
        incorrecto(2, "Email", " no válido");
    } else {
        correcto(2);
    }
})
password.addEventListener('change', e => {
    if (password.value.length < 0) {
        incorrecto(3, "Password", " muy corta, no válida");
    } else if (password.value.length > 8) {
        incorrecto(3, "Password", " muy larga");
    } else {
        correcto(3);
    }
})
``

### Desarrollo continuo

En los próximos desafíos y con el paso de las prácticas, el objetivo es ir mejorando mi manera de programar. Tratar de resolver determinado problema o tarea en el menor tiempo posible y de manera óptima. Aplicando buenas prácticas y toda la teoría que hay detrás de HTML5,CSS y JavaScript. 

Espero poder cumplir el objetivo e ir mejorando día a día. Ultimamente me voy sintiendo más cómodo y me van saliendo mejor las cosas. Se está volviendo mucho mas interesante el desarrollo FrontEnd para mi.


### Recursos útiles

- [Mozilla Developer] (https://www.developer.mozilla.org) - Esta documentación tanto de HTML, CSS y JavaScript me sirvió para aclarar muchas de mis dudas.
- [Ejemplo de recursos 2] (https://www.css-tricks.com): este es una web increíble que me ayudó  a entender FlexBox. Lo recomiendo a cualquiera que siga aprendiendo este concepto.


## Autor

- Sitio web - [Agregue su nombre aquí] (https://www.your-site.com)
- Frontend Mentor - [@santi19999] (https://www.frontendmentor.io/profile/santi19999)
- Instagram - [@santiago.herrera9] (https://www.instagram.com/santiago.herrera9)

** Nota: elimine esta nota y agregue / elimine / edite líneas arriba según lo que le gustaría compartir. **

