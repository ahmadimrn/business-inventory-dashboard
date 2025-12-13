import * as service from "../services/user.service.js";

export const createUser = async (req, res) => {
    const existing = await service.findUser(req.body.email);

    if (existing) {
        return res
            .status(400)
            .json({ message: "User with email already exists." });
    }

    const newUser = await service.createUser(req.body);
    return res
        .status(201)
        .json({ message: "New user created.", data: newUser });
};
