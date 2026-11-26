/* Lógica de la página: pestañas, armador de paquete, proceso y condiciones. */
(function () {
"use strict";
var RATE = SITE.RATE, WA = SITE.WA;
var W = SITE.works, L = SITE.levels, N = SITE.needs, ST = SITE.steps, FQ = SITE.faqs;
var S = { work: 0, view: 0, theme: "light", level: 1, cur: "gs", dom: false, maint: false, step: 0, faq: 0 };

function $(s) { return document.querySelector(s); }
function fmt(n) {
var dec = Math.round(n * 100) % 100 !== 0;
var s = dec ? n.toFixed(2) : String(Math.round(n));
var p = s.split(".");
var i = p[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
return p[1] ? i + "," + p[1] : i;
}
function money(u) { return S.cur === "usd" ? "US$ " + fmt(u) : "₲ " + fmt(Math.round(u * RATE)); }
function other(u) { return S.cur === "usd" ? "₲ " + fmt(Math.round(u * RATE)) : "US$ " + fmt(u); }
function btn(cls, a, i, pressed, label) {
return '<button type="button" class="' + cls + '" data-a="' + a + '" data-i="' + i + '" aria-pressed="' + pressed + '">' + label + "</button>";
}

function renderWorks() {
$("#workTabs").innerHTML = W.map(function (w, i) { return btn("chip", "work", i, S.work === i, w.name); }).join("");
var w = W[S.work];
var vi = Math.min(S.view, w.views.length - 1);
var v = w.views[vi];
var both = !!(v.light && v.dark);
var th = both ? S.theme : (v.light ? "light" : "dark");
var src = th === "light" ? v.light : v.dark;
var views = w.views.map(function (x, i) { return btn("chip", "view", i, i === vi, x.name); }).join("");
var seg = both ? '<div class="seg">' + btn("chip", "theme", "light", th === "light", "Modo claro") + btn("chip", "theme", "dark", th === "dark", "Modo oscuro") + "</div>" : "";
var items = w.items.map(function (t) { return "<li>" + t + "</li>"; }).join("");
$("#workPanel").innerHTML =
'<div class="bar"><div class="row" style="gap:8px">' + views + "</div>" + seg + "</div>" +
'<img class="shot" src="' + src + '" alt="' + v.alt + '" loading="lazy">' +
'<div class="info"><span class="tag">' + w.tag + "</span><h3 style=\"font-size:30px\">" + w.name + "</h3>" +
'<p style="color:#44403C;font-size:17px">' + w.desc + "</p><ul>" + items + "</ul>" +
'<a href="' + w.url + '" target="_blank" rel="noopener" style="align-self:flex-start;font-weight:600;text-decoration:underline;text-decoration-color:#C2410C;text-underline-offset:4px;text-decoration-thickness:2px;margin-top:6px">Abrir el sitio</a></div>';
}

function renderBuilder() {
$("#needs").innerHTML = N.map(function (nd) { return btn("need hv", "need", nd.lv, S.level === nd.lv, nd.label); }).join("");
var mult = S.dom ? 1.05 : 1;
$("#controls").innerHTML =
'<div class="seg">' + btn("chip", "cur", "gs", S.cur === "gs", "₲ Guaraníes") + btn("chip", "cur", "usd", S.cur === "usd", "US$ Dólares") + "</div>" +
btn("chip", "dom", "t", S.dom, S.dom ? "Con dominio y servidor (+5%)" : "Sumar dominio y servidor (+5%)") +
btn("chip", "maint", "t", S.maint, S.maint ? "Con mantenimiento mensual" : "Sumar mantenimiento mensual");
$("#levels").innerHTML = L.map(function (l, i) {
var sel = S.level === i;
return '<article class="level hv" data-sel="' + sel + '">' +
'<span style="font-family:Sora,sans-serif;font-weight:700;font-size:40px;color:#C2410C;line-height:1">' + l.n + "</span>" +
'<h3 style="font-size:22px">' + l.name + "</h3>" +
'<p style="color:#44403C;font-size:15px">' + l.who + "</p>" +
'<div style="margin-top:6px"><div style="font-family:Sora,sans-serif;font-weight:700;font-size:28px;letter-spacing:-0.02em">' + money(l.base * mult) + '</div><div style="color:#44403C;font-size:14px">' + other(l.base * mult) + "</div></div>" +
"<ul>" + l.f.map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul>" +
'<div style="font-size:14px;font-weight:600">Entrega: ' + l.time + "</div>" +
btn("pick", "level", i, sel, sel ? "Nivel elegido" : "Elegir este nivel") + "</article>";
}).join("");
var cl = L[S.level], total = cl.base * mult, sena = cl.base * 0.3;
var text = "Hola Thiago, me interesa el Nivel " + cl.n + " · " + cl.name + " (" + money(total) + ")." + (S.dom ? " Con dominio y servidor." : "") + (S.maint ? " Con mantenimiento mensual." : "") + (cl.cuotas ? " Me interesa pagar el saldo en cuotas." : "") + " ¿Podemos hablar?";
$("#summary").innerHTML =
'<div style="flex:1 1 420px;display:flex;flex-direction:column;gap:8px">' +
'<span style="font-size:14px;color:#FDBA74;font-weight:600">NIVEL ' + cl.n + " · " + cl.name + "</span>" +
'<div style="font-family:Sora,sans-serif;font-weight:700;font-size:clamp(32px,5vw,44px);letter-spacing:-0.02em;color:#fff">' + money(total) + "</div>" +
"<div>Seña para empezar (30%): <strong>" + money(sena) + "</strong></div>" +
"<div>Saldo contra entrega: <strong>" + money(total - sena) + "</strong></div>" +
(cl.cuotas ? "<div>Saldo también en <strong>cuotas</strong> (a coordinar).</div>" : "") +
"<div>Entrega estimada: <strong>" + cl.time + "</strong></div>" +
(S.dom ? "<div>Incluye dominio y servidor (+5%).</div>" : "") +
(S.maint ? "<div>Mantenimiento " + cl.mname + ": <strong>" + money(cl.m) + " por mes</strong></div>" : "") +
"</div>" +
'<a class="btn btn-or" href="' + WA + "?text=" + encodeURIComponent(text) + '" style="padding:20px 32px">Pedir este paquete por WhatsApp</a>';
}

function renderProcess() {
$("#steps").innerHTML = ST.map(function (s, i) { return btn("chip", "step", i, S.step === i, s.n + " · " + s.title); }).join("");
var c = ST[S.step];
$("#stepPanel").innerHTML =
'<span style="font-family:Sora,sans-serif;font-weight:700;font-size:88px;color:#FB923C;line-height:1" aria-hidden="true">' + c.n + "</span>" +
'<div style="flex:1 1 360px;display:flex;flex-direction:column;gap:8px"><h3 style="font-size:26px">' + c.title + '</h3><p style="color:#E7E5E4;font-size:18px;max-width:560px">' + c.text + "</p></div>";
}

function renderFaq() {
$("#faqs").innerHTML = FQ.map(function (q, i) {
var open = S.faq === i;
return '<div class="faq"><button type="button" data-a="faq" data-i="' + i + '" aria-expanded="' + open + '"><span>' + q.title + "</span><span aria-hidden=\"true\">" + (open ? "−" : "+") + "</span></button>" + (open ? "<p>" + q.text + "</p>" : "") + "</div>";
}).join("");
}

function render() { renderWorks(); renderBuilder(); renderProcess(); renderFaq(); }

document.addEventListener("click", function (e) {
var b = e.target.closest("button[data-a]");
if (!b) return;
var a = b.dataset.a, i = b.dataset.i;
if (a === "work") { S.work = +i; S.view = 0; }
else if (a === "view") S.view = +i;
else if (a === "theme") S.theme = i;
else if (a === "need" || a === "level") S.level = +i;
else if (a === "cur") S.cur = i;
else if (a === "dom") S.dom = !S.dom;
else if (a === "maint") S.maint = !S.maint;
else if (a === "step") S.step = +i;
else if (a === "faq") S.faq = S.faq === +i ? -1 : +i;
render();
var n = document.querySelector('button[data-a="' + a + '"][data-i="' + i + '"]');
if (n) n.focus();
});

render();
})();
