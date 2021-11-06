import useSWR from 'swr';
import cookie from 'js-cookie';



const fetcher = (url) => {

    return fetch(url, {
        headers: { accessToken: cookie.get('accessToken'), refreshToken: cookie.get('refreshToken') }
    })
        .then(res => res.json())
        .then(json => json.data);

}

export default function ListProductos({shop_id}) {

    

    const { data, error } = useSWR(`http://159.223.97.216/api/user/shop/${shop_id}/product`, fetcher);







    return (<>
        <div className="">

            <table className="items-center bg-transparent w-full border-collapse text-center">
                <thead>
                    <tr >
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Tipo
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Marca
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Modelo
                        </th>

                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Precio compra
                        </th>

                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Precio venta
                        </th>

                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                            Stock
                        </th>

                    </tr>
                </thead>

                <tbody>



                    {




                        data && data.length > 0 ?


                            data.map(product => (


                                <tr key={product.id}>
                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 ">
                                        {product.type}
                                    </th>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                        {product.brand}
                                    </td>
                                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {product.model}
                                    </td>

                                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {product.priceBuy}
                                    </td>

                                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {product.priceSell}
                                    </td>

                                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {product.stock}
                                    </td>

                                </tr>


                            ))
                            :
                            <tr colSpan="10">
                                
                                <th  colSpan="10" className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700 ">
                                    NO HAY PRODUCTOS
                                </th>

                            </tr>





                    }


                </tbody>

            </table>


        </div>

    </>)
}
