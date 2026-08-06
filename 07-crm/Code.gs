/* Shared seed content per SPEC section 9. Rows: template, section, ord, item, owner, offset_days, sop, non_recurring */
var SEED_TEMPLATES = [
["DayOne","Gate check",1,"Scorecard passed and on file","Sarah",0,"SOP-010","N"],
["DayOne","Gate check",2,"Pre-flight cleared, all 11 gates","Sarah",0,"SOP-009","N"],
["DayOne","Gate check",3,"E&O and cyber active, retroactive date intact","Brad",0,"SOP-009","N"],
["DayOne","Gate check",4,"Not inside the mid-Jan to mid-Feb freeze","Both",0,"SOP-012","N"],
["DayOne","Gate check",5,"Letter scopes bookkeeping only, no excluded services","Sarah",0,"SOP-012","N"],
["DayOne","Billing first",6,"ACH autodraft enrolled via QuickBooks Payments before any work","Brad",0,"SOP-012","N"],
["DayOne","Billing first",7,"Receipt automation confirmed","Brad",0,"SOP-012","N"],
["DayOne","Billing first",8,"First draft date in the welcome email","Brad",0,"WELCOME","N"],
["DayOne","Access and control",9,"QBO accountant user access requested, never client credentials","Sarah",0,"SOP-012","N"],
["DayOne","Access and control",10,"Client keeps primary admin, prior bookkeeper removed today","Sarah",0,"SOP-012","N"],
["DayOne","Access and control",11,"MFA on everything, credentials in password manager only","Brad",0,"SOP-006","N"],
["DayOne","Access and control",12,"Decline any signing authority in writing","Sarah",0,"SOP-012","N"],
["DayOne","Baseline",13,"Written complete account list received and reconciled against QBO","Sarah",0,"SOP-012","N"],
["DayOne","Baseline",14,"Baseline exports saved, dated: TB, BS, P&L, chart, recon history","Sarah",0,"SOP-012","N"],
["DayOne","Baseline",15,"Closing date setting screenshot","Sarah",0,"SOP-012","N"],
["DayOne","Damage check",16,"10-minute damage assessment run","Sarah",0,"SOP-012","N"],
["DayOne","Damage check",17,"Real damage found: STOP, re-quote as cleanup","Sarah",0,"SOP-003","N"],
["DayOne","Setup",18,"Ask My Client account created","Sarah",0,"SOP-012","N"],
["DayOne","Setup",19,"Folder tree and private upload link created and tested","Brad",0,"SOP-012","N"],
["DayOne","Setup",20,"Document auto-request armed for the 1st, 3rd, 5th","Brad",0,"SOP-004","N"],
["DayOne","Setup",21,"Standing rules doc opened","Sarah",0,"SOP-012","N"],
["DayOne","Communication",22,"Welcome email sent today with working upload link","Brad",0,"WELCOME","N"],
["DayOne","Communication",23,"CPA intro sent: cap threshold, adjustments, year-end format","Sarah",0,"SOP-012","N"],
["First30","Foundation",1,"Chart of accounts audited and standardized","Sarah",5,"SOP-013","N"],
["First30","Foundation",2,"Opening balances tied to dated statements, OBE zero","Sarah",5,"SOP-013","N"],
["First30","Foundation",3,"Standing rules set with owners recorded","Sarah",5,"SOP-013","N"],
["First30","Foundation",4,"Bank rules built, auto-confirm off except rigid fixed items","Sarah",7,"SOP-013","N"],
["First30","Foundation",5,"W-9s collected, 1099 flags set now not January","Brad",7,"SOP-013","N"],
["First30","First documents",6,"First window categorized per standing rules, docs attached","Sarah",10,"SOP-013","N"],
["First30","First documents",7,"First Ask My Client list sent by the 10th","Brad",10,"SOP-013","N"],
["First30","First documents",8,"Everything reconciled to zero by the 13th, reports saved","Sarah",13,"SOP-013","N"],
["First30","First documents",9,"Full 14-check sweep run","Sarah",13,"SOP-011","N"],
["First30","First close",10,"The Gap: overnight fresh-eyes review on the 14th","Sarah",14,"SOP-001","N"],
["First30","First close",11,"Delivered by the 15th: P&L, BS, plain-words summary, portal only","Sarah",15,"SOP-001","N"],
["First30","First close",12,"Period locked with password, month archived","Sarah",15,"SOP-001","N"],
["First30","First close",13,"Hours logged honestly to the KPI sheet","Sarah",15,"SOP-008","N"],
["First30","First close",14,"Post-first-close check-in sent","Brad",16,"SOP-013","N"],
["FirstQuarter","First quarter",1,"Three on-time closes delivered","Sarah",75,"SOP-014","N"],
["FirstQuarter","First quarter",2,"File health audit run once after close 3","Sarah",80,"SOP-014","N"],
["FirstQuarter","First quarter",3,"Pricing and tier review: hours x3, in-tier check","Sarah",85,"SOP-014","N"],
["FirstQuarter","First quarter",4,"Relationship review: would we want ten more like this","Both",85,"SOP-014","N"],
["FirstQuarter","First quarter",5,"Review request sent only if all three closes clean","Brad",85,"REVIEW","N"],
["FirstQuarter","First quarter",6,"CPA touch email sent","Sarah",85,"SOP-014","N"],
["FirstQuarter","First quarter",7,"Judgment log promoted to standing rules","Sarah",90,"SOP-014","N"],
["MonthlyClose","Documents",1,"Auto-requests fired on the 1st, 3rd, 5th","Brad",1,"SOP-004","N"],
["MonthlyClose","Documents",2,"Draft ran on the 1st, receipt confirmed","Brad",1,"SOP-005","N"],
["MonthlyClose","Documents",3,"Docs complete or stragglers chased by the 10th","Brad",10,"SOP-004","N"],
["MonthlyClose","Close",4,"Beginning balances verified before anything else","Sarah",11,"SOP-001","N"],
["MonthlyClose","Close",5,"Every account reconciled to exactly zero, never plugged","Sarah",12,"SOP-011","N"],
["MonthlyClose","Close",6,"Loans tied to lender balance","Sarah",12,"SOP-001","N"],
["MonthlyClose","Close",7,"Ask My Client list sent, unknowns parked","Sarah",12,"SOP-015","N"],
["MonthlyClose","Sweep",8,"OBE zero","Sarah",13,"SOP-011","N"],
["MonthlyClose","Sweep",9,"Undeposited Funds swept","Sarah",13,"SOP-011","N"],
["MonthlyClose","Sweep",10,"Balance sheet tied line by line to outside documents","Sarah",13,"SOP-011","N"],
["MonthlyClose","Sweep",11,"TB variance scan vs prior period","Sarah",13,"SOP-011","N"],
["MonthlyClose","Sweep",12,"Missing docs parked and named with dollar values","Sarah",13,"SOP-011","N"],
["MonthlyClose","Deliver",13,"The Gap: overnight review on the 14th","Sarah",14,"SOP-001","N"],
["MonthlyClose","Deliver",14,"Locked with password, then delivered by the 15th, portal only","Sarah",15,"SOP-001","N"],
["MonthlyClose","Deliver",15,"Month archived, honest hours logged","Sarah",15,"SOP-008","N"],
["Offboarding","Offboarding",1,"Acknowledge in writing same day, record reason verbatim","Brad",0,"SOP-016","N"],
["Offboarding","Offboarding",2,"Cancel ACH after final draft, verify next 1st fires nothing","Brad",3,"SOP-016","N"],
["Offboarding","Offboarding",3,"Final close to full standard","Sarah",15,"SOP-001","N"],
["Offboarding","Offboarding",4,"Handover package via portal, receipt confirmed","Sarah",20,"SOP-016","N"],
["Offboarding","Offboarding",5,"CPA note with client consent","Sarah",20,"SOP-016","N"],
["Offboarding","Offboarding",6,"All access closed on the end date, confirmed in writing","Brad",30,"SOP-016","N"],
["Offboarding","Offboarding",7,"7-year retention clock started","Brad",30,"SOP-007","N"],
["Offboarding","Offboarding",8,"KPI line closed: months, revenue, hours, would we take them again","Sarah",30,"SOP-008","N"],
["Offboarding","Offboarding",9,"Gracious door-open note, no pitch","Brad",30,"SOP-016","N"]
];
/* Rows: id, name, frequency, next_date, owner, sop, notes */
var SEED_COMPLIANCE = [
["cmp-01","ACH autodraft run, retry day 3, pause day 10","Monthly (1st)","2026-09-01","Brad","SOP-005",""],
["cmp-02","All closes locked and delivered","Monthly (15th)","2026-08-15","Sarah","SOP-001",""],
["cmp-03","1099-NEC recipient copies and IRS filing","Annual","2027-01-31","Brad","SOP-013",""],
["cmp-04","Onboarding freeze begins","Annual","2027-01-15","Both","SOP-012",""],
["cmp-05","Texas franchise tax and PIR, confirm CPA filed","Annual","2027-05-15","Sarah","SOP-014",""],
["cmp-06","ProAdvisor recertification window","Annual","2027-06-01","Sarah","",""],
["cmp-07","ProAdvisor recertification deadline","Annual","2027-06-30","Sarah","",""],
["cmp-08","Fall W-9 refresh and 1099 flag audit","Annual","2026-10-01","Brad","SOP-013",""],
["cmp-09","Insurance renewal, preserve retroactive date","Annual","2027-07-01","Brad","SOP-009",""],
["cmp-10","Client renewal re-screen","Annual","2027-07-01","Sarah","SOP-010",""],
["cmp-11","Intuit plan migration: confirm CORE not Accelerate","One-time","2026-12-01","Brad","",""],
["cmp-12","TX data processing sales tax boundary review with CPA","Annual","2027-01-15","Sarah","",""]
];
var SEED_SOP_LINKS = {
"SOP-001":{t:"Monthly Close",d:"https://docs.google.com/document/d/1zo3XxhK-WC_NWzXqMve8FBJ7Dr43bQxT30EJzGldqXA/edit",r:"01-sops/SOP-001-monthly-close.md"},
"SOP-002":{t:"Client Onboarding",d:"https://docs.google.com/document/d/1HW67gr1sjN1cEs5qb0tnM0QJF5K8hoDZCWkxG7YUIds/edit",r:"01-sops/SOP-002-client-onboarding.md"},
"SOP-003":{t:"Cleanup 12-Step",d:"https://docs.google.com/document/d/1E2I7DU7YboSgAgi_Of0qZMCfrhU-GP4TH2z-S1pDgZo/edit",r:"01-sops/SOP-003-cleanup-12-step.md"},
"SOP-004":{t:"Document Chase",d:"https://docs.google.com/document/d/1cPQLmCh-fiNkj_fo5Qz9onuHc9RHCBCixOw_2Cicp_Y/edit",r:"01-sops/SOP-004-document-chase.md"},
"SOP-005":{t:"Payment Failure and Service Pause",d:"https://docs.google.com/document/d/1C4-IvxNm41Bz7l2sxeRCTRub13IiYpeQE8I8FSSDoLI/edit",r:"01-sops/SOP-005-payment-failure-service-pause.md"},
"SOP-006":{t:"Data Security and WISP",d:"https://docs.google.com/document/d/1eSKPJO11LlgE88uFJC6ukRnwYfN3iHbl25jvlUsXiuA/edit",r:"01-sops/SOP-006-security-wisp.md"},
"SOP-007":{t:"Records Retention",d:"https://docs.google.com/document/d/1t8PyyKm15VyuKfakiglPclpa-LMPCi8d-D99GNSbX60/edit",r:"01-sops/SOP-007-records-retention.md"},
"SOP-008":{t:"KPI Dashboard",d:"https://docs.google.com/document/d/1gg196-q6GNV4-QIYHGiyQDnDhQt-HmdvW7ztw_1QpcQ/edit",r:"01-sops/SOP-008-kpi-dashboard.md"},
"SOP-009":{t:"Engagement Pre-Flight Checklist",d:"https://docs.google.com/document/d/1fl6IGtG2XmuRhUpZ6UhhgoKpHslkMjz0rwvq-POwXbA/edit",r:"01-sops/SOP-009-engagement-preflight-checklist.md"},
"SOP-010":{t:"Client Screening Scorecard",d:"https://docs.google.com/document/d/1YLetmmrs7T0gE7bBG2oYRpWzvNdJnCHscLdpmOE5I1g/edit",r:"01-sops/SOP-010-client-screening-scorecard.md"},
"SOP-011":{t:"Error Prevention Protocol",d:"https://docs.google.com/document/d/1d9Eh26dshyrgS75EiGQXdRlVmEbXzuiqhQ5O2AoLdbU/edit",r:"01-sops/SOP-011-error-prevention-protocol.md"},
"SOP-012":{t:"Day One",d:"https://docs.google.com/document/d/1gdgXIHut7JSdD5cHoavoXgf0-CVEqMy7nwlPQvXlWwg/edit",r:"01-sops/client-lifecycle/SOP-012-day-one.md"},
"SOP-013":{t:"The First 30 Days",d:"https://docs.google.com/document/d/1MYbR7OzOUk3yWeAFnLcgn8l33mAzXoPpd5hMIt_D15E/edit",r:"01-sops/client-lifecycle/SOP-013-first-30-days.md"},
"SOP-014":{t:"The First Quarter",d:"https://docs.google.com/document/d/1OFfvKD2dgsnb7-rOqbkSFh5xzk8dvzIhPHkMO4BHvPE/edit",r:"01-sops/client-lifecycle/SOP-014-first-quarter.md"},
"SOP-015":{t:"The Weekly Hour",d:"https://docs.google.com/document/d/1j-9Kv2IZQ_l752oDWW-SO-w3Or0UB1jA4F6_A-VddP0/edit",r:"01-sops/client-lifecycle/SOP-015-weekly-hour.md"},
"SOP-016":{t:"Offboarding",d:"https://docs.google.com/document/d/1hDk_2h4Ihzw8xnbztoQMy_G3anesDHiPyFt8K8IXEQg/edit",r:"01-sops/client-lifecycle/SOP-016-offboarding.md"},
"LIFECYCLE":{t:"Client Lifecycle READ ME",d:"https://docs.google.com/document/d/1I3qt-30vkVsLOLJYIQAiNW6kClNlzoiit8747joZUmg/edit",r:"01-sops/client-lifecycle/README.md"},
"WELCOME":{t:"Client Welcome Email",d:"https://docs.google.com/document/d/1b1nsXu6FEoYM-2JBexqx2j2OUgibU6s3QDqlDkbbUWI/edit",r:"04-clients/welcome-email-template.md"},
"REVIEW":{t:"Review Request",d:"https://docs.google.com/document/d/1HGJWNPN385FQCxkAVxpKFbf1rRqIY1RjD_4cYzPgux8/edit",r:"04-clients/review-request-template.md"}
};
var SEED_TIERS = {
tiers:{
"Essentials":{fee:250,desc:"Up to 2 bank or credit card accounts, about 100 transactions"},
"Standard":{fee:450,desc:"Up to 4 accounts, about 250 transactions"},
"Growing":{fee:999,desc:"6+ accounts, 500 transactions, bigger books quoted flat in writing. Includes W-9 and 1099 tracking and the Monthly Owner's Briefing"}
},
addons:{"Owner's Briefing":199,"1099 filing":25},
cleanup:"Flat $1,000 to $1,750, quoted in writing"
};
var SEED_SETTINGS = [
["allowed_emails","bradleybowen80@gmail.com,sarahrogowski85@gmail.com"],
["firm_name","The Relief Pros, LLC"],
["close_day","15"],
["internal_close_day","13"],
["gap_day","14"],
["restaurant_cap_pct","25"],
["solo_ceiling_clients","15"],
["hours_flag","9"],
["tiers",JSON.stringify(SEED_TIERS)],
["sop_links",JSON.stringify(SEED_SOP_LINKS)],
["theme","light"]
];

