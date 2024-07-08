"use server"
import { createPool } from "mysql2";

const pool= createPool({
    host: "localhost",
    user: "root",
    password: "jatin.s@branstr2003",
    port: 3306,
    database: "task"
});

pool.getConnection((err)=>{
    if(err){
          console.log("Error connnection to db..");
    } 
    console.log("coonnect to db.....")
})

const executeQuery = (query , arraParms)=>{
    return new Promise((resolve , reject)=>{
        try{
            pool.query(query , arraParms , (err , data)=>{
                if(err){
                     console.log("erro in executing the query");
                     reject (err)
                }
                resolve(data)
            })
        }catch(err){
            reject(err)
        }
    })
}
export default executeQuery;