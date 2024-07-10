function sayHello(name) {
  debugger;
  return `Hello ${name}`;
}

const name = "fajri";

console.log(sayHello(name));

// cara jalankan dengan
// node inspect (name file)
// pastikan sudah berada di direktori-nya agar mudah untuk jalankan filenya
// pastikan juga tipe filenya sama
// cara keluar dari modenya dengan ".exit"