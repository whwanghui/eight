<?php
header('content-type:text/html;charset="utf-8"');
$cont=@mysql_connect('localhost','root','');
if(!$cont){
	die('数据库连接失败'.mysql_error());
}

mysql_select_db('eight');
mysql_query('SET NAMES UTF8');


$query='select * from nav';
$result=mysql_query($query);



$query1='select * from classifytab';
$result1=mysql_query($query1);

$query2='select * from cart';
$result2=mysql_query($query2);


$query3='select * from loading';
$result3=mysql_query($query3);


$arr=array();
for($i=0;$i<mysql_num_rows($result);$i++){
	$arr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
}

$arr1=array();
for($i=0;$i<@mysql_num_rows($result1);$i++){
	$arr1[$i]=mysql_fetch_array($result1,MYSQL_ASSOC);
}
$arr2=array();
for($i=0;$i<@mysql_num_rows($result2);$i++){
	$arr2[$i]=mysql_fetch_array($result2,MYSQL_ASSOC);
}

$arr3=array();
for($i=0;$i<@mysql_num_rows($result3);$i++){
	$arr3[$i]=mysql_fetch_array($result3,MYSQL_ASSOC);
}

Class obj{};
$data=new obj();
$data->sanji=$arr;
$data->classifyp=$arr1;
$data->cart=$arr2;
$data->load=$arr3;
echo json_encode($data);

?>