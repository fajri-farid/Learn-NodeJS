// Mengimpor modul `readline` bawaan Node.js untuk membaca input dari terminal
import readline from "readline";
// Mengimpor modul `process` bawaan Node.js untuk berinteraksi dengan proses yang sedang berjalan
import process from "process";

// Membuat antarmuka readline untuk menerima input dari proses standar input (stdin) dan mengirim
// output ke proses standar output (stdout)
const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Menggunakan metode `question` untuk meminta input dari pengguna
// Pertanyaan "siapa nama anda?" akan ditampilkan di terminal
input.question("siapa nama anda?", (name) => {
  // Fungsi callback yang akan dipanggil setelah pengguna memberikan input
  // Input pengguna akan disimpan dalam variabel `name`
  console.log(`hello bro ${name}`); // Mencetak pesan sapaan dengan nama yang diberikan oleh pengguna
  input.close(); // Menutup antarmuka readline setelah mendapatkan input
});