/* ================= Relief Pros HQ backend (Apps Script, V8) =================
   Container-bound to the database Sheet. Serves app.html and persists all tabs.
   Run setup() once on a blank sheet; it is safe to rerun any time. */

var TABLES = {
  Leads: ["id","business_name","contact_name","email","phone","vertical","business_age_years","source","stage","score","score_date","hard_filter_fail","quoted_tier","quoted_fee","cleanup_quote","next_action","next_action_date","decline_reason","notes","created","updated"],
  Clients: ["id","business_name","contact_name","email","phone","vertical","entity_type","status","tier","monthly_fee","effective_date","letter_signed_date","first_close_month","weekly_hour_day","cpa_name","cpa_email","cap_threshold","yearend_format","ach_status","receipt_automation","qbo_access","primary_admin_ok","mfa_confirmed","portal_link","account_list_date","account_list_reconfirmed","opening_balances","standing_rules_link","restaurant_flag","renewal_date","renewal_score","addons","notes","created","updated"],
  Jobs: ["id","client_id","type","period","title","stage","due","internal_due","owner","waiting_on_client","waiting_since","checklist","hours","amc_count","parked_items","delivered_date","locked","notes","created","updated","completed"],
  Templates: ["template","section","ord","item","owner","offset_days","sop","non_recurring"],
  Compliance: ["id","name","frequency","next_date","owner","sop","notes","done_log"],
  Log: ["ts","user","action","entity","entity_id","details"],
  Settings: ["key","value"]
};
var JSON_COLS = { Jobs: ["checklist"], Compliance: ["done_log"] };
var KEY_COL = { Settings: "key" };

