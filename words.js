// words.js - 專屬醫護英文題庫檔
const wordGroups = [
  {
    groupName: "第 1 組 (心血管系統 1)",
    words: [
      { english: "angina pectoris", chinese: "心絞痛" },
      { english: "arrhythmia", chinese: "心律不整" },
      { english: "arteriosclerosis", chinese: "動脈硬化" },
      { english: "asystole", chinese: "心搏停止" },
      { english: "angiography", chinese: "血管攝影" },
      { english: "aortic dissection", chinese: "主動脈剝離" },
      { english: "aneurysm", chinese: "動脈瘤" },
      { english: "cardiopulmonary resuscitation (CPR)", chinese: "心肺復甦術" },
      { english: "cellulitis", chinese: "蜂窩性組織炎" },
      { english: "ventricular tachycardia (VT)", chinese: "心室心搏過速" }
    ]
  },
  {
    groupName: "第 2 組 (心血管與皮膚)",
    words: [
      { english: "defibrillation", chinese: "去顫術" },
      { english: "dermatitis", chinese: "皮膚炎" },
      { english: "debridement", chinese: "清創術" },
      { english: "electrocardiogram (EKG)", chinese: "心電圖" },
      { english: "eczema", chinese: "濕疹" },
      { english: "gangrene", chinese: "壞疽" },
      { english: "herpes", chinese: "疱疹" },
      { english: "hyperlipidemia", chinese: "高血脂" },
      { english: "myocardial infarction (MI)", chinese: "心肌梗塞" },
      { english: "necrosis", chinese: "壞死" }
    ]
  },
  {
    groupName: "第 3 組 (腎臟泌尿系統 1)",
    words: [
      { english: "palpitation", chinese: "心悸" },
      { english: "pitting edema", chinese: "凹陷性水腫" },
      { english: "scabies", chinese: "疥瘡" },
      { english: "swelling", chinese: "腫脹" },
      { english: "syncope", chinese: "暈厥" },
      { english: "acute glomerulonephritis (AGN)", chinese: "急性腎絲球腎炎" },
      { english: "benign prostatic hyperplasia (BPH)", chinese: "良性前列腺增殖" },
      { english: "chronic renal failure (CRF)", chinese: "慢性腎衰竭" },
      { english: "end-stage renal disease (ESRD)", chinese: "末期腎病" },
      { english: "hemodialysis (HD)", chinese: "血液透析" }
    ]
  },
  {
    groupName: "第 4 組 (腎臟泌尿系統 2)",
    words: [
      { english: "hydronephrosis", chinese: "腎盂積水" },
      { english: "intravenous pyelography (IVP)", chinese: "靜脈腎盂攝影術" },
      { english: "KUB (kidneys, ureters, bladder)", chinese: "腎臟、輸尿管與膀胱X光" },
      { english: "nephrotic syndrome", chinese: "腎病症候群" },
      { english: "peritoneal dialysis (PD)", chinese: "腹膜透析" },
      { english: "pyelonephritis", chinese: "腎盂腎炎" },
      { english: "renal abscess", chinese: "腎膿瘍" },
      { english: "uremia", chinese: "尿毒症" },
      { english: "urinary incontinence", chinese: "尿失禁" },
      { english: "urinary tract infections (UTI)", chinese: "泌尿道感染" }
    ]
  },
  {
    groupName: "第 5 組 (神經系統 1)",
    words: [
      { english: "basilar skull fracture", chinese: "顱底骨折" },
      { english: "extradural hematoma (EDH)", chinese: "硬腦膜外血腫" },
      { english: "subdural hemorrhage (SDH)", chinese: "硬腦膜下出血" },
      { english: "brain edema", chinese: "腦水腫" },
      { english: "headache", chinese: "頭痛" },
      { english: "cerebrovascular accident (CVA)", chinese: "腦血管意外（中風）" },
      { english: "aphasia", chinese: "失語症" },
      { english: "amnesia", chinese: "失憶症" },
      { english: "stroke", chinese: "中風" },
      { english: "head injury", chinese: "頭部外傷" }
    ]
  },
  {
    groupName: "第 6 組 (神經系統 2)",
    words: [
      { english: "cerebrospinal fluid (CSF)", chinese: "腦脊髓液" },
      { english: "epilepsy", chinese: "癲癎" },
      { english: "hydrocephalus", chinese: "水腦症" },
      { english: "brain concussion", chinese: "腦震盪" },
      { english: "bacterial meningitis", chinese: "細菌性腦膜炎" },
      { english: "multiple sclerosis", chinese: "多發性硬化症" },
      { english: "Parkinson's disease", chinese: "巴金森氏症" },
      { english: "deep tendon reflex (DTR)", chinese: "深層肌腱反射" },
      { english: "seizure", chinese: "抽搐發作" },
      { english: "increased intracranial pressure (IICP)", chinese: "顱內壓升高" }
    ]
  },
  {
    groupName: "第 7 組 (檢查與五官科 1)",
    words: [
      { english: "computerized tomography CT Scan", chinese: "電腦斷層攝影" },
      { english: "magnetic resonance imaging (MRI)", chinese: "核磁共振影像" },
      { english: "cerebral angiography", chinese: "腦血管攝影" },
      { english: "electroencephalogram (EEG)", chinese: "腦電波檢查" },
      { english: "electromyography (EMG)", chinese: "肌電圖檢查" },
      { english: "lumbar puncture (LP)", chinese: "腰椎穿刺" },
      { english: "cataract", chinese: "白內障" },
      { english: "photophobia", chinese: "畏光" },
      { english: "ventricular fibrillation (VF)", chinese: "心室纖維顫動" },
      { english: "nasal septal deviation (NSD)", chinese: "鼻中膈彎曲" }
    ]
  },
  {
    groupName: "第 8 組 (五官與呼吸系統 1)",
    words: [
      { english: "glaucoma", chinese: "青光眼" },
      { english: "retinal detachment", chinese: "視網膜剝離" },
      { english: "sinusitis", chinese: "鼻竇炎" },
      { english: "tonsillectomy", chinese: "扁桃腺切除術" },
      { english: "acute pharyngitis", chinese: "急性咽炎" },
      { english: "otitis media", chinese: "中耳炎" },
      { english: "Meniere's Syndrome", chinese: "美尼爾氏症" },
      { english: "myasthenia gravis (MG)", chinese: "重症肌無力" },
      { english: "acute respiratory distress syndrome (ARDS)", chinese: "急性呼吸窘迫症候群" },
      { english: "respiratory failure", chinese: "呼吸衰竭" }
    ]
  },
  {
    groupName: "第 9 組 (呼吸系統 2)",
    words: [
      { english: "asthma", chinese: "氣喘" },
      { english: "bronchitis", chinese: "支氣管炎" },
      { english: "bronchoscopy", chinese: "支氣管鏡檢" },
      { english: "Do Not Resuscitate (DNR)", chinese: "不施行心肺復甦術" },
      { english: "chronic obstructive pulmonary disease (COPD)", chinese: "慢性肺阻塞病" },
      { english: "cyanosis", chinese: "發紺" },
      { english: "dyspnea", chinese: "呼吸困難" },
      { english: "dysuria", chinese: "解尿困難" },
      { english: "emphysema", chinese: "肺氣腫" },
      { english: "pleural effusion", chinese: "肋膜積水" }
    ]
  },
  {
    groupName: "第 10 組 (呼吸與腫瘤 1)",
    words: [
      { english: "pneumonia", chinese: "肺炎" },
      { english: "pneumothorax", chinese: "氣胸" },
      { english: "respiratory therapy (RT)", chinese: "呼吸治療" },
      { english: "tonsillitis", chinese: "扁桃腺炎" },
      { english: "tracheotomy", chinese: "氣管切開術" },
      { english: "tuberculosis", chinese: "結核病" },
      { english: "upper respiratory infection (URI)", chinese: "上呼吸道感染" },
      { english: "ventilator", chinese: "呼吸器" },
      { english: "atrial flutter (AF)", chinese: "心房撲動" },
      { english: "carcinoma", chinese: "癌瘤" }
    ]
  },
  {
    groupName: "第 11 組 (腫瘤與免疫系統 1)",
    words: [
      { english: "biopsy", chinese: "活體切片" },
      { english: "cachexia", chinese: "惡病質" },
      { english: "death on arrival (DOA)", chinese: "到院死亡" },
      { english: "exploratory laparotomy", chinese: "剖腹探查" },
      { english: "metastasis", chinese: "轉移" },
      { english: "spinal anesthesia", chinese: "脊髓麻醉" },
      { english: "acquired immunodeficiency syndrome (AIDS)", chinese: "後天免疫不全症候群" },
      { english: "allergy", chinese: "過敏" },
      { english: "lymphedema", chinese: "淋巴水腫" },
      { english: "lymphoma", chinese: "淋巴癌" }
    ]
  },
  {
    groupName: "第 12 組 (血液與免疫系統 2)",
    words: [
      { english: "splenomegaly", chinese: "脾臟腫大" },
      { english: "systemic lupus erythematosus (SLE)", chinese: "全身性紅斑狼瘡" },
      { english: "transplantation", chinese: "移植" },
      { english: "anemia", chinese: "貧血" },
      { english: "disseminated intravascular coagulation (DIC)", chinese: "瀰漫性血管內凝血" },
      { english: "purpura", chinese: "紫斑症" },
      { english: "thrombocytopenia", chinese: "血小板減少症" },
      { english: "thrombosis", chinese: "血栓形成" },
      { english: "hyperventilation", chinese: "換氣過度" },
      { english: "syphilis", chinese: "梅毒" }
    ]
  },
  {
    groupName: "第 13 組 (消化系統 1)",
    words: [
      { english: "tetanus", chinese: "破傷風" },
      { english: "colonoscopy", chinese: "結腸鏡檢查" },
      { english: "dysphagia", chinese: "吞嚥困難" },
      { english: "gastrostomy", chinese: "胃造瘻" },
      { english: "hematemesis", chinese: "吐血" },
      { english: "hemorrhoids", chinese: "痔瘡" },
      { english: "hepatitis", chinese: "肝炎" },
      { english: "hepatoma", chinese: "肝癌" },
      { english: "jaundice", chinese: "黃疸" },
      { english: "ascites", chinese: "腹水" }
    ]
  },
  {
    groupName: "第 14 組 (消化、酸鹼與骨骼科 1)",
    words: [
      { english: "upper gastrointestinal bleeding (UGI bleeding)", chinese: "上腸胃道出血" },
      { english: "dehydration", chinese: "脫水" },
      { english: "hypercalcemia", chinese: "高血鈣" },
      { english: "influenza", chinese: "流行性感冒" },
      { english: "hypoxia", chinese: "缺氧" },
      { english: "metabolic acidosis", chinese: "代謝性酸中毒" },
      { english: "respiratory alkalosis", chinese: "呼吸性鹼中毒" },
      { english: "arthrocentesis", chinese: "關節穿刺術" },
      { english: "arthroscopy", chinese: "關節鏡檢" },
      { english: "amputation", chinese: "截肢" }
    ]
  },
  {
    groupName: "第 15 組 (骨骼與內分泌系統)",
    words: [
      { english: "herniation of intervertebral disk (HIVD)", chinese: "椎間盤突出症" },
      { english: "osteoarthritis", chinese: "骨性關節炎" },
      { english: "dislocation", chinese: "脫臼" },
      { english: "fracture", chinese: "骨折" },
      { english: "total hip replacement (THR)", chinese: "全髋關節置換術" },
      { english: "gout", chinese: "痛風" },
      { english: "hyperthyroidism", chinese: "甲狀腺機能亢進" },
      { english: "acromegaly", chinese: "肢端肥大症" },
      { english: "diabetes mellitus", chinese: "糖尿病" },
      { english: "hypoglycemia", chinese: "低血糖症" }
    ]
  }
];
