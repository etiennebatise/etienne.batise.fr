<?php session_start(); ?>


<?php 
require_once('config.php');

    // Par défaut on affiche la page home.
if(!isset($_GET['id'])) {
    require_once('home/controller.php');

        // Vue
    require_once('include/header.php');
    require_once('home/home.php');
    require_once('include/footer.php');
}

    // Si le paramètre Get est blog. On affiche le blog
else {
    if ($_GET['id'] == 'cv'){
        require_once('include/header2.php');
        require_once('cv/view.php');
        require_once('include/footer.php');
    }

    else if ($_GET['id'] == 'tip'){
        require_once('tip/model.php');
        require_once('tip/controller.php');
        require_once('tip/view.php');
    }
}
?>
