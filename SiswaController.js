// SiswaController.js
const db = require('./db');

class SiswaController {
    
    // Method untuk Mengambil Semua Data
    getAllSiswa(req, res) {
        const sql = "SELECT * FROM siswa";
        db.query(sql, (err, result) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json(result);
        });
    }

    // Method untuk Menambah Data
    createSiswa(req, res) {
        const { kode_siswa, nama_siswa, alamat_siswa, tgl_siswa, jurusan_siswa } = req.body;
        const sql = "INSERT INTO siswa (kode_siswa, nama_siswa, alamat_siswa, tgl_siswa, jurusan_siswa) VALUES (?, ?, ?, ?, ?)";
        const values = [kode_siswa, nama_siswa, alamat_siswa, tgl_siswa, jurusan_siswa];

        db.query(sql, values, (err, result) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json({ message: "Data berhasil ditambahkan!" });
        });
    }

    // Method untuk Update Data
    updateSiswa(req, res) {
        const id = req.params.id;
        const { kode_siswa, nama_siswa, alamat_siswa, tgl_siswa, jurusan_siswa } = req.body;
        const sql = "UPDATE siswa SET kode_siswa=?, nama_siswa=?, alamat_siswa=?, tgl_siswa=?, jurusan_siswa=? WHERE id=?";
        const values = [kode_siswa, nama_siswa, alamat_siswa, tgl_siswa, jurusan_siswa, id];

        db.query(sql, values, (err, result) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json({ message: "Data berhasil diupdate!" });
        });
    }

    // Method untuk Hapus Data
    deleteSiswa(req, res) {
        const id = req.params.id;
        const sql = "DELETE FROM siswa WHERE id = ?";
        db.query(sql, [id], (err, result) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json({ message: "Data berhasil dihapus!" });
        });
    }
}

module.exports = new SiswaController();