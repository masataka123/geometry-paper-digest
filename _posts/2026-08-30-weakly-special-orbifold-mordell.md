---
layout: paper
title: "The Weakly Special Conjecture contradicts orbifold Mordell, and hence the abc conjecture"
title_ja: "弱特殊予想とオービフォールドMordell予想・abc予想の矛盾"
authors: "Finn Bartsch, Frédéric Campana, Ariyan Javanpeykar, Olivier Wittenberg"
arxiv_primary_category: "math.AG"
arxiv_categories: [math.AG, math.NT]
arxiv_abstract: >-
  Starting from an Enriques surface over $\mathbb{Q}(t)$ considered by Lafon, we give the first examples of smooth projective weakly special threefolds which fibre over the projective line in Enriques surfaces (resp. K3 surfaces) with nowhere reduced, but non-divisible, fibres and general type orbifold base. We verify that these families of Enriques surfaces (resp. K3 surfaces) are non-isotrivial and compute their fundamental groups by studying the behaviour of local points along certain étale covers. The existence of the above threefolds implies that the Weakly Special Conjecture formulated in 2000 contradicts the Orbifold Mordell Conjecture, and hence the abc conjecture. Using these examples, we can also easily disprove several complex-analytic analogues of the Weakly Special Conjecture. Finally, the existence of such threefolds shows that Enriques surfaces and K3 surfaces can have non-divisible but nowhere reduced degenerations, thereby answering a question raised in 2005.
topic: algebraic-geometry
tags: [calabi-yau-geometry, moduli, fundamental-groups]
arxiv_id: "2410.06643v4"
arxiv_url: "https://arxiv.org/abs/2410.06643"
arxiv_submitted: "2024-10-09"
arxiv_updated: "2026-02-06"
summary: >-
  Enriques曲面またはK3曲面を一般ファイバーにもつ弱特殊三次元多様体を構成し、inf-multipleだが非可除な退化を実現する。オービフォールドMordell予想を仮定するとその有理点は潜在的に稠密でなく、弱特殊予想と矛盾するため、abc予想とも両立しないことを導く。
abstract_en: ""
summary_en: >-
  The authors construct smooth projective threefolds fibred by Enriques surfaces, and related examples fibred by K3 surfaces, whose multiple fibers are nowhere reduced but not divisible. These varieties are weakly special while their one-dimensional orbifold bases can be of general type. Assuming orbifold Mordell, their rational points cannot become dense after a number-field extension, contradicting the Weakly Special Conjecture. Since the number-field abc conjecture implies the required orbifold Mordell statement, the two conjectures cannot both hold.
abstract_ja: >-
  Lafonが与えた$\mathbb Q(t)$上のEnriques曲面から、射影直線上のEnriques曲面族およびK3曲面族を構成する。得られる滑らかな射影三次元多様体は弱特殊であり、ファイバーは至る所非被約でありながら可除ではなく、オービフォールド底は一般型になり得る。族の非等自明性と基本群も調べられる。これらの例により、オービフォールドMordell予想、したがってそれを含意するabc予想は弱特殊予想と矛盾する。
abstract_source_url: "https://arxiv.org/abs/2410.06643"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2410.06643v4](https://arxiv.org/abs/2410.06643v4)
- **著者:** Finn Bartsch, Frédéric Campana, Ariyan Javanpeykar, Olivier Wittenberg
- **初回投稿日:** 2024年10月9日
- **最終更新日:** 2026年2月6日
- **主分類・副分類:** math.AG（主分類）、math.NT
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

弱特殊予想は、数体上の滑らかな射影弱特殊多様体では有限拡大後に有理点がZariski稠密になると予言する。本論文は、オービフォールドMordell予想を仮定するとこの予言に反する三次元多様体を構成する。

出発点はLafonの$\mathbb Q(t)$上のEnriques曲面である。これをモデル化し基底変換することで、$\mathbb P^1$上にちょうど$d$個のinf-multipleファイバーをもち、それぞれのinf-multiplicityが2である一方、可除ではないEnriques曲面族を得る。K3二重被覆を調べることで同様のK3曲面族も得る。

$d\geq5$では底のオービフォールド因子が一般型になる。オービフォールドMordell予想は底の整点の有限性を与えるため、三次元多様体の有理点は稠密にならない。他方、この三次元多様体は弱特殊である。これが二つの予想の矛盾を作る。

abc予想は必要なオービフォールドMordell予想を含意する既知の関係があるため、弱特殊予想はabc予想とも両立しない。結果は条件付きの反例であり、abc予想そのものやオービフォールドMordell予想を否定する主張ではない。

## 背景と問題設定

射$f:X\to S$の余次元1の点$s$上で、支配的な既約成分を用いて

$$
X_{D_s}=R+\sum_{i=1}^n a_iF_i
$$

と書く。$\inf_i a_i\geq2$ならinf-multiple、$\gcd_i a_i\geq2$なら可除である。前者だけが成立する退化は、Campanaのオービフォールド底では多重性を生むが、古典的なgcdによる多重性には現れない。

射影直線上の$d$個の点$a_i$で多重度2をもつ底は

$$
\left(\mathbb P^1,\frac12[a_1]+\cdots+\frac12[a_d]\right)
$$

であり、$d\geq5$のとき一般型である。この一次元の底が、算術的非稠密性をオービフォールドMordell予想から引き出す鍵となる。

## 主結果

### 予想間の矛盾（Theorem A）

オービフォールドMordell予想を仮定すると弱特殊予想は成立しない。さらに数体上のabc予想はオービフォールドMordell予想を含意するため、弱特殊予想とabc予想は両立しない。

### Enriques曲面族とK3曲面族（Theorems B, C）

任意の$d\geq1$に対し、$\mathbb Q$上の滑らかな射影三次元多様体$X_d$と射$X_d\to\mathbb P^1$が存在し、一般ファイバーはEnriques曲面である。ちょうど$d$個のファイバーがinf-multiplicity 2をもち、全て非可除である。K3曲面を一般ファイバーにもつ同じ性質の$Y_d$も存在する。

### 弱特殊性と有理点（Theorems D, E）

標数0で種数1以下の曲線上のEnriques曲面族の全空間は弱特殊である。したがって$X_d$は弱特殊であるが、$d\geq5$かつオービフォールドMordell予想の下では、どの数体$K$についても$X_d(K)$は稠密でない。

## 証明の見取り図

LafonのEnriques曲面が$\mathbb C((t))$-点をもたないことからinf-multiplicity 2のファイバーを得る。Enriques曲面のindexが1であること、または多重度3の成分の明示計算により、そのファイバーが非可除であることを示す。適切な次数$d$の$\mathbb P^1\to\mathbb P^1$による基底変換で多重ファイバーの数を増やす。

有理点を整数モデル上の整点として解釈すると、その像は底のオービフォールド接触条件を満たす。$d\geq5$では底が一般型なので、オービフォールドMordell予想から像の有限性が従う。一方、Enriques曲面のindexを使う議論が全空間の弱特殊性を与える。

## 原論文との対応

- **Abstractページ:** [arXiv:2410.06643v4](https://arxiv.org/abs/2410.06643v4)
- **Introduction:** Section 1, pp. 1–7
- **Introduction中で言及された主要定理番号:** Theorems A–E, Theorem 1.5
- **論文構成の説明:** Section 1, pp. 6–7
- **確認したarXivバージョン:** v4
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
