
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const score = document.getElementById("score");
 

const explosion = document.createElement('img');
explosion.src = './expl.png'; 
explosion.classList.add('explosion'); // Доданоклас CSS, щоб позиціонувати та стилізувати вибух


function jump() {
    dino.classList.add('jump-animation');
    setTimeout(() => {
        dino.classList.remove('jump-animation'); // Видалити анімацію через 0,8 с
    }, 800);
}

//якщо динозавр ще не стрибає - він стрибне
document.addEventListener('keypress', () =>{
    if(!dino.classList.contains('jump-animation')){
        jump();
    }  
})

setInterval(() => {
    score.innerText++;
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    const dinoLeft = parseInt(window.getComputedStyle(dino).getPropertyValue('left'));

    const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    console.log(dinoTop, dinoLeft, cactusLeft);

    // ми не хочемо, щоб кактус пішов занадто далеко вліво
 
    if (cactusLeft < 10) {
        cactus.style.display = 'none';
    } else {
        cactus.style.display = '';
    }

    // collision detection without explosion// 

    // if ( cactusLeft < 55 && cactusLeft > 0 && dinoTop > 175) {
    //     alert("You got score of : " + score.innerText + "\n\nPlay again ?");
    //     location.reload();
    // }

    if (cactusLeft < 55 && cactusLeft > 0 && dinoTop > 175) {
        cactus.remove(); // Видаліть елемент кактус
       
        document.body.appendChild(explosion); // Додайте елемент вибуху
        explosion.style.top = '-200px';
        explosion.style.left =  '180px';


    setTimeout(() => {
        explosion.style.display = 'block'; 
        // explosion.style.top = dinoTop + '1px';
        // explosion.style.left = dinoLeft + '20px'; // Показати елемент вибуху після затримки
        setTimeout(() => {
   
        alert("You got a score of: " + score.innerText + "\n\nPlay again ?");
        location.reload();
            }, 1000); // Відклаcти сповіщення, щоб дозволити відтворити анімацію вибуху
        }, 100); // Затримка відображення вибуху
    }
        
 

}, 500);




 

