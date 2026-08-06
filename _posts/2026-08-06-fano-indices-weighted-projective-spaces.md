---
layout: paper
title: "On Fano indices of weighted projective spaces"
title_ja: "重み付き射影空間の Fano 指数について"
authors: "Haidong Liu"
topic: algebraic-geometry
arxiv_id: "2608.03434v1"
arxiv_url: "https://arxiv.org/abs/2608.03434"
arxiv_submitted: "2026-08-04"
arxiv_updated: "2026-08-04"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
summary: >-
  標準的な特異 Fano 多様体である well-formed 重み付き射影空間について、標準特異点を仮定した Fano 指数の鋭い上界を与える論文である。得られた上界は Picard 数 1 の $\mathbb{Q}$-factorial トーリック Fano 多様体にも及び、4 次元での指数の分布も制約する。
abstract_en: >-
  The Sylvester sequence is defined recursively by $s_1=2$ and $s_i=s_{1}\cdots s_{i-1}+1$. In this paper, we prove that the Fano index of an $n$-dimensional well-formed weighted projective space with canonical singularities is bounded above by $ (s_n-1)(2s_n-3). $ This gives an affirmative answer to a conjecture of Chengxi Wang for weighted projective spaces and $\mathbb Q$-factorial toric Fano varieties with Picard number one. We also investigate the distribution of Fano indices among $4$-dimensional weighted projective spaces. As the distribution of Fano indices of weighted projective spaces coincides with that of indices of terminal Calabi--Yau varieties in dimension $n\leq 3$, we expect this coincidence to persist also in dimension 4, and more generally, in all dimensions.
summary_en: ""
abstract_ja: >-
  Sylvester 数列から定まる量を用いて、標準特異点をもつ $n$ 次元 well-formed 重み付き射影空間の Fano 指数に鋭い上界を与える。この結果は Chengxi Wang の予想を重み付き射影空間について肯定し、Picard 数 1 の $\mathbb{Q}$-factorial トーリック Fano 多様体にも帰結として適用される。さらに 4 次元における Fano 指数の分布を調べ、低次元で見られる terminal Calabi--Yau 多様体の指数との一致が一般次元でも続くという予想を提示する。
abstract_source_url: "https://arxiv.org/abs/2608.03434"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.03434v1](https://arxiv.org/abs/2608.03434)
- **著者:** Haidong Liu
- **初回投稿日:** 2026年8月4日
- **最終更新日:** 2026年8月4日（v1）
- **主分類・副分類:** Algebraic Geometry (math.AG)
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)

## 要約

Fano 指数は、Fano 多様体の反標準因子が因子類の何倍として表せるかを測る整数である。標準特異点をもつ Fano 多様体の中で指数がどこまで大きくなれるかは、極値的な Fano 幾何を理解する基本問題であり、多くの極値例には重み付き射影空間と Sylvester 数列が現れる。

内部格子点を一つだけもつ格子単体に関する先行研究から、Picard 数 $1$ の $\mathbb Q$-factorial toric Fano 多様体には指数の一般上界が知られていた。しかし次数については鋭い一方、Fano 指数の上界には余分があった。Wang は Sylvester 数列から定まる、少し小さく実際に達成される上界を予想し、次元 $3$ では既知だった。

本論文はこの予想を任意次元の well-formed 重み付き射影空間で証明する。canonical singularities を仮定すると、Fano 指数は $y_n(2y_n-1)$ 以下である。有限 Galois cover と指数の比較により、同じ上界は Picard 数 $1$ の $\mathbb Q$-factorial toric Fano 多様体にも及ぶ。

さらに指数の値そのものの分布を調べ、$4$ 次元では Euler の totient function による有限性条件を得る。低次元で重み付き射影空間、terminal Calabi--Yau 多様体、log canonical singularity の指数集合が一致する現象を全次元へ拡張する主張は、本論文の定理ではなく Conjecture 1.5 として残される。

