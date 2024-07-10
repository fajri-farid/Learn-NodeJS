import http, { request } from "http";

// Membuat server HTTP
const server = http.createServer((request, response) => {
  // Mencetak metode HTTP dari permintaan (GET, POST, dll)
  console.info(request.method);

  // Mencetak URL yang diminta
  console.info(request.url);

  // Mencetak header permintaan dalam bentuk tabel
  console.table(request.headers);

  // Mengatur header respons
  //   res.writeHead(200, { "Content-Type": "text/plain" });

  // Menulis respon ke klien
  //   response.write("hello HTTP server");

  // * buat perkondisian
  if (request.method === "POST") {
    request.addListener("data", (data) => {
      response.setHeader("Content-Type", "application/json");
      response.write(data);
      response.end();
    });
  } else {
    if (request.url === "/fajri") {
      response.write("Hello Fajri");
    } else {
      response.write(" Hello HTTP, tidak berapa di laman fajri");
    }
  }

  // Mengakhiri respon
  response.end();
  // Server harus secara eksplisit mengakhiri response dengan response.end() untuk memberi tahu klien
  // bahwa semua data telah dikirim dan response selesai.

  // * kenapa request tidak end?
  // Server tidak perlu secara eksplisit "mengakhiri" request karena request berakhir secara alami
  // setelah semua data yang dikirim oleh klien telah diterima oleh server.
});

// Menyetel server agar mendengarkan permintaan pada port 3000
server.listen(3000);

// Buka di browser: http://localhost:3000

/* 
Penjelasan Kode:
1. Mengimpor modul 'http' bawaan Node.js dan metode 'request' dari modul yang sama.
2. Membuat server HTTP menggunakan 'http.createServer', yang menerima fungsi callback dengan dua 
   parameter: 'request' dan 'response'.
   - 'request' adalah objek yang berisi informasi tentang permintaan HTTP yang diterima oleh server.
   - 'response' adalah objek yang digunakan untuk mengirim respon kembali ke klien.
3. Di dalam callback, beberapa informasi tentang permintaan dicetak ke konsol:
   - 'request.method' mencetak metode HTTP dari permintaan, seperti GET atau POST.
   - 'request.url' mencetak URL yang diminta oleh klien.
   - 'request.headers' mencetak header dari permintaan dalam bentuk tabel menggunakan 'console.table'.
4. Mengirimkan respon sederhana dengan teks "hello HTTP server" menggunakan metode 'response.write'.
5. Mengakhiri respon dengan metode 'response.end', yang menandakan bahwa semua data respon telah dikirim 
   ke klien.
6. Menyetel server agar mendengarkan permintaan pada port 3000 dengan menggunakan metode 'server.listen'.
7. Untuk menguji server, buka browser dan akses URL 'http://localhost:3000'. Anda akan melihat pesan 
   "hello HTTP server" ditampilkan di browser dan informasi permintaan dicetak ke konsol server.

Catatan: Server ini adalah contoh dasar dari server HTTP yang menerima permintaan dari klien, mencetak 
         informasi tentang permintaan, dan mengirimkan respon sederhana. Anda dapat memperluas fungsi ini 
         untuk menangani berbagai jenis permintaan dan respon yang lebih kompleks.
*/
