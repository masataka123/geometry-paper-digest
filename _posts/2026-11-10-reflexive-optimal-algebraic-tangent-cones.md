---
layout: paper
title: Algebraic tangent cones of reflexive sheaves
title_ja: 反射層の最適代数的接錐とHecke変換による構成
authors: Xuemiao Chen, Song Sun
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AG
arxiv_abstract: We study the notion of algebraic tangent cones at singularities of reflexive sheaves. These correspond to extensions of reflexive sheaves across a negative divisor. We show the existence of optimal extensions in a constructive manner, and we prove the uniqueness in a suitable sense. The results here are an algebro-geometric counterpart of our previous study on singularities of Hermitian-Yang-Mills connections.
topic: differential-geometry
tags:
- vector-bundles-sheaves
- stability
- singularities
- hermite-einstein-metrics
arxiv_id: 1808.02172v1
arxiv_url: https://arxiv.org/abs/1808.02172v1
arxiv_submitted: '2018-08-07'
arxiv_updated: '2018-08-07'
summary: 反射層を原点の爆発上へ延長し、例外因子上の傾きの幅を1未満にする最適拡張を構成する。Hecke変換による有限回の改善と適切な意味での一意性を示し、HYM接続の解析的接錐との対応を予想として定式化する。
abstract_en: ''
summary_en: Extensions of a reflexive sheaf to a blowup need not have the same restriction to the exceptional divisor. Chen and Sun organize those choices by the spread of their Harder–Narasimhan slopes and identify an optimal range. Finite sequences of Hecke transforms reach that range, with a precise comparison theorem for the resulting extensions. The analytic interpretation in terms of Hermitian–Yang–Mills cones is formulated as a conjecture in this version, alongside known special cases.
abstract_ja: 反射層の特異点における代数的接錐を、爆発の負の例外因子を越える反射層の拡張によって定義する。Harder–Narasimhan傾きの最大値と最小値の差が1未満となる最適拡張が、有限回のHecke変換で得られることを示す。最適拡張そのものは一般に一意ではないが、適切な変換と随伴次数付き層を通じた一意性が成り立つ。
abstract_source_url: https://arxiv.org/abs/1808.02172v1
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:1808.02172v1](https://arxiv.org/abs/1808.02172v1)
- **著者:** Xuemiao Chen, Song Sun
- **初回投稿日:** 2018-08-07
- **最終更新日:** 2018-08-07
- **主分類・副分類:** math.DG（主分類）; math.AG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

反射層の特異点を調べるために原点を爆発すると、例外因子は射影空間になる。元の層をこの因子を越えて拡張し、その制限を取ることで、特異点の代数的な方向情報を表す接錐を得られる。しかし拡張の仕方は一般に一意ではない。

本論文は、例外因子上のHarder–Narasimhan傾きの幅が1未満となる「最適拡張」を導入する。任意の拡張から有限回のHecke変換で最適なものへ到達でき、最適なもの同士も特別な変換によって比較できることを示す。

最適は半安定と同義ではなく、最適拡張そのものの一意性も一般には成り立たない。重要なのは、同値関係や随伴次数付き層を通した適切な不変性である。これをHYM接続の解析的接錐へ結び付ける一般の対応は、この論文の確認バージョンでは予想として提示されている。

## 背景と問題設定

$B\subset\mathbb C^n$上の反射的連接層$\mathcal E$と、原点の爆発$p:\widehat B\to B$を考える。例外因子を$D=\mathbb P^{n-1}$とする。$\widehat B\setminus D$上で$p^\ast \mathcal E$に一致する反射層$\widehat{\mathcal E}$が拡張であり、その制限

$$
F=\widehat{\mathcal E}|\_D
$$

が代数的接錐である。この記事では、爆発上の拡張と射影空間上の制限を区別するため、後者を$F$と書く。

$[D]$は$D$の外で自明なので、$\widehat{\mathcal E}$と$\widehat{\mathcal E}\otimes[D]^{\otimes k}$は同じ元の層を延長する。このねじりによる違いを同値とする。より一般にはHecke変換による別の拡張も存在する。

$F$のHarder–Narasimhan分解の傾きを$\mu\_1>\cdots>\mu\_m$とすると

$$
\Phi(\widehat{\mathcal E})=\mu\_1-\mu\_m
$$

でその半安定性からのずれを測る。傾きは$\mathcal O\_D(1)$に関して取り、$\Phi=0$が半安定、$0\le\Phi<1$が最適の条件である。

## 主結果

### 主定理1：有限回での最適化と強い一意性条件（Theorem 1.4 (I), (II)）

任意の反射層$\mathcal E$は最適拡張を持つ。より具体的には、任意に選んだ拡張から有限回のHecke変換を施すことで最適拡張が得られる。

二つの拡張について

$$
\Phi(\widehat{\mathcal E}\_1)+\Phi(\widehat{\mathcal E}\_2)<1
$$

が成り立てば、それらは$[D]$の整数べきによるねじりを除いて同じである。特に半安定な拡張が一つでも存在すれば、それは同値を除いて唯一の最適拡張である。最適な二つの幅はそれぞれ1未満でも、その和は1以上になり得るため、一般の最適性だけではこの一意性は出ない。

### 主定理2：最適拡張同士の比較（Theorem 1.4 (III)）

二つの最適拡張は、一方を$[D]$の整数べきでねじった後、特別な型のHecke変換によって結ばれる。$F\_i=\widehat{\mathcal E}\_i|\_D$、$\operatorname{Gr}$をHarder–Narasimhan随伴次数付き層と書くと

$$
\psi'\_\ast \pi'^\ast \operatorname{Gr}(F\_1)
\simeq
\psi'\_\ast \pi'^\ast \operatorname{Gr}(F\_2)
$$

を得る。ここで$\pi':\mathbb C^n\setminus\lbrace 0\rbrace \to\mathbb P^{n-1}$は自然な射、$\psi'$は$\mathbb C^n$への包含である。拡張そのものが異なっても、錐上へ戻したこの層が一致することが、適切な意味での一意性を表す。

### 主定理3：斉次な層の場合（Theorem 1.4 (IV)）

$\mathcal E=\psi\_\ast \pi^\ast E$と射影空間上の反射層$E$から得られる場合には、$E$の部分的なHarder–Narasimhanフィルトレーションが定める次数付き層$\widetilde{\operatorname{Gr}}(E)$を制限として持つ最適拡張を選べる。さらに

$$
\psi'\_\ast \pi'^\ast \operatorname{Gr}^{\mathrm{HNS}}(F)
\simeq
\psi'\_\ast \pi'^\ast \operatorname{Gr}^{\mathrm{HNS}}(E)
$$

が成り立つ。$\operatorname{Gr}^{\mathrm{HNS}}$はHarder–Narasimhan–Seshadri分解の随伴次数付き層であり、単なるHarder–Narasimhan分解とは区別する。

### 最適でも半安定ではない例と解析的対応の予想

Introductionは$\mathcal O\oplus T\mathbb P^n$（$n\ge2$）から得られる斉次な層を例示する。制限を$T\mathbb P^n\oplus\mathcal O(1)$または$T\mathbb P^n\oplus\mathcal O(2)$とする最適拡張があり、その幅はそれぞれ$1/n$と$(n-1)/n$である。この例には半安定拡張がなく、最適拡張の厳密な一意性もない。

Conjecture 1.7は、許容HYM接続に対する解析的接錐の一意性と

$$
\mathcal E\_\infty\simeq
\psi'\_\ast \pi'^\ast \bigl(\operatorname{Gr}^{\mathrm{HNS}}(F)\bigr)^{\ast \ast },\qquad
\Sigma^{\mathrm{an}}=\pi'^{-1}\operatorname{Sing}\bigl(\operatorname{Gr}^{\mathrm{HNS}}(F)\bigr)
$$

および余次元2の成分に付く解析的・代数的重複度の一致を予想する。これを本論文の一般定理として読んではいけない。Introductionは、孤立斉次特異点などでは著者らの先行結果と本定理から対応が得られることを述べている。

## 証明の見取り図

主定理の構成的な部分は、傾きが広がりすぎた制限をHecke変換によって改良し、最適範囲まで有限回で到達させることである。そこでHarder–Narasimhanフィルトレーションが、どの部分層に沿って拡張を変えるかを組織する。

比較定理では、最適な拡張同士の差をねじりと特別な型のHecke変換へ制限する。Introductionは、例外因子の法束が負であることが本質的で、因子が射影空間であること自体は本質ではないと強調する。有限停止の詳しい評価や特殊な変換の定義は後続節に置かれているため、ここではそれらを再構成しない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/1808.02172v1)
- **Introduction:** [PDF](https://arxiv.org/pdf/1808.02172v1) — Section 1, pp. 1–4（Section 2より前）
- **Introduction中で言及された主要結果:** Definitions 1.1–1.3; Theorem 1.4; Remarks 1.5–1.6; Conjecture 1.7
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 1808.02172v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
