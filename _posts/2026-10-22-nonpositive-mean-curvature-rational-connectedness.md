---
layout: paper
title: Mean curvature nonpositivity and rational connectedness
title_ja: 平均曲率の非正値性と有理連結性
authors: Chuanjing Zhang, Xi Zhang
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: Let $(X,\omega)$ be a compact Gauduchon manifold and let $E$ be a holomorphic vector bundle on $X$. We establish equivalent conditions for the existence of a Hermitian metric on $E$ with nonpositive mean curvature. For a non-uniruled compact K\"ahler manifold $X$ satisfying $\mu_{\omega_0,\max}(T_X)=0$ for some Gauduchon metric $\omega_0$, we show that the corresponding maximal destabilizing subsheaf of $T_X$ splits off holomorphically and is polystable of slope zero with respect to every Gauduchon metric. Its complement, if nonzero, is HN-negative with respect to every such metric. In particular, a compact K\"ahler manifold is not uniruled if and only if , for every Gauduchon metric $\omega$, its tangent bundle admits a Hermitian metric with nonpositive $\omega$-mean curvature. We also obtain an uniruledness criterion that includes the case where the maximal slope of $T_X$ is zero, and a Mumford-type characterization of rational connectedness. Under HN-nonnegativity of $T_X$
  for one Gauduchon metric, rational connectedness, the vanishing of all holomorphic covariant tensors, and the condition $\kappa^+(X)=-\infty$ are equivalent.
