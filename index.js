const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const siswaController = require('./SiswaController');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Routes (OOP Style)
app.get('/api/siswa', (req, res) => siswaController.getAllSiswa(req, res));
app.post('/api/siswa', (req, res) => siswaController.createSiswa(req, res));
app.put('/api/siswa/:id', (req, res) => siswaController.updateSiswa(req, res));
app.delete('/api/siswa/:id', (req, res) => siswaController.deleteSiswa(req, res));

app.listen(PORT, () => {
    console.log(`Server Backend berjalan di http://localhost:${PORT}`);
});