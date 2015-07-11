$( window ).load(function(){
	displayArticle(1);
	$('#mainheader').delay(1000).addClass('flexbox').removeClass('die');
	$('#sidebar').animate({'right':'0'},1000);
	
	$('#mainnav').on('click','li',function(i){
		var item = $(this).index() + 1;
		displayArticle(item);		
	});
});

function displayArticle(art)
{
	if($('.content:nth-child('+art+')').attr('data-show') == 1) return false;
	
	var nowart = $('.content[data-show=1]');
	if(nowart)
	{
		$(nowart).animate({'top':'1200px'},1000).attr('data-show','0');
	}
	$('.content#con' + art).animate({'top':'0px'},1000).attr('data-show','1');
	syncNav(art);
}

function syncNav(menu)
{
	$('#mainnav li').removeClass('menuselect');
	$('#mainnav li:nth-child('+menu+')').addClass('menuselect');
}