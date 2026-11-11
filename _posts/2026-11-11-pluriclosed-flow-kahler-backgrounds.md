---
layout: paper
title: Pluriclosed flow on Kähler manifolds
title_ja: Kähler背景上のpluriclosed flowの最大存在時間と収束
authors: Jeffrey Streets
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math-ph
- math.CV
arxiv_abstract: We prove the maximal existence conjecture for pluriclosed flow on Kähler backgrounds. This leads to a priori generalizations of the Aubin-Yau and Calabi-Yau theorems, and resolves the question of connectedness of generalized Kähler structures on Calabi-Yau backgrounds.
topic: differential-geometry
tags:
- kahler-ricci-flow-solitons
- kahler-einstein-metrics
- calabi-yau-geometry
- chern-classes
arxiv_id: 2611.11614v1
arxiv_url: https://arxiv.org/abs/2611.11614
arxiv_submitted: '2026-11-08'
arxiv_updated: '2026-11-08'
summary: Kähler多様体上の任意のpluriclosed初期計量に対し、流の滑らかな存在時間が正のAeppli錐で決まることを示す。第一Chern類が負または零の場合の標準Kähler計量への収束を得て、Calabi–Yau背景上の固定した一般化Kähler類の可縮性も導く。
abstract_en: ''
summary_en: A Kähler complex manifold may carry pluriclosed metrics that are not themselves Kähler. Streets establishes a cohomological existence-time criterion for the flow starting from those metrics. The same estimates lead to convergence in the negative and zero first-Chern-class cases. On Calabi–Yau backgrounds, the convergence also controls the topology of a space of generalized Kähler structures.
abstract_ja: コンパクトKähler多様体を背景に、初期計量にはKähler条件より弱いpluriclosed条件だけを課す。正のAeppli錐が定める最大時間まで流が存在することを証明し、負の第一Chern類では正規化流がKähler–Einstein計量へ、第一Chern類零では流がRicci平坦Kähler計量へ指数収束することを示す。さらに固定したPoissonテンソルとspinor類に対応する一般化Kähler構造の空間の可縮性を得る。
abstract_source_url: https://arxiv.org/abs/2611.11614
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.11614v1](https://arxiv.org/abs/2611.11614)
- **著者:** Jeffrey Streets
- **初回投稿日:** 2026-11-08
- **最終更新日:** 2026-11-08
- **主分類・副分類:** math.DG（主分類）; math-ph, math.CV
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kähler–Ricci流の成功を非Kähler計量へ広げる一つの方法がpluriclosed flowである。これは$\partial\bar\partial\omega=0$を保つ流で、初期計量がKählerである必要はない。一方、スカラーポテンシャル一つには還元できず、方程式系としての評価が必要になる。

本論文は、複素多様体自体がコンパクトKählerである場合、正のAeppli錐から予測される最大時間まで滑らかな流が存在することを示す。初期計量をKählerに限定して得られていた存在時間の理論を、同じ背景上のpluriclosed計量へ拡張する。

さらに第一Chern類が負または零なら、標準的なKähler計量への収束を証明する。第一Chern類零の場合には、一般化Kähler構造の固定したクラスが可縮であるという、存在や収束を越えた幾何学的帰結も得られる。

## 背景と問題設定

$(M^{2n},J)$をコンパクトKähler多様体、$\omega\_0$をpluriclosed Hermitian計量とする。初期計量は閉形式とは限らないため、そのクラスはAeppliコホモロジーで考える。正のAeppli錐を$\mathcal P$と書く。

Kähler–Ricci流ではスカラー複素Monge–Ampère方程式を使えるが、pluriclosed計量の局所ポテンシャルは$(1,0)$-形式である。Introductionでは、動く背景$\widehat\omega$、$(1,0)$-形式$\beta$、実関数$f$を用いて

$$
\omega=\widehat\omega+\bar\partial\beta+\partial\overline\beta+dd^cf
$$

と表す還元が説明される。$f$の方程式はMonge–Ampère型であるが、Kähler性からのずれを担う$\beta$と連成している。

## 主結果

### 主定理1：錐による存在時間（Theorem 1.1）

$$
\tau^\ast =\sup\lbrace t>0:[\omega\_0]-tc\_1(M)\in\mathcal P\rbrace
$$

とすると、$\omega\_0$を初期値とするpluriclosed flowは$[0,\tau^\ast )$上で滑らかに存在する。背景がKählerであるという条件は維持したまま、初期値を一般のpluriclosed計量まで許す。任意の非Kähler複素多様体に対する一般の最大存在予想を解いたという主張ではない。

### 主定理2：負の第一Chern類（Theorem 1.2）

$c\_1(M)<0$なら、$-c\_1(M)$に一意なKähler–Einstein計量$\omega\_{\mathrm{KE}}$が存在し、任意のpluriclosed初期計量からの正規化流はそれに収束する。これによってAubin–Yau定理を再び証明するとともに、収束する初期計量の範囲を広げる。

### 主定理3：第一Chern類零（Theorem 1.3）

$c\_1(M)=0$なら、任意のpluriclosed計量$\omega\_0$に対し、そのクラスに一意なRicci平坦Kähler計量$\omega\_{\mathrm{CY}}$が存在する。流はすべての$t\ge0$で存在し、$\omega\_{\mathrm{CY}}$へ指数収束する。ここで$[\omega\_0]$を一般の初期値に対して通常のde Rham類と取り違えないことが重要である。

### 一般化Kähler類の可縮性（Corollary 1.4）

コンパクトKähler Calabi–Yau多様体上で正則Poissonテンソル$\sigma$と許容spinor類$\alpha,\beta$を固定すると、対応する一般化Kähler類$\mathrm{GK}\_{\alpha,\beta}^{J,\sigma}$は可縮となる。従来の収束結果では初期構造がKähler構造へ変形できることを仮定していたが、この帰結はその事前の変形可能性を不要にする。Poissonテンソルやspinor類を変えた構造全体の可縮性を述べるものではない。

## 証明の見取り図

まずLelong–Jensen評価を拡張し、正規化した$f$のGaussian型積分評価を得る。Green関数の微分の重み付き評価で$\beta$の項を制御し、Kähler背景上での$|\beta|\_g^2$の最大原理を用いる。

積分評価からただちに一様放物型性は出ない。逆固有値のLᵖ評価を、dilaton flowに由来する重み付きMoser反復でL∞評価へ改善する。重み付きスカラー曲率の下限の単調性が非線形項を制御し、その後にpluriclosed flow固有の高階正則性を適用する。方程式系であるため一般のスカラーEvans–Krylov理論を直接使うわけではない。

負の第一Chern類では相対エントロピーがポテンシャルの平均を制御する。零の場合はYau型Moser反復、時空間平均で正規化したSchwarz補題評価、平均値の振動評価を組み合わせ、一様な時間評価を得る。一般化Kähler–Ricci流が構造を保つという既知の性質とこの収束を合わせ、可縮性を導く。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.11614)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.11614v1) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorems 1.1–1.3; Corollary 1.4
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.11614v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
