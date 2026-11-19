// Science expansion lessons for Grades 1, 2, 3, 4, 6, 7
module.exports = [
  {
    subjectId: 'science',
    lesson: {
      id: 's1_2',
      grade: 1,
      topic: { en: 'Animals Around Us', st: 'Liphoofolo Tse Haufi le Rona' },
      title: { en: 'Domestic Animals in Lesotho', st: 'Liphoofolo tsa Lapeng Lesotho' },
      syllabusRef: 'Science G1 LO2',
      outcome: { en: 'Name domestic animals and describe how they help our families', st: 'Reha liphoofolo tsa lapeng le ho hlalosa hore na li thusa malapa joang' },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Domestic animals live with us at home. Cows give us fresh milk and meat. Horses and donkeys carry loads across our mountains. Chickens lay eggs.',
            st: 'Liphoofolo tsa lapeng li phela le rona hae. Likhomo li re fa lebese le nama. Lipere le liesele li jara meroalo lithabeng tsa rona. Likhoho li behela mahe.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Ask learners to mimic the sounds of different domestic animals (cows, goats, sheep).',
            st: 'Kopang baithuti ho etsisa melumo ea liphoofolo tse fapaneng tsa lapeng (likhomo, lipoli, linku).'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'Which domestic animal is known for carrying heavy loads across rugged mountain paths in Lesotho?',
            st: 'Ke phoofolo efe ea lapeng e tsebahalang ka ho jara meroalo e boima litseleng tsa lithaba Lesotho?'
          },
          options: [
            { en: 'Donkey or Horse', st: 'Esele kapa Pere' },
            { en: 'Cat', st: 'Katse' },
            { en: 'Rabbit', st: '’Mutla' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'science',
    lesson: {
      id: 's1_3',
      grade: 1,
      topic: { en: 'Cleanliness & Health', st: 'Bohloeki le Bophelo bo Botle' },
      title: { en: 'Washing Hands with Soap and Water', st: 'Ho Hlatsoa Matsoho ka Sesepa le Metsi' },
      syllabusRef: 'Science G1 LO5',
      outcome: { en: 'Demonstrate proper handwashing techniques to prevent illness', st: 'Bontša mekhoa e nepahetseng ea ho hlatsoa matsoho ho thibela maloetse' },
      source: 'Lesotho Health & Science Syllabus',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Washing hands with clean water and soap keeps germs away. We wash our hands after using the toilet, before eating food, and after playing in the soil.',
            st: 'Ho hlatsoa matsoho ka metsi a hloekileng le sesepa ho leleka likokoana-hloko. Re hlatsoa matsoho kamora ho sebelisa ntlwana, pele re ja lijo, le kamora ho bapala mobung.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Sing the alphabet song or a short Sesotho rhyme while scrubbing palms, fingers, and fingernails.',
            st: 'Binang pina e khutšoanyane ha le hlatsoa lithoko tsa matsoho, menwana le manala.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'When is it very important to wash your hands with soap and clean water?',
            st: 'Ke neng ha ho le bohlokoa haholo ho hlatsoa matsoho ka sesepa le metsi a hloekileng?'
          },
          options: [
            { en: 'Before eating and after using the toilet', st: 'Pele u ja le kamora ho sebelisa ntlwana' },
            { en: 'Only when hands look black with mud', st: 'Feela ha matsoho a bonahala a le matšo ke seretse' },
            { en: 'Never, water alone is enough', st: 'Le ka mohla, metsi a le mong a lekane' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'science',
    lesson: {
      id: 's2_2',
      grade: 2,
      topic: { en: 'Plants in our Environment', st: 'Limela Tikolohong ea Rona' },
      title: { en: 'What Plants Need to Grow', st: 'Seo Limela li se Hlokang ho Hola' },
      syllabusRef: 'Science G2 LO3',
      outcome: { en: 'Identify the key requirements for healthy plant growth', st: 'Tseba lintlha tsa mantlha tseo semela se li hlokang ho hola hantle' },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Plants are living things. To germinate and grow into healthy crops like maize or beans, plants need sunlight, clean water, air, and fertile soil.',
            st: 'Limela ke lintho tse phelang. E le hore li mele le ho hlahisa lijo tse kang poone kapa linaoa, li hloka khanya ea letsatsi, metsi a hloekileng, moea, le mobu o motle.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Plant bean seeds in two recycled tin cans: put one in the dark and one in the sunlight to compare growth.',
            st: 'Jalang linaoa makotikoting a mabeli: le beheng le leng lefifing le leng letsatsing ho bona phapang.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'What will happen to a plant if you lock it in a dark cupboard without sunlight or water?',
            st: 'Ho tla etsahala eng ho semela haeba u se koalla ka khaboting e lefifi se se na letsatsi kapa metsi?'
          },
          options: [
            { en: 'It will grow fast and tall', st: 'Se tla hola ka potlako le ho phahama' },
            { en: 'It will turn yellow, wither and die', st: 'Se tla tšehla, se funehe ebe sea shoa' },
            { en: 'It will produce sweet fruit', st: 'Se tla hlahisa litholoana tse monate' }
          ],
          answer: 1
        }
      ]
    }
  },
  {
    subjectId: 'science',
    lesson: {
      id: 's2_3',
      grade: 2,
      topic: { en: 'Materials Around Us', st: 'Lintho le Lisebelisoa' },
      title: { en: 'Wood, Stone, Plastic, and Metal', st: 'Patsi, Lejoe, Plastiki, le Tšepe' },
      syllabusRef: 'Science G2 LO6',
      outcome: { en: 'Sort everyday objects according to their material composition', st: 'Khetholla lintho tsa letsatsi le letsatsi ho latela thepa e li entseng' },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Objects are made from different materials. Stone is hard and used for building strong houses. Wood comes from trees and is used for roofing and desks. Metal is strong and conducts heat.',
            st: 'Lintho li entsoe ka thepa e fapaneng. Lejoe le thata ' + "’me le sebelisoa ho haha matlo a matla. Patsi e tsoa lifateng ’me e etsa marulelo le litafole. Tšepe e matla ’me e jara mocheso."
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Have learners touch a stone, a wooden stick, and a metal spoon to describe how each feels.',
            st: 'Etsang hore baithuti ba tšoare lejoe, lehong, le khaba ea tšepe ho hlalosa maikutlo a tsona.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'Which material is traditionally used to build durable stone houses in rural Lesotho?',
            st: 'Ke thepa efe e sebelisoang ho tloha khale ho haha matlo a matla a majoe mahaeng a Lesotho?'
          },
          options: [
            { en: 'Local sandstone and rock', st: 'Majoe a sesotho a bōpiloeng' },
            { en: 'Paper', st: 'Pampiri' },
            { en: 'Cardboard', st: 'Khatone' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'science',
    lesson: {
      id: 's3_2',
      grade: 3,
      topic: { en: 'Animal Habitats', st: 'Mahoae a Liphoofolo' },
      title: { en: 'Where Animals Live in Lesotho', st: 'Moo Liphoofolo li Phelang Teng Lesotho' },
      syllabusRef: 'Science G3 LO4',
      outcome: { en: 'Explain how different animals find shelter and survive in mountain habitats', st: 'Hlalosa kamoo liphoofolo li fumanang bolulo le ho phela libakeng tsa lithaba' },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'A habitat is the natural home of an animal. Birds like the Cape vulture build nests on high cliffs in the Maloti mountains. Fish live in rivers like Senqu. Mice and moles dig burrows in the soil.',
            st: 'Lehae la tlhaho la phoofolo le bitsoa habitat. Linonyana tse kang lenong li aha lihlaha mafikeng a phahameng lithabeng tsa Maloti. Lihlapi li phela linokeng tse kang Senqu. Litoeba li cheka masoba mobung.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Discuss the bearded vulture (sehlanyane) and why mountain cliffs protect its young.',
            st: 'Buisanang ka sehlanyane le lebaka leo mafika a phahameng a sireletsang litsuonyana tsa sona.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'Where does the Maloti minnow (tlhapi ea Maloti) live and lay its eggs?',
            st: 'Tlhapi ea Maloti e phela le ho behela mahe a eona kae?'
          },
          options: [
            { en: 'In clear, cold mountain streams', st: 'Meluleng e hloekileng le e batang ea lithaba' },
            { en: 'In the high blue sky', st: 'Leholimong le phahameng' },
            { en: 'Inside deep dry caves', st: 'Ka hare ho mahaheng a omileng' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'science',
    lesson: {
      id: 's3_3',
      grade: 3,
      topic: { en: 'The Water Cycle', st: 'Potoloho ea Metsi' },
      title: { en: 'Rain, Clouds, and Evaporation', st: 'Pula, Maru, le Mouoane' },
      syllabusRef: 'Science G3 LO5',
      outcome: { en: 'Describe how the sun warms water to form clouds and rain', st: 'Hlalosa kamoo letsatsi le futhumatsang metsi ho etsa maru le pula' },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'The water cycle is the continuous movement of water. The warm sun evaporates water from dams and rivers into invisible vapor. As it rises high in the cold sky, it condenses into clouds and falls back as rain or snow.',
            st: 'Potoloho ea metsi ke tsela eo metsi a tsamaeang ka eona ho sa khaotse. Letsatsi le futhumatsa metsi matamong le linokeng ebe a fetohela mouoaneng. Ha a fihla holimo ho batang, a fetoha maru ebe a na e le pula kapa lehloa.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Boil a cup of hot water with a cold plate held above it to show condensation droplets forming.',
            st: 'Belisang metsi a chesang le tšoare poleiti e batang holimo ho bona marotholi a pula a bōpeha.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'What causes liquid water in rivers and puddles to evaporate into the sky?',
            st: 'Ke eng e etsang hore metsi a phallang linokeng le matamong a fetohe mouoane o eang leholimong?'
          },
          options: [
            { en: 'The heat from the sun', st: 'Mocheso o tsoang letsatsing' },
            { en: 'The dark night clouds', st: 'Bolefifa ba maru a bosiu' },
            { en: 'The cold winter frost', st: 'Serame sa mariha' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'science',
    lesson: {
      id: 's4_2',
      grade: 4,
      topic: { en: 'States of Matter', st: 'Mefuta ea Lintho (Matter)' },
      title: { en: 'Solids, Liquids, and Gases', st: 'Lintho Tse Thata, Tse Metsi, le Mahlaseli/Moea' },
      syllabusRef: 'Science G4 LO1',
      outcome: { en: 'Classify common substances into solids, liquids, and gases', st: 'Hlophisa lintho tse tloaelehileng e le tse thata, tse metsi, le meea' },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Matter has three main states: Solid (has a fixed shape like a stone or ice), Liquid (flows and takes the shape of its container like milk or river water), and Gas (spreads out into any space like the air we breathe).',
            st: 'Lintho tsohle li na le mefuta e meraro: Se thata (se na le sebopeho se tiileng joaloka lejoe kapa leqhoa), Se metsi (sea phalla ' + "’me se nka sebopeho sa setshelo joaloka lebese kapa metsi), le Moea (oa phatlalala joaloka moea oo re o hemang)."
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Blow up a balloon to demonstrate that air (gas) takes up space and has mass.',
            st: 'Budulang balunu ho bontša hore moea o nka sebaka ebile o na le boima.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'Which of the following is an example of a liquid?',
            st: 'Har\'a tse latelang, ke efe e leng mohlala oa ntho e metsi?'
          },
          options: [
            { en: 'River water', st: 'Metsi a noka' },
            { en: 'A heavy sandstone block', st: 'Lejoe le boima la lehlabathe' },
            { en: 'Smoke rising from a chimney', st: 'Mosi o tsoang chimney' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'science',
    lesson: {
      id: 's4_3',
      grade: 4,
      topic: { en: 'Food & Nutrition', st: 'Lijo le Phepo e Ntle' },
      title: { en: 'A Balanced Diet for Basotho Children', st: 'Lijo Tse Mevalobalo Bakeng sa Bana ba Basotho' },
      syllabusRef: 'Science G4 LO6',
      outcome: { en: 'Plan a healthy balanced meal using locally accessible Lesotho foods', st: 'Rala lijo tse matlafatsang u sebelisa lijo tse fumanehang Lesotho' },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'A balanced meal contains energy foods (papa, samp, sorghum), body-building foods (beans, eggs, milk, meat), and protective foods (moroho, spinach, carrots, wild herbs like thepe). Eating balanced meals prevents illness and keeps your mind sharp.',
            st: 'Lijo tse mevalobalo li na le lijo tse fanang ka matla (papa, setampa, mabele), lijo tse ahang ' + "’mele (linaoa, mahe, lebese, nama), le lijo tse sireletsang ’mele maloetseng (moroho oa meroho, spinach, thepe, seruoe). Ho ja hantle ho thibela bokuli."
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Encourage learners to value traditional wild leafy vegetables (thepe, seruoe, bobatsi) which are rich in iron and vitamins.',
            st: 'Khothalletsang baithuti ho ananela meroho ea Sesotho ea tlhaho (thepe, seruoe) e nang le livithamine tse ngata.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'Which local food is rich in protein to help build strong muscles and repair body tissues?',
            st: 'Ke lijo life tsa lehae tse nang le protheine e ngata e ahang mesifa le ho matlafatsa ’mele?'
          },
          options: [
            { en: 'Cooked beans (linaoa)', st: 'Linaoa tse phehiloeng' },
            { en: 'White refined sugar', st: 'Tsoekere e tšoeu' },
            { en: 'Plain cooking oil', st: 'Ooli ea ho pheha feela' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'science',
    lesson: {
      id: 's6_2',
      grade: 6,
      topic: { en: 'Ecosystems & Food Chains', st: 'Mekhoa ea Tlhaho le Meketane ea Lijo' },
      title: { en: 'Producers, Consumers, and Decomposers', st: 'Bahlahisi, Bajalefa, le Ba-bōli ba Tlhaho' },
      syllabusRef: 'Science G6 LO3',
      outcome: { en: 'Construct food chains illustrating energy flow in Lesotho grasslands', st: 'Aha meketane ea lijo e bontšang phallo ea matla makhulong a Lesotho' },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'In an ecosystem, green plants are producers because they produce food using sunlight. Herbivores like sheep eat plants (primary consumers). Carnivores like jackals eat herbivores (secondary consumers). Fungi and bacteria decompose dead matter back into soil nutrients.',
            st: 'Tlhahong, limela tse tala ke bahlahisi hobane li etsa lijo ka letsatsi. Liphoofolo tse jang joang joaloka linku ke bajalefa ba mantlha. Tse jang nama joaloka phokojoe ke bajalefa ba bobeli. Likokoanyana tsa mobung li bōlisa litopo ho etsa monontša mobung.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Draw a chain on the board: Grass -> Locust -> Bird -> Hawk -> Soil decomposers.',
            st: 'Tšoantšang mokoloko letlapeng: Joang -> Tsie -> Nonyana -> Ntsu -> Libōkō tsa mobu.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'In a grassland food chain, what role do green plants play?',
            st: 'Moketaneng oa lijo makhulong, limela tse tala li bapala karolo efe?'
          },
          options: [
            { en: 'Producers (making energy from sunlight)', st: 'Bahlahisi (ba hlahisang lijo ka letsatsi)' },
            { en: 'Decomposers', st: 'Babolisi' },
            { en: 'Top carnivores', st: 'Bajalefa ba jang nama feela' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'science',
    lesson: {
      id: 's6_3',
      grade: 6,
      topic: { en: 'Human Body Systems', st: 'Tsamaiso ea ’Mele oa Motho' },
      title: { en: 'The Human Circulatory System', st: 'Tsamaiso ea Mali ’Meleng oa Motho' },
      syllabusRef: 'Science G6 LO5',
      outcome: { en: 'Explain the function of the heart, blood vessels, and blood in transporting oxygen', st: 'Hlalosa mosebetsi oa pelo, methapo ea mali, le mali ho tsamaisa oksijene' },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'The circulatory system transports oxygen and nutrients around the body. The heart acts as a muscular pump beating night and day. Arteries carry oxygen-rich blood away from the heart, while veins carry deoxygenated blood back to the heart and lungs.',
            st: 'Tsamaiso ea mali e tsamaisa oksijene le lijo ' + "’meleng kaofela. Pelo e sebetsa joaloka pompong e pompang mali bosiu le motšeare. Methapo e meholo (arteries) e nka mali a nang le oksijene ho tloha pelong, ha methapo e khutlang (veins) e khutlisetsa mali pelong le matšoafong."
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Help learners find their pulse on their wrist or neck and count beats for 15 seconds.',
            st: 'Thusang baithuti ho fumana ho otla ha pelo letsohong kapa molaleng ebe ba bala metsotsoana e 15.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'Which organ pumps blood throughout the human body?',
            st: 'Ke setho sefe se pompang mali ’meleng oohle oa motho?'
          },
          options: [
            { en: 'The Heart', st: 'Pelo' },
            { en: 'The Stomach', st: 'Mpa' },
            { en: 'The Liver', st: 'Sebete' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'science',
    lesson: {
      id: 's7_2',
      grade: 7,
      topic: { en: 'Environmental Science', st: 'Saense ea Tikoloho' },
      title: { en: 'Renewable Energy: Solar, Wind, and Hydro in Lesotho', st: 'Matla a Tlhaho: Letsatsi, Moea, le Metsi Lesotho' },
      syllabusRef: 'Science G7 LO4',
      outcome: { en: 'Evaluate renewable energy technologies suitable for rural electrification in Lesotho', st: 'Hlahloba theknoloji ea matla a letsatsi, moea le metsi e loketseng metse ea mahaeng' },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Renewable energy comes from natural resources that never run out. Lesotho has over 300 sunny days each year for solar power, strong mountain winds for wind turbines, and abundant highland water at ' + "’Muela Hydropower Station to generate clean electricity without burning coal.",
            st: 'Matla a nchafalang a tsoa tlhahong ' + "’me ha a fele. Lesotho le na le matsatsi a fetang 300 a letsatsi ka selemo bakeng sa motlakase oa letsatsi, meea e matla ea lithaba bakeng sa li-wind turbine, le metsi a mangata setsing sa motlakase sa ’Muela ho fehla motlakase o hloekileng."
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Connect this to how solar lights allow learners in rural villages to study after dark without paraffin fumes.',
            st: 'Bapisang sena le kamoo mabone a letsatsi a thusang bana ba mahaeng ho ithuta bosiu ntle le mosi oa parafini.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'Where is electricity generated from falling water inside Lesotho under the LHWP project?',
            st: 'Ke hokae moo motlakase o fehloang ka metsi a phallang ka hare ho Lesotho tlas\'a morero oa LHWP?'
          },
          options: [
            { en: '’Muela Hydropower Station', st: 'Setsi sa Motlakase sa ’Muela' },
            { en: 'Maseru Railway Station', st: 'Seteishene sa Terene sa Maseru' },
            { en: 'Qacha’s Nek Airstrip', st: 'Sebaka sa Lifofane sa Qacha’s Nek' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'science',
    lesson: {
      id: 's7_3',
      grade: 7,
      topic: { en: 'Reproduction & Genetics', st: 'Tlhahiso le Bongoli ba Bophelo' },
      title: { en: 'Adolescence, Puberty, and Hygiene', st: 'Bongoli ba Bacha, Boikemelo, le Bohloeki' },
      syllabusRef: 'Science G7 LO7',
      outcome: { en: 'Understand physical and emotional changes during puberty with dignity and hygiene', st: 'Utloisisa liphetoho tsa ’mele le maikutlo nakong ea bocha ka seriti le bohloeki' },
      source: 'Lesotho Health & Science Curriculum',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Puberty is the transition period when a child develops into an adult. Physical changes include voice deepening, growth spurts, body hair, and menstruation for girls. Practicing good hygiene, respecting your body, and understanding these natural changes builds self-confidence.',
            st: 'Bochaba ke nako eo ngoana a fetohang ho ba motho e moholo. Liphetoho li kenyelletsa ho teba ha lentsoe, ho hola ka potlako, moriri ' + "’meleng, le matsatsi a khoeli ho banana. Ho hlokomela bohloeki le ho hlompha ’mele oa hao ho haha boits\'epo."
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Encourage an open, supportive atmosphere where biological facts dispel fear, teasing, or cultural taboos.',
            st: 'Thehang moea o tletseng tšebelisano ' + "’moho le tlhompho moo linnete tsa saense li felisang tšabo le ho tšeana."
          }
        },
        {
          type: 'activity',
          q: {
            en: 'Why do young people experience bodily and emotional changes during adolescence?',
            st: 'Hobaneng ha bacha ba ba le liphetoho tsa ’mele le maikutlo nakong ea bocha?'
          },
          options: [
            { en: 'It is a normal, healthy biological process caused by hormones', st: 'Ke tšebetso e tloaelehileng le e phetseng hantle ea lihomone' },
            { en: 'It is a dangerous illness that requires hospital medicine', st: 'Ke boloi kapa bokuli bo kotsi' },
            { en: 'It only happens to children who misbehave', st: 'Ho etsahala feela ho bana ba sa mameleng' }
          ],
          answer: 0
        }
      ]
    }
  }
];

