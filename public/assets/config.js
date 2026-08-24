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
     y escribe aquí su ruta. Si lo dejas vacío, el botón de
     música no aparece.                                        */
  musica: "",

  /* Nombres de los papás de Miranda, tal como quieres que
     aparezcan en la invitación. Mientras los dos estén vacíos,
     la sección de papás no se muestra en ninguna versión.
     Ejemplo:  mama: "María López",  papa: "Juan Valdez"        */
  padres: {
    mama: "",
    papa: ""
  }

};
