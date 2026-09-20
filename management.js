const FOODS={
  lemon:{name:'柠檬',src:'assets/coins/generated/lemon-coin.png',value:4},olive:{name:'橄榄',src:'assets/coins/generated/olive-coin.png',value:5},
  bamboo:{name:'竹笋',src:'assets/coins/generated/bamboo-coin.png',value:6},ginger:{name:'生姜',src:'assets/coins/generated/ginger-coin.png',value:6},
  croissant:{name:'好运可颂',src:'assets/coins/generated/croissant-coin.png',value:12},sourdough:{name:'乡村面包',src:'assets/coins/generated/sourdough-coin.png',value:18},
  steak:{name:'炭烤牛排',src:'assets/coins/generated/steak-coin.png',value:45,price:18000,copy:'采购后进入高级订单'},
  wagyu:{name:'雪花牛排',src:'assets/coins/generated/wagyu-coin.png',value:85,price:36000,copy:'采购后进入豪华订单'}
};
const DRINKS={tea:{name:'热茶',src:'assets/coins/generated/tea-coin.png',value:6},lemonade:{name:'柠檬饮',src:'assets/coins/generated/lemonade-coin.png',value:9},coffee:{name:'咖啡',src:'assets/coins/generated/coffee-coin.png',value:13}};
const PLATES={
  wood:{name:'木餐盘',capacity:2,multiplier:1,price:0,className:''},
  lemon:{name:'柠檬花盘',capacity:3,multiplier:1.06,price:5200,className:'lemon'},
  olive:{name:'橄榄叶盘',capacity:3,multiplier:1.12,price:9000,className:'olive'},
  plum:{name:'紫金餐盘',capacity:4,multiplier:1.18,price:13600,className:'plum'},
  tomato:{name:'番茄花盘',capacity:4,multiplier:1.24,price:24000,className:'tomato'},
  gold:{name:'厨神金盘',capacity:5,multiplier:1.30,price:48000,className:'gold'}
};
const RENOVATIONS=[
  {id:'sign',name:'手绘新招牌',icon:'✦',price:3200,bonus:.05,copy:'所有订单收入 +5%'},
  {id:'tables',name:'添两张桌椅',icon:'▦',price:7600,bonus:.10,copy:'所有订单收入 +10%'},
  {id:'counter',name:'好运收银台',icon:'$',price:15200,bonus:.15,copy:'所有订单收入 +15%'},
  {id:'awning',name:'街角遮阳棚',icon:'⌂',price:28000,bonus:.20,copy:'所有订单收入 +20%'},
  {id:'oven',name:'主厨烤炉',icon:'▣',price:50000,bonus:.25,copy:'所有订单收入 +25%'},
  {id:'upstairs',name:'好运二层楼',icon:'Ⅱ',price:88000,bonus:.30,copy:'所有订单收入 +30%'}
];
const COIN_EXCHANGE={id:'coins-repeat',cost:10,cash:100};
const TEST_UNLOCK_ALL=false;
const RUSH_BETA=false;
const POWERUPS={freeze:{name:'时间冻结',icon:'❄',price:100,copy:'全场倒计时暂停5秒'},widen:{name:'取料扩容',icon:'↔',price:120,copy:'取料区扩大8秒'},restock:{name:'好运补货',icon:'↻',price:150,copy:'刷新为订单所需食材'},freezePlus:{name:'时间冻结 Plus',icon:'❄+',price:200,copy:'全场倒计时暂停8秒'},auto3:{name:'一键交付',icon:'✓3',price:400,level:2,copy:'立即正确交付当前最多3个订单'}};
const CHAPTERS=['白手起家','有点小钱','财源滚滚','富得流油'];
const LEVELS=[
  {customers:3,quota:2,foodCount:[1,1],base:34,name:'第一张小桌',speed:56,zone:.44,bias:.84},
  {customers:6,quota:4,foodCount:[1,1],base:38,name:'来了回头客',speed:62,zone:.42,bias:.82},
  {customers:8,quota:6,foodCount:[1,1],base:44,name:'午市忙起来',speed:68,zone:.40,bias:.78},
  {customers:10,quota:8,foodCount:[1,1],threeItemCustomers:[1,2],base:52,name:'面包香出街',speed:74,zone:.38,bias:.75},
  {customers:12,quota:10,foodCount:[1,1],threeItemCustomers:[1,2],base:62,name:'白手起家收官',speed:80,zone:.36,bias:.72},
  {customers:8,quota:5,foodCount:[1,2],base:68,name:'添桌迎客',speed:72,zone:.40,bias:.78},
  {customers:9,quota:6,foodCount:[1,2],base:72,name:'午后小忙',speed:76,zone:.39,bias:.76},
  {customers:10,quota:7,foodCount:[1,2],base:76,name:'熟客带新客',speed:80,zone:.38,bias:.74},
  {customers:11,quota:8,foodCount:[1,2],base:82,name:'排队两张桌',speed:84,zone:.37,bias:.72},
  {customers:12,quota:9,foodCount:[1,2],base:88,name:'有点小钱收官',speed:88,zone:.36,bias:.70},
  {customers:10,quota:7,foodCount:[2,2],base:94,name:'招牌传开了',speed:84,zone:.37,bias:.73},
  {customers:11,quota:8,foodCount:[2,2],base:100,name:'饭点排长队',speed:88,zone:.36,bias:.71},
  {customers:12,quota:9,foodCount:[2,2],base:108,name:'双带齐开',speed:92,zone:.35,bias:.69},
  {customers:13,quota:10,foodCount:[2,2],base:116,name:'街坊都来尝',speed:96,zone:.34,bias:.67},
  {customers:14,quota:11,foodCount:[2,2],base:126,name:'财源滚滚收官',speed:100,zone:.33,bias:.65},
  {customers:12,quota:8,foodCount:[2,3],base:136,name:'好运名店',speed:94,zone:.35,bias:.70},
  {customers:13,quota:9,foodCount:[2,3],base:146,name:'高峰不断单',speed:98,zone:.34,bias:.68},
  {customers:14,quota:10,foodCount:[2,3],base:158,name:'主厨大考验',speed:102,zone:.33,bias:.66},
  {customers:15,quota:11,foodCount:[2,3],base:172,name:'满堂都是客',speed:106,zone:.32,bias:.64},
  {customers:16,quota:12,foodCount:[2,3],base:188,name:'富得流油收官',speed:110,zone:.31,bias:.62}
];
const ORDER_NAMES=['好运早餐','街角午餐','暖胃套餐','今日特供','主厨拼盘','熟客老样子'];
const CUSTOMER_NAMES=['小一','小美','阿福','乐乐','小满','团团','安安','多多','可可','米米','小喜','圆圆'];
const UNIT_BLESSINGS=['开张大吉，第一桶金稳稳到手！','客似云来，好运和进账一起涨！','财源滚滚来，厨房越忙钱包越鼓！','一路通关，愿你往后的日子富得流油！'];
const CUSTOMER_WAIT=27;
const STORAGE_KEY='lucky-kitchen-management-v1';
const TUTORIAL_VERSION=2;
const RUSH_MAX_TICKETS=3,RUSH_PICKUP_X=74,RUSH_PICKUP_TOLERANCE=5.25;
const RUSH_DIFFICULTIES={easy:{name:'顺手急单',orders:6,minTime:13,maxTime:18,startSpeed:1.8,endSpeed:2.4,reward:600,revive:8},normal:{name:'特快急单',orders:10,minTime:10,maxTime:18,startSpeed:2.1,endSpeed:3,reward:1000,revive:10},hard:{name:'火烧眉毛单',orders:14,minTime:8,maxTime:15,startSpeed:2.6,endSpeed:3.8,reward:1800,revive:15}};
const defaultSave={cash:0,chefCoins:0,completed:0,stars:{},renovations:[],plates:['wood'],ingredients:[],coinExchanges:[],powerups:{},badReviews:0,tutorialVersion:0,rushTickets:0,rushBest:0};
const $=id=>document.getElementById(id);
const screens={cover:$('coverScreen'),hub:$('hubScreen'),game:$('gameScreen'),rush:$('rushScreen')};
const hubCash=$('hubCash'),gameCash=$('gameCash'),shopCash=$('shopCash'),hubChefCoins=$('hubChefCoins'),gameChefCoins=$('gameChefCoins'),shopChefCoins=$('shopChefCoins'),storeLevel=$('storeLevel'),storeTitle=$('storeTitle'),storeEffect=$('storeEffect'),storeImage=$('storeImage'),shopfront=$('shopfront');
const chapterMap=document.querySelector('.chapter-map'),foodTrack=$('foodTrack'),drinkTrack=$('drinkTrack'),customerQueue=$('customerQueue'),tabletop=$('tabletop');
const takePlate=$('takePlate'),trashPlate=$('trashPlate'),selectionHint=$('selectionHint'),customerProgress=$('customerProgress'),levelLabel=$('levelLabel');
const shopModal=$('shopModal'),loadoutModal=$('loadoutModal'),rulesModal=$('rulesModal'),resultModal=$('resultModal'),renovationShop=$('renovationShop'),plateShop=$('plateShop'),ingredientShop=$('ingredientShop'),exchangeShop=$('exchangeShop'),powerupShop=$('powerupShop'),loadoutGrid=$('loadoutGrid'),toast=$('toast');
let save=loadSave();
let activeLevel=0,levelConfig,createdCustomers=0,served=0,lost=0,levelStartCash=0,gameActive=false,customers=[],plates=[],selectedPlateId=null;
let foodTokens=[],drinkTokens=[],tokenId=0,plateId=0,customerId=0,lastFrame=performance.now(),foodSpawn=0,drinkSpawn=0,toastTimer,resultPassed=false,dragState=null;
let customerSpawnTimer=0;
let availableCustomerSlots=[0,1,2];
let threeItemCustomerNumbers=new Set();
let pendingLevel=0,pendingLoadout=[],equippedTools=[],usedTools=new Set(),freezeUntil=0,widenUntil=0;
let musicEnabled=localStorage.getItem('lucky-kitchen-music')!=='off',backgroundMusic=null,backgroundMusicSource=null,backgroundMusicGain=null,backgroundMusicLoading=null;
let tutorial={active:false,step:'',target:null,timer:null,readyAt:0};
let rushActive=false,rushRemaining=18,rushCash=0,rushCoins=0,rushLivesCount=3,rushOrdersDone=0,rushStepIndex=0,rushOrder=[],rushItems=[],rushItemId=0,rushSpawn=0,rushLastTime=performance.now(),rushRevived=false,rushLastCountdownSecond=0,rushDifficulty='normal';

