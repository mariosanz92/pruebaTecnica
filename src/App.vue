<template>
  <div id="app">
    <stepper :steps="steps" :currentStep="currentStep" :setStep="setStep"/>
    <step-one v-if= "currentStep == 0"/>
    <step-two v-if= "currentStep == 1"/>
    <step-three v-if= "currentStep == 2"/>
    <step-four v-if= "currentStep == 3"/>
    <step-five v-if= "currentStep == 4"/>

  </div>
</template>

<script>
import Stepper from '@/components/Stepper'
import StepOne from '@/components/StepOne'
import StepTwo from '@/components/StepTwo'
import StepThree from '@/components/StepThree'
import StepFour from '@/components/StepFour'
import StepFive from '@/components/StepFive'


export default {
  name: 'app',

  components: {
    Stepper,
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    StepFive,


  },
  methods:{
    setStep(step){
      this.currentStep = step
    },
  },


  data () {
    return {
      steps: [
        { name: 'Components', },
        { name: 'CSS styles', },
        { name: 'API request', },
        { name: 'New feature', },
        { name: 'Tests', },
      ],
     currentStep: 0
    }
      
  }

}
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
  margin: .5rem 0;
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
  border: 1px solid #DDD;
  padding: 1rem;
  background-color: #EFEFEF;
  margin: 2rem 0;
}
.exercise {
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #DDD;

  ul, ol {
    margin: .5em 0;
    text-align: left;
  }
}

.exercise-solution {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.info {
  margin-top: 1rem;
  border: 1px solid #DDD;
  padding: 0.5rem 1rem;
  background-color: #EFEFEF;
}

</style>
