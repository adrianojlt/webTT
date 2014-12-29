<?php 

require_once('libs/FirePHP.class.php');
ob_start();
$firephp = FirePHP::getInstance(true);

class Test {}

$obj = new Test();

//var_dump($obj);
$firephp->log($_POST, 'post');


if ( isset($_POST['submit']) ) {
	
	echo $_POST["mail"];	
	echo $_POST["pass"];	
}

?>

