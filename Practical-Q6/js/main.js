const onSubmit = (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const type = document.getElementById('type').value;
    const likes = document.getElementById('likes').value;

    const dataObject = {
        name: name,
        age: age, 
        weight: weight,
        type: type,
        likes: likes
    };

    console.log(dataObject);
}

const form = document.getElementById('pet-form');
form.addEventListener('submit', onSubmit);