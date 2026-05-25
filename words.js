const wordGroups = [
  // ==========================================
  // 📚 第一部分：三年內外英文 (共 15 組)
  // ==========================================
  { category: "三年內外英文", groupName: "心血管系統 1", words: [
      { english: "angina pectoris", chinese: "心絞痛", scenario: "病人主訴胸骨後方有壓迫性疼痛，並輻射至左臂及下巴，服用耐絞寧 (NTG) 後症狀可緩解。" }, 
      { english: "arrhythmia", chinese: "心律不整", scenario: "護理師在測量生命徵象時，發現病人的橈動脈跳動忽快忽慢，節律極度不規則。" }, 
      { english: "arteriosclerosis", chinese: "動脈硬化", scenario: "長期高血壓導致病人的血管壁增厚、變硬，失去原本的彈性。" }, 
      { english: "asystole", chinese: "心搏停止", scenario: "急救室的生理監視器發出長音警報，心電圖螢幕上顯示為一條平滑的直線。" }, 
      { english: "angiography", chinese: "血管攝影", scenario: "醫師從病人的鼠蹊部置入導管，並注入顯影劑，以在 X 光下觀察冠狀動脈是否有阻塞。" }, 
      { english: "aortic dissection", chinese: "主動脈剝離", scenario: "急診病人突發如撕裂般的劇烈胸背痛，血壓極高，電腦斷層顯示血管內膜破裂，血液流入中層。" }, 
      { english: "aneurysm", chinese: "動脈瘤", scenario: "超音波檢查發現病人的腹主動脈壁局部異常擴大，形成了一個像氣球般脆弱的囊狀物。" }, 
      { english: "cardiopulmonary resuscitation (CPR)", chinese: "心肺復甦術", scenario: "當發現病人無意識且無正常呼吸時，立刻進行胸部按壓與人工呼吸的急救技術。" }, 
      { english: "cellulitis", chinese: "蜂窩性組織炎", scenario: "病人的小腿有一處傷口未處理，幾天後患部出現大範圍的紅、腫、熱、痛，並伴隨發燒。" }, 
      { english: "ventricular tachycardia (VT)", chinese: "心室心搏過速", scenario: "心電圖顯示寬大且快速的 QRS 波（心跳速率大於100次/分），病人出現心悸及頭暈，需立即處理。" }
  ]},
  { category: "三年內外英文", groupName: "心血管與皮膚", words: [
      { english: "defibrillation", chinese: "去顫術", scenario: "病人發生心室纖維顫動 (VF) 時，醫療團隊使用電擊器給予直流電，以恢復正常心律。" }, 
      { english: "dermatitis", chinese: "皮膚炎", scenario: "病人接觸到過敏原後，皮膚出現發紅、發癢及脫屑等發炎反應。" }, 
      { english: "debridement", chinese: "清創術", scenario: "整形外科醫師在手術室為燒燙傷病人移除壞死及受感染的組織，以利傷口癒合。" }, 
      { english: "electrocardiogram (EKG)", chinese: "心電圖", scenario: "護理師在病人的胸前與四肢貼上電極片，用來記錄心臟的電氣活動。" }, 
      { english: "eczema", chinese: "濕疹", scenario: "孩童的關節屈側出現劇烈搔癢的紅疹，且有滲液及結痂，醫師診斷為異位性皮膚疾病。" }, 
      { english: "gangrene", chinese: "壞疽", scenario: "糖尿病病人的腳趾因為長期血液循環不良，組織發生缺血性壞死並變黑。" }, 
      { english: "herpes", chinese: "疱疹", scenario: "病人最近壓力大、免疫力下降，嘴角出現了群聚的水泡，伴隨刺痛感。" }, 
      { english: "hyperlipidemia", chinese: "高血脂", scenario: "抽血報告顯示病人的總膽固醇與三酸甘油酯數值皆遠高於正常標準。" }, 
      { english: "myocardial infarction (MI)", chinese: "心肌梗塞", scenario: "冠狀動脈完全阻塞，導致心肌缺血壞死，病人出現劇烈胸痛且伴隨冒冷汗及呼吸困難。" }, 
      { english: "necrosis", chinese: "壞死", scenario: "因為長時間的壓迫，病患尾椎處的壓瘡傷口深處出現了沒有活力的發黑組織。" }
  ]},
  // ... 請保留你原本的 第 3 組 到 第 30 組 ...
  // ==========================================
  // 📚 第一部分：三年內外英文 (共 15 組)
  // ==========================================
  { category: "三年內外英文", groupName: "心血管系統 1", words: [
      { english: "angina pectoris", chinese: "心絞痛" }, { english: "arrhythmia", chinese: "心律不整" }, { english: "arteriosclerosis", chinese: "動脈硬化" }, { english: "asystole", chinese: "心搏停止" }, { english: "angiography", chinese: "血管攝影" }, { english: "aortic dissection", chinese: "主動脈剝離" }, { english: "aneurysm", chinese: "動脈瘤" }, { english: "cardiopulmonary resuscitation (CPR)", chinese: "心肺復甦術" }, { english: "cellulitis", chinese: "蜂窩性組織炎" }, { english: "ventricular tachycardia (VT)", chinese: "心室心搏過速" }
  ]},
  { category: "三年內外英文", groupName: "心血管與皮膚", words: [
      { english: "defibrillation", chinese: "去顫術" }, { english: "dermatitis", chinese: "皮膚炎" }, { english: "debridement", chinese: "清創術" }, { english: "electrocardiogram (EKG)", chinese: "心電圖" }, { english: "eczema", chinese: "濕疹" }, { english: "gangrene", chinese: "壞疽" }, { english: "herpes", chinese: "疱疹" }, { english: "hyperlipidemia", chinese: "高血脂" }, { english: "myocardial infarction (MI)", chinese: "心肌梗塞" }, { english: "necrosis", chinese: "壞死" }
  ]},
  { category: "三年內外英文", groupName: "腎臟泌尿系統 1", words: [
      { english: "palpitation", chinese: "心悸" }, { english: "pitting edema", chinese: "凹陷性水腫" }, { english: "scabies", chinese: "疥瘡" }, { english: "swelling", chinese: "腫脹" }, { english: "syncope", chinese: "暈厥" }, { english: "acute glomerulonephritis (AGN)", chinese: "急性腎絲球腎炎" }, { english: "benign prostatic hyperplasia (BPH)", chinese: "良性前列腺增殖" }, { english: "chronic renal failure (CRF)", chinese: "慢性腎衰竭" }, { english: "end-stage renal disease (ESRD)", chinese: "末期腎病" }, { english: "hemodialysis (HD)", chinese: "血液透析" }
  ]},
  { category: "三年內外英文", groupName: "腎臟泌尿系統 2", words: [
      { english: "hydronephrosis", chinese: "腎盂積水" }, { english: "intravenous pyelography (IVP)", chinese: "靜脈腎盂攝影術" }, { english: "KUB (kidneys, ureters, bladder)", chinese: "腎臟、輸尿管與膀胱X光" }, { english: "nephrotic syndrome", chinese: "腎病症候群" }, { english: "peritoneal dialysis (PD)", chinese: "腹膜透析" }, { english: "pyelonephritis", chinese: "腎盂腎炎" }, { english: "renal abscess", chinese: "腎膿瘍" }, { english: "uremia", chinese: "尿毒症" }, { english: "urinary incontinence", chinese: "尿失禁" }, { english: "urinary tract infections (UTI)", chinese: "泌尿道感染" }
  ]},
  { category: "三年內外英文", groupName: "神經系統 1", words: [
      { english: "basilar skull fracture", chinese: "顱底骨折" }, { english: "extradural hematoma (EDH)", chinese: "硬腦膜外血腫" }, { english: "subdural hemorrhage (SDH)", chinese: "硬腦膜下出血" }, { english: "brain edema", chinese: "腦水腫" }, { english: "headache", chinese: "頭痛" }, { english: "cerebrovascular accident (CVA)", chinese: "腦血管意外（中風）" }, { english: "aphasia", chinese: "失語症" }, { english: "amnesia", chinese: "失憶症" }, { english: "stroke", chinese: "中風" }, { english: "head injury", chinese: "頭部外傷" }
  ]},
  { category: "三年內外英文", groupName: "神經系統 2", words: [
      { english: "cerebrospinal fluid (CSF)", chinese: "腦脊髓液" }, { english: "epilepsy", chinese: "癲癎" }, { english: "hydrocephalus", chinese: "水腦症" }, { english: "brain concussion", chinese: "腦震盪" }, { english: "bacterial meningitis", chinese: "細菌性腦膜炎" }, { english: "multiple sclerosis", chinese: "多發性硬化症" }, { english: "Parkinson's disease", chinese: "巴金森氏症" }, { english: "deep tendon reflex (DTR)", chinese: "深層肌腱反射" }, { english: "seizure", chinese: "抽搐發作" }, { english: "increased intracranial pressure (IICP)", chinese: "顱內壓升高" }
  ]},
  { category: "三年內外英文", groupName: "檢查與五官科 1", words: [
      { english: "computerized tomography CT Scan", chinese: "電腦斷層攝影" }, { english: "magnetic resonance imaging (MRI)", chinese: "核磁共振影像" }, { english: "cerebral angiography", chinese: "腦血管攝影" }, { english: "electroencephalogram (EEG)", chinese: "腦電波檢查" }, { english: "electromyography (EMG)", chinese: "肌電圖檢查" }, { english: "lumbar puncture (LP)", chinese: "腰椎穿刺" }, { english: "cataract", chinese: "白內障" }, { english: "photophobia", chinese: "畏光" }, { english: "ventricular fibrillation (VF)", chinese: "心室纖維顫動" }, { english: "nasal septal deviation (NSD)", chinese: "鼻中膈彎曲" }
  ]},
  { category: "三年內外英文", groupName: "五官與呼吸系統 1", words: [
      { english: "glaucoma", chinese: "青光眼" }, { english: "retinal detachment", chinese: "視網膜剝離" }, { english: "sinusitis", chinese: "鼻竇炎" }, { english: "tonsillectomy", chinese: "扁桃腺切除術" }, { english: "acute pharyngitis", chinese: "急性咽炎" }, { english: "otitis media", chinese: "中耳炎" }, { english: "Meniere's Syndrome", chinese: "美尼爾氏症" }, { english: "myasthenia gravis (MG)", chinese: "重症肌無力" }, { english: "acute respiratory distress syndrome (ARDS)", chinese: "急性呼吸窘迫症候群" }, { english: "respiratory failure", chinese: "呼吸衰竭" }
  ]},
  { category: "三年內外英文", groupName: "呼吸系統 2", words: [
      { english: "asthma", chinese: "氣喘" }, { english: "bronchitis", chinese: "支氣管炎" }, { english: "bronchoscopy", chinese: "支氣管鏡檢" }, { english: "Do Not Resuscitate (DNR)", chinese: "不施行心肺復甦術" }, { english: "chronic obstructive pulmonary disease (COPD)", chinese: "慢性肺阻塞病" }, { english: "cyanosis", chinese: "發紺" }, { english: "dyspnea", chinese: "呼吸困難" }, { english: "dysuria", chinese: "解尿困難" }, { english: "emphysema", chinese: "肺氣腫" }, { english: "pleural effusion", chinese: "肋膜積水" }
  ]},
  { category: "三年內外英文", groupName: "呼吸與腫瘤 1", words: [
      { english: "pneumonia", chinese: "肺炎" }, { english: "pneumothorax", chinese: "氣胸" }, { english: "respiratory therapy (RT)", chinese: "呼吸治療" }, { english: "tonsillitis", chinese: "扁桃腺炎" }, { english: "tracheotomy", chinese: "氣管切開術" }, { english: "tuberculosis", chinese: "結核病" }, { english: "upper respiratory infection (URI)", chinese: "上呼吸道感染" }, { english: "ventilator", chinese: "呼吸器" }, { english: "atrial flutter (AF)", chinese: "心房撲動" }, { english: "carcinoma", chinese: "癌瘤" }
  ]},
  { category: "三年內外英文", groupName: "腫瘤與免疫系統 1", words: [
      { english: "biopsy", chinese: "活體切片" }, { english: "cachexia", chinese: "惡病質" }, { english: "death on arrival (DOA)", chinese: "到院死亡" }, { english: "exploratory laparotomy", chinese: "剖腹探查" }, { english: "metastasis", chinese: "轉移" }, { english: "spinal anesthesia", chinese: "脊髓麻醉" }, { english: "acquired immunodeficiency syndrome (AIDS)", chinese: "後天免疫不全症候群" }, { english: "allergy", chinese: "過敏" }, { english: "lymphedema", chinese: "淋巴水腫" }, { english: "lymphoma", chinese: "淋巴癌" }
  ]},
  { category: "三年內外英文", groupName: "血液與免疫系統 2", words: [
      { english: "splenomegaly", chinese: "脾臟腫大" }, { english: "systemic lupus erythematosus (SLE)", chinese: "全身性紅斑狼瘡" }, { english: "transplantation", chinese: "移植" }, { english: "anemia", chinese: "貧血" }, { english: "disseminated intravascular coagulation (DIC)", chinese: "瀰漫性血管內凝血" }, { english: "purpura", chinese: "紫斑症" }, { english: "thrombocytopenia", chinese: "血小板減少症" }, { english: "thrombosis", chinese: "血栓形成" }, { english: "hyperventilation", chinese: "換氣過度" }, { english: "syphilis", chinese: "梅毒" }
  ]},
  { category: "三年內外英文", groupName: "消化系統 1", words: [
      { english: "tetanus", chinese: "破傷風" }, { english: "colonoscopy", chinese: "結腸鏡檢查" }, { english: "dysphagia", chinese: "吞嚥困難" }, { english: "gastrostomy", chinese: "胃造瘻" }, { english: "hematemesis", chinese: "吐血" }, { english: "hemorrhoids", chinese: "痔瘡" }, { english: "hepatitis", chinese: "肝炎" }, { english: "hepatoma", chinese: "肝癌" }, { english: "jaundice", chinese: "黃疸" }, { english: "ascites", chinese: "腹水" }
  ]},
  { category: "三年內外英文", groupName: "消化、酸鹼與骨骼科 1", words: [
      { english: "upper gastrointestinal bleeding (UGI bleeding)", chinese: "上腸胃道出血" }, { english: "dehydration", chinese: "脫水" }, { english: "hypercalcemia", chinese: "高血鈣" }, { english: "influenza", chinese: "流行性感冒" }, { english: "hypoxia", chinese: "缺氧" }, { english: "metabolic acidosis", chinese: "代謝性酸中毒" }, { english: "respiratory alkalosis", chinese: "呼吸性鹼中毒" }, { english: "arthrocentesis", chinese: "關節穿刺術" }, { english: "arthroscopy", chinese: "關節鏡檢" }, { english: "amputation", chinese: "截肢" }
  ]},
  { category: "三年內外英文", groupName: "骨骼與內分泌系統", words: [
      { english: "herniation of intervertebral disk (HIVD)", chinese: "椎間盤突出症" }, { english: "osteoarthritis", chinese: "骨性關節炎" }, { english: "dislocation", chinese: "脫臼" }, { english: "fracture", chinese: "骨折" }, { english: "total hip replacement (THR)", chinese: "全髋關節置換術" }, { english: "gout", chinese: "痛風" }, { english: "hyperthyroidism", chinese: "甲狀腺機能亢進" }, { english: "acromegaly", chinese: "肢端肥大症" }, { english: "diabetes mellitus", chinese: "糖尿病" }, { english: "hypoglycemia", chinese: "低血糖症" }
  ]},

  // ==========================================
  // 📚 第二部分：二年基護英文 (共 15 組)
  // ==========================================
  { category: "二年基護英文", groupName: "給藥與感染", words: [
      { english: "ointment", chinese: "藥膏" }, { english: "pill", chinese: "丸劑" }, { english: "powder", chinese: "粉劑" }, { english: "syrup", chinese: "糖漿" }, { english: "tablet", chinese: "錠劑" }, { english: "total parenteral nutrition (TPN)", chinese: "全靜脈營養法" }, { english: "infection", chinese: "感染" }, { english: "healthcare-associated infection (HAI)", chinese: "醫療照護相關感染" }, { english: "disinfection", chinese: "消毒" }, { english: "sterilization", chinese: "滅菌" }
  ]},
  { category: "二年基護英文", groupName: "感染與護理評估", words: [
      { english: "isolation technique", chinese: "隔離技術" }, { english: "terminal disinfection", chinese: "終期消毒" }, { english: "urine culture", chinese: "尿液培養" }, { english: "nursing assessment", chinese: "護理評估" }, { english: "subjective data; S.", chinese: "主觀資料" }, { english: "objective data; O.", chinese: "客觀資料" }, { english: "nursing diagnosis", chinese: "護理診斷" }, { english: "health problem", chinese: "健康問題" }, { english: "etiology", chinese: "導因" }, { english: "nursing planning", chinese: "護理計畫" }
  ]},
  { category: "二年基護英文", groupName: "護理過程與基本照護", words: [
      { english: "nursing implementation", chinese: "護理執行" }, { english: "nursing evaluation", chinese: "護理評值" }, { english: "special mouth care", chinese: "特別口腔護理" }, { english: "bed bath", chinese: "床上沐浴" }, { english: "back care", chinese: "背部護理" }, { english: "perineal washing", chinese: "會陰沖洗" }, { english: "bed shampoo", chinese: "床上洗髮" }, { english: "Fowler's position", chinese: "坐臥式" }, { english: "Trendelenburg's position", chinese: "垂頭仰臥式" }, { english: "knee-chest position", chinese: "膝胸臥式" }
  ]},
  { category: "二年基護英文", groupName: "活動與休息", words: [
      { english: "admission", chinese: "入院" }, { english: "isotonic exercise", chinese: "等張運動" }, { english: "isometric exercise", chinese: "等長運動" }, { english: "range of motion; ROM", chinese: "全關節運動" }, { english: "restraint", chinese: "約束" }, { english: "pressure sore", chinese: "壓瘡" }, { english: "absolute bed rest", chinese: "絕對臥床休息" }, { english: "disuse syndrome", chinese: "廢用症候群" }, { english: "insomnia", chinese: "失眠" }, { english: "vital signs; V/S", chinese: "生命徵象" }
  ]},
  { category: "二年基護英文", groupName: "生命徵象與呼吸", words: [
      { english: "body temperature; BT", chinese: "體溫" }, { english: "pulse; P.", chinese: "脈搏" }, { english: "respiration; R.", chinese: "呼吸" }, { english: "blood pressure; BP.", chinese: "血壓" }, { english: "shortness of breath; S.O.B.", chinese: "呼吸短促" }, { english: "fever of unknown", chinese: "不明熱" }, { english: "tachypnea", chinese: "呼吸過速" }, { english: "bradypnea", chinese: "呼吸過緩" }, { english: "dyspnea", chinese: "呼吸困難" }, { english: "apnea", chinese: "呼吸暫停" }
  ]},
  { category: "二年基護英文", groupName: "呼吸與異常", words: [
      { english: "orthopnea", chinese: "端坐呼吸" }, { english: "hypertension", chinese: "高血壓" }, { english: "stethoscope", chinese: "聽診器" }, { english: "wheezing", chinese: "哮鳴音" }, { english: "rales", chinese: "囉音" }, { english: "fracture, Fx.", chinese: "骨折" }, { english: "urinary tract infection; UTI", chinese: "泌尿道感染" }, { english: "albumin", chinese: "白蛋白" }, { english: "ice pillow", chinese: "冰枕" }, { english: "hyperthermia", chinese: "體溫過高" }
  ]},
  { category: "二年基護英文", groupName: "飲食與給藥", words: [
      { english: "oral administration, po", chinese: "口服給藥法" }, { english: "low residue diet", chinese: "低渣飲食" }, { english: "full diet/regular diet", chinese: "普通飲食" }, { english: "bland diet", chinese: "溫和飲食" }, { english: "nasogastric tube feeding; N-G feeding", chinese: "鼻胃管灌食" }, { english: "nausea", chinese: "噁心" }, { english: "vomiting", chinese: "嘔吐" }, { english: "unit dose system", chinese: "單一劑量系統" }, { english: "hypodermic injection, hypo", chinese: "皮下注射法" }, { english: "dehydration", chinese: "脫水" }
  ]},
  { category: "二年基護英文", groupName: "靜脈輸注與併發症", words: [
      { english: "intravenous infusion", chinese: "靜脈輸注" }, { english: "hospice and palliative care", chinese: "安寧緩和療護" }, { english: "phlebitis", chinese: "靜脈炎" }, { english: "hematoma", chinese: "血腫" }, { english: "blood transfusion", chinese: "輸血" }, { english: "sepsis", chinese: "敗血症" }, { english: "discharge planning", chinese: "出院準備服務" }, { english: "hypersensitivity reaction; allergic reaction; anaphylaxis", chinese: "過敏反應" }, { english: "air embolism", chinese: "空氣栓塞" }, { english: "cross-matching", chinese: "交叉試驗" }
  ]},
  { category: "二年基護英文", groupName: "電解質與排泄", words: [
      { english: "hyponatremia", chinese: "低血鈉" }, { english: "hyperkalemia", chinese: "高血鉀" }, { english: "defecation", chinese: "排便" }, { english: "diarrhea", chinese: "腹瀉" }, { english: "cleansing enema", chinese: "清潔灌腸" }, { english: "urinary incontinence", chinese: "尿失禁" }, { english: "oliguria", chinese: "少尿" }, { english: "dysuria", chinese: "解尿困難" }, { english: "urinary retention", chinese: "尿潴留" }, { english: "constipation", chinese: "便祕" }
  ]},
  { category: "二年基護英文", groupName: "排泄與收集", words: [
      { english: "bowel incontinence", chinese: "排便失禁" }, { english: "distention", chinese: "腹脹" }, { english: "retention enema", chinese: "保留灌腸" }, { english: "polyuria", chinese: "多尿" }, { english: "anuria", chinese: "無尿" }, { english: "nocturia", chinese: "夜尿" }, { english: "hematuria", chinese: "血尿" }, { english: "occult blood; OB", chinese: "潛血試驗" }, { english: "sputum culture", chinese: "痰液培養" }, { english: "Foley catheterization", chinese: "存留導尿" }
  ]},
  { category: "二年基護英文", groupName: "檢查與溝通", words: [
      { english: "client", chinese: "案主" }, { english: "occupied bed", chinese: "臥有病人床" }, { english: "inspection", chinese: "視診" }, { english: "palpation", chinese: "觸診" }, { english: "percussion", chinese: "叩診" }, { english: "auscultation", chinese: "聽診" }, { english: "empathy", chinese: "同理心" }, { english: "symptom", chinese: "症狀" }, { english: "sign", chinese: "徵象" }, { english: "subjective symptom", chinese: "主觀症狀" }
  ]},
  { category: "二年基護英文", groupName: "醫囑與紀錄", words: [
      { english: "objective symptom", chinese: "客觀症狀" }, { english: "therapeutic communication", chinese: "治療性溝通" }, { english: "chart", chinese: "病歷" }, { english: "record", chinese: "記錄" }, { english: "standing order", chinese: "長期醫囑" }, { english: "state order", chinese: "臨時醫囑" }, { english: "order renew", chinese: "醫囑重整" }, { english: "against-advise discharge; A. A. D.", chinese: "自動出院" }, { english: "focus charting", chinese: "焦點記錄法" }, { english: "diagnosis; Dx.", chinese: "診斷" }
  ]},
  { category: "二年基護英文", groupName: "病歷縮寫 1", words: [
      { english: "activities of daily living; A. D. L.", chinese: "日常生活活動" }, { english: "chief complaint; C. C.", chinese: "主訴" }, { english: "dead on arrival; D.O. A.", chinese: "到達時已死亡" }, { english: "expected date of confinement; E. D. C.", chinese: "預產期" }, { english: "family history; F. H.", chinese: "家庭病史" }, { english: "follow up; F/U", chinese: "追蹤" }, { english: "history; Hx.", chinese: "病史" }, { english: "medication administration record; M. A. R.", chinese: "給藥治療記錄" }, { english: "may be discharge; M. B. D.", chinese: "同意出院" }, { english: "physical examination; P. E.", chinese: "身體檢查" }
  ]},
  { category: "二年基護英文", groupName: "病歷縮寫與給藥途徑 1", words: [
      { english: "present illness; P. I.", chinese: "現在病況" }, { english: "rule out; R/O", chinese: "疑似" }, { english: "treatment; Tx.", chinese: "治療" }, { english: "auris dexter, right ear; A. D.", chinese: "右耳" }, { english: "auris sinister, left ear; A. S.", chinese: "左耳" }, { english: "aures unitas, both ears; A. U.", chinese: "雙耳" }, { english: "Hypodermic injection; Hypo; Subcutaneous", chinese: "皮下注射" }, { english: "intradermal(I.C.) injection", chinese: "皮內注射" }, { english: "intramuscular(I.M.) injection", chinese: "肌肉注射" }, { english: "inhalation; Inh.", chinese: "吸入法" }
  ]},
  { category: "二年基護英文", groupName: "給藥途徑 2", words: [
      { english: "intravenous(I. V.) injection", chinese: "靜脈注射" }, { english: "oculus dexter, right eye; O. D.", chinese: "右眼" }, { english: "oculus sinister, left eye; O. S.", chinese: "左眼" }, { english: "oculus uterque, both eyes; O. U.", chinese: "雙眼" }, { english: "per os, by mouth; P.O.", chinese: "口服" }, { english: "subcutaneous (S. C.) injection", chinese: "皮下注射" }, { english: "sublingual; S. L.", chinese: "舌下" }, { english: "aqua", chinese: "水溶性" }, { english: "capsule", chinese: "膠囊" }, { english: "dilute", chinese: "稀釋" }
  ]}
];
