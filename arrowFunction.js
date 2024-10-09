const oddOrEven = (number) => {
  let response = number % 2 == 0 ? `${ number } is Even` : `${ number } is Odd`;
  return response;
}

console.log(oddOrEven(16));