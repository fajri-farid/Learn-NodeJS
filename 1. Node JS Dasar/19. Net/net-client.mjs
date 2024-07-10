import net from "net";

// Membuat koneksi ke server TCP yang berjalan pada host 'localhost' dan port 3000
const client = net.createConnection({
  port: 3000,
  host: "localhost",
});

// Menambahkan event listener untuk event 'data' pada client
client.addListener("data", (data) => {
  // Ketika client menerima data dari server, cetak data tersebut ke konsol
  console.info(`Receive data from server: ${data.toString()}`);
});

// Menggunakan setInterval untuk mengirim data ke server setiap 2000 milidetik (2 detik)
setInterval(() => {
  // Mengirim string "fajri" ke server
  // * \r\n
  // Ini memberi tahu klien bahwa satu baris data telah selesai dan baris baru akan dimulai. Hal ini
  // penting untuk memformat data dengan benar di sisi klien, terutama jika data tersebut akan
  // ditampilkan dalam terminal atau antarmuka pengguna lainnya.
  client.write("fajri\r\n");
}, 2000);

/*
  Penjelasan Kode:

  1. Import modul 'net':
     - Modul 'net' digunakan untuk membuat koneksi TCP di Node.js.
     - `net.createConnection` digunakan untuk membuat koneksi client TCP ke server.

  2. Membuat koneksi client TCP:
     - `net.createConnection({ port: 3000, host: "localhost" })` membuat koneksi client ke server yang 
       berjalan pada host 'localhost' dan port 3000.
     - Parameter `port` adalah port yang digunakan oleh server.
     - Parameter `host` adalah alamat host server.

  3. Menambahkan event listener untuk event 'data':
     - `client.addListener("data", (data) => { ... })` menambahkan event listener untuk event 'data' 
       pada objek client.
     - Event 'data' terjadi ketika client menerima data dari server.

  4. Menerima data dari server:
     - `console.info(`Receive data from server: ${data.toString()}`)` mencetak data yang diterima dari 
       server ke konsol.

  5. Mengirim data ke server secara berkala:
     - `setInterval(() => { ... }, 2000)` menjalankan fungsi callback setiap 2000 milidetik (2 detik).
     - `client.write("fajri\r\n")` mengirim string "fajri" ke server setiap 2 detik.

  Kesimpulan:
  - Kode ini menunjukkan cara membuat client TCP yang terhubung ke server TCP menggunakan modul 'net' 
    di Node.js.
  - Client terhubung ke server yang berjalan pada host 'localhost' dan port 3000.
  - Client menerima data dari server dan mencetaknya ke konsol.
  - Client mengirim string "fajri" ke server setiap 2 detik.
*/
