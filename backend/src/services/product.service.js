import { prisma } from "../config/db.config.js";

export const getAll = async (user_id) => {
    const getAll = await prisma.product.findMany({
        where: {
            user_id: user_id,
        },
    });

    return getAll;
};

export const create = async (data) => {
    const { user_id, name, price, stock, description } = data;

    const newProduct = await prisma.product.create({
        data: {
            user_id,
            name,
            price,
            stock,
            description,
        },
    });

    return newProduct;
};

export const update = () => {};