function doGet(e) {
  var email = (Session.getActiveUser().getEmail() || Session.getEffectiveUser().getEmail() || "").toLowerCase();
  var allowed = getSettingValue_("allowed_emails", "").toLowerCase().split(",").map(function(s){ return s.trim(); }).filter(String);
  if (!email || (allowed.length && allowed.indexOf(email) < 0)) {
    return HtmlService.createHtmlOutput(
      "<div style=\"font-family:sans-serif;padding:40px;text-align:center\">" +
      "<h2>Not authorized</h2><p>Signed in as <b>" + escHtml_(email || "(no email seen)") +
      "</b>.</p><p>Ask Brad to add this address in Settings.</p></div>"
    ).setTitle("Relief Pros HQ");
  }
  return HtmlService.createTemplateFromFile("app").evaluate()
    .setTitle("Relief Pros HQ")
    .addMetaTag("viewport", "width=device-width, initial-scale=1")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function api_boot() {
  ensureMonthlyJobs_();
  var data = {};
  Object.keys(TABLES).forEach(function(name) {
    data[tableKey_(name)] = readTable_(name);
  });
  return { user: Session.getActiveUser().getEmail() || "unknown", data: data };
}

function api_upsert(table, obj) {
  assertTable_(table);
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var sheet = getSheet_(table);
    var headers = TABLES[table];
    var keyCol = KEY_COL[table] || "id";
    if (!obj[keyCol] && keyCol === "id") obj.id = table.slice(0, 2).toLowerCase() + "-" + new Date().getTime().toString(36);
    if (headers.indexOf("updated") > -1) obj.updated = isoDate_(new Date());
    if (headers.indexOf("created") > -1 && !obj.created) obj.created = isoDate_(new Date());
    var values = sheet.getDataRange().getValues();
    var keyIdx = headers.indexOf(keyCol);
    var rowIdx = -1;
    for (var i = 1; i < values.length; i++) {
      if (String(values[i][keyIdx]) === String(obj[keyCol])) { rowIdx = i + 1; break; }
    }
    var row = headers.map(function(h) {
      var v = obj[h];
      if ((JSON_COLS[table] || []).indexOf(h) > -1) return JSON.stringify(v == null ? [] : v);
      return v == null ? "" : v;
    });
    if (rowIdx > -1) sheet.getRange(rowIdx, 1, 1, headers.length).setValues([row]);
    else sheet.appendRow(row);
    appendLog_("upsert", table, String(obj[keyCol]), rowIdx > -1 ? "updated" : "created");
    return obj;
  } finally {
    lock.releaseLock();
  }
}

