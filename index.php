<?php

include './vendor/eftec/bladeone/lib/BladeOne.php';

use eftec\bladeone\BladeOne;

$views = __DIR__ . '/views';
$cache = __DIR__ . '/cache';
$blade = new BladeOne($views,$cache,BladeOne::MODE_AUTO);

$view = basename(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));

try {
    session_start();

    if (isset($_GET['tutorial']) && ($_GET['tutorial'] == true)) {
        $_SESSION['auth'] = true;
    }

    if (isset($_SESSION['auth'])) {
        $blade->setAuth('tutorial','done');
    }

    echo $blade->run($view, ['request' => $view]);
}
catch (Exception $e) {
    header('Location: home');
    exit();
}

?>