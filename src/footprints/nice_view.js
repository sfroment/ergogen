module.exports = {
  params: {
    orientation: "down",
    MOSI: undefined,
    SCK: undefined,
    CS: undefined,
    VCC: { type: "net", value: "VCC" },
    GND: { type: "net", value: "GND" },
  },
  body: (p) => {
    const standard = `
        (module nice!view (layer F.Cu) (tedit 0)

        ${p.at /* parametric position */}
        (fp_text reference "display*" (at 0 1.27 unlocked) (layer "F.Fab")
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (fp_text value "nice!view" (at 0 21.59 unlocked) (layer "F.SilkS")
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (fp_text user "CS" (at 5.08 17.78 90 unlocked) (layer "F.SilkS")
        (effects (font (size 1 1) (thickness 0.15)) (justify right))
      )
      (fp_text user "MOSI" (at -5.08 17.78 90 unlocked) (layer "F.SilkS")
        (effects (font (size 1 1) (thickness 0.15)) (justify right))
      )
      (fp_text user "VCC" (at 0 17.78 90 unlocked) (layer "F.SilkS")
        (effects (font (size 1 1) (thickness 0.15)) (justify right))
      )
      (fp_text user "GND" (at 2.54 17.78 90 unlocked) (layer "F.SilkS")
        (effects (font (size 1 1) (thickness 0.15)) (justify right))
      )
      (fp_text user "SCK" (at -2.54 17.78 90 unlocked) (layer "F.SilkS")
        (effects (font (size 1 1) (thickness 0.15)) (justify right))
      )
      (fp_text user "${p.ref}" (at 0 4 unlocked) (layer "F.Fab") hide
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (fp_rect (start -6.35 15.24) (end 6.35 17.78) (layer "F.SilkS") (width 0.12) (fill none))
      (fp_rect (start 7 17.78) (end -7 -18.22) (layer "F.Fab") (width 0.12) (fill none))
        `;
    function pins(def_neg, def_pos) {
      return `
      (pad "1" thru_hole circle (at -5.08 16.51 ${p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.MOSI.str})
  (pad "2" thru_hole circle (at -2.54 16.51) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.SCK.str})
  (pad "3" thru_hole circle (at 0 16.51) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.VCC.str})
  (pad "4" thru_hole circle (at 2.54 16.51) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.GND.str})
  (pad "5" thru_hole circle (at 5.08 16.51) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.CS.str})
        `;
    }
    return `${standard} ${pins()} )`;
  },
};
