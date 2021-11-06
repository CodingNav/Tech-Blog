document.querySelectorAll('.delete').forEach(item => {
    item.addEventListener('click', async event => {
        event.preventDefault();

        const id = item.dataset.id;

        const response = await fetch('/api/posts/' + id, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    });
});

document.querySelectorAll(".edit").forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();

        window.location = item.dataset.href;
    });
});