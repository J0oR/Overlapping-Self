// ------------------------------------------- VARIABLE DECLARATIONS ---------------------------------------------------

// likert scales
const likertScaleSelf = ["0", "1", "2", "3", "4", "5", "6"];
const likertScaleIos = ["1", "2", "3", "4", "5", "6", "7"];
const likertScaleSocid = ["-3","-2", "-1", "0", "+1", "+2","+3"];
const likertScaleAttr = ["-3","-2", "-1", "0", "+1", "+2","+3"];

// the sex variable will be set globally after the user selection
let sex;
let questionsSelf = [];
let questionsAttributes = []
let questionsGroup = [];
let questionsSocid = [];

let unique_id;

const jsPsych = initJsPsych({
    show_progress_bar: true,
    auto_update_progress_bar: false,
    message_progress_bar: '',
});

let enter_fullscreen = {
    type: jsPsychFullscreen,
    message: '<h1>Benvenuto/a</h1><br><p>Cliccando sul pulsante "continue", si passerà alla modalità schermo intero. </p><br>',
    fullscreen_mode: true,
    on_start:function (){
        document.getElementById("jspsych-progressbar-container").style.display = "none";
    },
}

// create an empty timeline
const timeline = [];

unique_id = "unique_id" + Math.random().toString(16).slice(2);


// --------------------------------------------------- SCREEN CHECK ----------------------------------------------------

if(window.screen.width <=500)
    window.location.href = '../error_page.html';
// da sostituire 'https://psplab.org/SO/error_page.html'


// --------------------------------------------------- ID CHECK --------------------------------------------------------

let subj_id = jsPsych.data.urlVariables().id;

if (!subj_id || subj_id == "")
    subj_id = "missing"

jsPsych.data.addProperties({
    subject_id: {"subject_id":subj_id},
});

document.cookie="cookie_unique_id=" + unique_id;


// ------------------------------------------- INTRO -  GENERAL INSTRUCTIONS -------------------------------------------
const instructions = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: textInstructions,
    post_trial_gap:500,
    on_start:function (){
        document.getElementById("jspsych-progressbar-container").style.display = "none";
    },

};


// ----------------------------------------------- SAVE DATA FUNCTION --------------------------------------------------
function saveData(title,data){
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'write_data.php', );
    // 'write_data.php' is the path to the php file described above.
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({title:title,filedata: data}));
}


// ------------------------------------------------- SEX FORM ----------------------------------------------------------

const sexForm = {
    type: jsPsychSurveyHtmlForm,
    html: sexChoice,
    button_label: 'Continua',
    on_finish: function (){
        sex = jsPsych.data.get().last(2).values()[1].response.sex;
        questions_creation();
        attrGeneration();
        let last_data = jsPsych.data.get();
        saveData("Genere", last_data.csv());
    }
};


// ------------------------------------------- GENERATING QUESTIONS ----------------------------------------------------

function questions_creation() {
    for (i = 0; i < maleSingular.length; i++) {
        items = (sex == 0) ? maleSingular : femaleSingular;
        questionsSelf.push(
            {
                prompt: '<strong>' + items[i] + '</strong>',
                name: items[i],
                labels: likertScaleSelf,
                required: true
            }
        );
    }
    return questionsSelf;
}

timeline.push(enter_fullscreen);
timeline.push(instructions);
timeline.push(sexForm);
