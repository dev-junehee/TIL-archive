const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));

const solution = (balls, share) =>
  Math.round(factorial(balls) / factorial(balls - share) / factorial(share));
