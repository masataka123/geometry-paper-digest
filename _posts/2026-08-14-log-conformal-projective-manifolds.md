---
layout: paper
title: "Log-Conformal Projective Manifolds"
title_ja: "対数的共形構造を持つ射影多様体"
authors: "Maurício Corrêa, Alex Massarenti"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.DG
arxiv_abstract: >-
  Let $(X,Δ)$ be a smooth complex projective simple normal crossing pair of dimension $n\geq 3$
  endowed with an everywhere nondegenerate logarithmic conformal tensor. If $K_X+Δ$ is not nef, then
  precisely one of the following mutually exclusive alternatives occurs: either $Δ=\varnothing$ and
  $X\simeq Q^n$; or $X\simeq \mathbb{P}^n$ and $Δ$ is a hyperplane; or $n=2m$ is even and $(X,Δ)$
  admits a rational maximal isotropic fibration whose geometric generic fibre is the log pair
  $(\mathbb{P}^m,H)$. If $K_X+Δ\equiv 0$, then, under a Bochner extension principle and an
  irreducibility assumption on the restricted holonomy of a complete Ricci-flat Kähler metric on
  $M:=X\setminus Δ$, the existence of a logarithmic conformal tensor with trivial conformal line
  bundle forces $M$ to be semi-abelian and $(X,Δ)$ to be its toroidal compactification.
topic: algebraic-geometry
tags:
  - birational-geometry
  - positivity
  - uniformization
arxiv_id: "2604.16215v1"
arxiv_url: "https://arxiv.org/abs/2604.16215"
arxiv_submitted: "2026-04-17"
arxiv_updated: "2026-04-17"
summary: >-
  単純正規交叉対上の非退化な対数的共形テンソルが射影多様体の双有理幾何をどこまで剛直化するかを分類する。対数標準類がnefでない場合は二つの剛直モデルまたは偶数次元の最大等方ファイブレーションに限られ、数値的自明の場合には計量・holonomy仮定の下で半Abel多様体による一意化を得る。
abstract_en: >-
  Let $(X,\Delta)$ be a smooth complex projective simple normal crossing pair of dimension $n\geq 3$ endowed with an everywhere nondegenerate logarithmic conformal tensor. If $K_X+\Delta$ is not nef, then precisely one of the following mutually exclusive alternatives occurs: either $\Delta=\varnothing$ and $X\simeq Q^n$; or $X\simeq \mathbb{P}^n$ and $\Delta$ is a hyperplane; or $n=2m$ is even and $(X,\Delta)$ admits a rational maximal isotropic fibration whose geometric generic fibre is the log pair $(\mathbb{P}^m,H)$. If $K_X+\Delta\equiv 0$, then, under a Bochner extension principle and an irreducibility assumption on the restricted holonomy of a complete Ricci-flat Kähler metric on $M:=X\setminus \Delta$, the existence of a logarithmic conformal tensor with trivial conformal line bundle forces $M$ to be semi-abelian and $(X,\Delta)$ to be its toroidal compactification.
summary_en: ""
abstract_ja: >-
  次元 $n\ge3$ の滑らかな複素射影単純正規交叉対 $(X,\Delta)$ が至る所非退化な対数的共形テンソルを持つとする。$K_X+\Delta$ がnefでなければ、境界のない滑らかな二次超曲面、超平面を境界とする射影空間、または偶数次元で一般ファイバーが $(\mathbb P^m,H)$ となる有理最大等方ファイブレーションのいずれかになる。$K_X+\Delta\equiv0$ の場合には、開部分上の完全Ricci平坦Kähler計量にBochner拡張性とholonomyの仮定を課すと、共形線束が自明な対数的共形テンソルは開部分を半Abel多様体にし、対をそのtoroidal compactificationにする。
