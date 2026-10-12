---
layout: paper
title: On the automorphism groups of smooth Fano threefolds
title_ja: 滑らかなFano三次元多様体の自己同型群の位数を割る数
authors: Nikolay Konovalov
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.AT
arxiv_abstract: Let $\mathcal{X}$ be a smooth Fano threefold over the complex numbers of Picard rank $1$ with finite automorphism group. We give numerical restrictions on the order of the automorphism group $\mathrm{Aut}(\mathcal{X})$ provided the genus $g(\mathcal{X})\leq 10$ and $\mathcal{X}$ is not an ordinary smooth Gushel-Mukai threefold. More precisely, we show that the order $|\mathrm{Aut}(\mathcal{X})|$ divides a certain explicit number depending on the genus of $\mathcal{X}$. We use a classification of Fano threefolds in terms of complete intersections in homogeneous varieties and the previous paper of A. Gorinov and the author regarding the topology of spaces of regular sections.
topic: algebraic-geometry
tags:
- fano-varieties
- chern-classes
arxiv_id: 2406.03584v3
arxiv_url: https://arxiv.org/abs/2406.03584
arxiv_submitted: '2024-06-05'
arxiv_updated: '2026-10-09'
summary: Picard数1の滑らかな複素Fano三次元多様体について、有限自己同型群の位数が割り切る明示的な整数を与える。同変特性類とFano三次元多様体の分類を組み合わせ、指数・種数ごとに一様な計算方法で制約を得るが、通常のGushel–Mukai三次元多様体などは対象に含まれない。
abstract_en: ''
summary_en: Finite symmetry groups of Fano threefolds are constrained by their projective models. Konovalov translates those models into stabilizer problems for sections of equivariant bundles. Characteristic-class calculations then give explicit divisibility restrictions on group orders. The method unifies several known cases and adds others, but does not claim optimal bounds or cover every rank-one family.
abstract_ja: Fano三次元多様体の対称性を、自己同型群の位数に対する整除条件として調べる。Picard数1の分類で現れる等質空間上の束や分岐被覆を使い、自己同型群を切断の零点集合の安定化群へ関連付ける。同変特性類から得る計算は、多くの既知の場合を共通の枠組みで扱い、いくつかの新しい数値制約も与える。得られる数は必ずしも既存の最良評価より鋭くなく、種数12と通常型の種数6は未処理である。
abstract_source_url: https://arxiv.org/abs/2406.03584
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2406.03584v3](https://arxiv.org/abs/2406.03584)
- **著者:** Nikolay Konovalov
- **初回投稿日:** 2024-06-05
- **最終更新日:** 2026-10-09
- **主分類・副分類:** math.AG（主分類）; math.AT
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Fano三次元多様体の分類は、どのような多様体が存在するかだけでなく、その対称性を調べる基盤にもなる。本論文は、Picard数1の滑らかな複素Fano三次元多様体の自己同型群について、位数が特定の整数を割るという形で制約を与える。

分類表の各族を同変ベクトル束の切断の零点集合、またはその零点集合を分岐因子とする被覆として表す。これにより、内部の幾何を個別に詳しく解析する代わりに、同変特性類を使って安定化群の位数を計算する共通の方法が使える。

得られる制約の一部は新しく、他は既知の結果を統一的に取り直すものである。Introductionは、既存の評価の方が鋭い場合もあると明記する。また通常のGushel–Mukai三次元多様体と種数12は残されており、全Fano三次元多様体を網羅する定理ではない。

## 背景と問題設定

<p>滑らかなFano三次元多様体 $X$ に対し、種数、指数、次数をそれぞれ</p>

<div>
$$
g(X)=-\frac12K_X^3+1,\qquad -K_X=\iota(X)L,\qquad d(X)=\int_Xc_1(L)^3
$$
</div>

<p>とする。$L$ は反標準線束の最大の整数根であり、Picard群がtorsion-freeなので同型を除いて一意である。本論文では $\rho(X)=1$ を仮定する。指数3・4、および指数2で次数5の場合の自己同型群は無限であり、以下の有限群の整除条件とは分けられる。</p>

## 主結果

### 主定理A：指数2の場合（Theorem A）

<p>$\iota(X)=2$、$\rho(X)=1$ とする。以下の各場合に $|\operatorname{Aut}(X)|$ は右欄の整数を割る。</p>

| 次数 $d(X)$ | 位数を割り切らせる整数 |
|---|---|
| 1 | $2^8\cdot3^4\cdot5^3\cdot7$ |
| 2 | $2^{10}\cdot3^6\cdot5\cdot7$ |
| 3 | $2^{10}\cdot3^5\cdot5\cdot11$ |
| 4 | $2^{14}\cdot3^2\cdot5$ |

<p>Introductionは、このうち次数1の場合を新しい結果と位置付ける。次数2・3・4には先行結果があり、すべてを新定理として扱うものではない。</p>

### 主定理B：指数1の場合（Theorem B）

<p>$\iota(X)=1$、$\rho(X)=1$ とする。以下の各行の幾何的条件のもとで、$|\operatorname{Aut}(X)|$ は右欄の整数を割る。</p>

| 種数と条件 | 位数を割り切らせる整数 |
|---|---|
| $g=2$ | $2^9\cdot3^4\cdot5^6\cdot7\cdot13$ |
| $g=3$、反標準線束がvery ample | $2^{11}\cdot3^{10}\cdot5\cdot7\cdot61$ |
| $g=3$、反標準線束がvery ampleでない | $2^{11}\cdot3^4\cdot5\cdot71$ |
| $g=4$、滑らかな二次超曲面と三次超曲面の完全交差 | $2^{10}\cdot3^5\cdot5\cdot7\cdot43$ |
| $g=4$、特異二次超曲面と三次超曲面の完全交差 | $2^{11}\cdot3^3\cdot5\cdot7^2$ |
| $g=5$ | $2^{24}\cdot3^2\cdot5^2\cdot7^2$ |
| $g=6$、五次del Pezzo三次元多様体の反標準因子で分岐する二重被覆 | $2^7\cdot3^3\cdot5\cdot7$ |
| $g=7$ | $2^9\cdot3^5\cdot5\cdot7$ |
| $g=8$ | $2^{12}\cdot3^2\cdot5\cdot11$ |
| $g=9$ | $2^{11}\cdot3^4\cdot7$ |
| $g=10$ | $2^7\cdot3^5\cdot5$ |

<p>二次・三次超曲面の完全交差は $\mathbb P^5$ 内で考える。特異二次超曲面の場合も、対象の $X$ 自体は滑らかである。新規とされるのはTheorem Bの(5)、(7)、(11)、すなわち特異二次超曲面を用いる種数4、上記二重被覆の種数6、種数10の場合である。</p>

<p>種数6の通常型Gushel–Mukai三次元多様体と種数12はこの表に含まれない。さらに、表に現れる各素数の位数を持つ自己同型が対応する族で実現されるという主張は予想であり、一般には証明済みではない。</p>

## 証明の見取り図

<p>分類によって $G$-多様体上の $G$-同変ベクトル束 $E$ を選び、$X$ を正則切断 $s$ の零点集合 $Z(s)$、または $Z(s)$ を分岐因子とする被覆として表す。自己同型群を $Z(s)$ の $G$-安定化群へ関連付けることが第一段階である。</p>

次にGorinovと著者の先行研究による、正則切断の空間の位相と同変特性類を使った位数制約の方法を適用する。等質空間、重み付き射影空間、特異二次超曲面など、分類に現れるモデルごとに計算する。Introductionは計算の相当部分でSingularを使用すると明記するが、本記事ではそのコードや後続節の計算を実行・独立検証していない。

## 原論文との対応

- **Abstractページ:** [On the automorphism groups of smooth Fano threefolds](https://arxiv.org/abs/2406.03584)
- **Introduction:** [PDF](https://arxiv.org/pdf/2406.03584v3) — Introduction, pp. 1–4（Section 1の前）
- **Introduction中で言及された主要結果:** Theorems A, B
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2406.03584v3
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
