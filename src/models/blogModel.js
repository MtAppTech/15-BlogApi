"use strict"
/*

BLOG api project MODELS

*/
//https://mongoosejs.com/docs/models.html


const mongoose=require('mongoose')

// const modelSchema=new mongoose.Schema(
//     {fields },{model detail}
// )
/*
const modelSchema=new mongoose.Schema(
    {
        fieldName:{
            type:String, //data type
            default: null, //
            trim: true, // boşlukarı al
            select: true, // çağrılınca gelsin mi
            index: true, //  aramada hızlı erişim
            unique : true, //
            required: true, // veri girişi gerekli mi
            enum: [[1,2,3],"error message"], // standart veri girişi sağlar
            validate:[function(data) {return true}], // girilen veriyi istenen fonksiyon ile kontrol eder
            get: function(data) {return  true}, // veri çağrılınca çalıcak fonksiyon
            set: function(data) {return  true}  // veri kaydederken çalışacak fonksiyon
        }

    },
    {
        collection:collectionName,
        timestamps: true // veri kayıt ve güncellemede zaman damgası 
    }
)
*/
const BlogPostSchema = new mongoose.Schema(
    {
        // _id
        // blog category oluşunca kullan
        // blogCategoryId:{
           
        // }
        title:{
            type:String,
            trim: true,
            require: true
        },
        content:{
            type:String,
            trim: true,
            require: true
        },
        published:{
            type:Boolean,            
            default: true
        },
        // createdAt
        //updatedAt  mongo takip ediyor

    },
    {
        collection:'blogPosts',
        timestamps: true // veri kayıt ve güncellemede zaman damgası 
    }
)
module.exports={
    BlogPost: mongoose.model('BlogPost',BlogPostSchema)
    //BlogCategory:
}