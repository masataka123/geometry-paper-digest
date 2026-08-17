# Phase 5A: tag taxonomy proposal

**Status:** Approved and implemented in Phase 5.

## 1. Scope and audit method

This document is the human-readable specification and audit record for the approved taxonomy. Runtime data lives in `_data/tags.yml`; Phase 5 implementation details are summarized below.

The audit corpus is all **131** Markdown files currently under `_posts/` (2026-08-06 through 2026-08-17). For every file, the review considered the allowed repository fields—`title`, `title_ja`, `arxiv_primary_category`, `arxiv_categories`, `topic`, `summary`, `abstract_en` or `summary_en`, `abstract_ja`—and the Markdown body. The trial assignment was an editorial content review, not a title-keyword classifier. A tag was assigned only when the stored Abstract/Introduction account made the concept a principal object, result, or method. No external information was used.

`topic` remains the single primary-category axis. Tags are a separate, flat, many-to-many controlled vocabulary describing mathematical objects, themes, metric/analytic structures, and methods. arXiv categories and the existing topic IDs are therefore excluded from the tag namespace.

For the trial, each paper received zero to five tags. The counts below are a reproducible **proposal snapshot**, not metadata already attached to posts; borderline decisions should be reviewed again during Phase 5B migration.

## 2. Final proposed controlled vocabulary (37 tags)

The future `_data/tags.yml` entries should contain at least `id`, `name`, `name_ja`, `description`, `include`, `exclude`, and optionally `synonyms`. Synonyms are matching/editorial aids only and must never be saved as IDs.

