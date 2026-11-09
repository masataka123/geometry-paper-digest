---
layout: paper
title: 'Pluripotential theory and special holonomy: Hodge decompositions and $\partial\bar\partial$ lemmata'
title_ja: 特殊ホロノミーにおけるHodge分解とddφコホモロジー
authors: Tommaso Pacini, Alberto Raffero
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: 'Let $M$ be a compact torsion-free $G_2$ 7-manifold or Calabi-Yau 6-manifold. We prove Hodge decomposition theorems for the $dd^\phi$ operators, introduced by Harvey and Lawson, which generalize the $i\partial\bar\partial$ operator used in classical pluripotential theory. We then obtain analogues of the $\partial\bar\partial$ lemma in this context. We formalize this by defining cohomology spaces analogous to Bott-Chern cohomology and we relate them to harmonic forms on $M$. In the $G_2$ case we provide a geometric interpretation of the corresponding cohomology classes in terms of coassociative submanifolds and gerbes: this is analogous to the classical interpretation of Bott-Chern cohomology classes in terms of divisors and holomorphic line bundles.'
topic: differential-geometry
tags:
- hodge-theory
- pluripotential-theory
- calabi-yau-geometry
arxiv_id: 2501.03778v3
arxiv_url: https://arxiv.org/abs/2501.03778
arxiv_submitted: '2025-01-07'
arxiv_updated: '2026-11-05'
summary: コンパクトなtorsion-free G₂多様体と実6次元Calabi–Yau多様体で、Harvey–Lawsonのddφ作用素に対するHodge分解を構築する。大域的∂∂̄補題の類似と調和形式によるコホモロジー解釈を得る一方、G₂の場合には局所的類似が失敗することも示す。
abstract_en: ''
summary_en: Pacini and Raffero examine which parts of Kähler potential theory survive for other special holonomy structures. They organize the image of the calibrated Hessian operator through Hodge-type decompositions on compact manifolds. This leads to cohomology spaces represented by selected harmonic forms and, in the G2 case, a geometric interpretation using gerbes. The global conclusions do not imply a local potential lemma in that setting.
abstract_ja: Harvey–Lawsonのddφ作用素を対象に、コンパクトなtorsion-free G₂ 7次元多様体とCalabi–Yau 6次元多様体でHodge分解を証明する。これから大域的∂∂̄補題の類似を得て、Bott–Chernコホモロジーに対応するddφコホモロジーを特定の調和形式の空間と同定する。G₂の場合はcoassociative部分多様体とgerbeによる幾何的解釈も与える。局所補題にはG₂で反例があり、構成されるコホモロジーはG₂またはSU(3)構造全体に依存する。
abstract_source_url: https://arxiv.org/abs/2501.03778
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2501.03778v3](https://arxiv.org/abs/2501.03778)
- **著者:** Tommaso Pacini, Alberto Raffero
- **初回投稿日:** 2025-01-07
- **最終更新日:** 2026-11-05
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kähler幾何では、閉形式とポテンシャル関数を結ぶ$\partial\bar\partial$補題が、コホモロジーと非線形解析をつなぐ。本論文は、この役割を特殊ホロノミー多様体のcalibrationに付随する$dd^\varphi$作用素へ広げる。

対象はコンパクトなtorsion-free $G\_2$多様体と、実6次元のCalabi–Yau多様体である。群の表現による微分形式の分解を使って、作用素の像を含む適切な空間を見つけ、その中でHodge分解を構築する。得られる結論は、一般のcalibrated多様体すべてを一律に扱うものではない。

この分解から大域的ポテンシャル補題と新しいコホモロジーを導く。一方、$G\_2$の場合に局所的な補題の反例があることも示し、複素幾何との類似がそのまますべて成立するわけではないことを明らかにする。

## 背景と問題設定

calibration $\varphi$は、各向き付けられた接$k$平面で体積形式以下となる閉$k$形式である。Harvey–Lawsonの$dd^\varphi$作用素はcalibrationから定まるHessian型作用素で、Kählerの場合には

$$
dd^\varphi=2i\partial\bar\partial
$$

となる。通常のBott–Chernコホモロジーは

$$
H\_{\mathrm{BC}}^{p,q}(M)=
\frac{\ker\partial\cap\ker\bar\partial}{\operatorname{im}(\partial\bar\partial)}
$$

であり、コンパクトKählerの場合にはDolbeaultコホモロジーと同定される。著者らはこの対応を、作用素$P$の像と補助作用素$Q$の核による直交分解という視点から捉え直す。

## 主結果

### Hodge分解（Theorems 5.12、6.13のIntroductionでの概説）

Introductionでは概略として次のように述べられている。コンパクトなtorsion-free $G\_2$ 7次元多様体およびCalabi–Yau 6次元多様体で、$P=dd^\varphi$に対するHodge分解が成り立つ。形式全体ではなく、$G\_2$または$SU(3)$による外微分の分解から選ぶ適切な部分空間で、像と有限次元の核を分離する。

Introductionは対象部分空間と補助作用素の完全な式を提示していないため、ここでその定義を推測しない。主眼は、calibrationのHessian型作用素にも、像への所属を有限次元の障害で捉える枠組みを与える点にある。

### 大域補題とコホモロジー（Corollaries 5.14、6.14、5.17、6.15）

上記の分解から大域的$\partial\bar\partial$補題に対応する結果が従い、$dd^\varphi$コホモロジーを定義できる。これを群作用により区別される調和形式のある成分と同定する。これらもIntroductionでは概略として述べられており、正確な形式次数や閉性条件は後続の定理に委ねられる。

$G\_2$の場合には局所補題の反例があるため、大域結果から任意の局所閉形式のポテンシャル表示を結論してはならない。また、複素構造だけに依存するKählerの場合のBott–Chern理論とは異なり、新しいコホモロジーには$G\_2$または$SU(3)$構造全体を用いる。

### 幾何的解釈（Corollary 7.15の概説）

$G\_2$の場合に、coassociative部分多様体とgerbeを使ってコホモロジー類を解釈する。これは古典的な因子・正則直線束とBott–Chernコホモロジーの関係に対応する方向である。Calabi予想の類似や高次数の作用素への拡張は、Introductionでは今後の課題として区別されている。

## 証明の見取り図

群表現で形式と外微分を分解し、$dd^\varphi$の像が入る部分空間を特定する。その後、関数解析的な分解手法で像と核を分離する。著者らはまずKählerの場合をこの方法で定式化し直し、$G\_2$と$SU(3)$ではそれぞれの表現論に合わせて解析する。gerbeによる解釈は、こうして得た解析的・代数的枠組みに幾何的意味を加える段階である。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2501.03778)
- **Introduction:** [PDF](https://arxiv.org/pdf/2501.03778v3) — Section 1, pp. 1–5
- **Introduction中で言及された主要結果:** IntroductionによるTheorems 5.12, 6.13; Corollaries 5.14, 5.17, 6.14, 6.15, 7.15の概説
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2501.03778v3
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
