const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO+URL)
    .then(()=>console.log('Connected successfully'))
    .catch(err=>console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    isActive : Boolean,
    tags : [String],
    createdAt : {type : Date,default : Date.now}
})

// create a user model

const User =  mongoose.model('User',userSchema);

async function runQueriesExample(){
    try{
        // Create a new document
        // const newUser = await User.create({
        //     name : 'krishnanshu Singh',
        //     email : 'krish@gmail.com',
        //     age : 22,
        //     isActive : false,
        //     tags : ['developer','manager','eater']
        // }) 

        // ANOTHER WAY TO TO CREATE ELEMENT AND INSERT IN DB 

        const newUser2 = new User({
            name : 'Ramunujan Singh',
            email : ' ram@gmail.com',
            age : 49,
            isActive : true,
            tags : ['developer','manager']
        }) 
        await newUser2.save()
         
        console.log("Created a new User2: ",newUser2);
        // console.log("Created a new User: ",newUser);

        // const allUserS = await User.find({}); //leaving empty gives all the users
      
        // const allUserS = await User.find({isActive : true}); // finds all active users
      
        // const getSingleUser = await User.findOne({isActive : true}); // finds first one matched
      
        // const getLastCreatedUserById = await User.findById(newUser._id); // returns last registered user
      
        // const selectedFields = await User.find().select('name email ')
        // console.log(allUserS);
      
        // const sortedUsers = await User.find().sort({age : 1}); // fetching users on sorted basis age 
        // console.log(sortedUsers);
      
        // const countDocuments = await User.countDocuments({isActive : true});
        // console.log(countDocuments);
        
        // const deletedUser = await User.findByIdAndDelete(newUser._id); // Delete user by id with the id value assigned to it
        // console.log("deleted user -> ",deletedUser);
        
        const updatedUser = await User.findByIdAndUpdate(newUser2._id,
            {
                $set:{age : 75}, $push: {tags : 'updated'}
            },
            {
                new :true
            }
        ); // update user by id with the id value assigned to it
        console.log(updatedUser);
        
    }catch(e){
        console.log(e);
    }finally{
        await mongoose.connection.close();
    }
}

runQueriesExample();