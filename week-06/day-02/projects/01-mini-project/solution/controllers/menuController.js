function createController(model){
 function validBody(body){if(!body||typeof body.name!=='string'||!body.name.trim()||body.name.trim().length>30||!Number.isInteger(body.price)||body.price<0||body.price>32767)throw Object.assign(new Error('Name (1–30 characters) and integer price (0–32767) required'),{status:400});return {name:body.name.trim(),price:body.price};}
 function id(value){if(!/^\d+$/.test(value)||Number(value)<1||Number(value)>2147483647)throw Object.assign(new Error('Invalid item ID'),{status:400});return Number(value);}
 const wrap=fn=>async(req,res,next)=>{try{await fn(req,res);}catch(e){next(e);}};
 return {
 getMenu:wrap(async(_req,res)=>res.json(await model.getAllItems())),
 getMenuItem:wrap(async(req,res)=>{const item=await model.getItemByName(req.params.name);if(!item)return res.status(404).json({message:'Item not found'});res.json(item);}),
 addMenuItem:wrap(async(req,res)=>{const {name,price}=validBody(req.body);res.status(201).json(await model.createItem(name,price));}),
 updateMenuItem:wrap(async(req,res)=>{const itemId=id(req.params.id),{name,price}=validBody(req.body);const item=await model.updateItem(itemId,name,price);if(!item)return res.status(404).json({message:'Item not found'});res.json(item);}),
 deleteMenuItem:wrap(async(req,res)=>{const item=await model.deleteItem(id(req.params.id));if(!item)return res.status(404).json({message:'Item not found'});res.status(204).end();})
 };
}
module.exports={createController};