function api_delete(table, id) {
  assertTable_(table);
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    if (table === "Leads") {
      var sheet = getSheet_("Leads");
      var values = sheet.getDataRange().getValues();
      for (var i = 1; i < values.length; i++) {
        if (String(values[i][0]) === String(id)) { sheet.deleteRow(i + 1); break; }
      }
      appendLog_("delete", "Leads", id, "hard delete");
      return { ok: true };
    }
    /* everything else is a soft state change, done through api_upsert by the client */
    appendLog_("delete_refused", table, id, "only Leads hard-delete");
    return { ok: false, reason: "Only Leads hard-delete. Use a status or stage change." };
  } finally {
    lock.releaseLock();
  }
}

function api_log_hours(job_id, hours) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var sheet = getSheet_("Jobs");
    var headers = TABLES.Jobs;
    var values = sheet.getDataRange().getValues();
    var hIdx = headers.indexOf("hours"), uIdx = headers.indexOf("updated");
    for (var i = 1; i < values.length; i++) {
      if (String(values[i][0]) === String(job_id)) {
        sheet.getRange(i + 1, hIdx + 1).setValue(Number(hours) || 0);
        sheet.getRange(i + 1, uIdx + 1).setValue(isoDate_(new Date()));
        appendLog_("hours", "Jobs", job_id, "hours set to " + hours);
        return { ok: true, hours: Number(hours) || 0 };
      }
    }
    return { ok: false, reason: "job not found" };
  } finally {
    lock.releaseLock();
  }
}

