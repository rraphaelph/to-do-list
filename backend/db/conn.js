const {Sequelize} = require('sequelize') 

const sequelize = new Sequelize('nodemvc2','root','Rapha1234!',{
    host:'localhost',
    dialect:'mysql',
})
/*
try{
    sequelize.authenticate()
    console.log('Conectado ao sequelize')
}catch(err){
    console.log('Não foi possivel conectar: ', erro)
}
*/
module.exports = sequelize