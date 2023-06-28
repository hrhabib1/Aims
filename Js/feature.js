const loadFeature = async(feature) => {
    const url = `/Json/feature.json`
    const res = await fetch(url);
    const data = await res.json();
    displayfeatures(data.feature);

}
const displayfeatures = features =>{
    const featuresContainer = document.getElementById('features-container');
    featuresContainer.textContent = ``;
    features.forEach(feature =>{
        const featureDiv = document.createElement('div');
        featureDiv.classList.add('col');
        featureDiv.innerHTML = `
        <div class="card">
        <img src="${feature.img}" class="card-img" alt="...">
        <div class="card-body">
        <div class="top">
        <p class= "spa"><i class="fa-solid fa-award"></i> ${feature.Spatialist}</p>
        <p class= "spa"><i class="fa-solid fa-location-dot"></i> ${feature.Country}</p>
        </div>
          <h2 class="card-title">${feature.Name}</h2>
          <div class="mid">
          <p>${feature.work1}</p>
          <p>${feature.work2}</p>
          <p>${feature.work3}</p>
          </div>
          <div class="last">
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-facebook" id="f"></i>
          <i class="fa-brands fa-instagram"></i>
          </div>
          <div class="cardBtn">
          <button class="b2">View Profile </button>
          <button class="b3"> <i class="fa-solid fa-gift"></i> invite now </button>
          </div>
        </div>
        `
        featuresContainer.appendChild(featureDiv);
    })
}
loadFeature();