const questions = [
  {
    key: "dailyDrink",
    kicker: "第一口 · 熟悉的味道",
    title: "平时最爱喝什么？",
    note: "别想酒，选你下意识会拿的那杯饮料。",
    mode: "single",
    options: [
      { value: "citrus", icon: "柠", label: "柠檬茶", hint: "清爽、柑橘、带一点茶感" },
      { value: "sparkling", icon: "汽", label: "气泡水", hint: "干净、轻盈、气泡感" },
      { value: "fruit", icon: "果", label: "果汁", hint: "多汁、果香、酸甜活泼" },
      { value: "coffee", icon: "啡", label: "咖啡", hint: "烘烤、微苦、层次浓" },
      { value: "creamy", icon: "椰", label: "椰奶 / 奶饮", hint: "圆润、柔和、甜点感" },
    ],
  },
  {
    key: "alcohol",
    kicker: "第二口 · 酒感",
    title: "想让酒味站在哪里？",
    note: "是藏在味道后面，还是大方地走到前面？",
    mode: "single",
    options: [
      { value: "hidden", icon: "藏", label: "藏起来", hint: "像饮料，酒感越低越好" },
      { value: "balanced", icon: "刚", label: "刚刚好", hint: "能喝到酒，但不会有压力" },
      { value: "forward", icon: "烈", label: "明显一点", hint: "喜欢基酒的香气和力度" },
    ],
  },
  {
    key: "avoidTaste",
    kicker: "第三口 · 排雷",
    title: "最不能接受哪种味道？",
    note: "先排掉最扫兴的那一种。",
    mode: "single",
    options: [
      { value: "sour", icon: "酸", label: "太酸", hint: "会让我忍不住皱眉" },
      { value: "sweet", icon: "甜", label: "太甜", hint: "不想喝一杯糖浆" },
      { value: "bitter", icon: "苦", label: "明显苦味", hint: "避开开胃酒式的苦" },
      { value: "none", icon: "都", label: "都可以", hint: "我的风味接受度很高" },
    ],
  },
  {
    key: "pace",
    kicker: "第四口 · 节奏",
    title: "这一杯，想怎么喝？",
    note: "喝法会决定杯型、容量和味道的集中程度。",
    mode: "single",
    options: [
      { value: "long", icon: "吨", label: "轻松吨吨喝", hint: "长饮、气泡多、聊天不累" },
      { value: "short", icon: "抿", label: "慢慢抿一会", hint: "短饮、容量小、风味集中" },
    ],
  },
  {
    key: "exclusions",
    kicker: "最后一口 · 忌口",
    title: "这些味道，有需要避开的吗？",
    note: "可以多选。涉及过敏时，点单还要再告诉调酒师一次。",
    mode: "multiple",
    options: [
      { value: "herbal", icon: "草", label: "香菜 / 药草", hint: "明显的绿色草本气息" },
      { value: "spice", icon: "辛", label: "姜 / 辣椒", hint: "辛辣、刺激、暖感" },
      { value: "warmSpice", icon: "桂", label: "肉桂 / 茴香", hint: "温暖而强烈的香料" },
      { value: "smoke", icon: "烟", label: "烟熏", hint: "泥煤、焦香、烟雾感" },
      { value: "coffee", icon: "啡", label: "咖啡", hint: "烘烤和深色苦香" },
      { value: "none", icon: "无", label: "没有忌口", hint: "大胆推荐就好" },
    ],
  },
];

