// -------------------- FINAL -----------------------

const final = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
        '<h5 class="introHeader" style="margin-left: 0!important;max-width: 100%!important;">Grazie!</h5>' +
        '<div class="border p-3 extend_size" style="text-align: left;border-radius: 1%!important;padding: 4vw!important;">' +
        '<p class="opacity-75">Hai completato con successo l\'indagine. Puoi chiudere la finestra del browser.</p>' +
        '</div>',
    choices: "NO_KEYS",
    on_start:function(){document.getElementById("jspsych-progressbar-container").style.display = "none";},
};

timeline.push(final);

// --------------------- RUN EXPERIMENT --------------------

/* after the timeline is filled, we can run the experiment */

//todo
jsPsych.run(timeline);

