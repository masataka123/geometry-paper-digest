---
layout: paper
title: "Hodge theory and K-stability of some very symmetric hypersurfaces"
title_ja: "高対称超曲面のHodge理論とK安定性"
authors: "Hyunsuk Kim"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We study some interesting hypersurfaces that naturally arise when studying the period map on the
  moduli space of hypersurfaces, in the context of Sung Gi Park's recent work on studying the GIT
  moduli space of hypersurfaces via the minimal exponent. We compute the Hodge structure on the
  singular cohomology and the intersection cohomology of these hypersurfaces, and also show the
  $K$-polystability of certain mildly singular degenerate hypersurfaces among them. In particular, the
  following hypersurface is $K$-polystable for $l \geq 2$: $$ \{ x_{11}\cdots x_{1d} + \ldots + x_{ld}
  \cdots x_{ld} = 0\} \subset \PP^{ld-1}.$$
topic: algebraic-geometry
tags:
  - moduli
  - k-stability
  - hodge-theory
arxiv_id: "2604.27229v1"
arxiv_url: "https://arxiv.org/abs/2604.27229"
arxiv_submitted: "2026-04-29"
arxiv_updated: "2026-04-29"
summary: >-
  特定の積型単項式を付加して得られる高対称な特異超曲面について、特異コホモロジーと交差コホモロジーのHodge構造を計算する。最退化例のK-polystabilityも示され、周期写像・GIT境界・K-moduliを結ぶ具体例を与える。
abstract_en: >-
  We study some interesting hypersurfaces that naturally arise when studying the period map on the moduli space of hypersurfaces, in the context of Sung Gi Park's recent work on studying the GIT moduli space of hypersurfaces via the minimal exponent. We compute the Hodge structure on the singular cohomology and the intersection cohomology of these hypersurfaces, and also show the $K$-polystability of certain mildly singular degenerate hypersurfaces among them. In particular, the following hypersurface is $K$-polystable for $l \geq 2$: $\{ x_{11}\cdots x_{1d} + \ldots + x_{l1} \cdots x_{ld} = 0\} \subset \mathbb{P}^{ld-1}$.
summary_en: ""
abstract_ja: >-
  超曲面のモジュライ上の周期写像を調べると自然に現れる、対称性の高い特異超曲面を扱う。これらの特異コホモロジーと交差コホモロジーのHodge構造を計算し、穏やかな特異点を持つ退化超曲面の一部がK-polystableであることも証明する。特に、積型単項式を$l$個足した射影超曲面は$l\geq2$でK-polystableとなる。
abstract_source_url: "https://arxiv.org/abs/2604.27229"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2604.27229v1](https://arxiv.org/abs/2604.27229v1)
- **著者:** Hyunsuk Kim
- **初回投稿日・最終更新日:** 2026年4月29日（v1）
- **主分類・副分類:** math.AG（主分類、副分類なし）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

滑らかな超曲面のHodge構造は古典的に理解されている一方、特異超曲面の特異コホモロジーは計算が難しい。これは、滑らかな超曲面のモジュライをコンパクト化し、その境界まで周期写像を追う際の障害になる。本論文は、minimal exponentとGIT安定性との関係から現れる高対称な退化超曲面を具体的に解析する。

出発点は、次数$d$の超曲面 $X=\{f(x)=0\}\subset\mathbb P^{m+1}$ に積型単項式を加えた

$$
Y=\{f(x)+y_{11}\cdots y_{1d}+\cdots+y_{l1}\cdots y_{ld}=0\}\subset\mathbb P^{m+1+ld}
$$

である。論文は$X$の特異コホモロジーから$Y$のそれを明示し、$X$が滑らかな場合には原始中間コホモロジーのTate twistと組合せ論的重複度に帰着させる。

さらに、最退化例 $X_{l,d}$ の特異コホモロジー、交差コホモロジー、自己同型群を計算する。交差コホモロジーは純粋なHodge–Tate型となり、同じ超曲面が$l\geq2$でK-polystableであることも示される。したがってHodge理論上の境界点がK-moduli側でも良い安定性を持つ例となる。

## 背景と問題設定

Sung Gi Parkによる先行研究では、$\mathbb P^n$ 内の次数$d$超曲面$X$についてminimal exponent $\widetilde\alpha(X)$ がGIT安定性を検出し、$\widetilde\alpha(X)>(n+1)/d$なら安定、$\widetilde\alpha(X)\geq(n+1)/d$なら半安定となる。ここで扱う積型退化は、Calabi–Yau型のHodge構造が最大単調退化するときに似た振る舞いをする。

中心的な最退化超曲面は

$$
X_{l,d}=\{x_{11}\cdots x_{1d}+\cdots+x_{l1}\cdots x_{ld}=0\}\subset\mathbb P^{ld-1}
$$

である。論文はHodge moduleとThom–Sebastiani型の仕組みを用いて、低次元の超曲面から高次元の超曲面へ移る際のHodge構造を追跡する。

## 主結果

### 特異コホモロジーの移送（Theorem 1.1）

超平面類を除いたコホモロジーを$\overline H^i$と書く。上の$X$と$Y$に対し、Introductionでは

$$
\overline H^{m+ld+i}(Y)\simeq
\bigoplus_{0\leq i_0}\overline H^{m+i_0}(X)(-l-i+i_0)^{\oplus a_{i-i_0}}
$$

が述べられる。特に$X$が滑らかなら

$$
\overline H^{m+ld+i}(Y)\simeq H^m_{\mathrm{prim}}(X)(-l-i)^{\oplus a_i},
\qquad
a_i=\sum_{\substack{i_1+\cdots+i_l=i\\0\leq i_j\leq d-2}}
\binom{d-1}{i_1}\cdots\binom{d-1}{i_l}.
$$

つまり、付加した積型単項式の寄与はTate twistと明示的な組合せ数$a_i$で制御される。

### 最退化例のHodge理論（Theorem 1.5）

$X_{l,d}$の自己同型群は有限群とトーラスの半直積であり、その特異コホモロジーは

$$
\overline H^{ld-2+i}(X_{l,d},\mathbb Q)\simeq
\mathbb Q(-(l-1+i))^{\oplus a_i}
$$

となる。交差コホモロジーは純粋なHodge–Tate型で、Introductionは交差Betti数にも明示公式があることを述べるが、その公式自体は後のProposition 4.8に委ねている。

### K-polystability（Theorem 1.8, Corollary 1.9）

$l\geq2$に対して$X_{l,d}$はK-polystableである。より一般に、同じ変数ブロック構造を持つ重み付き和についても、IntroductionのCorollary 1.9でK-polystabilityが導かれる。これは単なるGIT半安定性ではなく、Fano型退化をK-moduliで扱うための安定性を与える点が新しい。

## 証明の見取り図

Introductionの構成説明によれば、Theorem 1.1は混合Hodge module、近接・消滅サイクル、Thom–Sebastiani公式を整理した後に証明され、その副産物としてTheorem 1.5の特異コホモロジー計算が得られる。交差コホモロジーは別に計算され、最後に自己同型群の記述と対称性を利用したK-polystabilityの議論へ進む。

## 原論文との対応

- **Abstractページ:** [arXiv:2604.27229v1](https://arxiv.org/abs/2604.27229v1)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中の主要結果:** Theorem 1.1, Proposition 1.4, Theorem 1.5, Theorem 1.8, Corollary 1.9
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
