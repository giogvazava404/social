$(document).ready(function(){
	
	topSlide("topMassage.php",".top .center .newsSlide span",0);
	
	$(".content .right .searchBox .search_form .select .selected").click(function(){
		$(".content .right .searchBox .search_form .select ul").stop().slideToggle("slow");
	});
	
	$(".content .right .searchBox .search_form .select ul li").click(function(){
		var valu = $(this).html();
		$(".content .right .searchBox .search_form .select .selected").html(valu);
		$(".content .right .searchBox .search_form .category").val(valu);
		$(".content .right .searchBox .search_form .select ul").stop().slideToggle("slow");
	})
	
});



function topSlide(file_name,insertx,itemx)
{
	var hr = new XMLHttpRequest();
	hr.open("GET","public/json/"+file_name,true);
	hr.setRequestHeader("Content-type","application/json",true);
	hr.onreadystatechange = function()
	{
		var data = JSON.parse(hr.responseText);
		for(var obj in data)
		{
			var o_q = data[obj][itemx].w;
			var ln = data[obj][itemx].l;
		}
		
		$(insertx).fadeOut("slow", function(){
			$(insertx).html(o_q);
			$(insertx).fadeIn("slow");			
		});
		
	}
	hr.send();
}