function loadSave(){try{const stored=JSON.parse(localStorage.getItem(STORAGE_KEY))||{},stars=stored.stars||{};for(let index=0;index<(stored.completed||0);index++)if(!stars[index])stars[index]=1;const migratedTickets=stored.rushTickets==null&&stored.completed>=1?1:(stored.rushTickets||0);return Object.assign({},defaultSave,stored,{stars:stars,renovations:stored.renovations||[],plates:stored.plates||['wood'],ingredients:stored.ingredients||[],coinExchanges:stored.coinExchanges||[],powerups:stored.powerups||{},rushTickets:Math.min(RUSH_MAX_TICKETS,migratedTickets)});}catch(error){return Object.assign({},defaultSave,{stars:{}});}}
function persist(){localStorage.setItem(STORAGE_KEY,JSON.stringify(save));updateWallets();}
function updateWallets(){const value=`$${save.cash}`,coins=String(save.chefCoins);hubCash.textContent=value;gameCash.textContent=value;shopCash.textContent=value;hubChefCoins.textContent=coins;gameChefCoins.textContent=coins;shopChefCoins.textContent=coins;}
function showScreen(name){const lockGame=name==='game'||name==='rush';document.documentElement.classList.toggle('game-locked',lockGame);document.body.classList.toggle('game-locked',lockGame);if(lockGame)window.scrollTo(0,0);Object.values(screens).forEach(screen=>screen.classList.remove('is-active'));screens[name].classList.add('is-active');}
function openOverlay(element){element.classList.add('open');element.setAttribute('aria-hidden','false');}
function closeOverlay(element){element.classList.remove('open');element.setAttribute('aria-hidden','true');}
function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),1500);}
function randomFrom(list){return list[Math.floor(Math.random()*list.length)];}
function renovationBonus(){return RENOVATIONS.filter(item=>save.renovations.includes(item.id)).reduce((highest,item)=>Math.max(highest,item.bonus),0);}
function currentStoreLevel(){return 1+save.renovations.length;}
function spend(amount){const paid=Math.min(save.cash,amount);save.cash-=paid;persist();return paid;}
function audioContext(){const Ctx=window.AudioContext||window.webkitAudioContext;if(!Ctx)return null;return audioContext.instance||(audioContext.instance=new Ctx());}
function scheduleNote(frequency,time,duration=.16,volume=.018,type='triangle'){const ctx=audioContext();if(!ctx)return;const osc=ctx.createOscillator(),gain=ctx.createGain();osc.type=type;osc.frequency.setValueAtTime(frequency,time);gain.gain.setValueAtTime(.0001,time);gain.gain.exponentialRampToValueAtTime(volume,time+.012);gain.gain.exponentialRampToValueAtTime(.0001,time+duration);osc.connect(gain).connect(ctx.destination);osc.start(time);osc.stop(time+duration+.02);}
function getBackgroundMusic(){if(backgroundMusic)return Promise.resolve(backgroundMusic);if(backgroundMusicLoading)return backgroundMusicLoading;const ctx=audioContext(),encoded=(window.LUCKY_KITCHEN_THEME||'').split(',')[1];if(!ctx||!encoded)return Promise.reject(new Error('audio unavailable'));const raw=atob(encoded),bytes=new Uint8Array(raw.length);for(let index=0;index<raw.length;index++)bytes[index]=raw.charCodeAt(index);backgroundMusicLoading=new Promise((resolve,reject)=>ctx.decodeAudioData(bytes.buffer,resolve,reject)).then(buffer=>backgroundMusic=buffer);return backgroundMusicLoading;}
function startMusic(){if(!musicEnabled)return;const ctx=audioContext();if(!ctx)return;if(ctx.resume)ctx.resume();getBackgroundMusic().then(buffer=>{if(!musicEnabled||document.hidden||backgroundMusicSource)return;backgroundMusicGain=ctx.createGain();backgroundMusicGain.gain.value=.55;backgroundMusicSource=ctx.createBufferSource();backgroundMusicSource.buffer=buffer;backgroundMusicSource.loop=true;backgroundMusicSource.connect(backgroundMusicGain).connect(ctx.destination);backgroundMusicSource.onended=()=>{backgroundMusicSource=null;};backgroundMusicSource.start(0);}).catch(()=>{});updateMusicButtons();}
function stopMusic(){if(backgroundMusicSource){const source=backgroundMusicSource;backgroundMusicSource=null;source.onended=null;try{source.stop();}catch(error){}source.disconnect();}if(backgroundMusicGain){backgroundMusicGain.disconnect();backgroundMusicGain=null;}updateMusicButtons();}
function updateMusicButtons(){document.querySelectorAll('[data-music-toggle]').forEach(button=>{button.classList.toggle('off',!musicEnabled);button.textContent=musicEnabled?'♪':'♪̸';button.setAttribute('aria-label',musicEnabled?'关闭配乐':'开启配乐');});}
function toggleMusic(){musicEnabled=!musicEnabled;localStorage.setItem('lucky-kitchen-music',musicEnabled?'on':'off');if(musicEnabled)startMusic();else stopMusic();}

