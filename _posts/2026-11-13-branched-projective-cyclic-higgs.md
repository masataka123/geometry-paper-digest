---
layout: paper
title: Branched real projective structures on surfaces, cyclic Higgs Bundles and Anosov representations
title_ja: 巡回Higgs束から作る分岐実射影構造
authors: Gianluca Faraco, Nicholas Rungi
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.CV
- math.GT
arxiv_abstract: We use the theory of $3$-cyclic $\mathrm{SL}(3,\mathbb{R})$-Higgs bundles to study real branched projective structures on compact surfaces recently introduced by the authors. After fixing a Riemann surface structure on $S$, the Higgs bundle approach allows us, on the one hand, to construct branched structures with prescribed branching data and, on the other hand, to introduce new classes of such structures. The latter are directly related to singular hyperbolic affine spheres and carry a Blaschke metric with conical singularities. In the final part of the paper, using different methods, we prove that every Anosov surface group representation into $\mathrm{SL}(3,\mathbb{R})$ is either Hitchin or belongs to the Barbot component. As a by-product, we obtain that some of the representations associated with the branched structures constructed above are not Anosov.
topic: differential-geometry
tags:
- higgs-nonabelian-hodge
- moduli
- curvature
arxiv_id: 2611.12101v1
arxiv_url: https://arxiv.org/abs/2611.12101
arxiv_submitted: '2026-11-09'
arxiv_updated: '2026-11-09'
summary: 曲面上の3巡回SL(3,R)-Higgs束を使い、分岐データを制御した実射影構造を構成する。特異Blaschke計量との関係を明示するとともに、Anosov表現がHitchin成分またはBarbot成分に限られることを位相的不変量から示す。
abstract_en: We use the theory of $3$-cyclic $\mathrm{SL}(3,\mathbb{R})$-Higgs bundles to study real branched projective structures on compact surfaces recently introduced by the authors. After fixing a Riemann surface structure on $S$, the Higgs bundle approach allows us, on the one hand, to construct branched structures with prescribed branching data and, on the other hand, to introduce new classes of such structures. The latter are directly related to singular hyperbolic affine spheres and carry a Blaschke metric with conical singularities. In the final part of the paper, using different methods, we prove that every Anosov surface group representation into $\mathrm{SL}(3,\mathbb{R})$ is either Hitchin or belongs to the Barbot component. As a by-product, we obtain that some of the representations associated with the branched structures constructed above are not Anosov.
summary_en: ''
abstract_ja: 固定したRiemann面上の巡回Higgs束から、円錐特異点を持つ双曲アフィン球面型の分岐実射影構造を作る。分岐の総次数には広い許容範囲があり、一定範囲では分岐因子自体を指定できる。付随する計量と3次微分を正則データで記述し、次数の符号によって異なる曲率現象を示す。別の位相的議論により非Hitchin Anosov表現の第2 Stiefel–Whitney数を決定し、構成した表現の一部が非Anosovであると分かる。
abstract_source_url: https://arxiv.org/abs/2611.12101
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.12101v1](https://arxiv.org/abs/2611.12101)
- **著者:** Gianluca Faraco, Nicholas Rungi
- **初回投稿日:** 2026-11-09
- **最終更新日:** 2026-11-09
- **主分類・副分類:** math.DG（主分類）; math.CV, math.GT
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

曲面の実射影構造を分岐点まで許して考えると、どの表現がそのホロノミーになり、分岐の位置と次数をどこまで指定できるかが問題となる。本論文はRiemann面構造を固定し、3巡回Higgs束の正則データからこの問題に取り組む。

構成される構造は、円錐特異点を持つ双曲アフィン球面へ展開写像を持ち上げられるという追加の幾何を備える。分岐因子、Blaschke計量、Pick微分がHiggs束の切断と調和計量で記述されるため、存在だけでなく曲率の性質も調べられる。

一方、Higgs束から構成されたホロノミーが自動的にAnosovになるわけではない。著者らは独立した位相的議論により、非Hitchin Anosov表現のStiefel–Whitney数を制限し、構成した族の一部がAnosovにならないことを示す。残る次数の場合の判定は未解決として区別する。

## 背景と問題設定

種数 $g\geq2$ の閉有向曲面 $S$ にRiemann面構造 $X$ を固定する。対象の安定3巡回Higgs束は、次数 $d$ の線束 $L$ と
$$
0\neq\gamma\in H^0(X,K\otimes L^{-1}),\qquad
\nu\in H^0(X,K\otimes L^2)
$$
で記述される。正の系列は $0<d\leq2g-2$、負の系列は $1-g\leq d<0$ で、後者では $\nu\neq0$ を要求する。分岐因子は $D=\operatorname{div}(\gamma)$ であり、$\deg D=2g-2-d$ となる。$h$ はHitchin方程式を解く $L$ 上のHermitian計量である。

## 主結果

### 分岐の指定（Theorem A）

任意の整数 $1\leq n\leq3g-3$、$n\neq2g-2$ に対し、総分岐次数 $n$ の双曲アフィン球面型分岐実射影構造の族が存在する。さらに $0<n<2g-2$ なら、次数だけでなく任意の有効因子を分岐因子として指定できる。上限と除外値は定理の仮定の一部である。

### Higgs束の表現の幾何化（Theorem C）

上記の正・負の系列の非可換Hodge像を $\mathcal R\_d^+(X)$、$\mathcal R\_d^-(X)$ とすると、その各表現は双曲アフィン球面型分岐射影構造のホロノミーとなる。Introductionではこれらが実次元 $6g-6+2d$ の適切な指標多様体の部分多様体として実現されることも説明される。分岐次数を細分した層への実現についてはCorollary Dが述べられている。

### 計量と3次微分の具体式（Theorem E）

展開写像の持ち上げから得られる特異双曲アフィン球面のBlaschke計量とPick微分は
$$
G\_B=2h^{-1}|\gamma|^2,\qquad q\_3=-2\nu\gamma^2
$$
である。特に3次微分は分岐点で少なくとも分岐次数の二倍だけ消え、円錐特異点と正則データの関係を明示する。

### 曲率と次数の対照（Theorem F）

$0<d<2g-2$ かつ $\operatorname{div}(\gamma)<\operatorname{div}(\nu)$ なら、Gaussian曲率 $K\_{G\_B}$ は $X$ 全体で厳密に負の連続関数へ延長し、
$$
\Vert q\_3\Vert \_{G\_B}^2<\frac12
$$
となる。負の次数域では同じ結論ではない。Introductionは、逆向きの因子条件の下で分岐点の外で正曲率となる場合を説明する。また因子条件なしでも、$d<0$ なら
$$
\int\_{X\setminus Z(\gamma)}K\_{G\_B}\thinspace dA\_{G\_B}
=2\pi\bigl(\chi(S)+\deg D\bigr)=-2\pi d>0
$$
となる。名称が「双曲アフィン球面」であることと、誘導計量のGaussian曲率が常に負であることは同じではない。

### Anosov表現の位相的制約（Theorems B, G）

非HitchinなAnosov表現 $\rho:\pi\_1S\to\mathrm{SL}(3,\mathbb R)$ は
$$
w\_2(\rho)\equiv g-1\pmod2
$$
を満たす。したがって任意のAnosov表現はHitchin成分かBarbot成分に属する。後者はFuchsian表現を可約な $\mathrm{SL}(2,\mathbb R)\to\mathrm{SL}(3,\mathbb R)$ で合成した表現を含む成分である。構成した族で $d\not\equiv g-1\pmod2$ かつ $d\neq2g-2$ なら非Anosovと分かるが、残る中間次数の場合を一律に判定する結果ではない。

## 証明の見取り図

幾何構造の構成は3巡回Higgs束の正則切断とHitchin方程式の調和計量を使う。零因子が分岐データを制御し、計量方程式に最大値原理を適用して曲率と3次微分の評価を得る。

Anosov性への障害は別の経路で示す。Barbotによる極限曲線の位相的特徴付けと、単位接束上の境界写像から得られる三つの実直線束を使う。その第1 Stiefel–Whitney類と曲面上の平坦束の第2類を結び付け、上記の合同式を導く。偶奇条件を満たす残りの族のAnosov性は、IntroductionのQuestion 1.1に残される。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.12101)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.12101v1) — Section 1, pp. 1–6
- **Introduction中で言及された主要結果:** Theorems A–C, E–G；Corollary Dの紹介
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.12101v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
