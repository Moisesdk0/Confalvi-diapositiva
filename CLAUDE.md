# Presentación: Auditoría del Sistema de Gestión de Almacén · CONFALVI, C.A.

Presentación (para exponer y grabar en video) hecha en **HTML + Tailwind CSS**. No es PowerPoint.

## Fuentes de contenido (PDFs en esta carpeta)
| Archivo | Para qué sirve |
|---|---|
| `PROYECTO_CONFALVI_4.6_corregido.pdf` (y `.docx`) | **Fuente de verdad del contenido.** 75 págs: Momento I–IV. |
| `proyecto cesar agusto_20261117_181550_0000.pdf` | Ya NO es la estructura principal (el usuario cambió a `DIAPOSITIVA CONFALVI.pdf`). Solo referencia secundaria. NO copiar sus colores ni diseño. |
| `DIAPOSITIVA CONFALVI.pdf` | **ESTRUCTURA A SEGUIR (decisión actual del usuario)**: sus 13 láminas definen qué lleva cada lámina. Se rediseña con el estilo moderno de este proyecto. El contenido está actualizado hasta Momento III; desde Momento IV es contenido viejo que se cambiará a lo del proyecto (esperar indicaciones). |
| `BuildSafe System.pdf` | **Es el "informe auditor" del usuario: de aquí sale la PALETA** (ver Reglas de diseño). Es una tabla de inventario de 4 filas del sistema auditado. |
| `Informe_Auditoria_BuildSafe_noviembre.pdf` | **Fuente de verdad para hallazgos, severidades y recomendaciones del Momento IV** (más reciente que el proyecto). 27 hallazgos: 2 críticos (HAL-003 credenciales SMTP en el código, HAL-004 SMTPDebug=3 activo), 5 altos (HAL-007 GET destructivo, HAL-008 sin CSRF, HAL-009 SQL sin prepared, HAL-010 archivos sensibles/test2.sql, HAL-016 rol sin verificar), 10 medios, 10 bajos; riesgo 7.0/10 ALTO; veredicto No Apto. Plazos: inmediato 24-48 h, corto 1-2 sem, mediano 1 mes, mantenimiento. |

## Alcance actual
Crear láminas **hasta el Momento III**. El Momento IV (hallazgos, reflexiones, conclusiones) se indicará después.
Estructura del modelo: Portada · Momento I (historia, aspectos, identidad, fundamentación legal, ubicación) · Momento II (problemas, propósitos, vinculación, beneficiarios, impacto, fundamentos teóricos, viabilidad) · Momento III (ontología, epistemología, paradigma sociocrítico, enfoque cualitativo, IAP, técnicas, credibilidad/fiabilidad).
Densidad: **un poco cargadas de contenido**, no vacías.

## Datos clave (del proyecto)
- Título: *Auditoría del Sistema de Gestión de Almacén para el almacén de la Constructora Falconiana de Viviendas, "Compañía Anónima" (CONFALVI, C.A.)*
- UPTAG, PNF Informática, Santa Ana de Coro, 2026. Proyecto Sociotecnológico, Trayecto IV (confirmar vs. "Sociointegrador").
- Profesora guía: Dra. Elizabeth García (C.I V-13.723.452). Tutor: Ing. Joel Medina, C.I 20.933.839 (dato dado por el usuario; en la portada se muestra como V-20.933.839).
- Autores (TSU): Ángel Acosta 29.712.279 · Leonel Guerrero 31.559.812 · Michael Ordoñez 29.600.845 · Nicson Pimentel 30.462.993.
- Sistema auditado: BuildSafe System (PHP + MariaDB). 27 archivos revisados, 27 hallazgos (2 críticos, 5 altos, 10 medios, 10 bajos), riesgo global 7.0/10 (alto). Estándares: ISO/IEC 27005, ISO 31000, ISO 19011, ISO 27001:2022, OWASP Top 10 (2025). Método: IAP (Bernal 2010) + metodología de Robalino et al. (2022).

## Regla de contenido (IMPORTANTE)
- Cada lámina lleva los bloques de su equivalente en `DIAPOSITIVA CONFALVI.pdf`, con el contenido del proyecto (`PROYECTO_CONFALVI_4.6_corregido.pdf`). No inventar bloques nuevos ni datos decorativos.
- **Poco texto y mucho aire** (el usuario rechazó una versión "muy cargada"): títulos grandes, 1-2 líneas por idea, líneas finas en vez de recuadros pesados, márgenes ≥100 px, texto ≥20 px.
- La lámina 3 (aspectos / legal / ubicación) replica la de `DIAPOSITIVA CONFALVI.pdf` tal cual lo pidió el usuario: Fundamentación Legal = 2 viñetas (CRBV y Ley del Régimen de Propiedad de las Viviendas de la GMVV); puntos cardinales de la diapositiva vieja (Norte Cjón. Ampies, Sur Av. Ruiz Pineda, Este Calle Federación, Oeste Calle 39 A Silva); mapa satelital extraído de ese PDF en `assets/img/ubicacion.png`. El total de trabajadores del proyecto (59) no cuadra con el desglose: no usar el total.
- Detalle de diseño añadido: indicador de avance I·II·III·IV (`.step`) arriba a la derecha.

