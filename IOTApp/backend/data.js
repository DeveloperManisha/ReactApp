const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const IDSchema = new Schema(

    );
const DataSchema = new Schema(
  {
    recordId: String,
    clusterId: String,
    smartNodeId: String,
    sensorNodeId: String,
    sensorType: String,
    sensorName: String,
    sensorValue: String,
    timestamp: String
    
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);