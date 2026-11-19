// Offline Bilingual Primary Dictionary (Glossary) & Exam Practice Papers
// Specifically addressing groupmate requests:
// "Books, dictionaries" -> In-app contextual primary bilingual dictionary
// "Past question papers for revision" -> Grade 5 & 7 National Primary Examination past papers
// "Ai assistance / ask questions" -> Offline rule-based tutor assistant providing instant explanations

export const DICTIONARY: Array<{
  word: string;
  pos: string;
  en: string;
  st: string;
  exampleEn: string;
  exampleSt: string;
  subject: string;
}> = [
  {
    "word": "Circumference",
    "pos": "noun / lebitso",
    "en": "The total distance around the curved edge of a circle.",
    "st": "Bolelele kapa sebaka sohle se potolohileng nthoko ea selika-likoe.",
    "exampleEn": "We measured the circumference of the round grass hut.",
    "exampleSt": "Re ile ra metha tikoloho ea ntlo ea mokhoro.",
    "subject": "maths"
  },
  {
    "word": "Denominator",
    "pos": "noun / lebitso",
    "en": "The bottom number in a fraction that shows how many equal parts the whole is divided into.",
    "st": "Nomoro e ka tlaase karolong (fraction) e bontšang palo ea likarolo tse lekanang tseo ntho e arotsoeng ka tsona.",
    "exampleEn": "In the fraction 3/4, the denominator is 4.",
    "exampleSt": "Karolong ea 3/4, denominator (moatoli) ke 4.",
    "subject": "maths"
  },
  {
    "word": "Numerator",
    "pos": "noun / lebitso",
    "en": "The top number in a fraction that shows how many equal parts you have.",
    "st": "Nomoro e ka holimo karolong e bontšang palo ea likarolo tseo u nang le tsona.",
    "exampleEn": "In 3/4, 3 is the numerator.",
    "exampleSt": "Ho 3/4, 3 ke numerator.",
    "subject": "maths"
  },
  {
    "word": "Equivalent Fractions",
    "pos": "noun / lebitso",
    "en": "Fractions that have different numbers but equal the exact same value (e.g., 1/2 = 2/4 = 4/8).",
    "st": "Likarolo tse nang le linomoro tse fapaneng empa li lekana ka boleng (mohlala: 1/2 = 2/4 = 4/8).",
    "exampleEn": "1/2 and 2/4 are equivalent fractions.",
    "exampleSt": "1/2 le 2/4 ke likarolo tse lekanang ka boleng.",
    "subject": "maths"
  },
  {
    "word": "Intersection (∩)",
    "pos": "noun / lebitso",
    "en": "The set of elements that belong to both sets at the same time.",
    "st": "Likarolo kapa lintho tse fumanehang lihlopheng ka bobeli ka nako e le ’ngoe.",
    "exampleEn": "If Set A has {2, 4} and Set B has {4, 6}, the intersection is {4}.",
    "exampleSt": "Ha Sehlopha A se na le {2, 4} mme B e le {4, 6}, sehokelo sa tsona ke {4}.",
    "subject": "maths"
  },
  {
    "word": "Union (∪)",
    "pos": "noun / lebitso",
    "en": "All elements combined from two or more sets without repeating any member.",
    "st": "Lintho tsohle tse kopantsoeng ho tsoa lihlopheng tse peli kapa ho feta ntle le ho pheta setho.",
    "exampleEn": "The union of {1, 2} and {2, 3} is {1, 2, 3}.",
    "exampleSt": "Kopano ea {1, 2} le {2, 3} ke {1, 2, 3}.",
    "subject": "maths"
  },
  {
    "word": "Volume",
    "pos": "noun / lebitso",
    "en": "The amount of 3-dimensional space an object occupies, measured in cubic units (length × width × height).",
    "st": "Sebaka sa 3D seo ntho e se nkang, se baloang ka (bolelele × bophara × bophahamo).",
    "exampleEn": "We calculated the volume of the grain storage box.",
    "exampleSt": "Re ile ra bala volume ea setshelo sa lijo-thollo.",
    "subject": "maths"
  },
  {
    "word": "Protractor",
    "pos": "noun / lebitso",
    "en": "A semi-circular mathematical tool used for measuring and drawing angles up to 180 degrees.",
    "st": "Sesebelisoa sa lipalo se chitja se seka-sekwere se sebelisoang ho metha le ho taka li-angle ho fihla ho 180°.",
    "exampleEn": "Use a protractor to measure a right angle (90°).",
    "exampleSt": "Sebelisa protractor ho metha right angle ea 90°.",
    "subject": "maths"
  },
  {
    "word": "Symmetry",
    "pos": "noun / lebitso",
    "en": "When one half of an object or design is the exact mirror reflection of the other half.",
    "st": "Ha lehlakore le leng la ntho kapa setšoantšo le tšoana hantle le lehlakore le leng ha le phuthoa.",
    "exampleEn": "The Basotho mokorotlo hat has vertical symmetry.",
    "exampleSt": "Katiba ea mokorotlo e na le symmetry e otlolohileng.",
    "subject": "maths"
  },
  {
    "word": "Place Value",
    "pos": "noun / lebitso",
    "en": "The numerical value a digit has depending on its position (ones, tens, hundreds, thousands, ten-thousands).",
    "st": "Boleng ba nomoro ho latela boemo ba eona (bo-nngoe, mashome, makholo, likete, mashome a likete).",
    "exampleEn": "In 75,340, the place value of 7 is seventy thousand.",
    "exampleSt": "Ho 75,340, boleng ba boemo ba 7 ke mashome a supileng a likete.",
    "subject": "maths"
  },
  {
    "word": "Oxygen",
    "pos": "noun / lebitso",
    "en": "A vital gas in air that humans and animals breathe to stay alive, and which supports burning and causes rust.",
    "st": "Moea oa bohlokoa moeeng oo batho le liphoofolo ba o hemang ho phela, o lumellang mollo ho tuka le ho etsa mafome.",
    "exampleEn": "Without oxygen in the air, a candle flame goes out immediately.",
    "exampleSt": "Ntle le oksijene moeeng, lelakabe la kerese le tima hang-hang.",
    "subject": "science"
  },
  {
    "word": "Thermometer",
    "pos": "noun / lebitso",
    "en": "An instrument used to measure temperature in degrees Celsius (°C).",
    "st": "Sesebelisoa se methang mocheso kapa serame ka li-degree tsa Celsius (°C).",
    "exampleEn": "The clinic nurse used a thermometer to check the child’s fever.",
    "exampleSt": "Mooki o ile a sebelisa thermometer ho hlahloba mocheso oa ngoana.",
    "subject": "science"
  },
  {
    "word": "Rain Gauge",
    "pos": "noun / lebitso",
    "en": "A meteorological funnel instrument that collects and measures precipitation in millimetres (mm).",
    "st": "Setshelo se methang bongata ba pula e nang ka limilimitara (mm).",
    "exampleEn": "The school weather station measured 25mm of rain in the rain gauge.",
    "exampleSt": "Seteišene sa sekolo se methile 25mm ea pula ka rain gauge.",
    "subject": "science"
  },
  {
    "word": "Deficiency Disease",
    "pos": "noun / lebitso",
    "en": "An illness caused by a chronic lack of specific essential nutrients or vitamins in the diet (e.g., Kwashiorkor, Scurvy).",
    "st": "Boloetse bo bakoang ke ho haella ha limatlafatsi tsa bohlokoa kapa livithamine lijong.",
    "exampleEn": "Lack of protein in young children causes kwashiorkor.",
    "exampleSt": "Ho haella ha liprotheine ho bana ho baka boloetse ba kwashiorkor.",
    "subject": "science"
  },
  {
    "word": "Infectious Disease",
    "pos": "noun / lebitso",
    "en": "A disease caused by microorganisms (germs, viruses, bacteria) that can spread from person to person (e.g., flu, measles, TB).",
    "st": "Boloetse bo tšoaetsanoang bo bakoang ke likokoana-hloko bo tlohang ho motho e mong ho ea ho e mong.",
    "exampleEn": "Tuberculosis is an infectious disease prevented by good ventilation and medication.",
    "exampleSt": "Lefuba ke boloetse bo tšoaetsanoang bo thibeloang ka moea o hloekileng le meriana.",
    "subject": "science"
  },
  {
    "word": "Filtration",
    "pos": "noun / lebitso",
    "en": "The process of passing muddy water through a filter bed (cloth, sand, charcoal) to remove solid particles.",
    "st": "Tsamaiso ea ho sefa metsi a seretse ka lesela, lehlabathe kapa mashala ho tlosa litšila tse tiileng.",
    "exampleEn": "Filtration and boiling make river water safe for drinking.",
    "exampleSt": "Ho sefa le ho bilisa metsi a noka ho etsa hore a sireletsehe ho nooa.",
    "subject": "science"
  },
  {
    "word": "Ruminant",
    "pos": "noun / lebitso",
    "en": "A four-stomached grazing animal that chews the cud (e.g., cattle, sheep, goats).",
    "st": "Phoofolo e nang le limpa tse ’nè e jwang joang le ho boea moroko (mohlala: likhomo, linku, lipōli).",
    "exampleEn": "Cattle and sheep are ruminants that need regular vaccination against anthrax.",
    "exampleSt": "Likhomo le linku ke liphoofolo tse boeang moroko tse hlokang ente.",
    "subject": "science"
  },
  {
    "word": "Deciduous / Indigenous",
    "pos": "adjective / lehlaodi",
    "en": "Plants or trees that are naturally native to Lesotho’s mountain habitats.",
    "st": "Limela kapa lifate tsa tlhaho tse tsoaletsoeng marallong le lithabeng tsa Lesotho.",
    "exampleEn": "Cheche and mofifi are indigenous shrubs in the Maloti.",
    "exampleSt": "Cheche le mofifi ke lifate tsa tlhaho tsa lithaba tsa Maloti.",
    "subject": "science"
  },
  {
    "word": "Photosynthesis",
    "pos": "noun / lebitso",
    "en": "The process by which green plants manufacture food using sunlight, carbon dioxide, and water.",
    "st": "Tsela eo limela tse tala li iketsetsang lijo ka letsatsi, moea le metsi.",
    "exampleEn": "Green leaves release oxygen during photosynthesis.",
    "exampleSt": "Mahlaku a matala a ntša oksijene nakong ea photosynthesis.",
    "subject": "science"
  },
  {
    "word": "Compound Noun",
    "pos": "noun / lebitso",
    "en": "A noun made up of two or more words joined together (e.g., classroom, chalkboard, sunflower).",
    "st": "Lebitso le entsoeng ka ho kopanya mantsoe a mabeli kapa ho feta (mohlala: phaposi-thuto, letsopa-noka).",
    "exampleEn": "\"Chalkboard\" is a compound noun made of chalk and board.",
    "exampleSt": "\"Letsopa-noka\" ke lebitso-’moka le entsoeng ka letsopa le noka.",
    "subject": "english"
  },
  {
    "word": "Simile",
    "pos": "noun / lebitso",
    "en": "A figure of speech comparing two different things using the words \"as\" or \"like\" (e.g., as brave as a lion).",
    "st": "Papiso ea puo e bapisang lintho tse peli ka ho sebelisa \"joaloka\" kapa \"sa\" (mohlala: sebete joaloka tau).",
    "exampleEn": "The Mosotho horse was as swift as the mountain wind.",
    "exampleSt": "Pere ea Mosotho e ne e le lebelo joaloka moea oa lithaba.",
    "subject": "english"
  },
  {
    "word": "Adverb",
    "pos": "noun / lebitso",
    "en": "A word that describes or gives more information about a verb, adjective, or other adverb (time, place, manner).",
    "st": "Lentsoe le hlalosang kapa le eketsang tlhaloso ea leetsi (nako, sebaka, kapa mokhoa).",
    "exampleEn": "The herd boy ran \"quickly\" down the valley.",
    "exampleSt": "Molisana o ile a matha \"ka potlako\" phuleng.",
    "subject": "english"
  },
  {
    "word": "Synonym",
    "pos": "noun / lebitso",
    "en": "A word having the same or nearly the same meaning as another word in the same language.",
    "st": "Lentsoe le nang le moelelo o tšoanang kapa o batlileng o tšoana le le leng.",
    "exampleEn": "\"Huge\" is a synonym of \"gigantic\" and \"large\".",
    "exampleSt": "\"Moholo\" le \"katlehileng\" a ka tšoana ka moelelo maemong a mang.",
    "subject": "english"
  },
  {
    "word": "Antonym",
    "pos": "noun / lebitso",
    "en": "A word that means the exact opposite of another word.",
    "st": "Lentsoe le hananang kapa le bolelang se fapaneng hantle le le leng.",
    "exampleEn": "\"Generous\" is the antonym of \"selfish\".",
    "exampleSt": "\"Mosa\" ke lehanani la \"bokhopo\".",
    "subject": "english"
  },
  {
    "word": "Silent Letter",
    "pos": "noun / lebitso",
    "en": "A letter in a word that is written but not pronounced aloud (e.g., the \"k\" in knee, \"b\" in climb).",
    "st": "Tlhaku e ngotsoeng lentsoeng empa e sa bitsoe ha ho buuoa (mohlala: \"k\" ho knee, \"b\" ho climb).",
    "exampleEn": "In the word \"knife\", the letter \"k\" is silent.",
    "exampleSt": "Lentsoeng \"knife\", tlhaku ea \"k\" ha e bitsoe.",
    "subject": "english"
  },
  {
    "word": "Conjunction",
    "pos": "noun / lebitso",
    "en": "A joining word used to connect clauses or sentences together (e.g., and, but, because, although).",
    "st": "Lentsoe le kopanyang lipolelo tse peli kapa ho feta hammoho (mohlala: le, empa, hobane, leha).",
    "exampleEn": "He studied hard \"because\" he wanted to pass Grade 5.",
    "exampleSt": "O ithutile ka thata \"hobane\" a ne a batla ho pasa.",
    "subject": "english"
  },
  {
    "word": "Homophone / Homonym",
    "pos": "noun / lebitso",
    "en": "Words that sound or are spelt the same but carry entirely different meanings (e.g., bark of tree vs bark of dog).",
    "st": "Mantsoe a bitsoang kapa a ngoloang ka ho tšoana empa a na le meelelo e sa tšoaneng ho hang.",
    "exampleEn": "A river \"bank\" is not the same as a money \"bank\".",
    "exampleSt": "\"Banka\" ea chelete e fapane le \"lebopo\" la noka.",
    "subject": "english"
  },
  {
    "word": "Sere (Idiophone)",
    "pos": "noun / lebitso",
    "en": "A vivid descriptive sound, color, or sensory word in Sesotho that emphasizes an action (e.g., phiri, te, thwii).",
    "st": "Lentsoe la Sesotho le hlalosang molumo, monko, ’mala kapa mokhoa oa ketso ka ho totobala (mohlala: phiri, te, thwii).",
    "exampleEn": "The room was pitch dark: \"Ho ne ho re thwii ka lefifi.\"",
    "exampleSt": "Metsi a ne a chesa a re \"thata!\", ’me phaposing ho le lefifi le reng \"tshoo!\".",
    "subject": "sesotho"
  },
  {
    "word": "Maelana (Proverbs / Idioms)",
    "pos": "noun / lebitso",
    "en": "Traditional figurative Sesotho sayings encapsulating ancient community wisdom and philosophy.",
    "st": "Lipolelo tse khabisitsoeng tsa Sesotho tse rutang bohlale, tlhompho le boitšoaro.",
    "exampleEn": "\"Ntja e tsokotsa mohatla e bone mong a eona.\"",
    "exampleSt": "\"Ha le felle motseng\" le re ruta hore mekhoa ha e fele.",
    "subject": "sesotho"
  },
  {
    "word": "Lereho (Noun)",
    "pos": "noun / lebitso",
    "en": "A naming word in Sesotho identifying a person, place, animal, or concept.",
    "st": "Lentsoe le rehang motho, sebaka, phoofolo kapa ntho.",
    "exampleEn": "\"Titjhere\", \"Maseru\", and \"pere\" are mareho.",
    "exampleSt": "\"Thaba\", \"ngoana\", le \"katiba\" ke mareho.",
    "subject": "sesotho"
  },
  {
    "word": "Seemeli (Pronoun)",
    "pos": "noun / lebitso",
    "en": "A word used in place of a noun to avoid unnecessary repetition (e.g., eena, tsona, bona).",
    "st": "Lentsoe le emelang lereho polelong e le hore le se ke la phetoa khafetsa.",
    "exampleEn": "Instead of saying \"Neo\", we can say \"eena\".",
    "exampleSt": "Boemong ba ho pheta \"Thabo\", re re \"eena\".",
    "subject": "sesotho"
  },
  {
    "word": "Mareho-’moka (Collective Nouns)",
    "pos": "noun / lebitso",
    "en": "A noun denoting a group or collection of individuals taken as a single whole (e.g., mohlape, letšoele).",
    "st": "Lebitso le emelang sehlopha kapa bongata ba lintho tse nkoang e le ntho e le ’ngoe (mohlala: mohlape, leru).",
    "exampleEn": "\"Mohlape oa likhomo\" (a herd of cattle).",
    "exampleSt": "Molisana o ile a khanna mohlape oa likhomo.",
    "subject": "sesotho"
  },
  {
    "word": "Lilotho (Riddles)",
    "pos": "noun / lebitso",
    "en": "Traditional Sesotho guessing games and intellectual word puzzles fostering deductive thinking.",
    "st": "Lipapali tsa mantsoe tsa meetlo ea Sesotho tse lekolang kelello le tsebo ea tikoloho le limela.",
    "exampleEn": "Riddle: \"Mma-ngwaneng o thaba ha a tsofetse? (Poone)\"",
    "exampleSt": "\"Ka u lotha! Mma-ngwaneng o thaba ha a tsofetse? Ke Poone!\"",
    "subject": "sesotho"
  },
  {
    "word": "Mokorotlo",
    "pos": "noun / lebitso",
    "en": "The traditional conical conical straw hat of the Basotho, symbolizing national unity and identity.",
    "st": "Katiba ea moetlo ea joang ea Basotho e emelang bonngoe, bochaba le boikakaso ba Lesotho.",
    "exampleEn": "The Mokorotlo is featured prominently on the national flag of Lesotho.",
    "exampleSt": "Mokorotlo o hlahisoa folakeng ea naha ea Lesotho.",
    "subject": "social"
  },
  {
    "word": "Botho / Ubuntu",
    "pos": "noun / lebitso",
    "en": "The traditional African philosophy that a person is a person through other people; humaneness and communal solidarity.",
    "st": "Motheo oa meetlo ea Basotho o reng motho ke motho ka batho; mosa, qenehelo le bonngoe ba sechaba.",
    "exampleEn": "She showed true Botho by sharing her textbooks with a classmate.",
    "exampleSt": "O ile a bontša Botho ba sebele ka ho arolelana libuka le moithuti-’moho.",
    "subject": "social"
  },
  {
    "word": "Soil Erosion (Mokhotha)",
    "pos": "noun / lebitso",
    "en": "The washing or blowing away of topsoil by heavy rain or wind, forming dongas across pasture land.",
    "st": "Ho khoholeha le ho hoholoa ha mobu oa bohlokoa ke lipula kapa moea ho etsa likoropo le liforong.",
    "exampleEn": "Planting trees and contour plowing prevent severe soil erosion in the foothills.",
    "exampleSt": "Ho lema lifate le temo ea donga ho thibela khoholeho ea mobu.",
    "subject": "social"
  },
  {
    "word": "Ecological Zone",
    "pos": "noun / lebitso",
    "en": "One of the four distinct geographical and climatic regions of Lesotho (Lowlands, Foothills, Highlands, Senqu River Valley).",
    "st": "E ’ngoe ea libaka tse ’nè tsa tlhaho le maemo a leholimo Lesotho (Mabalane, Mathoko, Lithaba, Phula ea Senqu).",
    "exampleEn": "The Highlands of Lesotho receive snow and hold the country’s major water reservoirs.",
    "exampleSt": "Lithabeng tsa Maloti ke hona moo pula le lehloa li tlatsetsang matamo a maholo.",
    "subject": "social"
  },
  {
    "word": "Thaba-Bosiu",
    "pos": "noun / lebitso",
    "en": "The sandstone plateau fortress where King Moshoeshoe I established the national capital and defended the Basotho.",
    "st": "Qhobosheane ea thaba ea lejoe moo Morena Moshoeshoe I a ileng a theha le ho sireletsa sechaba sa Basotho.",
    "exampleEn": "King Moshoeshoe I was buried atop the historic mountain of Thaba-Bosiu.",
    "exampleSt": "Morena Moshoeshoe I o patiloe holim’a thaba e halalelang ea Thaba-Bosiu.",
    "subject": "social"
  },
  {
    "word": "Renewable Resource",
    "pos": "noun / lebitso",
    "en": "A natural resource that can replenish itself naturally over time (e.g., solar energy, water, planted timber).",
    "st": "Lisebelisoa tsa tlhaho tse ka boelang tsa itlhabolla kapa tsa hōla hape (mohlala: matla a letsatsi, metsi, lifate).",
    "exampleEn": "Solar power and wind energy are clean renewable resources.",
    "exampleSt": "Matla a letsatsi le moea ke lisebelisoa tse ka ntlafatsoang.",
    "subject": "creativity"
  },
  {
    "word": "Non-Renewable Resource",
    "pos": "noun / lebitso",
    "en": "A resource that exists in finite quantities and cannot be replaced once depleted (e.g., coal, oil, diamonds).",
    "st": "Lisebelisoa tse nang le moeli tseo hang ha li feletse li ke keng tsa boela tsa e-ba teng (mohlala: mashala, litaemane).",
    "exampleEn": "Diamonds mined in Letseng are non-renewable mineral resources.",
    "exampleSt": "Litaemane tse chekoang Letseng ke lisebelisoa tse ke keng tsa nchafatsoa.",
    "subject": "creativity"
  },
  {
    "word": "Paper Mâché",
    "pos": "noun / lebitso",
    "en": "A composite craft material made of shredded paper pulp and flour paste, molded when moist and hard when dry.",
    "st": "Mokhoa oa botaki oa ho kopanya likotoana tsa pampiri le sekhomaretsi sa phofo ho bopa lintho tse tiileng ha li oma.",
    "exampleEn": "Learners constructed decorative bowls and domestic animal figures using paper mâché.",
    "exampleSt": "Bana ba entse likotlolo le liphoofolo ka pampiri e kopantsoeng le sekhomaretsi sa phofo.",
    "subject": "creativity"
  },
  {
    "word": "Producer & Consumer",
    "pos": "noun / lebitso",
    "en": "A producer creates goods or services; a consumer purchases and utilizes goods to satisfy human needs.",
    "st": "Moetsi (producer) o hlahisa thepa; moreki (consumer) o reka le ho sebelisa thepa ho khotsofatsa litlhoko.",
    "exampleEn": "The village farmer is a vegetable producer; the town family is the consumer.",
    "exampleSt": "Molemi ke mohlahisi oa meroho; lelapa le rekang ke moreki.",
    "subject": "creativity"
  },
  {
    "word": "Vandalism",
    "pos": "noun / lebitso",
    "en": "The deliberate destruction, defacement, or damaging of public or private property.",
    "st": "Tšenyo ea ka boomo kapa ho senya thepa ea sechaba kapa ea motho ka mong.",
    "exampleEn": "Breaking school classroom desks and breaking taps is destructive vandalism.",
    "exampleSt": "Ho pshatla litafole tsa sekolo kapa ho senya lipompo tsa metsi ke bokhopo ba vandalism.",
    "subject": "creativity"
  },
  {
    "word": "Assertiveness / Ho Itšepa",
    "pos": "noun / lebitso",
    "en": "The ability to express your beliefs, rights, and boundaries firmly and respectfully without aggression.",
    "st": "Bokhoni ba ho bua litokelo le maikutlo a hao ka botshepehi le tlhompho ntle le ho tšoha kapa ho qabana.",
    "exampleEn": "Saying a clear \"No\" to drugs is an assertive decision.",
    "exampleSt": "Ho hana lithethefatsi ka lentswe le tiileng ke ho ba le boitšepo.",
    "subject": "pss"
  },
  {
    "word": "Peer Pressure",
    "pos": "noun / lebitso",
    "en": "The social influence exerted by friends or classmates encouraging someone to change their behavior or values.",
    "st": "Khatello kapa tšusumetso e tsoang ho metsoalle e qobellang motho ho etsa lintho tseo a sa li batleng.",
    "exampleEn": "Never let peer pressure convince you to skip school.",
    "exampleSt": "U se ke oa lumella khatello ea lithaka ho u khelohela mekhoeng e mebe.",
    "subject": "pss"
  },
  {
    "word": "Empathy / Kutloelo-bohloko",
    "pos": "noun / lebitso",
    "en": "The ability to understand and genuinely share the feelings and hardships of another person.",
    "st": "Bokhoni ba ho utloisisa le ho ikenya bohlokong le maikutlong a motho e mong ka pelo eohle.",
    "exampleEn": "We showed empathy to orphans in our community by donating warm blankets.",
    "exampleSt": "Re ile ra utloela likhutsana bohloko ka ho li fa likobo tsa mariha.",
    "subject": "pss"
  },
  {
    "word": "Tolerance / Mamello",
    "pos": "noun / lebitso",
    "en": "The willingness to accept, respect, and coexist peacefully with people of differing opinions, faiths, or backgrounds.",
    "st": "Moea oa ho amohela le ho phelisana ka khotso le batho ba nang le maikutlo, tumelo kapa litloaelo tse fapaneng le tsa hao.",
    "exampleEn": "Religious tolerance fosters lasting national peace in Lesotho.",
    "exampleSt": "Mamello le tlhompho ea malumeli li tsoela pele ho boloka khotso Lesotho.",
    "subject": "pss"
  },
  {
    "word": "Integrity / Botšepehi",
    "pos": "noun / lebitso",
    "en": "The quality of being honest and adhering to high moral principles even when nobody is watching you.",
    "st": "Ho ba motho ea tšepahalang le ea etsang se nepahetseng esita le ha ho se motho ea u shebileng.",
    "exampleEn": "Returning lost money to the headteacher showed great integrity.",
    "exampleSt": "Ho busetsa chelete e neng e lahlehile ho mosuoe-hlooho ho bontšitse botšepehi.",
    "subject": "pss"
  }
];

