<template>
  <b-container fluid="true">
    <b-aspect class="panel" id= "welcome-panel" aspect="16:7" align-v="center">
		<b-row  align-h='center' align-v="center" class="py-4 h-100">
		<b-col class="headshot">
			<b-avatar src="./../assets/HeadshotCrop.jpg" size="20rem"></b-avatar>
		</b-col>
		<b-col>
			<h1 class="display-1 welcome-text">Hi, I'm Stephen Donchez</h1>
		</b-col>
		</b-row>
	</b-aspect>
	<b-row class="bg-primary px-5" >
		<h2 class="display-2 mx-auto text-center">A computer engineer, but a whole lot more</h2>
		<p>My degree says I have a bachelor's of science in Computer Engineering and a
			minor in Computer Science. But that's just a small part of who I am. Sure,
			I'm passionate about embedded systems, and am looking forward to putting my
			knowledge of software development, FPGAs, and the latest in embedded security
			work. But I'm also a 3rd degree black belt, a live event technician with 4 
			years experience in Audio, Video, and Lighting for events of all sizes, and an
			avid ball-thrower whenever my dog asks. I encourage you to take a moment to 
			explore who I am (in digital form), and to reach out with any questions!
		</p>
		<p>
			You can also download my <a href="#">resume</a> or visit me on <a href="#">
			LinkedIn</a> to learn more about my academic and professional activities.
		</p>
	</b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
p{
	font-size: 1.4rem;
}
.headshot{
	text-align: right;
}
.welcome-text{
	text-align: left;
}

.panel {
  margin: 0;
  color: white;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  position: relative;
  @for $i from 1 through 4 {
    &:nth-child(#{$i}) {
      z-index: 98 - $i
    }
  }
}
#welcome-panel {
  background-image: url("./../assets/oreo.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

@media screen and (max-width: 800px){
	.headshot{
		text-align: center;
	}

	.welcome-text{
		text-align: center
	}
	h2{
		font-size: 3rem !important;
	}
	
}
</style>
