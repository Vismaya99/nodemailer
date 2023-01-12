const express=require('express');
const app=new express();
var nodemailer=require('nodemailer');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
var transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"vismayashankar99@gmail.com",
        pass:"aqfjixmylajceddj"
    }
});
var mailOptions={
    from:"vismayashankar99@gmail.com",
    to:"dhanasreeshankar2002@gmail.com",
    subject:"Message",
    text:`Hi, 
    I wish you all the best for your upcoming examinations.`
};
transporter.sendMail(mailOptions,function(error,info){
    if (error) {
        console.log(error);
    } else {
     console.log('Email sent:' + info.response)   
    }
});

app.listen(5333);