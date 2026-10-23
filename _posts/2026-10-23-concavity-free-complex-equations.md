---
layout: paper
title: Concavity-Free $L^\infty$ Estimates and Stability for Fully Nonlinear Complex Equations
title_ja: 凹性を仮定しない複素完全非線形方程式の一様評価と安定性
authors: Ryan Mc Gowan
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AP
- math.CV
arxiv_abstract: In this paper, we extend the $L^\infty$ estimates of Guo-Phong for fully non-linear equations on compact hermitian manifolds to a possibly indefinite reference form satisfying a uniform admissibility criterion. Furthermore, we also establish one-sided stability estimates. Neither result requires homogeneity or concavity of the nonlinear operator.
topic: differential-geometry
tags:
- monge-ampere-equations
- pluripotential-theory
arxiv_id: 2610.31453v1
arxiv_url: https://arxiv.org/abs/2610.31453
arxiv_submitted: '2026-10-22'
arxiv_updated: '2026-10-22'
summary: コンパクトHermitian多様体上の完全非線形方程式に対し、凹性と斉次性を使わずに解のL∞評価と片側安定性を示す。参照(1,1)形式は不定符号でもよいが、一様admissibility条件を満たす必要がある。作用素の偏微分の積の正の下限を、補助Monge–Ampère方程式との比較に利用する。
abstract_en: ''
summary_en: The article replaces concavity assumptions in a class of complex elliptic estimates by a global lower bound on the product of first derivatives of the operator. It permits a real reference form that is not positive definite, provided it stays uniformly inside the admissible cone. Both a zero-order bound and stability with respect to an L1 difference follow. The exponent in the stability result is inherited from earlier work; the extension concerns the structural assumptions.
abstract_ja: コンパクトHermitian多様体上の完全非線形方程式について、Guo–PhongのL∞評価を、一様なadmissibility条件を満たす不定符号の参照形式へ拡張する。さらに片側安定性評価を確立する。どちらの結果も非線形作用素の斉次性や凹性を要求せず、楕円性と偏微分の積の一様正値性を用いる。
abstract_source_url: https://arxiv.org/abs/2610.31453
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.31453v1](https://arxiv.org/abs/2610.31453)
- **著者:** Ryan Mc Gowan
- **初回投稿日:** 2026-10-22
- **最終更新日:** 2026-10-22
- **主分類・副分類:** math.DG（主分類）; math.AP, math.CV
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

複素Monge–Ampère方程式をはじめとする非線形方程式では、解の一様上限評価が幾何学的な存在問題の基本となる。本論文はコンパクトHermitian多様体上で、正値とは限らない参照形式と、凹性を持つとは限らない作用素を許す。

仮定を完全に取り払うわけではない。作用素は固有値ごとに増加し、その偏微分の積には領域全体で正の下限が必要である。また参照形式は、一定の正の形式を差し引いても許容錐の中にとどまる。この条件が、比較に必要な一様性を供給する。

そのもとで解のL∞評価に加え、二つの関数の差の正の部分をL1ノルムから制御する片側安定性を得る。片側という定式化や指数自体は先行研究にも存在し、新規性は凹性・1次斉次性に依存しない枠組みにある。

## 背景と問題設定

$(X,\omega)$は境界のない連結コンパクトHermitian多様体、$\dim\_{\mathbb C}X=n$とする。対称凸錐$\Gamma$と正値関数$f\in C^\infty(\Gamma)$は

$$
\Gamma\_n\subseteq\Gamma\subseteq\Gamma\_1,\qquad
\frac{\partial f}{\partial\lambda\_j}>0,\qquad
\prod\_{j=1}^{n}\frac{\partial f}{\partial\lambda\_j}\geq\gamma>0
$$

を満たす。$\Gamma\_k$は最初の$k$個の基本対称式が正になる錐である。滑らかな実(1,1)形式$\chi$には、固定した$c\_0,K\_\chi>0$について

$$
\lambda\_\omega[\chi-c\_0\omega]\in\Gamma,\qquad
\operatorname{Tr}\_\omega\chi\leq K\_\chi
$$

を要求する。$\chi\_u=\chi+i\partial\bar\partial u$とし、その固有値が$\Gamma$に入る$u$をadmissibleと呼ぶ。

## 主結果

### 一様な零階評価（Theorem 1.1）

$p>1$を固定し、admissibleな$u\in C^2(X)$が

$$
f(\lambda\_\omega[\chi\_u])=e^F,\qquad
\sup\_Xu=0,\qquad \Vert e^{nF}\Vert \_{L^p(X,\omega)}\leq K
$$

を満たすなら、$\Vert u\Vert \_{L^\infty(X)}\leq C$となる。$C$はIntroductionの定理文で$X,\omega,n,p,K,K\_\chi,\gamma$のみに依存するとされる。参照形式の正定値性ではなく一様admissibilityを用いる点、$f$の凹性と斉次性を仮定しない点が拡張である。

### 片側安定性（Theorem 1.2）

同じ仮定のもと、admissibleな$\phi,\varphi\in C^2(X)$について$\sup\_X\phi=0$、$\sup\_X\varphi\leq0$とし、$\phi$が右辺$e^G$の方程式と$\Vert e^{nG}\Vert \_{L^p}\leq K$を満たすとする。任意の

$$
0<\alpha<\frac{p-1}{np+p-1}
$$

に対し

$$
\Vert (\varphi-\phi)\_+\Vert \_{L^\infty}
\leq C\Vert (\varphi-\phi)\_+\Vert \_{L^1}^{\alpha}
$$

が成り立つ。$(\cdot)\_+$は正の部分を表す。比較関数$\varphi$には、同じ形の右辺評価を課さずに片側の差を制御する。

### 弱い比較関数と両側評価（Corollaries 1.1, 1.2）

片側評価の比較関数は、上から接する滑らかな試験関数によって許容性を判定する連続な弱$\chi$-admissible関数へ拡張できる。また二つの滑らかな解がともに上限0で、対応する右辺について$\Vert e^{nF}\Vert \_p+\Vert e^{nG}\Vert \_p\leq2K$なら、同じ指数範囲で

$$
\Vert \varphi-\phi\Vert \_{L^\infty}\leq C\Vert \varphi-\phi\Vert \_{L^1}^{\alpha}
$$

となる。これは解の差のL1制御を一様制御へ引き上げる安定性である。

## 証明の見取り図

許容形式$A$と正定値形式$P$に対し、正方向に作用素を積分すると

$$
f(\lambda\_\omega[A+P])\geq f(\lambda\_\omega[A])
+n\gamma^{1/n}\det(\omega^{-1}P)^{1/n}
$$

を得る。この比較が凹性の代わりを担う。零階評価では解の最小点の近傍で局所Dirichlet Monge–Ampère方程式と比較する。安定性では差が大きい集合に右辺を集中させた大域的補助方程式を用い、許容な部分と正のMonge–Ampère増分に分解して同じ不等式を適用する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.31453)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.31453v1) — Section 1、PDF pp. 1–4。
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2、Corollaries 1.1, 1.2。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.31453v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
