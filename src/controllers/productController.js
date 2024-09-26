import {createProduct,deleteProduct,getAllProducts,getProductByld,updateProduct} from "../services/productService.js"

export const getProducts = async (req, res) => {
    try {
        const products = await getAllProducts();
        res.json(products);
    }
    catch (error) {
        res.status(500).json({
            error: "Erro ao buscar produtos"
        })
    }
};

export const createProductController = async (req, res) => {
    try {
        const newProduct = await createProduct(req.body);
        res.status(201).json(newProduct);
    }
    catch (error) {
        res.status(500).json({
            error: "Erro ao criar o produto"
        })
    }

};

export const getProduct = async (req, res) => {
    try {
        const product = await getProductByld(req.params.id)
        if (product) {
            res.json(product);
        } else {
            res.status(500).json({
                error: "Produto não encontrado"
            })
        }
    }
    catch (error) {
        res.status(500).json({
            error: "Erro ao buscar produto"
        })
    }
}

export const updateProductController = async (req, res) => {
    try {
        const product = await updateProduct(req.params.id, req.body)
        res.json(product);
    }
    catch (error) {
        res.status(500).json({
            error: "Erro ao atualizar o produto"
        })
    }
}

export const deleteProductController = async (req, res) => {
    try {
        await deleteProduct(req.params.id)
        res.status(205).send();
    }
    catch (error) {
        res.status(500).json({
            error: "Erro ao deletar produto"
        })
    }
}