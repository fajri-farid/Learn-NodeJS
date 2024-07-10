// Membuat buffer dari string "Muh. Fajri Farid" dengan encoding "utf8"
// Encoding "utf8" mengonversi karakter teks menjadi representasi biner yang sesuai dengan standar UTF-8
const buffer = Buffer.from("Muh. Fajri Farid", "utf8");

// Mengonversi buffer ke string dengan encoding "base64" dan mencetaknya
// Encoding "base64" mengonversi data biner menjadi string yang aman untuk ditransmisikan melalui teks,
// biasanya digunakan untuk mengirimkan data biner melalui email atau URL
console.info(buffer.toString("base64")); 

// Mengonversi buffer ke string dengan encoding "hex" dan mencetaknya
// Encoding "hex" mengonversi data biner menjadi representasi string dalam format heksadesimal, berguna
// untuk debugging dan melihat data biner dalam format yang mudah dibaca
console.info(buffer.toString("hex")); 

// Membuat buffer dari string "TXVoLiBGYWpyaSBGYXJpZA==" dengan encoding "base64"
// Ini mengonversi kembali string yang telah dienkode dalam "base64" menjadi representasi biner yang
// disimpan dalam buffer
const buffer2 = Buffer.from("TXVoLiBGYWpyaSBGYXJpZA==", "base64");

// Membuat buffer dari string "4d75682e2046616a7269204661726964" dengan encoding "hex"
// Ini mengonversi kembali string yang telah dienkode dalam "hex" menjadi representasi biner yang
// disimpan dalam buffer
const buffer3 = Buffer.from("4d75682e2046616a7269204661726964", "hex");

// Mengonversi buffer2 ke string dengan encoding "utf8" dan mencetaknya
// Ini mengonversi kembali data biner dalam buffer menjadi string teks menggunakan encoding "utf8"
console.info(buffer2.toString("utf8")); 

// Mengonversi buffer3 ke string dengan encoding "utf8" dan mencetaknya
// Ini mengonversi kembali data biner dalam buffer menjadi string teks menggunakan encoding "utf8"
console.info(buffer3.toString("utf8")); 

/*
  *Penjelasan Kode:

  1. Membuat buffer dari string dengan encoding "utf8":
     - `Buffer.from("Muh. Fajri Farid", "utf8")` membuat buffer dari string "Muh. Fajri Farid".
     - Encoding "utf8" mengonversi karakter teks menjadi representasi biner yang sesuai dengan standar UTF-8.

  2. Mengonversi buffer ke string dengan encoding "base64":
     - `buffer.toString("base64")` mengonversi buffer ke string dengan encoding "base64".
     - Encoding "base64" digunakan untuk mengonversi data biner menjadi string yang aman untuk ditransmisikan melalui teks, biasanya digunakan untuk mengirimkan data biner melalui email atau URL.

  3. Mengonversi buffer ke string dengan encoding "hex":
     - `buffer.toString("hex")` mengonversi buffer ke string dengan encoding "hex".
     - Encoding "hex" digunakan untuk mengonversi data biner menjadi representasi string dalam format heksadesimal, berguna untuk debugging dan melihat data biner dalam format yang mudah dibaca.

  4. Membuat buffer dari string dengan encoding "base64":
     - `Buffer.from("TXVoLiBGYWpyaSBGYXJpZA==", "base64")` membuat buffer dari string yang telah dienkode dalam "base64".
     - Ini mengonversi kembali string yang telah dienkode dalam "base64" menjadi representasi biner yang disimpan dalam buffer.

  5. Membuat buffer dari string dengan encoding "hex":
     - `Buffer.from("4d75682e2046616a7269204661726964", "hex")` membuat buffer dari string yang telah dienkode dalam "hex".
     - Ini mengonversi kembali string yang telah dienkode dalam "hex" menjadi representasi biner yang disimpan dalam buffer.

  6. Mengonversi buffer2 ke string dengan encoding "utf8":
     - `buffer2.toString("utf8")` mengonversi kembali data biner dalam buffer menjadi string teks menggunakan encoding "utf8".
     - Hasilnya adalah string asli "Muh. Fajri Farid".

  7. Mengonversi buffer3 ke string dengan encoding "utf8":
     - `buffer3.toString("utf8")` mengonversi kembali data biner dalam buffer menjadi string teks menggunakan encoding "utf8".
     - Hasilnya adalah string asli "Muh. Fajri Farid".

  Kesimpulan:
  - Buffer adalah cara untuk menyimpan data biner dalam Node.js.
  - Encoding adalah proses mengonversi data dari satu format ke format lain.
  - Dengan menggunakan buffer dan berbagai encoding, kita dapat mengelola dan mentransmisikan data biner dengan cara yang fleksibel dan efisien.
*/
