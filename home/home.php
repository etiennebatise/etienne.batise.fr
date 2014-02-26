
<script src='jq/home.js'></script>
<div id='content'>
	<!-- QUI SUIS JE -->
	<section>
		<h1>Who am I ?</h1>

		<article>
			<p>I'm Etienne Batise. I'm a french student at the <span class="keywords">INSA de Rouen</span> where I learn computer science. I'm also a member of the association <span class="keywords">Quantic Telecom</span> which is an Internet Service Provider.</p>
			<p>I really like to develop softwares or video-games and I like to learn new programming languages. I 'm also a musician, I've played the percussions for 15 years and I currently play the drums in a rock-band.</p>
		</article>
	</section>


	<section>
		<h1>Contact Me !</h1>
		<article>
		</article>
			<ul id='contact' >
				<!-- <li><a class="profile" href="https://www.facebook.com/etienne.grosbatise"><img src="res/FB-Logo.png"></a></li> -->
				<li><a class="profile" id='twitter-logo' href="https://twitter.com/EtienneBatise"><img src="res/Twitter-logo.png"></a></li>
				<li><a class="profile" href="http://www.linkedin.com/profile/view?id=305349004&trk=nav_responsive_tab_profile_pic"><img src="res/linkedin-logo.png"></a></li>
				<li><a class="profile" href="https://github.com/etiennebatise"><img src="res/GitHub-logo.png"></a></li>
			</ul>
	</section>

	<section id="sendMeAnEmail">
		<h1>Send me an email !</h1>

		<form method="post" action="mail.php">
			<p>
				<label for="subject">Subject : </label> <br />
				<input type="text" name="subject" id="subject" placeholder=" . . ." size="30"/>  
			</p>

			<p>	
				<label for="name">Your name : </label> <br />
				<input type="text" name="name" id="name" placeholder=" . . ." size="30"/>  
			</p>
			<p>
				<label for="adress">Your email adress : </label> <br />
				<input type="email" name="adress" id="adress" placeholder=" . . ." size="40" />  
			</p>

			<p>
				<textarea name="mail-content" id="mail-content" rows="15" cols="50" placeholder="What do you want to tell me ?" ></textarea>
			</p>

			<p>
				<input id="send" type="submit" value="Send"/>
			</p>
		</form>

	</section>
	