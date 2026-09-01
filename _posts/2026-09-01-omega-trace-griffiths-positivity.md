---
layout: paper
title: "$\\omega$-trace and Griffiths positivity for singular Hermitian metrics"
title_ja: "特異Hermite計量のωトレース正値性とGriffiths正値性"
authors: "Yuta Watanabe"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.CV
arxiv_abstract: >-
  In this paper, we investigate various positivity for singular Hermitian metrics such as Griffiths, $\omega$-trace and RC, where $\omega$ is a Hermitian metric, and show that these quasi-positivity notions induce $0$-th cohomology vanishing, rational conected-ness, etc. Here, $\omega$-trace positivity of smooth Hermitian metrics $h$ on holomorphic vector bundles $E$ represents the positivity of $tr_\omega i\Theta_{E,h}$.
topic: differential-geometry
tags:
  - positivity
  - vector-bundles-sheaves
  - curvature
arxiv_id: "2402.06658v1"
arxiv_url: "https://arxiv.org/abs/2402.06658"
arxiv_submitted: "2024-02-05"
arxiv_updated: "2024-02-05"
summary: >-
  曲率カレントを直接使いにくい特異Hermite計量について、$\omega$-トレース正値性を近似を伴う形で定式化する。Griffiths半正値性との同値性、双対束の正則切断の消滅、および接束への仮定から射影性と有理連結性が従うことを示す。
abstract_en: ""
summary_en: >-
  The paper develops positivity notions for singular Hermitian metrics without requiring curvature currents with measure coefficients. It characterizes Griffiths semipositivity through trace semipositivity relative to arbitrary Hermitian metrics. Under a quasi-positive trace condition with approximation, it derives vanishing of global sections of tensor and exterior powers of the dual bundle. Applied to a tangent bundle on a compact Kähler manifold, the condition also yields projectivity and rational connectedness.
abstract_ja: >-
  特異Hermite計量に対するGriffiths正値性、$\omega$-トレース正値性、RC正値性を比較し、近似を伴う準正値性の帰結を調べる。とくに双対束のテンソル冪・外積冪の零次コホモロジー消滅を導き、接束の場合にはコンパクトKähler多様体の射影性と有理連結性を得る。
abstract_source_url: "https://arxiv.org/abs/2402.06658"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2402.06658](https://arxiv.org/abs/2402.06658)
- **著者:** Yuta Watanabe
- **初回投稿日:** 2024年2月5日
- **最終更新日:** 2024年2月5日
- **主分類・副分類:** math.DG（主分類）, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

特異Hermite計量では、曲率が測度係数のカレントとして定義できるとは限らない。このため本論文は、曲率カレントを経由せず、劣調和性によって正値性を扱う枠組みを整備する。

Hermite計量 $\omega$ に対し、滑らかな計量 $h$ の $\omega$-トレース正値性は $\operatorname{tr}_{\omega} i\Theta_{E,h}$ の正値性を表す。著者はこの概念を特異計量へ拡張し、近似条件を組み込んだ定式化を与える。

主要な帰結は、Griffiths半正値性との同値な特徴づけ、双対束のテンソル冪と外積冪の正則切断の消滅、および接束への応用である。最後の応用では、コンパクトKähler多様体が射影的かつ有理連結であることまで導かれる。

## 背景と問題設定

特異Hermite計量は複素幾何で重要である一方、その曲率は常に通常のカレントとして扱えるわけではない。Griffiths半正値性には多重劣調和関数を用いる曲率非依存の特徴づけがあり、本論文は同様の発想を $\omega$-トレース正値性へ展開する。

滑らかな場合、$\omega$-トレース正値性は

$$
\operatorname{tr}_{\omega} i\Theta_{E,h}>0
$$

で表され、これは最高次数形式上の曲率作用素 $[i\Theta_{E,h},\Lambda_\omega]$ の正値性と対応する。特異な状況では近似を加え、この正値性からどこまで代数幾何的帰結を引き出せるかが問題となる。

## 主結果

### Griffiths半正値性の特徴づけ（Theorem 1.1 = Theorem 5.10）

複素多様体 $X$ 上の正則ベクトル束 $E$ について、特異Hermite計量によるGriffiths半正値性と、任意のHermite計量 $\omega$ に関する近似付き $\omega$-トレース半正値性が同値である。前者から後者へは同じ計量を取れ、逆向きでも計量はほとんど至る所一致するように選べる。

### 零次コホモロジー消滅（Theorem 1.2 = Theorem 8.2）

コンパクトKähler多様体 $X$ 上の正則ベクトル束 $E$ が、あるKähler計量 $\omega$ に関して近似付き $\omega$-トレース準正値な特異Hermite計量をもつならば、任意の $m\in\mathbb N$ と $1\leq p\leq\operatorname{rank}E$ に対して

$$
H^0\!\left(X,(E^*)^{\otimes m}\right)=0,
\qquad
H^0\!\left(X,\Lambda^pE^*\right)=0
$$

が成り立つ。準正値性では従来の $L^2$ 評価や滑らかな場合のHodge分解をそのまま使えないため、次数による極大性を介した議論が用いられる。

### 有理連結性（Theorem 1.3 = Theorem 9.3）

コンパクトKähler多様体 $X$ の接束 $T_X$ が、あるHermite計量 $\omega$ に関して近似付き $\omega$-トレース準正値な特異Hermite計量をもつならば、$X$ は射影的かつ有理連結である。これは滑らかな $\omega$-トレース正値計量について既知だった結果を特異かつ準正値な設定へ拡張する。

## 証明の見取り図

Introductionによれば、まず局所可積分関数の $\omega$-劣調和性を整備し、曲率を使わない $\omega$-トレース正値性の特徴づけを構成する。次に、捩れのない連接層に対する $\deg_\omega$-strict maximalityを導入し、近似付き準正値性からこの次数条件を経て双対側の正則切断を消滅させる。有理連結性については、既知の有理連結性の特徴づけとRC正値性との関係を組み合わせる。

## 原論文との対応

- **Abstractページ:** [arXiv:2402.06658](https://arxiv.org/abs/2402.06658)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.1–1.3
- **論文構成の説明:** IntroductionおよびContents, pp. 1–3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
