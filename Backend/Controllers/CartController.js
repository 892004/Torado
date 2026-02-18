const db = require('../Config/db')

exports.addCart =  async(req ,res) =>{
    try{
        const{user_id , product_id , qty , price } = req.body

        await db.query("CALL sp_add_to_cart(?,?,?,?)",[user_id , product_id , qty , price])

        res.json({message:'product added to cart'})
     }catch(error){
        console.log(error)
        return res.status(500).json({message:"server error" , error:error.message})
     }
}

exports.getCartByUser = async(req , res ) =>{
    try{
        const {user_id} = req.params

        const [result]  = await db.query('CALL sp_get_cart_by_user(?)',[user_id])

        res.json(result[0])
    }catch(error){
        return res.status(500).json({message:"Server Error" , error:error.message})
    }
}

exports.updateCartQty = async (req, res) => {
    try {
        const { cart_id, qty } = req.body;

        await db.query(
            "CALL sp_update_cart_qty(?,?)",
            [cart_id, qty]
        );

        res.json({ message: "Cart Updated" });

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};


exports.removeCartItem = async (req, res) => {
    try {

        const { id } = req.params;

        await db.query(
            "CALL sp_remove_cart_item(?)",
            [id]
        );

        res.json({ message: "Cart Item Removed" });

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

exports.clearCart = async (req, res) => {
    try {

        const { user_id } = req.params;

        await db.query(
            "CALL sp_clear_cart(?)",
            [user_id]
        );

        res.json({ message: "Cart Cleared" });

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};