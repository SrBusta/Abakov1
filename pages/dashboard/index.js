
import InicioEstadistica from '../../components/Dashboard/Index/InicioEstadistica';
import Sidebar from '../../components/Dashboard/sidebar';
import VerficacionTokenUsuario from '../../lib/VerficacionTokenUsuario';
import useSWR from 'swr';
import InicioTienda from '../../components/Dashboard/Index/InicioTienda';
import FetcherGet from '../../lib/FetcherGet';


export default function inicio() {

    

    const { data, error, mutate } = useSWR(`http://localhost/api/user`, url=>FetcherGet(url));
    if(error) return 'Ocurrio un error:'
    if(!data) return 'Loading'

    return (

        <Sidebar active='Inicio' color='red' username={data.username}  >

            <div className='flex-1 md:py-10 md:px-20 p-10 mb-10'>

                <div className='grid md:grid-cols-4 grid-cols-1 h-full gap-8'>


                    {/*
                !------------------------- Tier 1 ---------------------------!
                    */}
                    <div className='border-2 md:col-span-3 col-span-1 shadow-md h-52'>
                        <InicioEstadistica />
                    </div>


                    {/*
                !------------------------- Tier 2 ---------------------------!
                    */}
                    <div className='border-2 shadow-md p-2 overflow-hidden overflow-y-scroll h-52'>

                        <InicioTienda/>

                    </div>


                    {/*
                !------------------------- Tier 3 ---------------------------!
                    */}
                    <div className='border-2 md:col-span-4 col-span-1 shadow-md h-52'>
                        tier3
                    </div>


                </div>

            </div>

        </Sidebar>

    )
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


