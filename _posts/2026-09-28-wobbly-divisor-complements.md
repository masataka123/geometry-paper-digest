---
layout: paper
title: "Fundamental groups of complements of wobbly divisors in intersections of two quadrics"
title_ja: "二つの二次超曲面の交叉におけるwobbly因子の補集合の基本群"
authors: "Shomrik Bhattacharya, Yuki Matsubara"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  A smooth complete intersection $X\subset\mathbb{P}^{n+2}_{\mathbb{C}}$ of two quadrics admits an interpretation as a moduli space of bundles. For $n=2$, it parametrizes stable rank $2$ parabolic bundles on $\mathbb{P}^1$ with five marked points, while for $n=3$ it parametrizes stable rank $2$ bundles of odd degree with fixed determinant on a genus $2$ curve. For general $n$, it can be interpreted as a moduli space of semistable twisted $\mathrm{Spin}$-bundles. We study $X\setminus W$, where $W$ is the wobbly locus, consisting of bundles that admit a nonzero nilpotent Higgs field. We prove that $W$ is an irreducible divisor for $n\geq 3$ and compute $H_1(X\setminus W,\mathbb{Z})$. Using a root-stack description, we identify $π_1(X\setminus W)$ with the kernel of a monodromy homomorphism from an orbifold mixed braid group. The Reidemeister-Schreier method then yields an explicit presentation in every dimension. For $n=2$, where $X$ is a degree $4$ del Pezzo surface and $W$ is the union of its sixteen $(-1)$-curves, we obtain a presentation with $10$ generators and $25$ relators and prove that both numbers are minimal among all finite presentations. For $n=3$, we show that $π_1(X\setminus W)$ admits a presentation with $4$ generators and $78$ relators.
topic: algebraic-geometry
tags:
  - vector-bundles-sheaves
  - moduli
  - higgs-nonabelian-hodge
  - fundamental-groups
  - fano-varieties
arxiv_id: "2609.31421v1"
arxiv_url: "https://arxiv.org/abs/2609.31421"
arxiv_submitted: "2026-09-25"
arxiv_updated: "2026-09-25"
summary: >-
  二つの二次超曲面の滑らかな完全交叉を束のモジュライとみなし、非零冪零Higgs場を許すwobbly因子の補集合の基本群を決定する。root stackとorbifold混合組紐群を介して一般次元の表示を与え、特に次数4 del Pezzo曲面では生成元10個・関係式25個が最小であることを示す。
abstract_en: ""
summary_en: >-
  The paper studies the very stable locus inside a smooth intersection of two quadrics, using its interpretation as a moduli space of bundles. It identifies the fundamental group of this locus with the kernel of a monodromy map from an orbifold mixed braid group and derives finite presentations by Reidemeister–Schreier theory. The wobbly divisor is shown to be irreducible in dimensions at least three, while low-dimensional cases receive explicit minimal or small presentations. These computations describe the topology relevant to local systems on the very stable locus.
abstract_ja: >-
  二つの二次超曲面の滑らかな完全交叉 $X$ を束のモジュライ空間と解釈し、非零冪零Higgs場を許す点からなるwobbly locus $W$ の補集合を研究する。$n\geq3$ では $W$ が既約因子であることを示し、$X\setminus W$ の一次ホモロジーと基本群を計算する。root stackによる記述から基本群をorbifold混合組紐群のmonodromy準同型の核として同定し、全次元で有限表示を得る。$n=2$ では生成元10個・関係式25個の表示がともに最小であり、$n=3$ では生成元4個・関係式78個の表示が存在する。
