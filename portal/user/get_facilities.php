<?php
	//set this to 1 so that the minus80.php will not echo javascript
	$do_no_echo_javascript = 1;
	$inc_prefix = "../";

	include_once "../include/login.php";
    include_once "../include/minus80.php";

/*
 * To be called as a GET request with the username and password as parameters in the clear
 *   CALL:  get_facilities.php?username=testing&password=testing
 */

//validate login
$valid_user = -1;
if( valid_login($db, $username, $password, $valid_user) == 0 ){
	$str = array("success" => false, "messsage" => "Invalid login credentials", "user_id" => $valid_user);
	echo json_encode($str);
	exit;
}

//get the list of facilities for this user
load_mult_row_info("facility f, user_facility u", "WHERE u.facility_id=f.facility_id and u.user_id = " . $valid_user . " order by f.facility_name", $facilities, $db,
	"f.facility_id, f.facility_name");

$facilityListing = array("success" =>true, "text" => "Facilities Listing",
	"total" => count($facilities), "items" => array());

for ($i = 0; $i < count($facilities); $i++)
{
	$facil = array("id" => $facilities[$i]['facility_id'], "type" => "facility",
		"text" => $facilities[$i]['facility_name'], "info" => "", "items" => array());

	$units = null;
	load_mult_row_info("unit u", "WHERE u.facility_id=".$facilities[$i]['facility_id']." order by unit_name",
		$units, $db, "u.unit_id, u.unit_name, u.alarm_state, u.alarm_confirmed, u.confirmed_by");

	for( $j = 0; $j < count($units); $j++ )
	{
		$unit = array("id" => $units[$j]['unit_id'], "type" => "unit",
			"text" => $units[$j]['unit_name'], "info" => "",
			"alarm_state" => $units[$j]['alarm_state'],
			"alarm_confirmed" => $units[$j]['alarm_confirmed'],
			"confirmed_by" => $units[$j]['confirmed_by'],
			"items" => array());

		$devices = null;

 		load_mult_row_info("device_alarm da, device d", 
			"WHERE da.show_device = 1 and da.device_id = d.device_id and d.unit_id=".$units[$j]['unit_id']." order by da.device_id, da.device_number, da.description", 
			$devices, $db, "da.description, d.device_id, d.market_id, d.product_id, da.device_number, da.current_value, da.default_state, 
						da.measurement_type, da.device_type, da.alarm_state, (UNIX_TIMESTAMP() - UNIX_TIMESTAMP(da.last_message)) as last_message, 
						date_format(da.last_message, \"%a %H:%i\") as formatted_time, (UNIX_TIMESTAMP() - UNIX_TIMESTAMP(da.last_state_change)) as since_last_state_change,
						UNIX_TIMESTAMP(da.last_state_change) as last_state_change ");

		for( $k = 0; $k < count($devices); $k++ )
		{
			$device = array("id" => $devices[$k]['device_id'], "type" => "device",
				"number" => $devices[$k]['device_number'],
				"text" => $devices[$k]['description'],
				"value" => $devices[$k]['current_value']);
			
			//push the device onto the unit items array
			array_push($unit['items'], $device);
		}
	
		//push the unit onto the facility items array
		array_push($facil['items'], $unit);
	}
	//push the facility onto the listing array
	array_push($facilityListing['items'], $facil);
}

echo json_encode($facilityListing);

?>
