import mongoose from 'mongoose';

var OrderSchema = new mongoose.Schema({
    OrderNumber: { type: String },
    PurchaseDate: { type: String },
    Channel: { type: String },
    Code: { type: String },
    Company: { type: String },
    Ip: { type: String },
    Status: { type: String }, 
    ConsumerBirth: { type: String },
    ConsumerEmail: { type: String },
    ConsumerName: { type: String },
    ConsumerSex: { type: String },
    ConsumerCellphone: { type: String },
    ConsumerPhone: { type: String },
    ConsumerMotherName: { type: String },
    Street: { type: String },
    City: { type: String },
    StateRegion: { type: String },
    PostalCode: { type: String },
    Country: { type: String }    
});

export default mongoose.model('Order', OrderSchema);