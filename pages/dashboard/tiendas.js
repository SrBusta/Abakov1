import Sidebar from '../../components/Dashboard/sidebar';
import VerficacionTokenUsuario from '../../lib/VerficacionTokenUsuario';
import { useState } from 'react';
import ViewTienda from '../../components/Dashboard/Tiendas/viewTienda'
import NewTienda from '../../components/Dashboard/Tiendas/newTienda'
import useSWR, { mutate } from 'swr';
import FetcherGet from '../../lib/FetcherGet';
import CardTiendas from '../../components/Dashboard/Tiendas/cardTiendas';


export default function tiendas() {

    const [menu, setMenu] = useState("");


    const [modal, setModal] = useState("");


    const [shop, setShop] = useState({
        id: '',
        name: '',
        direccion: '',
    })

    const handleSearch = () => {
        setMenu("")
    }

    const viewModal = () => {
        setModal("true")

    }


    const handleModal = () => {
        setModal("")
    }

    const { data, error } = useSWR('http://localhost/api/user', url => FetcherGet(url))
    if (error) return 'ERROR: '
    if (!data) return 'Loading'

    return (
        <Sidebar active="Tiendas" color='green' username={data.username}>
            <div className='flex-1 md:py-5 md:px-20  p-10 mb-10'>
                <div className='grid grid-cols-1 h-full'>

                    <div className="w-full md:pb-0 pb-16 pt-4 px-7 dark:text-white text-gray-900">
                        {menu == "" ? (<div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-12" >

                            {/* {dataShop.data.map(shops => (
                                <div className="shadow-md rounded-3xl justify-self-center w-full" key={shops._id}>
                                    <img className="cursor-pointer bg-cover bg-center w-full rounded-t-3xl" src="/edited2.png" alt="Sunset in the mountains" width="300"
                                        height="300" onClick={() => { setMenu(shops.name), setShop({ id: shops._id, name: shops.name, direccion: shops.address }) }} />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">{shops.name}</div>
                                        <h1 className="dark:text-gray-200 text-gray-900 text-base">
                                            <p>{shops.address}</p>
                                            <p>{shops.phone.number}</p>
                                        </h1>
                                    </div>
                                </div>
                            ))} */}

                            <CardTiendas />

                            {/* Añadir Tienda **************/}
                            <div className="shadow-md rounded-3xl grid grid-cols-1 justify-self-center w-full">
                                <div className="self-center justify-self-center text-center cursor-pointer" onClick={viewModal}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="font-semibold text-gray-500">Añadir</span>
                                </div>
                            </div>
                            {/**************************** */}

                        </div>) : (<div></div>)}

                        {menu !== "" ? (<ViewTienda handleSearch={handleSearch} shop={shop} />) : (<div></div>)}
                    </div>
                    {modal == "" ? (<></>) : (<NewTienda handleModal={handleModal} />)}

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

