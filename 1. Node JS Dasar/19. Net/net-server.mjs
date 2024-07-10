import net from "net";

// Membuat server TCP menggunakan modul 'net'
const server = net.createServer((client) => {
  // Ketika ada client yang terhubung ke server, jalankan callback ini
  console.info("client masuk");

  // Menambahkan event listener untuk event 'data' pada client
  client.addListener("data", (data) => {
    // Ketika server menerima data dari client, cetak data tersebut ke konsol
    console.info(`Receive data ${data.toString()}`);

    // Mengirim balasan ke client dengan menambahkan "hello" sebelum data yang diterima
    // * \r\n
    // Ini memberi tahu klien bahwa satu baris data telah selesai dan baris baru akan dimulai. Hal ini
    // penting untuk memformat data dengan benar di sisi klien, terutama jika data tersebut akan
    // ditampilkan dalam terminal atau antarmuka pengguna lainnya.
    client.write(`hello ${data.toString()}\r\n`);
  });
});

// Memulai server untuk mendengarkan koneksi pada port 3000 dan host 'localhost'
server.listen(3000, "localhost");

/*
 * Penjelasan Kode:

  1. Import modul 'net':
     - Modul 'net' digunakan untuk membuat server dan client TCP di Node.js.
     - `net.createServer` digunakan untuk membuat server TCP.

  2. Membuat server TCP:
     - `net.createServer((client) => { ... })` membuat server TCP dan menjalankan callback setiap kali 
       client terhubung.
     - Parameter `client` adalah objek socket yang mewakili koneksi client.

  3. Menangani koneksi client:
     - `console.info("client masuk")` mencetak pesan ke konsol ketika ada client yang terhubung ke server.

  4. Menambahkan event listener untuk event 'data':
     - `client.addListener("data", (data) => { ... })` menambahkan event listener untuk event 'data' 
       pada objek client.
     - Event 'data' terjadi ketika server menerima data dari client.

  5. Menerima dan mengirim data:
     - `console.info(`Receive data ${data.toString()}`)` mencetak data yang diterima dari client ke 
       konsol.
     - `client.write(`hello ${data.toString()}\r\n`)` mengirim balasan ke client dengan menambahkan 
       "hello" sebelum data yang diterima.

  6. Memulai server:
     - `server.listen(3000, "localhost")` memulai server untuk mendengarkan koneksi pada port 3000 
       dan host 'localhost'.

  Kesimpulan:
  - Kode ini menunjukkan cara membuat server TCP sederhana menggunakan modul 'net' di Node.js.
  - Server mendengarkan koneksi pada port 3000 dan host 'localhost'.
  - Ketika ada client yang terhubung, server menerima data dari client, mencetaknya ke konsol, dan 
    mengirim balasan ke client dengan menambahkan "hello" sebelum data yang diterima.
*/
