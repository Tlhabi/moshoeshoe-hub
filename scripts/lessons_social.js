// Social Studies lessons for Grades 1, 2, 3, 4, 6, 7
module.exports = [
  {
    subjectId: 'social',
    lesson: {
      id: 'ss1_1',
      grade: 1,
      topic: { en: 'My Family & Home', st: 'Lelapa le Lehae la Ka' },
      title: { en: 'Members of My Family', st: 'Litho tsa Lelapa la Ka' },
      syllabusRef: 'Social Studies G1 LO1',
      outcome: { en: 'Identify roles of family members and practice respect at home', st: 'Tseba mesebetsi ea litho tsa lelapa le ho bontša tlhompho lapeng' },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'A family cares for and protects each other. In our homes, we have parents, grandparents (nkhono le ntate-moholo), brothers, and sisters. We show love by helping with simple chores like fetching water or sweeping the yard.',
            st: 'Lelapa le hlokomelana le ho sireletsana. Malapeng a rona, re na le batsoali, nkhono le ntate-moholo, bo-abuti le bo-ausi. Re bontša lerato ka ho thusa mesebetsing e kang ho kha metsi kapa ho fiela lebala.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Ask learners to draw a picture of their family doing an activity together at home.',
            st: 'Kopang baithuti ho taka setšoantšo sa lelapa la bona le sebetsa ’moho lapeng.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'How can young children show love and respect to elders at home?',
            st: 'Bana ba banyenyane ba ka bontša lerato le tlhompho joang ho batho ba baholo lapeng?'
          },
          options: [
            { en: 'By greeting politely and helping with chores', st: 'Ka ho lumelisa ka tlhompho le ho thusa mesebetsing' },
            { en: 'By running away when called', st: 'Ka ho baleha ha ba bitsoa' },
            { en: 'By refusing to eat meals', st: 'Ka ho hana ho ja lijo' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'social',
    lesson: {
      id: 'ss1_2',
      grade: 1,
      topic: { en: 'Our School', st: 'Sekolo sa Rona' },
      title: { en: 'Rules and Safety at School', st: 'Melao le Tšireletseho Sekolong' },
      syllabusRef: 'Social Studies G1 LO3',
      outcome: { en: 'Follow basic school safety guidelines and cooperate with classmates', st: 'Latela melao ea mantlha ea tšireletseho sekolong le ho sebelisana le bana ba bang' },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Our school is a place of learning and friendship. We obey school rules: we walk without running in corridors, we listen to our teachers, we do not push others, and we keep the schoolyard clean.',
            st: 'Sekolo sa rona ke sebaka sa ho ithuta le botsoalle. Re mamela melao ea sekolo: ha re mathe liphasejeng, re mamela matichere, ha re sutumetsane, ' + "’me re hloekisa lebala la sekolo."
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Role-play how to walk calmly in single file when entering the classroom.',
            st: 'Bapallang kamoo bana ba kenang ka molula-ho-ho-ea ka phaposing ntle le pherekano.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'What should you do if you see banana peels or plastic trash in the school yard?',
            st: 'U lokela ho etsa eng ha u bona makhapetla a libanana kapa lipolastiki lebaleng la sekolo?'
          },
          options: [
            { en: 'Pick it up and place it in the rubbish bin', st: 'E nke ’me u e lahle ka moqomong oa lithōle' },
            { en: 'Kick it further into the playground', st: 'E rahe e kene lebaleng la lipapali' },
            { en: 'Leave it there for animals to eat', st: 'E tlohele e jeoe ke liphoofolo' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'social',
    lesson: {
      id: 'ss1_3',
      grade: 1,
      topic: { en: 'Our Surroundings', st: 'Tikoloho ea Rona' },
      title: { en: 'Special Places in our Village', st: 'Libaka tsa Bohlokoa Motseng oa Rona' },
      syllabusRef: 'Social Studies G1 LO5',
      outcome: { en: 'Name key landmarks in the village such as the chief’s place, church, and water pump', st: 'Tseba libaka tsa bohlokoa motseng joaloka khotla, kereke, le pompo ea metsi' },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Every village in Lesotho has special places that serve our community: the Chief\'s court (lekhotleng) for community meetings, the clinic for healing sick people, the church for worship, and the community water tap.',
            st: 'Motse o mong le o mong Lesotho o na le libaka tsa bohlokoa: khotla la Morena bakeng sa liphutheho, tleliniki ea batho ba kulang, kereke ea thapelo, le pompo ea metsi ea sechaba.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Ask learners which landmark is closest to their home.',
            st: 'Botsang baithuti hore na ke sebaka sefe sa bohlokoa se haufi le malapa a bona.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'Where do community elders and village members gather to discuss village safety and development?',
            st: 'Batho ba baholo le litho tsa motse ba bokana kae ho buisana ka tšireletseho le tsoelopele ea motse?'
          },
          options: [
            { en: 'At the Chief’s court (Lekhotleng la Morena)', st: 'Khotla la Morena (Lekhotleng)' },
            { en: 'Behind the cattle kraal at night', st: 'Ka morao ho lesaka bosiu' },
            { en: 'At the football pitch during a match', st: 'Lebaleng la bolo nakong ea papali' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'social',
    lesson: {
      id: 'ss2_2',
      grade: 2,
      topic: { en: 'Transport & Travel', st: 'Lipalangoang le Maeto' },
      title: { en: 'How People Travel in Lesotho', st: 'Tsela eo Batho ba Tsamaeang ka Eona Lesotho' },
      syllabusRef: 'Social Studies G2 LO2',
      outcome: { en: 'Compare traditional transport (horses, walking) with modern transport (taxis, buses)', st: 'Bapisa lipalangoang tsa khale (lipere, maoto) le tsa morao-rao (litaxi, libese)' },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'In the high mountains of Lesotho, people rely on horses and walking along footpaths. In towns like Maseru and Leribe, people travel using minibuses (4+1 taxis), large buses, and trucks.',
            st: 'Lithabeng tse phahameng tsa Lesotho, batho ba tsamaea ka lipere le ka maoto litselaneng. Litoropong tse kang Maseru le Leribe, batho ba palama li-taxi tsa 4+1, libese tse kholo, le literaka.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Discuss road safety when walking along tarred roads and looking both ways before crossing.',
            st: 'Buisanang ka tšireletseho litseleng le ho qamaka mahlakore ka bobeli pele u tšela tsela.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'Why are Basotho ponies well-suited for traveling in the rugged highlands?',
            st: 'Hobaneng ha lipere tsa Basotho li loketse ho tsamaea lithabeng tse phahameng?'
          },
          options: [
            { en: 'They are sure-footed, strong, and endure cold mountain weather', st: 'Li na le maoto a tiileng, li matla ebile li mamella serame' },
            { en: 'They can fly across wide rivers', st: 'Li khona ho fofa holim\'a linoka' },
            { en: 'They use petrol engines', st: 'Li sebelisa enjene ea peterole' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'social',
    lesson: {
      id: 'ss2_3',
      grade: 2,
      topic: { en: 'Cultural Clothing', st: 'Liaparo tsa Setso' },
      title: { en: 'The Basotho Blanket (Kobo) and Mokorotlo Hat', st: 'Kobo ea Sesotho le Mokorotlo' },
      syllabusRef: 'Social Studies G2 LO5',
      outcome: { en: 'Identify the significance of the Basotho blanket and conical straw hat as national heritage', st: 'Tseba bohlokoa ba kobo ea Sesotho le mokorotlo e le lefa la sechaba' },
      source: 'Lesotho Cultural Heritage / Primary Syllabus',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'The Basotho blanket (kobo) is our national garment worn with pride for warmth and during ceremonies like weddings. The mokorotlo is a conical grass hat woven from local mosea grass, inspired by the shape of Mount Qiloane.',
            st: 'Kobo ea Sesotho ke seaparo sa boikhohomoso sa naha se aparaeng bakeng sa mofuthu le meletlong e kang ea machato. Mokorotlo ke katiba ea joang bo bitsoang mosea, e bōpiloeng ka sebopeho sa Thaba ea Qiloane.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Show a picture of Mount Qiloane next to a mokorotlo to highlight the iconic silhouette.',
            st: 'Bontšang setšoantšo sa Thaba ea Qiloane pel\'a mokorotlo ho bona tšoano ea tsona.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'Which famous mountain near Thaba-Bosiu gave shape and inspiration to the national hat (Mokorotlo)?',
            st: 'Ke thaba efe e tsebahalang haufi le Thaba-Bosiu e faneng ka sebopeho sa katiba ea naha (Mokorotlo)?'
          },
          options: [
            { en: 'Mount Qiloane', st: 'Thaba ea Qiloane' },
            { en: 'Mount Kilimanjaro', st: 'Thaba ea Kilimanjaro' },
            { en: 'Table Mountain', st: 'Thaba ea Table' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'social',
    lesson: {
      id: 'ss3_1',
      grade: 3,
      topic: { en: 'Our Districts', st: 'Litereke tsa Lesotho' },
      title: { en: 'The 10 Districts of Lesotho', st: 'Litereke Tse 10 tsa Lesotho' },
      syllabusRef: 'Social Studies G3 LO1',
      outcome: { en: 'Name and locate the 10 administrative districts of Lesotho on a map', st: 'Reha le ho fumana litereke tse 10 tsa tsamaiso tsa Lesotho ' + "’mapeng" },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'The Kingdom of Lesotho is divided into 10 districts: Maseru (the capital), Berea, Leribe, Butha-Buthe, Mokhotlong, Thaba-Tseka, Qacha\'s Nek, Quthing, Mohale\'s Hoek, and Mafeteng. Each district has a administrative town.',
            st: '’Muso oa Lesotho o arotsoe ka litereke tse 10: Maseru (motse-moholo), Berea, Leribe, Butha-Buthe, Mokhotlong, Thaba-Tseka, Qacha\'s Nek, Quthing, Mohale\'s Hoek, le Mafeteng. Setereke ka seng se na le toropo ea tsamaiso.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Have learners chant the 10 districts starting from the north down to the south.',
            st: 'Etsang hore baithuti ba bine mabitso a litereke ho tloha leboea ho ea boroa.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'Which district is the capital city and center of government in Lesotho?',
            st: 'Ke setereke sefe se nang le motse-moholo le setsi sa mebuso Lesotho?'
          },
          options: [
            { en: 'Maseru', st: 'Maseru' },
            { en: 'Mokhotlong', st: 'Mokhotlong' },
            { en: 'Quthing', st: 'Quthing' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'social',
    lesson: {
      id: 'ss3_2',
      grade: 3,
      topic: { en: 'Weather & Seasons', st: 'Linako tsa Selemo Lesotho' },
      title: { en: 'The Four Seasons in Lesotho', st: 'Linako Tse ' + "’Nè tsa Selemo Lesotho" },
      syllabusRef: 'Social Studies G3 LO4',
      outcome: { en: 'Describe farming and clothing practices during the four distinct seasons', st: 'Hlalosa mesebetsi ea temo le liaparo linakong tse nne tsa selemo' },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Lesotho has four seasons: Spring (Selemo) when farmers plough and flowers bloom; Summer (Lehlabula) with rains and growing crops; Autumn (Hoetla) when maize is harvested; and Winter (Mariha) with frost, cold winds, and snow on the mountains.',
            st: 'Lesotho le na le linako tse ' + "’nè: Selemo (balemi ba lema, lipalesa lia thunya); Lehlabula (pula ea na, lijalo lia hola); Hoetla (ho kotuloa poone le mabele); le Mariha (serame se bohale, moea o batang le lehloa lithabeng)."
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Discuss how herdboys prepare heavy gumboots, thick blankets, and balaclavas for winter.',
            st: 'Buisanang ka kamoo balisana ba itokisetsang mariha ka likobo tse tenya, likatiba le lijalane.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'During which season do Basotho farmers harvest dry maize, beans, and pumpkins from fields?',
            st: 'Ke nakong efe ea selemo moo balemi ba Basotho ba kotulang poone, linaoa le maphodi masimong?'
          },
          options: [
            { en: 'Autumn (Hoetla)', st: 'Hoetla' },
            { en: 'Spring (Selemo)', st: 'Selemo' },
            { en: 'Mid-Winter (Kharatsa ea Mariha)', st: 'Kharatsa ea Mariha' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'social',
    lesson: {
      id: 'ss3_3',
      grade: 3,
      topic: { en: 'Traditional Games', st: 'Lipapali tsa Setso' },
      title: { en: 'Morabaraba, Liketo, and Melao ea Tsona', st: 'Morabaraba, Liketo, le Melao ea Tsona' },
      syllabusRef: 'Social Studies G3 LO6',
      outcome: { en: 'Explain the rules of Morabaraba and how it teaches patience and strategic thinking', st: 'Hlalosa melao ea Morabaraba le kamoo e rutang mamello le bohlale ba maano' },
      source: 'Lesotho Cultural Curriculum',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Morabaraba is an ancient traditional board game played on carved rock or cardboard with 12 cows (tokens) each. It teaches planning, counting, and strategic defense. Liketo is a hand-eye coordination game played with small stones and a hole in the ground.',
            st: 'Morabaraba ke papali ea bohlale ea khale e bapaloang lefikeng kapa khatoneng e nang le likhomo tse 12 ka lehlakore. E ruta moralo, lipalo, le tšireletso. Liketo ke papali ea matsoho le mahlo e bapaloang ka majoana le sekoti fatše.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Draw a Morabaraba board in the sand outside and let two learners play a quick match.',
            st: 'Ralang Morabaraba mobung lebaleng ebe le lumella baithuti ba babeli ho bapala papali e potlakileng.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'How many cows (tokens) does each player start with in the game of Morabaraba?',
            st: 'Sebapali ka seng se qala ka likhomo (majoe) tse kae papaling ea Morabaraba?'
          },
          options: [
            { en: '12 cows', st: 'Likhomo tse 12' },
            { en: '6 cows', st: 'Likhomo tse 6' },
            { en: '24 cows', st: 'Likhomo tse 24' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'social',
    lesson: {
      id: 'ss4_1',
      grade: 4,
      topic: { en: 'Basotho History', st: 'Nalane ea Basotho' },
      title: { en: 'Thaba-Bosiu: The Mountain Fortress of Peace', st: 'Thaba-Bosiu: Qhobosheane ea Khotso' },
      syllabusRef: 'Social Studies G4 LO1',
      outcome: { en: 'Describe how King Moshoeshoe I used Thaba-Bosiu to defend and unite the Basotho nation', st: 'Hlalosa kamoo Morena Moshoeshoe I a sebelisitseng Thaba-Bosiu ho sireletsa le ho kopanya sechaba' },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'In 1824, King Moshoeshoe I led his people from Butha-Buthe to Thaba-Bosiu ("Mountain at Night"). With sheer cliffs and natural passes like Khubelu and Raebe, it could be defended easily. On top, fertile soil and spring water kept people alive during sieges.',
            st: 'Ka 1824, Morena Moshoeshoe I o ile a etella sechaba pele ho tloha Butha-Buthe ho ea Thaba-Bosiu ("Thaba ea Bosiu"). Ka mafika a eona a phahameng le likhoro tse kang Khubelu le Raebe, e ne e le thata ho hlaseloa. Holimo ho ne ho na le mehloli ea metsi le makhulo.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Emphasize Moshoeshoe’s philosophy of peace ("Khotso ke khoro") rather than warfare.',
            st: 'Totobatsang mohopolo oa Morena Moshoeshoe oa khotso ("Khotso ke khoro") ho e-na le ntoa.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'Why was Thaba-Bosiu such an effective stronghold for King Moshoeshoe I?',
            st: 'Hobaneng ha Thaba-Bosiu e ne e le qhobosheane e matla hakaale bakeng sa Morena Moshoeshoe I?'
          },
          options: [
            { en: 'Steep natural cliffs and freshwater springs on top', st: 'Mafika a phahameng a tlhaho le mehloli ea metsi a hloekileng holimo' },
            { en: 'It had modern electric fences', st: 'E ne e na le literata tsa motlakase' },
            { en: 'It was surrounded by sea water', st: 'E ne e pota-potiloe ke metsi a leoatle' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'social',
    lesson: {
      id: 'ss4_2',
      grade: 4,
      topic: { en: 'Natural Resources', st: 'Lisebelisoa tsa Tlhaho' },
      title: { en: 'White Gold: Water in Lesotho', st: 'Kauta e Tšoeu: Metsi a Lesotho' },
      syllabusRef: 'Social Studies G4 LO3',
      outcome: { en: 'Explain why water is referred to as Lesotho’s "White Gold"', st: 'Hlalosa lebaka leo ka lona metsi a bitsoang "Kauta e Tšoeu" ea Lesotho' },
      source: 'Lesotho Highlands Development Authority / Curriculum',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Water is our most valuable natural resource, nicknamed "White Gold". Lesotho\'s high mountains receive heavy rainfall and snow. Through the Lesotho Highlands Water Project (Katse and Mohale dams), water is delivered to South Africa, earning revenue for our country.',
            st: 'Metsi ke sesebelisoa sa bohlokoa ka ho fetisisa Lesotho, ' + "’me a bitsoa \"Kauta e Tšoeu\". Lithaba tsa Maloti li fumana pula le lehloa le lengata. Ka Morero oa Metsi a Lihlaba (Katse le Mohale), metsi a romeloa Afrika Boroa, ho kenya chelete sechabeng sa rona."
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Show photos or map locations of Katse Dam wall, which is over 185 metres high.',
            st: 'Bontšang setšoantšo kapa sebaka sa letamo la Katse leo lerako la lona le fetang bophahamo ba limithara tse 185.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'Why is water from Lesotho’s highlands called "White Gold"?',
            st: 'Hobaneng ha metsi a lithaba tsa Lesotho a bitsoa "Kauta e Tšoeu"?'
          },
          options: [
            { en: 'It is a pure, clean resource that generates national income', st: 'Ke sesebelisoa se hloekileng se kenyang chelete e ngata naheng' },
            { en: 'Because it turns white when exposed to sunlight', st: 'Hobane a fetoha a masoeu letsatsing' },
            { en: 'Because real gold is dissolved inside it', st: 'Hobane a na le kauta ea ' + "’nete ka hare" }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'social',
    lesson: {
      id: 'ss4_3',
      grade: 4,
      topic: { en: 'Land Conservation', st: 'Pabalelo ea Mobu' },
      title: { en: 'Stopping Dongas and Soil Erosion', st: 'Ho Thibela Likhohlo le Khoholeho ea Mobu' },
      syllabusRef: 'Social Studies G4 LO5',
      outcome: { en: 'Identify causes of soil erosion and community actions to prevent dongas', st: 'Tseba lisosa tsa khoholeho ea mobu le mekhoa ea sechaba ea ho thibela likhohlo' },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Soil erosion is a serious threat in Lesotho. When slopes are overgrazed or trees are chopped down, heavy rainwater washes topsoil away, creating massive ravines (dongas). Planting vetiver grass, planting trees, and building stone check-dams heal the land.',
            st: 'Khoholeho ea mobu ke bothata bo boholo Lesotho. Ha makhulo a jeoa ho feta tekanyo kapa lifate li rengoa, pula e matla e hohola mobu o motle ebe e etsa likhohlo tse kholo. Ho lema lifate, joang le ho haha methinya ea majoe ho pholosa naha.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Take learners to observe a small gully near the school and discuss how stone barriers slow rushing water.',
            st: 'Etsang leeto ho ea bona khohloana e haufi le sekolo le ho buisana kamoo lirapa tsa majoe li emisang lebelo la metsi.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'What can communities plant on bare hillsides to bind soil and stop donga formation?',
            st: 'Sechaba se ka lema eng matsoapong a se nang letho ho tšoara mobu le ho emisa likhohlo?'
          },
          options: [
            { en: 'Deep-rooted grass, shrubs, and indigenous trees', st: 'Joang bo metse e tebileng le lifate tsa tlhaho' },
            { en: 'Plastic bags', st: 'Mekotla ea polastiki' },
            { en: 'Nothing, bare soil is best', st: 'Ha ho letho, mobu o sa lengoang o molemo' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'social',
    lesson: {
      id: 'ss6_1',
      grade: 6,
      topic: { en: 'Government & Democracy', st: 'Puso le Puso ea Sechaba' },
      title: { en: 'Constitutional Monarchy and Parliament of Lesotho', st: 'Borena le Paramente ea Lesotho' },
      syllabusRef: 'Social Studies G6 LO2',
      outcome: { en: 'Explain the structure of Lesotho’s government including the King, Prime Minister, and Parliament', st: 'Hlalosa sebopeho sa puso ea Lesotho ho kenyeletsoa Morena, Tona-Kholo, le Paramente' },
      source: 'Lesotho Constitution / Primary Syllabus',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Lesotho is a Constitutional Monarchy. His Majesty King Letsie III is the Head of State and symbol of national unity. The Head of Government is the Prime Minister, supported by Cabinet ministers. Laws are debated and passed by the National Assembly and the Senate.',
            st: 'Lesotho ke naha ea Borena ba Molao oa Motheo. Motlotlehi Morena Letsie III ke Hlooho ea Naha le letšoao la bonngoe ba sechaba. Hlooho ea Puso ke Tona-Kholo. Melao e sebetsoa le ho fetisoa ke Paramente (Lekhotla la Sechaba le Senate).'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Organize a mock parliamentary debate in class on a village community issue.',
            st: 'Hlophisang ngangisano ea paramente phaposing ka taba e amang motse.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'Who is the Head of State and symbol of national unity in the Kingdom of Lesotho?',
            st: 'Ke mang Hlooho ea Naha le letšoao la bonngoe ba sechaba ka hare ho ’Muso oa Lesotho?'
          },
          options: [
            { en: 'His Majesty King Letsie III', st: 'Motlotlehi Morena Letsie III' },
            { en: 'The Chief Justice', st: 'Moahloli e Moholo' },
            { en: 'The Police Commissioner', st: 'Molaoli oa Sepolesa' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'social',
    lesson: {
      id: 'ss6_2',
      grade: 6,
      topic: { en: 'Regional Cooperation', st: 'Tšebelisano ea Libaka' },
      title: { en: 'Lesotho in SADC and the African Union', st: 'Lesotho ka hare ho SADC le Kopano ea Afrika (AU)' },
      syllabusRef: 'Social Studies G6 LO5',
      outcome: { en: 'Understand Lesotho’s role in regional trade, peace, and cultural cooperation', st: 'Utloisisa karolo ea Lesotho khoebong ea linaha, khotso, le tšebelisano ea setso' },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Lesotho is an active member of SADC (Southern African Development Community) and the African Union (AU). Being surrounded completely by South Africa, regional cooperation allows for open trade, road transit, labor migration, and peaceful regional security.',
            st: 'Lesotho ke setho se mafolofolo sa SADC le Mokhatlo oa Kopano ea Afrika (AU). Kaha le teetsoe hare ke Afrika Boroa, tšebelisano ena e lumella khoebo e lokolohileng, litsela, bafeti ba mesebetsi le tšireletso ea khotso.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Explain what an "enclave" country means and show a world map with Lesotho completely inside South Africa.',
            st: 'Hlalosang hore na naha e pota-potiloeng e bolela eng ' + "’mapeng oa lefatše."
          }
        },
        {
          type: 'activity',
          q: {
            en: 'What unique geographic feature describes Lesotho on the African continent?',
            st: 'Ke sebopeho sefe sa lefatshe se khethehileng se hlalosang Lesotho kontinenteng ea Afrika?'
          },
          options: [
            { en: 'It is an independent sovereign state completely encircled by South Africa', st: 'Ke naha e ikemetseng e teetsoeng hare ka ho felletseng ke Afrika Boroa' },
            { en: 'It is an island located in the Atlantic Ocean', st: 'Ke sehlekehleke se leoatleng' },
            { en: 'It borders five different countries', st: 'E moeling le linaha tse hlano tse fapaneng' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'social',
    lesson: {
      id: 'ss6_3',
      grade: 6,
      topic: { en: 'Rights & Responsibilities', st: 'Litokelo le Boikarabello' },
      title: { en: 'Children’s Rights and Protection in Lesotho', st: 'Litokelo tsa Bana le Tšireletso ea Bona Lesotho' },
      syllabusRef: 'Social Studies G6 LO6',
      outcome: { en: 'State basic children’s rights (education, health, safety) and corresponding duties', st: 'Tseba litokelo tsa mantlha tsa bana (thuto, bophelo bo botle, tšireletso) le mesebetsi ea bona' },
      source: 'Lesotho Child Protection and Welfare Act / Curriculum',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Under Lesotho law, every child has the right to free primary education, healthcare, shelter, a name, and protection from abuse or dangerous labor. With rights come responsibilities: to respect parents, attend school diligently, and treat others fairly.',
            st: 'Tlas\'a molao oa Lesotho, ngoana e mong le e mong o na le tokelo ea thuto ea motheo ea mahala, kalafo, bolulo, lebitso, le tšireletso tlhekefetsong kapa mesebetsing e kotsi. Litokelo li tsamaea le boikarabello ba ho hlompha batsoali le ho kena sekolo.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Remind learners of Childline Lesotho (toll-free 116) as a safe channel if they face danger.',
            st: 'Hopotsang baithuti ka nomoro ea mahala ea Childline Lesotho (116) ha ba le kotsing.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'Which of the following is a fundamental legal right guaranteed to children in Lesotho?',
            st: 'Har\'a tse latelang, ke tokelo efe ea molao e netefalitsoeng ho bana ba Lesotho?'
          },
          options: [
            { en: 'Right to free primary education and safety from exploitation', st: 'Tokelo ea thuto ea motheo ea mahala le tšireletso tlatlapong' },
            { en: 'Right to work in deep mines instead of school', st: 'Tokelo ea ho sebetsa merafong e tebileng ho e-na le ho kena sekolo' },
            { en: 'Right to harm others without consequence', st: 'Tokelo ea ho ntša ba bang kotsi ntle le kotlo' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'social',
    lesson: {
      id: 'ss7_1',
      grade: 7,
      topic: { en: 'Economic Geography', st: 'Moruo le Tikoloho ea Lesotho' },
      title: { en: 'Pillars of the Lesotho Economy: Garments, Mining, and Agriculture', st: 'Litšiea tsa Moruo oa Lesotho: Liaparo, Merafo, le Temo' },
      syllabusRef: 'Social Studies G7 LO2',
      outcome: { en: 'Analyze key industries driving employment and trade in Lesotho', st: 'Hlahloba liindaseteri tse kholo tse fanang ka mesebetsi le khoebo Lesotho' },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'The economy of Lesotho relies on four major sectors: Textile manufacturing in Maseru and Maputsoe (exporting clothing worldwide), diamond mining at Letseng and Kao, water and hydroelectric royalties from LHWP, and agriculture (wool, mohair, and crops).',
            st: 'Moruo oa Lesotho o itšetlehile ka likarolo tse ' + "’nè tse kholo: Lifeme tsa liaparo Maseru le Maputsoe, merafo ea litaemane ea Letseng le Kao, tefo ea metsi le motlakase ea LHWP, le temo le leruo (boea le pholeche)."
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Mention that Letseng Mine is famous worldwide for producing some of the highest-value large white diamonds in history.',
            st: 'Bolelang hore Morafo oa Letseng o tumme lefatšeng ka ho hlahisa litaemane tse kholo ka ho fetisisa lefatšeng.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'Which precious mineral mined in Lesotho’s Maloti mountains generates significant export value?',
            st: 'Ke moruo ofe oa tšepe ea bohlokoa o chekoang lithabeng tsa Maloti o tlisang chelete e ngata naheng?'
          },
          options: [
            { en: 'Diamonds (Litaemane)', st: 'Litaemane' },
            { en: 'Crude Petroleum Oil', st: 'Ooli ea peterole' },
            { en: 'Silver coins', st: 'Lichelete tsa silevera' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'social',
    lesson: {
      id: 'ss7_2',
      grade: 7,
      topic: { en: 'Population & Urbanization', st: 'Palo ea Sechaba le Metse-Metse' },
      title: { en: 'Rural-to-Urban Migration in Lesotho', st: 'Ho Falalla ho Tloha Mahaeng ho Ea Litoropong' },
      syllabusRef: 'Social Studies G7 LO4',
      outcome: { en: 'Explain the push and pull factors leading people to migrate from mountain villages to lowlands towns', st: 'Hlalosa mabaka a susumetsang batho ho tloha mahaeng a lithaba ho ea litoropong tsa mabalane' },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Many families migrate from rural mountain areas to towns like Maseru, Teyateyaneng, and Maputsoe. Push factors include lack of jobs, soil degradation, and harsh winters. Pull factors include tertiary colleges, factories, hospitals, and commercial services.',
            st: 'Malapa a mangata a falalla ho tloha mahaeng a lithaba ho ea litoropong tse kang Maseru le Maputsoe. Mabaka a ho tloha a kenyeletsa ho hloka mesebetsi le serame se bohale. Mabaka a ho hula a kenyeletsa likoleche, lifeme, le lipetlele tse kholo.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Lead a debate on whether young graduates should remain to modernize rural agriculture or seek urban employment.',
            st: 'Etsang ngangisano ea hore na bacha ba lokela ho sala mahaeng ho ntlafatsa temo kapa ho ea litoropong.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'What is a major "pull factor" attracting young adults to lowlands cities in Lesotho?',
            st: 'Ke lebaka lefe le leholo le hulang bacha ho ea litoropong tsa mabalane Lesotho?'
          },
          options: [
            { en: 'Higher education institutions and formal employment opportunities', st: 'Litsi tsa thuto e phahameng le menyetla ea mesebetsi' },
            { en: 'More open grazing pasture for cattle', st: 'Makhulo a mangata a likhomo' },
            { en: 'Total absence of traffic or noise', st: 'Ho se be le sephethe-phethe ho hang' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'social',
    lesson: {
      id: 'ss7_3',
      grade: 7,
      topic: { en: 'Global Citizenship', st: 'Boahi ba Lefatše' },
      title: { en: 'Sustainable Development Goals (SDGs) for Lesotho', st: 'Lipheo tsa Ntlafatso e Tšoarellang (SDGs) Bakeng sa Lesotho' },
      syllabusRef: 'Social Studies G7 LO7',
      outcome: { en: 'Relate the UN SDGs (Quality Education, No Poverty, Clean Water) to local community development', st: 'Amanisa Lipheo tsa UN (Thuto ea Boleng, Ho Felisa Bofuma, Metsi a Hloekileng) le tsoelopele ea motse' },
      source: 'United Nations / Lesotho National Strategic Plan',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'The United Nations Sustainable Development Goals are 17 global goals to end poverty, protect the planet, and ensure prosperity for all by 2030. In Lesotho, priority goals include SDG 1 (No Poverty), SDG 4 (Quality Education for every child), and SDG 6 (Clean Water and Sanitation).',
            st: 'Lipheo tsa Ntlafatso e Tšoarellang tsa Machaba (SDGs) ke lipheo tse 17 tsa ho felisa bofuma le ho sireletsa polanete ka 2030. Lesotho, lipheo tsa mantlha li kenyeletsa SDG 1 (Ho Felisa Bofuma), SDG 4 (Thuto ea Boleng ho bana bohle), le SDG 6 (Metsi a Hloekileng le Bohloeki).'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Connect this lesson directly to Moshoeshoe Hub app as a concrete local ICT4D contribution to SDG 4 and SDG 10.',
            st: 'Kopanyang thuto ena ka kotloloho le app ena ea Moshoeshoe Hub e le karolo ea tlatsetso ea ICT4D ho SDG 4 le SDG 10.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'Which Sustainable Development Goal (SDG) focuses on ensuring inclusive and equitable quality education for all?',
            st: 'Ke Sepheo sefe sa Ntlafatso e Tšoarellang (SDG) se shebaneng le ho netefatsa thuto ea boleng bo phahameng bakeng sa bohle?'
          },
          options: [
            { en: 'SDG 4: Quality Education', st: 'SDG 4: Thuto ea Boleng' },
            { en: 'SDG 14: Life Below Water', st: 'SDG 14: Bophelo ka Tlas’a Metsi' },
            { en: 'SDG 7: Affordable Energy', st: 'SDG 7: Matla a Hloekileng' }
          ],
          answer: 0
        }
      ]
    }
  }
];

