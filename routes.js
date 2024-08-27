const { Router } = require("express")
const  userController = require( "./controller/userController")
const tripController = require('./controller/tripController')
const feedController = require('./controller/feedController')
// import userController from './controller/userController.js'


const router = new Router();

router.post('/register',userController.addUserController)

router.post('/login',userController.loginUserController)

// router.get('/users',userController.getUsersController)

router.post('/host',tripController.hostTrip)

router.get('/host',tripController.getAllTrip)

router.get('/hostnosearch',tripController.getAllnosearchTrip)


router.delete('/host',tripController.deleteTrip)

router.get('/searchtrip',tripController.searchTripController)


router.post('/post',feedController.postFeed)

router.get('/post',feedController.getAllFeeds)

router.delete('/post',feedController.deleteFeed)


//profile 

router.get('/profile',userController.getProfileController)

router.post('/profile',userController.setTheProfile)

router.put('/profile',userController.updateProfile)




module.exports = router;


//integrate generative AI google