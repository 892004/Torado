const db = require("../Config/db");

exports.getDashboard = async (req, res) => {
    try {

        const [result] = await db.query("CALL sp_admin_dashboard()");

        res.json({
            totalUsers: result[0][0].totalUsers,
            totalProducts: result[1][0].totalProducts,
            totalOrders: result[2][0].totalOrders,
            totalRevenue: result[3][0].totalRevenue
        });

    } catch (error) {
        res.status(500).json({
            message: "Dashboard Error",
            error: error.message
        });
    }
};
