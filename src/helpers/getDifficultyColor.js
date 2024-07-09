const getDifficultyColor = (actual, max) => {
    // Fracción de dificultad (entre 0 y 1)
    const fraccionDificultad = actual / max;
  
    const verde = [0, 255, 0];
    const amarillo = [255, 255, 0];
    const rojo = [255, 0, 0];
  
    let colorInterpolado;
    if (fraccionDificultad <= 0.5) {
      colorInterpolado = [
        Math.floor(verde[0] * (1 - 2 * fraccionDificultad) + amarillo[0] * 2 * fraccionDificultad),
        Math.floor(verde[1] * (1 - 2 * fraccionDificultad) + amarillo[1] * 2 * fraccionDificultad),
        Math.floor(verde[2] * (1 - 2 * fraccionDificultad) + amarillo[2] * 2 * fraccionDificultad),
      ];
    } else {
      colorInterpolado = [
        Math.floor(amarillo[0] * (1 - fraccionDificultad) + rojo[0] * fraccionDificultad),
        Math.floor(amarillo[1] * (1 - fraccionDificultad) + rojo[1] * fraccionDificultad),
        Math.floor(amarillo[2] * (1 - fraccionDificultad) + rojo[2] * fraccionDificultad),
      ];
      console.log(colorInterpolado)
    }
  
    const colorHexadecimal = `#${colorInterpolado.map(color => color.toString(16).padStart(2, '0')).join('')}`;
  
    return colorHexadecimal;
  }
  
  export default getDifficultyColor