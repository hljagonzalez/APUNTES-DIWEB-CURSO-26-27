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
  var mark = el("span", "nav-mark", "DI");
  var brandText = el("span");
  brandText.appendChild(el("strong", null, "DIWEB"));
  brandText.appendChild(el("small", null, "2º DAW · 2026/27"));
  brand.appendChild(mark);
  brand.appendChild(brandText);

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
  unitIndex.appendChild(el("span", null, "UD"));
  unitIndex.appendChild(document.createTextNode("Índice de la unidad"));
  scroll.appendChild(unitIndex);

  LESSONS.forEach(function (lesson, i) {
    var item = link(unit + lesson.file, "nav-link", i === lessonIndex);
    item.appendChild(el("span", null, String(i + 1).padStart(2, "0")));
    item.appendChild(document.createTextNode(lesson.title));
    scroll.appendChild(item);
  });

  scroll.appendChild(el("p", "nav-label", "Próximamente"));
  LATER.forEach(function (unitLater) {
    var soon = el("div", "nav-soon");
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

  function pagerNodes(classPrev, classNext) {
    var wrap = el("div", "nav-pager");
    if (lessonIndex < 0) return null;
    if (lessonIndex === 0) {
      wrap.appendChild(el("span", "pager-gap " + classPrev, "Inicio"));
    } else {
      var prev = link(LESSONS[lessonIndex - 1].file, classPrev, false);
      prev.textContent = "← Anterior";
      prev.title = LESSONS[lessonIndex - 1].title;
      wrap.appendChild(prev);
    }
    wrap.appendChild(el("span", "pager-count", (lessonIndex + 1) + " / " + LESSONS.length));
    if (lessonIndex === LESSONS.length - 1) {
      wrap.appendChild(el("span", "pager-gap " + classNext, "Fin"));
    } else {
      var next = link(LESSONS[lessonIndex + 1].file, classNext, false);
      next.textContent = "Siguiente →";
      next.title = LESSONS[lessonIndex + 1].title;
      wrap.appendChild(next);
    }
    return wrap;
  }

  var sidePager = pagerNodes("pager-prev", "pager-next");
  if (sidePager) foot.appendChild(sidePager);

  nav.appendChild(brand);
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

  var mobilePager = pagerNodes("pager-prev", "pager-next");
  if (mobilePager) {
    mobilePager.id = "site-pager";
    document.body.classList.add("has-pager");
  }

  document.body.prepend(nav);
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
