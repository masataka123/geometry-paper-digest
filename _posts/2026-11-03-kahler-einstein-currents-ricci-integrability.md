---
layout: paper
title: On Kähler-Einstein Currents
title_ja: 特異Kähler–Einstein計量の下からの正値性とRCD性
authors: Yifan Chen, Shih-Kai Chiu, Max Hallgren, Gábor Székelyhidi, Tat Dat Tô, Freid Tong
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We show that a general class of singular K\"ahler metrics with Ricci curvature bounded below define K\"ahler currents. In particular the result applies to singular K\"ahler-Einstein metrics on klt pairs, and an analogous result holds for K\"ahler-Ricci solitons. In addition we show that if a singular K\"ahler-Einstein metric can be approximated by smooth metrics on a resolution whose Ricci curvature has negative part that is bounded uniformly in $L^p$ for $p > \frac{2n-1}{n}$, then the metric defines an RCD space.
topic: differential-geometry
tags:
- kahler-einstein-metrics
- singularities
- pluripotential-theory
- metric-limits
- kahler-ricci-flow-solitons
arxiv_id: 2502.09825v1
arxiv_url: https://arxiv.org/abs/2502.09825
arxiv_submitted: '2025-02-13'
arxiv_updated: '2025-02-13'
summary: klt対上の特異Kähler–Einstein計量が、滑らかな基準計量を一様に下から支配するKählerカレントとなることを示す。さらに解消上の適切な近似計量についてRicci曲率の負の部分を積分的に制御できれば、距離完備化が非崩壊RCD空間となる。
abstract_en: We show that a general class of singular K\"ahler metrics with Ricci curvature bounded below define K\"ahler currents. In particular the result applies to singular K\"ahler-Einstein metrics on klt pairs, and an analogous result holds for K\"ahler-Ricci solitons. In addition we show that if a singular K\"ahler-Einstein metric can be approximated by smooth metrics on a resolution whose Ricci curvature has negative part that is bounded uniformly in $L^p$ for $p > \frac{2n-1}{n}$, then the metric defines an RCD space.
summary_en: ''
abstract_ja: Ricci曲率が下から制御され、体積密度に積分条件を満たす特異Kähler計量は、滑らかな基準計量を正の定数倍で下から支配する。この結果はklt対上の特異Kähler–Einstein計量に適用され、縮小Kähler–Ricciソリトンにも同様の結論が成り立つ。また複素次元nで、解消上のtameな滑らかな近似計量のRicci曲率の負の部分がp>(2n−1)/nに対するLpノルムで一様有界なら、距離完備化は非崩壊RCD空間となる。
abstract_source_url: https://arxiv.org/abs/2502.09825
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2502.09825v1](https://arxiv.org/abs/2502.09825)
- **著者:** Yifan Chen, Shih-Kai Chiu, Max Hallgren, Gábor Székelyhidi, Tat Dat Tô, Freid Tong
- **初回投稿日:** 2025-02-13
- **最終更新日:** 2025-02-13
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

特異Kähler–Einstein計量は正則部分上では滑らかな計量であるが、特異点へ近づく際にも固定した滑らかな計量を一様に下から支配するとは、定義だけからは明らかでない。本論文はklt対上の特異Kähler–Einstein計量についてこの正値性を示し、Kählerカレントであることを確立する。

主張は、Einstein方程式を満たす場合より広い、Ricci下界と体積密度の積分条件を持つ正カレントから導かれる。縮小Kähler–Ricciソリトンにも同種の結論が成り立つ。従来用いられた近似計量の点ごとのRicci下界を、積分的な制御へ緩めることが主要な工夫である。

別の主結果は距離完備化のRCD性である。こちらには、解消上のtame近似に対するRicci曲率の負の部分の一様な積分評価を追加する。Kählerカレント性が無条件に示されることと、RCD性に追加仮定が必要であることを区別する必要がある。

## 背景と問題設定

klt対 $(X,D)$ 上の特異Kähler–Einstein計量を、正則部分から因子を除いた $X^{\mathrm{reg}}\setminus D$ で考える。$D$ の滑らかな部分では、その係数に対応する錐特異性を持つ。ここでKählerカレント性とは、滑らかな基準Kähler計量 $\omega\_X$ に対して、ある $\varepsilon>0$ が存在して

$$
\omega>\varepsilon\omega\_X
$$

となることである。特異計量が単に半正値であることより強い。

先行研究では平滑化可能な多様体や、Ricci曲率が負または零の3次元の場合などが扱われていた。著者らは、滑らかな近似と熱核評価を組み合わせ、近似の曲率に要求する条件を弱める。

## 主結果

### klt対上のEinstein計量はKählerカレント（Theorem 1.1）

klt対 $(X,D)$ 上の特異Kähler–Einstein計量 $\omega$ はKählerカレントである。すなわち任意の滑らかな基準Kähler計量に対し、上記の正の一様下界を持つ。平滑化可能性や次元3という従来の制約を主定理の仮定として課していない。

### Ricci下界を持つ正カレントの一般定理（Theorem 1.2）

$(X,\omega\_X)$ をコンパクト正規Kähler空間とし、有界ポテンシャルを持つ正カレント

$$
\omega=\omega\_X+i\partial\bar\partial u
$$

について、次を仮定する。

- ある因子 $D$ の外 $X^{\mathrm{reg}}\setminus D$ で $u$ は滑らかである。
- $\omega^n=e^F\omega\_X^n$ で、ある $p>1$ に対し $e^F\in L^p(\omega\_X)$、かつ $F\in L^1(\omega\_X)$ である。
- 正則部分でカレントの意味の下界 $\operatorname{Ric}(\omega)\geq-A(\omega+\omega\_X)$ が成り立つ。

このとき

$$
\omega>C^{-1}\omega\_X
$$

となる。$C$ は $A,p,\Vert e^F\Vert \_{L^p}$ の上界と基準空間に依存する。Einstein計量の結果は、このより広い条件から得られる。

### 縮小ソリトンへの拡張（Theorem 1.3）

klt対上の特異縮小Kähler–Ricciソリトン $(X,\omega,V)$ もKählerカレントである。Einstein計量に対する結論を、ベクトル場を伴う自己相似的な設定へ拡張する結果である。

### 積分的なRicci制御から非崩壊RCD性へ（Theorem 1.5）

まずDefinition 1.4のtame近似を確認する。解消 $\pi:Y\to X$ は $X^{\mathrm{reg}}\setminus D$ 上で双正則とし、$Y$ 上の滑らかなKähler計量を

$$
\omega\_\varepsilon=\pi^\ast \omega\_X+\varepsilon\omega\_Y
+i\partial\bar\partial u\_\varepsilon
$$

と書く。正則部分の逆像上で $\pi^\ast \omega$ へ局所滑らかに収束し、ある $q>1$ と一様な $C$ に対して

$$
\sup\_Y|u\_\varepsilon|<C,\qquad
\int\_Y\left(\frac{\omega\_\varepsilon^n}{\omega\_Y^n}\right)^q\omega\_Y^n<C
$$

を満たすものがtame近似である。ここでは、後の曲率条件の指数と区別するため密度の指数を $q$ と書いた。

$\omega$ をklt対上の特異Kähler–Einstein計量とし、このtame近似がさらに

$$
\Vert \operatorname{Ric}^{-}(\omega\_\varepsilon)\Vert \_{L^p(\omega\_\varepsilon)}<C,
\qquad p>\frac{2n-1}{n}
$$

を満たすなら、$(X^{\mathrm{reg}}\setminus D,\omega)$ の距離完備化 $\widehat X$ は、体積測度 $\omega^n$ を伴う非崩壊RCD空間となる。$n$ は複素次元であり、定数は $\varepsilon$ に依存しない。

この主張は定数スカラー曲率計量による近似を要求した先行結果を強める。序論は $p=2$ の場合にextremal Kähler計量による近似へ応用できると述べるが、任意の特異計量について上記の積分条件が自動的に成立するとは主張していない。

## 証明の見取り図

一般の正カレントに対してtame近似を構成し、Ricci下界からのずれの負の部分を $L^1$ で零へ近づける。tame条件によりGuo–Phong–Song–Sturmの熱核評価を近似列へ一様に適用でき、下からの計量評価を極限へ移す。点ごとのRicci下界を近似全体で維持することを要求しない点が、従来法との違いである。

RCD性では、固有関数の勾配に対する改良Kato不等式を用いて、必要な積分指数の範囲を改善する。Introductionが説明する証明方針はこの範囲であり、後続節の解析的な評価全体の検証は行っていない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2502.09825)
- **Introduction:** [PDF](https://arxiv.org/pdf/2502.09825v1) — Section 1, pp. 1–3（Section 2開始前まで）
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2, 1.3, 1.5; Definition 1.4
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2502.09825v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
