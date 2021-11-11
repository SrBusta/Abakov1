import useSWR from 'swr';
import FetcherGet from '../../../lib/FetcherGet';



export default function InicioTienda() {

    const { data, error } = useSWR(`http://localhost/api/user/shop`, url=>FetcherGet(url));
    if(error) return 'Ocurrio un error:'
    if(!data) return 'Loading'
    return(<>

        {data.map(shops=>(
             <div key={shops._id}>
             <span>{shops.name}</span>
             <span>{shops.address}</span>
             
         </div>
        ))

        }
    </>)
};
