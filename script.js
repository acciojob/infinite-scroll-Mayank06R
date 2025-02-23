//your code here!
document.addEventListener('DOMContentLoaded', (event) => {
    const list = document.getElementById('infi-list');
    
    // Function to add list items
    function addItems(numItems) {
        for (let i = 0; i < numItems; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = `List item ${list.children.length + 1}`;
            list.appendChild(listItem);
        }
    }
    
    // Add 10 list items by default
    addItems(10);
    
    // Infinite scrolling
    list.addEventListener('scroll', () => {
        if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
            addItems(2);
        }
    });
});

