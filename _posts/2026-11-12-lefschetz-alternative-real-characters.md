---
layout: paper
title: A Lefschetz Alternative for Real Characters on Smooth Quasi-Projective Varieties
title_ja: 準射影多様体の実指標に対するLefschetz型の選択肢
authors: Yuan Liu
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.GR
arxiv_abstract: We establish a Lefschetz alternative for real characters on smooth complex quasi-projective varieties, extending Simpson's classical theorem beyond the compact Kähler setting. More precisely, for a nonzero real character of the fundamental group of a smooth connected complex quasi-projective variety, either the character factors through a holomorphic fibration onto a Riemann orbifold with connected general fiber, or every level set of an associated primitive function on the corresponding covering is connected and its inclusion induces a surjection onto the fundamental group of the covering. Our approach combines logarithmic holomorphic $1$-forms with a geometric flow construction to overcome the difficulties arising from noncompactness. Meanwhile, we prove a quasi-projective analogue of the Napier--Ramachandran theorem, showing that an epimorphism onto $\Z $ whose kernel is not finitely generated must factor through a hyperbolic Riemann orbifold. As applications, we derive
  several new restrictions on the structure of quasi-projective groups.
topic: algebraic-geometry
tags:
- fundamental-groups
arxiv_id: 2611.11195v1
arxiv_url: https://arxiv.org/abs/2611.11195
arxiv_submitted: '2026-11-08'
arxiv_updated: '2026-11-08'
summary: 滑らかな準射影多様体の基本群の実指標について、orbifold曲線への分解、または対応する被覆上の水準集合の連結性と基本群全射性を示す。コンパクトKählerの場合のSimpsonの定理を拡張し、BNS不変量と準射影群への制約に応用する。
abstract_en: We establish a Lefschetz alternative for real characters on smooth complex quasi-projective varieties, extending Simpson's classical theorem beyond the compact Kähler setting. More precisely, for a nonzero real character of the fundamental group of a smooth connected complex quasi-projective variety, either the character factors through a holomorphic fibration onto a Riemann orbifold with connected general fiber, or every level set of an associated primitive function on the corresponding covering is connected and its inclusion induces a surjection onto the fundamental group of the covering. Our approach combines logarithmic holomorphic $1$-forms with a geometric flow construction to overcome the difficulties arising from noncompactness. Meanwhile, we prove a quasi-projective analogue of the Napier--Ramachandran theorem, showing that an epimorphism onto $\Z $ whose kernel is not finitely generated must factor through a hyperbolic Riemann orbifold. As applications, we derive several
  new restrictions on the structure of quasi-projective groups.
