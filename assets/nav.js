(function () {
  var LESSONS = [
    { file: "infografia_interactiva.html", title: "13 puntos clave" },
    { file: "guia_paletas_color.html", title: "Paletas de color" },
    { file: "sistema_tipografico.html", title: "Sistema tipográfico" },
    { file: "sistema_grids.html", title: "Sistema de grids" },
    { file: "sistema_iconografia.html", title: "Sistema de iconografía" },
    { file: "maquetacion_plantillas.html", title: "Maquetación y plantillas" },
    { file: "guia_figma.html", title: "Colaboración en Figma" },
    { file: "sistema_botones.html", title: "Sistema de botones" }
  ];

  var LATER = [
    ["UD2", "Accesibilidad Web"],
    ["UD3", "Usabilidad"],
    ["UD4", "Interfaces y estilos CSS"],
    ["UD5", "Contenido multimedia"],
    ["UD6", "Interactividad"]
  ];

  if (document.getElementById("site-nav")) return;

  var path = location.pathname.replace(/\/+$/, "");
  var file = path.split("/").pop() || "index.html";
  var inUnit = path.indexOf("UD1_Planificacion_Interfaces") !== -1;
  var root = inUnit ? "../" : "";
  var unit = inUnit ? "" : "UD1_Planificacion_Interfaces/";
  var lessonIndex = -1;

  LESSONS.forEach(function (lesson, i) {
    if (inUnit && lesson.file === file) lessonIndex = i;
  });

  var onHome = !inUnit && (file === "index.html" || file === "");
  var onPresentation = !inUnit && file === "presentacion_modulo.html";
  var onUnitIndex = inUnit && file === "index.html";

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function link(href, className, current) {
    var node = el("a", className);
    node.href = href;
    if (current) node.setAttribute("aria-current", "page");
    return node;
  }

  var nav = el("nav", null);
  nav.id = "site-nav";
  nav.setAttribute("aria-label", "Temario del módulo");

  var brand = link(root + "index.html", "nav-brand", onHome);
  var brandText = el("span");
  brandText.appendChild(el("strong", null, "DIWEB"));
  brandText.appendChild(el("small", null, "2º DAW · 2026/27"));
  brand.appendChild(brandText);

  var collapse = el("button", "nav-collapse");
  collapse.type = "button";
  collapse.setAttribute("aria-controls", "site-nav");
  collapse.innerHTML =
    '<svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" focusable="false">' +
    '<rect x="2.5" y="3.5" width="15" height="13" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.5"/>' +
    '<path d="M7.5 3.5v13" stroke="currentColor" stroke-width="1.5"/></svg>';

  var head = el("div", "nav-head");
  head.appendChild(brand);

  var scroll = el("div", "nav-scroll");
  scroll.appendChild(el("p", "nav-label", "Módulo"));

  var home = link(root + "index.html", "nav-link is-plain", onHome);
  home.textContent = "Inicio";
  scroll.appendChild(home);

  var presentation = link(root + "presentacion_modulo.html", "nav-link is-plain", onPresentation);
  presentation.textContent = "Presentación";
  scroll.appendChild(presentation);

  scroll.appendChild(el("p", "nav-label", "UD1 · Planificación"));

  var unitIndex = link(unit + "index.html", "nav-link", onUnitIndex);
  unitIndex.title = "Índice de la unidad";
  unitIndex.appendChild(el("span", null, "UD"));
  unitIndex.appendChild(document.createTextNode("Índice de la unidad"));
  scroll.appendChild(unitIndex);

  LESSONS.forEach(function (lesson, i) {
    var item = link(unit + lesson.file, "nav-link", i === lessonIndex);
    item.title = lesson.title;
    item.appendChild(el("span", null, String(i + 1).padStart(2, "0")));
    item.appendChild(document.createTextNode(lesson.title));
    scroll.appendChild(item);
  });

  scroll.appendChild(el("p", "nav-label", "Próximamente"));
  LATER.forEach(function (unitLater) {
    var soon = el("div", "nav-soon");
    soon.title = unitLater[1] + " (próximamente)";
    soon.appendChild(el("span", null, unitLater[0]));
    soon.appendChild(document.createTextNode(unitLater[1]));
    scroll.appendChild(soon);
  });

  var foot = el("div", "nav-foot");
  var survey = link(
    "https://forms.gle/F17dSqFPrn9hga1aA",
    null,
    false
  );
  survey.target = "_blank";
  survey.rel = "noopener noreferrer";
  survey.textContent = "Encuesta inicial";
  var repo = link(
    "https://github.com/hljagonzalez/APUNTES-DIWEB-CURSO-26-27",
    null,
    false
  );
  repo.target = "_blank";
  repo.rel = "noopener noreferrer";
  repo.textContent = "Repositorio";
  foot.appendChild(survey);
  foot.appendChild(repo);

  function pagerLink(href, className, labelText, arrowFirst, tip) {
    var node = link(href, className, false);
    node.title = tip || labelText;
    var arrow = el("span", "pager-arrow", arrowFirst ? "←" : "→");
    var label = el("span", "pager-label", labelText);
    if (arrowFirst) {
      node.appendChild(arrow);
      node.appendChild(label);
    } else {
      node.appendChild(label);
      node.appendChild(arrow);
    }
    return node;
  }

  function pagerNodes(classPrev, classNext, withTitles) {
    var wrap = el("div", "nav-pager");
    if (lessonIndex < 0) return null;
    var prevTitle = lessonIndex === 0 ? "Índice de la unidad" : LESSONS[lessonIndex - 1].title;
    var prevHref = lessonIndex === 0 ? "index.html" : LESSONS[lessonIndex - 1].file;
    var prevLabel = withTitles ? prevTitle : (lessonIndex === 0 ? "Índice" : "Anterior");
    wrap.appendChild(pagerLink(prevHref, classPrev, prevLabel, true, prevTitle));
    wrap.appendChild(el("span", "pager-count", (lessonIndex + 1) + " / " + LESSONS.length));
    if (lessonIndex === LESSONS.length - 1) {
      wrap.appendChild(el("span", "pager-gap " + classNext));
    } else {
      var nextTitle = LESSONS[lessonIndex + 1].title;
      wrap.appendChild(pagerLink(LESSONS[lessonIndex + 1].file, classNext, withTitles ? nextTitle : "Siguiente", false, nextTitle));
    }
    return wrap;
  }

  var sidePager = pagerNodes("pager-prev", "pager-next", false);
  if (sidePager) foot.appendChild(sidePager);

  nav.appendChild(head);
  nav.appendChild(scroll);
  nav.appendChild(foot);

  var toggle = el("button");
  toggle.id = "site-toggle";
  toggle.type = "button";
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-controls", "site-nav");
  toggle.appendChild(el("span", "burger"));
  var toggleLabel = "Temario";
  if (lessonIndex >= 0) toggleLabel = LESSONS[lessonIndex].title;
  else if (onPresentation) toggleLabel = "Presentación";
  else if (onUnitIndex) toggleLabel = "UD1";
  else if (onHome) toggleLabel = "Inicio";
  toggle.appendChild(el("span", null, toggleLabel));

  var backdrop = el("div");
  backdrop.id = "site-backdrop";

  var mobilePager = pagerNodes("pager-prev", "pager-next", true);
  if (mobilePager) {
    mobilePager.id = "site-pager";
    document.body.classList.add("has-pager");
  }

  document.body.prepend(nav);
  document.body.prepend(collapse);
  document.body.prepend(toggle);
  document.body.appendChild(backdrop);
  if (mobilePager) document.body.appendChild(mobilePager);

  if (lessonIndex >= 0) {
    var lessonHeader = document.querySelector(".main-header, .container > header");
    if (lessonHeader && !lessonHeader.querySelector(".leccion-kicker")) {
      var kicker = el(
        "p",
        "leccion-kicker",
        "UD1 · Recurso " + String(lessonIndex + 1).padStart(2, "0") + " de " + String(LESSONS.length).padStart(2, "0")
      );
      lessonHeader.insertBefore(kicker, lessonHeader.firstChild);
    }
  }

  var current = nav.querySelector('[aria-current="page"]');
  if (current) current.scrollIntoView({ block: "nearest" });

  var rootEl = document.documentElement;

  function setCollapsed(collapsed, remember) {
    rootEl.classList.toggle("nav-collapsed", collapsed);
    var label = collapsed ? "Mostrar el menú" : "Ocultar el menú";
    collapse.setAttribute("aria-label", label);
    collapse.setAttribute("aria-expanded", collapsed ? "false" : "true");
    collapse.title = label;
    if (remember) {
      try {
        localStorage.setItem("diweb-nav", collapsed ? "plegado" : "abierto");
      } catch (e) {}
    }
  }

  setCollapsed(rootEl.classList.contains("nav-collapsed"), false);
  requestAnimationFrame(function () {
    rootEl.classList.add("nav-ready");
  });

  collapse.addEventListener("click", function () {
    setCollapsed(!rootEl.classList.contains("nav-collapsed"), true);
  });

  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    backdrop.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  toggle.addEventListener("click", function () {
    setOpen(!nav.classList.contains("is-open"));
  });
  backdrop.addEventListener("click", function () {
    setOpen(false);
  });
  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setOpen(false);
  });
})();
