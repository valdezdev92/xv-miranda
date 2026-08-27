# XV de Miranda

Invitación digital para los XV años de Miranda — **sábado 26 de septiembre de 2026**.
Sitio estático, sin base de datos y sin proceso de build: se sirve tal cual con Nginx.

- `/` — la portada, donde el invitado elige entre las versiones de la invitación
- `/invitacion-clasica.html` · `/invitacion-gala.html` · `/invitacion-disco.html` ·
  `/invitacion-disco-rosa.html` — las cuatro invitaciones (portada, cuenta regresiva,
  galería, papás, mapas, detalles de la noche, WhatsApp)
- `/pases/` — generador de pases digitales en PNG 1080×1920 (herramienta interna, marcada `noindex`)

---

## Estructura

```
.
├── Dockerfile           imagen de Nginx con el sitio adentro
├── nginx.conf           compresión, caché y sonda /healthz
└── public/
    ├── index.html       la portada con las versiones
    ├── versiones.js     ← la lista de invitaciones que muestra la portada
    ├── invitacion-clasica.html
    ├── invitacion-gala.html
    ├── invitacion-disco.html
    ├── invitacion-disco-rosa.html
    ├── pases/
    │   └── index.html   generador de pases (autocontenido)
    └── assets/
        ├── config.js    ← WhatsApp, papás y música se cambian AQUÍ
        ├── favicon.svg
        ├── img/hero/    4 fotos de portada (1800 px)
        ├── img/gal/     las 15 fotos del carrusel (1200 px)
        └── musica/      aquí va el mp3
```

---

## Lo que hay que configurar

### 1. El número de WhatsApp

Abre `public/assets/config.js` y escribe el número en formato internacional,
sin `+`, sin espacios y sin guiones:

```js
whatsapp: "526141234567",   // 52 + 1 + lada + número
```

Mientras esté vacío, el botón de confirmar aparece apagado con un aviso.

### 2. Los nombres de los papás

En el mismo `config.js`:

```js
padres: { mama: "María López", papa: "Juan Valdez" },
```

Mientras los dos estén vacíos, la sección de papás no aparece en ninguna
de las cuatro invitaciones.

La versión clásica (la de **Lisa**) tiene además su propio bloque al final
de `config.js`, por si sus datos no son los mismos que los de las otras
tres invitaciones:

```js
clasica: {
  padres: { mama: "", papa: "" },   // los papás de Lisa
  mensaje: "…",                     // texto del WhatsApp
  whatsapp: "",                     // número propio; vacío usa el de arriba
  iglesia: "assets/img/iglesia.jpg" // foto de la fachada
}
```

### 2 bis. La foto de la iglesia

Copia la foto de la fachada en `public/assets/img/iglesia.jpg`. La versión
clásica la busca al cargar: mientras no exista, en su lugar se muestra un
dibujo de la iglesia, así que la página nunca queda con un hueco.

### 3. La canción

Copia el mp3 en `public/assets/musica/` con el nombre `cancion.mp3`
(o cambia la ruta en `config.js`). Si el archivo no existe, el botón de
música simplemente no se muestra.

La música arranca cuando el invitado toca **Abrir invitación**: los
navegadores no permiten reproducir audio antes de esa interacción.

---

## Desplegar en Coolify

1. Sube este repositorio a GitHub como **público**.
2. En Coolify: **+ New** → **Application** → **Public Repository**.
3. Pega la URL del repo y deja la rama en `main`.
4. **Build Pack:** cualquiera de las dos funciona.
   - `Dockerfile` → *Dockerfile Location:* `/Dockerfile`, *Base Directory:* `/`
   - `Compose` → *Docker compose location:* `/docker-compose.yml`, que
     construye ese mismo `Dockerfile` y expone el servicio `web`.
5. **Ports Exposes:** `80`.
6. En **Domains**, pon el dominio o subdominio (por ejemplo
   `miranda.tudominio.com`) y deja que Coolify genere el certificado.
   Con el Build Pack `Compose`, el dominio se asigna al servicio `web`
   en el puerto `80`. **Sin dominio la aplicación se despliega pero no
   es accesible desde fuera.**
7. **Deploy**.

Coolify vuelve a desplegar solo con cada `git push` si dejas activado
*Automatic Deployment* (el webhook se configura solo en repos públicos).

### Comprobación rápida

```bash
curl -I https://miranda.tudominio.com/          # 200
curl    https://miranda.tudominio.com/healthz   # ok
```

---

## Probarlo antes de subirlo

```bash
docker build -t xv-miranda .
docker run --rm -p 8080:80 xv-miranda
# http://localhost:8080
```

O sin Docker, con cualquier servidor estático:

```bash
cd public && python3 -m http.server 8080
```

> El generador de pases funciona incluso abriendo
> `public/pases/index.html` directamente desde el disco: las fotos van
> incrustadas para que la descarga del PNG no falle por seguridad del canvas.

---

## Datos del evento

| | |
|---|---|
| Fecha | Sábado 26 de septiembre de 2026 |
| Misa | 7:00 pm — Iglesia San Felipe |
| Recepción | 9:00 pm — Salón Cantabria |
| Vestimenta | Formal |
| Confirmar antes del | 18 de septiembre |

La versión clásica va en claro: fondo crema `#FDF8F4`, texto ciruela `#3A2430`
y acentos en blush `#C97C8E` y vino `#9E5468`, con los nombres en un degradado
de oro rosa. No lleva haces de luz giratorios y las fotos van repartidas en
tres galerías separadas.

La versión gala conserva la paleta oscura: rosa blush `#F0BCC6` · plata
`#DCDFE5` · fondo ciruela `#0C0710`. Las dos usan **Bodoni Moda** (títulos)
y **Jost** (texto).

La versión disco usa su propia paleta de neón: magenta `#FF2E9A` · cyan `#2FE6E0` ·
oro `#FFC94D` · violeta `#8B5CF6` sobre `#07040F`. La versión disco rosa es la misma
fiesta en claro: blush `#FFF1F5` de fondo, texto ciruela `#4A1F38` y acentos en
rosa `#E85D9B`, lila `#C9A7E8` y oro rosa `#D9A17C`. Las dos usan **Monoton**
(el nombre), **Bebas Neue** (títulos) y **Jost** (texto). Todas las fuentes vienen
de Google Fonts.

Todo el movimiento de las dos versiones disco se apaga solo si el teléfono tiene
activada la opción de reducir animaciones.

---

## Créditos

Fotografías de Miranda. La canción de fondo no se incluye en el repositorio:
agrégala tú en `public/assets/musica/`.
