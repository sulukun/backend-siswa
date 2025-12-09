const db = require('./db');

class SiswaController {
    
    getAllSiswa(req, res) {
        const sql = "SELECT *, total_siswa() as info_total FROM siswa";
        db.query(sql, (err, result) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json(result);
        });
    }

    createSiswa(req, res) {
        const { nama_siswa, jenis_kelamin, alamat_siswa, tgl_siswa, jurusan_siswa } = req.body;

        db.beginTransaction((err) => {
            if (err) return res.status(500).json(err);

            const sql = "CALL tambah_siswa(?, ?, ?, ?, ?)";
            const values = [nama_siswa, jenis_kelamin, alamat_siswa, tgl_siswa, jurusan_siswa];

            db.query(sql, values, (err, result) => {
                if (err) {
                    return db.rollback(() => {
                        console.error("Error SQL:", err);
                        res.status(400).json({ error: err.sqlMessage || "Gagal menyimpan data" });
                    });
                }
                db.commit((err) => {
                    if (err) return db.rollback(() => res.status(500).json(err));
                    res.status(200).json({ message: "Data berhasil disimpan!" });
                });
            });
        });
    }

    updateSiswa(req, res) {
        const id = req.params.id;
        const { nama_siswa, jenis_kelamin, alamat_siswa, tgl_siswa, jurusan_siswa } = req.body;
        
        db.beginTransaction((err) => {
            if (err) return res.status(500).json(err);

            const sql = "UPDATE siswa SET nama_siswa=?, jenis_kelamin=?, alamat_siswa=?, tgl_siswa=?, jurusan_siswa=? WHERE id=?";
            const values = [nama_siswa, jenis_kelamin, alamat_siswa, tgl_siswa, jurusan_siswa, id];

            db.query(sql, values, (err, result) => {
                if (err) return db.rollback(() => res.status(500).json(err));
                
                db.commit((err) => {
                    if (err) return db.rollback(() => res.status(500).json(err));
                    res.status(200).json({ message: "Data berhasil diupdate!" });
                });
            });
        });
    }

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