<?php
header('content-type:text/html;charset="utf-8"');
	$conn=@mysql_connect('localhost','root','');
	if(!$conn){
		die('数据库连接有问题:'.mysql_error());
	}
	
	mysql_select_db('eight');
	mysql_query('SET NAMES UTF8');

if(isset($_POST['name'])){//前端ajax传输过来的额
	$username=$_POST['name'];//获取用户名
	$password=md5($_POST['pass']);//获取密码
}else{
	exit('非法操作');
}

//匹配用户名和密码是否同时相等
$query="select * from login where username='$username' and password='$password'";
$result=mysql_query($query);

if(mysql_fetch_array($result)){
	echo true;//登陆成功
}else{
	echo false;//登陆失败
}

?>