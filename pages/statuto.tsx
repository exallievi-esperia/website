import Heading from "@/components/Heading"
import Layout from "@/components/layout/Layout"
import Head from "next/head"
import Link from "next/link"
import { VscFilePdf } from "react-icons/vsc"

const StatutoPage = () => {
  return (
    <Layout>
      <Head>
        <title>Statuto - Ex Allievi Esperia</title>
      </Head>

      <Heading
        title={"Statuto"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        }
      />

      <main className='mx-auto max-w-7xl p-6 lg:px-8 my-14'>
        <div className='flex justify-center'>
          <div className='rounded-full py-1 px-3 text-sm sm:text-base leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
            <Link
              href='/documenti/statuto.pdf'
              className='flex gap-2 group items-center'
              rel='noopener noreferrer'
              target='_blank'
            >
              <VscFilePdf className='text-[#f25116] w-5 h-5' />
              <p className='dark:text-gray-300 dark:hover:text-[#f25116] hover:text-[#f25116] transition duration-300'>
                Visualizza lo statuto in formato PDF
              </p>
              <span
                aria-hidden='true'
                className='group-hover:translate-x-1 transition duration-300 text-[#f25116]'
              >
                &rarr;
              </span>
            </Link>
          </div>
        </div>

        {/* Statuto */}
        <div className='mt-16'>
          {/* Titolo statuto */}
          <h2 className='font-bold text-xl mb-6 dark:text-white'>
            Statuto dell’Associazione non riconosciuta “Ex Allievi ITIS
            P.Paleocapa di Bergamo (Esperia) – APS” modificato secondo il D.Lgs.
            117/2017. Ente del Terzo Settore
          </h2>

          {/* Articoli */}
          <ol className="dark:text-gray-200">
            {/* Art. 1 */}
            <li>
              <div className='mb-6'>
                <h3 className='font-bold text-lg'>
                  Art.1 - Denominazione, sede e durata
                </h3>

                <ol>
                  <li>
                    <p>
                      1. E' costituita l'associazione
                      <span className='font-bold'>
                        “Ex Allievi ITIS P. Paleocapa di Bergamo (Esperia) –
                        APS” (Associazione di Promozione Sociale)
                      </span>
                      , in seguito in forma breve “associazione”, con sede in
                      Bergamo, Via Gavazzeni n° 29, CAP 24125. L’associazione è
                      un Ente del Terzo Settore ed è disciplinata dal seguente
                      statuto e agisce nei limiti del D. Lgs. 117/2017;
                    </p>
                  </li>

                  <li>
                    <p>
                      2. L'ordinamento interno dell'associazione è ispirato a
                      criteri di democraticità, di uguaglianza dei diritti e
                      delle pari opportunità di tutti gli associati, ne
                      favorisce la partecipazione sociale senza limiti a
                      condizioni economiche e senza discriminazioni di qualsiasi
                      natura;
                    </p>
                  </li>

                  <li>
                    <p>
                      3. In conseguenza dell’iscrizione al Registro Unico del
                      Terzo Settore, l’associazione dovrà indicare gli estremi
                      dell’iscrizione stessa negli atti, nella corrispondenza e
                      nelle comunicazioni al pubblico;
                    </p>
                  </li>

                  <li>
                    <p>
                      4. L’associazione ha sede legale nel comune di Bergamo e
                      la sua durata è illimitata;
                    </p>
                  </li>
                </ol>
              </div>
            </li>

            {/* Art. 2 */}
            <li>
              <div className='mb-6'>
                <h3 className='font-bold text-lg'>Art.2 – Scopo</h3>

                <ol>
                  <li>
                    <p>
                      1. L’associazione non ha scopo di lucro e persegue
                      finalità civiche, solidaristiche e di utilità sociale. In
                      particolare intende:
                    </p>

                    <ol className='pl-5'>
                      <li>
                        <p>
                          1. Stimolare e rendere più intensi i rapporti fra il
                          mondo della scuola e gli ex allievi;
                        </p>
                      </li>

                      <li>
                        <p>
                          2. Favorire le scelte degli allievi apportando una
                          migliore conoscenza delle opportunità lavorative e
                          universitarie;
                        </p>
                      </li>

                      <li>
                        <p>
                          3. Supportare i percorsi educativi utilizzando le
                          esperienze e i contatti degli Ex Allievi;
                        </p>
                      </li>

                      <li>
                        <p>
                          4. Promuovere la ricaduta della professionalità
                          sviluppata sul territorio bergamasco;
                        </p>
                      </li>

                      <li>
                        <p>
                          5. Contribuire ad aumentare il prestigio dell’ITIS
                          Paleocapa;
                        </p>
                      </li>

                      <li>
                        <p>
                          6. Operare per gli interessi della categoria e
                          favorire l’ingresso degli ex allievi neo diplomati nel
                          mondo del lavoro;
                        </p>
                      </li>

                      <li>
                        <p>
                          7. Organizzare e favorire iniziative per valorizzare
                          la professionalità dei docenti, degli allievi e degli
                          ex allievi;
                        </p>
                      </li>

                      <li>
                        <p>
                          8. Favorire lo scambio scuola – lavoro degli allievi.
                        </p>
                      </li>
                    </ol>
                  </li>
                </ol>
              </div>
            </li>

            {/* Art. 3 */}
            <li>
              <div className='mb-6'>
                <h3 className='font-bold text-lg'>
                  Art 3 - Attività di interesse generale
                </h3>

                <ol>
                  <li>
                    <p>
                      1. L’associazione, nel perseguire le finalità di cui
                      sopra, svolge in via esclusiva o principale le seguenti
                      attività di interesse generale:
                    </p>

                    <ol className='pl-5'>
                      <li>
                        <p>
                          d) Educazione, istruzione e formazione professionale,
                          ai sensi della legge 28 marzo 2003, n. 53, e
                          successive modificazioni, nonché le attività culturali
                          di interesse sociale con finalità educativa;
                        </p>
                      </li>

                      <li>
                        <p>
                          i) Organizzazione e gestione di attività culturali,
                          artistiche o ricreative di interesse sociale, incluse
                          attività, anche editoriali, di promozione e diffusione
                          della cultura e della pratica del volontariato e delle
                          attività di interesse generale;
                        </p>
                      </li>

                      <li>
                        <p>
                          u) Beneficenza, sostegno a distanza, cessione gratuita
                          di alimenti o prodotti di cui alla legge 19 agosto
                          2016, n. 166, e successive modificazioni, o erogazioni
                          di denaro, beni o servizi a sostegno delle persone
                          svantaggiate o di attività di interesse generale a
                          norma del presente articolo.
                        </p>
                      </li>
                    </ol>
                  </li>

                  <li>
                    <p>2. In particolare l’associazione si propone di:</p>

                    <ol className='pl-5'>
                      <li>
                        <p>
                          a) Effettuare la pubblicazione della rivista
                          associativa Esperia e il mantenimento del sito
                          internet;
                        </p>
                      </li>

                      <li>
                        <p>
                          b) Organizzare la Festa degli Ex Allievi di fine anno
                          scolastico con premiazione degli allievi meritevoli
                          (borse di studio);
                        </p>
                      </li>

                      <li>
                        <p>
                          c) Instituire contatti con il modo imprenditoriale e
                          dell’università;
                        </p>
                      </li>

                      <li>
                        <p>
                          d) Organizzare conferenze tecniche e di orientamento,
                          seminari, convegni, visite e stage degli allievi nelle
                          industrie utilizzando le competenze, i contatti e
                          l’esperienza degli ex allievi;
                        </p>
                      </li>

                      <li>
                        <p>
                          e) Assistere gli ex allievi nella ricerca del posto di
                          lavoro e qualsiasi altra attività idonea al
                          conseguimento delle finalità istituzionali del
                          sodalizio;
                        </p>
                      </li>

                      <li>
                        <p>
                          f) Contribuire alla realizzazione di progetti per il
                          miglioramento dell’Istituto, dei laboratori,
                          dell’istruzione di insegnati e alunni;
                        </p>
                      </li>

                      <li>
                        <p>g) Diminuire la dispersione scolastica;</p>
                      </li>

                      <li>
                        <p>
                          h) Inserire nel mondo del lavoro gli alunni con
                          handicap utilizzando le competenze, i contatti e
                          l’esperienza degli ex allievi;
                        </p>
                      </li>

                      <li>
                        <p>
                          i) Collaborare con il collegio dei Periti Industriali,
                          Enti e Privati per promuovere la valorizzazione del
                          perito Industriale.
                        </p>
                      </li>
                    </ol>
                  </li>

                  <li>
                    <p>
                      3. Le attività di cui ai commi precedenti sono svolte in
                      favore dei propri associati, dei loro familiari o dei
                      terzi, avvalendosi in modo prevalente dell’attività di
                      volontariato dei propri associati. Il volontario presta la
                      sua attività secondo il principio di gratuità, con
                      l’eccezione del rimborso delle spese sostenute e
                      documentate entro limiti massimi predefiniti, il divieto
                      di rimborsi forfettari e l’incompatibilità tra la
                      posizione del volontario e ogni forma di prestazione
                      lavorativa retribuita dall’ente di cui il volontario è
                      socio, associato o tramite cui presta attività volontaria;
                    </p>
                  </li>

                  <li>
                    <p>
                      4. L’associazione può assumere lavoratori dipendenti o
                      avvalersi di prestazioni di lavoro autonomo o di altra
                      natura, anche dei propri associati che non svolgono
                      attività di volontariato, solo quando ciò sia necessario
                      ai fini dello svolgimento dell'attività di cui ai commi
                      precedenti e al perseguimento delle finalità
                      dell’associazione. In ogni caso, il numero dei lavoratori
                      impiegati nell'attività non può essere superiore al
                      cinquanta per cento del numero dei volontari o al cinque
                      per cento del numero degli associati.
                    </p>
                  </li>
                </ol>
              </div>
            </li>

            {/* Art. 4 */}
            <li>
              <div className='mb-6'>
                <h3 className='font-bold text-lg'>
                  Art.4 - Ammissione dei soci
                </h3>

                <ol>
                  <li>
                    <p>
                      4.1. Sono ammessi a far parte dell'Associazione gli ex
                      allievi, il corpo docente ed amministrativo dell’Esperia e
                      tutti coloro i quali, aderendo alla finalità istituzionali
                      del sodalizio, intendano collaborare al loro
                      raggiungimento ed accettino le regole adottate attraverso
                      lo statuto ed i regolamenti;
                    </p>
                  </li>

                  <li>
                    <p>
                      4.2. Nessun motivo legato a distinzioni di razza, sesso,
                      religione, possesso di cittadinanza italiana o straniera,
                      condizioni sociali o personali, può essere posto a base
                      del rifiuto di richiesta di adesione all’organizzazione;
                    </p>
                  </li>

                  <li>
                    <p>
                      4.3. L'ammissione all'Associazione è deliberata dal
                      Consiglio direttivo su domanda scritta del richiedente
                      nella quale dovrà specificare le proprie complete
                      generalità;
                    </p>
                  </li>

                  <li>
                    <p>
                      4.4. All'atto dell'ammissione il socio si impegna al
                      versamento della quota associativa annuale, al rispetto
                      dello Statuto e dei regolamenti emanati;
                    </p>
                  </li>

                  <li>
                    <p>
                      4.5 Avverso il diniego motivato di iscrizione
                      all’associazione espresso dal consiglio, il richiedente
                      può ricorrere al Collegio dei Probiviri, se nominato, o
                      all’Assemblea degli aderenti, che devono decidere
                      sull’argomento nella prima riunione convocata. La
                      decisione è inappellabile;
                    </p>
                  </li>

                  <li>
                    <p>
                      4.6. Non è ammessa la figura del socio temporaneo. La
                      quota associativa è intrasmissibile.
                    </p>
                  </li>
                </ol>
              </div>
            </li>

            {/* Art. 5 */}
            <li>
              <div className='mb-6'>
                <h3 className='font-bold text-lg'>
                  Art.5 - Diritti e doveri dei soci
                </h3>

                <ol>
                  <li>
                    <p>
                      5.1. Tutti i soci hanno diritto di voto ed hanno diritto
                      all’elettorato attivo e passivo. I soci minorenni, sino al
                      compimento della maggiore età, eserciteranno il loro
                      diritto per il tramite dei loro genitori;
                    </p>
                  </li>

                  <li>
                    <p>
                      5.2. Tutti i soci hanno i diritti di informazione e di
                      controllo stabiliti dalle leggi e dal presente Statuto, in
                      particolare i soci hanno diritto di accesso ai documenti,
                      delibere, bilanci, rendiconti e registri
                      dell'associazione;
                    </p>
                  </li>

                  <li>
                    <p>
                      5.3. Il socio volontario non potrà in alcun modo essere
                      retribuito, ma avrà diritto al solo rimborso delle spese
                      effettivamente sostenute per l'attività prestata,
                      avvalendosi l'associazione prevalentemente dell’attività
                      resa in forma volontaria e gratuita dei propri associati;
                    </p>
                  </li>

                  <li>
                    <p>
                      5.4. Il comportamento del socio verso gli altri aderenti e
                      all'esterno dell'associazione deve essere animato da
                      spirito di solidarietà ed attuato con correttezza, buona
                      fede, onestà, probità e rigore morale, nel rispetto del
                      presente Statuto e delle linee programmatiche emanate.
                    </p>
                  </li>
                </ol>
              </div>
            </li>

            {/* Art. 6 */}
            <li>
              <div className='mb-6'>
                <h3 className='font-bold text-lg'>
                  Art.6 - Recesso ed esclusione del socio
                </h3>

                <ol>
                  <li>
                    <p>
                      6.1. Il socio può recedere dall'associazione mediante
                      comunicazione scritta da inviare al Presidente;
                    </p>
                  </li>

                  <li>
                    <p>
                      6.2. Il socio può essere escluso dall'associazione nei
                      seguenti casi:
                    </p>

                    <ol className='pl-5'>
                      <li>
                        <p>
                          a) Morosità protrattasi per 3 mesi dal temine di
                          versamento richiesto,
                        </p>
                      </li>

                      <li>
                        <p>
                          b) Gravi motivi che abbiano arrecato danno morale e/o
                          materiale all'associazione stessa.
                        </p>
                      </li>
                    </ol>
                  </li>

                  <li>
                    <p>
                      6.3. L'esclusione del socio è deliberata dal Consiglio
                      direttivo e la relativa delibera, contenente le
                      motivazioni del provvedimento, deve essere comunicata
                      all’interessato a mezzo lettera semplice;
                    </p>
                  </li>

                  <li>
                    <p>
                      6.4. Il socio interessato dal provvedimento può ricorrere
                      al Collegio dei Probiviri, o in assenza di questo organo,
                      chiedere che sia posto all’ordine del giorno della
                      successiva assemblea l’esame dei motivi che hanno
                      determinato l’esclusione al fine di contestare gli
                      addebiti a fondamento del provvedimento. Fino alla data di
                      convocazione dell’Assemblea – che deve avvenire nel
                      termine di tre mesi - il socio interessato dal
                      provvedimento si intende sospeso;
                    </p>
                  </li>

                  <li>
                    <p>
                      6.5. I Soci receduti e/o esclusi non possono richiedere la
                      restituzione dei contributi versati, né hanno diritto
                      alcuno sul patrimonio dell'associazione;
                    </p>
                  </li>
                </ol>
              </div>
            </li>

            {/* Art. 7 */}
            <li>
              <div className='mb-6'>
                <h3 className='font-bold text-lg'>
                  Art.7 - Gli organi sociali
                </h3>

                <ol>
                  <li>
                    <p>7.1. Gli organi dell'associazione sono:</p>

                    <ol className='pl-5'>
                      <li>
                        <p>1. L'Assemblea dei soci,</p>
                      </li>

                      <li>
                        <p>2. Il Consiglio Direttivo,</p>
                      </li>

                      <li>
                        <p>3. Il Presidente,</p>
                      </li>
                    </ol>

                    <p>
                      Possono essere inoltre costituiti i seguenti organi di
                      controllo e garanzia:
                    </p>

                    <ol className='pl-5'>
                      <li>
                        <p>4. Il Collegio dei Revisori dei conti</p>
                      </li>

                      <li>
                        <p>5. Il Collegio dei Probiviri</p>
                      </li>
                    </ol>
                  </li>

                  <li>
                    <p>7.2. Cariche sociali</p>
                    <p>
                      Tutte le cariche sociali sono assunte a titolo gratuito.
                    </p>
                  </li>
                </ol>
              </div>
            </li>

            {/* Art. 8 */}
            <li>
              <div className='mb-6'>
                <h3 className='font-bold text-lg'>Art.8 - L'assemblea</h3>

                <ol>
                  <li>
                    <p>
                      8.1. L'assemblea è organo sovrano dell'associazione.
                      L'assemblea è convocata almeno una volta all'anno dal
                      presidente dell'associazione o da chi ne fa le veci,
                      mediante:
                    </p>

                    <ol className='pl-5'>
                      <li>
                        <p>
                          1. Avviso scritto da inviare con lettera semplice/
                          fax/ e-mail/ telegramma/ avviso pubblicato sulla
                          rivista Esperia agli associati, almeno 10 giorni prima
                          di quello fissato per l'adunanza,
                        </p>
                      </li>

                      <li>
                        <p>
                          2. Avviso affisso nei locali della Sede almeno 20
                          giorni prima,
                        </p>
                      </li>
                    </ol>
                  </li>

                  <li>
                    <p>
                      8.2. L'Assemblea dei soci è presieduta dal Presidente
                      stesso o da un suo delegato nominato tra i membri del
                      Direttivo;
                    </p>
                  </li>

                  <li>
                    <p>
                      8.3. Deve inoltre essere convocata quando il Direttivo lo
                      ritenga necessario o quando lo richiede almeno un decimo
                      dei soci;
                    </p>
                  </li>

                  <li>
                    <p>8.4. L'assemblea è organo sovrano dell'associazione;</p>
                  </li>

                  <li>
                    <p>
                      8.5. Gli avvisi di convocazione devono contenere l'ordine
                      del giorno dei lavori e la sede ove si tiene la riunione;
                    </p>
                  </li>

                  <li>
                    <p>
                      8.6 L'assemblea può essere ordinaria e straordinaria. E'
                      straordinaria l'assemblea convocata per la modifica dello
                      Statuto, la delibera del trasferimento della sede legale o
                      dello scioglimento dell'associazione. E' ordinaria in
                      tutti gli altri casi;
                    </p>
                  </li>

                  <li>
                    <p>
                      8.7. L'assemblea ordinaria è valida in prima convocazione
                      se è presente la maggioranza degli iscritti aventi diritto
                      di voto; in seconda convocazione, da tenersi in data
                      diversa dalla prima, qualunque sia il numero dei presenti;
                    </p>
                  </li>

                  <li>
                    <p>8.8. Competenze inderogabili dell'assemblea</p>

                    <ol className='pl-5'>
                      <li>
                        <p>
                          a) Nomina e revoca i componenti degli organi sociali;
                        </p>
                      </li>

                      <li>
                        <p>
                          b) Nomina e revoca, quando previsto, il soggetto
                          incaricato della revisione legale dei conti;
                        </p>
                      </li>

                      <li>
                        <p>c) Approva il bilancio;</p>
                      </li>

                      <li>
                        <p>
                          d) Delibera sulla responsabilità' dei componenti degli
                          organi sociali e promuove azione di responsabilità'
                          nei loro confronti;
                        </p>
                      </li>

                      <li>
                        <p>
                          e) Delibera sull'esclusione degli associati, se l'atto
                          costitutivo o lo statuto non attribuiscono la relativa
                          competenza ad altro organo eletto dalla medesima;
                        </p>
                      </li>

                      <li>
                        <p>
                          f) Approva l'eventuale regolamento dei lavori
                          assembleari;
                        </p>
                      </li>

                      <li>
                        <p>
                          g) Delibera sugli altri oggetti attribuiti dalla
                          legge, dall'atto costitutivo o dallo statuto alla sua
                          competenza.
                        </p>
                      </li>

                      <li>
                        <p>
                          h) Determina l’importo della quota sociale di
                          adesione;
                        </p>
                      </li>

                      <li>
                        <p>
                          i) Approva il programma annuale dell’associazione.
                        </p>
                      </li>
                    </ol>
                  </li>

                  <li>
                    <p>
                      8.9. Le deliberazioni dell'assemblea ordinaria vengono
                      prese a maggioranza dei presenti e rappresentati per
                      delega, sono espresse con voto palese, tranne quelle su
                      problemi riguardanti le persone e la qualità delle persone
                      o nei casi in cui l'assemblea lo ritenga opportuno;
                    </p>
                  </li>

                  <li>
                    <p>
                      8.10 Ogni socio ha diritto di esprimere un solo voto e può
                      presentare tre deleghe in sostituzione di un socio non
                      amministratore;
                    </p>
                  </li>

                  <li>
                    <p>
                      8.11. Le discussioni e le deliberazioni dell'assemblea
                      ordinaria e straordinaria sono riassunte in un verbale che
                      viene redatto dal segretario o da un componente
                      dell'assemblea appositamente nominato. Il verbale viene
                      sottoscritto dal Presidente e dall'estensore ed è
                      trascritto su apposito registro, conservato a cura del
                      Segretario nella sede dell'associazione;
                    </p>
                  </li>

                  <li>
                    <p>
                      8.12. Ogni socio ha diritto di consultare i verbali delle
                      sedute e chiederne una copia con modalità definita da un
                      verbale del Consiglio direttivo;
                    </p>
                  </li>

                  <li>
                    <p>
                      8.13 Spetta alla competenza dell'assemblea straordinaria
                      la delibera delle seguenti questioni:
                    </p>

                    <ol className='pl-5'>
                      <li>
                        <p>
                          1. Approvazione di eventuali modifiche allo Statuto
                          con la presenza di 2/3 dei soci e con decisione
                          deliberata maggioranza dei presenti;
                        </p>
                      </li>

                      <li>
                        <p>
                          2. Scioglimento dell'associazione e devoluzione del
                          patrimonio residuo, col voto favorevole di 3/4 dei
                          soci.
                        </p>
                      </li>
                    </ol>
                  </li>

                  <li>
                    <p>
                      8.14 Hanno diritto di partecipare alle assemblee, di
                      votare e di essere eletti, tutti i soci iscritti, purché
                      in regola con il pagamento della quota.
                    </p>
                  </li>
                </ol>
              </div>
            </li>

            {/* Art. 9 */}
            <li>
              <div className='mb-6'>
                <h3 className='font-bold text-lg'>
                  Art.9 - Il Consiglio Direttivo
                </h3>
                <p>
                  Il potere di rappresentanza attribuito agli amministratori è
                  generale. Le limitazioni del potere di rappresentanza non sono
                  opponibili ai terzi se non iscritte nel Registro unico
                  nazionale del Terzo settore o se non si prova che i terzi ne
                  erano a conoscenza.
                </p>

                <ol>
                  <li>
                    <p>
                      9.1. L'associazione è amministrata da un Consiglio
                      Direttivo eletto dall'assemblea e composto da tre a nove
                      membri. La maggioranza degli amministratori è scelta fra
                      le persone fisiche associate;
                    </p>
                  </li>

                  <li>
                    <p>
                      9.2. La convocazione del Consiglio Direttivo è decisa dal
                      Presidente o richiesta e automaticamente convocata da un
                      terzo dei membri del Consiglio Direttivo stesso;
                    </p>
                  </li>

                  <li>
                    <p>
                      9.3. Le delibere devono essere assunte con il voto della
                      maggioranza assoluta dei presenti;
                    </p>
                  </li>

                  <li>
                    <p>9.4. Il Consiglio Direttivo:</p>

                    <ol className='pl-5'>
                      <li>
                        <p>
                          1. Compie tutti gli atti di ordinaria e straordinaria
                          amministrazione;
                        </p>
                      </li>

                      <li>
                        <p>
                          2. Redige e presenta all'assemblea il rapporto annuale
                          sulle attività dell'associazione;
                        </p>
                      </li>

                      <li>
                        <p>
                          3. Redige e presenta all'assemblea il rendiconto
                          economico finanziario consuntivo ed il bilancio
                          preventivo;
                        </p>
                      </li>

                      <li>
                        <p>4. Ammette i nuovi soci;</p>
                      </li>

                      <li>
                        <p>
                          5. Esclude i soci salva successiva ratifica
                          dell'assemblea.
                        </p>
                      </li>
                    </ol>
                  </li>

                  <li>
                    <p>
                      9.5. Le riunioni del Consiglio Direttivo sono legalmente
                      costituite quando è presente la maggioranza dei suoi
                      componenti;
                    </p>
                  </li>

                  <li>
                    <p>
                      9.6. Nell'ambito del Consiglio Direttivo sono previste
                      almeno le seguenti figure:
                    </p>

                    <ol className='pl-5'>
                      <li>
                        <p>
                          1. Il Presidente (eletto nell’ambito del Consiglio
                          Direttivo stesso),
                        </p>
                      </li>

                      <li>
                        <p>
                          2. Il Vice Presidente (eletto nell'ambito del
                          Consiglio Direttivo stesso),
                        </p>
                      </li>

                      <li>
                        <p>
                          3. Il Segretario (eletto nell'ambito del Consiglio
                          Direttivo stesso).
                        </p>
                      </li>
                    </ol>
                  </li>
                </ol>
              </div>
            </li>

            {/* Art. 10 */}
            <li>
              <div className='mb-6'>
                <h3 className='font-bold text-lg'>Art.10 - Il Presidente</h3>

                <ol>
                  <li>
                    <p>
                      10.1. Il Presidente ha la legale rappresentanza
                      dell'Associazione, provvede alla convocazione
                      dell'assemblea dei soci e del Consiglio Direttivo e li
                      presiede.
                    </p>
                  </li>
                </ol>
              </div>
            </li>

            {/* Art. 11 */}
            <li>
              <div className='mb-6'>
                <h3 className='font-bold text-lg'>
                  Art.11 - Il Vice Presidente
                </h3>

                <ol>
                  <li>
                    11.1. Il Vice Presidente sostituisce il Presidente in caso
                    di assenza o di legittimo impedimento.
                  </li>
                </ol>
              </div>
            </li>

            {/* Art. 12 */}
            <li>
              <div className='mb-6'>
                <h3 className='font-bold text-lg'>Art.12 - Il Segretario</h3>

                <ol>
                  <li>
                    <p>
                      12.1. Il Segretario redige i verbali delle riunioni,
                      conserva i libri sociali e contabili, provvede alle spese
                      da pagarsi su mandato del Consiglio Direttivo, provvede
                      alla riscossione delle quote sociali, dà esecuzione alle
                      deliberazioni del Consiglio Direttivo, compie le mansioni
                      delegate dal Presidente.
                    </p>
                  </li>
                </ol>
              </div>
            </li>

            {/* Art. 13 */}
            <li>
              <div className='mb-6'>
                <h3 className='font-bold text-lg'>
                  Art.13 – Collegio dei Revisori dei Conti
                </h3>

                <ol>
                  <li>
                    <p>
                      13.1. Il Collegio dei Revisori dei Conti viene eletto
                      dall’Assemblea ed è composto da tre membri effettivi e due
                      supplenti, anche fra i non soci. Resta in carica tre anni
                      ed elegge al proprio interno il Presidente.
                    </p>
                  </li>

                  <li>
                    <p>
                      13.2. Il Collegio dei Revisori dei Conti deve controllare
                      l’amministrazione dell’Associazione, la corrispondenza del
                      bilancio alle scritture contabili e vigilare sul rispetto
                      dello Statuto.
                    </p>
                  </li>

                  <li>
                    <p>
                      13.3. Partecipa alle riunioni del Consiglio Direttivo e
                      alle Assemblee, senza diritto di voto, ove presenta la
                      propria relazione annuale in tema di rendiconto economico
                      e finanziario.
                    </p>
                  </li>
                </ol>
              </div>
            </li>

            {/* Art. 14 */}
            <li>
              <div className='mb-6'>
                <h3 className='font-bold text-lg'>
                  Art. 14 - Collegio dei probiviri
                </h3>

                <ol>
                  <li>
                    <p>
                      14.1. Il Collegio dei Probiviri è composto da tre soci
                      eletti dall'Assemblea e resta in carica per tre anni. La
                      carica di Probiviro è incompatibile con qualsiasi altra
                      carica all’interno dell’associazione;
                    </p>
                  </li>

                  <li>
                    <p>
                      14.2. Il Collegio dei Probiviri è responsabile del
                      rispetto del regolamento dell'Assemblea, applica le
                      sanzioni per le relative violazioni e in generale svolge
                      funzioni di arbitrato tra le varie componenti
                      dell'Associazione;
                    </p>
                  </li>

                  <li>
                    <p>Spetta in particolare al Collegio dei Probiviri: </p>

                    <ol className='pl-5'>
                      <li>
                        <p>
                          1. Decidere in merito ai provvedimenti disciplinari
                          posti in essere dal consiglio Direttivo, con
                          particolare riferimento alla mancata ammissione del
                          socio, o all’espulsione di esso,
                        </p>
                      </li>

                      <li>
                        <p>
                          2. Arbitrare in merito alle vertenze sorte nell'ambito
                          dell'Associazione e che interessino uno o più soci,
                        </p>
                      </li>

                      <li>
                        <p>
                          3. Controllare il corretto funzionamento
                          dell'Associazione, nonché il rispetto, da parte delle
                          cariche elette, delle norme statutarie. Per perseguire
                          questo fine, il Collegio dei Probiviri può chiedere
                          informazioni riguardanti il loro operato agli altri
                          organi dell'Associazione o ai soci eletti o delegati a
                          compiere particolari funzioni per l'Associazione
                          singolarmente. Il Collegio dei Probiviri risponde di
                          fronte all'Assemblea Generale di tutti i suoi atti,
                        </p>
                      </li>

                      <li>
                        <p>
                          4. Dirimere vertenze e questioni sollevate da uno o
                          più soci riguardanti la corretta interpretazione dello
                          Statuto e dei suoi principi.
                        </p>
                      </li>
                    </ol>
                  </li>
                </ol>
              </div>
            </li>

            {/* Art. 15 */}
            <li>
              <div className='mb-6'>
                <h3 className='font-bold text-lg'>
                  Art.15 - I mezzi finanziari
                </h3>

                <ol>
                  <li>
                    <p>
                      15.1. L’associazione trae le risorse economiche per il
                      proprio funzionamento e per lo svolgimento delle attività
                      da:
                    </p>
                    <ol className='pl-5'>
                      <li>
                        <p>
                          a) quote e contributi degli associati, nella misura
                          decisa annualmente dal Consiglio Direttivo e
                          ratificata dall'assemblea;
                        </p>
                      </li>

                      <li>
                        <p>b) eredità, donazioni e legati;</p>
                      </li>

                      <li>
                        <p>
                          c) contributi dello Stato, delle regioni, di enti
                          locali, di enti o di istituzioni pubbliche, anche
                          finalizzati al sostegno di specifici e documentati
                          programmi realizzati nell’ambito dei fini statutari;
                        </p>
                      </li>

                      <li>
                        <p>
                          d) contributi dell’Unione Europea e di organismi
                          internazionali;
                        </p>
                      </li>

                      <li>
                        <p>
                          e) entrate derivanti da prestazioni di servizi
                          convenzionati;
                        </p>
                      </li>

                      <li>
                        <p>
                          f) proventi delle cessioni di beni e servizi agli
                          associati e a terzi, anche attraverso lo svolgimento
                          di attività economiche di natura commerciale,
                          artigianale o agricola, svolte in maniera ausiliaria e
                          sussidiaria e comunque finalizzate al raggiungimento
                          degli obiettivi istituzionali;
                        </p>
                      </li>

                      <li>
                        <p>
                          g) erogazioni liberali degli associati e dei terzi;
                        </p>
                      </li>

                      <li>
                        <p>
                          h) entrate derivanti da iniziative promozionali
                          finalizzate al proprio finanziamento, quali feste e
                          sottoscrizioni anche a premi;
                        </p>
                      </li>

                      <li>
                        <p>
                          i) altre entrate compatibili con le finalità sociali
                          dell’associazionismo di promozione sociale.
                        </p>
                      </li>
                    </ol>
                  </li>

                  <li>
                    <p>
                      15.2. L’associazione è tenuta, per il periodo di tempo
                      previsto dalla normativa vigente, alla conservazione della
                      documentazione, con l’indicazione dei soggetti eroganti,
                      relativa alle risorse economiche derivanti da eredità,
                      donazioni e legati, contributi dello Stato, delle regioni,
                      di enti locali, di enti o di istituzioni pubblici, anche
                      finalizzati al sostegno di specifici e documentati
                      programmi realizzati nell’ambito dei fini statutari,
                      contributi dell’Unione europea e di organismi
                      internazionali, entrate derivanti da prestazioni di
                      servizi convenzionati, nonché, per le erogazioni liberali
                      degli associati e dei terzi della documentazione relativa
                      alle erogazioni liberali se finalizzate alle detrazioni di
                      imposta e alle deduzioni dal reddito imponibile.
                    </p>
                  </li>
                </ol>
              </div>
            </li>

            {/* Art. 16 */}
            <li>
              <div className='mb-6'>
                <h3 className='font-bold text-lg'>
                  Art.16 - Rendiconto economico finanziario
                </h3>

                <ol>
                  <li>
                    <p>
                      16.1. L’esercizio sociale va dal primo marzo al 28
                      febbraio di ogni anno;
                    </p>
                  </li>

                  <li>
                    <p>
                      16.2. Il rendiconto economico finanziario viene
                      predisposto dal Consiglio direttivo, viene depositato
                      presso la sede dell'associazione almeno 20 giorni prima
                      dell'assemblea e può essere consultato da ogni associato;
                    </p>
                  </li>

                  <li>
                    <p>
                      16.3. L'assemblea di approvazione del rendiconto economico
                      finanziario consuntivo deve tenersi entro quattro mesi
                      dalla chiusura dell'esercizio sociale, salvi casi
                      eccezionali in ricorrenza dei quali può essere deliberato
                      entro e non oltre sei mesi;
                    </p>
                  </li>

                  <li>
                    <p>
                      16.4. Il patrimonio dell’associazione, comprensivo di
                      eventuali ricavi, rendite, proventi, entrate comunque
                      denominate è utilizzato per lo svolgimento delle attività
                      statutaria ai fini dell’esclusivo perseguimento di
                      finalità civiche, solidaristiche e di utilità sociale.
                      L’eventuale avanzo di gestione deve essere destinato a
                      favore delle attività istituzionali statutariamente
                      previste;
                    </p>
                  </li>

                  <li>
                    <p>
                      16.5. E’ in ogni caso vietato distribuire, anche in modo
                      indiretto, utili, avanzi di gestione, riserve o capitale
                      durante la vita dell’associazione.
                    </p>
                  </li>
                </ol>
              </div>
            </li>

            {/* Art. 17 */}
            <li>
              <div className='mb-6'>
                <h3 className='font-bold text-lg'>
                  Art.17 – Scioglimento o estinzione
                </h3>

                <ol>
                  <li>
                    <p>
                      17.1. Per deliberare lo scioglimento dell'associazione e
                      la devoluzione del patrimonio occorre il voto favorevole
                      di almeno i tre quarti degli associati convocati in
                      assemblea straordinaria;
                    </p>
                  </li>

                  <li>
                    <p>
                      17.2. L'assemblea che delibera lo scioglimento/estinzione
                      dell'associazione nomina uno o più liquidatori;
                    </p>
                  </li>

                  <li>
                    <p>
                      17.3. Il patrimonio residuo è devoluto, previo parere
                      positivo dell’Ufficio di cui all’articolo 45, comma 1, e
                      salva diversa destinazione imposta dalla legge, ad altri
                      enti del Terzo settore secondo le destinazioni statutarie
                      o dell’organo competente o, in mancanza, alla Fondazione
                      Italia Sociale.
                    </p>
                  </li>
                </ol>
              </div>
            </li>

            {/* Art. 18 */}
            <li>
              <div className='mb-6'>
                <h3 className='font-bold text-lg'>Art. 18 - Controversie</h3>
                <ol>
                  <li>
                    <p>
                      18.1. Tutte le eventuali controversie relative al rapporto
                      associativo sono rimesse al Collegio dei Probiviri, con
                      esclusione di ogni altra giurisdizione;
                    </p>
                  </li>

                  <li>
                    <p>
                      18.2. L’associazione o gli associati possono proporre
                      ricorso al Collegio dei Probiviri entro trenta giorni
                      dalla comunicazione o dalla conoscenza dell’atto che
                      determina la controversia;
                    </p>
                  </li>

                  <li>
                    <p>
                      18.3. Il Collegio dei Probiviri decide ex bono et aequo,
                      con dispensa di ogni formalità e dopo aver sentito le
                      parti interessate;
                    </p>
                  </li>

                  <li>
                    <p>
                      18.4. La decisione del Collegio dei Probiviri è
                      inappellabile e deve essere comunicata alle parti
                      interessate mediante lettera raccomandata non oltre venti
                      giorni dalla data in cui è stata adottata.
                    </p>
                  </li>
                </ol>
              </div>
            </li>

            {/* Art. 19 */}
            <li>
              <div className='mb-6'>
                <h3 className='font-bold text-lg'>Art. 19 - Norma di rinvio</h3>
                <p>
                  Per quanto non è previsto nel presente statuto si fa
                  riferimento alle norme vigenti in materia ed ai principi
                  generali dell’ordinamento giuridico.
                </p>
              </div>
            </li>
          </ol>

          {/* Firma */}
          <div className="dark:text-gray-200">
            <p>Associazione Ex Allievi dell’ITIS P.Paleocapa di Bergamo</p>
            <p>Il Presidente</p>
            <p className='italic'>Alessandro Gigli</p>
            <p className='text-right'>Bergamo 21 maggio 2022</p>
            <p className='text-right'>
              Approvato dall’assemblea ordinaria del 21 maggio 2022
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default StatutoPage
