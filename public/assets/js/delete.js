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