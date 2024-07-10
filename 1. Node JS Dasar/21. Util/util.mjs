import util from "util";

// Mendefinisikan variabel untuk nama depan dan nama belakang
const firstName = "fajri";
const lastName = "farid";

// Menggunakan template literals (cara baru) untuk mencetak pesan ke konsol
console.info(`hello ${firstName} ${lastName}`);

// Menggunakan util.format (cara lama) untuk mencetak pesan ke konsol
console.info(util.format("hello %s %s", firstName, lastName));

// Mendefinisikan objek Person
const Person = {
  firstName: "Fajri",
  lastName: "Farid",
};

// Menggunakan template literals dan JSON.stringify untuk mencetak objek ke konsol
console.log(`Person: ${JSON.stringify(Person)}`);

// Menggunakan util.format untuk mencetak objek ke konsol
console.log(util.format("Person: %j", Person));

/*
 * Penjelasan Kode:

  1. Import modul 'util':
     - Modul 'util' menyediakan utilitas yang beragam yang membantu dalam pengembangan aplikasi Node.js.
     - Salah satu fungsi yang sering digunakan dari modul ini adalah `util.format`.

  2. Mendefinisikan variabel untuk nama depan dan nama belakang:
     - `const firstName = "fajri";`
     - `const lastName = "farid";`

  3. Menggunakan template literals (cara baru):
     - Template literals adalah cara modern dan mudah untuk menyisipkan variabel ke dalam string.
     - `console.info(`hello ${firstName} ${lastName}`);` mencetak pesan ke konsol menggunakan template 
       literals.

  4. Menggunakan util.format (cara lama):
     - Sebelum template literals, `util.format` digunakan untuk format string dengan menyisipkan variabel.
     - `util.format("hello %s %s", firstName, lastName);` menggunakan placeholder `%s` untuk menyisipkan 
       string.
     - `console.info(util.format("hello %s %s", firstName, lastName));` mencetak pesan ke konsol 
       menggunakan util.format.

  5. Mendefinisikan objek Person:
     - `const Person = { firstName: "Fajri", lastName: "Farid" };`
     - Objek `Person` memiliki dua properti: `firstName` dan `lastName`.

  6. Menggunakan template literals dan JSON.stringify:
     - `JSON.stringify` digunakan untuk mengonversi objek JavaScript menjadi string JSON.
     - `console.log(`Person: ${JSON.stringify(Person)}`);` mencetak representasi string JSON dari 
       objek `Person` ke konsol.

  7. Menggunakan util.format untuk objek:
     - `util.format` memiliki placeholder `%j` untuk menyisipkan representasi JSON dari objek.
     - `console.log(util.format("Person: %j", Person));` mencetak representasi JSON dari objek `Person` 
       ke konsol menggunakan util.format.

  Kesimpulan:
  - Kode ini menunjukkan dua cara berbeda untuk menyisipkan variabel ke dalam string dan mencetaknya ke 
    konsol di Node.js.
  - Template literals adalah cara modern dan lebih mudah dibaca, sedangkan `util.format` adalah cara 
    lama yang masih berguna dalam beberapa kasus.
  - `JSON.stringify` dan placeholder `%j` dalam `util.format` digunakan untuk mencetak objek JavaScript 
    sebagai string JSON.
*/
