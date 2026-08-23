# XV de Miranda

Invitación digital para los XV años de Miranda — **sábado 26 de septiembre de 2026**.
Sitio estático, sin base de datos y sin proceso de build: se sirve tal cual con Nginx.

- `/` — la invitación (portada, cuenta regresiva, galería, mapas, WhatsApp)
- `/pases/` — generador de pases digitales en PNG 1080×1920 (herramienta interna, marcada `noindex`)

---

## Estructura

```
.
├── Dockerfile           imagen de Nginx con el sitio adentro
├── nginx.conf           compresión, caché y sonda /healthz
└── public/
    ├── index.html       la invitación
    ├── pases/
    │   └── index.html   generador de pases (autocontenido)
    └── assets/
        ├── config.js    ← WhatsApp y música se cambian AQUÍ
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

### 2. La canción

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
4. **Build Pack:** `Dockerfile`.
   - *Dockerfile Location:* `/Dockerfile`
   - *Base Directory:* `/`
5. **Ports Exposes:** `80`.
6. En **Domains**, pon el dominio o subdominio (por ejemplo
   `miranda.tudominio.com`) y deja que Coolify genere el certificado.
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

Paleta: rosa blush `#F0BCC6` · plata `#DCDFE5` · fondo ciruela `#0C0710`.
Tipografías: **Bodoni Moda** (títulos) y **Jost** (texto), desde Google Fonts.

---

## Créditos

Fotografías de Miranda. La canción de fondo no se incluye en el repositorio:
agrégala tú en `public/assets/musica/`.