summary_en: ''
abstract_ja: 滑らかな複素準射影多様体の非零実指標に対して、曲線orbifoldを通じた分解か、適切な原始関数の全水準集合の連結性と基本群への全射性が成り立つことを示す。非コンパクト性への対処には対数正則一形式と幾何学的な流れを用いる。また、整数群への全射の核が有限生成でなければ双曲的な曲線orbifoldを通じて分解するというNapier–Ramachandran型の定理を得る。これらから準射影群のBNS不変量と群論的構造に制限を与える。
abstract_source_url: https://arxiv.org/abs/2611.11195
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.11195v1](https://arxiv.org/abs/2611.11195)
- **著者:** Yuan Liu
- **初回投稿日:** 2026-11-08
- **最終更新日:** 2026-11-08
- **主分類・副分類:** math.AG（主分類）; math.GR
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

基本群から実数への準同型は、多様体上の閉一形式として幾何学的に扱える。コンパクトKähler多様体ではSimpsonのLefschetz型定理が、その形式の原始関数の水準集合と、曲線への写像との関係を与えている。本論文はこれを滑らかな準射影多様体へ広げる。

非零実指標に対し、一方では指標が曲線orbifoldを通じて分解し、他方では対応する被覆上で適切に選んだ原始関数の全水準集合が連結となり、その基本群が被覆の基本群へ全射する。二つは排他的とは限らないため、厳密な二分法ではなく「選択肢」として述べられる。

整数群への全射に限ると、核が有限生成でない場合には双曲的曲線orbifoldへの分解が必ず生じる。さらにBNS不変量の補集合をそのようなファイブレーションから記述し、ある種のHNN拡大やThompson–Stein群が準射影群になれないことを導く。

## 背景と問題設定

$X$ を滑らかで連結な複素準射影多様体、$G=\pi\_1(X)$ とし、非零指標 $\chi:G\to\mathbb R$ を取る。対応する被覆 $p:\widehat X\to X$ は $\pi\_1(\widehat X)=\ker\chi$ を満たす。

準射影の場合、任意の正則一形式に対して同じ結論を期待することはできない。境界へ向かって零点が蓄積する例があり、本論文は指標を表す対数正則一形式の適切な選択を用いる。コンパクトの場合には自動的だった、流れが必要な水準を横切る性質も、非コンパクトでは別途確保しなければならない。

## 主結果

### 実指標のLefschetz型選択肢（Theorem A）

任意の非零 $\chi$ に対し、次の少なくとも一方が成り立つ。

1. 連結な一般ファイバーをもつ滑らかな準射影曲線への全射代数写像 $f:X\to C$ が存在し、ファイバーの重複度の最大公約数から定めるorbifold構造 $m$ に対して

$$
\chi=\chi\_C^{\mathrm{orb}}\circ f\_\ast^{\mathrm{orb}},\qquad
\chi\_C^{\mathrm{orb}}:\pi\_1^{\mathrm{orb}}(C,m)\to\mathbb R
$$

と分解する。

2. $\chi$ を表す滑らかな閉実一形式 $\alpha$ を適切に選べて、$du=p^\ast\alpha$ を満たす任意の原始関数 $u:\widehat X\to\mathbb R$ の全水準集合 $L\_t=u^{-1}(t)$ が連結となり、

$$
\pi\_1(L\_t)\twoheadrightarrow\pi\_1(\widehat X)
$$

が成り立つ。

この定理は任意の原始関数の選択に関する主張であるが、その前提となる $\alpha$ は適切に選んだものである。任意の一形式に一般化してはいない。また第一の選択肢のorbifoldは、次の定理と異なり双曲的とは限らない。

### 有限生成でない核と双曲的orbifold（Theorem B）

$\chi:\pi\_1(X)\twoheadrightarrow\mathbb Z$ の核が有限生成でなければ、連結な一般ファイバーをもつ全射代数写像 $f:X\to C$ を取れて、$(C,m)$ は双曲的となり、

$$
\chi=\chi\_C^{\mathrm{orb}}\circ f\_\ast^{\mathrm{orb}},\qquad
\chi\_C^{\mathrm{orb}}:\pi\_1^{\mathrm{orb}}(C,m)\twoheadrightarrow\mathbb Z
$$

と分解する。これはコンパクトKählerの場合に知られたNapier–Ramachandranの結果に対応する。

### BNS不変量の補集合（Theorem C）

準射影群 $G=\pi\_1(X)$ のBNS不変量について

$$
\Sigma^1(G)^{\mathrm c}
=S\left(\bigcup\_f\operatorname{im}\bigl(f^\ast:H^1(C,m;\mathbb R)\to H^1(X;\mathbb R)\bigr)\right)
$$

が成り立つ。和集合は双曲的orbifoldファイブレーション全体を走り、有限和として記述される。$S$ は零を除いて単位球面へ射影する操作である。群論的不変量の例外方向が曲線への写像から生じるという幾何学的説明を与える。

### 準射影群への制約（Proposition 1.3）

有限生成な底群をもつ真の上昇または下降HNN分解をもつ群は準射影群ではない。また、Introductionで挙げられるThompson–Stein群も準射影群にはならない。これらは、抽象群が滑らかな準射影多様体の基本群として実現できるかを排除する応用である。

## 証明の見取り図

まず像の階数が一である有理指標を扱い、無限巡回被覆上で原始関数の方向へ道を押す幾何学的な流れを構成する。Simpsonの局所的な議論とZhouの流れの方法を組み合わせ、変形した道が相対ホモトピー類を保つようにする。

非コンパクト性のため、流れの完全性や単調性だけでは十分でない。境界での対数形式の扱いと流れの制御を組み合わせて、水準集合へ道を動かすために必要な性質を確保する。その後、一般の実指標に対応する被覆へ議論を拡張する。有理指標の場合が技術的な困難の多くを既に含み、整数群への分解定理とも直接結びつく。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.11195)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.11195v1) — Section 1, pp. 2–4
- **Introduction中で言及された主要結果:** Theorems A, B, C; Proposition 1.3
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.11195v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
