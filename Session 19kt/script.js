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
                    <button class="btn-delete" onclick="deleteContact(${contact.STT})">Xóa</button>
                  </div>
                </td>
              </tr>`
    })
    tbody.innerHTML = temp;
}
renderList();

let deleteContact = (id) => {

  let findId = contacts.find(
    contact => contact.STT === id
  )
  console.log(findId)
  if (!findId) return
  let confirmDelete = confirm(
    "Bạn có muốn xóa không?"
  )
  if (confirmDelete) {

    contacts = contacts.filter(
      contact => contact.STT !== findId.STT
    )
    renderList()
  } else {
    return
  }
}
