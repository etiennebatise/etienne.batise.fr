<?php 

	$tickets = get_tickets_list(0, 4);

	foreach($tickets as $cle => $ticket)
	{	
    	$tickets[$cle]['title'] = htmlspecialchars($ticket['title']);
    	$tickets[$cle]['description'] = nl2br(htmlspecialchars($ticket['description']));
	}

	
 ?>