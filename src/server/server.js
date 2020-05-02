var Request = require("request");
const cors = require('cors');
var express = require("express");
var app = express();
app.use(express.json())
app.use(cors());
const port = process.env.PORT || 5000;
const {Client} = require('pg')
require('dotenv').config();



const Connect= async()=>{

    try{

        await client.connect()
      
      }
      catch(e){
          console.log('failed to connect: '+e)
         
      }

}


const connectionString = 'postgres://postgres:lili123@localhost:5432/Users'
const client = new Client({
   connectionString :connectionString 
})
Connect()


app.post('/user',async(req,res)=>{

    const data =  await JSON.parse(JSON.stringify(req.body))
    var user ={
        id:data.id,
        username:data.username,
        password:data.password
    }
    console.log(user.id)
    
     
    await client.query("INSERT INTO users(id, password, username) VALUES "+ "("+user.id+","+user.password+","+"'"+user.username+"'"+")"),async(err,res)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(res)
        }
        await client.end()
    }


})

app.get('/',async(req,res)=>{
    return new Promise((resolve,reject)=>{
        client.query("SELECT * from users",async(err,res)=>{
        
            if(err){

                console.log(err)
            }
            else{
                resolve(res.rows)

            }
        })
    })

})








app.listen(port,()=>console.log('server listen on port :'+port))

   