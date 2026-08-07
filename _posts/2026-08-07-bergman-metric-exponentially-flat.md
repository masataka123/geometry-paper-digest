---
layout: paper
title: "On the Bergman Metric near Exponentially Flat Infinite Type Boundary Points"
title_ja: "指数的に平坦な無限型境界点近傍の Bergman 計量"
authors: "Ravi Shankar Jaiswal"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
topic: several-complex-variables
arxiv_id: "2607.24444v2"
arxiv_url: "https://arxiv.org/abs/2607.24444"
arxiv_submitted: "2026-07-27"
arxiv_updated: "2026-08-06"
summary: >-
  指数的に平坦な無限型境界点をもつ擬凸領域について、Bergman 核・計量・Ricci 曲率の非接線的漸近挙動を求める。その帰結として、有界とは限らない領域でも Bergman 計量は Einstein にならず、有限型を越えた Cheng–Yau 予想の証拠を与える。
abstract_en: ""
summary_en: >-
  This work studies biholomorphic invariants near an exponentially flat boundary point of a pseudoconvex domain. It derives non-tangential limits for the Bergman kernel, metric, canonical invariant, and Ricci curvature. Localization through weighted d-bar estimates is combined with scaling. The resulting asymptotics rule out an Einstein Bergman metric on the region where that metric is defined.
abstract_ja: >-
  指数的に平坦な無限型境界点をもつ、必ずしも有界でない擬凸領域を扱う。Bergman 核、Bergman 計量、標準不変量および Ricci 曲率の境界漸近を確立し、その情報から Bergman 計量が Einstein になり得ないことを示す。有限型の場合を越えて Cheng–Yau 予想を支持する結果である。
abstract_source_url: "https://arxiv.org/abs/2607.24444"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2607.24444v2](https://arxiv.org/abs/2607.24444)
- **著者:** Ravi Shankar Jaiswal
- **初回投稿日:** 2026年7月27日
- **最終更新日:** 2026年8月6日
- **主分類・副分類:** math.CV（副分類なし）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかな有界擬凸領域には Bergman 計量と完全 Kähler–Einstein 計量という二つの標準的な双正則不変計量がある。Cheng–Yau 予想は、Bergman 計量が Kähler–Einstein となるのは領域が球に双正則な場合に限る、と主張する。強擬凸・有限型などで進展してきたが、この論文は指数的に平坦な無限型境界点を対象にする。

主結果の第一段階では、境界法線上の点 $q(t)=(-t,0)$ が境界へ近づくとき、Bergman 核、計量、標準不変量、Ricci 曲率の非接線的漸近を同時に決定する。特に Ricci 曲率の極限が $-1$ になる一方、他の不変量の極限も明示される。

その漸近情報から、指数的に平坦な境界点を一つでももつ擬凸領域の Bergman 計量は、その定義される非空開集合上で Einstein になれないと結論する。領域は非有界でもよく、有界の場合は直ちに系が得られる。

## 背景と問題設定

先行研究は、強擬凸境界、$\mathbb C^2$ の有限型境界、実解析的境界、凸有限型境界などで Cheng–Yau 予想を確立してきた。無限型では局所幾何がより平坦になり、通常の有限型スケーリングをそのまま使えない。そこで論文は、指数的平坦性に合わせた尺度 $d^*(t)$ と Bergman 空間の極値関数の局所化を組み合わせる。

## 主結果

### 境界漸近（Theorem 1.1）

$D\subset\mathbb C^{n+1}$ を必ずしも有界でない擬凸領域とし、$0\in\partial D$ を指数的に平坦な境界点、$q(t)=(-t,0)$ とする。$\xi=(\xi_1,\xi')\neq0$ に対し Introduction は次の極限を掲げる。

$$
\lim_{t\to0^+}\frac{\kappa_D(q(t))}{t^{-2}d^*(t)^{-2n}}
=\frac{1}{4\pi\operatorname{vol}(B^n(0,1))},
$$

$$
\lim_{t\to0^+}
\frac{B_D(q(t);\xi)}
{\sqrt{|\xi_1|^2/(2t^2)+(n+1)|\xi'|^2/d^*(t)^2}}=1,
$$

$$
\lim_{t\to0^+}J_D(q(t))=\frac{2\pi^{n+1}(n+1)^n}{n!},
\qquad
\lim_{t\to0^+}R_D(q(t);\xi)=-1.
$$

ここで各記号と「指数的に平坦」の厳密な定義は原論文 Section 2 に置かれているため、本記事では Introduction に示された漸近式の役割に限って述べる。

### 非 Einstein 性（Theorem 1.2 と Corollary 1.3）

同じ仮定の下で、Bergman 計量は $D$ のある非空開集合 $D^*$ 上で定義されるが、$D^*$ 上で Einstein にはなり得ない。特に $D$ が有界なら Bergman 計量は Einstein ではない。

## 証明の見取り図

Introduction によれば、Hörmander の $L^2$ 評価で適切な多重劣調和重みを用い、Bergman 空間の極値関数を境界点近傍へ局所化する。これに指数的平坦境界用のスケーリングを組み合わせて Theorem 1.1 の漸近を得る。Bergman 計量が Einstein なら標準不変量と Ricci 曲率の間に課される整合性が、この境界極限と両立しないことから Theorem 1.2 が導かれる。

## 原論文との対応

- **Abstractページ:** [arXiv:2607.24444](https://arxiv.org/abs/2607.24444)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2; Corollary 1.3
- **論文構成の説明:** p. 3
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
