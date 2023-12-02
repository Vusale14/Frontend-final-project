const creatorsCard = document.querySelector(".section-third .information");

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
    const miniCard = document.createElement("div");
    miniCard.className = "mini-card";

    const left = document.createElement("div");
    left.className = "left";

    const circle = document.createElement("div");
    circle.className = "circle";
    left.append(circle);

    const span = document.createElement("span");
    span.textContent = creator.id;
    circle.append(span);

    const creatorImgElement = document.createElement("img");
    creatorImgElement.src ="../../../"+ creator.profileImgPath;
    left.append(creatorImgElement);

    const h2Element = document.createElement("h2");
    h2Element.textContent = creator.name;
    left.append(h2Element);

    const right = document.createElement("div");
    right.className = "right";
    miniCard.append(right);

    const Number1Element = document.createElement("h4");
    Number1Element.textContent = "1.41%";
    right.append(Number1Element);

    const Number2Element = document.createElement("p");
    Number2Element.textContent = creator.nftSold;
    right.append(Number2Element);

    const Number3Element = document.createElement("p");
    Number3Element.textContent = creator.volume;
    right.append(Number3Element);

    miniCard.append(left, right);
    creatorsCard.append(miniCard);
}

fillTableWithCreators();
