import ListProductos from '../../components/Dashboard/Productos/ListProductos';
import Sidebar from '../../components/Dashboard/sidebar';
import VerficacionTokenUsuario from '../../lib/VerficacionTokenUsuario';
import useSWR from 'swr';
import FetcherGet from '../../lib/FetcherGet';



export default function productos() {

    const {data,error,mutate}= useSWR(`http://localhost/api/user`,url=>FetcherGet(url));
    if(error) return 'ERROR '
    if(!data) return 'Loading'

    return (<Sidebar active='Productos' color='yellow' username={data.username}>
        <div className='flex-1 md:py-10 md:px-20  p-10 mb-10'>
            <div className='grid grid-cols-1 h-full'>

                <div className='border-2 overflow-scroll'>


                    <ListProductos/>


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

