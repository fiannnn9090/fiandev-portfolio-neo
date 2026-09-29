---
name: International Neo-Modernist Architecture
colors:
  surface: '#fbf9f3'
  surface-dim: '#dcdad4'
  surface-bright: '#fbf9f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ed'
  surface-container: '#f0eee8'
  surface-container-high: '#eae8e2'
  surface-container-highest: '#e4e2dc'
  on-surface: '#1b1c18'
  on-surface-variant: '#5b403c'
  inverse-surface: '#30312d'
  inverse-on-surface: '#f3f1eb'
  outline: '#8f706b'
  outline-variant: '#e4beb8'
  surface-tint: '#b81f17'
  primary: '#b51d15'
  on-primary: '#ffffff'
  primary-container: '#d9382b'
  on-primary-container: '#fffcff'
  inverse-primary: '#ffb4a9'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#00638b'
  on-tertiary: '#ffffff'
  tertiary-container: '#007dae'
  on-tertiary-container: '#fdfdff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4a9'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#930003'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#c6e7ff'
  tertiary-fixed-dim: '#83cfff'
  on-tertiary-fixed: '#001e2e'
  on-tertiary-fixed-variant: '#004c6c'
  background: '#fbf9f3'
  on-background: '#1b1c18'
  surface-variant: '#e4e2dc'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 5.5rem
    fontWeight: '700'
    lineHeight: 5.5rem
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 3.25rem
    fontWeight: '700'
    lineHeight: 3.5rem
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 3.25rem
    fontWeight: '600'
    lineHeight: 3.5rem
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: 2.5rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 1.375rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.6rem
    letterSpacing: 0em
  body-sm:
    fontFamily: Geist
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.4rem
    letterSpacing: 0em
  label-code:
    fontFamily: Geist
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: 1.2rem
    letterSpacing: 0.05em
  index-numeral:
    fontFamily: Space Grotesk
    fontSize: 6rem
    fontWeight: '400'
    lineHeight: 5rem
    letterSpacing: -0.05em
  index-numeral-mobile:
    fontFamily: Space Grotesk
    fontSize: 3.5rem
    fontWeight: '400'
    lineHeight: 3rem
    letterSpacing: -0.04em
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1.25rem
  margin-desktop: 3.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style

The design system embodies the rigor of the Swiss International Typographic Style fused with uncompromising contemporary software craftsmanship. Designed for an informatics practitioner and systems developer, it eschews decorative skeuomorphism, soft dropshadows, and nostalgic pastiche in favor of structural clarity, asymmetric tension, modular grids, and relentless mathematical precision.

The visual language draws inspiration from Josef Müller-Brockmann, Massimo Vignelli, and architectural drafting conventions. Every layout feels like an engineered document: information is structured through razor-sharp hair rules, deliberate proportion, oversized indexing numerals, and an austere typographical hierarchy. The experience conveys intellect, technical mastery, and typographic authority.

## Colors

Color is applied with disciplined restraint. The substrate is warm editorial stock rather than clinical synthetic white, grounding the digital interface in the physical legacy of European typographic print.

- **Primary Accent (`#D9382B`):** Vermilion. Derived from classic Bauhaus and International Style typographic posters. Used strictly for focal signals: critical status indicators, index prefixes, active tab markers, and singular rule accents. It occupies no more than 5–8% of any viewport.
- **Deep Ink (`#111111`):** Structural black. Applied to dominant display typography, solid interactive blocks, and structural dividing rules.
- **Paper Neutral (`#F2F0EA`):** The primary canvas substrate. Simulates unbleached archival paper stock.
- **Muted Surfaces (`#EAE6DC` / `#E3DFD3`):** Secondary container backgrounds, data tables, code block substrates, and hover state fills.
- **Secondary Ink (`#6F6C65`):** Mid-tone warm gray for metadata, captions, secondary technical annotations, and subtle coordinate markers.
- **Hairline Rule (`#D1CDC4`):** The 1px structural framing color used to construct all architectural modules and grid borders.

## Typography

The typography implements a strict three-tier hierarchy:

1. **Display & Architectural Headers (`Space Grotesk`):** Built with geometric precision and tight character tracking. Headings demand immediate visual weight, often set uppercase or strictly sentence-cased with negative letter-spacing to emphasize planar geometry.
2. **Body Text (`Geist`):** Engineered for sustained technical legibility. Its neutral, low-friction letterforms allow dense documentation, project rationale, and technical prose to breathe naturally on the warm paper canvas.
3. **Metadata, Indexing, and System Readouts:** Employs uppercase strings with widened tracking (`0.05em`), paired with massive, unweighted tabular numerals (`index-numeral`) used to demarcate modular sectors (e.g., `01 // INDEX`, `02 // SPECIFICATION`).

