const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('Calculator Functions', () => {
  
  // ===== ADDITION TESTS =====
  describe('add()', () => {
    test('should add two positive numbers correctly', () => {
      // Example from image: 2 + 3
      expect(add(2, 3)).toBe(5);
    });

    test('should add two negative numbers correctly', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add a positive and negative number', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('should add zero to a number', () => {
      expect(add(5, 0)).toBe(5);
      expect(add(0, 5)).toBe(5);
    });

    test('should add two zeros', () => {
      expect(add(0, 0)).toBe(0);
    });

    test('should handle decimal numbers', () => {
      expect(add(2.5, 3.5)).toBe(6);
    });

    test('should handle large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  // ===== SUBTRACTION TESTS =====
  describe('subtract()', () => {
    test('should subtract two positive numbers correctly', () => {
      // Example from image: 10 - 4
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract resulting in a negative number', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    test('should subtract two negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('should subtract zero from a number', () => {
      expect(subtract(10, 0)).toBe(10);
    });

    test('should subtract a number from zero', () => {
      expect(subtract(0, 5)).toBe(-5);
    });

    test('should subtract two zeros', () => {
      expect(subtract(0, 0)).toBe(0);
    });

    test('should handle decimal numbers', () => {
      expect(subtract(10.5, 3.2)).toBeCloseTo(7.3);
    });

    test('should handle large numbers', () => {
      expect(subtract(5000000, 2000000)).toBe(3000000);
    });
  });

  // ===== MULTIPLICATION TESTS =====
  describe('multiply()', () => {
    test('should multiply two positive numbers correctly', () => {
      // Example from image: 45 * 2
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply resulting in zero', () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 10)).toBe(0);
    });

    test('should multiply two negative numbers (positive result)', () => {
      expect(multiply(-5, -3)).toBe(15);
    });

    test('should multiply positive and negative number (negative result)', () => {
      expect(multiply(10, -2)).toBe(-20);
      expect(multiply(-7, 3)).toBe(-21);
    });

    test('should multiply by one', () => {
      expect(multiply(5, 1)).toBe(5);
      expect(multiply(1, 10)).toBe(10);
    });

    test('should handle decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should handle fractional results', () => {
      expect(multiply(0.5, 2)).toBe(1);
    });

    test('should handle large numbers', () => {
      expect(multiply(1000, 2000)).toBe(2000000);
    });
  });

  // ===== DIVISION TESTS =====
  describe('divide()', () => {
    test('should divide two positive numbers correctly', () => {
      // Example from image: 20 / 5
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide resulting in a decimal', () => {
      expect(divide(7, 2)).toBe(3.5);
    });

    test('should divide two negative numbers (positive result)', () => {
      expect(divide(-10, -2)).toBe(5);
    });

    test('should divide positive by negative (negative result)', () => {
      expect(divide(10, -2)).toBe(-5);
      expect(divide(-20, 4)).toBe(-5);
    });

    test('should divide a number by one', () => {
      expect(divide(10, 1)).toBe(10);
    });

    test('should divide zero by a number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should handle decimal dividends', () => {
      expect(divide(7.5, 2.5)).toBe(3);
    });

    test('should handle decimal divisors', () => {
      expect(divide(10, 2.5)).toBe(4);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error when dividing negative by zero', () => {
      expect(() => divide(-5, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error when dividing zero by zero', () => {
      expect(() => divide(0, 0)).toThrow('Cannot divide by zero');
    });

    test('should handle very small divisors', () => {
      expect(divide(1, 0.001)).toBe(1000);
    });

    test('should handle large numbers division', () => {
      expect(divide(1000000, 1000)).toBe(1000);
    });
  });

  // ===== COMBINED OPERATIONS TESTS =====
  describe('Multiple operations', () => {
    test('should perform addition followed by subtraction', () => {
      const result1 = add(5, 3);
      const result2 = subtract(result1, 2);
      expect(result2).toBe(6); // (5 + 3) - 2 = 6
    });

    test('should perform multiplication followed by division', () => {
      const result1 = multiply(10, 4);
      const result2 = divide(result1, 2);
      expect(result2).toBe(20); // (10 * 4) / 2 = 20
    });

    test('should perform all four operations in sequence', () => {
      let result = add(10, 5);      // 15
      result = subtract(result, 3); // 12
      result = multiply(result, 2); // 24
      result = divide(result, 4);   // 6
      expect(result).toBe(6);
    });
  });

  // ===== MODULO TESTS =====
  describe('modulo()', () => {
    test('should calculate modulo of two positive numbers correctly', () => {
      // Example from image: 5 % 2
      expect(modulo(5, 2)).toBe(1);
    });

    test('should handle modulo resulting in zero', () => {
      expect(modulo(10, 5)).toBe(0);
      expect(modulo(20, 4)).toBe(0);
    });

    test('should handle modulo with negative dividend', () => {
      expect(modulo(-5, 2)).toBe(-1);
    });

    test('should handle modulo with negative divisor', () => {
      expect(modulo(5, -2)).toBe(1);
    });

    test('should handle modulo with both negative operands', () => {
      expect(modulo(-5, -2)).toBe(-1);
    });

    test('should handle modulo with dividend smaller than divisor', () => {
      expect(modulo(3, 5)).toBe(3);
    });

    test('should handle large numbers modulo', () => {
      expect(modulo(1000000, 7)).toBe(1);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Cannot perform modulo with zero');
    });

    test('should handle decimal number modulo', () => {
      expect(modulo(5.5, 2)).toBeCloseTo(1.5);
    });
  });

  // ===== POWER TESTS =====
  describe('power()', () => {
    test('should calculate power correctly', () => {
      // Example from image: 2 ^ 3
      expect(power(2, 3)).toBe(8);
    });

    test('should handle base raised to power of zero', () => {
      expect(power(5, 0)).toBe(1);
      expect(power(100, 0)).toBe(1);
    });

    test('should handle zero raised to a power', () => {
      expect(power(0, 5)).toBe(0);
    });

    test('should handle zero raised to power of zero', () => {
      expect(power(0, 0)).toBe(1);
    });

    test('should handle negative exponents (fractions)', () => {
      expect(power(2, -1)).toBe(0.5);
      expect(power(10, -2)).toBe(0.01);
    });

    test('should handle negative base with positive exponent', () => {
      expect(power(-2, 3)).toBe(-8);
      expect(power(-3, 2)).toBe(9);
    });

    test('should handle decimal base', () => {
      expect(power(2.5, 2)).toBe(6.25);
    });

    test('should handle decimal exponent', () => {
      expect(power(4, 0.5)).toBe(2);
    });

    test('should handle large numbers', () => {
      expect(power(10, 6)).toBe(1000000);
    });

    test('should handle square root via fractional exponent', () => {
      expect(power(16, 0.5)).toBe(4);
    });
  });

  // ===== SQUARE ROOT TESTS =====
  describe('squareRoot()', () => {
    test('should calculate square root correctly', () => {
      // Example from image: sqrt(16)
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate square root of one', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should calculate square root of zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should handle perfect squares', () => {
      expect(squareRoot(4)).toBe(2);
      expect(squareRoot(9)).toBe(3);
      expect(squareRoot(25)).toBe(5);
      expect(squareRoot(100)).toBe(10);
    });

    test('should handle non-perfect squares', () => {
      expect(squareRoot(2)).toBeCloseTo(1.41421356);
      expect(squareRoot(3)).toBeCloseTo(1.73205081);
    });

    test('should handle decimal numbers', () => {
      expect(squareRoot(2.25)).toBe(1.5);
      expect(squareRoot(0.25)).toBe(0.5);
    });

    test('should handle very large numbers', () => {
      expect(squareRoot(1000000)).toBe(1000);
    });

    test('should throw error when taking square root of negative number', () => {
      expect(() => squareRoot(-1)).toThrow('Cannot calculate square root of negative number');
      expect(() => squareRoot(-4)).toThrow('Cannot calculate square root of negative number');
    });

    test('should handle small positive numbers', () => {
      expect(squareRoot(0.01)).toBe(0.1);
    });
  });

  // ===== COMBINED ADVANCED OPERATIONS TESTS =====
  describe('Advanced operations combinations', () => {
    test('should combine power and modulo', () => {
      const result1 = power(2, 3);  // 8
      const result2 = modulo(result1, 5); // 8 % 5 = 3
      expect(result2).toBe(3);
    });

    test('should combine square root and power', () => {
      const result1 = squareRoot(16); // 4
      const result2 = power(result1, 2); // 4 ^ 2 = 16
      expect(result2).toBe(16);
    });

    test('should perform modulo, power, and square root in sequence', () => {
      const result1 = modulo(17, 5); // 2
      const result2 = power(result1, 2); // 2 ^ 2 = 4
      const result3 = squareRoot(result2); // sqrt(4) = 2
      expect(result3).toBe(2);
    });

    test('should combine basic and advanced operations', () => {
      let result = add(10, 6); // 16
      result = squareRoot(result); // sqrt(16) = 4
      result = power(result, 2); // 4 ^ 2 = 16
      result = modulo(result, 10); // 16 % 10 = 6
      expect(result).toBe(6);
    });
  });
});
