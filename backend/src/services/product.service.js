import { prisma } from "../config/db.config.js";

export const getAll = async (user_id) => {
    const getAll = await prisma.product.findMany({
        where: {
            user_id: user_id,
        },
    });

    return getAll;
};

export const create = async (reqBody, userId) => {
    const { name, price, stock, description } = reqBody;

    const newProduct = await prisma.product.create({
        data: {
            user_id: userId,
            name,
            price,
            stock,
            description,
        },
    });

    return newProduct;
};

export const update = async (productId, reqBody, userId) => {
    const { name, price, stock, description } = reqBody;

    const updatedProduct = prisma.product.update({
        where: {
            id: productId,
            user_id: userId,
        },
        data: {
            name,
            price,
            stock,
            description,
        },
    });

    return updatedProduct;
};
