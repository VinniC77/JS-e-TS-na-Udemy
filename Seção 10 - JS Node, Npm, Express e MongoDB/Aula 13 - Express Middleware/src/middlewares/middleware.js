// Não podemos espequcer do "next" no middleware, caso contrário a requisição não termina e ficará no looping infinito.
module.exports = (req, res, next) => {
    next();
}