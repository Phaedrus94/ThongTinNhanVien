class NhanVien {
  constructor(maNV, tenNV, chucVu, heSoLuong, luongCB) {
    this.maNV = maNV;
    this.tenNV = tenNV;
    this.chucVu = chucVu;
    this.heSoLuong = heSoLuong;
    this.luongCB = luongCB;
    this.luong = 0;
  }

  tinhLuong() {
    this.luong = this.heSoLuong * this.luongCB;
  }
}

export default NhanVien;
