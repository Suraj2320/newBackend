const express=require("express")
const JobModel=require("./jobs.model")
const app=express.Router()
const jwt=require("jsonwebtoken")
const argon2=require("argon2")



app.post("/",async(req,res)=>{
    console.log(req.body)
   
        const {company,position,location,contract}=req.body
        
        try{
            const newJob=new JobModel({company,position,location,contract})
           const Job= await newJob.save()
            res.status(200).send({message:"job ceated",Job})
        }
        catch(e){
            res.status(401).send(e)
        }
    
   
    
});


app.put("/:id",async(req,res)=>{

    const post=await JobModel.findById(req.params.id)
   try{
       const updateJob=await JobModel.findByIdAndUpdate(req.params.id,
        {
            $set:req.body,
        },{new:true})
        res.status(200).send(updateJob)
    
    }
    catch(e){
        res.send("no job found with that id")
    }


})


app.delete("/:id",async(req,res)=>{
   try{
        const post=await JobModel.findById(req.params.id)
       
           await JobModel.deleteOne(post);
           res.status(200).send("job has been deleted")

        
   }
        catch(e){
            res.send("no job found with that id")
        }
    
    
    })


 
    app.get("/",async(req,res)=>{
      
        
        try{
            
             
                posts=await JobModel.find()
               
             
             res.status(200).send(posts)
        }catch(e){
              res.send(e)
        }
    })




module.exports=app