| ID | English name | 日本語名 | Definition and inclusion rule | Exclusion / boundary rule | Trial papers |
|---|---|---|---|---|---:|
| `singularities` | Singularities | 特異点・特異性 | Singular spaces, pairs, or maps and their singularity classes, local invariants, resolutions, or degenerations are central. | Do not apply merely because a theorem allows a mildly singular object as a technical hypothesis. | 25 |
| `birational-geometry` | Birational geometry | 双有理幾何 | Birational models, maps, boundedness, contractions, flops, or birational invariants are central. | Ordinary rational maps or a single birational reduction in a proof are insufficient. | 11 |
| `minimal-model-program` | Minimal model program | 極小モデル・プログラム | MMP operations or its cone, contraction, abundance, or termination framework drive the result. | Do not infer from `birational-geometry`; a paper may receive either or both. | 6 |
| `positivity` | Positivity | 正値性 | Positivity of line/vector bundles, sheaves, divisors, currents, or cohomology classes (ample, nef, big, pseudo-effective, Nakano/Griffiths positivity) is a main question or criterion. | Positive curvature alone belongs to `curvature`; incidental nef/ample hypotheses do not qualify. | 32 |
| `positive-characteristic` | Positive characteristic | 正標数 | Positive characteristic, Frobenius methods, F-singularities, F-splitting, or reduction mod $p$ is a central setting or method. | A historical, comparative, or peripheral mention of positive characteristic is insufficient. | 2 |
| `vector-bundles-sheaves` | Vector bundles and sheaves | ベクトル束・層 | Bundles, coherent/reflexive sheaves, their moduli/invariants, or bundle-valued equations are principal objects. | Do not apply for an auxiliary tangent/canonical bundle mentioned only in notation. | 47 |
| `moduli` | Moduli and families | モジュライ・族 | Construction, geometry, compactification, boundedness, deformation, or variation of moduli spaces/families is central. | Parameter dependence alone and an isolated deformation argument are insufficient. | 15 |
| `stability` | Stability of bundles and sheaves | 束・層の安定性 | Slope, Gieseker, Higgs-sheaf, or related stability and Harder–Narasimhan structures are central. | K-stability is exclusively `k-stability`; do not add this tag solely because “stable” means a stable variety/family. | 18 |
| `k-stability` | K-stability | K安定性 | K-, Ding-, or valuative stability of polarized/log/Fano objects is a main notion or conclusion. | Keep distinct from bundle stability and from existence of canonical metrics. | 5 |
| `hermite-einstein-metrics` | Hermite–Einstein metrics | Hermite–Einstein計量 | Hermite–Einstein/Hermitian–Einstein metrics, HYM equations/flows, or the Kobayashi–Hitchin correspondence are central objects or conclusions. | Do not infer mechanically from `vector-bundles-sheaves`, `stability`, Higgs bundles, or a passing use of a compatible connection. | 7 |
| `kahler-einstein-metrics` | Kähler–Einstein metrics | ケーラー・アインシュタイン計量 | Existence, uniqueness, degeneration, deformation, or geometry of Kähler–Einstein metrics is central. | Other canonical Kähler metrics and generic Ricci bounds do not qualify. | 3 |
| `csck-extremal-kahler-metrics` | cscK and extremal Kähler metrics | cscK・extremal Kähler計量 | Constant-scalar-curvature Kähler, extremal Kähler, weighted cscK/extremal metrics, or their existence, limits, and moduli are central. | Kähler–Einstein, Kähler–Ricci soliton, dHYM, balanced, scalar-flat, or generic “canonical” metrics do not qualify merely by relation; never mechanically double-tag Kähler–Einstein papers. | 4 |
| `kahler-ricci-flow-solitons` | Kähler–Ricci flow and solitons | ケーラー・リッチ流・ソリトン | Include flow-only papers when evolution or long-time behavior is central; soliton-only papers for shrinking, steady, or expanding Kähler–Ricci solitons; and papers centrally relating flow limits to solitons. | Static Ricci geometry, a generic geometric flow, or a passing soliton example is insufficient. A paper need not discuss both flow and solitons. | 4 |
| `curvature` | Curvature geometry | 曲率幾何 | Riemannian/Hermitian curvature, Ricci/scalar/sectional curvature, or curvature connections are central hypotheses or conclusions. | Do not apply for routine curvature notation or positivity expressed entirely in algebraic terms. | 30 |
| `noncompact-kahler-geometry` | Noncompact Kähler geometry | 非コンパクトKähler幾何 | Completeness, geometry at infinity, volume growth, exhaustion functions, splitting/structure theory, or function theory on a complete noncompact Kähler manifold is essential to the main hypotheses or conclusions. | An open subset of a compact manifold, a local noncompact model, or a merely noncompact universal cover is insufficient; do not infer from `curvature` or `stein-geometry`. | 2 |
| `metric-limits` | Metric limits and Gromov–Hausdorff geometry | 距離空間極限・Gromov–Hausdorff幾何 | Gromov–Hausdorff/measured convergence, Ricci limit spaces, metric degeneration or compactness, tangent cones, or Cheeger–Colding-type theory is a central structure. | Analytic or smooth convergence alone, or purely algebraic degeneration without a metric-limit theory, is insufficient; assess independently from `curvature`. | 2 |
| `fano-varieties` | Fano varieties | ファノ多様体 | Fano, weak Fano, log Fano, or del Pezzo geometry is a principal object. | An anti-canonical bundle appearing only incidentally is insufficient. | 14 |
| `calabi-yau-geometry` | Calabi–Yau geometry | カラビ・ヤウ幾何 | Calabi–Yau varieties/manifolds, pairs, fibrations, or their defining trivial-canonical geometry are central. | Do not apply to any Ricci-flat argument without a Calabi–Yau object; hyperkähler has its own tag. | 2 |
| `hyperkahler-geometry` | Hyperkähler geometry | ハイパーケーラー幾何 | Hyperkähler/irreducible holomorphic symplectic manifolds, fibrations, sheaves, or Torelli phenomena are central. | Do not collapse into `calabi-yau-geometry` despite the relationship. | 3 |
| `hodge-theory` | Hodge theory | ホッジ理論 | Hodge structures, variations, period/Torelli maps, Hodge bundles, or Hodge-theoretic invariants are central. | A cohomology group carrying an unused Hodge decomposition is insufficient. | 8 |
| `higgs-nonabelian-hodge` | Higgs bundles and nonabelian Hodge theory | ヒッグス束・非可換ホッジ理論 | Higgs bundles/pairs, Hitchin systems, harmonic bundles, or nonabelian Hodge correspondences are central. | Do not apply to all vector-bundle stability papers; ordinary Hodge theory alone uses `hodge-theory`. | 12 |
| `foliations` | Foliations | 葉層構造 | Algebraic, holomorphic, or transverse foliations and their singularities/MMP/curvature are principal objects. | A foliation used only as an auxiliary distribution is insufficient. | 8 |
| `pluripotential-theory` | Pluripotential theory | 多重ポテンシャル論 | Plurisubharmonic/quasi-psh potentials, non-pluripolar products, complex Monge–Ampère/Hessian equations, or weak positive-current methods are central objects or frameworks. | Do not apply merely because a paper is complex analysis, has topic `several-complex-variables`, or uses Bergman, Skoda, Oka, pseudoconvexity, or an auxiliary psh estimate. | 3 |
| `monge-ampere-equations` | Complex Monge–Ampère equations | 複素Monge–Ampère方程式 | Existence, uniqueness, regularity, degeneracy, or Monge–Ampère measures for complex Monge–Ampère equations—or genuinely allied complex Hessian equations—is central, including when solving the equation drives a geometric construction. | A background Yau equation, pluripotential methods without a central Monge–Ampère/Hessian equation, or an auxiliary determinant expression is insufficient. | 2 |
| `l2-methods` | L² methods | L²法 | Hörmander-type $L^2$ estimates, $L^2$ solutions of $\bar\partial$, Ohsawa–Takegoshi-type extension, or $L^2$ Hodge theory are principal proof methods. | The occurrence of an $L^2$ norm or a routine integrability observation is insufficient. | 4 |
| `multiplier-ideals-extension` | Multiplier ideals and extension theorems | 乗数イデアル・拡張定理 | Multiplier/adjoint ideals, Nadel-type techniques, Ohsawa–Takegoshi extension, extension of pluricanonical sections, or Siu/Takayama/Păun-type extension is a main result or principal proof method. | A background mention, an $L^2$ estimate without a central ideal/extension problem, or a quoted vanishing theorem is insufficient; do not infer from `l2-methods`. | 3 |
| `complex-analytic-spaces` | Complex analytic spaces | 複素解析空間 | Complex/normal/singular analytic spaces, modifications, exceptional sets, or coherent analytic sheaves are central objects. | Analytic techniques on a smooth complex manifold are insufficient; assess independently from `singularities`. | 5 |
| `stein-geometry` | Stein geometry and the Levi problem | Stein幾何・Levi問題 | Stein manifolds/spaces, the Levi problem, holomorphic convexity, pseudoconvex exhaustion, weakly 1-complete or $q$-complete spaces, Remmert reduction, exceptional sets in a 1-convex setting, or Steinness criteria are central. | Do not infer from `complex-analytic-spaces`, an auxiliary Stein open set, or a Stein assumption used only as Oka-theory background. | 2 |
| `oka-theory` | Oka theory | Oka理論 | Oka manifolds/principles, ellipticity or subellipticity, holomorphic flexibility, or Oka-type approximation/interpolation are central. | A historical mention of Stein/Oka theory or generic holomorphic approximation not framed by Oka flexibility is insufficient. | 2 |
| `hyperbolicity` | Hyperbolicity | 双曲性 | Kobayashi/Brody/Kähler hyperbolicity, hyperbolicity indices, or algebraic/pseudo-hyperbolicity is central. | Negative curvature or a hyperbolic-looking uniformization alone is insufficient. | 5 |
| `fundamental-groups` | Fundamental groups | 基本群 | Fundamental groups, their algebraic/analytic structure, virtual properties, simple connectedness, or Shafarevich-type constructions are central. | Coverings used only as tools and uniformization conclusions not studying the fundamental group itself are insufficient. | 6 |
| `uniformization` | Uniformization | 一意化 | A ball/locally symmetric quotient characterization, uniformization theorem, or geometric classification by a universal model is central. | Fundamental-group restrictions or covering-space arguments alone are insufficient. | 5 |
| `chern-classes` | Chern classes and Chern numbers | Chern類・Chern数 | Chern classes/numbers, first or second Chern classes, Miyaoka–Yau-type Chern-number inequalities, orbifold/Q-Chern classes, or a geometric characterization by Chern classes are central invariants or conclusions. | Routine Chern notation, a single standard occurrence, or Riemann–Roch bookkeeping is insufficient. | 7 |
| `algebraic-cycles-enumerative` | Algebraic cycles and enumerative geometry | 代数的サイクル・数え上げ幾何 | Chow/cycle groups, regulators, enumerative invariants, or counting problems are central. | Intersection numbers used only as numerical hypotheses do not qualify. | 3 |
| `symplectic-contact-geometry` | Symplectic and contact geometry | シンプレクティック・接触幾何 | Symplectic/almost-Kähler structures, holomorphic symplectic moduli, or contact manifolds are principal objects. | Do not infer from every Kähler form; hyperkähler papers get this tag only when the symplectic aspect itself is central. | 7 |
| `cr-geometry` | CR geometry | CR幾何 | CR structures, invariants, embeddings, normal forms, or pseudohermitian geometry are central. | A boundary CR structure mentioned only to formulate an analytic domain is insufficient. | 3 |
| `toric-geometry` | Toric geometry | トーリック幾何 | Toric varieties/manifolds, polytopes, fans, or torus-equivariant structures drive the result. | A torus action used only for symmetry reduction is insufficient. | 8 |

