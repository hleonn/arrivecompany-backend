const {Schema,model} = require("mongoose");

const customerSchema = new Schema({
    "CustomerName":String,
    "DateTime":Date,
    "CompanyVisit":String,
    "Area":String,
    "Supply":String,
    "Vehicles":String,
    "Plates":String
},{
    timestamps:true
});  

module.exports = model("Customer", customerSchema);
