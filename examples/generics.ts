//https://youtu.be/kTKYpkLb3u8?t=862

interface MyMouseEvent {
  x: number;
  y: number;
}

interface MyKeyboardEvent {
  key: string;
}

interface MyEventObjects {
  click: MyMouseEvent;
  keyPress: MyKeyboardEvent;
}

function handelEvent<Key extends keyof MyEventObjects>(
  eventName: Key,
  callback: (e: MyEventObjects[Key]) => void
//   callback: (e: MyEventObjects[Key]) => void
) {}

handelEvent('keyPress', (e) => {
  console.log(e.key);
});
