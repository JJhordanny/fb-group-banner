var strFBGraphURL = "https://graph.facebook.com/";
var strAccessToken = "239199982824315|3L1T4SUoHU7KPXUB3UiEhPnsTns";
var strGroupId = "206265449388631";
var strUrl = strFBGraphURL + strGroupId + "/members?access_token=" + strAccessToken;
$.getJSON( strUrl, function( listMembers ) {
  var strImg = "";
  for( var member of listMembers.data ){
    strMemberId = member['id'];
    strImg += "<img src='"+ strFBGraphURL + strMemberId +"/picture' />";
  }
  $("#banner").html( strImg );
});
