const VALID_COLORS = ["red", "yellow", "blue"];

class Ducktypium {
  constructor(color) {
    if (!VALID_COLORS.includes(color))
      throw new Error('Color must be red, yellow, or blue!')
  
    this.color = color;
    this.calibrationSequence = [];
  }

  refract(color) {
    if (!VALID_COLORS.includes(color))
      throw new Error('Color must be red, yellow, or blue!')
    
    if (color === this.color) return this.color;

    if (color === 'red' || this.color === 'red') {
      if (color === 'blue' || color === 'blue') return 'purple';  // red + blue -> purple
      else if (color === 'yellow' || color === 'yellow') return 'orange';  // red + yellow -> orange
    }
    return 'green';  // blue + yellow -> green

  }
  
  calibrate(arr) {
    this.calibrationSequence = arr.sort().map(n => n * 3);
  }
}

