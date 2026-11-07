---
layout: paper
title: Hodge-Riemann polynomials
title_ja: Schur類のHodge–Riemann関係と微分列のSchur対数凹性
authors: Qing Lu, Weizhe Zheng
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CO
arxiv_abstract: We show that Schur classes of ample vector bundles on smooth projective varieties satisfy Hodge-Riemann relations on $H^{p,q}$ under the assumption that $H^{p-2,q-2}$ vanishes. More generally, we study Hodge-Riemann polynomials, which are partially symmetric polynomials that produce cohomology classes satisfying the Hodge-Riemann property when evaluated at Chern roots of ample vector bundles. In the case of line bundles and in bidegree $(1,1)$, these are precisely the nonzero dually Lorentzian polynomials. We prove various properties of Hodge-Riemann polynomials, confirming predictions and answering questions of Ross and Toma. As an application, we show that the derivative sequence of any product of Schur polynomials is Schur log-concave, confirming conjectures of Ross and Wu.
topic: algebraic-geometry
tags:
- hodge-theory
- chern-classes
- positivity
- vector-bundles-sheaves
arxiv_id: 2506.16992v6
arxiv_url: https://arxiv.org/abs/2506.16992
arxiv_submitted: '2025-06-20'
arxiv_updated: '2026-11-05'
summary: 豊富なベクトル束のSchur類に対するHodge–Riemann関係を、特定のHodge群の消滅を仮定して一般の双次数へ拡張する。さらにHodge–Riemann多項式を研究し、Lorentzian多項式の幾何学的特徴づけとSchur多項式の微分列の対数凹性を導く。
abstract_en: ''
summary_en: Characteristic classes of ample bundles can replace powers of a polarization in parts of Hodge theory. The paper identifies a vanishing hypothesis under which Schur classes retain both Lefschetz isomorphisms and the required Hermitian signature. It then studies which polynomial operations preserve this geometry. The resulting framework yields coefficientwise positivity statements for derivatives of Schur polynomials, which are stronger than inequalities obtained only after evaluating the variables.
abstract_ja: 滑らかな射影多様体上の豊富なベクトル束のSchur類は、Hodge群の消滅条件の下でhard Lefschetz性とHodge–Riemann関係を満たす。著者らはこの性質を普遍的にもつ部分対称多項式を研究し、直線束と双次数(1,1)の場合にdually Lorentzian多項式と一致することを示す。幾何学的な保存則から、Schur多項式の積の微分列に対するSchur正値性も得る。
abstract_source_url: https://arxiv.org/abs/2506.16992
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2506.16992v6](https://arxiv.org/abs/2506.16992)
- **著者:** Qing Lu, Weizhe Zheng
- **初回投稿日:** 2025-06-20
- **最終更新日:** 2026-11-05
- **主分類・副分類:** math.AG（主分類）; math.CO
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

古典的なHodge–Riemann関係は、豊富な直線束の第一Chern類の冪を使い、コホモロジー上の積分形式の符号を制御する。本論文は、その冪を豊富なベクトル束のSchur類へ置き換えたとき、どこまで同じ構造が残るかを調べる。

主要な幾何学的結果は、$H^{p-2,q-2}(X)=0$ という条件の下で、Schur類に対するhard Lefschetz同型、Lefschetz分解、原始部分の正値性がそろって成立するというものである。この消滅条件は一般のSchur類にとって本質的であり、任意の双次数に無条件で成立する定理ではない。

次に、Chern根へ代入した際にこの性質を与える多項式を体系的に扱う。直線束と双次数 $(1,1)$ の場合には、Hodge–Riemann多項式は零でないdually Lorentzian多項式と一致し、幾何学と多項式の対数凹性が双方向に結ばれる。

最後に、数値的な交点不等式を越えて、多項式の係数そのものに関する正値性を得る。Schur多項式の積の微分列がSchur対数凹となるという結果は、Ross–Wuの予想を解決する。

## 背景と問題設定

$X$ を複素 $d$ 次元滑らかな射影多様体、$E$ を階数 $e$ の豊富なベクトル束とする。$\lambda$ は $d-p-q$ の分割で、論文のSchur類の規約に従い $\lambda\_1\leq e$ とする。$h$ は豊富な直線束の第一Chern類である。

古典的な偏極の冪と異なり、一般の正のChern類の組合せが自動的にHodge–Riemann関係を満たすわけではない。正係数の線形結合ですら性質を保存しないため、許される多項式と操作を判定する必要がある。

## 主結果

### Schur類に対するLefschetz理論（Theorem 1.1）

$p+q\leq d$ および $H^{p-2,q-2}(X)=0$ を仮定すると、

$$
-\wedge s\_\lambda(E):H^{p,q}(X)\xrightarrow{\simeq}H^{d-q,d-p}(X)
$$

が同型となる。また

$$
H^{p,q}(X)=H^{p-1,q-1}(X)\wedge h\ \oplus\ \ker(-\wedge s\_\lambda(E)h)
$$

と分解し、Hermite形式

$$
\langle\alpha,\beta\rangle\_{s\_\lambda(E)}
=i^{q-p}(-1)^{(p+q)(p+q+1)/2}\int\_X\alpha\wedge\overline\beta\wedge s\_\lambda(E)
$$

は後者の原始部分で正定値、前者で負定値となる。消滅条件は $\min(p,q)\leq1$ なら満たされるが、$p=q\geq2$ では満たされない。最高Chern類には消滅条件を外せる別の結果があるものの、それを一般のSchur類へ広げることはできない。

### 行列式不等式と等号条件（Corollary 1.3）

$\beta\_1,\ldots,\beta\_n$ を $H^{p-1,q-1}(X)$ の基底、$\alpha\_i=\beta\_i\wedge h$ とすると、任意の $\alpha\_0\in H^{p,q}(X)$ に対して

$$
(-1)^n\det\bigl(\langle\alpha\_i,\alpha\_j\rangle\_{s\_\lambda(E)}\bigr)\_{0\leq i,j\leq n}\geq0
$$

となる。等号は $\alpha\_0\in H^{p-1,q-1}(X)\wedge h$ の場合に限る。これは原始部分の正値性を交点不等式として表したものである。

### 特殊な正係数結合（Theorem 1.5）

$s(x\_1+t,\ldots,x\_e+t)=\sum\_i s^{[i]}(x)t^i$ により導関数列を定義する。$a\_0,\ldots,a\_n$ がPólya frequency列、すなわちToeplitz行列 $(a\_{j-i})$ の全ての小行列式が非負で、ある $j\leq|\lambda|$ について $a\_j>0$ とする。このときTheorem 1.1の仮定の下で

$$
\sum\_{i=0}^n a\_i h^i s\_\lambda^{[i]}(E)
$$

もHodge–Riemann関係を満たす。係数列の条件は、任意の正係数結合を許さないという先の難点に対応する。

### Lorentzian多項式の幾何学的特徴づけ（Theorem 1.7）

直線束を変数とする双次数 $(1,1)$ のHodge–Riemann多項式は、ちょうど零でないdually Lorentzian多項式である。また次数 $k$ の斉次多項式 $f$ がLorentzianであることは、射影空間の積 $X$、nef類 $\xi\_i$、次数 $l$ のHodge–Riemann多項式 $g$ を用いて

$$
f(y)=\frac1{k!}\int\_X g(\xi\_1,\ldots,\xi\_r)(y\_1\xi\_1+\cdots+y\_r\xi\_r)^k,
\qquad \dim X=k+l
$$

と表せることと同値である。重み $g$ は一般には除けず、全てのLorentzian多項式が通常の体積多項式になるという主張ではない。

### 微分作用素による保存（Theorem 1.8）

$n$ 次元滑らかな射影多様体上の豊富な実因子の体積多項式 $v$ を考える。各群の変数に対し $\partial\_i=\sum\_j\partial/\partial x\_{i,j}$ と置くと、$v(\partial\_1,\ldots,\partial\_r)$ は次数 $k$ のHodge–Riemann多項式を次数 $k-n$ のものへ送る。仮定は $k\geq n$ と $\min(p,q)=1$ である。

### 特性数のLorentzian性と厳密対数凹性（Theorem 1.9、Corollary 1.10）

分割 $\lambda\_i$、非負整数 $m,n\_i$、次元 $m+\sum\_i(|\lambda\_i|-n\_i)$ の $X$、nefな実捻りベクトル束 $E\_i$ に対し、

$$
\sum\_{\substack{m\_1+\cdots+m\_r=m,\ 0\leq m\_i\leq n\_i}}
\frac{x\_1^{m\_1}\cdots x\_r^{m\_r}}{m\_1!\cdots m\_r!}
\int\_X\prod\_{i=1}^r s\_{\lambda\_i}^{[n\_i-m\_i]}(E\_i)
$$

はLorentzianとなる。各 $E\_i$ が豊富で $m\leq n\_i\leq|\lambda\_i|$、階数が $(\lambda\_i)\_1$ 以上なら厳密なLorentzian性が得られる。

特に豊富な $E,F$ と分割 $\lambda,\mu$ に対し、階数がそれぞれ $\lambda\_1,\mu\_1$ 以上なら

$$
b\_i=\int\_Xs\_\lambda^{[i]}(E)s\_\mu^{[|\lambda|+|\mu|-d-i]}(F)
$$

は $\max(0,|\lambda|-d)\leq i\leq\min(|\lambda|,|\lambda|+|\mu|-d)$ で正の厳密対数凹列となる。内部の添字で $b\_i^2>b\_{i-1}b\_{i+1}$ が成り立つ。

### 微分列の係数ごとの正値性（Theorem 1.11、Corollaries 1.12–1.13）

$f(x)f(y)$ が双次数 $(1,1)$ のHodge–Riemann多項式で、$D=\sum\_i a\_i\partial\_i$、$a\_i\geq0$ とする。このとき $1\leq m\leq n$ について

$$
\frac{D^mf\thinspace D^nf}{m!n!}-\frac{D^{m-1}f\thinspace D^{n+1}f}{(m-1)!(n+1)!}
$$

は各変数群のSchur多項式の積の非負線形結合になる。特に $f$ が同じ変数上のSchur多項式の積なら

$$
f^{[m]}f^{[n]}-f^{[m-1]}f^{[n+1]}
$$

はSchur正値である。$m=n$ がRoss–Wuの対数凹性予想を含む。dually Lorentzian多項式については、対応する差の単項式係数が非負となる。正の数値を変数に代入した後の対数凹性より強い結論である。

## 証明の見取り図

Fulton–LazarsfeldおよびRoss–Tomaの方法を出発点とし、Lorentzian形式の線形代数を一般のHermite形式へ拡張する。扱う符号数は $(h^{p,q}-h^{p-1,q-1},h^{p-1,q-1})$ となるため、幾何学的構成の途中で $H^{p-1,q-1}$ を保つことが重要になる。

退化軌跡とその解消を用いてSchur類を表現し、豊富な類を掛ける操作や微分作用素に対する保存性を示す。こうして得たHodge–Riemann関係を交点数へ、さらに多項式の係数へ移すことで、厳密対数凹性とSchur正値性の結論に到達する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2506.16992)
- **Introduction:** [PDF](https://arxiv.org/pdf/2506.16992v6) — Section 1, pp. 1–5
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.5, 1.7–1.9, 1.11; Corollaries 1.3, 1.10, 1.12, 1.13
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2506.16992v6
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
