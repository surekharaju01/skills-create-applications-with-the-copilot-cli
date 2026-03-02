

/**
 * Node.js CLI Calculator
 * Supports the following basic arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * 
 * And advanced mathematical operations:
 * - Modulo (%)
 * - Exponentiation (power)
 * - Square Root
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
 * Returns the remainder of a divided by b
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Remainder of a modulo b
 * @throws {Error} If divisor is zero
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot perform modulo with zero');
  }
  return a % b;
}

/**
 * Raises a base number to an exponent power
 * @param {number} base - The base number
 * @param {number} exponent - The exponent power
 * @returns {number} Result of base raised to the exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Calculates the square root of a number
 * @param {number} n - The number to find the square root of
 * @returns {number} The square root of n
 * @throws {Error} If the number is negative
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of negative number');
  }
  return Math.sqrt(n);
}

/**
 * Main CLI function to parse arguments and perform calculations
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log('Usage:');
    console.log('  Binary operations: calculator <number> <operation> <number>');
    console.log('  Unary operations: calculator <operation> <number>');
    console.log('');
    console.log('Binary operations: add, subtract, multiply, divide, modulo, power');
    console.log('Unary operations: sqrt');
    console.log('');
    console.log('Examples:');
    console.log('  calculator 10 add 5');
    console.log('  calculator 10 subtract 3');
    console.log('  calculator 10 multiply 2');
    console.log('  calculator 10 divide 5');
    console.log('  calculator 17 modulo 5');
    console.log('  calculator 2 power 3');
    console.log('  calculator sqrt 16');
    process.exit(1);
  }

  let result;

  try {
    // Handle unary operations (single operand)
    if (args[0].toLowerCase() === 'sqrt') {
      const num = parseFloat(args[1]);
      if (isNaN(num)) {
        console.error('Error: Please provide a valid number');
        process.exit(1);
      }
      result = squareRoot(num);
      console.log(`sqrt(${num}) = ${result}`);
    } else {
      // Handle binary operations (two operands)
      if (args.length < 3) {
        console.error('Error: Binary operations require two operands');
        process.exit(1);
      }

      const num1 = parseFloat(args[0]);
      const operation = args[1].toLowerCase();
      const num2 = parseFloat(args[2]);

      if (isNaN(num1) || isNaN(num2)) {
        console.error('Error: Please provide valid numbers');
        process.exit(1);
      }

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
        case 'modulo':
        case '%':
          result = modulo(num1, num2);
          console.log(`${num1} % ${num2} = ${result}`);
          break;
        case 'power':
        case '^':
          result = power(num1, num2);
          console.log(`${num1} ^ ${num2} = ${result}`);
          break;
        default:
          console.error(`Error: Unknown operation '${operation}'`);
          console.log('Supported operations: add, subtract, multiply, divide, modulo, power, sqrt');
          process.exit(1);
      }
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Export functions for use as a module
module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// Run CLI if executed directly
if (require.main === module) {
  main();
}
