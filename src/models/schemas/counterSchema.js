const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const counterSchema = new Schema(
  {
  _id: {type: String, required: true},
  seq: { type: Number, default: 0 }
  }
);

// counterSchema.index({ _id: 1, seq: 1 }, { unique: true })

const counterModel = mongoose.model('counter', counterSchema);

const autoIncrementModelID =  function (modelName, doc, next) {
console.log('autoIncrementModelID');

  asynccounterModel.findOneAndUpdate(        // ** Method call begins **
    modelName,                           // The ID to find for in counters model
    { $inc: { seq: 1 } },                // The update
    { new: true, upsert: true },         // The options
    function(error, counter) {    
              // The callback
      if(error) return next(error);

      if(doc.isNew) {
        let total = model.find().sort({id: -1}).limit(1);
        data.id = total.length === 0 ? 1 : Number(total[0].id) + 1;
        next();
      }

      doc.id = counter.seq;
      next();
    }
  );                                     // ** Method call ends **
}

export default autoIncrementModelID;