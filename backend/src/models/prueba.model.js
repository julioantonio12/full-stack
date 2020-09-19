const mongoose = require('mongoose')

const EmpleadoSchema = new mongoose.Schema ({
    nombre: {
        type: String,
        required: true,
    },

    apellido: {
        type: String,
        required: true,
    },

    salario: {
        type: String,
        required: true
    }
});

module.exports = Empleado = mongoose.model("prueba.model", EmpleadoSchema)

module.exports = Empleado