var order1 = {
    orderNumber: 10011,
    customerName: 'Muhammed',
    customerMobile: '+911223331',
    totalAmount: 25000
};

var order2 = {
    orderNumber: 3411,
    customerName: 'Rajesh',
    customerMobile: '+94545331',
    totalAmount: 48000
};

var highestOrder = (order1.totalAmount > order2.totalAmount) ? order1 : order2;

console.log("Customer Name: " + highestOrder.customerName);
console.log("Highest Order Amount: " + highestOrder.totalAmount);
console.log("Total Order Amount: " + (order1.totalAmount + order2.totalAmount));

var outputDiv = document.getElementById('output');
outputDiv.innerHTML = "<p>Customer Name: " + highestOrder.customerName + "</p>" +
                      "<p>Highest Order Amount: " + highestOrder.totalAmount + "</p>" +
                      "<p>Total Order Amount: " + (order1.totalAmount + order2.totalAmount) + "</p>";
