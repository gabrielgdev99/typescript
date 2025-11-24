type ColorsObj = typeof colorsObj
type KeyColors = keyof ColorsObj

const colorsObj = {
  red: 'vermelho',
  green: 'verde',
  blue: 'azul',
  purple: 'roxo'
};

function translateColor(color: KeyColors, colors: ColorsObj) {
  return colors[color];
}

console.log(translateColor('red', colorsObj));
console.log(translateColor('green', colorsObj));
console.log(translateColor('blue', colorsObj));
console.log(translateColor('purple', colorsObj));
