import { useEffect, useState } from 'react'
import '../App.css'
import {getVehicles} from '../controllers/vehicles-controllers'
import ListVehicles from '../components/listVehicles'

function Home() {
    const [veiculos, setVeiculos] = useState({})
    useEffect(() => {
        getVehicles().then((response) =>{
            setVeiculos(response.data)
        }).catch(error => {
            console.log(error)
        })
    })

    return (
        <>
            <h1> Aqui vai o perfil da loja</h1>
        </>
    );
}

export default Home