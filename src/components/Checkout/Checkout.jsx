import { addDoc, collection, documentId, getDoc, getDocs, query, where, writeBatch } from "firebase/firestore"
import { db } from "../../firebase/config"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { Link, Navigate } from "react-router-dom";
import './checkout.scss'

const schema = Yup.object().shape({
    nombre: Yup.string()
                .min(3,'El nombre es muy corto')
                .max(20,'Maximo 20 caracteres')
                .required('Este campo es obligatorio'),
    direccion: Yup.string()
                .min(6,'La direccion es muy corta')
                .max(20,"Maximo 15 caracteres")
                .required("Este campo es obligatorio"),
    email: Yup.string()
                .required('Este campo es obligatorio')
                .email('El email es invalido')
})
export const Checkout = () => {
    const {cart, totalCompra, vaciarCarrito } = useContext(CartContext)
    const [loading,setLoading] = useState(false)
    const [orderId,setOrderId] = useState(null)

     const handleSubmit = async (values) => {

        setLoading(true);

        const orden = {
            cliente: values,
            items: cart.map(item => ({id: item.id, precio: item.precio, nombre: item.nombre, cantidad:item.cantidad})),
            total: totalCompra(),
            fyh: new Date()
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")
        const q = query(productosRef,where(documentId(), "in", cart.map(item => item.id)))

        const productos = await getDocs(q)
        const outOfStock = []

        productos.docs.forEach((doc) => {
            const item = cart.find(prod => prod.id === doc.id )
            const stock = doc.data().stock
                
            if (stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit()
            const doc = await addDoc(ordersRef, orden)

            vaciarCarrito()
            setOrderId(doc.id)
        } else {
            alert('Hay items sin stock')
            console.log(outOfStock)
        }

        setLoading(false)
    }
    if (orderId) {
        return(
            <div className="compraMainContainer">
                <h2>Tu compra se realizo correctamente</h2>
                <p>Tu número de orden es: <strong>{orderId}</strong></p>
                <button className="botonVolver"><Link to='/' className="botonVolver">Volver</Link></button>
            </div>
        )
    }
    if (cart.length === 0) {
        return(<Navigate to="/"/>);
    }
    return(
        
        <div className="checkoutMainContainer">
                <h1>Checkout</h1>
                <hr />
                <Formik
                initialValues={{
                    nombre: '',
                    direccion: '',
                    email: ''
                }}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                    {() => (
                        <Form>
                            <Field placeholder="Tu nombre" className="form" type="text" name="nombre"/>
                            <ErrorMessage name="nombre" component="p" className="errorMessage"/> <br />

                            <Field placeholder="Tu direccion" className="form" type="text" name="direccion"/>
                            <ErrorMessage name="direccion" component="p" className="errorMessage"/> <br />

                            <Field placeholder="Correo electronico" className="form" type="email" name="email"/>
                            <ErrorMessage name="email" component="p" className="errorMessage"/> <br />
                            
                            <button disabled={ loading } type="submit" className="botonVolver">Enviar</button>
                        </Form>
                    )}

                </Formik>
            </div>  
    )
}