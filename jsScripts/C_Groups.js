// -- GROUP INSTRUCTIONS --

const ingroupInstructions = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: groupInstructions,
    post_trial_gap: 500,
    on_start: function() {jsPsych.setProgressBar(0.32);}
};

// -- GROUP INSTRUCTIONS and SURVEY --

for (i = 0; i < Plural.length; i++) {
    questionsGroup.push(
        {
            prompt: '<strong>' + Plural[i] + '</strong>',
            name: Plural[i],
            labels: likertScaleSelf,
            required: true
        }
    );
}

let group = {
    preamble: groupHeader,
    type: jsPsychSurveyLikert,
    questions: questionsGroup,
    randomize_question_order: true,
    button_label: 'Continua',
    data: {type: 'groupMale'},
    on_start: function() {jsPsych.setProgressBar(0.38);},
    on_finish:function (){
        let last_data = jsPsych.data.get();
        saveData("Ingroup",last_data.csv());
    }
};

timeline.push(ingroupInstructions);
timeline.push(group);
