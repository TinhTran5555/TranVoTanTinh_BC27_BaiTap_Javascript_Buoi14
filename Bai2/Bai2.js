function dangNhap() {
    // B1: DOM tới các input và lấy giá trị
    var nguoiDung = document.getElementById("nguoiDung").value;


    // B2 + B3: Xử lý thông tin và Xuất kết quả ra giao diện
    document.getElementById("ketQua").style.display = "block";
    if (nguoiDung === "bo") {
        document.getElementById("chaoMung").innerHTML = "Chúc bố dồi giàu sức khoẻ"

    } else if (nguoiDung === "me") {
        document.getElementById("chaoMung").innerHTML = "Chúc mẹ mãi xinh đẹp"

    } else if (nguoiDung === "anhTrai") {
        document.getElementById("chaoMung").innerHTML = "Chúc anh trai mau thành đạt"

    } else if (nguoiDung === "emGai") {
        document.getElementById("chaoMung").innerHTML = "Chúc em gái sớm hạnh phúc"

    }




}