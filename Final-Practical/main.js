/*
    Name: Shivam Verma
    Roll No.: 19HCS4048
*/

const handleChange = (value) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', './data.json', true);
    xhr.send();

    nationality = value;

    xhr.onload = () => {
        if (xhr.status === 200) {
            response = JSON.parse(xhr.responseText);

            var content = '';

            if (value == 'Indian') {
                for (let i = 0; i < response.States.length; i++) {
                    content += '<option value="'+ response.States[i]["name"] +'">' + response.States[i]["name"] + '</option>';
                }

                document.getElementById('options').innerHTML = content;
            }

            else if (value == 'Foreigner') {
                for (let i = 0; i < response.Countries.length; i++) {
                    content += '<option value="'+ response.Countries[i]["name"] +'">' + response.Countries[i]["name"] + '</option>';
                }

                document.getElementById('options').innerHTML = content;
            }
        }
    }
}

const onSubmit = (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const age = document.getElementById('age').value;
    const options = document.getElementById('options').value;

    dataObject = {
        name: name,
        address: address,
        age: age, 
        nationality: nationality,
        options: options
    };

    document.getElementById('json').innerText = JSON.stringify(dataObject);
}

var nationality = '';
var dataObject = '';
const form = document.getElementById('my-form');
form.addEventListener('submit', onSubmit);