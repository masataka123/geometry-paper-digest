---
layout: paper
title: Kähler-Einstein toric submanifolds of the projective space
title_ja: トーリックKähler–Einstein計量の射影誘導性への障害
authors: Antonio J. Di Scala, Martín Sombra
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AG
- math.CO
arxiv_abstract: We show that the K\"ahler-Einstein metrics on the four families of symmetric toric Fano manifolds due to Batyrev and Selivanova cannot be induced by immersions into projective spaces equipped with the Fubini-Study metric. We also show a similar conclusion for the non-symmetric examples discovered by Nill and Paffenholz. As an application we obtain that a centrally symmetric toric Fano manifold admits a K\"ahler-Einstein metric induced by a projective immersion if and only if it is a product of projective lines. These results confirm for each of these examples a broader conjecture characterizing the K\"ahler--Einstein metrics that can be induced by projective immersions.
topic: differential-geometry
tags:
- kahler-einstein-metrics
- fano-varieties
- toric-geometry
arxiv_id: 2512.03617v2
arxiv_url: https://arxiv.org/abs/2512.03617
arxiv_submitted: '2025-12-03'
arxiv_updated: '2026-10-28'
summary: Fano多様体にKähler–Einstein計量が存在しても、それが有限次元射影空間のFubini–Study計量の引き戻しになるとは限らない。本論文は対称トーリックFano多様体の四系列などで射影誘導性を否定し、中心対称の場合には射影直線の積だけが許されることを示す。
abstract_en: ''
summary_en: This work separates the existence of an Einstein metric from its realization inside finite-dimensional projective space. It develops an algebraic obstruction that can be detected on invariant toric surfaces. The resulting criterion yields a complete answer for centrally symmetric toric Fano manifolds and rules out several higher-dimensional families.
abstract_ja: 本論文は、トーリック多様体の射影はめ込みが誘導する計量について、Einstein条件をLaurent多項式の代数的条件へ移す。この条件が不変部分多様体に引き継がれることから、高次元の例に含まれる特定のトーリック曲面を障害として利用する。Batyrev–Selivanovaの四系列とNill–Paffenholzの非対称例を扱い、中心対称トーリックFano多様体に対して射影誘導Kähler–Einstein計量の存在を分類する。
abstract_source_url: https://arxiv.org/abs/2512.03617
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2512.03617v2](https://arxiv.org/abs/2512.03617)
- **著者:** Antonio J. Di Scala, Martín Sombra
- **初回投稿日:** 2025-12-03
- **最終更新日:** 2026-10-28
- **主分類・副分類:** math.DG（主分類）; math.AG, math.CO
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

射影空間のFubini–Study計量を複素部分多様体に制限しても、通常はEinstein計量にならない。逆に、すでに存在するKähler–Einstein計量が射影空間への正則はめ込みによって実現できるかは、計量の存在問題とは別の制約である。

本論文は高次元トーリックFano多様体に対してこの制約を調べる。Batyrev–Selivanovaが挙げた対称トーリックFano多様体の四系列では、Kähler–Einstein計量が存在するにもかかわらず、射影誘導計量にはならないことを示す。

中心対称トーリックFano多様体に限ると、射影誘導Kähler–Einstein計量を持つものは射影直線の積に尽きる。証明は次元ごとの全分類に依存する代わりに、不変曲面上で検出できる代数的障害を用いる。

## 背景と問題設定

問題となる条件は、ある正則はめ込み$\varphi:X\to\mathbb P^s$について

$$
g=\varphi^\ast g\_{\mathrm{FS}}
$$

と書けることである。Kähler–Einstein計量の存在を与えるK-polystabilityだけでは、この条件まで保証しない。IntroductionのConjecture 1.1は、コンパクトな射影誘導Kähler–Einstein多様体が等質であるという予想であり、本論文が一般の場合を解決するわけではない。

トーリックFano多様体が中心対称であるとは、扇が原点反転で保たれることである。対称とは扇の自己同型群の共通固定点が原点のみであることをいう。中心対称なら対称だが、逆は一般には成り立たない。

## 主結果

### 四系列の非存在（Theorem 1.2）

$X$が対称トーリックFano多様体の系列$V\_k,S\_{m,k},X\_{m,k},W\_m$のいずれかに属するなら、そのKähler–Einstein計量$g$は射影誘導ではない。これらはIntroductionがBatyrev–Selivanovaの例として挙げる系列であり、$V\_k$はトーリックdel Pezzo多様体である。各系列の詳しい扇の定義は本文のSection 4.2に譲られている。

この結果は、低次元での分類や完全線形系によるはめ込みに限定した従来の検討を超え、高次元の系列を一括して扱う。Nill–Paffenholzの複素次元7、8の非対称例についても、IntroductionはTheorem 4.10による同様の非存在を述べる。

### 中心対称の場合の特徴づけ（Corollary 1.3）

中心対称トーリックFano多様体$X$が射影誘導Kähler–Einstein計量を持つことと、

$$
X\simeq(\mathbb P^1)^n
$$

であることは同値である。中心対称の場合の既知の積分解と主定理を組み合わせることで、存在を許す因子を射影直線に絞る。

## 証明の見取り図

Calabiの剛性と臨界計量の性質により、はめ込みをトーラス作用と同変なものに帰着する。その単項式表示から正係数のLaurent多項式$p\_\varphi$を作り、Einstein条件を

$$
\mu(p\_\varphi)=p\_\varphi^n
$$

という多項式方程式へ翻訳する。ここで$\mu$は論文が定義する代数的微分作用素である。

さらに$\mu(p\_\varphi)$が$p\_\varphi^\kappa$を割るという一般化Einstein条件を導入する。Newton多面体と初期形式の因数分解を調べると、この条件は不変部分多様体へ遺伝する。対象の高次元多様体に含まれる特定の曲面がこの条件を満たさないことから、元の多様体の射影誘導性を排除する。すべての非積型トーリックFano多様体に同じ曲面障害が存在するかは、Introductionでは今後の問題として残される。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2512.03617)
- **Introduction:** [PDF](https://arxiv.org/pdf/2512.03617v2) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorem 1.2, Corollary 1.3; Theorems 4.9, 4.10への言及
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2512.03617v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
