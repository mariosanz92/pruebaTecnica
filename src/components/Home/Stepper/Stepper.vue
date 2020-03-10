<template>
  <div class="checkout-wrapper">
    <ol class="checkout">
      <li
        class="step"
        v-for="(step, stepIndex) in steps"
        :key="step.id"
        :class="{
              'prev': stepIndex < currentStep,
              'active': stepIndex === currentStep }"
      >
        <span
          class="step-label"
          :class="{
                    'step-label--bottom': labelPosition === 'bottom',
                    'step-label--top': labelPosition === 'top'}"
        >{{ step.name }}</span>
        <span @click="goToPreviousStep(stepIndex)" class="step-dot">{{ stepIndex }}</span>
      </li>
    </ol>
    <button
      class="step-button"
      id="previous-step-button"
      @click="prevStep"
      :disabled="disablePrevButton"
    >← Previous step</button>
    <button
      class="step-button"
      id="next-step-button"
      @click="nextStep"
      :disabled="disableNextButton"
    >Next step →</button>
  </div>
</template>

<script>
export default {
  name: "stepper",
  props: {
    currentStep: {
      type: Number,
      default: 0
    },
    steps: {
      type: Array,
      required: true
    },
    nextStep: {
      type: Function
    },
    goToPreviousStep: {
      type: Function
    },
    prevStep: {
      type: Function
    },
    labelPosition: {
      type: String, 
      default: "bottom"
    }
  },

  computed: {
    disableNextButton() {
      return this.currentStep === this.steps.length - 1;
    },
    disablePrevButton() {
      return this.currentStep === 0;
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
$line-width: 6px;
$line-color: rgb(224, 102, 102);
$label-height: 2em;
$label-color-active: rgb(224, 102, 102);
$label-color-inactive: #99a4ac;

.checkout-wrapper {
  box-sizing: border-box;
  border: 1px solid #ddd;
  padding: 1rem;
  width: 100%;
}
.checkout {
  display: flex;
  margin: 2rem 0;
  padding-left: 0;
  padding-bottom: 2em;
  text-align: center;
  list-style: none;

  .step {
    cursor: default;
    flex: 1 1 100%;
    height: 20px;
    position: relative;
    z-index: 0;

    &:before,
    &:after {
      position: absolute;
      content: "";
      top: 50%;
      transform: translateY(-2px);
      border-bottom: $line-width solid #eee;
      z-index: -1;
    }

    &:before {
      left: 0;
      right: 50%;
    }

    &:after {
      left: 50%;
      right: 0;
    }

    &:first-child:before {
      left: 50%;
    }
    &:last-child:after {
      right: 50%;
    }
  }

  .step-dot {
    display: inline-block;
    background-color: #eee;
    color: #aaa;
    width: 4 * $line-width;
    height: 4 * $line-width;
    border: 2px solid #fff;
    border-radius: 8px;
    cursor: pointer;
  }

  .step.prev,
  .step.active {
    .step-dot {
      background-color: $line-color;
      color: #fff;
      cursor: pointer;
    }

    &:before {
      border-bottom-color: $line-color;
    }
  }

  .step.prev {
    &:after {
      border-bottom-color: $line-color;
    }
  }

  .step-label {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: $label-color-inactive;
    font-weight: 600;
    white-space: nowrap;
    visibility: visible;
    cursor: pointer;
  }

  .step-label:not(.active) {
    display: unset;
  }

  .step-label--top {
    top: -$label-height;
  }
  .step-label--bottom {
    bottom: -$label-height;
  }

  .step.active .step-label {
    color: $label-color-active;
    font-weight: bold;
    visibility: visible;
  }

  .step:not(.active) .step-label {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    @media (max-width: 767px) {
      display: none;
    }
  }
}

.step-button {
  border: 1px solid #ddd;
  background-color: #efefef;
  padding: 10px 10px;
  &:hover {
    cursor: pointer;
  }
}

button + button {
  margin-left: 1rem;
}
</style>