### Why the vocabulary is flat

The labels naturally fall into objects (`fano-varieties`), themes (`positivity`), metric/analytic structures (`kahler-einstein-metrics`), and methods/frameworks (`minimal-model-program`). These are editorial groupings, not parent tags. No parent is automatically added: for example, `k-stability`, `fano-varieties`, and `kahler-einstein-metrics` remain mathematically and search-wise distinct, and none implies another.

## 3. Synonym and spelling policy

1. Store only the stable ASCII ID in front matter. Display names, capitalization, accents, and translations come from the central taxonomy.
2. Normalize spelling variants to one ID: `KE metric`, `Kähler Einstein`, and `Kähler–Einstein metric` map to `kahler-einstein-metrics`; `cscK`, `constant scalar curvature Kähler`, and weighted cscK/extremal variants map to `csck-extremal-kahler-metrics` when central; `Kähler–Ricci shrinker` and shrinking/steady/expanding Kähler–Ricci soliton variants map to `kahler-ricci-flow-solitons`; `K-stable` and `K stability` map to `k-stability`; `Calabi Yau` maps to `calabi-yau-geometry`; `hyper-Kähler` and `irreducible holomorphic symplectic` are candidates for `hyperkahler-geometry` when the mathematical meaning matches.
3. Synonyms are not automatic evidence. They help editors find passages, but inclusion still requires the Abstract/Introduction account to make the concept central.
4. Related notions are not aliases. In particular, Fano/K-stability/Kähler–Einstein, Hodge/nonabelian Hodge, and birational geometry/MMP remain separate. Miyaoka–Yau-type Chern-number inequalities belong to `chern-classes` when central.
5. Renaming an ID is a migration requiring redirects/compatibility review; changing a display label does not change article metadata.

