<script setup>
import { ref } from "vue";
const questionAnswer1 = ref(1);
</script>
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-if="currentQuestion === 1">
      <p>Vraag 1: Hoeveel Japanse alfabetten zijn er?</p>
      <br>
      <input v-model="questionAnswer1" type="number" min=1 max=5 class="sliderInputBox" />
      <br>
      <input v-model="questionAnswer1" type="range" min=1 max=5 class="slider" />
      <br>
      <br>
      <button @click="handleClick">Volgende</button>
    </div>
    <div v-else-if="currentQuestion === 2">
      <p>Vraag 2: Hoe heten de 3 Japanse alfabetten?</p>
      <a href = "https://nl.wikipedia.org/wiki/Japans_schrift">Hint</a>
      <br>
      <input v-model="questionAnswer2" />
      <br>
      <button @click="handleClick">Volgende</button>
    </div>
    <div v-else-if="currentQuestion === 3">
      <p>Vraag 3: Hoe heet dit karakter?</p>
      <img alt="A Hiragana" src="../assets/A-Hiragana.png" />
      <br>
      <a href="https://nl.wikipedia.org/wiki/Hiragana#Hepburn-romanisatie_van_het_hiragana-schrift">Hint</a>
      <br>
      <input v-model="questionAnswer3" />
      <br>
      <button @click="handleClick">Volgende</button>
    </div>
    <div v-else-if="currentQuestion === 4">
      <p>Vraag 4: </p>
      <br>
      <input v-model="questionAnswer4" />
      <br>
      <button @click="handleClick">Volgende</button>
    </div>
    <div v-else-if="currentQuestion === 5">
      <p>Gefeliciteerd, je hebt de Quiz gehaald!</p>
      <img alt="Big trophy" src="../assets/trophy.png" />
    </div>
  </div>
</template>

<script>
import { useSound } from "@vueuse/sound";
import A1 from "../assets/A1.mp3";
import Applause from "../assets/applause.mp3";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: function () {
    return {
      currentQuestion: 1,
      questionAnswer1: "",
      questionAnswer2: "",
      questionAnswer3: "",
      questionAnswer4: "",
      questionAnswer5: "",
      questionAnswer6: "",
      questionAnswer7: "",
      questionAnswer8: "",
      questionAnswer9: "",
      questionAnswer10: "",
      questionAnswer11: "",
      questionAnswer12: "",
      questionAnswer13: "",
      questionAnswer14: "",
      questionAnswer15: "",
      questionAnswer16: "",
      questionAnswer17: "",
      questionAnswer18: "",
      questionAnswer19: "",
      questionAnswer20: "",
      
    };
  },
  setup() {
    const { play: playA1 } = useSound(A1, { volume: 0.75 });
    const { play: playApplause} = useSound(Applause, { volume: 0.75 });

    return {
      playA1,
      playApplause,
    };
  },
  methods: {
    handleClick() {
      if (this.currentQuestion === 1) {
    if (this.questionAnswer1 === 3) {
      this.currentQuestion++;
      this.playApplause;
      return;
    }
    else {
      this.playA1;
      return
    }
      }
      if (this.currentQuestion === 2) {
    if (this.questionAnswer2 === "Hiragana, Katakana, Kanji") {
      this.currentQuestion++; 
      this.playApplause;
      return;
    }
    else if (this.questionAnswer2 === "Hiragana, Kanji, Katakana") {
      this.currentQuestion++;
      this.playApplause; 
      return;
    }
    else if (this.questionAnswer2 === "Katakana, Kanji, Hiragana") {
        this.playApplause;
        this.currentQuestion++; 
        return;
    }
    else if (this.questionAnswer2 === "Katakana, Hiragana, Kanji") {
        this.playApplause;
        this.currentQuestion++; 
        return;
    }
    else if (this.questionAnswer2 === "Kanji, Hiragana, Katakana") {
        this.playApplause;
        this.currentQuestion++; 
        return;
    }
    else if (this.questionAnswer2 === "Kanji, Katakana, Hiragana") {
        this.playApplause;
        this.currentQuestion++; 
        return;
    }
    else {
      this.playA1;
       return;
    }
      }
      if (this.currentQuestion === 3) {
    if (this.questionAnswer3 === "a") {
      this.currentQuestion++;
      this.playApplause;
      return;
    }
    else {
      this.playA1;
      return;
    }
      }
      if (this.currentQuestion === 4) {
    if (this.questionAnswer4 === "vraag 4") {
      this.currentQuestion++;
      this.playApplause; 
      return;
    }
    else {
      this.playA1;
      return;
    }
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
:link {
  color: #0000EE;
}
:visited {
  color: #551A8B;
}
:link:active, :visited:active {
  color: #FF0000;
  }
</style>