/* ---- monthly close recurrence, server side (SPEC 4.1) ---- */
function ensureMonthlyJobs_() {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var nowD = new Date();
    var cm = ym_(nowD);
    var periods = [cm];
    if (nowD.getDate() >= 25) periods.push(ymAdd_(cm, 1));
    var clients = readTable_("Clients");
    var jobs = readTable_("Jobs");
    var templates = readTable_("Templates");
    var closeDay = Number(getSettingValue_("close_day", "15"));
    var internalDay = Number(getSettingValue_("internal_close_day", "13"));
    clients.forEach(function(c) {
      if (c.status !== "Active" && c.status !== "Onboarding") return;
      if (!c.first_close_month) return;
      periods.forEach(function(p) {
        if (String(c.first_close_month) > p) return;
        var exists = jobs.some(function(j) { return j.client_id === c.id && j.type === "MonthlyClose" && j.period === p; });
        if (exists) return;
        var checklist = templates
          .filter(function(t) { return t.template === "MonthlyClose"; })
          .sort(function(a, b) { return Number(a.ord) - Number(b.ord); })
          .map(function(t) { return { i: t.item, o: t.owner, d: false, dd: "", sop: t.sop || "", s: t.section }; });
        var job = {
          id: "jb-" + new Date().getTime().toString(36) + Math.floor(Math.random() * 1296).toString(36),
          client_id: c.id, type: "MonthlyClose", period: p,
          title: monthLabel_(p) + " close", stage: "Docs arriving",
          due: ymDay_(p, closeDay), internal_due: ymDay_(p, internalDay),
          owner: "Both", waiting_on_client: "N", waiting_since: "", checklist: checklist,
          hours: 0, amc_count: 0, parked_items: "", delivered_date: "", locked: "N", notes: "",
          created: isoDate_(nowD), updated: isoDate_(nowD), completed: ""
        };
        var headers = TABLES.Jobs;
        getSheet_("Jobs").appendRow(headers.map(function(h) {
          return h === "checklist" ? JSON.stringify(job[h]) : (job[h] == null ? "" : job[h]);
        }));
        jobs.push(job);
        appendLog_("spawn", "Jobs", job.id, "Monthly close spawned for " + p + " (" + c.business_name + ")");
      });
    });
  } finally {
    lock.releaseLock();
  }
}

