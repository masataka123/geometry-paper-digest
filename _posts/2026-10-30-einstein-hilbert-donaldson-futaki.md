---
layout: paper
title: The Einstein-Hilbert functional and the Donaldson-Futaki invariant
title_ja: Einstein–Hilbert汎関数から見るcscK計量とDonaldson–Futaki不変量
authors: Abdellah Lahdili, Eveline Legendre, Carlo Scarpa
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AG
arxiv_abstract: Given a Kaehler manifold polarised by a holomorphic ample line bundle, we consider the circle bundle associated to the polarisation with the induced transversal holomorphic structure. The space of contact structures compatible with this transversal structure is naturally identified with a bundle, of infinite rank, over the space of Kaehler metrics in the first Chern class of the polarisation. We show that the Einstein-Hilbert functional of the associated Tanaka-Webster connections is a functional on this bundle, whose critical points are constant scalar curvature Sasaki structures. In particular, when the group of automorphisms is discrete, these critical points correspond to constant scalar curvature Kaehler metrics in the first Chern class of the polarisation. We show that the Einstein--Hilbert functional satisfies some monotonicity properties along some one-parameter families of CR-contact structures that are naturally associated to test configurations, and that its limit
  on the central fibre of a test configuration is related to the Donaldson-Futaki invariant through an expansion in terms of an extra real parameter. As a by-product, we obtain an original proof that the existence of constant scalar curvature Kaehler metrics on a polarized manifold implies K-semistability. We also show that the limit of the Einstein-Hilbert functional on the central fibre coincides with the ratio of the equivariant index characters pole coefficients of the central fibre.
