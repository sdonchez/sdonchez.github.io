<template>
	<b-container>
		<b-row>
			<CertificationCard v-for="card in cards" :key="card.title" :card="card" />
		</b-row>
	</b-container>
</template>

<script>
import CertificationCard from "@/components/CertificationCard"
export default {
	name: "Certifications",
	components: {
		CertificationCard,
	},
	data: () => {
		return {
			cards: [
				{
					title: "OCSMP SysML Model User",
					subtitle1: "Object Management Group (OMG)-Certified SysML Professional (OCSMP)-Model User",
					subtitle2: "Valid 9/22/2023 - 9/22/2028",
					slug: "OCSMP-MU",
					credential: "<div data-iframe-width=\"250\" data-iframe-height=\"250\" data-share-badge-id=\"3803d407-c817-4e07-8b7e-98d5ff108f85\" data-share-badge-host=\"https://www.credly.com\"></div>",
					text: [
						"The OCSMP SysML Model User certification indicates qualification \" to be a productive systems analyst on a systems development team employing a model-based systems engineering approach while using SysML.\" It is the first in a series of four cumulative certifications offered by the Object Management Group as part of their Certified SysML Professional Program.",

						"I use SysML in my daily work as the Model Based Systems Engineering (MBSE) Lead for my current project at <a href=\"/work#L3H\">L3Harris Technologies</a>. In this role, I lead the development and maintenance of a complex SysML Model as part of the design of a system, and also act as a Subject Matter Expert (SME) for other individuals within the organization who are performing MBSE-related activities for their own programs.",
					],
					actions: [
						{
							link: "https://www.omg.org/ocsmp/",
							text: "Learn more about the OCSMP certifications",
						},
						{
							link: "https://sebokwiki.org/wiki/Model-Based_Systems_Engineering_(MBSE)",
							text: "Learn more about Model Based Systems Engineering",
						}
					],
					credentialRight: "false",
				},
			],
		}
	},
	mounted() {
		let credlyScript = document.createElement('script')
		credlyScript.setAttribute('src', "//cdn.credly.com/assets/utilities/embed.js");
		credlyScript.setAttribute('type', "text/javascript");
		credlyScript.async = true;
		document.head.appendChild(credlyScript);
	}
}
</script>
