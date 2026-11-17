---
layout: paper
title: Stability of the tangent bundle on del Pezzo surfaces
title_ja: del Pezzo曲面の接束のBridgeland安定性閾値
authors: Tristan Collins, Jason Lo, Yun Shi, Shing-Tung Yau
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: In this article, we study the Bridgeland stability of the tangent bundle on del Pezzo surfaces. We obtain a complete description of the region where the tangent bundle is (un)stable with respect to the standard Bridgeland stability conditions associated to the anticanonical polarization.
topic: algebraic-geometry
tags:
- fano-varieties
- vector-bundles-sheaves
- stability
arxiv_id: 2611.19797v1
arxiv_url: https://arxiv.org/abs/2611.19797
arxiv_submitted: '2026-11-15'
arxiv_updated: '2026-11-15'
summary: 反標準偏極を持つdel Pezzo曲面上で、接束のBridgeland安定性が体積パラメータにどう依存するかを決定する。射影平面の一般位置の点でのblowupについて、半安定性を失う正確な閾値を与え、正の閾値が現れる場合とK不安定な場合の一致を示す。
abstract_en: ''
summary_en: The tangent bundle provides a higher-rank test object for comparing geometric PDEs with stability in a derived category. This paper determines its stability thresholds along the anticanonical family on blowups of the projective plane. The one-point blowup remains strictly semistable beyond its threshold, while the other cases become stable. These algebraic conclusions do not by themselves establish solvability of the Leung–Yau–Zaslow equation.
abstract_ja: 本論文はdel Pezzo曲面の接束を、反標準偏極に付随する標準的なBridgeland安定性条件で調べる。射影平面を一般位置の0〜8点でblowupした曲面について、安定・半安定・不安定となるパラメータ領域の境界を具体的に決める。特に1点blowupと2点blowupでは正の閾値が現れ、1点blowupには閾値以上でも狭義半安定性が残る。
abstract_source_url: https://arxiv.org/abs/2611.19797
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.19797v1](https://arxiv.org/abs/2611.19797)
- **著者:** Tristan Collins, Jason Lo, Yun Shi, Shing-Tung Yau
- **初回投稿日:** 2026-11-15
- **最終更新日:** 2026-11-15
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

接束の安定性は曲面の曲率や標準計量と関係するが、傾き安定性からBridgeland安定性へ移ると、Kähler類の大きさに応じた壁越えが現れる。本論文はFano曲面の基本例であるdel Pezzo曲面について、この壁の正確な位置を求める。

対象は射影平面を一般位置の $n$ 点でblowupした曲面 $X\_n$ で、$0\le n\le8$ とする。反標準類の正の倍数に対応する安定性条件 $\sigma\_{-tK\_{X\_n}}$ に沿って、接束が半安定になる閾値を完全に計算する。

閾値が正となるのは $n=1,2$ の場合だけである。これは、この族の曲面がK不安定となる場合と一致する。ただし、この一致から解析的方程式の解の存在との一般的同値を結論しているわけではない。1点blowupでは閾値を超えても安定ではなく狭義半安定にとどまる。

## 背景と問題設定

Leung–Yau–Zaslow方程式は、正則ベクトル束のHermitian計量の曲率を用いる非線形方程式である。大体積極限ではHermitian–Yang–Mills方程式に近づくため、Donaldson–Uhlenbeck–Yau対応を背景に、Bridgeland安定性との関係が期待される。しかし素朴な「解の存在とBridgeland安定性の同値」はそのままでは偽であり、Introductionはこの点を明確に注意する。

線束の場合に比べ、高階数束の解析と安定性には未解明な部分が多い。接束を固定し、偏極だけを縮小して、いつ代数的な不安定化が起こるかを調べるのが本論文の立場である。$X\_n$ では $K\_{X\_n}^2=9-n$ である。

## 主結果

### 主定理（Theorem 1.1）

接束 $T\_{X\_n}$ は $t>t\_0$ で $\sigma\_{-tK\_{X\_n}}$-半安定、$0<t<t\_0$ で不安定となる。正確な閾値はTable 1により

$$
t\_0=\begin{cases}
\sqrt{1/2},&n=1,\\
\sqrt{2/7},&n=2,\\
0,&n=0,3,4,5,6,7,8.
\end{cases}
$$

さらに $n\ne1$ なら $t>t\_0$ で安定である。$n=1$ では $t\ge t\_0$ の全域で狭義半安定となる。ここで、後者以外の境界 $t=t\_0$ について、Introductionの定理にない断定は加えない。

この結果は単なる壁の上界ではなく、最外壁の正確な位置を与える。Introductionによれば、1点・2点blowupについては実際の不安定化対象も後続のSection 4で記述される。主定理の対象は明記された $X\_n$ であり、別型の次数8曲面まで無条件に同一視しない。

## 証明の見取り図

Introductionの構成説明では、まずBridgeland安定性と最外壁の準備を行い、Section 3で接束の最外壁の一般的な上界を導く。次にSection 4で、その上界より内側に残る壁を分析し、正確な閾値と不安定化対象を決める。数値計算の補助も言及されるが、ここではスクリプトを実行せず、Introductionと表に記された結論を紹介する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.19797)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.19797v1) — Section 1, pp. 1–3（Table 1を含む）
- **Introduction中で言及された主要結果:** Theorem 1.1、Table 1
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.19797v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