abstract_source_url: "https://arxiv.org/abs/2604.16215"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2604.16215v1](https://arxiv.org/abs/2604.16215v1)
- **著者:** Maurício Corrêa, Alex Massarenti
- **初回投稿日・最終更新日:** 2026年4月17日（v1）
- **主分類・副分類:** math.AG（主分類）、math.DG
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

共形構造は計量そのものではなくnull coneを指定し、古典的な複素射影幾何では二次超曲面など強い剛性を生む。本論文は境界因子に沿う対数的接束 $T_X(-\log\Delta)$ 上の非退化共形テンソルへ範囲を広げ、境界が新しい幾何を許すかを問う。

対数標準因子 $K_X+\Delta$ がnefでない領域では、可能性を三つに分類する。古典的な滑らかな二次超曲面、超平面境界を持つ射影空間に加え、偶数次元で最大等方部分空間を一般ファイバーとする有理ファイブレーションが、境界固有の第三の型として現れる。

数値的Calabi–Yau領域では、開部分 $M=X\setminus\Delta$ の完全Ricci平坦Kähler計量にBochner拡張性、既約restricted holonomy、平坦接続の自明monodromyを仮定する。このとき共形線束が自明なら $M$ は半Abel多様体で、$(X,\Delta)$ はそのtoroidal compactificationになる。

## 背景と問題設定

対象は

$$
g\in H^0\!\left(X,\operatorname{Sym}^2\Omega_X^1(\log\Delta)\otimes N\right)
$$

という各点で非退化なテンソルである。ここで $N$ は共形線束で、$g$ は対数的接方向にnull coneを定める。MMPに現れる境界と、共形・接触・twistor的幾何を同じ枠内で扱うことが動機である。

## 主結果

### 非nefの場合の分類（Theorem 1.1）

次元 $n\ge3$ の滑らかな射影snc対 $(X,\Delta)$ が非退化な対数的共形テンソルを持ち、$K_X+\Delta$ がnefでないとする。このとき排他的に次のいずれかが成り立つ。

1. $\Delta=\varnothing$ かつ $X\simeq Q^n$。
2. $X\simeq\mathbb P^n$ かつ $\Delta$ は超平面。
3. $n=2m$ で、有理最大等方ファイブレーション $\pi:X\dashrightarrow Y$ が存在し、その幾何学的一般ファイバーは $(\mathbb P^m,H)$。

第三の場合、稠密開集合上で $\pi$ は射影束となり、ある線束 $L$ と完全列

$$
0\longrightarrow\mathcal O_Y\longrightarrow V\longrightarrow T_Y\otimes L^{-1}\longrightarrow0
$$

が存在して、対は $(\mathbb P(V),\mathbb P(T_Y\otimes L^{-1}))$ と同型になる。

### 半Abel一意化（Theorem 1.2）

$K_X+\Delta\equiv0$ とし、$M=X\setminus\Delta$ がBochner拡張条件と既約restricted holonomy条件を満たす完全Ricci平坦Kähler計量を持つとする。さらに $N\simeq\mathcal O_X$ で、誘導される $T_M$ 上の平坦接続のmonodromyが自明なら、$M$ は半Abel多様体であり、$(X,\Delta)$ はそのtoroidal compactificationである。

## 証明の見取り図

非nefの場合、共形テンソルが共形線束に課す数値条件を抽出し、負の端射線を張る $(K_X+\Delta)$-極小有理曲線を調べる。曲線に沿う対数的 $\mathbb A^1$-normal formと対数的接束の分裂からnullityの鋭い三分岐を得て、二次超曲面、超平面付き射影空間、最大等方ファイブレーションへ振り分ける。数値的自明の場合はBochner原理とholonomyを用いて共形テンソルを平行化し、monodromy条件から半Abel一意化へ進む。

## 原論文との対応

- **Abstractページ:** [arXiv:2604.16215v1](https://arxiv.org/abs/2604.16215v1)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中の主要結果:** Theorems 1.1, 1.2
- **論文構成:** Sections 2–4で非nef分類、Section 5で数値的自明な場合、Sections 6–7でCartan幾何と境界収縮
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
