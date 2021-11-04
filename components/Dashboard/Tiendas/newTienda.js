import React from 'react';
import { useState } from "react";
import cookie from 'js-cookie';
import router from 'next/router';

export default function newTienda(props) {

    const [state, setState] = useState({
        name: '',
        description: 'ddd1111',
        address: '',
        namep: 'nnnnnn',
        number: '',
        descriptionp: 'ddddd'
    })

    const [shopstate, setShopstate] = useState({
        name: '',
        description: '',
        address: '',
        phone: {
            name: '',
            number: '',
            description: ''
        }
    })

    const handleChange = async (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setState((prevState) => ({
            ...prevState,
            [name]: value
        }))


    }

    const handleSubmit = async event => {
        event.preventDefault();

        setShopstate({
            name: state.name,
            description: state.description,
            address: state.address,
            phone: {
                name: 'nnnnnn',
                number: state.number,
                description: state.descriptionp
            }
        })

        const res = await fetch('http://159.223.97.216/api/user/shop', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', accessToken: cookie.get('accessToken'), refreshToken: cookie.get('refreshToken') },
            body: JSON.stringify(state),
            credentials: 'same-origin'
        })
            router.push('/dashboard')
    }
            

    const { handleModal } = props

    return (<>
        <div className="modal open py-32 px-10 min-h-screen">
            <div className="bg-white dark:bg-gray-100 rounded-3xl p-10 md:w-3/4 lg:w-1/2 mx-auto">
                <h2 className="dark:text-white font-bold text-gray-600 ">Nueva Tienda</h2>

                <form className="modal-conteiner" onSubmit={handleSubmit}>
                    <div className="flex items-center mb-5">
                        <label htmlFor="name" className="inline-block w-20 mr-6 text-right font-bold dark:text-white text-gray-600">Nombre</label>
                        <input type="text" id="name" name="name" placeholder="Nombre" onChange={handleChange}
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                              text-gray-600 placeholder-gray-400 outline-none"></input>
                    </div>
                    <div className="flex items-center mb-5">
                        <label htmlFor="name" className="inline-block w-20 mr-6 text-right font-bold dark:text-white text-gray-600">Direccion</label>
                        <input type="text" id="add" name="address" placeholder="Direccion" onChange={handleChange}
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                              text-gray-600 placeholder-gray-400 outline-none"></input>
                    </div>
                    <div className="flex items-center mb-5">
                        <label htmlFor="name" className="inline-block w-20 mr-6 text-right font-bold dark:text-white text-gray-600">Telefono</label>
                        <input type="number" id="num" name="number" placeholder="Telefono" onChange={handleChange}
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                              text-gray-600 placeholder-gray-400 outline-none"></input>
                    </div>
                    <div className="flex items-center mb-5">
                        <label htmlFor="name" className="inline-block w-20 mr-6 text-right font-bold dark:text-white text-gray-600">Imagen</label>
                        <input type="file" id="123" name="123" placeholder="Imagen"
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                              text-gray-600 placeholder-gray-400 outline-none"></input>
                    </div>

                    <div className="text-right mx-2">
                        <button className="py-3 px-8 bg-green-400 text-white font-bold mx-2" type='submit' >Agregar</button>
                        <button className="py-3 px-8 bg-red-400 text-white font-bold" onClick={handleModal} >Cerrar</button>
                    </div>

                </form>
            </div>
        </div>

    </>)
}