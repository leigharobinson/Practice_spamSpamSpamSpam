import customers from "./customers.js";

console.log("Always linking up");

let justEmail = [];
customers.map((getEmail) => ({
  eMails: getEmail.contacts.email.forEach((singleEmail) =>
    justEmail.push(singleEmail)
  ),
}));
console.log(justEmail);

const emailList = document.getElementById("emailList");
justEmail.forEach((email) => {
  emailList.innerHTML += `
    <div>${email}</div>
    <hr/>
`;
});
