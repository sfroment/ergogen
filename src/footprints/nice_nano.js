// Nicekeyboards nice!nano v2
// Params
//  orientation: default is down
//    if down, power led will face the pcb
//    if up, power led will face away from pcb

module.exports = {
  params: {
    class: "MCU",
    orientation: "down",
    mirror: false,
    BATP: { type: "net", value: "BAT+" },
    BATM: { type: "net", value: "BAT-" },
    BATP: { type: "net", value: "BAT+" },
    GND: { type: "net", value: "GND" },
    RST: { type: "net", value: "RST" },
    VCC: { type: "net", value: "VCC" },
    P031: { type: "net", value: "P031" },
    P029: { type: "net", value: "P029" },
    P002: { type: "net", value: "P002" },
    P115: { type: "net", value: "P115" },
    P113: { type: "net", value: "P113" },
    P111: { type: "net", value: "P111" },
    P010: { type: "net", value: "P010" },
    P009: { type: "net", value: "P009" },
    P006: { type: "net", value: "P006" },
    P008: { type: "net", value: "P008" },
    P017: { type: "net", value: "P017" },
    P020: { type: "net", value: "P020" },
    P022: { type: "net", value: "P022" },
    P024: { type: "net", value: "P024" },
    P100: { type: "net", value: "P100" },
    P011: { type: "net", value: "P011" },
    P104: { type: "net", value: "P104" },
    P101: { type: "net", value: "P101" },
    P102: { type: "net", value: "P102" },
    P107: { type: "net", value: "P107" },
    P106: { type: "net", value: "P106" },
    DATA: { type: "net", value: "DATA" },

    MIRROR_BATP: { type: "net", value: "MIRROR_BAT+" },
    MIRROR_BATM: { type: "net", value: "MIRROR_BAT-" },
    MIRROR_BATP: { type: "net", value: "MIRROR_BAT+" },
    MIRROR_GND: { type: "net", value: "MIRROR_GND" },
    MIRROR_RST: { type: "net", value: "MIRROR_RST" },
    MIRROR_VCC: { type: "net", value: "MIRROR_VCC" },
    MIRROR_P031: { type: "net", value: "MIRROR_P031" },
    MIRROR_P029: { type: "net", value: "MIRROR_P029" },
    MIRROR_P002: { type: "net", value: "MIRROR_P002" },
    MIRROR_P115: { type: "net", value: "MIRROR_P115" },
    MIRROR_P113: { type: "net", value: "MIRROR_P113" },
    MIRROR_P111: { type: "net", value: "MIRROR_P111" },
    MIRROR_P010: { type: "net", value: "MIRROR_P010" },
    MIRROR_P009: { type: "net", value: "MIRROR_P009" },
    MIRROR_P006: { type: "net", value: "MIRROR_P006" },
    MIRROR_P008: { type: "net", value: "MIRROR_P008" },
    MIRROR_P017: { type: "net", value: "MIRROR_P017" },
    MIRROR_P020: { type: "net", value: "MIRROR_P020" },
    MIRROR_P022: { type: "net", value: "MIRROR_P022" },
    MIRROR_P024: { type: "net", value: "MIRROR_P024" },
    MIRROR_P100: { type: "net", value: "MIRROR_P100" },
    MIRROR_P011: { type: "net", value: "MIRROR_P011" },
    MIRROR_P104: { type: "net", value: "MIRROR_P104" },
    MIRROR_P101: { type: "net", value: "MIRROR_P101" },
    MIRROR_P102: { type: "net", value: "MIRROR_P102" },
    MIRROR_P107: { type: "net", value: "MIRROR_P107" },
    MIRROR_P106: { type: "net", value: "MIRROR_P106" },
    MIRROR_DATA: { type: "net", value: "MIRROR_DATA" },
  },
  body: (p) => {
    const standard = `
        (module nice!nano (layer F.Cu) (tedit 5B307E4C)
        ${p.at /* parametric position */}
  
        ${"" /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer B.SilkS) ${
      p.ref_hide
    } (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer B.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
      
        ${"" /* illustration of the (possible) USB port overhang */}
        (fp_line (start -15.24 8.89) (end 15.24 8.89) (layer F.SilkS) (width 0.381))
        (fp_line (start 15.24 8.89) (end 15.24 -8.89) (layer F.SilkS) (width 0.381))
        (fp_line (start 15.24 -8.89) (end -15.24 -8.89) (layer F.SilkS) (width 0.381))
        (fp_line (start -15.24 -8.89) (end -17.78 -8.89) (layer F.SilkS) (width 0.381))
        (fp_line (start -17.78 -8.89) (end -17.78 8.89) (layer F.SilkS) (width 0.381))
        (fp_line (start -17.78 8.89) (end -15.24 8.89) (layer F.SilkS) (width 0.381))
        (fp_line (start -14.224 -3.556) (end -14.224 3.81) (layer Dwgs.User) (width 0.2))
        (fp_line (start -14.224 3.81) (end -19.304 3.81) (layer Dwgs.User) (width 0.2))
        (fp_line (start -19.304 3.81) (end -19.304 -3.556) (layer Dwgs.User) (width 0.2))
        (fp_line (start -19.304 -3.556) (end -14.224 -3.556) (layer Dwgs.User) (width 0.2))
        (fp_text user RAW (at -13.97 5.53719 90) (layer F.SilkS)
          (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        (fp_text user GND (at -11.5 5.53719 90) (layer F.SilkS)
          (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        (fp_text user 029 (at -1.2 5.53719 90) (layer F.SilkS)
          (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        (fp_text user 031 (at -3.8 5.53719 90) (layer F.SilkS)
          (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        (fp_text user RST (at -6.35 5.461 90) (layer F.SilkS)
          (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        (fp_text user VCC (at -8.89 5.461 90) (layer F.SilkS)
          (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        (fp_text user 002 (at 1.3 5.53719 90) (layer F.SilkS)
          (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        (fp_text user 115 (at 3.81 5.53719 90) (layer F.SilkS)
          (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        (fp_text user 113 (at 6.35 5.53719 90) (layer F.SilkS)
          (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        (fp_text user 010 (at 11.43 5.53719 90) (layer F.SilkS)
          (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        (fp_text user 111 (at 8.89 5.537191 90) (layer F.SilkS)
          (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        (fp_text user 100 (at 6.35 -5.537191 90) (layer F.SilkS)
          (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        (fp_text user 017 (at -3.81 -5.537191 90) (layer F.SilkS)
          (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        (fp_text user GND (at -6.35 -5.537191 90) (layer F.SilkS)
          (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        (fp_text user GND (at -8.89 -5.588 90) (layer F.SilkS)
          (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        (fp_text user 008 (at -11.43 -5.454667 90) (layer F.SilkS)
          (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        (fp_text user 006 (at -13.97 -5.473715 90) (layer F.SilkS)
          (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        (fp_text user 020 (at -1.27 -5.537191 90) (layer F.SilkS)
          (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        (fp_text user 022 (at 1.27 -5.537191 90) (layer F.SilkS)
          (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        (fp_text user 024 (at 3.81 -5.537191 90) (layer F.SilkS)
          (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        (fp_text user 104 (at 11.43 -5.537191 90) (layer F.SilkS)
          (effects (font (size 0.8 0.8) (thickness 0.15)))
        )
        (fp_text user nice!nano (at 13.462 -0.254 90) (layer F.SilkS)
          (effects (font (size 1.5 1.5) (thickness 0.3)))
        )
        `;
    function pins(def_neg, def_pos) {
      return !p.mirror
        ? `
          ${"" /* and now the actual pins */}
          (pad 1 thru_hole circle (at -13.97 ${def_pos}7.62 ${
            p.rot
          }) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.BATP.str
          })
          (pad 2 thru_hole circle (at -11.43 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.GND.str
          })
          (pad 3 thru_hole circle (at -8.89 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.RST.str
          })
          (pad 4 thru_hole circle (at -6.35 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.VCC.str
          })
          (pad 5 thru_hole circle (at -3.81 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.P031.str
          })
          (pad 6 thru_hole circle (at -1.27 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.P029.str
          })
          (pad 7 thru_hole circle (at 1.27 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.P002.str
          })
          (pad 8 thru_hole circle (at 3.81 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.P115.str
          })
          (pad 9 thru_hole circle (at 6.35 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.P113.str
          })
          (pad 10 thru_hole circle (at 8.89 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.P111.str
          })
          (pad 11 thru_hole circle (at 11.43 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.P010.str
          })
          (pad 12 thru_hole circle (at 13.97 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.P009.str
          })
          
          (pad 13 thru_hole rect (at -13.97 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.P006.str
          })
          (pad 14 thru_hole circle (at -11.43 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.P008.str
          })
          (pad 15 thru_hole circle (at -8.89 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.GND.str
          })
          (pad 16 thru_hole circle (at -6.35 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.GND.str
          })
          (pad 17 thru_hole circle (at -3.81 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.P017.str
          })
          (pad 18 thru_hole circle (at -1.27 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.P020.str
          })
          (pad 19 thru_hole circle (at 1.27 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.P022.str
          })
          (pad 20 thru_hole circle (at 3.81 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.P024.str
          })
          (pad 21 thru_hole circle (at 6.35 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.P100.str
          })
          (pad 22 thru_hole circle (at 8.89 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.P011.str
          })
          (pad 23 thru_hole circle (at 11.43 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.P104.str
          })
          (pad 24 thru_hole circle (at 13.97 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.P106.str
          })
          (pad 33 thru_hole circle (at 8.89 ${def_neg}0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.P107.str
          })
          (pad 32 thru_hole circle (at 8.89 ${def_neg}2.54) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.P102.str
          })
          (pad 31 thru_hole circle (at 8.89 ${def_neg}5.08) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.P101.str
          })
          `
        : `
          ${"" /* and now the actual pins */}
          (pad 1 thru_hole rect (at -13.97 ${def_pos}7.62 ${
            p.rot
          }) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.MIRROR_BATP.str
          })
          (pad 2 thru_hole circle (at -11.43 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.MIRROR_GND.str
          })
          (pad 3 thru_hole circle (at -8.89 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.MIRROR_RST.str
          })
          (pad 4 thru_hole circle (at -6.35 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.MIRROR_VCC.str
          })
          (pad 5 thru_hole circle (at -3.81 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.MIRROR_P031.str
          })
          (pad 6 thru_hole circle (at -1.27 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.MIRROR_P029.str
          })
          (pad 7 thru_hole circle (at 1.27 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.MIRROR_P002.str
          })
          (pad 8 thru_hole circle (at 3.81 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.MIRROR_P115.str
          })
          (pad 9 thru_hole circle (at 6.35 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.MIRROR_P113.str
          })
          (pad 10 thru_hole circle (at 8.89 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.MIRROR_P111.str
          })
          (pad 11 thru_hole circle (at 11.43 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.MIRROR_P010.str
          })
          (pad 12 thru_hole circle (at 13.97 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.MIRROR_P009.str
          })
          
          (pad 13 thru_hole circle (at -13.97 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.MIRROR_P006.str
          })
          (pad 14 thru_hole circle (at -11.43 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.MIRROR_P008.str
          })
          (pad 15 thru_hole circle (at -8.89 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.MIRROR_GND.str
          })
          (pad 16 thru_hole circle (at -6.35 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.MIRROR_GND.str
          })
          (pad 17 thru_hole circle (at -3.81 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.MIRROR_P017.str
          })
          (pad 18 thru_hole circle (at -1.27 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.MIRROR_P020.str
          })
          (pad 19 thru_hole circle (at 1.27 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.MIRROR_P022.str
          })
          (pad 20 thru_hole circle (at 3.81 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.MIRROR_P024.str
          })
          (pad 21 thru_hole circle (at 6.35 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.MIRROR_P100.str
          })
          (pad 22 thru_hole circle (at 8.89 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.MIRROR_P011.str
          })
          (pad 23 thru_hole circle (at 11.43 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.MIRROR_P104.str
          })
          (pad 24 thru_hole circle (at 13.97 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.MIRROR_P106.str
          }) 
          (pad 33 thru_hole circle (at 8.89 ${def_neg}0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.MIRROR_P101.str
          })
          (pad 32 thru_hole circle (at 8.89 ${def_neg}2.54) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.MIRROR_P102.str
          })
          (pad 31 thru_hole circle (at 8.89 ${def_neg}5.08) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${
            p.MIRROR_P107.str
          }
          `;
    }
    console.log(p);
    if (p.orientation == "down") {
      return `
          ${standard}
          ${pins("-", "")}
          )
          `;
    } else {
      return `
          ${standard}
          ${pins("", "-")}
          )
          `;
    }
  },
};
