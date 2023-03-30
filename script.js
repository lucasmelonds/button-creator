const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');
controles.addEventListener('change', handleChange)

const handleStyle = {
  element: btn,
  height(value) {
    this.element.style.height = `${value}px`;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  width(value) {
    this.element.style.width = `${value}px`;
  },
  color(value) {
    this.element.style.color = `${value}`;
  },
  border(value) {
    this.element.style.border = `${value}`;
  },
  borderRadius(value) {
    this.element.style.borderRadius = `${value}px`;
  },
  fontFamily(value) {
    this.element.style.fontFamily = `${value}`;
  },
  fontSize(value) {
    this.element.style.fontSize = `${value}rem`;
  },
  texto(value) {
    this.element.innerText = `${value}`;
  },
  fontWeight(value) {
    this.element.style.fontWeight = `${value}`;
  },
}

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value);
  saveValues(name, value);
  showCss();
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function setValues() {
  const properties = Object.keys(localStorage);
  properties.forEach((propertie) => {
    handleStyle[propertie](localStorage[propertie])
    controles.elements[propertie].value = localStorage[propertie];
  });
  showCss();
}

setValues();

function showCss() {
  cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}