/* ---- idempotent setup: builds tabs, seeds Templates, Compliance, Settings ---- */
function setup() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  Object.keys(TABLES).forEach(function(name) {
    var sheet = ss.getSheetByName(name);
    if (!sheet) sheet = ss.insertSheet(name);
    var headers = TABLES[name];
    var firstRow = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
    if (String(firstRow[0] || "") !== headers[0]) {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    }
    sheet.setFrozenRows(1);
    var head = sheet.getRange(1, 1, 1, headers.length);
    head.setFontWeight("bold").setBackground("#12293f").setFontColor("#ffffff");
    var protections = sheet.getProtections(SpreadsheetApp.ProtectionType.RANGE);
    var already = protections.some(function(p) { return p.getRange().getRow() === 1; });
    if (!already) head.protect().setDescription(name + " headers").setWarningOnly(true);
    for (var col = 1; col <= headers.length; col++) {
      var w = headers[col - 1] === "checklist" || headers[col - 1] === "notes" || headers[col - 1] === "value" ? 320 :
              headers[col - 1] === "business_name" || headers[col - 1] === "item" || headers[col - 1] === "name" || headers[col - 1] === "details" ? 240 : 130;
      sheet.setColumnWidth(col, w);
    }
  });
  if (getSheetRowCount_("Templates") < 2) {
    var tSheet = getSheet_("Templates");
    SEED_TEMPLATES.forEach(function(r) { tSheet.appendRow(r); });
  }
  if (getSheetRowCount_("Compliance") < 2) {
    var cSheet = getSheet_("Compliance");
    SEED_COMPLIANCE.forEach(function(r) { cSheet.appendRow(r.concat(["[]"])); });
  }
  if (getSheetRowCount_("Settings") < 2) {
    var sSheet = getSheet_("Settings");
    SEED_SETTINGS.forEach(function(r) { sSheet.appendRow(r); });
  }
  appendLog_("setup", "System", "", "setup() ran");
  return "setup complete";
}

