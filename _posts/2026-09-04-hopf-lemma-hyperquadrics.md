---
layout: paper
title: "A Hopf Lemma for Holomorphic Maps into Hyperquadrics"
title_ja: "超二次曲面への正則写像に対するHopf補題"
authors: "Xiaojun Huang, Yuan Zhang, Weixia Zhu"

arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
arxiv_abstract: >-
  More than twenty years ago, Baouendi and the first author proved that a holomorphic map between hyperquadrics of the same signature is either totally degenerate or has a nonvanishing normal derivative for its normal component. This established a CR analogue of the classical Hopf lemma in arbitrary codimension, in the absence of pseudoconvexity. They further conjectured that the same Hopf-type property holds for holomorphic maps between Levi-nondegenerate hypersurfaces of the same signature. In this paper, we provide a counterexample to this conjecture in full generality. We also prove the conjecture when the target hypersurface is a hyperquadric of any codimension, arguably the most important case for applications.
topic: several-complex-variables
tags:
  - cr-geometry
arxiv_id: "2609.03316v1"
arxiv_url: "https://arxiv.org/abs/2609.03316"
arxiv_submitted: "2026-09-03"
arxiv_updated: "2026-09-03"
summary: >-
  同じLevi符号を持つ実超曲面間の正則写像について、標的が任意余次元の超二次曲面なら、写像はCR横断的であるか全退化することを示す。一般のLevi非退化な標的ではこの二分法に反例を与え、超二次曲面という仮定が本質的であることも明らかにする。
abstract_en: ""
summary_en: >-
  The paper studies CR transversality for holomorphic maps between real hypersurfaces of equal Levi signature. When the target is a hyperquadric, every non-totally-degenerate germ is CR transversal, with no restriction on codimension. A constructed example shows that the analogous assertion fails for a general Levi-nondegenerate target. The proof replaces earlier codimension-dependent scaling arguments with a hyperbolic non-isotropic rescaling adapted to a Witt decomposition.
abstract_ja: >-
  同じ符号を持つ超二次曲面間の正則写像については、全退化するか、法線成分の法線微分が消えないという二分法が知られていた。これを一般の同符号Levi非退化超曲面へ拡張する予想に対し、本論文は一般には反例があることを示す。一方、標的が任意余次元の超二次曲面である場合には予想を証明し、CR版Hopf補題から従来の余次元制限を除く。
abstract_source_url: "https://arxiv.org/abs/2609.03316"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.03316](https://arxiv.org/abs/2609.03316)
- **著者:** Xiaojun Huang, Yuan Zhang, Weixia Zhu
- **初回投稿日:** 2026年9月3日
- **最終更新日:** 2026年9月3日
- **主分類・副分類:** math.CV（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

実超曲面間の正則写像に対するCR横断性は、法線方向が潰れないことを表し、境界正則性や剛性と密接に関わる。強擬凸な標的では古典的Hopf補題から従うが、不定符号のLevi形式を持つ場合には同じ議論を使えない。

Baouendi--Huangは、同じ正のLevi符号を持つ超二次曲面間では、正則写像がCR横断的であるか、近傍全体を標的へ送る全退化写像であることを示した。その後、この二分法が一般の同符号Levi非退化超曲面にも成り立つと予想された。

本論文は、標的が超二次曲面なら余次元に制限なく二分法が成り立つことを証明する。一方で、一般のLevi非退化標的に対しては、CR横断的でも全退化でもない写像を具体的に構成する。したがって結果は標的の超二次曲面構造に関して鋭い。

## 背景と問題設定

$M_1\subset\mathbb C^n$ と $M_2\subset\mathbb C^N$ を滑らかなCR超曲面、$F$ を $F(M_1)\subset M_2$ を満たす正則写像とする。点 $p\in M_1$ でのCR横断性は

$$
T^{1,0}_{F(p)}M_2+dF_p\bigl(T^{1,0}_p\mathbb C^n\bigr)
=T^{1,0}_{F(p)}\mathbb C^N
$$

で定義される。同符号のLevi非退化超曲面間では、これは局所CR埋め込みであることと同値になる。

符号 $\ell$ の標準超二次曲面は

$$
\mathbb H^N_\ell=\{(Z,W)\in\mathbb C^{N-1}\times\mathbb C:\operatorname{Im}W=|Z|_\ell^2\}
$$

である。先行研究は $N-n<(n-1)/2$、のちに $N-n<n-1$ の範囲で横断性を得ていた。残された問題は、余次元制約を完全に除けるかという点であった。

## 主結果

### 超二次曲面標的に対する二分法（Theorem 1.2）

$M_\ell\subset\mathbb C^n$ を $n\ge3$ の滑らかなLevi非退化超曲面とし、その符号が $0<\ell\le(n-1)/2$ を満たすとする。点 $p\in M_\ell$ の近傍で正則な写像 $F$ が $M_\ell$ を $\mathbb H^N_\ell$ へ送るなら、$F$ は $p$ でCR横断的であるか、$p$ の近傍全体を $\mathbb H^N_\ell$ へ送る。すなわち全退化でないgermは $p$ の近傍で局所CR埋め込みとなる。この結論には $N\ge n$ 以外の余次元制限がない。

### 一般標的に対する反例（Example 2.1）

符号1の実解析的Levi非退化超曲面 $M_1\subset\mathbb C^4$ と $M_2\subset\mathbb C^5$、および $F(M_1)\subset M_2$ を満たす正則写像で、原点においてCR横断的でも全退化でもない例を構成する。これによりBaouendi--Huangの一般形の予想は成立せず、Theorem 1.2における超二次曲面標的の仮定が不可欠と分かる。

## 証明の見取り図

非横断点で標的と始域の定義関数を $\rho_{\mathbb H^N_\ell}\circ F=a\rho_{M_\ell}$ と関係づけ、$a$ の最初の非零重み付き項を調べる。写像の接成分の低次係数は標的Levi形式について直交関係を満たし、全等方部分空間を作る。その次元は符号 $\ell$ 以下なので余次元に依存しない。

この部分空間に適合するWitt分解を選び、互いに双対な等方方向を逆数の倍率で伸縮する双曲型非等方scalingとHeisenberg dilationを組み合わせる。極限として非横断的な写像 $F_0:\mathbb H^n_\ell\to\mathbb H^N_\ell$ を得ると、既知のBaouendi--Huang定理により $F_0$ は全退化する。極限の写像方程式へ戻ることで元の $F$ も全退化すると導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.03316](https://arxiv.org/abs/2609.03316)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Conjecture 1.1; Theorem 1.2; Example 2.1
- **論文構成の説明:** Introduction, pp. 3–4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
