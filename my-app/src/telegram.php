<?php


$name = $_POST['user_name'];
$name = $_POST['user_phone'];
$name = $_POST['user_email'];
$token = "2042254275:AAG87us1f6QBKz9J4EPpu6YBrxZEnw-5l5o";
$chat_id = "-470584868";
$arr = array(
    'Имя: ' => $name,
    'Телефон' => $phone,
    'Email' => $email,
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value. "%OA";

};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
    header('Location: thank-you.html');
} else {
    echo "Error";
}

?>