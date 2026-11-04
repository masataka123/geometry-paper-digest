---
layout: paper
title: Kähler-Ricci shrinkers and Fano fibrations
title_ja: Kähler–Ricci shrinkerの準射影性とFano fibration
authors: Song Sun, Junsheng Zhang
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AG
arxiv_abstract: In this paper, we build connections between K\"ahler-Ricci shrinkers, i.e., complete (possibly non-compact) shrinking gradient K\"ahler-Ricci solitons, and algebraic geometry. In particular, we (1). prove that a K\"ahler-Ricci shrinker is naturally a quasi-projective variety, using birational algebraic geometry; (2). formulate a conjecture relating the existence of K\"ahler-Ricci shrinkers and K-stability of polarized Fano fibrations, which unifies and extends the YTD type conjectures for K\"ahler-Einstein metrics, Ricci-flat K\"ahler cone metrics and compact K\"ahler-Ricci shrinkers; (3). formulate conjectures connecting tangent flows at singularities of K\"ahler-Ricci flows and algebraic geometry, via a 2-step degeneration for the weighted volume of a Fano fibration.
topic: differential-geometry
tags:
- kahler-ricci-flow-solitons
- noncompact-kahler-geometry
- k-stability
- birational-geometry
arxiv_id: 2410.09661v2
arxiv_url: https://arxiv.org/abs/2410.09661
arxiv_submitted: '2024-10-12'
arxiv_updated: '2025-03-09'
summary: 完備なKähler–Ricci shrinkerが自然に準射影多様体となることを、無限遠での追加幾何条件によらず双有理幾何を用いて示す。これを踏まえ、偏極Fano fibrationのK安定性とshrinkerの存在を結ぶ予想を定式化する。流の特異点における接流の一意性へ向けた二段階退化の構想も述べる。
abstract_en: ''
summary_en: Quasi-projectivity gives a common algebraic setting for complete Kähler–Ricci shrinkers, including noncompact examples. The paper proves this structural statement using boundedness results from birational geometry. It then proposes a stability criterion for existence on polarized Fano fibrations rather than claiming that criterion as a theorem. A further conjectural program uses weighted volume and two-step degenerations to describe tangent flows at singularities.
abstract_ja: 完備な縮小勾配Kähler–Ricci solitonを代数幾何へ結びつける研究である。準射影性を証明した上で、偏極Fano fibrationという枠組みの下に正のKähler–Einstein計量、Ricci-flat Kähler cone、コンパクトshrinkerを統合する存在と安定性の予想を提出する。重み付き体積を用いた二段階退化によって、非崩壊Kähler–Ricci流の接流を記述する将来の理論も提案する。
abstract_source_url: https://arxiv.org/abs/2410.09661
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2410.09661v2](https://arxiv.org/abs/2410.09661)
- **著者:** Song Sun, Junsheng Zhang
- **初回投稿日:** 2024-10-12
- **最終更新日:** 2025-03-09
- **主分類・副分類:** math.DG（主分類）; math.AG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kähler–Ricci流の特異点を拡大すると、縮小型の自己相似解であるKähler–Ricci shrinkerが自然に現れる。非コンパクトなshrinkerにも、射影的な代数幾何の手法を適用できる構造があるのかが出発点となる。

本論文は、任意の完備Kähler–Ricci shrinkerが自然に準射影多様体になることを証明する。無限遠で特別な曲率や漸近モデルを仮定して正則関数を構成する方法とは異なり、Fano型多様体に関する双有理幾何の有界性定理を使う。

この定理から、shrinkerを偏極Fano fibrationとして捉える枠組みが生まれる。著者らは、そのK-polystabilityとshrinkerの存在・一意性を結ぶYau–Tian–Donaldson型予想を提出する。これは準射影性の定理とは区別される未解決の一般的予想である。

さらに重み付き体積を使った二段階退化の構想を、Kähler–Ricci流の接流へ広げる。解析的な拡大極限が部分列に依存しないことを代数的に説明するのが目標であり、本論文だけで一般の接流の一意性を証明したわけではない。

## 背景と問題設定

Kähler–Ricci shrinkerは、完備Kähler多様体$(X,J,\omega)$と実関数$f$からなり、$J\nabla f$が正則Killingベクトル場で、

$$
\operatorname{Ric}(\omega)+\sqrt{-1}\partial\bar\partial f=\omega
$$

を満たすものをいう。コンパクトとは限らない。正のKähler–Einstein計量や、適切な特異解として考えるRicci-flat Kähler coneも、存在と安定性の統一的な構図の中で比較される。

コンパクトFanoの場合には正準計量とK安定性の対応が発展しているが、非コンパクトshrinkerを扱うには代数的対象そのものを適切に定める必要がある。本論文は偏極Fano fibrationと、その重み付き体積を導入してこの役割を担わせる。Introductionには詳細な定義や体積の式は置かれていないため、本記事では後続節の定義を推測して補わない。

## 主結果

### Shrinkerの準射影性（Theorem 1.1）

任意のKähler–Ricci shrinkerは自然に準射影多様体となる。証明からは、さらに偏極Fano fibrationを自然に定めることが得られると説明される。

この定理には、無限遠での追加の特別な幾何仮定は掲げられていない。完備な微分幾何的対象を代数多様体として扱えることが、その後のK安定性の問題を立てる第一歩になる。

### 存在とK-polystabilityの対応予想（Conjecture 1.2）

偏極Fano fibration$(\pi:X\to Y,\xi)$について、shrinkerが存在し$\operatorname{Aut}(X,\xi)$の作用を除いて一意であることと、K-polystableであることが同値であると予想する。

$X$に特異点を許す場合には、多重ポテンシャル論の意味での適切な弱解が必要となる。正のKähler–Einstein計量、Ricci-flat cone、コンパクトshrinkerに関する既知の対応を包含する一般化であり、本論文でその全体が解決されたとは述べられていない。

### 接流と二段階退化の構想

Introductionでは、重み付き体積$\mathbb W$をFano fibrationの局所不変量として用い、非崩壊Kähler–Ricci流の時空間特異点から生じる接流を二段階の代数的退化で記述する一連の予想が説明される。この不変量は、klt特異点のnormalized volumeとFano多様体の既存の不変量を統合する役割をもつ。

狙いは、拡大の部分列によらない接流の一意性と、最適退化の代数的不変性である。Introductionで示されるのは研究計画と既存結果との接続であり、一般の場合の確定した分類定理ではない。

## 証明の見取り図

準射影性の証明に関してIntroductionが明示する主要な道具は、BirkarによるFano型多様体の有界性定理である。通常の解析的なコンパクト化の手法が無限遠の条件を必要としやすいのに対し、双有理幾何から代数的な構造を得る方針を取る。導入部には全構成の詳細はないため、それ以上の証明を再構成しない。

接流に関する構想は、Kähler–Einstein計量の接錐と付値による二段階退化の先行理論を放物型の状況へ広げるものである。コンパクトFano上の長時間Kähler–Ricci流に関する既知の最適退化と比較しながら、一般のFano fibrationへ対象を拡張している。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2410.09661)
- **Introduction:** [PDF](https://arxiv.org/pdf/2410.09661v2) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorem 1.1; Conjecture 1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2410.09661v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
