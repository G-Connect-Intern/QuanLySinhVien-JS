class SinhVien {
    constructor(MaSV, TenSV, NgaySinh, GioiTinh, MaKhoa) {
        this.MaSV = MaSV;
        this.TenSV = TenSV;
        this.NgaySinh = NgaySinh;
        this.GioiTinh = GioiTinh;
        this.MaKhoa = MaKhoa;
    }
}

let editingSinhVienIndex;


// Fake list
let listSinhVien = []

setDefaultListSinhVien()

function setDefaultListSinhVien(params) {
    listSinhVien.push(new SinhVien('123', 'Ta Minh Huy', '12/10/2003', 'Nam', 'AT'))
    listSinhVien.push(new SinhVien('123', 'Ta Minh A', '12/10/2003', 'Nam', 'AT'))
    listSinhVien.push(new SinhVien('123', 'Ta Minh B', '12/10/2003', 'Nam', 'AT'))
    listSinhVien.push(new SinhVien('123', 'Ta Minh C', '12/10/2003', 'Nam', 'AT'))
    listSinhVien.push(new SinhVien('123', 'Ta Minh D', '12/10/2003', 'Nam', 'AT'))
    listSinhVien.push(new SinhVien('123', 'Ta Minh E', '12/10/2003', 'Nam', 'AT'))
    listSinhVien.push(new SinhVien('123', 'Ta Minh F', '12/10/2003', 'Nam', 'AT'))
    listSinhVien.push(new SinhVien('123', 'Ta Minh G', '12/10/2003', 'Nam', 'AT'))
}


function themSinhVien() {
    // Get Thong Tin

    let maSV = $('#txtMaSV').val()
    let tenSV = $('#txtTenSV').val()
    let ngaySinh = $('#txtNgaySinh').val()
    let gioiTinh = $("#rdbGioiTinhNam").prop('checked') ? 'Nam' : 'Nữ'
    let maKhoa = $('#drpKhoa').val()

    // Add Sinh Vien

    if (maSV != '' && tenSV != '' && ngaySinh != '' && gioiTinh != '' && maKhoa != '') {
        listSinhVien.push(new SinhVien(maSV, tenSV, ngaySinh, gioiTinh, maKhoa))
    } else {
        alert('Vui lòng điền đủ thông tin!')
    }

    // Reset value of all textboxes
    $('#txtMaSV').val('')
    $('#txtTenSV').val('')
    $('#txtNgaySinh').val('')
    $('.rdbGioiTinh').prop('checked', false)

    // Update Sinh Vien table

    capNhatBang()

}
function suaSinhVien() {
    // Get Thong Tin

    let maSV = $('#txtMaSV').val()
    let tenSV = $('#txtTenSV').val()
    let ngaySinh = $('#txtNgaySinh').val()
    let gioiTinh = $("#rdbGioiTinhNam").prop('checked') ? 'Nam' : 'Nữ'
    let maKhoa = $('#drpKhoa').val()

    if (maSV != '' && tenSV != '' && ngaySinh != '' && gioiTinh != '' && maKhoa != '') {
        listSinhVien[editingSinhVienIndex] = new SinhVien(maSV, tenSV, ngaySinh, gioiTinh, maKhoa)
    } else {
        alert('Vui lòng điền đủ thông tin!')
    }

    capNhatBang()
}
function getSinhVien(index) {
    console.log(index);
    // Set value for all textboxes
    $('#txtMaSV').val(listSinhVien[index].MaSV)
    $('#txtTenSV').val(listSinhVien[index].TenSV)
    $('#txtNgaySinh').val(listSinhVien[index].NgaySinh)
    listSinhVien[index].GioiTinh == 'Nam' ? $('#rdbGioiTinhNam').prop('checked', true) : $('#rdbGioiTinhNu').prop('checked', true)
    editingSinhVienIndex = index
    $('#txtMaSV').prop('disabled', true)
}
function xoaSinhVien(index) {

    if(confirm("Bạn có chắc muốn xóa sinh viên này?") == true){
        listSinhVien.splice(index, 1)
    }

    capNhatBang()

}
function timKiemSinhVien(msv) {
    for (var i = 0; i < listSinhVien.length; i++) {
        if (listSinhVien[i].MaSV == msv) return i;
    }
    return -1;
}
function capNhatBang() {
    let html = ``;
    for (let [index, sv] of listSinhVien.entries()) {
        html += `
            <tr>
                <td>
                    <input type="checkbox" />
                </td>
                <td>${sv.MaSV}</td>
                <td>${sv.TenSV}</td>
                <td>${sv.NgaySinh}</td>
                <td>${sv.GioiTinh}</td>
                <td>${sv.MaKhoa}</td>
                <td>
                    <a href="#" onclick="getSinhVien(${index})">Sửa</a> | <a href="#" onclick="xoaSinhVien(${index})">Xóa</a>
                </td>
            </tr>
        `
        $('.tbl-sinh-vien').html(html)
    }
    if(listSinhVien.length == 0){
        setDefaultListSinhVien()
    }
}
