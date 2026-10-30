---
layout: paper
title: The Miyaoka-Yau inequality and the delta invariant for Fano varieties II -soliton case-
title_ja: Kähler–Ricciソリトンに対する補正項付き同変Miyaoka–Yau不等式
authors: Tomoyuki Hisamoto, Masataka Iwai
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CV
- math.DG
arxiv_abstract: Inspired by recent work of Inoue and Hallam-Lahdili, we prove an equivariant Miyaoka-Yau inequality with a correction term for smooth Fano manifolds admitting K\"ahler-Ricci solitons. It recovers the usual Miyaoka-Yau inequality in the K\"ahler-Einstein case. Our proof uses weighted equivariant Bogomolov-Gieseker and Langer inequalities for torsion-free sheaves, together with a weighted slope estimate for the canonical extension sheaf. We also construct toric examples showing that the existence of a soliton implies neither weighted semistability of the canonical extension sheaf nor nonnegativity of the equivariant Miyaoka-Yau number.
topic: algebraic-geometry
tags:
- chern-classes
- fano-varieties
- kahler-ricci-flow-solitons
- stability
- vector-bundles-sheaves
arxiv_id: 2610.38137v1
arxiv_url: https://arxiv.org/abs/2610.38137
arxiv_submitted: '2026-10-28'
arxiv_updated: '2026-10-28'
summary: Kähler–Ricciソリトンを持つ滑らかなFano多様体では、通常のMiyaoka–Yau不等式をそのまま期待することはできない。本論文は同変Chern類と重み付き傾斜を用いた補正項付き不等式を示し、補正を除けないトーリック反例も与える。Kähler–Einsteinの場合には既知の不等式に戻る。
abstract_en: ''
summary_en: The paper asks which Chern-number restrictions survive when a Fano manifold carries a soliton rather than an Einstein metric. Its main estimate includes an explicit error governed by the soliton moment map. The authors develop a sheaf-theoretic route through weighted slopes and test the necessity of the correction on toric projective bundles.
abstract_ja: 本論文は、ソリトンの存在から導かれるChern類の制約を、同変交点数と指数型の重みによって定式化する。canonical extension sheafに対する傾斜評価を、torsion-free層の重み付きBogomolov–Gieseker不等式およびLanger不等式と組み合わせることで、明示的な補正項を持つMiyaoka–Yau不等式を得る。一方、ソリトンが存在してもcanonical extensionの重み付き半安定性や同変Miyaoka–Yau数の非負性が成り立つとは限らないことを示す。
abstract_source_url: https://arxiv.org/abs/2610.38137
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.38137v1](https://arxiv.org/abs/2610.38137)
- **著者:** Tomoyuki Hisamoto, Masataka Iwai
- **初回投稿日:** 2026-10-28
- **最終更新日:** 2026-10-28
- **主分類・副分類:** math.AG（主分類）; math.CV, math.DG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Fano多様体のKähler–Ricciソリトンは、Kähler–Ricci流の極限を理解するうえで基本的な計量である。しかしソリトンの存在はKähler–Einstein計量の存在より弱く、通常のChern類に対するMiyaoka–Yau不等式を保証しない。

本論文は、トーラス作用を記録する同変Chern類と、ソリトンベクトルが定める指数重みを使い、滑らかなFano多様体に対する明示的な下界を示す。下界にはmoment mapの積分からなる非正の補正項が現れる。ソリトンベクトルが零なら補正は消え、Kähler–Einsteinの場合の不等式を回収する。

重要なのは、canonical extension sheafの重み付き半安定性を無条件に仮定しないことである。著者らはtorsion-free層まで扱える重み付き不等式と傾斜評価を整備し、半安定性が失敗する場合にも適用する。トーリック反例は、単に通常のChern類を同変Chern類へ置き換えるだけでは十分でないことを示す。

## 背景と問題設定

Tianの方法では、Kähler–Einstein計量からcanonical extensionのHermite–Einstein計量と半安定性を得て、Bogomolov–Gieseker不等式を適用する。ソリトンの場合はこの半安定性自体が失敗し得る。さらに、すべてのトーリックFano多様体はソリトンを持つ一方、$\mathbb P\_{\mathbb P^3}(\mathcal O\oplus\mathcal O(3))$は通常のMiyaoka–Yau不等式を満たさない。

以下では$T$をコンパクトトーラス、$\xi\in\operatorname{Lie}(T)$をソリトンベクトルとする。同変交点数の添字$T$は同変pushforwardと$\xi$での評価を表す。たとえば$(c\_2^T(X)e^{c\_1^T(X)})\_T(\xi)$は、指数関数を展開して得られる同変交点数の級数を評価した実数である。

## 主結果

### 主定理1：補正項付き下界（Theorem 1.1）

複素次元$n\ge2$の滑らかなFano多様体$X$が、$T$不変のKähler形式$\omega\in c\_1(X)$と、標準的に正規化されたmoment map $\mu$について

$$
\operatorname{Ric}(\omega)-\omega=\frac{\sqrt{-1}}{2\pi}\partial\bar\partial\mu\_\xi,\qquad \mu\_\xi=\langle\mu,\xi\rangle
$$

を満たすとする。$V\_\xi=(e^{c\_1^T(X)})\_T(\xi)$と略記すると、論文の下界は

$$
\bigl((2(n+1)c\_2^T(X)-n c\_1^T(X)^2)e^{c\_1^T(X)}\bigr)\_T(\xi)
\ge -\frac{n+1}{2V\_\xi}
\left(\int\_X\left|\frac{V\_\xi}{\int\_X\omega^{[n]}}e^{-\mu\_\xi}-1-\mu\_\xi\right|e^{\mu\_\xi}\omega^{[n]}\right)^2
$$

である。ここで$\omega^{[n]}=\omega^n/n!$であり、正規化条件は$\int\_X\mu\_\xi e^{\mu\_\xi}\omega^n=0$である。$\xi=0$なら右辺が零となり、通常のMiyaoka–Yau不等式に帰着する。一般の場合に主張するのは同変Miyaoka–Yau数の非負性ではなく、この補正を伴う下界である。

### 主定理2：補正を除けない例（Theorem 1.2）

$X=\mathbb P\_{\mathbb P^5}(\mathcal O\oplus\mathcal O(5))$には、最大コンパクトトーラスに関するソリトンが存在するが、

$$
\bigl((14c\_2^T(X)-6c\_1^T(X)^2)e^{c\_1^T(X)}\bigr)\_T(\xi)<0
$$

となる。したがってソリトンがあっても補正なしの同変不等式は成立しない。canonical extensionの重み付き半安定性の失敗は別のExample 7.1としてIntroductionで言及されている。

### 基礎となる層の不等式（Theorem 1.3）

IntroductionではSetup 3.1の設定を前提として次のように述べられている。指数重み$v(\mu)=e^{\mu\_\xi}$と階数$r$の同変torsion-free層$E$について、

$$
\bigl(2r c\_2^T(E)-(r-1)c\_1^T(E)^2\bigr)\cdot v(\alpha\_T)
\ge -\frac{r^2}{(v(\alpha\_T))}
\bigl(\mu\_v^{\max}(E)-\mu\_v(E)\bigr)
\bigl(\mu\_v(E)-\mu\_v^{\min}(E)\bigr)
$$

が成り立つ。最大・最小傾斜は重み付きHarder–Narasimhanフィルトレーションに由来する。半安定なら右辺が零になり、重み付きBogomolov–Gieseker不等式を得る。Setup 3.1の細部はIntroduction外なので、ここではその仮定を独自に補わない。

## 証明の見取り図

まずEdidin–Grahamの代数的同変交点理論を用いて、滑らかな束だけでなくtorsion-free層の第二Chern類を扱う。多項式重みの場合にsemi-simple fibrationを使ってBogomolov–Gieseker不等式を証明し、$(1+x/m)^m\to e^x$という極限を通じて指数重みに移る。

次に同変Hodge指数不等式とHarder–NarasimhanフィルトレーションからLanger型評価を得る。canonical extensionの商の傾斜に対する補正付き評価を、この議論の中間段階へ代入することで主定理の下界を導く。一般の層に対する不等式と、canonical extension固有の傾斜評価が別々の役割を担う点が重要である。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.38137)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.38137v1) — Section 1, pp. 2–4（Abstractはp. 1）
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2, 1.3; Corollary 6.9, Example 7.2への対応
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.38137v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
