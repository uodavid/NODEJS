import app from './index'
const port = 4000;

app .listen(port, ()=>{
    console.log(`se ha iniciado la aplicacion node en el puerto ${port}`)
})