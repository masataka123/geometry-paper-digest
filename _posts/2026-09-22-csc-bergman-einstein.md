---
layout: paper
title: "CSC Bergman metrics are Einstein on pseudoconvex domains"
title_ja: "擬凸領域上の定scalar曲率Bergman計量はEinsteinである"
authors: "Xiaoshan Li, Taishun Liu"

arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
arxiv_abstract: "Let $Ω\\subset\\mathbb C^n$($n\\geq 3$) be a pseudoconvex domain with a smooth strongly pseudoconvex boundary point. We prove that if the Bergman metric of $Ω$ has constant scalar curvature, then it is necessarily Kähler--Einstein."
topic: several-complex-variables
tags:
  - stein-geometry
  - curvature
  - kahler-einstein-metrics
arxiv_id: "2609.24853v1"
arxiv_url: "https://arxiv.org/abs/2609.24853"
arxiv_submitted: "2026-09-21"
arxiv_updated: "2026-09-21"
summary: "$n\\ge3$ の擬凸領域が滑らかな強擬凸境界点を持つとき、定scalar曲率Bergman計量は必ずKähler–Einsteinであることを示す。Bergman不変量の境界漸近とunique continuationにより、滑らかな境界の場合まで剛性を確立する。"
abstract_en: "Let $Ω\\subset\\mathbb C^n$($n\\geq 3$) be a pseudoconvex domain with a smooth strongly pseudoconvex boundary point. We prove that if the Bergman metric of $Ω$ has constant scalar curvature, then it is necessarily Kähler--Einstein."
summary_en: ""
abstract_ja: "滑らかな強擬凸境界点を持つ $\\mathbb C^n$ の擬凸領域を考える。$n\\ge3$ でBergman計量のscalar curvatureが一定なら、その計量はKähler–Einsteinであることを証明する。実解析的境界に限らず滑らかな境界へ到達するため、Bergman不変量の無限次消滅と境界unique continuationを用いる。"
abstract_source_url: "https://arxiv.org/abs/2609.24853"
license_name: "CC BY 4.0"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.24853](https://arxiv.org/abs/2609.24853)
- **著者:** Xiaoshan Li, Taishun Liu
- **初回投稿日:** 2026-09-21
- **最終更新日:** 2026-09-21
- **主分類・副分類:** math.CV
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

$n\ge3$ の擬凸領域が滑らかな強擬凸境界点を持つとき、定scalar曲率Bergman計量は必ずKähler–Einsteinであることを示す。Bergman不変量の境界漸近とunique continuationにより、滑らかな境界の場合まで剛性を確立する。

滑らかな強擬凸境界点を持つ $\mathbb C^n$ の擬凸領域を考える。$n\ge3$ でBergman計量のscalar curvatureが一定なら、その計量はKähler–Einsteinであることを証明する。実解析的境界に限らず滑らかな境界へ到達するため、Bergman不変量の無限次消滅と境界unique continuationを用いる。

主結果の仮定と結論を区別し、以下ではAbstractとIntroductionに明記された範囲だけを扱う。後続節の証明を独立に検証したものではない。

## 背景と問題設定

Bergman核から定まる計量のRicci曲率とscalar curvatureは、$J_\Omega=\det G_\Omega/K_\Omega$ という不変量で結ばれる。定scalar曲率条件は $\log J_\Omega$ がBergman計量に関して調和であることと同値であり、境界での漸近からEinstein性を引き出すことが問題となる。

## 主結果

### 主定理（Theorem 1.1）

$n\ge3$ とし、$\Omega\subset\mathbb C^n$ を滑らかな強擬凸境界点を一つ以上持つ擬凸領域とする。$\Omega$ のBergman計量が定scalar曲率なら、それはKähler–Einsteinである。

### 境界漸近（Theorem 2.1）

定scalar曲率の仮定の下で、強擬凸境界点の近傍において

$$J_\Omega(z)=c_n+O(\rho^\infty),\qquad c_n=\frac{(n+1)^n\pi^n}{n!}$$

が成り立つ。

## 証明の見取り図

まず既知の球面性結果とBergman核の局所化・Fefferman–Monge–Ampère展開から、$J_\Omega-c_n$ が境界で無限次まで消えることを示す。実解析的境界ならこれで定数性が従う。滑らかな場合はBiquard–Herzlich型の境界unique continuationを適用し、内部でも $J_\Omega$ が定数であること、従ってRicci tensorが計量に比例することを導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.24853](https://arxiv.org/abs/2609.24853)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorem 1.1; Corollary 1.2; Theorem 2.1
- **確認したarXivバージョン:** 2609.24853v1
- **確認したライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **source_scope:** Abstract and Introduction
