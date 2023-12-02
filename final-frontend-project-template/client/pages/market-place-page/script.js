const nftsCard = document.querySelector(".third-section .cards");
const showMoreBtn = document.querySelector (".show-more");
let skip = 0;
searchStr = "";
showMoreBtn.addEventListener("click", async (e)=>{
    const data = await getCreatorsFromApi (nftsCard.children.length);
    if(!data.hasMore){
        showMoreBtn.remove();
    }
    createCreatorRow(data.nfts);
});
async function getCreatorsFromApi(skip, searchStr) {
  const response = await fetch(`${BASE_URL}/nfts`,{
method: "POST",
headers: {
    Accept: "application/json",
    "Content-type": "application/json",
},
body: JSON.stringify({
    pageSize: 6,
    skip,
    searchStr,

}),
});
  const data = await response.json(); 
  return data;
 
}




async function fillTableWithCreators() {
    const data = await getCreatorsFromApi();
createCreatorRow(data.nfts);
  
}

function createCreatorRow(nfts) {
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

        // const nameCeil = document.createElement("div");
        // nameCeil.className = "moon";
        // cardMiddleElement.append(nameCeil);

        // const creatorName = document.createElement(p);
        // creatorName.textContent = creator.name;
        // nameCeil.append(creatorName);

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


fillTableWithCreators();
