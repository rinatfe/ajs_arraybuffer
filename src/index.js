export default class ArrayBufferConverter {
  constructor() {
    this.buffer;
  }

  onload(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const code = new Uint16Array(this.buffer);
    const mass = [];
    for (let i = 0; i < code.length; i += 1) {
      mass.push(String.fromCharCode(code[i]));
    }
    return mass.join('');
  }
}
