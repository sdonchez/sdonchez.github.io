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
	metaInfo:{
		title: "Publications",
		meta: [
			{ name: 'description', content: "Stephen Donchez's publications, including his Thesis (An Efficient and Secure Architecture for FPGA-Based Multi-Tenant Cloud Applications) and his IEEE publication (Memory Isolation for Multi-Tenant Data Integrity in Cloud MPSoC FPGAs)." }
		]
	},
	data: () => {
		return {
			cards: [
				{
					title: "An Efficient and Secure Architecture for FPGA-Based Multi-Tenant Cloud Applications",
					subtitle1: "Master's Thesis, Villanova University",
					slug: "thesis",
					text: [
						"<span class='font-italic font-weight-bold'>Abstract:</span>",

						"Field Programmable Gate Arrays (FPGAs), and, more generally, Multi-Processor System on a Chip (MPSoC) devices (in which FPGAs play an integral role), have long been utilized for the implementation of hardware-accelerated functionality in embedded systems. As much of the global technology industry has transitioned to cloud-based infrastructure over the past decade, many cloud providers have realized the potential revenue source that FPGAs as a service could provide. Current cloud FPGA offerings mimic the traditional FPGA design paradigm, wherein a single physical device is allocated to a single user. This represents a fundamental departure from the traditional cloud computing architecture, wherein large, powerful compute resources are subdivided and allocated to multiple tenants. To date, there has been some attempt in the research community to develop a multi-tenant cloud based MPSoC solution that would satisfy these security concerns.",

						"This research seeks to propose a new architecture for multi-tenant FPGA-based MPSoCs in a cloud setting. This architecture draws from those currently proposed in academia, but introduces fundamental changes to afford a more resource-efficient multi-tenant solution that simultaneously reduces overhead while also negating the security concerns outlined above. It does so through resource sharing and efficient scheduling, along with the use of a robust security framework that segregates tenants from each other while ensuring trust in the overarching system design.",

						"These goals are specifically addressed in this thesis through in-depth exploration of several fundamental aspects of the architecture. The use of shared decryption engines allocated through a modified Earliest Deadline First (EDF) scheduling algorithm is presented, which is tailored to work in real-time on aperiodic tasks. This enables a tremendous reduction in resource utilization on the FPGA fabric, enabling scalability that was previously unrealistic. Additionally, memory isolation logic and a trusted static bitstream are proposed, which protect tenants from malicious cotenants, as well as shift the trusted relationship from the CSP to the FPGA Vendor, whose sole financial incentive is to ensure the integrity of the tenant data. Finally, a brief discussion of Key-Aggregation Cryptography presents an overview of a little-discussed cryptosystem that has the potential to enable highly efficient IP confidentiality for tenants, without substantial overhead on the part of any party.",
					],
					/*noinspect*/
					icon: "VUENG.jpg",
					iconRight: "false",
					Alt: "Villanova College of Engineering Seal",
					actions:[
						{
							link: "mailto:steve@sdonchez.engineer?subject=Thesis Copy Request",
							text: "Request a Copy"
						},
						{
							link: "https://www.proquest.com/docview/2821495143",
							text: "Access on ProQuest"
						},
						{
							link: "https://github.com/sdonchez/EDF-Scheduler",
							text: "EDF Scheduler GitHub Repository"
						},
						{
							link: "https://github.com/sdonchez/isolation-design",
							text: "Isolation Architecture GitHub Repository"
						}
					]
				},
				{
					title: "Memory Isolation for Multi-Tenant Data Integrity in Cloud MPSoC FPGAs",
					subtitle1: "Conference Article, IEEE International Conference and Workshop on Computing and Communication (IEMCON) 2022",
					slug: "IEMCON",
					text: [
						"<span class='font-italic font-weight-bold'>Abstract:</span>",
						"Multi-processing System-on-Chip (MPSoC) field-programmable gate arrays (FPGAs) are increasingly being employed in cloud computing platforms to accelerate many domain-specific applications. In cloud computing, FPGAs are constantly shared among multiple tenants dynamically by leveraging the partial reconfiguration property of FPGAs. Such devices are embedded with hundreds of large and configurable memory blocks, which offer the most flexible and high-performance memory resources for processor cores and IPs. The bare-metal access model of the unprotected memory system of MPSoC FPGAs has raised various security and privacy concerns. In this paper, we present the design and implementation of our novel run-time memory protection scheme based on hardware isolation for cloud MPSoC FPGAs. Experimental results on a Xilinx Zynq Ultrascale+ development board demonstrate our protection design successfully limits each tenant to only their allocated portions of the memory space and protects memory against programming errors and malicious attacks.",

						"<span class='font-italic font-weight-bold'>Index Terms:</span>",
						"SoC FPGA, cloud computing, memory security, on-chip memory, implementation",

						"<span class='font-italic font-weight-bold'>Accolades:</span>",
						"<a href='./IEMCON22BestPaper.jpg' target='_blank'>Best Paper, VLSI and Microelectronic Circuit Embedded Systems, IEEE IEMCON 2022</a>"
					],
					actions: [
						{
							link: "https://ieeexplore.ieee.org/document/9946490/",
							text: "View Paper on IEEExplore",
						}
					],
					/*noinspect*/
					icon: "IEEECS.png",
					iconRight: "2",
					Alt: "IEEE Computer Society Logo"
				},
				{
					title: "Dynamic Scheduling of AES Cores for Aperiodic Tasks on Multi-tenant Cloud FPGAs",
					subtitle1: "Conference Article, IEEE International Conference on Trust, Security, and Privacy in Computing and Communications (TrustCom) 2023",
					slug: "TrustCom",
					text: [
						"<span class='font-italic font-weight-bold'>Abstract:</span>",
						"Field Programmable Gate Arrays (FPGAs) have long been utilized in systems benefiting from hardware acceleration of processes unsuitable for execution on a traditional processor. Accordingly, as much of the world pivots from on-site datacenters and computing resources to hybrid or cloud based platforms, Multi-processing System-on-Chip (MPSoC) FPGAs are increasingly being employed in cloud computing systems to speed up many computation-intensive applications. In cloud computing, multi-tenant FPGAs are constantly space- and time-shared among multiple tenants dynamically by leveraging the partial reconfiguration property of FPGAs. With increasing security and privacy concerns introduced by these memory-based volatile devices, most countermeasures rely on encryption and decryption engines such as AES (Advanced Encryption Standard) cores for user data protection. However, their high-resource requirements and long latency limit the number of such engines that can be implemented in hardware. They often become a performance bottleneck during peak time. In this paper, we propose a scheduling algorithm for aperiodic tasks to dynamically share multiple AES cores and hence to improve their utilization and overall system performance. Extensive experimental measurements on an FPGA development board featuring a Xilinx Ultrascale+ FPGA demonstrate the efficacy of our mechanism.",

						"<span class='font-italic font-weight-bold'>Index Terms:</span>",
						"FPGA, Security, Scheduling, Implementation, AES, Multi-tenancy, Cloud Computing"
					],
					actions: [
						{
							link: "https://ieeexplore.ieee.org/document/10538753/",
							text: "View Paper on IEEExplore",
						}
					],
					/*noinspect*/
					icon: "IEEECS.png",
					Alt: "IEEE Computer Society Logo"

				}
			],
		}
	},
}
</script>