import * as service from "../services/auth.service.js";
import bcrypt from "bcrypt";
import { generateToken } from "../middleware/auth.middleware.js";

export const login = async (req, res) => {
    const user = await service.findUser(req.body.email);

    if (!user) {
        return res.status(400).json({ message: "Invalid credentials." });
    }

    const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
    );

    if (!isValidPassword) {
        return res.status(400).json({ message: "Invalid credentials." });
    }

    const token = await generateToken(user.id, user.name);

    return res.status(200).json({
        message: "User logged in succesfully.",
        data: { user, token },
    });
};

export const register = async (req, res) => {
    const existing = await service.findUser(req.body.email);

    if (existing) {
        return res
            .status(400)
            .json({ message: "User with email already exists." });
    }

    const newUser = await service.register(req.body);
    return res
        .status(201)
        .json({ message: "New user created.", data: newUser });
};
