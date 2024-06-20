document.addEventListener('DOMContentLoaded', () => {
    const hoverTarget = document.querySelector('.hover-target');

    hoverTarget.addEventListener('mouseover', () => {
        createHoverContent();
    });

    hoverTarget.addEventListener('mouseout', () => {
        removeHoverContent();
    });

    function createHoverContent() {
        let hoverContent = document.querySelector('.hover-content');

        if (!hoverContent) {
            hoverContent = document.createElement('div');
            hoverContent.className = 'hover-content';

            const ul = document.createElement('ul');
            const items = ['Item 1', 'Item 2', 'Item 3'];

            items.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                ul.appendChild(li);
            });

            hoverContent.appendChild(ul);
            hoverTarget.appendChild(hoverContent);
            hoverContent.style.display = 'block';
        }
    }

    function removeHoverContent() {
        const hoverContent = document.querySelector('.hover-content');
        if (hoverContent) {
            hoverContent.remove();
        }
    }
});
