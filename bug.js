```javascript
// Incorrect use of $inc operator
db.collection('myCollection').updateOne( { "_id": ObjectId("someId") }, { $inc: { "myField": "1" } } );
```