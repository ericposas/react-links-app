const express = require('express')
const app = express()
const mongodb = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
// database credentials
let db = null;
let collection = null;
const user = 'eric'
const host = '159.89.128.162'
const port = '27017'
const dbname = 'test'

init()

async function init(){
  try{
    db = await connectToMongo()
    collection = await selectCollection()
    startExpressRoutes()
  }catch(err){
    console.log(err)
  }
}

function startExpressRoutes(){

  app.use(express.static(`${__dirname}/dist`))

  app.post('/links', (req,res)=>{
    if(req.query.link !== undefined)
      insertLink(req.query, res)
  })

  app.get('/links', (req,res)=>{
    retrieveLink(req.query, res)
  })

  app.delete('/links', (req,res)=>{
    if(req.query.id !== undefined)
      deleteLink(req.query, res)
  })

  app.listen(3000, ()=>'server online')

}

function connectToMongo(){
  return new Promise((resolve, reject)=>{
    mongodb.connect(`mongodb://${user}:root@${host}:${port}/${dbname}`, {useNewUrlParser:true}, (err,client)=>{
      if(!err){
        db = client
        console.log('successfully connected to mongo')
        resolve(client.db(dbname))
      }else{
        reject(err)
      }
    })
  })
}

function selectCollection(){
  return new Promise((resolve, reject)=>{
    let collectionName = 'links'
    db.collection(collectionName, (err, collection)=>{
      if(!err){
        console.log(`using ${collectionName}`);
        resolve(collection)
      }else{
        reject(err)
      }
    })
  })
}

function insertIntoCollection(query){
  console.log('inserting link into collection...')
  return new Promise((resolve, reject)=>{
    collection.insertOne({ link: query.link }, (err,response)=>{
      if(!err){
        console.log('inserted new link success!')
        resolve(response)
      }else{
        reject(err)
      }
    })
  })
}

function retrieveDocumentsFromCollection(){
  console.log('getting document from collection...')
  return new Promise((resolve, reject)=>{
    collection.find({}, (err,stream)=>{
      if(!err){
        if(stream)
          console.log('retrieved document success!');
        resolve(stream);
      }else{
        reject(err)
      }
    })
  })
}

function deleteLinkFromCollection(query){
  console.log('deleting document..')
  return new Promise((resolve, reject)=>{
    collection.deleteOne({_id:ObjectId(query.id)}, (err, response)=>{
      if(!err){
        console.log('successfully deleted a link from mongo')
        resolve(response)
      }else{
        reject(err)
      }
    })

  })
}

async function deleteLink(query, res){
  try{
    const result = await deleteLinkFromCollection(query)
    res.send(result)
  }catch(err){
    console.log(err)
  }
}

async function retrieveLink(query, res){
  try{
    const stream = await retrieveDocumentsFromCollection()
    let links = []
    stream.on('data', docs=>{
      links.push( docs )
    })
    stream.on('end', ()=>{
      res.write(JSON.stringify(links))
      res.end()
    })
  }catch(err){
    console.log(err)
  }
}

async function insertLink(query, res){
  try{
    const response = await insertIntoCollection(query)
    res.send(JSON.stringify(response))
  }catch(err){
    console.log(err)
  }
}
