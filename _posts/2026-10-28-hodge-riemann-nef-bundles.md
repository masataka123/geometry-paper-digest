---
layout: paper
title: Hodge--Riemann relations for nef bundles
title_ja: nefベクトル束に対するHodge–Riemann関係
authors: Enhan Li, Weizhe Zheng
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CO
arxiv_abstract: We introduce the $(m,p,q)$-Lefschetz property for $(1,1)$-type endomorphisms of Hodge--Lefschetz modules, providing a framework for studying nef $(1,1)$-classes and characteristic classes of nef vector bundles on compact K\"ahler manifolds. Under a Hall--Rado type condition on nef twisted vector bundles, we prove Hodge--Riemann relations for products of top Chern classes and, in suitable bidegrees, for products of derived Schur classes. For products of nef $(1,1)$-classes, we show furthermore that the Hall--Rado type condition is equivalent to simultaneous Hodge--Riemann relations. Our proofs build on the purity theorem and descent lemma of Cattani, Kaplan, and Schmid. We extend the descent lemma to Schur classes of nef vector bundles. We also establish formal analogs for projective bundle modules over Hodge--Lefschetz modules, with applications to tautological classes and descent on matroid Chow rings.
topic: algebraic-geometry
tags:
- positivity
- vector-bundles-sheaves
- chern-classes
- hodge-theory
arxiv_id: 2610.37650v1
arxiv_url: https://arxiv.org/abs/2610.37650
arxiv_submitted: '2026-10-27'
arxiv_updated: '2026-10-27'
summary: コンパクトKähler多様体上のnef束について、最高Chern類やSchur類がHodge–Riemann関係を満たす条件を調べる。部分的なLefschetz性によるHall–Rado型条件を導入し、nefな(1,1)類の積の場合には同時Hodge–Riemann性の必要十分条件を与える。
abstract_en: ''
summary_en: This work treats characteristic classes of nef bundles using a partially polarized cohomological framework. Conditions on sums of twisting classes guarantee Lefschetz isomorphisms and the required signs on primitive cohomology. For products of divisor classes the same conditions characterize simultaneous Hodge–Riemann behavior. Further results concern nonvanishing of Schur-positive classes and the survival of polarization on image modules.
abstract_ja: nef束の特性類を扱うために、Hodge–Lefschetz加群上の部分的なLefschetz性を導入する。Hall–Rado型条件のもとで最高Chern類の積、および適切な双次数におけるderived Schur類の積にHodge–Riemann関係を証明する。(1,1)類の積では条件の必要性も示し、Schur正値類の交点数、Schur類の消滅、降下補題と組合せ論への応用を得る。
abstract_source_url: https://arxiv.org/abs/2610.37650
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.37650v1](https://arxiv.org/abs/2610.37650)
- **著者:** Enhan Li, Weizhe Zheng
- **初回投稿日:** 2026-10-27
- **最終更新日:** 2026-10-27
- **主分類・副分類:** math.AG（主分類）; math.CO
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

ample束の特性類には強い正値性がある一方、nef束では退化が起こるため、通常のhard Lefschetz定理やHodge–Riemann関係が無条件に保たれるわけではない。本論文は、どの双次数にどれだけの正値性が必要かを測る枠組みを導入する。

中心となるのは$(m,p,q)$-Lefschetz性である。束をねじる類の任意の部分和にこの性質を課すHall–Rado型条件から、最高Chern類やderived Schur類の積に対するHodge–Riemann関係を導く。nefな$(1,1)$類の積では、同時に成立すべきHodge–Riemann関係とこの条件が同値になる。

さらに、特性類による積の像にもHodge–Lefschetz構造が降下することを示す。これは符号条件だけでなく、退化した正値性を次元を下げた空間で維持する仕組みであり、滑らかな零点集合やmatroidのChow環にも応用される。

## 背景と問題設定

$X$を複素次元$d$のコンパクトKähler多様体とする。$\operatorname{Pol}(X)$はKähler錐を含みコホモロジーを偏極する最大の連結錐、その閉包を$\overline{\operatorname{Pol}}(X)$と書く。nef類はこの閉包に属する。

$\eta$が$(m,p,q)$-Lefschetzであるとは、$p+q\leq m\leq d$のもとで、すべての$0\leq l\leq\min(p,q)$について

$$
\eta^{m-p-q+2l}:H^{p-l,q-l}(X)\longrightarrow H^{m-q+l,m-p+l}(X)
$$

が単射であることをいう。Hodge–Riemann対$(\Omega,\eta)$では、対応する$\Omega\eta^{2l}$による写像が同型になり、原始部分上で定まる交点形式が所定の符号で正定値となる。従来のKähler類の混合積やample束の結果を、nef束まで統一的に広げることが目標である。

## 主結果

### 最高Chern類とderived Schur類（Theorem 1.4）

nef twisted束$E\_i$の階数を$e\_i$とし、$\alpha\_i,\eta\in\overline{\operatorname{Pol}}(X)$、$\eta$を$(p+q,p,q)$-Lefschetzとする。$p+q+\sum\_i e\_i=d$で、すべての空でない$I$について

$$
\alpha\_I:=\sum\_{i\in I}\alpha\_i
\quad\text{が}\quad
\left(p+q+\sum\_{i\in I}e\_i,p,q\right)\text{-Lefschetz}
$$

なら

$$
\left(\prod\_i c\_{e\_i}(E\_i\langle\alpha\_i\rangle),\eta\right)\in\operatorname{HR}^{p,q}(X)
$$

となる（(a)）。射影的な場合には、各$\bigotimes\_{i\in I}E\_i$が$(d-p-q-\sum\_{i\in I}e\_i)$-ampleであるという代替条件も与えられる（(b)）。ここで$t$-ampleは、射影束のtautological線束がsemiampleで、対応する写像のファイバー次元が高々$t$であることをいう。

(c)ではさらに$H^{p-2,q-2}(X)=0$と$\alpha\_i,\eta$のnef性を仮定する。分割$\lambda^i$と$0\leq j\_i\leq|\lambda^i|$に対し、$e\_i\geq(\lambda^i)\_1$、$\sum\_i(|\lambda^i|-j\_i)=d-p-q$を課す。上の条件で$e\_i$を$|\lambda^i|-j\_i$に置き換えると、結論のChern類の積を

$$
\prod\_i s\_{\lambda^i}^{[j\_i]}(E\_i\langle\alpha\_i\rangle)
$$

に置き換えたHodge–Riemann関係が成り立つ。上付き$[j\_i]$は論文のderived Schur類を表す。

### (1,1)類の積の特徴づけ（Theorem 1.6）

$\Omega=\alpha\_1\cdots\alpha\_{d-p-q}$、$\alpha\_i,\eta\in\overline{\operatorname{Pol}}(X)$とする。$(\Omega,\eta)$とすべての$(\Omega,\alpha\_i)$が$H^{p,q}(X)$上でHodge–Riemann対になることは、$\eta$が$(p+q,p,q)$-Lefschetzであり、任意の空でない$I$について$\alpha\_I$が$(p+q+|I|,p,q)$-Lefschetzであることと同値である。Corollary 1.5の十分条件が、同時成立を考えると本質的に最適であることを示す。

### Schur正値類の交点数（Theorem 1.7）

nef twisted束のSchur類の積を非負係数で足した次数$\lambda$の特性類$f$を考える。nef類$\eta\_1,\ldots,\eta\_{d-\lambda}$が、すべての空でない$I$について

$$
\operatorname{nd}\left(\sum\_{i\in I}\eta\_i\right)\geq\lambda+|I|
$$

を満たすなら

$$
\int\_X\eta\_1\cdots\eta\_{d-\lambda}\thinspace f(E\_1,\ldots,E\_k)>0
$$

となる。ただし正の係数で現れるSchur類の積がすべてコホモロジーで零の場合は除く。$\operatorname{nd}$は数値的次元である。

### 消滅の伝播（Corollary 1.8）

nef twisted束$E$について$s\_\lambda(E)=0$なら、Young図形が$\mu\supseteq\lambda$を満たすすべての$\mu$について$s\_\mu(E)=0$となる。交点数の対数凹性と前の正値性を組み合わせた帰結である。

### 特性類による降下（Theorem 1.10）

$\Omega\_i=c\_{l\_i}(E\_i)$かつ$c\_{l\_i+1}(E\_i)=0$、または$\Omega\_i=s\_{l\_i}(E\_i)$かつ$s\_{l\_i+1}(E\_i)=0$とする。このとき

$$
V=\Omega\_1\cdots\Omega\_k H^\ast(X,\mathbb R)
$$

は重み$d-\sum\_i l\_i$のHodge–Lefschetz加群となる。$(m,p,q)$-Lefschetz類は、$p+q\leq m-\sum\_i l\_i$なら$(m-\sum\_i l\_i,p,q)$-Lefschetzな作用へ降下する（(a)）。

Kähler束の最高Chern類を用いる場合には、降下後の指数は$\min(m,d-\sum\_i e\_i)$となる（(b)）。derived Schur類の積の次数が$d-2$の場合には、対角双次数のコホモロジーへの像が重み二の加群となり、nefかつbigな錐により偏極される（(c)）。

### 零点集合とmatroidへの応用（Corollary 1.11・Theorem 1.12）

階数$e$の$t$-ample束の正則切断の滑らかな零点集合$Z$に制限すると、$(m,p,q)$-Lefschetz類は$\min(m,d-e)-t$を第一指数とするLefschetz類になる。ただし$p+q$はこの指数以下とする。

また同じ台集合上のmatroidの交わり$N=M\wedge M'$がlooplessなら、$A^\ast(M)\to A^\ast(N)$を通じ、ample錐を含む最大連結偏極錐の偏極性が保存される。部分的Lefschetz性も、$2l+r\leq\operatorname{rank}N-1$の範囲で、指数$\operatorname{rank}M-1-r$から$\operatorname{rank}N-1-r$へ降下する。

## 証明の見取り図

Cattani–Kaplan–Schmidの純性定理と降下補題を、部分的Lefschetz性の枠組みで精密化する。まず$(1,1)$類の積を扱い、次に最高Chern類・Schur類へ進む。形式的な射影束加群と拡張の議論により、通常のKähler錐を越えた偏極錐へ結果を広げる。IntroductionはHuの同時期の研究との一部の重なりも明記し、本論文の主眼をベクトル束に置いている。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.37650)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.37650v1) — Section 1, pp. 1–6（Section 2の前まで）
- **Introduction中で言及された主要結果:** Definitions 1.1–1.2；Theorems 1.4, 1.6, 1.7, 1.10, 1.12；Corollaries 1.5, 1.8, 1.11
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.37650v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
