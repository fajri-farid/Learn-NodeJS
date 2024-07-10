// Informasi Penting ada bagian paling bawah!

// Mengimpor modul `process` bawaan Node.js untuk mengakses fitur report dan pengelolaan proses
import process from "process";

// Mengaktifkan pembuatan laporan saat terjadi kesalahan fatal
process.report.reportOnFatalError = true;
// Mengaktifkan pembuatan laporan saat terjadi pengecualian yang tidak tertangani
process.report.reportOnUncaughtException = true;
// Mengaktifkan pembuatan laporan saat proses menerima sinyal tertentu
process.report.reportOnSignal = true;
// Menentukan nama file tempat laporan akan disimpan
process.report.filename = "report.json";

// Fungsi contoh yang akan melempar kesalahan untuk menguji fitur laporan
function sampleError() {
  // Melempar kesalahan dengan pesan "ups"
  throw new Error("ups");
}

// Memanggil fungsi yang akan menyebabkan kesalahan untuk menguji apakah laporan dihasilkan
sampleError();

// CATATAN:
/* 
reportOnFatalError: 
Menentukan apakah laporan harus dihasilkan ketika terjadi kesalahan fatal yang menyebabkan proses berhenti.

reportOnUncaughtException: 
Menentukan apakah laporan harus dihasilkan ketika terjadi pengecualian yang tidak tertangani.

reportOnSignal: 
Menentukan apakah laporan harus dihasilkan ketika proses menerima sinyal tertentu 
(seperti SIGTERM, SIGINT).

filename: 
Menentukan nama file tempat laporan akan disimpan.
*/
