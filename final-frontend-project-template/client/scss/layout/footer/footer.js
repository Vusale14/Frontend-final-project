// const formTable = document.querySelector('#search');
// const email = document.querySelector('#email');

// formTable.addEventListener('submit', e => {
//     e.preventDefault();
//     console.log("submit");
//      validInp();
// });

// const setErr = () => {

//     Toastify({
//       text: "Unsuccessfully",
//       duration: 3000,
//       newWindow: true,
//       close: false,
//       gravity: "top",
//       position: "right",
//       stopOnFocus: true, 
//       style: {
//         background: "red",
//       },
//     }).showToast();
// }

// const setSucc = () => {

//     Toastify({
//       text: "Successfuly ",
//       duration: 3000,
//       newWindow: true,
//       close: false,
//       gravity: "top",
//       position: "right",
//       stopOnFocus: true, 
//       style: {
//         background: "green",
//       },
//     }).showToast();
// }

// const validEmail = email => {
//     const re =  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
//     return re.test(String(email).toLowerCase());
// }

// const validInp = () => {
//     const emailValue = email.value.trim();

//     if(emailValue === '') {
//         setErr( 'Password Required*');
//     }else if (!validEmail(emailValue)) {
//         setErr('Something went wrong. Please try again');
//     }else {
//         setSucc(email);
//     }
// };