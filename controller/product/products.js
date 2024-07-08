"use server"
import executeQuery from "@/config/db";

const fakeData = async (req , res)=>{
  await res.send({"message" : "data is not found "});
} 
const getAllProducts = async(req, res)=>{
   let data = await executeQuery("SELECT * FROM tasklist" , [])
   await res.send({data});
}

const getProductById = async (req, res)=>{
    let id = await req.query.id;
    try{

      let productData = await executeQuery(`SELECT * FROM Products
      WHERE product_id = ${id}` , []);
     
      res.status(200).json(productData);

    }catch(err){
     res.status(404).json({Error : err});
    }
     
}
const deleteProductById = async (req, res)=>{
   let id = await req.query.id;
   try{

     let productData = await executeQuery(`DELETE * FROM Products
     WHERE product_id = ${id}` , []);
    
     res.status(200).json(productData);

   }catch(err){
    res.status(404).json({Error : err});
   }

}
export {fakeData,getAllProducts , getProductById , deleteProductById};