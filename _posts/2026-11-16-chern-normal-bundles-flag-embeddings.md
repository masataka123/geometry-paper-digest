---
layout: paper
title: Chern characteristic classes of normal bundles of complex generalized flag submanifolds in generalized flag manifolds
title_ja: 複素旗多様体の埋め込みにおける法束のChern類
authors: Jakub Knesel, Petr Somberg
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.AT
- math.DG
- math.RT
arxiv_abstract: We study Chern characteristic classes of normal vector bundles of complex generalized flag submanifolds $G_{n-1}/P_{n-1}$ in complex generalized flag manifolds $G_n/P_n$. This procedure can be regarded as the relative version of Schubert calculus for the pair $G_{n-1}/P_{n-1}$ and $G_n/P_n$. The CW structure and additive structure of the cohomology of $\mathrm{Gr}(n, k)$ allows inductive calculation of Chern classes of the canonical and complementary canonical vector bundles over $\mathrm{Gr}(n, k)$. The combination of representation theory and algebraic geometry allows to derive analogous properties for the isotropic Grassmannians $\mathrm{LGr}(m, k)$ and $\mathrm{OGr}(m, k)$ via their embeddings in $\mathrm{Gr}(m, k)$. Then the induced CW structure yields the additive structure on the cohomology of $\mathrm{LGr}(m, k)$ and $\mathrm{OGr}(m, k)$, and consequently leads to the calculation of Chern classes of the canonical and complementary canonical vector bundles over $\mathrm{LGr}(m,
  k)$ and $\mathrm{OGr}(m, k)$.
topic: algebraic-geometry
tags:
- chern-classes
- vector-bundles-sheaves
- algebraic-cycles-enumerative
arxiv_id: 2611.16837v1
arxiv_url: https://arxiv.org/abs/2611.16837
arxiv_submitted: '2026-11-12'
arxiv_updated: '2026-11-12'
summary: 同じ古典Lie型に属する複素一般化旗多様体の埋め込みについて、法束のChern類を計算する枠組みを扱う。表現論による法束の分解とGrassmann多様体のCW構造を結びつけ、通常および等方Grassmann多様体上の束のChern類計算へ還元する。旗多様体の対に対する相対的Schubert計算という視点を与える。
abstract_en: ''
summary_en: An embedding of one flag manifold into another carries information that is not captured by either space alone. The normal bundle records this relative geometry, and its Chern classes are the focus here. Representation-theoretic decompositions reduce the calculation to canonical bundles on ordinary and isotropic Grassmannians. The introduction outlines this reduction and its limits rather than presenting a single numbered formula for all cases.
abstract_ja: 古典的な複素Lie群の標準包含から生じる一般化旗多様体の埋め込みを考え、その法束の特性類を調べる。法束を標準束と相補的標準束の引き戻しへ分解し、線形Grassmann多様体のCW構造とコホモロジーを用いてChern類を帰納的に計算する。さらに通常のGrassmann多様体への埋め込みを通じて、シンプレクティックおよび直交Grassmann多様体でも対応する計算を行う。異なるLie型や実・四元数の場合への展開は将来の方向として区別される。
abstract_source_url: https://arxiv.org/abs/2611.16837
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.16837v1](https://arxiv.org/abs/2611.16837)
- **著者:** Jakub Knesel, Petr Somberg
- **初回投稿日:** 2026-11-12
- **最終更新日:** 2026-11-12
- **主分類・副分類:** math.AG（主分類）; math.AT, math.DG, math.RT
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

部分多様体の接束は内在的な幾何を、法束は周囲の空間への埋め込まれ方を反映する。本論文は、複素一般化旗多様体の中に同じ種類の旗多様体を埋め込んだとき、その法束のChern類をどう計算するかを扱う。対称性が豊富な空間でも、埋め込みの相対的な情報を明示するには束の分解とコホモロジーの計算が必要となる。

著者らは古典Lie群の包含に対応する表現論を用いて法束を理解し、その計算を線形・等方Grassmann多様体上の標準的な束へ帰着させる。CW構造から得られるコホモロジー生成元と埋め込みの作用を組み合わせ、Chern類を帰納的に求めるという構成である。

この視点は、一つの旗多様体の交点理論を調べる通常のSchubert計算に対し、二つの空間の対を調べる相対的な計算と位置づけられる。Introductionは方法と適用範囲を説明しているが、一般の場合のChern類を一つの番号付き主定理の式として掲げてはいない。

## 背景と問題設定

埋め込み $\iota:M\hookrightarrow X$ には接束と法束の完全列

$$
0\longrightarrow T\_M\longrightarrow\iota^\ast T\_X\longrightarrow N(\iota)\longrightarrow0
$$

がある。論文の対象は、古典型 $A,B,C,D$ の複素群について

$$
\iota:G\_{n-1}/P\_{n-1}\hookrightarrow G\_n/P\_n,\qquad
P\_{n-1}=G\_{n-1}\cap P\_n
$$

という適合条件を持つ埋め込みである。両群は同じLie型に属する。法束のEuler類やChern類は、法方向の切断の障害や交点の情報を担う。

## 主結果

### 法束の計算をGrassmann多様体へ還元する

Introductionでは概略として次のように述べられている。標準包含に付随する法束を表現論的に記述し、標準束と相補的標準束の直和へ分解する。それらは適切な線形・等方Grassmann多様体上の束の引き戻しであり、一般化旗多様体でのChern類計算をGrassmann多様体での計算へ移す。

線形Grassmann多様体ではSchubert胞体と分割によるコホモロジー生成元を用い、埋め込みや特定の微分同相が生成元へ与える作用を調べる。等方Grassmann多様体では、通常のGrassmann多様体への埋め込みからCW構造を得て、等方条件を反映した分割を使う。これらを合わせて法束のChern類を帰納的に計算する。

### 基本例と対象の限界

Introductionの例では、標準埋め込み $\mathbb P^{n-1}\hookrightarrow\mathbb P^n$ の法束は標準直線束の双対であり、

$$
N(\iota)\simeq\mathcal O\_{\mathbb P^{n-1}}(1)
$$

となる。その第一Chern類は射影空間のコホモロジー環の生成元である。一般の場合の計算は、この例の法束情報をより大きな対称空間の対へ拡張するものと理解できる。

異なるLie型どうしの埋め込み、例外群、実・四元数旗多様体に対するStiefel–Whitney類やPontryagin類は将来の候補として挙げられる。これらまで本論文で一律に計算したとはされていない。また、具体的な全係数の公式はIntroductionにないため、後続節から推測して補っていない。

## 証明の見取り図

第一段階は、等質束の表現論を使った法束とその制限の分解である。第二段階では、線形Grassmann多様体の胞体構造とコホモロジーを用いて標準束のChern類を計算する。第三段階で等方Grassmann多様体の埋め込みを調べ、同様の生成元の制御を行う。Introductionが述べるのはこの計算の経路であり、個々の後続命題の証明や係数計算全体の検証は本記事の範囲外である。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.16837)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.16837v1) — Section 1, pp. 2–4（Abstractはp. 1）
- **Introduction中で言及された主要結果:** Introductionに番号付き主定理なし；一般化旗多様体からGrassmann多様体への還元とChern類計算の概説
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.16837v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
