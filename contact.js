function sendMail() {
  var params = {
    name: document.getElementById("first_name").value,
    phone: document.getElementById("phone_number").value,
    message: document.getElementById("message").value,
  };
}

const service = "service_4sd0o7g";
const templete = "template_2eylfll";

emailjs
  .send(service, templete, params)
  .then((res) => {
    document.getElementById("first_name").value = "";
    document.getElementById("phone_number").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("Your message sent succesfully");
  })
  .catch((err) => console.log(err));
