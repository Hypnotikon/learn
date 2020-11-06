/* var fs = require("fs"); */

/* fs.appendFile("hello.txt", "heyy",function(){
    console.log("saved")
}) */


/* fs.open('hello.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
  }) */

/*   fs.unlink("hello.txt", function(err){
     if(err) throw err
     console.log(!"file deleted")
 })   */


/*  var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dominikklimpera13@gmail.com',
    pass: 'nouzxcnvurwztrqp'
  }
});

var mailOptions = {
  from: 'dominikklimpera13@gmail.com',
  to: 'mona.sujanova@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); */



var nodemailer = require("nodemailer")



var transport = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: "dominikklimpera13@gmail.com",
        pass: "nouzxcnvurwztrqp"
    }
})


var option = {
    from:"dominikklimpera13@gmail.com",
    to: "dominikklimpera@seznam.cz",
    subject: "hej",
    text: "hejjo"
}
for(let i = 0;i<10;i++){
transport.sendMail(option,function(err, info){
    if(err) throw err;
    console.log("email sent" + info.response)
})
}

