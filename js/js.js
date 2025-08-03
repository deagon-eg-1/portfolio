// كود حفظ الون في الوحده الداخليه
let mianColoe4 = localStorage.getItem('color_option1');
let mianColoe3 = localStorage.getItem('color_option2');
let mianColoe2 = localStorage.getItem('color_option3');
let mianColoe1 = localStorage.getItem('color_option4');

if (mianColoe1 !== null && mianColoe2 !== null && mianColoe3 !== null && mianColoe4 !== null){
    document.documentElement.style.setProperty('--color-1',localStorage.getItem('color_option1'))
    document.documentElement.style.setProperty('--color-2',localStorage.getItem('color_option2'))
    document.documentElement.style.setProperty('--color-3',localStorage.getItem('color_option3'))
    document.documentElement.style.setProperty('--color-4',localStorage.getItem('color_option4'))
}


// كود اظهار قايمه جانبيه
document.querySelector('.fa-gear').onclick = function() {
    this.classList.toggle("fa-spin");
    document.querySelector('.boxSetting').classList.toggle('open')
}

// كود تغير الوان الصفحه

//  كود تغير الخلفيه كل وقت معين
let colorMode = document.querySelectorAll(".modesOption li p");
colorMode.forEach(p =>{
    p.addEventListener('click',(e) =>{
        console.log(e.target.dataset.color1,e.target.dataset.color2,e.target.dataset.color3,e.target.dataset.color4);
        document.documentElement.style.setProperty('--color-1',e.target.dataset.color1)
        document.documentElement.style.setProperty('--color-2',e.target.dataset.color2)
        document.documentElement.style.setProperty('--color-3',e.target.dataset.color3)
        document.documentElement.style.setProperty('--color-4',e.target.dataset.color4)
        localStorage.setItem('color_option1',e.target.dataset.color1)
        localStorage.setItem('color_option2',e.target.dataset.color2)
        localStorage.setItem('color_option3',e.target.dataset.color3)
        localStorage.setItem('color_option4',e.target.dataset.color4)
    })
})



// let banerImg = document.querySelector('.baner');
// let bgImg = ['baner.jpg','post-ten.jpg','post-two.jpg','post-one.jpg','team-1.jpg']

// setInterval(() =>{
//     let rem = Math.floor(Math.random() * bgImg.length);
//     console.log(rem);
//     banerImg.style.backgroundImage = 'url("img/' + bgImg[rem] + '")'
// }, 10000)

// ==================================================================


const conImg = document.querySelectorAll(".img-post");
const imgPost = document.querySelectorAll(".impg-post img");

conImg.forEach((img, index) => {
    img.addEventListener("click", () => {
            img.classList.add("active");
        imgPost[index].classList.remove("active");
    });
});