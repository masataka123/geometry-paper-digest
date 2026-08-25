---
layout: paper
title: "Yau's conjecture on smooth Reinhardt domains"
title_ja: "滑らかなReinhardt領域に対するYau予想"
authors: "Yuan Yuan"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
arxiv_abstract: >-
  We prove that a possibly unbounded Reinhardt domain in $\mathbb{C}^n$ with smooth boundary and a complete Bergman-Einstein metric is biholomorphic to the complex unit ball. In particular, no unbounded smooth Reinhardt domain admits a complete Bergman-Einstein metric.
topic: several-complex-variables
tags:
  - curvature
  - uniformization
  - stein-geometry
arxiv_id: "2608.23089v1"
arxiv_url: "https://arxiv.org/abs/2608.23089"
arxiv_submitted: "2026-08-24"
arxiv_updated: "2026-08-24"
summary: >-
  滑らかな境界を持つReinhardt領域のBergman計量が完備Einstein計量なら、その領域は複素単位球と双正則であることを示す。非有界な滑らかなReinhardt領域には完備Bergman--Einstein計量が存在しないことも従う。
abstract_en: ""
summary_en: >-
  This work proves a rigidity theorem for smoothly bounded Reinhardt domains, allowing the domain to be unbounded. Completeness and the Einstein condition for the intrinsic Bergman metric force the domain to be biholomorphic to the ball. The proof combines local sphericality at strongly pseudoconvex boundary points with the convex geometry created by torus symmetry, and rules out every unbounded model.
abstract_ja: >-
  滑らかな境界を持つ、非有界の場合も許した $\mathbb C^n$ のReinhardt領域を考える。そのBergman計量が定義され、完備Einstein計量であるなら、領域は複素単位球と双正則である。特に非有界な滑らかなReinhardt領域は完備Bergman--Einstein計量を持たない。
abstract_source_url: "https://arxiv.org/abs/2608.23089"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.23089](https://arxiv.org/abs/2608.23089)
- **著者:** Yuan Yuan
- **初回投稿日・最終更新日:** 2026年8月24日
- **主分類:** math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Bergman計量は二乗可積分な正則関数から内在的に構成され、複素解析とKähler幾何を結ぶ。単位球ではこの計量が完備Kähler--Einsteinとなるため、Einstein条件だけで領域の球型性や斉次性を特徴付けられるかというCheng予想・Yau予想が生じる。

本論文は $C^\infty$ 級境界を持つReinhardt領域に対して、非有界領域まで含めた完全な剛性を示す。Bergman計量が正定値に定義され、完備Einsteinであれば、領域は必ず複素単位球 $\mathbb B^n$ と双正則である。

従来の強擬凸領域や実解析的境界に対する結果に、Reinhardt領域のトーラス対称性が与える対数像の凸幾何を組み合わせる。局所的な境界の球面性を連結な対数境界へ伝播し、分類に現れる候補を大域的に排除する構成である。

とりわけ非有界な場合には候補モデルが一つも残らない。したがって完備Bergman--Einstein計量の存在そのものが領域の有界性と球への一意化を同時に強制する。

## 背景と問題設定

対角Bergman核を $K_\Omega(z)$ とすると、Bergman計量と不変量は

$$
\omega_\Omega=\sqrt{-1}\,\partial\bar\partial\log K_\Omega,
\qquad
J_\Omega=\frac{\det(\partial_j\bar\partial_k\log K_\Omega)}{K_\Omega}
$$

で与えられる。Reinhardt領域では

$$
L_\Omega=\{(\log|z_1|,\ldots,\log|z_n|):z\in\Omega\cap(\mathbb C^*)^n\}
$$

という対数像が、擬凸性のもとで実凸集合になる。

## 主結果

### 主定理（Theorem 1）

$\Omega\subset\mathbb C^n$ を $C^\infty$ 級境界を持つReinhardt領域とする。有界性は仮定しない。Bergman核が全域で正かつ $\partial_j\bar\partial_k\log K_\Omega$ が正定値で、そのBergman計量が完備Einsteinなら

$$
\Omega\simeq\mathbb B^n
$$

である。特に非有界な滑らかなReinhardt領域には完備Bergman--Einstein計量が存在しない。

## 証明の見取り図

完備性から擬凸性を得て対数像を凸集合とし、全座標が非零の強擬凸境界点を構成する。指数写像で境界をtube超曲面へ移し、Hsiao--Huang--Liの局所球面性とIsaevの結果で球面性を連結境界へ広げる。Dadok--Yang分類の三つのtube型を得た後、原点を含む場合は $J_\Omega$ の普遍値と鋭いmoment不等式で楕円体に帰着する。有界な残余模型は既知の実解析的境界定理で処理し、非有界模型はトーラス対称性、対数像、Bergman核の構造からすべて排除する。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.23089](https://arxiv.org/abs/2608.23089)
- **Introduction:** Section 1, pp. 1--2
- **主要定理:** Theorem 1
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
