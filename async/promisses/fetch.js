(function(){   
    
    var root = 'https://jsonplaceholder.typicode.com';

    fetch(
        root + '/posts/1', {
        method: 'GET'
    }).then(function(response){
        return response.json();
    }).then(function(jsonResp) {
        console.log(jsonResp);
    })
    .then(modifyPost)
    .then(deletePost)
    .catch(function(error) {
        console.log('There was an error', error);
    });

    function modifyPost (){
    var root = 'https://jsonplaceholder.typicode.com';
        fetch(
            root + '/posts/1', {
            method: 'PUT',
            body: 'id=1&title=Post modificat&body=Continutul modificat al post-ului //////////////////////////&userId=1',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (response) {
            return response.json();
        }).then(function(jsonResp){
            console.log(jsonResp);
        }).catch(function(error) {
            console.log('There was an error', error);
        });
    };

    function deletePost (){
        var root = 'https://jsonplaceholder.typicode.com';
        fetch(
            root + '/posts/1', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function(response){
            return response.json();
        }).then(function(jsonResp) {
            console.log(jsonResp);
        }).catch(function(error) {
            console.log('There was an error', error);
        });
    };



    fetch(
        root + '/posts', {
        method: 'POST',
        body: 'title=Titlul noului post&body=Acesta este post-ul meu.........***********************&userId=2',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(function(response){
        return response.json();
    }).then(function(jsonResp) {
        console.log(jsonResp);
    }).catch(function(error) {
        console.log('There was an error', error);
    });


    fetch(
        root + '/comments', {
        method: 'post',
        body: 'title=Adaug un comentariu nou&body=Acesta este continutul noului comentariu&userId=5',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(function (response) {
        return response.json();
    }).then(function(jsonResp){
        console.log(jsonResp);
    }).catch(function(error) {
        console.log('There was an error', error);
    });


    fetch(
        root + '/comments/5', {
        method: 'get'
    }).then(function (response) {
        return response.json();
    }).then(function(jsonResp){
        console.log(jsonResp);
    }).catch(function(error) {
        console.log('There was an error', error);
    });




    var root = 'https://api.lyrics.ovh';
    fetch(
        root + '/v1/artist/title',{
        method: 'GET',
    }).then(function (response) {
        return response.json();
    }).then(function(jsonResp){
        console.log(jsonResp);
    }).catch(function(error) {
        console.log('An error occured : ', error);
    });

})();