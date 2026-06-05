import {
  destroyOdontogram,
  exportStatusPayload,
  getActiveToothNumber,
  getSelectedToothNumbers,
  importStatusPayload,
  initOdontogram,
  registerPlugins,
  setNotesEnabled,
  setNumberingSystem as setEngineNumbering,
  setReadOnly,
} from "../React-Odontogram-Modul/src/odontogram";
import { getI18nLanguage, onI18nChange, setI18nLanguage, t } from "../React-Odontogram-Modul/src/i18n/useI18n";
import icon8Url from "../React-Odontogram-Modul/src/assets/icon-svgs/icon_8.svg";
import iconGumUrl from "../React-Odontogram-Modul/src/assets/icon-svgs/icon_gum.svg";
import iconNoSelectionUrl from "../React-Odontogram-Modul/src/assets/icon-svgs/icon_no_selection.svg";
import iconOcclUrl from "../React-Odontogram-Modul/src/assets/icon-svgs/icon_occl.svg";
import iconPulpUrl from "../React-Odontogram-Modul/src/assets/icon-svgs/icon_pulp.svg";

const LANGUAGE_OPTIONS = [
  { value: "uz", labelKey: "language.uz" },
  { value: "ru", labelKey: "language.ru" },
  { value: "en", labelKey: "language.en" },
];

const NUMBERING_OPTIONS = [
  { value: "FDI", labelKey: "numbering.fdi" },
  { value: "UNIVERSAL", labelKey: "numbering.universal" },
  { value: "PALMER", labelKey: "numbering.palmer" },
];

const THEME_SUN = `
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="4"></circle>
  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
</svg>`;

const THEME_MOON = `
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
</svg>`;

let currentLanguage = "uz";
let currentNumbering = "FDI";
let darkMode = false;

function $(selector) {
  return document.querySelector(selector);
}

function tFor(key, params) {
  return t(key, currentLanguage, params);
}

function setMenuOpen(menuId, buttonId, open) {
  const menu = $(`#${menuId}`);
  const button = $(`#${buttonId}`);
  if (!menu || !button) return;
  menu.classList.toggle("hidden", !open);
  button.setAttribute("aria-expanded", String(open));
}

function closeMenus() {
  setMenuOpen("languageMenu", "languageButton", false);
  setMenuOpen("numberingMenu", "numberingButton", false);
}

function renderThemeButton() {
  const button = $("#themeToggle");
  if (!button) return;
  const label = darkMode ? tFor("theme.light") : tFor("theme.dark");
  button.setAttribute("title", label);
  button.setAttribute("aria-label", label);
  button.innerHTML = darkMode ? THEME_SUN : THEME_MOON;
}

function renderLanguageMenu() {
  const menu = $("#languageMenu");
  const button = $("#languageButton");
  if (!menu || !button) return;

  menu.innerHTML = "";
  for (const option of LANGUAGE_OPTIONS) {
    const item = document.createElement("button");
    item.className = "dropdown-item";
    item.type = "button";
    item.setAttribute("role", "menuitemradio");
    item.setAttribute("aria-checked", String(currentLanguage === option.value));
    item.textContent = tFor(option.labelKey);
    item.addEventListener("click", () => {
      currentLanguage = option.value;
      setI18nLanguage(option.value);
      closeMenus();
      renderStaticTexts();
    });
    menu.appendChild(item);
  }

  const selected = LANGUAGE_OPTIONS.find((option) => option.value === currentLanguage) ?? LANGUAGE_OPTIONS[0];
  button.textContent = `${tFor("language.label")}: ${tFor(selected.labelKey)}`;
}

function renderNumberingMenu() {
  const menu = $("#numberingMenu");
  const button = $("#numberingButton");
  if (!menu || !button) return;

  menu.innerHTML = "";
  for (const option of NUMBERING_OPTIONS) {
    const item = document.createElement("button");
    item.className = "dropdown-item";
    item.type = "button";
    item.setAttribute("role", "menuitemradio");
    item.setAttribute("aria-checked", String(currentNumbering === option.value));
    item.textContent = tFor(option.labelKey);
    item.addEventListener("click", () => {
      currentNumbering = option.value;
      setEngineNumbering(option.value);
      closeMenus();
      renderStaticTexts();
    });
    menu.appendChild(item);
  }

  const selected = NUMBERING_OPTIONS.find((option) => option.value === currentNumbering) ?? NUMBERING_OPTIONS[0];
  button.textContent = `${tFor("numbering.label")}: ${tFor(selected.labelKey)}`;
}

