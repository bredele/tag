var assert = require('assert'),
tag = require('tag');

describe("API", function() {

  it("is a function", function() {
    assert.equal(typeof tag, 'function');
  });

  it("exposes a register handler", function() {
    assert.equal(typeof tag.register, 'function');
  });

  it('returns a function', function() {
    assert.equal(typeof tag(), 'function');
  });

  describe("view use", function() {

    var view;
    beforeEach(function() {
      view = tag();
    });

    it('has a use handler', function() {
      assert.equal(typeof view.use, 'function');
    });
    
    it('extends a tag', function(done) {
      view.use(function(ctx) {
        if(ctx === view) done();
      });
    });

  });
  
});

describe("Register", function() {
  var Custom;
  tag.register('x-tag', {
    handler: function(done) {
      done();
    }
  });

  beforeEach(function() {
    Custom = tag('x-tag');
  });

  it('should create a registered element', function(done) {
    var element = new Custom();
    element.handler(done);
  });
});


// describe("Constructor", function() {

//   var Custom;
//   beforeEach(function(){
//     Custom = tag({
//       handler: function(done) {
//         done();
//       }
//     });
//   });

//   it('mixin object', function(done) {
//     var el = new Custom();
//     el.handler(done);
//   });

// });


