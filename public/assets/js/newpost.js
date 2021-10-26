const newPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-input').value.trim();
    const message = document.querySelector('#message-input').value.trim();

    if (title && message) {
        const response = await fetch('/api/posts', {
            method: 'POST',
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
    .querySelector('.newPost-form')
    .addEventListener('submit', newPostHandler);