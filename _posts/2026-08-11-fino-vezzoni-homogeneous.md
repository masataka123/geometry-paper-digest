---
layout: paper
title: "The Fino--Vezzoni conjecture on homogeneous spaces"
title_ja: "等質空間上のFino–Vezzoni予想"
authors: "Joseph Kwong"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
topic: differential-geometry
tags: []
arxiv_id: "2608.08665v1"
arxiv_url: "https://arxiv.org/abs/2608.08665"
arxiv_submitted: "2026-08-09"
arxiv_updated: "2026-08-09"
summary: >-
  balanced計量とpluriclosed計量をともに持つコンパクト複素多様体はKählerか、というFino–Vezzoni予想を等質空間のコンパクト離散商で証明する。さらに実第一Chern類が消える場合、不変pluriclosed flowが永続し、平坦Kähler計量へ収束することを示す。
abstract_en: >-
  We prove that a compact discrete quotient of a complex homogeneous space with compact isotropy is Kähler whenever it admits both a balanced metric and a pluriclosed metric. Moreover, if its real first Chern class vanishes, then the pluriclosed flow starting from any invariant pluriclosed metric exists for all time and converges smoothly to a flat Kähler metric.
summary_en: ""
abstract_ja: >-
  コンパクト等方部分群を持つ複素等質空間のコンパクト離散商がbalanced計量とpluriclosed計量をともに持つなら、Kähler計量も持つことを証明する。さらに実第一Chern類が消えるとき、任意の不変pluriclosed計量から始まるpluriclosed flowは全時間存在し、平坦Kähler計量へ滑らかに収束する。
abstract_source_url: "https://arxiv.org/abs/2608.08665"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.08665v1](https://arxiv.org/abs/2608.08665)
- **著者:** Joseph Kwong
- **初回投稿日・最終更新日:** 2026年8月9日
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

複素次元 $n\ge2$ のHermite多様体で、$d\omega^{n-1}=0$ を満たす計量をbalanced、$\partial\bar\partial\omega=0$ を満たす計量をpluriclosedという。Kähler計量は両方の条件を満たす。Fino–Vezzoni予想は、コンパクト複素多様体が二種類の計量を（同じ計量でなくても）持てばKähler計量を持つ、と予想する。

本論文は、コンパクト等方群を持つ複素等質空間 $X$ のコンパクト離散商 $Y=\Gamma\backslash X$ でこの予想を証明する。等方群が自明なLie群の格子商では、得られるKähler計量は平坦である。

さらに $c_1(Y)=0$ の場合、不変pluriclosed計量から始めたpluriclosed flowは有限時間で特異化せず、同じ不変Aeppli slice内の一意なKähler計量へ滑らかに収束する。その極限は平坦であり、存在定理と幾何流による選択原理が一つの有限次元変分構造に統合される。

## 背景と問題設定

$G$ が $X$ に推移的に正則作用し等方群がコンパクト、$\Gamma\le G$ が自由かつ余コンパクトに作用する状況を考える。不変Hermite計量 $\omega_0$ に対し、不変Aeppli方向

$$
A=\{\partial\alpha+\bar\partial\bar\alpha:\alpha\text{ は }G\text{-不変 }(1,0)\text{-形式}\}
$$

とslice $S=\{\omega\in\omega_0+A:\omega>0\}$ を導入する。pluriclosedな $\omega_0$ から出発すればslice内の全計量もpluriclosedである。

## 主結果

### 等質空間商でのFino–Vezzoni予想（Theorem C）

上の等質性仮定の下で、$Y$ がbalanced計量とpluriclosed計量を持つならKähler計量を持つ。特にLie群のコンパクト格子商では平坦Kähler計量が存在する。

### Aeppli slice内の一意性（Theorem F）

$Y$ がbalanced計量を持つとする。このとき任意の $G$-不変Hermite計量の不変Aeppli sliceには、一意なbalanced計量 $\omega_*$ が存在する。出発点がpluriclosedなら $\omega_*$ はbalancedかつpluriclosedであるためKählerとなる。

### Pluriclosed flowの収束（Theorem H）

さらに実第一Chern類 $c_1(Y)=0$ を仮定する。任意の $G$-不変pluriclosed初期計量からのflow

$$
\frac{\partial}{\partial t}\omega(t)=-(\rho^B_{\omega(t)})^{1,1}
$$

は全時間存在し、初期計量のsliceに留まり、その中の一意な平坦Kähler計量 $\omega_*$ へ滑らかに収束する。

## 証明の見取り図

まず平均化によりbalanced計量を不変化する。不変計量の有限次元空間では、balanced条件が体積汎関数 $V(\omega)=\frac1{n!}\int_Y\omega^n$ のAeppli slice上の臨界点条件と一致する。sliceの有界性と $\log V$ の狭義凹性から臨界点の存在一意性を得る。

$c_1(Y)=0$ のときpluriclosed flowはslice上の常微分方程式となる。$\log V$ がproperな狭義Lyapunov関数として働き、一意な平衡点への大域存在と収束を与える。最後にHanoの定理などから極限の平坦性を導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.08665](https://arxiv.org/abs/2608.08665)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorems C, F, H; Corollaries D, E
- **論文構成・証明方針:** Section 1.1, p. 3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
