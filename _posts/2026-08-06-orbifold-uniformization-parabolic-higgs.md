---
layout: paper
title: "Orbifold Uniformization of Complex Algebraic Variety by Stable Parabolic Higgs Bundle"
title_ja: "安定parabolic Higgs束による複素代数多様体のorbifold一意化"
authors: "Tianshu Jiang, Jiayu Li"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.DG
topic: algebraic-geometry
tags:
  - vector-bundles-sheaves
  - hodge-theory
  - higgs-nonabelian-hodge
  - hyperbolicity
  - uniformization
arxiv_id: "2606.06778v1"
arxiv_url: "https://arxiv.org/abs/2606.06778v1"
arxiv_submitted: "2026-06-04"
arxiv_updated: "2026-06-04"
summary: >-
  cusp因子と有理parabolic重みをもつ対数対で、parabolic Bogomolov–Gieseker等号から複素ballへのperiod mapを構成する。一般の重みでは分岐した複素双曲構造となり、$q_i=p_i-1$ の標準重みで厳密なorbifold ball一意化となることを示し、逆方向も確立する。
abstract_en: ""
summary_en: >-
  The paper extends ball uniformization through Higgs bundles to pairs with cusp divisors and weighted compact divisors. Equality in a parabolic Bogomolov--Gieseker relation makes the trace-free adjoint system flat and produces a period map to the complex ball. Root-stack coordinates reveal an explicit branching order, so ordinary orbifold uniformization occurs precisely for standard weights. Conversely, a compatible branched hyperbolic structure yields positivity of the logarithmic canonical class, parabolic polystability, and the Chern equality.
abstract_ja: >-
  滑らかな複素射影多様体 $X$ と、cusp部分 $D^p$ および有理parabolic重み $q_i/p_i$ をもつcompact部分 $D^c$ からなる単純正規交差因子を扱う。root stack上でparabolic Bogomolov–Gieseker等号を定式化し、等号からflatなtrace-free adjoint harmonic bundle、$PU(n,1)$-variation、複素単位ballへのperiod mapを得る。局所形は一般に分岐をもち、$q_i=p_i-1$ の場合に限って非分岐orbifold ball一意化になる。逆に、その局所形をもつ分岐複素双曲構造から対数標準類のbig・nef性、parabolic polystability、Chern等号を導く。
abstract_source_url: "https://arxiv.org/abs/2606.06778v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2606.06778v1](https://arxiv.org/abs/2606.06778v1)
- **著者:** Tianshu Jiang, Jiayu Li
- **初回投稿日:** 2026年6月4日
- **最終更新日:** 2026年6月4日
- **主分類・副分類:** math.AG（主分類）, math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Simpsonのcompact ball一意化では、Hodge束 $\Omega_X^1\oplus\mathcal O_X$ のBogomolov–Gieseker等号からadjoint Higgs束のflat性を得て、複素ballへのperiod mapを構成する。本論文はこれをcusp、compact orbifold因子、さらに真の分岐を含む設定へ拡張する。

$D=D^p+D^c$ を単純正規交差因子とし、$D^p$ は取り除くcusp因子、$D^c_i$ はroot-stack安定化群と重み $q_i/p_i$ をもつcompact因子とする。対象のparabolic Higgs束は $\Omega_X^1(\log D^p)\oplus\mathcal O_X$ で、compact側の非零重みはconormal lineだけに置かれる。

parabolic Bogomolov–Gieseker等号はflatな $PU(n,1)$ 系とperiod mapを生むが、その局所形は $w_i^{p_i-q_i}$ であり一般には分岐する。標準重み $q_i=p_i-1$ のときだけ局所同型となり、orbifold universal coverがballである厳密な一意化を得る。

逆に、この局所形をもつ分岐複素双曲構造からBergman計量を引き戻すと、mixed Poincaré–cone growthをもつ正閉currentが得られる。これにより $K_X+\Delta$ のbig・nef性、parabolic polystability、parabolic Chern等号が導かれる。

## 背景と問題設定

記号を

$$
X^\circ=X\setminus(D^p\cup D^c),\qquad
\Delta=D^p+\sum_i\frac{q_i}{p_i}D_i^c
$$

と置く。root座標 $z_i=w_i^{p_i}$ では重み付きconormal frameは

$$
\eta_i=w_i^{-q_i}dz_i=p_iw_i^{p_i-q_i-1}dw_i
$$

となる。この指数が、標準orbifoldの場合と真に分岐する場合を分ける。

## 主結果

### Theorem 1.1（等号から分岐ball構造へ）

$(E_*,\theta)$ がample line bundle $L$ に関してpolystableで、

$$
\left(\frac{\operatorname{par-ch}_1(E_*)^2}{2(n+1)}-\operatorname{par-ch}_2(E_*)\right)c_1(L)^{n-2}=0
$$

を満たすとする。すると $\operatorname{End}_0(E)$ はflatで、表現 $\rho:\pi_1^{\mathrm{orb}}(X^\circ)\to PU(n,1)$ と同変なperiod map $P:\widetilde X^\circ\to\mathbb B^n$ を得る。normal成分は

$$
P_i(w)=u_i(w)w_i^{p_i-q_i},\qquad u_i(0)\neq0
$$

で、分岐指数は $p_i-q_i$、分岐因子は $R_P=\sum_i(p_i-q_i-1)\widetilde D_i^c$ である。$q_i=p_i-1$ がすべての $i$ で成り立つとき、かつそのときに限りperiod mapはorbifoldの意味で局所同型になる。また $D^p$ の既約成分は互いに交わらず、cusp周りのmonodromyはparabolic、$D_i^c$ 周りは位数 $p_i$ のellipticとなる。

### Corollary 1.2（標準重みでの一意化）

すべての $i$ で $q_i=p_i-1$ なら、$P$ は非分岐orbifold局所等長で、

$$
\widetilde X^\circ\simeq\mathbb B^n
$$

となる。$\rho$ は忠実で像は離散格子、$(X,D^p)$ はball quotientのorbifold toroidal compactificationである。

### Theorem 1.3（分岐構造から代数幾何へ）

逆に型 $\Delta$ の分岐複素双曲構造があると、ballのBergman計量の引き戻しはmixed Poincaré–cone growthをもち、

$$
\Theta=\frac{n+1}{2\pi}\omega_{\mathrm{br}}
$$

は $c_1(K_X+\Delta)$ を表す正閉currentへ延長する。この類はbigかつnefである。さらに任意の $\Delta$-admissibleなbig・nef類について $(E_*,\theta)$ はparabolic polystableとなり、cohomology類として

$$
\frac{\operatorname{par-ch}_1(E_*)^2}{2(n+1)}-\operatorname{par-ch}_2(E_*)=0
$$

が成立する。

## 証明の見取り図

等号方向ではMochizuki型Kobayashi–Hitchin対応とChern–Weil等号をroot stack上で用い、trace-free adjoint harmonic bundleをflatにする。付随する $PU(n,1)$-variationのKodaira–Spencer写像をperiod mapの微分と同定し、重み付きconormal frameから局所分岐指数を読む。逆方向ではBergman計量の引き戻しをcurrentとして延長し、正閉currentの正則化でbig・nef性を示す。そのHodge計量からpolystabilityを、trace-free Chern–Weil恒等式からChern等号を得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2606.06778v1](https://arxiv.org/abs/2606.06778v1)
- **Introduction:** Section 1, pp. 2–5
- **Introduction中で言及された主要定理番号:** Theorem 1.1, Corollary 1.2, Theorem 1.3, Corollary 1.4
- **論文構成の説明:** Contents, p. 1 およびIntroduction
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
