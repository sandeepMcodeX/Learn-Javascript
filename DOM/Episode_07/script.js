const promiseOne = new Promise((resolve, reject) => {
  // Do an async task
  // DB calls , cryptography
  setTimeout(() => {
    console.log('Async task is complete');
    resolve(); //call
  }, 1000);
});
promiseOne.then(() => {
  console.log(' Promise consumed');
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async task 2');
    resolve();
  });
}).then(() => {
  console.log('Async 2 resolved');
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: 'sandeep', email: 'sandeep@gmail.com' });
  }, 1000);
});
promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: 'sandeep', password: '123456' });
    } else {
      reject('ERROR Something went wrong ');
    }
  }, 2000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('The promise is either resolve or rejected');
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = 'true';
    if (!error) {
      resolve({ username: 'javascript', password: 'happy' });
    } else {
      reject('ERROR :JS went wrong ');
    }
  }, 1000);
});
// async function consumePromiseFIve() {
//     const response = await promiseFive
//     console.log(response);
// }

async function consumePromiseFIve() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFIve();

//   users api
// async function  getAllUsers () {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data =  await response.json();
//     console.log(data);
    
//   } catch (error) {
//     console.log("ERROR :" , error);
//   }
// }

// getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
  return response.json();
}).then((data)=>{
  console.log(data);
})
.catch((error)=>console.log(error));