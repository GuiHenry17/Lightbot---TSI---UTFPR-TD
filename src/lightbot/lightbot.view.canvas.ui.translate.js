// i18next setup and DOM translation pass for elements with `data-i18n*` attributes.
import i18next from "i18next";
import { LIGHTBOT_TRANSLATIONS_DE } from "../locales/translations.de.js";
import { LIGHTBOT_TRANSLATIONS_EN } from "../locales/translations.en.js";
import { LIGHTBOT_TRANSLATIONS_ES } from "../locales/translations.es.js";
import { LIGHTBOT_TRANSLATIONS_FR } from "../locales/translations.fr.js";
import { LIGHTBOT_TRANSLATIONS_JP } from "../locales/translations.jp.js";
import { LIGHTBOT_TRANSLATIONS_PT_BR } from "../locales/translations.pt.js";
import { LIGHTBOT_TRANSLATIONS_SRB_LAT } from "../locales/translations.srb_lat.js";
import { LIGHTBOT_TRANSLATIONS_SRB_CIR } from "../locales/translations.srb_cir.js";

var LANGUAGE_STORAGE_KEY = "lightbot_language";
var FALLBACK_LANGUAGE = "en";
var TRANSLATION_RESOURCES = {
  en: {
    translation: LIGHTBOT_TRANSLATIONS_EN,
  },
  es: {
    translation: LIGHTBOT_TRANSLATIONS_ES,
  },
  de: {
    translation: LIGHTBOT_TRANSLATIONS_DE,
  },
  fr: {
    translation: LIGHTBOT_TRANSLATIONS_FR,
  },
  jp: { 
    translation: LIGHTBOT_TRANSLATIONS_JP
  },
  pt_br: { 
    translation: LIGHTBOT_TRANSLATIONS_PT_BR
  },
  "sr-Latn": {
    translation: LIGHTBOT_TRANSLATIONS_SRB_LAT,
  },
  "sr-Cyrl": {
    translation: LIGHTBOT_TRANSLATIONS_SRB_CIR,
  },
};

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(function (element) {
    var key = element.getAttribute("data-i18n");
    element.textContent = i18next.t(key);
  });

  document.querySelectorAll("[data-i18n-title]").forEach(function (element) {
    var key = element.getAttribute("data-i18n-title");
    element.setAttribute("title", i18next.t(key));
  });
}

// Browser language codes that don't match our resource keys directly.
var LANGUAGE_ALIASES = {
  pt: "pt_br",
  "pt-br": "pt_br",
  "pt-pt": "pt_br",
  ja: "jp",
};

function resolveLanguage(language) {
  if (!language) return null;
  var aliases = { srb_lat: "sr-Latn", srb_cir: "sr-Cyrl" };
  var normalized = String(language).trim().toLowerCase().replace("_", "-");
  if (aliases[normalized] && TRANSLATION_RESOURCES[aliases[normalized]]) return aliases[normalized];
  if (LANGUAGE_ALIASES[normalized]) return LANGUAGE_ALIASES[normalized];
  try {
    var locale = new Intl.Locale(normalized);
    var languageAndScript = locale.language + (locale.script ? "-" + locale.script : "");
    if (TRANSLATION_RESOURCES[languageAndScript]) return languageAndScript;
    if (locale.language === "sr" && !locale.script && TRANSLATION_RESOURCES["sr-Cyrl"]) return "sr-Cyrl";
    if (TRANSLATION_RESOURCES[locale.language]) return locale.language;
    if (LANGUAGE_ALIASES[locale.language]) return LANGUAGE_ALIASES[locale.language];
  } catch (e) {
    return null;
  }
  return null;
}

function detectBrowserLanguage() {
  var candidates = [];
  if (typeof navigator !== "undefined") {
    if (Array.isArray(navigator.languages)) candidates = candidates.concat(navigator.languages);
    if (navigator.language) candidates.push(navigator.language);
  }
  for (var i = 0; i < candidates.length; i++) {
    var resolved = resolveLanguage(candidates[i]);
    if (resolved) return resolved;
  }
  return null;
}

function getStoredLanguage() {
  try {
    return localStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch (e) {
    return null;
  }
}

function setStoredLanguage(language) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch (e) { }
}

function updateDocumentLanguage(language) {
  document.documentElement.setAttribute("lang", language);
}

function updateLanguageSelect(language) {
  var select = document.getElementById("languageSelect");
  if (!select) return;
  select.value = language;
}

function updateRunButtonTitle() {
  var btn = document.getElementById("runButton");
  if (!btn) return;
  var label = btn.querySelector(".lb-run-label");
  var key = label ? label.getAttribute("data-i18n") : "gameScreen.run";
  btn.setAttribute("title", i18next.t(key));
}

function handleLanguageChange(language) {
  var resolved = resolveLanguage(language) || FALLBACK_LANGUAGE;
  applyTranslations();
  updateDocumentLanguage(resolved);
  updateLanguageSelect(resolved);
  updateRunButtonTitle();
  setStoredLanguage(resolved);
}

function initLanguageSelect() {
  var select = document.getElementById("languageSelect");
  if (!select) return;
  select.addEventListener("change", function () {
    var resolved = resolveLanguage(select.value) || FALLBACK_LANGUAGE;
    if (resolved === i18next.language) return;
    i18next.changeLanguage(resolved).catch(function (e) {
      console.error("Failed to change language:", e);
    });
  });
}

export function initI18n() {
  var storedLanguage = resolveLanguage(getStoredLanguage()) || detectBrowserLanguage() || FALLBACK_LANGUAGE;
  i18next.on("languageChanged", handleLanguageChange);

  return i18next
    .init({
      lng: storedLanguage,
      fallbackLng: FALLBACK_LANGUAGE,
      resources: TRANSLATION_RESOURCES,
    })
    .then(function () {
      handleLanguageChange(i18next.language);
      initLanguageSelect();
    });
}
