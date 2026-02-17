const db = require("../Config/db")

exports.AddCategory = async (req , res ) =>{
    try{
        const {category_name , image } = req.body
        await db.query("CALL sp_add_category (? , ?)" , [category_name , image]);

        res.json({message:"Category Added"})
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error" , error:error.message})
    }
}


exports.getCategories = async(req , res ) =>{
    try{
        const[result] =  await db.query("CALL sp_get_categories()");
        res.json(result[0]);
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error " , error:error.message})
    }
}

exports.getCategoryById = async(req , res )=>{
    try{
        const{id} =  req.params;

        const[result] = await db.query("CALL sp_get_category_by_id(?)",[id])
        const category = result[0][0];

        if(!category){
            return res.status(404).json({message:"Category not found"})
        }
        res.json(category)
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"server error " , error:error.message})
    }
}

exports.updateCategory = async(req , res ) =>{
    try{
        const {id} = req.params;
        const {category_name , image} = req.body

        await db.query("CALL sp_update_category(?,?,?)",[id , category_name , image]);
        res.json({message:"Category updated succesfully.."})
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Server Error" , error:error.message})
    }
}


exports.DeleteCategory = async(req , res ) =>{
    try{ 
        const{id} =  req.params

        await db.query("CALL sp_delete_category(?)" , [id])
        res.json({message:"Category deleted Succesfully.."})
    }catch(error){
        return res.status(500).json({message:"server error " , error:error.message})
    }
}