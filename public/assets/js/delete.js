const deletePostHandler = async (event) => {
    event.preventDefault();

    const id = document.querySelector('.delete').dataset.id;

    const response = await fetch('/api/posts/' + id, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document
    .querySelector('.delete')
    .addEventListener('click', deletePostHandler);