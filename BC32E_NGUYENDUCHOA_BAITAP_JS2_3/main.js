/**
 * Bài 1: Tính tiền lương nhân viên
 * Mô hình 3 khối:
 * - input:
 *      + tienLuongMotNgay: number
 *      + soNgayLam: number
 * - Xử lý:
 *      + tienLuong = tienLuongMotNgay * soNgayLam
 * - Output:
 *      +tienLuong = ?
 */
document.getElementById('btnTinhLuong').onclick = function () {
    var tienLuongMotNgay = document.getElementById('tienLuongMotNgay').value;
    var soNgayLam = document.getElementById('soNgayLam').value;
    var tienLuong = 0;
    tienLuong = tienLuongMotNgay * soNgayLam;
    document.getElementById('tienLuong').innerHTML = 'Tiền lương nhận được là: ' + tienLuong.toLocaleString();
}


/**
 * Bài 2: Tính giá trị trung bình
 * Mô hình 3 khối:
 * - Input:
 *      + number1: number
 *      + number2: number
 *      + number3: number
 *      + number4: number
 *      + number5: number
 * - Xử Lý:
 *      + giaTriTrungBinh = (number1 + number2 + number3 + number4 + number5)/5
 * - Output:
 *      + giaTriTrungBinh = ?
 * 
 */
document.getElementById('btnTinhTrungBinh').onclick = function () {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    var number3 = document.getElementById('number3').value;
    var number4 = document.getElementById('number4').value;
    var number5 = document.getElementById('number5').value;
    number1 = Number(number1);
    number2 = Number(number2);
    number3 = Number(number3);
    number4 = Number(number4);
    number5 = Number(number5);
    var giaTriTrungBinh = 0;
    giaTriTrungBinh = (number1 + number2 + number3 + number4 + number5) / 5;
    document.getElementById('giaTriTrungBinh').innerHTML = 'Giá trị trung bình là: ' + giaTriTrungBinh;
}

/**
 * Bài 3: Quy đổi tiền
 * Mô hình 3 khối:
 * - Input:
 *      + giaUSD: number = 23500
 *      + usd: number
 * - Xử lý:
 *      + tienDaDoi = giaUSD * usd
 * - Output:
 *      + tienDaDoi = ?
 */
document.getElementById('btnDoiTien').onclick = function () {
    var giaUSD = 23500;
    var usd = document.getElementById('usd').value;
    var tienDaDoi = 0;
    tienDaDoi = giaUSD * usd;
    document.getElementById('tienDaDoi').innerHTML = 'Số tiền đổi được là: ' + tienDaDoi.toLocaleString();
}


/**
 * Bài 4: Tính chu vi và diện tích hình chữ nhật
 * Mô hình 3 khối:
 * - Input:
 *      + chieuDai: number
 *      + chieuRong: number
 * - Xử lý:
 *      + dienTich = chieuDai * chieuRong
 *      + chuVi = (chieuDai + chieuRong)*2
 * - Output:
 *      + dienTich = ?
 *      + chuVi = ?
 */
document.getElementById('btnTinh').onclick = function () {
    var chieuDai = document.getElementById('chieuDai').value;
    var chieuRong = document.getElementById('chieuRong').value;
    chieuDai = Number(chieuDai);
    chieuRong = Number(chieuRong);
    var dienTich = 0;
    var chuVi = 0;
    dienTich = chieuDai * chieuRong;
    chuVi = (chieuDai + chieuRong) * 2;
    document.getElementById('tinhHinhChuNhat').innerHTML = 'Diện tích là: ' + dienTich + ';' + ' ' + 'Chu vi là: ' + chuVi;
}


/**
 * Bài 5: Tính tổng 2 ký số
 * Mô hình 3 khối:
 * - Input:
 *      + so2KySo: number
 * - Xử lý:
 *      + Tách số có 2 chữ số thành 2 số:
 *          * hangChuc: number và donVi: number
 *      + hangChuc = Math.floor(so2KySo / 10)
 *      + donVi = so2KySo % 10 
 *      + tong2KySo = hangChuc + donVi
 * - Output:
 *      + tong2KySo = ?
 */
document.getElementById('btnTong2KySo').onclick = function(){
    var so2KySo = document.getElementById('so2KySo').value;
    var hangChuc = Math.floor(so2KySo / 10);
    var donVi = so2KySo % 10;
    var tong2KySo = 0;
    tong2KySo = hangChuc + donVi;
    document.getElementById('tong2KySo').innerHTML = 'Tổng 2 ký số là: ' + tong2KySo;
}