## Reglas de diseño (decididas con el usuario)
- **Estilo:** minimalista moderno tipo editorial, como sus referencias: títulos enormes con tracking apretado, tarjetas muy redondeadas (`rounded-card`), numeración `01.`, píldoras (tags), flechas ↗ en círculo, meta de pie de lámina. Referencias: plantillas "Minimalist", "Business Proposal", "Marketing Plan", "Project Proposal".
- **Paleta = la del informe auditor del usuario (`BuildSafe System.pdf`)**, muestreada del PDF: azul pizarra `#2C4054` (títulos y bloques oscuros), gris `#F0F0F0`, borde `#C8CCD4`, fondo `#FCFCFC`, texto negro/pizarra. Definida en `tailwind.config.js` (`ink`, `deep`, `mist`, `cloud`, `paper`, `line`). **No tiene color de acento**: diseño monocromático pizarra+gris; si se añade acento, consultarlo.
- ERROR PASADO a no repetir: se usó verde/dorado/naranja del PDF `proyecto cesar agusto` por confundirlo con el informe auditor. El usuario además no quiere naranja de UPTAG.
- **Fondo claro** (`paper`). El video se ve mal con fondos muy oscuros: usar pizarra solo en tarjetas/bloques, no en láminas completas.
- **Legibilidad (pedido de revisión):** el texto fino/claro no se veía. Peso base de las láminas = 500; `font-normal`=500 y `font-medium`=600 (en `tailwind.config.js`); texto secundario `ink-2` #34475A y `ink-3` #566779 (más oscuros); textos blancos sobre fondo oscuro con opacidad ≥ 75-92 %. No volver a usar grises claros ni pesos 400 para texto.
- **Tamaños mínimos (pedido de revisión):** nada de letra pequeña. Cuerpo de texto ≥ 22 px (idealmente 24-27 px), etiquetas/labels ≥ 17 px (15 px solo en la matriz epistémica por columnas angostas). Si no cabe, RESUMIR el texto (frases cortas, ≤ ~12 palabras por punto) en vez de achicar la letra.
- Sin hexágonos (eso es del informe auditor). Sin animaciones (se graba en video).
- Tipografía: Manrope. Lienzo fijo 1920×1080, escalado por JS.
- Severidad (solo Momento IV): `sev-critico`, `sev-alto`, `sev-medio`, `sev-bajo` en `tailwind.config.js`.

## Estructura técnica
- `index.html`: todas las láminas como `<section class="slide">`. Navegación ← → ; `F` = pantalla completa.
- `tailwind.config.js`: colores y fuentes (cambiar aquí recolorea todo). `src/input.css`: clases base (`.slide`, `.tag`, `.tag-lime`, `.label`, `.meta`).
- **Compilar CSS tras editar el HTML:** `npm run build` (o `npm run watch`). Salida: `css/tailwind.css` (sirve sin internet; solo la fuente Manrope viene de Google Fonts).
- `assets/logos/`: `gobierno.png`, `uptag.png`, `confalvi.png` (baja resolución; pedir originales si se puede).

## Imágenes (las pone el usuario)
Donde falte una imagen se deja un espacio `.slot` (recuadro punteado) con la ruta esperada, p. ej. `assets/img/ubicacion.png`. Basta con copiar el archivo a esa ruta y aparece solo (no hay que tocar el HTML). Pendiente: `ubicacion.png` (Figura 3 del proyecto, mapa de CONFALVI).

