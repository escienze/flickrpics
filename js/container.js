// begin ajax for random pics
var $picturesHTML = " ";
$picturesHTML += '<section>';
$picturesHTML += '<h1>generate random pictures</h1>';
$picturesHTML += '<article>';
$picturesHTML += '<p class="lead">Click on the generate pics button to see recent photos that have been posted on Flickr.</p>';
$picturesHTML += '</article>';
$picturesHTML += '</section>';

var $picturesFormHTML = " ";
$picturesFormHTML += '<form class="navbar-form navbar-center" role="picutres">';
$picturesFormHTML += '<div class="form-group">';
$picturesFormHTML += '<label for="picutres"></label>';
$picturesFormHTML += '<div class="form-group">';
$picturesFormHTML += ' <button id="submit" type="submit" value="picutres" class="btn btn-default navbar-btn">';
$picturesFormHTML += '<span class="glyphicon glyphicon-picutres"> Generate pics</span>';
$picturesFormHTML += '</button>';
$picturesFormHTML += '</div>';
$picturesFormHTML += '</div>';
$picturesFormHTML += '</form>';

// end ajax for random pics
///////////////////////////
//////////////////////////


// begin ajax for search pics
var $searchPicsHTML = " ";
$searchPicsHTML += '<section>';
$searchPicsHTML += '<h1>search pics</h1>';
$searchPicsHTML += '<article>';
$searchPicsHTML += '<p class="lead">Type in a search term to find the most recent photos that have been posted on Flickr.</p>';
$searchPicsHTML += '</article>';
$searchPicsHTML += '</section>';

var $searchPicsFormHTML = " ";
$searchPicsFormHTML += '<form class="navbar-form navbar-center" role="search">';
$searchPicsFormHTML += '<div class="form-group">';
$searchPicsFormHTML += '<label for="search"></label>';
$searchPicsFormHTML += '<div class="form-group">';
$searchPicsFormHTML += '<input type="text" class="form-control" id="search" name="search" placeholder="Search Pics">';
$searchPicsFormHTML += ' <button id="submit" type="submit" value="search" class="btn btn-default navbar-btn">';
$searchPicsFormHTML += '<span class="glyphicon glyphicon-search"> Search </span>';
$searchPicsFormHTML += '</button>';
$searchPicsFormHTML += '</div>';
$searchPicsFormHTML += '</div>';
$searchPicsFormHTML += '</form>';
// end ajax for search pics

///////////////////////////
//////////////////////////


// begin ajax for userid pics
var $useridHTML = " ";
$userid += '<section>';
$userid += '<h1>friends pics</h1>';
$userid += '<article>';
$userid += '<p class="lead">Too busy to joint Flickr but you want to stay connected to your friends by viewing their recent pictures? Type in the name of your friend and see what their most recent posts are.</p>';
$userid += '</article>';
$userid += '</section>';

var $useridFormHTML = " ";
$useridFormHTML += '<form class="navbar-form navbar-center form-inline" role="searchFriends">';
$useridFormHTML += '<div class="form-group">';
$useridFormHTML += '<label for="searchFriends"></label>';
$useridFormHTML += '<div class="form-group">';
$useridFormHTML += '<input type="text" class="form-control" id="searchFriends" name="searchFriends" placeholder="xxxxxxxx@xxx">';
$useridFormHTML += ' <button id="submit" type="submit" value="search" class="btn btn-default navbar-btn">';
$useridFormHTML += '<span class="glyphicon glyphicon-search"> Search using id</span>';
$useridFormHTML += '</button>';
$useridFormHTML += '</div>';
$useridFormHTML += '</div>';
$useridFormHTML += '</form>';
//end ajax for userid pics
///////////////////////////
//////////////////////////

//begin ajax for for username
var $useridHTML = " ";
$userid += '<section>';
$userid += '<h1>friends pics</h1>';
$userid += '<article>';
$userid += '<p class="lead">Too busy to joint Flickr but you want to stay connected to your friends by viewing their recent pictures? Type in the name of your friend and see what their most recent posts are.</p>';
$userid += '</article>';
$userid += '</section>';

