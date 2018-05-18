
	//配置模块
	require.config({
		baseUrl:'http://apps.bdimg.com/libs/',//共有的路径
		paths:{
			'jquery':'jquery/2.1.4/jquery.min',//去掉扩展名。
			'jqcookie':'jquery.cookie/1.4.1/jquery.cookie'
		}
	});
	
	
	
	define(['jquery','main'],function($,main){
		
			return {
				
				//banner轮播
				lunbo:function(){
					var $banner=$('#banner');
					var $banner_c=$('.banner_c');
					var $aUlLi=$('.banner_c ul li');
					var $aOlLi=$('.banner_c ol li');
					var $left=$('.left');
					var $right=$('.right');
					var num=0;
					var timer=null;
					var that=this;
					var arr=['rgb(34, 123, 239)','rgb(250, 242, 219)','rgb(237, 237, 239)','rgb(255, 207, 79)','rgb(194, 17, 23)','rgb(34, 123, 239)','rgb(255, 213, 225)','rgb(88, 107, 227)','rgb(255, 207, 79)','rgb(237, 237, 239)'];
					$banner.css({'background-color':arr[0]});
					$aOlLi.on('mouseover',function(){
						num=$(this).index();
						lb();
					});
					
					$right.on('click',function(){
						num++;
						if(num>=$aOlLi.length){
							num=0;
						}
						lb();
					});
					$left.on('click',function(){
						num--;
						if(num<=-1){
							num=$aOlLi.length-1;
						}
						lb();
					});
					function lb(){
						$aOlLi.eq(num).addClass('active').siblings('li').removeClass('active');
						$aUlLi.eq(num).css('display','block').siblings('ul li').css('display','none');
						$banner.css({'background-color':arr[num]});
					}
					
						 timer=setInterval(function(){
							$right.click();
						},2000)
					$banner_c.hover(function(){
						clearInterval(timer);
						$left.css('visibility','visible');
						$right.css('visibility','visible');
					},function(){
						 timer=setInterval(function(){
							$right.click();
						},2000)
						$left.css('visibility','hidden');
						$right.css('visibility','hidden');
					})
	
				},
				
				//banner tab
				bannertab:function(){
					
					
					$('.tabbtn ul li').on('click',function(){
						$('.tabbtn ul li').eq($(this).index()).addClass('active').siblings('li').removeClass('active');
						$('.tabbtn ol > li').eq($(this).index()).css('display','block').siblings('li').css('display','none');
					})
					
				},
				
				
				//recomend lunb
				recomend:function(){
					var $ul=$('.madden-pro .verticabox > ul');
					$ul.width(function(){
			return $('.madden-pro .verticabox > ul > li:first').outerWidth()*$('.madden-pro .verticabox > ul > li').size();
		})
					var num=0;
					$('.recommend_right').on('click',function(){
						num++;
						if(num==1){
							$ul.animate({
								left:-$ul.width()/2
							},400)
						}else if(num==2){
							$ul.animate({
								left:0
							},400)
							num=0;
						}
					})
					$('.recommend_left').on('click',function(){
						num--;
						if(num==-1){
							$ul.animate({
								left:-$ul.width()/2
							},400)
						}else if(num==-2){
							$ul.animate({
								left:0
							},400)
							num=0;
						}
						
					})
				},
				
				
				
				
				
				//gundonghead
				gundonghead:function(){
					var $louti=$('#loutinav');
					var $loutili=$('#loutinav ul li');
					var $louceng=$('section #classify');

					$(window).on('scroll',function(){
						var $scrolltop=$(window).scrollTop();
						if($scrolltop>=1000){
							$('#gundonghead').css({
								top:0
							});
						}else{
							$('#gundonghead').css({
								top:-86
							});
						}
						if($scrolltop>=2700){
		    				$louti.show();
		    			}else{
		    				$louti.hide();
		    			}
						$louceng.each(function(index,element){
	    				var $top=$louceng.eq(index).offset().top+300;
	    				if($top>$scrolltop){
							$loutili.eq(index).addClass('active').siblings('li').removeClass('active');
		    					return false;
		    				}
		    		})
					});
					$loutili.on('click',function(){
		    			var $st=$louceng.eq($(this).index()).offset().top;
		    			$('html,body').animate({
		    				scrollTop:$st
		    			});
		    		});
			    	$('.wm-toolbar-footer .go').on('click',function(){
	
		    			$('html,body').animate({
		    				scrollTop:0
		    			},1000);
		    		})		
				},
				
				
				
				//classify adv和tab切换
				classifylunbo:function(element){
					
					var $ul=element.find('.floor-r .adv > ul');
					var $ulli=element.find('.floor-r .adv ul > li');
					var $ol=element.find('.floor-r .adv > .slider-num > li');
					var num=0;
					var that=this;
					$ul.width(function(){
						return $ulli.first().outerWidth()*$ulli.size();
					})
					$ul.css('left',-$ul.width()/$ulli.length+'px');
					
					$ol.on('click',function(){
						num=$(this).index();
						lb();
					});
					
					function lb(){
						$ol.eq(num).addClass('hover').siblings('li').removeClass('hover');
						$ul.animate({
							left:-($ul.width()/$ulli.length)*(num+1)
						},300);
					};
					element.find('.adv_right').on('click',function(){
						num++;
						if(num>=$ulli.length-2){
							num=$ulli.length-2;
							
						$ol.eq(0).addClass('hover').siblings('li').removeClass('hover');
							
						}
						$ul.stop(true,true).animate({
							left:-($ul.width()/$ulli.length)*(num+1)
						},300,function(){
							if(num>=$ulli.length-2){
								$ul.css('left',-$ul.width()/$ulli.length+'px');
								num=0;
							}
						});
$ol.eq(num).addClass('hover').siblings('li').removeClass('hover');
					})
					

					element.find('.adv_left').on('click',function(){
						num--;
						if(num<=-1){
							num=1;
							$ol.eq(num+1).addClass('hover').siblings('li').removeClass('hover');
						}
					$ul.stop(true,true).animate({
						left:($ul.width()/$ulli.length)*(num-1)
					},300,function(){
						if($ul.css('left')==0+'px'){
							$ul.css('left',-($ul.width()/$ulli.length)*(num+1));
							num=1;
						}
					})
						
						$ol.eq(num).addClass('hover').siblings('li').removeClass('hover');
					})
					
					
					element.find('.floor-r .adv').hover(function(){
						element.find('.adv > a').css('visibility','visible');
					},function(){
						element.find('.adv > a').css('visibility','hidden');
					})
					
					
					
					$classt=element.find('.floor-r .tit li');
					
					
					
					var $classi=element.find('.floor-r .tit > li');
					
					$classi.on('click',function(){
						$i=$(this).index();
						$classi.eq($i).addClass('cur').siblings('li').removeClass('cur');
						element.find('.floor-r > div').eq($i).addClass('con_l').siblings('div').removeClass('con_l');
						
						
					})
					
					
				},
				
				
				
				//sanjinav
				sanjinav:function(){
					$.ajax({
						type:"get",
						url:"php/index.php",
						async:true,
						
						success:function(d){
							var data=JSON.parse(d);
							var sanj=data.sanji;
							$.each(sanj, function(i) {	
								$('.sub_kind').eq(i).wrapInner('<a>'+sanj[i].name+'</a>')
							});
								
								
								
							var classifytab=data.classifyp;
							$.each(classifytab,function(i){
								var $mob=`<li><dl><dt><a href="#"><img class="lazyload img" src="${classifytab[i].src}"></a>
									</dt><dd class="name"><a href="#">${classifytab[i].name}
										</a></dd><dd class="price">
										<span id="commend_buyPrice_531671_5594560541">
											￥
											<span class="bold">${classifytab[i].price}
											</span>
										</span>
									</dd></dl></li>`;
								$('.con_tab').append($mob);
							});
							
							
							var load=data.load;

							$.each(load, function(i) {
								var $lod=`<img src="${load[i].src}" alt="${load[i].alt}" />`;
								$('.f5list').find('a').eq(i).append($lod);
								
							});
						}
					})
				},
				
				
				
			}
			
	});
	
