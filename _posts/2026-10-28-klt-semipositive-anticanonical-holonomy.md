---
layout: paper
title: 'Klt varieties with semipositive anticanonical bundle : symmetric tensors, holonomy and structure'
title_ja: 反標準束が半正値な特異多様体のholonomyと構造
authors: Louis Dailly
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.DG
arxiv_abstract: The aim of this article is to study klt projective varieties such that the anticanonical bundle is semipositive from the differential-geometric point of view. The study of the holonomy of such varieties yields generalizations of several results. We show that the dimension of the space of symmetric differentials is bounded by a constant depending on the augmented irregularity, generalizing a result of Kobayashi. If we endow such a variety $X$ with a metric $\omega$ whose Ricci curvature is non-negative, then we show that the holonomy of the regular locus is compact. If we assume that $X$ has canonical singularities, then we show that the general fiber of the Albanese map can be decomposed into a product of irreducible Calabi-Yau varieties, irreducible holomorphic symplectic varieties and hereditarily rationally connected varieties by the holonomy generalizing a structure theorem of Campana, Demailly and Peternell. To conclude, we show that the fundamental group of the regular
  locus of such varieties is virtually abelian.
topic: algebraic-geometry
tags:
- positivity
- singularities
- vector-bundles-sheaves
- curvature
- fundamental-groups
arxiv_id: 2610.37002v1
arxiv_url: https://arxiv.org/abs/2610.37002
arxiv_submitted: '2026-10-27'
arxiv_updated: '2026-10-27'
summary: 反標準束が半正値な射影多様体について、曲率から対称微分と大域構造をどこまで制御できるかを扱う。kltの場合に対称微分の次元評価とholonomyのコンパクト性を示し、canonicalの場合には有限準エタール被覆後のAlbaneseファイバーの分解と正則部分の基本群の仮想可換性を得る。
abstract_en: The aim of this article is to study klt projective varieties such that the anticanonical bundle is semipositive from the differential-geometric point of view. The study of the holonomy of such varieties yields generalizations of several results. We show that the dimension of the space of symmetric differentials is bounded by a constant depending on the augmented irregularity, generalizing a result of Kobayashi. If we endow such a variety $X$ with a metric $\omega$ whose Ricci curvature is non-negative, then we show that the holonomy of the regular locus is compact. If we assume that $X$ has canonical singularities, then we show that the general fiber of the Albanese map can be decomposed into a product of irreducible Calabi-Yau varieties, irreducible holomorphic symplectic varieties and hereditarily rationally connected varieties by the holonomy generalizing a structure theorem of Campana, Demailly and Peternell. To conclude, we show that the fundamental group of the regular
  locus of such varieties is virtually abelian.
