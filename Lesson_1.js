let listOfColumnHeadings = [
    "PRODUCT NAME",
    "QUANTITY",
    "UNIT PRICE",
    "TOTAL"
];
// JAVASCRIPT OBJECT NOTATION
// JSON
let shoppingCart = {
    items: [
        {
            product_name: "Hoodies",
            quantity: 1,
            unit_price: 19.99
        },

        {
            product_name: "Sweathshirts",
            quantity: 3,
            unit_price: 14.99
        },


        {
            product_name: "T-shirts",
            quantity: 9,
            unit_price: 9.99
        }

    ]
};


let theItems = shoppingCart.items;

const tableRow = (item) => (
    '<tr>'
    + '<td>' + item.product_name + '</td>'
    + '<td>' + item.quantity + '</td>'
    + '<td>' + item.unit_price + '</td>'
    + '<td>' + (item.unit_price * item.quantity) + '</td>'
    + '</tr>'
);

const printThings = () => {
    var pl = window.document.getElementById("the_table");
    var theHTML =
        theItems.map(
            tableRow
        );
    pl.innerHTML = theHTML;
}
window.printThings = printThings;

