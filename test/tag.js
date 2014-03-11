var assert = require('assert'),
tag = require('tag');

describe("API", function() {
  it("is a function", function() {
    assert.equal(typeof tag, 'function');
  });

  it("exposes a register handler", function() {
    assert.equal(typeof tag.register, 'function');
  });

  
  
});

