---
layout: paper
title: "Miyaoka-Yau inequalities and the topological characterization of certain klt varieties"
title_ja: "Miyaoka–Yau不等式とklt多様体の位相的特徴付け"
authors: "Daniel Greb, Stefan Kebekus, Thomas Peternell"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
arxiv_abstract: >-
  Ball quotients, hyperelliptic varieties, and projective spaces are characterized by their Chern classes, as the varieties where the Miyaoka-Yau inequality becomes an equality. Ball quotients, Abelian varieties, and projective spaces are also characterized topologically: if a complex, projective manifold $X$ is homeomorphic to a variety of this type, then $X$ is itself of this type. In this paper, similar results are established for projective varieties with klt singularities that are homeomorphic to singular ball quotients, quotients of Abelian varieties, or projective spaces.
topic: algebraic-geometry
tags:
  - singularities
  - chern-classes
  - uniformization
  - fano-varieties
arxiv_id: "2309.14121v2"
arxiv_url: "https://arxiv.org/abs/2309.14121"
arxiv_submitted: "2023-09-25"
arxiv_updated: "2023-10-23"
summary: >-
  球商、トーラス商、射影空間の位相的特徴付けをklt特異点をもつ射影多様体へ拡張する。有界対称領域の特異商の剛性、特異トーラス商の判定、$\mathbb P^3$ の完全な特徴付けを示し、高次元射影空間の場合にも強い制約を与える。
abstract_en: ""
summary_en: >-
  The paper extends classical topological rigidity phenomena from smooth projective manifolds to spaces with klt singularities. A normal projective variety homeomorphic to a singular quotient of an irreducible bounded symmetric domain is shown to recover its complex structure up to conjugation. Related arguments characterize singular torus quotients and projective three-space. In dimensions four and five, the possible exceptions to projective-space rigidity are confined to the general-type side.
abstract_ja: >-
  Miyaoka–Yau不等式の等号は、滑らかな場合に球商、Abel多様体の有限エタール商、射影空間を特徴付ける。本論文はklt特異点を許した類似の位相的剛性を確立する。有界対称領域の特異商と特異トーラス商を特徴付け、$\mathbb P^3$ と同相な射影klt多様体は $\mathbb P^3$ 自身であることを示す。
abstract_source_url: "https://arxiv.org/abs/2309.14121"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2309.14121](https://arxiv.org/abs/2309.14121)
- **著者:** Daniel Greb, Stefan Kebekus, Thomas Peternell
- **初回投稿日:** 2023年9月25日
- **最終更新日:** 2023年10月23日
- **主分類・副分類:** math.AG（主分類）, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかな射影多様体では、標準束が正、零、負となる三つの状況でMiyaoka–Yau不等式の等号がそれぞれ球商、Abel多様体の有限商、射影空間を特徴付ける。これらは位相的にも剛的である。

極小モデル理論ではklt特異点が不可避となるため、本論文は同相という位相的情報が特異空間の複素構造をどこまで決めるかを問う。特異有界対称領域商にはMostow–Siu型の剛性を、トーラス商にはCatanese型の特徴付けを確立する。

射影空間の場合はより難しいが、$\mathbb P^3$ について完全な特徴付けを得る。次元4、5でも、例外が起こるなら標準束がampleでなければならないという制約を示す。

## 背景と問題設定

$n$ 次元射影多様体に対する中心式は

$$
\bigl(2(n+1)c_2(X)-n c_1(X)^2\bigr)\cdot[H]^{n-2}\geq0
$$

というMiyaoka–Yau不等式である。klt空間では通常のChern類を適切な $\mathbb Q$-Chern類に置き換える。等号から得られる一意化が同相写像の下でも保存されるかが問題となる。

## 主結果

### 有界対称領域の特異商の剛性（Theorem 1.3 / Theorem 2.4）

$X$ を既約有界対称領域の特異商、$X'$ を $X$ と同相な正規射影多様体とし、$\dim X\geq2$ とする。このとき $X'$ は $X$ と双正則または共役双正則である。球商の類は複素共役で不変なので、特に特異球商であることは位相的に特徴付けられる。

### 特異トーラス商（Theorem 1.4）

klt特異点をもつコンパクト複素空間 $X'$ がKähler多様体と双有理であり、特異トーラス商と同相なら、$X'$ 自身も特異トーラス商である。

### 射影空間（Theorems 1.5, 1.6）

射影klt多様体 $X$ が $\mathbb P^3$ と同相なら $X\simeq\mathbb P^3$ である。また $n=4,5$ で $X$ が $\mathbb P^n$ と同相なら、$K_X$ がampleである場合を除いて $X\simeq\mathbb P^n$ となる。

## 証明の見取り図

Introductionによれば、有界対称領域商にはSiuの剛性と特異商の準エタール被覆を組み合わせる。トーラス商では別の方法により、klt空間のChern類等号が同相で保存されることを利用する。射影空間ではPontryagin類などの位相的不変量とFano幾何を照合し、次元3では候補を排除し、次元4、5では可能性を標準束が正の場合へ絞る。

## 原論文との対応
- **Abstractページ:** [arXiv:2309.14121](https://arxiv.org/abs/2309.14121)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.1–1.6
- **論文構成の説明:** Section 1.3, pp. 2–3
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
