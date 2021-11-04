import Sidebar from '../../components/Dashboard/sidebar';
import VerficacionTokenUsuario from '../../lib/VerficacionTokenUsuario';
import ConfigGeneral from '../../components/Dashboard/Configuracion/configuracionGeneral'
import ConfigEmpresa from '../../components/Dashboard/Configuracion/configuracionEmpresa'




export default function configuracion({ dataUser,Atoken,Rtoken }) {



    return (
        <Sidebar active="Config" color='blue' username={dataUser.data.username}>
            <div className="grid xl:grid-cols-2 gap-4 grid-cols-1 mx-8 mt-6 xl:mb-0 mb-20">
                <div className="xl:col-span-2 justify-center items-center justify-self-center">
                    <div className="justify-center flex">

                        <img className="w-52 h-52 rounded-full" src='/user.png' />
                        <div className=" self-end text-black cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                    </div>
                    <div className="text-3xl font-bold text-black dark:text-white text-center">{dataUser.data.firstName} {dataUser.data.lastName}</div>
                </div>
                <ConfigGeneral data={dataUser} atoken={Atoken} rtoken={Rtoken}/>
                <ConfigEmpresa data={dataUser} atoken={Atoken} rtoken={Rtoken}/>
            </div>
        </Sidebar>
    )
};

export async function getServerSideProps({ req, res }) {

    /*   Verificacion Token Usuario */
    const token = req.cookies.accessToken;
    const token2 = req.cookies.refreshToken;
    VerficacionTokenUsuario(token, token2);

    /*    Datos generales de User */
    const userRes = await fetch('http://159.223.97.216/api/user', {
        
        method: 'GET',
        headers: { accessToken: token, refreshToken: token2 }

    })
    const userJson = await userRes.json();

    return {
        props: {
            dataUser: userJson, Atoken:token, Rtoken:token
        }
    }
}



