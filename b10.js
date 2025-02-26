let num1 = parseFloat(prompt("Nhập số thứ nhất:"));
let num2 = parseFloat(prompt("Nhập số thứ hai:"));

if (num1 > num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
}

let randomNum = Math.random() * (num2 - num1) + num1;

randomNum = Math.floor(randomNum);

alert("Số ngẫu nhiên trong khoảng từ " + num1 + " đến " + num2 + " là: " + randomNum);
