function tinhdiem() {
    let math  = +document.getElementById("toan").value;
    let liter = +document.getElementById("van").value;
    let eng   = +document.getElementById("anh").value;
    let place = document.getElementById("place").value;
    let area;
    switch (place){
        case "1":
            area = 0.75;break;
        case "2NT":
            area = 0.5;break;
        case "2":
            area = 0.25;break;
        case "3":
            area = 0;break;
    } 
    let sum = math + liter + eng + area;
    document.getElementById("ketqua").innerHTML ="Tổng điểm ĐH khối D của bạn là: "  + sum;
}