function tutorialTarget(node){
  if(tutorial.target) tutorial.target.classList.remove('tutorial-allowed');
  tutorial.target=node||null;
  if(tutorial.target) tutorial.target.classList.add('tutorial-allowed');
  positionTutorial();
}
function positionTutorial(){
  if(!tutorial.active||!tutorial.target)return;
  const rect=tutorial.target.getBoundingClientRect(),focus=$('tutorialFocus'),hand=$('tutorialHand'),bubble=document.querySelector('.tutorial-bubble'),pad=7;
  focus.style.left=`${Math.max(4,rect.left-pad)}px`;focus.style.top=`${Math.max(4,rect.top-pad)}px`;
  focus.style.width=`${Math.min(innerWidth-8,rect.width+pad*2)}px`;focus.style.height=`${rect.height+pad*2}px`;
  hand.style.left=`${Math.min(innerWidth-26,Math.max(26,rect.left+rect.width/2))}px`;
  hand.style.top=`${Math.max(48,rect.top-5)}px`;
  bubble.style.top='';bubble.style.bottom='';
  if(tutorial.step==='trash-info')bubble.style.bottom=`${Math.max(118,innerHeight-rect.top+18)}px`;
}
function showTutorial(step,title,copy,target){
  clearTimeout(tutorial.timer);tutorial.active=true;tutorial.step=step;tutorial.readyAt=performance.now()+1400;
  $('tutorialLayer').hidden=false;$('tutorialLayer').classList.remove('top-bubble');$('tutorialTitle').textContent=title;$('tutorialCopy').textContent=copy;tutorialTarget(target);
}
function tutorialReady(){if(!tutorial.active||performance.now()>=tutorial.readyAt)return true;showToast('先看完这一步提示哦');return false;}
function tutorialToken(type,id){
  const track=type==='food'?foodTrack:drinkTrack,list=type==='food'?foodTokens:drinkTokens;
  list.slice().forEach(item=>removeBeltToken(item,list));
  createToken(type,id,Math.max(8,track.clientHeight/2-35));
  const item=list[list.length-1];item.node.classList.add('in-pickup-zone');return item.node;
}
function beginTutorial(){
  const customer=customers[0];
  if(customer){customer.order={foods:['lemon'],drink:'tea',price:46,name:'新手订单'};customer.time=CUSTOMER_WAIT;renderCustomers();}
  showTutorial('plate','第 1 步','点击圆盘，先拿一只餐盘。',takePlate);
}
function tutorialAfterPlate(){
  const plate=tabletop.querySelector('.work-plate');
  showTutorial('selected','餐盘已选中','红色外圈表示当前餐盘，接下来取到的食材都会放进这里。',plate);
  tutorial.timer=setTimeout(()=>{const token=tutorialToken('food','lemon');showTutorial('food','第 2 步','柠檬进入黄色取料区了，点一下把它装盘。',token);},2200);
}
function tutorialAfterFood(){
  const token=tutorialToken('drink','tea');showTutorial('drink','第 3 步','右边是饮料传送带，点一下热茶。',token);
}
function tutorialAfterDrink(){
  showTutorial('trash-info','纠错提示','拿错了？把餐盘拖进垃圾桶重做。错餐上桌只能收到 20% 的钱。',trashPlate);
  tutorial.timer=setTimeout(()=>{const card=customerQueue.querySelector('.customer-card:not(.customer-card-empty)');showTutorial('deliver','第 4 步','餐齐了，把餐盘拖给对应的顾客。',card);},6500);
}
function tutorialAfterDelivery(){
  if(!customers.length&&createdCustomers<levelConfig.customers){createCustomer();renderCustomers();}
  const token=tutorialToken('food','chef');showTutorial('chef','最后一步','闪闪发光的是厨神币：点到可给最着急的顾客加 3 秒，10 枚还能换 $100。',token);
}
function finishTutorial(skipped=false){
  clearTimeout(tutorial.timer);tutorialTarget(null);tutorial.active=false;tutorial.step='';$('tutorialLayer').hidden=true;
  save.tutorialVersion=TUTORIAL_VERSION;persist();customerSpawnTimer=.5;clearTracks();seedTracks(true);lastFrame=performance.now();
  showToast(skipped?'已跳过引导，可在主页查看规则':'学会啦，接着招待客人吧！');
}
function cancelTutorial(){clearTimeout(tutorial.timer);tutorialTarget(null);tutorial.active=false;tutorial.step='';$('tutorialLayer').hidden=true;$('tutorialLayer').classList.remove('top-bubble');}

function renderHub(){
  updateWallets();const level=currentStoreLevel(),bonus=Math.round(renovationBonus()*100);storeLevel.textContent=level;
  const upgradedSign=level>=2;storeImage.src=upgradedSign?'assets/store-sign-level-2-transparent.png':'assets/chef.png';storeImage.alt=upgradedSign?'好运厨房面包招牌':'好运厨房厨师';shopfront.classList.toggle('sign-upgraded',upgradedSign);
  storeTitle.textContent=['一张桌，也要认真开张','街坊都认识这块招牌','饭点已经开始排队','街角开始有名气','香味飘过一条街','主厨设备全到位','好运厨房坐满两层'][Math.min(level-1,6)];storeEffect.textContent=`订单收入 +${bonus}%`;
  document.querySelectorAll('[data-chapter]').forEach((card,chapter)=>{const chapterOpen=TEST_UNLOCK_ALL||save.completed>=chapter*5;card.classList.toggle('locked',!chapterOpen);const path=card.querySelector('.level-path');path.innerHTML=LEVELS.slice(chapter*5,chapter*5+5).map((config,offset)=>{const index=chapter*5+offset,stars=save.stars[index]||0,available=TEST_UNLOCK_ALL||index<=save.completed,firstStart=index===0&&save.completed===0&&!stars,starRow=[1,2,3].map(value=>`<i class="level-star ${value<=stars?'earned':''}">⭐</i>`).join('');return `<button class="level-button ${stars?'completed':available?'available':''}${firstStart?' first-start':''}" data-level="${index}" ${available?'':'disabled'} aria-label="第${offset+1}关，${stars}星"><span class="level-stars">${starRow}</span><small>${offset+1}</small></button>`;}).join('');});renderRushEntry();renderShop();
}
function renderRushEntry(){const unlocked=RUSH_BETA||TEST_UNLOCK_ALL||save.completed>=1,button=$('startRush');$('rushTickets').textContent='';$('rushEntryCopy').textContent='有点小钱后，就可以来接急单啦！';button.disabled=!unlocked;}
function renderShop(){
  powerupShop.innerHTML=Object.entries(POWERUPS).map(([id,item])=>{const unlocked=currentStoreLevel()>=(item.level||1);return `<button class="shop-item" data-buy-powerup="${id}" ${!unlocked||save.cash<item.price?'disabled':''}><span class="shop-art">${item.icon}</span><span><b>${item.name} ×${save.powerups[id]||0}</b><small>${unlocked?item.copy:`门店等级 ${item.level} 解锁`}</small><strong>${unlocked?'$'+item.price:'未解锁'}</strong></span></button>`;}).join('');
  renovationShop.innerHTML=RENOVATIONS.map((item,index)=>{const owned=save.renovations.includes(item.id),ready=index===0||save.renovations.includes(RENOVATIONS[index-1].id);return `<button class="shop-item ${owned?'owned':''}" data-buy-renovation="${item.id}" ${owned||!ready||save.cash<item.price?'disabled':''}><span class="shop-art">${item.icon}</span><span><b>${item.name}</b><small>${item.copy}</small><strong>${owned?'已完成':ready?'$'+item.price:'先完成上一项'}</strong></span></button>`;}).join('');
  plateShop.innerHTML=Object.entries(PLATES).filter(([id])=>id!=='wood').map(([id,item])=>{const owned=save.plates.includes(id),bonus=Math.round((item.multiplier-1)*100);return `<button class="shop-item ${owned?'owned':''}" data-buy-plate="${id}" ${owned||save.cash<item.price?'disabled':''}><span class="plate-swatch ${item.className}"></span><span><b>${item.name}</b><small>容量 ${item.capacity} · 订单收入 +${bonus}%</small><strong>${owned?'已拥有':'$'+item.price}</strong></span></button>`;}).join('');
  ingredientShop.innerHTML=['steak','wagyu'].map((id,index)=>{const item=FOODS[id],owned=save.ingredients.includes(id),ready=index===0||save.ingredients.includes('steak');return `<button class="shop-item ${owned?'owned':''}" data-buy-ingredient="${id}" ${owned||!ready||save.cash<item.price?'disabled':''}><img src="${item.src}" alt=""><span><b>${item.name}</b><small>${item.copy}</small><strong>${owned?'已采购':ready?'$'+item.price:'先采购炭烤牛排'}</strong></span></button>`;}).join('');
  const item=COIN_EXCHANGE;exchangeShop.innerHTML=`<button class="exchange-item" data-exchange="${item.id}" ${save.chefCoins<item.cost?'disabled':''}><span><img src="assets/coins/generated/chef-coin.png" alt="">${item.cost}枚</span><i>→</i><strong>$${item.cash}</strong></button>`;
}
function buy(kind,id){const item=kind==='renovation'?RENOVATIONS.find(entry=>entry.id===id):kind==='plate'?PLATES[id]:FOODS[id];if(!item||save.cash<item.price)return;if(kind==='renovation')save.renovations.push(id);if(kind==='plate')save.plates.push(id);if(kind==='ingredient')save.ingredients.push(id);save.cash-=item.price;persist();renderHub();showToast(`${item.name}已买下`);}
function exchangeChefCoins(id){const item=COIN_EXCHANGE;if(id!==item.id||save.chefCoins<item.cost)return;save.chefCoins-=item.cost;save.cash+=item.cash;persist();renderShop();playTone(920);showToast(`${item.cost}枚厨神币兑换 $${item.cash}`);}
function buyPowerup(id){const item=POWERUPS[id];if(!item||currentStoreLevel()<(item.level||1)||save.cash<item.price)return;save.cash-=item.price;save.powerups[id]=(save.powerups[id]||0)+1;persist();renderShop();playTone(700);showToast(`${item.name}已入库`);}
function openLoadout(index){
  pendingLevel=index;pendingLoadout=[];
  const hasPowerup=Object.keys(POWERUPS).some(id=>(save.powerups[id]||0)>0);
  if(!hasPowerup){startLevel(index);return;}
  renderLoadout();openOverlay(loadoutModal);
}
function renderLoadout(){loadoutGrid.innerHTML=Object.entries(POWERUPS).map(([id,item])=>`<button class="loadout-item ${pendingLoadout.includes(id)?'selected':''}" data-loadout="${id}" ${(save.powerups[id]||0)<1?'disabled':''}><b>${item.icon} ${item.name} ×${save.powerups[id]||0}</b><small>${item.copy}</small></button>`).join('');}
function renderPowerSlots(){[0,1].forEach(index=>{const button=$(`powerSlot${index}`),id=equippedTools[index],item=POWERUPS[id];button.dataset.power=id||'';button.disabled=!item||usedTools.has(id);button.classList.toggle('used',!!item&&usedTools.has(id));button.innerHTML=item?`${item.icon}<small>${item.name}</small>`:'';});}
function autoDeliverOrders(){const targets=customers.filter(customer=>!customer.leaving).slice(0,3);if(!targets.length)return{count:0,payout:0};const ids=new Set(targets.map(customer=>customer.id)),payout=targets.reduce((sum,customer)=>sum+customer.order.price,0);save.cash+=payout;served+=targets.length;customers=customers.filter(customer=>!ids.has(customer.id));customers.sort((left,right)=>left.slot-right.slot).forEach((customer,index)=>{customer.slot=index;});availableCustomerSlots=[0,1,2].filter(slot=>!customers.some(customer=>customer.slot===slot));customerSpawnTimer=.5;return{count:targets.length,payout};}
function usePowerup(id){if(!gameActive||!POWERUPS[id]||usedTools.has(id)||(save.powerups[id]||0)<1)return;save.powerups[id]-=1;usedTools.add(id);const now=performance.now();let message=`${POWERUPS[id].name}已使用`,delivered=null;if(id==='freeze')freezeUntil=Math.max(freezeUntil,now)+5000;if(id==='freezePlus')freezeUntil=Math.max(freezeUntil,now)+8000;if(id==='widen'){widenUntil=now+8000;applyPickupZone();}if(id==='restock'){clearTracks();seedTracks(true);}if(id==='auto3'){delivered=autoDeliverOrders();message=delivered.count?`一键交付 ${delivered.count} 单 +$${delivered.payout}`:'当前没有可交付订单';}persist();renderPowerSlots();playTone(980);showToast(message);if(delivered&&delivered.count)updateCustomerQueue();}

