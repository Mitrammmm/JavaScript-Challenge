const adduserbtn = document.getElementById('addUser')
const usernameTextField = document.getElementById('username')

let userArray = [] //data str kr k lye
let edit_id = null
const btnText = adduserbtn.innerText
//data display
const recordsDisplay = document.getElementById('records')

//local storage data get
let objstr = localStorage.getItem('users')
//console.log(objstr)
if (objstr != null) {
  userArray = JSON.parse(objstr) //data convert from string to object
}
displayinfo()
//console.log(userArray)
adduserbtn.onclick = () => {
  const name = usernameTextField.value

  if (edit_id != null) {
    userArray.splice(edit_id, 1, {
      'name': name
    })
    edit_id = null
  } else {
    userArray.push({
      'name': name
    })
  }
  // console.log(userArray)
  savedata(userArray)
  usernameTextField.value = ''
  adduserbtn.innerText = btnText
}

function savedata(userArray) {
  let str = JSON.stringify(userArray)
  localStorage.setItem('users', str)
  displayinfo()
}

function displayinfo() {
  let data = ''
  userArray.forEach((user, i) => {
    data += `<tr class="${user.done ? 'done' : ''}">
       <th scope="row">${i + 1}</th>
       <td>${user.name}</td>
       <td><i class="btn text-white fa fa-edit btn-info mx-2" onclick='EditInfo(${i})'></i>
       <i class="btn btn-success text-white fa fa-check done-button mx-2" onclick='TaskDone(${i})'></i>
       <i class="btn btn-danger text-white fa fa-trash mx-2" onclick='DeleteInfo(${i})'></i></td>
     </tr>`;
    //console.log(data)
  })
  recordsDisplay.innerHTML = data
}

function EditInfo(id) {
  //alert(id)
  edit_id = id
  usernameTextField.value = userArray[id].name
  adduserbtn.innerText = 'Save Changes'
}

function DeleteInfo(id) {
  userArray.splice(id, 1)
  savedata(userArray)
}

function TaskDone(id) {
  userArray[id].done = true;
  savedata(userArray);
}

function changeTheme() {
  const themeSelect = document.getElementById('themeSelect');
  const selectedTheme = themeSelect.value;
  document.body.style.backgroundImage = `url(${selectedTheme}.jpg)`;
}

//default theme
changeTheme();