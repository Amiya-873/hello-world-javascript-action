const sinon = require('sinon') // Assuming you have Sinon installed
const chai = require('chai')
const expect = chai.expect
const chaiaspromised = require('chai-as-promised')
chai.use(chaiaspromised)

const { triggerAPI } = require('../index') 

describe('Unit Testing', function(){

  it('should trigger the API to make a deploy request at least once', function() {
    const triggerAPISpy = sinon.spy(triggerAPI) 
    triggerAPI()
    sinon.assert.calledOnce(triggerAPISpy)    
  })


  it('should trigger the API to make a deploy request and handle successful response', function() {
    expect(triggerAPI()).to.equal('Status is SUCCEEDED. Breaking the loop.') 
  })

  it('should trigger the API to make a deploy request and handle failure response', function() {
    expect(triggerAPI()).to.equal('Deployment failed in UCD')
  })
})
