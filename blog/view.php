	<section>
	<?php foreach ($tickets as $ticket) {
	 	$id = $ticket['id'];
	 ?>

	 	<article class="blog" id="<?php echo $id ?>" >
		 	<?php print_table($tickets, 'blog'); ?>
	 	</article>
	 <?php 	 }	 ?>
	 </section>

