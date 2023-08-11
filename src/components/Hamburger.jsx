export const Hamburger = () => {
    const [hamburguesa, setHarbuerguesa] = useState(true)

    return(
        <div className="hamburguesa" onClick={() => setHarbuerguesa(!hamburguesa)}>
            <span className="lineas"></span>
            <span className="lineas"></span>
            <span className="lineas"></span>
        </div>
    )
}