topic: differential-geometry
tags:
- csck-extremal-kahler-metrics
- k-stability
- cr-geometry
arxiv_id: 2310.11625v2
arxiv_url: https://arxiv.org/abs/2310.11625
arxiv_submitted: '2023-10-17'
arxiv_updated: '2026-10-27'
summary: 偏極多様体のcscK問題を、対応する円束上のCR接触構造の変分問題として捉える論文である。Einstein–Hilbert汎関数の臨界点とcscK計量を結び、試験配置に沿う極限の微分からDonaldson–Futaki不変量を取り出すことで、cscKの存在からK半安定性を導く。
abstract_en: ''
summary_en: The authors enlarge the space of Kähler metrics by passing to contact forms on a circle bundle. This gives a variational description whose degeneration detects the Donaldson–Futaki invariant. An algebraic formula on the central fibre connects the construction with equivariant index characters, while extensions to more general cones remain prospective.
abstract_ja: 偏極に付随する円束上で接触構造を動かすと、Kähler計量の空間を底とする無限次元の束が得られる。本論文はその上の正規化Tanaka–Webster全スカラー曲率を調べ、臨界点を定スカラー曲率Sasaki構造として特徴づける。試験配置に由来する二変数族の極限を通じてK半安定性との関係を明らかにし、さらに極限を中心ファイバーの同変index characterの係数比で表す。
abstract_source_url: https://arxiv.org/abs/2310.11625
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2310.11625v2](https://arxiv.org/abs/2310.11625)
- **著者:** Abdellah Lahdili, Eveline Legendre, Carlo Scarpa
- **初回投稿日:** 2023-10-17
- **最終更新日:** 2026-10-27
- **主分類・副分類:** math.DG（主分類）; math.AG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

cscK計量の存在と代数的安定性を結びつける研究では、Kählerポテンシャル上のMabuchi汎関数が重要な役割を果たしてきた。本論文は、偏極線束に付随する円束へ視点を移し、CR幾何のEinstein–Hilbert汎関数から同じ問題へ近づく。

円束上で接触形式の共形因子とKähler計量を同時に動かすと、固定したCR構造だけを扱うCR–Yamabe問題より大きな変分空間が得られる。そこでの臨界点は定スカラー曲率Sasaki構造であり、元のKähler計量の空間ではcscK条件を検出する。

もう一つの柱は退化との関係である。滑らかなample試験配置に対応する接触形式の族に沿って極限を取り、その補助パラメータによる微分をDonaldson–Futaki不変量と結びつける。弱測地線に沿う凸性と併せることで、cscKの存在がK半安定性を含意する既知の結果に新しい証明を与える。

## 背景と問題設定

$M$を複素次元$n$のコンパクト複素多様体、$L$をample線束とする。対応する円束$\pi:N\to M$で、正曲率Hermitian計量から得られる接触形式$\eta$は$\pi^\ast \omega=d\eta$を満たし、$\omega\in2\pi c\_1(L)$に対応する。これらの空間を$\Xi(M,L)$とし、正の基本関数$f$による$f^{-1}\eta$まで許した空間を$Z(M,L)$とする。

扱う汎関数は

$$
\operatorname{EH}(\alpha)=\frac{\int\_N\operatorname{Scal}(\alpha,I)\thinspace \alpha\wedge(d\alpha)^{[n]}}{V(\alpha)^{n/(n+1)}},\qquad
V(\alpha)=\int\_N\alpha\wedge(d\alpha)^{[n]}
$$

である。$\theta^{[n]}=\theta^n/n!$という規約を用い、分母により拡大縮小に不変となる。

## 主結果

### 臨界点の幾何（Theorem 1.1）

$\Xi(M,L)$に属する接触形式に対応するKähler計量がcscKであることと、それがEHの臨界点を定めることは同値である。より大きい空間$Z(M,L)$全体の臨界点は、定スカラー曲率Sasaki構造に一致する。特に被約自己同型群が離散的なら、正のスカラー倍で割った臨界点と$2\pi c\_1(L)$内のcscK計量が対応する。

### 退化極限と安定性（Theorem 1.4、Corollaries 1.5–1.6）

滑らかなample試験配置$(\mathcal M,\mathcal L)$で中心ファイバーが被約であるとする。Introductionの接触形式のribbonに沿う極限$\operatorname{EH}\_s(\mathcal M,\mathcal L)$は、小さい$s$について滑らかで、構成に使った不変接触形式の選択に依存しない。その微分は

$$
\left.\frac{d}{ds}\operatorname{EH}\_s(\mathcal M,\mathcal L)\right|\_{s=0}
=\operatorname{Vol}(L)^{-n/(n+1)}\operatorname{DF}(\mathcal M,\mathcal L)
$$

となる。DFの規格化は原論文のものを用いる。係数の偏極に関する連続性を使うことで、すべての滑らかなample試験配置におけるこの微分の非負性がK半安定性と同値になる。さらにcscK計量の存在からK半安定性が従う。本論文は一般の偏極多様体で逆向きまで示すわけではない。

### 同変index characterとの一致（Theorem 1.7）

同じく滑らかなample試験配置と被約中心ファイバーのもとで、

$$
\operatorname{EH}\_s(\mathcal M,\mathcal L)=16\pi\frac{a\_1(\xi-s\zeta)}{a\_0(\xi-s\zeta)^{n/(n+1)}}
$$

が成り立つ。$a\_0,a\_1$は中心ファイバーの同変index characterの$t^{-n-1},t^{-n}$項を、それぞれ$n!,(n-1)!$で規格化した係数である。$\xi$は円束方向、$\zeta$は試験配置の作用の生成元を表す。解析的極限が代数的な係数比と一致する点に意味がある。

## 証明の見取り図

接触構造を底方向にも変化させたEHの第一変分を計算し、臨界点のSasaki性と定スカラー曲率を得る。試験配置に関しては、Kähler幾何の$C^{1,1}$弱測地線と重み付き汎関数を用いる。全Tanaka–Websterスカラー曲率を直接扱う代わりに、その測地線方向の原始関数の連続性と凸性を利用する。

最後に、中心ファイバーのindex characterの係数とEH極限の大域的公式を比較する。一般のSasaki試験配置や偏極錐への拡張、正規化体積のより広い代替としての理解は、Introductionが将来課題として述べる範囲である。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2310.11625)
- **Introduction:** [PDF](https://arxiv.org/pdf/2310.11625v2) — Section 1, pp. 1–7
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.4, 1.7; Corollaries 1.5, 1.6
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2310.11625v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
