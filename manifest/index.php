<?php
// Set the URL to fetch
$url = 'https://api.usd21.org/invites/manifest.json';

// Initialize a cURL session
$ch = curl_init($url);

// Set options for the cURL session
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_HEADER, false);

// Execute the cURL session
$response = curl_exec($ch);

// Check for cURL errors
if (curl_errno($ch)) {
    echo 'Error: ' . curl_error($ch);
} else {
    // Set the content type header to indicate that this is serving a Web app manifest
    header('Content-Type: application/manifest+json');

    // Output the response
    echo $response;
}

// Close the cURL session
curl_close($ch);
?>
