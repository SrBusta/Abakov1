import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Dark, Light } from '../../lib/icons/DarkLight'
import { IconConfiguracion, IconInicio, IconLogout, IconProductos, IconTiendas } from '../../lib/icons/OptionsIcons';
import { TooltipFunction } from '../../lib/TooltipFunction'
import { Tooltip } from '../../lib/Tooltip';
import Link from 'next/link'
import { useTheme } from 'next-themes';
import Navbar from './navbar';
import removeCookie from '../../lib/removeCookie';
import router from 'next/router'

export default function sidebar({ children, active, color,username }) {
    
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    useEffect(() => setMounted(true), []);


    const [activeOption, setActiveOption] = useState(active);


    //TooltipFunction();

    return (<>
        <Head>
            <title>Hola soy el sidebar</title>
        </Head>

        {/* 
        !----------------------- Dashboard -----------------------!
        */}
        <div className="flex md:flex-row h-screen flex-col dark:bg-gray-800">

            <div className="md:flex-grow-0 md:border-2 w-20 flex md:flex-col flex-row fixed bottom-0 md:relative h-12 md:h-auto flex-grow overflow-y-visible">
                {/* 
                !----------------------- Boton Dark / Light -----------------------!
                */}
                <button className="text-black w-min cursor-pointer  ml-2 mb-5 mt-2 md:block hidden absolute z-40"
                    type="button"
                    aria-label="Toggle Dark Mode"
                    onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>

                    {mounted && (resolvedTheme === 'dark' ? (<Dark />) : (<Light />))}
                </button>
                {/*
                !------------------------- Imagen Usuario -------------------------!
                */}
                <div className="border-b-2 md:block hidden mt-12">

                    <div className="mb-2">
                        <img className="relative left-1/2 transform -translate-x-1/2 block w-14 h-14 rounded-full" src='/user.png'></img>
                    </div>

                </div>
                {/*
                !------------------------- Menu Opciones ---------------------------!
                */}
                <div className="flex md:flex-row justify-center flex-col">

                    <ul className="my-14 flex flex-row md:flex-col w-screen">

                        <li className={`menu-opciones efectohover hover:border-red-700  ${activeOption == 'Inicio' ? ('border-2 border-red-700 rounded-lg md:transform-none transform -translate-y-0.5') : ('border-transparent border-2')}`}>
                            <Link href="/dashboard"><a><IconInicio /></a></Link>
                            <Tooltip name="Inicio" nameTooltip="tooltipInicio" />
                        </li>

                        <li className={`menu-opciones efectohover hover:border-yellow-400 ${activeOption == 'Productos' ? ('border-2 border-yellow-400 rounded-lg md:transform-none transform -translate-y-0.5') : ('border-transparent border-2')}`}>
                            <Link href="/dashboard/productos"><a><IconProductos /></a></Link>
                            <Tooltip name="Productos" nameTooltip="tooltipProducto" />
                        </li>

                        <li className={`menu-opciones efectohover hover:border-green-700 ${activeOption == 'Tiendas' ? ('border-2 border-green-800 rounded-lg md:transform-none transform -translate-y-0.5') : ('border-transparent border-2')}`}>
                            <Link href="/dashboard/tiendas"><a><IconTiendas /></a></Link>
                            <Tooltip name="Tiendas" nameTooltip="tooltipTienda" />
                        </li>

                        <li className={`menu-opciones efectohover hover:border-blue-700 ${activeOption == 'Config' ? ('border-2 border-blue-700 rounded-lg md:transform-none transform -translate-y-0.5') : ('border-transparent border-2')}`}>
                            <Link href="/dashboard/configuracion"><a><IconConfiguracion /></a></Link>
                            <Tooltip name="Configuracion" nameTooltip="tooltipConfiguracion" />
                        </li>

                    </ul>

                </div>
                {/*
                !------------------------- Boton Logout ---------------------------!
                */}
                <div className="md:flex flex-row justify-center flex-grow items-end my-10 break-normal cursor-pointer hidden" onClick={() => {
                                {removeCookie()}
                                router.push("/login")
                            }}>
                    <IconLogout />
                </div>
            </div>



            <div className="flex-grow flex flex-col overflow-y-auto">

                <div className="border-2 h-12 flex flex-row px-6">
                    <Navbar colors={color} name={active} user={username}/>
                </div>  

                {children}

            </div>
        </div>



    </>)

};
