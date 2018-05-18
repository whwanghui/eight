require.config({
	baseUrl:'http://apps.bdimg.com/libs/',//共有的路径
	paths:{
		'jquery':'jquery/2.1.4/jquery.min',//去掉扩展名。
		'jqcookie':'jquery.cookie/1.4.1/jquery.cookie'
	}
});

define(['jquery','main'],function($,main){
	
		return {
			dr:function(){
				function addCookie(key,value,day){
					var date=new Date();//创建日期对象
					date.setDate(date.getDate()+day);//过期时间：获取当前的日期+天数，设置给date
					document.cookie=key+'='+encodeURI(value)+';expires='+date;//添加cookie，设置过期时间
				}
				$('#btn').on('click',function(){
					var $username=$('#username').val();//用户名
					var $password=$('#password').val();//密码
					$.ajax({
						type:'post',
						url:'../php/login.php',
						data:{//将用户名和密码传输给后端
							name:$username,
							pass:$password
						},
						success:function(data){//请求成功，接收后端返回的值
							if(!data){//用户名或者密码错误
								$('.alert-popup').show();
								$('#alertLayoutBg').show();
								$('#password').val('');
							}else{//成功
								addCookie('UserName',$username,7);
								location.href='../index.html';
							}
						}
					})
				});
				
				
				$('#j-alert-close999999').on('click',function(){
					$('.alert-popup').hide();
					$('#alertLayoutBg').hide();
				});
				
				
				
				$('#j-alert-confirm999999').on('click',function(){
					$('.alert-popup').hide();
					$('#alertLayoutBg').hide();
				});
			}
		}
	
	
});