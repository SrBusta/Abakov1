import Link from 'next/link';
import useSWR from 'swr';
import FetcherGet from '../../../lib/FetcherGet';


export default function cardTiendas() {

    const { data, error, mutate } = useSWR('http://localhost/api/user/shop', url => FetcherGet(url));
    if (error) return 'Error: '
    if (!data) return 'Loading'
    console.log(data[0].phone[0].number)
    return (<>
        {data.map(shops => (
            <div className="shadow-md rounded-3xl justify-self-center w-full" key={shops._id}>
              <Link href={`/dashboard/tiendas/${shops.id}`}><a href=''> <img className="cursor-pointer bg-cover bg-center w-full rounded-t-3xl" src="../../../edited2.png" alt="Sunset in the mountains" width="300"
                    height="300" /></a></Link> 
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{shops.name}</div>
                    <span className="dark:text-gray-200 text-gray-900 text-base">
                        <p>{shops.address}</p>
                        <div>{shops.phone[0]?<div>{shops.phone[0].number}</div>:<div></div>}</div>
                    </span>
                </div>
            </div>
        ))}

    </>)
}