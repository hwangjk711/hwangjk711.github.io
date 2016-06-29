function tore_sub(){
/*	var btn_ul = $('.site_button'),
			btn_li = btn_ul.children('li'),
			btn = btn_li.find('button');
	
	btn.on ('click', function(){
		
		var btn_lndex = btn.parent(). index(this),
			code = $('#codding'),
			code_ul = code.find('ul'),
			code_li = code_ul.children('li');
		
		code_li.eq(btn_lndex + 1).addClass('codewith');
		code_li.siblings().removeClass('codewith');
	});*/
	
	$('.header').on ('click', function(){
		var code = $('#codding'),
			  code_ul = code.find('ul');
		code_ul.animate({'margin-top' : '-97%'},1000);
	});

		$('.bb').on ('click', function(){
		var code = $('#codding'),
			  code_ul = code.find('ul');
		code_ul.animate({'margin-top' : '-195%'},1000);
	});
	
			$('.pro').on ('click', function(){
		var code = $('#codding'),
			  code_ul = code.find('ul');
		code_ul.animate({'margin-top' : '-300%'},1000);
	});
	
			$('.info').on ('click', function(){
		var code = $('#codding'),
			  code_ul = code.find('ul');
		code_ul.animate({'margin-top' : '-390%'},1000);
	});
	
			$('.video').on ('click', function(){
		var code = $('#codding'),
			  code_ul = code.find('ul');
		code_ul.animate({'margin-top' : '-500%'},1000);
	});
	
	
	
	
	
	/*sub_button*/
	$('.next').on ('click', function(){
		var boxWrap = $('#boxWrap'),
			box_ul =boxWrap.find('ul');
		box_ul.animate({'margin-left':'-100%'},700)});
		
		
	$('.before').on ('click', function(){
		var boxWrap = $('#boxWrap'),
			box_ul =boxWrap.find('ul');
		box_ul.animate({'margin-left':'0%'},700);
		
	});
};
