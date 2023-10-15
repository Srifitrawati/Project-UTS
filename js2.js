document.addEventListener('DOMContentLoaded', function () {
    // Fungsi untuk menghasilkan warna acak dalam format hexadecimal
    function generateRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    var headerElement = document.querySelector(".header");

    headerElement.addEventListener("click", function () {
        var randomColor = generateRandomColor();
        headerElement.style.color = randomColor;
    });

    
    var right1YesButton = document.getElementById("right1YesButton");
    var right1NoButton = document.getElementById("right1NoButton");

   
    right1NoButton.addEventListener("click", function () {
        right1NoButton.style.position = "absolute";
        right1NoButton.style.left = Math.random() * 80 + "%";
        right1NoButton.style.top = Math.random() * 80 + "%";
    });

   
    right1YesButton.addEventListener("click", function () {
        alert("Anda memilih Ya!");
    });

    var left1Element = document.querySelector('.left1');
    var left2Element = document.querySelector('.left2');
    var left3Element = document.querySelector('.left3');
    
   
    var switchButton = document.getElementById('switchButton');

    switchButton.addEventListener('click', function () {
        var left1Class = left1Element.className;
        var left2Class = left2Element.className;
        var left3Class = left3Element.className;

       
        left1Element.className = left2Class;
        left2Element.className = left3Class;
        left3Element.className = left1Class;
    });
});