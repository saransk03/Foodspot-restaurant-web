const box1Element = document.getElementById("box1");
const box2Element = document.getElementById("box2");
const box3Element = document.getElementById("box3");
const homeImg = document.getElementById("home-img");

box1Element.addEventListener("click", () => {
  box1Element.classList.toggle("active");
  box2Element.classList.remove("active");
  box3Element.classList.remove("active");
  homeImg.src =
    "https://ik.imagekit.io/saransk03/assests/Foodspot%20web/home-briyani.png";
  homeImg.classList.remove("scale-up-top");

  // Force reflow (restarting the animation by removing and re-adding the class)
  void homeImg.offsetWidth;

  // Add the class to trigger the animation
  homeImg.classList.add("scale-up-top");
});

box2Element.addEventListener("click", () => {
  box2Element.classList.toggle("active");
  box1Element.classList.remove("active");
  box3Element.classList.remove("active");
  homeImg.src =
    "https://ik.imagekit.io/saransk03/assests/Foodspot%20web/home-burger.png";
  homeImg.classList.remove("scale-up-top");

  // Force reflow (restarting the animation by removing and re-adding the class)
  void homeImg.offsetWidth;

  // Add the class to trigger the animation
  homeImg.classList.add("scale-up-top");
});

box3Element.addEventListener("click", () => {
  box3Element.classList.toggle("active");
  box1Element.classList.remove("active");
  box2Element.classList.remove("active");
  homeImg.src =
    "https://ik.imagekit.io/saransk03/assests/Foodspot%20web/home-chicken.png";
  homeImg.classList.remove("scale-up-top");

  // Force reflow (restarting the animation by removing and re-adding the class)
  void homeImg.offsetWidth;

  // Add the class to trigger the animation
  homeImg.classList.add("scale-up-top");
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const cardItems = document.getElementById("card");

async function cardData() {
  try {
    const response = await fetch(
      "https://run.mocky.io/v3/8bd21955-4be0-460c-a4be-9472be7d17d8"
    );
    const data = await response.json();
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    if (response.ok) {
      data.menu.forEach((menu) => {
        const card = document.createElement("div");
        card.className = "flex flex-col justify-start items-center bg-gray-200 shadow-black shadow-md w-[250px] rounded-[20px] px-2 py-5 flex-shrink";
        card.innerHTML = `
                    <img src="${menu.image}" alt="" class="w-[210px] h-[162px] object-cover rounded-[10px]">
                    <h2 class="text-[20px] font-['Raleway'] font-[900] text-black
                    mt-3">${menu.dish}</h2>
                    <p class="text-[18px] font-['Raleway'] text-gray-700 font-[800]">
                     Price : Rs.${menu.price}
                    </p>
                    <p class="font-['Raleway'] font-[600] text-[14px] text-gray-700">
                      Rate : <i class="fa-solid fa-star text-[orange] text-[12px] pr-1"></i>${menu.rating}
                    </p>
                    <button class="bg-[#D10817] text-white font-['Raleway']
                    font-[700] text-[15px] px-3 py-1 rounded-[10px] mt-2">Buy Now</button>
                `;
        cardContainer.appendChild(card);
      });
    }
  } catch (error) {
    console.error(error);
  }
}

 cardData();
