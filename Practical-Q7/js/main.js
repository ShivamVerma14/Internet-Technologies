let xhr = new XMLHttpRequest();
xhr.open('GET', './assets/data.json', true);
xhr.send();

xhr.onload = function () {
    if (xhr.status === 200) {
        let response = JSON.parse(xhr.response);
        let pets_data = response.data;

        pets_data.map((pet, index) => {
            let petDetails = '<div class="card mb-3" style="border-color: #EB796F;">' +
                                '<div class="card-body">' +
                                    '<h5 class="card-title fw-bold">' + pet.name + '</h5>' +
                                    '<h6 class="card-subtitle mb-2 text-muted">' + pet.type + '</h6>' +
                                    '<p class="card-text">Age: ' + pet.age + '</p>' +
                                    '<p class="card-text">Weight: ' + pet.weight + '</p>' +
                                    '<p class="card-text">Likes: ' + pet.likes + '</p>' +
                                '</div>' +
                              '</div>';
            
            $('.mycontainer').append(petDetails);
        });
    }
}