const promiseExample = () => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve('Hello') }, 3000);
  });
};

promiseExample()
  .then((res) => console.log(res))
  .then ((res) => console.log(res))
  .catch( (e) => console.log('I am an error:( '));
console.log('hi');