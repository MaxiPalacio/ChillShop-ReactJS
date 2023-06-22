const users = [
    {
        Id: 1,
        nombre: 'fede',
        rol: 'tutor'
    },
    {
        Id: 2,
        nombre: 'ivan',
        rol: 'tutor regular'
    },
    {
        Id: 3,
        nombre: 'Matias',
        rol: 'tutor regular'
    },
    {
        Id: 4,
        nombre: 'conrado',
        rol: 'lider'
    },
]

// const resultado = users.find( (user) => user.nombre === 'Matias')
// console.log(resultado)

function encontrar(arr,fn) {
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]

        if (fn( current) === true){
            return current
        }
    }
}

function filtrar(arr, fn){
    var filter = []
    for (var i=0 ; i < arr.length; i++){
        var current = arr[i]

        if (fn( current) === true){
            filter.push(current)
        }     
}
return filter
}

const resultado =  encontrar(users, (el) => el.rol === 'tutor regular')
const resultado2 = filtrar(users, (user) => user.rol === 'tutor regular')
console.log(resultado2);