console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogImageContainer = document.getElementById('dog-image-container');
    const dogBreedsList = document.getElementById('dog-breeds');

    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {

            data.message.forEach(imageUrl => {
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;
                dogImageContainer.appendChild(imgElement);
            });
        })
        .catch(error => console.error('Error fetching images:', error));


fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            breeds.forEach(breed => {
                const breedItem = document.createElement('li');
                breedItem.textContent = breed;
                dogBreedsList.appendChild(breedItem);
            });
        })
        .catch(error => console.error('Error fetching breeds:', error));

        dogBreedsList.addEventListener('click', function (event) {
            if (event.target.tagName === 'LI') {
                event.target.style.color = ''; //
            }
        });

        const breedDropdown = document.getElementById('breed-dropdown');

    breedDropdown.addEventListener('change', function () {
        const selectedLetter = breedDropdown.value;
        const allBreedItems = document.querySelectorAll('#dog-breeds li');

        allBreedItems.forEach(breedItem => {
            const breedName = breedItem.textContent.toLowerCase();
            breedItem.style.display = breedName.startsWith(selectedLetter) ? 'list-item' : 'none';
        });
    });
});