const cocktails = [
  {
    name: "莫吉托",
    en: "MOJITO",
    daily: ["citrus", "sparkling"],
    alcohol: ["hidden", "balanced"],
    tastes: ["sour", "sweet", "herbal"],
    pace: "long",
    exclusions: ["herbal"],
    tags: ["青柠", "薄荷", "气泡", "长饮"],
    reason: "青柠与气泡很清爽，薄荷把酒感藏在后面，适合边聊边喝。",
    color: "#b8ca72",
    garnish: "#9fba5a",
    glass: "tall",
  },
  {
    name: "汤姆柯林斯",
    en: "TOM COLLINS",
    daily: ["citrus", "sparkling"],
    alcohol: ["hidden", "balanced"],
    tastes: ["sour", "sweet"],
    pace: "long",
    exclusions: [],
    tags: ["柠檬", "苏打", "清爽", "长饮"],
    reason: "像更利落的酒精柠檬汽水，酸甜干净，没有复杂香料打扰。",
    color: "#e4c958",
    garnish: "#f2c94c",
    glass: "tall",
  },
  {
    name: "威士忌高球",
    en: "WHISKY HIGHBALL",
    daily: ["sparkling", "coffee"],
    alcohol: ["balanced", "forward"],
    tastes: ["bitter"],
    pace: "long",
    exclusions: ["smoke"],
    tags: ["苏打", "谷物", "干爽", "长饮"],
    reason: "气泡拉长威士忌香气，整体清爽不甜，酒味存在但不压人。",
    color: "#c79343",
    garnish: "#e9c252",
    glass: "tall",
  },
  {
    name: "金汤力",
    en: "GIN & TONIC",
    daily: ["sparkling", "citrus"],
    alcohol: ["balanced", "forward"],
    tastes: ["bitter", "herbal"],
    pace: "long",
    exclusions: ["herbal"],
    tags: ["金酒", "汤力", "微苦", "长饮"],
    reason: "清脆气泡托起杜松与柑橘，收口微苦，适合喜欢干净风味的人。",
    color: "#d8d6a0",
    garnish: "#a8ba63",
    glass: "tall",
  },
  {
    name: "帕洛玛",
    en: "PALOMA",
    daily: ["fruit", "citrus", "sparkling"],
    alcohol: ["hidden", "balanced"],
    tastes: ["sour", "sweet", "bitter"],
    pace: "long",
    exclusions: [],
    tags: ["西柚", "龙舌兰", "气泡", "长饮"],
    reason: "西柚的酸甜与轻微苦感很有精神，龙舌兰被气泡处理得更轻盈。",
    color: "#e18a7d",
    garnish: "#e07467",
    glass: "tall",
  },
  {
    name: "法式 75",
    en: "FRENCH 75",
    daily: ["sparkling", "citrus"],
    alcohol: ["hidden", "balanced"],
    tastes: ["sour", "sweet"],
    pace: "long",
    exclusions: [],
    tags: ["柠檬", "起泡酒", "明亮", "庆祝感"],
    reason: "细密气泡和柠檬让它显得轻快漂亮，入口比看起来更有力量。",
    color: "#ead47c",
    garnish: "#f0cc43",
    glass: "coupe",
  },
  {
    name: "代基里",
    en: "DAIQUIRI",
    daily: ["citrus", "fruit"],
    alcohol: ["balanced", "forward"],
    tastes: ["sour"],
    pace: "short",
    exclusions: [],
    tags: ["青柠", "朗姆", "酸甜", "短饮"],
    reason: "青柠、糖与朗姆三件事说得很直接，清爽但风味比长饮更集中。",
    color: "#d9cb75",
    garnish: "#a6b65d",
    glass: "coupe",
  },
  {
    name: "杏仁酸酒",
    en: "AMARETTO SOUR",
    daily: ["creamy", "fruit"],
    alcohol: ["hidden", "balanced"],
    tastes: ["sweet", "sour"],
    pace: "short",
    exclusions: [],
    tags: ["杏仁", "柠檬", "绵密", "短饮"],
    reason: "杏仁甜香圆润，柠檬负责提亮，酒感柔和，像一份成熟的小甜点。",
    color: "#d59d4f",
    garnish: "#c85f4e",
    glass: "short",
  },
  {
    name: "椰林飘香",
    en: "PIÑA COLADA",
    daily: ["creamy", "fruit"],
    alcohol: ["hidden"],
    tastes: ["sweet"],
    pace: "long",
    exclusions: [],
    tags: ["椰子", "菠萝", "顺滑", "度假感"],
    reason: "椰香和菠萝把朗姆酒包得很柔软，甜润顺滑，几乎没有攻击性。",
    color: "#e8daa9",
    garnish: "#d8b649",
    glass: "tall",
  },
  {
    name: "浓缩咖啡马天尼",
    en: "ESPRESSO MARTINI",
    daily: ["coffee", "creamy"],
    alcohol: ["balanced", "forward"],
    tastes: ["bitter", "sweet"],
    pace: "short",
    exclusions: ["coffee"],
    tags: ["咖啡", "烘烤", "微甜", "短饮"],
    reason: "咖啡的烘烤香是主角，甜味托住伏特加，浓郁但轮廓很清楚。",
    color: "#6d4431",
    garnish: "#3b261e",
    glass: "coupe",
  },
  {
    name: "古典",
    en: "OLD FASHIONED",
    daily: ["coffee"],
    alcohol: ["forward"],
    tastes: ["sweet", "bitter"],
    pace: "short",
    exclusions: ["warmSpice", "smoke"],
    tags: ["威士忌", "橙香", "醇厚", "短饮"],
    reason: "酒体扎实，少量糖和苦精只负责勾边，适合慢慢感受基酒变化。",
    color: "#a96c32",
    garnish: "#d4873e",
    glass: "short",
  },
  {
    name: "内格罗尼",
    en: "NEGRONI",
    daily: ["coffee", "citrus"],
    alcohol: ["forward"],
    tastes: ["bitter", "herbal", "sweet"],
    pace: "short",
    exclusions: ["herbal", "warmSpice"],
    tags: ["柑橘", "草本", "苦甜", "短饮"],
    reason: "柑橘、草本与明显苦甜层层展开，是一杯个性很清楚的慢饮。",
    color: "#b84131",
    garnish: "#df783f",
    glass: "short",
  },
];

