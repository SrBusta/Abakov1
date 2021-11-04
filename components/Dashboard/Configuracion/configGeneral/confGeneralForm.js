import router from 'next/router';
import {useState} from 'react';


export default function confGeneralForm(props) {
   
    const token=props.data.atoken
    const token2=props.data.rtoken

    const [state,setState]=useState({

        firstName: props.data.data.data.firstName,
        lastName: props.data.data.data.lastName,
        username: props.data.data.data.username,
        email: props.data.data.data.email
    }
    );

    const handleChange = async (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const handleSubmit = async event => {
        event.preventDefault();


        const res = await fetch('http://159.223.97.216/api/user', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json',accessToken: token, refreshToken: token2 },
            body: JSON.stringify(state)

        })

        const respuestaJson=await res.json();

        console.log(respuestaJson)

        router.push('/dashboard')
    }

    const { handleSearch } = props

    return (
        <form onSubmit={handleSubmit}> 
            <div className="grid lg:grid-cols-3 grid-cols-1 mt-6  dark:text-white text-gray-900 gap-2 p-4">

                <div className="text-center lg:text-left">
                    <span className="font-semibold">Nombres :</span>
                </div>
                <div className="xl:col-span-2 text-center lg:text-left">
                    <input onChange={handleChange} className="bg-transparent border-b-2  w-3/4 xl:text-left text-center focus:outline-none" type="text" id="firstname" name='firstName' />
                </div>
                <div className="text-center lg:text-left">
                    <span className="font-semibold">Apellidos :</span>
                </div>
                <div className="xl:col-span-2 text-center lg:text-left">
                    <input onChange={handleChange} className=" bg-transparent border-b-2  w-3/4 xl:text-left text-center focus:outline-none" type="text" id="lastname" name='lastName' />
                </div>
                <div className="text-center lg:text-left">
                    <span className="font-semibold">Usuario :</span>
                </div>
                <div className="xl:col-span-2 text-center lg:text-left">
                    <input onChange={handleChange} className="bg-transparent border-b-2 w-3/4 xl:text-left text-center focus:outline-none" type="text" id="user" name='username'/>
                </div>
                <div className="text-center lg:text-left">
                    <span className="font-semibold">Correo :</span>
                </div>
                <div className="xl:col-span-2 text-center lg:text-left">
                    <input onChange={handleChange} className="bg-transparent border-b-2 w-3/4 xl:text-left text-center focus:outline-none" type="text" id="email" name='email'/>
                </div>
                <div className="xl:col-start-2 col-start-1 grid grid-cols-2 gap-2">
                    <button type="submit" className=" bg-gray-300  hover:bg-gray-700 hover:text-gray-200 text-gray-700 p-2 rounded-md  tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-300">
                        Guardar
                    </button>
                    <button className=" bg-gray-300  hover:bg-gray-700 hover:text-gray-200 text-gray-700 p-2  rounded-md tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-300"
                        onClick={handleSearch}
                    >
                        Cancelar
                    </button>
                </div>

            </div>
        </form>)

}