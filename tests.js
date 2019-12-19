QUnit.test( "getTotal works with one product", function( assert ) {
  var product = new Product('P1', 'Test', 98.76);
  var basket = new Basket();
  basket.add(product, 1);
  assert.equal(basket.getTotal(), 98.76, "Passed!" );
});

QUnit.test( "getTotal works with two products", function( assert ) {
  var product = new Product('P1', 'Test', 98.76);
  var product2 = new Product('P2', 'Test', 10);
  var basket = new Basket();
  basket.add(product, 1);
  basket.add(product2, 2);
  assert.equal(basket.getTotal(), 118.76, "Passed!" );
});

QUnit.test( "getOrderLine returns correct order line", function( assert ) {
  var product = new Product('P1', 'Test', 98.76);
  var product2 = new Product('P2', 'Test', 10);
  var basket = new Basket();
  basket.add(product, 1);
  basket.add(product2, 2);
  var orderLine1 = {
    productId: 'P1',
    quantity: 1,
    price: 98.76,
    subTotal: 98.76,
  }
  var orderLine2 = {
    productId: 'P2',
    quantity: 2,
    price: 10,
    subTotal: 20,
  }
  assert.deepEqual(basket.getOrderLine(product), orderLine1, "Order line for product 1 looks correct" );
  assert.deepEqual(basket.getOrderLine(product2), orderLine2, "Order line for product 2 looks correct" );  
});

QUnit.test( "remove removes correct quantity", function( assert ) {
  var product = new Product('P1', 'Test', 98.76);
  var product2 = new Product('P2', 'Test', 10);
  var basket = new Basket();
  basket.add(product, 1);
  basket.add(product2, 2);
  basket.remove(product2, 1);
  var orderLine1 = {
    productId: 'P1',
    quantity: 1,
    price: 98.76,
    subTotal: 98.76,
  }
  var orderLine2 = {
    productId: 'P2',
    quantity: 1,
    price: 10,
    subTotal: 10,
  }
  assert.deepEqual(basket.getOrderLine(product), orderLine1, "Order line for product 1 looks correct" );
  assert.deepEqual(basket.getOrderLine(product2), orderLine2, "Order line for product 2 looks correct" );  
  assert.equal(basket.getTotal(), 108.76, "getTotal returns correct total");
});

QUnit.test( "remove removes all of a product when given quantity more than current quantity", function( assert ) {
  var product = new Product('P1', 'Test', 98.76);
  var product2 = new Product('P2', 'Test', 10);
  var basket = new Basket();
  basket.add(product, 1);
  basket.add(product2, 2);
  basket.remove(product2, 10);
  var orderLine1 = {
    productId: 'P1',
    quantity: 1,
    price: 98.76,
    subTotal: 98.76,
  }
  assert.deepEqual(basket.getOrderLine(product), orderLine1, "Order line for product 1 looks correct" );
  assert.equal(basket.getOrderLine(product2), null, "Order line for product 1 is null" );  
  assert.equal(basket.getTotal(), 98.76, "getTotal returns correct total");
});

QUnit.test( "remove removes all of a product when no quantity given", function( assert ) {
  var product = new Product('P1', 'Test', 98.76);
  var product2 = new Product('P2', 'Test', 10);
  var basket = new Basket();
  basket.add(product, 1);
  basket.add(product2, 2);
  basket.remove(product2);
  var orderLine1 = {
    productId: 'P1',
    quantity: 1,
    price: 98.76,
    subTotal: 98.76,
  }
  assert.deepEqual(basket.getOrderLine(product), orderLine1, "Order line for product 1 looks correct" );
  assert.equal(basket.getOrderLine(product2), null, "Order line for product 1 is null" );  
  assert.equal(basket.getTotal(), 98.76, "getTotal returns correct total");
});