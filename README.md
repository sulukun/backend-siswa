# 🏫 Backend Aplikasi Data Siswa (API) - Uji Kompetensi Keahlian (UKK)

Repository ini berisi source code **Backend** (Server Side) untuk aplikasi manajemen data siswa. Dibangun menggunakan **Node.js**, **Express**, dan database **MySQL** dengan penerapan fitur database lanjutan.

## 🚀 Fitur Unggulan (Advanced Features)

Backend ini tidak hanya menggunakan query standar, tetapi juga menerapkan standar keamanan dan integritas data tinggi sesuai kriteria kelulusan:

* **Stored Procedure**: Digunakan untuk proses *Insert Data* (`CALL tambah_siswa`) agar lebih aman dan terstruktur.
* **Trigger Database**:
    * **Auto Generate Kode**: Kode siswa (S-XXX) dibuat otomatis oleh database, bukan input manual.
    * **Auto Uppercase**: Nama siswa otomatis dikonversi menjadi HURUF KAPITAL.
    * **Validasi Duplikat**: Mencegah input data ganda (Nama & Tanggal Lahir sama) langsung di level database.
* **MySQL Function**: Menggunakan fungsi kustom `total_siswa()` untuk menghitung statistik data.
* **Database Transaction**: Menerapkan `Begin Transaction`, `Commit`, dan `Rollback` untuk menjamin integritas data saat operasi Create/Update.
* **OOP Pattern**: Menggunakan konsep *Object Oriented Programming* dengan Class Controller (`SiswaController.js`).

## 🛠️ Teknologi yang Digunakan

* **Runtime**: Node.js
* **Framework**: Express.js
* **Database**: MySQL
* **Library**: `mysql2`, `cors`, `body-parser`

## ⚙️ Cara Instalasi & Menjalankan

1.  **Clone Repository**
    ```bash
    git clone [https://github.com/sulukun/backend-siswa.git](https://github.com/sulukun/backend-siswa.git)
    cd backend-siswa
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Setup Database (PENTING)**
    * Buat database baru di MySQL bernama `sekolah_db`.
    * Jalankan script SQL yang tersedia (pastikan Trigger dan Stored Procedure ikut ter-install).
    * Sesuaikan konfigurasi database di file `db.js` (Username/Password).

4.  **Jalankan Server**
    ```bash
    node index.js
    ```
    Server akan berjalan di `http://localhost:5000`.

## 🔌 API Endpoints

| Method | Endpoint | Deskripsi |
| :--- | :--- | :--- |
| `GET` | `/api/siswa` | Mengambil semua data siswa + info total |
| `POST` | `/api/siswa` | Menambah siswa baru (via Stored Procedure) |
| `PUT` | `/api/siswa/:id` | Mengupdate data siswa |
| `DELETE` | `/api/siswa/:id` | Menghapus data siswa |

---
**Dibuat oleh:** Sulu Edward Julianto