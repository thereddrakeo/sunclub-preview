(() => {
  "use strict";

  const copy = {
    ro: {
      exit: "Ieși", eyebrow: "Ghid personalizat · 2 minute", title: "Cu ce să începi la prima vizită?",
      lead: "Spune-ne puțin despre pielea și experiența ta. La final primești un punct de pornire pentru discuția cu echipa SUNCLUB și un cadou de bun venit.",
      benefit1: "Ritm orientativ pentru început", benefit2: "Ce să discuți la prima vizită", benefit3: "Prima ședință cadou la abonament",
      privacy: "Răspunsurile rămân pe dispozitivul tău. Nu cerem date personale.", progressLabel: "Progres",
      startKicker: "Pentru vizitatori noi", startTitle: "Găsește-ți punctul de pornire",
      startText: "Sunt șase întrebări scurte. Nu există răspunsuri „corecte” — alege ce te descrie cel mai bine.",
      startButton: "Începe ghidul", startTime: "Durează aproximativ 2 minute",
      ageTitle: "Ai împlinit 18 ani?", ageHelp: "Acest ghid și oferta sunt destinate exclusiv adulților.",
      yesAdult: "Da, am 18 ani sau mai mult", noAdult: "Nu, am sub 18 ani",
      toneTitle: "Care imagine seamănă cel mai mult cu nuanța naturală a pielii tale?",
      toneHelp: "Gândește-te la pielea neexpusă recent la soare, nu la bronzul actual.",
      burnTitle: "Cum reacționează pielea ta de obicei la soare?",
      burnHelp: "Alege reacția cea mai apropiată de experiența ta obișnuită.",
      burnAlways: "Mă ard aproape întotdeauna și mă bronzez foarte greu",
      burnOften: "Mă ard ușor, apoi capăt puțină culoare",
      burnSometimes: "Uneori mă înroșesc, dar mă bronzez treptat",
      burnRarely: "Rareori mă ard și capăt culoare ușor",
      goalTitle: "Ce nuanță ți-ar plăcea să obții?",
      goalHelp: "Aceasta ne ajută să estimăm când ar fi bine să reevaluăm progresul, nu să promitem o nuanță exactă.",
      lastTitle: "Când ai avut ultima expunere intenționată la UV?",
      lastHelp: "Include solarul sau statul deliberat la soare pentru bronz.",
      lastNever: "Niciodată / ar fi prima dată", lastOver3: "Acum mai mult de 3 luni",
      lastOneToThree: "Acum 1–3 luni", lastWeeks: "Acum 2–4 săptămâni", lastRecent: "În ultimele 7 zile",
      safetyTitle: "Înainte de recomandare, se aplică ceva din lista de mai jos?",
      safetyHelp: "Bifează toate variantele relevante. Aceste răspunsuri nu sunt salvate sau trimise.",
      safetySunburn: "Am pielea roșie, iritată sau arsă acum",
      safetyMedicine: "Iau medicamente sau folosesc produse care pot crește sensibilitatea la lumină",
      safetyMedical: "Un medic mi-a recomandat să evit UV sau am antecedente relevante ale pielii",
      safetyNone: "Niciuna dintre acestea", back: "Înapoi", next: "Continuă", finish: "Vezi rezultatul",
      validation: "Alege un răspuns pentru a continua.", validationSafety: "Alege cel puțin o variantă.",
      resultStartLabel: "Prima vizită", resultRhythmLabel: "Ritm orientativ", resultReviewLabel: "Moment de reevaluare",
      giftEyebrow: "Cadoul tău de bun venit", giftTitle: "Prima ședință cadou la cumpărarea unui abonament",
      giftTerms: "Pentru clienți noi, după evaluarea în salon și dacă ședința este potrivită pentru tine.",
      copyCode: "Copiază codul", copied: "Cod copiat", callAction: "Sună pentru prima vizită", restart: "Refă ghidul",
      uvSummary: "Informații importante despre UV",
      uvDetails: "Bronzarea cu UV nu este lipsită de riscuri. Acest ghid nu este o evaluare medicală și nu stabilește minutele unei ședințe. Timpul se stabilește în salon conform echipamentului, instrucțiunilor producătorului și evaluării personalului. Nu continua dacă pielea este roșie sau sensibilă și folosește întotdeauna protecția oculară indicată.",
      whoLink: "Informații OMS despre UV",
      toneLabels: ["Foarte deschisă", "Deschisă", "Deschis-mediu", "Medie", "Măslinie", "Închisă"],
      result: {
        minorBadge: "Ghid indisponibil", minorTitle: "Revenim după ce împlinești 18 ani",
        minorIntro: "SUNCLUB nu oferă acest ghid sau oferta persoanelor sub 18 ani.",
        minorStart: "Nu programa o ședință de bronzare UV.", minorRhythm: "Nu se aplică.", minorReview: "Poți discuta cu un părinte sau medic despre protecția pielii.",
        stopBadge: "Întâi, o verificare", stopTitle: "Oprește planul și discută cu un specialist",
        stopIntro: "Unul dintre răspunsurile tale cere o evaluare înainte de orice ședință. Nu îți oferim online un program de expunere.",
        stopStart: "Vorbește cu medicul sau farmacistul dacă este vorba despre sensibilitate, medicamente ori antecedente; dacă pielea este roșie, așteaptă vindecarea completă.",
        stopRhythm: "Nu începe și nu relua expunerea până nu este clar că este potrivită pentru tine.",
        stopReview: "Echipa SUNCLUB poate explica echipamentul, dar recomandarea medicală aparține unui profesionist medical.",
        cautiousBadge: "Pornire foarte graduală", cautiousTitle: "Profilul tău cere o abordare foarte prudentă",
        cautiousIntro: "Pielea ta pare sensibilă la UV sau ai puțină experiență. Rezultatul este un punct de discuție, nu o garanție de siguranță.",
        cautiousStart: "Începe doar după evaluarea personalului, la cea mai mică durată aplicabilă din programul aparatului — minutele nu se stabilesc online.",
        cautiousRhythm: "Cel mult 1–2 vizite pe săptămână la început, niciodată în zile consecutive și numai dacă pielea nu prezintă roșeață sau sensibilitate.",
        steadyBadge: "Pornire graduală", steadyTitle: "Un plan gradual ți se potrivește cel mai bine",
        steadyIntro: "Răspunsurile tale sugerează să construiești culoarea lent și să urmărești atent reacția pielii după fiecare vizită.",
        steadyStart: "Personalul stabilește cea mai mică durată potrivită din programul aparatului. Nu crește timpul fără reevaluare.",
        steadyRhythm: "Până la 2 vizite pe săptămână la început, cu minimum 48 de ore între ele și numai în absența roșeții.",
        reviewFew: "Reevaluează aspectul și reacția pielii după aproximativ 2–4 ședințe, înainte de a continua.",
        reviewSeveral: "Reevaluează progresul după aproximativ 4–6 ședințe; nu încerca să grăbești schimbarea nuanței.",
        reviewLong: "Obiectivul este mai îndepărtat. Reevaluează după 6 ședințe și acceptă că nuanța finală depinde de răspunsul natural al pielii."
      }
    },
    ru: {
      exit: "Выйти", eyebrow: "Персональный гид · 2 минуты", title: "С чего начать первое посещение?",
      lead: "Расскажите немного о своей коже и опыте. В конце вы получите отправную точку для разговора с командой SUNCLUB и приветственный подарок.",
      benefit1: "Ориентир по ритму посещений", benefit2: "Что обсудить при первом визите", benefit3: "Первый сеанс в подарок к абонементу",
      privacy: "Ответы остаются на вашем устройстве. Мы не запрашиваем личные данные.", progressLabel: "Прогресс",
      startKicker: "Для новых посетителей", startTitle: "Найдите свою отправную точку",
      startText: "Всего шесть коротких вопросов. Здесь нет «правильных» ответов — выберите то, что лучше всего вас описывает.",
      startButton: "Начать", startTime: "Займёт около 2 минут",
      ageTitle: "Вам уже исполнилось 18 лет?", ageHelp: "Этот гид и предложение предназначены только для взрослых.",
      yesAdult: "Да, мне 18 лет или больше", noAdult: "Нет, мне ещё нет 18",
      toneTitle: "Какое изображение ближе всего к вашему естественному тону кожи?",
      toneHelp: "Ориентируйтесь на участок кожи, который недавно не был на солнце, а не на текущий загар.",
      burnTitle: "Как ваша кожа обычно реагирует на солнце?", burnHelp: "Выберите вариант, наиболее близкий к вашему обычному опыту.",
      burnAlways: "Почти всегда обгораю и очень плохо загораю", burnOften: "Легко обгораю, затем появляется немного цвета",
      burnSometimes: "Иногда краснею, но постепенно загораю", burnRarely: "Редко обгораю и легко приобретаю цвет",
      goalTitle: "Какой оттенок вы хотели бы получить?",
      goalHelp: "Это помогает понять, когда пересмотреть прогресс, но не является обещанием точного оттенка.",
      lastTitle: "Когда у вас в последний раз было намеренное воздействие УФ?",
      lastHelp: "Учитывайте солярий или намеренное пребывание на солнце ради загара.",
      lastNever: "Никогда / это будет первый раз", lastOver3: "Более 3 месяцев назад",
      lastOneToThree: "1–3 месяца назад", lastWeeks: "2–4 недели назад", lastRecent: "В последние 7 дней",
      safetyTitle: "Перед результатом: относится ли к вам что-либо из списка?",
      safetyHelp: "Отметьте все подходящие варианты. Ответы не сохраняются и не отправляются.",
      safetySunburn: "Сейчас кожа красная, раздражённая или обгоревшая",
      safetyMedicine: "Принимаю лекарства или использую средства, повышающие чувствительность к свету",
      safetyMedical: "Врач советовал избегать УФ или у меня есть соответствующий анамнез кожи",
      safetyNone: "Ничего из перечисленного", back: "Назад", next: "Продолжить", finish: "Показать результат",
      validation: "Выберите ответ, чтобы продолжить.", validationSafety: "Выберите хотя бы один вариант.",
      resultStartLabel: "Первый визит", resultRhythmLabel: "Ориентировочный ритм", resultReviewLabel: "Когда пересмотреть план",
      giftEyebrow: "Ваш приветственный подарок", giftTitle: "Первый сеанс в подарок при покупке абонемента",
      giftTerms: "Для новых клиентов, после оценки в салоне и если сеанс вам подходит.",
      copyCode: "Скопировать код", copied: "Код скопирован", callAction: "Позвонить для первого визита", restart: "Пройти заново",
      uvSummary: "Важная информация об УФ",
      uvDetails: "УФ-загар не лишён рисков. Этот гид не является медицинской оценкой и не определяет минуты сеанса. Время устанавливается в салоне с учётом оборудования, инструкции производителя и оценки персонала. Не продолжайте, если кожа красная или чувствительная, и всегда используйте указанную защиту глаз.",
      whoLink: "Информация ВОЗ об УФ",
      toneLabels: ["Очень светлая", "Светлая", "Светло-средняя", "Средняя", "Оливковая", "Тёмная"],
      result: {
        minorBadge: "Гид недоступен", minorTitle: "Возвращайтесь после 18 лет",
        minorIntro: "SUNCLUB не предоставляет этот гид и предложение лицам младше 18 лет.",
        minorStart: "Не планируйте сеанс УФ-загара.", minorRhythm: "Не применяется.", minorReview: "Обсудите защиту кожи с родителем или врачом.",
        stopBadge: "Сначала проверка", stopTitle: "Остановите план и поговорите со специалистом",
        stopIntro: "Один из ваших ответов требует оценки до любого сеанса. Мы не предлагаем онлайн-программу воздействия.",
        stopStart: "Поговорите с врачом или фармацевтом о чувствительности, лекарствах или анамнезе; при покраснении дождитесь полного восстановления кожи.",
        stopRhythm: "Не начинайте и не возобновляйте воздействие, пока не станет ясно, что оно вам подходит.",
        stopReview: "Команда SUNCLUB объяснит оборудование, но медицинские рекомендации даёт медицинский специалист.",
        cautiousBadge: "Очень постепенный старт", cautiousTitle: "Ваш профиль требует особой осторожности",
        cautiousIntro: "Ваша кожа может быть чувствительна к УФ или у вас мало опыта. Результат — тема для обсуждения, а не гарантия безопасности.",
        cautiousStart: "Начинайте только после оценки персонала, с минимального применимого времени по программе аппарата — минуты онлайн не устанавливаются.",
        cautiousRhythm: "Не более 1–2 визитов в неделю вначале, никогда в последовательные дни и только без покраснения или чувствительности.",
        steadyBadge: "Постепенный старт", steadyTitle: "Вам лучше всего подходит постепенный план",
        steadyIntro: "Ваши ответы подсказывают наращивать цвет медленно и внимательно следить за реакцией кожи после каждого визита.",
        steadyStart: "Персонал устанавливает минимальное подходящее время по программе аппарата. Не увеличивайте время без повторной оценки.",
        steadyRhythm: "До 2 визитов в неделю вначале, с интервалом не менее 48 часов и только при отсутствии покраснения.",
        reviewFew: "Оцените вид и реакцию кожи примерно после 2–4 сеансов, прежде чем продолжать.",
        reviewSeveral: "Пересмотрите прогресс примерно после 4–6 сеансов; не пытайтесь ускорить изменение оттенка.",
        reviewLong: "Цель заметно отличается. Пересмотрите план после 6 сеансов и учитывайте, что итоговый оттенок зависит от естественной реакции кожи."
      }
    }
  };

  const toneColors = ["#f6d7c8", "#e8bda8", "#cf9574", "#aa6d4d", "#7b4a32", "#4d2d23"];
  let language = localStorage.getItem("sunclub_lang") === "ru" ? "ru" : "ro";
  let currentStep = 0;
  const totalSteps = 6;

  const startScreen = document.getElementById("start-screen");
  const form = document.getElementById("guide-form");
  const progressRegion = document.getElementById("progress-region");
  const resultScreen = document.getElementById("result-screen");
  const nextButton = document.getElementById("next-button");
  const validation = document.getElementById("validation-message");

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
    if (!resultScreen.hidden) showResult();
  }

  function selected(name) {
    return form.querySelector('[name="' + name + '"]:checked');
  }

  function validateStep() {
    validation.textContent = "";
    if (currentStep === 1 && !selected("age")) return showValidation("validation");
    if (currentStep === 2 && !selected("currentTone")) return showValidation("validation");
    if (currentStep === 3 && !selected("burn")) return showValidation("validation");
    if (currentStep === 4 && !selected("targetTone")) return showValidation("validation");
    if (currentStep === 5 && !selected("lastExposure")) return showValidation("validation");
    if (currentStep === 6 && !selected("safety")) return showValidation("validationSafety");
    return true;
  }

  function showValidation(key) {
    validation.textContent = t(key);
    return false;
  }

  function updateControls() {
    if (!currentStep) return;
    document.getElementById("progress-text").textContent = currentStep + " / " + totalSteps;
    const progress = Math.round((currentStep / totalSteps) * 100);
    document.getElementById("progress-bar").style.width = progress + "%";
    const track = document.querySelector(".progress-track");
    track.setAttribute("aria-valuenow", String(currentStep));
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

  function showResult() {
    form.hidden = true;
    progressRegion.hidden = true;
    resultScreen.hidden = false;

    const answers = {
      age: selected("age")?.value,
      currentTone: Number(selected("currentTone")?.value || 1),
      targetTone: Number(selected("targetTone")?.value || 1),
      burn: selected("burn")?.value,
      lastExposure: selected("lastExposure")?.value,
      safety: [...form.querySelectorAll('[name="safety"]:checked')].map((input) => input.value)
    };

    let kind = "steady";
    if (answers.age === "minor") kind = "minor";
    else if (answers.safety.some((value) => value !== "none")) kind = "stop";
    else if (answers.burn === "always" || answers.currentTone === 1) kind = "stop";
    else if (answers.burn === "often" || ["never", "over3"].includes(answers.lastExposure)) kind = "cautious";

    const result = copy[language].result;
    const badge = document.getElementById("result-badge");
    badge.className = "result-badge";
    if (kind === "stop" || kind === "minor") badge.classList.add("is-stop");
    else if (kind === "cautious") badge.classList.add("is-caution");

    badge.textContent = result[kind + "Badge"];
    document.getElementById("result-title").textContent = result[kind + "Title"];
    document.getElementById("result-intro").textContent = result[kind + "Intro"];
    document.getElementById("result-start").textContent = result[kind + "Start"];
    document.getElementById("result-rhythm").textContent = result[kind + "Rhythm"];

    let review = result[kind + "Review"];
    if (!review) {
      const difference = Math.max(0, answers.targetTone - answers.currentTone);
      review = difference <= 1 ? result.reviewFew : difference <= 2 ? result.reviewSeveral : result.reviewLong;
    }
    document.getElementById("result-review").textContent = review;

    const eligible = !["minor", "stop"].includes(kind);
    document.getElementById("gift-card").hidden = !eligible;
    document.getElementById("result-plan").hidden = kind === "minor";
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
    if (currentStep === 1 && selected("age")?.value === "minor") {
      showResult();
      return;
    }
    if (currentStep < totalSteps) showStep(currentStep + 1);
    else showResult();
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

  form.addEventListener("change", (event) => {
    validation.textContent = "";
    if (event.target.name === "safety") {
      const none = form.querySelector('[name="safety"][value="none"]');
      if (event.target.value === "none" && event.target.checked) {
        form.querySelectorAll('[name="safety"]:not([value="none"])').forEach((input) => { input.checked = false; });
      } else if (event.target.value !== "none" && event.target.checked) {
        none.checked = false;
      }
    }
  });

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
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.getElementById("start-button").focus();
  });

  document.querySelectorAll(".language-button").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language));
  });

  document.getElementById("year").textContent = new Date().getFullYear();
  applyLanguage(language);
})();
