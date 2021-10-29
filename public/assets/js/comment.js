const newCommentHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment-input').value.trim();
    const post_id = document.querySelector('#comment-input').dataset.postid;
    console.log(comment);
    console.log(post_id);

    if (post_id && comment) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ post_id, comment }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(await response.text());
        }
    };
}

document
    .querySelector('#comment-btn')
    .addEventListener('click', newCommentHandler);