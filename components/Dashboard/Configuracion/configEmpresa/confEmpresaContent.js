

export default function confEmpresaContent(props) {

    return (<div className="grid lg:grid-cols-3 grid-cols-1 mt-6  dark:text-white text-gray-900 gap-2 p-4">
        <div className="text-center lg:text-left">
            <span className="font-semibold">Nombre de Empresa :</span>
        </div>
        <div className="xl:col-span-2 text-center lg:text-left border-b-2 border-transparent">
            <span>{props.data.data.data.business.name}</span>
        </div>
        <div className=" text-center lg:text-left">
            <span className="font-semibold">Ruc :</span>
        </div>
        <div className="xl:col-span-2 text-center lg:text-left border-b-2 border-transparent">
            <span>{props.data.data.data.business.ruc}</span>
        </div>
        <div className="text-center lg:text-left">
            <span className="font-semibold">Descripcion :</span>
        </div>
        <div className="xl:col-span-2 text-center lg:text-left border-b-2 border-transparent">
            <span>{props.data.data.data.business.description}</span>
        </div>
    </div>)
}