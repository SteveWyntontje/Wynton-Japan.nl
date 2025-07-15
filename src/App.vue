<template>
	<HelloWorld msg="Welkom bij Wynton-Japan.nl" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
	name: "App",
	components: {
		HelloWorld,
	},
};
</script>

<style>
#app {
	font-family: "Ubuntu Mono", Consolas, monospace;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
/* #app:before {
	content: "";
	position: absolute;
	width: 200%;
	height: 200%;
	top: -50%;
	left: -50%;
	z-index: -1;
	background-image: url("@/assets/tekening-felicia2.jpg");
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	min-height: 100vh;
	transform: rotate(270deg);
} */
</style>
