const searchParamsStr = window.location.search;
const searchParam = new URLSearchParams(searchParamsStr);
const id = searchParam.get("id");

async function getCreatorFromApi(id) {
    const response = await fetch(`${BASE_URL}/creators/${id}`);
    const data = await response.json();
    return data;
}

async function fillCreatorData() {
    const creator = await getCreatorFromApi(id);

    const imageElement = document.querySelector('.bottom img');
    imageElement.src = '../../../' + creator.profileImgPath;


    const hElement = document.querySelector('.left-side h2')
    hElement.textContent = creator.name;


    const btnElement = document.querySelector('.right-side2 #btn1');
    btnElement.textContent = creator.chainId;


    const h6Element = document.querySelector('.volume h6');
    h6Element.textContent = creator.volume;


    const h6SoldElement = document.querySelector('.sold h6');
    h6SoldElement.textContent = creator.nftSold;


    const h6FollowersElement = document.querySelector('.followers h6');
    h6FollowersElement.textContent = creator.followers;

    createNftCard(creator.nfts)
}

fillCreatorData();


function createNftCard(nfts) {
    const nftCards = document.querySelector(".third-section .cards")
nfts.forEach((nft)=>{
    const cardElement = document.createElement("div");
    cardElement.className = "card";

    const cardTopElement = document.createElement("div");
    cardTopElement.className = "card-top";
    cardElement.append(cardTopElement);

    const imgElement = document.createElement("img");
    imgElement.src = "../../../" + nft.imgPath;
    cardTopElement.append(imgElement);

    const cardMiddleElement = document.createElement("div");
    cardMiddleElement.className = "card-middle";
    cardElement.append(cardMiddleElement);

    const nameElement = document.createElement("h6");
    nameElement.textContent = nft.name;
    cardMiddleElement.append(nameElement);

    const nameCeil = document.createElement("div");
    nameCeil.className = "moon";
    cardMiddleElement.append(nameCeil);

    const creatorName = document.createElement(p);
    creatorName.textContent = creator.name;
    nameCeil.append(creatorName);

    // const creatorImg = document.createElement("img");
    // creatorImg.src = "../../../" + creator.ImgPath;
    
    const cardBottomElement = document.createElement("div");
    cardBottomElement.className = "card-bottom";
    cardMiddleElement.append(cardBottomElement);

    const cardBottomLeftElement = document.createElement("div");
    cardBottomLeftElement.className = "card-bottom-left";
    cardBottomElement.append(cardBottomLeftElement);

    const hElement = document.createElement("h6");
    hElement.textContent = "Price";
    cardBottomLeftElement.append(hElement);

    const ethElement = document.createElement("div");
    ethElement.className = "eth";
    cardBottomLeftElement.append(ethElement);

    const pElement = document.createElement("p");
    pElement.textContent = `${nft.price.value}`;
    ethElement.append(pElement);

    const secondParagraphElement = document.createElement("p");
    secondParagraphElement.textContent = `${nft.price.currency}`;
    ethElement.append(secondParagraphElement);

    const cardBottomRight = document.createElement("div");
    cardBottomRight.className = "card-bottom-right";
    cardBottomElement.append(cardBottomRight);

    const h6Element = document.createElement("h6");
    h6Element.textContent = "Highest Bid";
    cardBottomRight.append(h6Element);

    const wethElement = document.createElement("div");
    wethElement.className = "weth";
    cardBottomRight.append(wethElement);

    const p1Element = document.createElement("p");
    p1Element.textContent = `${nft.highestBid.value}`;
    wethElement.append(p1Element);

    const p2Element = document.createElement("p");
    p2Element.textContent = `${nft.highestBid.currency}`;
    wethElement.append(p2Element);

    cardElement.append(cardTopElement, cardMiddleElement);
    nftCards.append(cardElement);
});

}


