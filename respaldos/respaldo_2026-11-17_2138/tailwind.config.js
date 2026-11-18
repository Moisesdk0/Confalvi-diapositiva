/** Tema de la presentación (minimalista editorial) con la paleta del informe BuildSafe System.pdf
 *  (azul pizarra #2C4054, grises #F0F0F0 / #C8CCD4, blanco #FCFCFC). Colores muestreados del PDF.
 *  Cambia aquí y se actualiza en todas las láminas. */
module.exports = {
  content: ['./index.html', './slides/**/*.html'],
  theme: {
    extend: {
      colors: {
        paper:  { DEFAULT: '#FCFCFC', 2: '#F0F0F0', white: '#FFFFFF' }, // fondo, filas grises, blanco
        ink:    { DEFAULT: '#2C4054', 2: '#566A7E', 3: '#8795A4' },      // azul pizarra (texto y bloques oscuros)
        deep:   '#1B2836',                                               // pizarra muy oscura (contraste fuerte)
        mist:   '#A9B6C4',                                               // pizarra clara (detalles sobre oscuro)
        cloud:  '#E3E8EE',                                               // pizarra muy clara (fondos suaves)
        line:   '#C8CCD4',                                               // bordes del informe
        // Severidad de hallazgos (Momento IV)
        sev: { critico: '#C0392B', alto: '#E67E22', medio: '#F2C300', bajo: '#4C9A5F' },
      },
      fontFamily: {
        sans: ['Manrope', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      borderRadius: { card: '36px' },
    },
  },
  plugins: [],
};
