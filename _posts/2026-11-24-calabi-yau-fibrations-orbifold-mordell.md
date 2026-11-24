---
layout: paper
title: Calabi-Yau fibrations and orbifold Mordell
title_ja: Calabi–Yau超曲面の族とオービフォールドMordell予想
authors: Ariyan Javanpeykar
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.NT
arxiv_abstract: We construct isotrivial projective families of Calabi-Yau varieties with arbitrarily large inf-multiplicities and no divisible fibres over the projective line. As an application, we show that any single instance of Campana's Orbifold Mordell Conjecture for a general-type C-pair of genus at most one (with only finite multiplicities) implies that the Weakly Special Conjecture is false.
topic: algebraic-geometry
tags:
- calabi-yau-geometry
arxiv_id: 2611.27727v1
arxiv_url: https://arxiv.org/abs/2611.27727
arxiv_submitted: '2026-11-20'
arxiv_updated: '2026-11-20'
summary: 数体上の種数1以下の曲線対についてオービフォールドMordell予想が一例でも成立すれば、弱特殊多様体の有理点の潜在稠密性予想は偽となる。底の重複度を制御したCalabi–Yau超曲面の族がこの含意を与える。
abstract_en: ''
summary_en: Multiplicities in a single fibre can have a large minimum even when their greatest common divisor is one. A family of diagonal hypersurfaces realizes this discrepancy over a prescribed divisor on a curve. Finiteness of the relevant Campana points would then confine rational points on the total space to finitely many fibres over each finite field extension.
abstract_ja: ファイバーの各成分の重複度について、最小値と最大公約数は異なる情報を持つ。著者はこの差を指定した閉点で実現し、弱特殊性を保ちながら底の整点に強い制約を課す。
abstract_source_url: https://arxiv.org/abs/2611.27727
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.27727v1](https://arxiv.org/abs/2611.27727)
- **著者:** Ariyan Javanpeykar
- **初回投稿日:** 2026-11-20
- **最終更新日:** 2026-11-20
- **主分類・副分類:** math.AG（主分類）; math.NT
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

数体上の射影多様体に対し、有限次拡大を一度行えば有理点がZariski稠密になるかを問うことができる。弱特殊多様体はこの性質を持つと予想されてきた。

一方、Campanaの曲線対では、底の各点に付けた重複度が許容される整点を制限する。著者は任意に指定した種数1以下の一般型の曲線対の上に、弱特殊な全空間を持つ族を構成する。

その曲線対で予想される整点の有限性が成り立つと、有理点が写る先は有限個のファイバーに限られる。幾何学的な族の構成は無条件で、稠密性に対する反例という数論的結論には仮定が残る。

## 背景と問題設定

曲線対 $(C,\Delta)$ が一般型とは $\deg(K\_C+\Delta)>0$ となることである。ファイバーの成分の重複度の最小値はオービフォールド底を定める。一方で、それらの最大公約数が1なら、ファイバー全体は整数倍の因子にはならない。

## 主結果

### 弱特殊予想への含意（Theorem A）

数体上の滑らかで固有な一般型の曲線対 $(C,\Delta)$ で $g(C)\leq1$ となるものが一つでもオービフォールドMordell予想を満たせば、弱特殊予想は偽である。

### 指定した底を持つ族（Theorem B）

$\Delta=\sum\_i(1-1/m\_i)D\_i$ の被約な台を $S$ とし、すべての $m\_i$ 以上の素数 $p$ と、それより大きい素数 $q$ を選ぶ。滑らかな射影弱特殊多様体からの等自明なファイブレーション $f:X\to C$ が存在し、一般ファイバーは $\mathbb P^{pq-1}\_{K(C)}$ の滑らかな次数 $pq$ の超曲面である。幾何学的ファイバーに可除なものはなく、底の境界は

$$
\Delta\_f=(1-1/p)S\geq\Delta
$$

となる。仮定した整点有限性の下では、各有限次拡大 $L/K$ に対し $f(X(L))$ は有限である。

## 証明の見取り図

Langの対角超曲面を出発点とする。局所体 $\mathbb C((t^{1/e}))$ 上に点を持つ条件が $p\mid e$ または $q\mid e$ となるため、最小次数と指数が食い違う。基底変換でこの現象を所定の点に配置し、Campanaの整点に関する補題を射影された有理点に適用する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.27727)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.27727v1) — §1（pp. 1–3）
- **Introduction中で言及された主要結果:** Theorems A, B
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.27727v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
