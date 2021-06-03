var nav1 = document.getElementById('access_nav1'),
    body = document.faixasA1;

nav1.addEventListener('click', function(e) {
    body.className = body.className? '' : 'with_nav1';
    e.preventDefault();
});