---
layout: paper
title: "Campana rational connectedness and weak approximation"
title_ja: "Campana有理連結性と弱近似"
authors: "Qile Chen, Brian Lehmann, Sho Tanimoto"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  Campana introduced a notion of Campana rational connectedness for Campana orbifolds. Given a Campana fibration over a complex curve, we prove that a version of weak approximation for Campana sections holds at places of good reduction when the general fiber satisfies a slightly stronger version of Campana rational connectedness. Campana also conjectured that any Fano orbifold is Campana rationally connected; we verify a stronger statement for toric Campana orbifolds. A key tool in our study is log geometry and moduli stacks of stable log maps.
topic: algebraic-geometry
tags:
  - fano-varieties
  - moduli
  - toric-geometry
arxiv_id: "2406.04991v2"
arxiv_url: "https://arxiv.org/abs/2406.04991"
arxiv_submitted: "2024-06-07"
arxiv_updated: "2025-04-22"
summary: >-
  曲線上のCampanaファイブレーションに対し、一般ファイバーの強Campana単線織性を仮定して良い還元の場所でのCampana切断の弱近似を証明する。さらにトーリックCampanaオービフォールドが強Campana単線織かつCampana有理連結であることを示す。
abstract_en: ""
summary_en: >-
  The authors develop Campana curves and sections through logarithmic stable maps. Under rational connectedness and a strengthened Campana-uniruledness assumption on general fibers, prescribed Campana jets at good places can be realized by a global Campana section. They also establish strong Campana uniruledness and rational connectedness for toric Campana orbifolds.
abstract_ja: >-
  Campanaオービフォールド上の曲線と切断を対数安定写像のモジュライを用いて定式化する。曲線上のCampanaファイブレーションでは、一般ファイバーが有理連結かつ強Campana単線織であれば、良い還元の場所で指定した有限個のCampanaジェットを一つのCampana切断で実現できる。トーリックCampanaオービフォールドについては、CampanaのFanoオービフォールド予想より強い連結性を証明する。
abstract_source_url: "https://arxiv.org/abs/2406.04991"
license_name: "Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International"
license_url: "https://creativecommons.org/licenses/by-nc-nd/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2406.04991](https://arxiv.org/abs/2406.04991)
- **著者:** Qile Chen, Brian Lehmann, Sho Tanimoto
- **初回投稿日:** 2024年6月7日
- **最終更新日:** 2025年4月22日
- **主分類・副分類:** math.AG
- **ライセンス:** [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)

## 要約

関数体上の有理点は曲線上のファイブレーションの切断として理解でき、有理連結な一般ファイバーについては切断の存在と良い還元の場所での弱近似が知られている。本論文は、有理点と整点を補間するCampana点に対応する切断へこの枠組みを拡張する。

境界成分 $\Delta_i$ に重み $1-1/m_i$ を付け、接触するなら接触次数が少なくとも $m_i$ となる対数安定写像をCampana曲線とする。この接触条件を対数変形で保持することが主要な技術である。

一般ファイバーが有理連結かつ強Campana単線織なら、有限個の許容Campanaジェットを大域的なCampana切断で実現できる。さらに滑らかな射影トーリック多様体とトーラス不変境界からなるCampanaオービフォールドでは、強Campana単線織性とCampana有理連結性を示す。

## 背景と問題設定

滑らかな射影多様体 $X$ と単純正規交叉因子 $\Delta=\bigcup_i\Delta_i$ に対し、

$$
\Delta_\epsilon=\sum_i\left(1-\frac1{m_i}\right)\Delta_i
$$

を考える。標点での $\Delta_i$ との接触次数 $c_{k,i}$ が非零なら $c_{k,i}\ge m_i$ を課す。Campana有理連結性は、二つの一般点を通る種数零Campana曲線の支配族の存在である。

## 主結果

### 弱近似（Theorem 1.6）

標数零の代数閉体上、$\pi:(\mathcal X,\Delta_\epsilon)\to B$ を曲線上のklt Campanaファイブレーションとする。一般ファイバーが有理連結かつ強Campana単線織であり、有限集合 $S\subset B$ の外で通常の弱近似が成り立つなら、$S$ 外の相異なるファイバーに台をもつ任意の有限個のCampanaジェットは一つのCampana切断から誘導される。

### トーリックオービフォールド（Theorem 1.8）

$X$ を滑らかな射影トーリック多様体、$\Delta$ をトーラス不変境界とする。標数零では任意のklt Campanaオービフォールド $(X,\Delta_\epsilon)$ は強Campana単線織であり、Campana有理連結である。これはFano性を仮定せず、Introductionで述べられたCampana予想のトーリックな場合より強い。

## 証明の見取り図

対数安定写像の変形理論で接触次数を固定し、自由・非常に自由な対数有理曲線とCampana単線織性・有理連結性を対応させる。切断に適切なCampana曲線を付加して対数写像を作り、変形により節点を平滑化しながら指定ジェットを実現する。トーリックの場合はトーラス作用と対数接束の構造を利用して必要な自由Campana曲線を構成する。

## 原論文との対応

- **Abstractページ:** [arXiv:2406.04991](https://arxiv.org/abs/2406.04991)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorems 1.6, 1.8; Corollaries 1.7, 1.10
- **論文構成の説明:** Section 1.4, p. 5
- **確認したarXivバージョン:** v2
- **確認したライセンス:** CC BY-NC-ND 4.0
- **source_scope:** Abstract and Introduction
