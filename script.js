

const express = require('express');
const app = express();
const port = 3000;
const mongoose =require('mongoose');
const bodyParser = require('body-parser'); // For parsing form data
app.use(bodyParser.urlencoded({ extended: true }));



// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static assets (CSS, images, etc.) from a directory (e.g., 'public')
app.use(express.static('public'));

// Define route handlers for each template
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

mongoose.connect("mongodb+srv://nandanaspk:54wfghtgv1Qldo@cluster0.u1wptqf.mongodb.net/Helpdesk",{ useNewUrlParser: true}, {useUnifiedTopology: true });
const contactschema={
  name: String,
  email_address: String,
  message: String
}
const information=mongoose.model("information",contactschema);

app.post("/",function(req,res){
  let infodetails=new information({
    name: req.body.name,
    email_address:req.body.email_address,
    message: req.body. message
  });
  infodetails.save();
  res.redirect("/");
})