## 4. Trial tagging results

### Coverage and distribution

All 131 papers were individually reconsidered after tightening the four boundaries above. **123/131 (93.9%)** had at least one clearly supported proposed tag; **8/131 (6.1%)** were conservatively left untagged. Untagged is valid and preferable to a speculative label.

| Tags on one paper | Papers | Share |
|---:|---:|---:|
| 0 | 8 | 6.1% |
| 1 | 22 | 16.8% |
| 2 | 40 | 30.5% |
| 3 | 34 | 26.0% |
| 4 | 14 | 10.7% |
| 5 | 13 | 9.9% |

The mean is **2.48 tags/paper** (325 trial assignments / 131 papers), and no paper exceeds the proposed five-tag editorial ceiling.

### Frequency diagnostics

- **Total tags:** 37.
- **Zero-paper tags:** none.
- **One-paper tags:** none.
- **Lowest frequency:** `calabi-yau-geometry`, `metric-limits`, `monge-ampere-equations`, `noncompact-kahler-geometry`, `oka-theory`, `positive-characteristic`, and `stein-geometry` have 2 each.
- **Maximum frequency:** `vector-bundles-sheaves`, 47/131 (35.9%). No tag reaches half of the corpus.

The complete recalculated frequency sequence is: `vector-bundles-sheaves` 47; `positivity` 32; `curvature` 30; `singularities` 25; `stability` 18; `moduli` 15; `fano-varieties` 14; `higgs-nonabelian-hodge` 12; `birational-geometry` 11; `foliations`, `hodge-theory`, and `toric-geometry` 8 each; `chern-classes`, `hermite-einstein-metrics`, and `symplectic-contact-geometry` 7 each; `fundamental-groups` and `minimal-model-program` 6 each; `complex-analytic-spaces`, `hyperbolicity`, `k-stability`, and `uniformization` 5 each; `csck-extremal-kahler-metrics`, `kahler-ricci-flow-solitons`, and `l2-methods` 4 each; `algebraic-cycles-enumerative`, `cr-geometry`, `hyperkahler-geometry`, `kahler-einstein-metrics`, `multiplier-ideals-extension`, and `pluripotential-theory` 3 each; and `calabi-yau-geometry`, `metric-limits`, `monge-ampere-equations`, `noncompact-kahler-geometry`, `oka-theory`, `positive-characteristic`, and `stein-geometry` 2 each.

