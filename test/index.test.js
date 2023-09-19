const sinon = require('sinon') // Assuming you have Sinon installed
const chai = require('chai')
const expect = chai.expect
const assert = require('assert');
const chaiaspromised = require('chai-as-promised')
chai.use(chaiaspromised)

const { triggerAPI } = require('../index') 

describe('Unit Testing', function(){

  let clock;

  beforeEach(() => {
    clock = sinon.useFakeTimers();
  });

  afterEach(() => {
    clock.restore();
  });
  
  it('should trigger the API to make a deploy request at least once', function() {
    const triggerAPISpy = sinon.spy(triggerAPI) 
    
    setTimeout(() => {
      triggerAPI()
      sinon.assert.calledOnce(triggerAPISpy)
    },0) 
  })

  it('should trigger the API to make a deploy request and handle successful response', function() {
    let result = ''
    setTimeout(() => {
      result = triggerAPI()
      expect.result.to.equal('Status is SUCCEEDED. Breaking the loop.')
    },0)
  })

  it('should trigger the API to make a deploy request and handle failure response', function() {
    let result = ''
    setTimeout(() => {
      result = triggerAPI()
      expect.result.to.equal('Deployment failed in UCD')
    },0)
  })
})