## Láminas hechas (URL con #N abre la lámina N)
1. Portada · 2. Momento I: historia e identidad · 3. Momento I: aspectos (íconos extraídos de la diapositiva vieja), legal y ubicación.
**Momento II = 3 láminas (decisión del usuario)**, estructura tomada de las láminas 3 y 4 del modelo del otro grupo (`proyecto cesar agusto`), con contenido del PROYECTO (no de la diapositiva vieja):
4. Contexto real: descripción de problemas (4) → jerarquización (puntajes 10/11/8/12) → auditoría + propósito general y 4 específicos.
5. Estándares y normativas legales (CRBV art. 110, Plan de la Patria 2025-2031, LOCTI art. 19, Ley Delitos Informáticos art. 11; ISO 27005/31000/19011/27001:2022/26514, OWASP 2025) + área de conocimiento (PNFI, Sistemas de Información, línea Auditoría Informática; 5 materias) + beneficiarios.
6. Impacto (social, económico, tecnológico, socio productivo) + viabilidad (económica, ambiental, política, social) + fundamentos teóricos en 4 bandas en flecha como la lámina de referencia (Robalino et al. 2022 metodología; Bermudes et al. 2022 sistema de inventario; Arens et al. en Robalino 2022 auditoría informática; herramientas con logos + ISO/IEC 27005 y OWASP Top 10). Se quitaron IIA 2017 y estudios previos.
Autores de la diapositiva vieja que NO están en el proyecto ni en el .docx (no usar): Pablos 2006, Horkheimer 1937, Ponce Rodríguez y Naranjo Sánchez 2006, Laudon y Laudon 2022, Jorge Domínguez 2021, SUSCERTE.
7. Momento III: **Matriz epistémica** en árbol (Sustentos → Ontología/Epistemología/Metodología; Rigor metodológico → Rigor de la investigación/Técnicas e instrumentos/Actividades de socialización), con la estructura de la lámina que dio el usuario y contenido del proyecto (Tabla 4: Barad 2021, Robalino-Yanza-Montoya 2022, Vera y Jara 2018, Forni 2022, Bernal 2010; Zapata y Rondán 2020; Méndez 2008). Reemplazó la lámina anterior de 4 tarjetas.
7b. La lámina 7 lleva las 3 fases de la IAP colgando de la tarjeta "Método IAP" (Bernal) (Inicial o de Contacto; Intermedia o de Elaboración del Plan de Acción; Ejecución y Evaluación).
8. Momento III: plan de acción (Tabla 5 del proyecto, 4 filas) + actividades de socialización (Méndez 2008).
Autores de la lámina modelo de Momento III que NO están en el proyecto (no usar): Edgar Serna M. (2021), Cháidez Nevárez (2022), España, España y Ormaza (2023), De Franco y Arrieta (2021), fases IAP "Diagnóstico/Planificación/Ejecución/Reflexión". Credibilidad y fiabilidad no se desarrollan por separado en el proyecto (solo la frase de Zapata y Rondán 2020).
9. Momento IV: sistematización de la acción reflexión transformadora + ejecución de actividades (4 etapas con fechas: 21 mar, 28 may y 5 jun, desde 1 jul, oct 2026), resumido.
10. Momento IV · ESTADÍSTICAS (una sola lámina): dona de 27 hallazgos por severidad (2/5/10/10) + riesgo global 7.0/10 ALTO; barras por categoría OWASP Top 10 2025 (A01 3, A02 6, A03 1, A04 1, A05 2, A06 6, A07 4, A08 0, A09 1, A10 3 = 27).
11. Momento IV · hallazgos críticos y altos (3, SIN pantallazo completo: resumen + código Antes/Después en HTML, pedido del usuario): HAL-003, HAL-004 (críticos), HAL-008 (alto). Pantallazos en `assets/img/hallazgos/hal-XXX.png` (páginas 14, 15, 21 del informe; pedido de la profesora/tutor: resumir pero dejar pantallazos; el expositor explica).
12. Momento IV · hallazgos medios (2, resumen + código Antes/Después): HAL-001 y HAL-005 (páginas 9 y 16 del informe).
   **IMPORTANTE:** en HAL-003 y HAL-004 se TAPÓ la contraseña de Gmail (texto y base64) porque es una credencial real. No mostrarla sin ocultar, salvo que el usuario confirme que ya fue revocada.
13. Momento IV: conclusiones (4) + recomendaciones por plazos.
14. Lámina final: cita de Steve Jobs (texto en HTML + recorte `assets/img/jobs-recorte.png`).
La lámina 9 (Sistematización de la acción reflexión transformadora) el usuario pidió dejarla tal como está: no modificarla.
NO incluido (el usuario no lo pidió): "Reflexiones e Implicaciones Críticas-Reflexivas" (4 reflexiones personales de los autores, p. 69-70 del proyecto).
11. Lámina final (#11): cita de Steve Jobs "La innovación es lo que distingue a los líderes de los seguidores"; texto en HTML y figura recortada con fondo transparente (`assets/img/jobs-recorte.png`, hecha desde `assets/img/jobs.jpeg`; bordes laterales difuminados con CSS mask).
Pendientes: lámina de reflexiones de los autores y de "Gracias", si el usuario las quiere.

## Verificar visualmente
Captura con Edge headless:
`msedge --headless=new --window-size=1920,1080 --virtual-time-budget=6000 --screenshot=out.png file:///.../index.html`
Para otras láminas, activar la lámina (clase `is-active`) o usar el hash/atajo que se agregue.

## Pendientes
- Confirmar "Sociotecnológico" vs "Sociointegrador" en el rótulo de la portada.
- Logos originales de CONFALVI y Gobierno (los actuales están pixelados).
- Tutor sin cédula en el proyecto.
- Momento IV: esperar indicaciones.

## Notas sobre inconsistencias detectadas
- El proyecto (Conclusiones, p. 70) y el texto del veredicto del informe (p. 41) dicen que el volcado `test2.sql` es crítico; la tabla consolidada del informe lo clasifica ALTO (HAL-010). Las láminas siguen la tabla.
- El informe imprime la App Password de Gmail en texto plano en los fragmentos de código (HAL-003/004). Debe ocultarse antes de entregar o compartir el informe.
