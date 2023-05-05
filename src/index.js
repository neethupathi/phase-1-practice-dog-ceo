console.log('%c HI', 'color: firebrick');
  document.addEventListener("DOMContentLoaded", () => {

    fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(response => response.json())
        .then(data => {
            const dogImageContainer = document.getElementById('dog-image-container');
            data.message.forEach(dog => {
                const dogImage = document.createElement('img');
                dogImage.src = dog;
                dogImageContainer.appendChild(dogImage);
        })
        })

    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(data => {
            const breedList = document.getElementById('dog-breeds');
            const breeds = data.message;
            Object.keys(breeds).forEach(breed => {
                const li = document.createElement('li');
                li.textContent = breed;
                breedList.appendChild(li);
                li.addEventListener('click', () => {
                    li.style.color = 'red';
                });
            });

            const breedDropdown = document.getElementById('breed-dropdown');
            breedDropdown.addEventListener('change', (event) => {
                const selectedValue = event.target.value;
                breedList.innerHTML = '';
                Object.keys(breeds).forEach(breed => {
                    if (breed.startsWith(selectedValue)) {
                        const li = document.createElement('li');
                        li.textContent = breed;
                        breedList.appendChild(li);
                        li.addEventListener('click', () => {
                            li.style.color = 'red';
                        });
                    }
                });
            });
        });


    })