## 背景と問題設定

canonical singularities をもつ Fano 多様体 $X$ の Fano 指数は

$$
q(X)=\max\{q\in\mathbb Z_{>0}:-K_X\sim_{\mathbb Q}qA,\ A\in\operatorname{Cl}(X)\}
$$

で定義される。well-formed 重み付き射影空間 $X=\mathbb P(a_1,\ldots,a_{n+1})$ では

$$
q(X)=a_1+\cdots+a_{n+1}
$$

である。

Sylvester 数列と本論文の記号は

$$
s_1=2,
\qquad
s_i=s_1\cdots s_{i-1}+1,
\qquad
y_i=s_i-1
$$

である。Wang の Conjecture 1.1 は、$n$ 次元 canonical Fano variety の指数が

$$
q(X)\leq y_n(2y_n-1)
$$

を満たすと予想する。Wang はこの値を達成する重み付き射影空間も与えているため、対象クラスで証明できれば上界は鋭い。

## 主結果

### 重み付き射影空間の鋭い上界（Theorem 1.2）

$n$ 次元 well-formed 重み付き射影空間 $X$ が canonical singularities をもつなら、

$$
q(X)\leq y_n(2y_n-1)
=(s_n-1)(2s_n-3)
$$

が成立する。これは重み付き射影空間に対する Wang の予想を任意次元で解決し、既知の $2y_n^2$ という上界から $y_n$ だけ改善する。Introduction に挙げられた例が等号を達成するので、この範囲では最適である。

### Picard 数 1 の toric Fano への帰結（Corollary 1.3）

Picard 数 $1$ の $\mathbb Q$-factorial toric Fano variety $X$ が canonical singularities をもつ場合にも

$$
q(X)\leq y_n(2y_n-1)
$$

が成立する。この種の $X$ には well-formed weighted projective space $Y=\mathbb P(a_1,\ldots,a_{n+1})$ から余次元 $1$ で étale な有限 Galois 射 $\pi:Y\to X$ があり、

$$
-K_Y=\pi^*(-K_X)\sim_{\mathbb Q}q\,\pi^*A
$$

から $q(X)\leq q(Y)$ となるため、Theorem 1.2 の上界が移る。

### 4 次元における指数の分布（Theorem 1.4）

$4$ 次元 well-formed weighted projective space が canonical singularities をもつとき、その Fano 指数は

$$
\{m\in\mathbb Z_{>0}:\varphi(m)\leq984\}
$$

に属する。ここで $\varphi$ は Euler の totient function である。論文は $4$ 次元までの指数の明示的リストも得るが、重み付き射影空間の指数集合と他の特異幾何の指数集合が全次元で一致するという主張は Conjecture 1.5 であり、証明済み結果とは区別される。

## 証明の見取り図

Introduction は、内部格子点を一つだけもつ integral simplex に関する先行研究が従来の指数上界を与えたことを説明するが、Theorem 1.2 の詳細な証明手順は述べていない。Contents から確認できるのは、Section 2 が準備、Section 3 が Theorem 1.2 の証明、Section 4 が指数の分布を担うという構成である。

Corollary 1.3 については Introduction 自身が論理を示している。weighted projective space からの余次元 $1$ で étale な有限 Galois cover により canonical singularities を保ち、反標準因子を pullback して $q(X)\leq q(Y)$ と比較することで Theorem 1.2 の上界を移す。主定理そのものの後続節の計算は、この記事では再構成しない。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.03434v1](https://arxiv.org/abs/2608.03434v1)
- **Introduction:** Section 1, pp. 1--3
- **予想:** Conjecture 1.1
- **主要定理・系:** Theorem 1.2, Corollary 1.3, Theorem 1.4 (Theorem 4.4)
- **未解決予想:** Conjecture 1.5 (Conjecture 4.2)
- **論文構成:** Contents, p. 1
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
