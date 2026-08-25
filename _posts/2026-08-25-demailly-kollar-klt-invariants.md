---
layout: paper
title: "Demailly-Kollár continuity on klt pairs, and applications to alpha and delta invariants"
title_ja: "klt対上のDemailly--Kollár連続性とalpha・delta不変量への応用"
authors: "Tamás Darvas, Kewei Zhang"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.CV
arxiv_abstract: >-
  We establish a Demailly-Kollár type continuity theorem for plurisubharmonic functions with respect to adapted measures on normal complex analytic klt pairs. As applications, we prove the equality of the analytic and divisorial versions of the alpha and delta invariants on compact normal Kähler klt pairs, thereby completing a program initiated by the second author. We further show that the two local alpha invariants introduced by Guedj and Trusiani for an isolated log terminal singularity coincide and that their common value is the nth root of Li's normalized volume. These identities have geometric consequences. The equality for the delta invariant yields a Yau--Tian--Donaldson type divisorial criterion for the solvability of twisted Kähler-Einstein equations in big cohomology classes, without a semipositivity assumption on the twist. The local alpha identity determines algebraically the critical exponent governing the existence of positively curved KE metrics near an isolated log terminal singularity, thus confirming a conjecture of Guedj and Trusiani.
topic: differential-geometry
tags:
  - singularities
  - pluripotential-theory
  - k-stability
  - kahler-einstein-metrics
  - monge-ampere-equations
arxiv_id: "2608.23505v1"
arxiv_url: "https://arxiv.org/abs/2608.23505"
arxiv_submitted: "2026-08-24"
arxiv_updated: "2026-08-24"
summary: >-
  正規複素解析klt対の適合測度に関してDemailly--Kollár型連続性を確立し、解析的alpha・delta不変量と因子的定義が一致することを示す。big類におけるtwisted Kähler--Einstein方程式へ因子的Yau--Tian--Donaldson判定を与え、孤立log terminal特異点の局所alpha不変量を正規化体積と結び付ける。
abstract_en: ""
summary_en: >-
  The paper extends a fundamental continuity principle for singularity exponents to normal analytic klt pairs equipped with their adapted measures. It then identifies analytic integrability thresholds with divisorial alpha and delta invariants on compact normal Kähler pairs. These comparisons produce a valuative criterion for twisted Kähler--Einstein equations in big classes and relate a local metric threshold at an isolated singularity to normalized volume.
abstract_ja: >-
  正規複素解析klt対上の多重劣調和関数について、適合測度に対するDemailly--Kollár型連続性を証明する。応用として、コンパクト正規Kähler klt対の解析的alpha・delta不変量と因子的不変量の一致を得る。さらに孤立log terminal特異点の二つの局所alpha不変量が一致し、その共通値がLiの正規化体積の次元乗根であることを示す。これにより、半正値性を仮定しないtwisted Kähler--Einstein方程式の可解性判定と、局所的な正曲率Kähler--Einstein計量の臨界指数の代数的記述が導かれる。
abstract_source_url: "https://arxiv.org/abs/2608.23505"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.23505](https://arxiv.org/abs/2608.23505)
- **著者:** Tamás Darvas, Kewei Zhang
- **初回投稿日・最終更新日:** 2026年8月24日
- **主分類・副分類:** math.DG（主分類）, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

多重ポテンシャル論では、多重劣調和関数の特異性が正則対象の延長、非線形方程式の可解性、双有理幾何、標準計量の安定性と結び付く。Demailly--Kollárの連続性定理は滑らかな複素多様体上で複素特異性指数の半連続性を与えるが、特異空間では解消上の測度に二つのpsh重みの差が現れ、既存定理を直接適用できない。

本論文は正規複素解析klt対 $(X,\Delta)$ とその適合測度 $\mu$ に対して、この障害を回避した連続性定理を確立する。中心となるのは、$u_j\to u$ が局所 $L^1$ 収束し $e^{-\lambda u}$ が局所可積分なら、少し強い指数での一様可積分性と $e^{-\lambda u_j}\to e^{-\lambda u}$ の $L^1(\mu)$ 収束を得る結果である。

この解析定理から、bigなKähler類に対するtwisted alpha・delta不変量の解析的定義と因子的定義が一致する。delta不変量の同一視はtwistの半正値性を仮定せずにtwisted Kähler--Einstein方程式の可解性を因子的条件へ翻訳する。

さらに孤立log terminal特異点について、Guedj--Trusianiの二つの局所alpha不変量を同一視し、その値をLiの正規化体積と結び付ける。大域的な標準計量問題と局所特異点不変量が、同じ積分可能性の原理を介して接続される点が重要である。

## 背景と問題設定

対 $(X,\Delta)$ のlog解消上で

$$
K_Y=\pi^*(K_X+\Delta)+\sum_j a_jE_j,\qquad a_j>-1
$$

と書く。適合測度の引き戻しは局所的に $e^G\prod_i|z_i|^{2a_i}dV_Y$ の形を持ち、klt条件が局所可積分性を保証する。コンパクト集合 $K\Subset\Omega$ に対する積分可能性指数を

$$
c_{\mu,K}[u]=\sup\{c>0:e^{-cu}\in L^1(U,\mu)\text{ for some }K\subset U\Subset\Omega\}
$$

と置くことが主定理の定式化を支える。

## 主結果

### klt Demailly--Kollár連続性（Theorem 1.1）

正規解析klt対上で $u_j,u\in\mathrm{PSH}(\Omega)$ が局所 $L^1$ 収束し、ある $U$ で $\int_Ue^{-\lambda u}d\mu<\infty$ とする。このとき $\lambda<c_{\mu,K}[u]$ であり、任意の $\lambda<t<c_{\mu,K}[u]$ に対して適切な近傍 $W$ 上で

$$
e^{-\lambda u_j}\longrightarrow e^{-\lambda u}\quad\text{in }L^1(W,\mu)
$$

が成り立つ。

### alpha・delta不変量の一致（Theorems 1.2以降）

コンパクト正規Kähler klt対、big類 $\{\theta\}$、twist $\psi$ に対し、Introductionは解析的alpha不変量と因子的alpha不変量の等式

$$
\alpha_\psi(X,\Delta,\{\theta\})=\alpha^A_\psi(X,\Delta,\{\theta\})
$$

を述べる。同様のdelta不変量の一致から、twisted Kähler--Einstein方程式の可解性に対する因子的判定が得られる。

## 証明の見取り図

特異集合と $\Delta$ の台を含む零点集合を持つ正則関数で空間を切り、正則値の滑らかな超曲面上では古典的Demailly--Kollár定理を用いる。CaoまたはZhou--ZhuのOhsawa--Takegoshi延長定理で切片上の正則関数を周囲へ延長し、Vitali型議論と正規空間上の正則関数の性質を組み合わせて収束を戻す。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.23505](https://arxiv.org/abs/2608.23505)
- **Introduction:** Section 1, pp. 2--8
- **主要定理:** Theorems 1.1, 1.2およびIntroductionで続いて述べられるdelta・局所alpha不変量の結果
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
