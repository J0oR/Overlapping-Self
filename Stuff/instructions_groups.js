// -- GROUP INSTRUCTIONS --
const groupInstructions =
        '<h5 class="introHeader extend_size">Istruzioni ' +
            '<small>(Leggi attentamente prima di iniziare)</small>' +
        '</h5>' +
        '<div class="border p-3 extend_size" style="max-width:80%;margin-left: 10%;text-align: left;border-radius: 1%;padding:4%!important;">' +
            '<p>Nel prossimo compito dovrai indicare quanto ritieni che ciascun <span class="keyword">attributo</span> ' +
            'sia <span class="keyword">tipico</span> nel descrivere gli <span class="keyword">Italiani</span>.' +
            '</p>' +
        '</div>' +
        '<h5 class="pushAnyBtn extend_size" style="margin-top: 1%;margin-bottom: 1%">Premi qualunque tasto per continuare</h5>';

// -- GROUP HEADER --
const groupHeader =
    '<h5 class="introHeader" style="margin-top: 1%"> Italiani </h5>' +
    '<div class="group_rel resize">Usando la scala che va da <b>0</b> (<b><i>Per nulla</i></b>) a <b>6</b> ' +
    '(<b><i>Moltissimo</i></b>), indica quanto pensi che gli <b>ITALIANI SIANO</b></div>'


// ----- RT INSTRUCTIONS --------
const myRtInstructions =
    '<h5 class="introHeader">' +
    '<span><B>COMPITO DI CATEGORIZZAZIONE: COME SONO GLI ITALIANI.</B></span><BR>'+
    'Istruzioni <small>(Leggi Attentamente)</small></h5>' +
    '<div class="border p-3" style="max-width:80%;margin-left: 10%;text-align: left;border-radius: 1%;' +
    'font-size: 18px!important;">' +
    '<p>Adesso farai una prova sulla velocità e l’accuratezza della categorizzazione.</p>' +
    '<p>Uno per volta, ti appariranno al centro dello schermo gli attributi visti precedentemente.<br>' +
    'Dovrai distinguere tra quelli che ritieni tipici e quelli che ritieni non tipici nel descrivere il <span class="keyword">gruppo degli' +
    ' Italiani.</span></p>' +
    '<p>Premi il tasto <span class="keyword">K</span> se ritieni che l\'attributo ' +
    '<span class="keyword" style="text-decoration: underline">sia tipico</span> nel descrivere il gruppo degli <span class="keyword">Italiani</span>.<br>' +
    'Premi il tasto <span class="keyword">D</span> se ritieni che l’attributo <span class="keyword" style="text-decoration: underline">non sia tipico</span> ' +
    'nel descrivere</span> il gruppo degli <span class="keyword">Italiani</span>.</p>' +
    '<p>Nel corso della prova rileveremo i tuoi tempi di risposta.</p>' +
    '<p>È quindi molto importante che tu risponda in maniera <span class="keyword">rapida ed accurata</span>.</p>' +
    '<p>Rimani con il dito della <span class="keyword">mano sinistra</span> posizionato sul tasto ' +
    '<span class="keyword">D</span> e il dito della ' +
    '<span class="keyword">mano destra</span> sul tasto <span class="keyword">K</span> per essere il più veloce possibile nel rispondere.</p>' +
    '<p>Quando ti senti pronto/a, schiaccia la barra spaziatrice e il compito di categorizzazione avrà inizio.</p>' +
    '</div>' +
    '<h5 class="pushAnyBtn" style="margin-top: 1%;margin-bottom: 1%">Premi qualunque tasto per continuare</h5>'

