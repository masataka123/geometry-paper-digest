---
layout: paper
title: Griffiths positivity does not imply positivity of the top Chern form
title_ja: Griffiths正値性から最高Chern形式の正値性は従わない
authors: Yun-Heng Du
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: |-
  For every integer $r\geq9$, we construct a smooth Griffiths-positive Hermitian metric on $\mathcal O_{\mathbb P^r}(1)^{\oplus r}$ whose top Chern form is pointwise negative on a nonempty open set. This gives counterexamples on compact projective manifolds to Griffiths' conjecture on the positivity of Chern--Weil forms.
topic: several-complex-variables
tags:
- positivity
- chern-classes
- vector-bundles-sheaves
arxiv_id: 2610.05931v1
arxiv_url: https://arxiv.org/abs/2610.05931
arxiv_submitted: '2026-10-05'
arxiv_updated: '2026-10-05'
summary: |-
  射影空間上の豊富な直線束の直和に、Griffiths正値でありながら最高Chern形式が開集合上で負となるHermitian計量を構成する。反例は階数9以上で得られ、束の数値的正値性と、指定した計量のChern–Weil形式の点ごとの正値性との違いを明らかにする。
abstract_en: ''
summary_en: |-
  The paper separates a curvature condition on a bundle from positivity of its characteristic differential forms. Its examples use an ample split bundle on projective space, so the underlying algebraic positivity is particularly simple. A construction with positive matrix maps supplies a local obstruction, which is then retained in a global metric. The result leaves the smallest possible rank of such an obstruction undetermined.
abstract_ja: |-
  任意の整数 $r\geq9$ に対し、射影空間 $\mathbb P^r$ 上の束 $\mathcal O_{\mathbb P^r}(1)^{\oplus r}$ にGriffiths正値な滑らかなHermitian計量を構成し、その最高Chern形式が空でない開集合上で負になることを示す。これにより、Griffiths正値性からChern–Weil形式の正値性を導く予想に、コンパクト射影多様体上で反例を与える。
abstract_source_url: https://arxiv.org/abs/2610.05931
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.05931v1](https://arxiv.org/abs/2610.05931)
- **著者:** Yun-Heng Du
- **初回投稿日:** 2026-10-05
- **最終更新日:** 2026-10-05
- **主分類・副分類:** math.CV（主分類）、副分類なし
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

正則ベクトル束のGriffiths正値性は、接方向と束の方向を一つずつ選んだときの曲率の符号を制御する。一方、Chern形式は曲率の複数成分を組み合わせた行列式から得られる。本論文は、前者の正値性が後者の正値性を保証するかというGriffithsの予想を扱う。

著者は階数9以上で、この含意が成立しないと主張する。舞台は射影空間であり、対象の束も豊富な直線束の直和である。特異空間や複雑な束を使わず、計量を選ぶことで最高Chern形式を開集合上で負にする点が特徴である。

この結果は、豊富な束のChern数に関する既知の数値的正値性を否定するものではない。コホモロジー類や積分値の正値性と、ある計量が定める微分形式の各点での符号を区別する必要がある。また、反例が存在する最小階数の決定は未解決として残る。

## 背景と問題設定

複素多様体 $X$ 上のHermitian正則ベクトル束 $(E,h)$ がGriffiths正値であるとは、任意の非零な $u\in T_x^{1,0}X$ と $v\in E_x$ に対して

<div>
$$
\langle R^h(u,\bar u)v,v\rangle_h>0
$$
</div>

が成り立つことである。IntroductionはChern形式を

<div>
$$
\det\!\left(I_r+s\frac{i}{2\pi}R^h\right)
=\sum_{q=0}^{r}s^q c_q(E,h)
$$
</div>

で正規化する。Griffithsの予想は、Griffiths正値な束から作るSchur形式の正値性を求める。最高次数では各種の微分形式の正値錐が一致するため、最高Chern形式が負になる例は、この予想への直接的な反例となる。

Introductionは低次数での肯定的結果、Nakano正値性などのより強い曲率仮定による結果、豊富な束に対するFulton–Lazarsfeldの数値的正値性を整理する。今回の問題は、それらを指定したHermitian計量の点ごとの形式へ移せるかという点にある。

## 主結果

### 主定理：最高Chern形式が負になるGriffiths正値計量（Theorem 1.1）

任意の整数 $r\geq9$ に対し、

<div>
$$
E_r=\mathcal O_{\mathbb P^r}(1)^{\oplus r}
$$
</div>

は、$\mathbb P^r$ 全体でGriffiths正値な滑らかなHermitian計量 $h_r$ を持ち、空でない開集合 $U\subset\mathbb P^r$ 上で

<div>
$$
c_r(E_r,h_r)|_U\lt 0
$$
</div>

となる。最後の不等号は最高次数の実形式の点ごとの負値性を表す。束が豊富であることやChern類の数値的性質ではなく、曲率条件からChern–Weil代表の符号を推論することが破綻する。

## 証明の見取り図

Introductionは、曲率の問題を複素行列空間の正線形写像に移す。写像 $\Phi:M_n(\mathbb C)\to M_n(\mathbb C)$ に対して、最高Chern形式の係数を

<div>
$$
F_n(\Phi)=\det(\partial_Y)\det\Phi(Y)
$$
</div>

と表す。階数1の正半定値行列に対する正値性を保ったまま、この係数を負にすることが目標となる。

複素Gaussian行列による積分表示とCayley恒等式を使い、階数9の写像族について $F_9(\Phi_t)=-1536t^3$ を得る。微小なtrace項で厳密な正値性を確保し、追加の対角ブロックで任意の階数 $r\geq9$ へ拡張する。最後に局所計量を射影空間のFubini–Study直和計量へ接続し、原点付近の負の最高Chern形式と大域的Griffiths正値性を両立させる。ここではIntroductionに示された構成方針を紹介しており、後続節の証明を検証したものではない。

## 原論文との対応

- **Abstractページ:** [arXiv:2610.05931](https://arxiv.org/abs/2610.05931)
- **Introduction:** Section 1、pp. 1–5。Section 2開始前までを確認。
- **主要定理:** Theorem 1.1。構成の説明はSections 1.2–1.3。
- **論文構成:** p. 5。Section 2で局所の行列写像、Section 3で高階数への拡張と大域化を扱う。
- **確認バージョン:** v1。
- **確認ライセンス:** arXiv non-exclusive distribution license。
- **source_scope:** Abstract and Introduction。
