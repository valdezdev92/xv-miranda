/* ============================================================
   Configuración de la invitación — el único archivo que hay
   que tocar para el día a día. Guarda, haz commit y Coolify
   vuelve a desplegar.
   ============================================================ */
window.XV_CONFIG = {

  /* Número de WhatsApp donde se confirma la asistencia.
     Formato internacional, sin “+”, sin espacios ni guiones.
     México: 52 + 1 + lada + número → 526141234567            */
  whatsapp: "",

  /* Texto con el que se abre el chat de WhatsApp. */
  mensaje: "¡Hola! Confirmo mi asistencia a los XV años de Miranda ✨",

  /* Canción de fondo. Deja el archivo en public/assets/musica/
     y escribe aquí su ruta. Si lo dejas vacío, la versión
     clásica usa su pista Pink Disco original incorporada; las
     demás versiones conservan su comportamiento habitual.     */
  musica: "",

  /* Nombres de los papás de Miranda, tal como quieres que
     aparezcan en la invitación. Mientras los dos estén vacíos,
     la sección de papás no se muestra en ninguna versión.
     Ejemplo:  mama: "María López",  papa: "Juan Valdez"        */
  padres: {
    mama: "",
    papa: ""
  },

  /* ------------------------------------------------------------
     Ajustes que usan las versiones de Lisa: clásica y vintage.
     Las otras tres invitaciones siguen tomando los datos de
     arriba, así que puedes cambiar esto sin tocarlas.
     ------------------------------------------------------------ */
  clasica: {

    /* Nombres de los papás de Lisa, tal como quieres que
       aparezcan. Mientras los dos estén vacíos, la sección de
       papás no se muestra en las versiones de Lisa.
       Ejemplo:  mama: "María López",  papa: "Juan Valdez"      */
    padres: {
      mama: "Lizeth Casas",
      papa: "Adan Andrew"
    },

    /* Texto con el que se abre el chat de WhatsApp desde esta
       versión. Si lo dejas vacío se usa el de Lisa por defecto. */
    mensaje: "¡Hola! Confirmo mi asistencia a los XV años de Lisa ✨",

    /* Número propio de esta versión. Si lo dejas vacío se usa
       el "whatsapp" de arriba.                                  */
    whatsapp: "",

    /* Canción exclusiva de las versiones de Lisa. Si el archivo no
       puede cargarse, la clásica usa Pink Disco como respaldo.    */
    musica: "assets/musica/beauty-and-a-beat.mp3",
    musicaTitulo: "Beauty and a Beat",

    /* Imagen de fondo de la iglesia. El dibujo animado se conserva
       encima; déjalo vacío para mostrar únicamente el dibujo.    */
    iglesia: "assets/img/iglesia-san-felipe-bosquejo-rosa.webp"
  }

};
