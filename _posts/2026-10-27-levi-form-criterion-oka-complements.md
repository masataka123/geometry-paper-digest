---
layout: paper
title: A Levi-form criterion for Oka complements
title_ja: 補集合がOkaとなるLevi形式の判定条件
authors: Yun-Heng Du
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: 'We prove that if $M$ is a connected Stein manifold of complex dimension at least three with the density property, then $M\setminus K$ is a connected Oka manifold for every nonempty compact $K\Subset M$ with smooth boundary whose Levi form has at least two nonnegative eigenvalues at every boundary point for local defining functions negative on $\operatorname{int}K$. For compact sets in $\mathbb{C}^n$ with smooth boundary, this settles both implications between pseudoconvexity of $\partial K$ and the Oka property of $\mathbb{C}^n\setminus K$: pseudoconvexity is sufficient but not necessary for $n\geq3$, and necessary but not sufficient for $n=2$. In dimension two, we give an explicit compact set in $\mathbb{C}^2$ with strongly pseudoconvex boundary and non-Oka complement.'
topic: several-complex-variables
tags:
- oka-theory
- stein-geometry
- pluripotential-theory
arxiv_id: 2610.34426v1
arxiv_url: https://arxiv.org/abs/2610.34426
arxiv_submitted: '2026-10-25'
arxiv_updated: '2026-10-25'
summary: 滑らかな境界を持つコンパクト集合の補集合がOkaとなる条件を、境界のLevi形式から調べる。密度性を持つ3次元以上のStein多様体では非負固有値が二つあれば十分であり、複素Euclid空間では擬凸性とOka性の関係が2次元と3次元以上で異なることを示す。
abstract_en: ''
summary_en: This work replaces a global convexity assumption on a compact obstacle by a boundary condition for obtaining an Oka complement. The positive criterion uses two nonnegative Levi eigenvalues in a Stein manifold with the density property. Explicit examples show that pseudoconvexity is not necessary in higher dimensions. A separate surface example shows why even strong pseudoconvexity does not suffice in dimension two.
abstract_ja: 密度性を持つ連結Stein多様体で、滑らかな境界を持つ非空コンパクト集合の補集合がOkaとなるLevi形式の十分条件を与える。複素次元が3以上なら境界の非負固有値が少なくとも二つあることで十分である。複素Euclid空間では、擬凸性は3次元以上で十分だが必要ではなく、2次元では必要だが十分ではないことを具体例とともに示す。
abstract_source_url: https://arxiv.org/abs/2610.34426
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.34426v1](https://arxiv.org/abs/2610.34426)
- **著者:** Yun-Heng Du
- **初回投稿日:** 2026-10-25
- **最終更新日:** 2026-10-25
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Oka多様体は正則写像の近似に柔軟性を持つ。コンパクト集合を複素多様体から取り除いたとき、その補集合にOka性が残るかを、境界の幾何から判断できるだろうか。本論文はこの問題にLevi形式の固有値を使った条件を与える。

密度性を持つStein多様体の複素次元が3以上なら、境界のLevi形式に非負固有値が二つ以上あることで補集合は連結なOka多様体になる。従来の大域的な正則凸性という仮定を、境界の局所条件に置き換える結果である。

さらに複素Euclid空間について、擬凸境界がOka補集合を持つための必要条件か、十分条件かを次元別に決着させる。3次元以上では十分だが必要ではなく、2次元では必要だが十分ではない。後者は実解析的な強擬凸境界さえ十分ではないという具体例で示される。

## 背景と問題設定

$K$ の局所定義関数は内部で負、すなわち $K\cap U=\lbrace \rho\le0\rbrace $、境界上で $d\rho\ne0$ とする。Levi形式は複素接空間への制限

$$
\mathcal L\_\rho(q;v)=\sum\_{j,k=1}^n\rho\_{z\_j\bar z\_k}(q)v\_j\bar v\_k,
\qquad v\in T\_q^{1,0}\partial K
$$

である。境界の複素接空間の次元は $n-1$ であり、ここで数える固有値はこの制限のものとなる。補集合側の定義関数を用いると符号が逆になるため、向きを固定することが不可欠である。

密度性とは、完備正則ベクトル場で生成されるLie代数が、全正則ベクトル場のLie代数にコンパクト開位相で稠密であることをいう。これが大きな正則凸コンパクト集合のOka補集合を得る出発点となる。

## 主結果

### 二つの非負固有値による十分条件（Theorem 1.1）

$M$ を密度性を持つ連結Stein多様体、$\dim\_{\mathbb C}M=n\ge3$ とする。$K\Subset M$ が非空で滑らかな境界を持ち、全境界点でLevi形式に少なくとも二つの非負固有値があれば、$M\setminus K$ は連結なOka多様体である。

同値な条件は、負の固有値が高々 $n-3$ 個であることである。$n=3$ ではちょうど $K$ 側の擬凸性となり、一般の $n\ge3$ でも滑らかな擬凸境界を全て含む。非負でよいため、退化した半正定値Levi形式も対象である。

### 擬凸でない境界を持つOka補集合（Theorem 1.2）

各 $n\ge3$ について

$$
K\_n=\lbrace (z,w)\in\mathbb C^{n-1}\times\mathbb C:
|z|^2-|w|^2+|w|^4\le1\rbrace ,\qquad X\_n=\mathbb C^n\setminus K\_n
$$

と置く。$K\_n$ は有界な星型領域の閉包で、境界は滑らかな実代数的超曲面である。点 $p\_n=(1,0,\ldots,0;0)$ ではLevi形式に $n-2$ 個の正固有値と一つの負固有値がある。それでも $X\_n$ は連結なOka多様体である。

特に3次元では非負固有値が一つしかないため、定理1.1を適用しているのではない。補集合の各点を通る複素アフィン直線を用いる別の議論が必要になる。この例はOka性から境界の擬凸性を導くことができないと示す。

### 2次元の強擬凸反例（Theorem 1.3）

$P(z,w)=z^5-w^2-1$ とし

$$
K\_T=\left\lbrace (z,w)\in\mathbb C^2\setminus\lbrace P=0\rbrace :
|z|^2+|w|^2+\frac1{|P(z,w)|^2}\le T\right\rbrace .
$$

十分大きい $T$ に対し、これは有界連結領域の閉包であり、実解析的で強擬凸な境界を持つ。しかし $\mathbb C^2\setminus K\_T$ は連結でありながらOkaではない。

一方、任意の複素多様体でOka補集合を持つなら、境界のLevi形式には各点で少なくとも一つの非負固有値が必要となる。複素曲面ではLevi形式の次元が1なので、これは擬凸性そのものである。したがって2次元の結論は「必要だが十分ではない」となる。

## 証明の見取り図

正の結果では、より大きい正則凸コンパクト集合のOka補集合から出発し、正則円板の判定条件と境界のLevi条件でOka性を内側へ拡張する。四次式の例ではアフィン直線が必要な円板を直接与える。

2次元の反例では、用いたアフィン曲線のコンパクト化が種数2であることを利用する。その普遍被覆上の有界劣調和関数とLiouvilleの定理から整曲線の微分に制約を課し、Oka性と両立しないことを示す。また必要条件には、負定値Levi形式から作る局所ピーク関数と、有界上方多重劣調和関数がOka多様体上では各連結成分で定数となる性質を用いる。Oka性とGromovの楕円性は同一ではなく、Introductionはこれらの補集合でその違いにも注意を促している。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.34426)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.34426v1) — Section 1, pp. 1–4（Section 2より前）
- **Introduction中で言及された主要結果:** Theorems 1.1–1.3; Introductionで説明されたCorollaries 5.2, 5.3
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.34426v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
