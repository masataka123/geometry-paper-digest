---
layout: paper
title: "Positivity properties of Schur classes"
title_ja: "Schur類の正値性"
authors: "Matt Larson, Alan Stapledon"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  Results of Fulton-Lazarsfeld and Ross-Toma show that Schur classes of ample and nef vector bundles have remarkable positivity properties. We generalize these results to a purely algebraic setting. We show that if a projective bundle ring, a ring which resembles the cohomology ring of a projective bundle over a smooth complex projective variety, has the Kähler package with respect to a suitable cone, then the associated Schur classes satisfy a version of the Hodge-Riemann relations. This result is new even for the projectivization of an ample vector bundle over a smooth complex projective variety. We apply this result to prove that Schur coefficients of matroids are nonnegative.
topic: algebraic-geometry
tags:
  - positivity
  - vector-bundles-sheaves
  - chern-classes
  - hodge-theory
arxiv_id: "2609.13025v1"
arxiv_url: "https://arxiv.org/abs/2609.13025"
arxiv_submitted: "2026-09-11"
arxiv_updated: "2026-09-11"
summary: >-
  ampleまたはnefベクトル束のSchur類に対する正値性を、射影束のコホモロジーを模した抽象的次数環へ拡張する。適切な錐に関してKähler packageを満たす射影束環からSchur類のHodge--Riemann型関係を導き、滑らかな射影多様体上でも新しい不等式とmatroidのSchur係数の非負性を得る。
abstract_en: ""
summary_en: >-
  The authors place positivity results for Schur classes in an abstract graded-algebra framework modeled on projective-bundle cohomology. When the base and projective-bundle rings satisfy Poincaré duality, hard Lefschetz, and Hodge--Riemann relations for suitable cones, the associated Schur classes inherit strong signed inequalities and equality criteria. The framework recovers classical positivity for nef and ample bundles, gives new higher Hodge--Riemann statements, and proves nonnegativity of Schur coefficients of matroids.
abstract_ja: >-
  Fulton--LazarsfeldおよびRoss--Tomaによるample・nefベクトル束のSchur類の正値性を、純代数的な設定へ一般化する。滑らかな複素射影多様体上の射影束のコホモロジー環を模した環が適切な錐に関してKähler packageを持つなら、対応するSchur類がHodge--Riemann型関係を満たすことを示す。この結果はampleベクトル束の射影化についても新しく、応用としてmatroidのSchur係数の非負性を証明する。
abstract_source_url: "https://arxiv.org/abs/2609.13025"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.13025](https://arxiv.org/abs/2609.13025)
- **著者:** Matt Larson, Alan Stapledon
- **初回投稿日:** 2026年9月11日
- **最終更新日:** 2026年9月11日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

ベクトル束$E$がampleまたはnefであることは、射影束$\mathbb P_X(E)$上の相対$\mathcal O(1)$の正値性で定義される。Fulton--Lazarsfeldは、$|\lambda|=\dim X$ならnef束のSchur類$s_\lambda(E)$の次数が非負であることを示した。

本論文は、射影束のコホモロジー環を形式化したgraded algebraにPoincaré双対、hard Lefschetz、Hodge--Riemann関係からなるKähler packageを仮定し、Schur類自身がより高次のHodge--Riemann型不等式を満たすことを証明する。

この枠組みは古典的なtop-degreeの非負性とRoss--Tomaの結果を回収するだけでなく、nefベクトル束について新しい不等式と等号条件を与える。さらに純代数的であることを生かし、matroidに付随するSchur係数の非負性へ応用する。

## 背景と問題設定

階数$r$の束のChern類を抽象化した$c_i\in A^i$から、射影束環

$$
B=A[\zeta]/(\zeta^r-c_1\zeta^{r-1}+\cdots+(-1)^rc_r)
$$

を作る。$A$と$B$がそれぞれ適切な正錐に関してKähler packageを満たすとき、$c_i$から行列式で作られるSchur類$s_\lambda$がどの符号条件を持つかが中心問題である。

ここでKähler packageとは次数pairingの非退化性、錐内の元によるhard Lefschetz同型、primitive部分上の符号付き正定値性を指す。幾何的な射影束だけでなく、組合せ論由来の環もこの公理を満たす。

## 主結果

### Schur類のHodge--Riemann型不等式（Theorem 1.1）

$A$と射影束環$B$が上記のKähler packageを満たすとする。$k\leq n/2$、$|\lambda|=n-2k$とし、$a\in A^k$がIntroductionの式(4)で与えられるprimitive型消滅条件と、対応するSchur類の消滅条件を満たすなら、

$$
(-1)^k\deg_A(a^2s_\lambda)\geq0
$$

が成り立つ。等号は、$\lambda\subseteq\mu$を満たす対象となるすべてのpartition $\mu$について$as_\mu=0$となる場合に限る。

$k=0$では$\deg_A(s_\lambda)\geq0$となりFulton--Lazarsfeldの非負性を回収する。$k=1$では$s_\lambda$が定めるpairingの正固有値が高々一つとなり、$k>1$ではnef束のSchur類に対する高次Hodge--Riemann関係を与える。

### ample型の狭義正値性（Theorem 1.4）

$B$がKähler packageを持ち、さらに$\zeta$自身がhard Lefschetz性を満たすとする。$|\lambda|=n$かつ長さが$r$以下なら

$$
\deg_A(s_\lambda)>0
$$

となる。これはampleベクトル束に対するFulton--Lazarsfeldの狭義正値性を回収する。

## 証明の見取り図

射影束の$m$重fiber productを模した多変数環$C$を導入し、$B$のKähler packageから$C$のKähler packageを導く。Introductionは、この段階でKashiwara--Kawaiの深い結果を用いると説明する。

もう一つの要素は、$C$内のVandermonde元$\Delta=\prod_{i<j}(\zeta_i-\zeta_j)$を用いるSchur類の新しい公式である。この公式によって$C$上のHodge--Riemann符号を$A$上の$s_\lambda$を含むpairingへ移し、Theorem 1.1の不等式と等号条件を得る。Theorem 1.4はそこから摂動により導かれる。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.13025](https://arxiv.org/abs/2609.13025)
- **Introduction:** Section 1, pp. 1--6
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.4, 1.5
- **論文構成の説明:** pp. 4--6
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
