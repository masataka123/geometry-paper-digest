---
layout: paper
title: Jordan-Hölder theory for complementary polyhedra and moduli of parahoric Higgs torsors
title_ja: 補多面体のJordan–Hölder理論とparahoric Higgs torsor
authors: Emanuel Roth
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We extend Behrend's theory of complementary polyhedra to include Jordan-H\"older theory by introducing the notion of Jordan-H\"older facets. As a consequence, we can construct Jordan-H\"older parabolic subgroup schemes for reductive group schemes over a smooth projective curve. We use these results to provide a uniform approach to describing Jordan-H\"older filtrations and S-equivalence of moduli stacks of semistable bundles, including vector bundles, principal bundles, parabolic bundles, parahoric torsors, and parahoric Higgs torsors, following Zhang. We explicitly give a description of Jordan-H\"older filtrations and S-equivalence in the semistable locus of parahoric torsors and parahoric Higgs torsors, coming from their good moduli spaces, as constructed by Alper-Halpern-Leistner-Heinloth and R\'ega. This application uses the Rees construction, as given by Heinloth, to identify filtrations of moduli stacks of parahoric torsors with reductions of parahoric torsors to parabolic
  subgroups, inducing Jordan-H\"older stratifications of the moduli stacks.
topic: algebraic-geometry
tags:
- stability
- moduli
- higgs-nonabelian-hodge
- vector-bundles-sheaves
arxiv_id: 2609.17231v4
arxiv_url: https://arxiv.org/abs/2609.17231
arxiv_submitted: '2026-09-15'
arxiv_updated: '2026-10-30'
summary: Behrendの補多面体にJordan–Hölder面を導入し、半安定束の多重安定な随伴次数を統一的に扱う。parahoric torsorとHiggs torsorで還元の存在・次数部分の一意性を得て、good moduli空間の同値関係と結びつける。
abstract_en: We extend Behrend's theory of complementary polyhedra to include Jordan-H\"older theory by introducing the notion of Jordan-H\"older facets. As a consequence, we can construct Jordan-H\"older parabolic subgroup schemes for reductive group schemes over a smooth projective curve. We use these results to provide a uniform approach to describing Jordan-H\"older filtrations and S-equivalence of moduli stacks of semistable bundles, including vector bundles, principal bundles, parabolic bundles, parahoric torsors, and parahoric Higgs torsors, following Zhang. We explicitly give a description of Jordan-H\"older filtrations and S-equivalence in the semistable locus of parahoric torsors and parahoric Higgs torsors, coming from their good moduli spaces, as constructed by Alper-Halpern-Leistner-Heinloth and R\'ega. This application uses the Rees construction, as given by Heinloth, to identify filtrations of moduli stacks of parahoric torsors with reductions of parahoric torsors to parabolic
  subgroups, inducing Jordan-H\"older stratifications of the moduli stacks.
