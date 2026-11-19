// PSS (Personal, Spiritual & Social) curriculum lessons for Grades 1 to 7
// Contextualized for Lesotho National Curriculum (LCDC), Basotho culture, spirituality, ethics, and emotional well-being.

module.exports = [
  // ── Grade 1 ──
  {
    subjectId: 'pss',
    lesson: {
      id: 'pss1_1',
      grade: 1,
      topic: { en: 'Self-Awareness & Feelings', st: 'Ho Itseba le Maikutlo' },
      title: { en: 'My Feelings: Happy, Sad, and Calm', st: 'Maikutlo a Ka: Thabo, Masoabi, le Khotso' },
      syllabusRef: 'PSS G1 LO1',
      outcome: { en: 'Identify basic emotional feelings and express them safely', st: 'Tseba maikutlo a mantlha le ho a hlahisa ka mokhoa o sireletsehileng' },
      source: 'Lesotho Primary Curriculum (MoET) - PSS',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'We all have feelings inside our hearts. Sometimes we feel happy when playing with friends. Sometimes we feel sad or frightened. It is good to talk to your teacher or parents when you feel worried.',
            st: 'Kaofela re na le maikutlo ka lipelong tsa rona. Ka nako e \'ngoe re thaba ha re bapala le metsoalle. Ka nako e \'ngoe re utloa bohloko kapa tšabo. Ho molemo ho bolella tichere kapa batsoali ha u tšoenyehile.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Have learners make happy, sad, and calm facial expressions in circle time.',
            st: 'Kopang baithuti ho bontša lifahleho tsa thabo le tsa masoabi selikeng sa phaposi.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'What is a healthy thing to do when you feel sad, hurt, or frightened at school?',
            st: 'Ke ntho efe e phetseng hantle eo u lokelang ho e etsa ha u utloa bohloko kapa tšabo sekolong?'
          },
          options: [
            { en: 'Talk to a trusted teacher or parent', st: 'Bolella tichere kapa motsoali eo u mo tšepang' },
            { en: 'Hit other children in anger', st: 'Otla bana ba bang ka bohale' },
            { en: 'Hide in danger alone without telling anyone', st: 'Ipate u le mong ntle le ho bolella mang kapa mang' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'pss',
    lesson: {
      id: 'pss1_2',
      grade: 1,
      topic: { en: 'Kindness & Friendship', st: 'Mosa le Botsoalle' },
      title: { en: 'Sharing and Caring for Classmates', st: 'Ho Arolelana le ho Hlokomelana' },
      syllabusRef: 'PSS G1 LO3',
      outcome: { en: 'Demonstrate sharing and gentle actions towards peers', st: 'Bontša mosa le ho arolelana thepa le bana ba bang' },
      source: 'Lesotho Primary Curriculum (MoET) - PSS',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Kindness makes our classroom a peaceful home. If a classmate does not have a pencil or forgets their lunch, sharing with them brings joy. A kind child says gentle words and includes everyone in games.',
            st: 'Mosa o etsa hore phaposi ea rona e be lehae la khotso. Haeba moithuti-’moho a se na pensele kapa a lebetse lijo, ho arolelana le eena ho tlisa thabo. Ngoana ea nang le mosa o bua mantsoe a monate le ho bapala le bohle.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Create a "Kindness Tree" on the board where learners stick leaves when they help a friend.',
            st: 'Etsang "Sefate sa Mosa" letlapeng moo baithuti ba behang makhasi ha ba thusitse motsoalle.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'How can you show kindness when a classmate drops their pencils on the floor?',
            st: 'U ka bontša mosa joang ha moithuti-’moho a lihela lipensele fatše?'
          },
          options: [
            { en: 'Help them pick up the pencils with a smile', st: 'Mo thuse ho thola lipensele ka pososelo' },
            { en: 'Laugh and step on the pencils', st: 'Tšeha ebe u li gata ka maoto' },
            { en: 'Take the pencils and keep them for yourself', st: 'Li nke u li ipolokele' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'pss',
    lesson: {
      id: 'pss1_3',
      grade: 1,
      topic: { en: 'Spiritual Wonder & Gratitude', st: 'Moea le Tebogo' },
      title: { en: 'Being Thankful for Nature and Sun', st: 'Ho Leboha Tlhaho le Letsatsi' },
      syllabusRef: 'PSS G1 LO5',
      outcome: { en: 'Appreciate the beauty of creation, morning sunlight, and clean water', st: 'Ananela botle ba tlholeho, khanya ea letsatsi, le metsi a hloekileng' },
      source: 'Lesotho Primary Curriculum (MoET) - PSS',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Every morning when the sun rises over our Lesotho mountains, we breathe fresh air and see blue skies. Having gratitude in our hearts for life, family, and nature gives us peace and spiritual strength.',
            st: 'Hoseng ho hong le ho hong ha letsatsi le chaba holim\'a lithaba tsa Lesotho, re hema moea o hloekileng le ho bona maru a matle. Ho ba le teboho lipelong tsa rona bakeng sa bophelo, lelapa le tlhaho ho re fa matla a moea le khotso.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Take a quiet moment of reflection in the morning where each child names one thing they are grateful for.',
            st: 'Etsang motsotso o khutsitseng hoseng moo ngoana ka mong a bolelang ntho e le \'ngoe eo a e lebohang.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'What positive feeling do we cultivate when we say thank you for food and life?',
            st: 'Ke maikutlo afe a matle ao re a holisang ha re leboha lijo le bophelo?'
          },
          options: [
            { en: 'Gratitude, humility, and inner peace', st: 'Teboho, boikokobetso, le khotso ea pelo' },
            { en: 'Greed and selfishness', st: 'Meharo le boikhabi' },
            { en: 'Constant jealousy towards others', st: 'Mona le mohono' }
          ],
          answer: 0
        }
      ]
    }
  },

  // ── Grade 2 ──
  {
    subjectId: 'pss',
    lesson: {
      id: 'pss2_1',
      grade: 2,
      topic: { en: 'Good Manners & Respect', st: 'Mekhoa e Metle le Tlhompho' },
      title: { en: 'Respecting Elders, Teachers, and Peers', st: 'Ho Hlompha Baholo, Matichere le Lithaka' },
      syllabusRef: 'PSS G2 LO2',
      outcome: { en: 'Practice courteous speech and respectful manners in community interactions', st: 'Sebelisa mekhoa e metle le puo e nang le tlhompho sechabeng' },
      source: 'Lesotho Primary Curriculum (MoET) - PSS',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'In Basotho culture, respect (tlhompho) is the foundation of character. We greet elders with two hands, use respectful titles ("Ntate", "’Mè"), listen when others speak, and knock before entering a room.',
            st: 'Moetlong oa Basotho, tlhompho ke motheo oa botho. Re lumelisa batho ba baholo ka matsoho a mabeli, re sebelisa litlotla tse kang "Ntate" le "’Mè", re mamela ha ba bang ba bua, ' + "’me re kokota pele re kena ka tlung."
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Role-play greeting an elder passing on the village path using both hands.',
            st: 'Bapallang kamoo ngoana a lumelisang motho e moholo tseleng ka matsoho a mabeli.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'In Lesotho tradition, how do children receive an item or greet an elder to demonstrate deep respect?',
            st: 'Moetlong oa Lesotho, bana ba amohela ntho kapa ho lumelisa motho e moholo joang ho bontša tlhompho e tebileng?'
          },
          options: [
            { en: 'Using both hands together with bowed head', st: 'Ka matsoho a mabeli a kopaneng u inamisitse hlooho' },
            { en: 'With one hand in your pocket looking away', st: 'Ka letsoho le le leng le le ka pokothong' },
            { en: 'By snatching it quickly and running', st: 'Ka ho e hula ka potlako ebe oa matha' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'pss',
    lesson: {
      id: 'pss2_2',
      grade: 2,
      topic: { en: 'Personal Hygiene & Body Care', st: 'Bohloeki ba ’Mele le Tlhokomelo' },
      title: { en: 'Caring for My Body as a Sacred Gift', st: 'Ho Hlokomela ’Mele oa Ka e le Mpho e Halalelang' },
      syllabusRef: 'PSS G2 LO4',
      outcome: { en: 'Demonstrate understanding that our bodies are special and deserve clean care and safety', st: 'Utloisisa hore ’mele ke oa bohlokoa ebile o hloka bohloeki le tšireletso' },
      source: 'Lesotho Primary Curriculum (MoET) - PSS',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Your body is precious. Keeping it clean by bathing, brushing your teeth, and wearing neat clothes keeps you healthy and confident. Remembering that your body belongs to you helps you keep it safe from harm.',
            st: '’Mele oa hao ke oa bohlokoa haholo. Ho o hloekisa ka ho hlapa, ho hlatsoa meno, le ho apara liaparo tse makhethe ho u fa bophelo bo botle le boits\'epo. Ho tseba hore ’mele ke oa hao ho u thusa ho o sireletsa kotsing.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Teach the "Praise Your Body" routine: clean teeth, clean nails, neat hair, bright eyes.',
            st: 'Rutang litho tsa bohlokoa: meno a masoeu, manala a khutšoanyane a hloekileng, moriri o kutiloeng hantle.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'Why is it important to brush your teeth every morning and evening?',
            st: 'Hobaneng ha ho le bohlokoa ho hlatsoa meno hoseng le mantsiboea?'
          },
          options: [
            { en: 'To keep teeth strong, clean, and free of pain and decay', st: 'Ho boloka meno a matla, a hloekile ' + "’me a se na libōkō kapa bohloko" },
            { en: 'So that you can eat sugar all day without water', st: 'E le hore u je tsoekere letsatsi lohle' },
            { en: 'It does not matter, baby teeth will fall anyway', st: 'Ha ho na taba ho hang' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'pss',
    lesson: {
      id: 'pss2_3',
      grade: 2,
      topic: { en: 'Cooperation & Team Play', st: 'Tšebelisano le Papali ea Sehlopha' },
      title: { en: 'Playing Fairly and Taking Turns', st: 'Ho Bapala ka Toka le ho Fana ka Monyetla' },
      syllabusRef: 'PSS G2 LO6',
      outcome: { en: 'Apply fairness and honesty when playing games with peers', st: 'Sebelisa toka, botšepehi, le ho fana ka menyetla ha u bapala le ba bang' },
      source: 'Lesotho Primary Curriculum (MoET) - PSS',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Playing games like skipping rope (khoele) or football is fun when everyone follows the rules. Cheating or fighting ruins the game. When someone loses, we shake hands and encourage them to try again next time.',
            st: 'Ho bapala lipapali tse kang ho tlola khoele kapa bolo ea maoto ho monate ha bohle ba latela melao. Ho qhekella kapa ho loana ho senya papali. Ha motho a hlōtsoe, re mo ts\'oara ka letsoho le ho mo khothalletsa.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Practice a game where learners take turns holding a ball for 10 seconds before passing smoothly.',
            st: 'Bapallang papali ea ho nehelana ka bolo ka tatellano ntle le ho qhanyetsana.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'What should a good sportsperson do after their team loses a friendly school match?',
            st: 'Motho ea nang le moea o motle oa papali o lokela ho etsa eng kamora hore sehlopha sa hae se hloloe papaling?'
          },
          options: [
            { en: 'Congratulate the winning team politely and practice more', st: 'Bolella bahloli hantle ' + "’me u ikoetlise haholoanyane" },
            { en: 'Throw stones at the referee', st: 'Tšoenya moahloli ka majoe' },
            { en: 'Refuse to talk to friends ever again', st: 'Hana ho bua le metsoalle hape' }
          ],
          answer: 0
        }
      ]
    }
  },

  // ── Grade 3 ──
  {
    subjectId: 'pss',
    lesson: {
      id: 'pss3_1',
      grade: 3,
      topic: { en: 'Botho / Ubuntu Values', st: 'Melao ea Botho' },
      title: { en: 'The Meaning of Botho in Daily Life', st: 'Moelelo oa Botho Bophelong ba Letsatsi le Letsatsi' },
      syllabusRef: 'PSS G3 LO1',
      outcome: { en: 'Explain and demonstrate the core values of Botho (compassion, solidarity, integrity)', st: 'Hlalosa le ho bontša litšiea tsa Botho (qenehelo, kutloano, le botšepehi)' },
      source: 'Lesotho National Curriculum & Basotho Philosophy',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Botho is the golden principle of the Basotho: "Motho ke motho ka batho" (A person is a person through other people). Botho means welcoming strangers, helping vulnerable neighbors, showing sympathy when someone grieves, and acting with truthfulness.',
            st: 'Botho ke motheo oa boikhohomoso oa Basotho: "Motho ke motho ka batho". Botho bo bolela ho amohela baeti ka mofuthu, ho thusa mafutsana le batsofe, ho utloela ba saretsoeng bohloko, le ho phela ka nnete.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Ask learners how their families welcome a weary traveler walking through the village.',
            st: 'Botsang baithuti hore na malapeng a bona ba etsa joang ha moeti a fihla a khathetse.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'Which action best reflects the Basotho traditional virtue of Botho?',
            st: 'Ke ketso efe e bontšang motheo oa tlhaho oa Botho moetlong oa Basotho?'
          },
          options: [
            { en: 'Carrying a heavy water bucket for an elderly grandmother', st: 'Ho jarisa nkhono ea tsofetseng nkho e boima ea metsi' },
            { en: 'Boasting about having more shoes than classmates', st: 'Ho ithorisa ka lieta ho feta bana ba bang' },
            { en: 'Ignoring someone who falls down and hurt themselves', st: 'Ho iphapanyetsa motho ea oeleng fatše' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'pss',
    lesson: {
      id: 'pss3_2',
      grade: 3,
      topic: { en: 'Honesty & Truthfulness', st: 'Botšepehi le Nnete' },
      title: { en: 'Why Telling the Truth Matters', st: 'Bohlokoa ba ho Bua Nnete ka Linako Tsohle' },
      syllabusRef: 'PSS G3 LO3',
      outcome: { en: 'Recognize the courage needed to admit mistakes and build trust', st: 'Hlokomela sebete sa ho ipolela liphoso le ho haha tšepo' },
      source: 'Lesotho Primary Curriculum (MoET) - PSS',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Truth is like light. When you break a cup by accident, it takes courage to tell your mother the truth. When you tell lies, you have to tell more lies to cover it up, and people lose trust in you. Honesty brings peace of mind.',
            st: 'Nnete e joaloka khanya. Haeba u pshatla kopi ka phoso, ho hloka sebete ho bolella ’mè nnete. Ha u bua leshano, u tlameha ho qapa mashano a mangata ho le pata, ' + "’me batho ba lahla tšepo ho uena. Nnete e tlisa khotso kelellong."
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Share the famous folklore of the boy who cried wolf ("Molisana ea neng a hoeletse phokojoe").',
            st: 'Phetang tsomo ea molisana ea neng a qapa leshano la phokojoe ho fihlela batho ba sa mo tšepe.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'What happens when a child consistently tells the truth, even when they made an accidental mistake?',
            st: 'Ho etsahala eng ha ngoana a bua nnete ka mehla, leha a entse phoso ka ts\'ohanyetso?'
          },
          options: [
            { en: 'People trust, respect, and forgive them', st: 'Batho ba mo tšepa, ba mo hlompha ' + "’me ba mo tšoarela" },
            { en: 'Nobody will ever speak to them again', st: 'Ha ho motho ea tla bua le eena' },
            { en: 'They lose all their friends', st: 'O lahleheloa ke metsoalle kaofela' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'pss',
    lesson: {
      id: 'pss3_3',
      grade: 3,
      topic: { en: 'Peace & Conflict Resolution', st: 'Khotso le Qabang' },
      title: { en: 'Resolving Disagreements Without Fighting', st: 'Ho Rarolla Liqabang Ntle le Ntoa' },
      syllabusRef: 'PSS G3 LO5',
      outcome: { en: 'Apply calm communication to settle disputes among friends peacefully', st: 'Sebelisa lipuisano tse khutsitseng ho rarolla liqabang ka khotso' },
      source: 'Lesotho Primary Curriculum (MoET) - PSS',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'King Moshoeshoe I taught us: "Khotso ke khoro" (Peace is the gateway to prosperity). When you disagree with a friend, step back, take three deep breaths, speak calmly, and listen to their side. If needed, ask a teacher to mediate.',
            st: 'Morena Moshoeshoe I o re rutile: "Khotso ke khoro". Ha u ngangisana le motsoalle, khutlela morao, hema haholo hararo, bua ka mosa ' + "’me u mamele lehlakore la hae. Ha ho hlokahala, kōpa tichere ho le ahlola."
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Set up a "Peace Corner" (Khotso Corner) in the classroom where arguing learners sit to talk it out.',
            st: 'Thehang "Khutlo ea Khotso" phaposing moo bana ba neng ba qabana ba lulang ho buisana.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'What was King Moshoeshoe I\'s famous motto regarding conflict and nation-building?',
            st: 'Ke lepetjo lefe le tummeng la Morena Moshoeshoe I mabapi le khotso le kaho ea sechaba?'
          },
          options: [
            { en: '"Khotso ke khoro" (Peace is the gateway)', st: '"Khotso ke khoro"' },
            { en: '"Ntoa ke eona tharollo"', st: '"Ntoa ke eona tharollo"' },
            { en: '"Motho ka mong a ipoloke"', st: '"Motho ka mong a ipoloke"' }
          ],
          answer: 0
        }
      ]
    }
  },

  // ── Grade 4 ──
  {
    subjectId: 'pss',
    lesson: {
      id: 'pss4_1',
      grade: 4,
      topic: { en: 'Personal Boundaries & Safety', st: 'Meeli ea ’Mele le Tšireletseho' },
      title: { en: 'Good Touch, Bad Touch, and Safe Secrets', st: 'Tšoaro e Ntle, Tšoaro e Mpe, le Liphiri tsa Tšireletseho' },
      syllabusRef: 'PSS G4 LO2',
      outcome: { en: 'Distinguish safe from unsafe touches and identify trusted adults for reporting', st: 'Khetholla tšoaro e ntle le e mpe le ho tseba batho ba baholo ba tšepahalang' },
      source: 'Childline Lesotho / Child Protection and Welfare Act',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Your body belongs to you alone. Private parts covered by swimming costumes or underwear must never be touched or photographed by anyone. If someone touches you in an uncomfortable way, shout "NO!", run away, and tell a trusted teacher or call Childline toll-free on 116.',
            st: '’Mele oa hao ke oa hao u le mong. Likarolo tsa sephiri tse koaheloang ke liaparo tsa ka hare ha lia lokela ho tšoaroa ke mang kapa mang. Haeba motho a u tšoara ka mokhoa o sa lokang, hoeletsa "CHEE!", baleha, ebe u bolella tichere kapa u letsetse Childline mahala ho 116.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Write the Childline Lesotho toll-free number (116) clearly on the board and have all learners memorize it.',
            st: 'Ngolang nomoro ea mahala ea Childline Lesotho (116) letlapeng baithuti bohle ba e tšoare ka hlooho.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'What is the toll-free emergency phone number in Lesotho for child protection and reporting abuse (Childline)?',
            st: 'Ke nomoro efe ea mahala ea fono Lesotho ea tšireletso ea bana le ho tlaleha tlhekefetso (Childline)?'
          },
          options: [
            { en: '116', st: '116' },
            { en: '999', st: '999' },
            { en: '10111', st: '10111' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'pss',
    lesson: {
      id: 'pss4_2',
      grade: 4,
      topic: { en: 'Anti-Bullying & Inclusion', st: 'Ho Emisa Tlhekefetso le Khethollo' },
      title: { en: 'Standing Up Against Bullying and Teasing', st: 'Ho Ema Khahlanong le ho Tšeana le ho Hekefetsa' },
      syllabusRef: 'PSS G4 LO4',
      outcome: { en: 'Recognize bullying behavior (physical, verbal, exclusion) and practice being an upstander', st: 'Tseba mefuta ea tlhekefetso le ho ema le bana ba tlatlapuoang' },
      source: 'Lesotho Primary Curriculum (MoET) - PSS',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Bullying is when someone repeatedly hurts, threatens, or makes fun of another person on purpose. It includes teasing someone because of their clothes, disability, or language. Bullying hurts minds and hearts. Be a friend who speaks up to protect classmates.',
            st: 'Tlhekefetso ke ha motho a lula a ntša e mong bohloko, a mo tšosa, kapa a mo tšeha ka boomo ka lebaka la liaparo, bofokoli kapa puo. Sena se utloisa bohloko haholo. E-ba motsoalle ea emang ho sireletsa ba bang.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Discuss the difference between being a passive bystander and being an active, compassionate defender.',
            st: 'Buisanang ka phapang pakeng tsa motho ea bohellang tlatlapo le ea thusang ho e thibela.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'What should you do if you see bigger children picking on a smaller learner in the school yard?',
            st: 'U lokela ho etsa eng ha u bona bana ba baholo ba hlorisa ngoana e monyenyane lebaleng la sekolo?'
          },
          options: [
            { en: 'Tell a teacher immediately or invite the child to join your group safely', st: 'Tsebisa tichere hang-hang kapa u bitse ngoana eo a tle sehlopheng sa heno' },
            { en: 'Cheer and join in teasing the child', st: 'Hooa ' + "’me u kenelle ho mo tšeha" },
            { en: 'Film it on a phone and laugh', st: 'Mo nke senepe u tšehe' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'pss',
    lesson: {
      id: 'pss4_3',
      grade: 4,
      topic: { en: 'Environmental Stewardship', st: 'Tlhokomelo ea Pōpo le Tikoloho' },
      title: { en: 'Caring for God’s Creation: Trees, Water, and Soil', st: 'Ho Hlokomela Tlholeho: Lifate, Metsi, le Mobu' },
      syllabusRef: 'PSS G4 LO6',
      outcome: { en: 'Connect personal spiritual responsibility to taking care of nature and water sources', st: 'Amanisa boikarabello ba moea le ho sireletsa mehloli ea metsi le tlhaho' },
      source: 'Lesotho Primary Curriculum (MoET) - PSS',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Our mountains, clear rivers, and fertile fields are gifts of creation. When we dump plastic in streams, let taps run, or destroy trees, we harm ourselves and future generations. A wise Mosotho cares for the land with reverence and dignity.',
            st: 'Lithaba tsa rona, linoka tse hloekileng, le masimo a rona ke limpho tsa tlholeho. Ha re lahla lipolastiki linokeng, re senya metsi kapa re rema lifate, re ikgobatsa rona le meloko e tlang. Mosotho ea bohlale o hlokomela naha ka tlotla.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Organize a 10-minute classroom clean-up where learners collect and sort recyclable trash.',
            st: 'Etsang metsotso e 10 ea ho hloekisa lebala la sekolo le ho arola lithōle.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'How can young learners practice good stewardship of natural water at home and school?',
            st: 'Bana ba ka bontša boikarabello bo botle joang tšebelisong ea metsi hae le sekolong?'
          },
          options: [
            { en: 'Turn off dripping taps tightly and keep riverbanks free of trash', st: 'Koala lipompo tse rothang ka thata ' + "’me u se ke oa silafatsa linoka" },
            { en: 'Leave taps running freely all night', st: 'Tlohela pompo e phalle bosiu bohle' },
            { en: 'Throw car batteries into village springs', st: 'Lahlela libeteri tsa likoloi lilibeng' }
          ],
          answer: 0
        }
      ]
    }
  },

  // ── Grade 5 ──
  {
    subjectId: 'pss',
    lesson: {
      id: 'pss5_1',
      grade: 5,
      topic: { en: 'Self-Esteem & Peer Pressure', st: 'Boits\'epo le Khatello ea Lithaka' },
      title: { en: 'Building Self-Confidence and Saying "No" to Peer Pressure', st: 'Ho Haha Boits\'epo le ho Hana Khatello e Mpe ea Lithaka' },
      syllabusRef: 'PSS G5 LO1',
      outcome: { en: 'Demonstrate assertive communication when pressured into negative actions', st: 'Bontša boits\'epo ba ho hana ha lithaka li u qobella ho etsa lintho tse mpe' },
      source: 'Lesotho Primary Curriculum (MoET) - PSS',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Peer pressure happens when friends push you to do something dangerous or wrong (like stealing, skipping classes, or smoking) just to "fit in". A person with true self-esteem knows their values and says: "No, that is against my principles, and I will not do it."',
            st: 'Khatello ea lithaka e etsahala ha metsoalle e u susumelletsa ho etsa ntho e kotsi (joaloka ho utsoa, ho tlolela sekolo kapa ho tsuba) hore ba u nke u le "smart". Motho ea nang le boits\'epo o tseba mekhoa ea hae ebe o re: "Che, ha ke etse ntho eo."'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Practice assertive body language: standing tall, making direct eye contact, speaking in a firm, calm voice.',
            st: 'Koetlisang boemo ba ’mele bo tiileng: ho ema u otlolohile, ho sheba ka mahlong le ho bua ka lentsoe le tiileng.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'If a group of friends dares you to skip school to hang around the shops, what is the most responsible response?',
            st: 'Haeba metsoalle e u qobella ho tlohela sekolo ho ea litoropong, karabo e nepahetseng ka ho fetisisa ke efe?'
          },
          options: [
            { en: 'Firmly say "No, my education is important" and proceed to class', st: 'Bua ka tieo u re "Che, thuto ea ka ke ea bohlokoa" ebe u ea sekolong' },
            { en: 'Agree immediately so they don\'t call you names', st: 'Lumela hang-hang e le hore ba se u tšehe' },
            { en: 'Steal money from your parents to buy them sweets', st: 'Utsoa chelete ea batsoali u ba rekele lintho' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'pss',
    lesson: {
      id: 'pss5_2',
      grade: 5,
      topic: { en: 'Empathy & Helping Others', st: 'Qenehelo le Thuso' },
      title: { en: 'Supporting Orphans and Vulnerable Children (OVC)', st: 'Ho Tšehetsa Likhutsana le Bana ba Hlokang' },
      syllabusRef: 'PSS G5 LO3',
      outcome: { en: 'Cultivate empathy and practical solidarity with vulnerable children in the community', st: 'Hōlisa qenehelo le tšehetso e tiileng ho bana ba hlokang le likhutsana' },
      source: 'Lesotho Social Development & Child Policy',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'In Lesotho, many children live with grandparents or have lost parents due to illness. They may lack warm jerseys, candles for studying, or enough food. Empathy means putting yourself in their shoes. Sharing textbooks, homework guidance, and friendship changes their world.',
            st: 'Lesotho, bana ba bangata ba lula le bo-nkhono kapa ba hlokahetsoe ke batsoali ke maloetse. Ba ka hloka lijase tse futhumetseng kapa lijo. Qenehelo e bolela ho ipona u le boemong ba bona. Ho ba fa botsoalle le ho ba thusa mesebetsing ea sekolo ho fetola bophelo ba bona.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Encourage a classroom study buddy system pairing learners for homework support.',
            st: 'Hlophisang lithaka tsa ho ithuta phaposing moo bana ba phelang hammoho ho thusana ka homework.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'What is the most respectful way to support a classmate who has no school shoes in winter?',
            st: 'Ke tsela efe e nang le tlhompho ea ho tšehetsa moithuti-’moho ea se nang lieta tsa sekolo mariha?'
          },
          options: [
            { en: 'Quietly inform the teacher or school welfare committee with dignity and kindness', st: 'Tsebisa tichere kapa komiti ea boiketlo ea sekolo ka tlhompho le boikokobetso' },
            { en: 'Point at their feet in the assembly and laugh', st: 'Mo supe ka menwana phuthehong u tšehe' },
            { en: 'Take photos and post them online', st: 'Mo nke lifoto u li phatlalatse' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'pss',
    lesson: {
      id: 'pss5_3',
      grade: 5,
      topic: { en: 'Spiritual Heritage & Respect for Beliefs', st: 'Tumelo le Tlhompho ea Malumeli' },
      title: { en: 'Freedom of Worship and Respecting Different Faiths', st: 'Tokoloho ea Thapelo le Tlhompho ea Malumeli a Fapaneng' },
      syllabusRef: 'PSS G5 LO5',
      outcome: { en: 'Demonstrate respect and tolerance for people of different religious and spiritual backgrounds', st: 'Bontša mamello le tlhompho ho batho ba malumeli a fapaneng' },
      source: 'Constitution of Lesotho / PSS Curriculum',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Under the Constitution of Lesotho, every person has the right to freedom of religion and conscience. Whether someone belongs to the LECSA, Catholic, Anglican, Methodist, Muslim, or traditional heritage, we treat their spiritual beliefs with honor and tolerance.',
            st: 'Tlas\'a Molao oa Motheo oa Lesotho, motho e mong le e mong o na le tokelo ea bolokolohi ba bolumeli. Ho sa tsotellehe hore na motho ke oa Kereke ea Fora (LECSA), Roma, Chache, Methodist, kapa Mo-Islam, re tšoara tumelo ea hae ka tlhompho le mamello.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Emphasize the universal spiritual values shared across faiths: love, peace, honesty, and justice.',
            st: 'Totobatsang litekanyetso tsa moea tse kopanyang malumeli: lerato, khotso, botšepehi, le toka.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'What fundamental freedom is protected in Lesotho regarding how citizens pray and worship?',
            st: 'Ke tokelo efe ea bohlokoa e sirelelitsoeng Lesotho mabapi le kamoo baahi ba rapelang kateng?'
          },
          options: [
            { en: 'Freedom of religion, conscience, and peaceful worship for all', st: 'Tokelo ea bolokolohi ba bolumeli, letsoalo, le thapelo bakeng sa bohle' },
            { en: 'Only one church is allowed to exist by law', st: 'Kereke e le \'ngoe feela e lumelletsoeng' },
            { en: 'Citizens are forced to change religions every year', st: 'Batho ba qobelloa ho fetola malumeli selemo le selemo' }
          ],
          answer: 0
        }
      ]
    }
  },

  // ── Grade 6 ──
  {
    subjectId: 'pss',
    lesson: {
      id: 'pss6_1',
      grade: 6,
      topic: { en: 'Emotional Resilience & Stress Management', st: 'Mamello ea Maikutlo le ho Laola Khatello' },
      title: { en: 'Managing School Stress and Exam Anxiety', st: 'Ho Laola Matšoenyeho a Litlhahlobo le Khatello' },
      syllabusRef: 'PSS G6 LO2',
      outcome: { en: 'Apply constructive stress coping strategies (study planning, rest, mindful breathing)', st: 'Sebelisa mekhoa e metle ea ho laola matšoenyeho a litlhahlobo le mosebetsi' },
      source: 'Lesotho Primary Curriculum (MoET) - PSS',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Preparing for examinations or facing difficult home situations can create stress and anxiety. Good ways to cope include drawing up a daily study timetable, taking short breaks, getting enough sleep, and talking openly with a school mentor.',
            st: 'Ho itokisetsa litlhahlobo kapa mathata a lapeng ho ka baka matšoenyeho le khatello ea kelello. Mekhoa e metle ea ho sebetsana le sena e kenyeletsa ho etsa lenaneo la ho ithuta, ho phomola, ho robala hantle, le ho bua le tichere kapa moeletsi.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Lead a 2-minute box-breathing exercise: inhale for 4 counts, hold for 4, exhale for 4, rest for 4.',
            st: 'Etsang boikoetliso ba ho hema: hema ka lipalo tse 4, tšoara moea tse 4, ntša moea tse 4, phomola tse 4.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'Which habit is most effective for reducing examination panic and anxiety before test day?',
            st: 'Ke tloaelo efe e thusang haholo ho fokotsa letsoalo pele ho litlhahlobo?'
          },
          options: [
            { en: 'Revising lessons steadily weeks in advance and getting adequate rest', st: 'Ho boela lithuto butle-butle libeke pele ho nako le ho robala hantle' },
            { en: 'Staying awake all night drinking strong energy drinks', st: 'Ho lula bosiu bohle u sa robale' },
            { en: 'Skipping meals and avoiding all study notes', st: 'Ho itima lijo le ho se bale ho hang' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'pss',
    lesson: {
      id: 'pss6_2',
      grade: 6,
      topic: { en: 'Gender Equality & Mutual Respect', st: 'Tekano ea Bong le Tlhompho' },
      title: { en: 'Promoting Gender Equality Between Boys and Girls', st: 'Ho Khothaletsa Tekano Pakeng tsa Bashanyana le Banana' },
      syllabusRef: 'PSS G6 LO4',
      outcome: { en: 'Challenge harmful gender stereotypes and promote equal leadership and educational dignity', st: 'Hlōla mekhoa e kentseng khethollo ea bong le ho khothaletsa boetapele bo lekanang' },
      source: 'Lesotho National Gender and Development Policy',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Both girls and boys have equal intelligence, leadership capacity, and human rights. Outdated beliefs that domestic chores belong only to girls or that boys cannot express feelings harm everyone. In schools and homes, sharing tasks and respecting each other builds a just society.',
            st: 'Banana le bashanyana ba na le bohlale bo lekanang, bokhoni ba boetapele, le litokelo tsa botho. Menahano ea khale ea hore mesebetsi ea lapeng ke ea banana feela kapa hore bashanyana ha ba lle e senya sechaba. Ho arolelana mesebetsi ho haha naha e lokileng.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Assign classroom leadership and cleaning tasks on an equal rotation regardless of gender.',
            st: 'Abang mesebetsi ea boetapele le bohloeki phaposing ka ho fapanyetsana ntle le khethollo ea bong.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'Why is it important for both boys and girls to have equal access to mathematics, science, and leadership roles?',
            st: 'Hobaneng ha ho le bohlokoa hore bashanyana le banana ba be le menyetla e lekanang lipalong, saenseng le boetapeleng?'
          },
          options: [
            { en: 'Because a prosperous nation needs the talents, ideas, and skills of all its citizens', st: 'Hobane naha e tsoetseng pele e hloka talenta le bokhoni ba baahi bohle' },
            { en: 'Because girls are only allowed to do cooking', st: 'Hobane banana ba tšoanela ho pheha feela' },
            { en: 'Because boys are not allowed to read books', st: 'Hobane bashanyana ha baa lokela ho bala' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'pss',
    lesson: {
      id: 'pss6_3',
      grade: 6,
      topic: { en: 'Civic Responsibility & Integrity', st: 'Boikarabello ba Sechaba le Botšepehi' },
      title: { en: 'Community Service and Volunteerism (Boithaopo)', st: 'Mosebetsi oa Boithaopo le Tšebeletso ea Sechaba' },
      syllabusRef: 'PSS G6 LO6',
      outcome: { en: 'Demonstrate civic commitment through voluntary community action', st: 'Bontša boitlamo sechabeng ka mesebetsi ea boithaopo (letsema)' },
      source: 'Lesotho Primary Curriculum (MoET) - PSS',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Volunteering (boithaopo) means giving your time and energy to help your community without expecting payment. Traditionally, Basotho practiced "letsema" to weed fields or build homes. Serving your community strengthens social bonds and develops leadership skills.',
            st: 'Boithaopo bo bolela ho fana ka nako le matla a hao ho thusa sechaba ntle le tefo. Moetlong oa khale, Basotho ba ne ba etsa "letsema" ho lema kapa ho haha matlo. Ho sebeletsa sechaba sa heno ho tiisa lerato le ho haha boetapele bo botle.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Plan a small school volunteer initiative (cleaning the community spring or helping an elderly villager stack firewood).',
            st: 'Ralang mosebetsi o monyenyane oa boithaopo: ho hloekisa seliba sa motse kapa ho rala patsi ea nkhono.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'What traditional Basotho community practice embodies the spirit of collective volunteerism and mutual aid?',
            st: 'Ke moetlo ofe oa Sesotho o emelang moea oa boithaopo le ho thusana ka kakaretso?'
          },
          options: [
            { en: 'Letsema (collective community collaboration)', st: 'Letsema' },
            { en: 'Bokhukhuni', st: 'Bokhukhuni' },
            { en: 'Ho ikarola ho ba bang', st: 'Ho ikarola' }
          ],
          answer: 0
        }
      ]
    }
  },

  // ── Grade 7 ──
  {
    subjectId: 'pss',
    lesson: {
      id: 'pss7_1',
      grade: 7,
      topic: { en: 'Substance Abuse Prevention', st: 'Thibelo ea Tšebeliso e Mpe ea Lithethefatsi' },
      title: { en: 'Saying NO to Alcohol, Tobacco, and Drugs', st: 'Ho Hana Joala, Koae, le Lithethefatsi' },
      syllabusRef: 'PSS G7 LO1',
      outcome: { en: 'Analyze the physical, mental, and social consequences of substance abuse', st: 'Hlahloba litlamorao tsa ’mele, kelello le sechaba tsa tšebeliso ea lithethefatsi' },
      source: 'Lesotho National Drug and Alcohol Policy / Health Curriculum',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Substance abuse damages the developing brain, ruins academic futures, and leads to addiction, violence, and disease. Making healthy lifestyle choices, choosing positive friendships, and focusing on education protects your dreams and physical well-being.',
            st: 'Tšebeliso e mpe ea lithethefatsi (joala, koae, matekoane) e senya boko bo holang, e bolaea bokamoso ba thuto, ' + "’me e baka bokhoba le bokuli. Ho etsa liqeto tse nepahetseng le ho khetha metsoalle e metle ho sireletsa litoro tsa hao."
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Discuss refusal skills: clearly saying "I have goals that drugs would ruin" and walking away.',
            st: 'Rutang mekhoa ea ho hana: "Che, ke na le litoro tseo lithethefatsi li ka li senyang."'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'What is a severe long-term danger of alcohol and substance abuse among adolescents?',
            st: 'Ke kotsi efe e kholo ea nako e telele ea tšebeliso ea joala le lithethefatsi har\'a bacha?'
          },
          options: [
            { en: 'Permanent brain damage, addiction, and school dropout', st: 'Tšenyo ea boko, bokhoba ba lithethefatsi, le ho tlohela sekolo' },
            { en: 'Achieving the highest marks in national exams', st: 'Ho fumana lintlha tse holimo litlhahlobong' },
            { en: 'Becoming a faster mountain runner', st: 'Ho ba semathi se potlakileng sa lithaba' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'pss',
    lesson: {
      id: 'pss7_2',
      grade: 7,
      topic: { en: 'Ethical Digital Citizenship', st: 'Boahi bo Botle ba Marang-rang' },
      title: { en: 'Responsible Phone Use and Protecting Online Privacy', st: 'Tšebeliso e Ntle ea Mehala le Tšireletso ea Sephiri' },
      syllabusRef: 'PSS G7 LO3',
      outcome: { en: 'Practice safe, respectful online behavior and avoid cyberbullying and scam traps', st: 'Sebelisa mehala le marang-rang ka boikarabello, tlhompho, le tšireletso' },
      source: 'Lesotho Communications Authority (LCA) / ICT4D Ethics',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Smartphones and digital media are powerful tools for learning, but they come with risks. Never share your passwords, home address, or private photos with strangers online. Avoid forwarding mean gossip or fake news on WhatsApp or social media. Treat people with the same Botho online as face-to-face.',
            st: 'Mehala le marang-rang ke lisebelisoa tse matla tsa ho ithuta, empa li na le likotsi. Le ka mohla u se ke oa arolelana liphasewete kapa lifoto tsa sephiri le batho bao u sa ba tsebeng. Qoba ho romella litaba tsa leshano le ho rohaka ba bang ho WhatsApp. Bontša Botho marang-rang joaloka sefahleho le sefahleho.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Directly relate this to Moshoeshoe Hub app: an example of ethical technology that protects privacy by collecting zero user data.',
            st: 'Amanisang sena le Moshoeshoe Hub: mohlala oa theknoloji e nang le boitšoaro e sa bokelleng litaba tsa sephiri tsa bana.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'What should you do if an unknown stranger on WhatsApp or social media asks for your home address or private photos?',
            st: 'U lokela ho etsa eng haeba motho eo u sa mo tsebeng ho WhatsApp a u kopa aterese ea heno kapa linepe tsa sephiri?'
          },
          options: [
            { en: 'Block the number immediately and report it to a parent or teacher', st: 'Mo thibele hang-hang (block) ebe u bolella motsoali kapa tichere' },
            { en: 'Send them your photos and address right away', st: 'Mo romelle linepe le aterese hang-hang' },
            { en: 'Meet them in a dark lonely place alone', st: 'Kopana le eena sebakeng se lefifi u le mong' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'pss',
    lesson: {
      id: 'pss7_3',
      grade: 7,
      topic: { en: 'Life Goals & Leadership', st: 'Lipheo tsa Bophelo le Boetapele' },
      title: { en: 'Setting Life Goals and Transitioning to High School', st: 'Ho Rala Lipheo le ho Itokisetsa Sekolo se Phahameng' },
      syllabusRef: 'PSS G7 LO5',
      outcome: { en: 'Formulate personal academic goals and prepare emotionally for secondary education', st: 'Rala lipheo tsa thuto le ho itokisetsa sekolo se phahameng ka boits\'epo' },
      source: 'Lesotho Primary Curriculum (MoET) - PSS',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Completing primary school (Grade 7) is a proud milestone. Transitioning to high school requires independence, strong study discipline, and clear vision. Write down your goals, choose friendships that elevate you, and remember that with perseverance, education unlocks your destiny.',
            st: 'Ho qeta sekolo sa motheo (Grade 7) ke katleho e kholo ea boikhohomoso. Ho fetela sekolong se phahameng ho hloka boikemelo, boikarabello, le pono e hlakileng. Ngola fatše lipheo tsa hao, khetha metsoalle e u phahamisang, ' + "’me u hopole hore thuto e bula menyako eohle ea bophelo."
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Have each Grade 7 learner write a letter to their future self in 5 years describing who they want to become.',
            st: 'Kopang moithuti ka mong ho ngolla "eena oa bokamoso" lengolo le hlalosang toro ea hae ka lilemo tse 5 tse tlang.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'What personal trait is most essential for overcoming academic challenges as you transition to secondary school?',
            st: 'Ke boleng bofe ba motho bo bohlokoa ka ho fetisisa ho hlōla mathata a thuto ha u kena sekolong se phahameng?'
          },
          options: [
            { en: 'Perseverance (Mamello), self-discipline, and consistent hard work', st: 'Mamello, boikarabello, le ho sebetsa ka thata ho tsoelang pele' },
            { en: 'Giving up the first time a question is difficult', st: 'Ho tela hang ha potso e le thata' },
            { en: 'Blaming others for your mistakes', st: 'Ho beha ba bang molato' }
          ],
          answer: 0
        }
      ]
    }
  }
];

