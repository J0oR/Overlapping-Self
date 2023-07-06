const rtInstructions = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: myRtInstructions,
    post_trial_gap: 1000,
    on_start: function() {jsPsych.setProgressBar(0.4);},
    on_finish: function() {document.getElementById("jspsych-progressbar-container").style.display = "none";}

};


timeline.push(rtInstructions);

const rtInstructionsReminder = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: myRtInstructionsKeys,
    post_trial_gap: 1000,
    choices: ['n'],
    on_start: function() {jsPsych.setProgressBar(0.4);},
    on_finish: function() {document.getElementById("jspsych-progressbar-container").style.display = "none";}

};

timeline.push(rtInstructionsReminder);

const rtInstructionsReminder_after20 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: myRtInstructionsKeys_after20,
    post_trial_gap: 1000,
    choices: ['n'],
};


// -- RT --
const stimuliRt = jsPsych.randomization.shuffleNoRepeats(Plural80);


for (i = 0; i < stimuliRt.length; i++) {
    var stimulus = {
        type: jsPsychCategorizeHtml,
        stimulus: '<p style="font-size:30px;">' + stimuliRt[i] + '</p>',
        key_answer: 'd',
        choices: ['d', 'k'],
        correct_text: '',
        incorrect_text: '',
        show_stim_with_feedback: false,
        show_feedback_on_timeout: true,
        feedback_duration:1000,
    };
    if (i === 20)
        timeline.push(rtInstructionsReminder_after20);
    timeline.push(stimulus);
}

