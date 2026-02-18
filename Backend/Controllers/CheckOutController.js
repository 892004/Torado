const db = require('../Config/db');

exports.checkout = async (req, res) => {

    const connection = await db.getConnection();

    try {

        const { user_id, address } = req.body;

        await connection.beginTransaction();

        // 1️⃣ Get Cart
        const [cartResult] = await connection.query(
            "CALL sp_get_cart_by_user(?)",
            [user_id]
        );

        const cartItems = cartResult[0];

        if (cartItems.length === 0) {
            return res.status(400).json({ message: "Cart is empty" });
        }

        // 2️⃣ Calculate Total
        let totalAmount = 0;
        cartItems.forEach(item => {
            totalAmount += item.qty * item.price;
        });

        // 3️⃣ Create Order
        await connection.query(
            "CALL so_create_order(?,?,?,?,?)",
            [user_id, totalAmount, "pending", "placed", address]
        );

        // ⭐ MOST IMPORTANT LINE ⭐
        const [[orderIdResult]] = await connection.query(
            "SELECT LAST_INSERT_ID() as order_id"
        );

        const order_id = orderIdResult.order_id;

        // 4️⃣ Insert Order Items
        for (const item of cartItems) {
            await connection.query(
                "CALL sp_add_order_item(?,?,?,?)",
                [order_id, item.product_id, item.qty, item.price]
            );
        }

        // 5️⃣ Clear Cart
        await connection.query(
            "CALL sp_clear_cart(?)",
            [user_id]
        );

        await connection.commit();

        res.json({
            message: "Order Placed Successfully",
            order_id
        });

    } catch (error) {

        await connection.rollback();

        res.status(500).json({
            message: "checkout failed",
            error: error.message
        });

    } finally {
        connection.release();
    }
};
