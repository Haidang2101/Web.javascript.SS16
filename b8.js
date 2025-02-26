let numer1 = +prompt("Nhập số thứ nhất:");
let numer2 = +prompt("Nhập số thứ hai:");
let numer3 = +prompt("Nhập số thứ ba:");

let largest = numer1;

if (numer2 > largest) {
    largest = numer2;
}
if (numer3 > largest) {
    largest = numer3;
}

alert("Số lớn nhất trong 3 số vừa nhập là: " + largest);
