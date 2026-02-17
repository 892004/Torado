const db =  require('../Config/db')

exports.AddProductImg =  async(req , res ) =>{
    try{
        const {product_id , image_url} = req.body 

        await db.query("CALL sp_add_product_img(?,?)",[product_id , image_url]);

        res.json({message:"Product Image succesfully added "})
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error" , error:error.message})
    }
}

exports.getProductImg = async (req , res ) =>{
    try{
        const { product_id } = req.params;

        const[result] = await db.query("CALL sp_get_product_images(?)",[product_id]);
        res.json(result[0]);
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Server error" , error:error.message})
    }
}

exports.DeleteProductImg =  async(req , res)=>{
    try{ 
        const {id} =  req.params

        await db.query("CALL sp_delete_product_image(?)",[id])

        res.json({message:"Product-img successfully deleted... "})
    }catch(error){
        return res.status(400).json({message:"server error" , error:error.message})
    }
}