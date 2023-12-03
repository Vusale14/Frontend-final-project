const creatorsCard = document.querySelector(".wrapper3 .cards");

async function getCreatorsFromApi() {
  const response = await fetch(`${BASE_URL}/creators`);
  const creators = await response.json();
  console.log(creators);
  return creators;
}

async function fillTableWithCreators() {
    const creators = await getCreatorsFromApi();
    creators.forEach(creator => createCreatorRow(creator));
}

function createCreatorRow(creator) {
    const creatotStatusDivElement = document.createElement("div");
    creatotStatusDivElement.className = "card";
    const creatorImgCeil = document.createElement("div");
    creatorImgCeil.className = "img";
    const creatorImgElement = document.createElement("img");
    creatorImgElement.src ="../../../"+ creator.profileImgPath;
    creatorImgCeil.append(creatorImgElement);
    const creatorIdCeil = document.createElement("div");
    creatorIdCeil.className = "circle";
    creatorImgCeil.append(creatorIdCeil);
    const creatorIdElement = document.createElement("p");
    creatorIdElement.textContent = creator.id;
    creatorIdCeil.append(creatorIdElement);
    const creatorNameCeil = document.createElement("div");
    creatorNameCeil.className = "name";
    const creatorNameElement = document.createElement("p");
    creatorNameElement.textContent = creator.name;
    creatorNameCeil.append(creatorNameElement);
    const creatorTotalCeil = document.createElement("div");
    creatorTotalCeil.className = "total";
    creatorNameCeil.append(creatorTotalCeil);
    const creatorTotalElement = document.createElement("h6");
    creatorTotalElement.innerText = "Total Sales:";
    creatorTotalCeil.append(creatorTotalElement);
    const creatorValueElement = document.createElement("p");
    creatorValueElement.textContent = creator.totalSale.value;
    creatorTotalCeil.append(creatorValueElement);
    const creatorCurrencyElement = document.createElement("p");
    creatorCurrencyElement.textContent = creator.totalSale.currency;
    creatorTotalCeil.append(creatorCurrencyElement);

    creatotStatusDivElement.addEventListener("click",() => {
      window.open(`../artist-page/index.html?id=${creator.id}`, "_self");
    });


    creatotStatusDivElement.append(creatorImgCeil, creatorNameCeil);
    creatorsCard.append(creatotStatusDivElement);
}

fillTableWithCreators();






const tableForm = document.querySelector('#search');
const emailCeil = document.querySelector('#email');

tableForm.addEventListener('submit', e => {
    e.preventDefault();
    console.log("submit");
     validationInp();
});

const setErrElement = () => {

    Toastify({
      text: "Unsuccessfully",
      duration: 3000,
      newWindow: true,
      close: false,
      gravity: "top",
      position: "right",
      stopOnFocus: true, 
      style: {
        background: "red",
      },
    }).showToast();
}

const setSuccElement = () => {

    Toastify({
      text: "Successfuly ",
      duration: 3000,
      newWindow: true,
      close: false,
      gravity: "top",
      position: "right",
      stopOnFocus: true, 
      style: {
        background: "green",
      },
    }).showToast();
}

const validEmailElement = email => {
    const re =  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    console.log("asdasd");
    return re.test(String(email).toLowerCase());
}

const validationInp = () => {
    const emailValue = email.value.trim();
    
      if (!validEmailElement(emailValue)) {
        setErrElement(email, 'Something went wrong. Please try again')
        console.log("123");
      }
      else {
        setSuccElement(email);
    }
};




const formTable = document.querySelector('#list');
const emailInp = document.querySelector('.box-right #input');

formTable.addEventListener('submit', e => {
    e.preventDefault();
    console.log("submit2");
     validInp();
});

const setErr = () => {

    Toastify({
      text: "Unsuccessfully",
      duration: 3000,
      newWindow: true,
      close: false,
      gravity: "top",
      position: "right",
      stopOnFocus: true, 
      style: {
        background: "red",
      },
    }).showToast();
}

const setSucc = () => {

    Toastify({
      text: "Successfuly ",
      duration: 3000,
      newWindow: true,
      close: false,
      gravity: "top",
      position: "right",
      stopOnFocus: true, 
      style: {
        background: "green",
      },
    }).showToast();
  }
const validEmail = email => {
    const re =  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
}

const validInp = () => {
    const emailValueElement = emailInp.value.trim();

    if(emailValueElement === '') {
        setErr(emailInp, 'Password Required*');
    }else if (!validEmail(emailValueElement)) {
        setErr(emailInp, 'Something went wrong. Please try again');
    }else {
        setSucc(emailInp);
    }
};