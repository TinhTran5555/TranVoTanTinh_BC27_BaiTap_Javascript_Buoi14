// Hàm này được gắn vào onclick của button
function sapXep() {
    // B1: DOM tới các input và lấy giá trị
    var soThuNhat = +document.getElementById("soThuNhat").value;
    var soThuHai = +document.getElementById("soThuHai").value;
    var soThuBa = +document.getElementById("soThuBa").value;
  
     /* B2: Tính toán kết quả   
     Neu a < b thi hoan chuyen, suy ra a >= b
     Neu a < c thi hoan chuyen, suy ra a lon nhat
     Neu b < c thi hoan chuyen, suy ra c nho nhat */

  if (soThuNhat>soThuHai) { [soThuNhat,soThuHai]=[soThuHai,soThuNhat]
      
  } 
  if (soThuNhat>soThuBa) { [soThuNhat,soThuBa]=[soThuBa,soThuNhat]
      
} 
if (soThuHai>soThuBa) { [soThuHai,soThuBa]=[soThuBa,soThuHai]
      
} 
    // B3: Xuất kết quả ra giao diện
    document.getElementById("ketQua").style.display = "block";
    document.getElementById("daySo").innerHTML = soThuNhat + "<" + soThuHai + "<" + soThuBa ;
  }
  