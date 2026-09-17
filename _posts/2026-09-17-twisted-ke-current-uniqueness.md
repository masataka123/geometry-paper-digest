---
layout: paper
title: "A solution to Berndtsson's problem and uniqueness of twisted KE currents"
title_ja: "Berndtsson問題の解決とtwisted Kähler–Einstein currentの一意性"
authors: "Yinji Li, Haoyuan Sun, Zhiwei Wang, Xiangyu Zhou"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.DG
arxiv_abstract: >-
  We prove the uniqueness conjecture on the twisted Kähler-Einstein currents in big cohomology classes, by solving a problem of Bo Berndtsson posed in his work on the uniqueness theorem of Käher-Einstein metrics.
topic: several-complex-variables
tags:
  - kahler-einstein-metrics
  - pluripotential-theory
  - monge-ampere-equations
  - positivity
arxiv_id: "2609.18141v1"
arxiv_url: "https://arxiv.org/abs/2609.18141"
arxiv_submitted: "2026-09-16"
arxiv_updated: "2026-09-16"
summary: >-
  compact Kähler多様体のbig cohomology classにおけるtwisted Kähler–Einstein currentについて、二つの解がtwistを保つ正則flowで結ばれるBando–Mabuchi型一意性を証明する。Berndtssonのlog-integral凸性の等号問題を、$H^{0,1}(X)=0$ やsubgeodesicの特異性型への制限なしに解き、$\delta_\psi([\theta])>1$ の下では実際の一意性を得る。
abstract_en: ""
summary_en: >-
  The paper resolves an equality problem in Berndtsson's convexity method without imposing vanishing of the first Dolbeault cohomology or boundedness of the subgeodesic. It derives a holomorphic flow from affine behavior of a logarithmic integral under minimal integrability assumptions. Applied to finite-energy geodesics in a big cohomology class, this gives an orbit description for all twisted Kähler–Einstein currents. A strict delta-invariant condition then upgrades uniqueness modulo symmetry to literal uniqueness.
abstract_ja: >-
  big cohomology class上のtwisted Kähler–Einstein currentの一意性問題を扱う。Berndtssonが提起したlog-integral凸性の等号問題を解き、二つの解をtwistを消す正則ベクトル場のflowで結ぶ。さらにdelta不変量が1より大きいこととDing汎関数のproperness、最小特異性をもつ解の一意存在との同値性を示す。
abstract_source_url: "https://arxiv.org/abs/2609.18141"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.18141](https://arxiv.org/abs/2609.18141)
- **著者:** Yinji Li, Haoyuan Sun, Zhiwei Wang, Xiangyu Zhou
- **初回投稿日・最終更新日:** 2026年9月16日
- **主分類・副分類:** math.CV（主分類）, math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kähler–Einstein計量の一意性は、正則自己同型による非一意性をどう記述するかというBando–Mabuchi型問題を伴う。本論文はcompact Kähler多様体のbig classと有限energy currentへこの問題を拡張する。

出発点はBerndtssonのlog-integral凸性の等号場合である。従来は $H^{0,1}(X)=0$ や一様有界なsubgeodesicを仮定して正則ベクトル場を得ていた。本論文は反標準束がpseudo-effectiveで、各slice上の $e^{-\varphi_s}$ が可積分という条件まで弱める。

応用として、big class $[\theta]$ におけるtwisted Kähler–Einstein方程式

$$
\langle(\theta+dd^c\varphi)^n\rangle=e^{-\varphi-\psi}\Omega
$$

の任意の二解を、twist $\eta_\psi$ を保つ正則flowの同じorbitに置く。これは安定性を仮定しない一意性modulo symmetryである。

さらに $\delta_\psi([\theta])>1$ の一様安定性の下ではflow方向も消え、最小特異性をもつ解が一意になる。これによりDarvas–Zhangの一意性予想が解決される。

## 背景と問題設定

$\theta=\operatorname{Ric}(\Omega)$ とし、$\theta$-psh subgeodesic $(\varphi_s)$ に対して

$$
F(s)=-\log\int_X e^{-\varphi_s}\Omega
$$

を考える。Berndtssonの問題は、$F$ がaffineなら、弱い可積分性だけからsubgeodesicを運ぶ正則ベクトル場が存在するかを問うものであった。

## 主結果

### Berndtsson問題（Theorem A）

$-K_X$ がpseudo-effectiveで $e^{-\varphi_s}\in L^1(X,\Omega)$、かつ $F$ がaffineなら、正則ベクトル場 $V$ が存在し、その実flow $G_t$ は

$$
G_{s-s_0}^*(\theta+dd_X^c\varphi_s)=\theta+dd_X^c\varphi_{s_0}
$$

を満たす。$H^{0,1}(X)=0$ も特異性型への制限も不要である。

### 解のorbit記述（Theorem B）

二つのnormalized solutionを結ぶ有限energy弱測地線上の各点も解であり、一本の正則flow $\Lambda$ が対応するcurrentを互いに移す。同時に $\iota_V\eta_\psi=0$ であるため、非一意性はtwistを保つ正則対称性だけから生じる。

### 一意性判定（Theorem C）

適切な可積分性の下で、$\delta_\psi([\theta])>1$、Ding汎関数のproperness、twisted Monge–Ampère方程式の最小特異性解の一意存在が同値である。

## 証明の見取り図

strong openness theoremから局所的な $L^p$ 改善とsubgeodesic速度の積分評価を得る。正則化列に対する重み付き $D'$ 方程式をHörmanderの $L^2$ 評価で解き、質量集中を排除して正則ベクトル場を極限で構成する。exact test formの族を使ってparameter依存性を除く点が、$H^{0,1}(X)=0$ を不要にする鍵である。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.18141](https://arxiv.org/abs/2609.18141)
- **Introduction:** Section 1, pp. 2–7
- **主要結果:** Theorems A–C
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
