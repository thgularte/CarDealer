import {BASE_API} from '../resources/api'
import axios from 'axios'

async function getVehicles() {
    try{
        const response = await axios.get(`${BASE_API}/vehicle/getVehicles`)
        return response
    }catch(error){
        console.log('Erro ao buscar veiculos: ', error)
    }
}

async function deleteVehicle(){
    try{
        const response = await axios.delete(`${BASE_API}/vehicle/delete_vehicle/${id}`)
        return response
    }catch(error){
        console.log('Erro ao buscar veiculos: ', error)
    }
}


async function editVehicle(id, id_model, year_car, state_car, mileage_car, image_car) {
    try {
        const response = await axios.put(`${BASE_API}/vehicle/${id}`, null, {
            params: {
                id_model: id_model,
                year_car: year_car,
                state_car: state_car,
                mileage_car: mileage_car,
                image_car: image_car
            }
        });
        return response;
    } catch (error) {
        console.log('Erro ao editar o veículo: ', error);
        throw error;
    }
}


export {getVehicles, deleteVehicle, editVehicle}