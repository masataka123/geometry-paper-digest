---
layout: paper
title: Foliations, free cores, and Terao's conjecture for seventeen lines
title_ja: 17直線のTerao予想と葉層・Chern類による還元
authors: Felipe Monteiro, Henrique N. Sá Earp, Tomás S. R. Silva
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CO
arxiv_abstract: We prove that freeness is determined by the intersection lattice for arrangements of seventeen lines in the complex projective plane. The proof reduces a possible counterexample to smaller arrangements whose realisation spaces can be computed. A minimal logarithmic derivation defines a foliation; its inflection divisor and a local singularity count imply that the non-free member of a counterexample is nearly free with exponents $(7,10)$. Deleting four lines then produces a thirteen-line arrangement whose second Chern class is controlled by a combinatorial deficit. When the deficit is four, the remaining arrangement is free with exponents $(6,6)$. An exact covering argument places the necessary thirteen-line cores in four finite classes, containing $3{,}829{,}691$ lattices. We compute their realisation spaces and reconstruct all relevant seventeen-line extensions, including specialisations of positive-dimensional families. Among the candidate lattices, exactly sixteen admit
  a non-free realisation; they are rigid and have no free realisation. Together with the known cases, this establishes Terao's conjecture for central arrangements of at most seventeen planes in $\mathbb{C}^3$.
topic: algebraic-geometry
tags:
- foliations
- chern-classes
- vector-bundles-sheaves
arxiv_id: 2611.14689v1
arxiv_url: https://arxiv.org/abs/2611.14689
arxiv_submitted: '2026-11-10'
arxiv_updated: '2026-11-10'
summary: 複素射影平面内の17直線配置では、対数的導分加群の自由性が交点格子だけで決まることを示す。葉層の変曲因子と第2 Chern類を使って反例候補を13直線の部分配置へ還元し、有限個の実現空間の計算で排除する。
abstract_en: We prove that freeness is determined by the intersection lattice for arrangements of seventeen lines in the complex projective plane. The proof reduces a possible counterexample to smaller arrangements whose realisation spaces can be computed. A minimal logarithmic derivation defines a foliation; its inflection divisor and a local singularity count imply that the non-free member of a counterexample is nearly free with exponents $(7,10)$. Deleting four lines then produces a thirteen-line arrangement whose second Chern class is controlled by a combinatorial deficit. When the deficit is four, the remaining arrangement is free with exponents $(6,6)$. An exact covering argument places the necessary thirteen-line cores in four finite classes, containing $3{,}829{,}691$ lattices. We compute their realisation spaces and reconstruct all relevant seventeen-line extensions, including specialisations of positive-dimensional families. Among the candidate lattices, exactly sixteen admit a
  non-free realisation; they are rigid and have no free realisation. Together with the known cases, this establishes Terao's conjecture for central arrangements of at most seventeen planes in $\mathbb{C}^3$.
summary_en: ''
abstract_ja: 著者らは、交点格子が同型な17直線配置の自由性が一致することを証明し、既知の場合と合わせて複素3次元空間の17平面以下の中心的配置にTerao予想を確立する。仮想的な非自由反例は指数(7,10)のnearly free配置に制限される。四つの直線を取り除くとChern類で制御された13直線の核が得られ、3,829,691個の格子の実現空間と拡張を調べる。非自由実現を持つ候補は16個で、いずれも自由実現を持たない。
abstract_source_url: https://arxiv.org/abs/2611.14689
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.14689v1](https://arxiv.org/abs/2611.14689)
- **著者:** Felipe Monteiro, Henrique N. Sá Earp, Tomás S. R. Silva
- **初回投稿日:** 2026-11-10
- **最終更新日:** 2026-11-10
- **主分類・副分類:** math.AG（主分類）; math.CO
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

直線配置の交点格子は「どの直線がどの点で交わるか」を記録する。一方、配置に沿う対数的導分の加群が自由かどうかは、直線の具体的な方程式を使って定義される。Terao予想は、この代数的性質が組合せデータだけで決まると主張する。

本論文は複素射影平面の17直線について予想を証明する。核心は巨大な全列挙ではなく、もし反例があればその内部にどのような小さい配置が存在するかを先に幾何学的に制限する点にある。最小次数の導分が定める葉層を使い、非自由側を特定のnearly free配置に絞る。

その後、第2 Chern類の変化を測る欠損量を使って四本を削除する。残った13直線配置の有限クラスと、その実現空間から17直線への拡張を正確に調べることで反例を排除する。計算を含む証明であり、本記事はIntroductionの数学的還元と著者らが報告する検証結果を説明する。

## 背景と問題設定

複素数体上で考える。既知の結果は16直線までを覆っており、本論文はその結果を用いる。自由性を一つの配置について判定することと、同じ格子の全実現で不変だと示すことは異なる。後者を直接列挙すると候補格子が極めて多くなるため、配置に含まれる小さい「核」を利用する。

反例を自由配置 $\mathcal A\_1$ と非自由配置 $\mathcal A\_2$ の組とする。$\mathcal A\_2$ の最小Jacobian関係式の次数を $r$ とすると、その導分が全直線を保つ葉層を定める。変曲因子の次数 $3r$ と局所特異点の計数が、指数を制限する役割を持つ。

## 主結果

### 17直線での組合せ的不変性（Theorem 1.1）

複素射影平面の二つの17直線配置の交点格子が同型なら、両方が自由であるか、両方が非自由である。既知の16直線以下の場合と合わせ、$\mathbb C^3$ 内の17平面以下の中心的配置の自由性は交点格子によって決まる。任意本数の場合まで解決したという主張ではない。

### 葉層とnearly free配置への還元

Introductionで説明されるTheorems 3.1, 4.1によると、反例候補の変曲因子には次数2以上の残余部分があるため
$$
3r\geq19
$$
となる。これにより自由側の指数は $(1,8,8)$、非自由側はnearly freeで指数 $(7,10)$ に限られる。

四直線の集合 $S$ に対し、$s\_H$ を $H$ 上の交点数、$f(S)$ をその点を通る配置の直線がすべて $S$ に属する点の数として
$$
\varphi(S)=\sum\_{H\in S}(s\_H-7)-f(S)\leq4
$$
を得る。この量は削除による対数的束の第2 Chern類の変化を測る。$\varphi(S)=4$ なら残りの13直線配置は指数 $(6,6)$ の自由配置となる。

### 有限検証の到達点

必要な13直線の核は四つの有限クラス、計3,829,691個の格子に収まる。拡張の際には、追加直線は既存配置の二交点を結ぶ必要があるため、連続的な選択を別途無制限に探索する必要がない。正の次元の実現族の特殊化も含めて調べた結果、非自由実現を持つ候補格子は16個で、すべて剛直かつ自由実現を持たないと著者らは報告する。

## 証明の見取り図

葉層の変曲因子と局所計数が指数を固定し、削除公式とRiemann–Rochが13直線の核を制限する。八つの交点を持つ直線がある場合は有限被覆の議論によって適切な四直線を選び、それがない場合は別の小さい候補群を直接扱う。最後に核の実現空間から欠けた直線を復元し、自由実現と非自由実現が同居しないことを確認する。公開されたコードやデータセットは本記事作成時に実行していない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.14689)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.14689v1) — Section 1, pp. 1–2
- **Introduction中で言及された主要結果:** Theorem 1.1；Theorems 3.1, 4.1のIntroduction中の説明
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.14689v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
