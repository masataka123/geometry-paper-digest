---
layout: paper
title: 'A Miyaoka-Yau inequality for hyperplane arrangements in $\mathbb{CP}^n$'
title_ja: '$\mathbb{CP}^n$の超平面配置に対するMiyaoka–Yau不等式'
authors: "Martin de Borbon, Dmitri Panov"
arxiv_primary_category: "math.AG"
arxiv_categories: [math.AG, math.CO, math.DG, math.SG]
arxiv_abstract: >-
  Let $\mathcal{H}$ be a hyperplane arrangement in $\mathbb{CP}^n$. We define a quadratic form $Q$ on $\mathbb{R}^{\mathcal{H}}$ that is entirely determined by the intersection poset of $\mathcal{H}$. Using the Bogomolov-Gieseker inequality for parabolic bundles, we show that if $\mathbf{a} \in \mathbb{R}^{\mathcal{H}}$ is such that the weighted arrangement $(\mathcal{H}, \mathbf{a})$ is stable, then $Q(\mathbf{a}) \leq 0$. As an application, we consider the symmetric case where all the weights are equal. The inequality $Q(a, \ldots, a) \leq 0$ gives a lower bound for the total sum of multiplicities of codimension $2$ intersection subspaces of $\mathcal{H}$. The lower bound is attained when every $H \in \mathcal{H}$ intersects all the other members of $\mathcal{H} \setminus \{H\}$ along $(1-2/(n+1))|\mathcal{H}| + 1$ codimension $2$ subspaces; extending from $n=2$ to higher dimensions a condition found by Hirzebruch for line arrangements in the complex projective plane.
topic: algebraic-geometry
tags: [chern-classes, vector-bundles-sheaves, stability, algebraic-cycles-enumerative]
arxiv_id: "2411.09573v3"
arxiv_url: "https://arxiv.org/abs/2411.09573"
arxiv_submitted: "2024-11-14"
arxiv_updated: "2026-03-17"
summary: >-
  複素射影空間の超平面配置の交叉posetだけから二次形式$Q$を定義し、安定な重み付き配置では$Q\leq0$となることを示す。対数解消上の放物的束にBogomolov–Gieseker不等式を適用し、Hirzebruchの直線配置条件を高次元へ拡張する組合せ論的不等式を得る。
abstract_en: ""
summary_en: >-
  The paper associates a quadratic form to the intersection combinatorics of a complex projective hyperplane arrangement. It proves that this form is nonpositive for weights in the arrangement's semistable cone. The proof replaces a difficult direct analysis of singular Ricci-flat metrics by a parabolic bundle on a canonical log resolution and a parabolic Bogomolov–Gieseker inequality. Equal weights yield a higher-dimensional extension of a combinatorial inequality originating in Hirzebruch's study of line arrangements.
abstract_ja: >-
  $\mathbb{CP}^n$の超平面配置に、その交叉posetだけで決まる二次形式$Q$を対応させる。重み付き配置が安定なら$Q$は非正である。全ての重みが等しい場合、この不等式は余次元2の交叉部分空間の重複度総和に下界を与え、等号条件はHirzebruchが射影平面の直線配置で得た条件を高次元化する。
abstract_source_url: "https://arxiv.org/abs/2411.09573"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2411.09573v3](https://arxiv.org/abs/2411.09573v3)
- **著者:** Martin de Borbon, Dmitri Panov
- **初回投稿日:** 2024年11月14日
- **最終更新日:** 2026年3月17日
- **主分類・副分類:** math.AG（主分類）, math.CO, math.DG, math.SG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

超平面配置$\mathcal H$の幾何は、交叉部分空間が作るposetと重複度に強く制約される。本論文はこの離散データから二次形式$Q$を構成し、matroid polytope上の錐として定まる半安定錐で$Q$が非正になることを証明する。

原始的な主定理は、重み付き配置がkltかつCalabi–Yauである場合の明示的不等式である。ここでklt条件は各交叉部分空間上の重み和を余次元で抑え、Calabi–Yau条件は全重みの和を$n+1$に固定する。

幾何的背景には特異Ricci-flat Kähler計量があるが、その曲率エネルギーを直接制御するには正則性の困難がある。本論文は代わりにDe Concini–Procesi対数解消上の放物的束を構成し、Mochizukiの放物的Bogomolov–Gieseker不等式を用いる。

等重みの場合には余次元2の交叉重複度の下界が得られ、等号条件はHirzebruchの平面直線配置の条件を高次元へ延長する。等号配置の分類は未解決問題として残される。

## 背景と問題設定

$\mathcal H=\{H_1,\ldots,H_N\}$とし、$\sigma_i$を$H_i$に含まれる既約な余次元2交叉部分空間の個数とする。二次形式$Q$の行列は

$$
Q_{ij}=\begin{cases}
-(n+1)\sigma_i+2n,&i=j,\\
-2,&i\ne j\text{ かつ }H_i\cap H_j\text{ が可約},\\
n-1,&i\ne j\text{ かつ }H_i\cap H_j\text{ が既約}
\end{cases}
$$

で定義される。半安定錐$C$は配置のbasisの指示ベクトルが張る錐であり、主張は$C\subset\{Q\leq0\}$である。

## 主結果

### klt Calabi–Yau配置の不等式（Theorem 1.1）

正の重み$a_H$をもつ配置が、全ての交叉部分空間$L$について

$$
\sum_{H\supset L}a_H<\operatorname{codim}L,
\qquad
\sum_{H\in\mathcal H}a_H=n+1
$$

を満たすとする。$2a_L=\sum_{H\supset L}a_H$、また$B_H+1$を$H$に含まれる既約な余次元2交叉部分空間の個数とすると、

$$
\sum_{L\in\mathcal L^{n-2}_{\mathrm{irr}}}a_L^2
-\frac12\sum_{H\in\mathcal H}B_Ha_H^2
-\frac{n+1}{2}\leq0
$$

が成り立つ。これは二次形式$Q$の半安定錐上での非正性へ拡張される。

### 等重みの場合と等号条件

$a_H=a$とすると$Q(a,\ldots,a)\leq0$は余次元2交叉の重複度総和に下界を与える。各$H$が他の超平面と交わって作る相異なる余次元2部分空間の個数が

$$
\left(1-\frac{2}{n+1}\right)|\mathcal H|+1
$$

であるとき下界が達成される。

## 証明の見取り図

配置を最小De Concini–Procesi modelで対数解消し、$\pi^*T\mathbb{CP}^n$に交叉部分空間と重みから放物的filtrationを入れる。Calabi–Yau条件から放物的第一Chern類が0となり、nested setの組合せ論により束がlocally abelianであることを示す。さらに適切な偏極に関するslope安定性を証明し、MochizukiのBogomolov–Gieseker不等式へ放物的第二Chern指標の明示計算を代入して主不等式を得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2411.09573v3](https://arxiv.org/abs/2411.09573v3)
- **Introduction:** Section 1, pp. 3–10
- **Introduction中で言及された主要定理番号:** Theorem 1.1; Theorem 6.29
- **論文構成の説明:** Section 1.4, p. 10
- **確認したarXivバージョン:** v3
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
