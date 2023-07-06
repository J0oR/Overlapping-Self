const choices = [
    '<span style="font-size: 18px">la persona che <b style="font-size: 22px;font-variant: all-small-caps">realmente</b> sei</span>',
    '<span style="font-size: 18px">la persona che <b style="font-size: 22px;font-variant: all-small-caps">vorresti</b> essere</span>',
    '<span style="font-size: 18px">la persona che <b style="font-size: 22px;font-variant: all-small-caps">dovresti</b> essere</span>'];

// GENERAL INSTRUCTIONS
const selfInstructions = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: selfTextInstructions,
    post_trial_gap: 1000,
    scale_width:1000,
    on_start:function (){
        document.getElementById("jspsych-progressbar-container").style.display = "block";
        jsPsych.setProgressBar(0);
    }
};

// -------------------------------------------------- REAL SELF --------------------------------------------------------

// -- REAL SELF INSTRUCTIONS --
const realSelfInstructionsBefore = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: realSelfInstructions,
    post_trial_gap:500,
    on_start: function() {jsPsych.setProgressBar(0.02);}

};

// -- REAL SELF  SURVEY--
let realSelf = {
    preamble: realSelfLikertHeader,
    type: jsPsychSurveyLikert,
    questions: questionsSelf,
    randomize_question_order: true,
    button_label: 'Continua',
    data: {type: 'realSelf'},
    on_start: function() {jsPsych.setProgressBar(0.08);},
    on_finish:function (){
        let last_data = jsPsych.data.get();
        saveData("Real self", last_data.csv());
    }
};

// -- REAL SELF CONTROL --
let controlRealSelf = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<h5 class="introHeader">In questo compito hai dovuto indicare quanto ciascun attributo rappresenta:</h5>',
    choices: choices,
    prompt: "",
    data: {type: 'controlRealSelf'},
    on_start: function() {jsPsych.setProgressBar(0.1);},
    on_finish:function (){
        let last_data = jsPsych.data.get();
        saveData("Real self control", last_data.csv());
    }
};


// ------------------------------------------------- IDEAL SELF --------------------------------------------------------

// -- IDEAL SELF INSTRUCTIONS --
const idealSelfInstructionsBefore = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: idealSelfInstructions,
    post_trial_gap:500,
    on_start: function() {jsPsych.setProgressBar(shuffle[0]=='ideal'? 0.12:0.22);}
};


// -- IDEAL SELF SURVEY--
let idealSelf = {
    preamble: idealSelfLikertHeader,
    type: jsPsychSurveyLikert,
    questions: questionsSelf,
    randomize_question_order: true,
    button_label: 'Continua',
    data: {type: 'idealSelf'},
    scale_width: 1000,
    on_start: function() {jsPsych.setProgressBar(shuffle[0]=='ideal'? 0.18:0.28);},
    on_finish:function (){
        let last_data = jsPsych.data.get();
        saveData("Ideal self",last_data.csv());
    }
};

// -- IDEAL SELF CONTROL --
let controlIdealSelf = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<h5 class="introHeader">In questo compito hai dovuto indicare quanto ciascun attributo rappresenta:</h5>',
    choices: choices,
    prompt: "",
    data: {type: 'controlIdealSelf'},
    on_start: function() {jsPsych.setProgressBar(shuffle[0]=='ideal'? 0.2:0.3);},
    on_finish:function (){
        let last_data = jsPsych.data.get();
        saveData("Ideal self control",last_data.csv());
    }
};


// ------------------------------------------------ IMPERATIVE SELF ----------------------------------------------------

// -- IMPERATIVE SELF INSTRUCTIONS --
const imperativeSelfInstructionsBefore = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: imperativeSelfInstructions,
    post_trial_gap:500,
    on_start: function() {jsPsych.setProgressBar(shuffle[0]=='imperative'? 0.12:0.22);}
};

// -- IMPERATIVE SELF SURVEY --
let imperativeSelf = {
    preamble: imperativeSelfLikertHeader,
    type: jsPsychSurveyLikert,
    questions: questionsSelf,
    randomize_question_order: true,
    button_label: 'Continua',
    data: {type: 'imperativeSelf'},
    scale_width: 1000,
    on_start: function() {jsPsych.setProgressBar(shuffle[0]=='imperative'? 0.18:0.28);},
    on_finish:function (){
        let last_data = jsPsych.data.get();
        saveData("Imperative self", last_data.csv());
    }
};

// -- IMPERATIVE SELF CONTROL--
let controlImperativeSelf = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<h5 class="introHeader">In questo compito hai dovuto indicare quanto ciascun attributo rappresenta:</h5>',
    choices: choices,
    prompt: "",
    data: {type: 'controlImperativeSelf'},
    on_start: function() {jsPsych.setProgressBar(shuffle[0]=='imperative'? 0.2:0.3);},
    on_finish:function (){
        let last_data = jsPsych.data.get();
        saveData("Imperative self control",last_data.csv());
    }
};


// ------------------------------ RANDOMIZATION BETWEEN IDEAL AND IMPERATIVE SELF TRIALS -------------------------------


// we push the real self section
timeline.push(selfInstructions);
timeline.push(realSelfInstructionsBefore);
timeline.push(realSelf);
timeline.push(controlRealSelf);

// randomization between ideal and imperative self parts
let shuffle = jsPsych.randomization.shuffle(['ideal', 'imperative']);

if (shuffle[0] == 'ideal') {

    timeline.push(idealSelfInstructionsBefore);
    timeline.push(idealSelf);
    timeline.push(controlIdealSelf);

    timeline.push(imperativeSelfInstructionsBefore);
    timeline.push(imperativeSelf);
    timeline.push(controlImperativeSelf);
} else {
    timeline.push(imperativeSelfInstructionsBefore);
    timeline.push(imperativeSelf);
    timeline.push(controlImperativeSelf);

    timeline.push(idealSelfInstructionsBefore);
    timeline.push(idealSelf);
    timeline.push(controlIdealSelf);
}

