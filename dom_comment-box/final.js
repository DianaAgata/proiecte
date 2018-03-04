(function ($) {

    var comments = [];

    $('.comment-box__add-btn').on('click', addComment);
    $('.comments').on('click', 'button', deleteComment);

    function addComment(e) {
        var text = $('.comment-box__field').val();
        var email = $('.email-field').val();
        var image = $('.image-field').val();
        var comment = {
            id: Math.random().toString(10).substr(2, 5),
            text: text,
            email: email,
            imageUrl: image
        };
        comments.push(comment);
        $('input').val('');
        $('textarea').val('');
        displayComments();
        e.preventDefault();
    };

    function deleteComment(e) {
        var commentId = $(this).attr('commentId');

        for (var i = 0; i < comments.length; i++) {
            if (comments[i].id === commentId) {
                comments.splice(i, 1);
            };
        };
        displayComments();
    };

    function displayComments() {
        var commentsContainer = $(".comments").html("");
        var commentsHtml;

        console.log(comments);
        for (var i = 0; i < comments.length; i++) {
            comment = comments[i];
            commentsHtml = buildCommentHtml(comment);
            commentsHtml.find('img').attr('src', comment.imageUrl);
            commentsHtml.find('p').text('Comment : '+ comment.text);
            commentsHtml.find('span').text('Email : ' + comment.email);
            commentsHtml.find('button').attr('commentId', comment.id);
            commentsContainer.prepend(commentsHtml);
        };

    };

    function buildCommentHtml(comment) {
        var container = $('<li>');
        var img = $('<img>');
        var body = $('<p>');
        var email = $('<span>');
        var del = $('<button>');

        img.attr('src', comment.imageUrl)
            .attr('alt', 'Image')
            .appendTo(container);
        body.text(comment.text)
            .appendTo(container);
        email.text(comment.email)
            .appendTo(container);
        del.html('X')
            .appendTo(container);

        return container;
    };

})(jQuery);