function renderStaticTexts() {
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (key) node.textContent = tFor(key);
  });

  renderLanguageMenu();
  renderNumberingMenu();
  renderThemeButton();

  const toothGrid = $("#toothGrid");
  toothGrid?.setAttribute("aria-label", tFor("chart.aria.toothGrid"));

  const chartHint = document.querySelector(".chart-hint");
  if (chartHint) {
    chartHint.textContent = tFor("chart.hint");
  }

  const activeToothLabel = $("#activeToothLabel");
  if (activeToothLabel && activeToothLabel.textContent?.trim() === "-") {
    activeToothLabel.textContent = tFor("selection.none");
  }

  const occl = $("#btnOcclView");
  occl?.setAttribute("title", tFor("chart.actions.occlusal"));
  occl?.setAttribute("aria-label", tFor("chart.actions.occlusal"));

  const wisdom = $("#btnWisdomVisible");
  wisdom?.setAttribute("title", tFor("chart.actions.wisdom"));
  wisdom?.setAttribute("aria-label", tFor("chart.actions.wisdom"));

  const bone = $("#btnBoneVisible");
  bone?.setAttribute("title", tFor("chart.actions.bone"));
  bone?.setAttribute("aria-label", tFor("chart.actions.bone"));

  const pulp = $("#btnPulpVisible");
  pulp?.setAttribute("title", tFor("chart.actions.pulp"));
  pulp?.setAttribute("aria-label", tFor("chart.actions.pulp"));

  const clearChart = $("#btnSelectNoneChart");
  clearChart?.setAttribute("title", tFor("chart.actions.clearSelection"));
  clearChart?.setAttribute("aria-label", tFor("chart.actions.clearSelection"));
}

function setIconSources() {
  const occl = $("#btnOcclView");
  const wisdom = $("#btnWisdomVisible");
  const bone = $("#btnBoneVisible");
  const pulp = $("#btnPulpVisible");
  const clear = document.getElementById("iconNoSelection");

  occl?.setAttribute("data-icon-src", iconOcclUrl);
  wisdom?.setAttribute("data-icon-src", icon8Url);
  bone?.setAttribute("data-icon-src", iconGumUrl);
  pulp?.setAttribute("data-icon-src", iconPulpUrl);

  if (clear) {
    clear.src = iconNoSelectionUrl;
  }
}

function wireTopbar() {
  $("#languageButton")?.addEventListener("click", (event) => {
    event.stopPropagation();
    const expanded = $("#languageButton")?.getAttribute("aria-expanded") === "true";
    closeMenus();
    setMenuOpen("languageMenu", "languageButton", !expanded);
  });

  $("#numberingButton")?.addEventListener("click", (event) => {
    event.stopPropagation();
    const expanded = $("#numberingButton")?.getAttribute("aria-expanded") === "true";
    closeMenus();
    setMenuOpen("numberingMenu", "numberingButton", !expanded);
  });

  $("#themeToggle")?.addEventListener("click", () => {
    darkMode = !darkMode;
    document.documentElement.classList.toggle("dark", darkMode);
    renderThemeButton();
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    const languageDropdown = $("#languageDropdown");
    const numberingDropdown = $("#numberingDropdown");
    if (!languageDropdown?.contains(target) && !numberingDropdown?.contains(target)) {
      closeMenus();
    }
  });
}

async function boot() {
  currentLanguage = getI18nLanguage() || "uz";
  if (!LANGUAGE_OPTIONS.some((option) => option.value === currentLanguage)) {
    currentLanguage = "uz";
  }
  currentNumbering = "FDI";
  darkMode = document.documentElement.classList.contains("dark");

  setI18nLanguage(currentLanguage);
  setIconSources();
  renderStaticTexts();
  wireTopbar();

  onI18nChange((lang) => {
    currentLanguage = lang;
    renderStaticTexts();
  });

  await initOdontogram();
  setEngineNumbering(currentNumbering);
  registerPlugins([]);
  setReadOnly(false);
  setNotesEnabled(true);

  if (window.__ODONTOGRAM_INITIAL_STATE__) {
    importStatusPayload(window.__ODONTOGRAM_INITIAL_STATE__);
  }

  const grid = $("#toothGrid");
  if (grid && !grid.children.length) {
    throw new Error("Odontogram grid yuklanmadi.");
  }
}

window.odontogramApp = {
  getStatusPayload: () => exportStatusPayload(),
  loadStatusPayload: (payload) => importStatusPayload(payload),
  getActiveTooth: () => getActiveToothNumber(),
  getSelectedTeeth: () => getSelectedToothNumbers(),
};

void boot().catch((error) => {
  console.error(error);
  const grid = $("#toothGrid");
  if (grid) {
    grid.innerHTML = `<div style="padding:24px;color:#b91c1c;font-weight:700;">Odontogram yuklanmadi. Sahifani yangilang.</div>`;
  }
});
window.addEventListener("beforeunload", () => destroyOdontogram());
