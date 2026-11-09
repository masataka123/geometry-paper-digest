---
layout: paper
title: A counterexample to Manin's Conjecture for almost Fano varieties
title_ja: almost Fano多様体に対するManin予想の反例
authors: Brian Lehmann, Sho Tanimoto
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.NT
arxiv_abstract: We give an example of a smooth rational threefold over a number field with a big anticanonical divisor that does not satisfy the thin set version of Manin's Conjecture. In particular, Manin's Conjecture does not hold for rationally connected almost Fano varieties.
topic: algebraic-geometry
tags:
- fano-varieties
- positivity
- birational-geometry
arxiv_id: 2611.08890v1
arxiv_url: https://arxiv.org/abs/2611.08890
arxiv_submitted: '2026-11-06'
arxiv_updated: '2026-11-06'
summary: 任意の数体上で、反標準因子がbigな滑らかな有理三次元多様体を構成し、どのthin集合を除いても有理点の増大がManin予想の予測を超えることを示す。有理連結almost Fanoへの拡張の限界を与える結果であり、滑らかなFano多様体の場合を否定するものではない。
abstract_en: ''
summary_en: Lehmann and Tanimoto test the scope of the thin-set formulation of Manin’s conjecture beyond Fano varieties. They construct rational threefolds with big anticanonical divisor whose point counts remain too large after every thin-set removal. The obstruction comes from an infinite collection of subvarieties that cannot all be discarded in this manner. Their construction leaves the smooth Fano case open.
abstract_ja: 任意の数体上に、反標準因子がbigな滑らかな有理三次元多様体で、thin集合をどのように除いても反標準高さによる有理点計数が予想の増大率を超える例を与える。無限個の(−1)曲線と楕円ファイブレーションを持つ有理曲面の上に射影直線束を構成し、そこに現れるHirzebruch曲面からの寄与を利用する。これにより有理連結almost Fano多様体一般ではthin集合版Manin予想が成立しないことが分かる。
abstract_source_url: https://arxiv.org/abs/2611.08890
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.08890v1](https://arxiv.org/abs/2611.08890)
- **著者:** Brian Lehmann, Sho Tanimoto
- **初回投稿日:** 2026-11-06
- **最終更新日:** 2026-11-06
- **主分類・副分類:** math.AG（主分類）; math.NT
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Manin予想は、反標準高さで測った有理点の個数がどの程度増えるかを予測する。例外的な部分多様体や被覆から来る点を除くためthin集合を使う形に精密化されてきたが、それでもどの範囲の多様体に成立するかは重要な問題である。

本論文は、反標準因子が豊富であるFanoから、bigであるalmost Fanoへ対象を広げると、有理連結性を仮定しても予想が破れることを示す。反例は任意の数体上の滑らかな有理三次元多様体であり、thin集合を変更しても過剰な有理点の寄与を除去できない。

構成の鍵は、一つの例外的部分多様体だけでなく、無限個の曲面が集合としてthinでない有理点を供給することである。したがって、反例は滑らかなFanoの場合の予想を否定するものではなく、almost Fanoへの拡張の限界を明示する。

## 背景と問題設定

Definition 1.1でalmost Fano多様体とは、滑らかな射影的かつ幾何学的既約な$X$で、$-K\_X$がbig、

$$
H^1(X,\mathcal O\_X)=H^2(X,\mathcal O\_X)=0
$$

かつ幾何学的Picard群がtorsion-freeであるものをいう。このクラスはPeyre定数を定義でき、トーリック多様体なども含む広い対象である。

thin集合を除いた後のManin予想の増大率は、Picard数を$\rho(X)$として$CB(\log B)^{\rho(X)-1}$である。以下の結果は、この対数因子を含む一次的増大よりも真に速い下界を与える。

## 主結果

### 主定理：除去できない過剰な点計数（Theorem 1.2）

任意の数体$k$に対し、$-K\_X$がbigな滑らかな有理三次元多様体$X/k$が存在し、任意のthin部分集合$Z\subset X(k)$について、ある定数$C>0$、$\varepsilon>0$が存在して、十分大きいすべての$B$で

$$
\operatorname{card}\lbrace x\in X(k)\setminus Z\mid H\_{-K\_X}(x)\leq B\rbrace
>CB^{1+\varepsilon}
$$

となる。$Z$を固定してから定数を選ぶ量化であり、すべてのthin集合に共通の$C,\varepsilon$を主張しているわけではない。$B$の正の冪の差は対数因子では吸収できないため、予想された増大率と両立しない。

## 証明の見取り図

まずK3曲面の商の構成を利用し、無限個の$(−1)$曲線と無限個の楕円ファイブレーションを持つ有理曲面$S$を得る。既存の結果を用いて、これらの$(−1)$曲線上の有理点の集合がthinではないことを示す。

次に$S$上の$\mathbb P^1$束$X$を、$-K\_X$がbigになるように選ぶ。$X$には可算個のHirzebruch曲面$T\_i$が現れ、それぞれの点計数の寄与が$X$に予測される率を超える。構成により、どのthin集合も全$T\_i$の寄与を同時には取り除けず、主定理の下界を得る。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.08890)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.08890v1) — Section 1, pp. 1–3（Section 2開始前まで）
- **Introduction中で言及された主要結果:** Definition 1.1; Theorem 1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.08890v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
