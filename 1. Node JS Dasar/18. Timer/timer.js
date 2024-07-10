// Menggunakan setInterval untuk menjalankan fungsi callback secara berulang setiap
// 1000 milidetik (1 detik)
setInterval(() => {
  // Mencetak waktu dan tanggal saat ini ke konsol
  console.info(`Start time at ${new Date()}`);
}, 1000);


/*
*   Penjelasan Kode:
  
    1. Menggunakan setInterval untuk menjalankan fungsi callback secara berulang:
       - `setInterval` adalah fungsi yang memungkinkan kita menjalankan fungsi callback secara berulang 
         dengan interval waktu tertentu.
       - Dalam contoh ini, fungsi callback akan dijalankan setiap 1000 milidetik (1 detik).
  
    2. Fungsi callback:
       - Fungsi callback yang diberikan ke `setInterval` adalah fungsi anonim yang mencetak waktu dan 
         tanggal saat ini ke konsol.
       - `console.info` digunakan untuk mencetak pesan ke konsol.
       - `new Date()` menghasilkan objek Date yang mewakili waktu dan tanggal saat ini.
       - Template literal (``) digunakan untuk menyusun pesan yang mencakup waktu dan tanggal saat ini.
  
    3. Interval waktu:
       - Parameter kedua dari `setInterval` adalah interval waktu dalam milidetik.
       - Dalam contoh ini, interval waktu yang digunakan adalah 1000 milidetik, yang berarti fungsi 
         callback akan dijalankan setiap 1 detik.
  
    Kesimpulan:
    - Kode ini menunjukkan cara menggunakan `setInterval` untuk menjalankan fungsi callback secara 
      berulang setiap interval waktu tertentu.
    - Dalam contoh ini, waktu dan tanggal saat ini dicetak ke konsol setiap 1 detik.
    - `setInterval` berguna dalam berbagai skenario di mana kita perlu menjalankan tugas secara berulang 
      dengan interval waktu tertentu, seperti pembaruan UI, polling server, atau tugas berulang lainnya.
  */
