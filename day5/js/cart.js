require.config({
		baseUrl:'http://apps.bdimg.com/libs/',//共有的路径
		paths:{
			'jquery':'jquery/2.1.4/jquery.min',//去掉扩展名。
			'jqcookie':'jquery.cookie/1.4.1/jquery.cookie'
		}
});
define(['jquery','jqcookie','main'],function($,cookie,main){
	return {
		shop:function(){
			//2.根据cookie值，创建一个商品列表
			function createcart(sid,num){
				$.ajax({
					url:"../php/index.php",
				}).done(function(d){
					var data=JSON.parse(d);
					var tu=data.classifyp;//获取所需数据
					 for (var i = 0; i < tu.length; i++) {
            			if (sid == tu[i].sid) {//图片的sid和数据里面的sid匹配
            				var $clone=$('.content_type:hidden').clone(true);//对隐藏的最大盒子模块进行克隆
            				
            				$clone.find('.img_a').find('img').attr('src',tu[i].src);//图片地址赋值
            				$clone.find('.content1_a').html(tu[i].name);//图片介绍赋值
            				$clone.find('.contype1_cont2_p').html(tu[i].price);//价格赋值
            				$clone.find('.contype1_cont3').find('.amount1_0_531671').val(num)//获得cookie得到的数字
            				var jg=parseInt($('.contype1_cont2').find('span').html());//获取单价
            				$clone.find('.contype1_cont5').find('span').append(jg*num);//获得价格

            				$clone.css('display', 'block');
            				$('#particulars_c').append($clone);//克隆后的追加	
            				
            				kong();
            			}
            	}
					//4.生成推荐表
					for(var i=0;i<5;i++){
						var html=`<li>
							<dl>
								<dt>
									<a href="#">
										<img class="lazyload img" src="${tu[i].src}" sid="${tu[i].sid}"></a>
								</dt>
								<dd class="name">
									<a href="#">${tu[i].name}
									</a>
								</dd>
								<dd class="price">
									<span id="commend_buyPrice_531671_5594560541">
										￥
										<span class="bold">${tu[i].price}
										</span>
									</span>
								</dd>
								<div class="p-btn">
									<a href="javascript:void(0)">
										加入购物车
									</a>
								</div>
							</dl>
						</li>`;
						$('.tuijian ul').append(html);
					}
				})
			};
			
			
			var sidarr = [];
			var numarr = [];
			function cookieToArray(){
				if($.cookie('cartsid')){
					sidarr=$.cookie('cartsid').split(',');
				}
				
				if($.cookie('cartnum')){
					numarr=$.cookie('cartnum').split(',');
				}
			}
			
			
			
			$('.tuijian ul').on('click','.p-btn a',function(){//因为是搭建的内容所以用事件委托
				var sid=$(this).parents('.tuijian ul li').find('.lazyload').attr('sid');
				console.log(sid);
				
				cookieToArray();//获取cookie值，放到对应的数组中
				if($.isArray(sid,sidarr)!=-1){
					$('.content_type:visible').each(function() {
						//遍历可视的商品列表
			            if (sid == $(this).find('img').attr('sid')) {//添加购物车按钮的索引和购物车中商品列表的索引一致
			                var $num = $(this).find('.amount1_0_531671').val();//获取数量的值
			                $num++;//数量累加
			                $(this).find('.amount1_0_531671').val($num);//将数量赋值回去
			                //计算价格
			                var $jg = parseFloat($('.contype1_cont2').find('span').html());//获取当前的单价
			                $(this).find('.contype1_cont5').find('span').append(jg*num);//计算商品总价
			                //存储数量到cookie里面。通过编号找数量
			                numarr[$.inArray(sid, sidarr)] = $num;//将数量存储到对应的cookie存放数量的数组中
			                $.cookie('cartnum', numarr.toString(), {expires:7,path:'/'});//添加购物车
			            }
			        });
				}else{//当前商品列表没有进入购物车，创建商品列表
					sidarr.push(sid);//将当前id添加到数组里面。
			        $.cookie('cartsid', sidarr.toString(),{expires:7,path:'/'});//将整个数组添加到cookie
			        numarr.push(1);//走这里数量都是1.
			        $.cookie('cartnum', numarr.toString(),{expires:7,path:'/'});
			        createcart(sid, 1);
				}
			});
			
			
			
			
			
			

			
			//1.页面加载检测购物车(cookie里面)是否有数据，有的话创建商品列表
			if ($.cookie('cartsid') && $.cookie('cartnum')) {
			    var s = $.cookie('cartsid').split(',');//存放sid数组
			    var n = $.cookie('cartnum').split(',');//存放数量数组
			    for (var i = 0; i < s.length; i++) {
			        createcart(s[i], n[i]);//遍历创建商品列表
			    }
			};
			//3.cookie存在就显示购物车内容，不存在则显示不存在
			kong();
			function kong() {
			    if ($.cookie('cartsid')) {//cookie存在，有商品，购物车不再为空
			        $('.empty-cart').hide();
			        $('#waybill').show();
			        $('#mycart').show();
			        $('#cartlo').show();
			        $('#particulars').show();
			    } else {
			        $('.empty-cart').show();
			        $('#waybill').hide();
			        $('#mycart').hide();
			        $('#cartlo').hide();
			        $('#particulars').hide();
			    }
			}

			//5.数量增加
			$('#p_dec_disabled1_0').on('click', function() {
			    var $count = $(this).parents('.contype1_cont3').find('.input_goods').find('.amount1_0_531671').val();
			    $count++;
			    if ($count >= 99) {
			        $count = 99;
			    }
			    $(this).parents('.contype1_cont3').find('.input_goods').find('.amount1_0_531671').val($count);
			    $(this).parents('.content_type').find('.contype1_cont5').find('span').html(singlegoodsprice($(this)));
			});
			
				//数量减少
			$('#p_dec1_0').on('click', function() {
			    var $count = $(this).parents('.contype1_cont3').find('.input_goods').find('.amount1_0_531671').val();
			    $count--;
			    if ($count<=1) {
			        $count = 1;
			    }
			    $(this).parents('.contype1_cont3').find('.input_goods').find('.amount1_0_531671').val($count);
				 $(this).parents('.content_type').find('.contype1_cont5').find('span').html(singlegoodsprice($(this)));
			});
				//输入数字
			$('.amount1_0_531671').on('input',function(){
				var reg=/^\d+$/g;
				var valu=parseInt($(this).val());
				if(reg.test(valu)){
					if (valu<=1) {
				        $(this).val(1);
				    }else if (valu >= 99) {
				        $(this).val(99);
				    }else{
				    	$(this).val(valu);
				    }
				}else{
					$(this).val(1);
				}
				 $(this).parents('.content_type').find('.contype1_cont5').find('span').html(singlegoodsprice($(this)));
			});
				
			function singlegoodsprice(row) { //row:当前元素
			    var $dj = parseFloat(row.parents('.content_type').find('.contype1_cont2_p').html());
			    var $cnum = parseInt(row.parents('.contype1_cont3').find('.input_goods').find('.amount1_0_531671').val());
			    return ($dj * $cnum).toFixed(2);
			}
			
			
			
			
		}
	}
	
});