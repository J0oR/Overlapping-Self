

// ---------------------- ATTRIBUTES LIKERT GENERATION ----------------------

function attrGeneration(){
    let attributes = jsPsych.randomization.shuffle((sex==0) ? maleSingularAttr : femaleSingularAttr);
    // todo
    for (i = 0; i < attributes.length; i++) {
        questionsAttributes.push(
            {
                prompt: '<strong>' + attributes[i] + '</strong>',
                name: attributes[i],
                labels: likertScaleAttr,
                required: true
            }
        )
    }
}



let attrInstr =
    '<h5 class="introHeader" style="margin-top: 1%">Un ultimo sforzo!</h5>' +
    '<div class="group_rel" style="margin-left:10%;max-width:80%;text-align: left;border-radius: 10px!important;' +
    'padding:2%!important; margin-top: 1%!important;">\n' +
        '<p class="opacity-75" style="text-align: center">Valuta adesso quanto ritieni positivo o negativo ogni attributo visto in precedenza, ' +
        'usando la scala che va da <b>-3</b> <i>(<b>Assolutamente negativo</b>)</i> a <b>+ 3</b> <i>(<b>Assolutamente ' +
        'positivo</b>)</i>.' +
        '</p>' +
    '</div>'

const attrLikert = {
    type: jsPsychSurveyLikert,
    preamble: attrInstr,
    questions: questionsAttributes,
    randomize_question_order: true,
    button_label: 'Continua',
    on_start: function() {jsPsych.setProgressBar(0.9);},
    on_finish:function (){
        // select all trials
        let last_data = jsPsych.data.get();
        // get csv representation of data and log to console
        saveData("Attribute evaluation",last_data.csv());
    }
};

timeline.push(attrLikert);





