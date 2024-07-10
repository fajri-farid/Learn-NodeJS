import { parentPort, threadId } from "worker_threads";

// Menambahkan event listener untuk menerima pesan dari thread utama
parentPort.addListener("message", function (message) {
  // Iterasi sebanyak 'message' yang diterima dari thread utama
  for (let i = 0; i < message; i++) {
    // Mencetak pesan ke konsol dengan ID thread dan nomor pesan
    console.info(`Thread ${threadId} sends message ${i}`);

    // Mengirim balik pesan ke thread utama
    parentPort.postMessage(i);
  }

  // Menutup koneksi dengan thread utama setelah selesai mengirim pesan
  parentPort.close();
});

/*
  Penjelasan Kode:
  
  - Import 'parentPort' dan 'threadId' dari modul "worker_threads".
  - 'parentPort': Objek yang digunakan untuk berkomunikasi dengan thread utama.
  - 'threadId': ID unik untuk thread saat ini.
  
  - Menambahkan event listener untuk 'message' dari thread utama.
  - Ketika sebuah pesan diterima, fungsi callback akan dijalankan.
  
  - Iterasi sebanyak 'message' yang diterima dari thread utama.
  - Setiap iterasi mencetak pesan ke konsol dengan ID thread dan nomor pesan.
  - Mengirim balik pesan ke thread utama menggunakan 'postMessage'.
  
  - Setelah selesai mengirim semua pesan, menutup koneksi dengan thread utama dengan 
    'parentPort.close()'.
*/
