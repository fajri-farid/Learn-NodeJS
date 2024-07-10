import timers from "timers/promises";

// Mencetak waktu dan tanggal saat ini ke konsol
console.info(new Date());

// Menggunakan fungsi setTimeout dari modul timers/promises untuk menunggu selama 5000 milidetik (5 detik)
// Fungsi ini menggunakan sintaks async/await, sehingga kita perlu menunggu hingga fungsi ini selesai 
// sebelum melanjutkan ke baris kode berikutnya
await timers.setTimeout(5000);

// Mencetak waktu dan tanggal saat ini ke konsol setelah menunggu 5 detik
console.info(new Date());

/*
* Penjelasan Kode:

  1. Import modul 'timers/promises':
     - Modul ini menyediakan versi promise-based dari fungsi timer standar di Node.js.
     - `timers.setTimeout` digunakan untuk membuat penundaan (delay) asinkron dalam aplikasi.

  2. Mencetak waktu dan tanggal saat ini ke konsol:
     - `console.info(new Date())` mencetak waktu dan tanggal saat ini ketika baris ini dieksekusi.
     - `new Date()` menghasilkan objek Date yang mewakili waktu dan tanggal saat ini.

  3. Menunggu selama 5000 milidetik (5 detik):
     - `await timers.setTimeout(5000)` menunggu selama 5000 milidetik sebelum melanjutkan eksekusi kode 
       berikutnya.
     - Fungsi `setTimeout` dari modul 'timers/promises' mengembalikan promise yang akan selesai setelah 
       5000 milidetik.
     - Sintaks `await` digunakan untuk menunggu hingga promise selesai.

  4. Mencetak waktu dan tanggal saat ini ke konsol setelah menunggu:
     - `console.info(new Date())` mencetak waktu dan tanggal saat ini setelah penundaan 5 detik.
     - Ini memungkinkan kita melihat perbedaan waktu antara dua panggilan `console.info(new Date())`.

  Kesimpulan:
  - Kode ini menunjukkan cara menggunakan modul 'timers/promises' untuk membuat penundaan asinkron dalam 
    aplikasi Node.js.
  - Dengan menggunakan `await timers.setTimeout(5000)`, kita dapat menunggu selama 5 detik sebelum 
    melanjutkan eksekusi kode.
  - Fungsi ini berguna dalam berbagai skenario di mana kita perlu menambahkan penundaan atau menunggu 
    selama periode waktu tertentu dalam aplikasi.
*/
