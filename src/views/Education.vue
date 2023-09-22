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
	name: "Education",
	components: {
		InfoCard,
	},
	data: () => {
    return {
			cards: [
				{
					title: "Villanova University",
					subtitle1: "Bachelor of Science, Computer Engineering (2016-2020)",
					subtitle2: "Master of Science, Computer Engineering (2020-2022)",
          clug: "VU",
					text: [
						"I earned my Bachelor of Science in Computer Engineering from Villanova	University's College of Engineering between August 2016 and May of 2020. During this time, I also completed a minor in Computer Science, and	worked on <a href='#/projects'>a number of interesting projects</a>.",

						"I then continued on to earn my Master of Science in Computer Engineering at Villanova, recently completing this degree in Spring of 2022. I researched Embedded Systems design and FPGA security during my	time in this program, with a focus on securing multi-tenant heterogeneous	systems in a cloud environment.",

						"Outside my curricular activities at Villanova, I was heavily	involved in Villanova University Tech Crew, an on campus event production	company. Additionally, I <a href='#/work'>worked</a> for Villanova's	Department of Environmental Health and Safety, providing web and asset management, database development and administration, and assorted related services.",
					],
          actions: [
            {
              link:
                  "https://www1.villanova.edu/content/university/engineering/academic-programs/departments/electrical-computer.html",
              text: "Learn more about Villanova Computer Engineering",
            }
          ],

          /*noinspect*/
					icon: "VUENG.jpg",
					iconRight: "false",
				},
				{
					title: "Lehigh Valley Academy",
					subtitle1: "High School (2012-2016)",
          slug: "HKA",
					text: [
						"From 2012 to 2016, I attended Lehigh Valley Academy Regional Charter	School for my high school degree. LVA is actually a K-12 Charter School, and I attended there for all 13 years of my primary and secondary education.",

						"In addition to my traditional high school diploma, LVA afforded me the	opportunity to receive an International Baccalaureate Diploma through the	<a href='https://ibo.org/programmes/diploma-programme/' target='_blank'>IB Diploma Programme</a>. This comprehensive program stressed a balance of liberal arts and STEM	courses, while also putting an emphasis on community service and	individual research.",

						"Outside of class, a large portion of my time in High School at LVA was	occupied by a club I was heavily invested in, the	<a href='https://tsaweb.org/' target='_blank'>Technology Student Association.</a>As a member of TSA, I worked to create unique physical products, as well	as develop my problem solving skills. I also served as the Pennsylvania	State Historian for the organization. This position required me to produce	all multimedia content for the statewide organization, as well as work alongside the other 7 state officers to plan and execute our 2,000 person	state conference.",
					],
          actions:
          [
            {
              link: "https://www.lvacademy.org/",
              text: "Learn more about Lehigh Valley Academy",
            }
          ],
					icon: "LVAJaguar.png",
					iconRight: "2",
				},
			],
		}
	},
}
</script>
