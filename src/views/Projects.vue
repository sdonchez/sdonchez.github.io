<template>
	<b-container>
		<b-row>
			<InfoCard v-for="card in cards" :key="card.title" :card="card" />
		</b-row>
	</b-container>
</template>
<!--suppress SpellCheckingInspection -->
<script>
import InfoCard from "@/components/InfoCard"
export default {
	name: "Projects",
	components: {
		InfoCard,
	},
	data: () => {
		return {
			cards: [
        {
          title: "An Efficient and Secure Architecture for FPGA-based Multi-Tenant Cloud Applications",
          subtitle1:"Master's Thesis",
          text:[
              "I recently completed my thesis, which focused on enabling the use of FPGAs in a\
              cloud environment. The work is still undergoing review prior to publication and\
              therefore the body of my thesis is not available in the public domain at this time,\
              but the abstract can be found below. If this work intrests you, I'm happy to discuss\
              it and/or see about making the body of the work available to you. Please don't hesitate\
              to contact me if that's the case.",
              "<span class='font-italic font-weight-bold'>(From Thesis Abstract):</span>",
              "Field Programmable Gate Arrays (FPGAs), and, more generally, Multi-Processor System\
              on a Chip (MPSoC) devices (in which FPGAs play an integral role), have long been\
              utilized for the implementation of hardware-accelerated functionality in embedded\
              systems. As much of the global technology industry has transitioned to cloud-based\
              infrastructure over the past decade, many cloud providers have realized the potential\
              revenue source that FPGAs as a service could provide. Current cloud FPGA offerings\
              mimic the traditional FPGA design paradigm, wherein a single physical device is\
              allocated to a single user. This represents a fundamental departure from the traditional\
              cloud computing architecture, wherein large, powerful compute resources are subdivided\
              and allocated to multiple tenants. To date, there has been some attempt in the research\
              community to develop a multi-tenant cloud based MPSoC solution that would satisfy\
              these security concerns.",
              "This research seeks to propose a new architecture for multi-tenant FPGA-based MPSoCs\
              in a cloud setting. This architecture draws from those currently proposed in academia,\
              but introduces fundamental changes to afford a more resource-efficient multi-tenant\
              solution that simultaneously reduces overhead while also negating the security concerns\
              outlined above. It does so through resource sharing and efficient scheduling, along with\
              the use of a robust security framework that segregates tenants from each other while\
              ensuring trust in the overarching system design.",
              "These goals are specifcally addressed in this thesis through in-depth exploration of\
              several fundamental aspects of the architecture. The use of shared decryption engines\
              allocated through a modifed Earliest Deadline First (EDF) scheduling algorithm is\
              presented, which is tailored to work in real-time on aperiodic tasks. This enables a\
              tremendous reduction in resource utilization on the FPGA fabric, enabling scalability\
              that was previously unrealistic. Additionally, memory isolation logic and a trusted static\
              bitstream are proposed, which protect tenants from malicious cotenants, as well as shift\
              the trusted relationship from the CSP to the FPGA Vendor, whose sole fnancial\
              incentive is to ensure the integrity of the tenant data. Finally, a brief discussion of\
              Key-Aggregation Cryptography presents an overview of a little-discussed cryptosystem\
              that has the potential to enable highly efficient IP confdentiality for tenants, without\
              substantial overhead on the part of any party."
          ],
          icon:"ConceptDiagramSimplified.png",
          avatarSquare: true
        },
				{
					title: "ChemCAT",
					subtitle1: "Villanova University Chemical Container and Asset Tracker",
					text: [
						"Villanova's Chemical Container and Asset Tracker (ChemCAT) system is\
						a recent project to provide comprehensive cradle-to-grave tracking of the\
						university's chemical assets. The project maintains a history of every chemical\
						asset's movement throughout the university from its procurement through its\
						distribution, use, and disposal. It also provides the capacity to look up the\
						Safety Data Sheet (SDS) information associated with each chemical, as well as the\
						ability to generate reports on individual assets or aggregate data.",
						"The system is built utilizing the Laravel PHP framework to provide a easily\
						navigable user interface. This interface interacts with a MySQL database, via\
						Laravel's PDO driver. It also harnesses the power of AJAX to facilitate the\
						dynamic loading of content. The project was developed following a substantial\
						design process, including the generation of a highly detailed specification and\
						preliminary UI design.",
						"Unfortunately, the project's codebase is owned by the university and not publicly\
						available. However, I will gladly answer any questions regarding the details of its\
						implementation.",
					],
					icon: "ChemCat.png",
					avatarSquare: true,
				},
				{
					title: "VUTC Website Redesign",
					subtitle1: "Villanova University Tech Crew",
					text: [
						"Beginning in the spring of 2020, I, alongside a group of like minded students,\
						began a redesign of VUTC's website, through which all aspects of the\
						organization's operations are managed. The current site (as the redesign is\
						still in progress) was developed in PHP without the use of any framework or\
						cohesive style, and the effort of maintaining it was beginning to exceed the\
						effort involved in re-writing it from the ground up.",
						"The new site, like the ChemCAT project above, is built with the Laravel PHP\
						framework and a bootstrapped front-end. The site also utilizes a MySQL/PDO\
						database system, as well as extensive authentication and authorization gates\
						to mitigate access to privileged portions of the site.",
						"While the site's repository is not publicly available, I anticipate being\
						able to release portions of it to the public in the near future. Check my\
						<a href='https://github.com/sdonchez/'>github</a> profile to see this work\
						once it is available.",
					],
					icon: "VUTCWebsite.png",
					iconRight: "2",
					avatarSquare: true,
				},
				{
					title: "PrintCheck3D",
					subtitle1: "Senior Capstone Project",
					text: [
						"Villanova's ECE capstone project is a three semester, group based experience\
						that is designed to provide students with experience in the implementation of\
						a concept under real world circumstances. For our capstone project, my team\
						worked to implement what became the PrintCheck3D system, a system that\
						monitored the college's fleet of 3D Printers to detect failed printjobs,\
						and took action on those failures in order to preserve the print where possible,\
						and otherwise to stop the print in order to prevent damage to the printer or\
						the waste of additional consumable resources.",
						"The project required, like most embedded systems, a fusion of hardware and\
						software work. It centered around a Raspberry Pi, which ran a minimized linux\
						operating system. The project code was authored in C++, and consisted of a\
						number of subsystems responsible for various portions of the system's\
						operation. The project harnessed a number of publicly available libraries\
						to perform image processing and hardware interfaces, including the OpenCV\
						library.",
						"On the hardware side, the project required the use of an infrared camera,\
						as well as a photogate with custom logic to convert its output to values\
						appropriate for the Raspberry Pi's GPIO interface. It also required the\
						design and manufacturing of several custom hardware mounts to affix the\
						system components to the printer.",
					],
					link: "https://github.com/sdonchez/SeniorDesign",
					buttonText: "Visit the project Github Repo",
					icon: "PrintCheck3D.jpg",
					avatarSquare: true,
				},
				{
					title: "HKA Database Management System",
					subtitle1: "Hoover Karate Academy",
					text: [
						"One of my earliest major development projects, the HKA Database Management\
						System was designed in response to a drastic need for improvement to the\
						school's pre-existing system for tracking student records. It affords users\
						a simple, intuitive interface for managing almost all aspects of the school's\
						operations, including attendance, student progression through the various\
						ranks, tuition payment, and the generation of assorted administrative\
						paperwork. It serves to automate a number of process that were previously done\
						by hand, saving considerable time for the school's administrative staff.",
						"The system is built on Microsoft Access, with data located in a separate\
						MySQL database. It implements a custom designed set of authentication\
						mechanisms (as none were present in Access at the time of development),\
						and facilitates simultaneous access from both local and remote users to\
						afford convenience to the school's staff.",
					],
					icon: "HKADB.png",
					iconRight: "2",
					avatarSquare: true,
				},
			],
		}
	},
}
</script>
