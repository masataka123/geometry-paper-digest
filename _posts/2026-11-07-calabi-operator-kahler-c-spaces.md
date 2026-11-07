---
layout: paper
title: Holomorphic sectional curvature and the Calabi operator on Kähler C-spaces
title_ja: Kähler C空間の正則断面曲率とCalabi作用素の鋭い評価
authors: Xiaolong Li, Peter Petersen
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: 'We study holomorphic sectional curvature and the Calabi curvature operator on compact K\"ahler manifolds. First we show that every homogeneous K\"ahler metric on a generalized flag manifold has positive holomorphic sectional curvature. For the standard homogeneous K\"ahler-Einstein metric with Einstein constant 2, it is shown that the spectrum of the Calabi operator lies in $(-2,2]$. We determine its sharp upper bound in terms of the anticanonical degrees and characterize the 2-eigenspace. The spectral bounds imply nonnegative cross quadratic bisectional curvature and positive dual cross quadratic bisectional curvature, proving conjectures of Ni and Zheng. We also show that these conditions do not characterize homogeneity: we construct a nonhomogeneous K\"ahler-Einstein 13-fold whose Calabi spectrum lies strictly inside $(-2,2)$ after the same normalization, as well as nonhomogeneous examples in dimensions 4 and 5. The proofs involve an integral identity for holomorphic
  sectional curvature, projective embeddings, root-space estimates, and explicit metrics on projective bundles.'
