const db = require("../Config/db");


// 📦 1️⃣ CREATE ORDER
exports.createOrder = async (req, res) => {
    try {

        const { user_id, total_amount, payment_status, order_status, address } = req.body;

        await db.query(
            "CALL so_create_order(?,?,?,?,?)",
            [user_id, total_amount, payment_status, order_status, address]
        );

        res.json({ message: "Order Created Successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};



// 📦 2️⃣ GET ORDERS BY USER
exports.getOrdersByUser = async (req, res) => {
    try {

        const { user_id } = req.params;

        const [result] = await db.query(
            "CALL sp_get_order_by_user(?)",
            [user_id]
        );

        res.json(result[0]);

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};



// 📦 3️⃣ GET ORDER BY ID
exports.getOrderById = async (req, res) => {
    try {

        const { id } = req.params;

        const [result] = await db.query(
            "CALL sp_get_order_by_id(?)",
            [id]
        );

        res.json(result[0][0]);

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};



// 📦 4️⃣ UPDATE ORDER STATUS (Admin)
exports.updateOrderStatus = async (req, res) => {
    try {

        const { order_id, order_status } = req.body;

        await db.query(
            "CALL sp_update_order_status(?,?)",
            [order_id, order_status]
        );

        res.json({ message: "Order Status Updated" });

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};


// 📦 5️⃣ GET ALL ADD ORDER 
exports.getAllOrders = async (req, res) => {
  try {

    const [rows] = await db.query("CALL sp_get_all_orders()");

    res.json(rows[0]);

  } catch (error) {

    console.log(error);
    res.status(500).json({
      message: "Error fetching orders"
    });

  }
};



// 📦 5️⃣ ADD ORDER ITEM
exports.addOrderItem = async (req, res) => {
    try {

        const { order_id, product_id, qty, price } = req.body;

        await db.query(
            "CALL sp_add_order_item(?,?,?,?)",
            [order_id, product_id, qty, price]
        );

        res.json({ message: "Order Item Added" });

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};



// 📦 6️⃣ GET ORDER ITEMS
exports.getOrderItems = async (req, res) => {
    try {

        const { order_id } = req.params;

        const [result] = await db.query(
            "CALL sp_get_order_item_by_order(?)",
            [order_id]
        );

        res.json(result[0]);

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};