summary_en: ''
abstract_ja: 射影klt多様体の反標準束に半正値性を課し、反射的対称微分の次元をholonomyの不変方向で評価する。この方向の次元はaugmented irregularityに一致し、非負Ricci曲率を持つ計量の正則部分でのholonomyはコンパクトになる。canonical特異点の場合には、有限準エタール被覆後のAlbanese射の一般ファイバーをCalabi–Yau、既約正則シンプレクティック、遺伝的有理連結の各因子に分解し、正則部分の基本群が仮想可換であることを示す。
abstract_source_url: https://arxiv.org/abs/2610.37002
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.37002v1](https://arxiv.org/abs/2610.37002)
- **著者:** Louis Dailly
- **初回投稿日:** 2026-10-27
- **最終更新日:** 2026-10-27
- **主分類・副分類:** math.AG（主分類）; math.DG
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

非負Ricci曲率は、正則微分形式が存在する方向と多様体が分解する方向を結び付ける。滑らかな場合に知られるこの関係を、反標準束が半正値な特異射影多様体へ拡張するのが本論文の目的である。

第一の結果は反射的対称微分の次元評価である。評価を支配するholonomyの不変部分の次元は、有限準エタール被覆を通して測るaugmented irregularityと一致する。したがって解析的な不変方向が代数的な不変量で記述される。

さらにcanonical特異点のもとでは、適切な被覆後のAlbaneseファイバーを三種類の幾何学的因子へ分解できる。ここでは「X自体が直積になる」という主張と、局所定数なファイブレーションのファイバーが分解するという主張を区別する必要がある。正則部分の基本群の仮想可換性も、この構造から導かれる。

## 背景と問題設定

Kobayashiの滑らかな場合の評価と、Campana–Demailly–Peternellの半正値第一Chern類に対する構造定理が出発点である。特異点を除いた空間は一般に完備でなく、de Rham分解をそのまま適用できない。

$\operatorname{Sym}^{[m]}$は対称冪の反射包を表す。半正値反標準束に対応する計量のrestricted holonomyが固定する接空間部分の次元を$k$とする。$\widetilde q(X)$は有限準エタール被覆によって得られる不正則数の上限である。

## 主結果

### 対称微分の評価（Theorem A）

射影klt多様体で$-K\_X$が半正値なら、

$$
h^0\bigl(X,\operatorname{Sym}^{[m]}\Omega\_X^{[1]}\bigr)\leq {m+k-1\choose m}
$$

が成り立つ。半負値の場合には対応する対称接テンソルについて

$$
h^0\bigl(X,\operatorname{Sym}^{[m]}T\_X\bigr)\leq {m+k-1\choose m}
$$

を得る。全体の次元ではなく平坦な不変方向だけが対称テンソルの自由度を支配する点が核心である。

### 不変方向の代数的記述（Theorem B）

半正値反標準束を持つ射影klt多様体では

$$
k=\widetilde q(X)
$$

である。有限被覆によって全holonomyとrestricted holonomyの固定部分を一致させ、Albanese射に由来する方向として認識する。

### Holonomyのコンパクト性（Theorem C）

$\operatorname{Ric}\omega\geq0$を満たすKähler計量を備えた射影klt多様体について、正則点$p$における$\operatorname{Hol}\_p(X\_{\mathrm{reg}},\omega\_{\mathrm{reg}})$はコンパクトである。正則部分の非完備性にもかかわらず成立することが重要である。

### Albaneseファイバーの分解（Theorem D）

$X$が射影的でcanonical特異点を持ち、$-K\_X$が半正値なら、有限準エタール射$X'\to X$が存在し、$X'\to\operatorname{Alb}(X')$は局所定数で、その一般ファイバーは

$$
\prod\_j Y\_j\times\prod\_k S\_k\times\prod\_l Z\_l
$$

となる。$Y\_j$は既約Calabi–Yau、$S\_k$は既約正則シンプレクティック、$Z\_l$は遺伝的有理連結多様体である。最後の性質は、任意の有限準エタール被覆も有理連結であることを意味する。ここでのcanonicalという仮定をkltへ弱めた主張はしない。

### 正則部分の基本群（Theorem E）

Theorem Dと同じ仮定のもとで$\pi\_1(X\_{\mathrm{reg}})$は仮想可換、すなわち有限指数の可換部分群を持つ。

## 証明の見取り図

解消上の近似計量と第二基本形式の評価により、傾き零の適切な部分層が平行で多重安定になるという層のBochner原理を得る。holonomyの表現を有限準エタール被覆上の接層の分解へ移し、Albanese射の局所定数性によって平坦方向を同定する。

構造定理では、holonomy由来の葉層の葉が代数的であることを示し、準エタール被覆上の積分解へ進む。canonicalの場合のterminalizationは余次元二での滑らかさの制約を除くために用いられる。最後に各因子の正則部分の基本群の有限性とAlbanese底の可換性を組み合わせる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.37002)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.37002v1) — Section 1, pp. 2–6（Section 2の開始前まで）
- **Introduction中で言及された主要結果:** Theorems A–E；Theorem 1.1はKobayashiの既知の結果
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.37002v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
