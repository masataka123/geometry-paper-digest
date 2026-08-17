---
layout: paper
title: "Curvature on some Kähler toric manifolds"
title_ja: "いくつかのKählerトーリック多様体上の曲率"
authors: "Xingluan Wang"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  We extend the application of the Guillemin--Abreu formalism to holomorphic sectional and bisectional
  curvature on $\mathbb C^n$, $\mathcal O(-\ell)$, and Hirzebruch manifolds $M_{n,\ell}$, and further
  apply it to the total spaces of certain higher-rank vector bundles. The resulting formulas recover
  known positivity criteria and we show that, when the slope is sufficiently close to $1$, the
  extremal metrics on $M_{n,\ell}$ have positive holomorphic sectional curvature. We construct
  complete scalar-flat Kähler metrics on $ \operatorname{Tot}\bigl(\mathcal O(-k)\oplus\mathcal
  O(-k)\to\mathbb{CP}^n\bigr), $ and identify the Ricci-flat case, which occurs precisely when
  $2k=n+1$.
topic: differential-geometry
tags:
  - vector-bundles-sheaves
  - csck-extremal-kahler-metrics
  - curvature
  - toric-geometry
arxiv_id: "2606.12878v1"
arxiv_url: "https://arxiv.org/abs/2606.12878v1"
arxiv_submitted: "2026-06-11"
arxiv_updated: "2026-06-11"
summary: >-
  Guillemin–Abreu形式を正則断面曲率・二断面曲率へ拡張し、複数のトーリックKähler多様体を統一的に扱う。Hirzebruch多様体のextremal計量の正曲率と、高階数ベクトル束の全空間上の完備scalar-flat計量を得て、$2k=n+1$ がRicci-flat条件になることを示す。
abstract_en: ""
summary_en: >-
  The article adapts the Guillemin--Abreu description of toric Kähler metrics to sectional and bisectional curvature calculations. It recovers established positivity criteria on affine space and line bundles and proves positivity for certain extremal metrics on Hirzebruch manifolds near a limiting slope. It also gives explicit complete scalar-flat metrics on total spaces of rank-two bundles, with Ricci flatness exactly in the vanishing-first-Chern-class case.
abstract_ja: >-
  トーリックKähler幾何のGuillemin–Abreu形式を、$\mathbb C^n$、$\mathcal O(-\ell)$、Hirzebruch多様体の正則断面曲率と二断面曲率の計算へ拡張する。傾きが1に十分近いときHirzebruch多様体のextremal計量が正の正則断面曲率をもつことを示す。さらに $\operatorname{Tot}(\mathcal O(-k)\oplus\mathcal O(-k)\to\mathbb{CP}^n)$ 上に完備scalar-flat Kähler計量を構成し、$2k=n+1$ の場合をRicci-flatと同定する。
abstract_source_url: "https://arxiv.org/abs/2606.12878v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2606.12878v1](https://arxiv.org/abs/2606.12878v1)
- **著者:** Xingluan Wang
- **初回投稿日:** 2026年6月11日
- **最終更新日:** 2026年6月11日
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

特殊Kähler計量の曲率方程式は非線形だが、トーラス対称性の下ではsymplectic potentialの常微分方程式へ還元できる。本論文はDelzant–Guillemin–Abreuの枠組みを、従来多く扱われたRicci曲率やscalar curvatureだけでなく、正則断面曲率・二断面曲率へ押し広げる。

$\mathbb C^n$、負線束 $\mathcal O(-\ell)$、Hirzebruch多様体 $M_{n,\ell}$ に対する曲率式は既知の正値性判定を回収する。特に傾きが1に十分近いとき、$M_{n,\ell}$ 上のextremal計量が正の正則断面曲率をもつという新しい結論が得られる。

第二の貢献は高階数束への拡張である。$\mathbb{CP}^n$ 上の $\mathcal O(-k)\oplus\mathcal O(-k)$ の全空間に完備scalar-flat Kähler計量を明示的に構成し、$2k=n+1$ のとき、かつそのときに限り構成された計量がRicci-flatになる。

## 背景と問題設定

Calabi ansatzやmomentum constructionは対称性によって特殊計量を構成する古典的方法である。一方、Guillemin–Abreu形式ではmoment polytopeとsymplectic potentialを用いて、固定したsymplectic形式と両立するトーリック複素構造を記述する。論文はこの形式が複数の既知構成を統一し、曲率式を簡単にする点を重視する。

高階数束の場合の対象は

$$
M=\operatorname{Tot}\!\left(\mathcal O(-k)\oplus\mathcal O(-k)\longrightarrow\mathbb{CP}^n\right),
$$

であり、その第一Chern類は

$$
c_1(M)=(n+1-2k)\pi^*c_1(\mathcal O(1))
$$

である。この式がRicci-flat条件 $2k=n+1$ の幾何学的意味を明確にする。

## 主結果

### Hirzebruch多様体の正曲率

Introductionでは、$M_{n,\ell}$ の傾きが1に十分近ければ、そのextremal Kähler計量の正則断面曲率が正になると述べられる。既知例を単に再構成するだけでなく、Guillemin–Abreu座標が正値性の機構を可視化して新しい範囲を与える点が新規性である。

### Proposition 1（高階数束上の完備計量）

構成されるprofile関数 $\Theta_{0,0}$ は上記の $M$ に完備scalar-flat Kähler計量を定める。さらに

$$
2k=n+1
$$

ならばこの計量はRicci-flatである。Introductionは同じ議論が $\operatorname{Tot}([\mathcal O(-k)]^{\oplus r}\to\mathbb{CP}^n)$ にも本質的変更なく拡張できるが、論文では計算を明瞭にするため $r=2$ を扱うと説明する。

## 証明の見取り図

まずトーリックKähler計量をsymplectic potentialで符号化し、許容条件と曲率成分をprofile関数の条件へ翻訳する。低階数の標準例で正則断面曲率の既知判定を回収した後、Hirzebruch多様体では傾き1近傍の式の符号を調べる。高階数束では適切な $\Theta_{p,q}$ を構成し、完備性とscalar-flat条件を直接計算し、第一Chern類が消える場合にRicci-flat性を同定する。

## 原論文との対応

- **Abstractページ:** [arXiv:2606.12878v1](https://arxiv.org/abs/2606.12878v1)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Proposition 1
- **論文構成の説明:** Section 1.2, pp. 3–4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
