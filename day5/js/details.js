
require.config({
		baseUrl:'http://apps.bdimg.com/libs/',//共有的路径
		paths:{
			'jquery':'jquery/2.1.4/jquery.min',//去掉扩展名。
			'jqcookie':'jquery.cookie/1.4.1/jquery.cookie'
		}
});
define(['jquery','jqcookie','main'],function($,cookie,main){
	return {
		
		cartajax:function(){
			$.ajax({
				type:"get",
				url:"../php/index.php",
				async:true,
				success:function(d){
					var data=JSON.parse(d);
					var ct=data.cart;
					var $t1=`<li><img src="${ct[0].src}" sid="${ct[0].sid}"/></li>`;
					var $t2=`<li><img src="${ct[0].src}" id="bpic"/></li>`;
					var $t3=`<h1 class="p-title">${ct[0].jieshao}</h1>`;
					var $t4=`<span class="price" id="buyPrice">
									<em>￥</em>${ct[0].price}
								</span>`;
					$('#sf').before($t1);
					$('#bf').append($t2);
					$('.pro_tit_top').append($t3);
					$('.pro_m_tit_1').before($t4);
					$.each(ct, function(i) {
						var $tt=`<li><img src="${ct[i].src}" /></li>`;
						$('#list ul').append($tt);
					});
					fd($('.wrap'));
				}
			});
			
			function fd(ele){
				$sf=ele.find('#sf');
		    	$bf=ele.find('#bf');
		    	$bpic=ele.find('#bpic');
		    	$spic=ele.find('#spic');
		    	$wrap=ele.find('.wrap');
		    	$aUlli=ele.find('#list ul li');
		    	$oUl=ele.find('#list ul');
		    	this.bl=null;
		    	//经过
				$spic.on('mouseover',function(){
					$sf.show();
					$bf.css('visibility','visible');
					//求小放的宽高
					$sf.width(function(){
			    			return $bf.outerWidth()*$spic.outerWidth()/$bpic.outerWidth();
			    });
				    $sf.height(function(){
				    	return $bf.outerHeight()*$spic.outerHeight()/$bpic.outerHeight();
				    });
					var $bl=$bpic.outerWidth()/$spic.outerWidth();
					//移动
					$spic.on('mousemove',function(ev){
						var ev=event||window.event;
						var $l=ev.clientX-($sf.outerWidth()/2)-ele.offset().left;
						var $t=ev.clientY-($sf.outerHeight()/2)-ele.offset().top;
						if($l<0){
			    				$l=0
			    			}else if($l>=$spic.outerWidth()-$sf.outerWidth()){
			    				$l=$spic.outerWidth()-$sf.outerWidth();
			    			}
			    			
			    			if($t<0){
			    				$t=0
			    			}else if($t>=$spic.outerHeight()-$sf.outerHeight()){
			    				$t=$spic.outerHeight()-$sf.outerHeight();
			    			}
			    			
			    			$sf.css({
			    				left:$l,
			    				top:$t
			    			});
			    			$bpic.css({
			    				left:-$l*$bl,
			    				top:-$t*$bl
			    			});
					});
				});
				//移出
				$spic.on('mouseout',function(){
					$sf.hide();
					$bf.css('visibility','hidden');
				});
				
				$aUlli.on('click',function(){
					$i=$(this).index();
					
					$spic.find('img').attr({src:$aUlli.eq($i).find('img').attr('src')});
					$bf.find('img').attr({src:$aUlli.eq($i).find('img').attr('src')});
				})
				
				
			}
			
			
			
		},
		

		
		cookie:function(){
		
		
			//第一步思路：将商品的id和数量存放的cookie和数据库里面。
			//第二步思路：定义两个数组接收存放的数量和id,提前约定存放cookie的名称。
			
			var sidarr = [];
			var numarr = [];
			function getcookievalue(){
				if($.cookie('cartsid')){//cartsid：cookie里面id的名称
					sidarr=$.cookie('cartsid').split(',');
				}
				if($.cookie('cartnum')){//cartnum：cookie里面数量的名称
					numarr=$.cookie('cartnum').split(',');
				}
			};
			//第三步思路：通过判断商品的id是否存在上面获取的sid里面。
			//如果存在，已经在购物车里面了，否则将商品sid添加到cookie里面
			$('.b-red').on('click',function(){
					var sid=$('#spic li img').attr('sid');//当前按钮对应图片的sid
					getcookievalue();//获取商品的id和数量,放到对应的数组中,利用数组进行匹配
					if($.inArray(sid,sidarr)!=-1){//是否存在cookie中
						//将之前的数据和当前存的数据相加，存放cookie里面
						if($.cookie('cartnum')==''){
							var num=parseInt($('.proinput').val());
							numarr[$.inArray(sid,sidarr)]=num;
							$.cookie('cartnum', numarr.toString(), {expires:7,path:'/'});//修改后的结果
							sidarr[$.inArray(sid,sidarr)]=sid;//将当前id添加到对应的位置。
	        				$.cookie('cartsid', sidarr.toString(), {expires:7,path:'/'});//将整个数组添加到cookie
						}else{
							var num=parseInt(numarr[$.inArray(sid,sidarr)])+parseInt($('.proinput').val());
							numarr[$.inArray(sid,sidarr)]=num;
							$.cookie('cartnum', numarr.toString(), {expires:7,path:'/'});//修改后的结果
						}
					}else{//不存在
						sidarr.push(sid);//将当前id添加到数组里面。
	        			$.cookie('cartsid', sidarr.toString(),{expires:7,path:'/'});//将整个数组添加到cookie
	        			numarr.push($('.proinput').val());//存放输入的数量，默认是1
	        			$.cookie('cartnum', numarr.toString(),{expires:7,path:'/'});
					}
			})
			
		}
		
		
		
		
		
		
		
	}
	
});