#### Future-facing zero-frequency policy

A tag may remain in the controlled vocabulary even at frequency zero when it is standard in the field, has a reasonable prospect of recurring in future articles, and has a precise inclusion/exclusion boundary. Zero frequency alone is not a deletion criterion. Conversely, DAILY/BACKLOG runs must never create a tag ad hoc: taxonomy additions and removals always require a separate review with corpus-frequency and overlap analysis.

### Co-occurrence and overlap

No pair has identical or near-identical paper sets. The largest observed Jaccard overlaps in the revised trial are:

| Pair | Intersection | Jaccard | Decision |
|---|---:|---:|---|
| `l2-methods` + `multiplier-ideals-extension` | 3 | 0.750 | Keep separate: the current ideal/extension papers use $L^2$ methods, but the definitions do not imply this coincidence in future corpora. |
| `pluripotential-theory` + `monge-ampere-equations` | 2 | 0.667 | Keep separate: equation-focused and general pluripotential searches are distinct; the third pluripotential paper is already independent. |
| `vector-bundles-sheaves` + `stability` | 14 | 0.275 | Keep separate: stability is a meaningful narrower search axis. |
| `stability` + `higgs-nonabelian-hodge` | 6 | 0.250 | Keep separate: neither concept implies the other. |
| `kahler-einstein-metrics` + `noncompact-kahler-geometry` | 1 | 0.250 | Keep separate: metric type and noncompact setting are independent. |
| `hyperkahler-geometry` + `calabi-yau-geometry` | 1 | 0.250 | Keep separate despite the small current sets because the objects are mathematically distinct. |
| `singularities` + `vector-bundles-sheaves` | 13 | 0.220 | Keep separate: reflexive sheaves explain some co-occurrence. |
| `birational-geometry` + `minimal-model-program` | 3 | 0.214 | Keep separate: MMP is a specific framework. |
| `kahler-ricci-flow-solitons` + `metric-limits` | 1 | 0.200 | Keep separate: flow/soliton theory does not imply a metric-limit question. |
| `kahler-ricci-flow-solitons` + `noncompact-kahler-geometry` | 1 | 0.200 | Keep separate: compact flows and non-flowing noncompact metrics occur independently. |

### Requested overlap audit for the five additions

- `stein-geometry` versus `complex-analytic-spaces`: intersection 0, Jaccard 0; versus `oka-theory`: intersection 0, Jaccard 0. The boundaries prevent Stein assumptions or analytic-space language from creating automatic tags.
- `multiplier-ideals-extension` versus `l2-methods`: intersection 3, Jaccard 0.750; versus `positivity`: intersection 2, Jaccard 0.061. The current $L^2$ overlap is strong but not definitional: an ideal/extension theorem and an $L^2$ method must each be independently central.
- `monge-ampere-equations` versus `pluripotential-theory`: intersection 2, Jaccard 0.667; versus `kahler-einstein-metrics`: intersection 0, Jaccard 0. Equation-focused tagging is not inferred from a KE background equation.
- `noncompact-kahler-geometry` versus `curvature`: intersection 2, Jaccard 0.067; versus `stein-geometry`: intersection 0, Jaccard 0. Noncompactness/completeness, curvature, and Steinness remain independent axes.
- `metric-limits` versus `curvature`: intersection 2, Jaccard 0.067; versus `kahler-einstein-metrics`: intersection 0, Jaccard 0. Metric-limit theory is not inferred from curvature or KE terminology.

