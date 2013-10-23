<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<link rel="stylesheet" type="text/css" href="style.css">
	<title>Etienne Batise</title>
</head>

<body>
<!-- Entête de page -->
	<header>
		<nav>
			<ul>
				<li><a href="etienneBatiseWelcome.php">Accueil</a></li>
				<li><a href="blog.php">Blog</a></li>
				<li><a href="cv.php">CV</a></li>
				<li><a href="#">Other</a></li>
			</ul>
		</nav>
	</header>
	
	
	<?php foreach ($tickets as $ticket) {
	 ?>
	 	<h1>
	 		<a href="ticket.php?id=<?php echo $ticket['id'] ?>"><?php echo $ticket['title']; ?></a>
	 		
	 	</h1>
	 		<em> <?php echo $ticket['description']; ?></em>
	 		<em> le <?php echo $ticket['date']; ?></em>
	 	

	 <?php 	 }
	 ?>
	<footer>
		<?php include ("footer.php") ?>
	</footer>
</body>

</html>