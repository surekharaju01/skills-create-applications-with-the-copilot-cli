

/**
 * Node.js CLI Calculator
 * Supports the following basic arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 */

/**
 * Adds two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts one number from another
 * @param {number} a - First number
 * @param {number} b - Second number to subtract
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides one number by another
 * @param {number} a - Dividend (numerator)
 * @param {number} b - Divisor (denominator)
 * @returns {number} Quotient of a divided by b
 * @throws {Error} If divisor is zero
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

/**
 * Main CLI function to parse arguments and perform calculations
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.log('Usage: calculator <number> <operation> <number>');
    console.log('Operations: add, subtract, multiply, divide');
    console.log('Examples:');
    console.log('  calculator 10 add 5');
    console.log('  calculator 10 subtract 3');
    console.log('  calculator 10 multiply 2');
    console.log('  calculator 10 divide 5');
    process.exit(1);
  }

  const num1 = parseFloat(args[0]);
  const operation = args[1].toLowerCase();
  const num2 = parseFloat(args[2]);

  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Please provide valid numbers');
    process.exit(1);
  }

  let result;

  try {
    switch (operation) {
      case 'add':
      case '+':
        result = add(num1, num2);
        console.log(`${num1} + ${num2} = ${result}`);
        break;
      case 'subtract':
      case '-':
        result = subtract(num1, num2);
        console.log(`${num1} - ${num2} = ${result}`);
        break;
      case 'multiply':
      case '*':
      case 'x':
        result = multiply(num1, num2);
        console.log(`${num1} * ${num2} = ${result}`);
        break;
      case 'divide':
      case '/':
        result = divide(num1, num2);
        console.log(`${num1} / ${num2} = ${result}`);
        break;
      default:
        console.error(`Error: Unknown operation '${operation}'`);
        console.log('Supported operations: add, subtract, multiply, divide');
        process.exit(1);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Export functions for use as a module
module.exports = { add, subtract, multiply, divide };

// Run CLI if executed directly
if (require.main === module) {
  main();
}
