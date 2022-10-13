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
    
console.log('ttttttttttt---------------', event.body);

let { id, name, phone } = event.queryStringParameters;

let people = { id, name, phone };

console.log('gggggggggggggggg-----------------------', people);
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from handleCreate!'),
    };
    return response;
};

