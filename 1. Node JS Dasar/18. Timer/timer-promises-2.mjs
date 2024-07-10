import timers from "timers/promises";

// Menggunakan for-await-of loop untuk mengiterasi interval timer secara asinkron
for await (const startTime of timers.setInterval(1000, new Date())) {
  // Mencetak waktu dan tanggal awal interval ke konsol
  console.info(`start timer at ${startTime}`);
}

/*
* Penjelasan Kode:

  1. Import modul 'timers/promises':
     - Modul ini menyediakan versi promise-based dari fungsi timer standar di Node.js.
     - `timers.setInterval` digunakan untuk membuat interval timer asinkron.

  2. Menggunakan for-await-of loop:
     - `for await (const startTime of timers.setInterval(1000, new Date()))` adalah loop yang mengiterasi nilai yang dihasilkan oleh interval timer secara asinkron.
     - `timers.setInterval(1000, new Date())` mengembalikan AsyncIterable yang menghasilkan nilai pada setiap interval.
     - Interval waktu yang digunakan adalah 1000 milidetik (1 detik).

  3. Fungsi callback dalam loop:
     - Pada setiap iterasi, `startTime` berisi nilai awal interval, yang dalam hal ini adalah objek Date yang dihasilkan pada saat interval dimulai.
     - `console.info` digunakan untuk mencetak pesan ke konsol.
     - Template literal (``) digunakan untuk menyusun pesan yang mencakup waktu dan tanggal awal interval.

  Kesimpulan:
  - Kode ini menunjukkan cara menggunakan `timers.setInterval` dari modul 'timers/promises' untuk membuat interval timer asinkron.
  - Dengan menggunakan for-await-of loop, kita dapat mengiterasi nilai yang dihasilkan oleh interval timer secara asinkron dan menjalankan fungsi callback pada setiap interval.
  - Setiap 1 detik, waktu dan tanggal awal interval dicetak ke konsol.
*/

// ! klw mau waktunya jalan terus
// for await (const startTime of timers.setInterval(1000, "ignored")) {
//   // Mencetak waktu dan tanggal awal interval ke konsol
//   console.info(`start timer at ${new Date()}`);
// }
