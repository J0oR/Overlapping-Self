const myHeader =
    '<div class="row" id="header_row">' +
        '<div class="col" style="width: 33%">' +
            '<img alt="Logo Università di Palermo" class="img-fluid" src="Images/logo_unipa.png"></div>' +
        '<div class="col" style="width: 33%"></div>' +
        '<div class="col" style="width: 33%">' +
            '<img src="Images/cnr_logo.jpg" class="img-fluid" alt="Logo CNR" style="max-width: 65%">' +
        '</div>' +
    '</div>'

// -- GENERAL INSTRUCTIONS --
const textInstructions = myHeader +
    '<h5 class="introHeader"> Grazie mille per la tua partecipazione! Il tuo contributo è molto importante per noi!</h5>' +
    '<div class="border p-3" style="max-width: 80%;margin-left: 10%;text-align: left;border-radius: 1%;">' +
        '<p>Questa ricerca ha l’obiettivo di indagare le differenze tra le misure basate su rating scale e quelle su ' +
        'tempi di reazione, il tutto nell’ambito della formazione delle impressioni.</p>' +
        '<p>Il compito ti richiederà circa 15 minuti. Per svolgerlo correttamente, cerca di stare in un ' +
        '<span class="keyword">ambiente il più possibile tranquillo e di leggere molto attentamente le istruzioni di ' +
        'ogni prova.</span>'+
        '<p>Non esistono risposte "giuste" o "sbagliate", esistono invece modi personali di concepire fatti e persone: noi ' +
        'siamo interessati al fatto che siano proprio questi ultimi ad emergere.</p>' +
        '<p>Rispondi ad ogni quesito con <span class="keyword">assoluta sincerità</span>, selezionando la risposta che riflette il più ' +
        'possibile ciò che pensi.</p>' +
        '<p>Ti informiamo che:</p>' +
        '<p><b>-</b> il questionario verrà rigorosamente compilato in forma <span class="keyword">anonima</span class="keyword"> e per ' +
        'garantire una migliore validità dei risultati alcune domande potrebbero essere riproposte. ' +
        '<i><a href="privacy.html" target="_blank">(Nota sulla privacy e informazioni sulla ricerca)</a></i></p>' +
        '<p><b>-</b> iniziando il questionario esprimi il tuo consenso a partecipare alla ricerca, accetti il trattamento dei dati ' +
        'raccolti e affermi di aver letto e compreso le informazioni qui riportate.</p>' +
        '<p><b>-</b> sei libero di ritirarti in qualsiasi momento senza preavviso, senza che ciò comporti alcuna conseguenza o la ' +
        'necessità di doverne specificare il motivo.</p>' +
    '</div>'+
    '<h5 class="pushAnyBtn" style="margin-top: 0.5%;margin-bottom: 1%">Premi qualunque tasto per iniziare</h5>';

// -- SEX FORM --
const sexChoice =
    '<div class="sex_container">'+
        '<h2 id="sex_title" class="introHeader">Sei</h2>'+
        '<ul id="sex_list">'+
            '<li class="sex_element">'+
                '<label for="male" class="sex_label">' +
                    '<span class="sex_label_text">Maschio</span>'+
                    '<input type="radio" id="male" name="sex" value="0">'+
                    '<div class="check"></div>'+
                '</label>'+
            '</li>'+
            '<li class="sex_element">'+
                '<label for="female" class="sex_label">Femmina'+
                    '<input type="radio" id="female" name="sex" value="1" required>'+
                    '<div class="check">'+'</div>'+
                '</label>'+
            '</li>'+
        '</ul>'+
    '</div>'
//'<div class="inside"></div>'+

