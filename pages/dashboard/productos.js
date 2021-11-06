import ListProductos from '../../components/Dashboard/Productos/ListProductos';
import Sidebar from '../../components/Dashboard/sidebar';
import VerficacionTokenUsuario from '../../lib/VerficacionTokenUsuario';

export default function productos({ dataProducts }) {


    return (<Sidebar active='Productos' color='yellow'>
        <div className='flex-1 md:py-10 md:px-20  p-10 mb-10'>
            <div className='grid grid-cols-1 h-full'>

                <div className='border-2'>


                    <ListProductos shop_id={'617c2af41713d8d4a2dc1322'}/>


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

