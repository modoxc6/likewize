/* @ds-bundle: {"format":3,"namespace":"LikewizeDesignSystem_c61cfa","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"ac0383960a87","components/core/Badge.jsx":"1acc95bb8157","components/core/Button.jsx":"15017d24d25a","components/core/Card.jsx":"6d21d70033f4","components/feedback/Alert.jsx":"b5bf665643f0","components/forms/Checkbox.jsx":"d98284232375","components/forms/Input.jsx":"910ab747cb67","components/forms/Switch.jsx":"300c83831403","components/icons/Icon.jsx":"10cf4ca3039d","components/navigation/Tabs.jsx":"cd30a5ddd7e2","ui_kits/moments-app/app.jsx":"e0ff7ff89e97","ui_kits/moments-app/screens.jsx":"b32fb71c2796"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LikewizeDesignSystem_c61cfa = window.LikewizeDesignSystem_c61cfa || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useOnceStyle(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
const CSS = `
.lw-avatar{
  display:inline-flex; align-items:center; justify-content:center;
  font-family:var(--lw-font-sans); font-weight:var(--lw-fw-bold);
  border-radius:50%; overflow:hidden; background:var(--lw-pink-300); color:#000;
  user-select:none; flex:none; line-height:1;
}
.lw-avatar img{ width:100%; height:100%; object-fit:cover; }
.lw-avatar--blue{ background:var(--lw-blue-600); color:#fff; }
.lw-avatar--frost{ background:var(--lw-frost-100); color:var(--lw-blue-700); }
.lw-avatar--sm{ width:32px; height:32px; font-size:13px; }
.lw-avatar--md{ width:44px; height:44px; font-size:17px; }
.lw-avatar--lg{ width:64px; height:64px; font-size:24px; }
`;
function Avatar({
  src,
  alt = "",
  name = "",
  size = "md",
  tone = "pink",
  className = "",
  ...rest
}) {
  useOnceStyle("lw-avatar-css", CSS);
  const initials = name ? name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join("").toUpperCase() : "";
  const cls = ["lw-avatar", `lw-avatar--${size}`, tone !== "pink" ? `lw-avatar--${tone}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt || name
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useOnceStyle(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
const CSS = `
.lw-badge{
  display:inline-flex; align-items:center; gap:.4em;
  font-family:var(--lw-font-sans); font-weight:var(--lw-fw-bold);
  font-size:var(--lw-text-xs); letter-spacing:.02em; line-height:1;
  padding:5px 10px; border-radius:var(--lw-radius-pill); white-space:nowrap;
}
.lw-badge__dot{ width:6px; height:6px; border-radius:50%; background:currentColor; }
.lw-badge--pink{ background:var(--lw-pink-100); color:var(--lw-pink-600); }
.lw-badge--blue{ background:var(--lw-blue-50); color:var(--lw-blue-600); }
.lw-badge--neutral{ background:var(--lw-gray-100); color:var(--lw-gray-700); }
.lw-badge--solid{ background:var(--lw-blue-600); color:#fff; }
.lw-badge--success{ background:var(--lw-success-bg); color:var(--lw-success); }
.lw-badge--warning{ background:var(--lw-warning-bg); color:var(--lw-warning); }
.lw-badge--danger{ background:var(--lw-danger-bg); color:var(--lw-danger); }
`;
function Badge({
  children,
  variant = "neutral",
  dot = false,
  className = "",
  ...rest
}) {
  useOnceStyle("lw-badge-css", CSS);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["lw-badge", `lw-badge--${variant}`, className].filter(Boolean).join(" ")
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    className: "lw-badge__dot"
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Injects a component's CSS (with token vars) once into the document head. */
function useOnceStyle(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
const CSS = `
.lw-btn{
  --_bg:var(--accent); --_fg:var(--accent-contrast); --_bd:transparent;
  display:inline-flex; align-items:center; justify-content:center; gap:.5em;
  font-family:var(--lw-font-sans); font-weight:var(--lw-fw-bold);
  border:var(--lw-border-med) solid var(--_bd); background:var(--_bg); color:var(--_fg);
  border-radius:var(--lw-radius-pill); cursor:pointer; white-space:nowrap;
  text-decoration:none; line-height:1; letter-spacing:-0.01em;
  transition:background var(--lw-dur) var(--lw-ease), transform var(--lw-dur-fast) var(--lw-ease), box-shadow var(--lw-dur) var(--lw-ease);
}
.lw-btn:focus-visible{ outline:none; box-shadow:var(--lw-focus-ring); }
.lw-btn:active{ transform:translateY(1px); }
.lw-btn[disabled]{ opacity:.45; cursor:not-allowed; transform:none; }
/* sizes */
.lw-btn--sm{ font-size:var(--lw-text-sm); padding:0 16px; height:36px; }
.lw-btn--md{ font-size:var(--lw-text-base); padding:0 22px; height:44px; }
.lw-btn--lg{ font-size:var(--lw-text-md); padding:0 30px; height:54px; }
.lw-btn--block{ width:100%; }
/* variants */
.lw-btn--primary{ --_bg:var(--accent); --_fg:var(--accent-contrast); }
.lw-btn--primary:hover:not([disabled]){ --_bg:var(--accent-hover); }
.lw-btn--primary:active:not([disabled]){ --_bg:var(--accent-press); }
.lw-btn--highlight{ --_bg:var(--highlight); --_fg:var(--highlight-contrast); }
.lw-btn--highlight:hover:not([disabled]){ --_bg:var(--highlight-hover); }
.lw-btn--highlight:active:not([disabled]){ --_bg:var(--highlight-press); }
.lw-btn--secondary{ --_bg:var(--lw-white); --_fg:var(--lw-gray-900); --_bd:var(--border-strong); }
.lw-btn--secondary:hover:not([disabled]){ --_bg:var(--lw-gray-50); --_bd:var(--lw-gray-400); }
.lw-btn--ghost{ --_bg:transparent; --_fg:var(--accent); --_bd:transparent; }
.lw-btn--ghost:hover:not([disabled]){ --_bg:var(--lw-blue-50); }
.lw-btn__icon{ display:inline-flex; font-size:1.15em; }
`;
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  type = "button",
  as = "button",
  className = "",
  ...rest
}) {
  useOnceStyle("lw-btn-css", CSS);
  const Tag = as;
  const cls = ["lw-btn", `lw-btn--${variant}`, `lw-btn--${size}`, fullWidth ? "lw-btn--block" : "", className].filter(Boolean).join(" ");
  const tagProps = Tag === "button" ? {
    type,
    disabled
  } : {};
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, tagProps, rest), leftIcon ? /*#__PURE__*/React.createElement("span", {
    className: "lw-btn__icon"
  }, leftIcon) : null, children, rightIcon ? /*#__PURE__*/React.createElement("span", {
    className: "lw-btn__icon"
  }, rightIcon) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useOnceStyle(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
const CSS = `
.lw-card{
  background:var(--surface-card); border:1px solid var(--border);
  border-radius:var(--radius-card); box-shadow:var(--shadow-card);
  overflow:hidden; font-family:var(--lw-font-sans); color:var(--text-body);
}
.lw-card--flat{ box-shadow:none; }
.lw-card--ghost{ box-shadow:none; background:transparent; border-color:var(--border); }
.lw-card--brand{ background:var(--surface-brand-soft); border-color:var(--border-brand); box-shadow:none; }
.lw-card--interactive{ cursor:pointer; transition:box-shadow var(--lw-dur) var(--lw-ease), transform var(--lw-dur) var(--lw-ease), border-color var(--lw-dur) var(--lw-ease); }
.lw-card--interactive:hover{ box-shadow:var(--shadow-pop); transform:translateY(-2px); border-color:var(--border-strong); }
.lw-card__pad{ padding:var(--lw-space-5); }
`;
function Card({
  children,
  variant = "default",
  interactive = false,
  padded = true,
  className = "",
  ...rest
}) {
  useOnceStyle("lw-card-css", CSS);
  const cls = ["lw-card", variant !== "default" ? `lw-card--${variant}` : "", interactive ? "lw-card--interactive" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), padded ? /*#__PURE__*/React.createElement("div", {
    className: "lw-card__pad"
  }, children) : children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useOnceStyle(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
const CSS = `
.lw-alert{
  display:flex; gap:12px; align-items:flex-start; font-family:var(--lw-font-sans);
  border-radius:var(--lw-radius-md); padding:14px 16px; border:1px solid transparent;
}
.lw-alert__icon{ flex:none; width:22px; height:22px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-weight:900; font-size:13px; color:#fff; margin-top:1px; }
.lw-alert__body{ flex:1; min-width:0; }
.lw-alert__title{ font-weight:var(--lw-fw-bold); font-size:var(--lw-text-base); margin:0 0 2px; color:var(--lw-gray-900); }
.lw-alert__text{ font-size:var(--lw-text-sm); color:var(--lw-gray-700); margin:0; line-height:1.45; }
.lw-alert--info{ background:var(--lw-info-bg); border-color:var(--lw-blue-100); }
.lw-alert--info .lw-alert__icon{ background:var(--lw-blue-600); }
.lw-alert--success{ background:var(--lw-success-bg); border-color:#BFE5D2; }
.lw-alert--success .lw-alert__icon{ background:var(--lw-success); }
.lw-alert--warning{ background:var(--lw-warning-bg); border-color:#EFD8A6; }
.lw-alert--warning .lw-alert__icon{ background:var(--lw-warning); }
.lw-alert--danger{ background:var(--lw-danger-bg); border-color:#F2C2C5; }
.lw-alert--danger .lw-alert__icon{ background:var(--lw-danger); }
.lw-alert--brand{ background:var(--lw-blush-50); border-color:var(--lw-pink-200); }
.lw-alert--brand .lw-alert__icon{ background:var(--lw-pink-500); }
`;
const GLYPH = {
  info: "i",
  success: "✓",
  warning: "!",
  danger: "✕",
  brand: "★"
};
function Alert({
  variant = "info",
  title,
  children,
  icon,
  className = "",
  ...rest
}) {
  useOnceStyle("lw-alert-css", CSS);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["lw-alert", `lw-alert--${variant}`, className].filter(Boolean).join(" "),
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "lw-alert__icon"
  }, icon ?? GLYPH[variant]), /*#__PURE__*/React.createElement("div", {
    className: "lw-alert__body"
  }, title ? /*#__PURE__*/React.createElement("p", {
    className: "lw-alert__title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("p", {
    className: "lw-alert__text"
  }, children) : null));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useOnceStyle(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
const CSS = `
.lw-check{ display:inline-flex; align-items:flex-start; gap:10px; font-family:var(--lw-font-sans); cursor:pointer; user-select:none; }
.lw-check input{ position:absolute; opacity:0; width:0; height:0; }
.lw-check__box{
  width:22px; height:22px; border-radius:var(--lw-radius-xs); flex:none; margin-top:1px;
  border:var(--lw-border-thick) solid var(--border-strong); background:#fff;
  display:inline-flex; align-items:center; justify-content:center;
  transition:background var(--lw-dur) var(--lw-ease), border-color var(--lw-dur) var(--lw-ease);
}
.lw-check__box svg{ width:14px; height:14px; stroke:#fff; stroke-width:3.5; fill:none; opacity:0; transition:opacity var(--lw-dur-fast) var(--lw-ease); }
.lw-check input:checked + .lw-check__box{ background:var(--lw-blue-600); border-color:var(--lw-blue-600); }
.lw-check input:checked + .lw-check__box svg{ opacity:1; }
.lw-check input:focus-visible + .lw-check__box{ box-shadow:var(--lw-focus-ring); }
.lw-check--disabled{ opacity:.5; cursor:not-allowed; }
.lw-check__label{ font-size:var(--lw-text-base); color:var(--lw-gray-800); line-height:1.35; }
`;
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false,
  className = "",
  ...rest
}) {
  useOnceStyle("lw-check-css", CSS);
  return /*#__PURE__*/React.createElement("label", {
    className: ["lw-check", disabled ? "lw-check--disabled" : "", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "lw-check__box"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "4 12 10 18 20 6"
  }))), label ? /*#__PURE__*/React.createElement("span", {
    className: "lw-check__label"
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useOnceStyle(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
const CSS = `
.lw-field{ display:flex; flex-direction:column; gap:6px; font-family:var(--lw-font-sans); }
.lw-field__label{ font-size:var(--lw-text-sm); font-weight:var(--lw-fw-semibold); color:var(--lw-gray-800); }
.lw-field__req{ color:var(--lw-pink-600); margin-left:2px; }
.lw-input-wrap{ position:relative; display:flex; align-items:center; }
.lw-input{
  width:100%; box-sizing:border-box; font-family:inherit; font-size:var(--lw-text-base);
  color:var(--lw-gray-900); background:var(--lw-white);
  border:var(--lw-border-med) solid var(--border-strong); border-radius:var(--lw-radius-sm);
  padding:0 14px; height:46px; transition:border-color var(--lw-dur) var(--lw-ease), box-shadow var(--lw-dur) var(--lw-ease);
}
.lw-input::placeholder{ color:var(--lw-gray-400); }
.lw-input:hover:not(:disabled){ border-color:var(--lw-gray-400); }
.lw-input:focus{ outline:none; border-color:var(--lw-blue-600); box-shadow:var(--lw-focus-ring); }
.lw-input:disabled{ background:var(--lw-gray-100); color:var(--lw-gray-500); cursor:not-allowed; }
.lw-input--has-icon{ padding-left:42px; }
.lw-input__icon{ position:absolute; left:14px; color:var(--lw-gray-500); display:inline-flex; pointer-events:none; }
.lw-field--error .lw-input{ border-color:var(--lw-danger); }
.lw-field--error .lw-input:focus{ box-shadow:0 0 0 3px var(--lw-danger-bg); }
.lw-field__msg{ font-size:var(--lw-text-xs); color:var(--lw-gray-500); }
.lw-field--error .lw-field__msg{ color:var(--lw-danger); }
`;
function Input({
  label,
  hint,
  error,
  required = false,
  leftIcon,
  id,
  className = "",
  ...rest
}) {
  useOnceStyle("lw-input-css", CSS);
  const autoId = React.useId();
  const fieldId = id || autoId;
  const msg = error || hint;
  return /*#__PURE__*/React.createElement("div", {
    className: ["lw-field", error ? "lw-field--error" : "", className].filter(Boolean).join(" ")
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "lw-field__label",
    htmlFor: fieldId
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "lw-field__req"
  }, "*") : null) : null, /*#__PURE__*/React.createElement("div", {
    className: "lw-input-wrap"
  }, leftIcon ? /*#__PURE__*/React.createElement("span", {
    className: "lw-input__icon"
  }, leftIcon) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: ["lw-input", leftIcon ? "lw-input--has-icon" : ""].filter(Boolean).join(" ")
  }, rest))), msg ? /*#__PURE__*/React.createElement("span", {
    className: "lw-field__msg"
  }, msg) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useOnceStyle(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
const CSS = `
.lw-switch{ display:inline-flex; align-items:center; gap:10px; font-family:var(--lw-font-sans); cursor:pointer; user-select:none; }
.lw-switch input{ position:absolute; opacity:0; width:0; height:0; }
.lw-switch__track{
  width:46px; height:28px; border-radius:var(--lw-radius-pill); background:var(--lw-gray-300);
  position:relative; transition:background var(--lw-dur) var(--lw-ease); flex:none;
}
.lw-switch__thumb{
  position:absolute; top:3px; left:3px; width:22px; height:22px; border-radius:50%;
  background:#fff; box-shadow:var(--lw-shadow-sm);
  transition:transform var(--lw-dur) var(--lw-ease-out);
}
.lw-switch input:checked + .lw-switch__track{ background:var(--lw-blue-600); }
.lw-switch input:checked + .lw-switch__track .lw-switch__thumb{ transform:translateX(18px); }
.lw-switch input:focus-visible + .lw-switch__track{ box-shadow:var(--lw-focus-ring); }
.lw-switch--disabled{ opacity:.5; cursor:not-allowed; }
.lw-switch__label{ font-size:var(--lw-text-base); color:var(--lw-gray-800); }
`;
function Switch({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false,
  className = "",
  ...rest
}) {
  useOnceStyle("lw-switch-css", CSS);
  return /*#__PURE__*/React.createElement("label", {
    className: ["lw-switch", disabled ? "lw-switch--disabled" : "", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "lw-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lw-switch__thumb"
  })), label ? /*#__PURE__*/React.createElement("span", {
    className: "lw-switch__label"
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ── Likewize icons ──────────────────────────────────────────────────────────
   BRAND: the official Likewize spot/feature icon set (filled, 64-grid). These are
   the genuine brand glyphs — color is driven by currentColor, so the same path set
   serves both the "blue" and "white" colorways via the surrounding text color.
   UI: line control glyphs (Lucide, MIT) for chrome the brand spot set doesn't cover
   (chevrons, close, check, arrows, search, etc.), 24-grid, currentColor stroke. */

const UI = {
  "chevron-right": "<path d=\"m9 18 6-6-6-6\"/>",
  "chevron-left": "<path d=\"m15 18-6-6 6-6\"/>",
  "chevron-down": "<path d=\"m6 9 6 6 6-6\"/>",
  "chevron-up": "<path d=\"m18 15-6-6-6 6\"/>",
  "arrow-right": "<path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/>",
  "arrow-left": "<path d=\"M19 12H5\"/><path d=\"m12 19-7-7 7-7\"/>",
  "plus": "<path d=\"M5 12h14\"/><path d=\"M12 5v14\"/>",
  "minus": "<path d=\"M5 12h14\"/>",
  "check": "<path d=\"M20 6 9 17l-5-5\"/>",
  "x": "<path d=\"M18 6 6 18\"/><path d=\"m6 6 12 12\"/>",
  "search": "<circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21-4.3-4.3\"/>",
  "bell": "<path d=\"M10.268 21a2 2 0 0 0 3.464 0\"/><path d=\"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326\"/>",
  "lock": "<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/>",
  "map-pin": "<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/>",
  "user": "<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\"/><circle cx=\"12\" cy=\"7\" r=\"4\"/>",
  "home": "<path d=\"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/><path d=\"M9 22V12h6v10\"/>",
  "calendar": "<path d=\"M8 2v4\"/><path d=\"M16 2v4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/><path d=\"M3 10h18\"/>"
};
const BRAND = {
  "ai-technology": "<circle cx=\"32\" cy=\"5.28\" r=\"2.38\"></circle><g><path d=\"M63.23,30.98c-.11-2.51-2.2-5.32-4.82-5.34-.33,0-.63,0-.92.02-.06-.31-.11-.61-.17-.89-.01-.06-.03-.13-.04-.18-.93-4.22-4.09-7.57-8.24-8.74-.48-.14-.98-.24-1.54-.33l-.76-.11c-4.5-.63-9.03-.97-13.57-1.02v-4.55c0-.64-.52-1.16-1.16-1.16s-1.16.52-1.16,1.16v4.55c-4.53.05-9.06.39-13.56,1.02l-.77.11c-2.4.34-4.6,1.4-6.37,3.06-1.77,1.66-2.96,3.79-3.45,6.17-.07.31-.12.62-.18.91-.29-.02-.59-.02-.92-.02-2.62.01-4.7,2.83-4.82,5.34-.09,1.97-.09,2.98,0,4.95.11,2.51,2.2,5.32,4.82,5.34h.11c.31,0,.59,0,.87-.02.04.2.08.4.12.59.99,4.83,4.94,8.54,9.82,9.23l.76.11c5.23.74,10.56,1.08,15.87,1.02v7.76c0,.64.52,1.16,1.16,1.16,3.48,0,6.21-1.03,8.09-3.05,2.09-2.24,2.56-5.11,2.65-6.67.58-.07,1.14-.14,1.69-.22l.77-.11c2.4-.34,4.61-1.4,6.37-3.06,1.72-1.61,2.9-3.69,3.41-5.99.02-.07.03-.13.04-.2.04-.19.08-.38.11-.58.28.02.56.02.87.02h.11c2.62-.01,4.7-2.83,4.82-5.34h0c.09-1.97.09-2.99,0-4.95h0ZM5.6,38.94c-1.15,0-2.45-1.61-2.51-3.13-.09-1.9-.09-2.83,0-4.73.07-1.51,1.36-3.12,2.51-3.12h.1c.17,0,.32,0,.46,0-.04.31-.07.62-.11.94,0,.09-.02.17-.02.26-.03.26-.05.52-.07.79,0,.1-.02.2-.02.3-.02.34-.05.69-.06,1.03-.03.66-.05,1.32-.05,2.01,0,.42,0,.84.02,1.27,0,.08,0,.16,0,.25.02.41.04.82.06,1.23,0,.08.01.15.02.23.03.4.06.8.1,1.2,0,.03,0,.06,0,.09.04.42.09.83.15,1.25,0,.05.01.09.02.14-.18,0-.37,0-.6,0h0ZM55.04,41.41s-.01.07-.02.1c-.41,1.85-1.36,3.51-2.73,4.81-1.42,1.33-3.18,2.18-5.11,2.45l-.77.11c-.85.12-1.72.23-2.65.34-.61.07-1.06.61-1.02,1.23,0,.04.21,3.63-2.05,6.05-1.22,1.31-2.98,2.06-5.22,2.25v-7.73c0-.31-.13-.61-.35-.83-.22-.21-.51-.33-.81-.33h-.03c-5.57.12-11.18-.21-16.68-.98l-.76-.11c-3.92-.55-7.08-3.53-7.88-7.4-.11-.51-.21-1.05-.29-1.59-.35-2.14-.53-4.32-.53-6.49,0-.66.02-1.28.05-1.9.07-1.46.22-2.9.44-4.29.09-.6.2-1.22.34-1.89.39-1.91,1.35-3.62,2.76-4.95,1.42-1.33,3.19-2.18,5.11-2.45l.77-.11c9.56-1.34,19.25-1.34,28.81,0l.75.11c.45.07.86.15,1.24.26,3.33.94,5.87,3.62,6.61,7.02,0,.03.02.07.03.12.12.59.23,1.21.34,1.89.65,4.2.64,8.46-.05,12.67h0c-.09.53-.18,1.06-.29,1.59,0,.02,0,.03,0,.04h0ZM60.92,35.82c-.07,1.51-1.36,3.12-2.51,3.13-.23,0-.42,0-.6,0,0-.05.01-.09.02-.14.05-.4.1-.8.14-1.2,0-.04,0-.08.01-.12.04-.38.07-.76.1-1.14,0-.07.01-.15.02-.23.03-.39.05-.79.06-1.18,0-.08,0-.17,0-.25.01-.41.02-.81.02-1.22v-.02c0-.41,0-.81-.02-1.22,0-.09,0-.17,0-.25-.01-.39-.03-.79-.05-1.18,0-.08-.01-.15-.02-.23-.02-.38-.05-.75-.09-1.13,0-.04,0-.08-.01-.12-.04-.4-.08-.8-.13-1.2,0-.05,0-.09-.02-.14.16,0,.35,0,.56,0,1.15,0,2.45,1.61,2.51,3.13.09,1.9.09,2.82,0,4.73h0Z\"></path><path d=\"M37.14,37.95c-1.37,1.37-3.2,2.13-5.14,2.13s-3.77-.76-5.14-2.13c-.45-.45-1.18-.45-1.64,0-.45.45-.45,1.18,0,1.64,1.81,1.81,4.22,2.81,6.78,2.81s4.97-1,6.78-2.81c.45-.45.45-1.19,0-1.64s-1.18-.45-1.64,0h0Z\"></path><circle cx=\"40.01\" cy=\"28.99\" r=\"2.39\"></circle><circle cx=\"23.99\" cy=\"28.99\" r=\"2.39\"></circle></g>",
  "api": "<path d=\"M33.97,54.61c0,.45-.14.87-.38,1.2-.36.5-.95.81-1.62.81-.07,0-.15,0-.22,0-1.01-.11-1.78-.95-1.78-2,0-.26.05-.51.13-.73.26-.67.84-1.15,1.57-1.25.1-.02.2-.02.3-.02,1.12,0,2.01.96,2.01,2.01Z\"></path><path d=\"M46.05,54.61c0,.45-.14.87-.38,1.2-.36.5-.95.81-1.62.81-.07,0-.15,0-.22,0-1.01-.11-1.78-.95-1.78-2,0-.26.05-.51.13-.73.26-.67.84-1.15,1.57-1.25.1-.02.2-.02.3-.02,1.12,0,2.01.96,2.01,2.01Z\"></path><path d=\"M21.97,54.61c0,.45-.14.87-.38,1.2-.36.5-.95.81-1.62.81-.07,0-.15,0-.22,0-1.01-.11-1.78-.95-1.78-2,0-.26.05-.51.13-.73.26-.67.84-1.15,1.57-1.25.1-.02.2-.02.3-.02,1.12,0,2.01.96,2.01,2.01Z\"></path><path d=\"M43.39,38.33c5.79,0,10.5-4.71,10.5-10.5s-4.87-10.63-10.76-10.5c-1.38-5.74-6.6-9.94-12.6-9.94-6.58,0-12.05,4.9-12.84,11.33-4.38,1.09-7.57,5.07-7.57,9.66,0,5.49,4.46,9.95,9.95,9.95h4.94v5.82h-5.01c-.69,0-1.25.56-1.25,1.25v4.43c0,.7.56,1.25,1.25,1.25s1.25-.55,1.25-1.25v-3.18h5.01c.69,0,1.25-.56,1.25-1.25v-7.07h3.25v11.5c0,.7.55,1.25,1.25,1.25s1.25-.55,1.25-1.25v-11.5h3.24v7.07c0,.69.56,1.25,1.25,1.25h5.01v3.18c0,.7.56,1.25,1.25,1.25s1.25-.55,1.25-1.25v-4.43c0-.69-.56-1.25-1.25-1.25h-5.01v-5.82h4.39ZM20.07,35.83c-4.11,0-7.45-3.34-7.45-7.45,0-3.69,2.75-6.86,6.4-7.37l1.03-.15.05-1.03c.27-5.57,4.85-9.94,10.43-9.94,5.17,0,9.61,3.85,10.34,8.95l.18,1.23,1.23-.17c.37-.05.74-.07,1.11-.07,4.41,0,8,3.59,8,8s-3.59,8-8,8h-23.32Z\"></path>",
  "add-phone": "<g><path d=\"M44.18,45.85c-.7-.1-1.3.4-1.4,1.1-.3,3-.8,6.1-2.4,8.4-1.1,1.5-2.8,2.4-5.2,2.8-2.8.5-5.9.5-8.8.5h-1.2c-2.9,0-5.9,0-8.8-.5-2.5-.4-4.2-1.4-5.2-2.8-1.6-2.2-2-5.3-2.4-8.4-.5-4.8-.5-9.7-.5-14.8s0-10,.6-14.7c.3-3,.8-6.1,2.4-8.4,1.1-1.5,2.8-2.4,5.2-2.8,2.8-.5,5.8-.5,8.7-.5h1.2c2.9,0,5.9,0,8.8.5,2.5.4,4.2,1.4,5.2,2.8.5.8,1,1.7,1.3,2.7.2.7.9,1,1.6.8.7-.2,1-.9.8-1.6-.4-1.3-1-2.4-1.7-3.4-1.5-2-3.7-3.3-6.8-3.9-3.1-.5-6.2-.5-9.2-.5h-1.2c-3,0-6.1,0-9.2.5-3.1.6-5.4,1.8-6.8,3.9-1.9,2.7-2.5,6.2-2.8,9.5-.5,4.9-.6,9.9-.6,15s0,10.1.6,15c.4,3.3.9,6.8,2.8,9.5,1.5,2,3.7,3.3,6.8,3.8s6.2.5,9.2.5h1.8c2.8,0,5.8,0,8.6-.5,3.1-.6,5.4-1.8,6.8-3.8,1.9-2.7,2.5-6.2,2.8-9.5.1-.6-.4-1.2-1-1.2Z\"></path><path d=\"M29.78,12.75c0-.7-.6-1.2-1.2-1.2h-5.4c-.7,0-1.2.6-1.2,1.2s.6,1.2,1.2,1.2h5.4c.6.1,1.2-.5,1.2-1.2Z\"></path><circle cx=\"25.78\" cy=\"51.25\" r=\"2.5\"></circle></g><path d=\"M44.13,43.38c-7.8,0-14.1-6.3-14.1-14.1s6.3-14.1,14.1-14.1,14.1,6.4,14.1,14.1-6.3,14.1-14.1,14.1ZM44.13,17.57c-6.5,0-11.8,5.3-11.8,11.8s5.3,11.8,11.8,11.8,11.8-5.3,11.8-11.8-5.3-11.8-11.8-11.8Z\"></path><path d=\"M50.23,28.12h-4.9v-4.8c0-.6-.5-1.1-1.2-1.1s-1.2.5-1.2,1.1v4.8h-4.8c-.6,0-1.2.5-1.2,1.1s.5,1.1,1.2,1.1h4.8v4.8c0,.6.5,1.2,1.2,1.2s1.2-.5,1.2-1.2v-4.8h4.8c.6,0,1.2-.5,1.2-1.1s-.5-1.1-1.1-1.1Z\"></path>",
  "b2b": "<path d=\"M28.27,57.07c-.08.32-.29.59-.57.76l-5.76,3.39c-.2.12-.42.17-.63.17-.43,0-.85-.22-1.08-.61-.35-.6-.15-1.36.44-1.71l2.75-1.62c-11.65-3.27-19.42-14.6-18.35-27.32.06-.68.67-1.21,1.36-1.14.68.06,1.19.66,1.14,1.35-.99,11.73,6.29,22.14,17.12,24.86l-2.1-3.57c-.35-.59-.15-1.36.45-1.71.59-.35,1.36-.15,1.71.44l3.39,5.76c.17.28.21.63.13.95Z\"></path><path d=\"M57.49,35.5c-.09.62-.62,1.07-1.24,1.07-.05,0-.11,0-.17-.01-.69-.1-1.16-.73-1.07-1.41,1.75-12.45-5.47-23.49-16.96-26.35l2.1,3.57c.35.6.15,1.36-.44,1.71-.2.12-.42.18-.63.18-.43,0-.85-.22-1.08-.62l-3.39-5.76c-.35-.59-.15-1.36.44-1.71l5.76-3.39c.59-.35,1.36-.15,1.71.44.35.6.15,1.37-.44,1.72l-2.74,1.61c12.35,3.43,20.05,15.45,18.15,28.95Z\"></path><path d=\"M55.01,41.53h-1.11v-.9c0-2.39-1.95-4.35-4.35-4.35h-7.8c-2.4,0-4.35,1.96-4.35,4.35v.9h-1.12c-2.21,0-4.01,1.8-4.01,4.01v10.74c0,2.21,1.8,4,4.01,4h18.73c2.21,0,4.01-1.79,4.01-4v-10.74c0-2.21-1.8-4.01-4.01-4.01ZM39.9,40.63c0-1.02.83-1.85,1.85-1.85h7.8c1.02,0,1.85.83,1.85,1.85v.9h-11.5v-.9ZM34.77,45.54c0-.83.68-1.51,1.51-1.51h18.73c.84,0,1.51.68,1.51,1.51v1.88l-9.34,3.37c-.67.25-1.38.26-2.05.03l-10.36-3.44v-1.84ZM56.52,56.28c0,.83-.67,1.5-1.51,1.5h-18.73c-.83,0-1.51-.67-1.51-1.5v-6.26l9.57,3.17c.58.2,1.18.29,1.77.29.65,0,1.29-.11,1.92-.34l8.49-3.06v6.2Z\"></path><path d=\"M28.5,9.61h-1.12v-.9c0-2.4-1.95-4.35-4.35-4.35h-7.8c-2.4,0-4.35,1.95-4.35,4.35v.9h-1.11c-2.21,0-4.01,1.8-4.01,4.01v10.73c0,2.21,1.8,4.01,4.01,4.01h18.73c2.21,0,4.01-1.8,4.01-4.01v-10.73c0-2.21-1.8-4.01-4.01-4.01ZM13.38,8.71c0-1.02.83-1.85,1.85-1.85h7.8c1.02,0,1.85.83,1.85,1.85v.9h-11.5v-.9ZM8.26,13.62c0-.83.67-1.51,1.51-1.51h18.73c.83,0,1.51.68,1.51,1.51v1.87l-9.35,3.38c-.67.24-1.38.25-2.05.03l-10.35-3.43v-1.85ZM30.01,24.35c0,.83-.68,1.51-1.51,1.51H9.77c-.84,0-1.51-.68-1.51-1.51v-6.25l9.56,3.17c.58.19,1.18.29,1.77.29.65,0,1.3-.12,1.92-.34l8.5-3.08v6.21Z\"></path>",
  "benefits": "<g><path d=\"M54.69,20.02h-3.3v-3.3c0-.6-.5-1.1-1.1-1.1s-1.1.5-1.1,1.1v3.3h-3.3c-.6,0-1.1.5-1.1,1.1s.5,1.1,1.1,1.1h3.3v3.3c0,.6.5,1.1,1.1,1.1s1.1-.5,1.1-1.1v-3.3h3.3c.6,0,1.1-.5,1.1-1.1s-.5-1.1-1.1-1.1Z\"></path><path d=\"M46.69,25.22c-.4-.4-1-.4-1.5,0-.9.7-1.6,1.1-2.6,1.6l-.6.3-.6-.3c-5.2-2.5-9-7.8-10.4-12-.9-2.6-.9-4.9,0-6.3.7-1.1,2.1-1.8,3.6-1.7,1.3.1,2.5.8,3.7,2.1.9,1,1.7,2.1,2.3,3.3.2.5.4.9.8,1.1.6.4,1.3-.1,1.6-.6.4-.6.7-1.1,1-1.7.3-.6.7-1.1,1.1-1.6,1.2-1.5,2.5-2.3,3.9-2.5,1.5-.3,3.1.3,3.9,1.6.9,1.4.9,3.7,0,6.3,0,.1-.1.2-.1.4-.2.5,0,1,.4,1.3h0c.6.4,1.4.1,1.6-.5.1-.2.1-.3.2-.5,1.1-3.3,1-6.2-.2-8.2-1.1-1.7-3.1-2.7-5.1-2.7h-.4c-1.6,0-3.9.8-6.2,3.8l-1.1,1.4-1.1-1.4c-2.3-3-4.6-3.7-6.2-3.8h-.4c-2.1,0-4.1,1.1-5.1,2.7-1.2,1.9-1.3,4.9-.2,8.2,1.7,5.1,6.2,11.3,12.6,13.8h0s.3.1.4.1.46-.14.6-.2c1.07-.48,2.8-1.4,4.1-2.3.5-.4.5-1.2,0-1.7h0Z\"></path></g><g><path d=\"M62.44,29.6c-.82-.89-1.95-1.39-3.17-1.41h-.04c-1.19,0-2.34.49-3.16,1.34l-8.5,8.78c-.02-.57-.17-1.12-.43-1.65-.56-1.15-1.6-1.96-2.85-2.24l-11.01-2.45c-2.32-.52-4.78-.23-6.92.81l-5.63,2.73-1.28-3.95c-.21-.65-.91-1.01-1.57-.8l-7.79,2.52c-.32.1-.58.33-.73.62-.15.3-.18.64-.08.96l.22.68-8.26,2.79c-.66.22-1.01.93-.79,1.59.18.52.67.85,1.19.85.13,0,.26-.02.4-.07l8.23-2.78,5.48,16.95-6.67,2.14c-.66.21-1.02.92-.81,1.57.17.53.67.87,1.19.87.13,0,.26-.02.39-.06l6.67-2.15.31.96c.17.52.66.86,1.19.86.13,0,.26-.02.39-.06l7.79-2.52c.32-.1.58-.33.73-.62.15-.3.18-.64.08-.96l-5.5-16.98,5.95-2.89c1.63-.8,3.5-1.01,5.27-.62l11.01,2.45c.51.11.93.44,1.16.91.23.46.23,1,.01,1.47h0c-.35.75-1.09,1.22-1.92,1.23l-8.55.08c-.69,0-1.25.57-1.24,1.26,0,.69.56,1.24,1.25,1.24h.01l9.62-.07c.43,0,.86-.05,1.28-.16.07-.01.14-.03.21-.05h.01s.01,0,.02-.01c1.01-.27,1.94-.81,2.67-1.57l9.6-9.92c.36-.38.85-.63,1.38-.58.52.01,1,.22,1.36.61.68.73.67,1.88-.03,2.6l-10.45,10.8c-1.56,1.62-3.67,2.55-5.92,2.61l-13.68.4c-.69.02-1.24.6-1.22,1.29.02.68.58,1.21,1.25,1.21h.04l13.68-.4c2.91-.09,5.63-1.28,7.65-3.38l10.45-10.79c1.62-1.68,1.65-4.33.06-6.04ZM24.24,54.48l-5.41,1.76-.31-.95-6.27-19.36-.21-.65,5.42-1.76,1.31,4.03c.02.09.05.18.09.27l5.38,16.66Z\"></path><circle cx=\"20.69\" cy=\"52.76\" r=\"1.99\"></circle></g>",
  "better-for-planet": "<g><path d=\"M30.97,7.13c-14.31,0-25.94,11.64-25.94,25.94s11.64,25.94,25.94,25.94,25.94-11.64,25.94-25.94S45.27,7.13,30.97,7.13ZM39.41,11.21c-1.21.42-2.45,1.2-3.53,2.57-.92,1.17-1.18,1.06-2.95-.17-1.78-1.23-4.47-3.09-8.43-1.05-1.47.76-2.73.97-3.75.62-.45-.15-.8-.4-1.07-.65,3.35-1.85,7.2-2.9,11.28-2.9,2.97,0,5.82.56,8.44,1.58h.01ZM13.63,21.44c1.2.42,2.49.06,3.75-.29,1.12-.31,2.28-.63,2.89-.22.26.17.31.3.48.88.48,1.7,1.3,3.36,5.98,4.97,2.41.83,3.06,2.68,2.64,4.05-.36,1.17-1.61,2.32-3.97,1.69-1.08-.29-1.99-.19-2.7.27-1.19.77-1.43,2.27-1.66,3.71-.38,2.34-.73,3.47-2.35,3.76-1.9.34-2.6-1.15-3.55-4.86-.61-2.38-1.24-4.83-3.33-5.15-1.72-.26-3.14.45-4.22,1.37.27-4.45,1.8-8.56,4.22-12,.33.8.89,1.5,1.83,1.83h0ZM7.65,35.41c.47-.79,1.95-2.97,3.78-2.69.46.07,1.02,2.25,1.29,3.3.71,2.75,1.74,6.8,5.4,6.8.32,0,.66-.03,1.02-.1,3.55-.64,4.05-3.76,4.38-5.83.11-.69.3-1.84.55-2.01.04-.03.24-.07.7.05,3.8,1.01,6.29-1.05,7-3.39.78-2.56-.42-5.84-4.22-7.14-3.83-1.32-4.13-2.36-4.39-3.29-.19-.67-.45-1.58-1.5-2.27-1.57-1.05-3.45-.52-4.95-.1-.84.23-1.79.5-2.25.34-.51-.18-.59-1.3-.53-2.07,1.09-1.16,2.3-2.2,3.6-3.12.51.59,1.28,1.26,2.37,1.64,1.7.6,3.63.35,5.75-.74,2.63-1.35,4.2-.27,5.86.88.89.62,2.05,1.42,3.32,1.42.96,0,1.98-.45,3.01-1.76,2.09-2.66,5.16-2.08,5.92-1.88,3.71,2.43,6.69,5.87,8.54,9.94-.6.38-1.47.89-2.48,1.34-2.48,1.09-4.03.14-5.98-1.06-.96-.59-1.95-1.19-3.08-1.52-1.91-.56-3.76-.02-4.82,1.4-1.11,1.48-1.09,3.52.05,5.33,2.18,3.44,1.05,4.74-1.68,7.86-.91,1.04-1.93,2.21-2.96,3.65-2.01,2.82-2.24,5.76-.59,7.5,1.47,1.55,4.64,2.19,9.11-.67,1.65-1.06,3.05-1.35,4.16-.89,1.54.64,2.45,2.68,2.85,3.93-1.57,1.45-3.33,2.69-5.25,3.67-1.31-1-4.34-3-7.27-2.78-1.11.08-2.14.38-3.13.66-1.37.39-2.55.73-3.55.4-.66-.22-1.27-.78-1.91-1.37-1.26-1.15-2.82-2.58-5.4-2.07-1.79.35-3.21,1.63-4.05,2.59-4.79-3.84-8.05-9.52-8.69-15.95h.02ZM18.39,52.83c.63-.68,1.53-1.42,2.48-1.6,1.28-.25,2.03.36,3.23,1.46.77.7,1.64,1.5,2.8,1.89,1.74.59,3.42.11,5.04-.36.91-.26,1.77-.51,2.62-.57,1.42-.11,3.11.67,4.39,1.47-2.49.9-5.18,1.4-7.98,1.4-4.63,0-8.95-1.36-12.59-3.68h.01ZM48.81,48.26c-.65-1.51-1.83-3.41-3.79-4.23-1.92-.81-4.1-.44-6.49,1.08-2.99,1.91-5.14,1.91-5.95,1.06-.65-.68-.65-2.28.81-4.33.95-1.33,1.94-2.46,2.81-3.46,2.73-3.13,5.09-5.83,1.91-10.85-.58-.91-.64-1.86-.17-2.49.43-.58,1.23-.76,2.13-.5.81.24,1.62.73,2.48,1.26,2.06,1.26,4.61,2.82,8.29,1.21.94-.41,1.76-.87,2.41-1.26.76,2.3,1.18,4.76,1.18,7.32,0,5.79-2.12,11.1-5.61,15.19h-.01Z\"></path><path d=\"M60.48,12.17c-.3-.46-.85-.74-1.42-.7-.45.03-1.05.24-1.61,1.04-.56-.79-1.17-1.01-1.61-1.04-.56-.03-1.12.24-1.42.7-.31.49-.34,1.2-.08,2,.39,1.18,1.45,2.64,2.94,3.21h0s.04.01.05.02h.2s.04,0,.05-.02h0c1.49-.57,2.55-2.02,2.94-3.21.26-.8.24-1.51-.08-2h.02Z\"></path><path d=\"M8.18,54.8c-.45.03-1.05.24-1.61,1.04-.56-.79-1.17-1.01-1.61-1.04-.56-.03-1.12.24-1.42.7-.31.49-.34,1.2-.08,2,.39,1.18,1.45,2.64,2.94,3.21h.01s.04,0,.05.02h.2s.04,0,.05-.02h.01c1.49-.57,2.55-2.02,2.94-3.21.26-.8.24-1.51-.08-2-.3-.46-.85-.74-1.42-.7h.02Z\"></path></g><circle cx=\"49.61\" cy=\"5.77\" r=\"2.5\"></circle>",
  "box": "<path d=\"M57.02,28.89c0-.68,0-1.8-.04-2.73,0-.38-.03-.78-.04-1.16-.01-.4-.04-.79-.07-1.17-.03-.37-.06-.75-.1-1.12-.07-.85-.18-1.68-.35-2.52-.03-.18-.06-.37-.1-.55-.11-.59-.25-1.19-.44-1.77-.08-.3-.17-.58-.27-.86-.17-.58-.4-1.13-.65-1.67-.11-.27-.24-.54-.4-.79-.16-.3-.33-.59-.51-.88-.14-.27-.33-.52-.52-.76,0-.03-.01-.04-.04-.07-.33-.45-.69-.88-1.1-1.29-.25-.25-.54-.51-.82-.73-.85-.71-1.78-1.27-2.77-1.74-1.51-.71-3.17-1.19-4.88-1.5-.04-.01-.08-.03-.13-.03-1.65-.3-3.38-.45-5.05-.51-1.79-.08-3.56-.07-5.16-.06h-3.21c-1.58,0-3.31-.01-5.07.06-1.13.06-2.28.14-3.41.28-.42.06-.86.11-1.29.18-.3.04-.58.1-.86.17-.3.04-.58.1-.86.17-.08.01-.17.04-.24.06-.35.08-.69.18-1.03.28-.41.13-.82.25-1.22.41-.35.13-.71.27-1.05.44-.04,0-.07.03-.11.04-.25.11-.49.24-.73.37-.73.4-1.41.85-2.04,1.37-.33.24-.62.51-.92.81-.25.25-.51.54-.73.82-.23.27-.44.55-.64.83-.13.18-.24.37-.35.57-.16.23-.28.47-.41.71-.14.25-.27.52-.4.79-.13.28-.25.58-.37.88-.14.34-.25.68-.37,1.03-.34,1.07-.59,2.18-.79,3.29-.18,1.12-.3,2.26-.38,3.39-.16,2.26-.13,4.49-.11,6.49,0,0-.01,4.2-.01,4.71,0,.88.01,1.8.04,2.73.01.38.03.78.04,1.16.01.4.04.79.07,1.17.03.37.06.75.1,1.12.04.41.08.83.14,1.24.06.42.13.85.21,1.27.03.18.06.37.1.55.13.59.27,1.19.44,1.77.08.3.17.58.27.86.18.58.41,1.13.65,1.67.13.27.25.54.4.79.16.3.33.59.51.88.17.25.33.52.52.76,0,.01,0,.01,0,.03s.01.03.03.04c.33.44.68.85,1.06,1.23.33.33.68.64,1.03.92.37.3.76.57,1.16.82,2.37,1.47,5.17,2.2,8.08,2.56,1.14.14,2.29.23,3.42.27,1.79.08,3.55.07,5.14.06h3.22c1.57,0,3.29,0,5.07-.06,1.12-.06,2.25-.14,3.38-.28h.01c.42-.06.86-.11,1.29-.18.66-.11,1.31-.24,1.96-.4.35-.08.69-.18,1.03-.28.41-.11.82-.25,1.22-.41.35-.13.71-.27,1.05-.44.3-.13.58-.25.85-.41.4-.22.78-.46,1.15-.71.29-.2.57-.41.85-.63.01,0,.02-.02.04-.03.07-.05.13-.12.2-.18.24-.2.49-.39.71-.61.25-.27.51-.55.73-.83.11-.13.23-.25.33-.4.01-.01.01-.03.03-.04.1-.13.2-.25.28-.4.08-.13.17-.27.25-.4.04-.06.07-.11.1-.17.16-.23.28-.47.41-.71.14-.25.27-.52.4-.79.14-.28.27-.58.37-.88.14-.34.25-.68.37-1.03.35-1.06.61-2.16.79-3.29.06-.31.1-.61.14-.92.02-.15.03-.31.05-.47.08-.67.14-1.34.2-2.01.06-.75.1-1.48.11-2.22.04-1.5.02-6.73.01-8.98l.02.02ZM30.33,9.49h3.23c.62-.01,1.24-.02,1.88-.02h.34v18.64l-3.21-1.57c-.34-.17-.75-.17-1.09,0l-3.23,1.57h-.01v-5.28l-.02-2.5v-10.85h.12c.68,0,1.35,0,1.99.01ZM54.4,39.89c-.05.64-.11,1.27-.19,1.91-.01.09-.04.42-.04.42-.04.27-.07.54-.12.81-.18,1.12-.41,2.07-.7,2.95-.1.31-.19.58-.3.86-.02.06-.05.12-.07.18-.06.17-.13.35-.23.54-.13.27-.23.5-.35.71-.11.2-.19.36-.28.5-.05.08-.1.16-.15.24,0,0-.27.42-.29.45-.03.05-.08.1-.12.15,0,0-.08.1-.11.15-.04.05-.09.1-.13.15-.03.03-.07.08-.09.11-.17.21-.36.42-.55.61-.04.04-.07.07-.1.11-.06.05-.46.38-.46.38-.03.03-.2.18-.22.19-.19.15-.41.32-.64.47-.33.22-.64.42-.96.6-.23.13-.43.22-.63.3-.04.02-.08.04-.12.06-.25.12-.51.23-.78.32-.38.15-.71.26-1.04.35-.36.1-.64.19-.94.26-.54.13-1.13.25-1.81.36-.34.06-.71.11-1.07.15,0,0-.1.01-.12.01-.95.12-1.97.2-3.19.27-.99.04-1.99.05-2.96.05-.68,0-1.34,0-1.97-.01h-3.25c-.62.01-1.24.02-1.87.02-1.22,0-2.22-.02-3.16-.06-1.14-.04-2.22-.13-3.23-.25-2.95-.36-5.26-1.08-7.08-2.2-.24-.16-.6-.39-.9-.64-.31-.25-.59-.5-.83-.74-.27-.27-.52-.56-.76-.87-.06-.09-.12-.18-.19-.26-.08-.1-.14-.2-.21-.31l-.16-.25c-.12-.19-.25-.42-.37-.65-.14-.26-.25-.48-.35-.7-.23-.51-.4-.94-.53-1.35-.11-.31-.18-.55-.25-.8-.16-.53-.28-1.07-.4-1.6-.04-.16-.05-.28-.07-.41,0-.04-.01-.07-.02-.11-.07-.37-.14-.74-.18-1.11-.05-.34-.08-.67-.12-1l-.02-.17c-.04-.34-.06-.66-.09-.98-.03-.41-.06-.77-.07-1.14l-.04-1.17c-.03-.89-.04-1.78-.04-2.63,0-.25.01-5.12.01-5.12-.01-1.82-.03-3.88.11-5.9.09-1.25.21-2.26.35-3.16.19-1.06.42-2.04.71-2.95.09-.27.18-.55.29-.82.12-.33.23-.58.34-.82.08-.17.18-.39.3-.6.11-.2.19-.36.29-.51.04-.06.08-.11.11-.17.08-.13.15-.26.24-.38.15-.22.32-.44.5-.65.21-.26.4-.47.59-.66.25-.24.45-.42.64-.56.04-.03.08-.06.12-.1.48-.4,1.01-.76,1.61-1.08.17-.09.33-.18.5-.26.01,0,.02,0,.03-.01.11-.04.14-.05.24-.11.21-.11.46-.21.77-.32.4-.16.75-.26,1.09-.37.28-.08.57-.17.87-.24.05-.01.25-.06.28-.07.2-.05.4-.09.61-.12.08-.01.17-.03.25-.05.2-.05.4-.09.61-.12.41-.07.77-.12,1.12-.16l.14-.02c.93-.12,1.98-.2,3.2-.26.11,0,.21-.01.32-.01v20.61c0,.28.1.54.27.76.09.12.2.22.33.3.14.08.29.14.45.17.25.04.52.01.76-.11l.03-.02.73-.36.21-.1,3.5-1.72h.02l3.52,1.72.19.1.75.36c.4.19.85.16,1.21-.07.13-.08.25-.19.34-.31.16-.22.25-.48.25-.75v-4.42l-.02-4.71v-11.45c.11,0,.23.01.34.01,1.71.06,3.28.22,4.7.47.05.01.1.02.15.03,1.6.29,3.04.73,4.26,1.3.86.4,1.59.86,2.23,1.39.25.2.46.39.66.58.3.3.56.6.78.9.06.1.12.19.2.28.14.17.21.28.24.34.04.07.07.13.12.2.14.22.27.45.39.68.02.05.05.09.08.14.09.15.16.3.23.46.01.03.03.06.04.1.23.49.39.91.51,1.3.01.04.03.08.04.12.08.24.15.48.23.73.16.52.28,1,.38,1.54,0,.03,0,.07.02.1.03.12.04.24.06.36,0,.04.01.08.02.11.14.71.25,1.44.31,2.23.04.39.07.71.09,1.02.03.42.06.78.07,1.14l.04,1.17c.04.91.04,1.79.04,2.63,0,0,.03,7.51-.01,8.9l.03.04c-.01.71-.05,1.4-.11,2.1Z\"></path><path d=\"M25.13,42.73c0-1.94-1.59-3.52-3.53-3.52s-3.52,1.59-3.52,3.53,1.59,3.52,3.53,3.52,3.52-1.59,3.52-3.53Z\"></path><path d=\"M35.75,41.97c.1.02.21.04.31.03h8.12c.97,0,1.75-.81,1.75-1.78s-.78-1.76-1.77-1.75h-8.12c-.97,0-1.75.81-1.75,1.78,0,.87.62,1.58,1.46,1.73h0Z\"></path><path d=\"M36.07,43.43c-.97,0-1.75.79-1.75,1.77,0,.87.62,1.58,1.46,1.73.1.02.21.04.31.03h8.12c.97,0,1.75-.81,1.75-1.78s-.79-1.77-1.77-1.75h-8.12Z\"></path>",
  "boxing-gloves": "<g><path d=\"M22.83,23.37c-.8-2.18-2.75-3.57-5.28-3.57-2.88,0-5.9,1.77-7.7,4.51-.27.41-.42.89-.42,1.38v.71h-4.41c-1.38,0-2.5,1.12-2.5,2.5v9.48c0,1.38,1.12,2.5,2.5,2.5h4.52c.3,1,1.21,1.74,2.31,1.77.62.02,2.48.39,3.98.69,1.7.33,3.47.69,4.65.8.41.04.81.06,1.2.06,2.93,0,5.51-1.16,7.26-3.26,1.53-1.83,2.37-4.28,2.37-6.88,0-4.83-2.9-9.71-8.48-10.69ZM9.43,38.38h-4.41v-9.48h4.41v9.48ZM20.73,41.66c-2.22-.23-7.22-1.46-8.8-1.51v-14.46c2.78-4.23,8.8-4.81,8.8,0,10.8,0,10.74,17.04,0,15.97Z\"></path><path d=\"M58.98,26.4h-4.41v-.71c0-.49-.15-.97-.41-1.38-1.81-2.74-4.83-4.51-7.71-4.51-2.53,0-4.48,1.39-5.28,3.57-5.57.98-8.48,5.86-8.48,10.69,0,2.6.84,5.05,2.37,6.88,1.75,2.1,4.33,3.26,7.26,3.26.39,0,.79-.02,1.2-.06,1.18-.11,2.95-.47,4.66-.8,1.49-.3,3.35-.67,3.97-.69,1.1-.03,2.01-.77,2.31-1.77h4.52c1.38,0,2.5-1.12,2.5-2.5v-9.48c0-1.38-1.12-2.5-2.5-2.5ZM52.06,40.15c-1.58.05-6.58,1.28-8.8,1.51-10.74,1.07-10.8-15.97,0-15.97,0-4.81,6.02-4.23,8.8,0v14.46ZM58.98,38.38h-4.41v-9.48h4.41v9.48Z\"></path></g><g><g><rect x=\"30.75\" y=\"4.64\" width=\"2.5\" height=\"10.78\" rx=\"1.25\" ry=\"1.25\"></rect><rect x=\"40.23\" y=\"6.8\" width=\"2.5\" height=\"10.78\" rx=\"1.25\" ry=\"1.25\" transform=\"translate(71.31 43.48) rotate(-150)\"></rect><rect x=\"21.27\" y=\"6.8\" width=\"2.5\" height=\"10.78\" rx=\"1.25\" ry=\"1.25\" transform=\"translate(-3.08 12.89) rotate(-30)\"></rect></g><g><rect x=\"30.75\" y=\"48.58\" width=\"2.5\" height=\"10.78\" rx=\"1.25\" ry=\"1.25\"></rect><rect x=\"40.23\" y=\"46.42\" width=\"2.5\" height=\"10.78\" rx=\"1.25\" ry=\"1.25\" transform=\"translate(103.31 75.94) rotate(150)\"></rect><rect x=\"21.27\" y=\"46.42\" width=\"2.5\" height=\"10.78\" rx=\"1.25\" ry=\"1.25\" transform=\"translate(28.92 -4.32) rotate(30)\"></rect></g></g>",
  "broken-screen": "<g><path d=\"M34.93,13.84h-.01l-5.4-.06c-.66,0-1.19-.55-1.18-1.21,0-.66.54-1.18,1.2-1.18h.01l5.4.06c.66,0,1.19.55,1.18,1.21,0,.66-.54,1.18-1.2,1.18Z\"></path><circle cx=\"32.12\" cy=\"51.1\" r=\"2.47\"></circle></g><path d=\"M51.62,17.15c-.32-3.34-.8-6.84-2.71-9.58-1.43-2.04-3.65-3.32-6.79-3.91-3.05-.58-6.18-.61-9.21-.64h-1.21c-3.03-.05-6.16-.08-9.23.43-3.14.53-5.39,1.76-6.86,3.77-1.97,2.7-2.52,6.18-2.92,9.52-.58,4.91-.68,9.92-.74,15.05-.05,5.13-.06,10.14.42,15.06.33,3.35.81,6.85,2.72,9.58,1.43,2.05,3.65,3.33,6.78,3.91,3.06.58,6.19.61,9.22.64h1.19c.77.02,1.54.03,2.32.03,2.3,0,4.63-.08,6.92-.46,3.14-.52,5.39-1.75,6.86-3.76,1.98-2.69,2.53-6.18,2.93-9.52.58-4.92.68-9.93.73-15.06.06-5.13.06-10.14-.42-15.06ZM49.65,32.19c-.06,5.06-.15,10-.72,14.8-.36,3.02-.85,6.17-2.48,8.39-1.08,1.48-2.83,2.4-5.32,2.82-2.86.47-5.89.44-8.82.4h-1.19c-2.93-.04-5.96-.07-8.8-.6-2.49-.47-4.21-1.43-5.27-2.94-1.58-2.25-2-5.4-2.3-8.43-.46-4.81-.46-9.75-.4-14.81.05-4.92.14-9.71.67-14.37l6.99,7.35c.12.13.27.23.43.3l13.45,5.5-9.24,2.47c-.48.13-.84.53-.91,1.02l-1.14,7.66c-.1.68.37,1.31,1.05,1.41.06,0,.12.02.19.02.61,0,1.14-.45,1.23-1.07l1.02-6.84,9.78-2.61-2.93,8.65c-.15.44-.04.93.28,1.26l8.28,8.64c.25.25.58.38.9.38s.63-.11.87-.34c.5-.48.51-1.27.04-1.77l-7.76-8.09,2.87-8.47,4.64,3.64c.23.18.5.26.77.26.37,0,.74-.16.99-.48.42-.54.33-1.33-.22-1.75l-5.67-4.44-.99-4.95c-.13-.67-.79-1.11-1.47-.98-.68.14-1.12.8-.98,1.48l.62,3.11-12.45-5.1,7.24-4.46c.59-.37.77-1.14.4-1.73-.36-.58-1.13-.76-1.72-.4l-8.45,5.22-7.67-8.06c.36-2.09.95-4.09,2.09-5.65,1.07-1.48,2.82-2.4,5.32-2.82,2.12-.35,4.33-.42,6.53-.42.76,0,1.52,0,2.27.02h1.22c2.92.04,5.94.07,8.79.6,2.49.47,4.21,1.43,5.26,2.93,1.59,2.27,2.01,5.42,2.3,8.44.47,4.81.46,9.75.41,14.81Z\"></path>",
  "calendar-time": "<path d=\"M13.89,19.4c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5,2.5-1.1,2.5-2.5-1.1-2.5-2.5-2.5Z\"></path><path d=\"M22.79,19.4c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5,2.5-1.1,2.5-2.5-1.1-2.5-2.5-2.5Z\"></path><path d=\"M31.69,19.4c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5,2.5-1.1,2.5-2.5-1.1-2.5-2.5-2.5Z\"></path><path d=\"M40.69,19.4c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5,2.5-1.1,2.5-2.5-1.2-2.5-2.5-2.5Z\"></path><path d=\"M49.59,19.4c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5,2.5-1.1,2.5-2.5-1.1-2.5-2.5-2.5Z\"></path><path d=\"M13.89,28.6c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5,2.5-1.1,2.5-2.5-1.1-2.5-2.5-2.5Z\"></path><path d=\"M22.79,28.6c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5,2.5-1.1,2.5-2.5-1.1-2.5-2.5-2.5Z\"></path><path d=\"M31.69,28.6c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5,2.5-1.1,2.5-2.5-1.1-2.5-2.5-2.5Z\"></path><path d=\"M40.69,28.6c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5,2.5-1.1,2.5-2.5-1.2-2.5-2.5-2.5Z\"></path><path d=\"M49.59,28.6c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5,2.5-1.1,2.5-2.5-1.1-2.5-2.5-2.5Z\"></path><path d=\"M13.89,37.8c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5,2.5-1.1,2.5-2.5-1.1-2.5-2.5-2.5Z\"></path><path d=\"M22.79,37.8c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5,2.5-1.1,2.5-2.5-1.1-2.5-2.5-2.5Z\"></path><path d=\"M31.69,37.8c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5,2.5-1.1,2.5-2.5-1.1-2.5-2.5-2.5Z\"></path><path d=\"M40.69,37.8c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5,2.5-1.1,2.5-2.5-1.2-2.5-2.5-2.5Z\"></path><path d=\"M42.79,48.1H12.79c-2.7,0-4.9-2.2-4.9-4.9v-24.8c0-2.7,2.2-4.9,4.9-4.9h2.4v1.8c0,.7.6,1.2,1.2,1.2s1.2-.6,1.2-1.2v-1.8h13.2v1.8c0,.7.6,1.2,1.2,1.2.7,0,1.2-.6,1.2-1.2v-1.8h13.2v1.8c0,.7.6,1.2,1.2,1.2s1.2-.6,1.2-1.2v-1.8h1.6c2.7,0,4.9,2.2,4.9,4.9v14.9c0,.7.6,1.2,1.2,1.2s1.2-.6,1.2-1.2v-14.9c0-4.1-3.3-7.4-7.4-7.4h-1.6v-1.8c0-.7-.6-1.2-1.2-1.2s-1.2.6-1.2,1.2v1.8h-13v-1.8c0-.7-.6-1.2-1.2-1.2-.7,0-1.2.6-1.2,1.2v1.8h-13.2v-1.8c0-.7-.6-1.2-1.2-1.2s-1.2.6-1.2,1.2v1.8h-2.4c-4.1,0-7.4,3.3-7.4,7.4v24.8c0,4.1,3.3,7.4,7.4,7.4h30c.7,0,1.2-.6,1.2-1.2s-.6-1.3-1.3-1.3Z\"></path><path d=\"M53.89,35.4c-5.1,0-9.3,4.2-9.3,9.3s4.2,9.3,9.3,9.3,9.3-4.2,9.3-9.3-4.2-9.3-9.3-9.3ZM53.89,51.7c-3.9,0-7.1-3.2-7.1-7.1s3.2-7.1,7.1-7.1,7.1,3.2,7.1,7.1-3.2,7.1-7.1,7.1Z\"></path><path d=\"M57.59,44.3h-2.6v-3.1c0-.6-.5-1.1-1.1-1.1s-1.1.5-1.1,1.1v4.2c0,.6.5,1.1,1.1,1.1h3.7c.6,0,1.1-.5,1.1-1.1s-.5-1.1-1.1-1.1Z\"></path>",
  "call-center": "<path d=\"M33.76,42.85c-.54,0-.98-.42-1-.96l-.12-2.66-.06-.09c-1.64-.04-3.33-.18-5.02-.41l-.31-.04c-2.62-.35-4.73-2.31-5.26-4.89-.26-1.28-.4-2.57-.4-3.82,0-.3,0-.61.02-.91.06-.99.18-1.95.36-2.85.26-1.32.94-2.51,1.98-3.44.91-.82,2.12-1.35,3.48-1.54l.11-.02c4.07-.58,8.23-.58,12.35,0l.3.04c.3.05.6.1.9.2,2.16.59,3.85,2.38,4.36,4.65,0,0,.02.11.03.11.61,3.01.6,5.45-.04,7.68-.14.48-.69,2.1-1.8,3.15-.96.9-2.14,1.46-3.42,1.64l-.68.1c-.42,4.07-3.87,4.07-5.77,4.07ZM33.7,22.78c-1.97,0-3.94.14-5.88.42l-.12.02c-.96.13-1.8.49-2.41,1.05-.71.63-1.17,1.44-1.35,2.34-.17.81-.28,1.68-.33,2.59-.02.27-.02.53-.02.79,0,1.12.12,2.27.35,3.42.36,1.74,1.79,3.07,3.57,3.31l.31.04c1.62.22,3.24.35,4.8.39,1.13.03,2.01.93,2.01,2.05l.07,1.65c1.84-.08,2.86-.51,2.86-2.93,0-.5.37-.92.86-.99l1.5-.21c.87-.12,1.68-.5,2.33-1.11.59-.56,1.05-1.57,1.25-2.26.54-1.89.55-4.03,0-6.71l-.02-.08c-.35-1.54-1.49-2.76-2.99-3.17-.22-.07-.41-.1-.61-.13l-.28-.04c-1.97-.28-3.96-.42-5.93-.42Z\"></path><g id=\"ICONS_OUTLINED_\" data-name=\"ICONS (OUTLINED)\"><g><path d=\"M28.05,27.7c-1.2,0-2.2,1-2.2,2.2s1,2.2,2.2,2.2,2.2-1,2.2-2.2-1-2.2-2.2-2.2Z\"></path><path d=\"M35.95,30c0-1.2-1-2.2-2.2-2.2s-2.2,1-2.2,2.2,1,2.2,2.2,2.2c1.2,0,2.2-1,2.2-2.2Z\"></path><path d=\"M39.45,32.2c1.2,0,2.2-1,2.2-2.2s-1-2.2-2.2-2.2-2.2,1-2.2,2.2.9,2.2,2.2,2.2Z\"></path><path d=\"M58.45,26.1c-.4-11.1-11.2-19.9-24.5-19.9S9.95,15,9.45,26c-2.1.5-3.7,2.5-3.7,4.8v6.6c0,2.7,2.2,4.9,4.9,4.9s4.9-2.2,4.9-4.9v-6.7c0-2.3-1.6-4.2-3.7-4.7.5-9.6,10.2-17.3,22-17.3s21.4,7.6,22,17.2c-2.3.4-4.1,2.4-4.1,4.8v6.7c0,2.3,1.5,4.2,3.6,4.7-.6,6-6.6,10.8-13.9,11.2-.6-2.9-3.2-5.1-6.3-5.1-3.5,0-6.4,2.9-6.4,6.4s2.9,6.4,6.4,6.4c3.1,0,5.7-2.2,6.3-5.2,8.9-.4,15.9-6.3,16.5-13.6,2.1-.5,3.8-2.5,3.8-4.8v-6.7c0-2.2-1.4-4-3.3-4.6ZM13.15,30.7v6.7c0,1.3-1.1,2.4-2.4,2.4s-2.5-1.1-2.5-2.4v-6.7c0-1.3,1.1-2.4,2.4-2.4s2.5,1,2.5,2.4ZM35.25,58.5c-2.1,0-3.9-1.7-3.9-3.9s1.7-3.9,3.9-3.9,3.9,1.7,3.9,3.9-1.7,3.9-3.9,3.9ZM59.25,37.4c0,1.3-1.1,2.4-2.4,2.4s-2.4-1.1-2.4-2.4v-6.7c0-1.3,1.1-2.4,2.4-2.4s2.4,1.1,2.4,2.4v6.7Z\"></path></g></g>",
  "camera": "<path d=\"M51.36,54.03H12.64c-3.52,0-6.27-2.55-6.27-5.79v-24.67c0-3.25,2.75-5.79,6.27-5.79h8.25c.34,0,.65-.15.81-.39l3.78-5.86c.62-.96,1.71-1.54,2.91-1.54h10.12c1.2,0,2.29.58,2.91,1.54l3.78,5.86c.15.24.47.39.81.39h5.37c3.52,0,6.27,2.55,6.27,5.79v24.67c0,3.25-2.75,5.79-6.27,5.79ZM12.64,20.26c-2.11,0-3.77,1.45-3.77,3.29v24.67c0,1.85,1.66,3.29,3.77,3.29h38.73c2.11,0,3.77-1.45,3.77-3.29v-24.67c0-1.85-1.66-3.29-3.77-3.29h-5.37c-1.18,0-2.3-.59-2.91-1.54l-3.78-5.86c-.16-.24-.47-.39-.81-.39h-10.12c-.34,0-.65.15-.81.39l-3.78,5.86c-.61.95-1.73,1.54-2.91,1.54h-8.25Z\"></path><path d=\"M34.9,46.37c-6.49,0-11.77-5.28-11.77-11.77s5.28-11.77,11.77-11.77,11.77,5.28,11.77,11.77-5.28,11.77-11.77,11.77ZM34.9,25.33c-5.11,0-9.27,4.16-9.27,9.27s4.16,9.27,9.27,9.27,9.27-4.16,9.27-9.27-4.16-9.27-9.27-9.27Z\"></path><path d=\"M15.44,24.08c-1.4,0-2.54,1.14-2.54,2.54s1.14,2.54,2.54,2.54,2.54-1.14,2.54-2.54-1.14-2.54-2.54-2.54Z\"></path>",
  "cash-pounds": "<path d=\"M41.13,24.07c-.95-1.15-1.23-2.75-.73-4.18l1.64-4.66c.47-1.21.34-2.55-.38-3.63-.74-1.12-1.97-1.78-3.3-1.78-.55,0-1.12.12-1.63.36l-1.7-1.15c-.66-.45-1.42-.68-2.22-.68-.7,0-1.39.18-2,.54l-2.32,1.36-.44-.21c-.55-.27-1.13-.41-1.73-.41-1.33,0-2.56.67-3.3,1.79-.72,1.08-.85,2.43-.37,3.64l1.73,4.84c.53,1.48.23,3.12-.79,4.29-6.16,7.09-12.81,17.07-9.51,24.3,2.19,4.81,7.96,7.15,17.65,7.15h.1c9.68-.02,15.74-2.48,18.01-7.33,3.41-7.26-2.86-17.19-8.71-24.24ZM26.96,12.29l.63.31c.63.31,1.38.28,1.98-.08l2.51-1.47c.48-.28,1.08-.26,1.55.06l1.89,1.28c.64.43,1.47.48,2.16.11.23-.12.46-.17.69-.17.96,0,1.76,1,1.33,2.02l-1.66,4.72c-.29.82-.41,1.67-.38,2.51-3.53.68-7.04.69-10.53,0,.03-.84-.1-1.69-.39-2.51l-1.75-4.9c-.53-1.24.76-2.46,1.97-1.88ZM31.82,53.14c-27.49.05-12.9-19.76-6.34-27.31.46-.53.83-1.13,1.09-1.76,3.86.68,7.74.67,11.65,0,.25.57.58,1.11.99,1.6,6.25,7.52,20.16,27.42-7.39,27.47Z\"></path><path d=\"M37.18,46.29h-6.85c.77-1.13,1.2-2.29,1.28-3.47.04-.64-.02-1.25-.14-1.85h3.83c.69,0,1.25-.56,1.25-1.25s-.56-1.25-1.25-1.25h-4.64c-.06-.14-.11-.28-.17-.42l-.17-.43c-.58-1.46-1.09-3.1-.39-4.25.35-.58,1.13-1.02,2.07-1.16,1.07-.16,2.13.07,2.73.59.5.44.81,1.09.82,1.76.01.69.57,1.22,1.27,1.23.69-.01,1.24-.58,1.23-1.27-.02-1.36-.65-2.7-1.67-3.59-1.16-1.02-2.94-1.46-4.76-1.18-1.69.26-3.08,1.11-3.82,2.34-1.26,2.07-.57,4.49.18,6.39h-1.17c-.69,0-1.25.56-1.25,1.25s.56,1.25,1.25,1.25h2.09c.16.57.25,1.13.21,1.67-.09,1.29-.9,2.62-2.42,3.96-.39.34-.52.89-.34,1.38.18.49.65.81,1.17.81h9.65c.69,0,1.25-.56,1.25-1.25s-.56-1.25-1.25-1.25Z\"></path>",
  "cash": "<path d=\"M41.13,24.07c-.95-1.15-1.23-2.75-.73-4.18l1.64-4.66c.47-1.21.34-2.55-.38-3.63-.74-1.12-1.97-1.78-3.3-1.78-.55,0-1.12.12-1.63.36l-1.7-1.15c-.66-.45-1.42-.68-2.22-.68-.7,0-1.39.18-2,.54l-2.32,1.36-.44-.21c-.55-.27-1.13-.41-1.73-.41-1.33,0-2.56.67-3.3,1.79-.72,1.08-.85,2.43-.37,3.64l1.73,4.84c.53,1.48.23,3.12-.79,4.29-6.16,7.09-12.81,17.07-9.51,24.3,2.19,4.81,7.96,7.15,17.65,7.15h.1c9.68-.02,15.74-2.48,18.01-7.33,3.41-7.26-2.86-17.19-8.71-24.24ZM26.96,12.29l.63.31c.63.31,1.38.28,1.98-.08l2.51-1.47c.48-.28,1.08-.26,1.55.06l1.89,1.28c.64.43,1.47.48,2.16.11.23-.12.46-.17.69-.17.96,0,1.76,1,1.33,2.02l-1.66,4.72c-.29.82-.41,1.67-.38,2.51-3.53.68-7.04.69-10.53,0,.03-.84-.1-1.69-.39-2.51l-1.75-4.9c-.53-1.24.76-2.46,1.97-1.88ZM31.82,53.14c-27.49.05-12.9-19.76-6.34-27.31.46-.53.83-1.13,1.09-1.76,3.86.68,7.74.67,11.65,0,.25.57.58,1.11.99,1.6,6.25,7.52,20.16,27.42-7.39,27.47Z\"></path><path d=\"M33.24,47.05v.57c0,.62-.51,1.13-1.13,1.13h0c-.62,0-1.13-.51-1.13-1.13v-.54c-2.22-.26-3.7-1.42-4.34-3.19-.35-.97.38-2,1.41-2h0c.62,0,1.19.38,1.39.97.25.71.76,1.23,1.54,1.46v-4.15c-2.61-.43-4.43-1.78-4.43-4.48,0-2.48,1.87-4.08,4.43-4.39v-.54c0-.62.51-1.13,1.13-1.13h0c.62,0,1.13.51,1.13,1.13v.56c1.99.27,3.17,1.21,3.75,2.58.4.94-.32,1.99-1.34,1.99h0c-.55,0-1.05-.31-1.29-.81-.22-.46-.59-.8-1.12-1.02v3.87c2.69.48,4.45,1.72,4.45,4.41s-1.67,4.35-4.45,4.71ZM30.98,37.44v-3.52c-1.02.24-1.61.85-1.61,1.74s.46,1.39,1.61,1.78ZM33.24,44.31c.98-.26,1.54-.91,1.54-1.89s-.61-1.46-1.54-1.78v3.67Z\"></path>",
  "chat": "<path d=\"M58.18,18.97s-.04-.2-.04-.2c-1.01-4.62-4.47-8.29-9.03-9.57-.55-.15-1.11-.27-1.67-.35l-.76-.12c-9.75-1.37-19.63-1.37-29.36,0l-.76.1c-2.62.37-5.03,1.52-6.97,3.34-1.92,1.83-3.24,4.16-3.76,6.76-.45,2.17-.72,4.41-.84,6.64-.04.68-.04,1.36-.04,2.04,0,2.89.29,5.8.88,8.66,1.08,5.28,5.41,9.34,10.75,10.1l.74.09c4.8.68,9.65,1.03,14.51,1.03v6.35c0,1.34,1.08,2.43,2.42,2.43l.04.02c3.79,0,6.8-1.15,8.89-3.42,1.89-2.02,2.59-4.5,2.84-6.29.21-.04.43-.06.66-.1l.76-.09c2.62-.37,5.03-1.52,6.97-3.34,1.88-1.77,3.16-4.04,3.73-6.57l.04-.19c1.16-5.77,1.16-11.59,0-17.32ZM55.72,35.79l-.03.2c-.45,1.99-1.49,3.82-2.99,5.23-1.56,1.46-3.5,2.39-5.61,2.69,0,0-1.36.19-1.52.21-.19.03-.54.06-.89.08-.56.04-1,.48-1.05,1.04-.03.38-.06.78-.09.99-.16,1.4-.73,3.38-2.18,4.94-1.51,1.63-3.69,2.51-6.5,2.61h-.02s-.51-.01-.51-.01v-7.05c0-.96-.78-1.73-1.73-1.73h-.77c-4.69,0-9.45-.34-14.16-1l-.76-.1c-4.28-.61-7.76-3.87-8.64-8.12-.54-2.68-.82-5.42-.82-8.16,0-.63,0-1.27.04-1.9.11-2.17.37-4.28.78-6.28.42-2.07,1.47-3.95,3.04-5.45,1.55-1.45,3.49-2.37,5.6-2.67l.73-.1c4.76-.67,9.58-1.01,14.35-1.01s9.6.34,14.34,1.01l.73.11c.49.07.94.16,1.36.29,3.66,1.02,6.44,3.96,7.26,7.66l.05.2c1.09,5.39,1.09,10.89-.01,16.32Z\"></path><circle cx=\"32\" cy=\"27.41\" r=\"3.13\"></circle><circle cx=\"45.57\" cy=\"27.41\" r=\"3.13\"></circle><circle cx=\"18.43\" cy=\"27.41\" r=\"3.13\"></circle>",
  "click": "<path d=\"M39.05,58.77c-.97,0-1.82-.59-2.15-1.5l-10.22-27.8c-.31-.86-.09-1.82.56-2.45.66-.63,1.63-.81,2.47-.46l27.35,11.37c.9.38,1.46,1.25,1.41,2.23-.05.98-.68,1.79-1.61,2.08l-11.58,3.58-4.06,11.42c-.33.92-1.17,1.52-2.15,1.53h-.01ZM39.24,56.4h0,0ZM29.18,29.05l9.86,26.82,3.9-10.98c.24-.68.8-1.21,1.48-1.42l11.14-3.44-26.38-10.97Z\"></path><circle cx=\"23.03\" cy=\"22.68\" r=\"2.5\"></circle><path d=\"M22.94,34.66c-3.24,0-6.36-1.31-8.66-3.71-4.6-4.79-4.44-12.43.36-17.03,4.79-4.6,12.43-4.44,17.03.36,2.75,2.86,3.91,6.89,3.1,10.78-.14.68-.8,1.12-1.48.97-.68-.14-1.11-.8-.97-1.48.64-3.08-.28-6.27-2.46-8.54-3.64-3.8-9.7-3.92-13.5-.28s-3.92,9.7-.28,13.5c2.26,2.35,5.64,3.4,8.83,2.74.67-.14,1.34.29,1.48.97.14.68-.29,1.34-.97,1.48-.83.17-1.66.26-2.48.26Z\"></path><path d=\"M23.61,41.48c-4.88,0-9.57-1.97-13.04-5.59-6.92-7.22-6.68-18.72.54-25.64,3.47-3.33,8.06-5.11,12.93-5.01,4.86.1,9.38,2.07,12.71,5.54,4.14,4.31,5.88,10.38,4.67,16.23-.14.68-.8,1.12-1.48.97-.68-.14-1.11-.8-.97-1.48,1.04-5.04-.46-10.27-4.03-13.99-2.87-2.99-6.76-4.69-10.96-4.78-4.19-.06-8.16,1.45-11.15,4.32s-4.69,6.76-4.78,10.96c-.09,4.2,1.44,8.16,4.31,11.15,3.69,3.85,9.24,5.57,14.46,4.49.68-.13,1.34.29,1.48.97.14.68-.29,1.34-.97,1.48-1.25.26-2.5.39-3.73.39Z\"></path>",
  "cloud": "<path d=\"M54.8,21.7c.62.09,1.07.61,1.07,1.24s-.46,1.15-1.07,1.24c-1.2.17-1.34.31-1.51,1.51-.09.62-.61,1.07-1.24,1.07s-1.15-.46-1.24-1.07c-.17-1.2-.31-1.34-1.51-1.51-.62-.09-1.07-.61-1.07-1.24s.46-1.15,1.07-1.24c1.2-.17,1.34-.31,1.51-1.51.09-.62.61-1.07,1.24-1.07s1.15.46,1.24,1.07c.17,1.2.31,1.34,1.51,1.51Z\"></path><path d=\"M49.5,17.62c-1.2.17-1.34.31-1.51,1.51-.09.62-.61,1.07-1.24,1.07s-1.15-.46-1.24-1.07c-.17-1.2-.31-1.34-1.51-1.51-.62-.09-1.07-.61-1.07-1.24s.46-1.15,1.07-1.24c1.2-.17,1.34-.31,1.51-1.51.09-.62.61-1.07,1.24-1.07s1.15.46,1.24,1.07c.17,1.2.31,1.34,1.51,1.51.62.09,1.07.61,1.07,1.24s-.46,1.15-1.07,1.24Z\"></path><g><path d=\"M45.56,26.89c-.15,0-.33,0-.52.01-.11-.49-.24-.97-.39-1.44-.61.57-1.43.92-2.34.94.21.65.36,1.32.46,2.01.09.66.69,1.13,1.36,1.07.27-.02,1.06-.09,1.43-.09,5.4,0,9.78,4.38,9.78,9.78s-4.38,9.77-9.78,9.77h-27.79c-5.03,0-9.12-4.09-9.12-9.11,0-4.04,2.69-7.57,6.45-8.73.11,1.82.54,3.61,1.29,5.28.28.63,1.02.91,1.65.63.63-.28.91-1.02.63-1.65-.9-2.02-1.26-4.25-1.03-6.46.72-6.95,6.96-12.02,13.9-11.29,2.98.31,5.66,1.64,7.66,3.64.42-.76,1.1-1.33,1.94-1.6-2.42-2.49-5.69-4.15-9.34-4.53-8.27-.85-15.7,5.14-16.63,13.38-5.21,1.2-9.02,5.9-9.02,11.33,0,6.4,5.21,11.61,11.62,11.61h27.79c6.77,0,12.28-5.5,12.28-12.27s-5.51-12.28-12.28-12.28Z\"></path><path d=\"M44.75,22.94c0,.56-.17,1.08-.48,1.49-.45.62-1.18,1.01-2.02,1.01-.09,0-.19,0-.28,0-1.26-.14-2.22-1.18-2.22-2.49,0-.32.06-.63.16-.91.32-.83,1.05-1.43,1.96-1.56.12-.02.25-.03.38-.03,1.4,0,2.5,1.2,2.5,2.5Z\"></path></g>",
  "connectivity": "<path d=\"M33.25,51.79v-13.6c0-.69-.56-1.25-1.25-1.25s-1.25.56-1.25,1.25v13.58c-1.56.51-2.67,1.95-2.67,3.72,0,1.07.41,2.06,1.16,2.8.73.72,1.7,1.12,2.72,1.12,2.15.05,3.97-1.78,3.97-3.93,0-1.71-1.12-3.15-2.67-3.68ZM31.99,56.9c-.39-.04-.74-.13-1-.4-.27-.26-.42-.62-.42-1.02,0-.82.6-1.43,1.39-1.43s1.45.63,1.45,1.41-.66,1.43-1.43,1.43Z\"></path><path d=\"M47.17,19.76s0,0,0,0c0-3.65-1.31-7.17-3.69-9.91-2.86-3.31-7-5.21-11.38-5.24-.03,0-.06,0-.1,0-.04,0-.07,0-.1,0-.52,0-1.03.03-1.54.08-3.8.41-7.31,2.24-9.83,5.16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0-2.37,2.73-3.68,6.24-3.69,9.87,0,.01,0,.02,0,.04,0,.01,0,.02,0,.04,0,3.64,1.32,7.14,3.69,9.87,2.87,3.34,7.06,5.26,11.47,5.26,0,0,0,0,0,0h0c3.87,0,7.55-1.47,10.34-4.07.4-.37.78-.77,1.14-1.19,0,0,0,0,0,0,2.37-2.74,3.68-6.25,3.68-9.9,0,0,0,0,0,0,0,0,0,0,0,0ZM24.22,9.78c.08-.06.15-.13.23-.19.34-.25.69-.48,1.04-.7.09-.06.19-.1.29-.16.27-.15.54-.3.82-.43.05-.02.1-.04.14-.06-.48.78-.91,1.67-1.27,2.65-.65-.18-1.28-.38-1.86-.61.2-.18.4-.35.61-.51ZM21.82,12.23c.89.42,1.87.78,2.92,1.07-.39,1.6-.63,3.34-.71,5.2h-4.63c.23-2.27,1.06-4.44,2.42-6.27ZM19.4,21.01h4.63c.08,1.86.32,3.6.71,5.2-1.05.29-2.03.65-2.92,1.07-1.36-1.83-2.19-4-2.42-6.27ZM26.61,31.21c-.29-.14-.57-.29-.85-.45-.09-.05-.18-.09-.26-.14-.36-.22-.71-.45-1.05-.71-.07-.05-.13-.11-.2-.16-.22-.17-.43-.35-.64-.53.58-.23,1.21-.43,1.87-.61.37.99.8,1.88,1.28,2.67-.05-.02-.1-.04-.15-.06ZM30.75,32.02c-1.04-.63-2.05-2-2.83-3.95.92-.14,1.87-.24,2.83-.28v4.23ZM30.75,25.3c-1.21.05-2.41.18-3.58.37-.34-1.39-.57-2.96-.65-4.66h4.22v4.29ZM30.75,18.51h-4.22c.08-1.71.31-3.27.65-4.66,1.16.2,2.36.32,3.58.38v4.29ZM30.75,11.72c-.96-.04-1.9-.14-2.82-.28.77-1.95,1.78-3.32,2.82-3.95v4.23ZM44.6,18.51h-4.63c-.08-1.86-.32-3.6-.71-5.2,1.05-.29,2.03-.65,2.93-1.07,1.36,1.83,2.19,4,2.42,6.27ZM37.4,8.31c.29.13.57.28.84.44.09.05.18.09.27.15.36.22.71.45,1.05.7.07.05.14.12.21.17.21.17.42.34.63.52-.58.23-1.22.43-1.87.61-.37-.98-.8-1.88-1.28-2.66.05.02.1.04.15.06ZM33.25,7.49c1.04.63,2.05,2,2.82,3.95-.92.14-1.87.23-2.82.28v-4.23ZM33.25,14.22c1.22-.05,2.42-.18,3.58-.37.34,1.39.57,2.96.64,4.66h-4.22v-4.29ZM33.25,32.02v-4.23c.96.04,1.9.14,2.83.28-.77,1.95-1.78,3.32-2.83,3.95ZM33.25,25.3v-4.29h4.22c-.08,1.71-.31,3.27-.64,4.66-1.16-.2-2.36-.32-3.58-.37ZM39.78,29.74c-.07.06-.14.12-.22.18-.34.25-.69.48-1.05.7-.09.06-.19.1-.29.16-.27.15-.54.3-.82.43-.05.02-.11.04-.16.07.48-.79.91-1.68,1.28-2.67.65.18,1.29.38,1.87.61-.2.18-.41.35-.62.52ZM42.18,27.28c-.89-.42-1.87-.78-2.92-1.07.39-1.59.63-3.34.71-5.2h4.63c-.22,2.27-1.06,4.44-2.42,6.27Z\"></path><path d=\"M43.54,46.13c-.55,0-1.06.16-1.48.45l-3.18-2.45v-6.24c0-.69-.56-1.25-1.25-1.25s-1.25.56-1.25,1.25v6.89c0,.41.2.79.53,1.02l3.98,3.04c.02,1.49,1.21,2.65,2.68,2.63,1.44,0,2.66-1.24,2.66-2.68s-1.22-2.66-2.7-2.66Z\"></path><path d=\"M26.36,36.63c-.69,0-1.25.56-1.25,1.25v6.24l-3.18,2.45c-.42-.28-.93-.45-1.48-.45-1.48,0-2.7,1.18-2.7,2.66s1.22,2.68,2.66,2.68c1.47.02,2.66-1.14,2.68-2.63l3.98-3.04c.33-.23.53-.62.53-1.02v-6.89c0-.69-.56-1.25-1.25-1.25Z\"></path>",
  "cracked-laptop": "<path d=\"M60.22,45.91h.02c-.47-.49-1.16-.76-1.86-.71-.41.02-.81.04-1.22.06.8-10.37.67-20.87-.42-31.22-.24-2.26-2.26-4.16-4.63-4.31-13.54-.64-26.7-.66-40.26-.05-2.35.14-4.38,2.04-4.61,4.31-1.04,10.38-1.17,20.89-.4,31.27-.4-.02-.8-.04-1.2-.06-.7-.03-1.39.22-1.86.71-.45.48-.67,1.14-.6,1.81.11,1,.17,1.5.29,2.51.25,1.98,2.02,3.65,4.05,3.8,8.24.49,16.36.74,24.48.74s16.25-.25,24.48-.74h.02c2.01-.15,3.78-1.82,4.03-3.8.12-1,.18-1.5.29-2.51.07-.67-.15-1.33-.6-1.81ZM9.73,14.24c.02-.25.11-.51.24-.74l7.65,8.06-3.89,3.61c-.5.47-.53,1.26-.06,1.76.24.27.58.4.91.4.31,0,.61-.11.85-.33l4.34-4.03,16.38,3.6-5.69,2.98c-.27.15-.48.39-.59.67l-1.56,4.19c-.24.64.09,1.36.74,1.61.14.05.29.07.43.07.51,0,.99-.31,1.18-.81l1.39-3.73,7.18-3.77,6.91,5.27-1.32,6.34c-.14.68.29,1.34.96,1.48.09.02.18.03.26.03.58,0,1.1-.41,1.22-1l1.49-7.11c.1-.47-.08-.96-.47-1.25l-6.36-4.85,6.86-1.63c.67-.16,1.09-.83.93-1.5-.16-.67-.83-1.09-1.51-.93l-7.61,1.81-1.03-3.57c-.19-.66-.88-1.04-1.55-.85-.66.19-1.04.88-.85,1.55l.82,2.84-17.94-3.94-7.9-8.31c13.4-.59,26.44-.57,39.83.06,1.11.07,2.18,1.04,2.29,2.07,1.08,10.31,1.21,20.76.39,31.08-15.4.73-30.6.73-45.29,0-.79-10.34-.67-20.81.38-31.15v.02ZM34.55,48.47c-.16.41-.55.71-.99.71h-3.09c-.44,0-.83-.3-.99-.71,1.95.01,3.13.01,5.07,0ZM58.08,49.92h-.02c-.1.78-.92,1.55-1.73,1.62-16.37.98-32.29.98-48.63,0-.81-.06-1.64-.83-1.74-1.62-.11-.9-.17-1.39-.26-2.22,6.96.4,14.05.63,21.23.7.17,1.82,1.69,3.27,3.53,3.28h3.12c1.84,0,3.36-1.46,3.53-3.28,7.02-.08,14.1-.31,21.23-.7-.09.83-.15,1.32-.26,2.22Z\"></path><path d=\"M29.35,15.92h0c2.12-.01,3.19-.01,5.31,0h0c.69,0,1.25-.55,1.25-1.24s-.55-1.25-1.24-1.26c-2.14-.02-3.21-.02-5.34,0-.69,0-1.25.57-1.24,1.26,0,.69.56,1.24,1.25,1.24h.01Z\"></path>",
  "customer-support": "<path d=\"M27.98,43.39c-4.83,0-8.74,3.91-8.74,8.73s3.91,8.74,8.74,8.74,8.73-3.91,8.73-8.74-3.91-8.73-8.73-8.73ZM27.98,58.85c-3.72,0-6.74-3.02-6.74-6.74s3.02-6.73,6.74-6.73,6.73,3.02,6.73,6.73-3.02,6.74-6.73,6.74Z\"></path><g><g><path d=\"M46.76,18.09c-1,0-1.9.9-1.9,1.9s.9,1.9,1.9,1.9,1.9-.9,1.9-1.9-.9-1.9-1.9-1.9Z\"></path><path d=\"M51.56,18.09c-1,0-1.9.9-1.9,1.9s.9,1.9,1.9,1.9,1.9-.9,1.9-1.9-.8-1.9-1.9-1.9Z\"></path><path d=\"M56.46,18.09c-1,0-1.9.9-1.9,1.9s.8,1.9,1.9,1.9c1,0,1.9-.9,1.9-1.9s-.9-1.9-1.9-1.9Z\"></path></g><path d=\"M61.97,16.43l-.02-.09c-.41-1.83-1.78-3.28-3.56-3.77-.21-.07-.44-.11-.68-.15l-.3-.04c-3.83-.54-7.76-.55-11.62,0l-.29.04c-1.04.14-1.99.6-2.76,1.32-.77.73-1.29,1.66-1.49,2.68-.17.83-.28,1.72-.33,2.62-.02.27-.02.54-.02.81,0,1.14.12,2.29.35,3.43.43,2.09,2.14,3.69,4.26,4l.3.04c1.91.26,3.84.4,5.72.4v2.55c.02.53.54.92.96.94.39.02,1.17-.09,1.48-.17.84-.21,1.53-.61,2.07-1.2.83-.89,1.06-1.95,1.12-2.48l.56-.08c1.03-.14,1.99-.6,2.76-1.32.73-.69,1.24-1.83,1.47-2.6.57-1.98.58-4.18.02-6.93ZM60.03,22.81c-.16.55-.54,1.33-.92,1.69-.47.44-1.05.71-1.67.8l-.62.09c-.06.01-.16.01-.27.02-.71.05-1.28.61-1.34,1.37,0,.11-.02.22-.03.32-.03.25-.15.89-.6,1.38-.27.29-.62.49-1.05.6v-1.37c0-.55-.22-1.05-.58-1.41-.36-.36-.86-.58-1.41-.58-1.79,0-3.63-.13-5.47-.39l-.26-.03c-1.33-.18-2.36-1.2-2.62-2.51-.19-.97-.29-1.96-.29-2.94,0-.23,0-.46.02-.7.04-.81.14-1.6.29-2.33.12-.62.44-1.18.9-1.63.46-.43,1.04-.7,1.67-.79l.29-.04c1.84-.26,3.7-.39,5.53-.39s3.71.13,5.52.38l.3.05c.14.02.27.04.41.09,1.09.3,1.92,1.18,2.18,2.34.25,1.22.37,2.31.37,3.31s-.12,1.85-.35,2.67Z\"></path></g><path d=\"M53.01,32.75c-.7-.1-1.3.3-1.4,1-.9,5.3-3.7,10.1-7.6,13.6-.9-5.8-4.9-10.7-10.3-12.7,3.5-2,5.9-5.7,5.9-10,0-6.3-5.2-11.5-11.5-11.5s-11.5,5.2-11.5,11.5c0,4.3,2.4,8,5.9,10-5.4,2-9.4,6.8-10.3,12.7-5-4.5-8-10.9-8-17.8,0-13.2,10.7-23.9,23.9-23.9,5.5,0,10.7,1.8,15,5.3.5.4,1.3.3,1.8-.2s.3-1.3-.2-1.8c-4.8-3.8-10.7-5.8-16.7-5.8C13.41,3.15,1.61,14.95,1.61,29.54c0,9.8,5.4,18.7,14,23.3.2.1.4.1.6.1.4,0,.9-.2,1.1-.7.3-.6.1-1.4-.5-1.7-.8-.4-1.6-.9-2.4-1.5.3-7.2,6.2-13,13.5-13.1,3.65,0,6.97,1.45,9.41,3.81,2.44,2.36,3.99,5.64,4.09,9.29l-2.4,1.5c-.6.3-.8,1.1-.5,1.7.2.4.7.7,1.1.7.2,0,.4,0,.6-.1,7.1-3.8,12.3-10.8,13.7-18.7.2-.7-.3-1.3-.9-1.4ZM19.01,24.65c0-5,4-9,9-9s9,4,9,9-4.1,9-9,9-9-4-9-9Z\"></path><path d=\"M30.62,49.6l-3.7,3.3-1.6-1.7c-.4-.5-1.2-.5-1.6,0-.5.4-.5,1.2,0,1.6l2.4,2.5c.2.2.5.3.8.3s.5-.1.8-.3l4.5-4c.5-.4.5-1.1.1-1.6-.5-.5-1.2-.5-1.7-.1Z\"></path>",
  "data-increase": "<path d=\"M54.5,7.6h-9.4c-.7,0-1.3.6-1.3,1.3s.6,1.3,1.3,1.3h6.3l-14.5,14.5c-.4-.2-.9-.4-1.3-.5-1-.4-2.1-.8-3.1-1.2-1.2-.5-2.4-.9-3.5-1.4-.9-.4-1.8-.7-2.7-1.1-.2-.1-.4-.2-.7-.3-.5-.2-.9,0-1.3.3l-1,1-.9.9-1.1,1.1-1.3,1.3-1.4,1.4-1.5,1.5-1.5,1.5-1.5,1.5-1.4,1.4c-.6.6-1,1-1.4,1.5-.4.4-.7.7-1.1,1.1-.3.3-.6.6-.9.9-.2.2-.4.4-.6.6-.1.1-.2.2-.3.3-.4.4-.4,1.2,0,1.6.2.2.5.3.8.3s.6-.1.8-.3l15.5-15.5,11.4,4.6c.1.1.3.1.4.1.2,0,.3,0,.5-.1h.1c.1,0,.1-.1.2-.1s.1-.1.2-.1l15-14.9v6.3c0,.3.1.7.4.9.2.2.5.4.9.4.7,0,1.3-.6,1.3-1.3,0,0,0-9.4,0-9.3-.1-.9-.7-1.5-1.4-1.5Z\"></path><path d=\"M14.53,38.61c-3.73.47-6.43,3.83-6.43,7.6v8.98c0,.67.54,1.21,1.22,1.21h12.38c.67,0,1.21-.54,1.21-1.21v-9.24c0-4.4-3.86-7.92-8.38-7.34ZM20.41,53.9h-9.81v-7.95c0-2.71,2.2-4.91,4.91-4.91s4.9,2.2,4.9,4.91v7.95Z\"></path><path d=\"M31.08,32.9c-3.77.46-6.48,3.87-6.48,7.67v14.85c0,.54.43.98.98.98h12.85c.54,0,.98-.44.98-.98v-15.17c0-4.38-3.83-7.89-8.33-7.35ZM36.91,53.9h-9.81v-13.65c0-2.71,2.19-4.9,4.9-4.9s4.91,2.19,4.91,4.9v13.65Z\"></path><path d=\"M47.17,25.41c-3.77.46-6.49,3.87-6.49,7.67v22.3c0,.56.46,1.02,1.03,1.02h12.75c.57,0,1.03-.46,1.03-1.02v-22.62c0-4.38-3.83-7.89-8.32-7.35ZM52.99,53.9h-9.81v-21.14c0-2.71,2.2-4.9,4.9-4.9s4.91,2.19,4.91,4.9v21.14Z\"></path>",
  "disposition": "<g><path d=\"M40.13,26.43l-1.14,3.41c-.18.52-.66.85-1.19.85-.13,0-.26-.02-.39-.06l-3.41-1.14c-.66-.22-1.01-.93-.79-1.59.22-.65.93-1,1.58-.78l.54.18-1.98-3.97c-.56-1.11-2.14-1.11-2.7,0l-.98,1.96c-.22.44-.66.69-1.12.69-.19,0-.39-.05-.57-.14-.61-.32-.85-1.06-.54-1.67l.92-1.83c.58-1.17,1.65-2.06,2.93-2.28,1.8-.31,3.51.58,4.29,2.15l1.99,3.99.19-.57c.22-.65.93-1,1.58-.78.66.21,1.01.92.79,1.58Z\"></path><path d=\"M42.09,39.48c-.73,1.19-2,1.9-3.4,1.9h-5.45l.49.52c.47.5.45,1.29-.05,1.76-.25.23-.55.34-.86.34-.33,0-.67-.13-.91-.39l-2.47-2.62c-.47-.5-.45-1.29.05-1.76l2.62-2.47c.5-.47,1.29-.45,1.77.05.47.51.45,1.3-.05,1.77l-.32.3h5.18c1.12,0,1.84-1.17,1.34-2.18l-1.75-3.5c-.09-.18-.13-.37-.13-.55,0-.46.25-.89.67-1.12.62-.32,1.39-.07,1.7.55l1.75,3.51c.62,1.25.56,2.7-.18,3.89Z\"></path><path d=\"M23.97,36.7c-.5,1.01.23,2.18,1.34,2.18h1.75c.69,0,1.25.56,1.25,1.25s-.56,1.25-1.25,1.25h-1.75c-1.39,0-2.67-.71-3.4-1.9-.74-1.19-.8-2.64-.18-3.89l2.83-5.67-.72.2c-.67.18-1.36-.2-1.55-.87-.18-.66.2-1.35.87-1.54l3.45-.98c.32-.09.66-.05.95.11s.51.43.6.75l.98,3.46c.18.67-.2,1.36-.87,1.54-.11.04-.22.05-.34.05-.54,0-1.04-.36-1.2-.91l-.1-.35s-2.66,5.32-2.66,5.32Z\"></path></g><path d=\"M41.52,52.25h-18.81c-3.46,0-6.41-2.58-6.87-6.01L11.39,13.18c-.09-.68.39-1.31,1.07-1.41.68-.09,1.31.39,1.41,1.07l4.45,33.06c.29,2.19,2.19,3.84,4.4,3.84h18.81c2.23,0,4.12-1.67,4.4-3.87l4.21-33.03c.09-.68.71-1.17,1.4-1.08.68.09,1.17.71,1.08,1.4l-4.21,33.03c-.44,3.45-3.4,6.06-6.88,6.06h-.01Z\"></path>",
  "drone-deliver": "<g><path d=\"M18.03,29.3H5.7c-.69,0-1.25-.56-1.25-1.25s.56-1.25,1.25-1.25h12.33c.69,0,1.25.56,1.25,1.25s-.56,1.25-1.25,1.25Z\"></path><path d=\"M17.98,23.42h-4.1c-.69,0-1.25-.56-1.25-1.25s.56-1.25,1.25-1.25h4.1c.69,0,1.25.56,1.25,1.25s-.56,1.25-1.25,1.25Z\"></path><path d=\"M10.11,23.42h-.74c-.69,0-1.25-.56-1.25-1.25s.56-1.25,1.25-1.25h.74c.69,0,1.25.56,1.25,1.25s-.56,1.25-1.25,1.25Z\"></path></g><g><path d=\"M18.08,52.09c.28-.77-.13-1.63-.9-1.91s-1.63.13-1.91.9.13,1.63.9,1.91,1.63-.13,1.91-.9Z\"></path><path d=\"M22.79,53.31s.08.05.12.06l3.23,1.17c.39.14.81-.07.95-.46s-.06-.81-.45-.95l-3.23-1.17c-.39-.14-.81.07-.95.46-.13.35.02.72.33.9h0Z\"></path><path d=\"M22.7,53.93c-.39-.14-.81.06-.95.45-.13.35.02.72.33.9.04.02.08.05.12.06l3.23,1.17c.39.14.81-.07.95-.46s-.06-.82-.45-.95l-3.23-1.17Z\"></path></g><path d=\"M58.53,13.67l-3.03-.57.35-1.92c.12-.68-.33-1.33-1.01-1.46-.68-.12-1.33.33-1.45,1.01l-.35,1.9-2.68-.51c-.69-.12-1.34.32-1.46,1-.13.68.31,1.33.99,1.46l2.7.51-.85,4.66-5.54-.94.69-3.35c.13-.68-.3-1.34-.98-1.47l-18.02-3.7c-.33-.06-.66,0-.94.19-.28.18-.47.46-.54.79l-.71,3.45-5.73-1.12.98-4.84,2.89.52c.07.02.15.02.22.02.59,0,1.12-.42,1.23-1.02.12-.68-.33-1.33-1.01-1.46l-2.83-.51.38-1.86c.14-.67-.3-1.33-.98-1.47-.67-.14-1.33.3-1.47.98l-.39,1.9-2.79-.5c-.68-.12-1.33.33-1.45,1.01-.12.68.33,1.33,1.01,1.45l2.73.49-1.22,6.03c-.06.33,0,.66.19.94.18.28.47.47.8.53l6.94,1.36c-.44,2.27.57,4.51,2.4,5.72l-2.4,2.39c-.48.49-.48,1.28,0,1.77.25.24.57.36.89.36s.64-.12.88-.36l3.23-3.22,2.87.58-16.39,11.75-.02.02c-.75.37-1.43.9-2.02,1.57-.09.1-.19.22-.28.33l-.08.1c-.29.38-.58.82-.89,1.35-.23.42-.46.88-.69,1.39-.39.9-.71,1.79-1.01,2.65l-.33.9c-.71,1.88-1.43,3.82-1.56,5.93-.08,1.31.11,2.48.56,3.48.68,1.52,2.05,2.81,4.06,3.84.47.23.95.45,1.41.64.72.3,1.45.55,2.09.78l1.48.54c.59.21,1.22.44,1.89.65.48.15.97.29,1.5.41l.17.04c.13.02.26.05.4.08.31.06.61.1.91.13.16.02.32.03.53.05.17.01.34.01.51.01,1.51,0,2.89-.42,4.02-1.22.71-.52,1.37-1.22,1.95-2.09.9-1.33,1.47-2.8,1.93-4.07.14-.36.28-.73.41-1.09.2-.52.39-1.03.58-1.55.34-.96.76-2.24,1.01-3.6.25-1.4.25-2.6,0-3.67-.08-.34-.19-.67-.33-.99l1.76-17.63,2.26.46h.01l.92,4.12c.13.58.64.98,1.22.98.09,0,.18-.01.27-.03.67-.15,1.1-.82.95-1.49l-.8-3.55c2.07-.47,3.77-2.11,4.21-4.3l.02-.08,6.84,1.18c.07.01.14.01.21.01.59,0,1.12-.42,1.23-1.02l1.07-5.86,3.01.57c.08.01.16.02.24.02.59,0,1.11-.42,1.23-1.02.12-.67-.32-1.33-1-1.46ZM32.75,46.98c-.22,1.19-.6,2.34-.91,3.21-.18.5-.37,1.01-.56,1.51-.14.37-.28.74-.41,1.11-.42,1.14-.92,2.44-1.66,3.54-.42.62-.87,1.11-1.34,1.45-.98.7-2.14.78-2.96.74-.11-.01-.22-.01-.35-.03-.25-.03-.5-.06-.74-.11l-.5-.1c-.44-.11-.88-.23-1.29-.35-.62-.2-1.22-.42-1.78-.62l-1.49-.54c-.61-.22-1.29-.46-1.98-.75-.41-.16-.83-.35-1.23-.55-1.49-.76-2.47-1.65-2.91-2.64-.28-.62-.4-1.4-.34-2.3.1-1.74.76-3.5,1.4-5.2l.34-.92s.03-.1.04-.11c.26-.74.55-1.58.91-2.38.18-.4.37-.81.58-1.17.24-.42.47-.77.68-1.04l.06-.09c.06-.07.12-.14.19-.22.42-.47.89-.83,1.4-1.08.36-.17.75-.29,1.15-.35.28-.05.55-.06.83-.06.56,0,1.13.07,1.69.18l-2.79,8.48c-.14.43-.04.9.26,1.23.31.34.77.48,1.21.38l2.72-.64,2.03,2.33c.24.28.58.43.94.43.08,0,.16-.01.24-.02.44-.09.8-.4.95-.83l2.81-8.32c.08.04.16.09.23.13.02.01.04.02.06.03,1.05.62,1.78,1.32,2.21,2.12,0,.01.01.03.02.04.03.05.05.1.07.15,0,0,.01,0,.01.02.1.22.18.45.24.69.17.73.16,1.6-.03,2.65ZM21.85,45.25l2.13-6.44c.31.1.62.21.91.32l1.52.55c.39.14.81.29,1.24.46l-2.19,6.47-1.1-1.26c-.3-.35-.77-.51-1.23-.4l-1.28.3ZM32.65,39.95c-.34-.28-.72-.53-1.12-.77-.03-.02-.06-.04-.09-.06-.61-.35-1.3-.68-2.09-1-.72-.3-1.45-.56-2.09-.79l-1.52-.55c-.58-.21-1.2-.43-1.85-.64-.1-.03-.19-.06-.29-.09-.01,0-.02-.01-.03-.01-.02-.01-.04-.01-.07-.01-.55-.17-1.14-.32-1.75-.43l12.21-8.75-1.31,13.1ZM43.54,19.39s-.02.05-.02.08l-.05.23-.23,1.13c-.3,1.45-1.58,2.44-3,2.44-.09,0-.18,0-.28-.01h-.03c-.1-.02-.2-.03-.3-.05l-9.59-1.97c-1.65-.34-2.72-1.95-2.38-3.6l.25-1.21h0v-.03l.7-3.41,15.58,3.19-.65,3.21Z\"></path><path d=\"M43.52,19.47l-.05.23s.01-.06.01-.09c.01-.05.02-.1.04-.14Z\"></path><circle cx=\"35.48\" cy=\"18.81\" r=\"2.5\"></circle>",
  "facilities": "<circle cx=\"29.05\" cy=\"10.97\" r=\"2.5\"></circle><g><path d=\"M59.95,56.77h-.7v-25.6c0-.7-.6-1.2-1.2-1.2h-10v-8.7c0-1-.5-1.8-1.4-2.3l-12.8-7c-.6-.3-1.4-.1-1.7.5-.3.6-.1,1.4.5,1.7l12.8,7,.1.1v35.3c0,.1-.1.1-.1.1h-6.1v-14.4c0-1.1-.9-2.1-2.1-2.1h-8.5c-1.1,0-2.1.9-2.1,2.1v14.5h-6.2c-.1,0-.1-.1-.1-.1V7.47s0-.1.1-.1h.1l3.8,2.1c.6.3,1.4.1,1.7-.5.3-.6.1-1.4-.5-1.7l-3.8-2.1c-.8-.5-1.8-.4-2.6,0-.8.5-1.3,1.3-1.3,2.3v6.1H7.85c-.7,0-1.2.6-1.2,1.2v42h-.9c-.7,0-1.2.6-1.2,1.2s.6,1.2,1.2,1.2h54.3c.7,0,1.2-.6,1.2-1.2s-.6-1.2-1.3-1.2ZM17.75,56.67h0l-8.8.1V16.07h8.8v40.6ZM36.85,42.47v14.3h-8v-14.3h8ZM56.75,56.77h-8.8v-24.3h8.8v24.3Z\"></path><path d=\"M25.15,22.57v1.1c0,.5.4.8.8.8h4c.5,0,.8-.4.8-.8v-1.1c0-.5-.4-.8-.8-.8h-4c-.5-.1-.8.3-.8.8Z\"></path><path d=\"M35.75,24.57h4c.5,0,.8-.4.8-.8v-1.1c0-.5-.4-.8-.8-.8h-4c-.5,0-.8.4-.8.8v1.1c-.1.4.3.8.8.8Z\"></path><path d=\"M30.85,29.57c0-.5-.4-.8-.8-.8h-4c-.5,0-.8.4-.8.8v1.1c0,.5.4.8.8.8h4c.5,0,.8-.4.8-.8v-1.1Z\"></path><path d=\"M34.85,30.67c0,.5.4.8.8.8h4c.5,0,.8-.4.8-.8v-1.1c0-.5-.4-.8-.8-.8h-4c-.5,0-.8.4-.8.8v1.1Z\"></path><path d=\"M29.95,35.67h-4c-.5,0-.8.4-.8.8v1.1c0,.5.4.8.8.8h4c.5,0,.8-.4.8-.8v-1.1c.1-.4-.3-.8-.8-.8Z\"></path><path d=\"M34.85,37.67c0,.5.4.8.8.8h4c.5,0,.8-.4.8-.8v-1.1c0-.5-.4-.8-.8-.8h-4c-.5,0-.8.4-.8.8v1.1Z\"></path></g>",
  "file": "<path d=\"M50.28,19.14l-10.61-10.61c-.94-.94-2.19-1.45-3.51-1.45h-18.94c-2.73,0-4.96,2.22-4.96,4.96v39.92c0,2.73,2.23,4.96,4.96,4.96h29.55c2.73,0,4.96-2.23,4.96-4.96v-29.31c0-1.33-.52-2.57-1.45-3.51ZM38.34,10.74l9.73,9.73h-8.31c-.78,0-1.42-.64-1.42-1.42v-8.31ZM49.23,51.96c0,1.35-1.11,2.46-2.46,2.46h-29.55c-1.36,0-2.46-1.11-2.46-2.46V12.04c0-1.36,1.1-2.46,2.46-2.46h18.62v9.47c0,2.16,1.76,3.92,3.92,3.92h9.47v28.99Z\"></path><path d=\"M34.39,48.2h-15.52c-.69,0-1.25-.56-1.25-1.25s.56-1.25,1.25-1.25h15.52c.69,0,1.25.56,1.25,1.25s-.56,1.25-1.25,1.25Z\"></path><path d=\"M41.97,40.99h-23.1c-.69,0-1.25-.56-1.25-1.25s.56-1.25,1.25-1.25h23.1c.69,0,1.25.56,1.25,1.25s-.56,1.25-1.25,1.25Z\"></path><path d=\"M41.97,33.77h-23.1c-.69,0-1.25-.56-1.25-1.25s.56-1.25,1.25-1.25h23.1c.69,0,1.25.56,1.25,1.25s-.56,1.25-1.25,1.25Z\"></path><circle cx=\"21.37\" cy=\"22.81\" r=\"2.5\"></circle>",
  "finance": "<g><path d=\"M56.47,23.28h-8.9l-2.17-8.58c-.37-1.45-1.28-2.67-2.56-3.44-1.28-.76-2.79-.98-4.24-.62L6.17,18.87c-1.45.37-2.67,1.28-3.44,2.56-.77,1.29-.98,2.79-.62,4.24l2.34,9.23h0l1.63,6.45h0l.71,2.78c.64,2.53,2.93,4.23,5.43,4.23.45,0,.92-.06,1.37-.17l3.82-.97v.71c0,3.09,2.51,5.6,5.6,5.6h33.45c3.09,0,5.6-2.51,5.6-5.6v-19.05c0-3.09-2.51-5.6-5.6-5.6h0ZM4.88,22.71c.42-.71,1.1-1.21,1.9-1.42l32.43-8.22c.8-.2,1.64-.08,2.35.34s1.22,1.1,1.42,1.9l2.02,7.96h-21.97c-3.09,0-5.6,2.51-5.6,5.6v1.45l-10.85,2.75-2.03-8.02c-.2-.8-.08-1.64.34-2.35h0ZM7.18,35.5l10.24-2.59v4.28l-9.22,2.33s-1.02-4.02-1.02-4.02ZM12.98,45.77c-1.66.42-3.35-.59-3.77-2.24l-.4-1.57,8.6-2.18v4.87l-4.44,1.12h.01ZM59.57,47.93c0,1.71-1.39,3.1-3.1,3.1H23.02c-1.71,0-3.1-1.39-3.1-3.1v-19.05c0-1.71,1.39-3.1,3.1-3.1h33.45c1.71,0,3.1,1.39,3.1,3.1v19.05Z\"></path><path d=\"M36.34,44.3h-9.98c-.69,0-1.25.56-1.25,1.25s.56,1.25,1.25,1.25h9.98c.69,0,1.25-.56,1.25-1.25s-.56-1.25-1.25-1.25Z\"></path><path d=\"M41.98,39.28h-15.61c-.69,0-1.25.56-1.25,1.25s.56,1.25,1.25,1.25h15.61c.69,0,1.25-.56,1.25-1.25s-.56-1.25-1.25-1.25Z\"></path></g><circle cx=\"51.19\" cy=\"42.13\" r=\"2.5\"></circle>",
  "game-controller": "<circle cx=\"45.39\" cy=\"26.25\" r=\"2.41\"></circle><path d=\"M23.56,31.39c0,.65-.52,1.17-1.17,1.17h-4.51v4.51c0,.65-.52,1.17-1.17,1.17s-1.17-.52-1.17-1.17v-4.51h-4.51c-.65,0-1.17-.52-1.17-1.17s.52-1.17,1.17-1.17h4.51v-4.51c0-.65.52-1.17,1.17-1.17s1.17.52,1.17,1.17v4.51h4.51c.65,0,1.17.52,1.17,1.17ZM45.39,34.12c-1.33,0-2.41,1.08-2.41,2.41s1.08,2.41,2.41,2.41,2.41-1.08,2.41-2.41-1.08-2.41-2.41-2.41ZM50.54,28.98c-1.33,0-2.41,1.08-2.41,2.41s1.08,2.41,2.41,2.41,2.41-1.08,2.41-2.41-1.08-2.41-2.41-2.41ZM40.25,28.98c-1.33,0-2.41,1.08-2.41,2.41s1.08,2.41,2.41,2.41,2.41-1.08,2.41-2.41-1.08-2.41-2.41-2.41ZM63.06,46.84c-.02.05-.03.1-.06.15-2.13,4.75-7.52,8.92-12.26,9.5-.02,0-.03,0-.05,0-2.85.23-4.16-2.08-5.32-4.11-1.35-2.38-2.64-4.62-6.13-4.55h-14.67c-3.37,0-4.63,2.21-5.96,4.55-1.1,1.94-2.35,4.13-4.94,4.13-.12,0-.25,0-.38-.02-.02,0-.03,0-.05,0-4.74-.58-10.13-4.75-12.26-9.5-.02-.05-.04-.1-.06-.15-.76-2.55-.25-4.82.33-6.91,0-.04.02-.07.03-.1.45-1.17.96-2.63,1.5-4.17,2.45-6.96,5.8-16.48,10.06-20.66,2.46-2.41,6.84-2.78,10.42-.86,1.93,1.03,3.04,2.4,3.85,3.4.61.76,1.01,1.23,1.36,1.27h2.05v-2.11c0-5.07,4.12-9.19,9.19-9.19.65,0,1.17.52,1.17,1.17s-.52,1.17-1.17,1.17c-3.78,0-6.86,3.08-6.86,6.86v2.11h2.64c.35-.04.75-.51,1.36-1.27.81-1,1.92-2.36,3.85-3.4,3.57-1.91,7.96-1.55,10.42.86,4.26,4.17,7.61,13.7,10.06,20.66.54,1.54,1.06,3,1.5,4.17.01.03.02.07.03.1.58,2.1,1.09,4.36.33,6.91h0ZM60.5,40.6c-.45-1.19-.96-2.64-1.5-4.18-2.37-6.74-5.62-15.97-9.49-19.76-1.75-1.72-4.98-1.92-7.69-.47-1.52.81-2.37,1.87-3.13,2.81-.85,1.05-1.66,2.05-3.06,2.13h-7.25c-1.4-.08-2.21-1.08-3.06-2.13-.76-.94-1.62-2-3.13-2.81-2.7-1.44-5.93-1.25-7.69.47-3.87,3.79-7.12,13.02-9.49,19.77-.54,1.54-1.05,2.99-1.5,4.18-.5,1.8-.89,3.58-.35,5.5,1.82,3.97,6.44,7.58,10.36,8.07,1.23.09,1.86-.79,3.08-2.94,1.4-2.46,3.32-5.83,8.2-5.73h14.64c4.73,0,6.61,3.3,7.99,5.73,1.23,2.15,1.85,3.03,3.08,2.94,3.91-.49,8.54-4.1,10.36-8.07.55-1.92.15-3.7-.35-5.5h0Z\"></path>",
  "happy-customers": "<g><path d=\"M29.67,54.1c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5,2.5-1.1,2.5-2.5-1.1-2.5-2.5-2.5Z\"></path><path d=\"M55.07,31.8c-.7-.1-1.3.5-1.3,1.2-.4,6.7-3.7,12.9-8.6,17-1.4-4.9-5.1-8.8-9.8-10.6,3.6-2,6-5.8,5.9-10.2-.1-6-5-11-11-11.3-6.5-.3-11.9,5-11.9,11.5,0,4.3,2.4,8.1,5.9,10-4.7,1.8-8.4,5.7-9.8,10.6-5.6-4.4-8.9-11.1-8.9-18.5,0-13.3,10.8-24.1,24.1-24.1,5.2,0,10.1,1.6,14.2,4.6.6.4,1.3.3,1.7-.3s.3-1.3-.3-1.7c-4.6-3.4-10-5.1-15.7-5.1-14.6,0-26.5,11.9-26.5,26.6,0,12.4,8.4,23,20.4,25.9h.3c.6,0,1.1-.4,1.2-1,.2-.7-.3-1.3-.9-1.5-2.8-.7-5.3-1.8-7.6-3.3,1.2-5.2,5.9-10.8,13.2-10.8s12,5.5,13.2,10.7c-2.3,1.5-4.8,2.7-7.6,3.3-.7.2-1.1.8-.9,1.5.1.6.6,1,1.2,1h.3c11.3-2.7,19.6-12.7,20.3-24.3.1-.6-.4-1.2-1.1-1.2ZM29.67,38.4h0c-3.2.2-6.3-1.5-7.8-4.3-3.6-6.9,1.5-13.9,8.1-13.6,4.5.1,8.6,4.2,8.7,8.7.2,5-3.9,9.2-9,9.2h0Z\"></path></g><path d=\"M52.7,27.61h.04c.13.05.27.08.42.08h0c.14,0,.28-.03.42-.08h.04c3.5-1.34,5.98-4.74,6.89-7.51.63-1.9.56-3.6-.19-4.78-.72-1.13-2.07-1.81-3.46-1.72-1.03.06-2.4.54-3.69,2.24-1.29-1.7-2.66-2.18-3.69-2.24-1.36-.08-2.74.59-3.45,1.72-.75,1.18-.82,2.88-.19,4.78.92,2.77,3.4,6.16,6.89,7.51h-.01ZM48.21,16.72c.24-.35.63-.57,1.08-.57,1.21,0,1.95,1.77,2.78,2.77.32.38.81.69,1.3.59.9-.18,1.32-1.36,1.78-2.02.34-.49.76-.96,1.31-1.18s1.27-.14,1.64.33c.26.33.31.78.3,1.2-.04.83-.31,1.64-.67,2.4-.91,1.92-2.38,3.58-4.22,4.64-.12.07-.26.14-.4.13-.13,0-.24-.08-.34-.15-2.2-1.43-3.99-3.58-4.69-6.11-.14-.51-.24-1.06-.1-1.58.04-.17.12-.32.22-.46Z\"></path>",
  "headphones": "<g><circle cx=\"8.56\" cy=\"29.83\" r=\"2.57\"></circle><circle cx=\"55.44\" cy=\"29.82\" r=\"2.57\"></circle></g><path d=\"M24.2,44.96c-1.41-2.95-3.17-6.1-4.7-8.42-2.34-3.55-3.71-4.65-5.04-4.06-.04.02-.09.05-.14.08-.04.01-.08.02-.12.04-.77.34-1.52.72-2.25,1.08l-.53.27c-1.38.69-2.81,1.41-4.09,2.4-1.4,1.07-2.19,2.35-2.37,3.8-.22,1.86.05,2.98.69,4.66.96,2.49,2.17,4.91,3.42,7.37,1.19,2.35,1.73,3.32,3.22,5.65,1.01,1.58,2.14,3.2,3.78,4.12.76.43,1.61.64,2.53.64.62,0,1.26-.1,1.94-.29,1.56-.44,5.26-2.05,6.8-3.12,1.37-.96,1.31-2.32.19-5.94-.74-2.41-1.95-5.43-3.32-8.29h0ZM21.96,46.03c2.11,4.41,3.4,8.26,3.76,10.19-1.38-1.31-3.78-4.39-5.91-8.66-2.52-5.03-3.69-9.58-3.95-11.83,1.4,1.71,3.82,5.53,6.1,10.3h0ZM19.85,59.91c-1.06.3-1.87.26-2.57-.13-1.14-.64-2.06-1.98-2.9-3.29-1.45-2.26-1.94-3.14-3.1-5.44-1.22-2.4-2.39-4.76-3.32-7.15-.55-1.42-.7-2.12-.54-3.47.09-.78.54-1.46,1.41-2.13,1.1-.84,2.42-1.51,3.69-2.15l.54-.27c.1-.05.21-.11.31-.16.26,3.14,1.9,8.32,4.21,12.93,1.76,3.51,4.34,7.42,6.49,9.4l-.3.15c-1.28.64-2.6,1.31-3.93,1.69h0ZM59.05,40.14c-.17-1.45-.97-2.73-2.37-3.8-1.28-.99-2.71-1.7-4.09-2.4l-.54-.27c-.72-.36-1.47-.74-2.24-1.08-.04-.02-.08-.03-.12-.04-.05-.03-.1-.05-.14-.08-1.33-.6-2.7.51-5.04,4.06-1.53,2.32-3.28,5.47-4.69,8.42-1.36,2.85-2.57,5.87-3.31,8.29-1.12,3.62-.94,5.16.2,5.94.61.42,5.24,2.67,6.79,3.11.68.19,1.32.29,1.94.29.92,0,1.76-.22,2.53-.65,1.64-.92,2.76-2.54,3.77-4.12,1.5-2.34,2.03-3.3,3.22-5.65,1.25-2.46,2.45-4.88,3.41-7.38.64-1.67.91-2.8.69-4.66h0ZM42.04,46.03c2.28-4.77,4.69-8.59,6.09-10.3-.26,2.24-1.43,6.79-3.94,11.83-2.14,4.27-4.53,7.35-5.91,8.66.37-1.93,1.65-5.77,3.76-10.19h0ZM56.04,43.9c-.92,2.39-2.04,4.65-3.31,7.15-1.16,2.29-1.65,3.17-3.1,5.44-.84,1.31-1.76,2.65-2.9,3.29-.7.39-1.51.43-2.57.13-1.33-.38-2.65-1.05-3.93-1.69l-.3-.15c2.15-1.97,4.73-5.89,6.48-9.4,2.31-4.62,3.95-9.8,4.21-12.94.1.05.2.1.31.15l.55.28c1.28.64,2.6,1.3,3.7,2.15.87.67,1.32,1.34,1.41,2.13.16,1.35,0,2.05-.54,3.47h0ZM53.24,24.41c.13.61.7,1.03,1.32.97.62-.06,1.11-.56,1.13-1.19.07-1.78.11-4.08.11-4.63,0-4.53-2.52-9.12-6.92-12.59-4.56-3.6-10.55-5.57-16.88-5.57h0c-6.33,0-12.33,1.98-16.89,5.58-4.39,3.47-6.91,8.06-6.91,12.59,0,.55.04,2.86.11,4.63.02.63.51,1.13,1.13,1.19.04,0,.07,0,.11,0,.58,0,1.09-.4,1.21-.98.84-3.82,3.21-7.34,6.69-9.91,3.9-2.88,8.93-4.4,14.55-4.4h0c5.62,0,10.65,1.52,14.54,4.4,3.48,2.57,5.85,6.08,6.69,9.91h0ZM32,7.62h0c-6.15,0-11.69,1.69-16.02,4.89-2.09,1.55-3.84,3.4-5.16,5.46.52-3.24,2.58-6.47,5.84-9.04,4.12-3.25,9.57-5.04,15.35-5.05h0c5.78,0,11.22,1.79,15.34,5.04,3.26,2.57,5.32,5.8,5.84,9.04-1.32-2.06-3.07-3.92-5.16-5.46-4.33-3.2-9.87-4.88-16.02-4.88h0Z\"></path>",
  "home-tech": "<circle cx=\"32.01\" cy=\"16.75\" r=\"2.5\"></circle><g><path d=\"M24.94,11.98c-.47.5-.45,1.29.05,1.77.5.47,1.29.45,1.77-.05,1.39-1.47,3.28-2.29,5.3-2.29s3.91.81,5.3,2.29c.25.26.58.39.91.39.31,0,.62-.11.86-.34.5-.47.52-1.27.05-1.77-1.87-1.98-4.4-3.07-7.12-3.07s-5.25,1.09-7.12,3.07Z\"></path><path d=\"M23.79,10.26c2.17-2.26,5.09-3.5,8.22-3.5s6.04,1.24,8.22,3.5c.25.25.57.38.9.38s.62-.12.87-.35c.5-.48.51-1.27.03-1.77-2.65-2.75-6.21-4.26-10.02-4.26s-7.37,1.51-10.02,4.26c-.48.5-.46,1.29.03,1.77.5.48,1.29.46,1.77-.03Z\"></path><path d=\"M50,32.4l-4.23-3.09-.03-5.98c0-1.01-.83-1.84-1.84-1.84h-3.68c-1.02,0-1.84.83-1.84,1.84v1.43l-4.08-2.59c-1.4-.91-3.21-.91-4.62,0l-15.61,10.19c-.69.45-.98,1.28-.72,2.06s.98,1.27,1.81,1.23c.65-.04,1.3-.07,1.95-.1-.5,7.2-.49,14.23.06,21.46.11,1.22,1.15,2.25,2.37,2.34,2.83.21,4.3.29,7.16.39h.08c.61,0,1.18-.23,1.61-.66.46-.45.71-1.09.69-1.75-.09-3.79-.14-7.62-.15-11.39h6.16c0,3.77-.07,7.6-.15,11.38-.02.66.23,1.3.69,1.75.45.45,1.04.7,1.69.66,2.85-.09,4.32-.17,7.15-.39,1.22-.09,2.26-1.12,2.37-2.36.55-7.22.56-14.25.06-21.45.65.03,1.3.06,1.95.1h.11c.77,0,1.44-.48,1.69-1.22.26-.78-.02-1.6-.66-2.03v.02ZM31.05,24.27c.57-.37,1.32-.37,1.9,0l6.01,3.81c.38.25.87.26,1.27.04s.65-.64.65-1.09v-3.04h2.36l.03,5.96c0,.4.19.77.51,1l2.83,2.06c-4.91-.25-9.77-.37-14.62-.37s-9.52.12-14.33.36l13.39-8.74h0ZM44.36,56.78s-.06.08-.07.08c-2.75.21-4.14.28-6.84.37.09-3.78.14-7.61.15-11.38,0-1.33-1.08-2.41-2.42-2.42h-6.33c-1.33,0-2.42,1.09-2.42,2.42.01,3.79.06,7.64.2,11.37-2.73-.09-4.12-.17-6.88-.37-.03,0-.08-.05-.08-.06-.55-7.19-.56-14.2-.04-21.38,8.3-.36,16.47-.36,24.77,0,.51,7.18.51,14.18-.04,21.35v.02Z\"></path></g>",
  "id-badge": "<path d=\"M29.45,41.36c-.57-3.84-3.21-7.01-6.76-8.33,2.3-1.29,3.87-3.76,3.87-6.58,0-4.16-3.39-7.54-7.54-7.54s-7.54,3.39-7.54,7.54c0,2.82,1.56,5.28,3.87,6.58-3.55,1.33-6.19,4.5-6.76,8.34-.42,3.09,1.51,2.59,1.51,1.21.14-3.74,2.6-6.9,5.99-8.07l.83,2.06-1.93,8.36c-.05.24,0,.49.15.68l3.22,4.16c.16.2.39.32.65.32s.49-.12.65-.32l3.22-4.16c.15-.2.2-.45.15-.68l-1.93-8.36.83-2.06c3.39,1.18,5.84,4.33,5.99,8.08,0,1.29,1.91,1.31,1.54-1.22ZM13.11,26.44c0-3.26,2.65-5.91,5.91-5.91s5.91,2.65,5.91,5.91-2.65,5.9-5.9,5.9h0c-3.26,0-5.9-2.65-5.9-5.9h-.01ZM21.36,44.9l-2.34,3.02-2.34-3.02,1.75-7.6h1.18l1.75,7.6h0ZM19.7,35.67h-1.36l-.63-1.58c.43-.07.87-.11,1.31-.11h0c.45,0,.88.05,1.31.11l-.63,1.58h0Z\"></path><path d=\"M62.25,23.3c-.6-3.36-1.94-5.74-4.1-7.29-.23-.16-.45-.31-.69-.44-.13-.09-.26-.16-.39-.23-.5-.3-1.03-.54-1.58-.76-.31-.13-.63-.25-.96-.35-2.09-.69-4.35-.99-6.55-1.22-4.08-.44-8.22-.56-12.43-.6v-2.47c0-.54-.46-1-1-1h-5.11c-.54,0-.99.46-.99,1v2.47c-4.17.03-8.27.15-12.31.58-.04,0-.09.01-.13.01-3.56.38-7.27.94-10.16,3-.26.19-.52.41-.77.62-.24.23-.48.46-.7.7-.18.2-.35.42-.51.64-.08.09-.14.18-.2.28-.14.18-.26.38-.37.58-.72,1.23-1.24,2.7-1.54,4.45-.08.42-.14.85-.2,1.28-.04.39-.1.78-.13,1.17-.03.33-.06.66-.09.99-.02.23-.04.47-.04.7-.02.25-.03.51-.04.77-.02.4-.03.82-.04,1.22-.01.42-.02.82-.02,1.24-.01.81-.01,1.63-.01,2.44v1.89c0,.6,0,1.2.01,1.8,0,.41.01.82.02,1.23.01.41.02.82.04,1.23.01.26.02.51.04.77,0,.24.02.47.04.7.02.33.04.66.09.99.03.39.09.79.13,1.17.06.43.13.85.2,1.28.31,1.74.82,3.22,1.54,4.45.11.2.23.4.37.57.06.11.13.2.2.29.16.23.33.44.51.64.23.25.46.48.7.7.25.21.5.43.77.62,2.89,2.06,6.6,2.62,10.16,3,.04,0,.1.01.13.01,5.18.55,10.46.6,15.85.6s10.76-.04,15.99-.61c2.19-.24,4.46-.53,6.55-1.23.33-.1.65-.22.96-.35.56-.23,1.09-.47,1.58-.76.13-.06.26-.14.39-.23.24-.14.47-.29.69-.44,2.16-1.54,3.5-3.93,4.1-7.29.57-3.25.57-6.58.57-9.79v-1.28c0-3.22,0-6.54-.57-9.79ZM30.45,10.95h3.11v5.97h-3.11v-5.97ZM60.16,34.36c0,3.1,0,6.3-.53,9.32-.06.34-.13.66-.2.97-.06.27-.14.53-.21.78-.17.54-.38,1.06-.63,1.51-.01.01,0,.01,0,.01-.07.15-.17.3-.25.44h0c-.12.2-.24.38-.38.55-.01,0,0,.01,0,.01-.13.17-.26.33-.41.48-.28.32-.6.61-.94.85-.26.18-.53.34-.8.49-.17.1-.34.19-.53.27-.14.08-.31.14-.47.21-.19.1-.41.17-.61.25-.2.09-.42.15-.62.23h-.01c-1.83.58-3.88.85-5.88,1.07-5.09.55-10.33.6-15.7.6s-10.48-.04-15.51-.57c-.06-.01-.13-.01-.19-.02-3.21-.35-6.53-.83-8.89-2.53-.39-.28-.75-.61-1.06-.98-.16-.19-.32-.4-.47-.61-.42-.63-.78-1.35-1.04-2.19-.18-.55-.33-1.16-.45-1.82-.53-3.02-.53-6.24-.53-9.34v-1.25c0-3.11,0-6.32.53-9.34.12-.65.27-1.24.45-1.8.26-.84.62-1.57,1.04-2.2.15-.21.3-.41.47-.61.32-.37.67-.69,1.06-.98,2.36-1.69,5.69-2.17,8.89-2.52.06-.01.13-.01.19-.02,3.9-.42,7.89-.54,11.97-.56v2.85c0,.55.45,1,.99,1h5.11c.54,0,1-.45,1-1v-2.85c4.13.03,8.18.15,12.14.58,2,.22,4.05.49,5.88,1.07h.01c.2.08.41.14.62.23.2.08.41.15.61.25.16.06.32.13.47.21.17.09.35.17.51.28.27.14.55.31.81.49.34.25.66.54.94.85.29.31.55.65.79,1.03t0,.01c.09.15.18.3.25.44.25.46.46.97.63,1.52.07.25.15.51.21.78.08.29.14.62.2.94.53,3.02.53,6.23.53,9.32v1.3Z\"></path><g><path d=\"M37.08,30.47h16.74c.45,0,.72-.36.72-.72v-1c0-.45-.36-.72-.72-.72h-16.74c-.45,0-.72.36-.72.72v1c-.09.36.27.72.72.72Z\"></path><path d=\"M37.08,35.72h16.74c.45,0,.72-.36.72-.72v-1c0-.45-.36-.72-.72-.72h-16.74c-.45,0-.72.36-.72.72v1c-.09.36.27.72.72.72Z\"></path><path d=\"M37.08,40.97h16.74c.45,0,.72-.36.72-.72v-1c0-.45-.36-.72-.72-.72h-16.74c-.45,0-.72.36-.72.72v1c-.09.36.27.72.72.72Z\"></path></g>",
  "idea": "<g><path d=\"M40.41,14.5c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5,2.5-1.1,2.5-2.5-1.1-2.5-2.5-2.5Z\"></path><g><path d=\"M49.61,49.94c0-.6-.5-1.1-1.1-1.2-1.2-.2-1.3-.3-1.5-1.5-.1-.6-.6-1.1-1.2-1.1s-1.1.5-1.2,1.1c-.2,1.2-.3,1.3-1.5,1.5-.6.1-1.1.6-1.1,1.2s.5,1.1,1.1,1.2c1.2.2,1.3.3,1.5,1.5.1.6.6,1.1,1.2,1.1s1.1-.5,1.2-1.1c.2-1.2.3-1.3,1.5-1.5.7,0,1.1-.5,1.1-1.2Z\"></path><path d=\"M11.89,14.55c.1.7.7,1.3,1.4,1.3s1.3-.6,1.4-1.3c.2-1.4.4-1.5,1.8-1.8.7-.1,1.3-.7,1.3-1.4s-.6-1.3-1.3-1.3c-1.4-.2-1.5-.4-1.8-1.8-.1-.6-.7-1.2-1.4-1.2s-1.3.6-1.4,1.3c-.2,1.4-.4,1.5-1.8,1.8-.7.1-1.3.7-1.3,1.4s.6,1.3,1.3,1.4c1.4.1,1.7.3,1.8,1.6Z\"></path><path d=\"M53.91,40.44c-1.4-.2-1.5-.4-1.8-1.8-.1-.7-.7-1.3-1.4-1.3s-1.3.6-1.4,1.3c-.2,1.4-.4,1.5-1.8,1.8-.7.1-1.3.7-1.3,1.4s.6,1.3,1.3,1.4c1.4.2,1.5.4,1.8,1.8.1.7.7,1.3,1.4,1.3s1.3-.6,1.4-1.3c.2-1.4.4-1.5,1.8-1.8.7-.1,1.3-.7,1.3-1.4s-.6-1.4-1.3-1.4Z\"></path><path d=\"M44.91,25.3c0-.8-.1-1.6-.2-2.3-.2-.9-1.1-1.3-1.9-1-.6.3-.9.8-.8,1.5.1.6.1,1.2.1,1.8,0,10.5-7.6,10.5-7.2,18.2h-1.7v-6.9c1-.1,2.3-.4,3.1-1.4.9-1,1-2.6.3-3.7-.7-1.1-2.2-1.7-3.5-1.3-1.1.3-2,1.3-2.4,2.5-.2.5-.2,1-.2,1.4h-.9c0-.8-.2-1.6-.6-2.4-.8-1.4-2.7-2.3-4.2-1.4-1.2.7-1.7,2.2-1.3,3.5.3,1,1.1,1.9,2.2,2.4.4.2.9.3,1.3.4v6.9h-1.5c.5-7.8-7.2-7.8-7.2-18.2,0-6.6,5.3-11.9,11.9-11.9,1.4,0,2.7.2,4,.7.6.2,1.2,0,1.6-.5.2-.2.2-.5.2-.7,0-.5-.4-1.1-.9-1.3-1.5-.5-3.2-.8-4.9-.8-8.1,0-14.6,6.6-14.6,14.6,0,6.5,2.6,9.7,4.7,12.3,1.6,2,2.6,3.2,2.5,5.8,0,.8.2,1.5.7,2s1.2.8,2,.8h9.4c.7,0,1.5-.3,2-.8.5-.6.8-1.3.8-2.1-.2-2.6.8-3.8,2.5-5.8,2.1-2.5,4.7-5.7,4.7-12.3ZM25.61,33.4c-.3-.3-.2-.8.2-1.1.4-.2.8-.2,1.1.2.4.5.4,1.9.4,1.9,0,0-1.2-.4-1.7-1ZM30.61,43.4h-.9v-6.6h.9v6.6ZM33.31,32.5c.3-.4.8-.4,1.1-.2.4.2.5.8.2,1.1-.5.6-1.7,1-1.7,1,0,0,0-1.4.4-1.9Z\"></path></g></g><rect x=\"23.32\" y=\"47.35\" width=\"13.9\" height=\"2.5\" rx=\"1.25\" ry=\"1.25\"></rect><rect x=\"24.32\" y=\"50.9\" width=\"11.9\" height=\"2.5\" rx=\"1.25\" ry=\"1.25\"></rect><path d=\"M26.09,54.45h8.36c.2,0,.37.17.37.37h0c0,1.18-.95,2.13-2.13,2.13h-4.84c-1.18,0-2.13-.95-2.13-2.13h0c0-.2.17-.37.37-.37Z\"></path>",
  "laptop": "<path d=\"M61.99,47.15c-.45-.48-1.12-.74-1.81-.71-.66.03-1.33.06-2,.08.79-11.28.72-22.28-.22-33.6-.22-2.29-2.32-4.28-4.7-4.44-14.25-.86-28.7-.92-42.96-.18-2.37.14-4.5,2.1-4.76,4.4-1.11,11.26-1.3,22.23-.61,33.48-.35-.02-.71-.04-1.06-.06-.7-.04-1.37.21-1.83.69-.44.46-.66,1.11-.59,1.77.11,1.07.17,1.59.3,2.67.24,2.02,2.04,3.73,4.09,3.9h0c9.35.7,18.78,1.06,28.2,1.06,8.04,0,16.08-.26,24.08-.77,2.06-.15,3.87-1.84,4.13-3.85.14-1.08.2-1.61.32-2.67.07-.66-.13-1.3-.57-1.77h0ZM7.77,12.94c.13-1.19,1.37-2.31,2.64-2.38,14.18-.74,28.54-.68,42.7.18,1.27.09,2.49,1.21,2.6,2.39.94,11.27,1.01,22.23.2,33.49-16.19.6-32.55.5-48.72-.31-.71-11.23-.52-22.15.58-33.37h0ZM34.8,49.38c-.11.66-.67,1.17-1.33,1.17h0c-1.32,0-1.98,0-3.3-.02-.66,0-1.22-.52-1.33-1.18,2.36.03,3.61.04,5.97.03h0ZM60,51.3c-.12.94-1.08,1.83-2.05,1.9-17.24,1.11-34.72,1.01-51.95-.28-.97-.08-1.92-.98-2.03-1.92-.13-1.06-.18-1.57-.29-2.61h.04c7.58.42,15.2.69,22.84.8.03,1.97,1.63,3.58,3.57,3.6,1.33.01,1.99.02,3.32.02h0c1.94,0,3.55-1.59,3.6-3.56,7.76-.03,15.5-.21,23.21-.56h.04c-.12,1.03-.18,1.55-.32,2.61h0Z\"></path><circle cx=\"32\" cy=\"14\" r=\"2.33\"></circle>",
  "learning-and-development": "<g><path d=\"M20.8,18.05c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5,2.5-1.1,2.5-2.5c0-1.2-1.1-2.5-2.5-2.5Z\"></path><path d=\"M31.7,48.95c-9.3,0-16.9-7.6-16.9-16.9,0-2.3.5-4.6,1.4-6.7.3-.6,1-.9,1.6-.6s.9,1,.6,1.6c-.7,1.8-1.1,3.7-1.1,5.7,0,8,6.5,14.4,14.4,14.4s14.4-6.4,14.4-14.4-6.4-14.4-14.4-14.4c-1.7,0-3.5.3-5.1,1-.6.2-1.4-.1-1.6-.7s.1-1.4.7-1.6c2-.7,4-1.1,6-1.1,9.3,0,16.9,7.6,16.9,16.9s-7.6,16.8-16.9,16.8Z\"></path><path d=\"M36.2,27.75c-1.2,1.2-2.3,2.5-3.5,3.7-.8.9-1.6,1.7-2.5,2.6-1-.9-1.9-1.7-2.8-2.5l-.3-.3c-.6-.5-1.5-.5-2,.1s-.5,1.4.2,2c1.4,1.2,2.7,2.4,4.1,3.6.7.6,1.5.6,2.1-.1,2.3-2.4,4.5-4.8,6.8-7.2.6-.7.6-1.5,0-2.1-.6-.6-1.5-.6-2.1.2Z\"></path></g><path d=\"M55.4,26.05h-1.7c-.2,0-.2-.1-.3-.2-.5-1.6-1.1-3.3-1.9-4.7-.1-.1,0-.3.1-.4l1.1-1.1c1.2-1.3,1.3-3.2,0-4.5-1.2-1.2-2.4-2.5-3.8-3.8-1.3-1.3-3.2-1.3-4.6,0-.4.4-.8.8-1.1,1.1-.1.1-.3.2-.4.1-1.4-.8-3-1.5-4.7-1.9-.1,0-.2-.1-.2-.3v-1.5c0-1.8-1.4-3.2-3.2-3.2h-5.4c-1.8,0-3.2,1.4-3.2,3.2v1.6c0,.2-.1.3-.2.3-1.7.4-3.3,1.1-4.7,1.9-.1.1-.3,0-.4-.1-.3-.3-.7-.7-1.1-1.1-1.4-1.3-3.3-1.3-4.6,0-1.4,1.3-2.6,2.6-3.8,3.8-1.3,1.3-1.2,3.2,0,4.5.3.3.7.7,1.1,1.1.1.1.2.3.1.4-.8,1.4-1.4,3.1-1.9,4.7,0,.2-.1.2-.3.2h-1.7c-1.7,0-3.1,1.4-3.1,3.1v5.5c0,1.7,1.4,3.1,3.1,3.1h1.7c.1,0,.2.1.3.2.5,1.6,1.1,3.3,1.9,4.7.1.1,0,.3-.1.4-.4.4-.8.8-1.1,1.1-1.2,1.3-1.3,3.2,0,4.5,1.2,1.2,2.4,2.5,3.8,3.8,1.3,1.3,3.2,1.3,4.6,0,.4-.4.8-.8,1.1-1.1.1-.1.3-.2.4-.1,1.4.8,3,1.5,4.7,1.9.1,0,.2.1.2.3v1.6c0,1.8,1.4,3.2,3.2,3.2h5.4c1.8,0,3.2-1.4,3.2-3.2v-1.6c0-.2.1-.3.2-.3,1.7-.4,3.3-1.1,4.7-1.9.1-.1.3,0,.4.1l1.1,1.1c1.4,1.3,3.3,1.3,4.6,0,1.4-1.3,2.6-2.6,3.8-3.8,1.3-1.3,1.2-3.2,0-4.5l-1.1-1.1c-.1-.1-.2-.3-.1-.4.8-1.4,1.4-3.1,1.9-4.7,0-.2.1-.2.3-.2h1.7c1.7,0,3.1-1.4,3.1-3.1v-5.5c0-1.7-1.4-3.1-3.1-3.2ZM56.2,34.45c0,.7-.4,1.1-1.1,1.1h-2.3c-.8,0-1.2.3-1.4,1.1-.5,2.1-1.3,4-2.4,5.8-.4.6-.3,1.1.2,1.6l1.7,1.7c.5.5.5,1,0,1.5l-3.5,3.5c-.5.5-1,.5-1.5,0l-1.6-1.6c-.3-.3-.6-.5-.9-.5s-.5.1-.8.3c-1.8,1.1-3.8,1.9-5.8,2.4-.7.2-1,.6-1,1.3v2.3c0,.6-.4,1-1,1h-5.6c-.6,0-1-.4-1-1v-2.4c0-.7-.3-1.1-1-1.3-2-.5-4-1.3-5.8-2.4-.3-.2-.5-.3-.8-.3s-.6.2-.9.5l-.7.7c-.3.3-.6.6-.9.9-.5.5-1,.5-1.5,0l-3.5-3.5c-.5-.5-.5-1,0-1.5.3-.3.6-.6.9-.9l.8-.8c.5-.5.6-1,.2-1.6-1.1-1.8-1.9-3.7-2.4-5.8-.2-.8-.6-1.1-1.4-1.1h-2.3c-.7,0-1.1-.4-1.1-1.1v-4.9c0-.7.4-1.1,1.1-1.1h2.3c.8,0,1.2-.3,1.4-1.1.5-2.1,1.3-4,2.4-5.8.4-.6.3-1.1-.2-1.6l-.8-.7-.9-.9c-.5-.5-.5-1,0-1.5l3.5-3.5c.5-.5,1-.5,1.5,0l1.6,1.6c.3.3.6.5.9.5s.5-.1.8-.3c1.8-1.1,3.8-1.9,5.8-2.4.7-.2,1-.6,1-1.3v-2.4c0-.6.4-1,1-1h5.6c.6,0,1,.4,1,1v2.4c0,.7.3,1.1,1,1.3,2,.5,4,1.3,5.8,2.4.3.2.5.3.8.3s.6-.2.9-.5l1.6-1.6c.5-.5,1-.5,1.5,0l3.5,3.5c.5.5.5,1,0,1.5l-1.7,1.7c-.5.5-.6,1-.2,1.6,1.1,1.8,1.9,3.7,2.4,5.8.2.8.6,1.1,1.4,1.1h2.3c.7,0,1.1.4,1.1,1.1,0,0,0,4.9,0,4.9Z\"></path>",
  "lower-cost": "<path d=\"M9.72,42.01c-1.4,0-2.54,1.14-2.54,2.54s1.14,2.54,2.54,2.54,2.54-1.14,2.54-2.54-1.14-2.54-2.54-2.54Z\"></path><g><path d=\"M51.28,35.24h0c-.7,0-1.2.6-1.2,1.2v15.1l-4.5-4.5c-.2-.2-.6-.4-.9-.4s-.6.1-.9.4c-.5.5-.5,1.3,0,1.8l6.6,6.6h0c.5.5,1.3.5,1.8,0l6.6-6.6c.5-.5.5-1.3,0-1.8s-1.3-.5-1.8,0l-4.5,4.5v-15.1c0-.7-.6-1.2-1.2-1.2Z\"></path><g><path d=\"M7.08,40.4c-.5,0-1-.4-1.2-.9-3.4-11.9,1.7-24.5,12.4-30.6,12.8-7.3,29.1-2.8,36.3,10,2.8,4.9,4,10.5,3.3,16.2-.1.7-.7,1.2-1.4,1.1-.7-.1-1.2-.7-1.1-1.4.6-5.1-.5-10.2-3-14.7-6.6-11.6-21.4-15.6-32.9-9-9.7,5.5-14.3,16.9-11.2,27.7.2.7-.2,1.4-.9,1.5,0,.1-.2.1-.3.1Z\"></path><path d=\"M31.58,58.6c-7.2,0-14.4-2.9-19.5-8.4-.5-.5-.4-1.3.1-1.8s1.3-.4,1.8.1c7.2,7.7,18.8,9.8,28.2,5.1.6-.3,1.4-.1,1.7.6.3.6.1,1.4-.6,1.7-3.7,1.9-7.8,2.7-11.7,2.7Z\"></path></g></g><path d=\"M32.01,29.76v-7.58c1.82.27,3.01,1.24,3.45,2.78.17.6.76.99,1.38.99.94,0,1.62-.9,1.38-1.81-.71-2.66-2.71-4.34-6.21-4.62v-2.95c0-.55-.45-1-1-1s-1,.45-1,1v2.93c-.22,0-.44.02-.67.04-3.27.3-5.84,3.02-5.78,6.3.07,3.7,2.72,5.55,6.45,6.13v8.04c-2.01-.3-3.37-1.53-3.84-3.55-.16-.69-.74-1.2-1.45-1.2-.95,0-1.66.89-1.45,1.81.76,3.25,3.09,5.3,6.74,5.61v3.13c0,.55.44,1,1,1s1-.45,1-1v-3.14c4.03-.34,6.77-2.79,6.77-6.81,0-3.73-2.39-5.46-6.77-6.1ZM30.01,29.38c-2.64-.67-3.69-1.83-3.69-3.75s1.43-3.23,3.69-3.48v7.23ZM32.01,40.01v-7.75c2.51.5,3.94,1.54,3.94,3.79s-1.55,3.65-3.94,3.96Z\"></path>",
  "mail-received": "<path d=\"M9.44,56.41s-.03-.02-.05-.04c-.02-.02-.04-.04-.05-.07.03.04.07.08.1.11Z\"></path><path d=\"M54.68,56.28s-.05.06-.07.09c-.02.02-.03.03-.05.04.04-.04.08-.08.12-.13Z\"></path><path d=\"M32.02,36.53c-5.02,0-9.1-4.08-9.1-9.1s4.08-9.1,9.1-9.1,9.1,4.08,9.1,9.1-4.08,9.1-9.1,9.1ZM32.02,20.83c-3.64,0-6.6,2.96-6.6,6.6s2.96,6.6,6.6,6.6,6.6-2.96,6.6-6.6-2.96-6.6-6.6-6.6Z\"></path><path d=\"M54.89,26.66c-.02-.08-.04-.17-.08-.25h0c-.04-.08-.08-.16-.13-.23-.06-.07-.12-.14-.19-.2l-.13-.11-5.19-4.51v-7.29c0-.69-.56-1.25-1.25-1.25h-8.61l-6.62-5.74c-.47-.41-1.17-.41-1.64,0l-6.55,5.74h-8.69c-.69,0-1.25.56-1.25,1.25v7.48l-4.93,4.32-.13.11c-.14.12-.25.27-.32.43-.04.08-.06.16-.08.25-.02.08-.03.17-.03.26v28.61c0,.09.01.17.03.25.01.08.04.16.07.24.01.02.01.03.03.05.03.07.06.13.11.19,0,0,0,.03.03.04.03.04.07.08.1.11.06.06.13.12.19.16.07.05.14.09.22.12.15.06.31.09.47.09h25.53c.69,0,1.25-.56,1.25-1.25s-.56-1.25-1.25-1.25H13.58l13.28-11.93c3.13,2.07,7.18,2.06,10.31-.01l13.24,11.94h-4.51c-.69,0-1.25.56-1.25,1.25s.56,1.25,1.25,1.25h7.77c.32,0,.64-.12.88-.37.04-.04.08-.08.12-.13.11-.15.19-.32.22-.5.02-.08.03-.16.03-.25v-28.61c0-.09-.01-.17-.03-.26ZM49.18,24.67l2.57,2.23-2.57,2.17v-4.4ZM31.88,9.68l3.63,3.14h-7.21l3.58-3.14ZM14.57,24.86v3.99l-2.32-1.95,2.32-2.04ZM11.57,52.72v-23.12l13.3,11.17-13.3,11.95ZM36.54,39.7s-.06.05-.09.08c-2.56,2.16-6.29,2.16-8.86,0-.02-.02-.05-.04-.07-.06l-10.45-8.77v-15.63h29.61v15.85l-10.14,8.53ZM52.43,52.72l-13.27-11.96,13.27-11.16v23.12Z\"></path><path d=\"M30.12,31.52c-.33,0-.64-.13-.87-.36l-1.48-1.44c-.49-.48-.5-1.27-.02-1.77s1.27-.5,1.77-.02l.57.55,4.13-4.38c.47-.5,1.26-.53,1.77-.05s.53,1.26.05,1.77l-5,5.3c-.23.24-.55.39-.88.39h-.03Z\"></path><path d=\"M42.35,56c.08-.75-.47-1.43-1.23-1.51s-1.43.47-1.51,1.23.47,1.43,1.23,1.51,1.43-.47,1.51-1.23Z\"></path>",
  "mail": "<g><path d=\"M49.98,16.37c0-.6-.5-1.1-1.1-1.2-1.2-.2-1.3-.3-1.5-1.5-.1-.6-.6-1.1-1.2-1.1s-1.1.5-1.2,1.1c-.2,1.2-.3,1.3-1.5,1.5-.6.1-1.1.6-1.1,1.2s.5,1.1,1.1,1.2c1.2.2,1.3.3,1.5,1.5.1.6.6,1.1,1.2,1.1s1.1-.5,1.2-1.1c.2-1.2.3-1.3,1.5-1.5.7-.1,1.1-.6,1.1-1.2Z\"></path><path d=\"M50.38,14.27c.1.6.6,1.1,1.2,1.1s1.1-.5,1.2-1.1c.2-1.2.3-1.3,1.5-1.5.6-.1,1.1-.6,1.1-1.2s-.5-1.1-1.1-1.2c-1.2-.2-1.3-.3-1.5-1.5-.1-.6-.6-1.1-1.2-1.1s-1.1.5-1.2,1.1c-.2,1.2-.3,1.3-1.5,1.5-.6.1-1.1.6-1.1,1.2s.5,1.1,1.1,1.2c1.2.2,1.4.3,1.5,1.5Z\"></path><path d=\"M54.38,19.87c-1.2-.2-1.3-.3-1.5-1.5-.1-.6-.6-1.1-1.2-1.1s-1.1.5-1.2,1.1c-.2,1.2-.3,1.3-1.5,1.5-.6.1-1.1.6-1.1,1.2s.5,1.1,1.1,1.2c1.2.2,1.3.3,1.5,1.5.1.6.6,1.1,1.2,1.1s1.1-.5,1.2-1.1c.2-1.2.3-1.3,1.5-1.5.6-.1,1.1-.6,1.1-1.2s-.5-1.1-1.1-1.2Z\"></path><path d=\"M56.78,13.87c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5,2.5-1.1,2.5-2.5-1.1-2.5-2.5-2.5Z\"></path></g><path d=\"M52.68,26.27c-.7,0-1.2.5-1.2,1.1v10.7c0,.7-.1,1.3-.4,1.9l-.1-.1c-3.2-3.1-7.6-7.2-11.8-10.1,1.9-1.4,4-3.2,6-5,.5-.5.6-1.3.1-1.8s-1.3-.6-1.8-.1c-2.3,2.1-4.6,4-6.6,5.4-.2.1-.4.3-.6.4-.7.4-1.3.8-1.9,1.1-.3.2-.6.3-.8.4-.9.4-1.7.6-2.3.6s-1.4-.2-2.3-.6c-.3-.1-.5-.3-.8-.4-.6-.3-1.2-.7-1.9-1.1-.2-.1-.4-.3-.6-.4-4-2.7-8.7-7.1-12.8-11.3h0l-.1-.1c1-1,2.3-1.7,3.8-1.7h23.5c.6,0,1.1-.6,1.1-1.2s-.5-1.2-1.1-1.2h-23.5c-2.1,0-4,.9-5.4,2.5-.6.6-1.1,1.3-1.5,2-.7,1.2-1.1,2.6-1.1,4.2v16.4c0,1.5.4,2.9,1.1,4.2.2.4.4.7.7,1.1s.5.7.8.9h0c1.5,1.5,3.7,2.4,6,2.4h28.2c2.3,0,4.5-.9,6-2.4.6-.6,1.1-1.3,1.5-2,.7-1.1,1.1-2.4,1.1-3.7v-11c0-.6-.6-1.1-1.3-1.1ZM10.98,37.57v-16.3c0-.7.1-1.5.4-2.1l.1.1c3.2,3.3,7.7,7.6,11.8,10.7h0c-4.2,2.9-8.6,7-11.8,10.1-.3-.9-.5-1.7-.5-2.5ZM45.28,43.67h-28.2c-1.7,0-3.1-.7-4.2-1.7,4-4,8.8-8.1,12.6-10.7.2.2.5.3.7.4,1.9,1.1,3.6,1.8,5,1.8s3.1-.7,5-1.8c.2-.1.5-.3.7-.4,3.9,2.5,8.6,6.7,12.6,10.7-1,1.1-2.5,1.7-4.2,1.7Z\"></path>",
  "megaphone": "<path d=\"M51.15,17.49c-.3,0-.6-.11-.84-.32-.51-.46-.55-1.25-.09-1.77l5.27-5.85c.46-.51,1.25-.55,1.77-.09.51.46.55,1.25.09,1.77l-5.27,5.85c-.25.27-.59.41-.93.41Z\"></path><path d=\"M51.15,22.28c-.56,0-1.08-.38-1.21-.96-.16-.67.25-1.35.92-1.51l6.26-1.5c.67-.16,1.35.25,1.51.92.16.67-.25,1.35-.92,1.51l-6.26,1.5c-.1.02-.2.03-.29.03Z\"></path><path d=\"M46.41,15.9c-.09,0-.17,0-.26-.03-.68-.14-1.11-.81-.96-1.48l1.34-6.29c.14-.67.81-1.1,1.48-.96.68.14,1.11.81.96,1.48l-1.34,6.29c-.12.59-.64.99-1.22.99Z\"></path><path d=\"M46.23,44.41c.06,0,.12,0,.18-.02,0,0-.02.01-.03.01h-.15Z\"></path><path d=\"M46.83,44.27l-.21.09c-.07.02-.14.03-.21.03.15-.02.29-.06.42-.12Z\"></path><path d=\"M46.41,44.39c.07,0,.14-.01.21-.03l.21-.09c-.13.06-.27.1-.42.12ZM46.38,44.4s.02-.01.03-.01c-.06.01-.12.02-.18.02h.15Z\"></path><path d=\"M46.41,44.39s-.02.01-.03.01h-.15c.06,0,.12,0,.18-.01Z\"></path><path d=\"M46.12,20.6c-2.9-4.6-6.42-8.44-9.92-10.82-3.8-2.58-7.21-3.17-9.6-1.66-.71.44-1.29,1.05-1.74,1.79-.01.02-.02.03-.03.05-.02.03-.04.06-.06.09L6.02,40.61c-.9,1.48-.89,3.32.02,4.8.84,1.36,2.3,2.16,3.87,2.16.14,0,.27-.01.41-.02l6.79-.59.35,1.37,1.6,6.22c.21.81.71,1.48,1.43,1.9.71.43,1.55.55,2.35.34l1.51-.39c.81-.2,1.48-.71,1.9-1.43.43-.71.55-1.55.34-2.35l-1.6-6.22-.03-.13,21.27-1.86c.06,0,.12,0,.18-.02.15-.02.29-.06.42-.12l-.21.09c.84-.07,1.62-.33,2.31-.76,4.68-2.95,3.45-13.05-2.81-23ZM10.1,45.06c-.79.07-1.51-.29-1.93-.97-.43-.68-.43-1.49-.01-2.17l15.65-25.52c.03.35.08.72.13,1.09.63,4.19,2.57,9.03,5.47,13.63,2.89,4.6,6.41,8.44,9.91,10.82.26.18.52.35.78.5l-30,2.62ZM47.6,41.48c-.41.25-.9.4-1.44.43-1.45.08-3.34-.62-5.43-2.04-3.22-2.19-6.49-5.77-9.21-10.09-2.71-4.31-4.53-8.81-5.11-12.66-.52-3.45.04-5.96,1.52-6.89.46-.29,1.02-.43,1.66-.43,1.41,0,3.22.7,5.2,2.05,1.62,1.09,3.24,2.53,4.8,4.24,1.56,1.71,3.06,3.69,4.41,5.84,5.8,9.21,6.55,17.7,3.6,19.55Z\"></path><path d=\"M46.83,44.27l-.21.09c-.07.02-.14.03-.21.03.15-.02.29-.06.42-.12Z\"></path>",
  "mobile-phone": "<path d=\"M34.7,62.09c-.81,0-1.61,0-2.41-.02h-1.23c-3.14-.04-6.39-.08-9.56-.67-3.25-.61-5.55-1.94-7.03-4.05-1.99-2.83-2.48-6.46-2.82-9.94-.5-5.11-.49-10.3-.43-15.62.06-5.32.16-10.52.76-15.61.41-3.46.98-7.07,3.03-9.87,1.52-2.08,3.85-3.36,7.12-3.91,3.18-.53,6.42-.49,9.56-.46h1.26c3.14.04,6.39.08,9.55.67,3.26.61,5.56,1.94,7.03,4.06,1.99,2.85,2.48,6.47,2.82,9.93.5,5.11.49,10.3.43,15.62h0c-.06,5.32-.16,10.52-.76,15.61-.41,3.47-.98,7.09-3.03,9.87-1.53,2.09-3.86,3.36-7.12,3.9-2.38.39-4.79.47-7.17.47h0ZM29.31,4.4c-2.28,0-4.57.08-6.77.44-2.6.43-4.4,1.39-5.52,2.92-1.69,2.32-2.2,5.57-2.57,8.7-.59,4.97-.69,10.09-.74,15.34-.06,5.25-.07,10.37.42,15.36.31,3.15.74,6.41,2.38,8.75,1.09,1.56,2.88,2.56,5.46,3.04,2.95.56,6.09.59,9.12.62h1.24c3.04.05,6.18.08,9.14-.41,2.59-.43,4.4-1.39,5.52-2.92,1.69-2.3,2.19-5.56,2.57-8.7.59-4.97.69-10.1.74-15.34s.07-10.37-.42-15.36c-.31-3.14-.74-6.4-2.38-8.75-1.09-1.56-2.87-2.55-5.46-3.04-2.95-.56-6.08-.59-9.12-.62h-1.26c-.78-.02-1.56-.03-2.35-.03h0Z\"></path><path d=\"M35.04,10.89h-.01l-5.6-.06c-.69,0-1.23-.57-1.23-1.25,0-.68.56-1.23,1.24-1.23h.01l5.6.06c.69,0,1.23.57,1.23,1.25,0,.68-.56,1.23-1.24,1.23Z\"></path><circle cx=\"32.12\" cy=\"54.36\" r=\"2.57\"></circle>",
  "monitor": "<path d=\"M54.5,10.79H9.51c-2.64,0-4.78,2.15-4.78,4.78v25.94c0,2.64,2.14,4.78,4.78,4.78h18.45v4.41h-3.12c-.69,0-1.25.56-1.25,1.25s.56,1.25,1.25,1.25h14.32c.69,0,1.25-.56,1.25-1.25s-.56-1.25-1.25-1.25h-3.11v-4.41h18.45c2.63,0,4.78-2.14,4.78-4.78V15.57c0-2.63-2.15-4.78-4.78-4.78ZM33.55,50.71h-3.09v-4.41h3.09v4.41ZM56.77,41.51c0,1.26-1.03,2.28-2.28,2.28H9.51c-1.26,0-2.28-1.02-2.28-2.28v-.47h49.55v.47ZM56.77,38.54H7.23V15.57c0-1.25,1.02-2.28,2.28-2.28h44.99c1.25,0,2.28,1.03,2.28,2.28v22.97Z\"></path><path d=\"M32,16c-1.35,0-2.44,1.09-2.44,2.44s1.09,2.44,2.44,2.44,2.44-1.09,2.44-2.44-1.09-2.44-2.44-2.44Z\"></path>",
  "motorcycle-deliver": "<path d=\"M39.83,44.34c2.78,0,5.6-1.87,5.6-5.4l.65-13.79s.11.01.16.01h.08l5.86,12.54c.09.19.23.36.39.47.28.26.66.39,1.06.32.46-.08.85-.11,1.39-.11,2.61,0,4.94,1.07,6.58,3,.24.3.6.45.95.45.29,0,.57-.1.81-.3.53-.44.59-1.23.15-1.76-2.12-2.51-5.13-3.89-8.49-3.89-.34,0-.63.01-.92.03l-5.39-11.56c1.06-.76,1.75-2,1.75-3.41,0-2.33-1.89-4.22-4.22-4.22-1.9,0-3.5,1.25-4.03,2.97h-4.34c-.69,0-1.25.56-1.25,1.25s.56,1.25,1.25,1.25h4.34c.25.82.75,1.53,1.41,2.04l-.69,14.65c0,2.34-1.95,2.96-3.1,2.96s-3.1-.62-3.1-2.96v-3.14c1.32-.33,2.31-1.52,2.31-2.95,0-1.68-1.37-3.04-3.04-3.04h-4.68s.07-.03.1-.05c1.43-.74,2.48-1.83,3.05-3.16.32-.75.51-1.63.56-2.6.08-1.49-.17-2.92-.41-4.16-.07-.35-.13-.7-.2-1.06-.09-.49-.18-.99-.28-1.49-.19-.92-.46-2.14-.92-3.34-.47-1.24-1.05-2.2-1.76-2.93-1.23-1.26-2.93-1.9-5.02-1.9h-.27s-.08.01-.08.01c-.62.01-1.3.08-2.02.19-.71.11-1.41.25-2.03.38l-1.45.28c-.56.11-1.16.23-1.78.38-1.44.36-3.1.89-4.45,2-1.12.93-1.87,2.23-2.15,3.73-.03.14-.05.28-.07.42v.11c-.06.45-.08.93-.07,1.5.01.48.06.96.11,1.44.12.9.3,1.76.46,2.57l.17.87c.34,1.83.69,3.71,1.6,5.45.46.89,1.03,1.63,1.69,2.18-.6.55-.97,1.34-.97,2.22,0,1.36.9,2.51,2.13,2.89-1.9,1.75-2.95,4.22-2.84,6.96-.69,1.33-1.08,2.84-1.08,4.44,0,.69.56,1.25,1.25,1.25h.72c.6,3.75,3.85,6.62,7.76,6.62s7.16-2.87,7.76-6.62h.64c.56,0,1.03-.36,1.18-.87h14.64c.16,4.11,3.56,7.4,7.71,7.4s7.72-3.46,7.72-7.72-3.46-7.72-7.72-7.72c-3.5,0-6.46,2.34-7.4,5.54h-15.12c-.96-4.33-4.83-7.57-9.45-7.57-1.93,0-3.72.57-5.23,1.55.86-1.47,2.33-2.58,4.24-3.11h12.19v3.05c0,3.59,2.82,5.46,5.6,5.46ZM46.24,19.22c.95,0,1.72.77,1.72,1.72,0,.75-.48,1.39-1.16,1.62-.07.02-.14.04-.21.07-.12.02-.23.03-.35.03-.28,0-.55-.07-.78-.19-.56-.28-.94-.86-.94-1.53,0-.95.77-1.72,1.72-1.72ZM55,41.92c2.88,0,5.22,2.34,5.22,5.22s-2.34,5.22-5.22,5.22-5.22-2.34-5.22-5.22,2.34-5.22,5.22-5.22ZM21.07,12.38l1.46-.29c.35-.07.72-.14,1.1-.21l1.28,5.88-1.3-.42c-.43-.14-.92-.03-1.25.3l-.77.74-1.38-5.83c.29-.06.58-.12.86-.17ZM16.62,27.23c-.73-1.41-1.03-3.03-1.35-4.74l-.19-.98c-.15-.71-.32-1.52-.41-2.32-.05-.4-.09-.81-.1-1.19-.01-.44,0-.82.05-1.22.01-.09.02-.17.04-.27.18-.95.62-1.72,1.3-2.29.53-.44,1.17-.76,1.84-1l1.87,7.88c.11.44.44.79.87.91.11.04.23.05.35.05.32,0,.63-.12.87-.35l1.8-1.76,2.65.86c.43.14.9.04,1.23-.26.33-.3.48-.75.38-1.19l-1.7-7.8h.1s.08.01.08.01c1.49-.03,2.6.35,3.37,1.14.47.48.87,1.16,1.22,2.07.39,1.03.63,2.12.8,2.95.1.48.18.96.27,1.44.07.37.14.73.21,1.09.21,1.09.42,2.35.36,3.55-.03.68-.15,1.26-.36,1.75-.43.99-1.27,1.59-1.91,1.92-.09.06-.19.11-.32.16-.2.1-.41.19-.62.27l-.44.14c-.39.14-.79.24-1.17.34-.59.14-1.17.25-1.71.36l-1.45.28c-.58.12-1.22.25-1.89.35-.4.07-.81.11-1.22.14-1.51.11-2.68-.11-3.49-.67-.5-.35-.95-.9-1.33-1.62ZM23.07,52.45c-2.52,0-4.65-1.76-5.21-4.12h1.27c.53,1.65,2.08,2.85,3.9,2.85s3.38-1.2,3.91-2.85h1.35c-.57,2.36-2.69,4.12-5.22,4.12ZM22.04,48.33h1.98c-.54.43-1.43.43-1.98,0ZM23.03,39.89c3.54,0,6.49,2.57,7.09,5.94h-14.17c.59-3.37,3.54-5.94,7.08-5.94ZM18.18,33.33c-.3,0-.55-.24-.55-.54s.25-.54.55-.54h17.82c.3,0,.54.24.54.54s-.24.54-.54.54h-17.82Z\"></path><path d=\"M55,51.06c-2.19,0-3.98-1.78-3.98-3.97s1.78-3.98,3.98-3.98,3.98,1.78,3.98,3.98-1.78,3.97-3.98,3.97ZM55,45.61c-.81,0-1.48.66-1.48,1.48s.66,1.47,1.48,1.47,1.48-.66,1.48-1.47-.66-1.48-1.48-1.48Z\"></path><path d=\"M10.57,25.03H1.45c-.69,0-1.25-.56-1.25-1.25s.56-1.25,1.25-1.25h9.13c.69,0,1.25.56,1.25,1.25s-.56,1.25-1.25,1.25Z\"></path><path d=\"M11.85,31.31h-4.1c-.69,0-1.25-.56-1.25-1.25s.56-1.25,1.25-1.25h4.1c.69,0,1.25.56,1.25,1.25s-.56,1.25-1.25,1.25Z\"></path><path d=\"M4.69,31.31h-.74c-.69,0-1.25-.56-1.25-1.25s.56-1.25,1.25-1.25h.74c.69,0,1.25.56,1.25,1.25s-.56,1.25-1.25,1.25Z\"></path><g><path d=\"M21.83,25.75c-.15-.74-.87-1.23-1.62-1.08s-1.23.87-1.08,1.62.87,1.23,1.62,1.08,1.23-.87,1.08-1.62Z\"></path><path d=\"M26.12,24.47s.08,0,.12-.01l3.11-.61c.37-.08.61-.44.54-.81s-.43-.61-.81-.54l-3.11.61c-.37.08-.61.44-.54.81.07.33.36.56.69.55h0Z\"></path><path d=\"M26.35,25c-.37.07-.61.43-.54.81.07.33.36.56.69.55.04,0,.08,0,.12-.01l3.11-.61c.37-.08.61-.44.54-.81s-.44-.62-.81-.54l-3.11.61Z\"></path></g>",
  "outdated": "<path d=\"M55.4,26.15h-1.7q-.23,0-.29-.23c-.5-1.6-1.11-3.27-1.91-4.67q-.1-.2.1-.4l1.1-1.1c1.2-1.3,1.3-3.2,0-4.5-1.2-1.2-2.4-2.5-3.8-3.8-1.3-1.3-3.23-1.33-4.6,0-.41.39-.83.82-1.1,1.1q-.2.2-.4.1c-1.4-.8-3-1.5-4.7-1.9q-.2-.07-.2-.3v-1.6c0-1.8-1.4-3.2-3.2-3.2h-5.4c-1.8,0-3.2,1.4-3.2,3.2v1.6q0,.23-.2.3c-1.7.4-3.3,1.1-4.7,1.9q-.2.1-.4-.1c-.28-.28-.7-.71-1.1-1.1-1.38-1.33-3.3-1.3-4.6,0-1.4,1.3-2.6,2.6-3.8,3.8-1.3,1.3-1.2,3.2,0,4.5.3.3.7.7,1.1,1.1q.2.2.1.4c-.8,1.4-1.42,3.07-1.92,4.67q-.06.23-.28.23h-1.7c-1.7,0-3.1,1.4-3.1,3.1v5.5c0,1.7,1.4,3.1,3.1,3.1h1.7q.22,0,.28.23c.5,1.6,1.12,3.27,1.92,4.67q.1.2-.1.4c-.4.4-.8.8-1.1,1.1-1.2,1.3-1.3,3.2,0,4.5,1.2,1.2,2.4,2.5,3.8,3.8,1.3,1.3,3.22,1.33,4.6,0,.4-.39.82-.82,1.1-1.1q.2-.2.4-.1c1.4.8,3,1.5,4.7,1.9q.2.07.2.3v1.6c0,1.8,1.4,3.2,3.2,3.2h5.4c1.8,0,3.2-1.4,3.2-3.2v-1.6q0-.23.2-.3c1.7-.4,3.3-1.1,4.7-1.9q.2-.1.4.1c.27.28.69.71,1.1,1.1,1.37,1.33,3.3,1.3,4.6,0,1.4-1.3,2.6-2.6,3.8-3.8,1.3-1.3,1.2-3.2,0-4.5-.3-.3-.7-.7-1.1-1.1q-.2-.2-.1-.4c.8-1.4,1.41-3.07,1.91-4.67q.06-.23.29-.23h1.7c1.7,0,3.1-1.4,3.1-3.1v-5.5c0-1.7-1.4-3.1-3.1-3.1ZM56.2,34.45c0,.7-.4,1.1-1.1,1.1h-2.3c-.8,0-1.2.3-1.4,1.1-.5,2.1-1.3,4-2.4,5.8-.4.6-.3,1.1.2,1.6l1.7,1.7c.5.5.5,1,0,1.5l-3.5,3.5c-.5.5-1,.5-1.5,0l-1.6-1.6c-.3-.3-.6-.5-.9-.5s-.5.1-.8.3c-1.8,1.1-3.8,1.9-5.8,2.4-.7.2-1,.6-1,1.3v2.4c0,.6-.4,1-1,1h-5.6c-.6,0-1-.4-1-1v-2.4c0-.7-.3-1.1-1-1.3-2-.5-4-1.3-5.8-2.4-.3-.2-.5-.3-.8-.3s-.6.2-.9.5l-.7.7c-.3.3-.6.6-.9.9-.5.5-1,.5-1.5,0l-3.5-3.5c-.5-.5-.5-1,0-1.5.3-.3.6-.6.9-.9l.8-.8c.5-.5.6-1,.2-1.6-1.1-1.8-1.9-3.7-2.4-5.8-.2-.8-.6-1.1-1.4-1.1h-2.3c-.7,0-1.1-.4-1.1-1.1v-4.9c0-.7.4-1.1,1.1-1.1h2.3c.8,0,1.2-.3,1.4-1.1.5-2.1,1.3-4,2.4-5.8.4-.6.3-1.1-.2-1.6l-1.7-1.7c-.5-.5-.5-1,0-1.5l3.5-3.5c.5-.5,1-.5,1.5,0l1.6,1.6c.3.3.6.5.9.5s.5-.1.8-.3c1.8-1.1,3.8-1.9,5.8-2.4.7-.2,1-.6,1-1.3v-2.4c0-.6.4-1,1-1h5.6c.6,0,1,.4,1,1v2.4c0,.7.3,1.1,1,1.3,2,.5,4,1.3,5.8,2.4.3.2.5.3.8.3s.6-.2.9-.5l1.6-1.6c.5-.5,1-.5,1.5,0l3.5,3.5c.5.5.5,1,0,1.5l-1.7,1.7c-.5.5-.6,1-.2,1.6,1.1,1.8,1.9,3.7,2.4,5.8.2.8.6,1.1,1.4,1.1h2.3c.7,0,1.1.4,1.1,1.1v4.9Z\"></path><path d=\"M48.85,33.88c-1.09,9.23-9.53,15.9-18.76,14.81-2.29-.27-4.51-1.03-6.49-2.17-.56-.37-.78-1.1-.41-1.67.37-.56,1.1-.77,1.66-.4,1.71.9,3.55,1.52,5.53,1.76,7.94.93,15.06-4.77,15.99-12.62.92-7.84-4.67-15.05-12.62-15.98-7.95-.94-15.05,4.67-15.99,12.62-.09.76-.12,1.55-.08,2.33l1.27-1.29c.48-.49,1.28-.5,1.77-.02s.5,1.28.02,1.77l-3.47,3.53c-.17.17-.37.25-.59.26-.22,0-.42-.08-.6-.25l-.96-.95h0c-.06-.06-.09-.08-.09-.08l-2.18-2.14c-.49-.48-.5-1.28-.02-1.77s1.28-.5,1.77-.02l.68.67c-.03-.78,0-1.56.09-2.33,1.08-9.24,9.52-15.9,18.75-14.81,9.24,1.09,15.81,9.51,14.72,18.75Z\"></path><path d=\"M38.68,32.26c0,.69-.56,1.25-1.25,1.25h-3.37c-.42.75-1.23,1.25-2.17,1.25-1.4,0-2.5-1.1-2.5-2.5,0-.94.5-1.75,1.25-2.17v-4.27c0-.69.56-1.25,1.25-1.25s1.25.56,1.25,1.25v4.29c.37.22.68.54.9.9h3.39c.69,0,1.25.56,1.25,1.25Z\"></path>",
  "path": "<path d=\"M32,50.8c-1.38,0-2.5,1.12-2.5,2.5s1.12,2.5,2.5,2.5,2.5-1.12,2.5-2.5-1.12-2.5-2.5-2.5Z\"></path><path d=\"M56.57,28.49c0,.39-.18.75-.48.99l-5.9,4.6c-.23.18-.5.26-.76.26-.38,0-.75-.16-.99-.48-.43-.54-.33-1.33.22-1.75l3.03-2.37h-5.27c-7.26,0-13.17,5.91-13.17,13.17v5.59c0,.69-.56,1.25-1.25,1.25s-1.25-.56-1.25-1.25v-5.59c0-7.26-5.91-13.17-13.17-13.17h-5.27l3.03,2.37c.55.42.64,1.21.22,1.75-.25.32-.62.48-.99.48-.27,0-.54-.08-.77-.26l-5.89-4.6c-.31-.24-.49-.6-.49-.99s.18-.75.49-.98l5.89-4.6c.55-.43,1.33-.33,1.76.21.42.55.33,1.33-.22,1.76l-3.03,2.36h5.27c5.52,0,10.38,2.87,13.17,7.19V13.05l-2.36,3.03c-.43.54-1.21.64-1.76.22-.54-.43-.64-1.21-.22-1.76l4.6-5.89c.48-.61,1.5-.61,1.97,0l4.6,5.89c.43.55.33,1.33-.21,1.76-.23.18-.5.26-.77.26-.37,0-.74-.16-.99-.48l-2.36-3.03v21.38c2.79-4.32,7.65-7.19,13.17-7.19h5.27l-3.03-2.36c-.55-.43-.65-1.21-.22-1.76.42-.54,1.21-.64,1.75-.21l5.9,4.6c.3.23.48.6.48.98Z\"></path><path d=\"M33.25,48.5v.05c0,.69-.56,1.25-1.25,1.25s-1.25-.56-1.25-1.25v-.05c0,.69.56,1.25,1.25,1.25s1.25-.56,1.25-1.25Z\"></path>",
  "phone-warning": "<g><path d=\"M47.25,45.62c-.7-.08-1.3.42-1.38,1.11-.33,3.01-.78,6.14-2.37,8.36-1.06,1.48-2.77,2.41-5.24,2.84-2.84.5-5.86.5-8.77.5h-1.18c-2.92,0-5.93,0-8.77-.5-2.47-.44-4.18-1.37-5.24-2.84-1.59-2.22-2.04-5.34-2.37-8.35-.52-4.78-.56-9.7-.56-14.74s.04-9.96.56-14.74c.33-3,.78-6.12,2.37-8.36,1.05-1.47,2.76-2.4,5.24-2.84,2.83-.5,5.85-.5,8.75-.5h1.22c2.91,0,5.92,0,8.75.5,2.47.44,4.19,1.37,5.24,2.84.54.76.98,1.65,1.33,2.72.22.66.92,1.01,1.58.8.66-.22,1.01-.92.8-1.58-.43-1.32-.98-2.43-1.67-3.39-1.45-2.03-3.69-3.29-6.84-3.85-3.05-.54-6.18-.54-9.19-.54h-1.2c-3.02,0-6.14,0-9.19.54-3.15.56-5.39,1.82-6.84,3.85-1.95,2.73-2.46,6.21-2.82,9.54-.53,4.9-.57,9.9-.57,15.01s.04,10.11.57,15.01c.36,3.34.88,6.83,2.82,9.54,1.46,2.03,3.69,3.29,6.83,3.85,3.05.54,6.17.54,9.21.54h1.78c2.84,0,5.76-.03,8.61-.54,3.14-.56,5.38-1.82,6.83-3.85,1.94-2.71,2.46-6.2,2.82-9.54.07-.69-.42-1.3-1.11-1.38h0Z\"></path><path d=\"M32.84,12.61c0-.69-.56-1.25-1.25-1.25h-5.38c-.69,0-1.25.56-1.25,1.25s.56,1.25,1.25,1.25h5.38c.69,0,1.25-.56,1.25-1.25Z\"></path><circle cx=\"28.9\" cy=\"51.1\" r=\"2.5\"></circle></g><path d=\"M53.05,40.94h-13.73c-1.66,0-3.16-.85-4.01-2.27-.85-1.42-.9-3.14-.12-4.61l6.87-12.95h0c.81-1.54,2.4-2.49,4.14-2.49s3.32.95,4.14,2.49l6.87,12.95c.78,1.46.73,3.19-.12,4.61-.85,1.42-2.35,2.27-4.01,2.27ZM44.25,22.29l-6.87,12.95c-.36.68-.34,1.49.06,2.15s1.1,1.06,1.87,1.06h13.73c.77,0,1.47-.4,1.87-1.06s.42-1.47.06-2.15l-6.87-12.95c-.39-.73-1.11-1.16-1.93-1.16s-1.54.43-1.93,1.16h0Z\"></path><circle cx=\"46.18\" cy=\"35.13\" r=\"1.27\"></circle><path d=\"M46.18,32.87c-.69,0-1.25-.56-1.25-1.25v-6.11c0-.69.56-1.25,1.25-1.25s1.25.56,1.25,1.25v6.11c0,.69-.56,1.25-1.25,1.25Z\"></path>",
  "playbook": "<path d=\"M53.49,10.48h-9.47v-1.36c0-1.38-1.12-2.5-2.5-2.5h-2.47c-1.03-2.9-3.8-4.98-7.05-4.98s-6.02,2.08-7.05,4.98h-2.46c-1.38,0-2.5,1.12-2.5,2.5v1.36h-9.48c-1.38,0-2.5,1.12-2.5,2.5v46.88c0,1.38,1.12,2.5,2.5,2.5h42.98c1.38,0,2.5-1.12,2.5-2.5V12.98c0-1.38-1.12-2.5-2.5-2.5ZM22.49,9.12h4.53c0-2.75,2.23-4.98,4.98-4.98s4.98,2.23,4.98,4.98h4.54v5.66h-19.03v-5.66ZM53.49,59.86H10.51V12.98h9.48v1.8c0,1.38,1.12,2.5,2.5,2.5h19.03c1.38,0,2.5-1.12,2.5-2.5v-1.8h9.47v46.88Z\"></path><g><path d=\"M48.98,53.46c.25.24.37.56.37.88s-.12.64-.37.88c-.49.49-1.28.49-1.77,0l-3.45-3.45-3.45,3.45c-.49.49-1.28.49-1.77,0-.25-.24-.37-.56-.37-.88s.12-.64.37-.88l3.45-3.45-3.45-3.45c-.25-.25-.37-.57-.37-.89s.12-.64.37-.88c.49-.49,1.28-.49,1.77,0l3.45,3.45,3.45-3.45c.49-.49,1.28-.49,1.77,0,.25.24.37.56.37.88s-.12.64-.37.89l-3.45,3.45,3.45,3.45Z\"></path><path d=\"M25.46,29.94c.25.25.37.57.37.89s-.12.64-.37.88c-.49.48-1.28.48-1.77,0l-3.45-3.45-3.45,3.45c-.49.48-1.28.48-1.77,0-.24-.24-.36-.56-.36-.88s.12-.64.36-.89l3.45-3.45-3.45-3.45c-.24-.25-.36-.57-.36-.89s.12-.64.36-.88c.49-.49,1.28-.49,1.77,0l3.45,3.45,3.45-3.45c.49-.49,1.28-.49,1.77,0,.25.24.37.56.37.88s-.12.64-.37.89l-3.45,3.45,3.45,3.45Z\"></path><g><path d=\"M45.27,26.7v11.56c0,.69-.56,1.25-1.25,1.25h-22.78v10.32c0,.69-.56,1.25-1.25,1.25s-1.25-.56-1.25-1.25v-11.57c0-.69.56-1.25,1.25-1.25h22.78v-10.31c0-.69.56-1.25,1.25-1.25s1.25.56,1.25,1.25Z\"></path><circle cx=\"19.99\" cy=\"55.01\" r=\"2.5\"></circle><circle cx=\"44.02\" cy=\"21.28\" r=\"2.5\"></circle></g></g>",
  "price-tag": "<path d=\"M57.46,38.47l-20.68-21.74c-.23-.24-.55-.38-.88-.39l-10.88-.16c-.99-3.39-2.27-5.92-3.81-7.54-4.09-4.29-9.32-3.6-12.37-.7-3.05,2.9-3.99,8.08.09,12.38,1.55,1.63,4.02,3.03,7.34,4.18l-.38,10.88c-.01.33.12.66.35.9l20.68,21.73c.23.24.54.38.87.39h.03c.32,0,.63-.12.86-.34l18.74-17.83c.5-.47.52-1.26.04-1.76ZM10.75,18.6c-3.1-3.26-2.27-6.87-.18-8.85,2.08-1.98,5.73-2.63,8.82.62,1.16,1.21,2.16,3.15,3,5.77l-3.46-.05c-1.35-.05-2.4,1.02-2.45,2.32l-.12,3.47c-2.55-.96-4.47-2.08-5.61-3.28ZM37.87,55.39l-19.46-20.45.38-11.14c0-.07,0-.13,0-.19l.18-5.02,5.05.08h.06l11.24.17,19.46,20.44-16.92,16.11Z\"></path><g><circle cx=\"24.56\" cy=\"24.47\" r=\"2.4\"></circle><circle cx=\"24.56\" cy=\"24.47\" r=\"2.4\"></circle></g>",
  "process": "<path d=\"M20.17,33.65h-4.42c-.69,0-1.25-.56-1.25-1.25v-1.62c-1.07-.3-2.12-.73-3.06-1.27l-1.12,1.12c-.47.47-1.3.47-1.77,0l-2.91-2.91c-.23-.23-.37-.55-.37-.88s.13-.65.37-.88l1.16-1.16c-.57-1-.98-2-1.27-3.08h-1.66c-.69,0-1.25-.56-1.25-1.25v-4.13c0-.69.56-1.25,1.25-1.25h1.66c.29-1.09.71-2.1,1.27-3.08l-1.16-1.16c-.23-.23-.37-.55-.37-.88s.13-.65.37-.88l2.91-2.91c.23-.23.55-.37.88-.37h0c.33,0,.65.13.88.37l1.12,1.12c.93-.53,1.98-.97,3.06-1.27v-1.62c0-.69.56-1.25,1.25-1.25h4.42c.69,0,1.25.56,1.25,1.25v1.62c1.07.29,2.12.73,3.06,1.27l1.12-1.12c.47-.47,1.3-.47,1.77,0l2.91,2.91c.23.23.37.55.37.88s-.13.65-.37.88l-1.16,1.16c.57,1,.98,2.01,1.27,3.08h1.66c.69,0,1.25.56,1.25,1.25v4.13c0,.69-.56,1.25-1.25,1.25h-1.66c-.29,1.09-.71,2.1-1.27,3.08l1.16,1.16c.23.23.37.55.37.88s-.13.65-.37.88l-2.91,2.91c-.23.23-.55.37-.88.37h0c-.33,0-.65-.13-.88-.37l-1.12-1.12c-.93.53-1.98.97-3.06,1.27v1.62c0,.69-.56,1.25-1.25,1.25ZM17,31.15h1.92v-.73c0-.97.54-1.69,1.49-1.96,1.13-.28,2.18-.72,3.07-1.26.25-.16.61-.36,1.12-.36s.97.22,1.41.66l.48.48,1.14-1.14-.54-.54c-.72-.72-.82-1.68-.27-2.51.56-.91.97-1.9,1.22-2.97.26-1.04.98-1.6,2.03-1.6h.73v-1.63h-.73c-1.05,0-1.77-.56-2.03-1.59-.26-1.09-.67-2.07-1.25-3.03-.53-.79-.42-1.75.3-2.47l.54-.54-1.14-1.14-.48.48c-.44.44-.91.66-1.41.66s-.87-.19-1.16-.38c-.86-.52-1.9-.95-2.99-1.22-.99-.28-1.53-1-1.53-1.97v-.73h-1.92v.73c0,.97-.54,1.69-1.49,1.96-1.13.28-2.17.71-3.07,1.26-.24.16-.6.36-1.12.36s-.97-.22-1.41-.66l-.48-.48-1.14,1.14.54.54c.72.72.83,1.68.27,2.51-.56.91-.97,1.9-1.22,2.97-.26,1.04-.98,1.6-2.03,1.6h-.73v1.63h.73c1.05,0,1.77.56,2.03,1.59.26,1.09.67,2.07,1.25,3.03.53.79.42,1.75-.3,2.47l-.54.54,1.14,1.14.48-.48c.44-.44.91-.66,1.41-.66s.87.19,1.16.38c.85.52,1.9.95,2.99,1.22.99.28,1.53,1,1.53,1.97v.73ZM7.01,25.16s0,.01.01.02c0,0,0-.01-.01-.02ZM28.93,25.12s0,0,0,.01c0,0,0,0,0-.01ZM7,11.66s0,0,0,.01c0,0,0,0,0-.01ZM28.9,11.62s0,.01.01.02c0,0,0-.01-.01-.02Z\"></path><path d=\"M17.96,26c-4.19,0-7.61-3.41-7.61-7.61s3.41-7.61,7.61-7.61,7.61,3.41,7.61,7.61-3.41,7.61-7.61,7.61ZM17.96,13.29c-2.81,0-5.11,2.29-5.11,5.11s2.29,5.11,5.11,5.11,5.11-2.29,5.11-5.11-2.29-5.11-5.11-5.11Z\"></path><path d=\"M48.25,60.85h-4.42c-.69,0-1.25-.56-1.25-1.25v-1.62c-1.07-.3-2.12-.73-3.06-1.27l-1.12,1.12c-.23.23-.55.37-.88.37h0c-.33,0-.65-.13-.88-.37l-2.91-2.91c-.23-.23-.37-.55-.37-.88s.13-.65.37-.88l1.16-1.16c-.57-1-.98-2.01-1.27-3.08h-1.66c-.69,0-1.25-.56-1.25-1.25v-4.13c0-.69.56-1.25,1.25-1.25h1.66c.29-1.09.71-2.1,1.27-3.08l-1.16-1.16c-.23-.23-.37-.55-.37-.88s.13-.65.37-.88l2.91-2.91c.47-.47,1.3-.47,1.77,0l1.12,1.12c.93-.53,1.98-.97,3.06-1.27v-1.62c0-.69.56-1.25,1.25-1.25h4.42c.69,0,1.25.56,1.25,1.25v1.62c1.07.29,2.12.73,3.06,1.27l1.12-1.12c.23-.23.55-.37.88-.37h0c.33,0,.65.13.88.37l2.91,2.91c.23.23.37.55.37.88s-.13.65-.37.88l-1.16,1.16c.57,1,.98,2.01,1.27,3.08h1.66c.69,0,1.25.56,1.25,1.25v4.13c0,.69-.56,1.25-1.25,1.25h-1.66c-.29,1.09-.71,2.1-1.27,3.08l1.16,1.16c.23.23.37.55.37.88s-.13.65-.37.88l-2.91,2.91c-.47.47-1.3.47-1.77,0l-1.12-1.12c-.93.53-1.98.97-3.06,1.27v1.62c0,.69-.56,1.25-1.25,1.25ZM45.08,58.35h1.92v-.73c0-.97.54-1.69,1.49-1.96,1.13-.28,2.18-.72,3.07-1.26.25-.16.61-.36,1.12-.36s.97.22,1.41.66l.48.48,1.14-1.14-.54-.54c-.72-.72-.82-1.68-.27-2.51.56-.91.97-1.9,1.22-2.97.26-1.04.98-1.6,2.03-1.6h.73v-1.63h-.73c-1.05,0-1.77-.56-2.03-1.59-.26-1.09-.67-2.07-1.25-3.03-.53-.79-.42-1.75.3-2.47l.54-.54-1.14-1.14-.48.48c-.44.44-.91.66-1.41.66s-.88-.2-1.16-.39c-.85-.52-1.9-.95-2.98-1.22-.99-.28-1.53-1-1.53-1.97v-.73h-1.92v.73c0,.97-.54,1.69-1.49,1.96-1.13.28-2.17.71-3.07,1.26-.24.16-.6.36-1.12.36s-.97-.22-1.41-.66l-.48-.48-1.14,1.14.54.54c.72.72.82,1.68.27,2.51-.56.92-.97,1.9-1.22,2.97-.26,1.04-.98,1.6-2.03,1.6h-.73v1.63h.73c1.05,0,1.77.56,2.03,1.59.26,1.09.67,2.07,1.25,3.03.52.79.42,1.75-.3,2.47l-.54.54,1.14,1.14.48-.48c.43-.44.91-.66,1.41-.66s.87.19,1.16.38c.85.52,1.9.95,2.99,1.22.99.28,1.53,1,1.53,1.97v.73ZM35.09,52.36s0,.01.01.02c0,0,0-.01-.01-.02ZM35.08,38.87s0,0,0,.01c0,0,0,0,0-.01Z\"></path><path d=\"M46.04,53.21c-4.19,0-7.61-3.41-7.61-7.61s3.41-7.61,7.61-7.61,7.61,3.41,7.61,7.61-3.41,7.61-7.61,7.61ZM46.04,40.5c-2.81,0-5.11,2.29-5.11,5.11s2.29,5.11,5.11,5.11,5.11-2.29,5.11-5.11-2.29-5.11-5.11-5.11Z\"></path><path d=\"M32,53.22c-4.33,0-8.5-1.3-12.07-3.77-.57-.39-.71-1.17-.32-1.74.39-.57,1.17-.71,1.74-.32,3.14,2.17,6.82,3.32,10.64,3.32.69,0,1.25.56,1.25,1.25s-.56,1.25-1.25,1.25Z\"></path><path d=\"M14.32,42.51c-.45,0-.88-.24-1.11-.67-1.58-3.01-2.42-6.41-2.42-9.84,0-.69.56-1.25,1.25-1.25s1.25.56,1.25,1.25c0,3.07.72,5.99,2.13,8.68.32.61.09,1.37-.52,1.69-.19.1-.38.14-.58.14Z\"></path><path d=\"M17.04,42.69c-1.4,0-2.54,1.14-2.54,2.54s1.14,2.54,2.54,2.54,2.54-1.14,2.54-2.54-1.14-2.54-2.54-2.54Z\"></path><path d=\"M43.35,16.84c-.25,0-.49-.07-.71-.22-3.13-2.17-6.81-3.32-10.64-3.32-.69,0-1.25-.56-1.25-1.25s.56-1.25,1.25-1.25c4.35,0,8.52,1.3,12.07,3.77.57.39.71,1.17.31,1.74-.24.35-.63.54-1.03.54Z\"></path><path d=\"M51.97,33.25c-.69,0-1.25-.56-1.25-1.25,0-3.03-.74-6.03-2.14-8.68-.32-.61-.09-1.37.52-1.69.61-.32,1.37-.09,1.69.52,1.59,3,2.43,6.41,2.43,9.85,0,.69-.56,1.25-1.25,1.25Z\"></path><path d=\"M46.96,21.31c1.4,0,2.54-1.14,2.54-2.54s-1.14-2.54-2.54-2.54-2.54,1.14-2.54,2.54,1.14,2.54,2.54,2.54Z\"></path>",
  "protect": "<path d=\"m32,11.66c-12.43,0-23.49,7.89-27.53,19.64-.53,1.55-.94,3.16-1.2,4.79-.1.6.25,1.18.82,1.38.57.2,1.21-.04,1.5-.57,1.58-2.84,4.59-4.61,7.83-4.61,3.48,0,6.67,2.04,8.13,5.2,0,0,0,0,0,0,0,0,.01.02.01.03.06.12.13.23.22.33.03.03.07.06.11.09.08.07.16.12.25.17.04.02.08.04.13.06.13.05.27.08.42.08,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0h0c.15,0,.3-.04.44-.09.03-.01.07-.03.1-.05.11-.05.21-.12.3-.2.02-.02.04-.03.06-.05.1-.1.18-.21.24-.35,1.27-2.8,3.89-4.72,6.88-5.14v22.89c0,1.25-1.02,2.26-2.26,2.26s-2.26-1.02-2.26-2.26v-1.95c0-.69-.56-1.25-1.25-1.25s-1.25.56-1.25,1.25v1.95c0,2.63,2.14,4.76,4.76,4.76s4.76-2.14,4.76-4.76v-22.89c3,.42,5.63,2.35,6.91,5.15.06.13.14.23.23.33.03.03.06.05.09.08.08.07.16.13.26.17.04.02.08.04.12.06.14.05.28.09.43.09,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0h0c.15,0,.3-.04.43-.09.04-.01.07-.03.11-.05.1-.05.2-.11.28-.19.02-.02.05-.04.07-.06.1-.1.18-.21.24-.34,1.44-3.18,4.63-5.24,8.14-5.24,3.25,0,6.25,1.77,7.83,4.61.29.53.93.77,1.5.57.57-.2.92-.78.82-1.38-2.29-14.15-14.37-24.43-28.73-24.43ZM13.43,29.79c-2.36,0-4.61.73-6.49,2.02,3.19-8.93,10.84-15.34,19.92-17.13-2.84,3.65-4.82,10.35-5.29,18.54-2.12-2.14-5.04-3.43-8.15-3.43Zm18.57,0s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0-2.99,0-5.79,1.19-7.88,3.18.74-11.26,4.49-18.81,7.89-18.81s7.15,7.55,7.89,18.81c-2.1-2-4.91-3.19-7.9-3.19Zm18.57,0c-3.11,0-6.02,1.28-8.14,3.42-.47-8.19-2.45-14.89-5.29-18.54,9.22,1.79,16.8,8.28,19.93,17.15-1.88-1.3-4.14-2.03-6.5-2.03Z\"></path><circle cx=\"31.99\" cy=\"7.72\" r=\"2.5\"></circle>",
  "renew": "<path d=\"M46.03,33.88c.09.62.61,1.07,1.24,1.07s1.15-.46,1.24-1.07c.17-1.17.3-1.31,1.48-1.48.62-.09,1.08-.61,1.08-1.24s-.46-1.15-1.08-1.24c-1.17-.17-1.31-.3-1.48-1.48-.09-.62-.61-1.07-1.24-1.07s-1.15.46-1.24,1.07c-.17,1.17-.3,1.31-1.48,1.48-.62.09-1.08.62-1.08,1.24s.46,1.15,1.08,1.24c1.17.17,1.31.3,1.48,1.48Z\"></path><path d=\"M44.48,24.12c-1.17-.17-1.31-.3-1.48-1.48-.09-.62-.61-1.07-1.24-1.07s-1.15.46-1.24,1.07c-.17,1.17-.3,1.31-1.48,1.48-.62.09-1.08.62-1.08,1.24s.46,1.15,1.08,1.24c1.17.17,1.31.3,1.48,1.48.09.62.61,1.07,1.24,1.07s1.15-.46,1.24-1.07c.17-1.17.3-1.31,1.48-1.48.62-.09,1.08-.61,1.08-1.24s-.46-1.15-1.08-1.24Z\"></path><path d=\"M43,39.69c.17-1.17.3-1.31,1.48-1.48.62-.09,1.08-.62,1.08-1.24s-.46-1.15-1.08-1.24c-1.17-.17-1.31-.3-1.48-1.48-.09-.62-.61-1.07-1.24-1.07s-1.15.46-1.24,1.07c-.17,1.17-.3,1.31-1.48,1.48-.62.09-1.08.62-1.08,1.24s.46,1.15,1.08,1.24c1.17.17,1.31.3,1.48,1.48.09.62.61,1.07,1.24,1.07s1.15-.46,1.24-1.07Z\"></path><path d=\"M36.57,34.73c.59-.59.91-1.37.91-2.2s-.32-1.61-.91-2.2l-1.1-1.1c-1.21-1.21-3.18-1.21-4.4,0l-4.54,4.54-15.92,15.92h0l-4.54,4.54c-.59.59-.91,1.37-.91,2.2s.32,1.61.91,2.2l1.1,1.1c.59.59,1.37.91,2.2.91h0c.83,0,1.61-.32,2.2-.91l4.54-4.54,15.92-15.92s4.54-4.54,4.54-4.54ZM32.84,31c.24-.24.62-.24.86,0l1.1,1.1c.16.16.18.34.18.43s-.02.28-.18.43l-3.65,3.65-1.96-1.96s3.65-3.65,3.65-3.65ZM9.81,57.96c-.16.16-.34.18-.43.18h0c-.09,0-.27-.02-.43-.18l-1.1-1.1c-.15-.16-.18-.34-.18-.43s.02-.27.18-.43l3.65-3.65.98.98.98.98-3.65,3.65Z\"></path><path d=\"M58.26,17.09c-.36-3.32-.87-6.78-2.81-9.49-1.44-2.02-3.67-3.27-6.8-3.83-3.04-.54-6.14-.54-9.14-.53h-1.2c-3,0-6.11,0-9.14.53-3.13.56-5.36,1.81-6.8,3.83-1.93,2.71-2.45,6.17-2.81,9.49-.53,4.88-.57,9.84-.57,14.92,0,.69.56,1.25,1.25,1.25s1.25-.56,1.25-1.25c0-5.01.04-9.9.56-14.65.32-2.99.77-6.09,2.36-8.31,1.04-1.46,2.74-2.38,5.2-2.82,2.82-.5,5.81-.49,8.71-.5h1.2c2.89,0,5.89,0,8.7.5,2.46.44,4.16,1.36,5.2,2.82,1.58,2.22,2.03,5.32,2.35,8.31.51,4.75.56,9.64.56,14.65s-.04,9.9-.56,14.65c-.32,2.99-.77,6.1-2.35,8.3-1.05,1.47-2.75,2.39-5.2,2.82-2.82.5-5.82.5-8.72.5h-1.18c-2.91,0-5.9,0-8.72-.5-2.45-.43-4.15-1.36-5.2-2.82-.4-.56-1.18-.69-1.74-.29s-.69,1.18-.29,1.74c1.45,2.02,3.67,3.27,6.8,3.83,3.04.54,6.15.53,9.16.53h1.75c2.82,0,5.73-.03,8.57-.53,3.12-.55,5.35-1.81,6.8-3.83,1.93-2.7,2.45-6.17,2.81-9.49.53-4.87.57-9.84.57-14.92s-.04-10.05-.57-14.92h0Z\"></path><path d=\"M41.59,11.5h-5.35c-.69,0-1.25.56-1.25,1.25s.56,1.25,1.25,1.25h5.35c.69,0,1.25-.56,1.25-1.25s-.56-1.25-1.25-1.25Z\"></path><circle cx=\"38.92\" cy=\"50.93\" r=\"2.5\"></circle>",
  "repair": "<path d=\"M60.42,7.46l-3.86-3.86c-.41-.42-1.06-.49-1.56-.17l-6.8,4.36c-.22.14-.4.36-.49.6l-1.42,3.7-14.67,14.67c-1.26-.51-2.71-.62-4.38.07-2.08.86-3.86,2.4-5.43,3.75l-.12.1c-2.4,2.07-4.64,4.24-7.26,6.86-2.62,2.62-4.8,4.86-6.86,7.26l-.11.12c-1.35,1.57-2.89,3.35-3.75,5.43-1.4,3.37.49,5.86,2.28,7.65,1.36,1.36,3.12,2.77,5.35,2.77.72,0,1.49-.15,2.3-.48,2.08-.86,3.86-2.4,5.43-3.75l.12-.11c2.4-2.07,4.64-4.24,7.26-6.86s4.79-4.86,6.86-7.26l.11-.12c1.35-1.57,2.89-3.35,3.75-5.43.69-1.67.58-3.12.07-4.38l14.67-14.67,3.7-1.42c.25-.1.46-.27.6-.49l4.36-6.8c.32-.49.25-1.14-.17-1.56l.02.02ZM34.87,35.82c-.71,1.71-2.04,3.26-3.34,4.75l-.11.12c-2.02,2.34-4.15,4.54-6.74,7.12-2.58,2.58-4.79,4.72-7.12,6.74l-.13.11c-1.5,1.29-3.05,2.63-4.75,3.34-1.64.68-2.98.21-4.93-1.74s-2.42-3.29-1.74-4.93c.71-1.71,2.04-3.26,3.34-4.75l.11-.12c2.02-2.34,4.15-4.54,6.74-7.12,2.58-2.58,4.79-4.72,7.12-6.74l.12-.11c1.5-1.29,3.05-2.63,4.76-3.34.47-.19.91-.29,1.35-.29,1.1,0,2.19.64,3.58,2.03,1.95,1.95,2.42,3.29,1.74,4.93ZM54.34,14.12l-3.57,1.37c-.16.06-.31.16-.44.28l-14.44,14.44c-.32-.39-.66-.75-1-1.09s-.7-.68-1.09-1l14.44-14.44c.12-.12.22-.27.28-.44l1.37-3.57,5.61-3.6,2.43,2.43-3.6,5.61h0Z\"></path><path d=\"M27.07,34c-.49-.49-1.28-.49-1.77,0l-13.09,13.09c-.49.49-.49,1.28,0,1.77.24.24.56.37.88.37s.64-.12.88-.37l13.09-13.09c.49-.49.49-1.28,0-1.77h.01Z\"></path><path d=\"M30.68,34.54l-15.5,15.5c-.49.49-.49,1.28,0,1.77.24.24.56.37.88.37s.64-.12.88-.37l15.5-15.5c.49-.49.49-1.28,0-1.77s-1.28-.49-1.77,0h.01Z\"></path><path d=\"M9.07,51.42c-.98.98-.98,2.56,0,3.54s2.56.98,3.54,0,.98-2.56,0-3.54-2.56-.98-3.54,0Z\"></path>",
  "retail": "<path d=\"M55.18,18.91l-4.61-11.28c-.56-1.37-1.87-2.26-3.35-2.26h-30.41c-1.49,0-2.8.89-3.35,2.25l-4.64,11.28c-.4.97-.54,1.98-.41,2.94.25,1.79.97,3.37,2.1,4.62-.51,9.7-.37,19.18.38,28.16.02.99.43,1.88,1.07,2.52.65.65,1.53,1.05,2.49,1.05,5.83.29,11.7.44,17.55.44s11.69-.15,17.47-.44c1.99,0,3.6-1.59,3.63-3.57.78-9.04.91-18.55.39-28.19,1.13-1.24,1.85-2.81,2.09-4.6.13-.95-.01-1.96-.4-2.92ZM27.51,7.87h8.95l1.75,12.5v.03c-.02,4.34-3.23,6.32-6.22,6.32s-6.19-1.96-6.23-6.27l1.75-12.58ZM10.89,21.5c-.07-.52.01-1.09.24-1.65l4.64-11.29c.17-.42.58-.69,1.04-.69h8.18l-1.7,12.24v.09s-.01.01-.01.01c-.02.05-.02.1-.02.16,0,3.7-2.19,5.22-3.51,5.8-2.35,1.03-5.25.6-7.05-1.04-1-.93-1.61-2.15-1.81-3.63ZM37.89,56.07c-3.92.07-7.86.07-11.79,0v-12.43c0-.38.25-.69.57-.69h10.64c.32,0,.58.31.58.69v12.43ZM50.61,54.46s-.01.07-.01.1c0,.63-.5,1.13-1.19,1.13-2.99.15-6,.26-9.02.34v-12.39c0-1.76-1.38-3.19-3.08-3.19h-10.64c-1.69,0-3.07,1.43-3.07,3.19v12.39c-3.03-.08-6.06-.19-9.09-.34-.62,0-1.13-.5-1.13-1.13v-.1c-.69-8.36-.85-17.16-.46-26.19,2.37,1.2,5.29,1.31,7.84.19,1.63-.72,2.91-1.85,3.76-3.28,3.23,5.33,11.7,5.33,14.93.01.86,1.44,2.15,2.57,3.79,3.29,1.19.52,2.46.77,3.71.77,1.44,0,2.87-.33,4.13-.98.41,9,.25,17.8-.47,26.19ZM51.3,25.1s-.06.06-.09.09c-1.8,1.6-4.64,2.01-6.97,1-1.31-.57-3.53-2.09-3.53-5.81,0-.06,0-.12-.01-.18v-.09s-1.72-12.24-1.72-12.24h8.24c.46,0,.86.28,1.04.71l4.6,11.28c.23.55.31,1.11.24,1.63-.2,1.49-.81,2.7-1.8,3.61Z\"></path><circle cx=\"33.93\" cy=\"49.75\" r=\"2.5\"></circle>",
  "rocket-deliver": "<path d=\"M25.79,50.98h-12.33c-.69,0-1.25-.56-1.25-1.25s.56-1.25,1.25-1.25h12.33c.69,0,1.25.56,1.25,1.25s-.56,1.25-1.25,1.25Z\"></path><path d=\"M25.74,45.1h-4.1c-.69,0-1.25-.56-1.25-1.25s.56-1.25,1.25-1.25h4.1c.69,0,1.25.56,1.25,1.25s-.56,1.25-1.25,1.25Z\"></path><path d=\"M17.87,45.1h-.74c-.69,0-1.25-.56-1.25-1.25s.56-1.25,1.25-1.25h.74c.69,0,1.25.56,1.25,1.25s-.56,1.25-1.25,1.25Z\"></path><g><path d=\"M37.42,51.4c.08-.75-.47-1.43-1.23-1.51s-1.43.47-1.51,1.23.47,1.43,1.23,1.51,1.43-.47,1.51-1.23Z\"></path><path d=\"M41.9,51.45s.08.02.12.02l3.15.33c.38.04.71-.24.75-.62s-.23-.71-.62-.75l-3.15-.33c-.38-.04-.71.24-.75.62-.04.34.18.64.5.73h0Z\"></path><path d=\"M41.96,52.03c-.38-.04-.71.24-.75.62-.04.34.18.64.5.73.04.01.08.02.12.02l3.15.33c.38.04.71-.24.75-.62s-.23-.72-.62-.75l-3.15-.33Z\"></path></g><path d=\"M36.26,21.48c-2.19,0-3.98-1.78-3.98-3.98s1.78-3.98,3.98-3.98,3.98,1.78,3.98,3.98-1.78,3.98-3.98,3.98ZM36.26,16.02c-.81,0-1.48.66-1.48,1.48s.66,1.48,1.48,1.48,1.48-.66,1.48-1.48-.66-1.48-1.48-1.48Z\"></path><path d=\"M48.65,19.73c.14-.11.27-.24.41-.37h.01c3.39-3.15,6.03-6.78,7.89-10.91.15-.34.15-.73-.02-1.07-.16-.33-.47-.58-.83-.66-4.46-1.05-8.99-1.2-13.57-.45h-.03c-.15.02-.3.05-.45.08,0,0,0,.01-.02.01-5.3.93-10.66,3.08-16.06,6.42l-4.36-1.45c-.36-.12-.76-.06-1.07.14l-9.24,5.97c-.44.28-.66.81-.54,1.32.11.51.53.9,1.05.97l6.25.85.45.92c-6.4,2.03-10.28,5.23-11.55,9.52-.09.32-.05.67.11.97.17.29.45.51.78.59,1.1.28,2.23.42,3.38.42,3.65,0,7.48-1.4,10.98-4.03l.51,1.03-3.12,5.43c-.26.45-.21,1.02.13,1.42.24.29.59.45.96.45.14,0,.28-.02.41-.07l10.32-3.65c.34-.12.62-.39.75-.74l1.64-4.4h.01c2.04-.78,3.97-1.63,5.78-2.56l-7.11,11.57c-.56.51-1.04,1.13-1.42,1.84-.06.12-.12.25-.18.37-.01.01-.04.1-.05.11-.18.41-.34.86-.5,1.41-.12.47-.23.94-.31,1.41-.16.89-.24,1.75-.32,2.6l-.1.88c-.21,1.84-.43,3.74-.07,5.67.22,1.21.65,2.23,1.29,3.03.96,1.23,2.49,2.09,4.53,2.56.48.11.95.2,1.42.27.71.1,1.41.17,2.04.23l1.4.15c.58.06,1.21.13,1.88.17.38.02.75.04,1.14.04.1,0,.2,0,.31-.01h.18c.12,0,.23,0,.35,0,.29-.02.58-.05.86-.09.16-.02.32-.05.47-.08,1.58-.28,2.91-1.02,3.84-2.12.54-.62.98-1.41,1.31-2.32.51-1.4.69-2.85.83-4.09.04-.35.08-.71.12-1.06.06-.51.12-1.01.17-1.52.09-.94.19-2.18.11-3.46-.09-1.33-.36-2.41-.83-3.32-.16-.32-.35-.62-.58-.9l-6.1-16.09c1.56-1.05,3.01-2.17,4.35-3.38h.01ZM54,8.83c-1.53,2.99-3.48,5.66-5.88,8.04-1.95-2.28-3.33-5.08-4.11-8.34,3.35-.43,6.68-.32,9.99.3ZM15.5,17.71l5.9-3.81,1.91.63c-1.59,1.09-3.19,2.29-4.78,3.6l-3.03-.42ZM9.88,30.42c1.43-2.92,4.64-5.1,9.76-6.66l1.45,2.92c-3.62,2.85-7.6,4.17-11.21,3.74ZM30.04,31.42l-6.58,2.33,1.49-2.62c2.02-.47,3.95-1.01,5.8-1.62l-.71,1.91ZM48.33,40.62c.16.19.3.4.42.63.31.6.49,1.36.55,2.34.02.29.03.59.03.88,0,.79-.06,1.55-.13,2.17-.05.49-.1.98-.16,1.48-.05.36-.09.72-.13,1.08-.12,1.1-.28,2.37-.69,3.51-.23.63-.52,1.15-.86,1.56-.7.82-1.69,1.15-2.39,1.28-.11.02-.22.04-.35.05-.23.03-.45.06-.68.07l-.46.02c-.42,0-.83-.01-1.22-.03-.62-.04-1.22-.11-1.77-.17l-1.41-.14c-.59-.06-1.26-.13-1.94-.23-.4-.05-.8-.13-1.2-.22-1.48-.34-2.53-.91-3.14-1.67-.38-.49-.65-1.14-.79-1.94-.29-1.56-.1-3.2.1-4.93l.1-.91s.01-.1.01-.11c.07-.71.14-1.53.28-2.31.07-.4.16-.8.26-1.17.12-.43.25-.78.41-1.15.03-.08.07-.16.12-.25.27-.51.61-.94,1.02-1.27.02-.01.03-.03.04-.04.26-.2.54-.36.85-.49.66-.27,1.4-.39,2.14-.42l-.62,8.08c-.03.45.18.88.56,1.13s.86.28,1.26.07l2.24-1.14,2.28,1.6c.21.15.47.23.72.23.18,0,.36-.04.53-.12.4-.19.68-.58.71-1.03l.67-7.95s.07.02.11.03c.02.01.04.02.06.03,1.07.3,1.86.76,2.41,1.38.02.03.04.05.06.07ZM39.39,44.28l.45-5.96c.28.03.56.06.82.08l1.45.16c.35.04.72.07,1.11.12l-.5,6-1.12-.78c-.38-.27-.88-.3-1.29-.09l-.92.47ZM46.82,36.85c-.07-.03-.13-.05-.2-.07-.04-.01-.07-.02-.1-.03-.63-.18-1.32-.33-2.11-.44-.71-.11-1.42-.18-2.05-.24l-1.44-.15c-.57-.06-1.19-.13-1.84-.17-.1-.01-.2-.01-.3-.01h-.09c-.71-.04-1.47-.03-2.24.07l6.17-10.05,4.2,11.09ZM32.67,26.24s-.05.01-.07.02c-.11.04-.22.08-.34.12-2.32.84-4.8,1.58-7.44,2.22l-.98-1.97s-.01-.01-.01-.02c-.01-.03-.01-.05-.03-.07-.02-.05-.04-.1-.07-.16l-3.27-6.61c2.07-1.67,4.12-3.17,6.16-4.47,0-.01.03-.01.04-.02.08-.06.17-.11.25-.16.01,0,.02,0,.02,0,4.95-3.15,9.81-5.2,14.6-6.17h.01c.87,3.76,2.46,6.98,4.73,9.62-3.64,3.13-8.17,5.67-13.6,7.68Z\"></path><path d=\"M42.51,6.27c-.15.02-.3.05-.45.08.07-.03.15-.05.22-.06.08-.02.16-.02.23-.02Z\"></path><path d=\"M49.06,19.36c-.04.06-.09.12-.15.18-.08.08-.17.15-.26.19.14-.11.27-.24.41-.37Z\"></path>",
  "router": "<path d=\"M53.21,34.03h-4.69v-7.52c0-.69-.56-1.25-1.25-1.25s-1.25.56-1.25,1.25v7.52H10.8c-2.88,0-5.22,2.35-5.23,5.23v12.5c.01,2.87,2.35,5.22,5.23,5.22h42.4c1.44,0,2.75-.59,3.69-1.53.94-.95,1.53-2.25,1.53-3.69v-12.5c0-2.88-2.34-5.23-5.22-5.23ZM55.92,51.76c0,1.5-1.22,2.72-2.72,2.72H10.8c-1.5,0-2.73-1.22-2.73-2.72v-12.5c0-1.5,1.23-2.73,2.73-2.73h42.4c1.5,0,2.72,1.23,2.72,2.73v12.5Z\"></path><path d=\"M56.94,11.03c.42.41.42,1.07.01,1.49-.41.42-1.07.42-1.49.01,0,0-.01,0-.01-.01-4.52-4.52-11.86-4.53-16.38,0,0,0,0,0,0,0-.42.41-1.08.4-1.49-.02-.4-.41-.4-1.06,0-1.47,5.35-5.35,14.01-5.35,19.36,0,0,0,0,0,0,0h0Z\"></path><path d=\"M42.8,16.38c-.58,0-1.05-.47-1.05-1.05,0-.28.11-.55.31-.74,2.92-2.79,7.51-2.79,10.43,0,.42.41.42,1.07.01,1.49-.41.42-1.07.42-1.49.01,0,0-.01,0-.01-.01-2.08-1.99-5.36-1.99-7.45,0-.2.2-.47.31-.74.31Z\"></path><path d=\"M47.27,17.92c-1.35,0-2.44,1.09-2.44,2.44s1.09,2.44,2.44,2.44,2.44-1.09,2.44-2.44-1.09-2.44-2.44-2.44Z\"></path><path d=\"M14.51,40.62c-1.35,0-2.44,1.09-2.44,2.44s1.09,2.44,2.44,2.44,2.44-1.09,2.44-2.44-1.09-2.44-2.44-2.44Z\"></path><path d=\"M22.86,40.62c-1.35,0-2.44,1.09-2.44,2.44s1.09,2.44,2.44,2.44,2.44-1.09,2.44-2.44-1.09-2.44-2.44-2.44Z\"></path><path d=\"M31.21,40.62c-1.35,0-2.44,1.09-2.44,2.44s1.09,2.44,2.44,2.44,2.44-1.09,2.44-2.44-1.09-2.44-2.44-2.44Z\"></path>",
  "smart-devices": "<path d=\"M58.02,10.74H5.98c-1.79,0-3.25,1.45-3.25,3.25v4.29c0,3.86,2.43,7.2,6.01,8.45v3.27c0,12.83,10.43,23.26,23.26,23.26s23.27-10.43,23.27-23.26v-3.27c3.58-1.25,6-4.59,6-8.45v-4.29c0-1.8-1.46-3.25-3.25-3.25ZM52.77,30c0,11.45-9.32,20.76-20.77,20.76s-20.76-9.31-20.76-20.76v-2.96h41.53v2.96ZM58.77,18.28c0,2.99-2.02,5.54-4.92,6.26H10.15c-2.9-.72-4.92-3.27-4.92-6.26v-4.29c0-.42.34-.75.75-.75h52.04c.41,0,.75.33.75.75v4.29Z\"></path><path d=\"M32,47.44c-5.1,0-9.26-4.15-9.26-9.25s4.15-9.26,9.26-9.26,9.26,4.15,9.26,9.26-4.15,9.25-9.26,9.25ZM32,31.43c-3.73,0-6.76,3.03-6.76,6.76s3.03,6.75,6.76,6.75,6.76-3.03,6.76-6.75-3.03-6.76-6.76-6.76Z\"></path><path d=\"M32,34.96c-1.78,0-3.22,1.44-3.22,3.22s1.44,3.22,3.22,3.22,3.22-1.44,3.22-3.22-1.44-3.22-3.22-3.22Z\"></path>",
  "smart-support": "<path d=\"M60.24,45.91c-.47-.49-1.16-.76-1.86-.71-.41.02-.81.04-1.22.06.8-10.37.67-20.87-.42-31.22-.24-2.26-2.26-4.16-4.63-4.31-13.54-.64-26.7-.66-40.26-.05-2.35.14-4.38,2.04-4.61,4.31-1.04,10.38-1.17,20.89-.4,31.27-.4-.02-.8-.04-1.2-.06-.7-.03-1.39.22-1.86.71-.45.48-.67,1.14-.6,1.81.11,1,.17,1.5.29,2.51.25,1.98,2.02,3.65,4.05,3.8,8.24.49,16.36.74,24.48.74s16.25-.25,24.48-.74h.02c2.01-.15,3.78-1.82,4.03-3.8.12-1,.18-1.5.29-2.51.07-.67-.15-1.33-.6-1.81h.02ZM9.73,14.24c.1-1.03,1.17-2,2.25-2.07,13.46-.6,26.55-.58,39.99.05,1.11.07,2.18,1.04,2.29,2.07,1.08,10.31,1.21,20.76.39,31.08-15.4.73-30.6.73-45.29,0-.79-10.34-.67-20.81.38-31.15v.02ZM34.55,48.47c-.16.41-.55.71-.99.71h-3.09c-.44,0-.83-.3-.99-.71,1.95,0,3.13,0,5.08,0h0ZM58.06,49.92c-.1.78-.92,1.55-1.73,1.62-16.37.98-32.29.98-48.63,0-.81-.06-1.64-.83-1.74-1.62-.11-.9-.17-1.39-.26-2.22,6.96.4,14.05.63,21.23.7.17,1.82,1.69,3.27,3.53,3.28h3.12c1.84,0,3.36-1.46,3.53-3.28,7.02-.08,14.1-.31,21.23-.7-.09.83-.15,1.32-.26,2.22h-.02Z\"></path><path d=\"M29.35,15.92h0c2.12-.01,3.19-.01,5.31,0h0c.69,0,1.25-.55,1.25-1.24s-.55-1.25-1.24-1.26c-2.14-.02-3.21-.02-5.34,0-.69,0-1.25.57-1.24,1.26,0,.69.56,1.24,1.25,1.24h.01Z\"></path><g><path d=\"M33.18,43.5c-.69,0-1.25-.56-1.25-1.25v-3.27c-2.5,0-5-.18-7.47-.53l-.38-.05c-2.75-.39-4.98-2.48-5.54-5.2-.3-1.47-.45-2.97-.45-4.46,0-.35,0-.7.02-1.05.06-1.15.2-2.3.43-3.42.27-1.34.95-2.54,1.94-3.48,1-.94,2.24-1.53,3.59-1.72l.39-.05c5.01-.71,10.1-.71,15.12,0l.39.06c.29.04.58.1.86.18,2.35.66,4.13,2.55,4.65,4.93,0,0,.02.09.02.1.6,2.95.6,5.95,0,8.92l-.02.1c-.29,1.3-.95,2.47-1.92,3.38-1,.94-2.24,1.53-3.59,1.72l-.39.05c-.12.02-.23.03-.34.05-.13.92-.49,2.2-1.46,3.24-1.08,1.17-2.63,1.76-4.58,1.76h-.02ZM33.18,36.47c.33,0,.64.13.87.36.24.23.38.56.38.89v3.15c.62-.15,1.12-.42,1.49-.81.95-1.01.87-2.57.87-2.58-.04-.66.45-1.25,1.11-1.32.44-.05.88-.11,1.32-.17l.39-.05c.84-.12,1.61-.49,2.23-1.07.6-.57,1.01-1.29,1.19-2.1v-.06c.55-2.63.55-5.29,0-7.92-.34-1.53-1.44-2.71-2.9-3.11-.17-.05-.36-.09-.54-.11l-.38-.06c-4.78-.67-9.63-.67-14.42,0l-.39.05c-.84.12-1.61.49-2.23,1.07-.62.58-1.04,1.33-1.21,2.16-.2.99-.33,2.01-.38,3.03-.01.31-.02.62-.02.93,0,1.33.14,2.66.4,3.96.35,1.69,1.73,2.99,3.43,3.23l.38.05c2.76.39,5.57.55,8.35.49h.05Z\"></path><g><circle cx=\"25.63\" cy=\"28.94\" r=\"2.5\"></circle><circle cx=\"32.01\" cy=\"28.94\" r=\"2.5\"></circle><circle cx=\"38.39\" cy=\"28.94\" r=\"2.5\"></circle></g></g>",
  "smart-watch": "<path d=\"M45.62,31.93h0c-.64,0-1.16.52-1.16,1.16-.01,2.18-.07,4.51-.41,6.8-.24,1.6-.55,3.13-1.64,4.23-.76.77-2.03,1.25-3.89,1.49-2.15.28-4.44.27-6.65.27h-.9c-2.21,0-4.49,0-6.65-.27-1.85-.24-3.13-.72-3.89-1.49-1.09-1.09-1.4-2.63-1.64-4.23-.39-2.56-.42-5.11-.42-7.93s.03-5.37.42-7.93c.24-1.6.55-3.13,1.64-4.23.75-.76,2.03-1.25,3.89-1.49,2.15-.28,4.43-.28,6.64-.27h.91c2.21,0,4.49,0,6.64.27,1.86.24,3.13.72,3.89,1.49.99,1,1.33,2.36,1.55,3.68.11.63.71,1.06,1.34.96.63-.11,1.06-.7.96-1.34-.27-1.62-.74-3.47-2.19-4.93-.22-.22-.45-.42-.71-.61,0-.02-.02-.04-.02-.06-.9-1.6-1.61-3.21-2.1-4.8-.27-.87-.47-1.72-.56-2.39-.07-.54-.1-1.2-.15-2.5v-.28c-.06-1.4-.1-2.61-.9-3.94l-.02-.04c-1.06-1.73-2.97-2.23-4.31-2.46-1.27-.22-2.52-.31-3.74-.31h-.04c-1.22,0-2.48.09-3.74.31-1.34.23-3.25.73-4.31,2.46l-.03.04c-.8,1.32-.84,2.54-.89,3.94v.28c-.06,1.31-.08,1.96-.16,2.5-.09.68-.29,1.53-.56,2.39-.48,1.55-1.16,3.12-2.03,4.67-.37.24-.7.5-.99.8-1.58,1.6-2,3.61-2.29,5.52-.41,2.72-.44,5.47-.44,8.28s.03,5.56.44,8.28c.29,1.92.7,3.93,2.29,5.52.27.27.57.52.9.74,0,0,0,.02.01.03.9,1.6,1.61,3.21,2.1,4.8.27.87.47,1.72.56,2.39.07.54.1,1.2.15,2.5v.28c.06,1.4.1,2.61.9,3.93l.03.05c1.06,1.73,2.97,2.23,4.31,2.46,1.2.2,2.4.31,3.56.31h.4c1.16,0,2.36-.1,3.56-.31,1.34-.23,3.25-.73,4.32-2.48,0,0,.01-.02.02-.02.8-1.32.84-2.54.89-3.94v-.28c.06-1.3.08-1.95.16-2.5.09-.67.29-1.52.56-2.39.49-1.59,1.2-3.21,2.1-4.8.04-.07.07-.14.09-.21.23-.17.44-.35.64-.55,1.58-1.59,2-3.6,2.29-5.52.37-2.44.43-4.87.44-7.13,0-.64-.52-1.16-1.16-1.17h0ZM24.03,13.37c.31-1,.53-1.96.64-2.76.09-.66.12-1.35.17-2.74v-.28c.05-1.25.08-2.01.57-2.82,0,0,.02-.02.02-.03.44-.71,1.28-1.14,2.72-1.38,1.14-.19,2.27-.29,3.36-.27h.03c1.09-.01,2.22.08,3.36.27,1.44.24,2.28.67,2.72,1.38l.02.03c.49.81.51,1.56.56,2.82v.29c.06,1.38.09,2.07.18,2.73.11.81.33,1.76.64,2.76.29.94.65,1.89,1.07,2.83-.4-.08-.82-.15-1.26-.21-2.3-.29-4.66-.29-6.93-.29h-.91c-2.28,0-4.64,0-6.94.29-.37.05-.72.11-1.06.17.41-.93.77-1.86,1.06-2.79h0ZM37.6,59.25c-.44.71-1.28,1.14-2.72,1.38-1.14.19-2.27.29-3.36.27h-.03c-1.09.02-2.22-.08-3.36-.27-1.44-.24-2.28-.67-2.72-1.38l-.02-.03c-.49-.81-.51-1.56-.56-2.82v-.28c-.06-1.38-.08-2.08-.18-2.74-.11-.81-.33-1.76-.64-2.76-.3-.96-.67-1.93-1.11-2.91.35.07.72.13,1.11.18,2.3.29,4.66.29,6.94.29h1.34c2.14,0,4.34-.02,6.49-.29.46-.06.9-.13,1.31-.22-.44.98-.82,1.97-1.12,2.94-.31,1-.53,1.96-.64,2.76-.09.66-.12,1.35-.17,2.74v.28c-.05,1.25-.08,2.01-.57,2.82\"></path><circle cx=\"45.54\" cy=\"28.14\" r=\"2.4\"></circle><path d=\"M25.94,38.92c-.3,0-.59-.11-.82-.34-.45-.45-.45-1.19,0-1.64l5.14-5.14v-10.55c0-.64.52-1.16,1.16-1.16s1.16.52,1.16,1.16v11.03c0,.31-.12.6-.34.82l-5.48,5.48c-.23.23-.52.34-.82.34Z\"></path>",
  "speaker": "<circle cx=\"32\" cy=\"16.07\" r=\"2.68\"></circle><path d=\"M32,28.94c-7.54,0-13.68,6.14-13.68,13.68s6.14,13.68,13.68,13.68,13.68-6.14,13.68-13.68-6.14-13.68-13.68-13.68ZM32,53.71c-6.12,0-11.09-4.98-11.09-11.09s4.98-11.09,11.09-11.09,11.09,4.98,11.09,11.09-4.98,11.09-11.09,11.09ZM32,35.01c-4.19,0-7.6,3.41-7.6,7.6s3.41,7.6,7.6,7.6,7.6-3.41,7.6-7.6-3.41-7.6-7.6-7.6ZM32,47.63c-2.77,0-5.01-2.25-5.01-5.01s2.25-5.01,5.01-5.01,5.01,2.25,5.01,5.01-2.25,5.01-5.01,5.01ZM32,24.45c4.62,0,8.37-3.76,8.37-8.37s-3.76-8.37-8.37-8.37-8.37,3.76-8.37,8.37,3.76,8.37,8.37,8.37ZM32,10.29c3.19,0,5.78,2.59,5.78,5.78s-2.59,5.78-5.78,5.78-5.78-2.59-5.78-5.78,2.59-5.78,5.78-5.78ZM53.08,15.7c-.39-3.61-.95-7.39-3.05-10.34-1.56-2.19-3.98-3.55-7.39-4.16-3.31-.59-6.7-.58-9.98-.58h-1.31c-3.28,0-6.67,0-9.98.58-3.4.61-5.82,1.96-7.39,4.16-2.1,2.95-2.66,6.72-3.05,10.34-.58,5.32-.62,10.75-.62,16.3s.05,10.98.62,16.3c.39,3.62.95,7.41,3.06,10.34,1.57,2.19,3.99,3.55,7.38,4.15,3.31.59,6.71.59,9.99.58h1.93c3.08,0,6.25-.03,9.35-.58,3.39-.6,5.81-1.96,7.38-4.15,2.1-2.93,2.66-6.72,3.06-10.34.58-5.32.62-10.75.62-16.3s-.05-10.98-.62-16.3h0ZM50.5,48.03c-.36,3.28-.85,6.68-2.58,9.11-1.16,1.62-3.04,2.64-5.73,3.11-3.09.55-6.37.55-9.54.54h-1.28c-3.17,0-6.45,0-9.54-.54-2.7-.48-4.57-1.5-5.73-3.11-1.74-2.42-2.23-5.83-2.58-9.11-.56-5.2-.61-10.54-.61-16.02s.05-10.83.61-16.02c.35-3.27.85-6.67,2.59-9.11,1.15-1.61,3.03-2.63,5.73-3.11,3.08-.55,6.36-.55,9.52-.54h1.32c3.17,0,6.44,0,9.52.54,2.7.48,4.58,1.5,5.73,3.11,1.74,2.44,2.23,5.84,2.59,9.11.56,5.19.61,10.54.61,16.02s-.05,10.83-.61,16.02h0Z\"></path>",
  "supply-chain": "<g><path d=\"M58.82,32.02c0,.43-.01.87-.04,1.3.01.04,0,.09-.01.14,0,.42-.05.85-.09,1.27-.04.44-.1.88-.17,1.31,0,.03-.01.06-.01.09-.07.42-.14.83-.23,1.24-.09.44-.19.86-.3,1.29-.11.43-.23.85-.36,1.26-.59,1.88-1.38,3.67-2.36,5.35-.36.62-1.16.83-1.76.44h0c-.56-.36-.74-1.09-.41-1.67.35-.61.75-1.33.94-1.74.14-.28.27-.57.39-.87.15-.33.28-.68.41-1.03.17-.43.32-.88.45-1.33.1-.31.19-.64.27-.96.01-.02.02-.05.03-.08.08-.33.16-.67.23-1.01.02-.07.03-.14.05-.22.07-.36.14-.73.19-1.1.07-.41.12-.82.16-1.24.03-.34.06-.67.07-1,.04-.49.05-.97.05-1.45,0-.39-.01-.79-.03-1.18v-.09c-.03-.4-.06-.79-.1-1.19-.04-.39-.09-.78-.14-1.16-.01-.04-.02-.07-.02-.11-.04-.22-.07-.45-.12-.67-.02-.12-.04-.24-.07-.37-.05-.25-.11-.51-.17-.77-.06-.25-.12-.5-.19-.76-.14-.5-.29-1-.46-1.49-.05-.15-.1-.29-.16-.44-.2-.56-.43-1.1-.67-1.64-.12-.25-.23-.51-.35-.76-.23-.46-.47-.91-.72-1.35-.34-.59-.18-1.34.39-1.71h0c.51-.33,1.15-.23,1.56.18,0,0,.01,0,.01.01.07.07.14.16.2.26,1.41,2.47,2.42,5.14,2.98,7.91.09.43.17.87.24,1.31.07.43.12.87.17,1.31,0,.04.01.08.01.12.04.41.07.83.09,1.25.03.45.04.9.04,1.36Z\"></path><path d=\"M32.14,5.32c.43,0,.87.01,1.3.04.04-.01.09,0,.14.01.42,0,.85.05,1.27.09.44.04.88.1,1.31.17.03,0,.06.01.09.01.42.07.83.14,1.24.23.44.09.86.19,1.29.3.43.11.85.23,1.26.36,1.88.59,3.67,1.38,5.35,2.36.62.36.83,1.16.44,1.76h0c-.36.56-1.09.74-1.67.41-.61-.35-1.33-.75-1.74-.94-.28-.14-.57-.27-.87-.39-.33-.15-.68-.28-1.03-.41-.43-.17-.88-.32-1.33-.45-.31-.1-.64-.19-.96-.27-.02-.01-.05-.02-.08-.03-.33-.08-.67-.16-1.01-.23-.07-.02-.14-.03-.22-.05-.36-.07-.73-.14-1.1-.19-.41-.07-.82-.12-1.24-.16-.34-.03-.67-.06-1-.07-.49-.04-.97-.05-1.45-.05-.39,0-.79.01-1.18.03h-.09c-.4.03-.79.06-1.19.1-.39.04-.78.09-1.16.14-.04.01-.07.02-.11.02-.22.04-.45.07-.67.12-.12.02-.24.04-.37.07-.25.05-.51.11-.77.17-.25.06-.5.12-.76.19-.5.14-1,.29-1.49.46-.15.05-.29.1-.44.16-.56.2-1.1.43-1.64.67-.25.12-.51.23-.76.35-.46.23-.91.47-1.35.72-.59.34-1.34.18-1.71-.39h0c-.33-.52-.23-1.16.18-1.57,0,0,0-.01.01-.01.07-.07.16-.14.26-.2,2.47-1.41,5.14-2.42,7.91-2.98.43-.09.87-.17,1.31-.24.43-.07.87-.12,1.31-.17.04,0,.08-.01.12-.01.41-.04.83-.07,1.25-.09.45-.03.9-.04,1.36-.04Z\"></path><path d=\"M32.14,58.68c.43,0,.87-.01,1.3-.04.04.01.09,0,.14-.01.42,0,.85-.05,1.27-.09.44-.04.88-.1,1.31-.17.03,0,.06-.01.09-.01.42-.07.83-.14,1.24-.23.44-.09.86-.19,1.29-.3.43-.11.85-.23,1.26-.36,1.88-.59,3.67-1.38,5.35-2.36.62-.36.83-1.16.44-1.76h0c-.36-.56-1.09-.74-1.67-.41-.61.35-1.33.75-1.74.94-.28.14-.57.27-.87.39-.33.15-.68.28-1.03.41-.43.17-.88.32-1.33.45-.31.1-.64.19-.96.27-.02.01-.05.02-.08.03-.33.08-.67.16-1.01.23-.07.02-.14.03-.22.05-.36.07-.73.14-1.1.19-.41.07-.82.12-1.24.16-.34.03-.67.06-1,.07-.49.04-.97.05-1.45.05-.39,0-.79-.01-1.18-.03h-.09c-.4-.03-.79-.06-1.19-.1-.39-.04-.78-.09-1.16-.14-.04-.01-.07-.02-.11-.02-.22-.04-.45-.07-.67-.12-.12-.02-.24-.04-.37-.07-.25-.05-.51-.11-.77-.17-.25-.06-.5-.12-.76-.19-.5-.14-1-.29-1.49-.46-.15-.05-.29-.1-.44-.16-.56-.2-1.1-.43-1.64-.67-.25-.12-.51-.23-.76-.35-.46-.23-.91-.47-1.35-.72-.59-.34-1.34-.18-1.71.39h0c-.33.52-.23,1.16.18,1.57,0,0,0,.01.01.01.07.07.16.14.26.2,2.47,1.41,5.14,2.42,7.91,2.98.43.09.87.17,1.31.24.43.07.87.12,1.31.17.04,0,.08.01.12.01.41.04.83.07,1.25.09.45.03.9.04,1.36.04Z\"></path><path d=\"M5.18,32.02c0,.43.01.87.04,1.3-.01.04,0,.09.01.14,0,.42.05.85.09,1.27.04.44.1.88.17,1.31,0,.03.01.06.01.09.07.42.14.83.23,1.24.09.44.19.86.3,1.29.11.43.23.85.36,1.26.59,1.88,1.38,3.67,2.36,5.35.36.62,1.16.83,1.76.44h0c.56-.36.74-1.09.41-1.67-.35-.61-.75-1.33-.94-1.74-.14-.28-.27-.57-.39-.87-.15-.33-.28-.68-.41-1.03-.17-.43-.32-.88-.45-1.33-.1-.31-.19-.64-.27-.96-.01-.02-.02-.05-.03-.08-.08-.33-.16-.67-.23-1.01-.02-.07-.03-.14-.05-.22-.07-.36-.14-.73-.19-1.1-.07-.41-.12-.82-.16-1.24-.03-.34-.06-.67-.07-1-.04-.49-.05-.97-.05-1.45,0-.39.01-.79.03-1.18v-.09c.03-.4.06-.79.1-1.19.04-.39.09-.78.14-1.16.01-.04.02-.07.02-.11.04-.22.07-.45.12-.67.02-.12.04-.24.07-.37.05-.25.11-.51.17-.77.06-.25.12-.5.19-.76.14-.5.29-1,.46-1.49.05-.15.1-.29.16-.44.2-.56.43-1.1.67-1.64.12-.25.23-.51.35-.76.23-.46.47-.91.72-1.35.34-.59.18-1.34-.39-1.71h0c-.51-.33-1.15-.23-1.56.18,0,0-.01,0-.01.01-.07.07-.14.16-.2.26-1.41,2.47-2.42,5.14-2.98,7.91-.09.43-.17.87-.24,1.31-.07.43-.12.87-.17,1.31,0,.04-.01.08-.01.12-.04.41-.07.83-.09,1.25-.03.45-.04.9-.04,1.36Z\"></path></g><path d=\"M45.74,29.57h.01c0-.37,0-1-.02-1.52,0-.22-.01-.44-.02-.65,0-.23-.02-.45-.04-.66-.02-.21-.03-.42-.06-.63-.04-.48-.1-.95-.19-1.42-.02-.1-.04-.21-.06-.31-.06-.33-.14-.67-.25-.99-.04-.17-.09-.33-.15-.48-.09-.33-.22-.64-.36-.94-.06-.15-.14-.31-.23-.45-.09-.17-.18-.33-.28-.49-.08-.15-.19-.29-.3-.43t-.02-.04c-.18-.25-.39-.49-.62-.72-.14-.14-.3-.29-.46-.41-.48-.4-1-.72-1.55-.98-.85-.4-1.79-.67-2.75-.84-.02-.01-.04-.02-.07-.02-.47-.09-.95-.15-1.44-.19-.47-.05-.94-.08-1.4-.1-.37-.02-.74-.03-1.1-.03-.62-.01-1.23-.01-1.8,0h-1.8c-.57,0-1.17,0-1.79.01-.35,0-.7,0-1.06.02-.48.03-.96.06-1.44.11-.16.01-.32.03-.48.05-.23.03-.48.06-.72.1-.17.02-.33.06-.49.1-.17.02-.32.05-.48.09-.05.01-.1.02-.13.04-.2.04-.39.1-.58.15-.23.08-.46.14-.69.23-.2.08-.4.16-.59.25-.02,0-.04.02-.06.02-.14.07-.28.14-.41.21-.41.23-.79.48-1.15.77-.18.14-.35.29-.52.46-.14.14-.28.3-.41.46-.12.15-.24.31-.36.46-.07.1-.13.21-.19.32-.09.13-.16.27-.23.4-.08.14-.15.3-.23.45-.07.15-.14.32-.2.49-.08.19-.15.38-.21.58-.19.6-.33,1.23-.45,1.85-.1.63-.17,1.27-.21,1.9-.09,1.27-.07,2.53-.06,3.65,0,0-.01,2.36-.01,2.65,0,.49.01,1.01.02,1.53.01.22.02.44.03.66,0,.22.02.44.04.65.01.21.03.42.05.63.03.23.05.47.08.7.03.24.07.48.12.71.02.1.03.21.06.31.07.33.15.67.24,1,.05.17.1.32.15.48.11.33.23.64.37.94.07.15.14.3.22.44.09.17.19.33.29.5.1.14.19.29.29.42,0,.01.01.01.01.02s0,.02.02.02c.18.25.38.48.59.69.19.19.38.36.58.52.21.17.43.32.65.46,1.33.83,2.91,1.24,4.54,1.44.64.08,1.29.13,1.93.15,1,.05,1.99.04,2.88.04h1.81c.89,0,1.85,0,2.85-.04.63-.03,1.27-.08,1.9-.15h.01c.23-.04.48-.07.72-.11.37-.06.74-.13,1.1-.22.2-.04.39-.1.58-.16.23-.06.46-.14.69-.23.2-.07.4-.15.59-.25.17-.07.33-.14.48-.23.22-.12.44-.25.64-.39.17-.12.32-.23.48-.36,0,0,0-.01.02-.02.04-.02.08-.06.12-.1.13-.11.27-.22.4-.34.14-.15.28-.31.41-.47.06-.07.12-.14.18-.22.01-.01.01-.02.02-.02.05-.08.11-.14.16-.23.04-.07.09-.15.14-.22.02-.04.03-.06.05-.1.09-.13.16-.26.23-.4.08-.14.15-.29.23-.44.08-.16.15-.33.2-.5.08-.19.15-.38.21-.57.2-.6.35-1.22.45-1.85.03-.18.05-.35.08-.52.01-.09.01-.18.02-.26.05-.38.08-.76.12-1.13.03-.43.05-.84.06-1.25.02-.85.01-3.78,0-5.05ZM28.99,19.78c.41-.01.81-.01,1.2-.01h3.32c.28,0,.57,0,.87.01v4.15l.02,2.96v2.04l-2.15-1.05c-.17-.08-.37-.12-.56-.12s-.38.04-.55.12l-2.15,1.06v-9.16ZM43.24,34.55c-.01.39-.03.75-.06,1.12-.03.33-.06.68-.1,1.03l-.02.18c-.02.18-.03.3-.06.42-.09.6-.21,1.09-.36,1.54l-.03.08c-.04.12-.07.22-.12.33-.02.06-.04.11-.06.16-.02.06-.04.12-.07.17-.07.15-.12.25-.17.34-.01.02-.12.22-.12.22-.05.07-.08.13-.12.2l-.13.2s-.04.06-.06.09l-.08.09c-.11.14-.2.23-.28.32,0,0-.29.24-.33.28-.11.08-.21.16-.32.24-.13.08-.28.18-.44.27-.12.06-.19.09-.25.12-.05.01-.1.04-.14.06-.11.06-.23.1-.34.14-.19.07-.33.12-.47.16-.2.06-.34.1-.48.13-.35.09-.65.15-.96.2-.12.02-.61.08-.62.09-.58.07-1.16.11-1.73.14-.72.02-1.45.03-2.13.03h-3.32c-.59,0-1.22-.01-1.85-.03-.59-.03-1.17-.07-1.73-.14-1.5-.19-2.66-.54-3.53-1.08-.13-.08-.27-.18-.4-.28-.13-.11-.26-.22-.38-.34-.11-.11-.21-.22-.3-.34-.04-.06-.08-.12-.13-.18l-.14-.21c-.07-.11-.13-.22-.19-.33-.02-.04-.04-.07-.06-.11-.02-.04-.11-.24-.12-.24-.06-.15-.16-.37-.23-.6-.01-.03-.02-.07-.03-.1-.03-.09-.06-.19-.09-.29-.1-.33-.16-.61-.22-.88,0,0-.04-.23-.04-.25-.04-.19-.08-.4-.1-.59-.03-.19-.05-.38-.07-.56-.02-.23-.03-.4-.05-.57,0-.21-.03-.39-.03-.56l-.03-.66c0-.51-.02-1-.02-1.47v-2.8c0-1.08-.02-2.2.06-3.32.05-.62.11-1.17.19-1.68.1-.55.22-1.06.36-1.49l.02-.07c.04-.11.07-.21.12-.32.06-.16.11-.28.16-.4.04-.07.09-.17.14-.27.01,0,.12-.21.12-.21.05-.08.08-.13.12-.2.11-.17.18-.27.26-.37.03-.03.05-.05.07-.08.07-.08.14-.17.22-.24.06-.07.13-.14.21-.2.04-.03.08-.06.12-.09.22-.18.47-.35.76-.51.05-.02.1-.06.16-.08.08-.03.16-.07.23-.1.11-.06.23-.1.34-.14.18-.07.3-.11.43-.15l.14-.04c.09-.03.24-.07.38-.11.04-.01.16-.04.18-.04.07-.02.14-.04.21-.05.09-.01.18-.02.27-.05.07-.01.14-.03.22-.04.2-.03.75-.1.75-.1.04-.01.08-.01.12-.01v9.8c.02.44.17.85.42,1.18.15.2.33.37.59.53.21.12.44.21.71.26.11.01.22.02.33.02.31,0,.62-.07.9-.21.02-.01.04-.02.06-.04l.4-.19.14-.07,1.66-.81,1.64.8.16.08.48.23c.28.13.58.2.88.2.38,0,.75-.11,1.07-.31.21-.13.41-.31.57-.52.26-.36.4-.78.4-1.21v-2.79l-.02-2.96v-4.02c.33.04.64.09.93.14.05.01.09.02.14.03.81.14,1.52.36,2.12.64.4.19.74.4,1.02.64.14.11.22.18.3.25.1.11.2.23.31.36.04.07.08.13.13.2l.08.09c.03.06.02.04.05.1.07.11.14.23.21.35.03.06.06.12.1.17.01.03.04.11.06.15.11.25.19.43.23.59.02.04.03.09.05.14.03.09.06.18.09.28,0,.05.02.09.04.14.06.19.11.41.16.67,0,0,.06.32.07.35.07.35.12.72.15,1.12.03.25.04.44.06.63.01.17.03.34.03.52l.02.65c.02.42.02.88.02,1.23,0,.08-.01.16-.01.24.02,2.6.01,4.41,0,4.97Z\"></path><path d=\"M27.83,37.36c0-1.09-.89-1.98-1.98-1.98s-1.98.89-1.98,1.98.89,1.98,1.98,1.98,1.98-.89,1.98-1.98Z\"></path><path d=\"M33.8,36.94c.06.01.12.02.17.02h4.56c.55,0,.98-.46.98-1s-.44-.99-.99-.98h-4.56c-.55,0-.98.46-.98,1,0,.49.35.89.82.97h0Z\"></path><path d=\"M33.98,37.76c-.55,0-.98.44-.98.99,0,.49.35.89.82.97.06.01.12.02.17.02h4.56c.55,0,.98-.46.98-1s-.44-.99-.99-.98h-4.56Z\"></path><path d=\"M53.06,13.89c0,1.65-1.3,2.95-2.95,2.95-.12,0-.24-.01-.35-.02-1.07-.12-1.96-.8-2.35-1.76-.17-.35-.25-.76-.25-1.17,0-1.65,1.3-2.95,2.95-2.95.46,0,.9.11,1.29.31.92.46,1.57,1.41,1.65,2.42.01.07.01.15.01.22Z\"></path><path d=\"M53.06,50.3c0,1.65-1.3,2.95-2.95,2.95-.12,0-.24-.01-.35-.02-1.07-.12-1.96-.8-2.35-1.76-.17-.35-.25-.76-.25-1.17,0-1.65,1.3-2.95,2.95-2.95.46,0,.9.11,1.29.31.92.46,1.57,1.41,1.65,2.42.01.07.01.15.01.22Z\"></path><path d=\"M16.75,13.89c0,1.65-1.3,2.95-2.95,2.95-.12,0-.24-.01-.35-.02-1.07-.12-1.96-.8-2.35-1.76-.17-.35-.25-.76-.25-1.17,0-1.65,1.3-2.95,2.95-2.95.46,0,.9.11,1.29.31.92.46,1.57,1.41,1.65,2.42.01.07.01.15.01.22Z\"></path><path d=\"M16.75,50.3c0,1.65-1.3,2.95-2.95,2.95-.12,0-.24-.01-.35-.02-1.07-.12-1.96-.8-2.35-1.76-.17-.35-.25-.76-.25-1.17,0-1.65,1.3-2.95,2.95-2.95.46,0,.9.11,1.29.31.92.46,1.57,1.41,1.65,2.42.01.07.01.15.01.22Z\"></path>",
  "tv": "<path d=\"M56.94,10.4H7.06c-2.64,0-4.78,2.15-4.78,4.78v29.04c0,2.64,2.14,4.78,4.78,4.78h2.18l-1.81,2.65c-.39.57-.24,1.34.32,1.74.22.14.47.21.71.21.4,0,.79-.19,1.03-.54l2.78-4.06h39.46l2.78,4.06c.24.35.63.54,1.03.54.25,0,.49-.07.71-.21.57-.4.71-1.17.32-1.74l-1.81-2.65h2.18c2.64,0,4.79-2.14,4.79-4.78V15.18c0-2.63-2.15-4.78-4.79-4.78ZM59.23,44.22c0,1.26-1.03,2.28-2.29,2.28H7.06c-1.26,0-2.28-1.02-2.28-2.28v-.96h54.45v.96ZM59.23,40.76H4.77V15.18c0-1.26,1.02-2.28,2.28-2.28h49.88c1.26,0,2.29,1.02,2.29,2.28v25.58Z\"></path>",
  "tablet": "<path d=\"M61.25,26.77c-.12-1.55-.27-3.14-.7-4.62-.96-3.62-3.85-5.29-7.16-6.17l1.09-1.09c1.62-1.62,1.62-4.25,0-5.87-.78-.78-1.83-1.22-2.94-1.22s-2.15.43-2.93,1.22l-.73.73-1.77,1.77-3.15,3.15c-5-.3-10.19-.32-15.24-.33-4.4.01-8.74.12-13.12.64-3.68.47-7.91,1.27-9.85,4.73-2.23,4.36-1.82,9.53-2.01,14.29-.03,1.85-.05,3.71.01,5.56v.05c.3,10.28,1.16,14.41,12.36,15.71,7.93.96,16.14.89,24.23.87,3.35-.06,6.62-.2,9.95-.57,2.91-.36,5.98-.83,8.33-2.63,3.49-2.71,3.57-7.66,3.77-11.71.23-4.83.23-9.68-.14-14.5h0ZM50.14,10.55c.37-.38.87-.58,1.4-.58s1.02.2,1.4.58c.77.77.77,2.03,0,2.81l-.15.15c-.34-.65-.78-1.26-1.32-1.8-.43-.43-.89-.8-1.39-1.1l.06-.06h0ZM43.9,16.79l4.64-4.64c.5.27.97.62,1.4,1.04.56.56.99,1.21,1.28,1.89h0l-.36.37-1.83,1.83-4.73,4.73h0l-3.89,3.89c-.3-.49-.66-.96-1.08-1.38-.54-.54-1.16-.99-1.82-1.33l1.57-1.57,2.14-2.14,2.68-2.68h0ZM34.49,23.13c-.25.25-.54.68-.83,1.21-1.21,2.19-2.52,6.16-1.59,7.09,1.09,1.09,5.32-.47,7.39-1.75.39-.24.7-.47.91-.67l6.59-6.59c.37.07.74.15,1.11.24.77.2,1.48.46,1.96.9,1.24,1.21,1.1,3.55,1.28,5.24.24,4.91.24,9.98-.16,14.93-.22,1.74-.31,3.66-2.06,4.21-.68.27-1.59.47-2.38.6-4.62.69-9.39.67-14.07.68h-.04c-7.07-.16-16.15.14-21.21-1.63-.63-.22-1.61-1.02-1.8-2.11-.87-5.13-.52-17.85.02-20.86.32-1.78,2.01-2.23,3.46-2.49,1.71-.29,3.44-.44,5.15-.55,5.98-.32,11.89-.31,17.92-.08l-1.65,1.65h0ZM37.79,26.01c.44.44.8.92,1.06,1.44l-.02.02c-.32.32-3.96,2.49-4.63,1.82s1.27-3.91,1.75-4.54c.66.29,1.29.71,1.83,1.26h0ZM59.34,41.17l-.02.54c-.17,3.58-.36,7.64-2.95,9.65-1.87,1.43-4.52,1.86-7.31,2.21-2.84.32-5.84.5-9.73.56h-.81c-1.3,0-2.59.01-3.89.01-7.26,0-13.31-.15-19.27-.86-6.13-.71-7.89-2.21-8.8-3.59-1.28-1.93-1.59-4.93-1.75-10.15v-.05c-.05-1.72-.04-3.42-.01-5.44.03-.9.05-1.82.07-2.71.06-3.71.12-7.54,1.7-10.67,1.47-2.58,5.05-3.25,8.3-3.66,4.42-.53,8.79-.61,12.86-.62h.18c4.34.02,8.78.03,13.1.23l-2.69,2.69c-6.6-.31-13.39-.36-19.99-.03-1.86.12-3.8.29-5.68.6-2.15.35-4.15.99-4.86,3.36-1.12,3.75-1.12,17.87-.2,23.06.15.83.39,1.49.78,2.01,1.22,1.52,3.61,1.79,5.46,2.16,6.03.9,12.35.95,18.82.98h.04c4.75-.01,9.56,0,14.25-.68,5.07-.71,5.98-2.2,6.34-7.68.3-4.85.32-9.77.09-14.39-.2-2.58-.06-5.96-2.4-7.38-.59-.37-1.32-.63-2.1-.84l2.79-2.79c3.55.71,6.11,1.99,6.9,4.97,0,.02.01.03.01.05.38,1.31.52,2.8.63,4.21.34,4.46.39,9.12.14,14.24h0Z\"></path>",
  "target": "<path d=\"M50.89,24.2l-.07.03c-.59.29-.83,1-.56,1.6,1.26,2.91,1.96,6.11,1.96,9.47,0,14.1-12.25,25.4-26.68,23.81-10.99-1.21-19.86-10.05-21.1-21.04-1.63-14.44,9.68-26.73,23.8-26.73,3.46,0,6.74.73,9.71,2.06.62.28,1.34.04,1.64-.56l.02-.03c.32-.64.03-1.4-.63-1.69-3.93-1.76-8.38-2.57-13.05-2.18C13.2,10.03,2.91,20.36,1.88,33.1c-1.32,16.33,12.18,29.85,28.5,28.58,12.69-.99,23.03-11.15,24.22-23.83.44-4.65-.33-9.09-2.04-13.03-.28-.65-1.03-.94-1.67-.63Z\"></path><path d=\"M61.18,11.88l-5.71-1.14,2.65-2.65c.49-.49.49-1.27,0-1.76h0c-.49-.49-1.28-.49-1.77,0l-2.66,2.66-1.14-5.72c-.2-.99-1.43-1.37-2.15-.65l-6.5,6.5c-.24.24-.34.58-.28.91l1.51,7.52-5.84,5.84c-1.09-1.01-2.32-1.87-3.66-2.55-2.71-1.4-5.86-2.05-9.18-1.69-7.48.79-13.55,6.83-14.38,14.31-1.15,10.31,7.4,19,17.69,18.06,7.98-.73,14.36-7.41,14.74-15.41.13-2.85-.46-5.55-1.63-7.92-.52-1.06-1.14-2.05-1.87-2.96l5.91-5.92,7.51,1.51c.33.07.67-.04.91-.27l6.5-6.51c.72-.72.35-1.95-.65-2.15ZM40.63,29.28c1.13,2.29,1.63,4.95,1.29,7.73-.74,6.19-5.74,11.19-11.92,11.96-8.94,1.11-16.49-6.4-15.42-15.35.71-5.95,5.34-10.85,11.25-11.87,3.15-.54,6.15,0,8.7,1.31,1.09.56,2.1,1.27,3,2.09l-6.52,6.52c-1.07-.81-2.5-1.17-4-.77-1.53.41-2.76,1.64-3.17,3.17-.92,3.48,2.18,6.57,5.65,5.65,1.53-.4,2.76-1.64,3.17-3.16.27-1.02.19-2-.14-2.86l6.69-6.7c.55.71,1.02,1.47,1.42,2.28ZM46.27,10.46c-.02-.08.01-.17.07-.22l4.21-4.22,1.02,5.09-4.31,4.31-.99-4.96ZM54.22,18.1l-.23.07-4.96-.99,4.31-4.31,5.08,1.02-4.2,4.21Z\"></path>",
  "thumbs-up": "<path d=\"M58.19,39.58c-.03-1.52-.79-2.86-1.95-3.72.84-.91,1.28-2.08,1.26-3.33-.06-2.57-2.23-4.66-4.84-4.66h-13.97v-10.52c0-1.27-.5-2.47-1.4-3.37-.93-.93-2.14-1.43-3.47-1.4-2.57.06-4.66,2.22-4.66,4.83v4.43c0,2.94-.79,5.83-2.27,8.42v-1.58c0-.7-.57-1.27-1.27-1.27h-9.75c-.7,0-1.27.57-1.27,1.27v1.32H4.41c-.68,0-1.24.55-1.24,1.24s.55,1.24,1.24,1.24h10.21v21.69h-7.72c-.68,0-1.24.55-1.24,1.24s.55,1.24,1.24,1.24h7.72v1.32c0,.7.57,1.27,1.27,1.27h9.75c.7,0,1.27-.57,1.27-1.27v-3.01c2.52,2.1,5.67,3.37,8.99,3.57h14.42c1.28,0,2.47-.5,3.37-1.39.93-.92,1.42-2.16,1.4-3.48-.02-.83-.25-1.6-.65-2.28.89-.19,1.71-.63,2.37-1.29.93-.93,1.42-2.16,1.4-3.47-.03-1.34-.63-2.55-1.57-3.4.06-.05.12-.11.18-.17.93-.92,1.42-2.16,1.4-3.47h-.03ZM24.36,56.7h-7.21v-26.74h7.21v26.74ZM50.02,43.86c.23.37.63.59,1.06.59h2.27c1.26,0,2.31.99,2.33,2.21,0,.63-.22,1.21-.66,1.65-.43.43-1,.66-1.6.66h-4.29c-.49,0-.92.28-1.12.7-.16.32-.18.7-.04,1.04.19.47.65.77,1.16.77h1.11c1.26,0,2.31.99,2.33,2.21,0,.63-.22,1.21-.67,1.65-.42.43-.99.66-1.6.66h-14.26c-3.54-.21-6.86-1.87-9.15-4.58v-16.82s.01-.02.02-.02c3.06-3.6,4.75-8.13,4.75-12.75v-4.43c0-1.26.99-2.31,2.21-2.33.66,0,1.21.22,1.65.66.43.43.66,1,.66,1.6v11.77c0,.69.56,1.25,1.25,1.25h15.22c1.26,0,2.31.99,2.34,2.21,0,.62-.22,1.21-.66,1.65-.43.43-1,.66-1.6.66h-3.41c-.47,0-.91.27-1.12.69-.17.35-.17.76,0,1.1.2.43.64.72,1.13.72h4.03c1.26,0,2.31.99,2.33,2.22,0,.62-.22,1.21-.66,1.65-.43.43-1,.66-1.6.66h-2.34c-.42,0-.8.21-1.04.55-.14.21-.22.46-.21.71,0,.23.06.46.19.66v.03Z\"></path><circle cx=\"20.76\" cy=\"53.1\" r=\"2.5\"></circle><path d=\"M59.74,14.25c-1.2-.17-1.35-.33-1.52-1.53-.09-.62-.62-1.07-1.24-1.07s-1.15.46-1.24,1.08c-.17,1.2-.33,1.35-1.52,1.52-.62.09-1.08.62-1.08,1.24s.46,1.15,1.08,1.24c1.2.17,1.35.33,1.52,1.52.09.62.61,1.08,1.24,1.08s1.15-.46,1.24-1.07c.17-1.2.33-1.36,1.52-1.53.62-.09,1.08-.61,1.08-1.24s-.46-1.15-1.08-1.24Z\"></path><path d=\"M48.74,11.92c1.2.17,1.35.33,1.52,1.52.09.62.61,1.08,1.24,1.08s1.15-.46,1.24-1.08c.17-1.2.33-1.35,1.52-1.52.62-.09,1.08-.62,1.08-1.24s-.46-1.15-1.08-1.24c-1.2-.17-1.35-.33-1.52-1.52-.09-.62-.61-1.08-1.24-1.08s-1.15.46-1.24,1.08c-.17,1.2-.33,1.35-1.52,1.52-.62.09-1.08.62-1.08,1.24s.46,1.15,1.08,1.24Z\"></path><path d=\"M48.74,21.53c1.2.17,1.35.33,1.52,1.52.09.62.61,1.08,1.24,1.08s1.15-.46,1.24-1.08c.17-1.2.33-1.35,1.52-1.52.62-.09,1.08-.61,1.08-1.24s-.46-1.15-1.08-1.24c-1.2-.17-1.35-.33-1.52-1.52-.09-.62-.61-1.08-1.24-1.08s-1.15.46-1.24,1.08c-.17,1.2-.33,1.35-1.52,1.52-.62.09-1.08.62-1.08,1.24s.46,1.15,1.08,1.24Z\"></path>",
  "trade-in": "<g><path d=\"M34.8,20.22c0-.39-.18-.76-.5-1l-9.37-7.05c-.38-.29-.89-.33-1.31-.12s-.69.64-.69,1.12v3.5c-9.08,1.57-15.33,6.45-15.33,12.08,0,1.01.21,2.01.6,2.98-.39.97-.6,1.97-.6,2.98,0,4.32,3.64,8.27,9.75,10.58.15.06.29.08.44.08.5,0,.98-.31,1.17-.81.24-.65-.08-1.37-.73-1.61-5.09-1.93-8.13-5.01-8.13-8.24,1.89,2.09,4.76,3.82,8.35,5.01.66.22,1.36-.14,1.58-.79s-.14-1.36-.79-1.58c-3.91-1.29-6.86-3.33-8.25-5.64,1.83-3.02,6.35-5.49,11.93-6.54v2.09c0,.47.27.91.69,1.12.42.21.93.17,1.31-.12l9.37-7.05c.31-.24.5-.61.5-1h0ZM25.43,24.77v-1.06c0-.36-.16-.71-.43-.94-.27-.24-.63-.35-.99-.29-6.03.85-11.07,3.17-13.9,6.3h0c0-4.51,5.99-8.62,14.25-9.78.62-.09,1.08-.61,1.08-1.24v-2.06l6.04,4.54-6.04,4.54h0Z\"></path><path d=\"M56.39,29.29c0-4.32-3.64-8.27-9.75-10.58-.64-.25-1.37.08-1.61.73s.08,1.37.73,1.61c5.09,1.93,8.13,5.01,8.13,8.24-1.89-2.09-4.76-3.82-8.35-5.01-.66-.22-1.36.14-1.58.79s.14,1.36.79,1.58c3.91,1.29,6.86,3.33,8.25,5.64-1.83,3.02-6.35,5.49-11.93,6.54v-2.09c0-.47-.27-.91-.69-1.12s-.93-.17-1.31.12l-9.37,7.05c-.31.24-.5.61-.5,1s.18.76.5,1l9.37,7.05c.22.17.49.25.75.25.19,0,.38-.04.56-.13.42-.21.69-.64.69-1.12v-3.5c9.08-1.57,15.33-6.45,15.33-12.08,0-1.01-.21-2.01-.6-2.98.39-.97.6-1.97.6-2.98h-.01ZM53.89,35.25c0,4.5-5.99,8.61-14.25,9.77-.62.09-1.08.61-1.08,1.24v2.06l-6.04-4.54,6.04-4.54v1.06c0,.36.16.71.43.94.27.24.64.35.99.29,6.03-.85,11.07-3.17,13.9-6.3h0v.02Z\"></path></g><circle cx=\"39.67\" cy=\"20.98\" r=\"2.5\"></circle><circle cx=\"24.33\" cy=\"43.02\" r=\"2.5\"></circle>",
  "transparent": "<path d=\"M22.03,18.48c0,1.65-1.3,2.95-2.95,2.95-.12,0-.24-.01-.35-.02-1.07-.12-1.96-.8-2.35-1.76-.17-.35-.25-.76-.25-1.17,0-1.65,1.3-2.95,2.95-2.95.46,0,.9.11,1.29.31.92.46,1.57,1.41,1.65,2.42.01.07.01.15.01.22Z\"></path><g><path d=\"M42.21,14.96c.43.46.54,1.13.19,1.69-.44.66-1.3.92-1.96.5-.25-.13-.51-.26-.77-.38-.02-.01-.05-.04-.08-.04-2.29-1.16-4.89-1.8-7.64-1.8-2.01,0-4.13.35-6.02,1.18-.71.24-1.65-.12-1.89-.83s.12-1.65.83-1.89c2.36-.83,4.72-1.3,7.09-1.3,3.74,0,7.26,1.04,10.26,2.86Z\"></path><path d=\"M51.73,34.2c-.64,5.75-3.69,10.65-8,13.85-.3.21-.59.41-.89.61-.69.45-1.41.85-2.14,1.22-.24.12-.47.24-.72.33-.15.08-.31.14-.46.2-.25.11-.48.2-.73.28-.31.12-.61.21-.93.32-.48.15-.98.28-1.48.39-.22.05-.45.11-.67.14-1.22.24-2.48.35-3.77.35-7.16,0-13.47-3.82-17-9.51-.05-.06-.08-.13-.12-.2-.14-.25-.3-.5-.43-.76-.13-.22-.25-.46-.37-.7-.11-.24-.22-.47-.33-.72-.27-.61-.51-1.24-.71-1.89-.08-.24-.15-.48-.22-.73-.51-1.74-.79-3.58-.79-5.46,0-2.72.59-5.43,1.65-7.91.07-.13.14-.25.24-.35.41-.46,1.07-.65,1.65-.35.71.35,1.06,1.18.71,1.89-.83,2.13-1.3,4.37-1.3,6.73,0,3.84,1.26,7.36,3.41,10.19.14.2.28.38.44.57.17.2.32.39.5.58.08.11.18.2.26.3.13.14.27.28.4.41.19.2.39.39.59.57.2.19.4.37.61.53.2.17.39.33.6.47.19.14.38.28.58.41.42.29.86.55,1.31.81,2.46,1.39,5.29,2.17,8.31,2.17,9.33,0,17.01-7.56,17.01-17.01,0-1.11-.11-2.21-.31-3.26-.07-.39-.17-.77-.26-1.15-.04-.67.4-1.41,1.05-1.55.73-.17,1.63.3,1.78,1.03.57,2.43.77,4.84.51,7.18Z\"></path></g><path d=\"M51.37,19.83l-3.3,3.25-2.22,2.18-13.17,12.98c-.79.84-1.78.78-2.59-.03-1.63-1.63-4.67-4.94-6.3-6.57-.81-.82-.75-1.83-.09-2.56.66-.72,1.77-.65,2.47.03l5.13,5.48,12.58-12.35,2.14-2.1,2.92-2.88c.79-.84,1.9-.77,2.6-.09.69.81.63,1.82-.17,2.67Z\"></path>",
  "ux": "<path d=\"M46.52,5.45h-29.04c-6.63,0-12.03,5.39-12.03,12.03v29.04c0,6.63,5.4,12.02,12.03,12.02h29.04c6.63,0,12.02-5.39,12.02-12.02v-29.04c0-6.64-5.39-12.03-12.02-12.03ZM56.05,46.52c0,5.25-4.27,9.52-9.52,9.52h-29.04c-5.26,0-9.53-4.27-9.53-9.52v-29.04c0-5.26,4.27-9.53,9.53-9.53h29.04c5.25,0,9.52,4.27,9.52,9.53v29.04Z\"></path><path d=\"M46.52,24.2h-29.04c-2.5,0-4.53,2.03-4.53,4.53v18.44c0,2.5,2.03,4.53,4.53,4.53h29.04c2.5,0,4.52-2.03,4.52-4.53v-18.44c0-2.5-2.02-4.53-4.52-4.53ZM48.55,47.18c0,.15-.02.31-.05.45l-14.13-9.32,14.18-9.36v18.23ZM17.49,26.7h29.04c.24,0,.47.04.68.12l-15.11,9.98-15.18-10.02c.18-.05.37-.08.57-.08ZM15.54,47.74c-.05-.18-.08-.36-.08-.56v-18.35l14.37,9.48-14.29,9.43ZM17.86,49.2l14.24-9.4,14.24,9.4h-28.48Z\"></path><circle cx=\"22.86\" cy=\"16.61\" r=\"2.5\"></circle><circle cx=\"29.44\" cy=\"16.61\" r=\"2.5\"></circle><circle cx=\"16.29\" cy=\"16.61\" r=\"2.5\"></circle>",
  "value": "<g><path d=\"M21.39,51.47c1.1-.4,1.7-1.6,1.4-2.7-.4-1.1-1.6-1.7-2.7-1.4-1.1.4-1.7,1.6-1.4,2.7.3,1.2,1.5,1.8,2.7,1.4Z\"></path><path d=\"M62.99,27.27c-1.5-2.5-4.8-2.9-6.9-.8-2.6,2.7-5.3,5.4-7.9,8.1l-.5.5c-.4-2-1.6-3.1-3.5-3.6-3.6-.9-7.1-1.8-10.7-2.7-2-.5-4-.6-5.9.2-1.4.5-2.7,1.3-4.1,2-.9.5-1.9,1-2.8,1.5l-1-3.1-.4-1.3c-.2-.6-.8-.9-1.4-.7l-8,2.6c-.6.2-.9.8-.7,1.4l.3,1.1-8.3,2.7c-.6.2-.9.8-.7,1.3.2.6.8.9,1.3.7l8.3-2.7,5.7,17.7-6.3,2c-.6.2-.9.8-.7,1.3.2.6.8.9,1.3.7l6.3-2,.3,1.1c.2.6.8.9,1.4.7l8-2.6c.6-.2.9-.8.7-1.4l-5.4-17.3h0s4.1-2.2,6-3.2c1.6-.8,3.2-1,4.9-.6,2.3.6,4.5,1.1,6.8,1.7,1.6.4,3.2.8,4.8,1.2,1.3.4,1.7,1.9.9,2.9-.4.5-.9.6-1.5.6h-8.9c-.6.1-1,.5-1.1,1.1,0,.6.4,1.1.9,1.3h10c1.4,0,2.6-.5,3.6-1.5.9-.9,1.7-1.8,2.6-2.7,2.4-2.4,4.8-4.9,7.2-7.3.5-.5,1.1-.8,1.9-.7.7.1,1.3.6,1.5,1.3.3.8,0,1.5-.6,2.1-3.5,3.5-6.9,7.1-10.4,10.6-1.7,1.7-3.6,2.5-6,2.5-3,0-10,.5-13,.5h-.6c-.5.1-.9.5-1,1.1s.3,1.1.8,1.3c.2.1.4.1.6.1,3.2,0,10.3-.4,13.5-.5,2.5,0,4.8-.8,6.7-2.6.5-.4.9-.9,1.4-1.3,3.3-3.3,6.5-6.6,9.8-10,1.5-1.3,1.8-3.5.8-5.3ZM18.69,53.37l-7-21.8,5.9-1.9,7,21.8-5.9,1.9Z\"></path></g><g><path d=\"M36.61,15.13c-.62.09-1.07.61-1.07,1.24s.46,1.15,1.07,1.24c1.2.17,1.34.31,1.51,1.51.09.62.61,1.07,1.24,1.07s1.15-.46,1.24-1.07c.17-1.2.31-1.34,1.51-1.51.62-.09,1.07-.61,1.07-1.24s-.46-1.15-1.07-1.24c-1.2-.17-1.34-.31-1.51-1.51-.09-.62-.61-1.07-1.24-1.07s-1.15.46-1.24,1.07c-.17,1.2-.31,1.34-1.51,1.51Z\"></path><path d=\"M42.05,12.83c1.2.17,1.34.31,1.51,1.51.09.62.61,1.07,1.24,1.07s1.15-.46,1.24-1.07c.17-1.2.31-1.34,1.51-1.51.62-.09,1.07-.61,1.07-1.24s-.46-1.15-1.07-1.24c-1.2-.17-1.34-.31-1.51-1.51-.09-.62-.61-1.07-1.24-1.07s-1.15.46-1.24,1.07c-.17,1.2-.31,1.34-1.51,1.51-.62.09-1.07.61-1.07,1.24s.46,1.15,1.07,1.24Z\"></path><path d=\"M47.53,19.9c-1.2-.17-1.34-.31-1.51-1.51-.09-.62-.61-1.07-1.24-1.07s-1.15.46-1.24,1.07c-.17,1.2-.31,1.34-1.51,1.51-.62.09-1.07.61-1.07,1.24s.46,1.15,1.07,1.24c1.2.17,1.34.31,1.51,1.51.09.62.61,1.07,1.24,1.07s1.15-.46,1.24-1.07c.17-1.2.31-1.34,1.51-1.51.62-.09,1.07-.61,1.07-1.24s-.46-1.15-1.07-1.24Z\"></path><path d=\"M49.92,13.87c-1.38,0-2.5,1.12-2.5,2.5s1.12,2.5,2.5,2.5,2.5-1.12,2.5-2.5-1.12-2.5-2.5-2.5Z\"></path></g>",
  "wcty": "<g><path d=\"M54.75,45.2c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5,2.5-1.1,2.5-2.5-1.1-2.5-2.5-2.5Z\"></path><path d=\"M19.75,45.2c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5,2.5-1.1,2.5-2.5-1.1-2.5-2.5-2.5Z\"></path><path d=\"M27.25,46.1h20c.7,0,1.2-.6,1.2-1.2s-.6-1.2-1.2-1.2h-20c-.7,0-1.2.6-1.2,1.2s.5,1.2,1.2,1.2Z\"></path><path d=\"M63.95,39.6c.1-1.4-.7-2.8-2.1-3.4l-5.3-2.5-3.9-8.6c-2-4.1-3.9-8-9.2-8.2h-24c-.7,0-1.2.6-1.2,1.2h0c0,.7.6,1.2,1.2,1.2h23.8c3.3,0,4.7,1.6,6.6,5.5h-3c-1.9,0-3.4,1.5-3.4,3.4v3.5c0,2.7,2.2,4.9,4.9,4.9h8.4l4.1,1.9c.4.2.6.6.6,1v7.4c0,.3-.2.5-.5.5h-1.2c-.1-2.6-2.3-4.7-5-4.7s-4.8,2.1-5,4.7h-25c-.1-2.6-2.3-4.7-5-4.7s-4.8,2.1-5,4.7h-1.4v-1.1c0-1.5-1.3-2.8-2.8-2.8h-1.4v-12.5c0-.7-.6-1.2-1.2-1.2h0c-.7,0-1.2.6-1.2,1.2v13.2c-.7.5-1.2,1.3-1.2,2.2v.8c0,1.5,1.3,2.8,2.8,2.8h6.9c.8,1.6,2.5,2.7,4.4,2.7s3.6-1.1,4.4-2.7h26.2c.8,1.6,2.5,2.7,4.4,2.7s3.6-1.1,4.4-2.7h1.7c1.7,0,3-1.4,3-3l.2-7.4ZM48.45,34.1c-1.4,0-2.4-1.1-2.4-2.4v-3.4c0-.5.4-.9.9-.9h4.1l3,6.7h-5.6ZM10.95,47.1c0,.2-.1.3-.3.3h-2.3c-.2,0-.3-.1-.3-.3v-.8c0-.2.1-.3.3-.3h2.3c.2,0,.3.1.3.3,0,0,0,.8,0,.8ZM19.75,50.2c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5,2.5,1.1,2.5,2.5-1.1,2.5-2.5,2.5ZM54.75,50.2c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5,2.5,1.1,2.5,2.5-1.1,2.5-2.5,2.5Z\"></path></g><g><path d=\"M1.15,18.6c-.6.1-1.1.6-1.1,1.2s.5,1.1,1.1,1.2c1.2.2,1.3.3,1.5,1.5.1.6.6,1.1,1.2,1.1s1.1-.5,1.2-1.1c.2-1.2.3-1.3,1.5-1.5.6-.1,1.1-.6,1.1-1.2s-.5-1.1-1.1-1.2c-1.2-.2-1.3-.3-1.5-1.5-.1-.6-.6-1.1-1.2-1.1s-1.1.5-1.2,1.1c-.1,1.2-.3,1.3-1.5,1.5Z\"></path><path d=\"M6.65,16.3c1.2.2,1.3.3,1.5,1.5.1.6.6,1.1,1.2,1.1s1.1-.5,1.2-1.1c.2-1.2.3-1.3,1.5-1.5.6-.1,1.1-.6,1.1-1.2s-.5-1.1-1.1-1.2c-1.2-.2-1.3-.3-1.5-1.5-.1-.6-.6-1.1-1.2-1.1s-1.1.5-1.2,1.1c-.2,1.2-.3,1.3-1.5,1.5-.6.1-1.1.6-1.1,1.2,0,.6.5,1.1,1.1,1.2Z\"></path><path d=\"M12.15,23.3c-1.2-.2-1.3-.3-1.5-1.5-.1-.6-.6-1.1-1.2-1.1s-1.1.5-1.2,1.1c-.2,1.2-.3,1.3-1.5,1.5-.6.1-1.1.6-1.1,1.2s.5,1.1,1.1,1.2c1.2.2,1.3.3,1.5,1.5.1.6.6,1.1,1.2,1.1s1.1-.5,1.2-1.1c.2-1.2.3-1.3,1.5-1.5.6-.1,1.1-.6,1.1-1.2-.1-.5-.5-1.1-1.1-1.2Z\"></path><path d=\"M14.55,17.3c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5,2.5-1.1,2.5-2.5-1.2-2.5-2.5-2.5Z\"></path></g>",
  "warning": "<path d=\"M25.59,13.37l-14.51,27.36c-2.56,4.83.94,10.65,6.41,10.65h29.02c5.47,0,8.97-5.82,6.41-10.65l-14.51-27.36c-2.73-5.14-10.09-5.14-12.82,0Z\"></path><circle cx=\"32\" cy=\"41.75\" r=\"2.69\"></circle><line x1=\"32\" y1=\"21.95\" x2=\"32\" y2=\"34.86\"></line>",
  "warranty": "<g><path d=\"M32,62.44c-.13,0-.26-.02-.39-.07-7.63-2.78-13.82-7.02-18.39-12.59-3.66-4.46-6.28-9.77-7.8-15.78-2.58-10.19-1.1-18.78-1.04-19.14l.32-1.73c.12-.62.71-1.02,1.32-.91.62.12,1.02.71.91,1.32l-.32,1.72c-.01.07-1.45,8.52,1.03,18.26,1.45,5.67,3.93,10.67,7.37,14.86,4.23,5.14,9.94,9.08,16.99,11.71,7.05-2.63,12.76-6.58,16.99-11.71,3.44-4.19,5.92-9.19,7.37-14.86,2.48-9.73,1.04-18.18,1.03-18.27l-.16-.84c-12.6-.94-22.14-7.77-25.23-10.26-.64.51-1.59,1.24-2.81,2.07-.52.35-1.22.22-1.58-.3s-.22-1.22.3-1.58c1.78-1.21,2.93-2.17,3.35-2.52.43-.37,1.06-.37,1.48,0,1.15.99,11.61,9.66,25.5,10.38.52.03.96.41,1.06.92l.32,1.72c.07.37,1.54,8.96-1.04,19.15-1.52,6.01-4.15,11.32-7.8,15.78-4.57,5.57-10.76,9.81-18.39,12.59-.12.05-.26.07-.39.07h0Z\"></path><path d=\"M32,54.49c-.13,0-.26-.02-.39-.07-12.73-4.64-17.5-13.91-19.26-20.87-1.89-7.48-.81-13.8-.76-14.06.11-.62.7-1.03,1.32-.92s1.03.7.92,1.32c-.01.06-1.05,6.17.75,13.19,2.35,9.18,8.21,15.59,17.43,19.07,1.67-.63,3.24-1.36,4.69-2.19.54-.31,1.24-.12,1.55.42s.12,1.24-.42,1.55c-1.67.95-3.5,1.79-5.43,2.5-.12.05-.26.07-.39.07h0Z\"></path><path d=\"M49.66,37.33c-.13,0-.26-.02-.38-.07-.59-.21-.9-.86-.69-1.45,1.8-5.02,2-9.86,1.86-13.03-.03-.63.46-1.16,1.08-1.19.63-.03,1.16.46,1.19,1.08.15,3.38-.06,8.53-1.99,13.9-.17.46-.6.75-1.07.75h0Z\"></path><path d=\"M40.75,17.12c-.15,0-.3-.03-.44-.09-3.88-1.65-6.77-3.69-8.15-4.76-.49-.38-.58-1.1-.2-1.59s1.1-.58,1.59-.2c1.29,1,4,2.91,7.65,4.46.58.24.85.91.6,1.49-.18.43-.6.69-1.04.69h0Z\"></path><path d=\"M41.9,50.36c-.51,0-.96-.34-1.09-.83-1.25-4.52-2.05-5.32-6.57-6.57-.49-.14-.83-.58-.83-1.09s.34-.96.83-1.09c4.52-1.25,5.32-2.05,6.57-6.57.14-.49.58-.83,1.09-.83s.96.34,1.09.83c1.25,4.52,2.05,5.32,6.57,6.57.49.14.83.58.83,1.09s-.34.96-.83,1.09c-4.52,1.25-5.32,2.05-6.57,6.57-.14.49-.58.83-1.09.83h0ZM38.04,41.86c1.91.86,3,1.96,3.87,3.87.86-1.91,1.96-3,3.87-3.87-1.91-.86-3-1.96-3.87-3.87-.86,1.91-1.96,3-3.87,3.87Z\"></path><path d=\"M18.51,18.69c-.51,0-.96-.34-1.09-.83-1.25-4.52-2.05-5.32-6.57-6.57-.49-.14-.83-.58-.83-1.09s.34-.96.83-1.09c4.52-1.25,5.32-2.05,6.57-6.57.14-.49.58-.83,1.09-.83s.96.34,1.09.83c1.25,4.52,2.05,5.32,6.57,6.57.49.14.83.58.83,1.09s-.34.96-.83,1.09c-4.52,1.25-5.32,2.05-6.57,6.57-.14.49-.58.83-1.09.83ZM14.64,10.19c1.91.86,3,1.96,3.87,3.87.86-1.91,1.96-3,3.87-3.87-1.91-.86-3-1.96-3.87-3.87-.86,1.91-1.96,3-3.87,3.87Z\"></path></g><circle cx=\"46.57\" cy=\"18.61\" r=\"2.33\"></circle>",
  "water-damage": "<path d=\"M46.95,45.62c-.7-.08-1.3.42-1.38,1.11-.33,3.01-.78,6.14-2.37,8.36-1.06,1.48-2.77,2.41-5.24,2.84-2.84.5-5.86.5-8.77.5h-1.18c-2.92,0-5.93,0-8.77-.5-2.47-.44-4.18-1.37-5.24-2.84-1.59-2.22-2.04-5.34-2.37-8.35-.52-4.78-.56-9.7-.56-14.74s.04-9.96.56-14.74c.33-3,.78-6.12,2.37-8.36,1.05-1.47,2.76-2.4,5.24-2.84,2.83-.5,5.85-.5,8.75-.5h1.22c2.91,0,5.92,0,8.75.5,2.47.44,4.19,1.37,5.24,2.84.54.76.98,1.65,1.33,2.72.22.66.92,1.01,1.58.8.66-.22,1.01-.92.8-1.58-.43-1.32-.98-2.43-1.67-3.39-1.45-2.03-3.69-3.29-6.84-3.85-3.05-.54-6.18-.54-9.19-.54h-1.2c-3.02,0-6.14,0-9.19.54-3.15.56-5.39,1.82-6.84,3.85-1.95,2.73-2.46,6.21-2.82,9.54-.53,4.9-.57,9.9-.57,15.01s.04,10.11.57,15.01c.36,3.34.88,6.83,2.82,9.54,1.46,2.03,3.69,3.29,6.83,3.85,3.05.54,6.17.54,9.21.54h1.78c2.84,0,5.76-.03,8.61-.54,3.14-.56,5.38-1.82,6.83-3.85,1.94-2.71,2.46-6.2,2.82-9.54.07-.69-.42-1.3-1.11-1.38h0Z\"></path><path d=\"M32.54,12.61c0-.69-.56-1.25-1.25-1.25h-5.38c-.69,0-1.25.56-1.25,1.25s.56,1.25,1.25,1.25h5.38c.69,0,1.25-.56,1.25-1.25Z\"></path><circle cx=\"28.6\" cy=\"51.1\" r=\"2.5\"></circle><g><path d=\"M46.3,42.08c-4.53,0-9.11-3.41-9.11-9.93s7.88-14.4,8.21-14.75c.47-.49,1.33-.49,1.8,0,.34.35,8.21,8.55,8.21,14.75,0,6.52-4.58,9.93-9.11,9.93ZM46.3,20.11c-2.43,2.75-6.61,8.26-6.61,12.04,0,5.11,3.43,7.43,6.61,7.43s6.61-2.33,6.61-7.43c0-3.78-4.18-9.29-6.61-12.04Z\"></path><path d=\"M44.77,37.59c-.2,0-.4-.06-.58-.18-1.92-1.36-3.04-3.68-2.85-5.9.05-.55.53-.96,1.08-.91.55.05.96.53.91,1.08-.13,1.53.66,3.13,2.02,4.09.45.32.56.94.24,1.39-.19.28-.5.42-.82.42Z\"></path></g>",
  "widget": "<g><path d=\"M20.37,4.02h-8.73c-4.39,0-7.96,3.57-7.96,7.95v8.73c0,4.39,3.57,7.95,7.96,7.95h8.73c4.38,0,7.95-3.56,7.95-7.95v-8.73c0-4.38-3.57-7.95-7.95-7.95ZM25.82,20.7c0,3.01-2.44,5.45-5.45,5.45h-8.73c-3.01,0-5.46-2.44-5.46-5.45v-8.73c0-3.01,2.45-5.45,5.46-5.45h8.73c3.01,0,5.45,2.44,5.45,5.45v8.73Z\"></path><path d=\"M20.37,35.33h-8.73c-4.39,0-7.96,3.57-7.96,7.96v8.73c0,4.38,3.57,7.95,7.96,7.95h8.73c4.38,0,7.95-3.57,7.95-7.95v-8.73c0-4.39-3.57-7.96-7.95-7.96ZM25.82,52.02c0,3.01-2.44,5.45-5.45,5.45h-8.73c-3.01,0-5.46-2.44-5.46-5.45v-8.73c0-3.02,2.45-5.46,5.46-5.46h8.73c3.01,0,5.45,2.44,5.45,5.46v8.73Z\"></path></g><g><path d=\"M52.37,4.03h-8.73c-4.39,0-7.95,3.57-7.95,7.95v8.73c0,4.39,3.56,7.95,7.95,7.95h8.73c4.39,0,7.95-3.56,7.95-7.95v-8.73c0-4.38-3.56-7.95-7.95-7.95ZM57.82,20.71c0,3.01-2.44,5.46-5.45,5.46h-8.73c-3.01,0-5.45-2.45-5.45-5.46v-8.73c0-3.01,2.44-5.45,5.45-5.45h8.73c3.01,0,5.45,2.44,5.45,5.45v8.73Z\"></path><path d=\"M58.94,47.66c0,.61-.5,1.11-1.11,1.11h-8.72v8.72c0,.61-.49,1.11-1.1,1.11s-1.11-.5-1.11-1.11v-8.72h-8.72c-.61,0-1.11-.5-1.11-1.11s.5-1.11,1.11-1.11h8.72v-8.72c0-.61.49-1.11,1.11-1.11s1.1.5,1.1,1.11v8.72h8.72c.61,0,1.11.5,1.11,1.11Z\"></path></g>",
  "brand-loyalty": "<path d=\"M50.99,55.35l-7.59-17.63c1.15-.93,1.16-2.59,1.16-4.06,0-.72,0-1.81.22-2.11.21-.3,1.24-.63,1.92-.84,1.45-.47,3.1-1,3.59-2.5.47-1.45-.52-2.82-1.4-4.03-.46-.63-1.09-1.5-1.09-1.91s.63-1.28,1.09-1.91c.88-1.21,1.87-2.58,1.4-4.03-.49-1.5-2.13-2.03-3.59-2.5-.68-.22-1.7-.55-1.92-.84-.22-.3-.22-1.39-.22-2.11,0-1.52,0-3.23-1.26-4.15-1.25-.91-2.88-.38-4.31.08-.69.22-1.74.56-2.11.44-.33-.11-.95-.96-1.36-1.53-.9-1.25-1.92-2.66-3.52-2.66s-2.62,1.41-3.52,2.66c-.41.57-1.03,1.43-1.36,1.53-.37.12-1.42-.22-2.11-.44-1.43-.46-3.06-.99-4.31-.08-1.26.92-1.26,2.63-1.26,4.15,0,.72,0,1.81-.22,2.11-.21.29-1.24.62-1.92.84-1.45.47-3.1,1-3.59,2.5-.47,1.45.52,2.82,1.4,4.03.46.63,1.09,1.5,1.09,1.91s-.63,1.28-1.09,1.91c-.88,1.21-1.87,2.58-1.4,4.03.49,1.5,2.13,2.03,3.59,2.5.68.22,1.7.55,1.92.84.22.3.22,1.39.22,2.11,0,1.47,0,3.13,1.16,4.06l-7.59,17.63c-.18.43-.11.92.18,1.29.3.36.77.53,1.23.43l4.96-1.04,2.65,4.32c.23.37.63.6,1.07.6h.09c.47-.03.87-.32,1.06-.75l7.75-18.01,7.75,18.01c.18.43.59.72,1.06.75h.09c.43,0,.84-.22,1.07-.6l2.65-4.32,4.96,1.04c.46.1.93-.07,1.23-.43.29-.36.37-.86.18-1.29ZM18.09,28.32c-.6-.19-1.84-.6-1.97-.88-.03-.32.67-1.28,1.04-1.8.77-1.06,1.57-2.16,1.57-3.38s-.8-2.32-1.57-3.38c-.38-.52-1.07-1.48-1.05-1.78.13-.3,1.38-.7,1.98-.89,1.22-.39,2.48-.8,3.17-1.75.7-.96.7-2.3.7-3.59,0-.66,0-1.9.22-2.12.29-.14,1.45.23,2.07.44,1.23.4,2.51.81,3.65.44,1.11-.36,1.87-1.42,2.61-2.45.35-.49,1.17-1.63,1.49-1.63s1.14,1.14,1.49,1.63c.74,1.03,1.51,2.09,2.61,2.45,1.14.37,2.42-.04,3.65-.44.62-.2,1.78-.58,2.06-.44.23.23.23,1.47.23,2.13,0,1.29,0,2.62.7,3.59.69.95,1.95,1.36,3.17,1.75.6.19,1.84.6,1.97.88.03.32-.67,1.28-1.04,1.8-.77,1.06-1.57,2.16-1.57,3.38s.8,2.32,1.57,3.38c.38.52,1.07,1.48,1.05,1.78-.13.29-1.38.7-1.98.89-1.22.39-2.48.8-3.17,1.75-.7.96-.7,2.3-.7,3.59,0,.66,0,1.9-.22,2.12-.29.14-1.45-.23-2.07-.44-1.23-.4-2.51-.81-3.65-.44-1.11.36-1.87,1.42-2.61,2.45-.35.49-1.17,1.63-1.49,1.63s-1.14-1.14-1.49-1.63c-.74-1.03-1.51-2.09-2.61-2.45-.31-.1-.64-.15-.97-.15-.87,0-1.79.3-2.68.59-.62.2-1.78.58-2.06.44-.23-.23-.23-1.46-.23-2.13,0-1.29,0-2.62-.7-3.59-.69-.95-1.95-1.36-3.17-1.75ZM22.92,56.98l-1.85-3.01c-.28-.45-.8-.68-1.32-.57l-3.46.73,6.84-15.89c.64-.1,1.29-.31,1.9-.51.69-.22,1.74-.56,2.11-.44.33.11.95.96,1.36,1.53.44.62.92,1.27,1.48,1.78l-7.05,16.39h0ZM44.28,53.4c-.52-.11-1.05.12-1.32.57l-1.85,3.01-7.05-16.39c.56-.51,1.03-1.16,1.48-1.78.41-.57,1.03-1.43,1.36-1.53.37-.12,1.42.22,2.11.44.61.2,1.26.4,1.9.51l6.84,15.89-3.46-.73h-.01Z\"></path><path d=\"M31.54,29.23h.04c.13.05.27.08.42.08h0c.14,0,.28-.03.42-.08h.04c3.5-1.34,5.98-4.74,6.89-7.51.63-1.9.56-3.6-.19-4.78-.72-1.13-2.07-1.81-3.46-1.72-1.03.06-2.4.54-3.69,2.24-1.29-1.7-2.66-2.18-3.69-2.24-1.36-.08-2.74.59-3.45,1.72-.75,1.18-.82,2.88-.19,4.78.92,2.77,3.4,6.16,6.89,7.51h-.01ZM27.05,18.34c.24-.35.63-.57,1.08-.57,1.21,0,1.95,1.77,2.78,2.77.32.38.81.69,1.3.59.9-.18,1.32-1.36,1.78-2.02.34-.49.76-.96,1.31-1.18s1.27-.14,1.64.33c.26.33.31.78.3,1.2-.04.83-.31,1.64-.67,2.4-.91,1.92-2.38,3.58-4.22,4.64-.12.07-.26.14-.4.13-.13,0-.24-.08-.34-.15-2.2-1.43-3.99-3.58-4.69-6.11-.14-.51-.24-1.06-.1-1.58.04-.17.12-.32.22-.46Z\"></path>",
  "current": "<g><path d=\"M26.59,43.07c-10.49,0-19.02-8.53-19.02-19.02S16.1,5.03,26.59,5.03s19.03,8.53,19.03,19.02c0,.64-.04,1.29-.1,1.92-.07.69-.69,1.18-1.38,1.11-.69-.07-1.18-.69-1.11-1.38.06-.55.09-1.09.09-1.65,0-9.11-7.41-16.52-16.53-16.52S10.07,14.94,10.07,24.05s7.41,16.52,16.52,16.52c1.62,0,3.2-.23,4.69-.68.66-.21,1.36.17,1.56.83.2.66-.17,1.36-.84,1.56-1.73.52-3.55.79-5.41.79Z\"></path><path d=\"M34.41,26.8h-8.57c-.69,0-1.25-.56-1.25-1.25v-8.57c0-.69.56-1.25,1.25-1.25s1.25.56,1.25,1.25v7.32h7.32c.69,0,1.25.56,1.25,1.25s-.56,1.25-1.25,1.25Z\"></path></g><path d=\"M45.59,58.97c-.73,0-1.43-.32-1.9-.89-2.69-3.21-8.94-11.35-8.94-17.71,0-6.93,5.45-10.56,10.84-10.56s10.84,3.63,10.84,10.56c0,6.36-6.25,14.5-8.94,17.71h0c-.47.56-1.17.89-1.9.89ZM46.53,57.28h0,0ZM45.59,32.31c-4.02,0-8.34,2.52-8.34,8.06s6.36,13.72,8.34,16.08c1.98-2.36,8.34-10.41,8.34-16.08,0-2.5-.89-4.59-2.56-6.03-1.51-1.3-3.56-2.02-5.78-2.02Z\"></path><circle cx=\"45.59\" cy=\"41.82\" r=\"2.5\"></circle>",
  "like-v2": "<path d=\"M58.18,18.97s-.04-.2-.04-.2c-1.01-4.62-4.47-8.29-9.03-9.57-.55-.15-1.11-.27-1.67-.35l-.76-.12c-9.75-1.37-19.63-1.37-29.36,0l-.76.1c-2.62.37-5.03,1.52-6.97,3.34-1.92,1.83-3.24,4.16-3.76,6.76-.45,2.17-.72,4.41-.84,6.64-.04.68-.04,1.36-.04,2.04,0,2.89.29,5.8.88,8.66,1.08,5.28,5.41,9.34,10.75,10.1l.74.09c4.8.68,9.65,1.03,14.51,1.03v6.35c0,1.34,1.08,2.43,2.42,2.43l.04.02c3.79,0,6.8-1.15,8.89-3.42,1.89-2.02,2.59-4.5,2.84-6.29.21-.04.43-.06.66-.1l.76-.09c2.62-.37,5.03-1.52,6.97-3.34,1.88-1.77,3.16-4.04,3.73-6.57l.04-.19c1.16-5.77,1.16-11.59,0-17.32ZM55.72,35.79l-.03.2c-.45,1.99-1.49,3.82-2.99,5.23-1.56,1.46-3.5,2.39-5.61,2.69,0,0-1.36.19-1.52.21-.19.03-.54.06-.89.08-.56.04-1,.48-1.05,1.04-.03.38-.06.78-.09.99-.16,1.4-.73,3.38-2.18,4.94-1.51,1.63-3.69,2.51-6.5,2.61h-.02s-.51-.01-.51-.01v-7.05c0-.96-.78-1.73-1.73-1.73h-.77c-4.69,0-9.45-.34-14.16-1l-.76-.1c-4.28-.61-7.76-3.87-8.64-8.12-.54-2.68-.82-5.42-.82-8.16,0-.63,0-1.27.04-1.9.11-2.17.37-4.28.78-6.28.42-2.07,1.47-3.95,3.04-5.45,1.55-1.45,3.49-2.37,5.6-2.67l.73-.1c4.76-.67,9.58-1.01,14.35-1.01s9.6.34,14.34,1.01l.73.11c.49.07.94.16,1.36.29,3.66,1.02,6.44,3.96,7.26,7.66l.05.2c1.09,5.39,1.09,10.89-.01,16.32Z\"></path><path d=\"M41.85,20.17c-1.01-1.59-2.89-2.48-4.76-2.32-2.18.19-3.84,1.88-5.09,3.53-1.17-1.54-2.68-3.06-4.64-3.47-1.97-.42-4.15.56-5.22,2.26-1.04,1.63-1.14,3.97-.27,6.59,1.27,3.82,4.69,8.51,9.49,10.36h.05c.19.07.38.11.58.11s.39-.04.57-.11h.06c4.83-1.85,8.25-6.54,9.5-10.36.87-2.62.77-4.96-.27-6.59ZM38.89,26.91c-1.37,2.9-3.59,5.4-6.36,7.01-.17.09-.34.19-.53.19s-.36-.1-.53-.19c-2.77-1.61-4.99-4.11-6.36-7.01-.53-1.14-.95-2.36-1-3.61-.03-.64.05-1.32.44-1.81.56-.71,1.64-.83,2.47-.5.84.34,1.47,1.04,1.99,1.78.69,1,1.92,3.07,2.99,3.07,1.31,0,2.3-2.07,2.99-3.07.52-.74,1.15-1.44,1.99-1.78.83-.33,1.91-.21,2.47.5.39.49.47,1.17.44,1.81-.05,1.25-.47,2.47-1,3.61Z\"></path>",
  "like": "<path d=\"M58.79,18.97s-.04-.2-.04-.2c-1.01-4.62-4.47-8.29-9.03-9.57-.55-.15-1.11-.27-1.67-.35l-.76-.12c-9.75-1.37-19.63-1.37-29.36,0l-.76.1c-2.62.37-5.03,1.52-6.97,3.34-1.92,1.83-3.24,4.16-3.76,6.76-.45,2.17-.72,4.41-.84,6.64-.04.68-.04,1.36-.04,2.04,0,2.89.29,5.8.88,8.66,1.08,5.28,5.41,9.34,10.75,10.1l.74.09c4.8.68,9.65,1.03,14.51,1.03v6.35c0,1.34,1.08,2.43,2.42,2.43l.04.02c3.79,0,6.8-1.15,8.89-3.42,1.89-2.02,2.59-4.5,2.84-6.29.21-.04.43-.06.66-.1l.76-.09c2.62-.37,5.03-1.52,6.97-3.34,1.88-1.77,3.16-4.04,3.73-6.57l.04-.19c1.16-5.77,1.16-11.59,0-17.32ZM56.33,35.79l-.03.2c-.45,1.99-1.49,3.82-2.99,5.23-1.56,1.46-3.5,2.39-5.61,2.69,0,0-1.36.19-1.52.21-.19.03-.54.06-.89.08-.56.04-1,.48-1.05,1.04-.03.38-.06.78-.09.99-.16,1.4-.73,3.38-2.18,4.94-1.51,1.63-3.69,2.51-6.5,2.61h-.02s-.51-.01-.51-.01v-7.05c0-.96-.78-1.73-1.73-1.73h-.77c-4.69,0-9.45-.34-14.16-1l-.76-.1c-4.28-.61-7.76-3.87-8.64-8.12-.54-2.68-.82-5.42-.82-8.16,0-.63,0-1.27.04-1.9.11-2.17.37-4.28.78-6.28.42-2.07,1.47-3.95,3.04-5.45,1.55-1.45,3.49-2.37,5.6-2.67l.73-.1c4.76-.67,9.58-1.01,14.35-1.01s9.6.34,14.34,1.01l.73.11c.49.07.94.16,1.36.29,3.66,1.02,6.44,3.96,7.26,7.66l.05.2c1.09,5.39,1.09,10.89-.01,16.32Z\"></path><path d=\"M32.14,34.48h.04c.13.05.27.08.42.08h0c.14,0,.28-.03.42-.08h.04c3.5-1.34,5.98-4.74,6.89-7.51.63-1.9.56-3.6-.19-4.78-.72-1.13-2.07-1.81-3.46-1.72-1.03.06-2.4.54-3.69,2.24-1.29-1.7-2.66-2.18-3.69-2.24-1.36-.08-2.74.59-3.45,1.72-.75,1.18-.82,2.88-.19,4.78.92,2.77,3.4,6.16,6.89,7.51h-.01ZM27.65,23.59c.24-.35.63-.57,1.08-.57,1.21,0,1.95,1.77,2.78,2.77.32.38.81.69,1.3.59.9-.18,1.32-1.36,1.78-2.02.34-.49.76-.96,1.31-1.18s1.27-.14,1.64.33c.26.33.31.78.3,1.2-.04.83-.31,1.64-.67,2.4-.91,1.92-2.38,3.58-4.22,4.64-.12.07-.26.14-.4.13-.13,0-.24-.08-.34-.15-2.2-1.43-3.99-3.58-4.69-6.11-.14-.51-.24-1.06-.1-1.58.04-.17.12-.32.22-.46Z\"></path>",
  "mailbox": "<path d=\"M33.15,29.59c-.01-.07-.03-.14-.05-.2-.02-.07-.05-.14-.09-.2-.03-.06-.07-.12-.12-.18-.05-.07-.11-.12-.17-.17,0-.02-.03-.03-.04-.04-.05-.04-.11-.08-.17-.1-.18-.1-.38-.15-.59-.15H14.2c-.2,0-.41.05-.59.15-.06.03-.12.07-.17.11-.06.04-.1.08-.15.14-.04.04-.07.08-.1.12-.03.02-.04.05-.05.08-.03.04-.05.08-.07.12-.02.02-.03.05-.03.07-.02.06-.04.11-.05.17-.03.09-.04.19-.04.29v11.32c0,.69.56,1.25,1.25,1.25h17.73c.69,0,1.25-.56,1.25-1.25v-11.32c0-.07-.01-.14-.03-.21ZM28.41,31.05l-5.23,4.28-5.39-4.28h10.62ZM30.68,39.87h-15.23v-7.48l6.96,5.53c.23.18.51.27.78.27s.56-.1.79-.29l6.7-5.47v7.44Z\"></path><path d=\"M13.29,28.95s-.07.08-.1.12c.01-.02.02-.03.03-.05.02-.03.05-.05.07-.07Z\"></path><path d=\"M54.51,13.3l2.38-3.33c.27-.38.3-.88.09-1.29-.22-.42-.65-.68-1.11-.68h-12.06c-.69,0-1.25.56-1.25,1.25v11.54h-14.74c-.3,0-.6.01-.9.05-3.54.29-6.68,2.37-8.34,5.56-.31.61-.08,1.37.54,1.68.61.32,1.36.09,1.68-.53,1.37-2.63,4.06-4.26,7.02-4.26,4.27,0,7.75,3.48,7.75,7.75v12.8h-15.77c-.69,0-1.25.55-1.25,1.25s.56,1.25,1.25,1.25h15.77v9.85c0,.7.56,1.25,1.25,1.25h5.16c.69,0,1.25-.55,1.25-1.25v-9.85h11.41c.69,0,1.25-.56,1.25-1.25v-14.05c0-5.65-4.6-10.25-10.25-10.25h-.58v-2.21h10.81c.47.01.89-.25,1.11-.67.21-.42.18-.92-.1-1.3l-2.37-3.31ZM40.73,54.94h-2.66v-8.6h2.66v8.6ZM45.64,23.29c4.27,0,7.75,3.48,7.75,7.75v12.8h-15.32v-12.8c0-3.1-1.38-5.88-3.57-7.75h8.06v4.36c0,.69.56,1.25,1.25,1.25s1.25-.56,1.25-1.25v-4.36h.58ZM51.96,14.03l1.47,2.06h-8.37v-5.59h8.38l-1.48,2.08c-.31.44-.31,1.02,0,1.45Z\"></path><path d=\"M27.82,20.79c-.3,0-.6.01-.9.05.1-.04.2-.05.31-.05h.59Z\"></path><g><path d=\"M7.95,13.92c-.62.09-1.07.61-1.07,1.24s.46,1.15,1.07,1.24c1.2.17,1.34.31,1.51,1.51.09.62.61,1.07,1.24,1.07s1.15-.46,1.24-1.07c.17-1.2.31-1.34,1.51-1.51.62-.09,1.07-.61,1.07-1.24s-.46-1.15-1.07-1.24c-1.2-.17-1.34-.31-1.51-1.51-.09-.62-.61-1.07-1.24-1.07s-1.15.46-1.24,1.07c-.17,1.2-.31,1.34-1.51,1.51Z\"></path><path d=\"M13.39,11.62c1.2.17,1.34.31,1.51,1.51.09.62.61,1.07,1.24,1.07s1.15-.46,1.24-1.07c.17-1.2.31-1.34,1.51-1.51.62-.09,1.07-.61,1.07-1.24s-.46-1.15-1.07-1.24c-1.2-.17-1.34-.31-1.51-1.51-.09-.62-.61-1.07-1.24-1.07s-1.15.46-1.24,1.07c-.17,1.2-.31,1.34-1.51,1.51-.62.09-1.07.61-1.07,1.24s.46,1.15,1.07,1.24Z\"></path><path d=\"M18.87,18.69c-1.2-.17-1.34-.31-1.51-1.51-.09-.62-.61-1.07-1.24-1.07s-1.15.46-1.24,1.07c-.17,1.2-.31,1.34-1.51,1.51-.62.09-1.07.61-1.07,1.24s.46,1.15,1.07,1.24c1.2.17,1.34.31,1.51,1.51.09.62.61,1.07,1.24,1.07s1.15-.46,1.24-1.07c.17-1.2.31-1.34,1.51-1.51.62-.09,1.07-.61,1.07-1.24s-.46-1.15-1.07-1.24Z\"></path></g>",
  "org-chart": "<path d=\"M53,45.19v-5.98c0-2.97-2.42-5.38-5.39-5.38h-12.08c.14.39.22.81.22,1.25s-.08.86-.22,1.25h12.08c1.59,0,2.89,1.29,2.89,2.88v5.98c-2.82.58-4.95,3.08-4.95,6.07,0,3.41,2.78,6.19,6.2,6.19s6.2-2.78,6.2-6.19c0-2.99-2.13-5.49-4.95-6.07ZM51.75,54.95c-2.04,0-3.7-1.66-3.7-3.69s1.66-3.7,3.7-3.7,3.7,1.66,3.7,3.7-1.66,3.69-3.7,3.69ZM30.75,25.01v6.54c.39-.14.81-.22,1.25-.22s.86.08,1.25.22v-6.54c4.53-.61,8.03-4.49,8.03-9.19,0-5.11-4.16-9.27-9.28-9.27s-9.28,4.16-9.28,9.27c0,4.7,3.5,8.58,8.03,9.19ZM32,9.05c3.74,0,6.78,3.04,6.78,6.77s-3.04,6.78-6.78,6.78-6.78-3.04-6.78-6.78,3.04-6.77,6.78-6.77ZM33.25,45.19v-6.58c-.39.14-.81.22-1.25.22s-.86-.08-1.25-.22v6.58c-2.82.58-4.95,3.08-4.95,6.07,0,3.41,2.78,6.19,6.2,6.19s6.2-2.78,6.2-6.19c0-2.99-2.13-5.49-4.95-6.07ZM32,54.95c-2.04,0-3.7-1.66-3.7-3.69s1.66-3.7,3.7-3.7,3.7,1.66,3.7,3.7-1.66,3.69-3.7,3.69ZM13.5,45.19v-5.98c0-1.59,1.3-2.88,2.89-2.88h12.08c-.14-.39-.22-.81-.22-1.25s.08-.86.22-1.25h-12.08c-2.97,0-5.39,2.41-5.39,5.38v5.98c-2.81.58-4.95,3.08-4.95,6.07,0,3.41,2.79,6.19,6.2,6.19s6.2-2.78,6.2-6.19c0-2.99-2.13-5.49-4.95-6.07ZM12.25,54.95c-2.04,0-3.7-1.66-3.7-3.69s1.66-3.7,3.7-3.7,3.7,1.66,3.7,3.7-1.66,3.69-3.7,3.69Z\"></path><circle cx=\"32\" cy=\"35.08\" r=\"2.5\"></circle>",
  "better-for-customer": "<path d=\"M53.02,30.99c-1.01.06-2.36.53-3.63,2.2-1.27-1.67-2.62-2.14-3.63-2.2-1.35-.08-2.69.58-3.39,1.69-.74,1.16-.81,2.83-.19,4.7.9,2.72,3.34,6.06,6.77,7.38h.04c.13.05.27.08.41.08h0c.14,0,.28-.03.41-.08h.04c3.44-1.32,5.88-4.66,6.77-7.38.62-1.87.55-3.54-.19-4.7-.71-1.11-2.03-1.77-3.4-1.69h-.01ZM54.23,36.6c-.65,1.97-2.42,4.48-4.85,5.62-2.42-1.14-4.2-3.65-4.85-5.62-.37-1.11-.39-2.08-.07-2.58.18-.28.62-.57,1.14-.54.9.06,1.87,1.02,2.66,2.66.02.05.07.08.1.13.05.07.09.14.15.2.06.07.14.11.21.16.04.03.07.07.12.09.02,0,.04,0,.06.02.09.04.18.05.27.07.07,0,.14.03.21.03.08,0,.15-.02.23-.03.09-.02.17-.03.25-.06.02,0,.04,0,.06-.02.05-.02.08-.07.13-.1.07-.05.14-.09.21-.16.06-.06.11-.13.16-.21.03-.05.07-.08.1-.13.78-1.63,1.75-2.6,2.66-2.66.53-.03.96.26,1.14.54.32.5.29,1.46-.07,2.58h-.02Z\"></path><path d=\"M33.65,36.45h.04c.13.05.27.08.41.08h0c.14,0,.28-.03.41-.08h.04c3.44-1.32,5.88-4.66,6.77-7.38.62-1.87.55-3.54-.19-4.7-.71-1.11-2.04-1.78-3.4-1.69-1.01.06-2.36.53-3.63,2.2-1.27-1.67-2.62-2.14-3.63-2.2-1.34-.08-2.69.58-3.39,1.69-.74,1.16-.81,2.83-.19,4.7.9,2.72,3.34,6.06,6.77,7.38h0ZM29.18,25.71c.18-.28.62-.57,1.14-.54.9.06,1.87,1.02,2.66,2.66.02.05.07.08.1.13.05.07.09.14.16.21.06.06.13.11.21.16.04.03.08.07.13.1.02,0,.04,0,.06.02.08.04.17.05.26.07.07.01.14.03.21.03.08,0,.16-.02.23-.03.08-.02.16-.03.24-.06.02,0,.05,0,.07-.02.05-.02.09-.07.13-.1.07-.05.14-.09.2-.15s.11-.13.16-.21c.03-.05.07-.08.1-.13.78-1.63,1.75-2.6,2.66-2.66.51-.03.96.26,1.14.54.32.5.29,1.46-.07,2.58-.65,1.97-2.42,4.48-4.85,5.62-2.42-1.14-4.2-3.65-4.85-5.62-.37-1.11-.39-2.08-.07-2.58l-.02-.02Z\"></path><path d=\"M42.36,16.51c-.74,1.16-.81,2.83-.19,4.7.9,2.72,3.34,6.06,6.77,7.38h.04c.13.05.27.08.41.08h0c.14,0,.28-.03.41-.08h.04c3.43-1.32,5.88-4.66,6.77-7.38.62-1.87.55-3.54-.19-4.7-.71-1.11-2.04-1.78-3.39-1.69-1.01.06-2.36.53-3.63,2.2-1.27-1.67-2.62-2.14-3.63-2.2-1.35-.09-2.69.58-3.39,1.69h-.02ZM44.47,17.86c.18-.28.61-.57,1.14-.54.9.06,1.87,1.02,2.66,2.66.02.05.07.08.1.13.05.07.09.14.15.21.06.06.14.11.21.16.04.03.08.07.12.09.02,0,.04,0,.06.02.09.04.17.05.26.07.07.01.14.03.21.03.08,0,.15-.02.23-.03.09-.02.17-.03.25-.06.02,0,.04,0,.06-.02.05-.02.08-.07.13-.1.07-.05.14-.09.21-.16.06-.06.11-.13.16-.21.03-.05.07-.08.1-.13.78-1.64,1.75-2.6,2.66-2.66.53-.04.96.26,1.14.54.32.5.29,1.46-.07,2.58-.65,1.97-2.42,4.48-4.85,5.62-2.42-1.14-4.2-3.65-4.85-5.62-.37-1.11-.39-2.08-.07-2.58h0Z\"></path><path d=\"M45.33,45.62c-.7-.08-1.3.42-1.38,1.11-.33,3.01-.78,6.14-2.37,8.36-1.06,1.48-2.77,2.41-5.24,2.84-2.84.5-5.86.5-8.77.5h-1.18c-2.92,0-5.93,0-8.77-.5-2.47-.44-4.18-1.37-5.24-2.84-1.59-2.22-2.04-5.34-2.37-8.35-.52-4.78-.56-9.7-.56-14.74s.04-9.96.56-14.74c.33-3,.78-6.12,2.37-8.36,1.05-1.47,2.76-2.4,5.24-2.84,2.83-.5,5.85-.5,8.75-.5h1.22c2.91,0,5.92,0,8.75.5,2.47.44,4.19,1.37,5.24,2.84.54.76.98,1.65,1.33,2.72.22.66.92,1.01,1.58.8.66-.22,1.01-.92.8-1.58-.43-1.32-.98-2.43-1.67-3.39-1.45-2.03-3.69-3.29-6.84-3.85-3.05-.54-6.18-.54-9.19-.54h-1.2c-3.02,0-6.14,0-9.19.54-3.15.56-5.39,1.82-6.84,3.85-1.95,2.73-2.46,6.21-2.82,9.54-.53,4.9-.57,9.9-.57,15.01s.04,10.11.57,15.01c.36,3.34.88,6.83,2.82,9.54,1.46,2.03,3.69,3.29,6.83,3.85,3.05.54,6.17.54,9.21.54h1.78c2.84,0,5.76-.03,8.61-.54,3.14-.56,5.38-1.82,6.83-3.85,1.94-2.71,2.46-6.2,2.82-9.54.07-.69-.42-1.3-1.11-1.38h0Z\"></path><path d=\"M30.92,12.61c0-.69-.56-1.25-1.25-1.25h-5.38c-.69,0-1.25.56-1.25,1.25s.56,1.25,1.25,1.25h5.38c.69,0,1.25-.56,1.25-1.25Z\"></path><circle cx=\"26.98\" cy=\"51.1\" r=\"2.5\"></circle>"
};
function Icon({
  name,
  size = 24,
  strokeWidth = 2,
  className = "",
  style,
  ...rest
}) {
  const brandInner = BRAND[name];
  const base = {
    display: "block",
    flex: "none",
    ...style
  };
  if (brandInner) {
    return /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 64 64",
      fill: "currentColor",
      className: className,
      style: base,
      "aria-hidden": "true",
      dangerouslySetInnerHTML: {
        __html: brandInner
      }
    }, rest));
  }
  const uiInner = UI[name];
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    style: base,
    "aria-hidden": "true",
    dangerouslySetInnerHTML: {
      __html: uiInner || ""
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function useOnceStyle(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
const CSS = `
.lw-tabs{ font-family:var(--lw-font-sans); }
.lw-tabs__list{ display:inline-flex; gap:4px; background:var(--lw-gray-100); padding:4px; border-radius:var(--lw-radius-pill); }
.lw-tabs--line .lw-tabs__list{ background:transparent; padding:0; gap:24px; border-bottom:1.5px solid var(--border); border-radius:0; }
.lw-tab{
  appearance:none; border:none; cursor:pointer; font-family:inherit; font-weight:var(--lw-fw-semibold);
  font-size:var(--lw-text-sm); color:var(--lw-gray-600); background:transparent;
  padding:8px 18px; border-radius:var(--lw-radius-pill); transition:all var(--lw-dur) var(--lw-ease); white-space:nowrap;
}
.lw-tab:hover{ color:var(--lw-gray-900); }
.lw-tab[aria-selected="true"]{ background:var(--lw-white); color:var(--lw-blue-700); box-shadow:var(--lw-shadow-sm); }
.lw-tabs--line .lw-tab{ border-radius:0; padding:10px 2px; position:relative; }
.lw-tabs--line .lw-tab[aria-selected="true"]{ background:transparent; box-shadow:none; color:var(--lw-blue-700); }
.lw-tabs--line .lw-tab[aria-selected="true"]::after{ content:""; position:absolute; left:0; right:0; bottom:-1.5px; height:2.5px; background:var(--lw-pink-400); border-radius:2px; }
.lw-tab:focus-visible{ outline:none; box-shadow:var(--lw-focus-ring); }
`;
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  variant = "pill",
  className = ""
}) {
  useOnceStyle("lw-tabs-css", CSS);
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].value));
  const active = isControlled ? value : internal;
  const select = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: ["lw-tabs", `lw-tabs--${variant}`, className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("div", {
    className: "lw-tabs__list",
    role: "tablist"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.value,
    role: "tab",
    "aria-selected": active === t.value,
    className: "lw-tab",
    onClick: () => select(t.value),
    type: "button"
  }, t.label))));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/moments-app/app.jsx
try { (() => {
const {
  Icon
} = window.LikewizeDesignSystem_c61cfa;
const {
  LoginScreen,
  HomeScreen,
  DevicesScreen,
  ClaimsScreen,
  AccountScreen,
  ClaimFlow
} = window;
function TabBar({
  tab,
  setTab
}) {
  const items = [{
    id: "home",
    icon: "home-tech",
    label: "Home"
  }, {
    id: "devices",
    icon: "mobile-phone",
    label: "Devices"
  }, {
    id: "claims",
    icon: "file",
    label: "Claims"
  }, {
    id: "account",
    icon: "id-badge",
    label: "Account"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      display: "flex",
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(12px)",
      borderTop: "1px solid var(--border)",
      padding: "8px 8px 22px",
      zIndex: 10
    }
  }, items.map(it => {
    const active = tab === it.id;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => setTab(it.id),
      style: {
        flex: 1,
        border: "none",
        background: "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        padding: "6px 0",
        cursor: "pointer",
        color: active ? "var(--lw-blue-600)" : "var(--lw-gray-400)",
        fontFamily: "var(--lw-font-sans)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: 23,
      strokeWidth: active ? 2.4 : 2
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: active ? 800 : 600
      }
    }, it.label));
  }));
}
function App() {
  const [authed, setAuthed] = React.useState(false);
  const [tab, setTab] = React.useState("home");
  const [claim, setClaim] = React.useState(false);
  if (!authed) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        overflowY: "auto"
      }
    }, /*#__PURE__*/React.createElement(LoginScreen, {
      onLogin: () => setAuthed(true)
    }));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      overflowY: "auto",
      background: "var(--lw-gray-50)"
    }
  }, tab === "home" && /*#__PURE__*/React.createElement(HomeScreen, {
    onStartClaim: () => setClaim(true),
    onGoDevices: () => setTab("devices"),
    onGoTradein: () => setTab("claims")
  }), tab === "devices" && /*#__PURE__*/React.createElement(DevicesScreen, null), tab === "claims" && /*#__PURE__*/React.createElement(ClaimsScreen, {
    onStartClaim: () => setClaim(true)
  }), tab === "account" && /*#__PURE__*/React.createElement(AccountScreen, null)), /*#__PURE__*/React.createElement(TabBar, {
    tab: tab,
    setTab: setTab
  }), claim ? /*#__PURE__*/React.createElement(ClaimFlow, {
    onClose: () => setClaim(false)
  }) : null);
}
ReactDOM.createRoot(document.getElementById("app")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/moments-app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/moments-app/screens.jsx
try { (() => {
/* Likewize Moments — customer app screens.
   Composes the design-system primitives from the compiled bundle.
   NOTE: No source product UI was provided, so this is a brand-faithful
   illustrative application of the Likewize system, not a 1:1 recreation. */
const {
  Button,
  Card,
  Badge,
  Avatar,
  Icon,
  Input,
  Tabs,
  Alert,
  Switch,
  Checkbox
} = window.LikewizeDesignSystem_c61cfa;

/* ---------- shared bits ---------- */
function Wordmark({
  color = "var(--lw-blue-600)",
  size = 20
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      letterSpacing: "-0.03em",
      fontSize: size,
      color
    }
  }, "likewize.");
}
function Header({
  title,
  onBack,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 18px",
      minHeight: 56,
      borderBottom: "1px solid var(--border)",
      background: "#fff",
      position: "sticky",
      top: 0,
      zIndex: 5
    }
  }, onBack ? /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      border: "none",
      background: "transparent",
      padding: 4,
      cursor: "pointer",
      display: "flex",
      color: "var(--lw-gray-800)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 24
  })) : null, title ? /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 18,
      fontWeight: 800,
      letterSpacing: "-0.01em",
      color: "var(--lw-gray-900)"
    }
  }, title) : /*#__PURE__*/React.createElement(Wordmark, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, right));
}
function SectionLabel({
  children,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      margin: "4px 0 12px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--lw-gray-500)"
    }
  }, children), action);
}
function DeviceThumb({
  tone = "var(--surface-frost)",
  size = 48
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 12,
      background: tone,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none",
      color: "var(--lw-blue-700)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mobile-phone",
    size: size * 0.55
  }));
}

/* ---------- Login ---------- */
function LoginScreen({
  onLogin
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      display: "flex",
      flexDirection: "column",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "32px 26px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      borderRadius: 18,
      background: "var(--lw-pink-300)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 26,
      color: "#000"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "protect",
    size: 34
  })), /*#__PURE__*/React.createElement(Wordmark, {
    size: 30
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 34,
      fontWeight: 900,
      letterSpacing: "-0.03em",
      lineHeight: 1.05,
      margin: "18px 0 10px",
      color: "var(--lw-gray-900)"
    }
  }, "Every tech problem,", /*#__PURE__*/React.createElement("br", null), "made painless."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: "var(--lw-gray-600)",
      margin: "0 0 30px",
      lineHeight: 1.5
    }
  }, "Protect, repair and trade in your devices \u2014 all in one place."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    defaultValue: "jordan@hey.com",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    defaultValue: "password",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 18
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: onLogin,
    rightIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Sign in")), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      fontSize: 14,
      color: "var(--lw-gray-500)",
      marginTop: 18
    }
  }, "New here? ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--lw-blue-600)",
      fontWeight: 700
    }
  }, "Create an account"))));
}

/* ---------- Home ---------- */
function QuickAction({
  icon,
  label,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      border: "1px solid var(--border)",
      background: "#fff",
      borderRadius: 16,
      padding: "16px 10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 9,
      cursor: "pointer",
      fontFamily: "var(--lw-font-sans)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 12,
      background: "var(--lw-blue-50)",
      color: "var(--lw-blue-600)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 21
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      color: "var(--lw-gray-800)"
    }
  }, label));
}
function HomeScreen({
  onStartClaim,
  onGoDevices,
  onGoTradein
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
    right: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      style: {
        border: "none",
        background: "transparent",
        position: "relative",
        cursor: "pointer",
        color: "var(--lw-gray-700)",
        display: "flex"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bell",
      size: 22
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 0,
        right: 0,
        width: 8,
        height: 8,
        background: "var(--lw-pink-500)",
        borderRadius: "50%"
      }
    })), /*#__PURE__*/React.createElement(Avatar, {
      name: "Jordan Lee",
      size: "sm"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 18px 110px",
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      color: "var(--lw-gray-500)"
    }
  }, "Good morning,"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "2px 0 0",
      fontSize: 26,
      fontWeight: 900,
      letterSpacing: "-0.02em",
      color: "var(--lw-gray-900)"
    }
  }, "Jordan \uD83D\uDC4B")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--lw-pink-300)",
      borderRadius: 22,
      padding: 20,
      color: "#000",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7,
      fontSize: 13,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "protect",
    size: 20
  }), " Coverage active"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "12px 0 0",
      fontSize: 28,
      fontWeight: 900,
      letterSpacing: "-0.02em"
    }
  }, "2 devices protected"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: 14,
      opacity: 0.7
    }
  }, "Plan renews 14 May 2026"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onGoDevices
  }, "Manage plan"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, "Quick actions"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(QuickAction, {
    icon: "file",
    label: "Start a claim",
    onClick: onStartClaim
  }), /*#__PURE__*/React.createElement(QuickAction, {
    icon: "trade-in",
    label: "Trade in",
    onClick: onGoTradein
  }), /*#__PURE__*/React.createElement(QuickAction, {
    icon: "headphones",
    label: "Get support",
    onClick: () => {}
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    action: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: "var(--lw-blue-600)"
      }
    }, "See all")
  }, "Recent activity"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    variant: "success",
    title: "Screen repair complete"
  }, "Your iPhone 15 Pro was repaired on 2 Jun."), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 13
    }
  }, /*#__PURE__*/React.createElement(DeviceThumb, {
    tone: "var(--surface-brand-soft)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 700,
      fontSize: 15,
      color: "var(--lw-gray-900)"
    }
  }, "Trade-in offer ready"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "2px 0 0",
      fontSize: 13.5,
      color: "var(--lw-gray-600)"
    }
  }, "Galaxy S22 \xB7 up to \xA3310")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 20
  })))))));
}

/* ---------- Devices ---------- */
function DeviceCard({
  name,
  meta,
  status,
  statusVariant
}) {
  return /*#__PURE__*/React.createElement(Card, {
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(DeviceThumb, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 700,
      fontSize: 16,
      color: "var(--lw-gray-900)"
    }
  }, name)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "3px 0 8px",
      fontSize: 13.5,
      color: "var(--lw-gray-600)"
    }
  }, meta), /*#__PURE__*/React.createElement(Badge, {
    variant: statusVariant,
    dot: true
  }, status)), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 20
  })));
}
function DevicesScreen() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
    title: "My devices",
    right: /*#__PURE__*/React.createElement("button", {
      style: {
        border: "none",
        background: "var(--lw-blue-600)",
        color: "#fff",
        width: 34,
        height: 34,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 20
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 18px 110px",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(DeviceCard, {
    name: "iPhone 15 Pro",
    meta: "Natural Titanium \xB7 256GB",
    status: "Protected",
    statusVariant: "success"
  }), /*#__PURE__*/React.createElement(DeviceCard, {
    name: "iPad Air",
    meta: "Space Grey \xB7 64GB",
    status: "Protected",
    statusVariant: "success"
  }), /*#__PURE__*/React.createElement(DeviceCard, {
    name: "Apple Watch S9",
    meta: "Add to plan",
    status: "Not covered",
    statusVariant: "warning"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Add protection"), /*#__PURE__*/React.createElement(Card, {
    variant: "brand"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: "#fff",
      color: "var(--lw-pink-600)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 700,
      fontSize: 15,
      color: "var(--lw-gray-900)"
    }
  }, "Cover a new device"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "2px 0 0",
      fontSize: 13,
      color: "var(--lw-gray-600)"
    }
  }, "From \xA36.99/mo \xB7 cancel anytime")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Add"))))));
}

/* ---------- Claims ---------- */
function ClaimsScreen({
  onStartClaim
}) {
  const [tab, setTab] = React.useState("open");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
    title: "Claims"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px 110px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    value: tab,
    onChange: setTab,
    tabs: [{
      label: "Open",
      value: "open"
    }, {
      label: "Closed",
      value: "closed"
    }]
  })), tab === "open" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      color: "var(--lw-gray-500)",
      fontWeight: 700
    }
  }, "#LW-48213"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "3px 0 0",
      fontSize: 16,
      fontWeight: 700,
      color: "var(--lw-gray-900)"
    }
  }, "Cracked screen"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "2px 0 0",
      fontSize: 13.5,
      color: "var(--lw-gray-600)"
    }
  }, "iPhone 15 Pro")), /*#__PURE__*/React.createElement(Badge, {
    variant: "blue",
    dot: true
  }, "In repair")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 13,
      color: "var(--lw-gray-600)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16
  }), " Arriving back by Thu 5 Jun"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "flat"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      fontWeight: 700,
      color: "var(--lw-gray-900)"
    }
  }, "Battery replacement"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "2px 0 0",
      fontSize: 13.5,
      color: "var(--lw-gray-600)"
    }
  }, "iPad Air \xB7 resolved 12 Apr")), /*#__PURE__*/React.createElement(Badge, {
    variant: "success",
    dot: true
  }, "Closed")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "highlight",
    size: "lg",
    fullWidth: true,
    onClick: onStartClaim,
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 18
    })
  }, "Start a new claim"))));
}

/* ---------- Account ---------- */
function Row({
  icon,
  label,
  value,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 13,
      padding: "14px 0",
      borderBottom: last ? "none" : "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--lw-gray-500)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: "var(--lw-gray-800)",
      fontWeight: 600
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontSize: 14,
      color: "var(--lw-gray-500)",
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, value, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18
  })));
}
function AccountScreen() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
    title: "Account"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 18px 110px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Jordan Lee",
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 20,
      fontWeight: 800,
      color: "var(--lw-gray-900)"
    }
  }, "Jordan Lee"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "2px 0 0",
      fontSize: 14,
      color: "var(--lw-gray-500)"
    }
  }, "jordan@hey.com"))), /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 18px"
    }
  }, /*#__PURE__*/React.createElement(Row, {
    icon: "cash-pounds",
    label: "Payment method",
    value: "\u2022\u2022\u2022\u2022 4921"
  }), /*#__PURE__*/React.createElement(Row, {
    icon: "file",
    label: "Plan & billing",
    value: "Premium"
  }), /*#__PURE__*/React.createElement(Row, {
    icon: "map-pin",
    label: "Address",
    value: "London"
  }), /*#__PURE__*/React.createElement(Row, {
    icon: "headphones",
    label: "Help & support",
    value: "",
    last: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      padding: "0 4px",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Preferences"), /*#__PURE__*/React.createElement(Switch, {
    label: "Push notifications",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Auto-renew coverage",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Marketing emails"
  }))));
}

/* ---------- Claim flow (overlay) ---------- */
function ClaimFlow({
  onClose
}) {
  const [step, setStep] = React.useState(0);
  const [device, setDevice] = React.useState("iPhone 15 Pro");
  const [issue, setIssue] = React.useState("Cracked screen");
  const issues = ["Cracked screen", "Water damage", "Battery", "Won't turn on", "Lost or stolen"];
  const steps = ["Device", "What happened", "Confirm", "Done"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "#fff",
      zIndex: 30,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(Header, {
    title: step < 3 ? "Start a claim" : "",
    onBack: step === 0 ? onClose : step < 3 ? () => setStep(step - 1) : undefined,
    right: step < 3 ? /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      style: {
        border: "none",
        background: "transparent",
        color: "var(--lw-gray-500)",
        cursor: "pointer",
        display: "flex"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 22
    })) : null
  }), step < 3 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      padding: "14px 18px 4px"
    }
  }, steps.slice(0, 3).map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      flex: 1,
      height: 4,
      borderRadius: 2,
      background: i <= step ? "var(--lw-blue-600)" : "var(--lw-gray-200)"
    }
  }))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "16px 18px 18px"
    }
  }, step === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      margin: "6px 0 16px",
      color: "var(--lw-gray-900)"
    }
  }, "Which device?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, ["iPhone 15 Pro", "iPad Air"].map(d => /*#__PURE__*/React.createElement("button", {
    key: d,
    onClick: () => setDevice(d),
    style: {
      textAlign: "left",
      border: `2px solid ${device === d ? "var(--lw-blue-600)" : "var(--border)"}`,
      background: device === d ? "var(--lw-blue-50)" : "#fff",
      borderRadius: 16,
      padding: 14,
      display: "flex",
      alignItems: "center",
      gap: 13,
      cursor: "pointer",
      fontFamily: "var(--lw-font-sans)"
    }
  }, /*#__PURE__*/React.createElement(DeviceThumb, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 700,
      fontSize: 15,
      color: "var(--lw-gray-900)"
    }
  }, d), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "2px 0 0",
      fontSize: 13,
      color: "var(--lw-gray-600)"
    }
  }, "Protected")), device === d ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--lw-blue-600)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 22
  })) : null)))), step === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      margin: "6px 0 16px",
      color: "var(--lw-gray-900)"
    }
  }, "What happened?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, issues.map(it => /*#__PURE__*/React.createElement("button", {
    key: it,
    onClick: () => setIssue(it),
    style: {
      textAlign: "left",
      border: `2px solid ${issue === it ? "var(--lw-blue-600)" : "var(--border)"}`,
      background: issue === it ? "var(--lw-blue-50)" : "#fff",
      borderRadius: 12,
      padding: "14px 16px",
      fontSize: 15,
      fontWeight: 600,
      color: "var(--lw-gray-800)",
      cursor: "pointer",
      fontFamily: "var(--lw-font-sans)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, it, issue === it ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--lw-blue-600)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 20
  })) : null)))), step === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      margin: "6px 0 16px",
      color: "var(--lw-gray-900)"
    }
  }, "Confirm your claim"), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--lw-gray-500)",
      fontSize: 14
    }
  }, "Device"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: "var(--lw-gray-900)"
    }
  }, device)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--lw-gray-500)",
      fontSize: 14
    }
  }, "Issue"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: "var(--lw-gray-900)"
    }
  }, issue)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--lw-gray-500)",
      fontSize: 14
    }
  }, "Excess"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: "var(--lw-gray-900)"
    }
  }, "\xA329.00")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    variant: "info"
  }, "A prepaid shipping label and timeline will be sent to your email.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "I confirm the information above is accurate",
    defaultChecked: true
  }))), step === 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      paddingTop: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 84,
      height: 84,
      borderRadius: "50%",
      background: "var(--lw-success-bg)",
      color: "var(--lw-success)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 22px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 44,
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 24,
      fontWeight: 900,
      letterSpacing: "-0.02em",
      margin: "0 0 8px",
      color: "var(--lw-gray-900)"
    }
  }, "Claim submitted"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "var(--lw-gray-600)",
      margin: "0 auto",
      maxWidth: 260,
      lineHeight: 1.5
    }
  }, "Claim ", /*#__PURE__*/React.createElement("strong", null, "#LW-48217"), " is on its way. We'll email your next steps shortly."))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      borderTop: "1px solid var(--border)",
      background: "#fff"
    }
  }, step < 2 && /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => setStep(step + 1),
    rightIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Continue"), step === 2 && /*#__PURE__*/React.createElement(Button, {
    variant: "highlight",
    size: "lg",
    fullWidth: true,
    onClick: () => setStep(3)
  }, "Submit claim"), step === 3 && /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: onClose
  }, "Back to home")));
}
Object.assign(window, {
  LoginScreen,
  HomeScreen,
  DevicesScreen,
  ClaimsScreen,
  AccountScreen,
  ClaimFlow,
  Wordmark
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/moments-app/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
