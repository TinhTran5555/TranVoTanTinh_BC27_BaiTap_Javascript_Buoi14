function timLoaiHinh() {
    // B1: DOM tới các input và lấy giá trị
    var canhThuNhat = +document.getElementById("canhThuNhat").value;
    var canhThuHai = +document.getElementById("canhThuHai").value;
    var canhThuBa = +document.getElementById("canhThuBa").value;
    /* B2 Xử lý thông tin : phân biệt các loại hình tam giác bằng cách sau
    Tam giác đều: canhThuBa = canhThuNhat = canhThuHai
    tam giác cân: canhThuNhat = canhThuHai hoặc canhThuNhat = canhThuBa hoặc canhThuHai =canhThuBa
    tam giác vuông : canhThuNhat * canhThuNhat = canhThuHai * canhThuHai + canhThuBa * canhThuBa
            hoặc     canhThuHai * canhThuHai = canhThuNhat * canhThuNhat + canhThuBa * canhThuBa
            hoặc     canhThuBa * canhThuBa = canhThuNhat * canhThuNha + canhThuHai * canhThuHai */
    // B3: Xuất ra màn hình kết quả 
    document.getElementById("ketQua").style.display = "block";
    if (canhThuNhat === canhThuHai && canhThuNhat === canhThuBa) {
        document.getElementById("loaiHinh").innerHTML = "Đây là hình tam giác đều!"
    }
    else if (canhThuNhat === canhThuHai || canhThuNhat === canhThuBa || canhThuHai === canhThuBa) {
        document.getElementById("loaiHinh").innerHTML = "Đây là hình tam giác cân!"
    }
    else if (canhThuNhat * canhThuNhat === canhThuHai * canhThuHai + canhThuBa * canhThuBa ||
             canhThuHai * canhThuHai === canhThuNhat * canhThuNhat + canhThuBa * canhThuBa ||
             canhThuBa * canhThuBa === canhThuNhat * canhThuNhat + canhThuHai * canhThuHai)  {
        document.getElementById("loaiHinh").innerHTML = "Đây là hình tam giác vuông!"
    } else {
        document.getElementById("loaiHinh").innerHTML = "Đây là hình tam giác thường!"
    }

    

}