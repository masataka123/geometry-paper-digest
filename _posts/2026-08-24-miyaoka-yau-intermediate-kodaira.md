---
layout: paper
title: 'Inequalities of Miyaoka-Yau type $\&$ Uniformisation of varieties of intermediate Kodaira Dimension'
title_ja: "中間Kodaira次元の多様体に対するMiyaoka–Yau型不等式と一意化"
authors: "Niklas Müller"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  In this paper we present, for any integers $0\leq \nu \leq n$, a set of inequalities satisfied by the Chern classes of any minimal complex projective variety of dimension $n$ and numerical dimension $\nu$. In the cases where $\nu$ is either very small or very large compared with $n$, this recovers many previously known results. We demonstrate that our inequalities are sharp by providing an explicit characterisation of those varieties achieving the equality; our proof, in particular, resolves the Abundance conjecture in this situation. Additionally, we provide some new examples of varieties with extremal Chern classes that demonstrate the optimality of our results.
topic: algebraic-geometry
tags:
  - chern-classes
  - uniformization
  - minimal-model-program
arxiv_id: "2601.15138v2"
arxiv_url: "https://arxiv.org/abs/2601.15138"
arxiv_submitted: "2026-01-21"
arxiv_updated: "2026-02-03"
summary: >-
  nef標準因子をもつklt射影多様体について、数値次元 $\nu\ge2$ に適応したMiyaoka–Yau型Chern類不等式を証明する。等号の場合にはAbel多様体と複素球商の積による有限quasi-étale被覆を特徴づけ、その過程で標準因子のsemiamplenessも導く。
abstract_en: >-

summary_en: >-
  This work develops Chern-class inequalities for minimal projective varieties across intermediate numerical dimensions. It proves a Miyaoka–Yau-type bound for klt varieties with nef canonical divisor and characterizes equality through finite covers built from an abelian variety and a compact ball quotient. The equality analysis also establishes abundance in this setting. Further results describe partial vanishing, give a numerical criterion for ball quotients, and exhibit a four-dimensional boundary example.
abstract_ja: >-
  任意の次元と数値次元に対して、極小複素射影多様体のChern類が満たす不等式を構成する。数値次元が中間的な場合を含め、等号成立をAbel多様体と複素球商の積から来る有限被覆によって明示的に特徴づけ、この場合のAbundance予想も解決する。さらに極値的Chern類をもつ新しい例によって結果の最適性を示す。
abstract_source_url: "https://arxiv.org/abs/2601.15138"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2601.15138](https://arxiv.org/abs/2601.15138)
- **著者:** Niklas Müller
- **初回投稿日:** 2026年1月21日
- **最終更新日:** 2026年2月3日（v2）
- **主分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

曲面のMiyaoka–Yau不等式はChern数を制約し、等号の場合をAbel曲面、曲線の積、複素球商によって分類する。高次元では数値次元 $0$ や最大の場合が詳しく研究されてきた一方、$3\le\nu\le n-2$ の領域は空白であった。

本論文は、$K_X$ がnefで数値次元 $\nu\ge2$ のklt射影多様体に対して、$\nu$ に依存するChern類多項式の非負性を示す。等号は、有限quasi-étale Galois被覆がAbel多様体と$\nu$次元球商の積になることと同値である。

この等号解析は単なる一意化にとどまらず、仮定の下で$K_X$がsemiampleであること、すなわちこの場合のAbundanceを含む。部分的な交点数消滅からもcanonical modelと球商の構造を読み取る定理と、境界現象を示す4次元例も与えられる。

## 背景と問題設定

$c_i(X)=\widehat c_i(X)$ はorbifold Chern類、$H$ はample Cartier因子である。不等式は $\varepsilon$ の多項式として定式化され、十分小さい正の $\varepsilon$ での非負性が各係数の最初の非零項の符号を捉える。

## 主結果

### Chern類不等式と等号分類（Theorem A）

$X$ を次元$n$のklt射影多様体、$K_X$をnefかつ数値次元$\nu\ge2$、$H$をample Cartier因子とする。ある$\varepsilon_0>0$が存在し、
$$P_X(\varepsilon)=\bigl(2(\nu+1)c_2(X)-\nu c_1(X)^2\bigr)\cdot(K_X+\varepsilon H)^{n-2}\ge0$$
が$0\le\varepsilon<\varepsilon_0$で成り立つ。ある$0<\varepsilon<\varepsilon_0$で等号となることは、有限quasi-étale Galois被覆 $X'\to X$ が $X'\simeq A\times B$、ただし$A$はAbel多様体、$B\simeq\mathbb B^\nu/\Lambda$は滑らかな球商、となることと同値である。

### 部分的消滅からの構造定理（Theorem B）

$K_X$がsemiampleで、$2\le k\le\nu$について
$$\bigl(2(\nu+1)c_2(X)-\nu c_1(X)^2\bigr)\cdot K_X^{i-2}\cdot H^{n-i}=0\quad(i=k,\ldots,n)$$
なら、$X$はAbel多様体と球商の積の有限商に双有理であり、canonical modelはramified ball quotientとなる。Introductionはさらに、余次元$k+3$以上の集合を除けばこの双有理写像が同型になると述べる。

### 球商判定と境界例（Corollary C, Theorem D）

Corollary Cは上の全交点数の消滅を球商であることの必要十分条件とする。他方Theorem Dは、$K_X$がbigかつnefだがampleでない4次元klt多様体で最上位のMiyaoka–Yau等号だけが成立する例を与え、単一の等式だけでは球商を特徴づけないことを示す。

## 証明の見取り図

Miyaokaの方法で不等式を余接層のsemistability型条件へ還元し、Enokiの着想と既存のorbifold安定性結果を用いる。等号の場合は$\Omega_X$のHarder–Narasimhan filtrationとklt空間の非可換Hodge対応から構造を絞る。semiamplenessにはShafarevich morphismとIitaka fibrationの同定、isotrivialityにはcanonical bundle formulaとnef余接束の構造定理が用いられる。

## 原論文との対応
- **Abstractページ:** [arXiv:2601.15138](https://arxiv.org/abs/2601.15138)
- **Introduction:** Section 1, pp. 2–6
- **Introduction中の主要結果:** Theorems A, B, D; Corollary C
- **確認したarXivバージョン:** v2
- **source_scope:** Abstract and Introduction
