---
layout: paper
title: "Characterization on projective submanifolds of codimensions 2 and 3"
title_ja: "余次元2および3の射影部分多様体の特徴づけ"
authors: "Ping Li, Fangyang Zheng"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AG
  - math.CV
arxiv_abstract: >-
  In this article we give a necessary and sufficient condition to characterize projective submanifolds in ${\mathbb P}^N$ with codimensions 2 and 3. The conditions involve the Chern classes of the manifold and a very ample line bundle on the manifold. This generalizes our earlier characterization for hypersurfaces. The higher codimensional cases are proposed as a general question.
topic: differential-geometry
tags:
  - positivity
  - vector-bundles-sheaves
  - chern-classes
arxiv_id: "2007.09678v1"
arxiv_url: "https://arxiv.org/abs/2007.09678"
arxiv_submitted: "2020-07-19"
arxiv_updated: "2020-07-19"
summary: >-
  射影多様体 $X$ とvery ample線束 $L$ から作るGauss写像の普遍商束のChern類 $\sigma_k(X,L)$ により、余次元2・3で射影空間へ埋め込めることを特徴づける。$\sigma_3=0$ と $\sigma_4=0$ がそれぞれ所望の余次元低下を導くことを示し、超曲面の場合の先行結果を拡張する。
abstract_en: ""
summary_en: >-
  The article seeks intrinsic criteria for realizing a polarized projective manifold in projective space with small codimension. It formulates the criteria using Chern classes obtained from the Gauss map and the chosen very ample line bundle. Vanishing of the third such class characterizes embeddings of codimension at most two, while vanishing of the fourth does the same for codimension at most three in dimension at least five. The results extend an earlier hypersurface characterization and motivate a general higher-codimension question.
abstract_ja: >-
  複素射影多様体が射影空間の余次元2または3の部分多様体として実現されるための必要十分条件を与える。条件は多様体のChern類とvery ample線束から構成され、先行する超曲面の特徴づけを一般化する。より高い余次元については一般問題として提示する。
abstract_source_url: "https://arxiv.org/abs/2007.09678"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2007.09678v1](https://arxiv.org/abs/2007.09678)
- **著者:** Ping Li, Fangyang Zheng
- **初回投稿日:** 2020年7月19日
- **最終更新日:** 2020年7月19日
- **主分類・副分類:** math.DG（主分類）, math.AG, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

$n$ 次元射影多様体 $X$ とvery ample線束 $L$ に対し、$L$ に付随する非退化射影埋め込みの最小余次元を $r_L$ とする。本論文は、$r_L<k$ をChern類の消滅だけで検出できるかという問題を、$k=3,4$ について解く。

Gauss写像 $\gamma$ とGrassmann多様体上の普遍商束 $Q$ から $\sigma_k(X,L)=c_k(\gamma^*Q)$ を定める。この類は埋め込みの選択に依存せず、$r_L<k$ なら階数の理由で消える。問題は逆に $\sigma_k=0$ から低余次元埋め込みを復元できるかである。

$k=3$ では次元3以上で逆が成り立ち、余次元2以下の埋め込みを特徴づける。$k=4$ では次元5以上で逆が成り立ち、余次元3以下を特徴づける。後者の次元4の場合は証明されず、期待として明記されている。

## 背景と問題設定

普遍商束は大域生成されるため、$\sigma_k(X,L)$ は非負なChern類である。一方、その階数は埋め込みの余次元に一致するので、小余次元なら高次Chern類が消える。本論文はこの必要条件の十分性を調べ、第二基本形式の階数とsecant varietyの幾何へ還元する。

## 主結果

### 余次元2以下の特徴づけ（Theorem 1.3）

$n\geq3$、$L$ を $X^n$ 上のvery ample線束とする。このとき

$$
\sigma_3(X,L)=0 \quad\Longrightarrow\quad r_L<3.
$$

したがって、$X^n$ が $\mathbf P^{n+2}$ に埋め込めることと、そのような $L$ で $\sigma_3(X,L)=0$ となることは同値である。

### 余次元3以下の特徴づけ（Theorem 1.4）

$n\geq5$ ならば

$$
\sigma_4(X,L)=0 \quad\Longrightarrow\quad r_L<4.
$$

したがって、$X^n$ が $\mathbf P^{n+3}$ に埋め込めることと、そのような $L$ の存在は同値である。Introductionは $n=4$ でも成立すると予想するが、現行の証明は $n\geq5$ に限られる。

## 証明の見取り図

$\sigma_k(X,L)=0$ を線形代数的条件へ還元し、同時に第二基本形式の階数と結びつける。$k=3,4$ の場合に必要な代数補題を個別に証明し、それを射影とsecant varietyの議論へ適用して埋め込みの余次元を下げる。$k\geq4$ では第二基本形式の階数だけでは不十分になり得ることが、Segre四foldの例で説明される。

## 原論文との対応

- **Abstractページ:** [arXiv:2007.09678](https://arxiv.org/abs/2007.09678)
- **Introduction:** Section 1, pp. 2–4
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.3, 1.4
- **論文構成の説明:** p. 4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
