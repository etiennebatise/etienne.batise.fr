<?php 
	require_once('config.php');

	$subject = htmlspecialchars($_POST['subject']);
	$name = htmlspecialchars($_POST['name']);
	$adress = htmlspecialchars($_POST['adress']);
	$mailContent = $_POST['mail-content'];
	$me = "etienne.batise@gmail.com";

	if (!preg_match("#^[a-z0-9._-]+@(hotmail|live|msn).[a-z]{2,4}$#", $me)) {
		$carriage_return = "\r\n";
	}

	else {
		$carriage_return = "\n";
	}

	/*
	 * BOUNDARY
	 */
	$boundary = "-----=".md5(rand());

	/*
	 * HEADER
	 */
	$header = "From: \"$name\" <".$adress.">".$carriage_return;
	$header .= "Reply-to: \"$name\" <".$adress.">".$carriage_return;
	$header .= "MIME-Version: 1.0".$carriage_return;
	$header .= "Content-Type: multipart/alternative;".$carriage_return." boundary=\"".$boundary."\"".$carriage_return;


	$message = $carriage_return."--".$boundary.$carriage_return;
	$message .= "Content-Type: text/plain; charset=\"ISO-8859-1\"".$carriage_return;
	$message .= "Content-Transfer-Encoding: 8bit".$carriage_return;
	$message .= $carriage_return.$mailContent.$carriage_return;
	$message .= $carriage_return."--".$boundary."--".$carriage_return;

	mail($me, $subject, $message, $header);

	require_once("blog/header.php");
?>
<section>
<article id="mail">
	<p>Mail Envoyé</p>
	<a href=<?php echo $path."index.php" ?>> -> Retour au site <- </a>
</article>
</section>
<?php 
	require_once("include/footer.php");
 ?>