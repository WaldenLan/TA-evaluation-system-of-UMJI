<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>This is the time</title>
</head>
<body>

<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2016/3/31
 * Time: 12:03
 */
echo time();
date_default_timezone_set("Asia/Beijing");
echo "当前时间是 " . date("h:i:sa");
?>
</body>
</html>