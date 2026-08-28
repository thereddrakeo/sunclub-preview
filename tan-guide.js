(() => {
  "use strict";

  const copy = {
    ro: {
      exit: "Ieși", eyebrow: "Ghid personalizat · 2 minute", title: "Cu ce să începi la prima vizită?",
      lead: "Patru întrebări simple și un plan clar pentru prima vizită.",
      benefit1: "Minute estimate pentru prima ședință", benefit2: "Câte vizite ar putea dura până la nuanța dorită",
      benefit3: "Un ritm orientativ adaptat răspunsurilor tale", privacy: "Răspunsurile rămân pe dispozitivul tău. Nu cerem date personale.",
      progressLabel: "Progres", startKicker: "Pentru vizitatori noi", startTitle: "Găsește-ți punctul de pornire",
      startText: "Sunt doar patru întrebări scurte. Alege ce te descrie cel mai bine și vezi planul tău.",
      startButton: "Începe ghidul", startTime: "Durează aproximativ 2 minute",
      toneTitle: "Care imagine seamănă cel mai mult cu nuanța naturală a pielii tale?",
      toneHelp: "Gândește-te la pielea neexpusă recent la soare, nu la bronzul actual.",
      burnTitle: "Cum reacționează pielea ta de obicei la soare?", burnHelp: "Alege varianta cea mai apropiată de experiența ta.",
      burnAlways: "Mă ard aproape întotdeauna și mă bronzez foarte greu", burnOften: "Mă ard ușor, apoi capăt puțină culoare",
      burnSometimes: "Uneori mă înroșesc, dar mă bronzez treptat", burnRarely: "Rareori mă ard și capăt culoare ușor",
      goalTitle: "Ce nuanță ți-ar plăcea să obții?", goalHelp: "Alege nuanța spre care ai vrea să evoluezi treptat.",
      lastTitle: "Când ai avut ultima expunere intenționată la UV?", lastHelp: "Include solarul sau statul deliberat la soare pentru bronz.",
      lastRecent: "În ultimele 7 zile", lastWeeks: "Acum 2–4 săptămâni", lastOverFour: "Acum mai mult de 4 săptămâni",
      back: "Înapoi", next: "Continuă", finish: "Vezi planul meu", validation: "Alege un răspuns pentru a continua.",
      minutesEyebrow: "Prima ședință estimată", minutesUnit: "minute",
      resultStartLabel: "Prima vizită", resultRhythmLabel: "Ritmul recomandat", resultReviewLabel: "Până la nuanța dorită",
      resultMaintenanceLabel: "Menținerea nuanței",
      giftTitle: "Prima ședință cadou la cumpărarea unui abonament",
      giftTerms: "Fă o captură de ecran și arat-o la recepție când cumperi primul abonament.",
      rewardUnlocked: "Surpriza ta este deblocată", viewReward: "Vezi cadoul", surpriseEyebrow: "Surpriză deblocată",
      expiresIn: "Cadoul expiră în", validUntil: "Valabil până la", voucherEyebrow: "Voucherul tău",
      voucherTitle: "Prima ședință cadou", voucherTerms: "Valabil la cumpărarea primului abonament SUNCLUB.",
      screenshotNote: "Fă acum o captură de ecran. Voucherul trebuie prezentat înainte de data de expirare.",
      screenshotDone: "Am făcut captura", closeReward: "Închide cadoul", expired: "Voucher expirat",
      copyCode: "Copiază codul", copied: "Cod copiat",
      callAction: "Sună pentru prima vizită", restart: "Refă ghidul", uvSummary: "De reținut",
      uvDetails: "Estimările sunt orientative. Consultantul SUNCLUB confirmă timpul final în funcție de cabină și reacția pielii. Nu folosi solarul pe piele roșie sau iritată și poartă întotdeauna protecția oculară indicată.",
      whoLink: "Informații OMS despre UV",
      toneLabels: ["Foarte deschisă", "Deschisă", "Deschis-mediu", "Medie", "Măslinie", "Închisă"],
      gentleBadge: "Plan delicat", gentleTitle: "Un început blând ți se potrivește",
      gentleIntro: "Pielea ta pare să aibă nevoie de un ritm mai lent. Începe scurt și lasă culoarea să se construiască treptat.",
      balancedBadge: "Plan gradual", balancedTitle: "Un ritm gradual ți se potrivește",
      balancedIntro: "Poți construi nuanța dorită pas cu pas, urmărind reacția pielii după fiecare vizită.",
      easyBadge: "Plan moderat", easyTitle: "Poți începe cu un ritm moderat",
      easyIntro: "Răspunsurile tale indică o toleranță mai bună, dar progresul gradual rămâne cea mai bună abordare.",
      minuteNote: "Estimare pentru prima vizită. Consultantul confirmă timpul înainte de ședință.",
      startPlan: (minutes) => "Începe cu aproximativ " + minutes + " minute. La recepție, consultantul confirmă setarea potrivită pentru cabină.",
      rhythmGentle: "Aproximativ 2 vizite pe săptămână, cu minimum 48 de ore între ședințe.",
      rhythmRegular: "Aproximativ 2–3 vizite pe săptămână, fără ședințe în zile consecutive.",
      targetMaintain: "Nuanța aleasă este deja apropiată de cea actuală. Reevaluează după prima vizită împreună cu consultantul.",
      maintenancePlan: "După ce ajungi la nuanța dorită, continuă orientativ cu 1–2 vizite pe săptămână pentru menținere.",
      targetPlan: (low, high, weeksLow, weeksHigh) => "Aproximativ " + low + "–" + high + " ședințe, adică în jur de " + weeksLow + "–" + weeksHigh + " săptămâni. Rezultatul diferă în funcție de răspunsul natural al pielii."
    },
    ru: {
      exit: "Выйти", eyebrow: "Персональный гид · 2 минуты", title: "С чего начать первое посещение?",
      lead: "Четыре простых вопроса и понятный план первого визита.",
      benefit1: "Примерное время первого сеанса", benefit2: "Сколько визитов может потребоваться до желаемого оттенка",
      benefit3: "Ориентировочный ритм с учётом ваших ответов", privacy: "Ответы остаются на вашем устройстве. Мы не запрашиваем личные данные.",
      progressLabel: "Прогресс", startKicker: "Для новых посетителей", startTitle: "Найдите свою отправную точку",
      startText: "Всего четыре коротких вопроса. Выберите то, что лучше всего вас описывает, и получите свой план.",
      startButton: "Начать", startTime: "Займёт около 2 минут",
      toneTitle: "Какое изображение ближе всего к вашему естественному тону кожи?",
      toneHelp: "Ориентируйтесь на участок кожи, который недавно не был на солнце, а не на текущий загар.",
      burnTitle: "Как ваша кожа обычно реагирует на солнце?", burnHelp: "Выберите вариант, наиболее близкий к вашему опыту.",
      burnAlways: "Почти всегда обгораю и очень плохо загораю", burnOften: "Легко обгораю, затем появляется немного цвета",
      burnSometimes: "Иногда краснею, но постепенно загораю", burnRarely: "Редко обгораю и легко приобретаю цвет",
      goalTitle: "Какой оттенок вы хотели бы получить?", goalHelp: "Выберите оттенок, к которому хотите прийти постепенно.",
      lastTitle: "Когда у вас в последний раз было намеренное воздействие УФ?", lastHelp: "Учитывайте солярий или намеренное пребывание на солнце ради загара.",
      lastRecent: "В последние 7 дней", lastWeeks: "2–4 недели назад", lastOverFour: "Более 4 недель назад",
      back: "Назад", next: "Продолжить", finish: "Показать мой план", validation: "Выберите ответ, чтобы продолжить.",
      minutesEyebrow: "Примерный первый сеанс", minutesUnit: "минут",
      resultStartLabel: "Первый визит", resultRhythmLabel: "Рекомендуемый ритм", resultReviewLabel: "До желаемого оттенка",
      resultMaintenanceLabel: "Поддержание оттенка",
      giftTitle: "Первый сеанс в подарок при покупке абонемента",
      giftTerms: "Сделайте снимок экрана и покажите его на ресепшене при покупке первого абонемента.",
      rewardUnlocked: "Ваш сюрприз открыт", viewReward: "Посмотреть подарок", surpriseEyebrow: "Сюрприз открыт",
      expiresIn: "Подарок истекает через", validUntil: "Действителен до", voucherEyebrow: "Ваш ваучер",
      voucherTitle: "Первый сеанс в подарок", voucherTerms: "Действует при покупке первого абонемента SUNCLUB.",
      screenshotNote: "Сделайте снимок экрана сейчас. Ваучер нужно показать до даты окончания срока действия.",
      screenshotDone: "Снимок сделан", closeReward: "Закрыть подарок", expired: "Срок ваучера истёк",
      copyCode: "Скопировать код", copied: "Код скопирован",
      callAction: "Позвонить для первого визита", restart: "Пройти заново", uvSummary: "Важно помнить",
      uvDetails: "Оценки ориентировочные. Консультант SUNCLUB подтверждает итоговое время с учётом кабины и реакции кожи. Не используйте солярий при покраснении или раздражении кожи и всегда надевайте указанную защиту глаз.",
      whoLink: "Информация ВОЗ об УФ",
      toneLabels: ["Очень светлая", "Светлая", "Светло-средняя", "Средняя", "Оливковая", "Тёмная"],
      gentleBadge: "Деликатный план", gentleTitle: "Вам подходит мягкое начало",
      gentleIntro: "Вашей коже, вероятно, нужен более спокойный ритм. Начните с короткого сеанса и наращивайте цвет постепенно.",
      balancedBadge: "Постепенный план", balancedTitle: "Вам подходит постепенный ритм",
      balancedIntro: "Вы можете шаг за шагом двигаться к желаемому оттенку, наблюдая за реакцией кожи после каждого визита.",
      easyBadge: "Умеренный план", easyTitle: "Можно начать с умеренного ритма",
      easyIntro: "Ваши ответы указывают на более высокую переносимость, но постепенный прогресс по-прежнему остаётся лучшим подходом.",
      minuteNote: "Оценка для первого визита. Консультант подтвердит время перед сеансом.",
      startPlan: (minutes) => "Начните примерно с " + minutes + " минут. На ресепшене консультант подтвердит настройку для выбранной кабины.",
      rhythmGentle: "Примерно 2 визита в неделю с интервалом не менее 48 часов.",
      rhythmRegular: "Примерно 2–3 визита в неделю, без сеансов в последовательные дни.",
      targetMaintain: "Выбранный оттенок уже близок к текущему. После первого визита пересмотрите план вместе с консультантом.",
      maintenancePlan: "После достижения желаемого оттенка ориентировочно продолжайте 1–2 посещения в неделю для поддержания результата.",
      targetPlan: (low, high, weeksLow, weeksHigh) => "Примерно " + low + "–" + high + " сеансов, то есть около " + weeksLow + "–" + weeksHigh + " недель. Результат зависит от естественной реакции кожи."
    }
  };

  const toneColors = ["#f6d7c8", "#e8bda8", "#cf9574", "#aa6d4d", "#7b4a32", "#4d2d23"];
  let language = localStorage.getItem("sunclub_lang") === "ru" ? "ru" : "ro";
  let currentStep = 0;
  const totalSteps = 4;
  const startScreen = document.getElementById("start-screen");
  const form = document.getElementById("guide-form");
  const progressRegion = document.getElementById("progress-region");
  const resultScreen = document.getElementById("result-screen");
  const nextButton = document.getElementById("next-button");
  const validation = document.getElementById("validation-message");
  const giftModal = document.getElementById("gift-modal");
  const giftDialog = giftModal.querySelector(".gift-modal__dialog");
  const rewardReopen = document.getElementById("reward-reopen");
  let rewardExpiresAt = null;
  let rewardTimerId = null;
  let modalReturnFocus = null;

  function t(key) {
    return key.split(".").reduce((value, part) => value && value[part], copy[language]);
  }

  function toneMarkup(name, value, color, label) {
    return '<label class="tone-card"><input type="radio" name="' + name + '" value="' + value + '"><span class="tone-card__visual"><svg viewBox="0 0 80 92" aria-hidden="true"><circle cx="40" cy="31" r="22" fill="' + color + '"/><path d="M11 89c2-24 15-35 29-35s27 11 29 35" fill="' + color + '"/><path d="M22 27c1-15 9-22 19-22 12 0 19 9 20 22-8-4-13-10-16-17-5 8-12 14-23 17Z" fill="#4b3025" opacity=".88"/></svg></span><span class="tone-card__label">' + label + '</span></label>';
  }

  function renderTones() {
    ["current-tones", "target-tones"].forEach((id) => {
      const name = id === "current-tones" ? "currentTone" : "targetTone";
      document.getElementById(id).innerHTML = toneColors.map((color, index) =>
        toneMarkup(name, index + 1, color, copy[language].toneLabels[index])
      ).join("");
    });
  }

  function applyLanguage(nextLanguage) {
    const savedAnswers = new FormData(form);
    language = nextLanguage;
    localStorage.setItem("sunclub_lang", language);
    document.documentElement.lang = language;
    document.title = language === "ru" ? "Ваш гид по загару | SUNCLUB Кишинёв" : "Ghidul tău de bronzare | SUNCLUB Chișinău";
    document.querySelectorAll("[data-copy]").forEach((element) => {
      const value = t(element.dataset.copy);
      if (value) element.textContent = value;
    });
    document.querySelectorAll(".language-button").forEach((button) => {
      const active = button.dataset.language === language;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    renderTones();
    savedAnswers.forEach((value, key) => {
      const input = form.querySelector('[name="' + key + '"][value="' + value + '"]');
      if (input) input.checked = true;
    });
    updateControls();
    document.getElementById("close-gift").setAttribute("aria-label", t("closeReward"));
    updateRewardDetails();
    if (!resultScreen.hidden) showResult();
  }

  function selected(name) {
    return form.querySelector('[name="' + name + '"]:checked');
  }

  function validateStep() {
    validation.textContent = "";
    const fields = ["currentTone", "burn", "targetTone", "lastExposure"];
    if (!selected(fields[currentStep - 1])) {
      validation.textContent = t("validation");
      return false;
    }
    return true;
  }

  function updateControls() {
    if (!currentStep) return;
    document.getElementById("progress-text").textContent = currentStep + " / " + totalSteps;
    document.getElementById("progress-bar").style.width = Math.round((currentStep / totalSteps) * 100) + "%";
    document.querySelector(".progress-track").setAttribute("aria-valuenow", String(currentStep));
    nextButton.querySelector("span").textContent = currentStep === totalSteps ? t("finish") : t("next");
  }

  function showStep(step) {
    currentStep = step;
    document.querySelectorAll(".guide-step").forEach((section) => {
      section.hidden = Number(section.dataset.step) !== currentStep;
    });
    validation.textContent = "";
    updateControls();
    const legend = document.querySelector('.guide-step[data-step="' + currentStep + '"] legend');
    requestAnimationFrame(() => legend && legend.focus());
  }

  function calculatePlan() {
    const currentTone = Number(selected("currentTone").value);
    const targetTone = Number(selected("targetTone").value);
    const burn = selected("burn").value;
    const lastExposure = selected("lastExposure").value;

    const baseMinutes = { always: 3, often: 4, sometimes: 5, rarely: 6 };
    const toneCaps = { 1: 3, 2: 4, 3: 5, 4: 6, 5: 7, 6: 7 };
    const experienced = ["twoToFourWeeks", "recent"].includes(lastExposure);
    const bonus = experienced && ["sometimes", "rarely"].includes(burn) ? 1 : 0;
    const minutes = Math.min(baseMinutes[burn] + bonus, toneCaps[currentTone]);

    let style = "balanced";
    if (["always", "often"].includes(burn)) style = "gentle";
    if (burn === "rarely" && currentTone >= 4) style = "easy";

    const difference = Math.max(0, targetTone - currentTone);
    let low = 1, high = 2;
    if (difference === 1) { low = 3; high = 4; }
    else if (difference === 2) { low = 5; high = 6; }
    else if (difference === 3) { low = 7; high = 8; }
    else if (difference >= 4) { low = 9; high = 10; }
    if (style === "gentle" && difference > 0) { low += 1; high += 2; }

    const weeklyHigh = style === "gentle" ? 2 : 3;
    const weeksLow = Math.max(1, Math.ceil(low / weeklyHigh));
    const weeksHigh = Math.max(2, Math.ceil(high / (style === "gentle" ? 2 : 2)));

    return { minutes, style, difference, low, high, weeksLow, weeksHigh };
  }

  function updateRewardDetails() {
    if (!rewardExpiresAt) return;
    const locale = language === "ru" ? "ru-MD" : "ro-MD";
    document.getElementById("reward-expiry-date").textContent = new Intl.DateTimeFormat(locale, {
      dateStyle: "long",
      timeStyle: "short"
    }).format(new Date(rewardExpiresAt));
    updateRewardCountdown();
  }

  function updateRewardCountdown() {
    if (!rewardExpiresAt) return;
    const countdown = document.getElementById("reward-countdown");
    const remaining = Math.max(0, rewardExpiresAt - Date.now());
    if (remaining <= 0) {
      countdown.textContent = t("expired");
      countdown.setAttribute("aria-label", t("expired"));
      return;
    }
    const totalSeconds = Math.ceil(remaining / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const pad = (value) => String(value).padStart(2, "0");
    const dayLabel = language === "ru" ? "дн." : "zile";
    countdown.textContent = days + " " + dayLabel + " · " + pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
    countdown.setAttribute("aria-label", countdown.textContent);
  }

  function openGiftModal() {
    modalReturnFocus = document.activeElement;
    giftModal.hidden = false;
    rewardReopen.hidden = true;
    document.body.classList.add("has-gift-modal");
    updateRewardDetails();
    clearInterval(rewardTimerId);
    rewardTimerId = window.setInterval(updateRewardCountdown, 1000);
    requestAnimationFrame(() => giftDialog.focus());
  }

  function closeGiftModal() {
    giftModal.hidden = true;
    document.body.classList.remove("has-gift-modal");
    rewardReopen.hidden = false;
    clearInterval(rewardTimerId);
    rewardTimerId = null;
    if (modalReturnFocus && typeof modalReturnFocus.focus === "function") modalReturnFocus.focus();
  }

  function handleGiftKeydown(event) {
    if (giftModal.hidden) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeGiftModal();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = Array.from(giftDialog.querySelectorAll("button, a[href], input, [tabindex]:not([tabindex='-1'])"))
      .filter((element) => !element.disabled && !element.hidden);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function showResult(revealReward = false) {
    form.hidden = true;
    progressRegion.hidden = true;
    resultScreen.hidden = false;
    const plan = calculatePlan();
    const dict = copy[language];

    const badge = document.getElementById("result-badge");
    badge.className = "result-badge";
    badge.textContent = dict[plan.style + "Badge"];
    document.getElementById("result-title").textContent = dict[plan.style + "Title"];
    document.getElementById("result-intro").textContent = dict[plan.style + "Intro"];
    document.getElementById("result-minutes").textContent = plan.minutes;
    document.getElementById("result-minutes-note").textContent = dict.minuteNote;
    document.getElementById("result-start").textContent = dict.startPlan(plan.minutes);
    document.getElementById("result-rhythm").textContent = plan.style === "gentle" ? dict.rhythmGentle : dict.rhythmRegular;
    document.getElementById("result-review").textContent = plan.difference === 0
      ? dict.targetMaintain
      : dict.targetPlan(plan.low, plan.high, plan.weeksLow, plan.weeksHigh);
    document.getElementById("result-maintenance").textContent = dict.maintenancePlan;

    if (!rewardExpiresAt) rewardExpiresAt = Date.now() + (7 * 24 * 60 * 60 * 1000);
    updateRewardDetails();
    rewardReopen.hidden = revealReward || !giftModal.hidden;
    if (revealReward) window.setTimeout(openGiftModal, 350);

    requestAnimationFrame(() => document.getElementById("result-title").focus());
    window.scrollTo({ top: document.getElementById("guide-card").offsetTop - 20, behavior: "smooth" });
  }

  document.getElementById("start-button").addEventListener("click", () => {
    startScreen.hidden = true;
    form.hidden = false;
    progressRegion.hidden = false;
    showStep(1);
  });

  nextButton.addEventListener("click", () => {
    if (!validateStep()) return;
    if (currentStep < totalSteps) showStep(currentStep + 1);
    else showResult(true);
  });

  document.getElementById("back-button").addEventListener("click", () => {
    if (currentStep > 1) showStep(currentStep - 1);
    else {
      currentStep = 0;
      form.hidden = true;
      progressRegion.hidden = true;
      startScreen.hidden = false;
      document.getElementById("start-button").focus();
    }
  });

  document.getElementById("close-gift").addEventListener("click", closeGiftModal);
  document.getElementById("gift-done").addEventListener("click", closeGiftModal);
  document.querySelector("[data-close-gift]").addEventListener("click", closeGiftModal);
  rewardReopen.addEventListener("click", openGiftModal);
  document.addEventListener("keydown", handleGiftKeydown);

  document.getElementById("copy-code").addEventListener("click", async (event) => {
    const code = document.getElementById("gift-code").textContent;
    try {
      await navigator.clipboard.writeText(code);
      event.currentTarget.textContent = t("copied");
      setTimeout(() => { event.currentTarget.textContent = t("copyCode"); }, 1800);
    } catch (_) {
      window.prompt(t("copyCode"), code);
    }
  });

  document.getElementById("restart-button").addEventListener("click", () => {
    form.reset();
    resultScreen.hidden = true;
    startScreen.hidden = false;
    currentStep = 0;
    rewardExpiresAt = null;
    rewardReopen.hidden = true;
    clearInterval(rewardTimerId);
    rewardTimerId = null;
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.getElementById("start-button").focus();
  });

  document.querySelectorAll(".language-button").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language));
  });

  document.getElementById("year").textContent = new Date().getFullYear();
  applyLanguage(language);
})();
