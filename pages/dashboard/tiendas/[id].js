import { useRouter } from "next/router";
import Sidebar from '../../../components/Dashboard/sidebar';
import FetcherGet from '../../../lib/FetcherGet';
import useSWR from 'swr';
import VerficacionTokenUsuario from '../../../lib/VerficacionTokenUsuario';

import { useState } from 'react'
import ListEmpleado from "../../../components/Dashboard/Tiendas/Empleados/ListEmpleado";
import ListProductos from "../../../components/Dashboard/Productos/listProductos";

export default function OneShop() {

    const [menuopciones, setMenuopciones] = useState("Productos");
    const [modal, setModal] = useState("");

    const router = useRouter();
    const { id } = router.query;

    const { data, error } = useSWR(`http://159.223.97.216/api/user/shop/${id}`, url => FetcherGet(url));
    if (error) return 'Error: '
    if (!data) return 'Loading'




    const viewModal = () => {
        setModal("true")
    }

    const handleModal = () => {
        setModal("")
    }
    const change = function (event) {

        const opcion = event.target.value

        if (opcion) {

            setMenuopciones(event.target.value);
            console.log(opcion)

        } else {

            setMenuopciones(event.target.innerHTML);
            console.log(opcion)
        }

    }


    return (<Sidebar active='Tiendas' color='green'>
        <div className="w-full md:pb-0 pb-16 pt-4 px-7 dark:text-white text-gray-900">
            <div className=" justify-center justify-items-center justify-self-center">
                <div className="grid md:grid-cols-4 grid-cols-1 justify-center justify-items-center justify-self-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => router.back()} className="h-10 w-10 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                        </svg>
                    </div>
                    <div className="xl:col-start-2">
                        <img className="bg-cover bg-center rounded-full" src="/edited2.png" alt="Sunset in the mountains" />
                    </div>
                    <div className="xl:col-start-3 self-center text-center xl:text-left">
                        <h3 className="text-2xl mb-2">{data.name}</h3>
                        <h4 className="mb-2">{data.address}</h4>
                    </div>
                </div>



                <div className="w-full h-24 my-10 xl:block hidden">
                    <div className="">
                        <h5 className="text-center mb-5 font-bold text-2xl">Menu de opciones</h5>
                        <div className="grid grid-cols-5 text-center justify-items-center">
                            <div className="w-3/4 rounded-2xl shadow-md fondo5 bg-gray-100 dark:bg-gray-600 dark:shadow-md text-center cursor-pointer dark:text-gray-200 text-gray-900">
                                <div className="text-center p-2" onClick={change} >Productos</div>
                            </div>
                            <div className="w-3/4 rounded-2xl shadow-md fondo5 bg-gray-100 dark:bg-gray-600 dark:shadow-md text-center cursor-pointer dark:text-gray-200 text-gray-900">
                                <div className="text-center p-2" onClick={change}>Kardex</div>
                            </div>
                            <div className=" w-3/4 rounded-2xl shadow-md fondo5 bg-gray-100 dark:bg-gray-600 dark:shadow-md text-center cursor-pointer dark:text-gray-200 text-gray-900">
                                <div className="text-center p-2" onClick={change}>Empleados</div>
                            </div>
                            <div className="w-3/4 rounded-2xl shadow-md fondo5 bg-gray-100 dark:bg-gray-600 dark:shadow-md text-center cursor-pointer dark:text-gray-200 text-gray-900">
                                <div className="text-center p-2" onClick={change}>Movimientos</div>
                            </div>
                            <div className="w-3/4 rounded-2xl shadow-md fondo5 bg-gray-100 dark:bg-gray-600 dark:shadow-md text-center cursor-pointer dark:text-gray-200 text-gray-900">
                                <div className="text-center p-2" onClick={change}>Datos</div>
                            </div>
                        </div>
                    </div>
                    {modal == "" ? (<></>) : (<NewEmpleados handleModal={handleModal} data={props} />)}
                </div>

                <div className="xl:hidden  my-10 grid grid-cols-1 justify-self-center">
                    <h5 className="text-center mb-5 font-bold text-2xl">Menu de opciones</h5>
                    <select value={menuopciones} onChange={change} className="rounded-2xl shadows fondo5 dark:bg-gray-300 dark:shadow-md text-center cursor-pointer text-gray-900 dark:text-gray-200 p-2">
                        <option>Productos</option>
                        <option>Kardex</option>
                        <option>Empleados</option>
                        <option>Movimientos</option>
                        <option>Datos</option>
                    </select>
                </div>


                <div className="grid grid-cols-1 shadows dark:shadow-lg rounded-2xl overflow-auto max-h-72">

                {menuopciones == 'Productos' ? <ListProductos shop_id={id}/> : (menuopciones == 'Kardex' ? 'KARDEX' : (menuopciones == 'Empleados' ?

                    <>  
                        <button onClick={viewModal} className="p-4 ">+</button>
                        <ListEmpleado shop_id={id} />
                    </>

                    : 'Datos'))}



            </div>
            </div>
        </div>
    </Sidebar>)
};

export async function getServerSideProps({ req, res }) {

    /*   Verificacion Token Usuario */
    const token = req.cookies.accessToken;
    const token2 = req.cookies.refreshToken;
    VerficacionTokenUsuario(token, token2);


    return {
        props: {
        }
    }
}

