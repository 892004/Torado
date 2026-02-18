const db = require('../Config/db')

exports.AddProduct = async(req , res) =>{
    try{
        const{category_id,product_name, description,price,discount_price,stock , thumbnail} = req.body

         const image = req.file ? req.file.filename : null;

        await db.query("CALL sp_add_products(?,?,?,?,?,?,?)",[category_id , product_name , description , price , discount_price , stock , thumbnail]);

        res.json({message:"Product successfully Created..."})
    }catch(error){
        console.log(error)
        return res.status(500).json({message:"Server error" , error:error.message})
    }
} 

exports.getProducts = async(req , res ) =>{
    try{
        const[result] = await db.query("CALL sp_get_products()");
        res.json(result[0])
    }catch(error){
        console.log(error)
        return res.status(500).json({message:"Server error" , error:error.message})
    }
}

exports.getProductById = async(req , res ) =>{
    try{
        const{id} = req.params;

        const[result] = await db.query("CALL sp_get_product_by_id(?)",[id])
        const product = result[0][0]

        if(!product){
            return res.status(404).json({message:"product not found"})
        }
        res.json(product)
    }catch(error){
        console.log(error)
        return res.status(500).json({message:"Server Error" , error:error.message})
    }
}

exports.updateProducts = async (req , res)=>{
    try{
        const {id} =  req.params;
        const{category_id , product_name, description , price , discount_price , stock ,thumbnail } = req.body

         const image = req.file ? req.file.filename : null;

        await db.query("CALL sp_update_product(?,?,?,?,?,?,?,?)",[id,category_id , product_name,description, price, discount_price,stock,thumbnail]);

        res.json({message:"Product succesfully updated.."})
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Server error" , error:error.message})
    }
} 

exports.DeleteProduct =  async(req , res ) =>{
    try{
        const{id}= req.params

        await db.query("CALL sp_delete_product(?)",[id])
        res.json({message:"product Deleted succesfully.."})
    }catch(error){
        return res.status(500).json({message:"Server Error" , error:error.message})
    }
}

exports.SearchProducts = async(req , res )=>{
    try{
        const{keyword} = req.query;

        const[result] = await db.query("CALL sp_search_product(?)",[keyword]);
        res.json(result[0])
    }catch(error){
        console.log(error)
        return res.status(500).json({message:"server Error " , error:error.message})
    }
}