// 2.Consider an array with name of 5 fruits, map this array and create five checkboxes with their corresponding names. In a div show the fruit names which are checked.
const fruits = ["Apple", "Grape", "Orange", "Banana", "Blackberry"];
const checkboxContainer = document.getElementById('checkbox-container');
const checkedFruitsDiv = document.getElementById('checked-fruits');

fruits.forEach(fruit => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = fruit;
    const label = document.createElement('label');
    label.textContent = fruit;
    checkboxContainer.append(checkbox);
    checkboxContainer.append(label);
    checkboxContainer.append(document.createElement('br'));
    checkbox.addEventListener('change', updateCheckedFruits);
});
  
function updateCheckedFruits() {
    const checkedFruits = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        checkedFruits.push(checkbox.value);
    });
    checkedFruitsDiv.textContent = 'Checked fruits: ' + (checkedFruits.length ? checkedFruits.join(', ') : 'None');
}

updateCheckedFruits();