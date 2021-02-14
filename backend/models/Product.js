const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const ProductSchema=new Schema({
    brandName:{
        type:Schema.Types.ObjectId,
        ref:'Brand',
        required:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:'Department',
        required:true
    },
    subCategory:{
        type:Schema.Types.ObjectId,
        ref:'SubDepartment',
        required:true
    },
    productImg:[{
        type:String
    }],
    price:{
        type:Number,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    quantity:{
        type:Number,
        min:0,
        default:0,
        required:true,
        trim:true
    },
    available:{
        type:Boolean,
        required:true,
        default:false
    },
    weight:{
        type:Number,
        required:true,
        trim:true,
        min:0
    },
    measurement:{
        type:String,
        required:true,
        enum:['kg','gm','ml','l']
    },
    otherWeight:[
        {
            weight:{
                type:Number,
                required:true,
                trim:true,
                min:0
            },
            measurement:{
                type:String,
                required:true,
                enum:['kg','gm','ml','l']
            }
        }
    ],
    offer:{
        type:Boolean,
        default:false
    },
    offerValue:{
        type:Number,
        min:0,
        max:100,
        trim:true
    },
    productCode:{
        type:String,
        required:true,
        trim:true,
        unique:true
    }
},{
    timestamps:true
})

module.exports=Product=mongoose.model('Product',ProductSchema)