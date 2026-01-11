import * as service from "../services/analytics.service.js";

export const getAnalytics = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const data = await service.getAnalytics(userId);

        res.status(200).json({
            message: "Analytics fetched successfully",
            data,
        });
    } catch (err) {
        next(err);
    }
};
