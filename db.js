const MongoClient =require("mongodb").MongoClient

const employeeData=require("./data.json")
const Connection='mongodb://127.0.0.1:27017'

MongoClient.connect(Connection,async(err,db)=>{
    if(err)
    {console.log("error while connecting",err)
        return
    }
    const database=db.db("human_resource")
    const data=database.collection('employee')
    console.log("connected to mongo database");
    const insert=await database.collection('employee').insertMany(employeeData)
    console.log(insert);
    const find=await data.find().toArray()
    console.log(find);
    const salaryFind=await data.find({salary:{$gt:"30000"}}).toArray()
    console.log(salaryFind);
    const overallExp=await data.find({overallExp:{$gt:"2"}}).toArray()
    console.log(overallExp);
    const info=await data.find({yearGrad :"2015", overallExp:{$gt:"1"}}).toArray()
    console.log(info);
    const update=await data.updateMany({salary:{$gt:"70000"}},{$set:{salary:"65000"}})
    console.log(update);
    const del =await data.deleteMany({lastCompany:"Y"})
    console.log(del);
}) 