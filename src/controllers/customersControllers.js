import { createCustomers, deleteCustomers, getAllCustomers, updateCustomers } from "../services/customersServices.js"

export const getCustomers = async (req, res) => {
    try {
        const customers = await getAllCustomers();
        res.json(customers);
    }
    catch (error) {
        res.status(500).json({
            error: "Erro ao buscar customers"
        })
    }
}

export const createCustomersController = async (req, res) => {
    try {
        const newCustomers = await createCustomers(req.body);
        res.status(201).json(newCustomers);
    }
    catch (error) {
        res.status(500).json({
            error: "Erro ao criar o customers"
        })
    }

};

export const getCustomer = async (req, res) => {
    try {
        const customers = await getCustomersByld(req.params.id)
        if (customers) {
            res.json(customers);
        } else {
            res.status(500).json({
                error: "Customers não encontrado"
            })
        }
    }
    catch (error) {
        res.status(500).json({
            error: "Erro ao buscar customers"
        })
    }
}

export const updatCustomersController = async (req, res) => {
    try {
        const customers = await updateCustomers(req.params.id, req.body)
        res.json(customers);
    }
    catch (error) {
        res.status(500).json({
            error: "Erro ao atualizar o customers"
        })
    }
}

export const deleteCustomersController = async (req, res) => {
    try {
        await deleteCustomers(req.params.id)
        res.status(205).send();
    }
    catch (error) {
        res.status(500).json({
            error: "Erro ao deletar customers"
        })
    }
}