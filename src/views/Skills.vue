<template>
	<b-container>
		<b-row>
			<SkillCard v-for="card in cards" :key="card.title" :card="card" />
		</b-row>
	</b-container>
</template>

<script>
import SkillCard from "@/components/SkillCard"
export default {
	name: "Skills",
	components: {
		SkillCard,
	},	
	metaInfo:{
		title: "Skills",
		meta: [
			{ name: 'description', content: "Stephen Donchez's skills, including both Technical Skills (Programming Languages, Process and Concepts, and Tools and Software), as well as Creative Skills (Multimedia Asset Generation, Event Production Software and Platforms, and Other Event Production Skills)." }
		]
	},
	data: () => {
		return {
			cards: [
				{
					title: "Technical Skills",
					slug: "Technical",
					text: [
						"Over the course of my academic and professional career, I have had the fortune to acquire a variety of skills and experiences across the spectrum of Systems and Computer Engineering:",
					],
					skills: [
						{
							title: "Programming Languages",
							bullets: [
									"SysML",
									"C++",
									"C",
									"VHDL",
									"PHP",
									"MySQL",
									"HTML",
									"CSS",
									"JS (Vue, jQuery)",
									"Assembly (x86, ARM, MIPS)",
									"Python",
									"Java",
									"Bash",
									"Matlab",
									"XML",
									"LaTeX",
									"Markdown",
									"Powershell",
							]
						},
						{
							title:"Processes and Concepts",
							bullets: [
								"Model-Based Systems Engineering (MBSE)",
								"Requirements Management",
								"Cybersecurity and Risk Management",
								"Cryptographic Algorithms and Cryptosystems",
								"FPGA and Microprocessor Control",
								"Fundamentals of AC and DC Circuit Design and Analysis",
								"Waterfall Methodology",
								"Agile Lifecycle",
								"Containerization and Orchestration",
								"Routing and Networking"
							]
						},
						{
							title: "Tools and Software",
							bullets: [
									"IBM DOORS",
									"Cameo/MagicDraw",
									"Xilinx Toolchain (Vivado, Vitis, Petalinux)",
									"Quartus",
									"Microsoft Visio",
									"Git/GitHub/BitBucket",
									"Visual Studio",
									"IntelliJ",
									"Eclipse",
									"Microsoft Office",
									"MySQL Workbench",
									"Microsoft Access",
									"Solidworks",
									"Autodesk Inventor"
							]
						},
					]
				},
				{
					title: "Creative Skills",
					slug: "Creative",
					text: [
						"I have also acquired a set of creative skills, ranging from multimedia production to live audio, video, and lighting:",
					],
					skills:[
						{
							title: "Multimedia Asset Generation",
							bullets: [
									"Adobe Premiere",
									"Adobe After Effects",
									"Adobe Audition",
									"Adobe Photoshop",
									"Adobe Illustrator",
									"Adobe Indesign"
							]
						},
						{
							title: "Event Production Software and Platforms",
							bullets: [
									"GrandMA 2",
									"Blackmagic Design ATEM/URSA",
									"Behringer X32",
									"Avid SC48",
									"ADJ MyDMX",
									"OBS Studio",
									"Playback Pro"
							]
						},
						{
							title: "Other Event Production Skills",
							bullets: [
									"Power Distribution",
									"Line Array Calculation and Assembly",
									"Rigging",
									"Production Plot Generation (Vectorworks)",
									"Pre-Visualization (MA-3D/Vision)"
							]
						}
					]
				}
			],
		}
	},
}
</script>
