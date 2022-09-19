var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        speed:800,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
         delay: 4000,
            },
            pagination: {
              el: ".swiper-pagination",
              type: "fraction",
            },
            breakpoints:{
              1366:{
                slidesPerView: 3,
                spaceBetween: 40
              },
              992:{
                slidesPerView: 3,
                spaceBetween: 40
              },
              768:{
                slidesPerView: 2,
                spaceBetween: 40
              },
              640:{
                slidesPerView: 2,
                spaceBetween: 40
              },

            }
      });

      // tab js

      const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach(content => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
}