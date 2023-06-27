


const Usuario = ( {nombre, edad, rol} ) => {
    

    return(
        <li>
            <h3>{nombre}</h3>
            <p>Edad: {edad}</p>
            <p>Rol: {rol}</p>
        </li>
    )
}
export default Usuario






// const Usuario = (props) => {
//     const {nombre, edad, rol} = props
// console.log(props)

//     return(
//         <div>
//             <h3>{nombre}</h3>
//             <p>Edad: {edad}</p>
//             <p>Rol: {rol}</p>
//         </div>
//     )
// }
// export default Usuario