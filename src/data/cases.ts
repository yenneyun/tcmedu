import { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  // 1. 头面及神经系统
  { id: 'c1', category: '头面神经', name: '紧张性头痛 (肝阳上亢)', diagnosis: '肝阳上亢，清窍不利。', treatment: '平肝潜阳，熄风通络。', points: ['百会', '太阳', '风池', '太冲'], techniques: ['点法', '按揉法', '拿捏法'], operation: '点按百会、太阳各1分钟，重按太冲、行间。' },
  { id: 'c2', category: '头面神经', name: '偏头痛 (气滞血瘀)', diagnosis: '脉络瘀阻，血行不畅。', treatment: '活血化瘀，通络止痛。', points: ['太阳', '率谷', '风池', '合谷', '血海'], techniques: ['点法', '按揉法', '掌推法'], operation: '沿胆经循行线路重点推抹。' },
  { id: 'c3', category: '头面神经', name: '面瘫 (风痰阻络)', diagnosis: '风寒袭络，经气不遂。', treatment: '祛风化痰，通络牵正。', points: ['翳风', '地仓', '颊车', '合谷', '太冲'], techniques: ['按揉法', '拿捏法', '弹拨法'], operation: '轻揉面部患侧，点按合谷。' },
  { id: 'c4', category: '头面神经', name: '失眠 (心脾两虚)', diagnosis: '神不守舍，气血不足。', treatment: '补气养血，宁心安神。', points: ['神门', '三阴交', '心俞', '脾俞', '安眠'], techniques: ['按揉法', '一指禅推法', '擦法'], operation: '睡前轻揉神门，擦涌泉。' },
  { id: 'c5', category: '头面神经', name: '眩晕 (痰湿中阻)', diagnosis: '痰湿蒙蔽，清阳不升。', treatment: '化痰祛湿，健脾和胃。', points: ['风池', '百会', '内关', '丰隆', '足三里'], techniques: ['按揉法', '点法', '拿捏法'], operation: '重点点揉丰隆、足三里。' },

  // 2. 颈肩腰腿痛
  { id: 'c6', category: '颈肩腰腿痛', name: '颈椎病 (风寒湿痹)', diagnosis: '筋脉拘急，气血闭阻。', treatment: '祛风散寒，通络止痛。', points: ['风池', '肩井', '天宗', '曲池'], techniques: ['滚法', '拿捏法', '点法'], operation: '松解颈项部侧后方肌肉。' },
  { id: 'c7', category: '颈肩腰腿痛', name: '肩周炎 (气血瘀滞)', diagnosis: '关节粘连，气血不通。', treatment: '活血通络，松解粘连。', points: ['肩髃', '肩贞', '肩前', '曲池'], techniques: ['滚法', '弹拨法', '掌推法'], operation: '摇关节运动配合弹拨。' },
  { id: 'c8', category: '颈肩腰腿痛', name: '腰椎间盘突出症', diagnosis: '纤维环破裂，神经受压。', treatment: '补益肝肾，强筋壮骨。', points: ['肾俞', '大肠俞', '秩边', '委中'], techniques: ['滚法', '点法', '拨股内收肌法'], operation: '由李建仲教授推荐的特效辅助手法。' },
  { id: 'c9', category: '颈肩腰腿痛', name: '腰肌劳损 (气滞血瘀)', diagnosis: '长期负重，肌肉僵硬。', treatment: '理气活血，舒筋止痛。', points: ['肾俞', '腰阳关', '大肠俞', '委中'], techniques: ['滚法', '点法', '擦法'], operation: '局部热擦，透热为度。' },
  { id: 'c10', category: '颈肩腰腿痛', name: '膝关节骨性关节炎', diagnosis: '软骨磨损，肝肾不足。', treatment: '补肝益肾，通络止痛。', points: ['血海', '梁丘', '犊鼻', '阳陵泉'], techniques: ['按揉法', '擦法', '掌推法'], operation: '围绕髌骨周围施术。' },
  { id: 'case-lzq', category: '颈肩腰腿痛', name: '梨状肌综合征', diagnosis: '梨状肌受损压迫坐骨神经。', treatment: '舒筋活络、松解止痛。', points: ['环跳', '秩边', '阿是穴'], techniques: ['滚法', '拨法', '深揉法', '点法'], operation: '在梨状肌位置深部拨动，配合下肢被动内外旋。' },

  // 3. 消化系统
  { id: 'c11', category: '消化系统', name: '慢性胃炎 (脾胃虚弱)', diagnosis: '中焦虚寒，受纳无权。', treatment: '健脾和胃，理气止痛。', points: ['中脘', '天枢', '脾俞', '胃俞', '足三里'], techniques: ['一指禅推法', '按揉法', '摩腹'], operation: '温和摩腹10分钟。' },
  { id: 'c12', category: '消化系统', name: '胃下垂 (中气下陷)', diagnosis: '气虚无力，内脏下移。', treatment: '补中益气，升阳举陷。', points: ['百会', '中脘', '气海', '足三里'], techniques: ['按揉法', '掌振法'], operation: '由下向上推摩，振百会。' },
  { id: 'c13', category: '消化系统', name: '功能性消化不良', diagnosis: '脾失健运，食积不化。', treatment: '消食导滞，理气和胃。', points: ['中脘', '天枢', '梁门', '足三里'], techniques: ['一指禅推法', '摩腹', '点法'], operation: '顺时针摩腹消导。' },
  { id: 'c14', category: '消化系统', name: '慢性腹泻 (脾肾阳虚)', diagnosis: '命门火衰，完谷不化。', treatment: '温补脾肾，固涩止泻。', points: ['关元', '气海', '肾俞', '命门'], techniques: ['按揉法', '擦法', '摩腹'], operation: '横擦腰骶，温热为度。' },
  { id: 'c15', category: '消化系统', name: '便秘 (肠道燥热)', diagnosis: '津亏受阻，腑气不通。', treatment: '清热润肠，通调腑气。', points: ['天枢', '大肠俞', '支沟', '上巨虚'], techniques: ['点法', '按揉法', '摩腹'], operation: '重力点按天枢。' },

  // 4. 妇科及泌尿
  { id: 'c16', category: '妇科泌尿', name: '痛经 (寒凝血瘀)', diagnosis: '寒湿凝滞，气滞血瘀。', treatment: '温经散寒，活血止痛。', points: ['关元', '气海', '三阴交', '地机'], techniques: ['按揉法', '擦法', '摩腹'], operation: '经前3天开始施术。' },
  { id: 'c17', category: '妇科泌尿', name: '月经不调 (气血亏虚)', diagnosis: '统摄无权，任冲失调。', treatment: '补气养血，调经固冲。', points: ['关元', '血海', '三阴交', '脾俞'], techniques: ['按揉法', '一指禅推法'], operation: '气血两补。' },
  { id: 'c18', category: '妇科泌尿', name: '慢性盆腔炎', diagnosis: '湿热下注，气机不畅。', treatment: '清热利湿，活血化瘀。', points: ['关元', '中极', '阴陵泉', '蠡沟'], techniques: ['点法', '按揉法'], operation: '避开经期。' },
  { id: 'c19', category: '妇科泌尿', name: '产后腰痛 (肾气不足)', diagnosis: '产后劳损，精气受损。', treatment: '补肾壮腰，温阳通络。', points: ['肾俞', '腰阳关', '命门', '委中'], techniques: ['滚法', '擦法', '点法'], operation: '手法宜缓。' },
  { id: 'c20', category: '妇科泌尿', name: '前列腺增生 (肾阳亏虚)', diagnosis: '下元不固，开合失司。', treatment: '温肾助阳，化气行水。', points: ['关元', '中极', '肾俞', '命门'], techniques: ['按揉法', '擦法', '摩腹'], operation: '会阴部轻微震法。' },

  // 5. 呼吸及五官
  { id: 'c21', category: '呼吸五官', name: '慢性鼻炎 (肺气虚寒)', diagnosis: '卫外不固，鼻窍不通。', treatment: '益气固表，宣通鼻窍。', points: ['迎香', '印堂', '肺俞', '足三里'], techniques: ['按揉法', '拿捏法'], operation: '摩擦鼻翼两侧产生温热。' },
  { id: 'c22', category: '呼吸五官', name: '过敏性鼻炎', diagnosis: '肺肾气虚，外感风寒。', treatment: '固护卫气，祛风散寒。', points: ['迎香', '印堂', '大椎', '肺俞'], techniques: ['按揉法', '擦法'], operation: '擦背部督脉线。' },
  { id: 'c23', category: '呼吸五官', name: '慢性咽炎 (阴虚火旺)', diagnosis: '津液受阻，虚火上炎。', treatment: '滋阴降火，利咽润喉', points: ['廉泉', '天突', '合谷', '太溪'], techniques: ['点法', '按揉法'], operation: '指尖轻压天突。' },
  { id: 'c24', category: '呼吸五官', name: '耳鸣耳聋 (肝肾阴虚)', diagnosis: '髓海不足，清窍失养。', treatment: '滋肾平肝，开窍聪耳', points: ['听宫', '翳风', '太溪', '肾俞'], techniques: ['按揉法', '点法'], operation: '按揉听宫配合张口。' },
  { id: 'c25', category: '呼吸五官', name: '感冒早期 (风寒束表)', diagnosis: '风寒犯肺，卫阳受挫。', treatment: '疏风散寒，解表通窍', points: ['风池', '大椎', '合谷', '肺俞'], techniques: ['拿捏法', '擦法', '点法'], operation: '大力拿捏项部。' },

  // 6. 儿科及其他
  { id: 'c26', category: '儿科及其他', name: '小儿厌食 (脾胃虚弱)', diagnosis: '疳积初期，运化失职。', treatment: '健脾开胃，消食导滞', points: ['四横纹', '板门', '中脘', '足三里'], techniques: ['推法', '揉法', '摩腹'], operation: '儿科推拿手法宜轻快。' },
  { id: 'c27', category: '儿科及其他', name: '小儿腹泻 (脾虚湿盛)', diagnosis: '清浊不分，水分入大肠。', treatment: '健脾化湿，止泻固肠', points: ['大肠俞', '天枢', '龟尾', '七节骨'], techniques: ['推法', '揉法'], operation: '推上七节骨止泻。' },
  { id: 'c28', category: '儿科及其他', name: '小儿遗尿 (肾气不固)', diagnosis: '三焦气化失职，膀胱失约。', treatment: '补肾固涩，缩尿止遗', points: ['关元', '气海', '肾俞', '三阴交'], techniques: ['按揉法', '擦法'], operation: '睡前按摩腹部。' },
  { id: 'c29', category: '儿科及其他', name: '小儿肌性斜颈', diagnosis: '局部肌肉挛缩结节。', treatment: '活血通络，软坚散结', points: ['翳风', '缺盆', '肩井', '肿块局部'], techniques: ['按揉法', '弹拨法', '拿捏法'], operation: '循序渐进，不可暴力。' },
  { id: 'c30', category: '儿科及其他', name: '亚健康调理 (气血两虚)', diagnosis: '阴阳失衡，正气不足。', treatment: '补益气血，调和阴阳', points: ['关元', '气海', '足三里', '三阴交'], techniques: ['按揉法', '摩腹', '擦法'], operation: '全身保健性按摩。' },
];
