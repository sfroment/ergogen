module.exports = {
  params: {
    designator: "B", // for Button
    side: "F",
    from: undefined,
    to: undefined,
  },
  body: (p) => `
    
    (module ResetSW (layer F.Cu) (tedit 5B9559E6)

        (descr "Low-profile SMD Tactile Switch, https://www.e-switch.com/product-catalog/tact/product-lines/tl3342-series-low-profile-smt-tact-switch")
        (tags "SPST Tactile Switch")

        ${p.at /* parametric position */}
        ${"" /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 2.55) (layer F.SilkS) ${p.ref_hide}
            (effects (font (size 1 1) (thickness 0.15)))
        )
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
        
        ${"" /* outline */}
        (fp_line (start -3 1.75) (end 3 1.75) (layer ${
          p.side
        }.SilkS) (width 0.15))
        (fp_line (start 3 1.75) (end 3 1.5) (layer ${
          p.side
        }.SilkS) (width 0.15))
        (fp_line (start -3 1.75) (end -3 1.5) (layer ${
          p.side
        }.SilkS) (width 0.15))
        (fp_line (start -3 -1.75) (end -3 -1.5) (layer ${
          p.side
        }.SilkS) (width 0.15))
        (fp_line (start -3 -1.75) (end 3 -1.75) (layer ${
          p.side
        }.SilkS) (width 0.15))
        (fp_line (start 3 -1.75) (end 3 -1.5) (layer ${
          p.side
        }.SilkS) (width 0.15))
        (fp_text user RESET (at 0 0) (layer ${p.side}.SilkS)
            (effects (font (size 1 1) (thickness 0.15)))
        )
        ${"" /* pins */}
        (pad 1 thru_hole circle (at 3.25 0) (size 2 2) (drill 1.3) (layers *.Cu *.Mask ${
          p.side
        }.SilkS) ${p.from.str})
        (pad 2 thru_hole circle (at -3.25 0) (size 2 2) (drill 1.3) (layers *.Cu *.Mask ${
          p.side
        }.SilkS) ${p.to.str})
    )
    
    `,
};
