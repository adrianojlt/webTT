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
          $this->render('view/backoffice/index.php',null);
        break;

        case "records":

          $records = array();

          $conn = mysqli_connect(DB_SERVER,DB_USERNAME, DB_PASSWORD, DB_DATABASE);

          if ( $conn === false ) {
            //die("ERROR: Could not connect. " . mysqli_connect_error());
          }

          $query = "SELECT * FROM record ORDER BY created DESC";

          if ( !$result = $conn->query($query)) {
            die('There was an error running the query [' . $conn->error . ']');
          }

          while ($row = $result->fetch_assoc()) {
            //printf ("%s (%s)\n", $row["Name"], $row["CountryCode"]);
            array_push($records, $row);
          }


          $content['title'] = "saved records";
          $content['records'] = $records;

          $this->render('view/backoffice/records.php',$content);

        break;

        case "logs":
          $this->render('view/backoffice/logs.php',null);
        break;

        case "etc":
          $this->render('view/backoffice/etc.php',null);
        break;

        case "settings":
          $this->render('view/backoffice/settings.php',null);
        break;
    }
 	}

  private function render( $view , $content ) {
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
    