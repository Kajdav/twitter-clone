jQuery(document).ready(function() {
    jQuery('abbr.timeago').timeago();
});
$('#tweet-controls').hide();
$('#tweet-content').on('click', function() {
	$('#tweet-controls').show();
	$(this).find('.tweet-compose').css({'height' : '5em'})
});
$(document).click(function(event) { 
    if(!$(event.target).closest('#dashboard').length) {
        if($('#tweet-controls').is(":visible")) {
            $('#tweet-controls').hide();
            $(this).find('.tweet-compose').css({'height' : '2.5em'})
        }
    }        
});
$('.tweet-compose').keyup(function() {
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
        $('.button').prop('disabled', true);
    }
    else {
        $('.button').prop('disabled', false);
    }
});
$('.button').on('click', function(){
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
$('.tweet').hover(function(){
    $(this).find('.tweet-actions').show();
}, function(){
    $(this).find('.tweet-actions').hide();
})
$('.stats').hide();
$('.reply').hide();
$('.tweet').click(function() {
    $('.stats').hide();
    $('.reply').hide();
    $(this).find('.stats').show();
    $(this).find('.reply').show();
});
$(document).click(function(event) { 
    if(!$(event.target).closest('.tweet').length) {
        $('.stats').hide();
        $('.reply').hide();
        // $('.tweet-compose').css({'height':'2.5em'})
    }        
});
$('.tweet-compose').click(function(){
    $(this).css({'height' : '5em'})
    console.log('Hi');
});

//$('.tweet-compose').css({'height':'2.5em'}); <--- fit this in somewhere