topic: differential-geometry
tags:
- stability
- vector-bundles-sheaves
- curvature
- foliations
- positivity
arxiv_id: 2610.29268v1
arxiv_url: https://arxiv.org/abs/2610.29268
arxiv_submitted: '2026-10-21'
arxiv_updated: '2026-10-21'
summary: 接束のHarder–Narasimhan傾きとHermitian計量の平均曲率を結び付け、コンパクトKähler多様体の非単線織性を特徴付ける。単一のGauduchon計量に対する接束のHN非負性の下で、有理連結性、全共変テンソルの消滅、Campanaの不変量の負無限大条件が同値になることを示す。
abstract_en: ''
summary_en: 'The paper compares two ways to constrain a holomorphic bundle: its Harder–Narasimhan slopes and the endomorphism obtained by contracting Chern curvature. The boundary between strict negativity and nonpositivity requires a holomorphic splitting with a polystable summand. Applied to tangent bundles, this distinguishes non-uniruled compact Kähler manifolds and gives a conditional tensor-vanishing criterion for rational connectedness. The condition in the latter criterion involves one Gauduchon metric, while the unrestricted Mumford conjecture remains outside the result.'
abstract_ja: 本論文は、コンパクトGauduchon多様体上の正則ベクトル束が非正の平均曲率をもつ計量を許す条件を、傾き零のpolystableな直和成分と負の最大傾きをもつ成分への分解で記述する。非単線織コンパクトKähler多様体では、あるGauduchon計量に対する接束の最大傾きが零なら、その最大不安定化部分層は正則に分裂し、任意のGauduchon計量について傾き零のpolystable束となる。この結果から非単線織性の平均曲率による特徴付けと、最大傾き零の場合を含む単線織性判定を導く。さらに一つのGauduchon計量について接束の最小傾きが非負なら、有理連結性、正次数の正則共変テンソルの消滅、κ⁺の負無限大条件は同値となる。
abstract_source_url: https://arxiv.org/abs/2610.29268
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.29268v1](https://arxiv.org/abs/2610.29268)
- **著者:** Chuanjing Zhang, Xi Zhang
- **初回投稿日:** 2026-10-21
- **最終更新日:** 2026-10-21
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

束の「負性」を傾きで測る方法と、計量の曲率で測る方法はどこまで一致するのか。本論文は、厳密な負値性では既知だった対応を、零の方向を許す境界の場合まで精密化する。半安定性だけでは足りず、境界の傾きをもつ成分がpolystableで正則に分裂することが必要となる。

これを接束に適用すると、非単線織コンパクトKähler多様体の傾き零の方向が、計量の選択によらない可積分な直和成分として現れる。任意のGauduchon計量について非正の平均曲率を実現できることが、非単線織性そのものと同値になる。

さらに、一つのGauduchon計量について接束のHN傾きがすべて非負なら、正則共変テンソルが全次数で消えることから射影性と有理連結性が従う。これはMumford型の条件付き定理であり、追加仮定のないMumford予想を解決したという主張ではない。

## 背景と問題設定

Gauduchon計量とは $\partial\bar\partial\omega^{n-1}=0$ を満たすHermitian計量である。捩れのない層 $E$ の傾きを

$$
\deg\_\omega(E)=\int\_X c\_1(\det E)\wedge\frac{\omega^{n-1}}{(n-1)!},\qquad
\mu\_\omega(E)=\frac{\deg\_\omega(E)}{\operatorname{rk}E}
$$

で定め、HNフィルトレーションの商の最大・最小傾きを $\mu\_{\omega,\max}$、$\mu\_{\omega,\min}$ と書く。計量 $H$ の平均曲率は $\Phi\_{H,\omega}=\sqrt{-1}\Lambda\_\omega F\_H$ である。

厳密な不等式 $\mu\_{\omega,\max}(E)<a$ は、平均曲率を $2\pi a/\operatorname{Vol}\_\omega(X)$ より小さくする計量の存在に対応する。一方、傾き $a$ の半安定束に非厳密不等式を要求すると、積分したトレースの等号からHermitian–Einstein条件が必要になる。分裂しない拡大が、この境界の障害を示す。

## 主結果

### 平均曲率上界の必要十分条件（Theorem 1.1）

コンパクトGauduchon多様体上の正則ベクトル束 $E$ と実数 $a$ に対し、次の三条件は同値である。

1. ある滑らかな計量 $H\_0$ について $\int\_X\lambda\_{\max}(\Phi\_{H\_0,\omega})dV\_\omega\leq2\pi a$。
2. 正則分解 $E=E\_a\oplus E\_{<a}$ が存在し、$E\_a$ は零または傾き $a$ のpolystable束、$E\_{<a}$ は零または $\mu\_{\omega,\max}(E\_{<a})<a$ を満たす束である。
3. ある滑らかな計量 $H$ について

$$
\Phi\_{H,\omega}\leq\frac{2\pi a}{\operatorname{Vol}\_\omega(X)}\operatorname{Id}\_E.
$$

ここで $dV\_\omega=\omega^n/n!$ である。$\mu\_{\omega,\max}(E)=a$ の場合、$E\_a$ は最大不安定化部分層に一致する。$a=0$ が非正平均曲率の判定である。

### 非単線織多様体の接束分解（Theorem 1.3）

非単線織コンパクトKähler多様体 $X$ で、あるGauduchon計量 $\omega\_0$ が $\mu\_{\omega\_0,\max}(T\_X)=0$ を満たすなら、可積分な正則部分束による分解

$$
T\_X=S\oplus Q,\qquad S\neq0,\qquad c\_1^{\mathrm{BC}}(S)=0
$$

が存在する。$S$ は $\omega\_0$ に関する最大不安定化部分層で、任意のGauduchon計量について傾き零のpolystable束である。$Q\neq0$ なら、任意のそのような計量について $\mu\_{\omega,\max}(Q)<0$ である。

同じ定理は、$X$ が非単線織であることと、各Gauduchon計量 $\omega$ に対して $\Phi\_{H\_\omega,\omega}\leq0$ となる接束の計量が存在することの同値も与える。計量 $H\_\omega$ は $\omega$ に依存してよい。

### 最大傾き零を含む単線織性判定（Theorem 1.4）

コンパクトKähler多様体で

$$
H^0\bigl(X,(\Omega\_X^1)^{\otimes m}\bigr)=0\quad(m>0)
$$

が成り立ち、あるGauduchon計量について $\mu\_{\omega\_1,\max}(T\_X)\geq0$ なら、$X$ は単線織である。最大傾きが正の場合に加えて、零の境界を扱う点が主眼である。すべてのGauduchon計量に対して接束がHN負となる場合は、IntroductionのConjecture 1.5として残される。

### 一つの計量からの有理連結性（Theorem 1.8）

$X$ をコンパクトKähler多様体とし、あるGauduchon計量 $\omega\_0$ について $\mu\_{\omega\_0,\min}(T\_X)\geq0$ を仮定する。このとき、射影的かつ有理連結であること、上記の全共変テンソル消滅、$\kappa^+(X)=-\infty$ は同値である。ここで

$$
\kappa^+(X)=\max\_{p\geq1,\thinspace 0\neq\mathcal F\subset\Omega\_X^p}
\kappa(X,\det\mathcal F),\qquad
\det\mathcal F=(\Lambda^{\operatorname{rk}\mathcal F}\mathcal F)^{**}.
$$

Introductionは、反標準束のnef性からこのHN非負性が従う既知結果と比較している。本定理の仮定は一つの計量に関する条件で済み、反標準束のnef性自体を要求しない。

## 証明の見取り図

Introductionによると、接束の傾き零の部分層について、まず第一Bott–Chern類の消滅を示し、Loray–Pereira–Touzetの分裂定理で正則部分束へ引き上げる。同じ議論をJordan–Hölderフィルトレーションに適用することで、すべてのGauduchon計量に対するpolystabilityを得る。非単線織性と標準束の擬有効性、余接束の商の正値性に関する既知結果が、この接束解析を双有理的性質へ結び付ける。

有理連結性の議論は、Introductionで既存のnef反標準束の構造定理からの経路とも比較されている。著者ら自身の証明は反標準束のnef性もMRCファイバー空間も使わないと明記されており、その範囲で本記事は位置付ける。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.29268)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.29268v1) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.3, 1.4, 1.8；Conjectures 1.2, 1.5, 1.7
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.29268v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