const state = {
  currentStep: 0,
  transitioning: false,
  transitionId: 0,
  answers: {
    dailyDrink: null,
    alcohol: null,
    avoidTaste: null,
    pace: null,
    exclusions: [],
  },
};

const elements = {
  screens: [...document.querySelectorAll(".screen")],
  intro: document.querySelector("#introScreen"),
  quiz: document.querySelector("#quizScreen"),
  result: document.querySelector("#resultScreen"),
  start: document.querySelector("#startButton"),
  restart: document.querySelector("#restartButton"),
  resultRestart: document.querySelector("#resultRestartButton"),
  home: document.querySelector("[data-action='home']"),
  stepCount: document.querySelector("#stepCount"),
  progressLabel: document.querySelector("#progressLabel"),
  progressFill: document.querySelector("#progressFill"),
  questionKicker: document.querySelector("#questionKicker"),
  questionTitle: document.querySelector("#questionTitle"),
  questionNote: document.querySelector("#questionNote"),
  optionGrid: document.querySelector("#optionGrid"),
  back: document.querySelector("#backButton"),
  next: document.querySelector("#nextButton"),
  tasteCloud: document.querySelector("#tasteCloud"),
  liveGlass: document.querySelector("#liveGlass"),
  pourCaption: document.querySelector("#pourCaption"),
  resultMood: document.querySelector("#resultMood"),
  profileLine: document.querySelector("#profileLine"),
  recommendations: document.querySelector("#recommendations"),
  bartenderSentence: document.querySelector("#bartenderSentence"),
  copy: document.querySelector("#copyButton"),
  copyLabel: document.querySelector("#copyLabel"),
  toast: document.querySelector("#toast"),
};

const labels = {
  dailyDrink: {
    citrus: ["柑橘 / 茶", "清爽的柑橘茶感"],
    sparkling: ["轻盈气泡", "干净的气泡感"],
    fruit: ["明亮果香", "多汁的水果香气"],
    coffee: ["烘烤层次", "偏深的烘烤香"],
    creamy: ["圆润奶香", "圆润柔和的口感"],
  },
  alcohol: {
    hidden: ["酒感隐藏", "酒味尽量藏起来"],
    balanced: ["酒感平衡", "能尝到酒但不过分"],
    forward: ["酒感明显", "让基酒香气更明确"],
  },
  avoidTaste: {
    sour: ["低酸", "酸度收敛一点"],
    sweet: ["低甜", "不要太甜"],
    bitter: ["低苦", "避开明显苦味"],
    none: ["风味开放", "酸甜苦都能接受"],
  },
  pace: {
    long: ["长饮", "适合轻松喝的长饮"],
    short: ["短饮", "适合慢慢抿的短饮"],
  },
  exclusions: {
    herbal: "草本",
    spice: "辛辣",
    warmSpice: "暖香料",
    smoke: "烟熏",
    coffee: "咖啡",
  },
};