function availableFoods(){const keys=['lemon','olive','bamboo','ginger'];if(activeLevel>=1)keys.push('croissant');if(activeLevel>=3)keys.push('sourdough');save.ingredients.forEach(id=>keys.push(id));return keys;}
function availableDrinks(){return activeLevel<1?['tea']:activeLevel<3?['tea','lemonade']:Object.keys(DRINKS);}
function neededItems(type){return customers.reduce((all,customer)=>all.concat(type==='food'?customer.order.foods:[customer.order.drink]),[]);}
function chefCoinRate(){return .05+(activeLevel/(LEVELS.length-1))*.13;}
function nextBeltItem(type){if(type==='food'&&Math.random()<chefCoinRate())return'chef';const needed=neededItems(type),pool=type==='food'?availableFoods():availableDrinks();return needed.length&&Math.random()<levelConfig.bias?randomFrom(needed):randomFrom(pool);}
function createOrder(){const[min,max]=levelConfig.foodCount,forcedThree=threeItemCustomerNumbers.has(createdCustomers),count=forcedThree?2:min+Math.floor(Math.random()*(max-min+1)),foods=[],pool=availableFoods();while(foods.length<count)foods.push(randomFrom(pool));const drink=randomFrom(availableDrinks()),raw=levelConfig.base+foods.reduce((sum,id)=>sum+FOODS[id].value,0)+DRINKS[drink].value;return{foods,drink,price:Math.round(raw*(1+renovationBonus())),name:randomFrom(ORDER_NAMES)};}
function createCustomer(){
  if(createdCustomers>=levelConfig.customers||!availableCustomerSlots.length)return;
  const slot=availableCustomerSlots.shift();
  createdCustomers+=1;
  customers.push({id:++customerId,number:createdCustomers,name:CUSTOMER_NAMES[(createdCustomers-1)%CUSTOMER_NAMES.length],slot,order:createOrder(),time:CUSTOMER_WAIT});
}
function releaseCustomerSlot(){
  const wasFull=availableCustomerSlots.length===0;
  customers.sort((left,right)=>left.slot-right.slot).forEach((customer,index)=>{customer.slot=index;});
  availableCustomerSlots=[0,1,2].filter(slot=>!customers.some(customer=>customer.slot===slot));
  if(wasFull)customerSpawnTimer=.5;
}
function updateCustomerQueue(){renderCustomers();if(!customers.length&&createdCustomers>=levelConfig.customers)finishLevel();}
function addNextCustomer(){if(customers.length>=3||createdCustomers>=levelConfig.customers)return;createCustomer();customerSpawnTimer=createdCustomers<3?3:.5;renderCustomers();}
function ingredientCoinMarkup(kind,id){
  if(kind==='food')return `<span class="ingredient-coin food-coin"><img src="${FOODS[id].src}" alt="${FOODS[id].name}"></span>`;
  return `<span class="ingredient-coin drink-coin"><img src="${DRINKS[id].src}" alt="${DRINKS[id].name}"></span>`;
}
function requirementMarkup(customer){
  const items=customer.order.foods.map(id=>ingredientCoinMarkup('food',id));
  items.push(ingredientCoinMarkup('drink',customer.order.drink));
  while(items.length<4)items.push('<span class="order-slot-empty" aria-hidden="true"></span>');
  return items.join('');
}
function renderCustomers(){
  customerQueue.innerHTML=[0,1,2].map(slot=>{const customer=customers.find(item=>item.slot===slot);if(!customer)return '<div class="customer-card customer-card-empty" aria-hidden="true"></div>';return `<article class="customer-card ${customer.leaving?'leaving':''}" data-customer="${customer.id}"><header><strong>${customer.name}</strong><em>$${customer.order.price}</em></header><div class="customer-order">${requirementMarkup(customer)}</div><div class="customer-clock"><i><u style="width:${customer.time/CUSTOMER_WAIT*100}%"></u></i><b>${Math.ceil(customer.time)}s</b></div>${customer.speech?`<p class="customer-speech">${customer.speech}</p>`:''}</article>`;}).join('');
  customerProgress.textContent=`已接待 ${served+lost} / ${levelConfig.customers}`;
}
function updateCustomerClocks(){customers.forEach(customer=>{const card=customerQueue.querySelector(`[data-customer="${customer.id}"]`);if(!card)return;card.querySelector('.customer-clock u').style.width=`${Math.max(0,customer.time/CUSTOMER_WAIT*100)}%`;card.querySelector('.customer-clock b').textContent=`${Math.ceil(Math.max(0,customer.time))}s`;card.classList.toggle('urgent',customer.time<=5);});}

