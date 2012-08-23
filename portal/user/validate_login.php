<?php
	//set this to 1 so that the minus80.php will not echo javascript
	$do_no_echo_javascript = 1;
	$inc_prefix = "../";

	include_once "../include/login.php";
    include_once "../include/minus80.php";
//    include_once "../include/status.php";

/*
 * To be called as a GET request with the username and password as parameters in the clear
 *   CALL:  validate_login.php?username=testing&password=testing
 *   SUCCESS:  {"success":true,"messsage":"Valid login credentials","user_id":"4"}
 *   UNKNOWN USER:  {"success":false,"messsage":"Invalid login credentials","user_id":null}
 */

//validate login
$user_id = -1;
if( valid_login($db, $username, $password, $user_id) != 0 ){
	$str = array("success" => true,  "messsage" => "Valid login credentials",   "user_id" => $user_id);
} else {
	$str = array("success" => false, "messsage" => "Invalid login credentials", "user_id" => $user_id);
}
echo json_encode($str);

?>
