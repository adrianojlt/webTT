<?php

// configs 
error_reporting(E_ALL);
require_once 'config/database.php';

// CONSTANTES
define('DS', 	DIRECTORY_SEPARATOR);
define('ROOT', 	dirname(dirname(__FILE__)));
 //$site_path = realpath(dirname(__FILE__));
 //define ('__SITE_PATH', $site_path);

// FirePHP
require_once('library/FirePHP.class.php');
ob_start();
$firephp = FirePHP::getInstance(true);
//$firephp->log($_POST, 'post');


require_once 'controller/Main.php';
require_once 'controller/Backoffice.php';

$main = new Main();

$main->handle();

?>