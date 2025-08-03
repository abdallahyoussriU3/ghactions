function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = greet; //Ensure functoin is exportable
// if run diretly, print output (useful for debugging)

// if (require.main === module) {
//   console.log(greet("World"));
// }
