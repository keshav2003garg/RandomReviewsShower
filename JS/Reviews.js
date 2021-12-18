const reviews = [
    {
        id: 1,
        cusImage: "https://picsum.photos/200",
        cusName: "Keshav Garg",
        cusTitle: "WEB DEVELOPER",
        cusReview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam modi voluptatum, cupiditate eius quibusdam veniam delectus ipsum eveniet rem velit voluptas doloremque eaque a blanditiis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam modi voluptatum, cupiditate eius quibusdam veniam delectus ipsum eveniet rem velit voluptas doloremque eaque a blanditiis!",

    },
    {
        id: 2,
        cusImage: "https://picsum.photos/200",
        cusName: "Keshav",
        cusTitle: "Web Developer",
        cusReview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam modi voluptatum, cupiditate eius quibusdam veniam delectus ipsum eveniet rem velit voluptas doloremque eaque a blanditiis!",

    },
    {
        id: 2,
        cusImage: "https://picsum.photos/200",
        cusName: "Kes",
        cusTitle: "Web Developer",
        cusReview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam modi voluptatum, cupiditate eius quibusdam veniam delectus ipsum eveniet rem velit voluptas doloremque eaque a blanditiis!",

    },
];

let currentItem = 0





let cusImg = document.getElementById("cus-image");
let cusName = document.getElementById("cus-name");
let cusTitle = document.getElementById("cus-title");
let cusReview = document.getElementById("cus-review");
function showCus(customer){
    const item = reviews[customer];
    cusImg.src = item.cusImage;
    cusName.textContent = item.cusName;
    cusTitle.textContent = item.cusTitle;
    cusReview.textContent = item.cusReview;
};
window.addEventListener("DOMContentLoaded", function(){
  showCus(currentItem);  
})





let preBtn = document.querySelector(".pre-btn")
let nextBtn = document.querySelector(".next-btn")
let randomBtn = document.querySelector(".random-btn")
nextBtn.addEventListener("click", function () {
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem=0
    }
    showCus(currentItem);
})
preBtn.addEventListener("click", function () {
    currentItem--;
    if(currentItem<0){
        currentItem=reviews.length-1
    }
    showCus(currentItem);
})
randomBtn.addEventListener("click", function() {
    currentItem=Math.ceil(0 + (100-(100-((reviews.length-1)-0)))*Math.random())
    showCus(currentItem);
})
