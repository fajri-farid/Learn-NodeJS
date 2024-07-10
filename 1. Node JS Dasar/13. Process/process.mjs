// sebenarnya ini bisa diakses dengan global, tetapi bagusnya klw dipanggil secara
// langsung aja

// Mengimpor modul `process` bawaan Node.js
import process from "process";

// Menambahkan event listener untuk peristiwa "exit"
// Listener ini akan dipanggil saat proses Node.js akan keluar
process.addListener("exit", function (exitCode) {
  // Mencetak kode keluar (exit code) ke konsol
  console.log(`NodeJS exit with code ${exitCode}`);
});

// Mencetak versi Node.js yang sedang digunakan
console.info(process.version);

// Mencetak daftar argumen yang diteruskan ke proses Node.js
console.info(process.argv);

// Mencetak informasi laporan proses Node.js
console.info(process.report);

// Mencetak daftar variabel lingkungan (environment variables)
console.info(process.env);

// Mengakhiri proses Node.js dengan kode keluar 1
process.exit(1);

// Baris ini tidak akan pernah dieksekusi karena proses sudah dihentikan di atas
console.info("not printed cause already exit");
