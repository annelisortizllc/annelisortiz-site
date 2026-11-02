// Constantes de La Guía Definitiva para Comprar Casa en USA.
//
// ⚠️ Viven aquí y NO en `src/lib/actions/guia.ts` porque ese archivo es
// `'use server'`, y un módulo de Server Actions **sólo puede exportar
// funciones async**. Exportar una constante desde ahí hace que Next.js
// trate el módulo como si no tuviera ningún export.

/** Ruta pública del PDF. Vive en este dominio a propósito: así la entrega no
 *  depende de GoHighLevel, y reemplazar el archivo es un commit — no un clic
 *  en otro sistema. (En GoHighLevel un archivo subido NO se puede reemplazar
 *  en su sitio; ahí cada corrección genera una URL nueva.) */
export const PDF_PATH = '/guia/guia-definitiva-comprar-casa-usa.pdf'

/** El nombre real del PDF. Se usa igual en la página, en el correo y en el
 *  embudo — un solo nombre en todas partes. */
export const GUIA_TITULO = 'La Guía Definitiva para Comprar Casa en USA'
