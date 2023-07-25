import ItemCard from "../ItemCard/ItemCard";

export const ItemList = ({productos}) => {
    return (
    <>
        <h1 style={{color:'white',fontSize:'2rem'}}>Productos</h1>
        <hr />
        <div className="main-container">
            {
                productos.map((prod) => <ItemCard key={prod.id} item={prod}/>)
            }
        </div>
    </>
    )
}