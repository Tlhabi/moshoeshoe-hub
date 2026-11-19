// Comprehensive syllabus expansion modules covering missing learning outcomes from the Revised Lesotho Syllabus
// Numerical & Mathematical (Set intersection, 5-digit place value, cubes/cuboids volume, symmetry, multiples 2-10)
// Scientific & Technological (Pan scale, rain gauge, oxygen & combustion/rust, non-infectious/infectious diseases, farm implements)
// Linguistic & Literary - Sesotho (Ngola papatso, mareho-’moka, lothana ka limela, sere sa molumo/monko/’mala, seemeli-tu)
// Linguistic & Literary - English (Dictionary use, silent letters, conjunctions, suffixes, prepositions of place)
// Creativity & Entrepreneurial (Measuring drawings, pitch/duration/volume, calligraphy signs, recycling/pricing, consumer rights)
// Social Sciences & PSS (Extended civics, ecological zones, emotional coping, financial ethics)

module.exports = [
  // ─────────────────────────────────────────────────────────────
  // 1. NUMERICAL & MATHEMATICAL (MATHS)
  // ─────────────────────────────────────────────────────────────
  {
    subjectId: 'maths',
    lesson: {
      id: 'm5_9',
      grade: 5,
      topic: { en: 'Sets and Venn Diagrams', st: 'Lihlopha le Lipontšo tsa Venn' },
      title: { en: 'Intersection and Union of Two Sets (∩ and ∪)', st: 'Kopano le Karohano ea Lihlopha (∩ le ∪)' },
      syllabusRef: 'Maths G5 LO1 & LO2',
      outcome: { en: 'Compare two sets with common members using intersection and union symbols', st: 'Bapisa lihlopha tse peli tse nang le litho tse tšoanang u sebelisa matšoao a ∩ le ∪' },
      source: 'Revised Lesotho Primary Syllabus (Page 57 LO1)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'In mathematics, a set is a collection of distinct objects or numbers. The intersection symbol (∩) represents elements that belong to BOTH sets at the same time. The union symbol (∪) combines ALL elements from both sets together into one single collection.',
            st: 'Lipalong, sehlopha (set) ke pokello ea lintho kapa linomoro tse nang le litšobotsi tse tšoanang. Letšoao la intersection (∩) le emela litho tse fumanehang lihlopheng ka bobeli ka nako e le ’ngoe. Letšoao la union (∪) le kopanya litho tsohle tsa lihlopha tseo ka bobeli.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Draw two overlapping circles on the board: Put animals that live on land in circle A and animals that swim in circle B. Frogs and ducks sit right in the intersection (A ∩ B)!',
            st: 'Tšoantša maselika-likoe a mabeli a pharisanang letlapeng: Beha liphoofolo tsa naha ho A le tsa metsi ho B. Liqhoqha le matata li lula hantle bohareng ba intersection (A ∩ B)!'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'If Set A = {2, 4, 6, 8} and Set B = {4, 8, 12}, what is the intersection Set A ∩ B?',
            st: 'Haeba Sehlopha A = {2, 4, 6, 8} le Sehlopha B = {4, 8, 12}, litho tsa A ∩ B ke life?',
            sn: 'Linomoro tse fumanehang ho A le B ka bobeli ke 4 le 8.'
          },
          options: [
            { en: '{4, 8}', st: '{4, 8}' },
            { en: '{2, 6, 12}', st: '{2, 6, 12}' },
            { en: '{2, 4, 6, 8, 12}', st: '{2, 4, 6, 8, 12}' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'maths',
    lesson: {
      id: 'm5_10',
      grade: 5,
      topic: { en: '5-Digit Place Value', st: 'Boleng ba Boemo ba Linomoro tsa Mashome a Likete' },
      title: { en: 'Understanding 5-Digit Numbers and Place Value up to 99,999', st: 'Ho Utloisisa Linomoro tsa Boemo bo Fetang 10,000' },
      syllabusRef: 'Maths G5 LO3 & LO4',
      outcome: { en: 'Demonstrate place value in 5-digit numbers using meaningful contexts and add with carrying', st: 'Bontša kutloisiso ea boleng ba boemo ba linomoro tsa linomoro tse 5 le ho kopanya ho tšelelang pele' },
      source: 'Revised Lesotho Primary Syllabus (Page 57 LO3)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'In a 5-digit number like 48,265, each digit holds a distinct place value: 4 is in the Ten-Thousands place (40,000), 8 is in the Thousands place (8,000), 2 is in the Hundreds place (200), 6 is in the Tens place (60), and 5 is in the Units place (5).',
            st: 'Nomorong ea linomoro tse 5 joaloka 48,265, nomoro ka ’ngoe e na le boemo ba eona bo ikhethang: 4 e emela Mashome a Likete (40,000), 8 e emela Likete (8,000), 2 e emela Makholo (200), 6 e emela Mashome (60), ’me 5 e emela Metso (5).'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Relate 5-digit numbers to census populations of Lesotho district towns like Teyateyaneng (~25,000 residents) or Butha-Buthe.',
            st: 'Bapisang linomoro tsena le palo ea batho litoropong tsa litereke tsa Lesotho tse kang Teyateyaneng le Butha-Buthe.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'In the number 75,342, what is the exact place value of the underlined digit 7?',
            st: 'Nomorong ea 75,342, boleng ba boemo ba nomoro ea 7 ke bofe?',
            sn: '7 e lutse boemong ba mashome a likete (Ten-Thousands), kahoo boleng ba eona ke 70,000.'
          },
          options: [
            { en: '70,000 (Ten-Thousands)', st: '70,000 (Mashome a Likete)' },
            { en: '7,000 (Thousands)', st: '7,000 (Likete)' },
            { en: '700 (Hundreds)', st: '700 (Makholo)' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'maths',
    lesson: {
      id: 'm5_11',
      grade: 5,
      topic: { en: 'Volume and 3D Space', st: 'Sebaka sa Ntho e Phelang (Cube & Cuboid)' },
      title: { en: 'Volume of Cubes and Cuboids (Length × Width × Height)', st: 'Bophara le Sebaka sa Cube le Cuboid' },
      syllabusRef: 'Maths G5 LO16 & LO17',
      outcome: { en: 'Describe the volume of cubes and cuboids in terms of space occupied', st: 'Hlalosa sebaka le bophahamo bo lutseng ba cube le cuboid' },
      source: 'Revised Lesotho Primary Syllabus (Page 57 LO17)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'A cube has 6 equal square faces where length, width, and height are identical. A cuboid (like a brick or textbook box) has rectangular faces. We calculate the volume of space inside using: Volume = Length × Width × Height. It is measured in cubic units like cm³ or m³.',
            st: 'Cube e na le lifahleho tse 6 tsa lisekwere tse lekanang hantle moo bolelele, bophara, le bophahamo li tšoanang. Cuboid (joaloka setene kapa lebokose la libuka) e na le lifahleho tsa khutlonne. Bophahamo bo baloa e le: Bolelele × Bophara × Bophahamo (cm³).'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Stack 1 cm unit sugar cubes or matchboxes inside a carton box to visually demonstrate how layers multiply.',
            st: 'Behang mabokosana a mollo ka mekhahlelo ka har\'a lebokose ho bontša kamoo bophahamo bo atisoang kateng.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'A storage box has length = 5 cm, width = 3 cm, and height = 2 cm. What is its total volume?',
            st: 'Lebokose la polokelo le na le bolelele = 5 cm, bophara = 3 cm, le bophahamo = 2 cm. Bophahamo ba lona kaofela ke bokae?',
            sn: 'Bala: 5 × 3 = 15, ebe 15 × 2 = 30 cubic centimetres (cm³).'
          },
          options: [
            { en: '30 cm³', st: '30 cm³' },
            { en: '10 cm³', st: '10 cm³' },
            { en: '25 cm³', st: '25 cm³' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'maths',
    lesson: {
      id: 'm5_12',
      grade: 5,
      topic: { en: 'Symmetry in Nature & Design', st: 'Tekano ea Lithoko le Mehala ea Symmetry' },
      title: { en: 'Lines of Symmetry and Reflections in Lesotho Art', st: 'Mehala ea Tekano le Bonono ba Litema' },
      syllabusRef: 'Maths G5 LO19 & LO20',
      outcome: { en: 'Find lines of symmetry in objects and create symmetrical reflected designs', st: 'Fumana mehala ea symmetry le ho rala mehlala e tšoanang ka ho itšoantša' },
      source: 'Revised Lesotho Primary Syllabus (Page 57 LO20)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'A line of symmetry divides a shape into two identical mirror halves that match perfectly when folded along the line. Symmetrical balance is a core principle in traditional Basotho mokorotlo hats, butterfly wings, and engraved litema walls.',
            st: 'Mola oa symmetry o arola sebopeho ka likarolo tse peli tse lekanang hantle joaloka seipone ha u se mena. Tekano ena ke motheo oa bohlokoa katibeng ea Mokorotlo, mapheong a serurubele, le mekhabisong ea Litema maboteng a Sesotho.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Fold paper cutouts of a leaf, a butterfly, and a square in half to check if both sides align with zero overhang.',
            st: 'Mena pampiri e seiloeng joaloka lekhese kapa serurubele ho bona hore na mahlakore a koahelana hantle ntle le masala.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'How many lines of symmetry does a regular geometric square have?',
            st: 'Sekwere sa thuto ea linomoro se na le mehala e mekae ea symmetry e arolang ka ho lekana hantle?',
            sn: 'Sekwere se ka menoa ka holimo ho ea tlase, ka ho le letšehali ho ea ho le letona, le ka litlhoro ka bobeli (diagonals), e leng mehala e 4.'
          },
          options: [
            { en: '4 lines of symmetry', st: 'Mehala e 4 ea symmetry' },
            { en: '2 lines of symmetry', st: 'Mehala e 2 ea symmetry' },
            { en: '1 line of symmetry', st: 'Mola o le 1 feela' }
          ],
          answer: 0
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────
  // 2. SCIENTIFIC & TECHNOLOGICAL (SCIENCE)
  // ─────────────────────────────────────────────────────────────
  {
    subjectId: 'science',
    lesson: {
      id: 's5_8',
      grade: 5,
      topic: { en: 'Chemistry of Gases', st: 'Khemistri ea Meea (Gases)' },
      title: { en: 'Oxygen Supports Burning, Animal Life, and Causes Rust', st: 'Oksijene e Tšehetsa Bophelo, Mollo, le ho Baka Mafome' },
      syllabusRef: 'Science G5 LO6',
      outcome: { en: 'Demonstrate scientifically that oxygen supports burning, human respiration, and causes iron to rust', st: 'Bontša ka saense hore oksijene e hlokahala bakeng sa ho tuka, bophelo, le ho etsa mafome tšepeng' },
      source: 'Revised Lesotho Primary Syllabus (Page 81 LO6)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Oxygen makes up approximately 21% of our air. Without oxygen, animals and humans cannot respire to release energy from food. Fires cannot burn without oxygen; if you cover a candle with a glass jar, the flame dies once the oxygen inside is consumed. Furthermore, oxygen reacting with wet iron causes red rust.',
            st: 'Oksijene e etsa karolo ea 21% ea moea oo re o hemang. Ntle le oksijene, batho le liphoofolo ba ke ke ba phela. Mollo o ke ke oa tuka ntle le oksijene; haeba o koahela kandelese ka khalase, lekhese lea tima ha oksijene e fela. Hape oksijene e kopanang le metsi tšepeng e baka mafome a mafubelu.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Teacher demonstration: Invert a clean glass jar over a small burning candle resting in water to show how water rises as oxygen burns out.',
            st: 'Koahela kandelese e tukang ka har\'a setshelo sa metsi ka khalase ho bontša kamoo lelakabe le timang ha oksijene e fela.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'Why does an iron spade or nail left outside in the rain begin to develop reddish-brown rust?',
            st: 'Hobaneng ha kharafu kapa sepekere se siiloeng pula e na se qala ho ba le mafome a bosootho?',
            sn: 'Mafome a etsahala ha tšepe e kopana le oksijene e moeeng le mongobo oa metsi a pula.'
          },
          options: [
            { en: 'Chemical reaction between iron, oxygen in air, and water', st: 'Karabelo ea khemistri ea tšepe le oksijene moeeng le metsi' },
            { en: 'The spade gets too cold at night', st: 'Kharafu e batang haholo bosiu' },
            { en: 'Birds walking on the spade', st: 'Linonyana tse lulang holim\'a eona' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'science',
    lesson: {
      id: 's5_9',
      grade: 5,
      topic: { en: 'Infectious & Non-Infectious Diseases', st: 'Maloetse a Tšoaetsanang le a sa Tšoaetsaneng' },
      title: { en: 'Infectious vs. Non-Infectious Diseases in Lesotho', st: 'Maloetse a Tšoaetsanoang le a sa Tšoaetsanoeng' },
      syllabusRef: 'Science G5 LO11 & LO12',
      outcome: { en: 'Differentiate between infectious (flu, TB) and non-infectious diseases (diabetes, kwashiorkor)', st: 'Khaohanya maloetse a tšoaetsanang le a sa tšoaetsaneng sechabeng' },
      source: 'Revised Lesotho Primary Syllabus (Page 81 LO11-12)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Infectious diseases are caused by germs (bacteria, viruses) and spread from one sick person to another through coughing, contaminated water, or touch (e.g., Influenza, Tuberculosis, Cholera). Non-infectious diseases cannot spread between people; they are caused by poor nutrition or genetics (e.g., Kwashiorkor, High Blood Pressure).',
            st: 'Maloetse a tšoaetsanang a bakoa ke likokoana-hloko ’me a fetela ho motho e mong ka ho khohlela, metsi a litšila kapa ho tšoarana (mohlala: Mooko, TB, Khokhotsane). Maloetse a sa tšoaetsaneng a ke ke a tšoaetsana; a bakoa ke khaello ea lijo kapa lefutso (mohlala: Kwashiorkor, Suka).'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Teach the cough etiquette: Cough into your elbow or tissue rather than into open air or your palms.',
            st: 'Rutang mekhoa ea ho khohlela ka sephakeng kapa sakatukeng ho thibela likokoana-hloko moeeng.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'Which of the following is an infectious disease that can spread from person to person through air droplets?',
            st: 'Har\'a tse latelang, ke lefu lefe le tšoaetsanang le fetang ka moea ha motho a khohlela?',
            sn: 'TB (Tuberculosis) ke lefu le tšoaetsanang ka likokoana-hloko tse phallang moeeng.'
          },
          options: [
            { en: 'Tuberculosis (TB)', st: 'Tuberculosis (TB)' },
            { en: 'Kwashiorkor (protein deficiency)', st: 'Kwashiorkor (khaello ea lijo)' },
            { en: 'Broken bone', st: 'Lerapo le robehileng' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'science',
    lesson: {
      id: 's5_10',
      grade: 5,
      topic: { en: 'Agricultural Science & Tools', st: 'Theknoloji ea Temo le Lisebelisoa tsa Masimo' },
      title: { en: 'Safe Use and Maintenance of Farm Implements', st: 'Tšebeliso le Tlhokomelo ea Lisebelisoa tsa Temo' },
      syllabusRef: 'Science G5 LO25',
      outcome: { en: 'Describe the functions and proper maintenance of traditional and modern farm implements', st: 'Hlalosa mesebetsi le tlhokomelo e nepahetseng ea lisebelisoa tsa temo' },
      source: 'Revised Lesotho Primary Syllabus (Page 81 LO25)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Basotho farmers rely on implements to produce food: Ploughs (mehoma) turn and aerate soil, hoes (liharafo) remove weeds, and sickles (lisekele) harvest wheat and sorghum. To prevent rusting, tools must be washed of damp soil, dried, wiped with grease or oil, and stored safely away from children.',
            st: 'Balemi ba Basotho ba itšetlehile ka lisebelisoa ho lema lijo: Mehoma e lema le ho phethola mobu, liharafo li hlaola mofoka, ’me lisekele li seha mabele le koro. Ho thibela mafome, thepa e lokela ho hlatsoa seretse, e omisoe, e tlotsitsoe oli, ’me e bolokoe ka polokeho.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Demonstrate how wiping oil onto a rusty garden trowel creates a water barrier.',
            st: 'Bontšang kamoo ho tlotsa oli holim\'a sesebelisoa sa tšepe ho thibelang metsi le mafome.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'What crucial maintenance step must a farmer take after using an iron hoe in wet muddy fields?',
            st: 'Ke mohato ofe oa bohlokoa oa tlhokomelo oo molemi a lokelang ho o nka kamora ho lema seretseng ka mohoma kapa harafo?',
            sn: 'Ho hloekisa seretse, ho omisa le ho tlotsa oli ho thibela mafome a senyang tšepe.'
          },
          options: [
            { en: 'Clean off mud, dry completely, and wipe with protective oil', st: 'Tlosa seretse, e omise, ebe o e tlotsa oli e sireletsang' },
            { en: 'Leave it buried in wet mud outdoors all winter', st: 'E siee e patiloe seretseng mariha ohle' },
            { en: 'Submerge it in salt water overnight', st: 'E inele ka metsing a letswai' }
          ],
          answer: 0
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────
  // 3. LINGUISTIC & LITERARY - SESOTHO
  // ─────────────────────────────────────────────────────────────
  {
    subjectId: 'sesotho',
    lesson: {
      id: 'so5_7',
      grade: 5,
      topic: { en: 'Writing Advertisements (Papatso)', st: 'Ho Ngola Papatso ea Khoebo' },
      title: { en: 'Ho Ngola Papatso e Hohelang Bareki (Writing an Advertisement)', st: 'Ho Ngola Papatso e Hohelang Bareki' },
      syllabusRef: 'Sesotho G5 LO5',
      outcome: { en: 'Draft an effective commercial advertisement in Sesotho with title, benefits, and price', st: 'Ngola papatso e kholisang le ho hohela bareki ka Sesotho' },
      source: 'Revised Lesotho Primary Syllabus (Page 1 LO5)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Papatso ke mofuta oa mongolo o tsebisang sechaba ka thepa kapa tšebeletso e rekisoang. E hloka Sehlooho se seholo se khahlang mahlo, Tlhaloso ea boleng le molemo oa thepa (hore na e fapana joang le tse ling), Theko e hlakileng ka Maloti, le Moo e ka rekoang teng.',
            st: 'Papatso ke mofuta oa mongolo o tsebisang sechaba ka thepa kapa tšebeletso e rekisoang. E hloka: 1. Sehlooho se seholo se khahlang mahlo. 2. Tlhaloso ea boleng le molemo oa thepa. 3. Theko e hlakileng ka Maloti. 4. Sebaka kapa nomoro ea mohala moo moreki a ka fumanang thepa teng.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Have learners design a mini-poster advertising fresh farm eggs or handwoven grass baskets.',
            st: 'Etsang hore baithuti ba rale pampiri e khutšoanyane e phatlalatsang mahe a likhoho tsa Sesotho kapa seroto sa mosea.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'Ke taba efe ea bohlokoa e lokelang ho ba teng ka hara papatso ea thekiso ea makoenya e le hore moreki a tsebe ho reka?',
            st: 'Ke taba efe ea bohlokoa e lokelang ho ba teng ka hara papatso ea thekiso ea makoenya e le hore moreki a tsebe ho reka?',
            sn: 'Theko le sebaka sa thekiso li bohlokoa hore moreki a tsebe ho fihla le ho itokisetsa chelete.'
          },
          options: [
            { en: 'Theko ea lekoenya ka Maloti le sebaka sa setala', st: 'Theko ea lekoenya ka Maloti le sebaka sa setala' },
            { en: 'Mabitso a bo-ntate-moholo ba morekisi', st: 'Mabitso a bo-ntate-moholo ba morekisi' },
            { en: 'Lefatshe lohle le buang ka linonyana', st: 'Litaba tse sa amaneng le lijo' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'sesotho',
    lesson: {
      id: 'so5_8',
      grade: 5,
      topic: { en: 'Sesotho Grammar: Sound, Smell, Colour Words', st: 'Mareho le Masere a Sesotho' },
      title: { en: 'Masere a Bontšang Molumo, Monko, le ’Mala (Idiophones)', st: 'Masere a Bontšang Molumo, Monko, le ’Mala' },
      syllabusRef: 'Sesotho G5 LO27 & LO29',
      outcome: { en: 'Use descriptive idiophones (sere) and collective nouns (mareho-’moka) correctly', st: 'Sebelisa masere a hlalosang molumo, monko le ’mala le mareho-’moka ka nepo' },
      source: 'Revised Lesotho Primary Syllabus (Page 2 LO27)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Sere ke lentsoe le ikhethileng la Sesotho le takang setšoantšo ka molumo kapa pono: "Ho re tu!" (khutsa ho se modumo), "Ho re phuu!" (monko o phallang), "Ho re thiri!" (ho thula ka thata), "Ho re qhoo!" (ho tšela metsi hang). Mareho-’moka a hlalosa lihlopha: mohlape oa likhomo, sehlopha sa linonyana.',
            st: 'Sere ke lentsoe la Sesotho le takang setšoantšo se phelang sa ketso kapa maikutlo: Ho re tu! (khotso e se nang lerata), Ho re phuu! (monko o monate), Ho re thwii! (ho otloloha joaloka tsela), Ho re putla! (ho robeha ha lehong). Mareho-’moka a hlalosa pokello: Mohlape oa linku, lekoko la batho.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Ask learners to utter the idiophone for when a stone splashes into the deep Senqu river: "Pshatla!" or "Tobere!"',
            st: 'Kopang baithuti ho bua sere se utloahalang ha lejoe le oela nokeng kapa ha ho rothela marotholi a pula.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'Sere se reng "Ho re tu!" polelong ea Sesotho se bolela eng?',
            st: 'Sere se reng "Ho re tu!" polelong ea Sesotho se bolela eng?',
            sn: '"Tu!" e bontša khutso e feletseng moo ho se nang leha e le molumo o monyenyane.'
          },
          options: [
            { en: 'Ho khutsa ho felletseng ho se na lerata ho hang', st: 'Ho khutsa ho felletseng ho se na lerata ho hang' },
            { en: 'Ho matha ka lebelo le holimo', st: 'Ho matha ka lebelo le holimo' },
            { en: 'Ho fofa joaloka nonyana', st: 'Ho fofa joaloka nonyana' }
          ],
          answer: 0
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────
  // 4. LINGUISTIC & LITERARY - ENGLISH
  // ─────────────────────────────────────────────────────────────
  {
    subjectId: 'english',
    lesson: {
      id: 'e5_9',
      grade: 5,
      topic: { en: 'Dictionary & Reference Skills', st: 'Tšebeliso ea Bukana ea Mantsoe (Dictionary)' },
      title: { en: 'Using a Dictionary Effectively: Alphabetical Order & Guide Words', st: 'Ho Sebelisa Dictionary ka Makhethe' },
      syllabusRef: 'English G5 LO6',
      outcome: { en: 'Use alphabetical guide words to locate definitions, pronunciation, and parts of speech in a dictionary', st: 'Sebelisa tatellano ea alfabeta ho fumana tlhaloso le tšebeliso ea mantsoe bukeng' },
      source: 'Revised Lesotho Primary Syllabus (Page 30 LO6)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'A dictionary arranges words in strict alphabetical order from A to Z. Guide words at the very top of each page show the first and last word on that page, saving you time. A dictionary entry tells you the word\'s spelling, pronunciation, part of speech (noun, verb, adjective), and exact definition.',
            st: 'Bukana ea mantsoe (dictionary) e hlophisa mantsoe ho latela tatellano ea alfabeta ho tloha ho A ho isa ho Z. Mantsoe a tataisang (guide words) a holimo leqepheng a u bontša lentsoe la pele le la ho qetela leqepheng leo. E u fa thlahiso ea mongolo, mofuta oa lentsoe, le moelelo oa lona o hlakileng.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Race game: Call out three random words (e.g., "Blanket", "Basotho", "Breeze") and challenge students to arrange them in strict dictionary order.',
            st: 'Bapallang lebelo la ho hlophisa mantsoe a mararo ho latela tlhaku ea pele, ea bobeli le ea boraro ea alfabeta.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'Which of the following words appears FIRST in a standard English dictionary?',
            st: 'Ke lentsoe lefe har\'a a latelang le tla hlaha PELE ka hare ho dictionary ea Senyesemane?',
            sn: 'Hobane kaofela a qala ka "C", re sheba tlhaku ea bobeli: "a" e tla pele ho "e" le "o" (Cattle -> Circle -> Cloud).'
          },
          options: [
            { en: 'Cattle', st: 'Cattle' },
            { en: 'Circle', st: 'Circle' },
            { en: 'Cloud', st: 'Cloud' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'english',
    lesson: {
      id: 'e5_10',
      grade: 5,
      topic: { en: 'Phonics & Silent Letters', st: 'Litlhaku Tse Khutsitseng (Silent Letters)' },
      title: { en: 'Words with Silent Letters (Knee, Knife, Doubt, Climb)', st: 'Mantsoe a nang le Litlhaku Tse sa Buisoeng' },
      syllabusRef: 'English G5 LO17',
      outcome: { en: 'Read, spell, and pronounce words with silent letters accurately in spoken and written sentences', st: 'Bala, peleta le ho bitsa mantsoe a nang le litlhaku tse sa buisoeng ka nepo' },
      source: 'Revised Lesotho Primary Syllabus (Page 30 LO17)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'In English, some words contain letters that are written but not pronounced aloud. Examples include silent "k" in *knife*, *knee*, and *know*; silent "b" in *climb*, *comb*, and *doubt*; and silent "w" in *write* and *wrist*. Recognizing these prevents spelling mistakes.',
            st: 'Senyesemaneng, mantsoe a mang a na le litlhaku tse ngoloang empa li sa bitsoe ka lentsoe. Mohlala: tlhaku ea "k" e khutsitseng mantsoeng a kang *knife* (thipa), *knee* (lengole), le *knock* (kokota); kapa "b" e khutsitseng ho *climb* (hloa) le *comb* (kama).'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Have learners draw a "shushing finger" over silent letters in their exercise books to cement visual memory.',
            st: 'Etsang hore baithuti ba thale mola o bobebe tlas\'a tlhaku e sa bitsoeng ha ba ngola mantsoe ao.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'In the English word "KNIGHT" (a brave historical warrior), which two letters are silent when pronounced?',
            st: 'Lentsweng la Senyesemane le reng "KNIGHT", ke litlhaku life tse peli tse sa bitsoeng ha le buuoa?',
            sn: '"K" qalong le "gh" bohareng lia khutsa; le bitsoa hantle joaloka "nite".'
          },
          options: [
            { en: 'The letters "k" and "gh"', st: 'Litlhaku tsa "k" le "gh"' },
            { en: 'The letter "t" only', st: 'Tlhaku ea "t" feela' },
            { en: 'The vowel "i" only', st: 'Tlhaku ea "i" feela' }
          ],
          answer: 0
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────
  // 5. CREATIVITY & ENTREPRENEURIAL
  // ─────────────────────────────────────────────────────────────
  {
    subjectId: 'creativity',
    lesson: {
      id: 'cel5_7',
      grade: 5,
      topic: { en: 'Sound Physics & Music', st: 'Melumo le Mino oa Tikoloho' },
      title: { en: 'Pitch, Duration, and Volume of Environmental Sounds', st: 'Bophahamo, Nako, le Matla a Melumo ea Tlhaho' },
      syllabusRef: 'Creativity G5/6 LO11',
      outcome: { en: 'Differentiate between pitch (high/low), duration (long/short), and volume (loud/soft) in environmental music', st: 'Khaohanya bophahamo, bolelele le matla a melumo tikolohong le minong' },
      source: 'Revised Lesotho Primary Syllabus (Page 144 LO11)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Every musical sound has three characteristics: Pitch is how high (like a bird chirping) or low (like a cow mooing) the note sounds. Duration is how long or short the sound echoes. Volume is how loud (thunder clapping) or soft (whispering breeze) the wave is.',
            st: 'Molumo o mong le o mong o na le mekhoa e meraro: Bophahamo (Pitch) ke kamoo molumo o phahameng joaloka nonyana kapa o tebileng joaloka khomo e bokollang. Nako (Duration) ke hore na molumo o nka nako e telele kapa e khutšoanyane. Matla (Volume) ke hore na o lerata kapa o lerootho joaloka moea.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Strike a metal triangle versus a heavy bass drum skin to let learners feel low vibration resonance.',
            st: 'Otla tšepe e tšesane ebe u bapisang le meropa ea matlalo ho utloa phapang ea melumo e tebileng.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'Which environmental sound has a deep, LOW PITCH and a LOUD VOLUME?',
            st: 'Ke molumo ofe oa tlhaho o nang le molumo o tebileng (Low Pitch) le lerata le leholo (Loud Volume)?',
            sn: 'Molumo oa sealiba sa leholimo (thunder) o tebile haholo ebile o lerata le tšosang.'
          },
          options: [
            { en: 'A heavy rolling thunderstorm clap (Sealiba sa leholimo)', st: 'Sealiba sa leholimo (Roll of thunder)' },
            { en: 'A tiny cricket chirping in the grass', st: 'Ts\'ie e llang joangeng' },
            { en: 'A quiet whisper in the classroom', st: 'Ho sebela ka phaposing' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'creativity',
    lesson: {
      id: 'cel5_8',
      grade: 5,
      topic: { en: 'Commerce & Consumer Rights', st: 'Litokelo tsa Moreki le Barekisi' },
      title: { en: 'Producers, Consumers, and Determining Fair Prices', st: 'Bahlahisi, Bareki, le ho Beha Litheko Tse Loketseng' },
      syllabusRef: 'Creativity G5/6 LO33-35',
      outcome: { en: 'Distinguish producers from consumers and explain how costs and market demand determine pricing', st: 'Khaohanya bahlahisi ho bareki le kamoo litheko li behwang kateng' },
      source: 'Revised Lesotho Primary Syllabus (Page 144 LO33-35)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'A Producer creates or grows goods (like a farmer growing potatoes or a carpenter making wooden desks). A Consumer is someone who buys and uses those goods. To set a fair price, the producer calculates the cost of raw materials and labor, adding a modest markup for sustainable profit.',
            st: 'Mohlahisi (Producer) ke motho ea lemang kapa a bōpang thepa (joaloka molemi oa litapole kapa moahi oa litafole). Moreki (Consumer) ke motho ea rekang thepa eo ho e sebelisa. Ho beha theko e loketseng, mohlahisi o kopanya litšenyehelo tsa thepa le matla a hae ebe o kenya puzo e lekaneng.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Simulate a classroom farmers market: Have learners calculate if selling 10 cabbages grown from M20 seeds at M8 each yields a fair living profit.',
            st: 'Balisang thekiso ea meroho: Haeba lipeo li jele M20 ' + "’me u rekisitse likhabeche tse 10 ka M8 e le ’ngoe (M80), puzo ke M60."
          }
        },
        {
          type: 'activity',
          q: {
            en: 'What is the role of a consumer in an economic market?',
            st: 'Karolo ea moreki (consumer) khoebong ea motse ke efe?',
            sn: 'Moreki o reka thepa le lits\'ebeletso tse hlahisitsoeng ke balemi le borakhoebo.'
          },
          options: [
            { en: 'To purchase, consume, and utilize goods and services', st: 'Ho reka le ho sebelisa thepa le lits\'ebeletso' },
            { en: 'To forbid anyone from trading at the market', st: 'Ho thibela batho ho reka setaleng' },
            { en: 'To destroy harvest crops in the fields', st: 'Ho senya lijalo masimong' }
          ],
          answer: 0
        }
      ]
    }
  }
];
