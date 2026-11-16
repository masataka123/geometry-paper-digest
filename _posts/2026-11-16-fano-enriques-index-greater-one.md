---
layout: paper
title: Fano-Enriques threefolds of Fano index $>1$
title_ja: 指数が1より大きいFano–Enriques三次元多様体の数値型
authors: Kuzma Khrabrov
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: 'We study $\mathbb{Q}$-Fano threefolds of Fano index greater than $1$ whose Weil divisor class group has nontrivial torsion. We give a complete list of their possible numerical types: there are $176$ of them, which refine to $182$ possible graded Hilbert series. At least $40$ numerical types are realised: $27$ by quotients of weighted complete intersections by cyclic groups, twelve by quotients of threefolds of codimension $4$ or $5$ and one by a quotient of the del Pezzo threefold of degree $5$. Seventy-two numerical types are shown not to occur. In particular the torsion subgroup need not have prime order, and the Weil and $\mathbb{Q}$-Fano indices can be $(1,2)$, $(1,3)$ or $(1,4)$.'
topic: algebraic-geometry
tags:
- fano-varieties
- singularities
- birational-geometry
arxiv_id: 2611.17893v1
arxiv_url: https://arxiv.org/abs/2611.17893
arxiv_submitted: '2026-11-13'
arxiv_updated: '2026-11-13'
summary: Weil因子類群にねじれを持つQ-Fano三次元多様体について、Q-Fano指数が2以上の場合の数値候補を分類する。176個の数値型と182個の次数付きHilbert級数候補を得て、少なくとも40型を実現し、72型を排除する。Weil指数とQ-Fano指数の差、および合成数位数のねじれが具体的に現れる。
abstract_en: ''
summary_en: Torsion in the divisor class group creates a distinction between two notions of Fano index. This work organizes the possible numerical data for terminal Q-factorial Fano threefolds of Picard number one when the rational index is at least two. Constructions realize part of the resulting list, while geometric arguments eliminate another part. The remaining numerical candidates should not be read as an established existence classification.
abstract_ja: 終端的かつQ-factorialな特異点を持ち、Picard数が1で反標準因子が豊富な三次元多様体のうち、因子類群にねじれがあるものを調べる。Q-Fano指数が1より大きい場合について数値型の必要条件を網羅し、ねじれ群まで考慮したHilbert級数候補を与える。重み付き完全交差やより高余次元の多様体の巡回群商などにより少なくとも40型を構成し、別の幾何学的議論で72型の非存在を示す。候補一覧と実際の存在分類は区別される。
abstract_source_url: https://arxiv.org/abs/2611.17893
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.17893v1](https://arxiv.org/abs/2611.17893)
- **著者:** Kuzma Khrabrov
- **初回投稿日:** 2026-11-13
- **最終更新日:** 2026-11-13
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかなFano三次元多様体には現れない因子類群のねじれは、特異なFano多様体の分類を複雑にする。反標準因子が何倍に割れるかを通常の線形同値で測る場合と、有理線形同値で測る場合が一致しなくなるためである。本論文はこの差を持ちうるFano–Enriques三次元多様体を体系的に調べる。

対象はQ-Fano指数が2以上の場合であり、特異点のbasket、指数、基本因子の体積に基づく176個の数値型を得る。ねじれ群の部分群まで考えると、次数付きHilbert級数の候補は182個となる。この段階はRiemann–Rochなどから導かれる必要条件の整理であって、全候補の存在を意味しない。

著者は少なくとも40型の構成と72型の排除を示す。これにより、二つの指数が異なる場合や、ねじれが素数位数ではない場合の具体例も得られる。高指数の既存分類を包含しつつ、指数2・3・4で残る多くの可能性を同じ枠組みで扱う点に意義がある。

## 背景と問題設定

ここでQ-Fano三次元多様体とは、複素射影三次元多様体で、特異点がterminalかつQ-factorial、$-K\_X$ が豊富、$\rho(X)=1$ のものをいう。二つの指数は

$$
q\_W(X)=\max\lbrace q\in\mathbb Z:-K\_X\sim qA,\ A\in\operatorname{Cl}(X)\rbrace ,
$$

$$
q\_{\mathbb Q}(X)=\max\lbrace q\in\mathbb Z:-K\_X\sim\_{\mathbb Q}qA,\ A\in\operatorname{Cl}(X)\rbrace .
$$

ねじれ部分群 $\operatorname{Cl}\_t(X)$ が非零の場合をFano–Enriquesと呼ぶ。基本因子 $A\_X$ はねじれを法として類群を生成し、$-K\_X\sim\_{\mathbb Q}q\_{\mathbb Q}A\_X$ を満たす。数値型はbasket $\mathcal B(X)$、$q\_{\mathbb Q}$、$A\_X^3$ の組に対応する。

## 主結果

### 主定理1（Theorem 1.4）：数値候補の網羅

$q\_{\mathbb Q}(X)\geq2$ なら、上のデータは論文のTable 7の176行のいずれかに現れる。可能な指数は

$$
q\_{\mathbb Q}\in\lbrace 2,3,4,5,7\rbrace ,
$$

で、それぞれの型数は139、21、9、5、2である。各行に最大ねじれ群 $T\_X$ と最大次数付き級数が対応し、実際の $\operatorname{Cl}\_t(X)$ はその部分群、実際の級数は対応する制限となる。最大群は

$$
\mathbb Z/2,\ \mathbb Z/3,\ \mathbb Z/4,\ \mathbb Z/5,\ \mathbb Z/6,
\ (\mathbb Z/2)^2,\ (\mathbb Z/3)^2
$$

のいずれかである。部分群の可能性を含めると級数候補は182個になる。指数が異なる型では $(q\_W,q\_{\mathbb Q})=(1,2),(1,3),(1,4)$ が現れる。これらは候補を縛る数値的主張である。

### 主定理2（Theorem 1.5）：少なくとも40型の実現

176型のうち少なくとも40型をFano–Enriques三次元多様体として構成する。27型は余次元2以下の準滑らかな重み付き完全交差または射影空間の巡回群商、12型は余次元4・5の多様体の商、残り1型は次数5の滑らかなdel Pezzo三次元多様体の商から得られる。

とくに前述の指数対 $(1,2),(1,3),(1,4)$ はすべて実現し、$\operatorname{Cl}\_t(X)\simeq\mathbb Z/4$ は $q\_{\mathbb Q}=2,3$ の両方で現れる。最大候補群を並べただけでなく、合成数位数のねじれを実例で確認する結果である。

### 主定理3（Theorem 1.6）：非存在と被覆への制約

Table 7で指定された72型は存在しない。また型155が存在するならねじれ群は $\mathbb Z/3$ に限られ、型51の二重被覆の類群の階数は少なくとも2になる。$q\_{\mathbb Q}\geq5$ の7型については、1型の非存在と残り6型の実現により決着するが、全176型の存在問題が解けたとは述べられていない。

## 証明の見取り図

orbifold Riemann–Rochと既知の数値的上界、ねじれ因子の局所型を用いて候補を列挙する。存在側では重み付き完全交差の商やunprojection、cluster形式を用いる。非存在側では被覆の次数・種数・反標準像の幾何を調べ、場合によって双有理的手法を適用する。Introductionは、接束の標準拡大に由来するKawamata–Miyaoka型不等式が10型の排除に使われることも説明する。後続節の計算や付属コードは本記事では実行・検証していない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.17893)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.17893v1) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorems 1.4, 1.5, 1.6
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.17893v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
