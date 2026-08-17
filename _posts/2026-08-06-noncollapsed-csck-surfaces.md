---
layout: paper
title: "On the geometry of non-collapsed polarized cscK surfaces"
title_ja: "非崩壊偏極cscK曲面の幾何"
authors: "Junsheng Zhang, Keshu Zhou"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AG
  - math.CV
arxiv_abstract: >-
  We show that the Gromov--Hausdorff convergence of non-collapsed polarized constant scalar curvature
  Kähler (cscK) surfaces can be realized as convergence in a Hilbert scheme. We also derive uniform
  estimates of Bergman kernels on the effective regular set. As an application, we establish the
  Zariski openness of cscK metrics for certain smooth polarized families, following the approach of
  Donaldson.
topic: differential-geometry
tags:
  - moduli
  - csck-extremal-kahler-metrics
  - curvature
  - metric-limits
arxiv_id: "2606.02816v1"
arxiv_url: "https://arxiv.org/abs/2606.02816v1"
arxiv_submitted: "2026-06-01"
arxiv_updated: "2026-06-01"
summary: >-
  非崩壊な偏極cscK曲面のGromov--Hausdorff収束をHilbert scheme内の代数的収束として実現する。曲率の一様下界なしにbubble解析とBergman核評価を組み合わせ、数値条件を満たす曲面族におけるcscK locusのZariski開性とモジュライ空間を導く。
abstract_en: ""
summary_en: >-
  The authors connect non-collapsed Gromov--Hausdorff limits of polarized constant-scalar-curvature Kähler surfaces with algebraic limits in a Hilbert scheme. Their surface-specific analysis controls bubbling and produces Bergman-kernel estimates on an effective regular region without assuming a uniform Ricci bound. This yields Zariski openness of the cscK locus for smooth polarized surface families under an explicit numerical condition and finite automorphisms. The same framework gives a separated algebraic moduli space with quotient singularities.
abstract_ja: >-
  非崩壊な偏極定スカラー曲率Kähler曲面列について、Gromov--Hausdorff収束をHilbert scheme内の収束として表せることを示す。effective regular set上ではBergman核の一様評価も得る。応用として、明示的な数値条件を満たし自己同型群が有限な滑らかな偏極曲面族について、cscK計量を持つファイバーの集合がZariski開であることを証明する。
abstract_source_url: "https://arxiv.org/abs/2606.02816v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2606.02816v1](https://arxiv.org/abs/2606.02816v1)
- **著者:** Junsheng Zhang, Keshu Zhou
- **初回投稿日・最終更新日:** 2026年6月1日
- **主分類・副分類:** math.DG（主分類）, math.AG, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

体積、スカラー曲率、Sobolev定数を一様に制御した偏極cscK曲面列は、部分列を取ると偏極cscK orbifoldへ収束する。本論文はこのRiemann幾何的収束を、固定べきの偏極を用いたHilbert scheme内の平坦族として実現する。

従来この橋渡しにはpartial $C^0$ estimateが中心的だったが、曲面ではbubble形成を精密に追うことで、それを先に確立せずともHilbert多項式が極限で変化しないことを示せる。これは解析的極限と代数的極限を直接結ぶ点が新しい。

さらにRicci曲率の一様評価なしに、bubble treeから対数増大する準psh weightを貼り合わせ、effective regular setでBergman核を定量評価する。この評価をDonaldsonの方法へ投入し、明示的なChern数条件のもとでcscK locusのZariski開性を得る。

## 背景と問題設定

$\mathcal K(V,C_S)$ は、$\operatorname{Vol}(X,\omega)\leq V$、$|S_\omega|\leq1$、Sobolev定数 $C_\omega\leq C_S$ を満たす偏極cscK曲面のクラスである。Ricci曲率下界がないため通常のHörmander $L^2$ 評価を一様に使えず、特異点形成時のbubbleが主要な障害となる。

## 主結果

### Hilbert scheme内の収束（Theorem 1.1）

$X_j\in\mathcal K(V,C_S)$ が $X_\infty$ へGromov--Hausdorff収束するとき、部分列、整数 $k_0,N_0$、平坦射 $\mathcal X\subset B\times\mathbf P^{N_0}\to B$ が存在して

$$(X_{b_j},\mathcal O(1))\simeq(X_j,k_0L_j),\qquad (X_{b_\infty},\mathcal O(1))\simeq(X_\infty,k_0L_\infty)$$

となる。

### cscK locusのZariski開性（Theorem 1.2）

有限自己同型群を持つ滑らかな偏極曲面族 $(\mathcal X,\mathcal L)\to S$ で、各ファイバーが

$$c_1(X_s)^2-\frac{2}{3}\frac{(c_1(X_s)\cdot c_1(L_s))^2}{c_1(L_s)^2}>0,
\qquad c_1(X_s)\cdot c_1(L_s)>0$$

を満たすとき、cscK計量を持つ点の集合 $S^*\subset S$ はZariski開である。この条件下の固定Hilbert多項式を持つcscK曲面は、商特異点のみを持つ分離的代数空間をなす（Theorem 1.3）。

### 非崩壊条件と解析評価（Theorems 1.4, 1.5）

体積非崩壊 $\operatorname{Vol}(B(p,r))\geq\kappa r^4$ は、この設定ではSobolev定数の一様上界を導く。またregular領域のexhaustion $\Omega_r$ 上で、十分大きい $k$ に対し正規化Bergman核 $\rho_k$ は

$$\left\|\rho_k-\left(1+\frac{S_\omega}{4\pi k}\right)\right\|_{L^\infty(\Omega_r)}\leq Ck^{-2}r^{-4}$$

を満たし、その1階・2階微分にもIntroduction記載の一様評価が成り立つ。

## 証明の見取り図

曲面極限がrational singularityを持つorbifoldであることを使い、energy identityとBetti数恒等式をorbifold版Chern--Gauss--Bonnet・signature公式と合わせてHilbert多項式の定数項の不変性を示す。Bergman核には、各ALE bubble上の対数増大psh weightを尺度調整して貼り合わせ、Ricci曲率の不足を補うHörmander評価をeffective regular set上で実行する。

## 原論文との対応

- **Abstractページ:** [arXiv:2606.02816v1](https://arxiv.org/abs/2606.02816v1)
- **Introduction:** Section 1, pp. 1–5
- **主要結果:** Theorems 1.1–1.5
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
