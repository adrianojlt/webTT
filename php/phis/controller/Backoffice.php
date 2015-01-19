<?php

class Backoffice {

  private $header   = 'view/backoffice/header.php';
  private $template = 'view/backoffice/template.php';

	public function __construct() {}

 	public function index() {

    $op = isset( $_GET['op'] ) ? $_GET['op'] : NULL;

    if ( $op == 'logout' ) { $this->logout(); }

    switch( $op )
    {
        default:     
          $this->render('view/backoffice/index.php');
        break;

        case "records":
          $this->render('view/backoffice/records.php');
        break;

        case "logs":
          $this->render('view/backoffice/logs.php');
        break;

        case "etc":
          $this->render('view/backoffice/etc.php');
        break;

        case "settings":
          $this->render('view/backoffice/settings.php');
        break;
    }
 	}

  private function render( $view ) {
    $body = $view; 
    $nav = $this->header;
    include_once $this->template;
    //include_once $this->header;
    //include_once $view;
  }

  private function logout() {
      session_destroy();
      header("location: index.php");
  }
}

?>
    