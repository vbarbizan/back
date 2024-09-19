import { getAllCustomers } from "../services/customersServices.js"

export const getCustomers = async (rec, res) => {
    try {
        const customers = await getAllCustomers();
        res.json(customers);
    } 
    catch (error) {
        res.status(500).json({
            error:"Erro ao buscar produtos"
        })
    }

}