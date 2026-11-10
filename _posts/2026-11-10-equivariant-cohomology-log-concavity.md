---
layout: paper
title: Log-concavity of polynomials arising from equivariant cohomology
title_ja: 同変コホモロジー類の対数凹性と整係数Macaulay双対
authors: Yairon Cid-Ruiz, Yupeng Li, Jacob P. Matherne
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.AC
- math.CO
arxiv_abstract: We study the equivariant cohomology classes of torus-equivariant subvarieties of the space of matrices. For a large class of torus actions, we prove that the polynomials representing these classes (up to suitably changing signs) are covolume polynomials in the sense of Aluffi. We study the cohomology rings of complex varieties in terms of Macaulay inverse systems over $\mathbb{Z}$. As applications, we show that under certain conditions, the Macaulay dual generator is a denormalized Lorentzian polynomial in the sense of Brändén and Huh, and we give a characteristic-free extension (over $\mathbb{Z}$) of the result of Khovanskii and Pukhlikov describing the cohomology ring of toric varieties in terms of volume polynomials.
topic: algebraic-geometry
tags:
- algebraic-cycles-enumerative
- chern-classes
- positivity
- toric-geometry
arxiv_id: 2411.17572v3
arxiv_url: https://arxiv.org/abs/2411.17572
arxiv_submitted: '2024-11-26'
arxiv_updated: '2026-11-06'
summary: 行列空間内のトーラス不変部分多様体の同変類が、符号変更後にcovolume多項式になることを示す。二重Schubert・Richardson多項式の離散対数凹性を導き、整係数コホモロジー環を交叉数から作るMacaulay双対生成元で記述する。
abstract_en: We study the equivariant cohomology classes of torus-equivariant subvarieties of the space of matrices. For a large class of torus actions, we prove that the polynomials representing these classes (up to suitably changing signs) are covolume polynomials in the sense of Aluffi. We study the cohomology rings of complex varieties in terms of Macaulay inverse systems over $\mathbb{Z}$. As applications, we show that under certain conditions, the Macaulay dual generator is a denormalized Lorentzian polynomial in the sense of Brändén and Huh, and we give a characteristic-free extension (over $\mathbb{Z}$) of the result of Khovanskii and Pukhlikov describing the cohomology ring of toric varieties in terms of volume polynomials.
summary_en: ''
abstract_ja: 行列空間の行と列をスケールするトーラス作用に対し、既約不変部分多様体の同変コホモロジー類を表す多項式は、列側の変数の符号を変えるとcovolume多項式となる。Richardson・Schubert多項式のM-convexな台と離散対数凹性が従う。また無捩れな整係数偶数次コホモロジー環をMacaulay逆系で記述し、nef線束のChern類が生成元の場合にはLorentzian多項式との関係を得る。
abstract_source_url: https://arxiv.org/abs/2411.17572
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2411.17572v3](https://arxiv.org/abs/2411.17572)
- **著者:** Yairon Cid-Ruiz, Yupeng Li, Jacob P. Matherne
- **初回投稿日:** 2024-11-26
- **最終更新日:** 2026-11-06
- **主分類・副分類:** math.AG（主分類）; math.AC, math.CO
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

幾何から生じる多項式の係数には、正値性より強い対数凹性が現れることがある。本論文は行列空間のトーラス作用に対する同変コホモロジー類を調べ、適切な符号変更の後にcovolume多項式という幾何的なクラスへ入ることを示す。

この一般定理をRichardson多項式へ適用すると、台の組合せ的構造と係数の離散対数凹性が得られる。通常のSchubert多項式について既知だった性質を回収し、二重Schubert多項式の離散対数凹性へ進む。

別の柱として、整係数の偶数次コホモロジー環を交叉数から作る一つの双対多項式で記述する。nef線束の第1 Chern類で環が生成される場合には、その正規化がLorentzianとなり、トーリック多様体では混合体積の表示につながる。

## 背景と問題設定

非負係数の斉次多項式$h=\sum\_\alpha a\_\alpha t^\alpha$の離散対数凹性とは

$$
a\_\alpha^2\geq a\_{\alpha+e\_i-e\_j}a\_{\alpha-e\_i+e\_j}
$$

という係数不等式である。台がM-convexであるとは、その台が整な一般化permutohedronの格子点集合になることをいう。covolume多項式はdually Lorentzian多項式の幾何的な源となり、これらの性質を持つ。

$u\leq w$をBruhat順序で比較できる置換とし、二重Richardson多項式を

$$
R\_{w/u}(t,s)=\mathfrak S\_u(t,s)\mathfrak S\_{w\_0w}(t,s'),
\qquad s'=(s\_n,\ldots,s\_1)
$$

で定める。これは旗多様体のRichardson多様体の同変類を表すが、一般にskew Schubert多項式そのものと同じとは限らない。

## 主結果

### 主定理1：Richardson多項式（Theorem A、Corollary B）

符号を変えた$R\_{w/u}(t,-s)$はcovolume多項式である。その結果、$R\_{w/u}(t,-s)$、$R\_{w/u}(t)$、$\mathfrak S\_u(t,-s)$、$\mathfrak S\_u(t)$の台はM-convexで、係数は上記の離散対数凹性を満たす。

通常のSchubert多項式の性質などは先行結果を回収する部分であり、著者らは二重Schubert多項式の離散対数凹性を新しい帰結として位置付ける。

### 主定理2：行列空間の同変類（Theorem C）

$T=(\mathbb C^\ast )^m\times(\mathbb C^\ast )^n$が$\operatorname{Mat}\_{m,n}$に

$$
(g,h)\cdot M=gMh^{-1}
$$

で作用するとする。既約な$T$不変部分多様体$X$の同変類を表す多項式を$C\_X(t\_1,\ldots,t\_m,s\_1,\ldots,s\_n)$とすると、

$$
C\_X(t\_1,\ldots,t\_m,-s\_1,\ldots,-s\_n)
$$

はcovolume多項式である。この特定の作用が重要で、任意のトーラス作用に拡張するとM-convex性すら成立しない例がある。

### 主定理3：整係数コホモロジー環（Theorem D）

$X$を$d$次元の滑らかな完備既約複素代数多様体とし、$R=H^{2\bullet}(X,\mathbb Z)$が$\mathbb Z$-無捩れとする。次数を半分に数えた表示

$$
R\simeq S/I,\qquad S=\mathbb Z[x\_1,\ldots,x\_n],\qquad\deg x\_i=\delta\_i>0
$$

を選び、$\rho:H^{2d}(X,\mathbb Z)\to\mathbb Z$を次数写像とする。このとき$R$は$\mathbb Z$上Artinian Gorensteinである。逆多項式環の作用に関し

$$
G\_R(y)=\sum\_{\alpha\_1\delta\_1+\cdots+\alpha\_n\delta\_n=d}
\rho(x\_1^{\alpha\_1}\cdots x\_n^{\alpha\_n})y\_1^{\alpha\_1}\cdots y\_n^{\alpha\_n},
\qquad I=\operatorname{Ann}\_S(G\_R)
$$

となる。ここで$y\_i$は逆変数$x\_i^{-1}$に対応する形式的変数で、作用は論文のMacaulay逆系の意味である。

さらに各$x\_i=c\_1(L\_i)$がnef線束の第1 Chern類なら、$G\_R$の係数を多重階乗で正規化した$N(G\_R)$はLorentzianである。滑らかな完備トーリック多様体では、$L\_i$の対応する多面体$P\_i$を用い

$$
G\_R(y)=\sum\_{|\alpha|=d}\operatorname{MV}\_\alpha(P\_1,\ldots,P\_n)y^\alpha
$$

と書ける。係数の無捩れ性やnefな生成元という仮定を省いた無条件の主張ではない。

## 証明の見取り図

正の多重次数を持つ素イデアルのmultidegreeを調べ、行列空間の同変類に関するTheorem Cへ進む。それをRichardson多様体へ適用してTheorem Aと対数凹性の系を得る。

整係数の議論では、体上のArtinian Gorenstein環に使う双対性を、$\mathbb Z$上平坦な環のMatlis双対とMacaulay逆系へ置き換える。交叉数による双対生成元を得た後、nef類の体積多項式との関係がLorentzian性を与える。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2411.17572)
- **Introduction:** [PDF](https://arxiv.org/pdf/2411.17572v3) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorem A; Corollary B; Theorems C–D
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2411.17572v3
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
