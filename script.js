function search(engine) {
    var searchTerm = document.getElementById('InputSearch').value;
    var searchUrl = '';

    switch (engine) {
        case 'google':
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
            break;
        case 'edge':
            searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(searchTerm)}`;
            break;
        case 'brave':
            searchUrl = `https://search.brave.com/search?q=${encodeURIComponent(searchTerm)}`;
            break;
    }

    window.location.href = searchUrl;
}

document.getElementById('success').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'Resume.pdf'; 
    link.download = 'Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
