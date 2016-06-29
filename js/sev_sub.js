function  sev_sub(){
		$('.h_next').on ('click', function(){
		var boxWrap = $('#boxWrap'),
			box_ul =boxWrap.find('ul'),
			code = $('#codding'),
			code_ul = code.find('ul');
			
		box_ul.animate({'margin-left':'-100%'},700),
		code_ul.animate({'margin-left':'-100%'},700);
		
		});
	
	
		$('.e_bef').on ('click', function(){
		var boxWrap = $('#boxWrap'),
			box_ul =boxWrap.find('ul'),
			code = $('#codding'),
			code_ul = code.find('ul');
		code_ul.animate({'margin-left':'-0%'},700);
		box_ul.animate({'margin-left':'0%'},700)});
	
			$('.e_next').on ('click', function(){
		var boxWrap = $('#boxWrap'),
			box_ul =boxWrap.find('ul'),
			code = $('#codding'),
			code_ul = code.find('ul');
		code_ul.animate({'margin-left':'-200%'},700);
		box_ul.animate({'margin-left':'-200%'},700)});
	
		$('.p_bef').on ('click', function(){
		var boxWrap = $('#boxWrap'),
			box_ul =boxWrap.find('ul'),
		code = $('#codding'),
			code_ul = code.find('ul');
		code_ul.animate({'margin-left':'-100%'},700);
		box_ul.animate({'margin-left':'-100%'},700)});	
	
		$('.p_next').on ('click', function(){
		var boxWrap = $('#boxWrap'),
			box_ul =boxWrap.find('ul'),
			code = $('#codding'),
			code_ul = code.find('ul');
		code_ul.animate({'margin-left':'-300%'},700),
		box_ul.animate({'margin-left':'-300%'},700)});	
	
		$('.d_bef').on ('click', function(){
		var boxWrap = $('#boxWrap'),
			box_ul =boxWrap.find('ul'),
		code = $('#codding'),
			code_ul = code.find('ul');
		code_ul.animate({'margin-left':'-200%'},700);
		box_ul.animate({'margin-left':'-200%'},700)});	
	
	
	
	
/*tab*/	
		$('.h_next_tab').on ('click', function(){
		var tabWrap = $('#tabWrap'),
			tab_ul =tabWrap.find('ul'),
			tabcode = $('#tabCode'),
			tabcode_ul = tabcode.find('ul');
			
		tab_ul.animate({'margin-left':'-100%'},700),
		tabcode_ul.animate({'margin-left':'-100%'},700);
		
		});
	
		$('.e_bef_tab').on ('click', function(){
		var tabWrap = $('#tabWrap'),
			tab_ul =tabWrap.find('ul'),
			tabcode = $('#tabCode'),
			tabcode_ul = tabcode.find('ul');
			
		tab_ul.animate({'margin-left':'0%'},700),
		tabcode_ul.animate({'margin-left':'0%'},700);
		
		});
	
		$('.e_next_tab').on ('click', function(){
		var tabWrap = $('#tabWrap'),
			tab_ul =tabWrap.find('ul'),
			tabcode = $('#tabCode'),
			tabcode_ul = tabcode.find('ul');
			
		tab_ul.animate({'margin-left':'-200%'},700),
		tabcode_ul.animate({'margin-left':'-200%'},700);
		
		});

		$('.p_bef_tab').on ('click', function(){
		var tabWrap = $('#tabWrap'),
			tab_ul =tabWrap.find('ul'),
			tabcode = $('#tabCode'),
			tabcode_ul = tabcode.find('ul');
			
		tab_ul.animate({'margin-left':'-100%'},700),
		tabcode_ul.animate({'margin-left':'-100%'},700);
		
		});

			$('.p_next_tab').on ('click', function(){
		var tabWrap = $('#tabWrap'),
			tab_ul =tabWrap.find('ul'),
			tabcode = $('#tabCode'),
			tabcode_ul = tabcode.find('ul');
			
		tab_ul.animate({'margin-left':'-300%'},700),
		tabcode_ul.animate({'margin-left':'-300%'},700);
		
		});

			$('.d_bef_tab').on ('click', function(){
		var tabWrap = $('#tabWrap'),
			tab_ul =tabWrap.find('ul'),
			tabcode = $('#tabCode'),
			tabcode_ul = tabcode.find('ul');
			
		tab_ul.animate({'margin-left':'-200%'},700),
		tabcode_ul.animate({'margin-left':'-200%'},700);
		
		});
	
};