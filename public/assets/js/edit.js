const editPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-input').value.trim();
    const message = document.querySelector('#message-input').value.trim();
    const id = document.querySelector('.editPost-form').dataset.id;

    if (title && message) {
        const response = await fetch('/api/posts/' + id, {
            method: 'PUT',
            body: JSON.stringify({ title, message }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    };
}

document
    .querySelector('.editPost-form')
    .addEventListener('submit', editPostHandler);