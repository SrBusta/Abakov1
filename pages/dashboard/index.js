
import Sidebar from '../../components/Dashboard/sidebar';
import VerficacionTokenUsuario from '../../lib/VerficacionTokenUsuario';



export default function inicio({ dataUser, dataShop }) {


    return (

        <Sidebar active='Inicio' color='red' username={dataUser.data.username} >


            <div className='flex-1 md:py-10 md:px-20 p-10 mb-10'>

                <div className='grid md:grid-cols-4 grid-cols-1 h-full gap-8'>


                    {/*
                !------------------------- Tier 1 ---------------------------!
                    */}
                    <div className='border-2 md:col-span-3 col-span-1 shadow-md h-52'>
                        tier1
                    </div>


                    {/*
                !------------------------- Tier 2 ---------------------------!
                    */}
                    <div className='border-2 shadow-md p-2 overflow-hidden overflow-y-scroll h-52'>

                        {dataShop.data.map(shops => (
                            <div key={shops._id}>
                                {shops.name}
                                {shops._id}
                                {shops.address}
                            </div>
                        ))}

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
    VerficacionTokenUsuario(token,token2);

    /*    Datos generales de User */
    const userRes = await fetch('http://159.223.97.216/api/user', {
        method: 'GET',
        headers: { accessToken: token, refreshToken: token2 },

    })
    const userJson = await userRes.json();

    /*    Datos de tiendas de User */
    const shopRes = await fetch('http://159.223.97.216/api/user/shop', {
        method: 'GET',
        headers: { accessToken: token, refreshToken: token2 },

    })
    const shopJson = await shopRes.json();




    return {
        props: {
            dataUser: userJson, dataShop: shopJson
        }
    }
}


