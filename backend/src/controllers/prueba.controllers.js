const PruebaCtrl = {}
const Empleado = require('../models/prueba.model')

PruebaCtrl.obtener = (req,res)=>{
    res.send('Funcionando desde GET')
}

PruebaCtrl.crear = async(req,res)=>{
    const {nombre, apellido, salario}=req.body
    const NuevoRegistro = new Empleado({
        nombre,
        apellido,
        salario
    })
    await NuevoRegistro.save()
    res.json({
        mensaje: 'Empleado guardado'
    })
}

PruebaCtrl.actualizar = (req,res)=>{
    res.send('Funcionando desde PUT')
}

PruebaCtrl.eliminar = (req,res)=>{
    res.send('Funcionando desde DELETE')
}

module.exports = PruebaCtrl