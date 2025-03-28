const Product = require('../Product.js');

const insertSampleProduct= async (req,res)=>{
    try{
        const sampleProducts = [
            {
              name: "Laptop",
              category: "Electronics",
              price: 999,
              inStock: true,
              tags: ["computer", "tech"]
            },
            {
              name: "Smartphone",
              category: "Electronics",
              price: 699,
              inStock: true,
              tags: ["mobile", "tech"]
            },
            {
              name: "Headphones",
              category: "Electronics",
              price: 199,
              inStock: false,
              tags: ["audio", "tech"]
            },
            {
              name: "Running Shoes",
              category: "Sports",
              price: 89,
              inStock: true,
              tags: ["footwear", "running"]
            },
            {
              name: "Novel",
              category: "Books",
              price: 15,
              inStock: true,
              tags: ["fiction", "bestseller"]
            }
          ];
        const result = await Product.insertMany(sampleProducts);
        console.log("Inserting sample");
        res.status(200).json({
            success: true,
            data : `Inserted ${result.length} sample products`
        });
    }catch(e){
        console.log(e);
        res.status(404).json({
            success : false,
            message : 'some eror occured'
        })
    }
}
const getProductStats = async(req,res)=>{
  try{
    console.log(req.query.greater)
    console.log(req.query.inStock)
    const result = await Product.aggregate([
      {$match :{
        inStock : req.query.inStock === "true"  ? true : false, 
        price: {
          $gte : parseInt(req.query.greater)
        }
      }}
    ]);
    res.status(200).json({
      success : true,
      data : result
    })
  }catch(err){
    console.log(err);
    res.status(404).json({
      success : false,
      message : 'Error fetching product stats'
    })
  }
}
const getProductAnalysis = async (req,res)=>{
  try{
    const result = await Product.aggregate([
      {
        $match : {
          category : 'Electronics',
        }
      },
      {
        $group: {
          _id : null,
          totalRevenue :{
            $avg: "$price"
          },
          maxProductPrice : {
            $max : "$price"
          },
          minProductPrice : {
            $min : "$price"
          }
        }
      },
      {
        $project :{
          _id : 1,
          totalRevenue : 1,
          averagePrice : 1,
          maxProductPrice : 1,
          minProductPrice : 1,
          priceRange :{
            $subtract : ["$maxProductPrice" ,"$minProductPrice"]
          }
        }
      }
    ])
    res.status(200).json({
      success : true,
      data : result
    })
  }catch(err){
    console.log(err);
    res.status(404).json({
      success : false,
      message : 'Error fetching product analysis'
    })
  }
}
module.exports = {insertSampleProduct,getProductStats,getProductAnalysis};