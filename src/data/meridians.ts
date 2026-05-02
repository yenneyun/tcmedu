import { Meridian } from '../types';

export const meridians: Meridian[] = [
  {
    id: 'LU',
    name: '手太阴肺经',
    points: [
      { name: '中府', location: '胸前壁外上方，云门下1寸，平第1肋间隙', indication: '咳嗽、气喘、胸痛', imageUrl: '/zhongfu.png' },
      { name: '云门', location: '锁骨下窝凹陷处，距前正中线6寸', indication: '咳嗽、气喘、肩痛' },
      { name: '天府', location: '腋前皱襞直下3寸，肱二头肌桡侧缘', indication: '瘿气、气喘、臂痛' },
      { name: '侠白', location: '天府穴下1寸，肱二头肌桡侧缘', indication: '咳嗽、心痛、干呕' },
      { name: '尺泽', location: '肘横纹中，肱二头肌腱桡侧凹陷处', indication: '咳嗽、潮热、肘痛' },
      { name: '孔最', location: '尺泽与太渊连线上，尺泽下5寸', indication: '咳血、痔疮、肘挛' },
      { name: '列缺', location: '桡骨茎突上方，腕横纹上1.5寸', indication: '头痛、项强、口喎' },
      { name: '经渠', location: '桡骨茎突与桡动脉之间，腕横纹上1寸', indication: '咳嗽、气喘、胸痛' },
      { name: '太渊', location: '腕掌侧横纹桡侧端，桡动脉搏动处', indication: '无脉症、心痛、肺疾' },
      { name: '鱼际', location: '第1掌骨中点桡侧，赤白肉际处', indication: '失音、咽干、发热' },
      { name: '少商', location: '拇指桡侧指甲角旁0.1寸', indication: '咽喉肿痛、中暑、昏迷' }
    ],
    route: '手太阴肺经：起于中焦，下络大肠，环循胃口，上膈属肺。从肺系横出腋下，走上肢内侧前缘，入肘中，下臂，止于拇指端。'
  },
  {
    id: 'LI',
    name: '手阳明大肠经',
    points: [
      { name: '商阳', location: '食指桡侧指甲角旁0.1寸', indication: '咽喉肿痛、热病、昏迷' },
      { name: '二间', location: '微握拳，第2掌指关节前，桡侧凹陷中', indication: '鼻衄、牙痛、喉痹' },
      { name: '三间', location: '握拳，第2掌指关节后，桡侧凹陷中', indication: '齿痛、喉痹、腹胀' },
      { name: '合谷', location: '在手背，第1、2掌骨间', indication: '头痛、目赤肿痛、面瘫' },
      { name: '阳溪', location: '腕背横纹桡侧，拇短伸肌腱与拇长伸肌腱之间', indication: '头痛、目赤、耳聋' },
      { name: '温溜', location: '阳溪与曲池连线上，阳溪上5寸', indication: '头痛、面肿、喉痹' },
      { name: '手三里', location: '在阳溪穴与曲池穴连线上，曲池下2寸', indication: '腹痛、腹泻、上肢不遂' },
      { name: '曲池', location: '在肘横纹外侧端', indication: '热病、高血压、肢体瘫痪' },
      { name: '肩髃', location: '肩部三角肌上，外展时呈凹陷处', indication: '肩痛、上肢不遂' },
      { name: '迎香', location: '鼻翼外缘中点旁，当鼻唇沟中', indication: '鼻塞、口喎、面痒' }
    ],
    route: '手阳明大肠经起于食指桡侧尖端（商阳穴），沿食指桡侧上行，经过合谷（第一、二掌骨之间）进入两筋（拇长伸肌腱和拇短伸肌腱）之间，沿上肢外侧前缘，上行至肩前，经肩髃穴，过肩后，至项后督脉的大椎穴（第七颈椎棘突下），前行进入足阳明经的缺盆穴（锁骨上窝），络于肺，下行通过横膈，属于大肠。',
    diagramUrl: '/meridians/LI.png'
  },
  {
    id: 'ST',
    name: '足阳明胃经',
    points: [
      { name: '承泣', location: '面部瞳孔直下，当眼球与眶下缘之间', indication: '目赤肿痛、眼睑瞤动' },
      { name: '四白', location: '瞳孔直下，当眶下孔凹陷处', indication: '目赤痛、眼睑瞬动、面瘫' },
      { name: '地仓', location: '口角旁0.4寸，巨髎穴直下', indication: '口角歪斜、流涎、三叉神经痛' },
      { name: '大迎', location: '下颌角前方，咬肌附着部前缘', indication: '口唇瞤动、颊肿、齿痛' },
      { name: '下关', location: '耳屏前，颧弓与下颌切迹所形成的凹陷中', indication: '耳聋、耳鸣、牙痛、面瘫' },
      { name: '人迎', location: '颈部喉结旁1.5寸，颈总动脉搏动处', indication: '翿气、瘰疬、气喘、咽喉肿痛' },
      { name: '缺盆', location: '锁骨上窝中央，前正中线旁开4寸', indication: '咳嗽、气喘、缺盆痛' },
      { name: '乳中', location: '胸部，当第4肋间隙，乳头中央', indication: '不予针灸，只作胸腹部取穴标志' },
      { name: '天枢', location: '腹中部，平脐，距脐中2寸', indication: '腹痛、腹胀、便秘、泄泻' },
      { name: '足三里', location: '小腿外侧，犊鼻穴下3寸', indication: '胃痛、腹胀、消化不良、体虚' },
      { name: '丰隆', location: '外踝尖上8寸，条口穴外1寸', indication: '痰多、哮喘、下肢不遂' },
      { name: '解溪', location: '足背与小腿交界处的关节中央凹陷中', indication: '下肢痿痹、踝关节病' },
      { name: '冲阳', location: '足背最高点，当足背动脉搏动处', indication: '口眼喎斜、面肿、足痿' },
      { name: '内庭', location: '足背第2、3趾间，趾蹼缘后方赤白肉际处', indication: '齿痛、咽喉肿痛、肠癖' },
      { name: '厉兑', location: '第2趾外侧趾甲角旁0.1寸', indication: '鼻衄、多梦、热病、惊狂' }
    ],
    route: '起于鼻翼旁（承泣穴），挟鼻上行，左右侧交会于鼻根部，旁行入目内眦，与足太阳经相交，向下沿鼻柱外侧，入上齿中，还出，挟口两旁，环绕嘴唇，在颏唇沟承浆穴处左右相交，退回沿下颌骨后下缘到大迎穴处，沿下颌角上行过耳前，经过上关穴（客主人），沿发际，至额前。本经脉分支从大迎穴前方下行到人迎穴，沿喉咙向下后行至大椎，折向前行，入缺盆，下行穿过膈肌，属胃，络脾。直行向下一支是从缺盆出体表，沿乳中线下行，挟脐两旁（旁开二寸），下行至腹股沟外的气街穴。本经脉分从幽门处分出，入足第二趾外侧端（厉兑穴）。',
    diagramUrl: '/meridians/ST.png'
  },
  {
    id: 'SP',
    name: '足太阴脾经',
    points: [
      { name: '隐白', location: '足大趾内侧趾甲角旁0.1寸', indication: '崩漏、便血、多梦' },
      { name: '大都', location: '足大趾内侧，第1跖趾关节前下方', indication: '腹胀、呕吐、泄泻' },
      { name: '太白', location: '第1跖骨小头后缘，赤白肉际处', indication: '胃痛、腹胀、肠鸣、腹泻' },
      { name: '公孙', location: '第1跖骨基底部的前下方', indication: '胃痛、呕吐、泄泻、痢疾' },
      { name: '三阴交', location: '内踝尖直上3寸，胫骨内侧面后缘', indication: '肠鸣腹胀、泄泻、月经不调、遗精' },
      { name: '地机', location: '内踝尖与阴陵泉连线上，阴陵泉下3寸', indication: '腹痛、泄泻、月经不调、水肿' },
      { name: '阴陵泉', location: '胫骨内侧髁下缘凹陷中', indication: '腹胀、水肿、黄疸、小便不利' },
      { name: '血海', location: '髌骨内上缘上2寸，股内侧肌隆起处', indication: '月经不调、隐疹、湿疹' },
      { name: '大横', location: '脐中旁开4寸', indication: '腹痛、泄泻、便秘' },
      { name: '大包', location: '侧胸部，第6肋间隙，腋中线上', indication: '气喘、胸胁痛、全身疼痛、乏力' }
    ],
    route: '起自足大趾之端隐白穴，上循内侧白肉际达大都穴，从大都过核骨之后太白穴，后延公孙、商邱穴，在内踝前前廉三阴交，上循胻骨经膝里胫骨后漏谷穴，从漏谷穴交出足厥阴肝经之前为地机穴、阴陵泉穴(合穴)，至此上膝股内前廉血海穴、上至腿中箕门穴，从冲门穴属脾、络胃。再循府舍、腹结、大横、腹哀、食窦、天溪、胸乡、周荣、大包等穴，而上行咽喉，挟咽连舌本，散舌下。',
    diagramUrl: '/meridians/SP.png'
  },
  {
    id: 'HT',
    name: '手少阴心经',
    points: [
      { name: '极泉', location: '腋窝正中，腋动脉搏动处', indication: '心痛、心悸、气短、胁肋疼痛' },
      { name: '青灵', location: '肱二头肌内侧沟中，肘横纹上3寸', indication: '头痛振寒、腋下痛、肩臂不举' },
      { name: '少海', location: '屈肘时，在肘横纹内侧端与肱骨内上髁连线中点', indication: '心痛、手颤、肘臂拘挛、瘰疬' },
      { name: '神门', location: '腕掌侧横纹尺侧端，尺侧腕屈肌腱桡侧凹陷中', indication: '心痛、失眠、惊悸、健忘' },
      { name: '少冲', location: '小指桡侧指甲角旁0.1寸', indication: '心悸、心痛、胸胁痛、热病' }
    ],
    route: '手少阴心经至心中起，向下联络小肠，支脉从心系向上，挟着咽喉上行，连系于目系，从心系上行到肺部，再向下出于腋窝部至极泉穴，沿着上臂内侧后缘至少海穴，行于手太阴经和手厥阴经的后面，到达肘窝，沿着前臂内侧后缘下行，至掌后豌豆骨部，进入掌内，沿小指内侧至末端，与手太阳小肠经相接。'
  },
  {
    id: 'SI',
    name: '手太阳小肠经',
    points: [
      { name: '少泽', location: '小指尺侧指甲角旁0.1寸', indication: '乳少、昏迷、热病' },
      { name: '后溪', location: '微握掌，第5掌指关节后尺侧', indication: '头项强痛、腰背痛、耳聋、目赤' },
      { name: '小海', location: '尺骨鹰嘴与肱骨内上髁之间凹陷中', indication: '肘臂疼痛、癫痫' },
      { name: '天宗', location: '肩胛骨岗下窝中央凹陷处', indication: '肩胛疼痛、气喘、乳痈' },
      { name: '颧髎', location: '目外眦直下，颧骨下缘凹陷中', indication: '口眼喎斜、面痛、齿痛' },
      { name: '听宫', location: '耳屏前，下颌骨髁状突后缘凹陷中', indication: '耳鸣、耳聋、齿痛' }
    ],
    route: '手太阳小肠经自手小指尺侧端少泽穴起始，沿手掌尺侧缘上行，出尺骨茎突，沿前臂后边尺侧直上，出尺骨鹰嘴和肱骨内上踝之间小海穴，向上沿上臂后边内侧，出行到肩关节后面，绕行肩胛，在大椎穴与督脉相会，向前进入缺盆，深入体腔，联络心，沿着食道下行，贯穿膈肌，到达胃部，入属小肠。'
  },
  {
    id: 'BL',
    name: '足太阳膀胱经',
    points: [
      { name: '睛明', location: '面部目内眦内上方凹陷中', indication: '目赤肿痛、视物不明、近视' },
      { name: '天柱', location: '项后发际正中旁开1.3寸，斜方肌外缘', indication: '头痛、项强、鼻塞' },
      { name: '肺俞', location: '第3胸椎棘突下，旁开1.5寸', indication: '咳嗽、气喘、吐血、盗汗' },
      { name: '心俞', location: '第5胸椎棘突下，旁开1.5寸', indication: '心痛、惊悸、失眠、健忘' },
      { name: '肝俞', location: '第9胸椎棘突下，旁开1.5寸', indication: '胁痛、目赤、黄疸、癫狂' },
      { name: '肾俞', location: '第2腰椎棘突下，旁开1.5寸', indication: '遗精、阳痿、腰痛、水肿' },
      { name: '秩边', location: '第4骶后孔水平旁开3寸', indication: '腰骶痛、下肢痿痹、便秘' },
      { name: '委中', location: '腘横纹中点，当肱二头肌腱与半腱肌腱之间', indication: '腰痛、下肢痿痹、腹痛' },
      { name: '昆仑', location: '外踝尖与跟腱之间凹陷中', indication: '后头痛、项强、腰痛、难产' },
      { name: '至阴', location: '足小趾外侧趾甲角旁0.1寸', indication: '胎位不正、头痛、鼻塞' }
    ],
    route: '足太阳膀胱经起于内眼角（睛明穴），上过额部，直至巅顶交会于督脉的百会穴。巅顶部的分支：从巅顶（百会穴）分出至耳上角。从腰中分出下行，夹脊旁，通于臀部，经大腿后面，进入胭窝中。其二，从肩胛内侧分别下行，通过肩胛，沿背中线旁三寸下行，过臀部，经过髋关节部（环跳穴），沿大腿外侧后边下行，会合于胭窝中，向下通过腓肠肌，经外踝后面（昆仑穴），在足跟部折向前，经足背外侧至足小趾外侧端（至阴穴），与足少阴肾经相接。'
  },
  {
    id: 'KI',
    name: '足少阴肾经',
    points: [
      { name: '涌泉', location: '足底前1/3与后2/3交界处的凹陷中', indication: '头痛、眩晕、惊厥、昏迷' },
      { name: '然谷', location: '足内侧缘，足舟骨粗隆下方', indication: '消渴、咽喉肿痛、腹泻、遗精' },
      { name: '太溪', location: '内踝尖与跟腱之间的凹陷处', indication: '头痛、目眩、咽喉肿痛、失眠' },
      { name: '照海', location: '内踝尖正下方凹陷中', indication: '失眠、痫证、咽喉干痛' },
      { name: '复溜', location: '太溪穴上2寸，跟腱前缘', indication: '腹胀、泄泻、水肿、盗汗' }
    ],
    route: '起于足小趾下面，斜行于足心（涌泉穴）出行于舟状骨粗隆之下，沿内踝后缘，分出进入足跟，向上沿小腿内侧后缘，至腘内侧，上股内侧后缘入脊内（长强穴），穿过脊柱，属肾，络膀胱。本经脉直行于腹腔内，从肾上行，穿过肝和膈肌，进入肺，沿喉咙，到舌根两旁。本经脉一分支从肺中分出，络心，注于胸中，交于手厥阴心包经。'
  },
  {
    id: 'PC',
    name: '手厥阴心包经',
    points: [
      { name: '天池', location: '第4肋间隙，乳头外1寸', indication: '胸闷、气喘、瘰疬、腋下肿' },
      { name: '曲泽', location: '肘横纹中，肱二头肌腱尺侧缘', indication: '心痛、善惊、心悸、胃痛' },
      { name: '郄门', location: '腕横纹上5寸，掌长肌腱与桡侧腕屈肌腱之间', indication: '心痛、心悸、吐血、衄血' },
      { name: '内关', location: '腕横纹上2寸，掌长肌腱与桡侧腕屈肌腱之间', indication: '心痛、惊悸、胃痛、呕吐' },
      { name: '大陵', location: '腕横纹中央，掌长肌腱与桡侧腕屈肌腱之间', indication: '心痛、心悸、胃痛、呕吐' },
      { name: '劳宫', location: '在手掌心，第2、3掌骨之间', indication: '心痛、吞酸、热病、口疮' },
      { name: '中冲', location: '中指尖端中央', indication: '昏迷、舌强肿痛、热病、心痛' }
    ],
    route: '自胸中起始，出来属于心包络，向下贯穿膈肌，联络上、中、下三焦。它的分支，从胸中出走胁部，在腋下三寸的部位(天池)又向上行至腋窝下面。沿上臂前边，行走在手太阴肺经 and 手少阴心经之间，进入肘中(曲泽)，下行前臂两筋(桡侧腕屈肌腱与掌长肌腱)的中间，进入掌中，沿中指出其末端(中冲)；它的另一条支脉，从掌中分出，出无名指尺侧端(关冲)。'
  },
  {
    id: 'TE',
    name: '手少阳三焦经',
    points: [
      { name: '关冲', location: '无名指尺侧指甲角旁0.1寸', indication: '咽喉肿痛、头痛、热病' },
      { name: '中渚', location: '手背第4、5掌骨间，掌指关节后凹陷中', indication: '头痛、耳鸣、耳聋' },
      { name: '阳池', location: '腕背横纹中，指伸肌腱尺侧', indication: '消渴、目赤肿痛、耳聋' },
      { name: '外关', location: '腕背横纹上2寸，桡骨与尺骨之间', indication: '热病、头痛、耳鸣、耳聋' },
      { name: '支沟', location: '腕背横纹上3寸，桡骨与尺骨之间', indication: '便秘、耳鸣、耳聋' },
      { name: '翳风', location: '耳垂后方，乳突与下颌角之间的凹陷处', indication: '耳鸣、耳聋、口眼喎斜' },
      { name: '丝竹空', location: '眉梢后侧凹陷中', indication: '头痛、目赤肿痛、眼睑瞤动' }
    ],
    route: '起于无名指尺侧端(关冲)，上出于四、五两指之间，沿手背行至腕部(阳池)，向上行经尺、桡两骨之间，通过肘尖部，沿着上臂后边，到肩部，在大椎穴处与督脉相会，从足少阳胆经后面，前行进入缺盆(锁骨上窝)，分布在膻中(两乳之间)，脉气散布联络心包，向下贯穿膈肌，统属于上、中、下三焦。它的分支，从膻中部位分出，向上浅出于锁骨上窝，经颈至耳后，上行出耳上角，然后屈曲向下到达面颊，直至眼眶下部。'
  },
  {
    id: 'GB',
    name: '足少阳胆经',
    points: [
      { name: '瞳子髎', location: '目外眦旁，当眶骨外缘凹陷中', indication: '目赤肿痛、视物昏花、目翳' },
      { name: '听会', location: '耳屏间切迹前，下颌骨髁突后缘凹陷中', indication: '耳鸣、耳聋、流脓、齿痛' },
      { name: '风池', location: '胸锁乳突肌与斜方肌之间凹陷中，平风府穴', indication: '头痛、眩晕、感冒、目赤' },
      { name: '肩井', location: '大椎与肩峰端连线的中点', indication: '肩痛、项强、乳腺炎、难产' },
      { name: '环跳', location: '股骨大转子最凸点与骶管裂孔连线的外1/3与中1/3交点处', indication: '腰胯疼痛、半身不遂、下肢痿痹' },
      { name: '阳陵泉', location: '腓骨小头前下方凹陷中', indication: '胆囊炎、下肢痉挛、口苦、膝痛' },
      { name: '悬钟', location: '外踝尖上3寸，腓骨后缘', indication: '半身不遂、项强、胸胁胀痛' },
      { name: '临泣', location: '第4跖骨基底部的前下方，当小趾伸肌腱的外侧', indication: '目痛、目赤肿痛、乳痈' },
      { name: '窍阴', location: '第4趾外侧趾甲角旁0.1寸', indication: '头痛、耳鸣、耳聋' }
    ],
    route: '起于眼外角（瞳子髎），向上达额角部，下行至耳后（风池穴），由颈侧，经肩，进入锁骨上窝。直行脉再走到腋下，沿胸腹侧面，在髋关节与眼外角支脉会合，然后沿下肢外侧中线下行。继续下行胸中，穿过膈肌，络肝属胆，沿胁肋到耻骨上缘阴毛边际（气冲穴），横入髋关节（环跳穴）。'
  },
  {
    id: 'LR',
    name: '足厥阴肝经',
    points: [
      { name: '大敦', location: '足大趾外侧趾甲角旁0.1寸', indication: '崩漏、癫狂、疝气、遗尿' },
      { name: '行间', location: '第1、2趾间，趾蹼缘后方赤白肉际处', indication: '月经不调、头痛、目赤、失眠' },
      { name: '太冲', location: '第1、2跖骨结合部之前的凹陷中', indication: '眩晕、目赤、癫狂、胁痛' },
      { name: '中封', location: '内踝前，当胫骨前肌腱内侧凹陷处', indication: '遗精、疝气、小便不利' },
      { name: '蠡沟', location: '内踝尖上5寸，胫骨内侧面后缘', indication: '月经不调、赤白带下、阴痒' },
      { name: '曲泉', location: '屈膝，在膝内侧横纹头上方凹陷中', indication: '腹痛、小便不利、遗精、阴痒' },
      { name: '期门', location: '第6肋间隙，前正中线旁开4寸', indication: '胸胁胀痛、腹胀、呕吐' }
    ],
    route: '起于足大趾爪甲后丛毛处，沿足背向上至内踝前一寸处（中封穴），向上沿胫骨内缘，在内踝上8寸处交出足太阴脾经之后，上行过膝内侧，沿大腿内侧中线进入阴毛中，绕阴器，至小腹，挟胃两旁，属肝，络胆，向上穿过膈肌，分布于胁肋部，沿喉咙的后边，向上进入鼻咽部，上行连接目系出于额，上行与督脉会于头顶部。'
  },
  {
    id: 'RN',
    name: '任脉',
    points: [
      { name: '曲骨', location: '耻骨联合上缘凹陷中', indication: '少腹胀满、遗精、阳痿' },
      { name: '中极', location: '脐下4寸', indication: '遗精、阳痿、痛经、闭经' },
      { name: '关元', location: '脐下3寸', indication: '遗精、阳痿、虚劳、肠鸣' },
      { name: '气海', location: '脐下1.5寸', indication: '腹痛、泄泻、遗尿、虚劳' },
      { name: '神阙', location: '脐中央', indication: '泄泻、脱肛、虚脱' },
      { name: '中脘', location: '脐上4寸', indication: '胃痛、呕吐、泄泻' },
      { name: '膻中', location: '两乳头连线中点', indication: '气喘、胸闷、乳少' },
      { name: '廉泉', location: '喉结上方，舌骨体上缘凹陷中', indication: '舌强不语、暴喑' }
    ],
    route: '任脉起于小腹内，下出于会阴部，向上行经阴毛部，沿着腹内中线，到达喉咙部，继续上行，绕唇，经过面部，进入目眶下。'
  },
  {
    id: 'DU',
    name: '督脉',
    points: [
      { name: '长强', location: '尾骨尖端下0.5寸', indication: '痔疮、脱肛、便秘' },
      { name: '腰阳关', location: '第4腰椎棘突下', indication: '腰骶痛、遗精、阳痿' },
      { name: '命门', location: '第2腰椎棘突下', indication: '遗精、阳痿、脊强' },
      { name: '至阳', location: '第7胸椎棘突下', indication: '胸胁胀痛、黄疸' },
      { name: '大椎', location: '第7颈椎棘突下', indication: '发热、惊厥、疟疾' },
      { name: '风府', location: '项后枕骨下，平耳垂水平', indication: '头痛、项强、失眠' },
      { name: '百会', location: '头顶正中线与耳尖连线交点', indication: '头痛、眩晕、脱肛' },
      { name: '水沟', location: '人中沟上1/3处', indication: '昏迷、癫狂、牙痛' }
    ],
    route: '督脉起于小腹内，下出于会阴部，向后上行于脊柱内部，到达项后风府穴，进入脑内，沿着头部正中线，上过头顶，下行到达鼻子根部，绕唇。'
  }
];
