import { threadId, Worker } from "worker_threads";

// Membuat dua worker threads dari file 'worker.mjs'
const worker1 = new Worker("./24. Worker Threads/worker.mjs");
const worker2 = new Worker("./24. Worker Threads/worker.mjs");

// Menerima pesan dari worker pertama
worker1.addListener("message", (message) => {
  console.info(`Thread-${threadId} receive from worker 1: ${message}`);
});

// Menerima pesan dari worker kedua
worker2.addListener("message", (message) => {
  console.info(`Thread-${threadId} receive from worker 2: ${message}`);
});

// Mengirim pesan ke worker pertama sebanyak 10
worker1.postMessage(10);

// Mengirim pesan ke worker kedua sebanyak 10
worker2.postMessage(10);

/* 
Penjelasan Kode:
1. Mengimpor 'threadId' dan 'Worker' dari modul 'worker_threads' bawaan Node.js.
2. Membuat dua instance worker dengan constructor 'Worker' dan mengarahkan mereka ke file 
   'worker.mjs' yang akan dijalankan di thread terpisah.
3. Menambahkan event listener 'message' pada worker pertama untuk menerima pesan yang dikirim oleh 
   worker tersebut. Setiap pesan yang diterima akan dicetak ke konsol dengan informasi threadId saat ini.
4. Menambahkan event listener 'message' pada worker kedua dengan fungsi yang sama seperti worker pertama.
5. Mengirim pesan dengan nilai 10 ke worker pertama menggunakan metode 'postMessage'.
6. Mengirim pesan dengan nilai 10 ke worker kedua menggunakan metode 'postMessage'.

Catatan: Output yang dihasilkan bisa bervariasi karena kedua worker dijalankan secara paralel. Oleh 
         karena itu, urutan pesan yang diterima dan dikirim tidak dapat dipastikan.
*/
