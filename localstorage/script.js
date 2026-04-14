let nama = document.getElementById("nama");
let harga = document.getElementById("harga");
let keterangan = document.getElementById("keterangan");

function simpan() {
    console.log(nama.value)
    console.log(harga.value)
    console.log(keterangan.value)

    LoccalStorage.setItem("nama", nama.value);
    LoccalStorage.setItem("harga", harga.value);
    LoccalStorage.setItem("keterangan", keterangan.value);

    if(localStorage.getItem("nama")===null){
        localStorage.setItem("nama", "[]");
    }
let data = JSON.parse(localStorage.getItem("nama"));
console.log(data)

data.push({
    nama: nama.value,
    harga: harga.value,
    keterangan: keterangan.value
})
console.log(data)

localStorage.setItem("nama", JSON.stringify(data));

nama.value = "";
harga.value = "";
keterangan.value = "";

tampil()
}

function tampil() {
    let hasil = JSON.parse(localStorage.getItem("nama"));
    
    document.getElementById("list-belanja").innerHTML = "";

    hasil.forEach(element => {
        document.getElementById("list-belanja").innerHTML += `
         <div class="card">
         <img src="$>