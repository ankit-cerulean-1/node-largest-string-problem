const app = require('express')();

/**
 * Problem Statement: Given list of items in array find largest string in array
 * Input: List of Elements
 * Output: Largest string
 */
var getLargestString = (req, res) => {
  let input = [
      'fan',
      'table',
      'computer',
      'books',
      'table',
      'computer',
      'table',
    ],
    output = 'Display Largest string in Array';

  /** Write down your code here */

  /** Logic Ends */

  res.send('<h3>' + output + '</h3>');
};

app.get('/', getLargestString);

app.listen(3000, () => {
  console.log('Started listening');
});
