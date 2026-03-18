let contacts = [
    {STT: 1, name:"Nguyễn Văn A", sdt:"0901234567", email:"nguyenvanan@email.com"},
    {STT: 2, name:"Trần Thị Bình", sdt:"0912345678", email:"tranthibinh@email.com"},
    {STT: 3, name:"Lê Văn Cường", sdt:"0923456789", email:"levancuong@email.com"}

]
let tbody = document.querySelector("#contact-tbody");

let renderList = () => {
    let temp ="";
    contacts.forEach(contact =>{
        temp += `<tr>
                <td>${contact.STT}</td>
                <td>${contact.name}</td>
                <td>${contact.sdt}</td>
                <td>${contact.email}</td>
                <td>
                  <div class="action-buttons">
                    <button class="btn-edit">Sửa</button>
                    <button class="btn-delete">Xóa</button>
                  </div>
                </td>
              </tr>`
    })
    tbody.innerHTML = temp;
}
renderList();

tbody.addEventListener("click", (event) => {

  if (event.target.classList.contains("btn-delete")) {
    let row = event.target.closest("tr")
    let found = row.children[1].innerText
    let confirmDelete = confirm(
      "Bạn có chắc chắn muốn xóa sản phẩm này?"
    )
    if (confirmDelete) {
      let index = contacts.findIndex(c => c.name === found)
      if (index !== -1) {
        contacts.splice(index, 1)
      }
      alert("Xóa sản phẩm thành công!")
      renderList()
    }
  }
})
