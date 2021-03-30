/* eslint-disable */
import ArrayBufferConverter from "./index";

const binar = (function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return (input => {
      const buffer = new ArrayBuffer(data.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i++) {
        bufferView[i] = input.charCodeAt(i);
      }
      return buffer;
    })(data);
  })();

  const string = "{\"data\":{\"user\":{\"id\":1,\"name\":\"Hitman\",\"level\":10}}}";

test('test', () => {
    const buffer = new ArrayBufferConverter();
    buffer.onload(binar);
    expect(buffer.toString()).toEqual(string);
  });