function search() {
    var searchTerm = document.getElementById('InputSearch').value;
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
}

document.getElementById('success').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'Resume.pdf'; 
    link.download = 'Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