## Layout & Spacing

The layout is governed by a 12-column modular grid rooted in Swiss structural ratios. Structural boundary lines are explicitly rendered: sections, column divides, and header bands are partitioned by visible 1px solid rules (`#D1CDC4` for structural boundaries, `#111111` for high-priority boundaries).

- **Desktop (1024px+):** 12 columns with 2.5rem gutters and 3.5rem outer canvas margins. Elements align along an asymmetrical vertical rhythm: index numbers occupy left anchor columns (2–3 cols) while narrative and technical content flow across the remaining 9–10 columns.
- **Tablet (768px - 1023px):** 8 columns with 1.75rem gutters and 2rem margins. Secondary metadata stacks beneath primary display headings.
- **Mobile (< 768px):** 4 columns with 1.5rem gutters and 1.25rem outer margins. All grid borders collapse into full-width stacking rows separated by horizontal rules.

## Elevation & Depth

This design system is strictly zero-elevation. It rejects dropshadows, skeuomorphic depth, blur effects, and floating z-index illusions.

Spatial hierarchy and focus are conveyed entirely through:
- **Hairline Framing:** Precise 1px borders dissecting space into architectural cells.
- **Tonal Inversion:** High-priority items or hovered states flip immediately to solid `#111111` ground with `#F2F0EA` text.
- **Color Accent Punctuation:** Vermilion (`#D9382B`) acts as a selective planar highlighter or micro-dot anchor.
- **Z-Axis Flatness:** Overlapping is avoided; information is tiled systematically in accordance with strict planar modularity.

## Shapes

All UI elements adhere to a radical `0px` radius. Radii have no place in a constructivist, Swiss-inspired system. Buttons, badge containers, system modals, interactive chips, and code panels are strictly orthogonal.

Edges are sharp, pure, and aligned precisely to the grid boundary coordinates.

## Components

### Buttons
- **Primary:** Solid `#111111` fill, `#F2F0EA` text, 0px border radius, 1px solid `#111111` outline. On hover, background shifts instantly to `#D9382B` with zero transition lag or a crisp 100ms step-transition.
- **Secondary / Ghost:** Transparent background, 1px solid `#111111` border, `#111111` text. On hover, background inverts to `#111111` and text to `#F2F0EA`.
- **Text Link Button:** Monospaced label, prefixed with a rightward structural glyph (`->`), underlaid with a 1px solid underline with 4px offset.

### Chips & Badges
- **Technical Tag:** Background `#EAE6DC`, border 1px solid `#D1CDC4`, text `#111111`, `label-code` typography, uppercase, padded `0.25rem 0.5rem`.
- **Status Indicator:** Transparent container with a 6px x 6px solid square glyph in `#D9382B` (active) or `#6F6C65` (dormant), followed by uppercase metadata.

### Lists & Data Grids
- **Architectural List Rows:** Separated by 1px solid `#D1CDC4` top and bottom lines. Left column features tabular index numbers (`01`, `02`) in `#6F6C65`, transitioning to `#D9382B` on cursor proximity. Right column features primary label in `headline-sm` with Geist monospace technical metadata right-aligned.
- **Hover State:** Row background transitions to `#EAE6DC` across the full grid width.

### Checkboxes & Radios
- **Checkbox:** Square 16px x 16px container, 1px solid `#111111`, no rounded corners. Checked state is marked with a solid 10px x 10px inner `#111111` or `#D9382B` square block.
- **Radio Button:** 16px x 16px diamond or square rotated 45 degrees, 1px solid `#111111`. Checked state features a centered filled square.

### Input Fields
- **Text Input:** Flat background (`#F2F0EA` or `#EAE6DC`), 1px solid `#111111` bottom rule or full 1px border. Placeholder styled with `#6F6C65`. Focused state changes border to 2px solid `#111111` with a miniature vermilion dot (`#D9382B`) in the upper-right corner.

### Cards & Project Showcases
- **Structural Card:** Enclosed in a 1px solid `#D1CDC4` frame with a top technical header bar containing project ID, year, and repository metadata separated by hairline vertical slashes (`/`). Zero drop shadow. Imagery is displayed unfiltered, bordered by 1px rules, with technical captions positioned directly below.