// ------------------------------------------ GENERAL NEXT 2 PAGES INSTRUCTIONS ------------------------------------------------

const ingroupRelInstructions = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: ingroupInstructionsBefore,
    choices: ['n'],
    post_trial_gap: 1000,
    on_start: function() {
        document.getElementById("jspsych-progressbar-container").style.display = "block";
        jsPsych.setProgressBar(0.65);
        let last_data = jsPsych.data.get();
        saveData("Identification",last_data.csv());
    }
};



// ------------------------------------------ Relation with the ingroup ------------------------------------------------
let group_img =
        '<div><img src="./Images/venn.png" class="img-fluid"></div>';


// -- IOS --
const ios = {
    type: jsPsychSurveyLikert,
    preamble: group_rel_title,
    questions: [
        {
            prompt: group_img,
            name: 'group_rel',
            labels: likertScaleIos,
            required: true
        },
    ],
    randomize_question_order: false,
    button_label: 'Continua',
    scale_width: 1000,
    on_finish:function (){
        let last_data = jsPsych.data.get();
        saveData("Identification",last_data.csv());
    }
};





// ------------------------------ Likert scales on italians -------------------------

socidItems = jsPsych.randomization.shuffle(socid);

// -- SOCID --
// todo
for (i = 0; i < socidItems.length; i++) {
    questionsSocid.push(
        {
            prompt: '<strong style="font-size: 18px;">' + socidItems[i] + '</h6>',
            name: socidItems[i],
            labels: likertScaleSocid,
            required: true,
        }
    )
}


const socidLikert = {
    type: jsPsychSurveyLikert,
    preamble: socidInstr,
    questions: questionsSocid,
    randomize_question_order: true,
    button_label: 'Continua',
    on_start: function() {jsPsych.setProgressBar(0.8);},
    on_finish:function (){
        let last_data = jsPsych.data.get();
        saveData("Ingroup evaluation",last_data.csv());
    }
};


timeline.push(ingroupRelInstructions);
timeline.push(ios);
timeline.push(socidLikert);
