<template>
	<div>
		<b-navbar toggleable="lg" class="navbar-dark bg-primary px-5">
			<b-navbar-brand href="#">Stephen G. Donchez</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-nav-item
						v-for="page in pages"
						:key="page.name"
						:to="page.path"
						:router="true"
						ripple
					>
						{{ page.name }}
					</b-nav-item>
				</b-navbar-nav>

				<!--<b-navbar-nav class="ml-auto">
					<b-nav-form>
						<b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
						<b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
					</b-nav-form>
				</b-navbar-nav>-->
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
export default {
	name: "navigation",
	data: () => {
		return {
			pages: [
				{ path: "/", name: "Home", exact: true },
				{ path: "/education", name: "Education", exact: false },
				{ path: "/work", name: "Work Experience", exact: false },
				{ path: "/projects", name: "Projects", exact: false },
				//{ path: "/blog", name: "Blog", exact: false },
			],
		}
	},
}
</script>
