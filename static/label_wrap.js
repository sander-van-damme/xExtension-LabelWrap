function labelWrap()  {
    try {
        const list = document.querySelector('#tags > .tree-folder-items');
        if (list) {
            const items = Array.from(list.querySelectorAll('li'));
            if (items) {
                items.sort((a, b) => {
                    const unreadCountA = parseInt(a.getAttribute('data-unread'));
                    const unreadCountB = parseInt(b.getAttribute('data-unread'));
                    return unreadCountB - unreadCountA;
                });
                items.forEach(item => list.appendChild(item));
            }
        }
    }
    catch (e) {
        console.log(e);
    }
}
labelWrap();
window.addEventListener("DOMContentLoaded", labelWrap);
window.addEventListener("onhashchange", labelWrap);
