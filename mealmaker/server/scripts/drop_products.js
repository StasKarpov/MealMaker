var mongoose = require('mongoose');
/* Connect to the DB */
mongoose.connect('mongodb://localhost/mealmaker',function(){
    /* Drop the DB */
    mongoose.connection.db.dropDatabase(function(err,res){
      console.log(err);
      console.log(res);
      mongoose.connection.close()
    });
});
