---
layout: paper
title: "Radial Projectively Induced Canonical Kähler Metrics: Rigidity and Classification"
title_ja: "射影的に誘導される動径標準Kähler計量の剛性と分類"
authors: "Claudio Arezzo, Andrea Loi, Giovanni Placini, Michela Zedda"
arxiv_primary_category: "math.DG"
arxiv_categories: [math.DG]
arxiv_abstract: >-
  We study radial Kähler metrics on domains of $\mathbb{C}^n$, $n\geq 2$, admitting a Kähler immersion into a finite- or infinite-dimensional complex projective space. We classify those with constant non-negative scalar curvature: up to a linear change of coordinates, they are positive integer multiples of the Fubini-Study metric, the flat metric, or, in complex dimension two, generalized Burns-Simanca metrics. We also prove that every radial projectively induced Kähler-Einstein metric has constant holomorphic sectional curvature and is therefore a Fubini-Study, flat, or complex hyperbolic metric. Finally, we show that a radial infinitely projectively induced extremal Kähler metric has unbounded maximal radial domain if and only if it is scalar-flat.
topic: differential-geometry
tags: [kahler-einstein-metrics, csck-extremal-kahler-metrics, curvature]
arxiv_id: "2609.08438v1"
arxiv_url: "https://arxiv.org/abs/2609.08438"
arxiv_submitted: "2026-09-08"
arxiv_updated: "2026-09-08"
summary: >-
  複素射影空間へKähler埋入できる$\mathbb C^n$上の動径Kähler計量を分類する。非負定スカラー曲率の場合の候補をFubini--Study計量、平坦計量、二次元の一般化Burns--Simanca計量に絞り、Kähler--Einsteinの場合には定正則断面曲率を導く。
abstract_en: ""
summary_en: >-
  The paper investigates radial Kähler metrics that arise from full immersions into finite- or infinite-dimensional projective space. It proves that nonnegative constant scalar curvature leaves only three explicit types, with the Burns--Simanca family occurring solely in complex dimension two. The Einstein condition is even more rigid and forces constant holomorphic sectional curvature. For infinitely projectively induced extremal metrics, the size of the maximal radial domain is characterized by scalar flatness.
abstract_ja: >-
  有限または無限次元複素射影空間へKähler埋入をもつ$\mathbb C^n$の領域上の動径Kähler計量を調べる。非負定スカラー曲率をもつものは、線形座標変換を除いてFubini--Study計量の正整数倍、平坦計量、または複素次元2の一般化Burns--Simanca計量に限られる。Kähler--Einsteinの場合は定正則断面曲率をもち、Fubini--Study、平坦、複素双曲計量のいずれかになる。また無限次元射影空間から誘導される動径extremal計量の最大動径領域が非有界となることを、スカラー平坦性で特徴づける。
abstract_source_url: "https://arxiv.org/abs/2609.08438"
license_name: "Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)"
license_url: "https://creativecommons.org/licenses/by-nc-nd/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2609.08438](https://arxiv.org/abs/2609.08438)
- **著者:** Claudio Arezzo, Andrea Loi, Giovanni Placini, Michela Zedda
- **初回投稿日・最終更新日:** 2026年9月8日
- **主分類:** math.DG
- **ライセンス:** [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)

## 要約

射影的誘導Kähler計量とは、複素射影空間への正則等長埋入から引き戻される計量である。標準計量のうちどれがこの性質をもつかは古典的な問題であり、有限次元射影空間の場合には強い剛性が知られる一方、無限次元の場合には非斉次な例も存在する。

本論文は動径ポテンシャル$f(|z|^2)$をもつ計量に対象を絞り、extremal、cscK、Kähler--Einsteinという条件と最大定義域の関係を完全に記述する。非負定スカラー曲率のcscK計量には三種類しかなく、従来の分類に必要だった境界での技術的仮定が除かれる。

Kähler--Einstein条件はさらに強く、負のスカラー曲率の場合も含めて正則断面曲率を一定にする。他方、負のcscK条件だけではこの剛性は成立しないため、定理は各仮定の役割も明確にする。

## 背景と問題設定

動径Kähler形式を
$$
\omega=\frac{i}{2}\partial\bar\partial f(r),\qquad r=|z|^2
$$
と書き、ポテンシャルの最大定義区間を$(r_{\inf},r_{\sup})$とする。射影的誘導性はCalabiの判定法を通じて$e^{f(r)}$の非負係数級数展開へ変換される。

## 主結果

### 主定理（Theorem 1.1）

$n\ge2$とし、$g$を射影的に誘導される動径extremal Kähler計量とする。第一に$r_{\sup}=+\infty$であることは、$g$が非負定スカラー曲率cscK計量であることと同値である。無限次元射影空間から完全に誘導される場合には、これはスカラー平坦性と同値になる。

第二に、非負定スカラー曲率cscK計量は線形座標変換を除いて、Fubini--Study計量の正整数倍、平坦計量、または$n=2$における
$$
\omega_{k,\mathrm{BS}}=\frac{i}{2}\partial\bar\partial\bigl(k\log|z|^2+|z|^2\bigr),\qquad k\in\mathbb Z_{>0},
$$
のいずれかである。第三にKähler--Einsteinなら定正則断面曲率をもち、Fubini--Study、平坦、複素双曲計量に限られる。

## 証明の見取り図

完全Kähler埋入とHartogs延長を用いて$e^{f(r)}$を非負係数の冪級数として原点まで延長し、最大領域の内端点が零であることを示す。この級数の許される漸近形とextremal方程式を突き合わせて非有界な外端点を分類し、cscKの場合の三候補を得る。最後に負曲率の動径解を別途解析し、Einstein条件が非定曲率の族を排除することを示す。

## 原論文との対応
- **Abstractページ:** [arXiv:2609.08438](https://arxiv.org/abs/2609.08438)
- **Introduction:** Section 1, pp. 1--4
- **主要定理:** Theorem 1.1
- **論文構成:** p. 4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY-NC-ND 4.0
- **source_scope:** Abstract and Introduction