abstract_source_url: "https://arxiv.org/abs/2609.31421"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.31421](https://arxiv.org/abs/2609.31421)
- **著者:** Shomrik Bhattacharya, Yuki Matsubara
- **初回投稿日:** 2026年9月25日
- **最終更新日:** 2026年9月25日
- **主分類・副分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

曲線上のベクトル束は、非零の冪零Higgs場をもたないときvery stable、もつときwobblyと呼ばれる。幾何Langlands対応ではvery stable locus上の局所系が重要であり、その基本群を知ることが局所系の記述につながる。

著者らは二つの二次超曲面の滑らかな $n$ 次元完全交叉 $X$ を扱う。$n=2$ では5点付き $\mathbb P^1$ 上の階数2放物型安定束、$n=3$ では種数2曲線上の固定行列式をもつ奇次数の階数2安定束、一般次元ではtwisted $\mathrm{Spin}$-束のモジュライとして解釈できる。

wobbly locus $W$ の補集合 $X\setminus W$ の基本群を、球面混合組紐群から有限2群へのmonodromyの核として同定する。これによりReidemeister–Schreier法が適用でき、一般次元の表示と、低次元での具体的な生成元・関係式の個数が得られる。

## 背景と問題設定

相異なる $\lambda_0,\ldots,\lambda_{n+2}\in\mathbb C$ に対して

$$
X=\left\{\sum_{j=0}^{n+2}x_j^2=0\right\}\cap
\left\{\sum_{j=0}^{n+2}\lambda_jx_j^2=0\right\}\subset\mathbb P^{n+2}_{\mathbb C}
$$

を考える。座標ごとの二乗写像の制限 $f:X\to\mathbb P^n$ は、点 $x$ に多項式

$$
p_x(z)=\sum_{j=0}^{n+2}x_j^2\prod_{\ell\ne j}(z-\lambda_\ell)
$$

の零点因子を対応させる。Hitchinの判定により、$x$ がvery stableであることは $p_x$ が無限遠点も含め重根をもたないことと同値である。したがって判別式軌跡 $\Delta\subset\operatorname{Sym}^n(\mathbb P^1)$ に対し、$W=f^{-1}(\Delta)_{\mathrm{red}}$ がwobbly locusとなる。

## 主結果

### 基本群の核としての記述（Theorem 1.2）

$SB_{n+3,n}$ を $n+3$ 個の固定点を除いた球面上の非順序 $n$ 点配置空間の基本群とし、固定点のmeridianを $a_j$ とする。$G\simeq(\mathbb Z/2\mathbb Z)^{n+2}$ へのmonodromy $\widetilde\mu$ を用いると

$$
\pi_1(X\setminus W)\simeq
\ker\!\left(
SB_{n+3,n}/\langle\!\langle a_0^2,\ldots,a_{n+2}^2\rangle\!\rangle
\xrightarrow{\ \widetilde\mu\ }G
\right).
$$

ここで $\widetilde\mu(a_j)$ は $j$ 番目の符号を反転する元であり、half-twistは単位元へ写る。この同定が有限表示を計算する出発点となる。

### 次元別の構造（Theorem 1.3）

- $n=1$ では $W=\varnothing$ で、$\pi_1(X)\simeq\mathbb Z^2$ である。
- $n=2$ では $X$ は次数4のdel Pezzo曲面、$W$ は16本の $(-1)$-曲線の和である。基本群は生成元10個・関係式25個の表示をもち、この二つの個数は任意の有限表示の中で最小である。また $H_1(X\setminus W,\mathbb Z)\simeq\mathbb Z^{10}$、$H_2(\pi_1(X\setminus W),\mathbb Z)\simeq\mathbb Z^{25}$ となる。
- $n\geq3$ では $W$ は類 $4(n-1)H$ の既約因子で、$H_1(X\setminus W,\mathbb Z)\simeq\mathbb Z/4(n-1)\mathbb Z$ である。$n=3$ では生成元4個・関係式78個の表示が得られる。

## 証明の見取り図

まずwobbly locusを二乗写像の判別式の逆像として幾何的に記述し、$n\geq3$ での既約性と一次ホモロジーを求める。次に分岐被覆 $X\to\mathbb P^n$ をroot stackと商stackで表し、$\pi_1(X\setminus W)$ をorbifold混合組紐群の部分群へ移す。最後に有限指数部分群の表示を与えるReidemeister–Schreier法を適用し、低次元ではTietze変形と群ホモロジーから表示を縮約し、その最小性を示す。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.31421](https://arxiv.org/abs/2609.31421)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Proposition 1.1, Theorems 1.2 and 1.3
- **論文構成の説明:** Section 1.4, p. 3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