/* ---- internals ---- */
function tableKey_(name) {
  return { Leads: "leads", Clients: "clients", Jobs: "jobs", Templates: "templates", Compliance: "compliance", Log: "log", Settings: "settings" }[name];
}
function assertTable_(table) {
  if (!TABLES.hasOwnProperty(table)) throw new Error("Unknown table: " + table);
}
function getSheet_(name) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(name);
  if (!sheet) { setup(); sheet = ss.getSheetByName(name); }
  return sheet;
}
function getSheetRowCount_(name) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name);
  return sheet ? sheet.getLastRow() : 0;
}
function readTable_(name) {
  var sheet = getSheet_(name);
  var headers = TABLES[name];
  var last = sheet.getLastRow();
  if (last < 2) return [];
  var values = sheet.getRange(2, 1, last - 1, headers.length).getValues();
  return values.filter(function(row) { return String(row[0]) !== ""; }).map(function(row) {
    var obj = {};
    headers.forEach(function(h, i) {
      var v = row[i];
      if (v instanceof Date) v = isoDate_(v);
      if ((JSON_COLS[name] || []).indexOf(h) > -1) {
        try { v = JSON.parse(v || "[]"); } catch (e) { v = []; }
      }
      obj[h] = v;
    });
    return obj;
  });
}
function appendLog_(action, entity, id, details) {
  var sheet = getSheet_("Log");
  var d = new Date();
  sheet.appendRow([
    isoDate_(d) + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2),
    Session.getActiveUser().getEmail() || "script", action, entity, id, details
  ]);
}
function getSettingValue_(key, fallback) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Settings");
  if (!sheet || sheet.getLastRow() < 2) return fallback;
  var values = sheet.getRange(2, 1, sheet.getLastRow() - 1, 2).getValues();
  for (var i = 0; i < values.length; i++) {
    if (String(values[i][0]) === key) return String(values[i][1]);
  }
  return fallback;
}
function isoDate_(d) {
  return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
}
function ym_(d) { return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2); }
function ymAdd_(ym, n) {
  var p = ym.split("-"), y = Number(p[0]), m = Number(p[1]) - 1 + n;
  y += Math.floor(m / 12); m = ((m % 12) + 12) % 12;
  return y + "-" + ("0" + (m + 1)).slice(-2);
}
function ymDay_(ym, day) {
  var p = ym.split("-");
  var lastDay = new Date(Number(p[0]), Number(p[1]), 0).getDate();
  return ym + "-" + ("0" + Math.min(day, lastDay)).slice(-2);
}
function monthLabel_(ym) {
  var names = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var p = ym.split("-");
  return names[Number(p[1]) - 1] + " " + p[0];
}
function escHtml_(s) {
  return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
