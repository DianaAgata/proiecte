var root = 'https://jsonplaceholder.typicode.com';

$.ajax({
    url: root + '/posts',
    method: 'POST',
    data: {
        title: 'Titlul noului post',
        body: 'Acesta este post-ul meu.........***********************',
        userId: 2
    },
    success: function (response) {
        console.log(response);
    }
});

$.ajax({
    url: root + '/posts/1',
    method: 'GET',
    success: function (response) {
        console.log(response);
    }
});

$.ajax({
    url: root + '/posts/1',
    method: 'PUT',
    data: {
        id: 1,
        title: 'Titlul modificat',
        body: 'Continutul modificat al postului //////////////////////////',
        userId: 1
    },
    success: function (response) {
        console.log(response);
    }
});

$.ajax({
    url: root + '/posts/1',
    method: 'DELETE',
    success: function (response) {
        console.log(response);
        console.log('Post deleted');
    }
});

$.ajax({
    url: root + '/comments',
    method: 'post',
    data: {
        title: 'Adaug un comentariu nou',
        body: 'Acesta este continutul noului comentariu',
        userId: 5
    },
    success: function (response) {
        console.log(response);
    }
});

$.ajax({
    url: root + '/comments/5',
    method: 'get',
    success: function (response) {
        console.log(response);
    }
});

$.ajax({
    url: root + '/comments/5',
    method: 'patch',
    data: {
        name: 'Modific doar numele cu metoda "patch" !!! '
    },
    success: function (response) {
        console.log(response);
    }
});

var root = 'https://api.lyrics.ovh';
$.ajax({
    url: root + '/v1/artist/title',
    method: 'GET',
    success: function (response) {
        console.log(response);
    }
});