<template>
  <div id="home">
    <stepper
      :steps="steps"
      :currentStep="currentStep"
      :goToPreviousStep="goToPreviousStep"
      :nextStep="nextStep"
      :prevStep="prevStep"
      labelPosition="top"
    />
    <step-one v-if="currentStep == 0" />
    <step-two v-if="currentStep == 1" />
    <step-three v-if="currentStep == 2" />
    <step-four v-if="currentStep == 3" />
    <step-five v-if="currentStep == 4" />
  </div>
</template>
<script>
import Stepper from "./Stepper";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import Order from "../services/order"

export default {
  name: "home",

  components: {
    Stepper,
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    StepFive
  },

  methods: {
    setStep(step) {
      this.currentStep = step;
    },

    async getOrders() {
      const service = new Order();
      const orders = service.getOrders();
      console.log(await orders);
    },

    nextStep() {
      if (this.currentStep < 4) {
        const nextStep = this.currentStep + 1;
        this.setStep(nextStep);
      }
    },

    prevStep() {
      if (this.currentStep > 0) {
        const prevStep = this.currentStep - 1;
        this.setStep(prevStep);
      }
    },

    goToPreviousStep(step) {
      if (step < this.currentStep) {
        this.setStep(step);
      }
    },

    handleKeyPress() {
      window.addEventListener("keyup", event => {
        if (event.keyCode == 39) {
          this.nextStep();
        }
        if (event.keyCode == 37) {
          this.prevStep();
        }
      }) //charla demi contextos JS
    }
  },

  data() {
    return {
      steps: [
        { name: "Components" },
        { name: "CSS styles" },
        { name: "API request" },
        { name: "New feature" },
        { name: "Tests" }
      ],
      currentStep: 0
    };
  },

  mounted() {
    this.getOrders();
    this.handleKeyPress();
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 4rem;
  padding: 1rem;
}

.step {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
}
.links {
  margin-bottom: 2rem;
  margin-top: 1rem;
}
hr {
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 2rem;
}

p {
  width: 100%;
  text-align: left;
  margin: 0.5rem 0;
}
img {
  width: 100%;
  border: 1px solid black;
  margin-top: 1rem;
}
.code {
  text-align: left;
  font-family: monospace;
  background-color: rgb(225, 225, 225);
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem auto;
  width: fit-content;
}
.doc-box {
  border: 1px solid #ddd;
  padding: 1rem;
  background-color: #efefef;
  margin: 2rem 0;
}
.exercise {
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ddd;

  ul,
  ol {
    margin: 0.5em 0;
    text-align: left;
  }
}

.exercise-solution {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.info {
  margin-top: 1rem;
  border: 1px solid #ddd;
  padding: 0.5rem 1rem;
  background-color: #efefef;
}
</style>
