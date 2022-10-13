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
    // let parsedBody = JSON.parse(event.body);
    // let { id, name, phone } = parsedBody;


    let { id, name, phone } = event.queryStringParameters;

    let people = { id, name, phone };

    console.log('gggggggggggggggg-----------------------', people);

    const response = {statusCode: null, body: null};

    try {
      let newPeople = await peopleModel.create(people)
      response.statusCode = 200;
      response.body = JSON.stringify(newPeople);
      
    } catch (e) {
      console.log(e);
      response.statusCode = 500;
      response.body = JSON.stringify(e.message);
    }

    return response;
};


