function random_bg_color() {
    for(let i = 1; i < 101; i++) {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        console.log(bgColor);
        document.getElementById(i).style.background = bgColor;
    };
};

random_bg_color();

for(let i = 1; i < 101; i++) {
    for(let j = 1; j < i; j++) {
        selEle = document.getElementById(Math.floor(Math.random() * 256));
        console.log(selEle)
        selEle.style.webkitFilter = "blur(1px)", "drop-shadow(16px 16px 20px white)", "brightness(2)";
        selEle.addEventListener("click", simonSelect() {
            selEle.style.webkitFilter = "blur(0px)", "drop-shadow(0px 0px 0px white)", "brightness(1)";
            
            
        });
    };
};