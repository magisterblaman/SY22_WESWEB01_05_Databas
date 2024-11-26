import 'dotenv/config';
import { MongoClient } from 'mongodb';

let dbConn = await 
	MongoClient.connect(process.env.MONGODB_CONNECTION_STRING);

let dbo = dbConn.db('sy22_wesweb01_databas1');


// Hämta från databasen
// let result = await dbo.collection('my_first_collection').find({}).toArray();

// console.log(result);

// Lägga till i databasen
// await dbo.collection('my_first_collection').insertOne({
// 	"name": "Göran",
// 	"age": 98,
// 	"hobbies": [
// 		'ryggont'
// 	]
// });

// Ändra ett dokument i databasen
// await dbo.collection('my_first_collection').updateOne({
// 	"name": "Josefin"
// }, {
// 	"$set": {
// 		"age": 23,
// 		"alive": true
// 	}
// });

// Radera ett dokument
// await dbo.collection('my_first_collection').deleteOne({
// 	"name": 'Göran'
// });