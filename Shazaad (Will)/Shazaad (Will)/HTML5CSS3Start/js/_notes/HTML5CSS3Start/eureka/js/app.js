$(document).ready(function(){
	$('.cols').hide();
	$('section>article>header').addClass('clickable');
	$('section>article>header').click(function(){
		var content = $(this).parent().find('.cols');
		if(content.is(':visible')){
			content.fadeOut();	
		}else{
			content.fadeIn();	
		}
	});
	
	$.ajax({
		url:"products.txt",
		dataType:"json",
		type:"post",
		success:function(data){
			//alert(data.products[0].name);
			var numProducts = data.products.length;
			for(var i=0;i<numProducts;i++){
				$('<tr><td>'+data.products[i].name+'</td><td>'+data.products[i].description+'</td><td>'+data.products[i].cost+'</td></tr>').appendTo('.products-table tbody');	
			}
		},
		error:function(){
			
		}
		
	})
	
	
	$('.products-table tbody tr').live('click',function(){
		//alert($(this).html())
		var row = '<tr>'+$(this).html()+'</tr>';
		$('.cart tbody').append(row);
		var cartData = JSON.parse(localStorage.getItem('cart'));
		cartData.products.push(row);
		localStorage.setItem('cart',JSON.stringify(cartData));
		//alert(localStorage.getItem('cart'));
	});
	
	if(localStorage.getItem('cart')==undefined){
		var cartData = {"products":[]}
		localStorage.setItem('cart',JSON.stringify(cartData));	
	}else{
		var cartData = JSON.parse(localStorage.getItem('cart'));
		var numProducts = cartData.products.length;
		for(var i=0;i<numProducts;i++){
			$('.cart tbody').append(cartData.products[i]);	
		}
	}
	
	
	
	
	
})