
const hello = (name) => new Promise((resolve, reject) => {
  resolve(`Hello ${name}`)
});

hello('Chris')
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.error(`There was an error! ${err}`);
  });

const main = async () => {
  const res = await hello('Christopher');
  console.log('res', res);
};

main();
