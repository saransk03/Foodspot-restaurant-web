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
  void homeImg.offsetWidth

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

// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

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
        card.className = "flex flex-col justify-start items-center bg-gray-200 shadow-black shadow-md md:w-[250px] md:h-auto w-[130px] h-[220px] rounded-[10px] md:rounded-[20px] px-2 py-5 z-10 flex-shrink card";
        card.innerHTML = `
                    <img src="${menu.image}" alt="" class="md:w-[210px] md:h-[162px] w-[120px] h-[80px] object-cover rounded-[10px]">
                    <h2 class="md:text-[20px] text-center text-[12px] font-['Raleway'] font-[900] text-black
                    mt-3">${menu.dish}</h2>
                    <p class="md:text-[18px] text-[10px] font-['Raleway'] text-gray-700 font-[800]">
                     Price : Rs.${menu.price}
                    </p>
                    <p class="font-['Raleway'] font-[600] text-[8px] md:text-[14px] text-gray-700">
                      Rate : <i class="fa-solid fa-star text-[orange] text-[12px] pr-1"></i>${menu.rating}
                    </p>
                    <button class="bg-[#D10817] btn text-white font-['Raleway']
                    font-[700] text-[8px] md:text-[15px] px-3 py-1 rounded-[10px] mt-2">Buy Now</button>
                `;
        cardContainer.appendChild(card);
      });
    }
  } catch (error) {
    console.error(error);
  }
}

 cardData();

const serviceName = document.getElementById("servicename")
const serviceFirst = document.getElementById("servicefirst")
const serviceDetails = document.getElementById("details")

// sevrice swipper
var swiperS = new Swiper(".mySwiper-s", {
  effect: "cards",
  grabCursor: true,
  on: {
    slideChange: function () {
      // Get the active slide index
      const activeIndex = swiperS.activeIndex; // This gives you the active slide's index (starting from 0)

      // Get the active slide element
      const activeSlide = swiperS.slides[activeIndex];

      // Fetch the data attributes from the active slide
      const serviceName = activeSlide.getAttribute('data-service');
      const serviceDetails = activeSlide.getAttribute('data-details');

      // Update the service name and details in the DOM
      document.getElementById('servicename').innerHTML = `<span class="text-[#D10817]">${serviceName.split(' ')[0]}</span> ${serviceName.split(' ').slice(1).join(' ')}`;
      document.getElementById('details').textContent = serviceDetails;

    }
  }
});

const menuBar = document.getElementById("burger")
const crossBar = document.getElementById("cross")
const navElement = document.getElementById("mobile-nav")

menuBar.addEventListener("click",() =>{
   menuBar.classList.add("hidden")
   crossBar.classList.remove("hidden")
   navElement.classList.remove("hidden")
  })

crossBar.addEventListener("click",() =>{
   menuBar.classList.remove("hidden")
   crossBar.classList.add("hidden")
   navElement.classList.add("hidden")
})