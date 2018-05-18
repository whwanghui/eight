<?php
	header('content-type:text/html;charset="utf-8"');
	$conn=@mysql_connect('localhost','root','');
	if(!$conn){
		die('数据库连接有问题:'.mysql_error());
	}
	
	mysql_select_db('eight');
	mysql_query('SET NAMES UTF8');
	
	if(isset($_POST['name']) || isset($_POST['submit'])){
		$username=@$_POST['name'];//@:容错
	}else{
		exit('非法操作');//输出文字，退出程序
	}
	

	$query1="select * from login where username='$username'";
	
	$result=mysql_query($query1);//如果$result有结果，代表用户名存在数据库中
	
	if(mysql_fetch_array($result)){//有重复
		echo true;//1
	}else{
		echo false;//空
	}
	
	
	
	
	
	//注册的信息放置到数据库里面
	if(isset($_POST['submit'])){
		$user=$_POST['username'];//用户名
		$pass=md5($_POST['password']);//密码
		$email=$_POST['email'];//邮箱
		$query="insert login values('$user','$pass','$email')";
		mysql_query($query);
		header('location:../html/login.html');//跳转到login.html页面
	}

?>