/**
 * Created by amir on 5/24/18.
 */
function addSubmit() {
    var articleAdded = {};
    articleAdded.title = $('#art_title').val();
    articleAdded.content = $('#art_content').val();
    // alert(articleAdded.title + articleAdded.content);
    return articleAdded;
}

function addToDB() {
    $.ajax({
        type: 'POST',
        data: addSubmit(),
        dataType : "json",
        url : 'articleAdded'
    });
    document.location.href = "http://localhost:8080/";
}
