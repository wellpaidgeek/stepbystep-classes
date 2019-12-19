/*
Classes Exercise

Now you get to put all of your Object Oriented programming skills into effect. You’re going to be writing code to model an ecommerce shopping basket.

You’re going to need to create two classes:

Product

This just needs a constructor which takes:

The product id (string)
The product title (string)
The products price (number)

Basket

This needs the following functions:

add(product, quantity)

product - an instance of Product
quantity - a number. If < 1 this call to add should be ignored.

So basket.add(productX, 5) should add 5 of product x to the basket. If product x is already in the basket it should add to the current quantity, rather than replace it.

remove(productX, [quantity])

This should remove the quantity of productX from the basket. If the quantity is greater than or equal to the number of productX in the basket, all productX should be removed from the basket. If productX is not currently in the basket, nothing should happen. quantity is optional, so if it’s not defined all of productX should be removed from the basket.

getTotal()

This should return a number for the total cost of everything in the basket.

getOrderLine(product)

An order line is an object containing the product id of the product, the product price, the quantity of this product in the basket, and the subtotal (quantity * price). If the product object passed in is not in the basket this should return null. Example return value:

{
  productId: ‘sku123’,
  price: 10,
  quantity: 2,
  subTotal: 20,
}

Make sure the object keys match exactly (case sensitive), or the tests will fail.

Example usage of basket:

const Basket = new Basket();
const tv = new Product(‘PROD1’, ‘Television’, 99.99);
const iPhone = new Product(‘PROD2’, ‘iPhone X’, 999.99);
const deskChair = new Product(‘PROD3’, ‘Black desk chair’, 67.99);

basket.add(tv, 2);

basket.getTotal(); // 199.98

basket.add(iPhone, 1);
basket.add(deskChair, 3);
basket.remove(tv, 1);

basket.getTotal(); // 1303.95

basket.remove(iPhone);
basket.getOrderLine(iPhone); // null
basket.getOrderLine(deskChair);

{
  productId: ‘PROD3’,
  price: 67.99,
  quantity: 3,
  subTotal: 203.97,
}



There are a number of different ways you could represent the basket inside the class. The following instructions may help you depending on how you choose to do this.

Deleting an element from an object

const obj = {
  firstName: ‘WellPaid’,
  secondName: ‘Geek’,
};

delete obj.secondName

New object:

{
  firstName: ‘WellPaid’,
}

Iterating objects

Although object keys can be iterated with for .. in loops: LINK GOES HERE, I prefer to get an array of the keys, that way I can use array functions like map and reduce. Object.keys() will give you an array containing all the keys of an object:

const obj = {
  firstName: ‘WellPaid’,
  lastNamd: ‘Geek’,
};

Object.keys(obj).forEach(key => console.log(obj[key]);

Logs:

WellPaid
Geek
*/