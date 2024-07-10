import fs from "fs";

// Membuat stream untuk menulis ke file target.log
const writer = fs.createWriteStream("target.log");

// Menulis data ke file
writer.write("Muh. ");
writer.write("Fajri ");
writer.write("Farid");

// Menutup stream penulisan dan menambahkan event listener untuk event 'finish'
// Event 'finish' akan dipicu ketika semua data telah selesai ditulis ke file dan stream telah ditutup
writer.end(() => {
  // Membuat stream untuk membaca dari file target.log setelah penulisan selesai
  const reader = fs.createReadStream("target.log");

  // Menambahkan event listener untuk event 'data'
  // Event 'data' akan dipicu setiap kali ada data baru yang dibaca dari file
  reader.addListener("data", (data) => {
    // Mengonversi data biner yang dibaca menjadi string dan mencetaknya ke konsol
    console.info(data.toString());
  });
});

/*
  Penjelasan Kode:

  1. Import modul 'fs' dari Node.js:
     Modul 'fs' digunakan untuk operasi file sistem seperti membaca dan menulis file.

  2. Membuat stream untuk menulis ke file 'target.log':
     - `fs.createWriteStream("target.log")` membuat stream penulisan yang diarahkan ke file 'target.log'.
     - Stream penulisan ini memungkinkan penulisan data ke file secara berurutan.

  3. Menulis data ke file:
     - `writer.write("Muh. ")`, `writer.write("Fajri ")`, dan `writer.write("Farid")` menulis tiga string terpisah ke file 'target.log'.
     - Data ini ditambahkan ke file dalam urutan yang diberikan.

  4. Menutup stream penulisan dan menambahkan event listener untuk event 'finish':
     - `writer.end()` menutup stream penulisan setelah semua data telah ditulis.
     - Callback function dalam `writer.end()` dipanggil ketika penulisan selesai dan stream ditutup.

  5. Membuat stream untuk membaca dari file 'target.log' setelah penulisan selesai:
     - `fs.createReadStream("target.log")` membuat stream pembacaan yang diarahkan ke file 'target.log'.
     - Stream pembacaan ini memungkinkan pembacaan data dari file secara berurutan.

  6. Menambahkan event listener untuk event 'data':
     - `reader.addListener("data", (data) => {...})` menambahkan listener untuk event 'data'.
     - Event 'data' dipicu setiap kali ada chunk data baru yang dibaca dari file.

  7. Mengonversi data biner yang dibaca menjadi string dan mencetaknya ke konsol:
     - `data.toString()` mengonversi chunk data biner yang dibaca dari file menjadi string.
     - `console.info(data.toString())` mencetak string yang dibaca dari file ke konsol.

  Kesimpulan:
  - Kode ini menunjukkan cara menulis data ke file secara asinkron menggunakan stream penulisan, dan kemudian membaca data dari file secara asinkron menggunakan stream pembacaan setelah penulisan selesai.
  - Penggunaan event 'finish' memastikan bahwa pembacaan file hanya dimulai setelah penulisan selesai, menghindari masalah timing yang dapat menyebabkan output kosong.
*/
