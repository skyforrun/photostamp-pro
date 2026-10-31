/**
 * PhotoStamp Lite — watermark the current document in Photoshop
 * Version 1.0.0 — MIT License
 *
 * Free, open-source companion to PhotoStamp Pro.
 * Lite stamps the document that's currently open. No folder batch,
 * no presets, no tiling — those live in PhotoStamp Pro.
 *
 * Pro: https://skyforer.gumroad.com/l/photostamp-pro
 *
 * Usage: open a document, then File > Scripts > Browse… > PhotoStamp-Lite.jsx
 */

#target photoshop

(function () {
    var POSITIONS = ["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"];
    var DEFAULT_TEXT = "© " + new Date().getFullYear() + " your name";

    function main() {
        if (app.documents.length === 0) { alert("Open a document first."); return; }
        var doc = app.activeDocument;

        var dlg = new Window("dialog", "PhotoStamp Lite");
        dlg.orientation = "column";
        dlg.alignChildren = "fill";
        dlg.margins = 16;
        dlg.spacing = 8;

        var grpText = dlg.add("panel", undefined, "Text watermark");
        grpText.orientation = "column";
        grpText.alignChildren = "left";
        grpText.margins = 12;
        var textField = grpText.add("edittext", undefined, DEFAULT_TEXT);
        textField.preferredSize.width = 340;

        var grpPos = dlg.add("panel", undefined, "Placement");
        grpPos.orientation = "column";
        grpPos.alignChildren = "left";
        grpPos.margins = 12;
        var posRow = grpPos.add("group");
        posRow.add("statictext", undefined, "Corner").preferredSize.width = 70;
        var posDd = posRow.add("dropdownlist", undefined, POSITIONS);
        posDd.selection = 5;

        var sizeRow = grpPos.add("group");
        sizeRow.add("statictext", undefined, "Size %").preferredSize.width = 70;
        var sizeSlider = sizeRow.add("slider", undefined, 2, 0.5, 10);
        sizeSlider.preferredSize.width = 240;
        var sizeVal = sizeRow.add("statictext", undefined, "2.0");
        sizeVal.preferredSize.width = 40;
        sizeSlider.onChanging = function () { sizeVal.text = sizeSlider.value.toFixed(1); };

        var opRow = grpPos.add("group");
        opRow.add("statictext", undefined, "Opacity").preferredSize.width = 70;
        var opSlider = opRow.add("slider", undefined, 60, 10, 100);
        opSlider.preferredSize.width = 240;
        var opVal = opRow.add("statictext", undefined, "60");
        opVal.preferredSize.width = 40;
        opSlider.onChanging = function () { opVal.text = String(Math.round(opSlider.value)); };

        var note = dlg.add("statictext", undefined, "Tip: this edits the open document. Save As first if you need the original.");
        note.preferredSize.width = 380;

        var btnRow = dlg.add("group");
        btnRow.alignment = "right";
        var stampBtn = btnRow.add("button", undefined, "Stamp it");
        stampBtn.preferredSize.width = 110;

        if (dlg.show() !== 1) return;

        var pos = POSITIONS[posDd.selection.index];
        var w = doc.width.as("px");
        var h = doc.height.as("px");
        var pct = sizeSlider.value / 100;

        var layer = doc.artLayers.add();
        layer.kind = LayerKind.TEXT;
        layer.name = "Watermark (Lite)";
        var t = layer.textItem;
        t.contents = textField.text;
        t.font = "ArialMT";
        t.size = new UnitValue(h * pct, "px");
        t.color = solidColor("#FFFFFF");
        t.justification = Justification.CENTER;

        var margin = w * 0.02;
        var x = margin, y = margin;
        if (pos.indexOf("center") > -1) x = (w - t.size.as("px") * 6) / 2;
        if (pos.indexOf("right") > -1) x = w - t.size.as("px") * 12 - margin;
        if (pos.indexOf("bottom") > -1) y = h - margin - t.size.as("px");

        layer.translate(new UnitValue(x, "px"), new UnitValue(y, "px"));
        layer.opacity = Math.round(opSlider.value);
    }

    function solidColor(hex) {
        var c = new SolidColor();
        c.rgb.hexValue = String(hex).replace("#", "").toUpperCase();
        return c;
    }

    try { main(); } catch (e) { alert("PhotoStamp Lite error: " + e.message + " (line " + e.line + ")"); }
})();