function showScreen(screen) {
  elements.screens.forEach((item) => item.classList.toggle("is-active", item === screen));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startQuiz() {
  state.currentStep = 0;
  showScreen(elements.quiz);
  elements.restart.classList.remove("is-hidden");
  renderQuestion();
}

function resetQuiz() {
  state.currentStep = 0;
  state.transitioning = false;
  state.transitionId += 1;
  state.answers.dailyDrink = null;
  state.answers.alcohol = null;
  state.answers.avoidTaste = null;
  state.answers.pace = null;
  state.answers.exclusions = [];
  elements.copyLabel.textContent = "复制点单暗号";
  showScreen(elements.intro);
  elements.restart.classList.add("is-hidden");
  elements.stepCount.textContent = "今晚 · 未开杯";
  updateLivePreview();
}

function renderQuestion() {
  const question = questions[state.currentStep];
  const step = state.currentStep + 1;
  const percent = `${step * 20}%`;

  elements.stepCount.textContent = `口味测试 · ${String(step).padStart(2, "0")} / 05`;
  elements.progressLabel.textContent = String(step).padStart(2, "0");
  elements.progressFill.style.height = percent;
  elements.progressFill.style.width = percent;
  elements.questionKicker.textContent = question.kicker;
  elements.questionTitle.textContent = question.title;
  elements.questionNote.textContent = question.note;
  elements.back.disabled = state.currentStep === 0;
  elements.next.classList.toggle("is-hidden", question.mode !== "multiple");
  elements.next.disabled = question.mode === "multiple" && state.answers.exclusions.length === 0;

  elements.optionGrid.innerHTML = "";
  question.options.forEach((option) => {
    const selected = question.mode === "multiple"
      ? state.answers[question.key].includes(option.value)
      : state.answers[question.key] === option.value;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `option-button${selected ? " is-selected" : ""}`;
    button.setAttribute("aria-pressed", String(selected));
    button.innerHTML = `
      <span class="option-icon" aria-hidden="true">${option.icon}</span>
      <span class="option-text"><strong>${option.label}</strong><small>${option.hint}</small></span>
      <span class="option-check" aria-hidden="true">✓</span>
    `;
    button.addEventListener("click", () => handleOption(question, option.value));
    elements.optionGrid.appendChild(button);
  });

  updateLivePreview();
}

function handleOption(question, value) {
  if (state.transitioning) return;

  if (question.mode === "multiple") {
    const current = state.answers.exclusions;
    if (value === "none") {
      state.answers.exclusions = ["none"];
    } else {
      const withoutNone = current.filter((item) => item !== "none");
      state.answers.exclusions = withoutNone.includes(value)
        ? withoutNone.filter((item) => item !== value)
        : [...withoutNone, value];
    }
    renderQuestion();
    return;
  }

  state.answers[question.key] = value;
  state.transitioning = true;
  const transitionId = ++state.transitionId;
  [...elements.optionGrid.querySelectorAll(".option-button")].forEach((button) => {
    button.disabled = true;
  });
  updateLivePreview();
  window.setTimeout(() => {
    if (transitionId !== state.transitionId) return;
    if (state.currentStep < questions.length - 1) {
      state.currentStep += 1;
      state.transitioning = false;
      renderQuestion();
    }
  }, 220);
}

function previousQuestion() {
  if (state.currentStep === 0) return;
  state.transitioning = false;
  state.transitionId += 1;
  state.currentStep -= 1;
  renderQuestion();
}

function restartFromQuiz() {
  state.currentStep = 0;
  state.transitioning = false;
  state.transitionId += 1;
  state.answers.dailyDrink = null;
  state.answers.alcohol = null;
  state.answers.avoidTaste = null;
  state.answers.pace = null;
  state.answers.exclusions = [];
  startQuiz();
}

function updateLivePreview() {
  const tags = [];
  const { dailyDrink, alcohol, avoidTaste, pace, exclusions } = state.answers;

  if (dailyDrink) tags.push(labels.dailyDrink[dailyDrink][0]);
  if (alcohol) tags.push(labels.alcohol[alcohol][0]);
  if (avoidTaste) tags.push(labels.avoidTaste[avoidTaste][0]);
  if (pace) tags.push(labels.pace[pace][0]);
  exclusions.filter((item) => item !== "none").forEach((item) => tags.push(`无${labels.exclusions[item]}`));

  elements.tasteCloud.innerHTML = tags.length
    ? tags.map((tag) => `<span>${tag}</span>`).join("")
    : "<span>待选择</span>";

  elements.liveGlass.className = "cocktail-glass live-glass";
  if (dailyDrink) elements.liveGlass.classList.add(`is-${dailyDrink}`);
  if (pace === "short") elements.liveGlass.classList.add("is-short");

  const completed = [dailyDrink, alcohol, avoidTaste, pace].filter(Boolean).length;
  const captions = [
    "杯子还是空的，先挑一种熟悉的饮料。",
    "风味底色有了，接着决定酒感。",
    "酒的轮廓正在变清楚。",
    "雷区已排除，差一个喝酒节奏。",
    "杯型也选好了，最后检查忌口。",
  ];
  elements.pourCaption.textContent = captions[completed];
}

function scoreCocktail(cocktail) {
  const { dailyDrink, alcohol, avoidTaste, pace, exclusions } = state.answers;
  let score = 4;
  if (cocktail.daily.includes(dailyDrink)) score += 5;
  if (cocktail.alcohol.includes(alcohol)) score += 4;
  if (cocktail.pace === pace) score += 3;
  if (avoidTaste !== "none" && cocktail.tastes.includes(avoidTaste)) score -= 4;
  if (avoidTaste === "none") score += 1;
  exclusions.filter((item) => item !== "none").forEach((item) => {
    if (cocktail.exclusions.includes(item)) score -= 9;
  });
  return score;
}

function getRecommendations() {
  return cocktails
    .map((cocktail) => ({ ...cocktail, score: scoreCocktail(cocktail) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

function buildProfile() {
  const { dailyDrink, alcohol, avoidTaste, pace, exclusions } = state.answers;
  const parts = [
    labels.dailyDrink[dailyDrink][0],
    labels.alcohol[alcohol][0],
    labels.avoidTaste[avoidTaste][0],
    labels.pace[pace][0],
  ];
  exclusions.filter((item) => item !== "none").forEach((item) => parts.push(`避开${labels.exclusions[item]}`));
  return parts.join(" + ");
}

function getMood() {
  const { dailyDrink, alcohol, pace } = state.answers;
  if (alcohol === "forward" && pace === "short") return "适合认真喝一杯。";
  if (dailyDrink === "fruit" || dailyDrink === "creamy") return "适合甜一点的松弛。";
  if (dailyDrink === "coffee") return "适合慢一点的夜晚。";
  return "适合轻松一点。";
}

function getBartenderSentence() {
  const { dailyDrink, alcohol, avoidTaste, pace, exclusions } = state.answers;
  const exclusionText = exclusions.includes("none")
    ? "没有特别忌口"
    : `请避开${exclusions.map((item) => labels.exclusions[item]).join("、")}`;
  return `我平时喜欢${labels.dailyDrink[dailyDrink][1]}，希望${labels.alcohol[alcohol][1]}，${labels.avoidTaste[avoidTaste][1]}，想要${labels.pace[pace][1]}，${exclusionText}。可以按这个方向推荐吗？`;
}

function getCustomizedReason(drink) {
  const adjustments = {
    sour: "点单时可以请调酒师把酸度收住。",
    sweet: "点单时可以请调酒师做得更干爽。",
    bitter: "点单时可以请调酒师压低苦味。",
  };
  const avoidedTaste = state.answers.avoidTaste;
  return avoidedTaste !== "none" && drink.tastes.includes(avoidedTaste)
    ? `${drink.reason}${adjustments[avoidedTaste]}`
    : drink.reason;
}

function renderResults() {
  const results = getRecommendations();
  const max = Math.max(...results.map((item) => item.score));
  const min = Math.min(...results.map((item) => item.score));

  elements.resultMood.textContent = getMood();
  elements.profileLine.textContent = buildProfile();
  elements.bartenderSentence.textContent = getBartenderSentence();
  elements.recommendations.innerHTML = results.map((drink, index) => {
    const range = Math.max(1, max - min);
    const match = Math.round(88 + ((drink.score - min) / range) * 9 - index * 2);
    return `
      <article class="drink-card">
        <div class="mini-drink" aria-hidden="true">
          <span class="drink-rank">0${index + 1}</span>
          <div class="mini-glass ${drink.glass === "tall" ? "" : drink.glass}" style="--drink-color:${drink.color}; --garnish-color:${drink.garnish}">
            <span class="mini-liquid"></span>
            <span class="mini-garnish"></span>
          </div>
        </div>
        <div class="drink-copy">
          <h3>${drink.name}</h3>
          <p class="english-name">${drink.en}</p>
          <p class="reason">${getCustomizedReason(drink)}</p>
        </div>
        <div class="drink-meta">
          <span class="match-score" aria-label="匹配度 ${match}%">${match}%</span>
          <div class="drink-tags">${drink.tags.map((tag) => `<span>#${tag}</span>`).join("")}</div>
        </div>
      </article>
    `;
  }).join("");

  showScreen(elements.result);
  elements.stepCount.textContent = "你的午夜酒单";
}

async function copyOrderPhrase() {
  const text = getBartenderSentence();
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
  }
  elements.copyLabel.textContent = "已经复制";
  elements.toast.textContent = "点单暗号已复制";
  elements.toast.classList.add("is-visible");
  window.setTimeout(() => {
    elements.toast.classList.remove("is-visible");
    window.setTimeout(() => {
      elements.toast.textContent = "";
    }, 200);
  }, 1800);
}

elements.start.addEventListener("click", startQuiz);
elements.home.addEventListener("click", resetQuiz);
elements.restart.addEventListener("click", resetQuiz);
elements.resultRestart.addEventListener("click", restartFromQuiz);
elements.back.addEventListener("click", previousQuestion);
elements.next.addEventListener("click", renderResults);
elements.copy.addEventListener("click", copyOrderPhrase);

updateLivePreview();
