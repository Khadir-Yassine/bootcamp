const shop=db.getSiblingDB('bootcamp_relationships');shop.orders.deleteMany({});shop.users.deleteMany({});
const inserted=shop.users.insertOne({name:'Yasmine',email:'yasmine@tech.ma',address:{city:'Casablanca',country:'Morocco',postalCode:'20000'}});
shop.orders.insertOne({orderNumber:'ORD-99X',total:1500,currency:'MAD',status:'Processing',userId:inserted.insertedId});
printjson(shop.users.find().toArray());printjson(shop.orders.find().toArray());
printjson(shop.orders.aggregate([{$lookup:{from:'users',localField:'userId',foreignField:'_id',as:'user'}}]).toArray());