export const PAST_PAPERS: Array<{
  id: string;
  titleEn: string;
  titleSt: string;
  grade: number;
  year: string;
  subject: string;
  instructionsEn: string;
  instructionsSt: string;
  questions: Array<{
    qEn: string;
    qSt: string;
    optionsEn: string[];
    optionsSt: string[];
    answer: number;
    explanationEn: string;
    explanationSt: string;
  }>;
}> = [
  {
    id: 'paper_maths_g5',
    titleEn: 'Grade 5 National Primary Examination Practice (Maths)',
    titleSt: 'Boikoetliso ba Litlhahlobo tsa Sehlopha sa 5 (Lipalo)',
    grade: 5,
    year: 'National Mock Paper',
    subject: 'Numerical & Mathematical',
    instructionsEn: 'Answer all 4 questions. Check your reasoning with the instant step explanations.',
    instructionsSt: 'Araba lipotso tsohle tse 4. Hlahloba karabo ea hao ka tlhaloso e potlakileng.',
    questions: [
      {
        qEn: 'What is the sum of the interior angles of any triangle?',
        qSt: 'Kakaretso ea likhutlo tse ka hare tsa khutlo-tharo efe kapa efe ke likhato tse kae?',
        optionsEn: ['90°', '180°', '360°'],
        optionsSt: ['90°', '180°', '360°'],
        answer: 1,
        explanationEn: 'The three interior angles of every triangle always add up to 180° (Syllabus LO12).',
        explanationSt: 'Likhutlo tse tharo tse ka hare tsa khutlo-tharo li lula li etsa 180° hantle.'
      },
      {
        qEn: 'Solve the long division problem: 144 ÷ 12 = ?',
        qSt: 'Bala karabo ea kabelo ena: 144 ÷ 12 = ?',
        optionsEn: ['10', '12', '14'],
        optionsSt: ['10', '12', '14'],
        answer: 1,
        explanationEn: '12 multiplied by 12 equals 144, so 144 ÷ 12 = 12.',
        explanationSt: '12 e atisitsoe ka 12 e etsa 144, kahoo karabo ke 12.'
      },
      {
        qEn: 'Which fraction is equivalent to 2/4 in its simplest form?',
        qSt: 'Ke karolwana efe e lekanang le 2/4 ka sebopeho se nolofalitsoeng?',
        optionsEn: ['1/2', '1/3', '3/4'],
        optionsSt: ['1/2', '1/3', '3/4'],
        answer: 0,
        explanationEn: 'Dividing numerator and denominator by 2 gives 1/2.',
        explanationSt: 'Ha o arola holimo le tlase ka 2, karabo e ba 1/2.'
      },
      {
        qEn: 'A farmer sells a sheep for M850. If the buyer pays with a M1,000 note, how much change is returned?',
        qSt: 'Morui o rekisa nku ka M850. Haeba moreki a fana ka chelete ea M1,000, o lokela ho fumana chenchi e kae?',
        optionsEn: ['M150', 'M250', 'M50'],
        optionsSt: ['M150', 'M250', 'M50'],
        answer: 0,
        explanationEn: 'M1,000 - M850 = M150 change.',
        explanationSt: 'M1,000 ha o tlosa M850 ho sala M150.'
      }
    ]
  },
  {
    id: 'paper_science_g5',
    titleEn: 'Grade 5 National Primary Examination Practice (Science & Tech)',
    titleSt: 'Boikoetliso ba Litlhahlobo tsa Sehlopha sa 5 (Saense le Theknoloji)',
    grade: 5,
    year: 'National Mock Paper',
    subject: 'Scientific & Technological',
    instructionsEn: 'Read each question carefully and test your knowledge of nature and physical science.',
    instructionsSt: 'Bala potso ka hloko u leke tsebo ea hao ea saense ea tlhaho.',
    questions: [
      {
        qEn: 'What gas is necessary to support animal life, human breathing, and fire burning?',
        qSt: 'Ke khase efe e hlokahalang bakeng sa bophelo ba liphoofolo, ho hema ha batho, le mollo?',
        optionsEn: ['Oxygen', 'Carbon Dioxide', 'Nitrogen'],
        optionsSt: ['Oksijene (Oxygen)', 'Khabone (Carbon Dioxide)', 'Nitrojene'],
        answer: 0,
        explanationEn: 'Oxygen supports cellular respiration and combustion (burning) (Syllabus LO6).',
        explanationSt: 'Oksijene e hlokahala ho hema le ho lumella mollo ho tuka.'
      },
      {
        qEn: 'Which instrument is specifically used to measure temperature accurately?',
        qSt: 'Ke sesebelisoa sefe se sebelisoang ho metha mocheso ka nepo?',
        optionsEn: ['Thermometer', 'Rain Gauge', 'Pan Scale'],
        optionsSt: ['Themometara (Thermometer)', 'Rain Gauge', 'Pan Scale'],
        answer: 0,
        explanationEn: 'A thermometer measures degrees Celsius of body, liquid, or weather temperature.',
        explanationSt: 'Themometara e metha likhato tsa mocheso kapa serame sa ’mele le metsi.'
      },
      {
        qEn: 'Which food nutrient is primarily responsible for repairing body tissues and building muscles?',
        qSt: 'Ke kaho efe ea lijo e ahang mesifa le ho matlafatsa ’mele oa motho?',
        optionsEn: ['Proteins (e.g., beans, eggs)', 'Refined sugar', 'Plain fat'],
        optionsSt: ['Liprotheine (linaoa, mahe)', 'Tsoekere feela', 'Mafura feela'],
        answer: 0,
        explanationEn: 'Proteins are body-building nutrients found in beans, meat, and eggs.',
        explanationSt: 'Liprotheine li aha mesifa le ho phekola ’mele kamora bokuli.'
      }
    ]
  }
];
