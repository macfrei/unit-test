function greet(name) {
  if (name === 'Lene') {
    return 'Hello Coach!';
  }

  // (!undefined)
  if (!name) {
    return 'Hello you!';
  }

  return `Hello ${name}!`;
}

export default greet;
