import mongoose from "mongoose";

function DBconnection(){
mongoose.connect('mongodb+srv://Mody:kXwUiRxSzXpQGD9o@cluster0.rboquiy.mongodb.net/notes')
.then((reslt) => {
    console.log("Database connection");
})}

export{DBconnection}