summary_en: ''
abstract_ja: 補多面体にJordan–Hölder理論を組み込み、曲線上の簡約群スキームや各種の束の半安定性へ適用する。Jordan–Hölder面は存在し、随伴次数またはLevi部分の意味で一意となる。これをparahoric torsorおよびparahoric Higgs torsorへ移して還元とS同値を記述し、good moduli空間のquasi-S同値との一致や局所閉な層別化を得る。
abstract_source_url: https://arxiv.org/abs/2609.17231
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.17231v4](https://arxiv.org/abs/2609.17231)
- **著者:** Emanuel Roth
- **初回投稿日:** 2026-09-15
- **最終更新日:** 2026-10-30
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

半安定ベクトル束のJordan–Hölderフィルトレーションは一意とは限らないが、その安定な商の直和は同型を除いて決まる。この構造がS同値とモジュライ空間を結ぶ。本論文は同じ仕組みを、より一般のparahoric torsorやHiggs torsorで統一的に扱う。

道具は、根系に付随し束の安定性を記録するBehrendの補多面体である。従来のHarder–Narasimhan理論に対応する特別な面に加え、Jordan–Hölder面を導入して、半安定対象の多重安定な極限を取り出す。

その結果を束のモジュライへ移し、還元から定まるS同値がgood moduli空間の同値関係と一致することを示す。単に古典的ベクトル束の定理を再証明するだけでなく、parahoricの二つの場合を新しい適用として位置づける。

## 背景と問題設定

ベクトル束についてのTheorem 1.1はSeshadriの既知結果として引用されている。本論文の新しい理論は、簡約群スキームやparahoric群に対する放物部分群への還元を、フィルトレーションの代わりとして扱う。

補多面体の凸包 $F$ では、原点が内部・相対内部・凸包そのもののどこに属するかが、安定・多重安定・半安定に対応する。序論の対応は

$$
\operatorname{int}(F)\subset\operatorname{relint}(F)\subset F,
\qquad\text{stable}\Rightarrow\text{polystable}\Rightarrow\text{semistable}
$$

という形で示される。

## 主結果

### Jordan–Hölder面の存在と次数部分の一意性

補多面体にJordan–Hölder面が存在し、随伴次数またはLevi部分の意味で一意となる（Theorems 2.5.6, 2.5.7）。Introductionでは概略として次のように述べられている。面そのものを唯一に定めるのではなく、その面が与える次数部分を同型の範囲で固定することが、古典的Jordan–Hölder理論に対応する。

### parahoric torsorの還元（Theorem 5.2.8の序論版）

Heinlothの意味で許容される安定性パラメータ $\chi$ と、$L\_{\det,\chi}$-半安定なparahoric $G$-torsor $\xi$ を考える。放物部分群 $G\_P$ への還元 $s:X\to\xi/G\_P$ が存在し、還元が許容的で、そのLevi商 $L\_P$ への拡大 $(s^\ast \xi)(L\_P)$ は誘導されたパラメータで安定となる。

許容性は、関連するすべての頂点 $\mathfrak v$ について

$$
n^\chi(\operatorname{Ad}(s^\ast \xi),\mathfrak v)=0
$$

という次数条件として述べられる。こうした還元が与えるLevi拡大は同型を除いて一致する。Introductionは定理の要約版を掲げており、許容パラメータなどの完全な定義は参照先に委ねている。

### good moduli空間のS同値（Theorem 5.2.11の序論版）

標数0の代数閉体と許容パラメータのもとで、上の還元から得られるJordan–Hölder層別化は局所閉な部分スタックからなる。また、半安定部分のgood moduli空間が定めるquasi-S同値は、還元のLevi拡大から定めるS同値に一致する。

従って、幾何学的な還元で得る次数対象が、モジュライ空間で同じ点になる対象を記述する。

### parahoric Higgs torsorへの拡張

序論は、Theorems 5.3.6, 5.3.9で対応する還元理論とモジュライの同値関係をparahoric Higgs torsorへ拡張すると説明する。Higgs場を伴う場合の全仮定・定式化を序論だけから補わず、ここでは適用の範囲として記す。

## 証明の見取り図

補多面体の組合せ論からJordan–Hölder面を構成し、曲線上の簡約群スキームへ移す。束のモジュライ問題を共通の枠組みに入れ、最後に個々のtorsorへ適用する。

Rees構成により、$\Theta=[\mathbb A^1/\mathbb G\_m]$ からモジュライスタックへの写像としてのフィルトレーションと、束の放物還元を対応させる。これにより、抽象的なgood moduli空間の退化・同値関係と、具体的なJordan–Hölder次数対象を比較する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2609.17231)
- **Introduction:** [PDF](https://arxiv.org/pdf/2609.17231v4) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Abridged Theorems 5.2.8, 5.2.11; Theorems 2.5.6, 2.5.7, 5.3.6, 5.3.9への言及。Theorem 1.1はSeshadriの既知結果。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2609.17231v4
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