const myRtInstructionsKeys =
    '<h5 class="introHeader" style="margin-left: 0%!important;max-width: 100%!important;">' +
    '<span><B>QUINDI</B></span><BR>'+
    'RICORDA</h5>' +
    '<div class="border p-3" style="text-align: left;border-radius: 1%;' +
    'font-size: 18px!important;">' +
    '<p style="margin-left: 25%">Tasto <span class="keyword">K</span> = <span class="keyword" style="text-decoration: underline"> tipico degli Italiani</span></p>' +
    '<p style="margin-left: 25%">Tasto <span class="keyword">D</span> = <span class="keyword" style="text-decoration: underline">non tipico degli Italiani</span></p>' +
    '<p>Cerca di rispondera nella maniera più veloce ed accurata possibile.</p>' +
    '</div>' +
    '<h5 class="pushAnyBtn" style="margin-top: 1%;margin-bottom: 1%;margin-left: 0%!important;max-width: 100%!important;">Premi il tasto <b>N</b> per iniziare</h5>'

const myRtInstructionsKeys_after20 =
    '<h5 class="introHeader" style="margin-left: 0%!important;max-width: 100%!important;">' +
    'RICORDA</h5>' +
    '<div class="border p-3" style="text-align: left;border-radius: 1%;' +
    'font-size: 18px!important;">' +
    '<p style="margin-left: 25%">Tasto <span class="keyword">K</span> = <span class="keyword" style="text-decoration: underline"> tipico degli Italiani</span></p>' +
    '<p style="margin-left: 25%">Tasto <span class="keyword">D</span> = <span class="keyword" style="text-decoration: underline">non tipico degli Italiani</span></p>' +
    '<p>Cerca di rispondera nella maniera più veloce ed accurata possibile.</p>' +
    '</div>' +
    '<h5 class="pushAnyBtn" style="margin-top: 1%;margin-bottom: 1%;margin-left: 0%!important;max-width: 100%!important;">Premi il tasto <b>N</b> per continuare</h5>'


// ---------- INGROUP RELATION BEFORE -----------

const ingroupInstructionsBefore =
    '<h5 class="introHeader extend_size">Istruzioni ' +
    '<small>(Leggi attentamente prima di iniziare)</small>' +
    '</h5>' +
    '<div class="border p-3 extend_size" style="max-width:80%;margin-left: 10%;text-align: left;border-radius: 1%;padding:4%!important;">' +
    '<p>Nelle prossime due pagine dovrai rispondere a delle domande sulla <span class="keyword">relazione</span> che ' +
    'esiste tra <span class="keyword">te</span> e il gruppo degli <span class="keyword">Italiani</span>.' +
    '</p>' +
    '</div>' +
    '<h5 class="pushAnyBtn extend_size" style="margin-top: 1%;margin-bottom: 1%">Premi il tasto <b>N</b> per continuare</h5>';

// ---------- INGROUP RELATION  -----------
const group_rel_title =
    '<h5 class="introHeader" style="margin-left: 10%!important;max-width: 80%!important;margin-top: 1%">' +
    'Relazione con il gruppo degli italiani</h5>' +
    '<div class="group_rel" style="margin-left: 10%!important;max-width: 80%!important;"> ' +
    'Indica quali delle seguenti rappresentazioni meglio descrive la relazione che esiste<br>' +
    'tra <span class="keyword_header">Te</span> e il gruppo degli <span class="keyword_header">Italiani</span>' +
    '</div>';

// ------------- ITALIANS LIKERT PAGE ------------

/* groupInstruction è definito in RT */
let socidInstr =
    '<h5 class="introHeader" style="margin-left: 10%!important;max-width: 80%!important;margin-top: 1%">' +
    'La ricerca è quasi finita</h5>' +
    '<div class="group_rel" style="margin-left:10%;max-width:80%;text-align: left;border-radius: 10px!important;' +
    'padding:2%!important; margin-top: 1%!important;">' +
        '<p>Per ogni affermazione, indica il tuo grado di accordo o disaccordo con essa, usando la scala che va da ' +
        '<b>-3</b> <i>(<b>Assolutamente in disaccordo</b>)</i> a <b>+ 3</b> <i>(<b>Assolutamente d’accordo</b>)</i>' +
        '</p>' +
    '</div>'