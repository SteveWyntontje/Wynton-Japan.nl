<script setup>
import { ref } from "vue";
import { useSound } from "@vueuse/sound";
import A1 from "@/assets/A1.mp3";
import Applause from "@/assets/applause.mp3";

defineProps({
	msg: String,
});

// Sound setup
const { play: playA1 } = useSound(A1);
const { play: playApplause } = useSound(Applause);

// State
const currentQuestion = ref(1);
const questionAnswer1 = ref(1);
const questionAnswer2 = ref("");
const questionAnswer3 = ref("");
const questionAnswer4 = ref("");

// Methods
const onEnter = () => {
	handleClick();
}
const handleClick = () => {
	if (currentQuestion.value === 1) {
		if (questionAnswer1.value == "3") {
			playApplause();
			currentQuestion.value++;
			return;
		} else {
			playA1();
			return;
		}
	}
	if (currentQuestion.value === 2) {
		var tmp2 = questionAnswer2.value.toLowerCase();
		if (
			tmp2.includes("hiragana") &&
			tmp2.includes("katakana") &&
			tmp2.includes("kanji")
		) {
			playApplause();
			currentQuestion.value++;
			return;
		} else {
			playA1();
			return;
		}
	}
	if (currentQuestion.value === 3) {
		var tmp3 = questionAnswer3.value.toLowerCase();
		if (tmp3 === "a") {
			playApplause();
			currentQuestion.value++;
			return;
		} else {
			playA1();
			return;
		}
	}
	if (currentQuestion.value === 4) {
		if (questionAnswer4.value === "vraag 4") {
			playApplause();
			currentQuestion.value++;
			return;
		} else {
			playA1();
			return;
		}
	}
};

</script>

<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<div v-if="currentQuestion === 1">
			<p>Vraag 1: Hoeveel Japanse alfabetten zijn er?</p>
			<br />
			<input v-model="questionAnswer1" type="number" min="1" max="5" class="sliderInputBox" @keyup.enter="onEnter" />
			<br />
			<input v-model="questionAnswer1" type="range" min="1" max="5" class="slider" @keyup.enter="onEnter" />
			<br />
			<br />
			<button @click="handleClick">Volgende</button>
		</div>
		<div v-else-if="currentQuestion === 2">
			<p>Vraag 2: Hoe heten de 3 Japanse alfabetten?</p>
			<a href="https://nl.wikipedia.org/wiki/Japans_schrift">Hint</a>
			<br />
			<input v-model="questionAnswer2" @keyup.enter="onEnter" />
			<br />
			<button @click="handleClick">Volgende</button>
		</div>
		<div v-else-if="currentQuestion === 3">
			<p>Vraag 3: Hoe heet dit karakter?</p>
			<img alt="A Hiragana" src="@/assets/A-Hiragana.png" />
			<br />
			<a href="https://nl.wikipedia.org/wiki/Hiragana#Hepburn-romanisatie_van_het_hiragana-schrift">Hint</a>
			<br />
			<input v-model="questionAnswer3" @keyup.enter="onEnter" />
			<br />
			<button @click="handleClick">Volgende</button>
		</div>
		<div v-else-if="currentQuestion === 4">
			<p>Vraag 4:</p>
			<br />
			<input v-model="questionAnswer4" @keyup.enter="onEnter" />
			<br />
			<button @click="handleClick">Volgende</button>
		</div>
		<div v-else-if="currentQuestion === 5">
			<p>Gefeliciteerd je hebt de Quiz gehaald!</p>
			<img class="Trophy" alt="Big trophy" src="@/assets/trophy.png" />
		</div>
	</div>
</template>

<style scoped>
h3 {
	margin: 40px 0 0;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #42b983;
}

p {
	/* color: #ff7ac1fb; */
	color: rgb(0, 0, 0);
}

button {
	font-family: "Ubuntu Mono", Consolas, monospace;
	text-align: center;
}

input {
	font-family: "Ubuntu Mono", Consolas, monospace;
}

.Trophy {
	width: 20%;
	height: 20%;
}
</style>
