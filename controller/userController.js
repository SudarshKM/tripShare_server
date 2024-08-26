const users = require("../model/userModel");

const profiles = require("../model/profileModel");

exports.addUserController = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await users.findOne({ email });

    if (existingUser) {
      res.status(406).json("Account already exist");
    } else {
      const newuser = new users({
        username,
        email,
        password,
      });

      await newuser.save();

      res.status(200).json(newuser);
    }
  } catch (error) {
    res.status(401).json(error);
  }
};

exports.loginUserController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await users.findOne({ email });

    if (existingUser) {
      if (email == existingUser.email && password == existingUser.password)
        res.status(200).json(existingUser);
    } else {
      res.status(406).json("User not found");
    }
  } catch (error) {
    res.status(401).json(error);
  }
};

exports.getProfileController = async (req, res) => {
  const allUsers = await profiles.find();

  try {
    if (allUsers) {
      res.status(200).json(allUsers);
    } else {
      res.status(406).json("No users to display");
    }
  } catch (error) {
    res.status(401).json(error);
  }
};

//set up Profile

exports.setTheProfile = async (req, res) => {
  const {
    username,
    bio,
    phonenum,
    gender,
    age,
    education,
    location,
    language,
    drinking,
    smoking,
    relationship,
    
  } = req.body;

  try {
    const editProfile = new profiles({
      username,
      bio,
      phonenum,
      gender,
      age,
      education,
      location,
      language,
      drinking,
      smoking,
      relationship,
      
    })
  
    await editProfile.save()
  
    res.status(200).json(editProfile)
  } catch (error) {
    res.status(401).json(error)
  }

};


// update profile

exports.updateProfile=async(req , res )=>{
  const {
    username,
    bio,
    phonenum,
    gender,
    age,
    education,
    location,
    language,
    drinking,
    smoking,
    relationship,
    userProfileId
    
  } = req.body; 

  try {

    const updatedProfile = await profiles.findByIdAndUpdate(userProfileId ,{
      username,
      bio,
      phonenum,
      gender,
      age,
      education,
      location,
      language,
      drinking,
      smoking,
      relationship
    })

    await updatedProfile.save()

    res.status(200).json(updatedProfile)
    
  } catch (error) {
    res.status(401).json(error)
  }
}