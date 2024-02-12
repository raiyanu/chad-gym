async function init() {
  // Add your App ID
  const app = new Realm.App({ id: "65c638114274e4331f000838" });
  // Create an anonymous credential
  const credentials = Realm.Credentials.anonymous();

  // Authenticate the user
  const user = await app.logIn(credentials);
  // `App.currentUser` updates to match the logged in user
  console.assert(user.id === app.currentUser.id);
}

init();

let email = document.getElementById("email");
let message = document.getElementById("message");
let submit = document.getElementById("submit");
function send_message() {
  submit.classList.toggle("disabled-buttom");
  submit.disabled = true;
  console.log("clicked on send dmessage");
  console.log("email: ", email.value);
  console.log("message: ", message.value);
  setTimeout(() => {
    submit.classList.toggle("disabled-buttom");
    submit.disabled = false;
  }, 2000);
}
