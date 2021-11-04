import Sidebar from '../../components/Dashboard/sidebar';
import VerficacionTokenUsuario from '../../lib/VerficacionTokenUsuario';

export default function productos() {
    return (<Sidebar active='Productos' color='yellow'>
        <div className='flex-1 md:py-10 md:px-20  p-10 mb-10'>
            <div className='grid grid-cols-1 h-full'>

                <div className='border-2'>tier1</div>

            </div>
        </div>

    </Sidebar>)
};

export async function getServerSideProps({ req, res }) {

    /*   Verificacion Token Usuario */
    const token = req.cookies.accessToken;
    const token2 = req.cookies.refreshToken; 
    VerficacionTokenUsuario(token,token2);

    return {
        props: {
    
        }
    }
}

