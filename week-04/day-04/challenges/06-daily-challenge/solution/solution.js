const eco=db.getSiblingDB('bootcamp_ecomart');eco.products.deleteMany({});
eco.products.insertMany([{name:'Solar charger',category:'Electronics',price:200,stock:3},{name:'LED lamp',category:'Electronics',price:50,stock:25},{name:'Reusable bottle',category:'Home',price:30,stock:100},{name:'Recycled notebook',category:'Stationery',price:10,stock:8},{name:'Bamboo organizer',category:'Home',price:40,stock:12}]);
printjson(eco.products.find({stock:{$lt:10}}).toArray());
eco.products.updateMany({category:'Electronics'},{$mul:{price:1.1}});
printjson(eco.products.find().sort({price:-1}).limit(1).toArray());
