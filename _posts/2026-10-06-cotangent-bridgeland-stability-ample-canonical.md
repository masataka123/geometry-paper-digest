---
layout: paper
title: Stability of the Cotangent Bundle on Surfaces with Ample Canonical Class
title_ja: 豊富な標準類を持つ曲面の余接束の安定性
authors: Tristan C. Collins, Jason Lo, Yun Shi, Shing-Tung Yau
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: |-
  In this article, we study the Bridgeland stability of the cotangent bundle on K3 surfaces and surfaces with ample canonical class. On a surface $X$ with ample canonical class $K$, we find values $t_0>0$ such that the cotangent bundle is semistable with respect to the Bridgeland stability $\sigma_{tK}$ for all $t > t_0$. We also study special cases such as the fake projective planes and the fake quadrics.
topic: algebraic-geometry
tags:
- stability
- vector-bundles-sheaves
- chern-classes
arxiv_id: 2610.04244v1
arxiv_url: https://arxiv.org/abs/2610.04244
arxiv_submitted: '2026-10-03'
arxiv_updated: '2026-10-03'
summary: |-
  豊富な標準類 $K$ を持つ滑らかな射影曲面で、余接束のBridgeland半安定性が成り立つ偏極 $tK$ の範囲を具体的に評価する。twisted Gieseker半安定性を仮定した一般定理に加え、fake projective planeやfake quadricでより強い結果を得る。Chern数を用いて安定性の壁の位置を制御する研究である。
abstract_en: ''
summary_en: |-
  This study asks how far the polarization can move away from the large-volume regime while retaining stability of a surface's cotangent bundle. The general estimates depend on the surface's Chern numbers and a twisted Gieseker semistability hypothesis. Special surfaces allow stronger conclusions than the uniform estimates. The analytic motivation comes from deformed Hermitian–Yang–Mills equations, but the stated main result concerns algebraic stability.
abstract_ja: |-
  K3曲面と豊富な標準類を持つ曲面について、余接束のBridgeland安定性を調べる。標準類 $K$ が豊富な曲面では、$t>t_0$ のとき余接束が $\sigma_{tK}$ に関して半安定となる具体的な $t_0$ の評価を与える。fake projective planeとfake quadricについても個別の結果を得る。
abstract_source_url: https://arxiv.org/abs/2610.04244
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.04244v1](https://arxiv.org/abs/2610.04244)
- **著者:** Tristan C. Collins, Jason Lo, Yun Shi, Shing-Tung Yau
- **初回投稿日:** 2026-10-03
- **最終更新日:** 2026-10-03
- **主分類・副分類:** math.AG（主分類）、副分類なし
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

余接束の安定性は曲面の幾何と深く結び付くが、導来圏上のBridgeland安定性では、偏極の大きさを変えると安定性の壁を横切る可能性がある。本論文は豊富な標準類 $K_X$ を持つ曲面について、$tK_X$ に沿って動く安定性条件のどこまで余接束の半安定性を保証できるかを調べる。

焦点は、十分大きい $t$ における存在だけでなく、その閾値の具体化である。著者らは不安定化部分対象の階数を評価し、曲面の負の曲線に関する結果を用いて、$K_X^2$ と $c_2(X)$ から半安定性の範囲を与える。

一般定理には余接束のtwisted $K$-Gieseker半安定性という仮定がある。さらに特別な曲面では、全ての $t>0$、または小さな明示的閾値以上で半安定性を得る。これらはBridgeland半安定性の結果であり、動機となる非線形Hermitian計量方程式の可解性を全範囲で証明したという主張ではない。

## 背景と問題設定

Introductionはdeformed Hermitian–Yang–Mills、またはLYZ方程式を背景に置く。大半径極限ではHermitian–Yang–Mills方程式と傾き安定性の対応が現れる一方、有限の偏極ではBridgeland安定性と非線形曲率項が関係する。

$K=K_X$ とし、曲面の指数と正規化したChern数の比を

<div>
$$
\tau_X=K^2-2c_2(X),\qquad
C=\frac{\tau_X}{2K^2}=\frac12-\frac{c_2(X)}{K^2}
$$
</div>

と置く。$\sigma_{tK}$ は原論文が用いる偏極 $tK$ に対応するBridgeland安定性条件である。著者らの評価では $C$ が減ると保証される閾値が増えるが、実際の最外側の壁も同じ単調性を持つかは分からないと明記される。

## 主結果

### 主定理：Chern数による半安定性の範囲（Theorem 1.1）

$X$ を豊富な標準類 $K$ を持つ滑らかな射影曲面とし、$\Omega_X$ がtwisted $K$-Gieseker半安定であると仮定する。このとき次の条件の下で $\Omega_X$ は $\sigma_{tK}$-半安定である。

$\tau_X\geq0$ の場合の十分条件は

<div>
$$
t^2>\frac{K^2-1}{4K^2}\bigl(4c_2(X)-K^2-1\bigr).
$$
</div>

特に $t^2>K^2/4$ なら十分である。$\tau_X\leq0$ の場合には

<div>
$$
t^2>c_2(X)-\frac38
$$
</div>

が十分条件となる。これは最適閾値そのものの決定ではなく、半安定性を保証する明示的な範囲である。結論は安定性ではなく半安定性である点にも注意が必要である。

### 最小の第二Chern数を持つ一般型曲面

IntroductionはProposition 8.2とTheorem 8.4の帰結として、第二Chern数が最小の一般型曲面、すなわちCartwright–Steger曲面またはfake projective planeについて、$\Omega_X$ が全ての $t>0$ で $\sigma_{tK_X}$-半安定となると述べる。一般の数値評価に比べ、個別の幾何を使うことで閾値が不要になる。

### Fake quadricでの範囲（Corollary 9.9）

$p_g=0$、$K_X^2=8$ を満たす極小一般型曲面では、

<div>
$$
t\geq\frac1{\sqrt3}
$$
</div>

の全てに対して $\Omega_X$ は $\sigma_{tK_X}$-半安定である。この結果はIntroductionに掲げられたfake quadricの場合の個別評価である。

### K3曲面の場合（Corollary 3.3への言及）

Introductionでは、K3曲面の接束は任意の豊富な類 $\omega$ に対して $\sigma_\omega$-安定となることも述べられる。これはtilted heart内の極小対象に関するHuybrechtsの結果から導かれるものであり、豊富な標準類の場合とは別の議論として扱われる。

## 証明の見取り図

余接束を不安定化する部分対象 $A$ の階数をまず制限し、階数が小さい場合に不安定化完全列の各成分を調べる。曲面上の負の曲線の制御が必要となり、IntroductionはMiyaokaの結果が有効であると説明する。

このように安定性の壁の問題を曲面の数値的不変量と曲線の幾何へ結び付け、一般定理と特別な曲面での精密化を得る。後続節の壁の計算や個別の証明は、本記事では新たに検証していない。

## 原論文との対応

- **Abstractページ:** [arXiv:2610.04244](https://arxiv.org/abs/2610.04244)
- **Introduction:** Section 1、pp. 1–4。主結果はp. 3。
- **主要定理:** Theorem 1.1（本文のTheorem 7.6）。個別結果としてCorollary 3.3、Proposition 8.2、Theorem 8.4、Corollary 9.9がIntroductionで紹介される。
- **確認バージョン:** v1。
- **確認ライセンス:** arXiv non-exclusive distribution license。
- **source_scope:** Abstract and Introduction。
