---
layout: paper
title: The blow-up of the cubic fourfold along eight planes is Fano
title_ja: 八つの平面に沿う三次四次元多様体のブローアップとFano性
authors: Saverio Andrea Secci
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We prove that the blow-up Z_m of a smooth cubic fourfold along m <= 8 planes, pairwise meeting at distinct points and satisfying explicit generality conditions, is a smooth Fano fourfold of Picard rank rho(Z_m) = m+1 <= 9; in particular, we obtain three new families of smooth Fano fourfolds with rho > 6 that are not a product of surfaces. Complementary to this result, we show that a smooth cubic fourfold as above exists. Moreover, we study the birational geometry of Z_m and show that it corresponds exactly to that of a smooth del Pezzo surfaces S_m, obtained as the blow-up of P^2 along m <= 8 points in general position. Namely, Z_m and S_m have isomorphic Mori cones, pseudo-effective cones with same Mori chamber decomposition, and there is a one-to-one correspondence between the contractions of Z_m and the contractions of S_m. Lastly, we study the anticanonical linear system of Z_m and prove that it is basepoint free if and only if m <= 7. For m = 8 and a special configuration
  of planes, we show that the anticanonical base locus Bs(|-K_{Z_8}|) has dimension 2 and contains a smooth del Pezzo surface of degree 1.
topic: algebraic-geometry
tags:
- fano-varieties
- birational-geometry
- positivity
arxiv_id: 2610.25532v1
arxiv_url: https://arxiv.org/abs/2610.25532
arxiv_submitted: '2026-10-18'
arxiv_updated: '2026-10-18'
summary: 互いに異なる点で交わる平面を最大8個含む一般の滑らかな三次四次元多様体について、それらの和に沿うブローアップがFanoとなることを示す。del Pezzo曲面との錐・収縮の対応も得られ、平面が8個になる場合には反標準系の大域生成性が失われる。
abstract_en: ''
summary_en: The paper constructs Fano fourfolds by blowing up special plane configurations in cubic fourfolds. Their birational cones are organized by the corresponding del Pezzo surfaces, leading to examples of large Picard rank. The eight-plane case also exhibits a two-dimensional obstruction to global generation of the anticanonical system.
abstract_ja: 平面配置を含む三次四次元多様体から、Picard数の大きいFano四次元多様体を構成する。論文の一般性条件の下で最大8個の平面に沿うブローアップは滑らかなFano多様体となり、そのMori錐と有効錐は平面の点ブローアップで得るdel Pezzo曲面の錐に対応する。反標準束は平面が7個以下なら大域生成されるが、8個のときはそうではない。
abstract_source_url: https://arxiv.org/abs/2610.25532
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.25532v1](https://arxiv.org/abs/2610.25532)
- **著者:** Saverio Andrea Secci
- **初回投稿日:** 2026-10-18
- **最終更新日:** 2026-10-18
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

積でないFano四次元多様体でPicard数が大きい例は少ない。本論文は、三次四次元多様体に含まれる平面をブローアップする構成から、Picard数7、8、9の三つの新しい族を与える。

中心となるのは、最大8個の平面が互いに異なる点で交わる配置である。論文の一般性条件を満たす滑らかな三次四次元多様体では、その平面の和に沿うブローアップが滑らかなFano多様体となり、小収縮を持たない。

さらに、この四次元多様体の錐と収縮は、射影平面を同数の一般点でブローアップしたdel Pezzo曲面に対応する。ただし反標準束の振る舞いには境目があり、7個以下では大域生成される一方、8個では二次元の基底軌跡が現れる。

## 背景と問題設定

高いPicard数を持ち、小収縮を持たないFano四次元多様体を三次四次元多様体と平面から説明する既存の構造定理がある。本論文はこの関係を構成の方向に進め、どの平面配置から実際にFano多様体が得られるかを問う。

以下の「一般」は論文の注意に従い、パラメータ空間の非空開集合上で成り立つという意味であり、必ずしも稠密開集合を意味しない。パラメータ空間が可約な場合を含むためである。平面が点で交わるという条件だけで、全ての三次四次元多様体に結論を拡張してはならない。

## 主結果

### Fano四次元多様体の構成（Theorem 1.1）

$Z\subset\mathbb P^5$を、互いに異なる点で交わる$m\leq8$個の平面を含む一般の滑らかな三次四次元多様体とする。その平面のスキームとしての和に沿うブローアップ
$$
\sigma:Z\_m\longrightarrow Z
$$
は滑らかなFano四次元多様体であり、小収縮を持たない。Picard数は$\rho(Z\_m)=m+1$であり、特に$m=8$では9となる。

### del Pezzo曲面との錐の対応（Theorem 1.2）

$S\_m$を$\mathbb P^2$の$m$個の一般点でのブローアップとする。曲線と因子の数値空間の線形同型によって、
$$
\overline{\operatorname{NE}}(Z\_m)\simeq\overline{\operatorname{NE}}(S\_m),\qquad
\operatorname{Eff}(Z\_m)\simeq\operatorname{Eff}(S\_m)
$$
が得られる。収縮は一対一に対応し、有効錐のMori chamber分解も一致する。これは錐と双有理幾何の対応であり、常に$S\_m$が$Z\_m$の部分多様体として与えられるという意味ではない。

### 反標準系の境界（Theorem 1.3）

$-K\_{Z\_m}$が大域生成されるための必要十分条件は$m\leq7$である。$m=8$の平面はあるVeronese曲面に接し、反標準系の基底軌跡は二次元で、次数1の滑らかなdel Pezzo曲面を含む。

従ってFano性、すなわち反標準束の豊富性と、その束自体の大域生成性はこの構成でも区別される。

### 三つの平面からの双有理変換（Theorem 1.4）

三つの平面$\Pi\_1,\Pi\_2,\Pi\_3$を通る二次式の線形系
$$
\left|H^0\left(\mathcal I\_{(\Pi\_1\cup\Pi\_2\cup\Pi\_3)/Z}\otimes\mathcal O\_Z(2)\right)\right|
$$
は、別の滑らかな三次四次元多様体$Z'$への双有理写像を与える。$Z\_3$上で解消すると、$Z'$内の別の三平面をブローアップする射も得られる。射影平面の標準Cremona変換に対応する四次元の操作である。

### 構成が空でないこと（Theorem 1.5）

各$m\leq8$について、Setup 3.1および一般性条件$(\star)$を満たす滑らかな三次四次元多様体が存在する。Introductionでは条件$(\star)$の全ての内容は展開されていないため、本記事では任意の配置に対する存在へ読み替えない。この定理が上の構成の非空性を保証する。

## 証明の見取り図

まず三平面の場合を基礎としてCremona型変換を作る。その作用をdel Pezzo曲面のPicard群上の作用と対応させ、Mori錐と収縮を決定してFano性を導く。

一方、必要な三次多様体が実際に存在することは、Veronese曲面に接する平面の配置とHorace法による切断空間の次元計算を使って示す。最後に反標準系を解析する。Introductionに示されたこの流れに限って説明し、後続節の個々の交点計算は再構成しない。

## 原論文との対応

- **Abstractページ:** [The blow-up of the cubic fourfold along eight planes is Fano](https://arxiv.org/abs/2610.25532)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.25532v1) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems 1.1–1.5
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.25532v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