var $friendsPicsFormNameHTML = " ";
$friendsPicsFormNameHTML += '<form class="navbar-form navbar-center form-inline" role="searchFriendsName">';
$friendsPicsFormNameHTML += '<div class="form-group">';
$friendsPicsFormNameHTML += '<label for="searchFriendsName"></label>';
$friendsPicsFormNameHTML += '<div class="form-group">';
$friendsPicsFormNameHTML += '<input type="text" class="form-control" id="searchFriendsName" name="searchFriendsName" placeholder="mypics">';
$friendsPicsFormNameHTML += ' <button id="submit" type="submit" value="search" class="btn btn-default navbar-btn">';
$friendsPicsFormNameHTML += '<span class="glyphicon glyphicon-search"> Search name</span>';
$friendsPicsFormNameHTML += '</button>';
$friendsPicsFormNameHTML += '</div>';
$friendsPicsFormNameHTML += '</div>';
$friendsPicsFormNameHTML += '</form>';
//end ajax for friends pics by username
////////////////////////////
///////////////////////////


// begin ajax for friends favorite pics
var $favoritesHTML = " ";
$favoritesHTML += '<section>';
$favoritesHTML += '<h1>friends fav pics</h1>';
$favoritesHTML += '<article>';
$favoritesHTML += '<p class="lead">Keep up-to-date on your friends’ favorite pictures. Type in your friend’s userid and find their favorite photos.</p>';
$favoritesHTML += '</article>';
$favoritesHTML += '</section>';

var $favoritesPicsFormHTML = " ";
$favoritesPicsFormHTML += '<form class="navbar-form navbar-center" role="searchFriendsFav">';
$favoritesPicsFormHTML += '<div class="form-group">';
$favoritesPicsFormHTML += '<label for="searchFriendsFav"></label>';
$favoritesPicsFormHTML += '<div class="form-group">';
$favoritesPicsFormHTML += '<input type="search" class="form-control" id="searchFriendsFav" name="searchFriendsFav" placeholder="Favorite Pics">';
$favoritesPicsFormHTML += ' <button id="submit" type="submit" value="search" class="btn btn-default navbar-btn">';
$favoritesPicsFormHTML += '<span class="glyphicon glyphicon-search"> Search </span>';
$favoritesPicsFormHTML += '</button>';
$favoritesPicsFormHTML += '</div>';
$favoritesPicsFormHTML += '</div>';
$favoritesPicsFormHTML += '</form>';
// end ajax for favorite pics
///////////////////////////
//////////////////////////


// begin ajax for about HTML
var $aboutHTML = " ";
$aboutHTML += '<section>';
$aboutHTML += '<h1>about flickrpics</h1>';
$aboutHTML += '<article>';
$aboutHTML += '<p class="lead">Keep your finger on the pulse of the latest picture trends on flickr.  Search for the most recent posts on flickr by category, friends or your friend’s favorites.</p>';
$aboutHTML += '</article>';
$aboutHTML += '</section>';
// end ajax for about HTML
///////////////////////////
//////////////////////////


//begin ajax for home
var $home = " ";
$home += '<section id="toFill">';
$home += '<h1>search away....</h1>';
$home += '<article>';
$home += '<p class="lead">Click on pictures to see randon pictures or do search for pictures, friends pics or friends favorites....</p>';
$home += '</article>';
$home += '</section>';
// end ajax for about home
///////////////////////////
//////////////////////////


/// begin append to HTML


$("#friendsPics").click(function() {
    document.getElementById("toFill").innerHTML = $friendsPicsHTML;
    document.getElementById("result").innerHTML = $friendsPicsFormHTML;
    // document.getElementById("result1").innerHTML = $friendsPicsFormNameHTML;
});

// $("#friendsPics").click(function() {
//     document.getElementById("toFill").innerHTML = $friendsPicsHTML;
//     document.getElementById("result").innerHTML = $friendsPicsFormHTML;
//     // document.getElementById("result1").innerHTML = $friendsPicsFormNameHTML;
// });

$("#pictures").click(function() {
    document.getElementById("toFill").innerHTML = $picturesHTML;
    document.getElementById("result").innerHTML = $picturesFormHTML;
});

$("#searchPics").click(function() {
    document.getElementById("toFill").innerHTML = $searchPicsHTML;
    document.getElementById("result").innerHTML = $searchPicsFormHTML;
});


$("#favorites").click(function() {
    document.getElementById("toFill").innerHTML = $favoritesHTML;
    document.getElementById("result").innerHTML = $favoritesPicsFormHTML;
});

$("#home").click(function(){
	 document.getElementById("toFill").innerHTML = $home;
});

$("#about").click(function() {
    document.getElementById("toFill").innerHTML = $aboutHTML;
});
// end append to HTML
////////////////////
///////////////////






