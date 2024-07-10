import cluster from "cluster";
import { copyFileSync } from "fs";
import http from "http";
import os from "os";
import process from "process";

// Mengimpor modul-modul yang diperlukan
// cluster: digunakan untuk membuat cluster worker processes
// copyFileSync: digunakan untuk menyalin file secara sinkron
// http: digunakan untuk membuat server HTTP
// os: digunakan untuk mendapatkan informasi tentang sistem operasi
// process: digunakan untuk mendapatkan informasi tentang proses yang sedang berjalan

// Mengecek apakah ini adalah proses utama
if (cluster.isPrimary) {
  console.info(`Primary process ID: ${process.pid}`);

  // Membuat worker sebanyak jumlah CPU yang tersedia
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }

  // Menambahkan event listener untuk menangani kejadian ketika worker mati
  cluster.addListener("exit", function (worker) {
    console.info(`Worker ${worker.id} has exited`);
    cluster.fork(); // Membuat worker baru jika ada worker yang mati
  });
}

// Mengecek apakah ini adalah worker
if (cluster.isWorker) {
  console.info(`Worker process ID: ${process.pid}`);

  // Membuat server HTTP
  const server = http.createServer((request, response) => {
    response.write(`Response from process ${process.pid}`);
    response.end();

    // Mengakhiri proses worker setelah menangani satu request
    process.exit();
  });

  // Server mendengarkan pada port 3000
  server.listen(3000);
  // Setiap kali kita melakukan request ke http://localhost:3000,
  // worker akan mati setelah menangani request tersebut
}

/*
  Penjelasan Kode:
  
  - Mengimpor modul-modul yang diperlukan: cluster, fs, http, os, dan process.
  - Mengecek apakah ini adalah proses utama menggunakan 'cluster.isPrimary'.
  - Jika ini adalah proses utama:
    - Mencetak ID proses utama ke konsol.
    - Membuat worker sebanyak jumlah CPU yang tersedia menggunakan 'cluster.fork()'.
    - Menambahkan event listener untuk menangani kejadian ketika worker mati. Jika ada worker yang mati, 
      worker baru akan dibuat.
  - Mengecek apakah ini adalah worker menggunakan 'cluster.isWorker'.
  - Jika ini adalah worker:
    - Mencetak ID proses worker ke konsol.
    - Membuat server HTTP yang menulis ID proses worker ke dalam response dan mengakhiri proses setelah 
      menangani satu request.
    - Server mendengarkan pada port 3000. Setiap kali kita melakukan request ke http://localhost:3000, 
      worker akan mati setelah menangani request tersebut.
*/
