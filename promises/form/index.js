//algo
//1. quetySelector all elements
//2. read form
//3. send POST request & hadle response
//4. validate input

const serverUrl = "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users";

const user = {
  name: "Tom",
  city: "Texas",
  email: "test@lol.com",
};

fetch(serverUrl, {
  method: "POST",
  headers: {
    "Content-Type": "aplication/json",
  },
  body: JSON.stringify(user),
})
  //input: none
  //output: Promise
  .then((resp) => {
    if (resp.ok) {
      return resp.json();
    }
    handleError(resp.status);
  })
  .then((userBody) => {
    console.log(userBody);

    // alert(JSON.stringify(userBody));
  })
  .catch((error) => {
    // debugger;
    // console.log(error);
    alert(error.message);
  });

// .then(resp => {
//     debugger;

//     if (resp.status. === 201) {
//         alert(JSON.stringify(resp.body));
//     }
//     console.log(resp);
// });

// console.log(res);

const handleError = (status) => {
  if (status === 400) {
    throw new Error("User data is not correct, check it!");
  }
  if (status === 500) {
    throw new Error("Try later");
  }
};
