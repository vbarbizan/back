import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllProducts = async() => {
    return await prisma.product.findMany();
};

export const createProduct = async(productData) => {
    return await prisma.product.create({
        data: productData,
    });
}

export const getProductByld = async() => {
    return await prisma.product.findUnique({
        where:{id: parseInt(id)},
    });
}