import { prisma } from "../config/db.config.js";

export const createUser = async (data) => {
    const { name, email, password } = data;

    const newUser = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: password,
        },
    });
};

export const findUser = await prisma.user.findUnique({
    where: {
        email: email,
    },
});
