<template>
	<b-container>
		<b-row>
			<InfoCard v-for="card in cards" :key="card.title" :card="card" />
		</b-row>
	</b-container>
</template>
<script>
import InfoCard from "@/components/InfoCard"
export default {
	name: "Work Experience",
	components: {
		InfoCard,
	},
	data: () => {
		return {
			cards: [
				{
					title: "L3 Harris Technologies (Harris Corporation)",
					subtitle1: "Systems Engineering Intern (Summer 2020, Summer 2019)",
					subtitle2: "Software Engineering Intern (Summer 2018)",
					p1:
						"The summer after my sophomore year of college, I interned with what was\
						then Harris Corporation (now L3Harris Technologies) as a software\
						engeering intern. In this role, I aided in the development of embedded\
						software across all phases of the design process, from operating\
						environment configuration to application development to testing and\
						authoring documentation.",
					p2:
						"I returned to Harris the following summer as a systems engineering intern,\
						and performed extensive work conducting a risk management analysis of an\
						electronic warfare (EW) system. I also assisted the software team by\
						authoring and performing a number of unit and integration tests on several\
						EW systems to aid in certifying equipment prior to its release, as well as\
						testing several options for operationg environment configuration and\
						deployment automation. On a more traditional systems engineering note, I\
						also aided in the production of design documentation for a new EW\
						platform.",
					p3:
						"I anticipate returning to L3Harris (which rebranded as a result of a\
						merger last summer) this coming summer, once again as a systems\
						engineering intern.",
					link: "https://www.l3harris.com/who-we-are",
					buttonText: "Learn more about L3Harris Technologies",
					icon: "L3Harris.jpg",
					iconRight: "false",
				},
				{
					title: "Villanova University Tech Crew",
					subtitle1: "President and Head Technician (2019)",
					subtitle2: "Various Roles (2016-Present)",
					p1:
						"Throughout my time in college, I have been heavily involved in Villanova\
						University Tech Crew, a one of a kind on-campus event production\
						organization. VUTC provides high quality Audio, Lighting, and Video\
						production services to the Villanova Community at affordable rates, and is\
						heavily involved in almost every event that occurs on campus. Notable\
						events VUTC provides services for include the freshman orientation\
						program, Special Olympics Fall Festival (the largest student run special\
						olympics event in the world), NOVAdance (a 12 hour dance marathom to\
						benefit pediatric cancer patients), and A Capella Palooza (a student A\
						Capella showcase featuring full concert-style production).",
					p2:
						"My first leadership position in VUTC was in the spring of my freshman\
						year. At that time, I began serving as VUTC's Events Manager, a role which\
						required me to meet with clients, determine their needs, generate and\
						provide them with a quote, and coordinate logistic for each event. The\
						following year, I served as Vice-President, which presented many of the\
						same responsabilities, but for all of the large scale events on campus. I\
						then continued to serve as the organization's president the following\
						year, which made me directly responsible for both the day to day\
						operations and the long term development of the $70,000/year organization.",
					p3:
						"In addition to these leadership roles, I am one of VUTC's several Head\
						Technicians. In this capacity, I manage the setup, operation, and\
						tear-down of complex audio, video, and lighting systems at events of all\
						scales. In this role, I am directly responsible for supervising a staff of\
						up to 25 people, as well as interfacing with clients and other university\
						resources such as public safety, facilities management, and operations\
						staff.",
					link: "https://vutc.com",
					buttonText: "Learn more about Villanova University Tech Crew",
					icon: "VUTC.png",
					iconRight: "2",
				},
				{
					title: "Villanova University Department of Environmental Health and Safety",
					subtitle1: "Student Worker (2016-Present)",
					p1:
						"Since my freshman year of college, I have worked with the university's\
						department of environmental health and safety, providing a wide variety\
						of technical services (and some decidedly less technical ones, such as\
						testing safety showers). I began my time with the department aiding in\
						the generation of presentation aids and similar content. However, shortly\
						after becoming an employee, I was assigned the responsibility of redesigning\
						the department's website to facilitate easier navigation and improve cohesion\
						with the greater university's site. ",
					p2:
						"From there, I transitioned to an extensive period of database work, in which\
						I created a number of database applications for tracking various aspects of\
						the university's operations. These applications were based on Microsoft\
						Access, and included comprehensive authentication and auditing capabilities\
						in addition to the usual data input report generation capabilities.",
					p3:
						'Recently, I\'ve been working with the department in conjunction with\
						another student worker to develop an in house chemical asset management\
						solution. That project (and others) is described in detail on my\
						<a href="#/projects">projects page</a>.',
					link: "https://www1.villanova.edu/villanova/fmo/ehs.html",
					buttonText:
						"Learn more about Villanova University's Department of Environmental\
						Health and Safety",
					icon: "VUSeal.png",
					iconRight: "False",
				},
				{
					title: "Hoover Karate Academy",
					subtitle1: "Instructor (2012-Present)",
					subtitle2:
						"Customer Service Representative and Information Technology Support (2012-2016)",
					p1:
						'I\'ve been involved in the martial arts since I was 6 years old. When I\
						entered high school, I was given the position of Junior Instructor at Hoover\
						Karate Academy. In this role, I served as an assistant instructor in classes\
						of all sizes, age groups, and experience levels. When I turned 18, I was\
						promoted to the rank of "Junior-Senior Instructor", and began teaching my\
						own classes. I greatly enjoying working with the "junior" or teenaged\
						students, however I have also taught classes from pre-k through adult.',
					p2:
						"From there, I transitioned to an extensive period of database work, in which\
						I created a number of database applications for tracking various aspects of\
						the university's operations. These applications were based on Microsoft\
						Access, and included comprehensive authentication and auditing capabilities\
						in addition to the usual data input report generation capabilities.",
					p3:
						"I also served as the school's information technology support. In this\
						role, I assisted in the maintenance of the school's website, and also\
						authored a Microsoft Access based database application for managing\
						student enrollment, promotion, and billing. This software solution\
						alleviated the need for hours of tedious work every month maintaining\
						hand-written records of student progress and payments.",
					link: "https://hooverkarate.com",
					buttonText: "Learn more about Hoover Karate Academy",
					icon: "HKA.png",
					iconRight: "2",
				},
			],
		}
	},
}
</script>
