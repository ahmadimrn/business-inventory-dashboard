import { prisma } from "../config/db.config.js";

export const getAnalytics = async (userId) => {
    const products = await prisma.product.findMany({
        where: { userId },
    });

    const totalValue = products.reduce((sum, p) => sum + p.price * p.stock, 0);
    const lowStock = products.filter((p) => p.stock > 0 && p.stock <= 5).length;
    const outOfStock = products.filter((p) => p.stock === 0).length;

    const summary = { totalValue, lowStock, outOfStock };

    const topProducts = [...products]
        .sort((a, b) => b.price * b.stock - a.price * a.stock)
        .slice(0, 4)
        .map((p) => ({ name: p.name, value: p.price * p.stock }));

    const months = ["Jan", "Feb", "Mar", "Apr", "May"];
    const inventoryTrend = months.map((month, idx) => ({
        date: month,
        value: Math.round(totalValue * (0.8 + 0.05 * idx)),
    }));

    const categoryMap = {};

    products.forEach((p) => {
        if (!categoryMap[p.category]) categoryMap[p.category] = 0;
        categoryMap[p.category] += p.price * p.stock;
    });

    const categoryData = Object.entries(categoryMap).map(
        ([category, value]) => ({
            category,
            value,
        })
    );

    return { summary, inventoryTrend, categoryData, topProducts };
};
