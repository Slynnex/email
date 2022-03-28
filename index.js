const express = require('express');
const cors = require('cors')
// crear el servidor
const app = express();


//Habilitar cors
app.use(cors());

// Habilitar express.json
app.use(express.json({ extended: true}));

// puerto de la app
const PORT = process.env.PORT || 4000;

// Importar rutas
app.use('/api/v1/sendEmail', require('./routes/index'));

app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
})
