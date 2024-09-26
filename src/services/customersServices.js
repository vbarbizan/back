import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllCustomers = async() => {
    return await prisma.customer.findMany();
}

export const createCustomers = async(customersData) => {
    return await prisma.customer.create({
        data: customersData,
    });
}

export const getCustomersByld = async(id) => {
    return await prisma.customer.findUnique({
        where:{id:parseInt(id)},
    })
}

//serviço de atualização
export const updateCustomers = async(id,customersData) => {
    return await prisma.customer.update({
        where:{id:parseInt(id)},
        data: customersData,
    })
}

//delatar customers
export const deleteCustomers = async(id) => {
    return await prisma.customer.delete({
        where:{id:parseInt(id)},
    })
}