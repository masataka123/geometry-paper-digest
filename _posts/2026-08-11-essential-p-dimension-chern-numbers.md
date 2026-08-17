---
layout: paper
title: "Essential p-dimension and Chern numbers"
title_ja: "本質的p次元とChern数"
authors: "Olivier Haution"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
tags:
  - chern-classes
arxiv_id: "2608.08877v1"
arxiv_url: "https://arxiv.org/abs/2608.08877"
arxiv_submitted: "2026-08-09"
arxiv_updated: "2026-08-09"
summary: >-
  Chern数が素数pと互いに素な滑らかな射影多様体への有限p群作用を、本質的p次元を介して低次元線形表現に制約する。固定点定理やCremona群のp冪位数への算術的な上界を導き、作用に依存しない特性数が群作用を検出する仕組みを与える。
abstract_en: ""
summary_en: >-
  This work connects Chern numbers of a smooth projective variety with the essential p-dimension of a finite p-group acting on it. A Chern number not divisible by p forces the action to factor through a linear group of rank equal to the variety's dimension. Representation-theoretic restrictions then yield fixed-point statements and arithmetic bounds for p-subgroups of Cremona groups. The bridge is an equivariant intersection-theoretic characterization of essential p-dimension.
abstract_ja: >-
  体 $k$ 上の滑らかで射影的かつ幾何学的に連結な多様体 $X$ に有限 $p$ 群が作用するとする。$k$ が $p$ 次の1の根を含み、$X$ のあるChern数が $p$ と互いに素なら、作用は $\mathrm{GL}_{\dim X}(k)$ の部分群を通じて因子化する。これを用いて、体の算術を反映する固定点定理とCremona群の有限部分群に対する制約を得る。
abstract_source_url: "https://arxiv.org/abs/2608.08877"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.08877](https://arxiv.org/abs/2608.08877)
- **著者:** Olivier Haution
- **初回投稿日:** 2026年8月9日
- **最終更新日:** 2026年8月9日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

有限 $p$ 群 $G$ が滑らかな射影多様体 $X$ に作用し、有理固定点を持つなら、その点の接空間から $\dim X$ 次元の線形表現が得られる。本論文は固定点を最初から仮定せず、「あるChern数が $p$ で割れない」という作用に依存しない条件から、同種の線形化制約を引き出す。

主結果は、$k$ が $p$ 次の1の根を含むとき、$G$ の $X$ への作用が $\mathrm{GL}_n(k)$ の部分群を通じて因子化するというもの（$n=\dim X$）である。したがって低次元表現に課される可換性、導来長、指数の制約を、そのまま多様体上の作用へ移せる。

応用として、群ごとの最小非可換表現次元 $d_p(G)$ より $\dim X$ が小さければ固定点が存在する。またCremona群について、例えば $p\geq n+2$ なら $\operatorname{Cr}_n(\mathbb Q)$ は位数 $p^2$ の元を持たないことが従う。

方法の核は、本質的 $p$ 次元を同変Chow群の次数写像で特徴づけることである。Chern数をこの次数写像の像として捉え、表現論・交叉理論・群作用を結び付ける。

## 背景と問題設定

Chern数は接束のChern類の整係数多項式の次数であり、作用の選択に依存しない。一方、本質的 $p$ 次元 $\operatorname{ed}_p(G)$ は、$G$-torsorを定義するために必要なパラメータ数を $p$ と互いに素な拡大を許して測る算術的不変量である。

問題は、Chern数の非消滅を、作用の忠実性や固定点の存在へどう変換するかにある。論文は同変Chow群の次数写像が非零であることを $p$-versal性と結び付け、生成的に自由な作用の次元下界へ接続する。

## 主結果

### 主定理（Theorem 1 / (2.8)）

$k$ は位数 $p$ の1の根を含み、$X$ は $k$ 上滑らか、射影的、幾何学的に連結で、あるChern数が $p$ と互いに素であるとする。このとき有限 $p$ 群 $G$ の作用は

$$
G\longrightarrow \mathrm{GL}_n(k),\qquad n=\dim X
$$

の像を通じて因子化する。特に忠実な作用なら、$G$ は $n$ 次元忠実表現を持たなければならない。

### Cremona群への応用（Proposition 2 / (4.4)）

$k$ を標数0の体とし、$\zeta_{p^s}\notin k(\zeta_p)$ かつ $n<p-1$ とする。このとき

$$
\operatorname{Cr}_n(k)
$$

は位数 $p^s$ の元を持たない。とくに $\operatorname{Cr}_n(\mathbb Q)$ は $p\geq n+2$ のとき位数 $p^2$ の元を持たない。

### 群依存の固定点定理（Theorem 4）

$d_p(G)$ を $G$ の非可換な $k$-表現の最小次元とする。$X$ が $p$ と互いに素なChern数を持ち、

$$
\dim X<d_p(G)
$$

なら、作用は可換な商を通じて因子化し、$X^G\neq\varnothing$ となる。この境界は、Introductionで説明される少数の $p=2$ の例外を除き、群ごとに鋭い。

### 本質的p次元の交叉理論的特徴づけ（Proposition 5 / (1.25)）

標数0のアフィン代数群 $G$ について、$\operatorname{ed}_p(G)+\dim G$ は、生成的に自由な $G$ 作用を持ち、次数写像

$$
\deg:\operatorname{CH}_G(Y)\longrightarrow\mathbb F_p
$$

が非零となる滑らかな射影多様体 $Y$ の最小次元に等しい。

## 証明の見取り図

$G$ 作用により接束は同変ベクトル束になるため、Chern数は $\operatorname{CH}_G(X)$ の次数写像の像に入る。Chern数が $p$ で非零なら次数写像も $\mathbb F_p$ 上非零で、$X$ は $p$-versal になる。

一方、生成的に自由かつ $p$-versal な $G$-多様体の次元は $\operatorname{ed}_p(G)+\dim G$ 以上である。有限 $p$ 群についてKarpenko–Merkurjevの本質的 $p$ 次元の計算を入力すると、非可換作用に必要な表現次元が下界として現れる。これをChern数条件と組み合わせ、線形表現への因子化、固定点、Cremona群への制約を順に導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.08877](https://arxiv.org/abs/2608.08877)
- **Introduction:** unnumbered Introduction, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorems 1, 4; Propositions 2, 3, 5
- **論文構成の説明:** Introduction, p. 4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
