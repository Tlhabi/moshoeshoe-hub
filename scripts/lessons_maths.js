// Comprehensive Lesotho curriculum expansion lessons for Grades 1 to 7
// Covering Maths, Science, Social Studies, English, Sesotho, and Creativity & Entrepreneurship
// Contextualized for Lesotho (Maloti, Thaba-Bosiu, LHWP, agriculture, Mohair, local culture)

module.exports = [
  // ─────────────────────────────────────────────────────────────
  // MATHS
  // ─────────────────────────────────────────────────────────────
  {
    subjectId: 'maths',
    lesson: {
      id: 'm1_2',
      grade: 1,
      topic: { en: 'Basic Addition', st: 'Ho Kopanya Linomoro' },
      title: { en: 'Adding Objects up to 5', st: 'Ho Kopanya Lintho ho fihlela ho 5' },
      syllabusRef: 'Maths G1 LO2',
      outcome: { en: 'Combine two groups of objects up to 5', st: 'Kopanya lihlopha tse peli tsa lintho ho fihlela ho 5' },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Addition means putting things together. If you have 2 apples and your friend gives you 1 more apple, you now have 3 apples in total: 2 + 1 = 3.',
            st: 'Ho kopanya ho bolela ho kopanya lintho hammoho. Haeba u na le liapole tse 2 ebe motsoalle oa hao o u fa apole e 1 hape, joale u na le liapole tse 3 kaofela: 2 + 1 = 3.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Use bottle tops or small pebbles so learners can physically merge the two piles.',
            st: 'Sebelisa likhurumelo kapa majoana e le hore baithuti ba kopanye liqubu tseo tse peli ka matsoho.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'You have 3 pencils. You find 2 more pencils. How many pencils do you have altogether?',
            st: 'U na le lipensele tse 3. U fumana lipensele tse ling tse 2. U na le lipensele tse kae kaofela?'
          },
          options: [
            { en: '4 pencils', st: 'Lipensele tse 4' },
            { en: '5 pencils', st: 'Lipensele tse 5' },
            { en: '6 pencils', st: 'Lipensele tse 6' }
          ],
          answer: 1
        }
      ]
    }
  },
  {
    subjectId: 'maths',
    lesson: {
      id: 'm1_3',
      grade: 1,
      topic: { en: 'Shapes & Sizes', st: 'Libopeho le Boholo' },
      title: { en: 'Recognizing Circles and Squares', st: 'Ho Tseba Selika-likoe le Sekwere' },
      syllabusRef: 'Maths G1 LO4',
      outcome: { en: 'Identify and name circles and squares in daily environment', st: 'Tseba le ho reha selika-likoe le sekwere tikolohong ea hao' },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'A circle is round like a ball or a round Lesotho hut (rondavel). A square has 4 equal straight sides and 4 corners like a window box.',
            st: 'Selika-likoe se chitja joaloka bolo kapa ntlo ea mokhoro. Sekwere se na le mahlakore a mane a lekanang le likhutlo tse nne joaloka fensetere.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Take learners outside to point out circular and square objects around the schoolyard.',
            st: 'Etsang leeto le lekhutšoanyane lebaleng la sekolo ho bontša lintho tse chitja le tse sekwere.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'Which shape is round like a five maloti coin?',
            st: 'Ke sebopeho sefe se chitja joaloka chelete ea maloti a mahlano?'
          },
          options: [
            { en: 'Circle', st: 'Selika-likoe' },
            { en: 'Square', st: 'Sekwere' },
            { en: 'Triangle', st: 'Khutlo-tharo' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'maths',
    lesson: {
      id: 'm2_2',
      grade: 2,
      topic: { en: 'Subtraction', st: 'Ho Tlosa' },
      title: { en: 'Subtracting Numbers within 20', st: 'Ho Tlosa Linomoro ka Hare ho 20' },
      syllabusRef: 'Maths G2 LO3',
      outcome: { en: 'Subtract numbers within 20 using backward counting', st: 'Tlosa linomoro ka hare ho 20 ka ho bala ho khutlela morao' },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Subtraction means taking away. If a farmer has 15 sheep in the kraal and takes 5 sheep to the field, 10 sheep remain: 15 - 5 = 10.',
            st: 'Ho tlosa ho bolela ho fokotsa. Haeba morui a na le linku tse 15 sakeng ebe o ntša tse 5 ho ea masimong, ho sala linku tse 10: 15 - 5 = 10.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Draw a number line from 0 to 20 on the chalkboard to show hops backwards.',
            st: 'Tšoantša mola oa linomoro ho tloha ho 0 ho isa ho 20 letlapeng ho bontša ho tlola ho khutlela morao.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'What is 18 - 6?',
            st: 'Karabo ea 18 - 6 ke bokae?'
          },
          options: [
            { en: '11', st: '11' },
            { en: '12', st: '12' },
            { en: '14', st: '14' }
          ],
          answer: 1
        }
      ]
    }
  },
  {
    subjectId: 'maths',
    lesson: {
      id: 'm2_3',
      grade: 2,
      topic: { en: 'Money in Lesotho', st: 'Chelete ea Lesotho' },
      title: { en: 'Understanding Maloti and Lisente', st: 'Ho Utloisisa Maloti le Lisente' },
      syllabusRef: 'Maths G2 LO5',
      outcome: { en: 'Recognize Lesotho coins and simple notes', st: 'Tseba chelete ea tšepe le ea pampiri ea Lesotho' },
      source: 'Central Bank of Lesotho / Primary Syllabus',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'In Lesotho, our currency is the Loti (singular) and Maloti (plural). 100 lisente equal 1 Loti. Common coins include 10c, 20c, 50c, M1, M2, and M5.',
            st: 'Lesotho, chelete ea rona ke Loti (ha e le ' + "’ngoe) le Maloti (ha li ngata). Lisente tse 100 li etsa Loti e le 1. Chelete ea tšepe e tloaelehileng ke 10c, 20c, 50c, M1, M2, le M5."
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Bring toy coins or real clean coins so learners can touch the raised numbers.',
            st: 'Tlisang chelete ea papali kapa ea ' + "nete e hloekileng e le hore baithuti ba tšoare linomoro tse phahamisitsoeng."
          }
        },
        {
          type: 'activity',
          q: {
            en: 'How many 50 lisente coins make 1 Loti (M1.00)?',
            st: 'Ke lichelete tse kae tsa lisente tse 50 tse etsang Loti e 1 (M1.00)?'
          },
          options: [
            { en: '1 coin', st: 'Chelete e 1' },
            { en: '2 coins', st: 'Lichelete tse 2' },
            { en: '4 coins', st: 'Lichelete tse 4' }
          ],
          answer: 1
        }
      ]
    }
  },
  {
    subjectId: 'maths',
    lesson: {
      id: 'm3_2',
      grade: 3,
      topic: { en: 'Multiplication Basics', st: 'Ho Atisa ka Bonolo' },
      title: { en: 'Repeated Addition as Multiplication', st: 'Kopanyo e Phetiloeng e le Phatiso' },
      syllabusRef: 'Maths G3 LO2',
      outcome: { en: 'Understand multiplication as equal groups added together', st: 'Utloisisa phatiso e le lihlopha tse lekanang tse kopantsoeng' },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Multiplication is quick repeated addition. If 3 herd boys each have 4 cows, we can add: 4 + 4 + 4 = 12. In multiplication, 3 groups of 4 is written as 3 × 4 = 12.',
            st: 'Phatiso ke ho kopanya ka potlako ho phetoang. Haeba balisana ba 3 e mong le e mong a na le likhomo tse 4, re ka kopanya: 4 + 4 + 4 = 12. Ka ho atisa, lihlopha tse 3 tsa 4 li ngoloa e le 3 × 4 = 12.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Use arrays of stones arranged in rows and columns.',
            st: 'Sebelisang mela le likholomo tsa majoe ho bontša sebopeho sa phatiso.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'What is 4 groups of 3 (4 × 3)?',
            st: 'Karabo ea lihlopha tse 4 tsa 3 (4 × 3) ke bokae?'
          },
          options: [
            { en: '7', st: '7' },
            { en: '12', st: '12' },
            { en: '15', st: '15' }
          ],
          answer: 1
        }
      ]
    }
  },
  {
    subjectId: 'maths',
    lesson: {
      id: 'm3_3',
      grade: 3,
      topic: { en: 'Measurement', st: 'Tekanyo' },
      title: { en: 'Measuring Length in Centimetres and Metres', st: 'Ho Metha Bolelele ka Lisentimitara le Limithara' },
      syllabusRef: 'Maths G3 LO6',
      outcome: { en: 'Measure short lengths with a ruler and estimate metres', st: 'Metha bolelele bo bokhutšoanyane ka ' + "rula 'me u hakanye limithara" },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'We use centimetres (cm) to measure small objects like pens or exercise books. We use metres (m) to measure long distances like the length of a classroom. 1 metre = 100 centimetres.',
            st: 'Re sebelisa lisentimitara (cm) ho metha lintho tse nyane joaloka lipene kapa libuka. Re sebelisa limithara (m) ho metha sebaka se selelele joaloka phaposi ea sekolo. Mithara e 1 = lisentimitara tse 100.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Have learners measure their desktop using their 30 cm plastic ruler.',
            st: 'Kopang baithuti ho metha litafole tsa bona ba sebelisa rula ea 30 cm.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'How many centimetres are there in 1 metre?',
            st: 'Ho na le lisentimitara tse kae ka har\'a mithara e 1?'
          },
          options: [
            { en: '10 cm', st: '10 cm' },
            { en: '50 cm', st: '50 cm' },
            { en: '100 cm', st: '100 cm' }
          ],
          answer: 2
        }
      ]
    }
  },
  {
    subjectId: 'maths',
    lesson: {
      id: 'm4_2',
      grade: 4,
      topic: { en: 'Division', st: 'Kabelo' },
      title: { en: 'Dividing with Remainders', st: 'Ho Arola ho Nang le Masalla' },
      syllabusRef: 'Maths G4 LO3',
      outcome: { en: 'Divide 2-digit numbers by a 1-digit number with remainders', st: 'Arola linomoro tsa linomoro tse peli ka e le ' + "’ngoe ho nang le masalla" },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Division means sharing equally. If you share 13 peaches equally among 4 children, each child gets 3 peaches and 1 peach remains. We write: 13 ÷ 4 = 3 remainder 1.',
            st: 'Kabelo e bolela ho arolelana ka ho lekana. Haeba u arolela bana ba 4 liperekisi tse 13 ka ho lekana, ngoana ka mong o fumana tse 3 ' + "’me ho sala perekisi e 1. Re ngola: 13 ÷ 4 = 3 ho sala 1."
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Use real fruit or beans to demonstrate sharing when items cannot be split equally without cutting.',
            st: 'Sebelisang litholoana kapa linaoa ho bontša kabelo ha ho sala ntho e ke keng ea aroloa.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'What is 17 ÷ 5?',
            st: 'Karabo ea 17 ÷ 5 ke bokae?'
          },
          options: [
            { en: '3 remainder 2', st: '3 ho sala 2' },
            { en: '3 remainder 1', st: '3 ho sala 1' },
            { en: '4 remainder 0', st: '4 ho sala 0' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'maths',
    lesson: {
      id: 'm4_3',
      grade: 4,
      topic: { en: 'Fractions', st: 'Likarolwana' },
      title: { en: 'Simple Fractions: Halves, Quarters and Eighths', st: 'Likarolwana: Halofo, Kotara le Karolo ea Borobeli' },
      syllabusRef: 'Maths G4 LO5',
      outcome: { en: 'Represent and compare unit fractions visually', st: 'Bontša le ho bapisa likarolwana tsa motheo ka pono' },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'A fraction is part of a whole. When a loaf of bread is cut into 2 equal parts, each part is 1/2. When cut into 4 equal parts, each part is 1/4. Two quarters equal one half: 2/4 = 1/2.',
            st: 'Karolwana ke karolo ea ntho e felletseng. Ha bohobe bo aroloa likotoana tse 2 tse lekanang, karolo ka ' + "’ngoe ke 1/2. Ha bo aroloa tse 4, karolo ka ’ngoe ke 1/4. Likotara tse peli li lekana le halofo: 2/4 = 1/2."
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Fold rectangular sheets of paper in halves and quarters to help learners see equality.',
            st: 'Mena maqephe a pampiri ka halofo le ka likotara ho thusa baithuti ho bona tekano.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'How many quarters (1/4) make one whole loaf?',
            st: 'Ke likotara tse kae (1/4) tse etsang bohobe bo le bong bo felletseng?'
          },
          options: [
            { en: '2 quarters', st: 'Likotara tse 2' },
            { en: '3 quarters', st: 'Likotara tse 3' },
            { en: '4 quarters', st: 'Likotara tse 4' }
          ],
          answer: 2
        }
      ]
    }
  },
  {
    subjectId: 'maths',
    lesson: {
      id: 'm6_2',
      grade: 6,
      topic: { en: 'Area & Perimeter', st: 'Sebaka le Tikoloho' },
      title: { en: 'Perimeter and Area of Rectangles', st: 'Bophara ba Tikoloho le Sebaka sa Khutlonne' },
      syllabusRef: 'Maths G6 LO4',
      outcome: { en: 'Calculate the perimeter and area of rectangular fields', st: 'Bala bophara ba tikoloho le sebaka sa masimo a sebopeho sa khutlonne' },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Perimeter is the distance all the way around the outside edge (add all sides). Area is the space inside, calculated as Length × Width. For a vegetable garden 5 m long and 3 m wide: Area = 5 × 3 = 15 square metres (m²).',
            st: 'Bophara ba tikoloho ke sebaka se potolohileng methinya e ka ntle (kopanya mahlakore kaofela). Sebaka se ka hare se baloa e le Bolelele × Bophara. Bakeng sa serapa sa meroho sa bolelele ba 5 m le bophara ba 3 m: Sebaka = 5 × 3 = 15 m².'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Draw a grid of 1x1 metre squares to visually count the surface squares.',
            st: 'Tšoantša kotoana tsa mithara e le ' + "’ngoe ho bala lisekwere tse ka hare ka mahlo."
          }
        },
        {
          type: 'activity',
          q: {
            en: 'A garden is 6 metres long and 4 metres wide. What is its area?',
            st: 'Serapa se bolelele ba limithara tse 6 le bophara ba limithara tse 4. Sebaka sa sona se ka hare ke bokae?'
          },
          options: [
            { en: '20 m²', st: '20 m²' },
            { en: '24 m²', st: '24 m²' },
            { en: '10 m²', st: '10 m²' }
          ],
          answer: 1
        }
      ]
    }
  },
  {
    subjectId: 'maths',
    lesson: {
      id: 'm6_3',
      grade: 6,
      topic: { en: 'Data Handling', st: 'Tsamaiso ea Lipalo-palo' },
      title: { en: 'Reading and Interpreting Bar Graphs', st: 'Ho Bala le ho Utloisisa Grafu ea Mebala' },
      syllabusRef: 'Maths G6 LO7',
      outcome: { en: 'Extract and interpret information from vertical bar graphs', st: 'Ntsa le ho hlalosa litaba ho tsoa grafung ea mebala e emeng' },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'A bar graph uses rectangular bars to show and compare quantities. The height of the bar shows the amount. If the bar for maize reaches 50 bags and sorghum reaches 20 bags, farmers harvested more maize than sorghum.',
            st: 'Grafu ea mebala e sebelisa likotopo tse emeng ho bontša le ho bapisa palo ea lintho. Bophahamo ba kotopo bo bontša bongata. Haeba kotopo ea poone e fihla mekotleng e 50 ' + "’me ea mabele e fihla ho e 20, balemi ba kotutse poone e ngata ho feta mabele."
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Create a live classroom tally chart of favorite local sports (soccer, netball, morabaraba).',
            st: 'Etsang grafu ka phaposing ea lipapali tseo bana ba li ratang (bolo ea maoto, netball, morabaraba).'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'On a bar graph, what does a taller bar mean compared to a shorter bar?',
            st: 'Grafung ea mebala, kotopo e telele e bolela eng ha e bapisoe le e khutšoanyane?'
          },
          options: [
            { en: 'It represents a larger quantity or number', st: 'E emela palo kapa bongata bo boholo' },
            { en: 'It represents a smaller quantity', st: 'E emela palo e nyane' },
            { en: 'It represents zero value', st: 'E bolela lefeela' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'maths',
    lesson: {
      id: 'm7_2',
      grade: 7,
      topic: { en: 'Ratios & Proportions', st: 'Kabo le Tekano ea Lipalo' },
      title: { en: 'Simple Ratios in Everyday Life', st: 'Tekano ea Lipalo Bophelong ba Letsatsi le Letsatsi' },
      syllabusRef: 'Maths G7 LO3',
      outcome: { en: 'Express and simplify two quantities as a ratio', st: 'Hlalosa le ho nolofatsa bongata ba lintho tse peli e le karo-karolelano' },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'A ratio compares two numbers of the same kind. If a builder mixes 1 bag of cement with 3 wheelbarrows of sand, the ratio is 1:3. If you make tea with 2 spoons of sugar for 1 cup, the ratio is 2:1.',
            st: 'Karo-karolelano e bapisa linomoro tse peli tsa mofuta o tšoanang. Ha moahi a kopanya mokotla o 1 oa samente le likarafu tse 3 tsa lehlabathe, tekano ke 1:3. Ha u etsa tee ka likhaba tse 2 tsa tsoekere bakeng sa kopi e 1, ke 2:1.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Relate this to mixing traditional home brew (leting) or mixing soil and dung for plastering.',
            st: 'Bapisang sena le ho ritela leting kapa ho kopanya mobu le bolokoe ba ho dila.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'In a class of 30 learners, there are 10 boys and 20 girls. What is the simplified ratio of boys to girls?',
            st: 'Ka phaposing ea baithuti ba 30, ho na le bashanyana ba 10 le banana ba 20. Tekano e nolofalitsoeng ea bashanyana ho banana ke efe?'
          },
          options: [
            { en: '1 : 2', st: '1 : 2' },
            { en: '2 : 1', st: '2 : 1' },
            { en: '1 : 3', st: '1 : 3' }
          ],
          answer: 0
        }
      ]
    }
  },
  {
    subjectId: 'maths',
    lesson: {
      id: 'm7_3',
      grade: 7,
      topic: { en: 'Financial Literacy', st: 'Tsamaiso ea Lichelete' },
      title: { en: 'Profit, Loss, and Simple Budgeting', st: 'Puzo, Tahlehelo, le Moralo oa Chelete' },
      syllabusRef: 'Maths G7 LO8',
      outcome: { en: 'Calculate profit and loss for small micro-business activities', st: 'Bala puzo le tahlehelo mesebetsing e menyenyane ea khoebo' },
      source: 'Lesotho Primary Curriculum (MoET)',
      reviewed: true,
      blocks: [
        {
          type: 'text',
          text: {
            en: 'Profit is made when the selling price is higher than the cost price: Profit = Selling Price - Cost Price. If you buy apples for M20 and sell them for M30, your profit is M10. If you sell them for M15, you make a Loss of M5.',
            st: 'Puzo e fumanoa ha theko ea thekiso e le kholo ho feta theko ea theko: Puzo = Thekiso - Theko. Haeba u reka liapole ka M20 ebe u li rekisa ka M30, puzo ea hao ke M10. Haeba u li rekisa ka M15, u entse tahlehelo ea M5.'
          }
        },
        {
          type: 'tip',
          text: {
            en: 'Set up a small mock market stall where learners act as buyers and sellers using paper money.',
            st: 'Hlophisang lebenkele la papali phaposing moo baithuti ba rekang le ho rekisa ka chelete ea pampiri.'
          }
        },
        {
          type: 'activity',
          q: {
            en: 'A learner buys a bag of fat cakes (makoenya) for M40 and sells all of them for M65. How much profit was made?',
            st: 'Moithuti o reka mokotlana oa makoenya ka M40 ebe o a rekisa kaofela ka M65. Puzo e entseng ke bokae?'
          },
          options: [
            { en: 'M15', st: 'M15' },
            { en: 'M25', st: 'M25' },
            { en: 'M105', st: 'M105' }
          ],
          answer: 1
        }
      ]
    }
  }
];

