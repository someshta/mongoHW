var mongoose = require("mongoose");

//save reference to schema constructor
var Schema = mongoose.Schema;

//create UserSchema object

var ArticleSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    link:{
        type: String,
        required: true
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

//Create model from the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;