jQuery(document).ready(function() {
    jQuery('abbr.timeago').timeago(); //establishes timeAgo timestamps
});
$('#tweet-controls').hide();
$('#tweet-content').on('click', function() { //on click, shows controls in dashboard
	$('#tweet-controls').show();
	$(this).find('.tweet-compose').css({'height' : '5em'})
});
$(document).click(function(event) { 
    if(!$(event.target).closest('#dashboard').length) { //when clicking elsehwere, hides controls in dashboards
        if($('#tweet-controls').is(":visible")) {
            $('#tweet-controls').hide();
            $(this).find('.tweet-compose').css({'height' : '2.5em'})
        }
    }        
});
$('.tweet-compose').keyup(function() { //Character counter
    var tweetLength = $('.tweet-compose').val().length; 
	var charCount = 140 - tweetLength;
	$('#char-count').html(charCount);
    if(charCount <= 10) {
        $('#char-count').css({'color' : 'red'})
    }
    else {
        $('#char-count').css({'color' : '#999'})
    }
    if(charCount < 0) {
        $('.button').prop('disabled', true); //negative characters also disable button
    }
    else {
        $('.button').prop('disabled', false);
    }
});
$('.button').on('click', function(){ //creates new tweet on click
    if($('.tweet-compose').val().length !== 0){
        var newTweet = $('.tweet:first').clone('withDataAndEvents');
        newTweet.find('.avatar').prop('src', $('#your-avatar').prop('src'));
        newTweet.find('.fullname').html('Your name here');
        newTweet.find('.username').html('@urnamehere');
        newTweet.find('.tweet-text').html($('.tweet-compose').val());
        newTweet.find('.time').html(jQuery.timeago(new Date()));
        $('#stream').prepend(newTweet);
        $('.tweet-compose').prop('value', '')
    }
});
$('.tweet-actions').hide();
$('.tweet').hover(function(){ //shows tweet actions on hover over tweet
    $(this).find('.tweet-actions').show();
}, function(){
    $(this).find('.tweet-actions').hide(); //hides them when you're no longer hovering
})
$('.stats').hide();
$('.reply').hide();
$('.tweet').click(function() { //hides tweet stats and reply when you click on another tweet
    $('.stats').hide();
    $('.reply').hide();
    $(this).find('.stats').show();
    $(this).find('.reply').show();
});
$(document).click(function(event) {  //hides tweet stats and reply when you click outside of any tweet.
    if(!$(event.target).closest('.tweet').length) { //  Not exactly sure how the if statement works here, got it from stackedOverflow.  Works, though.
        $('.stats').hide();
        $('.reply').hide();
        // $('.tweet-compose').css({'height':'2.5em'})
    }        
});
$('.tweet-compose').click(function(){ //makes the tweet-compose text area expand on clicking.
    $(this).css({'height' : '5em'})  //still need to figure out how to make it hide when you click out, without necessarily minimizing the text area in the dashboard.
}); //at least, I think that's what the problem was...

//$('.tweet-compose').css({'height':'2.5em'}); <--- fit this in somewhere
$('span').on('click', function() {//doesn't work.  Is supposed to make the 'retweet' icon turn orange on click.  Fix it.
    $(this).find('#retweet').css({'color' : 'orange', 'background-color' : 'orange'});
    console.log('hello!');
})