function startLevel(index){activeLevel=index;levelConfig=LEVELS[index];createdCustomers=0;served=0;lost=0;levelStartCash=save.cash;customers=[];availableCustomerSlots=[0,1,2];threeItemCustomerNumbers=new Set();if(levelConfig.threeItemCustomers){const[min,max]=levelConfig.threeItemCustomers,target=min+Math.floor(Math.random()*(max-min+1));while(threeItemCustomerNumbers.size<target)threeItemCustomerNumbers.add(1+Math.floor(Math.random()*levelConfig.customers));}plates=[];selectedPlateId=null;customerSpawnTimer=0;freezeUntil=0;widenUntil=0;usedTools=new Set();equippedTools=[...pendingLoadout];gameActive=true;levelLabel.textContent=`${CHAPTERS[Math.floor(index/5)]} · 第 ${index%5+1} 关`;clearTracks();renderTable();renderCabinet();renderPowerSlots();showScreen('game');applyPickupZone();addNextCustomer();seedTracks();lastFrame=performance.now();if(index===0&&(save.tutorialVersion||0)<TUTORIAL_VERSION)beginTutorial();}
function sameItems(left,right){return left.length===right.length&&left.slice().sort().every((id,index)=>id===right.slice().sort()[index]);}
function plateMatches(plate,customer){return sameItems(plate.foods,customer.order.foods)&&plate.drink===customer.order.drink;}
function deliverPlate(plateIdValue,customerIdValue){
  if(!gameActive)return;const plate=plates.find(item=>item.id===plateIdValue),customer=customers.find(item=>item.id===customerIdValue);if(!plate||!customer)return;
  if(tutorial.active&&tutorial.step!=='deliver'){showToast('跟着手指完成当前步骤');return;}
  if(customer.leaving)return;
  if(plateMatches(plate,customer)){const guided=tutorial.active,payout=Math.round(customer.order.price*PLATES[plate.type].multiplier);save.cash+=payout;served+=1;customers=customers.filter(item=>item.id!==customer.id);releaseCustomerSlot(customer.slot);removePlate(plate.id,false);persist();playSuccessSound();showToast(`上菜成功 +$${payout}`);updateCustomerQueue();if(guided)tutorialAfterDelivery();return;}
  if(tutorial.active){showToast('先核对图标，这一盘还没配好');return;}
  const payout=Math.max(1,Math.round(customer.order.price*.2)),remarks=['咦，这盘走错桌啦～','主厨别慌，再看一眼！','差一点点，下次接住好运！','这盘很可爱，但不是我的～','没关系，厨房偶尔也会迷路！','订单说：我们好像没见过？'];save.cash+=payout;save.badReviews+=1;lost+=1;customer.leaving=true;customer.speech=randomFrom(remarks);removePlate(plate.id,false);persist();renderCustomers();playTone(130);showToast(`送错桌啦，本单收到 $${payout}`);setTimeout(()=>{if(!customers.some(item=>item.id===customer.id))return;customers=customers.filter(item=>item.id!==customer.id);releaseCustomerSlot(customer.slot);updateCustomerQueue();},1100);
}
function expireCustomer(id){const customer=customers.find(item=>item.id===id);if(!customer)return;customers=customers.filter(item=>item.id!==id);releaseCustomerSlot(customer.slot);lost+=1;playTone(110);showToast('客人等不及离开了');updateCustomerQueue();}

function bestOwnedPlate(){return save.plates.reduce((best,id)=>PLATES[id].multiplier>PLATES[best].multiplier?id:best,'wood');}
function renderCabinet(){const id=bestOwnedPlate(),disc=takePlate.querySelector('.take-plate-disc');disc.className=`take-plate-disc ${PLATES[id].className}`;takePlate.setAttribute('aria-label',`点击取出${PLATES[id].name}`);takePlate.title=`当前取出：${PLATES[id].name}`;}
function addPlate(type){if(tutorial.active&&tutorial.step!=='plate'){showToast('先完成手指提示的步骤');return;}if(tutorial.active&&!tutorialReady())return;if(plates.length>=3){showToast('桌面最多放三只餐盘');return;}const plate={id:++plateId,type,foods:[],drink:null};plates.push(plate);selectedPlateId=plate.id;renderTable();playTone(440);if(tutorial.active)tutorialAfterPlate();}
function plateContents(plate){return plate.foods.map(id=>ingredientCoinMarkup('food',id)).join('')+(plate.drink?ingredientCoinMarkup('drink',plate.drink):'');}
function renderTable(){
  tabletop.innerHTML=plates.map((plate,index)=>`<button class="work-plate ${PLATES[plate.type].className} ${plate.id===selectedPlateId?'selected':''}" data-plate="${plate.id}" style="--slot:${index}"><div>${plateContents(plate)}</div><small>${PLATES[plate.type].name}</small></button>`).join('')+'<div class="plate-slots" aria-hidden="true"><i></i><i></i><i></i></div>';
  updateSelection();
}
function updateSelection(){tabletop.querySelectorAll('.work-plate').forEach(node=>node.classList.toggle('selected',Number(node.dataset.plate)===selectedPlateId));const plate=plates.find(item=>item.id===selectedPlateId);selectionHint.textContent=plate?'已选中餐盘，开始取料':'先选中一只餐盘';trashPlate.disabled=!plate;}
function selectPlate(id){if(!plates.some(item=>item.id===id))return;selectedPlateId=id;updateSelection();}
function removePlate(id,charge=true){const plate=plates.find(item=>item.id===id);if(!plate)return;if(charge){const cost=(plate.foods.length+(plate.drink?1:0))*10,paid=spend(cost);showToast(cost?`丢弃材料 -$${paid}`:'空餐盘已收回');}plates=plates.filter(item=>item.id!==id);if(selectedPlateId===id)selectedPlateId=plates.length?plates[0].id:null;renderTable();}
function selectedPlate(){return plates.find(item=>item.id===selectedPlateId);}
function addFoodToPlate(id){const plate=selectedPlate();if(!plate){showToast('先从餐盘柜取盘并选中');return false;}if(plate.foods.length>=PLATES[plate.type].capacity){showToast('这只餐盘装不下了');return false;}plate.foods.push(id);renderTable();playSuccessSound();return true;}
function addDrinkToPlate(id){const plate=selectedPlate();if(!plate){showToast('先从餐盘柜取盘并选中');return false;}if(plate.drink){showToast('一只餐盘只能放一杯饮料');return false;}plate.drink=id;renderTable();playSuccessSound();return true;}

function clearTracks(){[...foodTokens,...drinkTokens].forEach(item=>item.node.remove());foodTokens=[];drinkTokens=[];}
function currentPickupZone(){return performance.now()<widenUntil?Math.min(.72,levelConfig.zone*1.5):levelConfig.zone;}
function applyPickupZone(){const zone=currentPickupZone(),top=(1-zone)/2;[foodTrack,drinkTrack].forEach(track=>{track.style.setProperty('--pickup-top',`${top*100}%`);track.style.setProperty('--pickup-height',`${zone*100}%`);});}
function createToken(type,id,y){const node=document.createElement('button'),chef=id==='chef';node.type='button';node.className=`belt-token ${type==='drink'?'drink':''} ${chef?'chef-token':type==='food'?`food-${id}`:''}`;node.dataset.id=id;node.dataset.token=++tokenId;node.setAttribute('aria-label',chef?'厨神币':type==='food'?FOODS[id].name:DRINKS[id].name);node.innerHTML=chef?'<img src="assets/coins/generated/chef-coin.png" alt="厨神币">':type==='food'?`<img src="${FOODS[id].src}" alt="${FOODS[id].name}">`:`<img src="${DRINKS[id].src}" alt="${DRINKS[id].name}">`;const item={token:tokenId,id,y,node};node.style.setProperty('--token-y',`${y}px`);(type==='food'?foodTrack:drinkTrack).appendChild(node);(type==='food'?foodTokens:drinkTokens).push(item);}
function seedTracks(forceNeeded=false){const fh=foodTrack.clientHeight||500,dh=drinkTrack.clientHeight||500,foods=neededItems('food'),drinks=neededItems('drink');for(let i=0;i<4;i++)createToken('food',forceNeeded&&foods.length?randomFrom(foods):nextBeltItem('food'),25+i*Math.max(82,(fh-105)/3));for(let i=0;i<6;i++)createToken('drink',forceNeeded&&drinks.length?randomFrom(drinks):nextBeltItem('drink'),18+i*Math.max(64,(dh-90)/5));}
function tokenInPickupZone(item,track){const zone=currentPickupZone(),center=item.y+(item.node.offsetHeight||60)/2,top=track.clientHeight*(1-zone)/2,bottom=top+track.clientHeight*zone;return center>=top&&center<=bottom;}
function removeBeltToken(item,list){const index=list.indexOf(item);if(index>=0)list.splice(index,1);item.node.remove();}
function collectChefCoin(item){save.chefCoins+=1;const urgent=customers.slice().sort((a,b)=>a.time-b.time)[0];if(urgent)urgent.time=Math.min(CUSTOMER_WAIT,urgent.time+3);persist();removeBeltToken(item,foodTokens);playCoinRewardSound();showToast(urgent?'厨神币 +1 · 最急顾客 +3秒':'厨神币 +1');updateCustomerClocks();if(tutorial.active&&tutorial.step==='chef')finishTutorial();}
function takeBeltToken(type,event){const node=event.target.closest('.belt-token');if(!node)return;const list=type==='food'?foodTokens:drinkTokens,track=type==='food'?foodTrack:drinkTrack,item=list.find(entry=>entry.token===Number(node.dataset.token));if(!item)return;if(tutorial.active){const valid=(tutorial.step==='food'&&type==='food'&&item.id==='lemon')||(tutorial.step==='drink'&&type==='drink'&&item.id==='tea')||(tutorial.step==='chef'&&item.id==='chef');if(!valid){showToast('先点击手指指向的目标');return;}if(!tutorialReady())return;}if(!tokenInPickupZone(item,track)){showToast('等它进入“点击取料”区域');return;}if(item.id==='chef'){collectChefCoin(item);return;}const added=type==='food'?addFoodToPlate(item.id):addDrinkToPlate(item.id);if(added){removeBeltToken(item,list);if(tutorial.active&&tutorial.step==='food')tutorialAfterFood();else if(tutorial.active&&tutorial.step==='drink')tutorialAfterDrink();}}
function moveTokens(list,dt,speed,track,type){
  for(let i=list.length-1;i>=0;i--){const item=list[i];item.y-=speed*dt;item.node.style.setProperty('--token-y',`${item.y}px`);item.node.classList.toggle('in-pickup-zone',tokenInPickupZone(item,track));if(item.y<-76){item.node.remove();list.splice(i,1);}}
  const height=track.clientHeight||500,target=type==='drink'?6:4,gap=type==='drink'?64:82,lowest=list.reduce((max,item)=>Math.max(max,item.y),-999),ready=list.length<target&&lowest<height-gap;
  if(type==='food'&&ready&&foodSpawn<=0){createToken(type,nextBeltItem(type),height+12);foodSpawn=.55;}
  if(type==='drink'&&ready&&drinkSpawn<=0){createToken(type,nextBeltItem(type),height+12);drinkSpawn=.24;}
}

