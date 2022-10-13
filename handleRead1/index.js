const dynamoose = require('dynamoose');

// create a schema
const peopleSchema = new dynamoose.Schema({
  id: String,
  name: String,
  phone: String,
});

// create a model using people schema
const peopleModel = dynamoose.model('people-router', peopleSchema);

exports.handler = async (event) => {
    // TODO implement
    
    console.log('jhbhbhbhbhb----------------', event.queryStringParameters)
    const response = {statusCode: null, body: null};

    try {
      let peopleRecords = await peopleModel.scan().exec();
      response.statusCode = 200;
      response.body = JSON.stringify(peopleRecords);
      
    } catch (e) {
      console.log(e);
      response.statusCode = 500;
      response.body = JSON.stringify(e.message);
    }
    
    return response;
};