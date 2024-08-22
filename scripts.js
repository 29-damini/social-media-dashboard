document.addEventListener('DOMContentLoaded', function() {
    const loadPostsButton = document.getElementById('load-posts');
    const postsList = document.getElementById('posts-list');
    const messagesList = document.getElementById('messages-list');
    const settingsForm = document.getElementById('settings-form');
    const themeSelect = document.getElementById('theme');
    const likesCount = document.getElementById('likes-count');
    const commentsCount = document.getElementById('comments-count');
    const requestsCount = document.getElementById('requests-count');

    // Dummy data
    const posts = [
        'Post 1: nature vibes',
        'Post 2: slay the day',
        'Post 3: colors of life.',
        'Post 4: Welcome to my blog!',
        'Post 5: smile,laugh, repeat!'
    ];

    const messages = [
        'Message 1: Welcome to the dashboard!',
        'Message 2: You have new notifications.',
        'Message 3: Do not forget to check your settings.',
        'Message 4: Your profile has been updated.',
        'Message 5: New friend request received.'
    ];

    // Simulated counts
    let likes = 1120;
    let comments = 450;
    let requests = 79;

    function updateCounts() {
        likesCount.textContent = likes;
        commentsCount.textContent = comments;
        requestsCount.textContent = requests;
    }

    function loadPosts() {
        if (posts.length) {
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'post';
                postElement.textContent = post;
                postsList.appendChild(postElement);
            });
            posts.length = 0; // Clear posts array
        } else {
            loadPostsButton.disabled = true;
            loadPostsButton.textContent = 'No more posts';
        }
    }

    loadPostsButton.addEventListener('click', loadPosts);

    function loadMessages() {
        messages.forEach(message => {
            const msg = document.createElement('div');
            msg.className = 'message';
            msg.textContent = message;
            messagesList.appendChild(msg);
        });
    }

    loadMessages();

    settingsForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedTheme = themeSelect.value;
        document.body.className = selectedTheme;
        alert('Settings saved!');
    });

    // Initial update of counts
    updateCounts();
});
