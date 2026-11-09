---
layout: paper
title: Oka properties of complements of holomorphically convex sets
title_ja: 正則凸集合の補集合のOka性
authors: Yuta Kusakabe
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
- math.DS
arxiv_abstract: Our main theorem states that the complement of a compact holomorphically convex set in a Stein manifold with the density property is an Oka manifold. This gives a positive answer to the well-known long-standing problem in Oka theory whether the complement of a compact polynomially convex set in $\mathbb{C}^{n}$ $(n>1)$ is Oka. Furthermore, we obtain new examples of nonelliptic Oka manifolds which negatively answer Gromov's question. The relative version of the main theorem is also proved. As an application, we show that the complement $\mathbb{C}^{n}\setminus\mathbb{R}^{k}$ of a totally real affine subspace is Oka if $n>1$ and $(n,k)\neq(2,1),(2,2),(3,3)$.
topic: several-complex-variables
tags:
- oka-theory
- stein-geometry
arxiv_id: 2005.08247v2
arxiv_url: https://arxiv.org/abs/2005.08247v2
arxiv_submitted: '2020-05-17'
arxiv_updated: '2023-10-23'
summary: 密度性を持つStein多様体で、コンパクト正則凸集合の補集合がOkaとなることを示す。複素ユークリッド空間の多項式凸集合の補集合に関する問題を解き、非楕円的Oka多様体や全実アフィン部分空間の補集合の新しい例を与える。
abstract_en: ''
summary_en: Kusakabe proves a complement theorem that turns holomorphic convexity into an Oka construction in Stein manifolds with the density property. It applies in particular to compact polynomially convex sets in Euclidean spaces of dimension greater than one. Combining the result with obstructions to ellipticity yields Oka manifolds that are not elliptic. A relative argument extends the method to certain noncompact closed sets, including many totally real complements.
abstract_ja: 密度性を持つStein多様体Y内の任意のコンパクト正則凸集合Kについて、YからKを除いた多様体がOkaであることを示す。n>1の複素ユークリッド空間ではコンパクト多項式凸集合に適用できる。次元3以上でKが無限個の集積点を持つ場合には非楕円的Oka多様体を得る。相対版から非コンパクトな閉集合へ拡張し、明示した低次元の例外を除いて全実アフィン部分空間の補集合がOkaとなることを示す。
abstract_source_url: https://arxiv.org/abs/2005.08247v2
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2005.08247v2](https://arxiv.org/abs/2005.08247v2)
- **著者:** Yuta Kusakabe
- **初回投稿日:** 2020-05-17
- **最終更新日:** 2023-10-23
- **主分類・副分類:** math.CV（主分類）; math.DS
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

コンパクト集合を複素ユークリッド空間から取り除いた領域が、正則写像を豊富に持つOka多様体になるかは、長く残っていた問題である。本論文は多項式凸性を仮定してこの問題を解決し、さらに密度性を持つStein多様体へ一般化する。

この結果は、単に補集合の新しい例を増やすだけではない。適切な集合の補集合はOkaだが楕円的ではなくなり、支配的sprayを持つこととOka性の違いを示す。楕円性がOka性を導くというGromovの結果の逆は、一般には成立しない。

相対版を使うと、一部の非コンパクト閉集合にも方法を広げられる。全実部分空間や整長単純閉曲線の補集合に適用する一方、次元や成長条件を明示し、任意の閉集合の補集合をOkaとするわけではない。

## 背景と問題設定

Oka性は、任意のコンパクト凸集合の近傍からの正則写像を、ユークリッド空間全体からの正則写像で近似できるというCAPで定義される。楕円的多様体は、正則ベクトル束$E\to Y$上の写像$s:E\to Y$で、$s(0\_y)=y$かつファイバー方向の微分が$0\_y$で全射となる支配的sprayを持つ多様体である。

密度性とは、完備な正則ベクトル場が生成するLie代数が、すべての正則ベクトル場のLie代数で稠密になることである。$\mathbb C^n$、$n>1$はその典型例である。

## 主結果

### 主定理1：コンパクト正則凸集合の補集合（Theorem 1.2）

$Y$が密度性を持つStein多様体、$K\subset Y$がコンパクト$\mathcal O(Y)$-凸集合なら、

$$
Y\setminus K\text{ はOka多様体}
$$

となる。特に$n>1$でコンパクト多項式凸集合$K\subset\mathbb C^n$の補集合はOkaである（Corollary 1.3）。さらに正則写像$f:\mathbb C^n\to\mathbb C^n$で$f(\mathbb C^n)=\mathbb C^n\setminus K$となるものが存在する（Corollary 1.4）。

### 非楕円的な例（Corollary 1.5）

上記に加えて$\dim Y\geq3$、$K$が無限個の集積点を持つなら、$Y\setminus K$は非楕円的なOka多様体である。Introductionはこれを、既知の非楕円性の結果と主定理を組み合わせる帰結として説明する。

### 主定理2：閉集合への拡張（Theorem 1.6）

$n>1$とし、$S\subset\mathbb C^n$を閉多項式凸集合とする。ある正則自己同型$\phi$と定数$C>0$について

$$
\phi(S)\subset\lbrace (z,w)\in\mathbb C^{n-2}\times\mathbb C^2:
\lVert w\rVert\leq C(1+\lVert z\rVert)\rbrace
$$

なら$\mathbb C^n\setminus S$はOkaである。ここで閉集合の多項式包は、コンパクト集合による増大列の多項式包の合併として定義される。非コンパクト性を許す代わりに、2つの複素方向への成長を制御する仮定が入る。

### 全実集合と曲線への応用（Corollaries 1.7、1.8）

$n>1$では任意のコンパクト$K\subset\mathbb R^n\subset\mathbb C^n$の補集合はOkaである。また$1\leq k\leq n$で

$$
(n,k)\notin\lbrace (2,1),(2,2),(3,3)\rbrace
$$

なら、任意の閉集合$S\subset\mathbb R^k\subset\mathbb C^n$の補集合はOkaとなる。特に全実アフィン部分空間の補集合に適用できる。この系が除外する場合を、非Okaと結論しているわけではない。

$n\geq3$では整長単純閉曲線$C\subset\mathbb C^n$の補集合もOkaである。複素直線内の単位円にも適用されるので、補集合のOka性から取り除いた集合の多項式凸性が必ず従うわけではない。

## 証明の見取り図

Introductionは、主定理の相対版をSection 4で証明し、それをSection 5で閉多項式凸集合へ適用する流れを説明する。楕円性からOka性への既存の理論と、完備ベクトル場が豊富な密度性の設定が背景にあり、非楕円的な例には別途既知の障害を組み合わせる。ここでは後続節のspray構成の詳細を再現しない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2005.08247v2)
- **Introduction:** [PDF](https://arxiv.org/pdf/2005.08247v2) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems 1.2, 1.6; Corollaries 1.3–1.5, 1.7, 1.8
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2005.08247v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