function beginDrag(event,node){if(event.cancelable)event.preventDefault();if(tutorial.active&&tutorial.step==='deliver'&&!tutorialReady())return;const id=Number(node.dataset.plate);selectPlate(id);dragState={id,node,startX:event.clientX,startY:event.clientY};if(node.setPointerCapture)node.setPointerCapture(event.pointerId);node.classList.add('dragging');}
function moveDrag(event){if(!dragState)return;if(event.cancelable)event.preventDefault();const dx=event.clientX-dragState.startX,dy=event.clientY-dragState.startY;dragState.node.style.transform=`translate3d(${dx}px,${dy}px,0) scale(1.05)`;const overTrash=document.elementsFromPoint(event.clientX,event.clientY).some(element=>element.classList&&element.classList.contains('trash-tool'));trashPlate.classList.toggle('drag-over',overTrash);}
function endDrag(event){if(!dragState)return;const{id,node}=dragState,elements=document.elementsFromPoint(event.clientX,event.clientY),overTrash=elements.some(element=>element.classList&&element.classList.contains('trash-tool')),target=elements.find(element=>element.classList&&element.classList.contains('customer-card'));node.classList.remove('dragging');node.style.transform='';trashPlate.classList.remove('drag-over');dragState=null;if(tutorial.active&&tutorial.step!=='deliver'){showToast('跟着手指完成当前步骤');return;}if(overTrash){removePlate(id,true);return;}if(target)deliverPlate(id,Number(target.dataset.customer));}

