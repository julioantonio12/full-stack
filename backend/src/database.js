const mongoose=require('mongoose')

URI=('mongodb://localhost/ensayo')

mongoose.connect(URI, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false    
})
    .then(db=>console.log('Base de datos conectada'))
    .catch(error=>console.log('Error'))

    module.exports=mongoose