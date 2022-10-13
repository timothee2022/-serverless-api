# LAB - Class 18

## Project: AWS: API, Dynamo and Lambda

### Author: Timothee Odushina

### Problem Domain  

Create a single resource REST API using a domain model of your choosing, constructed using AWS Cloud Services

* Database: DynamoDB
  * 1 Table required
* Routing: API Gateway
  * POST
  * /people - Given a JSON body, inserts a record into the database
  * returns an object representing one record, by its id (##)
  * GET
    * /people - returns an array of objects representing the records in the database
    * /people/## - returns an object representing one record, by its id (##)
  * PUT
  * /people/## - Given a JSON body and an ID (##), updates a record in the database
  * returns an object representing one record, by its id (##)
DELETE
  * /people/## - Given an id (##) removes the matching record from the database
  * returns an empty object
* CRUD Operation Handlers: Lambda Functions

### Implementation Notes

Work in a non-main branch in a new repository called ‘serverless-api’. While your code will all reside in a single repo, your functions will need to be individually .zipped and deployed using common libraries (node_modules) and schema files.

* Create one table for one data model at Dynamo DB
* Create a Dynamoose schema to define the structure of your table
* Write lambda functions that will separately perform the proper CRUD operation on the database
* Create your routes using API Gateway
  * Routes should integrate with the appropriate Lambda function to perform the operation

### Links and Resources

* [GitHub repo](https://github.com/timothee2022/-serverless-api)

### Setup

#### How to initialize/run your application

* `npm init -y`
* `npm i`
* `npm i dynamoose`

#### Features / Routes

* [People table](https://us-east-2.console.aws.amazon.com/dynamodbv2/home?region=us-east-2#item-explorer?initialTagKey=&table=people-table)
* [GET: /people](https://us-east-2.console.aws.amazon.com/apigateway/home?region=us-east-2#/apis/y96ub340tj/resources/4qsmr6/methods/GET)
* [POST: /people](https://us-east-2.console.aws.amazon.com/apigateway/home?region=us-east-2#/apis/y96ub340tj/resources/4qsmr6/methods/POST)
