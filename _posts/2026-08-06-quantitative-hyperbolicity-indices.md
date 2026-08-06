---
layout: paper
title: "Quantitative hyperbolicity for complex manifolds via numerical invariants"
title_ja: "数値的不変量による複素多様体の定量的双曲性"
authors: "Tien-Cuong Dinh, Duc-Bao Nguyen, Duc-Viet Vu"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.AG
topic: several-complex-variables
arxiv_id: "2607.07054v1"
arxiv_url: "https://arxiv.org/abs/2607.07054v1"
arxiv_submitted: "2026-07-08"
arxiv_updated: "2026-07-08"
summary: >-
  正の閉カレントとDemailly--Semple塔を用いて、コンパクトKähler多様体の双曲性を測るhyperbolic indexを導入する。その正値性からKobayashi双曲性を導き、一般超曲面では次数に対して少なくとも線形に増大する有効下界を与える。
abstract_en: ""
summary_en: >-
  The authors define numerical hyperbolic indices for compact Kähler manifolds by replacing algebraic curves with positive currents that lift through Demailly--Semple towers. Positivity of these indices yields Kobayashi hyperbolicity, while negative jet curvature supplies a sufficient positivity criterion. A density-current argument connects pseudoeffective jet classes to the behavior of liftable currents. Combining this framework with jet-differential results produces effective lower bounds, growing at least linearly with degree, for general projective hypersurfaces.
abstract_ja: >-
  directed positive closed currentを用い、コンパクトKähler多様体の双曲性を定量化するhyperbolic indexを導入する。indexが正ならKobayashi双曲的であり、Demaillyの負のjet曲率条件からも正値性が従う。jet differentialとdensity currentを組み合わせ、射影空間内の一般超曲面では次数とともに少なくとも線形にindexが増大することを示し、Kobayashi予想への解析的方針を論じる。
abstract_source_url: "https://arxiv.org/abs/2607.07054v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2607.07054v1](https://arxiv.org/abs/2607.07054v1)
- **著者:** Tien-Cuong Dinh, Duc-Bao Nguyen, Duc-Viet Vu
- **初回投稿日:** 2026年7月8日
- **最終更新日:** 2026年7月8日（v1）
- **主分類・副分類:** Complex Variables (math.CV); Algebraic Geometry (math.AG)
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kobayashi双曲性は非定数整曲線が存在しないことと、コンパクト複素多様体では同値になる。しかし一般射影超曲面のどの次数から双曲的になるかというKobayashi予想では、jet differentialによる代数的手法が中心で、最適次数にはなお隔たりがある。

本論文は正のカレントを使う解析的な数値的不変量、hyperbolic indexを導入する。曲線の正規化のEuler標数を、Demailly--Semple塔へ持ち上がるカレントの幾何学的・コホモロジー的Euler標数へ置き換え、代数的双曲性の比率を超越的対象まで拡張する。

主要な結論は、このindexの正値性がKobayashi双曲性を含意すること、負のjet曲率が正値性を導くこと、そして一般超曲面に対して次数$d$に線形な有効下界が得られることである。従来のjet differentialの成果を新しい解析的不変量へ移す役割をdensity current理論が担う。

著者らは正値性とKobayashi双曲性が同値であると予想するが、これは本論文の証明済み主張ではない。またKobayashi予想への新方針には、対数的理論やZariski位相での半連続性など、今後確立すべき段階が残る。

## 背景と問題設定

代数的双曲性では、Kähler形式$\omega$に対して既約曲線$C$を動かし、正規化$\widehat C$のEuler標数を用いる

$$
\operatorname{hyp}_{\mathrm{alg}}(X,\omega)
=\inf_C\left\{\frac{-\chi(\widehat C)}{\int_C\omega}\right\}>0
$$

という条件を考える。本論文では曲線とNevanlinna currentをともに含む「liftable current」を用いる。$k$段Demailly--Semple塔$\pi_{k,0}:X_k\to X$へdirected positive currentとして持ち上がる$T$にEuler標数を割り当て、その質量で正規化した下限を2種類のhyperbolic index $\operatorname{hyp}^{(k)}$と$\operatorname{hyp}_{(k)}$として定義する。

## 主結果

### 正値性からKobayashi双曲性へ（Theorem 1.1）

コンパクトKähler多様体$(X,\omega)$について、ある$k\in\mathbb Z_+\cup\{\infty\}$で$\operatorname{hyp}^{(k)}(X,\omega)>0$なら、$X$はKobayashi双曲的である。さらに$X\subset\mathbb P^n$が射影多様体で

$$
\operatorname{hyp}_{(k)}(X,\omega_{\mathrm{FS}}|_X)>2(3^{k-1}-1)
$$

なら、同じ結論が成り立つ。整曲線から得られるNevanlinna currentのEuler標数が非負になることと、indexの正の下界が両立しないことが判定の核である。

### 負のjet曲率による正値性（Theorem 1.2）

$X$がある$k\geq1$について負のjet曲率をもつ$k$-jet metricを許せば、任意のKähler形式$\omega$に対して

$$
\operatorname{hyp}^{(\infty)}(X,\omega)>0
$$

となる。Demaillyの既知の双曲性判定が、より定量的なindexの正値性まで与えることを示す。

### jet類とliftable current（Theorem 1.3）

$X$をコンパクトKähler多様体、$\alpha$をKähler類とし、ある$k,m>0$について

$$
c_1(\mathcal O_{X_k}(m))-\pi_{k,0}^*(\alpha)
$$

が擬有効とする。この類の正の閉$(1,1)$-current $S$の正Lelong数集合を$Z$とすると、$\chi_k(T)\geq0$を満たすliftable current $T$には、$Z$へ正の質量を置く$k$-lifting $T^{[k]}$が存在する。$\{T\}$がmovableなら$\alpha$はbigで足りる。

### 一般超曲面の線形下界（Theorem 1.4）

$X_d\subset\mathbb P^{n+1}$を次数$d$の一般超曲面とする。$n$だけに依存する有効な正値関数$\delta(n),\lambda(n)$が存在し、すべての$d$で

$$
\operatorname{hyp}^{(n)}(X_d,\omega_{\mathrm{FS}}|_{X_d})
\geq\operatorname{hyp}_{(n)}(X_d,\omega_{\mathrm{FS}}|_{X_d})
\geq\delta(n)d-\lambda(n)
$$

となる。したがってindexは$d$とともに少なくとも線形に発散する。

## 証明の見取り図

Demailly--Semple塔上のliftable currentのクラスが弱収束で閉じていることを利用し、曲線のEuler標数をカレントへ拡張する。整曲線から生じるNevanlinna currentには非負の極限Euler標数が対応するため、indexの正値性が整曲線を排除し、Brodyの補題を介してKobayashi双曲性を与える。

jet differential側では、擬有効なjet tautological類とliftable currentの交わりをdensity current理論で制御する。既存の一般超曲面に対するjet differentialおよびGreen--Griffiths型の結果をこの制御へ入力し、Theorem 1.4の有効下界を導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2607.07054v1](https://arxiv.org/abs/2607.07054v1)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorems 1.1–1.4; Conjecture 9.12
- **論文構成の説明:** Introduction末尾, p. 4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license（arXiv Abstractページの表示）
- **source_scope:** Abstract and Introduction
