import * as service from "../services/product.service.js";

export const getAll = async (req, res, next) => {
    try {
        const products = await service.getAll(req.user.id);

        return res
            .status(200)
            .json({ message: "Retrieved all products", data: products });
    } catch (error) {
        next(error);
    }
};

export const create = async (req, res, next) => {
    try {
        const newProduct = await service.create(req.body, req.user.id);

        return res.status(200).json({
            message: "Product created successfully",
            data: newProduct,
        });
    } catch (error) {
        next(error);
    }
};

export const update = async (req, res, next) => {
    try {
        const updatedProduct = await service.update(req.params.id, req.body);

        return res.status(200).json({
            message: "Product updated successfully",
            data: updatedProduct,
        });
    } catch (error) {
        next(error);
    }
};
