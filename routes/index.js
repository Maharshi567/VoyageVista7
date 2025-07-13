const router = require('express').Router();
const dbConnection = require('../config/db')
const reviewModel = require('../models/review')
const bookingModel = require('../models/booking');
const { default: mongoose } = require('mongoose');
const { body, validationResult } = require('express-validator');
const { render } = require('ejs');
const path = require('path')


router.get('/',(req,res)=>{
    res.render('index',{
        
    })
})

router.get('/voyagevista/Camping',(req,res)=>{
    res.render('camping',{
        
    })
})

router.get('/voyagevista/CyclingTours',(req,res)=>{
    res.render('cyclingtours',{
        
    })
})

router.get('/voyagevista/ScubaDiving',(req,res)=>{
    res.render('scubadiving',{
        
    })
})

router.get('/voyagevista/Surfing',(req,res)=>{
    res.render('surfing',{
        
    })
})

router.get('/voyagevista/Canoeing',(req,res)=>{
    res.render('canoeing',{
        
    })
})

router.get('/voyagevista/Ziplining',(req,res)=>{
    res.render('ziplining',{
        
    })
})

router.get('/voyagevista/CaveExploration',(req,res)=>{
    res.render('caveexploration',{
        
    })
})

router.get('/voyagevista/SandBoarding',(req,res)=>{
    res.render('sandboarding',{
        
    })
})

router.get('/voyagevista/KiteSurfing',(req,res)=>{
    res.render('kitesurfing',{
        
    })
})

router.get('/voyagevista/IceClimbing',(req,res)=>{
    res.render('iceclimbing',{
        
    })
})

router.get('/voyagevista/Review',(req,res)=>{
    res.render('Review',{
        
    })
})

router.get('/voyagevista/Booking',(req,res)=>{
    res.render('booking',{
        
    })
   
})
router.get('/voyagevista/AdminLogin',(req,res)=>{
    res.render('admin',{

    })
})
router.get('/voyagevista/Contact',(req,res)=>{
    res.render('contact',{

    })
})

router.get('/voyagevista/Download',(req,res)=>{
    res.download(path.join(__dirname,'contact.txt'))
})

router.post('/voyagevista/UserReview',
    
    body('username').trim().isLength({min: 2}),
    body('email').trim().isEmail().isLength({min: 11}),
    body('placename').trim().isLength({min: 5}),
    body('sportname').trim().isLength({min: 5}),
    body('review').trim().isLength({min: 10}),

    async (req,res) =>{

        const errors = validationResult(req);

        console.log(errors);

        if(!errors.isEmpty()){
            res.send("Invalid Data | Try Again | Enter username of minimum length  2 | Email should contain (@gmail.com) | Placename and sportname should be of minimum length 5 | Review should be of minimum length 10 ")
        }

        if(errors.isEmpty()){
             const { username, email, placename, sportname, date, review } = req.body
    
   


    await reviewModel.create({
        UserName:username,
        Email:email,
        PlaceName:placename,
        SportName:sportname,
        Date:date,
        Review:review
    })
    console.log(req.body)
    res.send('Review Submitted Successfully To Our Database || Thank You')
    

        }

   
})

router.post('/voyagevista/Booking',

    body('headname').trim().isLength({min: 2}),
    body('heademail').trim().isEmail().isLength({min: 11}),
    body('phonenumber').trim().isLength({min: 10}),
    body('placetovisit').trim().isLength({min: 5}),
    body('days').trim().isLength({min: 1}),
    body('numberofpeople').trim().isLength({min: 1}),
    
    async (req,res)=>{

        const errors = validationResult(req);

        console.log(errors);

        if(!errors.isEmpty()){
            res.send("Invalid Data | Try Again | Enter headname of minimum length  2 | Headmail should contain (@gmail.com) | Phonenumber should be of minimum length 10 | | Placename should be of minimum length 5 | Days and Number of people should be of minimum length 1 ")
        }
        if(errors.isEmpty()){
             const { headname, heademail, phonenumber, placetovisit, advancedate, days, numberofpeople } = req.body;
    await bookingModel.create({
        Heademail:headname,
        Heademail:heademail,
        Phonenumber:phonenumber,
        Placetovisit:placetovisit,
        Advancedate:advancedate,
        Days:days,
        Numberofpeople:numberofpeople,

    })

    console.log(req.body)
    res.send('Your Form Has Been Successfully Submitted || We will contact you by today with your trip details || Thank You')
    
        }

})

router.get('/voyagevista/Allbookings',(req,res)=>{
bookingModel.find().then((bookings) =>{

    
    res.render('allbookings',{
        Alluserbookings: bookings
    })
})

})

router.get('/voyagevista/Allreviews',(req,res)=>{
reviewModel.find().then((reviews) =>{

    
    res.render('allreviews',{
        Alluserreviews: reviews
    })
})

})



router.post('/voyagevista/Admin',async (req,res)=>{
    const{ adminname,password } = req.body;
    if(adminname == 'MaharshiDanidhariya'){
        if(password == 'Maharshiisgenious'){
      res.render('adminoptions',{

    })
        }
    }
    else{
        res.send('Empty Input  or Incorrect AdminName or Password || Try Again ||')
    }
    
})





module.exports = router;