require.config({
	baseUrl:'http://apps.bdimg.com/libs/',//共有的路径
	paths:{
		'jquery':'jquery/2.1.4/jquery.min',//去掉扩展名。
		'jqcookie':'jquery.cookie/1.4.1/jquery.cookie'
	}
});

define(['jquery','main'],function($,main){
	return {
		yanz:function(){
			var bstop1=true;
			var bstop2=true;
			var bstop3=true;
			
			$phoneNum=$('.mcicont_input').eq(0);
			$user=$('.mcicont_input').eq(1);
			$passWord=$('.mcicont_input').eq(2);
			$confirm=$('.mcicont_input').eq(3);
			$send=$('.mcicont_input').eq(4);
			$send.find('input').eq(1).on('click',function(){
				$send.find('.input_error').show();
			});
			
			
			$phoneNum.find('input').on('blur',function(){
				var reg=/^[1|2|3]\d{10}$/g;
				var reg1=/^(\w\w+\-?)@(\w\w+\-?).(\w\w+\-?)$/g;
				if(reg.test(this.value) || reg1.test(this.value)){
					$phoneNum.find('.input_error').hide();
					bstop1=false;
				}else{
					$phoneNum.find('.input_error').show();
					bstop1=true;
				}
			});
			
			
			$passWord.find('input').on('blur',function(){
				if(this.value.length>=8 && this.value.length<=16){
					$passWord.find('.input_error').hide();
					bstop2=false;
				}else{
					$passWord.find('.input_error').show();
					bstop2=false;
				}
			});
			
			
			$confirm.find('input').on('blur',function(){
				if(this.value==$passWord.find('input').val()){
					$confirm.find('.input_error').hide();
					bstop3=false;
				}else{
					$confirm.find('.input_error').show();
					bstop3=true;
				}
			});
			

		
				var bstop=true;//不通过
				var usereg=/^([\u4e00-\u9fa5]|[\W]|[a-zA-Z0-9]|){4,20}$/;
				$user.find('input').on('blur',function(){
					var username=this.value;//获取用户名值
					if(username!=''){//检测用户名是否为空
						if(usereg.test(username)){//检测用户名是否满足正则
							//将当前的用户名给后端，后端和数据库进行匹配，不管是否存在，后端返回结果
							$.ajax({
								type:'post',
								url:'../php/register.php',
								data:{
									name:username//获取用户名给后端
								},
								success:function(d){
									if(d){
										$user.find('.input_error').show();
										bstop=true;
									}else{
										$user.find('.input_error').hide();
										bstop=false;
									}
								}
							})
						}else{
							$user.find('.input_error').show();
							bstop=true;
						}
					}else{
						$user.find('.input_error').show();
						bstop=true;
					}
				});
				
				
				$('form').on('submit',function(){//验证不通过无法提交的
					if(bstop || bstop1 || bstop2 || bstop3){
						return false;//阻止按钮跳转。
					}
				});
			
			

			
		}
	}
});