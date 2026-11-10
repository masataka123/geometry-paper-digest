---
layout: paper
title: Metric nefness of direct image sheaves under weakly semi-stable Kähler morphisms
title_ja: 弱半安定Kähler射の直像層の計量的nef性
authors: Osamu Fujino, Shigeharu Takayama
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CV
arxiv_abstract: We investigate the nefness of the direct image sheaves of relative adjoint bundles under weakly semi-stable Kähler morphisms between complex spaces. We show that the direct image sheaves are locally free and that their tautological line bundles are metrically nef, strengthening the previously known results on torsion-freeness and certain weak positivity.
topic: algebraic-geometry
tags:
- positivity
- vector-bundles-sheaves
- l2-methods
arxiv_id: 2611.10391v1
arxiv_url: https://arxiv.org/abs/2611.10391
arxiv_submitted: '2026-11-07'
arxiv_updated: '2026-11-07'
summary: 弱半安定なKähler射の下で、相対随伴束の直像が局所自由になり、その普遍商線束が計量的にnefとなることを示す。標準的L²計量の特異性を対数的な発散に抑え、既知の弱正値性からnef性へ進む。
abstract_en: ''
summary_en: Fujino and Takayama examine how controlled degenerations of fibres strengthen positivity of direct images. Their analytic approach combines local freeness with estimates for the canonical fibre-integral metric. The key gain is sufficiently mild metric singularities to apply regularization and obtain nefness. The statement applies to locally Kähler maps of complex spaces, beyond the projective setting of earlier algebraic arguments.
abstract_ja: 連結ファイバーを持つ固有全射で局所Kählerな弱半安定射を考え、トロイダル構造のstrict性または全空間の商特異点という条件を課す。正則部分でNakano半正値な計量を持つ束を相対標準束に掛けた直像は局所自由である。標準L²計量は特異Griffiths半正値で対数的発散しか持たず、射影束上の普遍商線束が計量的にnefになる。
abstract_source_url: https://arxiv.org/abs/2611.10391
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.10391v1](https://arxiv.org/abs/2611.10391)
- **著者:** Osamu Fujino, Shigeharu Takayama
- **初回投稿日:** 2026-11-07
- **最終更新日:** 2026-11-07
- **主分類・副分類:** math.AG（主分類）; math.CV
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

随伴束の直像層には、ファイバー上の積分から自然な$L^2$計量が入る。しかし半正値な特異計量があるだけでは、滑らかな計量で近似する意味のnef性は直ちには得られない。退化ファイバーの近くで計量がどの程度発散するかが問題となる。

本論文は、弱半安定性を用いて直像層の局所自由性と計量の特異性を同時に制御する。標準計量の発散が対数的に抑えられるため、普遍商線束の計量のLelong数が消え、計量的nef性が従う。

射影多様体と線束についての先行結果は被覆と消滅定理による代数的方法を用いていた。ここでは複素空間の局所Kähler射と高階数の束を扱い、Kähler圏の極小モデル理論とも接続する解析的方法を与える。

## 背景と問題設定

$f:X\to Y$は連結ファイバーを持つ固有全射の正則写像で、$X$は複素空間、$Y$は複素多様体とする。「局所Kähler」とは、$Y$の各点の近傍$V$を選び、$f^{-1}(V)$をKählerにできることをいう。

Definition 1.2では、線束$L$が計量的にnefであることを、任意の相対コンパクト開集合$W$と$\varepsilon>0$に対して滑らかなHermitian計量$h\_W$を選び、基準計量$\omega$について

$$
\sqrt{-1}\Theta\_{h\_W}>-\varepsilon\omega
$$

とできることと定める。滑らかな射影多様体では代数幾何のnef性と一致するが、半正値曲率の滑らかな計量が存在することまで主張しない。

## 主結果

### 主定理（Theorem 1.1）

直像層と普遍商線束について

$$
E=f\_\ast (K\_{X/Y}\otimes M)\text{ は局所自由},\qquad
\mathcal O\_{\mathbb P(E)}(1)\text{ は計量的にnef}
$$

が成り立つ。仮定は、$f$が上記の局所Kähler射で弱半安定であり、$X,Y$のトロイダル構造がともにstrictであるか、または$X$の特異点が高々商特異点であること、および$M$が$X$上のHermitian計量を持つ正則ベクトル束で、その計量が$X\_{\mathrm{reg}}$上でNakano半正値であることである。

さらに$E$の標準$L^2$計量$g$は特異Griffiths半正値で、高々対数的に発散する。既知の反射性や弱正値性に対し、局所自由性と特異性の定量的制御を加える点が主要な強化である。Introductionは、高次直像$R^if\_\ast (K\_{X/Y}\otimes M)$もすべて局所自由になると説明する。

### 射影的な帰結（Corollary 1.3）

滑らかな射影多様体の固有全射$f:X\to Y$と半正値線束$L$に対し、弱半安定還元で得られる$f':X'\to Y'$と$\rho:X'\to X$を用いると、

$$
f'\_\ast (K\_{X'/Y'}\otimes\rho^\ast L)
$$

はnefな局所自由層となる。ここで$Y'\to Y$は一般有限全射、$Y'$は滑らか、$X'$は主成分の部分解消で商特異点しか持たない。普遍商線束の特異計量は半正値曲率を持ち、Lelong数は至る所で0である。

## 証明の見取り図

高次直像の無捩れ性と基底変換により、まず底が曲線の場合の局所自由性を得る。一般の滑らかな曲線への制限で弱半安定性が保たれることを使い、ファイバーのコホモロジー次元の一定性へ帰着する。

次に弱半安定射の局所座標でファイバー積分を評価し、$g$と普遍商線束の誘導計量の発散を抑える。最後に、半正値な特異計量のLelong数の消滅から計量的nef性を導くDemaillyの正則化結果（Proposition 1.4として再掲）を適用する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.10391)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.10391v1) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorem 1.1; Definition 1.2; Corollary 1.3; Proposition 1.4
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.10391v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
