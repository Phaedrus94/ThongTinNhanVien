import NhanVien from "./NhanVien.js";

const getELE = (id) => document.getElementById(id);

const hienThiNV = (nv) => {
  getELE("txtMa").innerHTML = nv.maNV;
  getELE("txtTen").innerHTML = nv.tenNV;
  getELE("txtCV").innerHTML = nv.chucVu;
  getELE("txtLuong").innerHTML = nv.luong;
};

getELE("btnTinhLuong").addEventListener("click", () => {
  let maNV = getELE("inpMa").value;
  let tenNV = getELE("inpTen").value;
  let chucVu = getELE("inpCV").value;
  let heSoLuong = getELE("inpHSL").value;
  let luongCB = getELE("inpLCB").value;

  let nv = new NhanVien(
    maNV,
    tenNV,
    chucVu,
    parseFloat(heSoLuong),
    parseInt(luongCB)
  );
  nv.tinhLuong();

  hienThiNV(nv);
});