const RUSH_NAMES=['好运小拼盘','午市加急单','街坊催菜单','主厨手速单'];
function rushConfig(){return RUSH_DIFFICULTIES[rushDifficulty];}
function rushStage(){return Math.min(rushConfig().orders,rushOrdersDone+1);}
function rushProgress(){return rushConfig().orders<=1?1:(rushStage()-1)/(rushConfig().orders-1);}
function rushOrderDuration(){const config=rushConfig(),base=Math.round(config.maxTime-(config.maxTime-config.minTime)*rushProgress()),lateOrders=rushOrdersDone>=config.orders-4;return base+(lateOrders?3:0);}
function rushSpeed(){const config=rushConfig(),base=config.startSpeed+(config.endSpeed-config.startSpeed)*rushProgress(),lastFive=rushOrdersDone>=config.orders-5;return base+(lastFive?.15:0);}
function rushSuccessReward(){return Math.round(rushConfig().reward*(1+renovationBonus())*PLATES[bestOwnedPlate()].multiplier);}
function rushPool(){const pool=['lemon','olive','bamboo','ginger'];if(rushProgress()>=.34)pool.push('croissant');if(rushProgress()>=.66)pool.push('sourdough');return pool;}
function renderRushStatus(){
  $('rushTime').textContent=Math.max(0,Math.ceil(rushRemaining));$('rushRunCash').textContent=`$${rushCash}`;$('rushRunCoins').textContent=rushCoins;
  $('rushLives').innerHTML=[0,1,2].map(index=>`<span class="${index<rushLivesCount?'':'lost'}">♥</span>`).join(' ');
  $('rushSpeed').textContent=`${rushSpeed().toFixed(1)}×`;
}
function newRushOrder(){
  const stage=rushOrdersDone+1,progress=rushProgress(),length=progress<.34?4:progress<.7?5:6,pool=rushPool();
  rushOrder=[];while(rushOrder.length<length){const previous=rushOrder[rushOrder.length-1],choices=pool.filter(id=>id!==previous);rushOrder.push(randomFrom(choices.length?choices:pool));}rushStepIndex=0;rushRemaining=rushOrderDuration();rushLastCountdownSecond=Math.ceil(rushRemaining);
  $('rushOrderNumber').textContent=`急单 ${String(stage).padStart(2,'0')} / ${rushConfig().orders}`;$('rushOrderName').textContent=randomFrom(RUSH_NAMES);
  renderRushOrder();
}
function renderRushOrder(){
  $('rushOrderSteps').innerHTML=rushOrder.map((id,index)=>`<span class="${index<rushStepIndex?'done':index===rushStepIndex?'current':''}"><img src="${FOODS[id].src}" alt="${FOODS[id].name}"></span>`).join('<i>›</i>');
}
function clearRushTrack(){rushItems.forEach(item=>item.node.remove());rushItems=[];}
function spawnRushItem(forceTarget=false){
  const target=rushOrder[rushStepIndex],coinChance=(.055+rushStage()*.007)*(rushOrdersDone>=rushConfig().orders-6?1.55:1)*(rushOrdersDone>=8?1.2:1),coin=Math.random()<coinChance,recent=rushItems.slice(-2).map(item=>item.id),variedPool=rushPool().filter(id=>!recent.includes(id)),id=coin?'chef':forceTarget?target:(Math.random()<.42?target:randomFrom(variedPool.length?variedPool:rushPool()));
  const node=document.createElement('button');node.type='button';node.className=`rush-token ${id==='chef'?'chef':''}`;node.dataset.rushItem=String(++rushItemId);
  node.innerHTML=`<img src="${id==='chef'?'assets/coins/generated/chef-coin.png':FOODS[id].src}" alt="${id==='chef'?'厨神币':FOODS[id].name}">`;
  const lane=0,item={key:rushItemId,id,x:-9,lane,node};node.style.setProperty('--rush-x',`${item.x}%`);node.style.setProperty('--rush-lane','0px');$('rushTrack').appendChild(node);rushItems.push(item);
}
function startRushRun(difficulty='normal'){
  if(!(RUSH_BETA||TEST_UNLOCK_ALL||save.completed>=1)){showToast('完成主线第 1 关后即可解锁急单');return;}
  rushDifficulty=RUSH_DIFFICULTIES[difficulty]?difficulty:'normal';rushActive=true;rushRemaining=rushConfig().maxTime;rushCash=rushSuccessReward();rushCoins=0;rushLivesCount=3;rushOrdersDone=0;rushStepIndex=0;rushSpawn=0;rushRevived=false;rushLastTime=performance.now();clearRushTrack();newRushOrder();renderRushStatus();document.querySelector('.rush-header small').textContent=`好运厨房 · ${rushConfig().name} · ${rushConfig().orders}单挑战`;showScreen('rush');startMusic();let initialX=-10;for(let index=0;index<4;index++){spawnRushItem(index===1);initialX+=14+Math.random()*6;const item=rushItems[rushItems.length-1];item.x=initialX;item.node.style.setProperty('--rush-x',`${item.x}%`);}playTone(720);
}
function openRushDifficulty(){if(!(RUSH_BETA||TEST_UNLOCK_ALL||save.completed>=1)){showToast('完成主线第 1 关后即可解锁急单');return;}openOverlay($('rushDifficultyModal'));}
function takeRushItem(event){
  const node=event.target.closest('[data-rush-item]');if(!node||!rushActive)return;const item=rushItems.find(entry=>entry.key===Number(node.dataset.rushItem));if(!item)return;
  if(Math.abs(item.x-RUSH_PICKUP_X)>RUSH_PICKUP_TOLERANCE){showToast('再等等，硬币经过金线时再点～');return;}
  rushItems=rushItems.filter(entry=>entry!==item);node.remove();
  if(item.id==='chef'){rushCoins+=1;rushRemaining+=1;rushLastCountdownSecond=Math.ceil(rushRemaining);playCoinRewardSound();showToast('接住 1 枚厨神币，倒计时 +1 秒！');renderRushStatus();return;}
  if(item.id===rushOrder[rushStepIndex]){rushStepIndex+=1;playSuccessSound();if(rushStepIndex>=rushOrder.length){rushOrdersDone+=1;showToast(`完成第 ${rushOrdersDone} / ${rushConfig().orders} 单`);if(rushOrdersDone>=rushConfig().orders){finishRush(true);return;}newRushOrder();}else renderRushOrder();}
  else{rushLivesCount-=1;playRushFailureSound();showToast(randomFrom(['哎呀，拿快了一枚～','这枚不是下一样，再看一眼！','手滑啦，还能追回来！']));if(rushLivesCount<=0){offerRushRevive();return;}}
  renderRushStatus();
}
function updateRush(time){
  if(!rushActive||!screens.rush.classList.contains('is-active')){rushLastTime=time;return;}const dt=Math.min(.05,Math.max(0,(time-rushLastTime)/1000));rushLastTime=time;rushRemaining-=dt;const countdownSecond=Math.ceil(rushRemaining);if(countdownSecond>0&&countdownSecond<=5&&countdownSecond!==rushLastCountdownSecond){rushLastCountdownSecond=countdownSecond;playRushCountdownSound(countdownSecond);}
  if(rushRemaining<=0){rushRemaining=0;renderRushStatus();failRushOrder();return;}
  const speed=13*rushSpeed();rushSpawn-=dt;rushItems.slice().forEach(item=>{item.x+=speed*dt;item.node.style.setProperty('--rush-x',`${item.x}%`);item.node.classList.toggle('ready',Math.abs(item.x-RUSH_PICKUP_X)<=RUSH_PICKUP_TOLERANCE);if(item.x>108){item.node.remove();rushItems=rushItems.filter(entry=>entry!==item);}});
  if(rushSpawn<=0){const late=rushProgress()>=.66,lastSix=rushOrdersDone>=rushConfig().orders-6,maxItems=late?9:6;if(rushItems.length<maxItems){const hasTarget=rushItems.some(item=>item.id===rushOrder[rushStepIndex]);spawnRushItem(!hasTarget);if(lastSix&&Math.random()<.72&&rushItems.length<=maxItems-2){const groupSize=2+Math.floor(Math.random()*2),groupStart=rushItems[rushItems.length-1];for(let groupIndex=1;groupIndex<groupSize&&rushItems.length<maxItems;groupIndex++){spawnRushItem(false);const groupItem=rushItems[rushItems.length-1];groupItem.x=groupStart.x+(4.5+Math.random()*3.5)*groupIndex;groupItem.node.style.setProperty('--rush-x',`${groupItem.x}%`);}}}rushSpawn=lastSix?(1.2+Math.random()*.6):(late?(Math.random()<.2?.78+Math.random()*.28:.38+Math.random()*.24):(.62+Math.random()*.5));}
  renderRushStatus();
}
function playRushCountdownSound(second){try{const ctx=audioContext();if(!ctx)return;if(ctx.resume)ctx.resume();const now=ctx.currentTime;if(backgroundMusicGain){backgroundMusicGain.gain.cancelScheduledValues(now);backgroundMusicGain.gain.setValueAtTime(Math.min(.55,backgroundMusicGain.gain.value),now);backgroundMusicGain.gain.linearRampToValueAtTime(.12,now+.025);backgroundMusicGain.gain.linearRampToValueAtTime(.55,now+.46);}const base=second===1?880:660;scheduleNote(base,now,.16,.2,'square');scheduleNote(base*.75,now+.17,.14,.14,'triangle');if(navigator.vibrate)navigator.vibrate(second===1?[45,25,45]:[25]);}catch(error){}}
function playRushFailureSound(){try{const ctx=audioContext();if(!ctx)return;if(ctx.resume)ctx.resume();const now=ctx.currentTime;if(backgroundMusicGain){backgroundMusicGain.gain.cancelScheduledValues(now);backgroundMusicGain.gain.setValueAtTime(backgroundMusicGain.gain.value,now);backgroundMusicGain.gain.linearRampToValueAtTime(.16,now+.03);backgroundMusicGain.gain.linearRampToValueAtTime(.55,now+.65);}scheduleNote(330,now,.14,.13,'square');scheduleNote(220,now+.14,.18,.13,'square');scheduleNote(120,now+.31,.3,.14,'sawtooth');if(navigator.vibrate)navigator.vibrate([55,35,90]);}catch(error){}}
function failRushOrder(){rushLivesCount-=1;playRushFailureSound();if(rushLivesCount<=0){offerRushRevive();return;}showToast('这单超时啦，少一颗心再试一次');newRushOrder();renderRushStatus();}
function offerRushRevive(){
  rushActive=false;renderRushStatus();const available=save.chefCoins+rushCoins;if(rushRevived||available<10){finishRush(false);return;}$('rushReviveBalance').textContent=available;document.querySelectorAll('[data-rush-revive]').forEach(button=>{button.disabled=available<Number(button.dataset.rushRevive)*10;});openOverlay($('rushReviveModal'));
}
function reviveRush(lives=1){
  const restored=Math.max(1,Math.min(3,Number(lives)||1));let cost=restored*10;if(rushRevived||save.chefCoins+rushCoins<cost)return;if(rushCoins>=cost)rushCoins-=cost;else{cost-=rushCoins;rushCoins=0;save.chefCoins-=cost;persist();}rushRevived=true;rushLivesCount=restored;rushRemaining=rushOrderDuration();rushLastCountdownSecond=Math.ceil(rushRemaining);rushActive=true;rushLastTime=performance.now();closeOverlay($('rushReviveModal'));renderRushStatus();playTone(920);showToast(`补回 ${restored} 颗心，接着来！`);
}
function finishRush(success=rushOrdersDone>=rushConfig().orders){
  if($('rushResultModal').classList.contains('open'))return;if(!rushActive&&$('rushReviveModal').classList.contains('open'))closeOverlay($('rushReviveModal'));rushActive=false;clearRushTrack();const cashReward=success?rushCash:0,totalCoins=rushCoins;save.cash+=cashReward;save.chefCoins+=totalCoins;save.rushBest=Math.max(save.rushBest||0,rushOrdersDone);persist();renderRushEntry();
  $('rushResultTitle').textContent=success?'急单全接住，漂亮收工！':'急单没接完，下次再来！';$('rushResultCopy').textContent=success?`${rushConfig().name}完成 ${rushConfig().orders} / ${rushConfig().orders} 单`:`${rushConfig().name}完成 ${rushOrdersDone} / ${rushConfig().orders} 单 · 本局零钱未结算`;$('rushResultCash').textContent=`+$${cashReward}`;$('rushResultCoins').textContent=`+${totalCoins}`;$('rushAgain').hidden=false;openOverlay($('rushResultModal'));
}

