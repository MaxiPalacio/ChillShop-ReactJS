 import Usuario from "./Usuario"
 
 const Tutores = () => {
    return (
        <div>
            <h3>Tutores</h3>
            <ul>
            <Usuario nombre='Maxi' rol='Estudiante' edad={18}/>
            <Usuario nombre='nasi' rol='messi' edad={35}/>
            </ul>
        </div>
    )
 }
 export default Tutores