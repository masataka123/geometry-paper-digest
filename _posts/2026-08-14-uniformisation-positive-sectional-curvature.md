---
layout: paper
title: "Uniformisation of complete Kähler surfaces with positive sectional curvature"
title_ja: "正の断面曲率を持つ完備Kähler曲面の一意化"
authors: "Ved Datar, Vamsi Pritham Pingali, Harish Seshadri"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
topic: differential-geometry
tags:
  - positivity
  - curvature
  - uniformization
arxiv_id: "2604.11220v1"
arxiv_url: "https://arxiv.org/abs/2604.11220"
arxiv_submitted: "2026-04-13"
arxiv_updated: "2026-04-13"
summary: >-
  正の断面曲率を持つ任意の完備非コンパクトKähler曲面が $\mathbb C^2$ と双正則であることを示し、Yau型一意化予想の弱形式を複素次元2で解決する。無限遠での体積成長や曲率上界を仮定せず、有限Monge–Ampère質量を持つLipschitz多重劣調和重みと重み付き $L^p$ 正則関数から準射影性を導く。
abstract_en: ""
summary_en: >-
  Every complete noncompact Kähler surface with positive sectional curvature is proved biholomorphic to the complex affine plane. Unlike earlier uniformization results, the theorem imposes no volume-growth, curvature-decay, or upper-curvature condition at infinity. The construction uses uniformly Lipschitz plurisubharmonic weights of finite Monge–Ampère mass and weighted holomorphic functions to obtain quasi-projectivity. New Bézout and multiplicity estimates control these functions despite the weights being nonsmooth and nonproper, and a conditional bisectional-curvature variant is also established.
abstract_ja: >-
  正の断面曲率を持つ完備非コンパクトKähler曲面はすべて $\mathbb C^2$ と双正則であり、Yauの一意化予想の弱形式を複素次元2で確立する。従来と異なり無限遠の幾何には追加仮定を置かない。有限Monge–Ampère質量を持つ一様Lipschitz多重劣調和重みと重み付き正則関数を用いる新手法を導入し、一般的なBézout型交点・重複度評価も得る。
abstract_source_url: "https://arxiv.org/abs/2604.11220"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2604.11220v1](https://arxiv.org/abs/2604.11220v1)
- **著者:** Ved Datar, Vamsi Pritham Pingali, Harish Seshadri
- **初回投稿日・最終更新日:** 2026年4月13日（v1）
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Yauの一意化予想は、正の双正則断面曲率を持つ完備非コンパクトKähler多様体が $\mathbb C^n$ と双正則であると予想する。Green–Wuによる弱形式は、より強い正の断面曲率を仮定して同じ結論を予想する。本論文はこの弱形式を複素次元2で解決する。

従来の結果は最大体積成長、曲率減衰、曲率積分の有限性、あるいは断面曲率の上界を必要とした。ここでは無限遠でそのような条件を置かない。正の断面曲率から位相的に $\mathbb R^4$ であることは従うため、主要な課題は複素構造を制御して準射影性を示すことになる。

新しい方法は、有限Monge–Ampère質量を持つ一様Lipschitz多重劣調和関数を重みとして、種々の $L^p$ に属する正則関数を一つの次数付き代数にまとめる。重みが滑らかでもproperでもないため、Bézout型評価と重複度評価を新たに構築し、有限生成と射影空間への埋め込みを得る。

より弱い正の双正則断面曲率についても、強Stein性と可縮性を追加すれば準射影性が従う。さらに無限遠で単連結なら、Ramanujamの判定により $\mathbb C^2$ との双正則性が得られる。

## 背景と問題設定

最大体積成長の下では多項式増大正則関数が埋め込みを与えるが、非最大増大ではそのような関数が存在しないことが障害となる。本論文は、通常の増大度の代わりに熱流で平滑化した重み $\psi$ を使い、重み付き $L^p$ 条件を満たす切断が生成する空間 $R_q$ と次数付き代数

$$
R=\bigoplus_{q\in\mathbb N}R_q
$$

を用いる。Hölder不等式により $R_qR_{q'}\subset R_{q+q'}$ となる。

## 主結果

### 完備Kähler曲面の一意化（Theorem 1）

$(X,\omega)$ を正の断面曲率を持つ完備非コンパクトKähler曲面とする。このとき

$$
X\simeq\mathbb C^2
$$

が双正則同型として成り立つ。無限遠での体積成長、曲率減衰、断面曲率の上界を仮定しない点が、Introductionで強調される進展である。

### 双正則断面曲率版（Theorem 2）

$(X,\omega)$ が正の双正則断面曲率を持つ完備非コンパクトKähler曲面で、(1) Lipschitz定数1以下の滑らかな多重劣調和exhaustionを持つ強Stein空間であり、(2) 可縮であるとする。このとき $X$ は準射影的である。さらに無限遠で単連結なら $X\simeq\mathbb C^2$ である。

## 証明の見取り図

Gromoll–Meyerにより $X$ は $\mathbb R^4$ と微分同相なので、Ramanujamの判定から準射影性を示せばよい。有限Monge–Ampère質量の重みで定めた $R$ に対し、Bézout評価から切断の消滅次数を次数 $q$ に比例して抑え、関数体の有限生成と各 $R_q$ の有限次元性を得る。

次に $R_q$ の切断から、解析集合を除いて双正則となる有理写像を作り、その像が射影曲面内でZariski開であることを示す。次数を上げて大域的なKodaira写像を構成し、局所既約性の問題を正規化へ持ち上げて埋め込みを得る。最後にSimhaの判定を用いて像の準射影性を確立する。

## 原論文との対応

- **Abstractページ:** [arXiv:2604.11220v1](https://arxiv.org/abs/2604.11220v1)
- **Introduction:** Section 1, pp. 2–7
- **Introduction中の主要結果:** Theorems 1, 2
- **証明概略:** Section 1.1, pp. 4–6
- **論文構成:** Section 1.3, p. 7
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
