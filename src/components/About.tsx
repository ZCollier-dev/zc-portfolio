import circuitTree from "/circuit-tree.svg";

function About() {
	return (
		<main>
			<img className="treeimg" src={circuitTree} />
			<article>
				<div className="toparticle">
					<h2>Zachary Collier</h2>
					<h3>The Details</h3>
					<h4>Junior Full-Stack Developer</h4>
					<h4>Student at Keyin College</h4>
					<br />
					<p>
						Based in the small town of St. Albans, Newfoundland & Labrador, I
						have familiarized myself with computers at a young age. <br />
						<br />
						From installing and working with Linux as a daily driver to learning
						the ins and outs of programming at Keyin College, I am always
						excited to work on a new project.
					</p>
				</div>
				<div className="mainarticle">
					<h3 className="mainarticleheader">The Journey</h3>
					<p>
						Before I began my journey as a software developer, I originally
						pursued Chemical Process Engineering Technology at College of the
						North Atlantic, picked for my strong proficiency in chemistry.{" "}
						<br />
						<br />
						After taking a few much-needed years out of school, I opted to
						broaden my horizons by applying to Keyin College's Software
						Development program. As a result, I have laid the foundations for a
						satisfying career in the ever-evolving tech landscape.
					</p>
					<h3 className="mainarticleheader">The Hobbies</h3>
					<p>
						Ever since I was a young boy, I have always been fond of video
						games. While my tastes have changed a lot since then, my passion for
						them remains the same. Smaller titles by smaller studios often catch
						my eye for their willingness - and often necessity - to take
						creative risks and stand out from the crowd. A few of my favorites,
						from studios large and small, include: <br />
						<br />
					</p>
					<ul className="gameslist">
						<li>Paper Mario: The Thousand Year Door (Nintendo)</li>
						<li>Monster Hunter: World (Capcom)</li>
						<li>Terraria (Re-Logic)</li>
						<li>A Hat in Time (Gears for Breakfast)</li>
						<li>CrossCode (Radical Fish Games)</li>
					</ul>
					<p>
						<br />
						In the future, I hope to begin a hobby in blacksmithing. Working
						with metal in the ways blacksmiths do has always stuck out to me as
						something I would enjoy.
					</p>
				</div>
			</article>
		</main>
	);
}

export default About;
