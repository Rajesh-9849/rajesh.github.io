const image = document.getElementById("imageChange");
const noBtn = document.getElementById("no-button");
const yesBtn = document.getElementById("yes-button");
const text = document.getElementById('loveText');
const currentWidthYes = yesBtn.offsetWidth;
const currentHeightYes = yesBtn.offsetHeight;
const currentWidthNo = noBtn.offsetWidth;
const currentHeightNo = noBtn.offsetHeight;
const soundNo = document.getElementById("soundNo");
const soundYes = document.getElementById("soundYes");


noBtn.addEventListener("click", function() {


             image.style.opacity = 0; // Fade out the current image

             setTimeout(() => {
                if (image.src.includes("cat1.jpg")) {
                    image.src = "cat2.png";
                    text.innerHTML = "Do you wanna go for a date ??";
                    yesBtn.style.width = `${currentWidthYes * 2}px`;
                    yesBtn.style.height = `${currentHeightYes * 2}px`;
                    noBtn.style.width = `${currentWidthNo / 2}px`;
                    noBtn.style.height = `${currentHeightNo / 2}px`;
                    soundNo.play();
                } else if(image.src.includes("cat2.png")) {
                    image.src = "cat3.jpg";
                    text.innerHTML = "I love you. Do you ??";
                    yesBtn.style.width = `${currentWidthYes * 2.5}px`;
                    yesBtn.style.height = `${currentHeightYes * 2.5}px`;
                    noBtn.style.width = `${currentWidthNo / 2.5}px`;
                    noBtn.style.height = `${currentHeightNo / 2.5}px`;
                    soundNo.play();


                } else if (image.src.includes("cat3.jpg")){
                   image.src = "cat4.jpg";
                   text.innerHTML = "Just press Yes Baby ! !";
                   yesBtn.style.width = `${currentWidthYes * 3}px`;
                   yesBtn.style.height = `${currentHeightYes * 3}px`;
                   noBtn.style.width = `${currentWidthNo / 3}px`;
                   noBtn.style.height = `${currentHeightNo / 3}px`;

               }else{
                   yesBtn.style.width = `${currentWidthYes* 19}px`;
                   yesBtn.style.height = `${currentHeightYes * 19}px`;
                   noBtn.style.width = `${currentWidthNo / 19}px`;
                   noBtn.style.height = `${currentHeightNo / 19}px`;
                   soundNo.play();


               }

              image.style.opacity = 1; // Fade in the new image
            }, 500); //

         });

yesBtn.addEventListener("click", function() {
             image.style.opacity = 0; // Fade out the current image

             setTimeout(() => {
                text.innerHTML = "Finally. I also love you my Princess !!! ";
                text.style.fontSize = 45 +"px";

                image.src = "yes.jpg";
                soundYes.play();
                yesBtn.style.display = "none";
                noBtn.style.display = "none";


              image.style.opacity = 1; // Fade in the new image
            }, 500); //

         });


