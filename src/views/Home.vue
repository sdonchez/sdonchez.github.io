<template>
	<b-container fluid="true">
		<b-aspect class="panel" id="welcome-panel" aspect="16:7" align-v="center">
			<b-row align-h="center" align-v="center" class="py-4 h-100">
					<picture>
						<source type="image/webp" srcset="./../assets/HeadshotCrop-512.webp">
						<source type="image/jpeg" srcset="./../assets/HeadshotCrop-512.jpg">
						<img src="./../assets/HeadshotCrop-256.jpg" class="img-fluid rounded-circle mx-5" width="320px" height="320px" alt="Headshot Photo of Stephen Donchez" sm="12">
					</picture>
					<h1 class="display-1 text-center welcome-tex mx-5">Hi, I'm Stephen Donchez</h1>
			</b-row>
		</b-aspect>
		<b-row class="bg-primary px-5">
			<h2 class="mx-auto text-center">A Systems Engineer, but a whole lot more</h2>
			<b-row class="copy">
				<p>
					On paper, I'm a Systems Engineer with a Bachelors and a Masters in Computer Engineering and a minor in Computer Science. But that's just a small part of who I am. Sure, I'm passionate about embedded systems, and am excited to be putting my knowledge of software development, FPGAs, and the latest in embedded security to work. But I'm also a 4th degree black belt, have 6 years of experience as a live event technician working in Audio, Video, and Lighting for events of all sizes, and an avid ball-thrower whenever my dog asks. I encourage you to take a moment to explore who I am (in digital form), and to reach out with any questions!
				</p>
				<p>
					You can also download my <a :href=this.$resumeFile target="_blank"> resume</a> or visit me on	<a href="https://www.linkedin.com/in/stephen-donchez/" target="_blank"> LinkedIn</a> to learn more about my professional and academic activities.
				</p>
			</b-row>
		</b-row>
	</b-container>
</template>

<script>
// @ is an alias to /src

export default {
	name: "Home",
	components: {},
	metaInfo:{
		title: "Home",
		meta: [
			{ name: 'description', content: "Stephen Donchez is a Systems Engineer with a passion for embedded systems security, a martial artist, an event production technician, and (most importantly) a ball thrower for his dog." }
		]
	},
}
</script>

<style lang="scss" scoped>
html {
	font-family: "roboto",serif;
	font-display: swap;
}
h1 {
	font-family: "roboto slab", serif;
	font-display: swap;
}
h2 {
	font-family: "roboto slab", serif;
	font-display: swap;
	font-size: 4rem;
	padding-top: 2rem !important;
}
p {
	font-size: 1.4rem;
}

.panel {
	margin: 0;
	color: white;
	box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
	position: relative;
	@for $i from 1 through 4 {
		&:nth-child(#{$i}) {
			z-index: 98 - $i;
		}
	}
}

.copy {
	padding: 3rem;
}

#welcome-panel {
	background-image: url("./../assets/oreo.jpg");  /* fallback */
	background-image: image-set(
		url("./../assets/oreo-1080.webp") 1x type("image/webp"),
		url("./../assets/oreo-1920.webp") 2x type("image/webp"),
		url("./../assets/oreo-3840.webp") 3x type("image/webp"),
		url("./../assets/oreo-1080.jpg") 1x type("image/jpeg"),
		url("./../assets/oreo-1920.jpg") 2x type("image/jpeg"),
		url("./../assets/oreo-3840.jpg") 3x type("image/jpeg"),
	);
	background-image: -webkit-image-set(
		url("./../assets/oreo-1080.webp") 1x type("image/webp"),
		url("./../assets/oreo-1920.webp") 2x type("image/webp"),
		url("./../assets/oreo-3840.webp") 3x type("image/webp"),
		url("./../assets/oreo-1080.jpg") 1x type("image/jpeg"),
		url("./../assets/oreo-1920.jpg") 2x type("image/jpeg"),
		url("./../assets/oreo-3840.jpg") 3x type("image/jpeg"),
	);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}

@media screen and (max-width: 768px) {
	.headshot {
		text-align: center;
	}

	.welcome-text {
		font-size: calc(4rem + 0.6vw) !important
	}
	h2 {
		// font-size: 3rem !important;
		font-size: calc(2rem + 0.9vw);
	}
	.copy {
	padding: calc(2vw);

	p {
		font-size: calc(.8rem + 0.9vw);
	}
}

}
</style>
