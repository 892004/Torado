const db = require('../Config/db')

exports.AddWishlist = async(req ,res) =>{
    try{
        const{user_id , product_id} =  req.body

        await db.query("CALL sp_add_wishlist(?,?)",[user_id,product_id])

        res.json({message:"Product succesfully Added in Wishlist.. "})
    }catch(error){
        console.log(error)
        return res.status(500).json({message:"Server Error" , error:error.message})
    }
}


exports.getWishlistByUser = async(req , res ) =>{
    try{
        const {user_id} = req.params
        const[result] =  await db.query("CALL sp_get_wishlist_by_user(?)",[user_id]);

        res.json(result[0])
    }catch(error){
        console.log(error)
        return res.status(500).json({message:"Server error" , error:error.message})
    }
}

exports.deleteWishlist =  async(req , res ) =>{
    try{
        const{id} =  req.params

        await db.query('CALL sp_remove_wishlist(?)', [id])

        res.json({message:"Wishlist item removed.."})
    }catch(error){
        return res.status(500).json({message:"Server error" , error:error.message})
    }
}