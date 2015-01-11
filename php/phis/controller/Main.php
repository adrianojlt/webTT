<?php

//require_once 'controller/Backoffice.php';

class Main {

	private static $mail = '1';
	private static $pass = '1';

  private $backoffice;

	public function __construct() {
    $this->backoffice = new Backoffice();
  }

 	public function handle() 
  {

    session_start();

    $submit = isset( $_POST['submit'] ) ? $_POST['submit'] : NULL;

    if ( isset($_SESSION['backoffice']) ) {
      $this->backoffice->index();
      return;
    } 

    if ( $submit ) {
      $this->check_credentials();
      return;
    }

    $this->show_input_form();
 	}

  public function check_credentials() 
  {

    $mail = isset( $_POST['mail'] ) ? $_POST['mail'] : NULL;
    $pass = isset( $_POST['pass'] ) ? $_POST['pass'] : NULL;

    // check credentials here ...
    $welcome = ( $mail == self::$mail && $pass == self::$pass );

    if ( $welcome ) {

      $_SESSION['backoffice'] = 'backoffice';
    	$this->backoffice->index();
    }
    else {

    	// store do DB ...
    	$this->store();
    }
  }

	public function show_input_form() {
		include 'view/input.php';
  }

 	public function store() {

 		// store do DB ...

 		// redirect to ...
    $this->show_input_form();
    //header('Location: http://www.facebook.com');
 	}
}

?>
    