import https from "https";

// URL endpoint untuk permintaan POST
const url = "https://eocqthj0okblx6p.m.pipedream.net";

// Membuat objek permintaan HTTPS dengan konfigurasi yang diperlukan
const request = https.request(
  url,
  {
    method: "POST", // Metode HTTP yang digunakan adalah POST
    headers: {
      "Content-Type": "application/json", // Jenis konten yang dikirim adalah JSON
      Accept: "application/json", // Menerima respon dengan format JSON
    },
  },
  function (response) {
    // Menambahkan event listener untuk menerima data dari respon
    response.addListener("data", (data) => {
      console.info(`Receive: ${data.toString()}`); // Mencetak data yang diterima ke konsol
    });
  }
);

// Membuat body permintaan dalam format JSON
const body = JSON.stringify({
  firstName: "Fajri", // Nama depan
  lastName: "Farid", // Nama belakang
});

// Menulis body permintaan ke stream permintaan
request.write(body);

// Menutup stream permintaan, mengirim permintaan ke server
request.end();

/* 
Penjelasan Kode:
1. Mengimpor modul 'https' bawaan Node.js.
2. Mendefinisikan URL endpoint yang akan menerima permintaan POST.
3. Membuat permintaan HTTPS menggunakan 'https.request' dengan parameter berikut:
   - URL endpoint.
   - Objek konfigurasi dengan metode HTTP 'POST' dan header yang menunjukkan jenis konten sebagai JSON.
   - Fungsi callback yang akan dipanggil saat respon diterima.
4. Menambahkan event listener 'data' pada objek 'response' untuk menangani data yang diterima dari 
   server. Data tersebut dicetak ke konsol dalam bentuk string.
5. Membuat body permintaan dalam format JSON yang berisi objek dengan 'firstName' dan 'lastName'.
6. Menulis body permintaan ke stream permintaan menggunakan metode 'write'.
7. Menutup stream permintaan menggunakan metode 'end', yang akan mengirim permintaan ke server.

Catatan: Kode ini melakukan permintaan HTTP POST ke URL yang ditentukan, mengirimkan data JSON dengan 
         nama depan dan nama belakang, serta mencetak respon dari server ke konsol.
*/
