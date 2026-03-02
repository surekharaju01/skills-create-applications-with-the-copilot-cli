const { add, subtract, multiply, divide } = require('../calculator');

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
});
