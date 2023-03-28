const form = document.querySelector('#userForm');
const usersArray = [];
let currentId = 0;

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let errors = [];

    // let select = this.querySelector('select');
    // console.log(select.options);
    // console.log(select.selectedIndex);
    // console.log(select.value);

    let inputName = this.querySelector('input[name="name"]');
    let inputRole = this.querySelector('input[name="role"]');
    let inputIsActive = this.querySelector('input[name="isActive"]');
    let inputIsAvailable = this.querySelector('input[name="isAvailable"]');
    let errorsContainer = this.querySelector('div.errors');
    errorsContainer.innerText = '';
    let nameValue = inputName.value.trim();
    let roleValue = inputRole.value.trim();

    if(!nameValue)
        errors.push('Name should not be empty')

    if(!(nameValue.length >= 3 && nameValue.length <= 32))
        errors.push('Name should be between 3 and 32 symbols');

    if(!roleValue)
        errors.push('Role should not be empty');

    if(!(roleValue.length >= 3 && roleValue.length <= 20))
        errors.push('Role must be between 3 and 20 symbols');

    if(errors.length) {
        errors.forEach(error => {
            errorsContainer.innerText += `${error} \n`;
        });

        return;
    }

    let user = {
        id: currentId,
        name: nameValue,
        role: roleValue,
        isActive: inputIsActive.checked,
        isAvailabe: inputIsAvailable.checked,
    }

    currentId++;
    usersArray.push(user);
    addRow(user);

    inputName.value = '';
    inputRole.value = '';
    inputIsActive.checked = false;
    inputIsAvailable.checked = false;
})

// checked - boolean 


// CRUD - create read update delete
// PEMDAS - parentis exponentinal multiply devide addition substitution

function addRow(user) {
    const tr = document.createElement('tr');
    Object.keys(user).forEach(key => {
        let td = document.createElement('td');
        td.innerText = user[key];

        tr.append(td);
    })

    document.querySelector('#users tbody').append(tr);
}

