// db.js
const mysql = require('mysql2');

// Membuat koneksi ke database MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',      // Default user 'root'
    password: '12345',      // Passwword yang digunakan
    database: 'sekolah_db' // Nama database yang digunakan
});

// Cek koneksi
db.connect((err) => {
    if (err) {
        console.error('Gagal konek ke database:', err);
    } else {
        console.log('Berhasil konek ke database MySQL');
    }
});

module.exports = db; // Export agar bisa dipakai di file lain