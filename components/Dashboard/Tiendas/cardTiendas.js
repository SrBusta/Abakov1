

export default function cardTiendas({name,address,phone}) {


    return (<>
        <div className="w-64 overflow-hidden shadow-lg rounded-3xl justify-self-center">
            <img className="cursor-pointer" src="/edited2.png" alt="Sunset in the mountains"  width="300"
          height="300" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-200 dark:text-gray-900 text-base">
                    {address}
                    
                    {phone}
                </p>
            </div>

        </div>

    </>)
}