const {Schema,model} = require("mongoose");

const customerSchema = new Schema({
    "CustomerName":String,
    "DateTime":Date,
    "CompanyVisit":String,
    "Area":String,
},{
    timestamps:true
});  
module.exports = model("Customer", customerSchema);

