# Mern Stack Muhammad Rizal Arifin

Kunjungi MongoDB Atlas [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database).

Kunjungi JWT [MongoDB Atlas](https://jwt.io/).



## Penjelasan Video 1
1. **Pengenalan MERN Stack**: MERN stack terdiri dari empat teknologi—MongoDB, Express, React, dan Node.js—yang digunakan bersama untuk membuat aplikasi web interaktif dan berbasis data. Menguasai MERN stack membuat Anda menjadi pengembang full-stack yang mampu membangun bagian depan (front end) dan belakang (back end) dari sebuah situs web.

2. **Penjelasan Teknologi**:
   - **React**: Library front-end untuk membuat antarmuka pengguna dan menangani routing.
   - **Node.js dan Express**: Digunakan untuk membangun API backend yang menangani permintaan dari front-end.
   - **MongoDB**: Database NoSQL untuk menyimpan data aplikasi seperti data pengguna atau blog.

3. **Cara Kerja**: Aplikasi React berjalan di browser untuk menampilkan situs web dan mengirim permintaan data ke backend. Backend (Express di lingkungan Node.js) menangani permintaan ini, berinteraksi dengan database untuk mendapatkan, memperbarui, atau menghapus data, dan kemudian mengirim respons kembali ke aplikasi React di front end.

4. **Keamanan**: Menggunakan backend untuk mengakses database melindungi data sensitif, seperti username dan password admin, dari pengguna situs web, karena kode sensitif tersebut disembunyikan di backend.

5. **Proyek dan Prasyarat**: Seri tutorial ini akan membuat aplikasi pelacakan latihan sebagai proyek. Disarankan memiliki pemahaman dasar tentang masing-masing teknologi sebelum memulai. Tautan ke kursus pengantar untuk setiap teknologi disediakan, serta instruksi untuk menginstal Node.js dan mengunduh file kursus dari GitHub.

## Penjelasan Video 2
1. **Setup Aplikasi Express**: Tutorial dimulai dengan menyiapkan aplikasi Express menggunakan Node.js untuk membuat API yang berkomunikasi dengan database MongoDB dan frontend React.
2. **Struktur Proyek**: Proyek baru dibuat di VS Code dengan dua folder utama: satu untuk kode backend (aplikasi Express) dan satu untuk kode frontend (aplikasi React). Folder backend berisi file entri `server.js`.
3. **Dependencies dan Skrip**: Tutorial menjelaskan cara menginisialisasi file `package.json`, menginstal Express, dan membuat skrip khusus seperti skrip dev untuk menjalankan aplikasi dengan Nodemon.
4. **Variabel Lingkungan**: Dijelaskan cara menyimpan konstanta seperti nomor port di file `.env` untuk menjaga informasi sensitif tetap aman dan tidak terlihat di dalam kode.
5. **Pengujian Rute**: Menggunakan Postman untuk menguji berbagai jenis permintaan (GET, POST, DELETE) ke server dan mencatat rute yang diterima untuk membantu pengembangan lebih lanjut.

## Penjelasan Video 3
- **Menyiapkan Endpoint API**: Tutorial ini membahas tentang menyiapkan berbagai endpoint API untuk aplikasi Express, termasuk handler untuk permintaan GET, POST, DELETE, dan PATCH untuk mengelola data latihan dalam basis data.

- **Mengorganisir Rute**: Alih-alih menempatkan rute langsung di `server.js`, sebuah folder `routes` terpisah dibuat dengan file `workouts.js` untuk menjaga kode tetap rapi dan terorganisir.

- **Menggunakan Express Router**: Express Router digunakan untuk membuat handler rute di `workouts.js`, yang kemudian diekspor dan diintegrasikan ke dalam aplikasi utama menggunakan `app.use()`.

- **Middleware untuk Parsing Permintaan**: Middleware Express `express.json()` digunakan untuk memparsing body permintaan JSON, memungkinkan akses ke data yang dikirim ke server dalam permintaan POST dan PATCH.

- **Pengujian dengan Postman**: Endpoint-endpoint yang dibuat diuji menggunakan Postman untuk memastikan semua rute bekerja dengan benar, dan respons yang diharapkan diterima untuk setiap permintaan.

### Test Api di postman Vs Code
**Untuk menjalankan code gunakan ```nodemon server.js```**
- tes get 
![test api](image.png)
- tes /3823
![3823](image-1.png)
- tes post 
![post](image-2.png)
- delete
![delete](image-3.png)
- update
![update](image-4.png)

## Penjelasan Video 4
1. **Menyiapkan MongoDB Atlas:**
   - Gunakan MongoDB Atlas untuk membuat dan menghosting database online gratis.
   - Buat akun, masuk, dan siapkan kluster bersama.
   - Konfigurasi akses pengguna admin dan pengaturan akses jaringan, termasuk daftar putih IP.

2. **Menghubungkan ke MongoDB dari Aplikasi Node:**
   - Dapatkan string koneksi dari MongoDB Atlas.
   - Simpan string koneksi, nama pengguna, dan kata sandi dalam variabel lingkungan (`.env`).

3. **Menginstal dan Menggunakan Mongoose:**
   - Instal paket Mongoose menggunakan `npm install mongoose`.
   - Gunakan Mongoose sebagai library ODM (Object Data Modeling) untuk berinteraksi dengan database MongoDB.
   - Buat skema dan model untuk menambahkan struktur data yang lebih ketat.

4. **Menghubungkan Aplikasi ke Database:**
   - Impor Mongoose di file `server.js` dan gunakan metode `connect` untuk menghubungkan ke database.
   - Tambahkan logika untuk menangani kesalahan koneksi dan menunggu koneksi berhasil sebelum menerima permintaan.

5. **Mengatasi Kesalahan Autentikasi:**
   - Uji koneksi dengan memasukkan kredensial yang salah untuk memeriksa penanganan kesalahan.
   - Perbaiki kredensial dan pastikan koneksi berhasil sebelum aplikasi mulai mendengarkan permintaan pada port tertentu.

## Penjelasan Video 5
1. **Membuat Skema dan Model**: Tutorial ini menjelaskan cara membuat skema dan model untuk data latihan menggunakan Mongoose. Skema mendefinisikan struktur dokumen dalam koleksi MongoDB, memastikan bahwa mereka mengikuti format yang dapat diprediksi.

2. **Mendefinisikan Properti Skema**: Skema latihan mencakup properti untuk judul, repetisi (reps), dan beban (load), masing-masing dengan tipe yang ditentukan dan aturan wajib (required). Ini memastikan validasi data, sehingga properti tersebut memenuhi kriteria yang ditentukan sebelum disimpan ke database.

3. **Menggunakan Model Mongoose**: Setelah skema didefinisikan, model Mongoose dibuat, memungkinkan interaksi dengan koleksi database. Model ini digunakan untuk membuat, mengambil, dan mengelola dokumen latihan dalam koleksi.

4. **Mengimplementasikan Rute**: Tutorial ini menunjukkan cara menangani permintaan POST untuk membuat dokumen latihan baru. Body permintaan diuraikan untuk mengambil judul, repetisi, dan beban dari permintaan tersebut.

5. **Pengujian dan Validasi**: Pengujian dilakukan menggunakan Postman untuk memastikan bahwa dokumen latihan dapat dibuat dengan benar dan validasi Mongoose berfungsi. Jika properti yang diperlukan hilang, akan ada pesan kesalahan yang dikembalikan. Validasi ini memastikan hanya dokumen yang valid yang disimpan di database.

**Test memasukkan data ke mongodb atlas**
![test mongodb](image-5.png)

## Penjelasan video 6
1. **Pemilahan Tanggung Jawab**: Tutorial ini menekankan pemindahan logika database dari file rute ke file controller khusus untuk menjaga kode tetap terorganisir dan mudah dikelola.

2. **Fungsi Controller**: Tutorial ini menjelaskan pembuatan fungsi-fungsi controller untuk menangani berbagai operasi seperti mendapatkan semua data workout, mendapatkan satu workout, membuat workout baru, menghapus workout, dan memperbarui workout.

3. **Langkah Implementasi**: Prosesnya melibatkan pembuatan folder baru untuk controllers, mengatur file `workoutController.js`, dan menulis fungsi-fungsi seperti `createWorkout`, `getWorkouts`, dan `getWorkout`, memastikan mereka menangani permintaan dan berinteraksi dengan database dengan tepat.

4. **Ekspor dan Impor**: Tutorial ini menunjukkan cara mengekspor fungsi controller dan mengimpornya ke dalam file rute, menggantikan penanganan rute inline dengan pemanggilan fungsi yang lebih bersih.

5. **Validasi dan Penanganan Kesalahan**: Tutorial ini mencakup penambahan pengecekan validitas untuk ID objek dan penanganan kesalahan dengan baik, memastikan permintaan yang tidak valid tidak menyebabkan server crash tetapi mengembalikan pesan kesalahan yang bermakna.

**Mencari data sesuai id**
![id](image-6.png)
**Validasi penanganan kesalahan**
![validasi](image-8.png)

## Penjelasan Video 7 
1. Tutorial ini melanjutkan pengembangan file controller dengan menambahkan fungsi untuk menghapus dan memperbarui data workout.
2. Fungsi `deleteWorkout` melibatkan pengambilan ID dari parameter rute, memvalidasinya, dan menggunakan metode `findOneAndDelete` dari Mongoose untuk menghapus dokumen.
3. Fungsi `updateWorkout` mengambil ID dan memperbarui bidang tertentu dalam dokumen workout menggunakan metode `findOneAndUpdate` dari Mongoose, menyebarkan properti dari `request.body`.
4. Kedua fungsi ini menyertakan pengecekan untuk memastikan workout ada sebelum melanjutkan, dan mengirimkan respons yang sesuai berdasarkan keberhasilan atau kegagalan operasi.
5. Tutorial ini diakhiri dengan menguji fungsi-fungsi ini menggunakan Postman dan mempersiapkan langkah berikutnya untuk membuat front end React yang dapat berinteraksi dengan API.

**Untuk Update di postman**
![update](image-9.png)
**Untuk Cek Sudah Diupadate atau belum**
![cek](image-10.png)

## Penjelasan Video 8
1. **Membuat Aplikasi React**: Tutorial dimulai dengan membuat aplikasi React baru bernama "front end" menggunakan perintah `npx create-react-app`. Tutorial menjelaskan cara navigasi ke folder yang dibuat, menghapus file starter yang tidak diperlukan, dan mempersiapkan aplikasi untuk pengembangan lebih lanjut.

2. **Menyiapkan Routing**: React Router DOM diinstal untuk menangani routing. Tutorial menjelaskan cara mengimpor komponen yang diperlukan (BrowserRouter, Routes, dan Route) dan membuat rute dasar untuk halaman utama dengan mendefinisikan komponen Home baru.

3. **Membuat Komponen Home**: Sebuah komponen Home sederhana dibuat dengan mengembalikan template dasar yang berisi elemen div dan h2. Komponen ini kemudian diekspor dan diimpor ke dalam file App.js untuk digunakan sebagai elemen yang dirender pada rute utama.

4. **Menambahkan Komponen Navbar**: Tutorial melanjutkan dengan membuat komponen Navbar yang dapat digunakan kembali. Komponen ini ditempatkan di dalam folder components dan berisi template header dengan link navigasi ke halaman utama. Navbar ini kemudian diimpor dan dirender di atas semua halaman dalam komponen App.js.

5. **Menambahkan Gaya Dasar**: Beberapa gaya dasar ditambahkan ke dalam file index.css. Gaya-gaya ini mencakup pengaturan font, warna, dan tata letak dasar untuk aplikasi, termasuk penataan untuk komponen Navbar dan div pages.

## penjelasan Video 9 
1. **Mengatur Pengambilan Data di React:** Tutorial ini menjelaskan cara mengambil data dari API backend di aplikasi React menggunakan hook `useEffect` dan `useState`. Dijelaskan juga cara mengimpor hook tersebut dan mengatur fungsi asinkron untuk mengambil data latihan dari backend saat komponen pertama kali dirender.

2. **Mengelola Respons API dan Memperbarui State:** Tutorial ini menjelaskan cara membuat fungsi asinkron untuk mengambil data latihan, memeriksa status respons, menguraikan data JSON, dan memperbarui state komponen dengan data latihan yang diambil menggunakan `setWorkouts`.

3. **Merender Data yang Diambil:** Tutorial ini menjelaskan cara merender data latihan secara kondisional dalam komponen React, memastikan bahwa data hanya dirender ketika sudah tersedia.

4. **Menangani Kesalahan Cross-Origin:** Tutorial ini menguraikan cara menangani kesalahan permintaan lintas asal (cross-origin) dengan menambahkan field proxy di file `package.json` frontend untuk mengarahkan permintaan ke server API selama pengembangan.

5. **Menambahkan Komponen untuk Detail Latihan:** Tutorial ini menunjukkan cara membuat dan menggunakan komponen `WorkoutDetails` untuk merender lebih banyak informasi tentang setiap latihan, termasuk judul, jumlah repetisi, beban, dan tanggal pembuatan, serta menambahkan beberapa CSS untuk memperbaiki tampilan.


## Penjelasan Video 10
- Tutorial menjelaskan cara membuat komponen baru bernama `WorkoutForm` dalam aplikasi stack MERN.
- Komponen `WorkoutForm` memiliki input untuk judul latihan, beban (dalam kg), dan repetisi, yang dikelola menggunakan state React.
- Saat formulir dikirim, tindakan default dicegah, kemudian membuat objek latihan baru dengan data yang diambil dari input.
- Data latihan baru dikirim ke API menggunakan permintaan POST, dan jika berhasil, pesan kesalahan atau keberhasilan akan ditampilkan.
- Komponen ini diekspor dan digunakan di halaman beranda, dan form ditata untuk tampilan yang lebih baik. Jika ada kesalahan, pesan kesalahan akan ditampilkan di bawah form.

## Penjelasan Video 11
1. **Keadaan dan Masalah Saat Ini**: Aplikasi mengambil data di halaman beranda dan memungkinkan penambahan dokumen latihan baru melalui formulir. Namun, dokumen yang baru ditambahkan hanya muncul setelah menyegarkan halaman karena keadaan lokal React untuk latihan tidak disinkronkan dengan basis data.

2. **Gambaran Solusi**: Untuk mengatasi masalah ini, tutorial menyarankan menggunakan React Context untuk mengelola keadaan latihan secara global. Ini menghindari pengoperan keadaan sebagai props dan memungkinkan komponen mengakses dan memperbarui keadaan secara langsung.

3. **Langkah-langkah Implementasi**: 
   - Buat folder `context` dan file `workoutsContext.js`.
   - Buat context dan komponen provider yang akan membungkus seluruh aplikasi.
   - Gunakan `useReducer` untuk mengelola keadaan latihan dengan aksi dispatch.

4. **Penerapan Context Provider**: Impor dan bungkus komponen `App` dengan `WorkoutsContextProvider` di `index.js` agar seluruh komponen dalam aplikasi dapat mengakses context.

5. **Menggunakan Context di Komponen**: Ganti penggunaan `useState` dengan `useWorkoutsContext` di komponen beranda dan formulir latihan untuk mengkonsumsi dan memperbarui context global, memastikan UI selalu sinkron dengan basis data.

## Penjelasan Video 12 
1. **Sinkronisasi Data Real-Time**: Tutorial ini menjelaskan cara menjaga data front-end tetap sinkron dengan database secara real-time menggunakan React Context, memastikan bahwa latihan yang baru ditambahkan muncul tanpa perlu menyegarkan halaman.

2. **Menambahkan Fitur Hapus**: Tutorial ini memperkenalkan penambahan tombol hapus pada setiap item latihan, yang ketika diklik, mengirim permintaan hapus ke API untuk menghapus item dari MongoDB.

3. **Menangani Permintaan Asinkron**: Tutorial ini menunjukkan cara membuat fungsi asinkron untuk menangani permintaan hapus, menggunakan `await` untuk menunggu respons dari API sebelum melanjutkan proses.

4. **Memperbarui State Global**: Setelah item dihapus dari database, tutorial ini menjelaskan cara memperbarui state global menggunakan fungsi `dispatch` dan menghapus item dari state latihan global.

5. **Memverifikasi Respons dan Menghapus dari State**: Tutorial ini juga menekankan pentingnya memeriksa respons dari API sebelum menghapus item dari state, dan menggunakan filter untuk memperbarui array latihan dengan menghapus item yang sesuai.

## Penjelasan Video 13
- Mengatasi pesan error yang tidak ramah pengguna dengan membuat pesan error yang lebih sederhana dan menyoroti field input yang kosong dengan border merah.
- Menambahkan logika di backend pada workout controller untuk memeriksa field yang kosong sebelum menambahkan dokumen ke database.
- Mengembalikan pesan error yang ramah dan daftar field yang kosong ke frontend jika ada field yang tidak diisi.
- Menggunakan state di frontend untuk menyimpan field yang kosong dan mengatur kelas dinamis pada input berdasarkan field yang kosong.
- Menambahkan gaya CSS untuk input dengan kelas error agar memiliki border merah, memperbaiki penampilan form ketika ada error.

## Penjelasan Video 14
- Tutorial ini menyelesaikan proyek stack MERN, memastikan aplikasi berfungsi penuh dengan React, Express, Node.js, dan MongoDB.
- Peningkatan meliputi mengganti teks tombol hapus dengan ikon tempat sampah menggunakan Google Material Icons, serta memformat string tanggal menggunakan paket `date-fns`.
- Langkah-langkah rinci diberikan untuk mengintegrasikan Google Material Icons dengan menambahkan tautan ke perpustakaan font di `index.html` dan menerapkan kelas yang sesuai pada elemen.
- `date-fns` digunakan untuk memformat tanggal dengan cara yang lebih mudah dibaca, seperti menampilkan "3 hari yang lalu".
- Penulis juga memperbaiki peringatan di konsol, menambahkan `dispatch` ke array dependensi di hook `useEffect`, dan memastikan aplikasi berjalan tanpa error.

# MERN Authentication
1. **Membuat Rute Pengguna dan Fungsi Pengontrol**:
   - Membuat file `user.js` di folder rute untuk menangani rute pengguna.
   - Menyiapkan rute untuk login dan daftar sebagai permintaan POST.
   - Mendefinisikan placeholder untuk fungsi penangan login dan daftar di pengontrol pengguna.

2. **Mengimplementasikan Fungsi Pengontrol Pengguna**:
   - Membuat fungsi asinkron untuk login dan daftar pengguna di file `userController.js`.
   - Fungsi ini akan mengambil objek permintaan dan tanggapan, lalu mengirimkan tanggapan JSON sederhana untuk saat ini.

3. **Membuat Model Pengguna**:
   - Membuat file `userModel.js` di folder model.
   - Menggunakan Mongoose untuk mendefinisikan skema pengguna dengan properti email dan kata sandi.
   - Menentukan email sebagai unik dan wajib, serta kata sandi sebagai wajib.

4. **Menghubungkan Rute dan Pengontrol di Server**:
   - Mengimpor rute pengguna di file `server.js` dan mendaftarkannya dengan `app.use('/api/user', userRoutes)`.
   - Memastikan rute login dan daftar terhubung dengan fungsi pengontrol yang sesuai.

5. **Pengujian dengan Postman**:
   - Menggunakan Postman untuk mengirim permintaan POST ke rute login dan daftar.
   - Memastikan tanggapan yang benar diterima dari server, menunjukkan bahwa rute dan pengontrol berfungsi dengan baik.

**Test ```Post``` Login Api**
![login](image-11.png)
**Test ```Post``` SignUp Api**
![Signup](image-7.png)

## Penjelasan Video 3
1. **Pendaftaran dan Hashing Password**: Tutorial menjelaskan cara menangani permintaan pendaftaran pengguna dengan menyimpan email pengguna dan password yang di-hash ke database menggunakan Mongoose.

2. **Metode Statis pada Model Pengguna**: Alih-alih langsung menulis logika pendaftaran di controller, dibuat metode statis bernama `signUp` pada model pengguna untuk menangani pendaftaran pengguna.

3. **Pemeriksaan Email yang Sudah Ada**: Metode statis pertama-tama memeriksa apakah email sudah ada di database untuk mencegah pendaftaran ganda.

4. **Menggunakan Bcrypt untuk Keamanan**: Bcrypt digunakan untuk meng-hash password dengan menambahkan salt sebelum menyimpannya ke database, memastikan keamanan yang lebih baik dengan mencegah paparan password langsung jika terjadi pelanggaran data.

5. **Implementasi dan Pengujian**: Tutorial menunjukkan cara mengimplementasikan metode statis, memperbarui controller pengguna untuk menggunakan metode ini, dan menguji fungsionalitas pendaftaran menggunakan Postman untuk memverifikasi bahwa pengguna baru terdaftar dengan benar dengan password yang di-hash.
**Tes SignUp**
![signup](image-12.png)

## Video 4
```
npm install validator
```

Berikut ringkasan dalam Bahasa Indonesia:

1. **Implementasi Validasi**: Tutorial ini menjelaskan cara menerapkan validasi di sisi server untuk email dan password saat pendaftaran pengguna, memastikan nilai yang dimasukkan valid sebelum menyimpannya ke database.
2. **Instalasi Paket**: Diperkenalkan paket `validator` untuk menangani tugas validasi, sehingga tidak perlu membuat regex secara manual.
3. **Pemeriksaan Field**: Tutorial mencakup cara memeriksa apakah field email dan password tidak kosong, dan mengembalikan error jika salah satu atau kedua field kosong.
4. **Validasi Email dan Password**: Menggunakan metode dari paket `validator`, tutorial memeriksa apakah email valid dan password cukup kuat sesuai dengan kriteria yang ditentukan.
5. **Pengujian dengan Postman**: Menunjukkan cara menguji endpoint menggunakan Postman untuk memastikan validasi berjalan dengan benar, seperti memeriksa apakah email sudah terdaftar dan apakah password memenuhi syarat kekuatan.
**validasi**
![validasi](image-13.png)

## Video 5




