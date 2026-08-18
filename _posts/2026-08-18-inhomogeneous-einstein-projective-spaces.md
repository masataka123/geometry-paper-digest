---
layout: paper
title: "Inhomogeneous Einstein metrics on complex projective spaces"
title_ja: "複素射影空間上の非斉次Einstein計量"
authors: "Gonzalo Cao-Labora, Alberto Rodríguez-Vázquez"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math-ph
arxiv_abstract: >-
  The only Einstein metrics currently known on complex projective spaces are homogeneous: the Fubini-Study metric, arising via the Hopf fibration; and, in odd complex dimensions, Ziller's metric, obtained as a canonical variation along the twistor fibration over the quaternionic projective space. In 1965, Berger proved that the Fubini-Study metric is the unique Kähler-Einstein metric on the complex projective space, and posed the question of whether other Einstein metrics exist. We construct the first inhomogeneous Einstein metrics on complex projective spaces of complex dimension $n$ for $3\leq n \leq 7$, answering Berger's question affirmatively for the complex even dimensional cases $n=4$ and $n=6$.
topic: differential-geometry
tags:
  - curvature
arxiv_id: "2608.16880v1"
arxiv_url: "https://arxiv.org/abs/2608.16880"
arxiv_submitted: "2026-08-17"
arxiv_updated: "2026-08-17"
summary: >-
  複素射影空間 $\mathbb{CP}^n$ の複素次元 $3\le n\le7$ に、初めて非斉次Einstein計量を構成する。
  とくに偶数複素次元 $4,6$ でFubini--Study計量とは異なるEinstein計量の存在を示し、Bergerの問いに肯定的に答える。
abstract_en: ""
summary_en: >-
  The authors construct the first inhomogeneous Einstein metrics on complex projective spaces. Their examples occur in complex dimensions three through seven and settle Berger's existence question in the previously unresolved even dimensions four and six. The metrics are cohomogeneity one under an orthogonal-group action and are neither Hermitian nor conformally Kähler. Existence is reduced to a finite-dimensional matching problem and certified with a computer-assisted fixed-point argument.
abstract_ja: >-
  従来知られていた複素射影空間上のEinstein計量は、Fubini--Study計量と、奇数複素次元におけるZiller計量という斉次例だった。本論文は複素次元3から7までに非斉次Einstein計量を構成する。これにより、とくに複素次元4と6ではFubini--Study計量以外のEinstein計量が存在することが初めて示され、Bergerの問いが肯定的に解決される。
abstract_source_url: "https://arxiv.org/abs/2608.16880"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.16880](https://arxiv.org/abs/2608.16880)
- **著者:** Gonzalo Cao-Labora, Alberto Rodríguez-Vázquez
- **初回投稿日:** 2026年8月17日
- **最終更新日:** 2026年8月17日（v1）
- **主分類・副分類:** math.DG（主分類）、math-ph
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Einstein計量は $\operatorname{Ric}(g)=\lambda g$ を満たすRiemann計量である。複素射影空間ではFubini--Study計量が基本例であり、Bergerの一意性により標準複素構造と両立するKähler--Einstein計量はこれに限られる。一方、Riemann計量として別のEinstein計量が存在するかというBergerの問いは、奇数複素次元の斉次なZiller計量を除けば未解決だった。

本論文は $n=3,4,5,6,7$ の各 $\mathbb{CP}^n$ に非斉次Einstein計量を構成する。とりわけZiller計量が利用できない偶数複素次元 $n=4,6$ でも第二のEinstein計量が存在し、Bergerの問いに新しい肯定例を与える。

構成される計量は $SO(n+1)$ 不変でcohomogeneity oneだが、Hermitianではなく、したがってconformally Kählerでもない。これは複素射影空間という複素多様体上の計量であっても、Kähler幾何の一意性を破るものではない点が重要である。

存在証明はEinstein方程式を境界条件付き常微分方程式に落とし、両端から得る局所解を四次元のmatching mapで接続する。最後の零点の存在だけをKrawczykの固定点定理による計算機支援で保証する。

## 背景と問題設定

$\mathbb{CP}^{2m+1}$ にはtwistor fibration $\mathbb{CP}^{2m+1}\to\mathbb{HP}^m$ の $S^2$-fiberを縮めて得られるZillerの斉次Einstein計量がある。Fubini--Study計量とこの計量は、奇数次元での斉次Einstein計量を尽くす。しかし偶数複素次元には同様の第二の斉次例がなく、非斉次な解を探す必要があった。

著者らは、特異orbitが全測地的Lagrangian部分多様体 $\mathbb{RP}^n$ と複素二次超曲面 $Q^{n-1}$、principal orbitが $T^1\mathbb{RP}^n$ となる $SO(n+1)$ のcohomogeneity-one作用を用いる。

## 主結果

### 主定理（Main Theorem）

各 $n\in\{3,4,5,6,7\}$ について、$\mathbb{CP}^n$ 上に非斉次Einstein計量 $g$ が存在する。

この計量は $SO(n+1)$ 不変でcohomogeneity oneである一方、Hermitianではなく、conformally Kählerでもない。Introductionはさらに、非負断面曲率を持たず、既知の斉次例よりYamabe energyが小さいと述べる。$n=3$ は $\mathbb{CP}^n$ に非斉次cohomogeneity-one Einstein計量が存在する最小の $n$ である。

## 証明の見取り図

不変計量を三つの関数によるansatzで表し、Einstein条件を区間上の六次元自律ODEと両端の滑らかさ条件に翻訳する。保存量を用いて平均曲率 $H\in(-\infty,\infty)$ で再パラメータ化すると、問題は四次元の非自律系になる。

$H=\pm\infty$ の各側で二パラメータの局所解を収束級数と明示的誤差評価によって作り、前進解と後退解の差を四次元matching map $G$ とする。小さな超立方体上でKrawczykの固定点定理を適用して $G$ の零点を保証する部分が、論文中で唯一の計算機支援箇所である。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.16880](https://arxiv.org/abs/2608.16880)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Main Theorem
- **論文構成の説明:** Section 1, pp. 3–4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
