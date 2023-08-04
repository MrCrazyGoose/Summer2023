let clicks = 0;
console.log(clicks);
let el = document.getElementById("cookie");
console.log(el);
el.addEventListener("click", function() {
        console.log(clicks);
        clicks = clicks + 1;
        if(clicks>100) {
            clicks = clicks + clicks*clicks;
        }

        if(clicks==Infinity) {
            document.querySelector("#counter").innerHTML = "You are done.";
        }

        document.querySelector("#counter").innerHTML = clicks;
});