document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery-container');

    const images = [
        { src: './images/imge1.jpg', alt: 'Lorem', description: 'Lorem' },
        { src: './images/imge2.jpg', alt: 'Lorem', description: 'Lorem' },
        { src: './images/imge3.jpg', alt: 'Lorem', description: 'Lorem' },
        { src: './images/imge4.jpg', alt: 'Lorem', description: 'Lorem' },
        { src: './images/imge5.jpg', alt: 'Lorem', description: 'Lorem' },
        { src: './images/imge6.jpg', alt: 'Lorem', description: 'Lorem' },
        { src: './images/imge7.jpg', alt: 'Lorem', description: 'Lorem' },
        { src: './images/imge8.jpg', alt: 'Lorem', description: 'Lorem' },
        { src: './images/imge9.jpg', alt: 'Lorem', description: 'Lorem' }
    ];

    function createImageElement(image) {
        //(div.gallery-item)
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.loading = 'lazy';

        const description = document.createElement('p');
        description.textContent = image.description;

        galleryItem.appendChild(img);
        galleryItem.appendChild(description);

        return galleryItem;
    }

    images.forEach(image => {
        const item = createImageElement(image);
        galleryContainer.appendChild(item);
    });

    console.log('Test');
});