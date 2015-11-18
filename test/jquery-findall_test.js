(function($) {
  module('jQuery#findAll', {
    setup: function() {
      this.elems = $('#qunit-fixture').children("#parent");
      this.parent = $('#parent');
      this.child = $('#child');
    }
  });

  test('is chainable', function() {
    expect(1);
    equal(this.elems.findAll('#child')[0], this.child[0], 'should be chainable and find children');
  });

  test('returns root #1', function() {
    expect(1);
    equal(this.parent.findAll('#parent')[0], this.parent[0], 'should return top-most element in collection');
  });

  test('returns root #2', function() {
    expect(1);
    equal(this.child.findAll('#child')[0], this.child[0], 'should return top-most element in collection');
  });

  test('returns root #3', function() {
    expect(1);
    notEqual(this.child.findAll('#child')[0], this.parent[0], 'should not return anything');
  });

}(jQuery));

