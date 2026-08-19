---
layout: paper
title: "Demailly-Lelong numbers on complex spaces"
title_ja: "複素空間上のDemailly–Lelong数"
authors: "Chung-Ming Pan"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.AG
arxiv_abstract: >-
  We prove a conjecture proposed by Berman-Boucksom-Eyssidieux-Guedj-Zeriahi, affirming that the Demailly-Lelong number can be determined through a combination of intersection numbers given by the divisorial part of the potential and the SNC divisors over a log resolution of the maximal ideal of a given point. Moreover, this result establishes a pointwise comparison of two different notions of Lelong numbers of plurisubharmonic functions defined on singular complex spaces. We also provide an estimate for quotient singularities and sharp estimates for two-dimensional ADE singularities.
topic: several-complex-variables
tags:
  - singularities
  - pluripotential-theory
  - complex-analytic-spaces
arxiv_id: "2403.08620v2"
arxiv_url: "https://arxiv.org/abs/2403.08620v2"
arxiv_submitted: "2024-03-13"
arxiv_updated: "2024-11-10"
summary: >-
  特異複素空間上の多重劣調和関数について、Demailly–Lelong数を極大イデアルのlog解消上の交点数として表す予想を証明する。これにより通常のslopeとの点ごとの比較を得て、商特異点の評価と二次元ADE特異点での鋭い評価も与える。
abstract_en: ""
summary_en: >-
  The paper studies two local measurements of a plurisubharmonic singularity on a singular complex space. It expresses the Demailly–Lelong number as an intersection product on a log resolution of the maximal ideal, using the divisorial part of the pulled-back potential. This yields a pointwise two-sided comparison with the slope. The author also obtains a general bound for quotient singularities and determines sharp bounds for surface singularities of ADE type.
abstract_ja: >-
  特異複素空間上の多重劣調和関数に対するDemailly–Lelong数を、点の極大イデアルのlog解消上で、potentialの因子的部分と単純正規交差因子から作る交点数として決定する。これにより二種類のLelong数を点ごとに比較できる。さらに商特異点での評価、および二次元ADE特異点に対する鋭い評価を示す。
abstract_source_url: "https://arxiv.org/abs/2403.08620v2"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2403.08620v2](https://arxiv.org/abs/2403.08620v2)
- **著者:** Chung-Ming Pan
- **初回投稿日:** 2024年3月13日
- **最終更新日:** 2024年11月10日
- **主分類・副分類:** math.CV（主分類）, math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかな複素空間では、多重劣調和関数 $\varphi$ の特異性を測るslope $s(\varphi,x)$ とDemailly–Lelong数 $\nu(\varphi,x)$ は一致する。しかし特異点では両者は一般に異なり、既知なのはmultiplicityを介した一方向の不等式だった。

本論文は、Berman–Boucksom–Eyssidieux–Guedj–Zeriahiの予想を証明し、$\nu(\varphi,x)$ を極大イデアルのlog解消上の交点数として表示する。したがって、空間の点 $x$ だけに依存する定数によって二つの量を両側から比較でき、片方が零であることと他方が零であることも同値になる。

さらに二次元ADE特異点では定数を具体的かつ鋭く決定する。$D_k,E_6,E_7,E_8$ 型では下からの一般評価がそのまま等号となる一方、$A_k$ 型では型に応じて比が増大する。一般の有限商特異点に対しても群の位数による上界を与える。

## 背景と問題設定

$X$ を $n$ 次元局所既約な被約複素解析空間、$x\in X$ とする。極大イデアルの局所生成元 $(f_i)$ に対して $\psi_x=(\sum_i|f_i|^2)^{1/2}$ と置くと、slopeは

$$
s(\varphi,x)=\sup\{\gamma\geq0:\varphi\leq\gamma\log\psi_x+O(1)\}
$$

であり、Demailly–Lelong数は

$$
\nu(\varphi,x)=\lim_{r\downarrow0}\int_{\{\psi_x<r\}}dd^c\varphi\wedge(dd^c\log\psi_x)^{n-1}
$$

である。特異点では既知の比較

$$
\operatorname{mult}(X,x)s(\varphi,x)\leq\nu(\varphi,x)
$$

が一般に真の不等式になり得るため、逆向きの局所一様評価と幾何学的表示が問題となる。

## 主結果

### 交点数表示（Theorem A）

$\pi:\widetilde X\to X$ を $\mathfrak m_{X,x}$ のlog解消とし、$\pi^{-1}\mathfrak m_{X,x}=\mathcal O_{\widetilde X}(-E)$、$E=\sum_i m_iE_i$ とする。またSiu分解を

$$
dd^c(\varphi\circ\pi)=\sum_i a_i[E_i]+R=: [D]+R
$$

と書く。このとき

$$
\nu(\varphi,x)=D\cdot(-E)^{n-1}
$$

が成り立つ。特に $x$ のみに依存する $C_x\geq1$ が存在して

$$
\nu(\varphi,x)\leq C_x\operatorname{mult}(X,x)s(\varphi,x)
$$

となる。従来の逆向き不等式と合わせ、$s(\varphi,x)=0$ と $\nu(\varphi,x)=0$ は同値である。

### ADE特異点での鋭い評価（Proposition C）

二次元 $A_k$ 特異点では

$$
\nu(\varphi,x)\leq\frac{k+1}{2}\operatorname{mult}(X,x)s(\varphi,x)=(k+1)s(\varphi,x)
$$

で、この評価は鋭い。$D_k,E_6,E_7,E_8$ 型では

$$
\nu(\varphi,x)=\operatorname{mult}(X,x)s(\varphi,x)=2s(\varphi,x)
$$

が成り立つ。

### 商特異点の評価（Proposition D）

$(X,x)\simeq(\mathbb C^n/G,\pi(0))$ なら、任意の該当する $\varphi$ に対し

$$
\nu(\varphi,x)\leq |G|^{n-1}s(\varphi,x)
$$

を得る。

## 証明の見取り図

解消上で $dd^c\log\psi_x=\sum_i m_i[E_i]+\theta$ と分解する。Demailly–Lelong積分を解消へ引き戻し、滑らかな近似を経て極限を取ると、residual current $R$ は例外因子上に質量を持たず、$\nu$ は係数 $a_i$ と $\theta^{n-1}$ の交点の和になる。一方 $s(\varphi,x)=\min_i(a_i/m_i)$ であり、例外集合の連結性と $-D|_{E_i}$ のpseudo-effectivityから各 $a_i/m_i$ を比較することで上界を導く。ADEの場合は解消グラフとmultiplicityを明示的に計算する。

## 原論文との対応

- **Abstractページ:** [arXiv:2403.08620v2](https://arxiv.org/abs/2403.08620v2)
- **Introduction:** Introduction, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorem A, Corollary B, Proposition C, Proposition D
- **論文構成の説明:** p. 3
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