The revised trial removed the earlier mechanical co-assignment of generic `stability` to all five K-stability papers. `stability` now means bundle/sheaf stability only.

### Conclusions on the four reviewed boundaries

1. **Canonical metrics:** replace the catch-all with `csck-extremal-kahler-metrics` (4). It covers cscK/extremal/weighted variants, excludes dHYM and balanced metrics, and does not follow automatically from Kähler–Einstein or soliton tags.
2. **Flow and solitons:** rename to `kahler-ricci-flow-solitons` (4). The current set contains a flow-only paper, soliton-only papers, and a paper relating flow limits to shrinkers. The definition also admits steady/expanding solitons if future Abstract/Introductions make them central.
3. **Complex analysis:** narrow to `pluripotential-theory` (3). This prevents duplication of the `several-complex-variables` topic and excludes papers that are merely in complex analysis.
4. **Fundamental groups/uniformization:** split into `fundamental-groups` (6) and `uniformization` (5). Their revised trial sets have intersection 0, so they are independent search axes rather than a low-frequency or near-identical split.

## 5. Selection policy for future DAILY/BACKLOG articles

After the article account has been written and verified:

1. Read the Abstract and Introduction account, not only the title; never infer tags from an author.
2. Choose zero to five IDs only from `_data/tags.yml`. Zero is valid when evidence is weak.
3. Require explicit support that the concept is a principal object, question, hypothesis, conclusion, or named method. A passing mention or routine tool is insufficient.
4. Apply each tag's inclusion and exclusion rules independently. Never derive a tag from `topic`, an arXiv category, or another tag.
5. Record only canonical IDs; synonyms are discovery aids, not stored values.
6. Do not create a new ID during a paper-addition run. Propose taxonomy additions in a separate reviewed change, with corpus frequency and overlap analysis.
7. Validate unknown IDs, duplicates, list shape, and a maximum of five. Save and display IDs in the editorial order defined by `_data/tags.yml`; runtime resolution stabilizes display in that order. Baseline identity compares the tag set, so reordering an unchanged YAML list alone is not a semantic migration.
8. In review, cite the relevant Abstract/Introduction passage internally when a choice is non-obvious. If reviewers cannot identify support, remove the tag.

## 6. Recommended future front matter

Use an explicit YAML list of canonical IDs:

```yaml
tags:
  - k-stability
  - kahler-einstein-metrics
  - fano-varieties
```

`tags` is required: every post explicitly contains `tags: [...]`, and the 8 baseline papers without clear evidence contain `tags: []`. The parser and validators reject omission, scalar values, unknown or duplicate IDs, and lists longer than five.

## 7. Phase 5B implementation record

Phase 5B implements `_data/tags.yml`, required `PaperMetadata.tags`, the audited 131-post migration, tag pages and links, combined filters, Pagefind metadata, authoring rules, and CI validation. `tests/fixtures/phase5-tags-baseline.json` protects the approved tag sets of the migration corpus while allowing later valid papers to be added without changing the fixture or freezing global counts.

## 8. Final operational decisions

- Retain `calabi-yau-geometry` despite its current frequency of two.
- Keep `vector-bundles-sheaves` separate from `stability`, and keep topic and tag as independent axes.
- The four boundary decisions above and the 37-tag vocabulary form the Phase 5 migration baseline.
- All 131 baseline posts carry explicit tags, including `tags: []` where no tag is justified.
- DAILY/BACKLOG select only controlled IDs supported by the Abstract/Introduction, use zero to five tags, never create a tag ad hoc, and write `tags: []` when uncertain.
- This 37-tag vocabulary is the implemented Phase 5 taxonomy. Later taxonomy changes require separate review and compatibility planning for canonical-ID URLs.

## 9. Phase boundary confirmation

Phase 5 changes only tag taxonomy, metadata, presentation, filtering, search metadata, validation, and authoring workflow. Phase 0–4 compatibility remains protected; Astro production cutover and Jekyll retirement remain outside Phase 5.
