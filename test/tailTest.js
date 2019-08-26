const assertEqual = require("../assertEqual");
const tail = require("../tail");


assertEqual(tail([0, 1, 2, 3]), [1, 2, 3]);