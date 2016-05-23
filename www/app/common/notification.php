<?php

// API access key from Google API's Console
define( 'API_ACCESS_KEY', 'AIzaSyBwxKrxr8FXXPZGGgdTvuwT5IhbMf2o60U' );


$registrationIds = array( "cAVAUdFVZfk:APA91bErY6XsL1rBs6aSlskj_xswa4hlE2OEAqxT8wan2zoULZCXFXLV6T7NvK5yG5O2BL7qi0NG29bD9ySMDBpL4I4fl0pVpGyIRcDR6-viLRCdU-h6uPqbjxSMbOw5uD3rdZgvxYX-" );

// prep the bundle
$msg = array
(
	'message' 	=> 'Yuvraj: Have a good day to you :D',
	'title'		=> 'Chatt',
	'image' => 'https://s3.amazonaws.com/uifaces/faces/twitter/envex/128.jpg',
	'actions'	=>  '[
       
       { "icon": "snooze", "title": "Reply", "callback": "actions_left","closeAfterClick" : 1},
   ]'
);
$fields = array
(
	'registration_ids' 	=> $registrationIds,
	'data'			=> $msg
);
 
$headers = array
(
	'Authorization: key=' . API_ACCESS_KEY,
	'Content-Type: application/json'
);
 
$ch = curl_init();
curl_setopt( $ch,CURLOPT_URL, 'https://android.googleapis.com/gcm/send' );
curl_setopt( $ch,CURLOPT_POST, true );
curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
curl_setopt( $ch,CURLOPT_POSTFIELDS, json_encode( $fields ) );
$result = curl_exec($ch );
curl_close( $ch );

echo $result;
?>
