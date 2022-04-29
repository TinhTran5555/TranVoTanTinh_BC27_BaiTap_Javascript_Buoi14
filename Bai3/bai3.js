function demChanLe() {
    // B1: DOM tới các input và lấy giá trị
    var soThuNhat = +document.getElementById("soThuNhat").value;
    var soThuHai = +document.getElementById("soThuHai").value;
    var soThuBa = +document.getElementById("soThuBa").value;
    var soChan = 0 ;
    var soLe = 0 ;
    /* B2: Tính toán số nào đó là số chẵn khi a % 2 == 0, 
    ngược lại là số lẽ.Nếu là số chẵn thì biến soChan = soChan + 1, 
    tương tự với số lẽ */
    if (soThuNhat % 2 == 0) { soChan = soChan +1
        
    } else {
        soLe = soLe +1
    }
    if (soThuHai % 2 == 0) { soChan = soChan + 1
        
    } else {
        soLe = soLe + 1
    }
    if (soThuBa % 2 == 0) { soChan = soChan + 1
        
    } else {
        soLe = soLe +1
    }
    // B3: Xuất kết quả ra giao diện
    document.getElementById("ketQua").style.display = "block";
    document.getElementById("soChan").innerHTML = soChan ;
    document.getElementById("soLe").innerHTML = soLe;
}