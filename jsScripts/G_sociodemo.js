//todo : applicare modifiche sex form nelle scelte radio
const sociodemo_form =
    '<label for="final_data_age" class="required final_form_label">Indica la tua età in anni compiuti</label>' +
    '<input type="number" id="final_data_age" name="final_data[age]" required="required" class="form-control" style="height: 4vw"></div>\n' +
    '<label class="required final_form_label" for="final_data_educationLevel">Indica il tuo livello di Istruzione</label>' +
        '<select id="final_data_educationLevel" name="final_data[educationLevel]" required="required" class="form-control" style="height: 4vw">' +
            '<option value="" selected="selected">-- Selezionare --</option>' +
            '<option value="0">Licenza Elementare</option>' +
            '<option value="1">Licenza Media</option>' +
            '<option value="2">Diploma di istruzione secondaria superiore</option>' +
            '<option value="3">Laurea di primo livello</option>' +
            '<option value="4">Laurea specialistica</option>' +
            '<option value="5">Master universitario di primo livello</option>' +
            '<option value="6">Master universitario di secondo livello</option>' +
            '<option value="7">Diploma di specializzazione</option>' +
            '<option value="8">Titolo di dottore di ricerca</option>' +
        '</select>' +
    '<label class="required final_form_label">Attualmente sono uno studente</label>' +
    '<ul id="final_data_isStudent" class="sociodemo_form_list">' +
        '<li class="sociodemo_element">' +
            '<label class="sociodemo_label required" for="final_data_isStudent_0">No'+
                '<input type="radio" id="final_data_isStudent_0" name="final_data[isStudent]" required="required" class="form-check-input" value="0">' +
                '<div class="check"></div>'+
            '</label>' +
        '</li>' +
        '<li class="sociodemo_element">' +
            '<label class="sociodemo_label required" for="final_data_isStudent_1">Si'+
                '<input type="radio" id="final_data_isStudent_1" name="final_data[isStudent]" required="required" class="form-check-input" value="1">' +
                '<div class="check"></div>'+
            '</label>' +
        '</li>' +
    '</ul>' +
    '<label for="final_data_school" class="required final_form_label">Indica la tua scuola o il tuo corso di laurea</label>' +
    '<input style="height: 4vw" type="text" id="final_data_school" name="final_data[school]" maxlength="255" class="form-control">\n' +
    '<legend class="col-form-label required final_form_label">Sono stato tre volte sulla luna</legend>' +
    '<ul id="final_data_isStudent" class="sociodemo_form_list">' +
        '<li class="sociodemo_element">' +
            '<label class="sociodemo_label required" for="final_data_isMoon_0">No'+
                '<input type="radio" id="final_data_isMoon_0" name="final_data[isMoon]" required="required" class="form-check-input" value="0">' +
                '<div class="check"></div>'+
            '</label>' +
        '</li>' +
        '<li class="sociodemo_element">' +
            '<label class="sociodemo_label required" for="final_data_isMoon_1">Si'+
                '<input type="radio" id="final_data_isMoon_1" name="final_data[isMoon]" required="required" class="form-check-input" value="1">' +
                '<div class="check"><div class="inside"></div></div>'+
            '</label>' +
        '</li>' +
    '</ul>' +
    '<legend class="col-form-label required final_form_label">Attualmente lavoro</legend>' +
    '<ul id="final_data_isWorker" class="sociodemo_form_list">' +
        '<li class="sociodemo_element">' +
            '<label class="sociodemo_label required" for="final_data_isWorker_0">No'+
                '<input type="radio" id="final_data_isWorker_0" name="final_data[isWorker]" required="required" class="form-check-input" value="0">' +
                '<div class="check"></div>'+
            '</label>' +
        '</li>' +
        '<li class="sociodemo_element">' +
            '<label class="sociodemo_label required" for="final_data_isWorker_1">Si'+
                '<input type="radio" id="final_data_isWorker_1" name="final_data[isWorker]" required="required" class="form-check-input" value="1">' +
                '<div class="check"></div>'+
            '</label>' +
        '</li>' +
    '</ul>'+
    '<label for="final_data_occupation" class="required final_form_label">Indica la tua professione</label>' +
    '<input style="height: 4vw" type="text" id="final_data_occupation" name="final_data[occupation]" maxlength="255" class="form-control">\n' +
    '<legend class="col-form-label required final_form_label">Sono nato nel 1826</legend>' +
    '<ul id="final_data_is1826" class="sociodemo_form_list">' +
        '<li class="sociodemo_element">' +
           '<label class="sociodemo_label required" for="final_data_is1826_0">No'+
                '<input type="radio" id="final_data_is1826_0" name="final_data[is1826]" required="required" class="form-check-input" value="0">\n' +
                '<div class="check"></div>'+
            '</label>' +
        '</li>' +
        '<li class="sociodemo_element">' +
            '<label class="sociodemo_label required" for="final_data_is1826_1">Si'+
                '<input type="radio" id="final_data_is1826_1" name="final_data[is1826]" required="required" class="form-check-input" value="1">\n' +
                '<div class="check"></div>'+
            '</label>' +
        '</li>' +
    '</ul>' +
    '<div class="form-group">' +
        '<label for="final_data_province" class="required final_form_label">Indica la tua provincia di residenza</label>' +
        '<input style="height: 4vw" type="text" id="final_data_province" name="final_data[province]" required="required" maxlength="255" class="form-control">' +
    '</div>' +
    '<div class="form-group" style="margin-bottom: 2%">' +
        '<label for="final_data_region" class="required final_form_label">Indica la tua regione di residenza</label>' +
        '<input style="height: 4vw" type="text" id="final_data_region" name="final_data[region]" required="required" maxlength="255" class="form-control">' +
    '</div>';

// -- PERSONAL DATA FORM --
const last = {
    type: jsPsychSurveyHtmlForm,
    button_label: 'Continua',
    html: sociodemo_form,
    scale_width:1000,
    on_start: function() {jsPsych.setProgressBar(0.95);},
    on_finish:function (){
        let last_data = jsPsych.data.get();
        saveData("Personal data form",last_data.csv());
    }
};

// TODO
timeline.push(last);

