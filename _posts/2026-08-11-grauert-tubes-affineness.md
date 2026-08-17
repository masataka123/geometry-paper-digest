---
layout: paper
title: "Revised Demailly's Affineness Criterion and Algebraization of Entire Grauert Tubes"
title_ja: "Demaillyのアフィン性判定法の改訂と全Grauert管の代数化"
authors: "Kyobeom Song"

arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.AG
  - math.DG
arxiv_abstract: >-
  We provide a partial answer to Burns' 1982 conjecture on the affineness of entire Grauert tubes: the
  complement of a codimension-one subset of an entire Grauert tube is affine. This result is obtained
  by establishing a generalized version of Demailly's criterion for affineness of Stein manifolds,
  which may be of independent interest.
topic: several-complex-variables
tags:
  - curvature
  - stein-geometry
arxiv_id: "2605.05582v1"
arxiv_url: "https://arxiv.org/abs/2605.05582"
arxiv_submitted: "2026-05-07"
arxiv_updated: "2026-05-07"
summary: >-
  Stein多様体に対するDemaillyのアフィン性判定法を、Ricciポテンシャルの特異集合を許す形へ拡張する。その応用として、任意の全Grauert管が余次元1の部分集合を除けばアフィン代数多様体で覆われることを示し、Burns予想に部分的な肯定解を与える。
abstract_en: >-
  We provide a partial answer to Burns' 1982 conjecture on the affineness of entire Grauert tubes: the complement of a codimension-one subset of an entire Grauert tube is affine. This result is obtained by establishing a generalized version of Demailly's criterion for affineness of Stein manifolds, which may be of independent interest.
summary_en: ""
abstract_ja: >-
  Burnsが1982年に提起した全Grauert管のアフィン性予想に部分的に答え、全Grauert管から余次元1の部分集合を除いた部分がアフィンになることを示す。そのために、独立にも有用と考えられるDemaillyのStein多様体のアフィン性判定法の一般化を確立する。
abstract_source_url: "https://arxiv.org/abs/2605.05582v1"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2605.05582v1](https://arxiv.org/abs/2605.05582v1)
- **著者:** Kyobeom Song
- **初回投稿日:** 2026年5月7日
- **最終更新日:** 2026年5月7日（v1）
- **主分類・副分類:** math.CV（主分類）, math.AG, math.DG
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

実解析的Riemann多様体 $(M,g)$ の接束の半径 $\varepsilon$ の近傍には、二乗ノルムを強多重劣調和な消耗関数とするStein構造、すなわちGrauert管がある。これが接束全体に延びる全Grauert管 $TM$ は解析的にはSteinだが、代数的にアフィンであるとは限らない。この隔たりを問うのがBurnsの1982年の予想である。

Demaillyの古典的判定法は、有限Monge--Ampère体積、Ricci曲率を制御する関数、有限次元の偶数次コホモロジーからStein多様体のアフィン性を特徴付ける。しかしGrauert管では、計量の解析接続から作る標準的候補が極を持ち、対応するRicciポテンシャルが特異になるため、そのままでは適用できない。

本論文は判定法を改訂し、非可積分集合 $S$ を許した上で、$X\setminus S$ の各点の周りにアフィンなZariski開集合を構成する。さらに位相的条件やStein性を加えれば、準アフィン性やアフィン多様体から超曲面を除いた形まで導く。

全Grauert管への応用では、$g$ の複素化を非退化な有理型対称 $(2,0)$-テンソル $g_{\mathbb C}$ として構成する。その極集合 $S$ の外の各点を含むアフィン開集合が得られ、全Grauert管は余次元1の障害を除いて代数化できる。これはBurns予想そのものの完全解決ではなく、極集合が残り得ることを明示した部分解決である。

## 背景と問題設定

全Grauert管では $\rho=\lVert v\rVert_g^2$ が強多重劣調和で、$\sqrt\rho$ は斉次複素Monge--Ampère方程式を満たす。Stein多様体は豊富な正則関数を持つ一方、アフィン多様体ではそれらが有限型の座標環に由来するため、解析的条件だけから代数性が出ることは非自明である。

改訂判定法で中心になるのは、強多重劣調和消耗関数 $\phi$ と

$$
\operatorname{Vol}(X)=\int_X(dd^c\phi)^n<\infty,
\qquad \beta=dd^c(e^\phi),
$$

および局所可積分関数 $\psi$ に対する

$$
\operatorname{Ric}(\beta)+\frac12dd^c\psi\geq0,
\qquad \psi\leq A\phi+B
$$

である。従来法と違い、$e^{-2\psi}$ が局所可積分でない集合

$$
S=\{x\in X\mid e^{-2\psi}\notin L^1_{\mathrm{loc}}(x)\}
$$

を切り離して扱う。

## 主結果

### 改訂アフィン性判定法（Theorem 1.2）

上の有限体積条件とRicci曲率条件の下で、各 $p\in X\setminus S$ に対し、$b_p(p)=1$ かつ $b_p|_S=0$ を満たす $b_p\in\mathcal O(X)$ が存在し、

$$
X\setminus b_p^{-1}(0)
$$

は滑らかなアフィン多様体と双正則で、$1/b_p$ はその正則関数になる。有限個の点に対応するこれらの開集合は、一つの正規アフィン多様体のZariski開集合として同時に実現できる。

さらに $X\setminus S$ の偶数次実コホモロジーがすべて有限次元なら準アフィンであり、加えて $X\setminus S$ がSteinなら、正規アフィン多様体 $\mathcal A$ と代数的超曲面 $H$ により $X\setminus S\simeq\mathcal A\setminus H$ と書ける。$S=\varnothing$ ならDemaillyの結論である $X$ 自身のアフィン性が回収される。

### 全Grauert管の局所的代数化（Theorem 1.3）

全Grauert管 $TM$ では $g$ が非退化な有理型 $(2,0)$-テンソル $g_{\mathbb C}$ に延長される。その極集合を $S$ とすると、各 $p\in TM\setminus S$ に対して上記の $b_p$ が存在し、$TM\setminus b_p^{-1}(0)$ は滑らかなアフィン多様体になる。したがって、障害は $g_{\mathbb C}$ の極集合という余次元1の集合に局在する。

## 証明の見取り図

改訂判定法では、Ricci下界と成長条件をHörmander型の $L^2$ 評価に結び付け、特異集合を消す正則関数 $b_p$ を構成する。有限Monge--Ampère体積は成長を制御し、コホモロジーの有限次元性は局所的なアフィンモデルを大域的な準アフィン構造へまとめる役割を担う。

Grauert管については、基底計量を有理型に複素化し、

$$
\phi=\log(1+\cosh\lVert v\rVert_g),\qquad
\psi=-\log\lVert\det(g_{\mathbb C})\rVert_\beta
$$

を選ぶ。Introductionは、この $\psi$ の非可積分集合がちょうど $\det(g_{\mathbb C})$ の極集合となり、Theorem 1.2を適用できることを説明している。

## 原論文との対応

- **Abstractページ:** [arXiv:2605.05582v1](https://arxiv.org/abs/2605.05582v1)
- **Introduction:** Section 1（Theorems 1.1--1.3とSection 1.1）
- **Introduction中で言及された主要定理番号:** Theorems 1.2, 1.3
- **論文構成の説明:** Introduction末尾
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