function finishLevel(){gameActive=false;clearTracks();const total=levelConfig.customers,earnedStars=served>=total?3:served>=total-1?2:served>=Math.max(1,total-2)?1:0,previousStars=save.stars[activeLevel]||0;resultPassed=earnedStars>0;const earned=save.cash-levelStartCash,isUnitFinal=activeLevel%5===4,perfectReward=earnedStars===3&&previousStars<3?(isUnitFinal?20:10):0,firstClear=resultPassed&&previousStars===0;if(resultPassed){save.stars[activeLevel]=Math.max(previousStars,earnedStars);save.completed=Math.max(save.completed,activeLevel+1);save.chefCoins+=perfectReward;if(firstClear)save.rushTickets=Math.min(RUSH_MAX_TICKETS,(save.rushTickets||0)+1);}persist();renderHub();const resultChef=$('resultChef'),rewardNode=$('perfectReward'),nextButton=$('resultNext'),actionButton=$('resultAction'),hasNext=resultPassed&&activeLevel<LEVELS.length-1;resultChef.src=resultPassed?'assets/chef.png':'assets/chef-angry-user.png';resultChef.classList.toggle('success',resultPassed);$('resultTitle').textContent=resultPassed?(isUnitFinal?UNIT_BLESSINGS[Math.floor(activeLevel/5)]:'这一班，顺利收摊！'):'今天的口碑有点悬';$('resultStars').innerHTML=[1,2,3].map(value=>`<i class="${value<=earnedStars?'earned':''}">⭐</i>`).join('');rewardNode.hidden=!perfectReward;rewardNode.textContent=perfectReward?`首次满星奖励 +${perfectReward} 枚厨神币`:'';$('resultCopy').textContent=resultPassed?`成功招待 ${served} / ${total} 位顾客。`:`至少需要招待 ${Math.max(1,total-2)} 位，本次完成 ${served} 位。`;$('levelEarnings').textContent=`${earned<0?'−':''}$${Math.abs(earned)}`;$('resultChefCoins').textContent=save.chefCoins;nextButton.hidden=!hasNext;actionButton.textContent=resultPassed?'回经营地图':'再试一次';actionButton.className=hasNext?'secondary-button':'primary-button';$('resultHome').hidden=resultPassed;openOverlay(resultModal);}
function frame(time){const dt=Math.min(.04,Math.max(0,(time-lastFrame)/1000));lastFrame=time;if(gameActive&&screens.game.classList.contains('is-active')){const now=performance.now(),guided=tutorial.active,frozen=now<freezeUntil||guided;if(!frozen){const expired=[];customers.forEach(customer=>{if(customer.leaving)return;customer.time-=dt;if(customer.time<=0)expired.push(customer.id);});updateCustomerClocks();expired.forEach(expireCustomer);customerSpawnTimer-=dt;if(customerSpawnTimer<=0&&customers.length<3&&createdCustomers<levelConfig.customers)addNextCustomer();}if(widenUntil&&now>=widenUntil){widenUntil=0;applyPickupZone();}if(!guided){moveTokens(foodTokens,dt,levelConfig.speed,foodTrack,'food');moveTokens(drinkTokens,dt,levelConfig.speed*.92,drinkTrack,'drink');foodSpawn-=dt;drinkSpawn-=dt;}positionTutorial();}updateRush(time);requestAnimationFrame(frame);}
function playTone(frequency){try{const ctx=audioContext();if(!ctx)return;if(ctx.resume)ctx.resume();scheduleNote(frequency,ctx.currentTime,.1,.07,'sine');}catch(error){}}
function playSuccessSound(){try{const ctx=audioContext();if(!ctx)return;if(ctx.resume)ctx.resume();const now=ctx.currentTime;scheduleNote(660,now,.1,.2,'sine');scheduleNote(880,now+.08,.14,.14,'sine');}catch(error){}}
function playCoinRewardSound(){try{const ctx=audioContext();if(!ctx)return;if(ctx.resume)ctx.resume();const now=ctx.currentTime;scheduleNote(880,now,.1,.2,'triangle');scheduleNote(1100,now+.09,.1,.16,'triangle');scheduleNote(1320,now+.18,.18,.14,'sine');}catch(error){}}

$('enterKitchen').addEventListener('click',()=>{startMusic();renderHub();showScreen('hub');playTone(520);});
chapterMap.addEventListener('click',event=>{const button=event.target.closest('[data-level]');if(button)openLoadout(Number(button.dataset.level));});
$('openShop').addEventListener('click',()=>{renderShop();openOverlay(shopModal);});
$('openRules').addEventListener('click',()=>openOverlay(rulesModal));
$('startRush').addEventListener('click',openRushDifficulty);
$('rushDifficultyModal').addEventListener('click',event=>{const button=event.target.closest('[data-rush-difficulty]');if(!button)return;closeOverlay($('rushDifficultyModal'));startRushRun(button.dataset.rushDifficulty);});
$('rushTrack').addEventListener('click',takeRushItem);
$('leaveRush').addEventListener('click',()=>finishRush(false));
$('leaveLevel').addEventListener('click',()=>{cancelTutorial();gameActive=false;clearTracks();renderHub();showScreen('hub');});
takePlate.addEventListener('click',()=>addPlate(bestOwnedPlate()));
trashPlate.addEventListener('click',()=>{if(tutorial.active){showToast('引导中先不用丢弃，记住这里就好');return;}if(selectedPlateId)removePlate(selectedPlateId,true);});
foodTrack.addEventListener('click',event=>takeBeltToken('food',event));
drinkTrack.addEventListener('click',event=>takeBeltToken('drink',event));
tabletop.addEventListener('pointerdown',event=>{const node=event.target.closest('.work-plate');if(node)beginDrag(event,node);});
document.addEventListener('pointermove',moveDrag,{passive:false});document.addEventListener('pointerup',endDrag);document.addEventListener('pointercancel',endDrag);document.addEventListener('touchmove',event=>{if(dragState&&event.cancelable)event.preventDefault();},{passive:false});
renovationShop.addEventListener('click',event=>{const button=event.target.closest('[data-buy-renovation]');if(button)buy('renovation',button.dataset.buyRenovation);});
plateShop.addEventListener('click',event=>{const button=event.target.closest('[data-buy-plate]');if(button)buy('plate',button.dataset.buyPlate);});
ingredientShop.addEventListener('click',event=>{const button=event.target.closest('[data-buy-ingredient]');if(button)buy('ingredient',button.dataset.buyIngredient);});
powerupShop.addEventListener('click',event=>{const button=event.target.closest('[data-buy-powerup]');if(button)buyPowerup(button.dataset.buyPowerup);});
exchangeShop.addEventListener('click',event=>{const button=event.target.closest('[data-exchange]');if(button)exchangeChefCoins(button.dataset.exchange);});
loadoutGrid.addEventListener('click',event=>{const button=event.target.closest('[data-loadout]');if(!button)return;const id=button.dataset.loadout,index=pendingLoadout.indexOf(id);if(index>=0)pendingLoadout.splice(index,1);else if(pendingLoadout.length<2)pendingLoadout.push(id);else{showToast('每关最多携带2种道具');return;}renderLoadout();});
$('confirmLoadout').addEventListener('click',()=>{closeOverlay(loadoutModal);startLevel(pendingLevel);});
$('skipTutorial').addEventListener('click',()=>finishTutorial(true));
document.querySelector('.station-guide').addEventListener('click',event=>{const button=event.target.closest('.power-slot');if(button&&button.dataset.power)usePowerup(button.dataset.power);});
document.addEventListener('click',event=>{const closer=event.target.closest('[data-close]');if(closer)closeOverlay($(closer.dataset.close));});
document.addEventListener('click',event=>{if(event.target.closest('[data-music-toggle]'))toggleMusic();});
document.addEventListener('visibilitychange',()=>{if(document.hidden){stopMusic();return;}if(musicEnabled)startMusic();});
$('resultAction').addEventListener('click',()=>{closeOverlay(resultModal);if(resultPassed){renderHub();showScreen('hub');}else openLoadout(activeLevel);});
$('resultNext').addEventListener('click',()=>{closeOverlay(resultModal);openLoadout(activeLevel+1);});
$('resultHome').addEventListener('click',()=>{closeOverlay(resultModal);renderHub();showScreen('hub');});
$('rushAgain').addEventListener('click',()=>{closeOverlay($('rushResultModal'));openRushDifficulty();});
$('rushToHub').addEventListener('click',()=>{closeOverlay($('rushResultModal'));renderHub();showScreen('hub');});
$('rushReviveChoices').addEventListener('click',event=>{const button=event.target.closest('[data-rush-revive]');if(button)reviveRush(button.dataset.rushRevive);});
$('rushGiveUp').addEventListener('click',()=>finishRush(false));
window.addEventListener('resize',()=>{if(gameActive&&!tutorial.active){clearTracks();seedTracks();}positionTutorial();});
updateMusicButtons();updateWallets();renderHub();requestAnimationFrame(frame);
