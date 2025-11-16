import axios from "https://esm.sh/axios@1.7.7";

const destinationArea = document.getElementById("destination_form");
const dropDown = document.createElement("select");
dropDown.id = "destination";
destinationArea.appendChild(dropDown);

const option = document.createElement("option");
dropDown.appendChild(option);
option.value = "";
option.innerHTML = "Please select and option";

const destinations = [
  { id: 1, name: "Amalfi Coast" },
  {
    id: 2,
    name: "Bora Bora",
  },
  {
    id: 3,
    name: "Costa Rica",
  },
  {
    id: 4,
    name: "Kyoto",
  },
  {
    id: 5,
    name: "Maldives",
  },
  {
    id: 6,
    name: "Nepal",
  },
  {
    id: 7,
    name: "Paris",
  },
  {
    id: 8,
    name: "Patagonia",
  },
  {
    id: 9,
    name: "Queenstown",
  },
  {
    id: 10,
    name: "Reykjavik",
  },
  {
    id: 11,
    name: "Santorini",
  },
  {
    id: 12,
    name: "Seychelles",
  },
  {
    id: 13,
    name: "Tanzania",
  },
  {
    id: 14,
    name: "Tuscany",
  },
  {
    id: 15,
    name: "Whistler",
  },
];

destinations.forEach((element, array) => {
  const choice = document.createElement("option");
  dropDown.appendChild(choice);

  choice.value = element.name;
  choice.name = element.name;
  choice.innerHTML = element.name;
});

async function formSubmit(e) {
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  const postRes = await axios.post("http://localhost:3000/users", data);

  const getRes = await axios.get("http://localhost:3000/users");

  // setTimeout(redirect('confirmation.html'), 2000)
}

const enrollmentForm = document.getElementById("enrollment");
enrollmentForm.addEventListener("submit", function (e) {
  e.preventDefault();
const message = document.getElementById("errorMessage").innerHTML ='You must include a '


  handleSubmitAttempt(e);
});

function handleSubmitAttempt(e) {
  const firstName = document.getElementById("first_name");
  const lastName = document.getElementById("last_name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const destination = document.getElementById("destination");
 const arrayofErrors = [];
  const arrayOfValues = [firstName, lastName, email, phone, destination];
 
  for (let i = 0; i < arrayOfValues.length; i++) {
    console.log(
      `length of ${arrayOfValues[i].id} is:`,
      arrayOfValues[i].value.length
    );

    if (arrayOfValues[i].value.length <= 0) {
      arrayOfValues[i].classList.add("error");

      arrayofErrors.push(arrayOfValues[i].id);
    }
  }
  
  if (arrayofErrors.length == 0) {
    console.log('submitted')
    formSubmit(e);
  } else {
    showErrorBox(arrayofErrors);
    const errorBox = document.getElementById("errorBox");
    errorBox.addEventListener("click", () => {
      hideErrorBox(arrayOfValues);
    });
  }
}

function redirect(targetpage) {
  const currentPage = encodeURI(window.location.href);
  window.location.href = `${targetpage}?source=${currentPage}`;
}

function showErrorBox(array) {
  console.log("arrayofMessages:", array);
  const errorBox = document.getElementById("errorMessage");

  for (let i = 0; i < array.length; i++) {
    let message;
    switch (array[i]) {
      case "first_name":
        message = "First Name";
        break;
      case "last_name":
        message = "Last Name";
        break;
      case "phone":
        message = "Phone Number";
        break;
      case "email":
        message = "Email";
        break;
      case "destination":
        message = "Destination to visit";
        break;
    }
    if (i !== 0 && i !== array.length - 1) {
      message = ", " + message;
    }
    if (i == array.length - 1) {
      message = "and " + message;
    }

    console.log(errorBox.innerHTML);
    
    errorBox.innerHTML = errorBox.innerHTML + ` ${message}`;
  }

  console.log(errorBox.textContent);
  document.getElementById("errorBox").style.display = "block";
}

function hideErrorBox(arrayOfValues) {
  arrayOfValues.forEach((element) => {
    element.classList.remove("error");
  });

  document.getElementById("errorBox").style.display = "none";
  const myForm = document.getElementById("enrollment");
  myForm.reset();
}
// document.getElementById('errorCloseButton').addEventListener('click',function hideErrorBox () {
//   const box = document.getElementById('errorBox')
//   box.style.display = "none";
//   console.log(box)
//   document.getElementById('first_name').innerHTML ='please write a name'

// })
