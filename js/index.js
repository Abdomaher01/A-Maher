const successCallback = (position) => {
    console.log(position);
};
    
const errorCallback = (error) => {
    console.log(error);
};
const options = {
    enableHighAccuracy: true,
    timeout: 10000,
};
var location = (navigator.geolocation.getCurrentPosition(successCallback,errorCallback,options));
navigator.geolocation.getCurrentPosition(successCallback,errorCallback,options);
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://abood:<password>@locations.lf1qyxj.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("Locations").collection("devices");
  collection.insertOne(location);
  console.log("1 inserted")
  client.close();
});