topic: differential-geometry
tags:
- curvature
- kahler-einstein-metrics
- fano-varieties
arxiv_id: 2611.07402v1
arxiv_url: https://arxiv.org/abs/2611.07402
arxiv_submitted: '2026-11-05'
arxiv_updated: '2026-11-05'
summary: 一般化旗多様体上の任意の不変Kähler計量について、正則断面曲率の正値性を示す。標準Kähler–Einstein計量ではCalabi作用素のスペクトルを評価し、関連する曲率正値性を備えながら等質でない射影束の例も構成する。
abstract_en: ''
summary_en: The curvature of a homogeneous Kähler metric is tested both on tangent directions and on symmetric tensors. The paper proves positivity of holomorphic sectional curvature for all invariant Kähler metrics on generalized flag manifolds. For the standard Einstein normalization it identifies the top eigenvalue of the Calabi operator using root data. Explicit projective bundles then show that closely related positivity conditions do not force homogeneity.
abstract_ja: 一般化旗多様体であるKähler C空間の全ての不変Kähler計量は、正の正則断面曲率をもつ。標準Kähler–Einstein計量では、Calabi作用素の最大固有値を反標準次数から決定し、下側の厳密な評価も得る。この作用素とcross quadratic bisectional curvatureの関係を利用し、正値性が等質性を強制しないことを具体的な非等質射影束によって示す。
abstract_source_url: https://arxiv.org/abs/2611.07402
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.07402v1](https://arxiv.org/abs/2611.07402)
- **著者:** Xiaolong Li, Peter Petersen
- **初回投稿日:** 2026-11-05
- **最終更新日:** 2026-11-05
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kähler C空間は、コンパクト群の商として得られる一般化旗多様体であり、複素幾何とLie理論が直接結び付く対象である。本論文は、これらの空間上の不変Kähler計量について、曲率のどのような正値性が一様に成立するかを調べる。

まず、標準Kähler–Einstein計量に限らず、任意の不変Kähler計量の正則断面曲率が正であることを示す。さらに標準計量では、対称二階テンソル上のCalabi作用素の最大固有値を根系の情報から正確に計算し、そのスペクトル全体の上下界を得る。

これによりcross quadratic bisectional curvatureとその双対に関する正値性も分かる。しかし、そのような正値性から空間が等質であるとは結論できない。論文は非等質の射影束を構成し、13次元のKähler–Einstein例を含めて具体的な曲率評価を与える。

## 背景と問題設定

$M=G/K$ を正の次元の一般化旗多様体とし、不変複素構造を固定する。Calabi作用素 $C$ は $\operatorname{Sym}^2T^{1,0}M$ 上のHermite作用素で、曲率テンソルから

$$
\langle CS,S\rangle=\sum\_{p,q,r,s}R\_{p\bar q r\bar s}S^{pr}\overline{S^{qs}}
$$

と定まる。正則断面曲率が階数一のテンソルを調べるのに対し、この作用素は対称テンソル全体の曲率を記録する。

Einstein定数が $\lambda$ の場合、$A$ の対称部分を $S$ とすると、論文の二つの曲率量は

$$
\operatorname{CQB}(A)=\lambda\Vert A\Vert^2-\langle CS,S\rangle,
\qquad
{}^d\operatorname{CQB}(A)=\lambda\Vert A\Vert^2+\langle CS,S\rangle
$$

と表される。作用素の上端と下端を制御することが、それぞれの正値性の判定になる。

## 主結果

### 全ての不変計量に対する正則断面曲率（Theorem 1.1）

$M$ 上の任意の $G$ 不変Kähler計量は、正の正則断面曲率をもつ。標準Einstein計量だけに課されていた予想を含み、不変Kähler類を変えても正値性が保たれることを示す結果である。

### 標準計量のCalabi作用素（Theorem 1.2）

標準計量を $\operatorname{Ric}(g)=2g$ と正規化すると

$$
\operatorname{Spec}(C)\subset(-2,2],\qquad
\lambda\_{\max}(C)=\frac{4}{k\_\ast }\leq2
$$

となる。ここで $k\_\ast $ は、painted simple rootに対応するSchubert曲線の反標準次数 $k\_\alpha$ の最小値である。上端 $2$ の固有空間も

$$
\ker(2\operatorname{Id}-C)=
\bigoplus\_{\alpha\in\Phi\_T,\ k\_\alpha=2}\mathbb C(e\_\alpha\otimes e\_\alpha)
$$

と記述される。

上端が厳密に $2$ 未満となることは、各painted rootがLevi rootに隣接すること、また $\mathbb P^1$ をファイバーとする等質射影が存在しないことと同値である。曲率量については

$$
\operatorname{CQB}(A)\geq\left(2-\frac4{k\_\ast }\right)\Vert A\Vert^2,
\qquad {}^d\operatorname{CQB}>0
$$

を得る。下端の厳密性と上端の等号条件は、異なる幾何学的情報である。

### 正値性をもつ非等質例（Theorem 1.3）

等質性を仮定しないと、上記の種類の曲率条件を満たす別の空間が存在する。$B=\mathbb P^5\times\mathbb P^5$、$L\_1=\mathcal O(-1,0)$、$L\_2=\mathcal O(0,-1)$ とし、直線をパラメータ化する射影束

$$
M=\mathbb P\_{\mathrm{lines}}(L\_1^{\oplus2}\oplus L\_2^{\oplus2})
$$

を考える。これは13次元で、$\operatorname{Ric}(g)=g$ を満たす明示的な計量に対して

$$
-\frac12\operatorname{Id}\leq C\_g\leq\frac{11}{12}\operatorname{Id}
$$

が成り立ち、両端は実現される。$g/2$ によってEinstein定数を $2$ にそろえると、範囲は $[-1,11/6]$ となる。

さらに4次元の $\mathbb P\_{\mathrm{lines}}(\mathcal O\_{\mathbb P^2}^{\oplus2}\oplus\mathcal O\_{\mathbb P^2}(-1))$ には、Einsteinとは限らない計量で $\operatorname{CQB}\geq0$、${}^d\operatorname{CQB}(A)\geq\Vert A\Vert^2/8$ を満たすものがある。同じ構成の底を $\mathbb P^3$ にした5次元例では、両曲率量が $\Vert A\Vert^2/4$ 以上になる。

これらの接束はある有理曲線上で負次数の商をもち、nefではない。したがって、nef接束をもつFano多様体の等質性に関するCampana–Peternell予想への反例ではない。

## 証明の見取り図

正則断面曲率には、根系による段階構造を利用し、曲率を正のノルム平方の積分として扱う方法を用いる。標準計量の作用素の上界は射影埋め込みとGauss方程式、下界は根系ごとのブロック評価から導かれる。

非等質例では射影束上の具体的な計量を作り、Calabi作用素を評価する。曲率の抽象的な正値性だけでなく、実際にどの定数まで成立するかを計算することで、等質空間との比較を可能にしている。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.07402)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.07402v1) — Section 1, pp. 1–5
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2, 1.3
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.07402v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
