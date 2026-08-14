---
layout: paper
title: "Uniform weak RC-positivity and rational connectedness"
title_ja: "一様弱RC正値性と有理連結性"
authors: "Kuang-Ru Wu"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.CV
topic: differential-geometry
arxiv_id: "2604.05981v1"
arxiv_url: "https://arxiv.org/abs/2604.05981"
arxiv_submitted: "2026-04-07"
arxiv_updated: "2026-04-07"
summary: >-
  コンパクトKähler多様体上の正則ベクトル束が一様弱RC正値なら正の平均曲率を持つHermitian計量を構成でき、特に接束がこの条件を満たせば多様体は射影的かつ有理連結となる。従来の一様RC正値性より弱い仮定でYangの結果を拡張し、射影化上の線束の曲率から直像束の平均曲率へ移す仕組みを与える。
abstract_en: >-
  In this paper, we show that if the holomorphic tangent bundle $TX$ of a compact Kähler manifold $X$ is uniformly weakly RC-positive, then $X$ is projective and rationally connected. This result is previously established by Xiaokui Yang under the stronger assumption that $TX$ is uniformly RC-positive. The result we obtain is, in fact, more general. If a holomorphic vector bundle $E$ is uniformly weakly RC-positive, then $E$ admits a Hermitian metric whose mean curvature is positive. A quasi-positive version is also proved in this paper.
summary_en: ""
abstract_ja: >-
  コンパクトKähler多様体 $X$ の正則接束 $TX$ が一様弱RC正値なら、$X$ は射影的かつ有理連結である。これは一様RC正値というより強い仮定の下で知られていた結果を改善する。より一般に、一様弱RC正値な正則ベクトル束には平均曲率が正のHermitian計量が存在し、準正値の場合の結果も得られる。
abstract_source_url: "https://arxiv.org/abs/2604.05981v1"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2604.05981v1](https://arxiv.org/abs/2604.05981v1)
- **著者:** Kuang-Ru Wu
- **初回投稿日・最終更新日:** 2026年4月7日（v1）
- **主分類・副分類:** math.DG（主分類）, math.CV（副分類）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

RC正値性は微分幾何の曲率条件と代数幾何の有理連結性を結ぶ。弱RC正値性は $E$ 自身でなく射影束 $\mathbb P(E^*)$ 上の普遍線束 $\mathcal O_{\mathbb P(E^*)}(1)$ の曲率で定義され、一様弱RC正値性が一様RC正値性を導くかは未解決である。

本論文はまず、一様弱RC正値な $E$ 自身がRC正値であると示す。高い対称冪を経由する従来結果より直接的であり、さらに平均曲率が正となるHermitian計量を $E$ に構成する強い結論を得る。

これを接束 $TX$ に適用すると、コンパクトKähler多様体 $X$ は射影的かつ有理連結となる。Yangの先行定理は一様RC正値性を仮定していたので、仮定を一様弱RC正値性へ緩めた点が主要な進展である。

準正値版では、一様弱RC準正値な $TX$ から反標準束 $K_X^{-1}$ のRC準正値性を導く。ただし、それがRC正値性や有理連結性まで導くかはIntroductionで未解決として残されている。

## 主結果

### ベクトル束のRC正値性（Theorem 3）

$E$ をコンパクトKähler多様体上の一様弱RC正値な正則ベクトル束とすると、$E$ はRC正値である。結論が $S^kE$ ではなく $E$ 自身に対するものであることが強調される。

### 接束と有理連結性（Theorem 4）

コンパクトKähler多様体 $X$ の正則接束 $TX$ が一様弱RC正値なら、$X$ は射影的かつ有理連結である。これは曲率の解析的正値性を代数曲線による連結性へ変換する結果である。

### 正の平均曲率を持つ計量（Theorem 7）

$E$ が一様弱RC正値なら、あるHermitian計量 $\alpha$ に関して

$$
\Lambda_\alpha\Theta^H>0
$$

となるHermitian計量 $H$ が $E$ に存在する。この定理から、正の平均曲率がRC正値性を導く既知結果によりTheorem 3を、さらにYangの結果によりTheorem 4を得る。

### 準正値の場合（Theorems 9, 10）

IntroductionではTheorem 9が、$\mathcal O_{\mathbb P(E^*)}(1)$ の曲率 $\Theta$ に対する半正値条件と一つのファイバー上の狭義正値条件から $E$ の正の平均曲率計量を与える。Theorem 10は、一様弱RC準正値な $TX$ に対し $K_X^{-1}$ がRC準正値であると結論するが、これだけで有理連結性を主張してはいない。

## 証明の見取り図

射影束 $p:\mathbb P(E^*)\to X$ 上の普遍線束を、ファイバー積分で定まる $L^2$ 計量を備えた直像束へ移す。一様弱RC正値性から、適切な基底計量 $\alpha$ を選んで曲率のくさび積を

$$
\Theta^{n+1}\wedge p^*\alpha^{m-1}>0
$$

とできることが鍵である。直像の曲率定理がこれを正の平均曲率へ変換し、射影束の場合の同定を通じて $E$ 上の計量を得る。準正値版では曲率の定量評価を対称冪へ適用し、正値性が一点近傍に集中することを利用する。

## 原論文との対応

- **Abstractページ:** [arXiv:2604.05981v1](https://arxiv.org/abs/2604.05981v1)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorems 3, 4, 7, 8, 9, 10
- **論文構成の説明:** Section 1, p. 5
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
